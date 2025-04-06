![header](https://capsule-render.vercel.app/api?type=Waving&color=gradient&height=200&section=header&text=조선미녀%20&fontSize=90)

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&langs_count=5&layout=compact&theme=highcontrast)](https://github.com/anuraghazra/github-readme-stats)
 <br>

## 프로젝트 소개
- 조선미녀 클론 코딩 팀 프로젝트 <br>
 <br>
 
### 📚기술 스택

<div align=left> 
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> 
  <br>
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white">
  <br>
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/fontawesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white">
   <img src="https://img.shields.io/badge/visual%20studio%20code-%23007ACC.svg?&style=for-the-badge&logo=visual%20studio%20code&logoColor=white" />
  <br>
 <br>

### 📆 프로젝트 기간
- 2025.03.10 ~ 2025.04.04 <br>
 <br>
 
### ✒️ 프로젝트 목표
1. 첫 팀프로젝트인 해당 프로젝트를 통한 팀원과의 협업 능력 향상
2. REACT를 활용한 UI/UX 구현으로 SPA방식으로 빠른 UI 렌더링과 반응성 구현하기
3. 데이터 CRUD와 다양한 이벤트 처리 기능을 구현하여 비즈니스 로직 학습하기
4. MySQL을 활용한 데이터 관리
5. Client와 Server, DB간의 연동 경험

<br>

### 🙋‍♀️ 팀구성
<img src="https://github.com/user-attachments/assets/0f5eceae-721c-4f22-ac6a-6856fb39ec33" />
<br>


## 프로젝트 설명
### 설계단계 - ERD 
<img src ="https://github.com/user-attachments/assets/f69e85d2-2724-47f2-ae89-3e6f6e83bc3c" />
<br>


## 📌 주요 기능
✔️ 로그인<br>
- 로그인 시 로컬스토리지 생성<br>
- 토큰으로 암호화 (jsonwebtoken)<br>
- 유효성 체크 (필요 정보 입력)<br>
- 아이디 찾기<br>
- 비밀번호 찾기<br>


<br>

✔️ 회원가입 & SNS회원가입 <br>
- 유효성 체크 (필요 정보 입력, 약관동의 입력)<br>
- 필수약관 동의 체크<br>
- SNS 로그인 시 이름, 휴대폰번호, 이메일 정보가 자동으로 회원가입란에 입력됨 (카카오API, 네이버API)<br>

<br>

✔️ 마이 페이지<br>
- 회원정보 조회 및 수정<br>
- 우편번호 검색 기능 (react-daum-postcode)<br>
- 나의 주문내역 날짜별 조회<br>
- 관심상품 내역 조회<br>
- 작성한 리뷰 내역 조회<br>
- 배송지 삭제 및 추가<br>
- 로그아웃, 회원탈퇴<br>
- 페이지네이션 기능 구현<br>

<br>

✔️ 메인 페이지<br>
- 베스트 상품 이미지 슬라이드 (swiper) & 클릭 시 해당상품 상세페이지로 이동 <br>
- DB연동 하여 제품 정보 조회 후 상품 출력<br>
- 카테고리 대분류, 소분류 구현<br>

<br>

✔️ 장바구니<br>
- 장바구니에 담은 상품 목록 출력<br>
- 상품별 개별체크 및 모두선택하여 주문 기능 구현<br>
- 선택된 상품의 개수 및 가격에 따른 총가격 표시<br>
- 일정금액 미만으로 주문 시 배송비 3,000원 추가<br>

<br>

✔️ 결제페이지<br>
- 배송지 변경 시 우편번호 검색 기능 (react-daum-postcode) & 기본배송지 지정<br>
- 고객정보 입력 시 유효성 체크<br>
- 결제 시 카카오페이 결제 진행 (카카오API) 
<br>

✔️ 상품 전체페이지<br>
- DB연동 하여 제품 정보 조회 후 상품 출력<br>
- 카테고리별, 정렬순으로 해당되는 상품 노출<br>
- 상품 찜 버튼 구현<br>
- 페이지네이션 사용<br>


<br>

✔️ 상품 상세페이지<br>
- 상단 스틸컷 이미지 슬라이드 구현<br>
- 상품명, 가격정보, 상품수량에 따른 총가격 출력<br>
- 상품리뷰 모달창 구현, 리뷰 목록 조회, 작성, 삭제, 사진 등록 (multer)<br>
- Wish 버튼 클릭 시 마이페이지 관심상품에 등록<br>
- Add to Cart 버튼 클릭 시 장바구니에 상품 등록<br>

<br>

✔️ 검색페이지<br>
- 검색 키워드 입력 시 검색결과 페이지로 이동 , 검색 결과 노출<br>

<br>

✔️ 관리자페이지<br>
- 유효성 체크 후 상품 등록 (multer)<br>

<br>


</div>


<br>

## 프로젝트 시연 

시연 영상 링크 :
[![시연영상](https://github.com/user-attachments/assets/e1164fb6-8cd2-4bf4-8df3-4a9a908d9bd6)](https://youtu.be/KgK-92H-4kg?si=_RSJDlTBZowQY604)


<br>

## ✨ Notice

<br><br><br>
    
  



