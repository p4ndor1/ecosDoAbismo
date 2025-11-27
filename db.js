// db.js - Base de Dados do Ecos do Abismo

const postsDatabase = [
    // --- CRIMES REAIS ---
    {
        id: "joelma",
        titulo: "O Mistério do Edifício Joelma",
        resumo: "O incêndio foi apenas o fim. Descubra a lenda do 'Crime do Poço' que amaldiçoou o terreno décadas antes.",
        categoria: "crimes",
        data: "26.11.2025",
        imagem: "../img/crimes/joelma.jpg", 
        link: "../posts/crimes/o-predio-joelma.html"
    },
    {
        id: "dalia-negra",
        titulo: "A Dália Negra",
        resumo: "Elizabeth Short não foi apenas morta; ela foi transformada em uma obra de arte macabra que a polícia nunca decifrou.",
        categoria: "crimes",
        data: "20.11.2025",
        imagem: "../img/crimes/dalia.jpg",
        link: "../posts/crimes/dalia-negra.html"
    },
    {
        id: "circleville",
        titulo: "As Cartas de Circleville",
        resumo: "Uma cidade inteira refém de um escritor anônimo que sabia segredos mortais sobre todos os moradores.",
        categoria: "crimes",
        data: "15.11.2025",
        imagem: "../img/crimes/cartas.jpg",
        link: "../posts/crimes/cartas-circleville.html"
    },

    // --- DARK WEB / TECNOLOGIA ---
    {
        id: "cicada",
        titulo: "Cicada 3301",
        resumo: "O recrutamento mais misterioso da internet. Gênios ou seita digital? O que acontece com quem resolve o enigma?",
        categoria: "darkweb",
        data: "25.11.2025",
        imagem: "../img/darkweb/cicada.jpg",
        link: "../posts/darkweb/cicada-3301.html"
    },
    {
        id: "marianas",
        titulo: "A Lenda da Mariana's Web",
        resumo: "Existe uma camada da internet mais profunda que a Deep Web? Rumores sobre a computação quântica proibida.",
        categoria: "darkweb",
        data: "18.11.2025",
        imagem: "../img/darkweb/marianas.jpg",
        link: "../posts/darkweb/marianas-web.html"
    },
    {
        id: "grief",
        titulo: "O Arquivo .GRIEF",
        resumo: "Creepypasta ou Realidade? Relatos sobre um vídeo que corrompe a memória RAM e a mente do usuário.",
        categoria: "darkweb",
        data: "10.11.2025",
        imagem: "../img/darkweb/grief.jpg",
        link: "../posts/darkweb/arquivo-grief.html"
    },

    // --- ASSOMBRAÇÕES ---
    {
        id: "setealem",
        titulo: "Sete Além: O Multiverso BR",
        resumo: "Você pega o ônibus errado e desce em uma versão suja e maligna da sua cidade. A lenda urbana mais assustadora do Brasil.",
        categoria: "assombracoes",
        data: "24.11.2025",
        imagem: "../img/assombracoes/setealem.jpg",
        link: "../posts/assombracoes/sete-alem.html"
    },
    {
        id: "winchester",
        titulo: "A Casa Winchester",
        resumo: "Escadas que dão no teto e portas para o abismo. A mansão construída para confundir os fantasmas.",
        categoria: "assombracoes",
        data: "12.11.2025",
        imagem: "../img/assombracoes/winchester.jpg",
        link: "../posts/assombracoes/casa-winchester.html"
    },
    {
        id: "evp",
        titulo: "Fenômeno EVP",
        resumo: "Vozes Eletrônicas: Como sintonizar frequências mortas no seu rádio para ouvir quem já partiu.",
        categoria: "assombracoes",
        data: "05.11.2025",
        imagem: "../img/assombracoes/radio.jpg",
        link: "../posts/assombracoes/evp.html"
    },

    // --- BIBLIOTECA: LIVROS (Resenhas/Malditos) ---
    {
        id: "rei-amarelo",
        titulo: "O Rei de Amarelo",
        resumo: "[ANÁLISE] Como a obra de Robert Chambers influenciou o horror cósmico moderno e a série True Detective.",
        categoria: "livros",
        data: "22.11.2025",
        imagem: "../img/biblioteca/kingyellow.jpg",
        link: "../posts/livros/rei-de-amarelo.html"
    },
    {
        id: "lovecraft",
        titulo: "O Chamado de Cthulhu",
        resumo: "[RESENHA] Relendo o clássico: Por que o medo do desconhecido ainda funciona 100 anos depois?",
        categoria: "livros",
        data: "08.11.2025",
        imagem: "../img/biblioteca/cthulhu.jpg",
        link: "../posts/livros/resenha-cthulhu.html"
    },
    {
        id: "codex",
        titulo: "Codex Gigas",
        resumo: "A Bíblia do Diabo. Um monge condenado teria escrito este livro gigante em uma única noite com ajuda profana.",
        categoria: "livros",
        data: "01.11.2025",
        imagem: "../img/biblioteca/codex.jpg",
        link: "../posts/livros/codex-gigas.html"
    },

    // --- BIBLIOTECA: FILMES (Resenhas/Indicações) ---
    {
        id: "hereditario",
        titulo: "Hereditário (2018)",
        resumo: "[INDICAÇÃO] Um estudo sobre luto que se transforma em um pesadelo ocultista. Perturbador e genial.",
        categoria: "filmes",
        data: "28.11.2025",
        imagem: "../img/biblioteca/hereditario.jpg",
        link: "../posts/filmes/resenha-hereditario.html"
    },
    {
        id: "nosferatu",
        titulo: "Nosferatu (1922)",
        resumo: "[CLÁSSICO] A sombra do vampiro original. Por que este filme mudo ainda causa desconforto?",
        categoria: "filmes",
        data: "15.11.2025",
        imagem: "../img/biblioteca/nosferatu.jpg",
        link: "../posts/filmes/resenha-nosferatu.html"
    },
    {
        id: "blairwitch",
        titulo: "A Bruxa de Blair",
        resumo: "O filme que inventou o marketing viral de terror e nos fez ter medo de ficar parados no canto da sala.",
        categoria: "filmes",
        data: "05.11.2025",
        imagem: "../img/biblioteca/blair.jpg",
        link: "../posts/filmes/resenha-blair-witch.html"
    },

    // --- BIBLIOTECA: JOGOS (Resenhas/Indicações) ---
    {
        id: "silenthill2",
        titulo: "Silent Hill 2",
        resumo: "[ANÁLISE] O terror psicológico definitivo. Como a neblina esconde seus próprios pecados.",
        categoria: "jogos",
        data: "30.11.2025",
        imagem: "../img/biblioteca/silenthill.jpg",
        link: "../posts/jogos/analise-silent-hill.html"
    },
    {
        id: "ironlung",
        titulo: "Iron Lung",
        resumo: "[INDICAÇÃO] Um oceano de sangue em uma lua alienígena. Claustrofobia pura em gráficos PS1.",
        categoria: "jogos",
        data: "20.11.2025",
        imagem: "../img/biblioteca/ironlung.jpg",
        link: "../posts/jogos/indica-iron-lung.html"
    },
    {
        id: "pt",
        titulo: "P.T. (Demo)",
        resumo: "O jogo que nunca existiu, mas mudou o terror para sempre. O corredor em loop infinito.",
        categoria: "jogos",
        data: "10.11.2025",
        imagem: "../img/biblioteca/pt.jpg",
        link: "../posts/jogos/historia-pt.html"
    }
];