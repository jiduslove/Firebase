//firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_KEY}`,
  authDomain: "orangebabylion-6ce9b.firebaseapp.com",
  projectId: "orangebabylion-6ce9b",
  storageBucket: "orangebabylion-6ce9b.appspot.com",
  messagingSenderId: "249331758747",
  appId: `${process.env.REACT_APP_FIREBASE_ID}`,
  measurementId: "G-0S6RECPMK5",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 다른 곳에서 불러올때 firestore로 불러와야 함!!
export { firestore };
