// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

export const firebaseConfig = {
  apiKey: 'AIzaSyAGXVnHwsg4pcjf3jmqHZehlSdN1ltDUng',
  authDomain: 'scent-box.firebaseapp.com',
  projectId: 'scent-box',
  storageBucket: 'scent-box.appspot.com',
  messagingSenderId: '981437759471',
  appId: '1:981437759471:web:0523701a9c26126875801a',
  measurementId: 'G-0FVFQXJBDQ',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

export default app;
