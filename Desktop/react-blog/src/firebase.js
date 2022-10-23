import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBmJYRVOjh7sgZM4zr_9-4-LjF1Ubw-G54",
    authDomain: "react-blog-f0812.firebaseapp.com",
    projectId: "react-blog-f0812",
    storageBucket: "react-blog-f0812.appspot.com",
    messagingSenderId: "991308728611",
    appId: "1:991308728611:web:2b3b2c34d530d85f406496",
    measurementId: "G-DEWZZ90Q46"
};

firebase.initializeApp(firebaseConfig);


export const firestore=firebase.firestore();