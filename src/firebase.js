import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    

        apiKey: "AIzaSyBXQzCholMjRYo_-0tjtyoBnF_R73jfQxM",
        authDomain: "auth-firebase-bb57f.firebaseapp.com",
        projectId: "auth-firebase-bb57f",
        storageBucket: "auth-firebase-bb57f.appspot.com",
        messagingSenderId: "530742206290",
        appId: "1:530742206290:web:1a4cc347b688b348b4e48b"

        // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
        // appId: process.env.REACT_APP_FIREBASE_APP_ID
      
})

export const auth = app.auth();
export default app;