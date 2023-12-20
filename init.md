## Router 세팅

1. `yarn add react-router-dom`
2. `yarn add --dev @types/react-router/dom`
3. `Routes.tsx` 생성 및 `Route, Routes, Navigate` import
4. 페이지 생성
5. `tsconfig.json`에서 baseUrl, paths 세팅 (pages, components)
6. 각 페이지 Route 연결
7. `App.tsx`에서 `Routes.tsx` import

## Firebase 세팅

1. 아래 경로에서 `프로젝트 추가`

    https://console.firebase.google.com/?hl=ko&_gl=1*1492ss7*_ga*ODk3MDY3NjU2LjE3MDI0NDU3MTc.*_ga_CW55HF8NVT*MTcwMzA1Mzk3MC4yLjAuMTcwMzA1Mzk3MC42MC4wLjA.

2. `앱 추가` -> `웹`
3. `yarn add firebase`
4. `.gitignore`에 `.env` 추가 후 root 경로에 `.env` 환경변수 세팅 파일 생성
5. `firebaseApp.tsx` 생성
6. `initializeApp`, `getFireStore` 호출 -> export
7. `App.tsx`와 `Router.tsx`에서 권한 세팅