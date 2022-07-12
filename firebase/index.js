// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsbZo-olYSFsTXuwiAGkP9OszokORGmiw",
  authDomain: "muvi-6e1d0.firebaseapp.com",
  projectId: "muvi-6e1d0",
  storageBucket: "muvi-6e1d0.appspot.com",
  messagingSenderId: "1069919788058",
  appId: "1:1069919788058:web:b953be61072598152a05a3",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
