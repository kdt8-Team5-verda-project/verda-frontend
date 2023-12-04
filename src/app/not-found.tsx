"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";

export default function NotFound() {
  const router = useRouter()
  return (
    <div className="pt-[100px] flex flex-col justify-center items-center">
      <Image
        src="/verda_logo.png"
        width={250}
        height={177}
        className="pt-[150px]"
        alt="verda_logo" />
      <TextStore textStyle={TextStyle.TEXT_R_32} style="pt-[50px]">
        페이지를 찾을 수 없습니다.
      </TextStore>
      <TextStore textStyle={TextStyle.TEXT_R_24} style="pt-[30px]">
        요청하신 페이지가 사라졌거나,
      </TextStore>
      <TextStore textStyle={TextStyle.TEXT_R_24} style="">
        잘못된 경로를 이용 하셨어요.
      </TextStore>
      <BoxStore boxStyle={BoxStyle.BOX_RECTANGLE_LONG_NAVY} style="flex justify-center items-center text-white mt-[30px]">
        {/* <Link href="/"> */}
        <button type="button" onClick={() => {
          router.back()
        }}>
          <TextStore textStyle={TextStyle.TEXT_R_32} style="m-2">
            뒤로 가기
          </TextStore>
        </button>
        {/* </Link> */}
      </BoxStore>
    </div>
  );
}
