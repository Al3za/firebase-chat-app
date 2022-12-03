// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArDeDH58qbxPhrRImAWOAyeMTF6UMHu8A",
  authDomain: "email-password-auth-react.firebaseapp.com",
  projectId: "email-password-auth-react",
  storageBucket: "email-password-auth-react.appspot.com",
  messagingSenderId: "123056215334",
  appId: "1:123056215334:web:644c80401121ca80559de7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app