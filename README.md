# 💻 Motov-HomeWork

### 전민재의 Motov-HomeWork 저장소입니다. 😁

<br />

## 🎥 배포 및 데모 영상

- URL: [Motov Homework - JeonMinjae](http://3.36.209.232/)
  - `AWS EC2`와 `Nginx`를 통한 배포 작업 진행
- 데모 영상: https://www.youtube.com/watch?v=metdX6GXE6Q

<br />

### 1. Main Page

![4](https://user-images.githubusercontent.com/64779472/123552226-3185cb80-d7b0-11eb-8aa9-92c4b3cfedba.png)

### 2. Loading Page

![6](https://user-images.githubusercontent.com/64779472/123552269-5e39e300-d7b0-11eb-9fe0-35d3b915196f.png)

<br />

## 📁 Map API

- [KAKAO Map API](https://apis.map.kakao.com/)

<br>

## 🔖 기술스택 및 주요 라이브러리

- React
- React Hooks
- axios
- styled-components
- react-icons
- AWS EC2
- Nginx

<br />

## 👨🏻‍💻 기능 구현

- 외부 데이터[https://motov-coding-homework.s3.ap-northeast-2.amazonaws.com/country.json] 불러오기
- 검색 한 지역 Polygon을 생성
- Input을 통한 지역 검색 구현
  - Input Value 유효성 검사
- Modal을 통한 지역 검색 구현
  - 전체 체크, 전체 체크 해제
  - selectBox를 통한 지역 검색
  - checkBox를 통한 지역 검색
  - 선택 된 Country `X`버튼을 통한 제거
- 지도/스카이뷰 구현
- Map Event 구현
  - `Mouseover` 시에 해당 영역 색깔 변경
  - `Click` 시에 영역 Country 이름과 면적 출력
- 최초 렌더링 시 로딩 화면 구현

<br />

## 📝 Projects Board

![2](https://user-images.githubusercontent.com/64779472/123551453-cdadd380-d7ac-11eb-9280-c1aa0c23eb09.png)

<br />

## 📝 Git Flow

- **master**
  - 메인 브랜치
  - 배포용 브랜치
- **develop**
  - 최종 개발 브랜치
  - 각 기능 브랜치들이 하나로 병합되는 지점
- **feature**
  - 기능 개발 브랜치
  - 실제 브랜치명은 각 구현 기능명
- **hotfix**
  - 에러 수정용 브랜치

<br />

## 📝 Commit Message

- Add: 특정 기능을 하는 코드를 구현 했을 때
- Modify: 이미 구현 된 기능의 코드를 수정하는데, 기능의 향상이 이루어졌을 때
- Design: CSS와 같은 스타일링을 했을 때
- Refactor: 리팩토링을 진행했을 때
- Fix: 버그 픽스나 핫 픽스 이슈를 완료하였을 때
- Rename: 폴더 및 파일 명을 변경했을 때
- Remove: 필요 없는 코드 및 파일을 제거했을 때
- Docs: README.md와 같은 단순 문서 작업

<br />
