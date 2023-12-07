"use client";

import Section from "@/components-kim/Section";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import { useRecoilValue } from "recoil";
import { loginState } from "@/utils/recoil/loginState";

export default function UserName() {
  const recoildata = useRecoilValue(loginState);
  console.log("recoil에서 가져온 data 값: ", recoildata);
  return (
    <Section style=" text-2xl font-semibold">
      <TextStore textStyle={TextStyle.TEXT_R_40}> 안녕하세요</TextStore>
      <TextStore textStyle={TextStyle.TEXT_R_40_BLUE}>
        {recoildata.name}
        <span className="!text-black">님!</span>
      </TextStore>
    </Section>
  );
}
