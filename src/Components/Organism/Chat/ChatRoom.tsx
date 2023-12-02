"use client";

import { Dispatch, Fragment, SetStateAction, useEffect, useRef } from "react";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";

interface Props {
  roomId: string;
  chatMessages: Array<any>
  setChatMessages: Dispatch<SetStateAction<any>>;
}
// chatMessages
export default function ChatRoom({ roomId, chatMessages, setChatMessages }: Props) {
  // todos: 지워야됨
  const myEmail = "ssoert123@naver.com";
  const scrollRef = useRef<HTMLDivElement>(null)

  const getChat = async (): Promise<any> => {
    const res = await fetch(`${process.env.BASE_URL}/api/chat/${roomId}`, {
      method: "GET",
    });

    return res.json()
  }

  useEffect(() => {
    const tempFunc = async () => {
      const chats = await getChat()
      console.log(chats)
      setChatMessages(chats)
    }
    tempFunc()
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [chatMessages]);

  return (
    <section className="h-full">
      {
        chatMessages.length !== 0 ? (
          chatMessages.map((chat: any, idx: number) => {
            return (
              <Fragment key={idx}>
                {
                  myEmail === chat.sender_email ? (
                    <BoxStore boxStyle={BoxStyle.BOX_CHAT_ORANGE}>
                      <TextStore textStyle={TextStyle.TEXT_R_16}>
                        {chat.content}
                      </TextStore>
                    </BoxStore>
                  ) : (
                    <BoxStore boxStyle={BoxStyle.BOX_CHAT_SMOG}>
                      <TextStore textStyle={TextStyle.TEXT_R_16}>
                        {chat.content}
                      </TextStore>
                    </BoxStore>
                  )
                }
              </Fragment>
            )
          })
        ) : (
          <div className="flex h-full justify-center items-center">
            <TextStore textStyle={TextStyle.TEXT_R_24}>
              loading...
            </TextStore>
          </div>
        )
      }
      <div ref={scrollRef} />
    </section>
  )
}