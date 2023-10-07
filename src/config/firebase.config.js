/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnY9ptS7uHM04YhBQhGvbiWu5uNQe8jqg",
  authDomain: "eventive-ee030.firebaseapp.com",
  projectId: "eventive-ee030",
  storageBucket: "eventive-ee030.appspot.com",
  messagingSenderId: "795131807611",
  appId: "1:795131807611:web:f0751fb46fed97878adfde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)