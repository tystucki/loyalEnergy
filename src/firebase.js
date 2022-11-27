// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1SQpM0U2XMAWq5pT-Hyi-3XQnyGSRvyw",
  authDomain: "loyal-energy.firebaseapp.com",
  projectId: "loyal-energy",
  storageBucket: "loyal-energy.appspot.com",
  messagingSenderId: "607425729695",
  appId: "1:607425729695:web:555164c4c9955b54e43eaa",
  measurementId: "G-PFXPM6WJHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);