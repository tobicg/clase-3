import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCPd7CcppdwjzaF1YDA4sRZbeKA0VZi4ec",
    authDomain: "tobi-careaga.firebaseapp.com",
    projectId: "tobi-careaga",
    storageBucket: "tobi-careaga.appspot.com",
    messagingSenderId: "142303878622",
    appId: "1:142303878622:web:de987cc04939702ae6914f"
  };

  const app = firebase.initializeApp(firebaseConfig);

  //mis funciones

  export function getFirestore(){
    return firebase.firestore(app)
  }