import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCwftOMLCLY-9kgfZzGL25cU_yL6Os7WcY",
    authDomain: "ecommerce-react-app-dbe42.firebaseapp.com",
    projectId: "ecommerce-react-app-dbe42",
    storageBucket: "ecommerce-react-app-dbe42.appspot.com",
    messagingSenderId: "615441600966",
    appId: "1:615441600966:web:d47a96e4c245adaeb1e2c7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()

export {db, auth}