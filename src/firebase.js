import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyATd1EDIHQi2TAgz0H1-KyYEz7ShRqrfWo",
    authDomain: "my-app-6c652.firebaseapp.com",
    projectId: "my-app-6c652",
    storageBucket: "my-app-6c652.appspot.com",
    messagingSenderId: "500478171065",
    appId: "1:500478171065:web:2aa5ba0bd47161a495c868",
    measurementId: "G-41B3S6816M"
};

// firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth, app };