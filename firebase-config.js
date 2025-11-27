// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, orderBy, query } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcobGpOt9EUVnZ0BNy3IqEa8zYDWN0yWc",
  authDomain: "ecos-do-abismo-v2.firebaseapp.com",
  projectId: "ecos-do-abismo-v2",
  storageBucket: "ecos-do-abismo-v2.firebasestorage.app",
  messagingSenderId: "496053581682",
  appId: "1:496053581682:web:c89c46ec355b286da8cfeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exporta para ser usado nos posts
export { db, collection, addDoc, getDocs, orderBy, query };