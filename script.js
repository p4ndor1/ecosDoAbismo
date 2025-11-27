// script.js - Automação do Ecos do Abismo

// Função auxiliar para criar o HTML de um Card Pequeno (Sidebar)
function criarCardPequeno(post) {
    return `
        <div class="sidebar-card" style="margin-bottom: 15px; border: 1px solid var(--dim-color); padding: 5px;">
            <a href="${post.link}" style="text-decoration: none; display: flex; gap: 10px; align-items: center;">
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

// Função auxiliar para criar HTML de Card Grande (Página de Categoria)
function criarCardGrande(post) {
    return `
        <div class="hub-card border-simple" style="padding: 10px; display: flex; flex-direction: column;">
            <div style="width: 100%; height: 150px; background-color: #222; margin-bottom: 10px; overflow: hidden; border: 1px solid var(--dim-color);">
                <img src="${post.imagem}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'">
            </div>
            <h3 class="gothic-sub" style="font-size: 1.5rem; margin-bottom: 5px;">${post.titulo}</h3>
            <p class="terminal-text" style="font-size: 0.9rem; flex-grow: 1;">${post.resumo}</p>
            <a href="${post.link}" class="btn-retro" style="font-size: 1rem; margin-top: 10px; text-align: center;">LER ARQUIVO >></a>
        </div>
    `;
}

// --- LÓGICA PRINCIPAL ---
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Identificar onde estamos
    // Vamos usar uma tag no HTML para saber a categoria da página atual
    // Ex: <meta name="page-category" content="crimes">
    const categoryTag = document.querySelector('meta[name="page-category"]');
    
    if (categoryTag) {
        const categoriaAtual = categoryTag.content;
        
        // Filtrar posts dessa categoria
        const postsDaCategoria = postsDatabase.filter(post => post.categoria === categoriaAtual);

        // A. Se existe um elemento com ID "recent-posts-sidebar", preenche ele (Para os POSTS)
        const sidebarContainer = document.getElementById('recent-posts-sidebar');
        if (sidebarContainer) {
            sidebarContainer.innerHTML = "<h4 style='border-bottom: 1px dashed var(--dim-color); margin-bottom: 10px;'>// ARQUIVOS RELACIONADOS</h4>";
            // Pega os 3 primeiros
            postsDaCategoria.slice(0, 3).forEach(post => {
                sidebarContainer.innerHTML += criarCardPequeno(post);
            });
        }

        // B. Se existe um elemento com ID "category-hub-grid", preenche ele (Para as PÁGINAS DE CATEGORIA)
        const hubContainer = document.getElementById('category-hub-grid');
        if (hubContainer) {
            hubContainer.innerHTML = ""; // Limpa
            postsDaCategoria.forEach(post => {
                hubContainer.innerHTML += criarCardGrande(post);
            });
        }
    }
});