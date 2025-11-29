// script.js - Versão 5.0 (Com Destaques na Home)
import { db, collection, getDocs, query, addDoc, orderBy, limit } from './firebase-config.js';

// --- FUNÇÃO GLOBAL DE ALERTA ---
window.mostrarAlerta = function(mensagem, tipo = 'sucesso') {
    const alerta = document.getElementById('alerta-global');
    const msg = document.getElementById('alerta-mensagem');
    if (!alerta) return alert(mensagem); 
    msg.innerText = mensagem;
    alerta.classList.remove('erro');
    if (tipo === 'erro') alerta.classList.add('erro');
    alerta.classList.add('mostrar');
    setTimeout(() => alerta.classList.remove('mostrar'), 5000);
}

const estouNaPastaPages = window.location.pathname.includes('/pages/');
const caminhoRaiz = estouNaPastaPages ? '../' : ''; 

// Templates de Cards
const htmlCardPequeno = (post) => `
    <div class="sidebar-card" style="margin-bottom: 15px; border: 1px solid var(--dim-color); padding: 5px;">
        <a href="${caminhoRaiz}ver-post.html?id=${post.id}" style="text-decoration: none; display: flex; gap: 10px; align-items: center;">
            <div style="width: 60px; height: 60px; background-color: #333; overflow: hidden;">
                <img src="${post.imagem}" alt="img" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'">
            </div>
            <div style="flex: 1;">
                <h4 style="font-family: var(--font-gothic); font-size: 1.1rem; margin: 0; color: var(--main-color);">${post.titulo}</h4>
                <small style="color: var(--dim-color); font-size: 0.8rem;">${post.categoria.toUpperCase()}</small>
            </div>
        </a>
    </div>`;

const htmlCardGrande = (post) => `
    <div class="hub-card border-simple" style="padding: 10px; display: flex; flex-direction: column; background: var(--bg-color);">
        <div style="width: 100%; height: 180px; background-color: #222; margin-bottom: 10px; overflow: hidden; border: 1px solid var(--dim-color);">
            <img src="${post.imagem}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'">
        </div>
        <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:var(--dim-color); margin-bottom:5px;">
            <span>${post.categoria.toUpperCase()}</span>
            <span>${post.data}</span>
        </div>
        <h3 class="gothic-sub" style="font-size: 1.5rem; margin-bottom: 5px;">${post.titulo}</h3>
        <p class="terminal-text" style="font-size: 0.9rem; flex-grow: 1;">${post.resumo}</p>
        <a href="${caminhoRaiz}ver-post.html?id=${post.id}" class="btn-retro" style="font-size: 1rem; margin-top: 10px; text-align: center;">LER ARQUIVO >></a>
    </div>`;

document.addEventListener('DOMContentLoaded', async () => {
    
    // --- 1. CARREGAMENTO DE CONTEÚDO (HOME, HUBS E SIDEBAR) ---
    const categoryTag = document.querySelector('meta[name="page-category"]');
    const sidebarContainer = document.getElementById('recent-posts-sidebar');
    const hubContainer = document.getElementById('category-hub-grid');
    const homeGrid = document.getElementById('home-latest-grid'); // Novo container da Home

    // Só busca no banco se tiver onde exibir
    if (sidebarContainer || hubContainer || homeGrid) {
        try {
            // Pega todos os posts (em um app maior, usaríamos 'limit' e paginação)
            const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
            const querySnapshot = await getDocs(q);
            
            let todosPosts = [];
            querySnapshot.forEach((doc) => {
                todosPosts.push({ id: doc.id, ...doc.data() });
            });

            // A. Lógica da HOME (Posts Recentes)
            if (homeGrid) {
                homeGrid.innerHTML = "";
                // Pega os 3 primeiros (mais recentes)
                todosPosts.slice(0, 3).forEach(post => {
                    homeGrid.innerHTML += htmlCardGrande(post);
                });
            }

            // B. Lógica de PÁGINAS INTERNAS (Hubs e Sidebar)
            if (categoryTag) {
                const categoriaAtual = categoryTag.content;
                const postsFiltrados = todosPosts.filter(post => post.categoria === categoriaAtual);

                // Sidebar
                if (sidebarContainer) {
                    sidebarContainer.innerHTML = "<h4 style='border-bottom: 1px dashed var(--dim-color); margin-bottom: 10px;'>// ARQUIVOS RELACIONADOS</h4>";
                    postsFiltrados.slice(0, 3).forEach(post => {
                        sidebarContainer.innerHTML += htmlCardPequeno(post);
                    });
                }

                // Grid Principal do Hub
                if (hubContainer) {
                    hubContainer.innerHTML = "";
                    if(postsFiltrados.length === 0) hubContainer.innerHTML = "<p class='terminal-text'>Nenhum arquivo encontrado.</p>";
                    postsFiltrados.forEach(post => {
                        hubContainer.innerHTML += htmlCardGrande(post);
                    });
                }
            }

        } catch (error) {
            console.error("Erro ao carregar posts:", error);
        }
    }

    // --- 2. SISTEMA DE NEWSLETTER ---
    const newsForm = document.getElementById('newsletter-form');
    if (newsForm) {
        newsForm.addEventListener('submit', async (e) => {
            e.preventDefault(); 
            const emailInput = document.getElementById('newsletter-email');
            const btn = newsForm.querySelector('button');
            const textoOriginal = btn.innerText;

            btn.innerText = "PROCESSANDO...";
            btn.disabled = true;

            try {
                await addDoc(collection(db, "newsletter"), {
                    email: emailInput.value,
                    origem: window.location.pathname, 
                    data: new Date()
                });
                mostrarAlerta("VÍNCULO ESTABELECIDO. AGUARDE NOSSOS SINAIS.");
                newsForm.reset(); 
            } catch (erro) {
                mostrarAlerta("FALHA NO VÍNCULO. TENTE NOVAMENTE.", 'erro');
            } finally {
                btn.innerText = textoOriginal;
                btn.disabled = false;
            }
        });
    }
});