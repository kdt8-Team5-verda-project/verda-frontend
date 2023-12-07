"use client";

import { useEffect, Fragment } from "react";
import Link from "next/link";
import { useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";
import ButtonListTitle from "@/Components/Molecure/Button-jsh/List/ButtonListTitle";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";

export default function ClientRequerstList() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const getClientRequerstList = async (
    pageParam: null | number = 99999,
  ): Promise<any> => {
    const res = await fetch(
      `${process.env.BASE_URL}/api/board?lastPostId=${pageParam}&size=20`,
      {
        method: "GET",
      },
    );

    return res.json();
  };
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ["specialPostList"],
    ({ pageParam = 99999 }) => getClientRequerstList(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = lastPage[lastPage.length - 1].postId;
        return nextPage === 1 ? false : nextPage;
      },
    },
  );

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <section>
      <TextStore textStyle={TextStyle.TEXT_R_40}>투자문의</TextStore>
      <div className="flex items-center flex-col text-black mt-5">
        {data ? (
          data.pages.map((page, idx) => {
            return (
              <Fragment key={idx}>
                {page.map((post: any, id: number) => {
                  return (
                    <Link
                      href={`/fundmanager/clientrequest/${post.postId}`}
                      key={post.postId}
                    >
                      <ButtonListTitle>
                        {post.title.length > 15
                          ? `${post.title.slice(0, 15)}...`
                          : post.title}
                      </ButtonListTitle>
                    </Link>
                  );
                })}
              </Fragment>
            );
          })
        ) : (
          <TextStore textStyle={TextStyle.TEXT_R_24}>loading...</TextStore>
        )}
      </div>
      <div ref={ref} className="h-[1rem]" />
    </section>
  );
}
