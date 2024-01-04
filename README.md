## create-react-app
0. `yarn create-react-app {app_name} --template typescript`

## Router

1. `yarn add react-router-dom`
2. `yarn add --dev @types/react-router/dom`
3. `Routes.tsx` 생성 및 `Route, Routes, Navigate` import
4. 페이지 생성
5. `tsconfig.json`에서 **baseUrl**, **paths** 세팅 **(pages, components)**
6. 각 페이지 `Route` 연결
7. `App.tsx`에서 `Routes.tsx` import
8. `index.tsx`에서 `Router`로  `App` 컴포넌트 감싸기

## Firebase

1. 아래 경로에서 `프로젝트 추가`

    https://console.firebase.google.com/?hl=ko&_gl=1*1492ss7*_ga*ODk3MDY3NjU2LjE3MDI0NDU3MTc.*_ga_CW55HF8NVT*MTcwMzA1Mzk3MC4yLjAuMTcwMzA1Mzk3MC42MC4wLjA.

2. `앱 추가` -> `웹`
3. `yarn add firebase`
4. `.gitignore`에 `.env` 추가 후 **root** 경로에 `.env` 환경변수 세팅 파일 생성
5. `firebaseApp.tsx` 생성
6. `initializeApp`, `getFireStore` 호출 -> export
7. `App.tsx`와 `Router.tsx`에서 권한 세팅

## AuthContext

1. `AuthContext.tsx` 생성
2. `index.tsx`에서 컴포넌트 감싸기

## Toast

1. `yarn add react-toastify`
2. `App.tsx`에서 **react-toastify** import, 적용

## react-icons (미사용)

1. `yarn add react-icons`
2. https://react-icons.github.io/react-icons/ 찾아서 사용

## Tailwind CSS (미사용)

1. `yarn add -D tailwindcss postcss autoprefixer`
2. `npx tailwindcss init -p`
3. `tailwind.config.js`에서 **tailwind**를 적용할 템플릿 파일 경로 지정

```
// example
content: [
    './src/*.{js,ts,jsx,tsx,mdx}'
],
```

4. css 파일에서 **tailwind** import

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. tailwind 클래스 코드 작성

<br />

## vscode git 연동

1. git repository 생성
2. git url 복사
3. 존재하는 repository를 받아온 경우 git pull origin main --allow-unrelated-histories
4. git remote add origin ${git url}
5. commit (메시지 작성 필수)
6. push