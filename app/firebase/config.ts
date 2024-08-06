import { initializeApp, FirebaseApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { get } from "http";

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY ?? '',
  authDomain: process.env.NEXT_PUBLIC_API_AUTH_DOMAIN ?? '',
  projectId: process.env.NEXT_PUBLIC_API_PROJECT_ID ?? '',
  storageBucket: process.env.NEXT_PUBLIC_API_STORAGE_BUCKET ?? '',
  messagingSenderId: process.env.NEXT_PUBLIC_API_MESSAGING_SENDER_ID ?? '',
  appId: process.env.NEXT_PUBLIC_API_APP_ID ?? '',
  measurementId: process.env.NEXT_PUBLIC_API_MEASUREMENT_ID ?? ''
};

const app: FirebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app)

export { auth, app };