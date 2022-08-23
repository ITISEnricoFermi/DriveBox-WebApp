import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPKAoL3BtoOUEnl1holQ0RaXy2ZCAQr7Q",
  authDomain: "drivebox-12956.firebaseapp.com",
  projectId: "drivebox-12956",
  storageBucket: "drivebox-12956.appspot.com",
  messagingSenderId: "636091798844",
  appId: "1:636091798844:web:dbfb8313c68c8f2e3f3a39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
