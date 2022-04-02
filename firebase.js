import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDD3OlKT_G4wso7GB3USrOHW96e7u18hNg",

  authDomain: "my-social-k.firebaseapp.com",

  projectId: "my-social-k",

  storageBucket: "my-social-k.appspot.com",

  messagingSenderId: "475674217097",

  appId: "1:475674217097:web:05900cd648bc2d7bd95458",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
