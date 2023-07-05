import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAmuTj0coZvvUF16VBNlT0E7ZYWeDTi_pQ",
//   authDomain: "leetcode-collections.firebaseapp.com",
//   projectId: "leetcode-collections",
//   storageBucket: "leetcode-collections.appspot.com",
//   messagingSenderId: "346963303323",
//   appId: "1:346963303323:web:b02f7694e9547c4cf59f3e",
// };

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENGDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const firebase_auth = getAuth(app);
const firestore = getFirestore(app);

export { app, firebase_auth, firestore };
