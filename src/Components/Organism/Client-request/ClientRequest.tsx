"use client";

import Link from "next/link";
import { ChevronRight } from "react-bootstrap-icons";
import { useInfiniteQuery } from "react-query";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import Section from "@/components-kim/Section";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";

interface ItemArray {
  postId: string;
  name: string;
  title: string;
}

export interface IRepository {
  total_count: number;
  items: ItemArray[];
}

export default function ClientRequest() {
  const [ref, inView] = useInView({ threshold: 0.3 });

  const getData = async (page: number): Promise<IRepository> => {
    const size = 20;
    // const lastPostId = 10000;
    console.log("pageParam", page);
    const res = await fetch(
      `${process.env.BASE_URL}/api/board?lastPostId=${page}&size=${size}`,
      {
        method: "GET",
      },
    );

    const fetchData = await res.json();

    return fetchData;
  };

  const { data, fetchNextPage, status, hasNextPage } = useInfiniteQuery(
    ["clientList"],
    ({ pageParam = 10 }) => getData(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const maxPage = lastPage.total_count;
        const nextPage = allPages.length + 1;
        return nextPage <= maxPage ? nextPage : undefined;
      },
    },
  );

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
    console.log(data);
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <>
      <Section>
        <TextStore textStyle={TextStyle.TEXT_R_40}>투자문의</TextStore>
      </Section>
      <Section style="mt-2.5">
        {status !== "loading" && status !== "error" && (
          <div>
            {data &&
              data.pages?.map((group, pageIndex) => {
                console.log("group", group);
                return (
                  <React.Fragment key={pageIndex}>
                    {group.map(item => (
                      <Link
                        className="mt-2.5"
                        key={item.postId}
                        href={`/fundmanager/clientrequest/${item.postId}`}
                      >
                        <BoxStore
                          boxStyle={BoxStyle.BOX_CORNER_LONG}
                          style="relative"
                        >
                          <TextStore
                            textStyle={TextStyle.TEXT_M_24}
                            style="text-black font-bold"
                          >
                            {item.name}
                          </TextStore>
                          <TextStore
                            textStyle={TextStyle.TEXT_R_20}
                            style="text-slate-500"
                          >
                            {item.title}
                          </TextStore>
                          <ChevronRight
                            fill="black"
                            width="2 in"
                            height="2m"
                            className="absolute top-1/3 right-0 "
                          />
                        </BoxStore>
                      </Link>
                    ))}
                  </React.Fragment>
                );
              })}
          </div>
        )}
        <div ref={ref} className="h-[1rem]" />
      </Section>
    </>
  );
}

// {status !== "loading" && status !== "error" && (
//   <div>
//     {data &&
//       data.pages?.map((listData, pageIndex) => (
//         <React.Fragment key={pageIndex}>
//           {listData.items.map(item => (
//             <Link
//               key={pageIndex}
//               href={`/fundmanager/clientrequest/${item.postId}`}
//             >
//               <BoxStore
//                 boxStyle={BoxStyle.BOX_CORNER_LONG}
//                 style="relative"
//               >
//                 <TextStore
//                   textStyle={TextStyle.TEXT_M_24}
//                   style="text-black font-bold"
//                 >
//                   {item.name}
//                 </TextStore>
//                 <TextStore
//                   textStyle={TextStyle.TEXT_R_20}
//                   style="text-slate-500"
//                 >
//                   {item.title}
//                 </TextStore>
//                 <ChevronRight
//                   fill="black"
//                   width="2 in"
//                   height="2m"
//                   className="absolute top-1/3 right-0 "
//                 />
//               </BoxStore>
//             </Link>
//           ))}
//         </React.Fragment>
//       ))}
//   </div>
// )}

// {status === "loading" ? (
//   <p>Loading...</p>
// ) : (
//   status === "error" && <span>Error:</span>
// )}
// {status !== "loading" && status !== "error" && (
//   <div>
//     {data &&
//       data.pages?.map((listData, pageIndex) => (
//         <React.Fragment key={pageIndex}>
//           <Link
//             key={pageIndex}
//             href={`/fundmanager/clientrequest/${listData.postId}`}
//           >
//             <BoxStore
//               boxStyle={BoxStyle.BOX_CORNER_LONG}
//               style="relative"
//             >
//               <TextStore
//                 textStyle={TextStyle.TEXT_M_24}
//                 style="text-black font-bold"
//               >
//                 {listData.name}
//               </TextStore>
//               <TextStore
//                 textStyle={TextStyle.TEXT_R_20}
//                 style="text-slate-500"
//               >
//                 {listData.title}
//               </TextStore>
//               <ChevronRight
//                 fill="black"
//                 width="2 in"
//                 height="2m"
//                 className="absolute top-1/3 right-0 "
//               />
//             </BoxStore>
//           </Link>
//         </React.Fragment>
//       ))}
//   </div>
// )}
// <div ref={ref} />
// </Section>
// </>
// );
// }

// {status !== "loading" && status !== "error" && (
//   <div>
//     {data &&
//       data.pages?.map((listData, pageIndex) => (
//         <React.Fragment key={pageIndex}>
//           {listData.items.map(item => (
//             <Link
//               key={pageIndex}
//               href={`/fundmanager/clientrequest/${item.postId}`}
//             >
//               <BoxStore
//                 boxStyle={BoxStyle.BOX_CORNER_LONG}
//                 style="relative"
//               >
//                 <TextStore
//                   textStyle={TextStyle.TEXT_M_24}
//                   style="text-black font-bold"
//                 >
//                   {item.name}
//                 </TextStore>
//                 <TextStore
//                   textStyle={TextStyle.TEXT_R_20}
//                   style="text-slate-500"
//                 >
//                   {item.title}
//                 </TextStore>
//                 <ChevronRight
//                   fill="black"
//                   width="2 in"
//                   height="2m"
//                   className="absolute top-1/3 right-0 "
//                 />
//               </BoxStore>
//             </Link>
//           ))}
//         </React.Fragment>
//       ))}
//   </div>
// )}
// <div ref={ref} />
// </Section>
// </>
// );
// }

// {status !== "loading" && status !== "error" && (
//   <div>
//     {data &&
//       data.pages?.map((group, pageIndex) => (
//         <React.Fragment key={pageIndex}>
//           {group.items?.map(item => (
//             <Link
//               key={item.postId}
//               href={`/fundmanager/clientrequest/${item.postId}`}
//             >
//               <BoxStore
//                 boxStyle={BoxStyle.BOX_CORNER_LONG}
//                 style="relative"
//               >
//                 <TextStore
//                   textStyle={TextStyle.TEXT_M_24}
//                   style="text-black font-bold"
//                 >
//                   {item.name}
//                 </TextStore>
//                 <TextStore
//                   textStyle={TextStyle.TEXT_R_20}
//                   style="text-slate-500"
//                 >
//                   {item.title}
//                 </TextStore>
//                 <ChevronRight
//                   fill="black"
//                   width="2 in"
//                   height="2m"
//                   className="absolute top-1/3 right-0 "
//                 />
//               </BoxStore>
//             </Link>
//           ))}
//         </React.Fragment>
//       ))}
//   </div>
// )}
// <div ref={ref} className="h-[1rem]" />
// </Section>
// </>
// );
// }
