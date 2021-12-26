# <div align="center"> 3️⃣ 삼세번 프로젝트(Samseburn Project) </div>

### <div align="center"> 번번이 작심삼일에 좌절하는 당신, “삼세번”으로 오라! </div>

![image](https://user-images.githubusercontent.com/33214449/147415258-5c232b4c-b514-41c8-aaa6-678b85279093.png)

## 목차

- [웹서비스 설명](#웹서비스-설명)
- [사이트](#사이트)
- [기획 & 설계 문서](#기획--설계-문서)
- [개발 기간](#개발-기간)
- [개발 인원](#개발-인원)
- [기술 스택](#기술-스택)

<br/>

## 웹서비스 설명

삼세번은 게으른 사람들도 포기하지 않고 꾸준히 습관을 만들 수 있도록 도와주는 작심삼일 습관 형성 플랫폼입니다. 운동, 공부, 취미 등 다양한 주제의 챌린지를 온라인/오프라인 참가 유형에 따라서 참가할 수 있으며, 원하는 챌린지를 자유롭게 개설하여 참가자를 모집할 수도 있습니다. 

챌린지에 참가하게 되면 최초 1주차에 작심삼일 미션이 부여됩니다. 일주일에 3회 인증을 완료해야 미션 성공으로 인정되고, 만약 실패하게 될 경우 총 3회의 재도전 기회가 주어집니다.        

삼세번과 함께 작심삼일을 극복하고 꾸준한 습관 만들기에 도전해보세요!

### 메인페이지

- 챌린지 리스트 조회
    - 현재 개설되어 있는 챌린지의 리스트를 조회할 수 있습니다. 각각의 챌린지는 카드 형태로 챌린지명, 썸네일 이미지, 참여 인원, 진행 기간, 카테고리(장소 유형, 주제) 정보를 보여줍니다.
    - 운동, 취미, 공부 등 주제 카테고리 필터를 선택하거나 최신순, 진행중인 챌린지의 정렬 필터를 선택하면 필터의 기준에 맞춰서 챌린지의 리스트를 필터링 할 수 있습니다.
- 챌린지 검색
    - 찾고 싶은 챌린지의 이름을 키워드로 검색하면 해당하는 챌린지 리스트를 조회할 수 있습니다.

### 상세페이지

- 챌린지 상세 정보 조회
    - 챌린지명, 썸네일 이미지, 참여 인원, 진행 기간, 카테고리(장소 유형, 주제), 챌린지 설명, 챌린지 참가 장소(오프라인) 등 챌린지의 상세한 정보를 확인할 수 있습니다.
- 챌린지 참가 현황
    - 현재 챌린지에 참가중인 모든 유저들의 프로필과 인증 기록 피드 슬라이드를 확인할 수 있습니다.
    - 인증 기록 피드 슬라이드
        - 3개의 인증 기록 썸네일 이미지가 기본으로 보여지고, 인증 기록이 3개가 초과할 시 이미지 슬라이드가 활성화 됩니다.
        - 다른 유저의 인증 기록 썸네일 이미지를 클릭하면 해당하는 인증 기록의 썸네일 이미지와 인증 후기를 확인할 수 있습니다.
        - 만약 로그인한 유저가 해당 챌린지에 참가중이라면 자신의 인증 기록 썸네일 이미지 클릭 시 인증 후기를 수정할 수 있습니다.
- 챌린지 참가 신청/참가 취소
    - 마감되지 않은 챌린지라면 챌린지에 참가를 신청할 수 있으며, 반대로 참가를 취소할 수도 있습니다.
    - 만약 참가를 취소하면 모든 인증 기록 데이터가 삭제됩니다.
- 챌린지 인증
    - 참가중인 챌린지의 인증 버튼을 클릭하면 인증 썸네일 이미지와 인증 후기를 등록할 수 있습니다.
    - 인증 날짜는 현재 시간이 자동으로 설정되며, 하루에 한 번만 인증을 등록할 수 있습니다.
    
    🔥  작심삼일 미션
    
    - 미션 기간 : 챌린지에 참가한 날짜부터 일주일
    - 성공하는 경우
        - 미션 기간 내에 3회를 인증하면 미션에 성공하게 됩니다.
        - 미션을 성공한 상태에서 인증 버튼을 클릭하면 챌린지를 계속할지, 그만둘지 선택할 수 있습니다.
            - 계속하기를 선택하면 계속 해당 챌린지를 진행할 수 있으며, 그만두기를 선택하면 해당 챌린지의 참여가 취소되고 모든 인증 기록 데이터가 삭제됩니다.
    - 미션 실패하는 경우
        - 미션 기간 내에 3회를 인증하지 못하면 미션에 실패하게 됩니다.
    - 재도전하는 경우
        - 미션에 실패하게 되면 총 3회의 재도전 기회를 얻게 됩니다.
    - 완전히 실패하는 경우
        - 3회의 재도전 횟수를 모두 사용했음에도 미션에 실패하면 더이상 해당 챌린지에 참여할 수 없게 됩니다.
- 챌린지 마감
    - 이미 마감된 챌린지는 참가 신청할 수 없습니다.

### 생성페이지

- 챌린지 개설
    - 챌린지명, 썸네일 이미지, 참여 인원, 진행 기간, 카테고리(장소 유형, 주제), 장소(오프라인 챌린지의 경우)를 작성해 챌린지를 개설할 수 있습니다.
    - 챌린지 개설자는 챌린지에 자동으로 참여됩니다.
    - 한 사람 당 최대 3개의 챌린지만 개설할 수 있습니다.
    - 카테고리
        - 장소 유형: 온라인, 오프라인 [택 1]
        - 주제: 운동, 공부, 취미, 독서, 기타 [택 1]

### 마이페이지

- 챌린지 조회
    - 참가중/재도전 가능/완료 상태의 챌린지 리스트가 표시됩니다.
        - 챌린지명, 썸네일 이미지, 카테고리(장소 유형, 주제), 진행 기간이 기본적으로 표시됩니다.
        - 개별 챌린지 카드를 클릭 시 해당 챌린지의 상세 페이지로 이동할 수 있습니다.
    - 참가중인 챌린지 리스트
        - 1주차 미션을 진행중인 챌린지의 경우, 작심삼일 미션 3회에 대한 달성률이 표시됩니다.
        - 1주차 미션을 성공한 챌린지의 경우, 현재까지 인증한 횟수와 인증 횟수에 따른 메달 뱃지가 표시됩니다.
    - 재도전 가능 챌린지 리스트
        - ‘재도전하기’ 버튼을 클릭해 1주차 미션에 실패한 챌린지에 재도전할 수 있습니다. 재도전한 챌린지는 참가중인 챌린지로 상태가 변경됩니다.
        - 재도전 가능 횟수는 챌린지당 총 3회로 제한됩니다.
    - 완료한 챌린지 리스트
        - 1주차 미션을 성공한 후, 챌린지 진행 기간동안 포기하지 않고 참여완료한 챌린지가 표시됩니다.
        - 챌린지가 진행되는 동안 인증한 횟수와 인증 횟수에 따른 메달 뱃지가 표시됩니다.
- 회원 정보 수정
    - 닉네임과 프로필 이미지 정보를 수정할 수 있습니다.
- 내가 개설한 챌린지 관리
    - 직접 개설한 챌린지 리스트가 표시됩니다.
    - 챌린지 삭제
        - 개설한 챌린지를 삭제할 수 있습니다.
        - 개설자 외에 다른 참여자가 이미 해당 챌린지에 참여중인 경우에는 챌린지를 삭제할 수 없습니다.
    - 챌린지 정보 수정
        - 개설한 챌린지의 정보를 수정할 수 있습니다.
        - 썸네일 이미지, 챌린지 참가 장소(오프라인)를 변경할 수 있습니다.

<br/>

## 사이트

- 🔗실서버 링크: [https://www.samseburn.site/](https://www.samseburn.site/)

<br/>

## 기획 & 설계 문서

- [기능 명세서](https://www.notion.so/c34a196e2a274d58aae874346116be9b)
- [API 명세서](https://www.notion.so/API-ec69cc5d028f4605a1dfb6a2dd77f5dc)
- [페이지 기획서](https://www.notion.so/833672fce0bd4ca891f52f712bbc9fdb)
- [트렐로 대시보드](https://trello.com/b/xciXGqYG/%EC%82%BC%EC%84%B8%EB%B2%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8)
- [FE 개발 일지](https://www.notion.so/FE-1ddf7f862baf4bb6bdaedcc7d003f8c2)

<br/>

## 개발 기간

2021.11.24 ~ 2021.12.26

<br/>

## 개발 인원

### FE

- [안솔(Sol-Ahn)](https://github.com/Sol-Ahn)
- [박유림(pul8219)](https://github.com/pul8219)

<br/>

## 기술 스택

- Javascript ES6+
- React
- Styled-components
- Material UI
- Figma


