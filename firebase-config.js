// firebase-config.js - A VERSÃO FINAL E COMPLETA
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// 1. Storage
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
// 2. Auth
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// 3. Firestore
import { getFirestore, collection, addDoc, getDocs, orderBy, query, doc, getDoc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// IMPORTANTE: Adicione suas chaves reais aqui
const firebaseConfig = {
  apiKey: "AIzaSyAcobGpOt9EUVnZ0BNy3IqEa8zYDWN0yWc", 
  authDomain: "ecos-do-abismo-v2.firebaseapp.com",
  projectId: "ecos-do-abismo-v2",
  storageBucket: "ecos-do-abismo-v2.firebasestorage.app", // O bucket de storage deve estar aqui
  messagingSenderId: "496053581682",
  appId: "1:496053581682:web:c89c46ec355b286da8cfeb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app); 

// EXPORTAÇÃO COMPLETA: Tudo está liberado para o painel agora
export { 
    db, collection, addDoc, getDocs, orderBy, query, doc, getDoc, updateDoc, deleteDoc, 
    auth, signInWithEmailAndPassword, onAuthStateChanged, signOut,
    storage, ref, uploadBytes, getDownloadURL 
};