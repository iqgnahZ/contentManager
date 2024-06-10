
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmQ6idu8u3R3NAcOUd_Fna0hVCXwqV4Qs",
  authDomain: "content-manager-27249.firebaseapp.com",
  projectId: "content-manager-27249",
  storageBucket: "content-manager-27249.appspot.com",
  messagingSenderId: "579383691560",
  appId: "1:579383691560:web:fea55eb18b22710be1e81d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };