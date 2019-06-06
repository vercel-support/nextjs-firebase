import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

console.log(process.env.FIREBASE_PROJECT_ID)

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: `${process.env.FIREBASE_PROJECT_ID}.appspot.com`,
    messagingSenderId: process.env.FIREBASE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
}

const app = firebase.apps.length
    ? firebase.app()
    : firebase.initializeApp(config)
const auth = firebase.auth()
const firestore = firebase.firestore()

export {firebase, app, auth, firestore}
