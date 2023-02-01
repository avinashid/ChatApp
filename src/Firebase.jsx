import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXlZ4HyZvYbK_KZhoxHA0LMfB5TBZBQfI",
  authDomain: "chatappavi.firebaseapp.com",
  projectId: "chatappavi",
  storageBucket: "chatappavi.appspot.com",
  messagingSenderId: "557679912507",
  appId: "1:557679912507:web:ec4f8f91f80675b93bde1e",
  measurementId: "G-YPDTN9K1JQ",
  databaseURL:
    "https://chatappavi-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth( )
export const storage = getStorage();
export const db = getFirestore()
export default app;