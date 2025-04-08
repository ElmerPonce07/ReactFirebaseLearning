import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARgB-MElBc58dljhTIiIbe4hNBDUgNgTw",
  authDomain: "fir-learn-1f798.firebaseapp.com",
  projectId: "fir-learn-1f798",
  storageBucket: "fir-learn-1f798.firebasestorage.app",
  messagingSenderId: "222871204712",
  appId: "1:222871204712:web:2a6adf0d6b007d52571cdd",
  measurementId: "G-C94DM917C2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const GoogleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
