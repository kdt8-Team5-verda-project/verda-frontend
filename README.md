# verda
---
## 목차
<details>
  <summary>목차</summary>

  1. verda 소개
  2. 팀원 소개
  3. 개발 기간
  4. 기술 스택 및 협업 방식
  5. 주요 기능
  6. 폴더 구조
  7. 핵심 코드
</details>

## 1.📱verda 소개

<div align="center">
  <img width="706" alt="image" src="https://github.com/kdt8-Team5-verda-project/verda-frontend/assets/138414160/757b99b9-ced2-4986-ac85-8f799d12f646">
</div>

투자에 대한 관심은 증가하지만,투자 상담받기에 어려움을 느끼고 대부분 금융지식이 부족한 상태에서 투자를 진행합니다. 또한 문자나 인터넷에서 투자와 관련된 위험한 경로로부터 투자 제안을 종종 받습니다. 이러한 문제점을 극복하기 위한 펀드매니저 매칭 서비스입니다.

일반 회원은 투자 금액, 투자 상황, 투자 방법 등 자신이 고려하고 있는 모든 상황에 대해 게시글을 올리 수 있으며, 펀드매니저 회원이 작성한 댓글의 수락버튼을 눌러 1대1 채팅을 만들 수 있습니다. 펀드매니저 회원은 일반 회원이 작성한 게시글에 답변을 할 수 있으며, 1대1 채팅을 통해 일반회원을 상담할 수 있으며, 자신의 고객으로 유치할 수 있습니다.

<br />

> **verda 바로가기👉https://verda1.vercel.app/**

<br />

백엔드 서버가 닫혀 동작하지 않습니다.

<br/>

> 시연 영상

> [펀드매니저 화면(web 화면)](https://youtu.be/4htkcIsmj_k)

<br/>

> [일반회원 화면(mobile 화면)](https://youtu.be/4QnvwiQkCuQ)

<br />

## 2.🤼 팀원 소개
<table>
  <tbody>
    <tr>
      <th scope="col" colspan="3">프론트엔드</th>
    </tr>
    <tr>
      <td align="center"><a href="https://github.com/learnttuce0321"><img src="https://github.com/learnttuce0321.png" width="100px;" alt=""/><br /><b>주상후</b></a><br /></td>
      <td align="center"><a href="https://github.com/fun1ty"><img src="https://github.com/fun1ty.png" width="100px;" alt=""/><br /><b>김미리</b></a><br /></td>
      <td align="center"><a href="https://github.com/sonys95"><img src="https://github.com/sonys95.png" width="100px;" alt=""/> <br /><b>손영석</b></a><br /></td>
    </tr>
  </tbody>
</table>

> ### 주상후
#### 📃 페이지
  - 유저 메인 페이지
  - 유저 게시글 페이지
  - 유저 게시글 작성 페이지
  - 유저 채팅리스트 페이지
  - 유저, 펀드매니저 채팅 페이지
#### 📡 기능
  - 자신이 작성한 게시글 불러오기
  - 게시글 작성
  - 유저가 수락한 펀드매니저와의 채팅 리스트 불러오기
  - 유저와 펀드매니저와의 실시간 채팅
  - 펀드매니저 채팅리스트 제외 모든 페이지의 게시글, 채팅리스트 무한스크롤 구현

<br/>

> ### 김미리
#### 🎨 디자인
  - 디자인 총괄
#### 📃 페이지
  - 펀드매니저 메인 페이지
  - 펀드매니저 게시글 페이지
  - 펀드매니저 답변 작성 페이지
  
  - 유저, 펀드매니저 마이 페이지
#### 📡 기능
  - 유저가 작성한 모든 게시글 불러오기
  - 답변 작성
  - 유저와의 채팅 리스트 불러오기
  - 자신의 가입 정보 불러오기

<br/>

> ### 손영석
#### 🎨 디자인
  - 로고 및 디자인 총괄
#### 📃 페이지
  - 로그인 전 메인 페이지
  - 일반 회원, 펀드매니저 회원가입페이지
  - 일반 회원, 펀드매니저 로그인페이지
  - 펀드매니저 채팅리스트 페이지
#### 📡 기능
  - 카카오API를 활용한 로그인 및 회원가입 구현
  - 펀드매니저 채팅리스트 무한스크롤 구현


<br />

## 3.📆 개발 기간
> **2023.11.10 ~ 2023.12.08 (총 29일)**


<br />

## 4.⚙️ 기술 스택 및 협업 방식
<details>
  <summary>협업 관련 링크</summary>
  <div markdown="1">

  - [🔗노션링크](https://kimmr.notion.site/kimmr/verda-9362c1a22c00470da7a544b8f068bea1) <br />
  - [🔗Figma링크](https://www.figma.com/file/Rz26FVSiEqupqRsqmCwoZO/%EB%B2%8C%EB%8B%A4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%84%A4%EA%B3%84?type=design&node-id=0-1&mode=design&t=eJhMSC9r8uShcRzO-0)
    
  </div>
</details>

### 개발환경
- 매일 아침 현재 진행 상황 보고 및 당일 및 추후 계획 회의를 진행하였습니다.
- esLint, Prettier를 통해 코드 컨벤션을 통일하였으며, 아토믹 디자인 시, 네이밍컨벤션을 진행해 알아보기 쉽도록 하였습니다.
- 충돌 방지를 위해 아토믹 단위마다 각자의 폴더를 만들어 진행 후, 코드를 합쳐 충돌을 방지하였습니다.

### 기술 스택
<table>
  <tr>
    <td align="center">Front-End</td>
    <td>
      <span><img src="https://img.shields.io/badge/next.js-000?style=for-the-badge&logo=next.js&logoColor=white"></span>&nbsp
      <span><img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"></span>&nbsp
      <span><img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=black"></span>&nbsp
      <span><img src="https://img.shields.io/badge/recoil-000?style=for-the-badge&logo=recoil&logoColor=white"></span>&nbsp
      <span><img src="https://img.shields.io/badge/stomp-000?style=for-the-badge&logo=stomp&logoColor=white"></span>&nbsp
    </td>
  </tr>
  <tr>
    <td align="center">협업</td>
    <td>
      <span><img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"/></span>&nbsp
      <span><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/></span>&nbsp 
      <span><img src="https://img.shields.io/badge/Notion-5a5d69?style=for-the-badge&logo=Notion&logoColor=white"/></span>&nbsp
      <span><img src="https://img.shields.io/badge/Discord-4263f5?style=for-the-badge&logo=Discord&logoColor=white"/></span>&nbsp 
    </td>
  </tr>
  <tr>
     <td align="center">디자인</td>
     <td>
       <span><img src="https://img.shields.io/badge/Figma-d90f42?style=for-the-badge&logo=Figma&logoColor=white"/></span>&nbsp
     </td>
  </tr>
  <tr>
   <td align="center">IDE</td>
   <td>
      <span><img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white"/></span>&nbsp
  </tr>
  <tr>
   <td align="center">컨벤션</td>
   <td>
      <span><img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white"/></span>&nbsp
      <span><img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white"/></span>&nbsp
   </td>
  </tr>
  <tr>
   <td align="center">배포</td>
   <td>
      <span><img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white"/></span>&nbsp
   </td>
  </tr>
</table>


<br />

## 5.🔧 주요 기능
- 투자자는 투자문의를 작성할 수 있습니다.
  
|투자문의 작성
|:------:
|<img src="https://kimmr-fun1ty.vercel.app/_next/image?url=%2Fstatic%2Fimages%2F%ED%88%AC%EC%9E%90%EB%AC%B8%EC%9D%98%EC%9E%91%EC%84%B1.gif&w=640&q=75" width="250" height="550"/>
<br/>


- 투자자는 펀드매니저에게 온 제안서를 확인 할 수 있습니다. (총 3개의 제안서만 받을 수 있음)
  
|제안서 확인
|:------:
|<img src="https://kimmr-fun1ty.vercel.app/_next/image?url=%2Fstatic%2Fimages%2F%EC%A0%9C%EC%95%88%EC%84%9C%EB%AA%A9%EB%A1%9D.gif&w=640&q=75" width="250" height="550"/>
<br/>

- 펀드매니저는 고객들의 투자문의를 확인 할 수 있습니다.
  
|투자문의 확인
|:------:
|<img src="https://kimmr-fun1ty.vercel.app/_next/image?url=%2Fstatic%2Fimages%2F%EB%AC%B4%ED%95%9C%EC%8A%A4%ED%81%AC%EB%A1%A4.gif&w=828&q=75" width="250" height="450" />
<br/>

- 투자자와 펀드매니저는 서로 채팅을 할 수 있습니다.
  
|채팅화면
|:------:
|<img src="https://kimmr-fun1ty.vercel.app/_next/image?url=%2Fstatic%2Fimages%2F%EC%A0%9C%EC%95%88%EC%84%9C%EC%9E%91%EC%84%B1.gif&w=640&q=75" width="250" height="530"/>
<br/>


<br />

## 6.📜 폴더 구조
```
verda/src
├─@types
│  └─Post
├─app
│  ├─fundmanager
│  │  ├─clientrequest
│  │  │  └─[postid]
│  │  ├─mypage
│  │  └─rooms
│  │      └─[roomId]
│  ├─loginManager
│  ├─loginUser
│  ├─signupManager
│  ├─signupUser
│  └─user
│      ├─mypage
│      ├─post
│      │  └─[postId]
│      ├─reviewWrite
│      ├─rooms
│      │  └─[roomId]
│      └─write
├─Components
│  ├─Atom
│  │  ├─Box
│  │  │  ├─Chat
│  │  │  ├─Corner
│  │  │  ├─Rectangle
│  │  │  │  └─Long
│  │  │  └─Square
│  │  ├─Icon
│  │  └─Text
│  ├─Molecule
│  │  ├─Button
│  │  │  ├─Button
│  │  │  ├─Link
│  │  │  │  └─Button
│  │  │  └─List
│  │  └─Input
│  ├─Organism
│  │  ├─Chat
│  │  ├─ClientRequest
│  │  ├─FundManager
│  │  ├─Login
│  │  ├─Main
│  │  │  ├─FundManagerContent
│  │  │  └─ReviewContent
│  │  ├─Navigation
│  │  ├─Post
│  │  ├─Review
│  │  ├─SignUp
│  │  ├─User
│  │  └─Write
│  └─_LayoutComponent
└─utils
    ├─provider
    └─recoil
```

## 7.⭐️ 핵심 코드
### 아토믹 디자인 구현
각 단위의 필요한 컴포넌트를 구현하고 store에서 가져오는 방식으로 활용 <br />
store방식을 molecule단위까지 사용

```
export enum IconStyle {
  CONTENTS = "CONTENTS",
  COMMENTS = "COMMENTS",
  DEFAULT_BUTTON = "DEFAULT_BUTTON",
}

interface Props {
  iconStyle: IconStyle;
  design?: string;
  children?: React.ReactNode
}

export default function IconStore({ iconStyle, design, children }: Props) {
  const selectIcon = (): React.ReactNode => {
    switch (iconStyle) {
      case IconStyle.CONTENTS:
        return <p className={`p-2 ${design}`}>Content Icon</p>
      case IconStyle.COMMENTS:
        return <p>Comment Icon</p>

      case IconStyle.DEFAULT_BUTTON:
        return (
          <button type="button" className={`bg-yellow ${design}`}>
            {children}
          </button>
        )
      default:
        return null;
    }
  }

  return (
    <>
      {
        selectIcon()
      }
    </>
  )
}
```

<br/>

### 무한 스크롤 구현
ReactQuery의 useInfiniteQuery와 React-Intersection-Observer를 활용한 무한 스크롤 구현

```
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
```

## 8.♻️ 추가 개발/개선 사항
### AI 챗봇, 유저-펀드매니저 좋아요 및 신고, 리뷰 기능
MVP방식을 채택하여 개발을 진행하였기때문에 프로젝트 주제와 가장 적합한 기능만 구현하였습니다. <br/>
유저의 투자를 도울 수 있는 AI챗봇, 일반 회원과 펀드매니저간 추천을 하고 불법을 방지할 수 있는 좋아요 및 신고, 펀드매니저에게 투자의 후기를 작성하는 리뷰를 추가할 것입니다.

