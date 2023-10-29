import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBiRLcVzp53ZoJtI-4_Y5RtCPanPosRvBY",
  authDomain: "react-coder-743a0.firebaseapp.com",
  databaseURL: "https://react-coder-743a0-default-rtdb.firebaseio.com",
  projectId: "react-coder-743a0",
  storageBucket: "react-coder-743a0.appspot.com",
  messagingSenderId: "1027863779219",
  appId: "1:1027863779219:web:17df6437c2a57e9fa43a66",
  measurementId: "G-W5J6L8GPZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
