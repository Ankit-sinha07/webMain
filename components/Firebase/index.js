import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./config";

let app;
let db;

const initializeFirebase = () => {
  if (app == undefined) {
    app = initializeApp(firebaseConfig);
  }
  if (db == undefined) {
    db = getFirestore(app);
  }
};

export { initializeFirebase, app, db };
