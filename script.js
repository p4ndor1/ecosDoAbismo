// script.js - Versão 4.0 (Com Alerta Global)
import { db, collection, getDocs, query, addDoc } from './firebase-config.js';

// --- FUNÇÃO GLOBAL DE ALERTA (ANEXADA AO WINDOW) ---
window.mostrarAlerta = function(mensagem, tipo = 'sucesso') {
    const alerta = document.getElementById('alerta-global');
    const msg = document.getElementById('alerta-mensagem');

    // Se o elemento não existe, usa alert() de fallback
    if (!alerta) return alert(mensagem); 

    msg.innerText = mensagem;
    alerta.classList.remove('erro');

    if (tipo === 'erro') {
        alerta.classList.add('erro');
    }

    alerta.classList.add('mostrar');

    setTimeout(() => {
        alerta.classList.remove('mostrar');
    }, 5000);
}

// Detector de onde estamos (Raiz ou Pasta Pages?)
const estouNaPastaPages = window.location.pathname.includes('/pages/');
const caminhoRaiz = estouNaPastaPages ? '../' : ''; 

// Função Card Pequeno
function criarCardPequeno(post) {
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
    
    // --- 1. CARREGAR POSTS (Lógica Antiga) ---
    // (Omitido para brevidade, mantendo a lógica de carregamento dos cards nos hubs e sidebar)
    const categoryTag = document.querySelector('meta[name="page-category"]');
    const sidebarContainer = document.getElementById('recent-posts-sidebar');
    const hubContainer = document.getElementById('category-hub-grid');

    if (sidebarContainer || hubContainer) {
        try {
            const q = query(collection(db, "posts")); 
            const querySnapshot = await getDocs(q);
            
            let postsEncontrados = [];
            querySnapshot.forEach((doc) => {
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
            console.error("Erro ao carregar posts:", error);
        }
    }


    // --- 2. SISTEMA DE NEWSLETTER (NOVO) ---
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
                const email = emailInput.value;
                
                await addDoc(collection(db, "newsletter"), {
                    email: email,
                    origem: window.location.pathname, 
                    data: new Date()
                });

                // AQUI USAMOS A NOVA FUNÇÃO:
                mostrarAlerta("VÍNCULO ESTABELECIDO. AGUARDE NOSSOS SINAIS.");
                newsForm.reset(); 
            } catch (erro) {
                // E AQUI TAMBÉM:
                mostrarAlerta("FALHA NO VÍNCULO. TENTE NOVAMENTE.", 'erro');
                console.error("Erro newsletter:", erro);
            } finally {
                btn.innerText = textoOriginal;
                btn.disabled = false;
            }
        });
    }
});