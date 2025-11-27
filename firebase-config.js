// firebase-config.js - CORRIGIDO E COMPLETO
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// AQUI ESTAVA O ERRO: Adicionamos updateDoc e deleteDoc na lista de importação abaixo
import { getFirestore, collection, addDoc, getDocs, orderBy, query, doc, getDoc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// SUAS CHAVES (Mantenha as suas chaves reais aqui!)
const firebaseConfig = {
  apiKey: "SUA_APIzaSyAcobGpOt9EUVnZ0BNy3IqEa8zYDWN0yWcI_KEY_AQUI", // <--- CUIDADO: Não apague suas chaves reais!
  authDomain: "ecos-do-abismo-v2.firebaseapp.com",
  projectId: "ecos-do-abismo-v2",
  storageBucket: "ecos-do-abismo-v2.firebasestorage.app",
  messagingSenderId: "496053581682",
  appId: "1:496053581682:web:c89c46ec355b286da8cfeb"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exporta TUDO (agora funciona porque importamos tudo lá em cima)
export { db, collection, addDoc, getDocs, orderBy, query, doc, getDoc, updateDoc, deleteDoc };