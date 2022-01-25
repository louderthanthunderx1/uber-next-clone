import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth' 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYVhsMmsrI8UVc5xKX4e2OI-y-23K6r0w",
  authDomain: "uber-next-clone-7f404.firebaseapp.com",
  projectId: "uber-next-clone-7f404",
  storageBucket: "uber-next-clone-7f404.appspot.com",
  messagingSenderId: "418000185236",
  appId: "1:418000185236:web:ff491b25f127a391f69181"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }