"use client";

import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import ChatMessageInput from "@/Components/Organism/Chat/ChatMessageInput";
import ChatRoom from "@/Components/Organism/Chat/ChatRoom";
import { useState } from "react";

interface Props {
  params: {
    roomid: string;
  };
}

export default function Chat({ params: { roomid: roomId } }: Props) {
  const [chatMessages, setChatMessages] = useState<any>([]);

  return (
    <section className="w-[100%]">
      <TextStore textStyle={TextStyle.TEXT_R_40_BLUE} style="mb-2">
        ㅎㅇ
      </TextStore>

      <div className="border-2 opacity-100 h-[calc(100vh_-_140px)] overflow-y-scroll">
        <ChatRoom
          roomId={roomId}
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
      </div>
      <ChatMessageInput setChatMessages={setChatMessages} roomId={roomId} />
    </section>
  );
}
