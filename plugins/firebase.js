import firebase from 'firebase/app'
import 'firebase/auth'

if (!firebase.apps.length) {
  firebase.initializeApp({
    //Your Firebase Config
  })
}

export const fireAuth = firebase.auth()
