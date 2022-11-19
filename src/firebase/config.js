import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAA_4uURLSz7Dc4NTrNd3PawLbxKgCGJjw",
  authDomain: "message-chat-vue-app.firebaseapp.com",
  projectId: "message-chat-vue-app",
  storageBucket: "message-chat-vue-app.appspot.com",
  messagingSenderId: "540227439870",
  appId: "1:540227439870:web:e27abbff77b8a9eea3e9af",
  measurementId: "G-57D8EX5ZEN",
};

let app = firebase.initializeApp(firebaseConfig);
let auth = firebase.auth();
let db = firebase.firestore(app);
let timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { db, auth, timestamp };
