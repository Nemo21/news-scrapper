// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcROH45GHlniQcDekWphmha1Qp3R0pVjY",
  authDomain: "web-is-the-scrape.firebaseapp.com",
  projectId: "web-is-the-scrape",
  storageBucket: "web-is-the-scrape.appspot.com",
  messagingSenderId: "215517356697",
  appId: "1:215517356697:web:c0c1d956d5537cf1800e08",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
