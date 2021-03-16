import configData from "config.json";

const firebaseConfig = {
    apiKey: configData.firebase-credentials.apiKey,
    authDomain: configData.firebase-credentials.authDomain,
    projectId: configData.firebase-credentials.projectId,
    storageBucket: configData.firebase-credentials.storageBucket,
    messagingSenderId: configData.firebase-credentials.messagingSenderId,
    appId: configData.firebase-credentials.appId,
    measurementId: configData.firebase-credentials.measurementId
  };