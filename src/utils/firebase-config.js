import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB9YkpnLTbbz3GFMEO7VDd77maY9ublsbw",
  authDomain: "netflix-clone-spv.firebaseapp.com",
  projectId: "netflix-clone-spv",
  storageBucket: "netflix-clone-spv.appspot.com",
  messagingSenderId: "728485305444",
  appId: "1:728485305444:web:85d268097e0b332c821371",
  measurementId: "G-C6H141Y0HM"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);