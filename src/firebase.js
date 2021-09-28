// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA-MMD1yt7CMDc5qVxZs4bLZu1tS-yoqx8',
  authDomain: 'sparta-react-basic-mini.firebaseapp.com',
  projectId: 'sparta-react-basic-mini',
  storageBucket: 'sparta-react-basic-mini.appspot.com',
  messagingSenderId: '593197810213',
  appId: '1:593197810213:web:8a32fc6efb7b0c5d6475cc',
  measurementId: 'G-9QVHXJDGPR',
};

initializeApp(firebaseConfig); // firebase를 쓸수있도록 초기화 시킨다.

//app.js에서도 사용할 수있도록 밖으로 보내준다.
export const db = getFirestore();
