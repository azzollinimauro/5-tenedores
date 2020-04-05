import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyARsFf1Ux8chNeMmVKjSojxNpo84A3fuCs",
    authDomain: "tenedores-b0d24.firebaseapp.com",
    databaseURL: "https://tenedores-b0d24.firebaseio.com",
    projectId: "tenedores-b0d24",
    storageBucket: "tenedores-b0d24.appspot.com",
    messagingSenderId: "951024287629",
    appId: "1:951024287629:web:3a8df3d824c9056a9147c4"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)