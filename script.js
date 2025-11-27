// script.js - Versão Dinâmica 2.0
import { db, collection, getDocs, query } from './firebase-config.js';

// Detector de onde estamos (Raiz ou Pasta Pages?)
const estouNaPastaPages = window.location.pathname.includes('/pages/');
const caminhoRaiz = estouNaPastaPages ? '../' : ''; // Se estiver em pages, volta um nível

// Função Card Pequeno
function criarCardPequeno(post) {
    // O link agora aponta sempre para o ver-post.html com o ID do documento
    return `
        <div class="sidebar-card" style="margin-bottom: 15px; border: 1px solid var(--dim-color); padding: 5px;">
            <a href="${caminhoRaiz}ver-post.html?id=${post.id}" style="text-decoration: none; display: flex; gap: 10px; align-items: center;">
                <div style="width: 60px; height: 60px; background-color: #333; overflow: hidden;">
                    <img src="${post.imagem}" alt="img" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'">
                </div>
                <div style="flex: 1;">
                    <h4 style="font-family: var(--font-gothic); font-size: 1.1rem; margin: 0; color: var(--main-color);">${post.titulo}</h4>
                    <small style="color: var(--dim-color); font-size: 0.8rem;">${post.data}</small>
                </div>
            </a>
        </div>
    `;
}

// Função Card Grande
function criarCardGrande(post) {
    return `
        <div class="hub-card border-simple" style="padding: 10px; display: flex; flex-direction: column;">
            <div style="width: 100%; height: 150px; background-color: #222; margin-bottom: 10px; overflow: hidden; border: 1px solid var(--dim-color);">
                <img src="${post.imagem}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'">
            </div>
            <h3 class="gothic-sub" style="font-size: 1.5rem; margin-bottom: 5px;">${post.titulo}</h3>
            <p class="terminal-text" style="font-size: 0.9rem; flex-grow: 1;">${post.resumo}</p>
            <a href="${caminhoRaiz}ver-post.html?id=${post.id}" class="btn-retro" style="font-size: 1rem; margin-top: 10px; text-align: center;">LER ARQUIVO >></a>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', async () => {
    const categoryTag = document.querySelector('meta[name="page-category"]');
    const sidebarContainer = document.getElementById('recent-posts-sidebar');
    const hubContainer = document.getElementById('category-hub-grid');

    if (!sidebarContainer && !hubContainer && !categoryTag) return;

    try {
        const q = query(collection(db, "posts")); 
        const querySnapshot = await getDocs(q);
        
        let postsEncontrados = [];
        querySnapshot.forEach((doc) => {
            // AQUI ESTÁ O SEGREDO: Pegamos o ID do documento do Firebase
            postsEncontrados.push({ id: doc.id, ...doc.data() });
        });

        if (categoryTag) {
            const categoriaAtual = categoryTag.content;
            const postsFiltrados = postsEncontrados.filter(post => post.categoria === categoriaAtual);

            if (sidebarContainer) {
                sidebarContainer.innerHTML = "<h4 style='border-bottom: 1px dashed var(--dim-color); margin-bottom: 10px;'>// ARQUIVOS RELACIONADOS</h4>";
                postsFiltrados.slice(0, 3).forEach(post => {
                    sidebarContainer.innerHTML += criarCardPequeno(post);
                });
            }

            if (hubContainer) {
                hubContainer.innerHTML = "";
                if(postsFiltrados.length === 0) hubContainer.innerHTML = "<p class='terminal-text'>Nenhum arquivo encontrado.</p>";
                postsFiltrados.forEach(post => {
                    hubContainer.innerHTML += criarCardGrande(post);
                });
            }
        }
    } catch (error) {
        console.error("Erro:", error);
    }
});