// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyCQYp6BQ132wRzH_UrAnjHiExc2Gdil53I",
   authDomain: "dragon-news-60-module.firebaseapp.com",
   projectId: "dragon-news-60-module",
   storageBucket: "dragon-news-60-module.appspot.com",
   messagingSenderId: "474984923038",
   appId: "1:474984923038:web:2ce59c700c31db40b9a08f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app