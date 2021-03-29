import configData from "./config.json";
import * as firebase from 'firebase';
import {Alert} from "react-native";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import navigation from "./routes/navigation";

const firebaseConfig = {
    apiKey: configData["firebase-credentials"].apiKey,
    authDomain: configData["firebase-credentials"].authDomain,
    projectId: configData["firebase-credentials"].projectId,
    storageBucket: configData["firebase-credentials"].storageBucket,
    messagingSenderId: configData["firebase-credentials"].messagingSenderId,
    appId: configData["firebase-credentials"].appId,
    measurementId: configData["firebase-credentials"].measurementId
  };
  let app;

  if(firebase.apps.length == 0){
    app = firebase.initializeApp(firebaseConfig)
  }else {
    app = firebase.app();
  }

  const auth = firebase.auth();

  export { auth };

  export async function registration(fullName, email, userName, password){
    try{
      await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
          res.user.updateProfile({
            displayName : userName
          })
        })
      
    }
    catch(err){
      Alert.alert("There is something wrong!!!!", err.message);
    }
  }

  export async function authentication(email,password){
    console.log(email,password);
    try{
      await firebase.auth().signInWithEmailAndPassword(email,password);
    }catch(err){
      Alert.alert("There is something wrong!!!!", err.message);
    }
  }

  export async function signout(String){
      console.log(String);
      try{
       await firebase.auth().signOut();
      }catch(err){
        Alert.alert("There is something wrong!!!!", err.message);
      }
  }