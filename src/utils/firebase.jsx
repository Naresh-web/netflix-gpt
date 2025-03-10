// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbBQEMl9eMDD0Dv40THLR4eUU1v2kuw80",
  authDomain: "test-app-d95e5.firebaseapp.com",
  projectId: "test-app-d95e5",
  storageBucket: "test-app-d95e5.firebasestorage.app",
  messagingSenderId: "1071822611533",
  appId: "1:1071822611533:web:ce57b1279bc3b9e3da6804",
  measurementId: "G-29CEM3VBY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);