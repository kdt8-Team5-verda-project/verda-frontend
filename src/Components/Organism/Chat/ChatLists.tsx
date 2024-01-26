"use client";

//  ? loginData.authToken.accessToken : JSON.parse(localStorage.getItem("loginData") as string).authToken.accessToken
import { useEffect, Fragment } from "react";
import Link from "next/link";
import { useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";
import ButtonListInfo from "@/Components/Molecure/Button/List/ButtonListInfo";
import { useRecoilState } from "recoil";
import { loginState } from "@/utils/recoil/loginState";

export default function ChatLists() {
  const [loginData, setLoginData] = useRecoilState(loginState)

  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  /**
* 게시글 불러오는 fetch함수
* @param pageParam 게시글을 불러오는 page번호
* @returns 
*/
  const GetChatList = async (pageParam: (null | number) = null) => {
    const res = await fetch(`${process.env.BASE_URL}/api/rooms/user?page=${pageParam}&size=20`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${loginData.authToken.accessToken}`
      }
    })
    return res.json();
  }
  /**
   * 무한 스크롤에 맞춰 data fetch 하는 hook
   */
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['specialChatListUser'],
    ({ pageParam = 0 }) => GetChatList(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length;
        return nextPage
      },
    }
  )
  /**
   * 스크롤 마지막에 도달하면 다음 데이터를 불러옴
   */
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView])

  return (
    <section className="mt-2.5">
      <div className="flex items-center flex-col">
        {
          data ? (
            data?.pages.map((page, idx) => {
              return (
                <Fragment key={idx}>
                  {
                    page.content && (
                      page.content.map((chat: any, id: number) => {
                        return (
                          <Link href={`/user/rooms/${chat.roomId}`} key={`${chat.roomId} + ${id}`}>
                            <ButtonListInfo chat={chat} />
                          </Link>
                        );
                      })
                    )
                  }
                </Fragment>
              )
            })
          ) : (
            <>
              loading...
            </>
          )
        }
      </div>
      <div ref={ref} className="h-[1rem]" />
    </section>
  )
}