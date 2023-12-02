"use client";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useRecoilState } from "recoil";
import { loginState } from "../utils/recoil/loginState";
import { CodeState } from "../utils/recoil/code";

function LoginUser() {
  const routerUser = useRouter();
  const router = useSearchParams();
  const authorizationCode = router.get("code");
  const [recoildata, setRecoildata] = useRecoilState(loginState);
  const [kakaocode, setKakaoode] = useRecoilState(CodeState);

  useEffect(() => {
    if (authorizationCode) {
      sendCodeToBackend(authorizationCode);
    }
  }, [authorizationCode]);

  const handleKakaoLogin = async () => {
    try {
      const API_KEY = "90085a0fa6f999d431f31e0de484536a";
      const REDIRECT_URI = "http://localhost:3000/loginUser";
      // 카카오 로그인 요청을 위한 URL 생성
      const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

      // 클라이언트 측에서 카카오 로그인 페이지로 리다이렉트
      routerUser.push(kakaoAuthUrl);

      const code = new URL(window.location.href).searchParams.get("code");
      if (code) {
        await sendCodeToBackend(code);
      }
    } catch (error) {
      console.error("카카오 로그인에 실패했습니다.", error);
    }
  };
  //----------------------after redirect-------------

  const sendCodeToBackend = async code => {
    try {
      if (code === null) {
        console.error("Authorization code is null");
        return;
      }
      console.log("-----------2---------------", code);
      const response = await fetch(
        `${process.env.BASE_URL}/api/auth/kakaouser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ authorizationCode: code }),
        },
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to request access token");
      }
      const data = await response.json();
      //Recoil상태 업데이트
      setRecoildata(data);
      console.log("userEmail from backend:", data.email);
      const encodedEmail = data.email;
      console.log("encodedEmail from backend:", encodedEmail);
      await checkEmailExistence(encodedEmail);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  //동일한 이메일의 회원정보 있는지 확인
  const checkEmailExistence = async (encodedEmail: string) => {
    console.log(encodedEmail);
    try {
      const response = await fetch(
        `https://verda.monster/api/members/user/exist/${encodedEmail}`,
      );
      const data = await response.json();
      if (data) {
        console.log("해당 이메일에 등록된 정보가 없음 회원가입 진행");
        routerUser.push("/signupUser");
      } else {
        console.log("등록된 정보 있음 유저페이지로 이동");
        routerUser.push("/user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div>
        <div className="flex flex-col items-center mt-20">
          <TextStore
            textStyle={TextStyle.TEXT_R_40}
            style="flex flex-col mt-10 mb-20"
          >
            회원가입하고 맞춤형
            <TextStore textStyle={TextStyle.TEXT_R_40} style="flex">
              <TextStore textStyle={TextStyle.TEXT_R_40_BLUE}>
                투자제안
              </TextStore>
              을 받으세요
            </TextStore>
          </TextStore>
          <BoxStore
            boxStyle={BoxStyle.BOX_RECTANGLE_LIGHTBLUE}
            style="flex bg-yellow-300 "
            clickHandler={handleKakaoLogin}
          >
            <TextStore
              textStyle={TextStyle.TEXT_R_16}
              style="w-full"
              children="카카오톡으로 로그인하기"
            ></TextStore>
          </BoxStore>
          <div className="flex mt-10">
            <TextStore
              textStyle={TextStyle.TEXT_R_16}
              children="혹시 펀드매니저 이신가요?"
            ></TextStore>
            <Link href={"/loginManager"}>
              <TextStore
                textStyle={TextStyle.TEXT_R_16}
                style=" text-custom_navy"
                children="펀드매니저로 회원가입"
              ></TextStore>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginUser;
