// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAACHVvxBnKriHjYj4AYy_Ac9LXr_pRjJM",
  authDomain: "mystore-marketplace-28fbe.firebaseapp.com",
  projectId: "mystore-marketplace-28fbe",
  storageBucket: "mystore-marketplace-28fbe.firebasestorage.app",
  messagingSenderId: "850784198226",
  appId: "1:850784198226:web:bd54f9cf89eccf2083898b",
  measurementId: "G-Y5FTLCK2Q9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);