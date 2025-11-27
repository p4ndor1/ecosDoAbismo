// firebase-config.js - COM AUTENTICAÇÃO
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, orderBy, query, doc, getDoc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
// NOVO: Importamos a autenticação
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// SUAS CHAVES (Mantenha as suas chaves reais!)
const firebaseConfig = {
  apiKey: "AIzaSyAcobGpOt9EUVnZ0BNy3IqEa8zYDWN0yWc", // <--- CUIDADO: Coloque suas chaves reais aqui
  authDomain: "ecos-do-abismo-v2.firebaseapp.com",
  projectId: "ecos-do-abismo-v2",
  storageBucket: "ecos-do-abismo-v2.firebasestorage.app",
  messagingSenderId: "496053581682",
  appId: "1:496053581682:web:c89c46ec355b286da8cfeb"
};

// Inicializa
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // Inicializa a autenticação

// Exporta tudo
export { db, collection, addDoc, getDocs, orderBy, query, doc, getDoc, updateDoc, deleteDoc, auth, signInWithEmailAndPassword, onAuthStateChanged, signOut };