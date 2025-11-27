// db.js - A lista mestra de todos os contos do abismo

const postsDatabase = [
    // --- CATEGORIA: CRIMES REAIS ---
    {
        id: "joelma",
        titulo: "O Mistério do Edifício Joelma",
        resumo: "O incêndio foi apenas o fim. Descubra a lenda do 'Crime do Poço' que amaldiçoou o terreno décadas antes.",
        categoria: "crimes", // Importante: isso define onde ele aparece
        data: "26.11.2025",
        imagem: "img/crimes/joelma.jpg", // Caminho sugerido
        link: "posts/crimes/o-predio-joelma.html"
    },
    {
        id: "dalia-negra",
        titulo: "A Dália Negra",
        resumo: "Elizabeth Short não foi apenas morta; ela foi transformada em uma obra de arte macabra que a polícia nunca decifrou.",
        categoria: "crimes",
        data: "20.11.2025",
        imagem: "img/crimes/dalia.jpg",
        link: "posts/crimes/dalia-negra.html"
    },
    {
        id: "circleville",
        titulo: "As Cartas de Circleville",
        resumo: "Uma cidade inteira refém de um escritor anônimo que sabia segredos mortais sobre todos os moradores.",
        categoria: "crimes",
        data: "15.11.2025",
        imagem: "img/crimes/cartas.jpg",
        link: "posts/crimes/cartas-circleville.html"
    },

    // --- CATEGORIA: DARK WEB / TECNOLOGIA ---
    {
        id: "cicada",
        titulo: "Cicada 3301",
        resumo: "O recrutamento mais misterioso da internet. Gênios ou seita digital? O que acontece com quem resolve o enigma?",
        categoria: "darkweb",
        data: "25.11.2025",
        imagem: "img/darkweb/cicada.jpg",
        link: "posts/darkweb/cicada-3301.html"
    },
    {
        id: "marianas",
        titulo: "A Lenda da Mariana's Web",
        resumo: "Existe uma camada da internet mais profunda que a Deep Web? Rumores sobre a computação quântica proibida.",
        categoria: "darkweb",
        data: "18.11.2025",
        imagem: "img/darkweb/marianas.jpg",
        link: "posts/darkweb/marianas-web.html"
    },
    {
        id: "grief",
        titulo: "O Arquivo .GRIEF",
        resumo: "Relatos sobre um formato de vídeo corrompido que supostamente queima a memória RAM e a mente do usuário.",
        categoria: "darkweb",
        data: "10.11.2025",
        imagem: "img/darkweb/grief.jpg",
        link: "posts/darkweb/arquivo-grief.html"
    },

    // --- CATEGORIA: ASSOMBRAÇÕES ---
    {
        id: "setealem",
        titulo: "Sete Além: O Multiverso BR",
        resumo: "Você pega o ônibus errado e desce em uma versão suja e maligna da sua cidade. A lenda urbana mais assustadora do Brasil.",
        categoria: "assombracoes",
        data: "24.11.2025",
        imagem: "img/assombracoes/setealem.jpg",
        link: "posts/assombracoes/sete-alem.html"
    },
    {
        id: "winchester",
        titulo: "A Casa Winchester",
        resumo: "Escadas que dão no teto e portas para o abismo. A mansão construída para confundir os fantasmas.",
        categoria: "assombracoes",
        data: "12.11.2025",
        imagem: "img/assombracoes/winchester.jpg",
        link: "posts/assombracoes/casa-winchester.html"
    },
    {
        id: "evp",
        titulo: "Fenômeno EVP",
        resumo: "Vozes Eletrônicas: Como sintonizar frequências mortas no seu rádio para ouvir quem já partiu.",
        categoria: "assombracoes",
        data: "05.11.2025",
        imagem: "img/assombracoes/radio.jpg",
        link: "posts/assombracoes/evp.html"
    },

    // --- CATEGORIA: BIBLIOTECA (Jogos, Filmes, Livros) ---
    {
        id: "rei-amarelo",
        titulo: "O Rei de Amarelo",
        resumo: "O livro fictício que enlouquece quem o lê, e como ele vazou para a nossa realidade.",
        categoria: "livros",
        data: "22.11.2025",
        imagem: "img/biblioteca/kingyellow.jpg",
        link: "posts/livros/rei-de-amarelo.html"
    },
    {
        id: "codex",
        titulo: "Codex Gigas",
        resumo: "A Bíblia do Diabo. Um monge condenado teria escrito este livro gigante em uma única noite com ajuda profana.",
        categoria: "livros",
        data: "08.11.2025",
        imagem: "img/biblioteca/codex.jpg",
        link: "posts/livros/codex-gigas.html"
    },
    {
        id: "pnakotic",
        titulo: "Manuscritos Pnakóticos",
        resumo: "Fragmentos de textos anteriores à humanidade encontrados na Deep Web.",
        categoria: "livros",
        data: "01.11.2025",
        imagem: "img/biblioteca/pnakotic.jpg",
        link: "posts/livros/manuscritos.html"
    }
];