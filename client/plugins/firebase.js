import firebase from 'firebase/app'
import 'firebase/auth'
import config from '~~/firebase.config'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const fireAuth = firebase.auth()
