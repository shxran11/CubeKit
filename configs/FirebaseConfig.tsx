import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-course-generator-9ecb4.firebaseapp.com",
  projectId: "ai-course-generator-9ecb4",
  storageBucket: "ai-course-generator-9ecb4.firebasestorage.app",
  messagingSenderId: "984808197721",
  appId: "1:984808197721:web:872b657e5be83641566b48",
  measurementId: "G-4SQT0JJ5P9",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
