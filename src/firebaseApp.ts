import { initializeApp, FirebaseApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export let app: FirebaseApp;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJDECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// app이 존재할 경우(=firebase가 연결되어 있을 경우) 그대로 불러오기, 그렇지 않다면 새로 생성
try {
  app = getApp("app");
} catch (e) {
  app = initializeApp(firebaseConfig, "app");
}

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
