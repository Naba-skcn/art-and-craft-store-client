// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3y01f1T7EVwioZxDry7YDMiXd2CCiBDU",
  authDomain: "art-and-craft-a10.firebaseapp.com",
  projectId: "art-and-craft-a10",
  storageBucket: "art-and-craft-a10.appspot.com",
  messagingSenderId: "544241095411",
  appId: "1:544241095411:web:db14246399a32fc759dd86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;