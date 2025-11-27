// db.js - Base de Dados Completa com Textos para Migração

const postsDatabase = [
    // --- CRIMES REAIS ---
    {
        titulo: "O Mistério do Edifício Joelma",
        resumo: "O incêndio foi apenas o fim. Descubra a lenda do 'Crime do Poço' que amaldiçoou o terreno décadas antes.",
        categoria: "crimes",
        data: "26.11.2025",
        imagem: "../img/crimes/joelma.jpg", 
        link: "ver-post.html", // Link genérico agora
        conteudo: `
            <p>O incêndio do Edifício Joelma, ocorrido em 1974 em São Paulo, é uma das maiores tragédias da história do Brasil. Mas para os ocultistas e investigadores do paranormal, o fogo foi apenas a manifestação física de algo muito mais antigo que habitava aquele solo.</p>
            <h3>O Crime do Poço</h3>
            <p>Décadas antes do prédio ser construído, em 1948, o terreno abrigava uma casa onde Paulo Ferreira de Camargo, um professor de química, assassinou sua mãe e suas duas irmãs. Ele enterrou os corpos em um poço no quintal e continuou vivendo na casa como se nada tivesse acontecido.</p>
            <p>Quando a polícia descobriu os corpos, Paulo se trancou no banheiro e cometeu suicídio. A violência impregnada no solo, segundo médiuns que visitaram o local, criou um vórtice de energia negativa que nunca se dissipou.</p>
            <h3>As 13 Almas</h3>
            <p>Durante o incêndio de 74, treze pessoas tentaram escapar usando o elevador, mas ficaram presas e morreram carbonizadas. Seus corpos nunca foram identificados e foram enterrados lado a lado no Cemitério São Pedro. Hoje, visitantes relatam ouvir gritos vindos dos túmulos e pedidos por água.</p>
        `
    },
    {
        titulo: "A Dália Negra",
        resumo: "Elizabeth Short não foi apenas morta; ela foi transformada em uma obra de arte macabra que a polícia nunca decifrou.",
        categoria: "crimes",
        data: "20.11.2025",
        imagem: "../img/crimes/dalia.jpg",
        link: "ver-post.html",
        conteudo: `
            <p>Em 15 de janeiro de 1947, o corpo de Elizabeth Short foi encontrado em um terreno baldio em Los Angeles. A cena era tão grotesca que a primeira testemunha pensou estar vendo um manequim de loja quebrado.</p>
            <h3>A Estética da Morte</h3>
            <p>O assassino não apenas matou Elizabeth; ele a dissecou. O corpo foi cortado ao meio na altura da cintura, drenado de todo o sangue e lavado. O rosto foi cortado de orelha a orelha, criando um sorriso macabro conhecido como "Sorriso de Glasgow".</p>
            <p>A precisão dos cortes indicava alguém com conhecimento médico ou cirúrgico. O corpo foi posicionado de forma artística, com as mãos sobre a cabeça e os cotovelos dobrados em ângulos retos. Não foi um crime de paixão, foi uma exibição.</p>
        `
    },
    {
        titulo: "As Cartas de Circleville",
        resumo: "Uma cidade inteira refém de um escritor anônimo que sabia segredos mortais sobre todos os moradores.",
        categoria: "crimes",
        data: "15.11.2025",
        imagem: "../img/crimes/cartas.jpg",
        link: "ver-post.html",
        conteudo: `
            <p>Em 1976, os moradores da pequena cidade de Circleville, Ohio, começaram a receber cartas ameaçadoras. O remetente anônimo sabia segredos íntimos, casos extraconjugais e detalhes financeiros que ninguém deveria saber.</p>
            <h3>A Armadilha</h3>
            <p>O terror escalou quando Ron Gillispie, um dos alvos das cartas, recebeu uma ligação misteriosa e saiu dirigindo armado. Ele foi encontrado morto em um acidente de carro suspeito. Mais tarde, uma armadilha com uma arma de fogo foi encontrada montada para matar quem tentasse desvendar a identidade do escritor.</p>
            <p>Mesmo quando um suspeito foi preso, as cartas continuaram chegando, postadas de dentro da prisão e de cidades vizinhas, provando que o "Vigia de Circleville" talvez nunca tenha sido capturado.</p>
        `
    },

    // --- DARK WEB / TECNOLOGIA ---
    {
        titulo: "Cicada 3301",
        resumo: "O recrutamento mais misterioso da internet. Gênios ou seita digital? O que acontece com quem resolve o enigma?",
        categoria: "darkweb",
        data: "25.11.2025",
        imagem: "../img/darkweb/cicada.jpg",
        link: "ver-post.html",
        conteudo: `
            <p>"Olá. Estamos procurando indivíduos altamente inteligentes. Para encontrá-los, criamos um teste."</p>
            <p>Assim começou, em 2012, o maior mistério da era digital. Uma imagem postada no 4chan escondia mensagens esteganografadas que levavam a livros obscuros, coordenadas GPS ao redor do mundo (Polônia, Havaí, Espanha) e sites na Deep Web.</p>
            <h3>O Objetivo</h3>
            <p>Ninguém sabe ao certo quem está por trás da Cicada 3301. Agências de inteligência como a CIA? Um grupo hacker libertário? Ou uma seita ocultista digital? Aqueles que alegam ter chegado ao fim do quebra-cabeça descrevem um processo de recrutamento para desenvolver softwares de privacidade para proteger o anonimato humano na era da vigilância total.</p>
        `
    },
    {
        titulo: "A Lenda da Mariana's Web",
        resumo: "Existe uma camada da internet mais profunda que a Deep Web? Rumores sobre a computação quântica proibida.",
        categoria: "darkweb",
        data: "18.11.2025",
        imagem: "../img/darkweb/marianas.jpg",
        link: "ver-post.html",
        conteudo: `
            <p>A analogia do iceberg é famosa: a Surface Web é a ponta, a Deep Web é a parte submersa. Mas o que existe no fundo do oceano?</p>
            <h3>A Camada Proibida</h3>
            <p>A lenda da "Mariana's Web" (nomeada em homenagem às Fossas das Marianas) diz que existe uma parte da rede inacessível por navegadores comuns ou até mesmo pelo Tor. Segundo o mito, ela só pode ser acessada através de "Derivação Polimérica Falcighol", uma tecnologia que requer computadores quânticos.</p>
            <p>Dizem que é lá que estão armazenados os segredos mais sombrios da humanidade: a localização de Atlântida, arquivos do Vaticano e a IA senciente que governa a internet.</p>
        `
    },
    {
        titulo: "O Arquivo .GRIEF",
        resumo: "Creepypasta ou Realidade? Relatos sobre um formato de vídeo que corrompe a memória RAM e a mente do usuário.",
        categoria: "darkweb",
        data: "10.11.2025",
        imagem: "../img/darkweb/grief.jpg",
        link: "ver-post.html",
        conteudo: `
            <p>Fóruns obscuros de warez nos anos 2000 falavam de um formato de arquivo de vídeo impossível: o .grief.</p>
            <p>Diferente de vírus comuns que apagam o HD, o arquivo .grief supostamente usava sequências de cores estroboscópicas e frequências de áudio binaurais para induzir estados de pânico e alucinação no usuário. O computador travava em uma tela cinza estática, enquanto o usuário experimentava a sensação de que havia alguém parado logo atrás de sua cadeira.</p>
            <p>Nenhuma cópia do arquivo sobreviveu para análise, mas muitos usuários antigos da Usenet juram ter perdido amigos que assistiram ao clipe inteiro.</p>
        `
    },

    // --- ASSOMBRAÇÕES ---
    {
        titulo: "Sete Além: O Multiverso BR",
        resumo: "Você pega o ônibus errado e desce em uma versão suja e maligna da sua cidade. A lenda urbana mais assustadora do Brasil.",
        categoria: "assombracoes",
        data: "24.11.2025",
        imagem: "../img/assombracoes/setealem.jpg",
        link: "ver-post.html",
        conteudo: `
            <p>Tudo começa de forma banal: você entra em um ônibus, ou desce uma escada no metrô, e de repente percebe que as pessoas ao seu redor estão estranhas. Seus olhos são fundos, escuros. O ambiente fica sujo, com cheiro de enxofre e metal.</p>
            <h3>Bem-vindo a Sete Além</h3>
            <p>Essa lenda urbana brasileira descreve uma realidade paralela que coexiste com a nossa. Não é o inferno, mas é uma versão distorcida e hostil do nosso mundo. Os relatos são consistentes: em Sete Além, todos parecem saber que você não pertence àquele lugar e querem te manter lá.</p>
            <p>A única forma de sair é manter a calma e refazer seus passos antes que a "sincronização" seja completa.</p>
        `
    },
    {
        titulo: "A Casa Winchester",
        resumo: "Escadas que dão no teto e portas para o abismo. A mansão construída para confundir os fantasmas.",
        categoria: "assombracoes",
        data: "12.11.2025",
        imagem: "../img/assombracoes/winchester.jpg",
        link: "ver-post.html",
        conteudo: `
            <p>Sarah Winchester, herdeira da fortuna dos rifles Winchester, acreditava ser assombrada por todos os espíritos mortos pelas armas fabricadas por sua família.</p>
            <p>Sob orientação de uma médium, ela iniciou uma construção que durou 38 anos, 24 horas por dia. O objetivo não era luxo, mas confusão. A casa é um labirinto projetado para prender fantasmas.</p>
            <ul>
                <li>Escadas que terminam no teto.</li>
                <li>Portas que abrem para paredes de tijolos.</li>
                <li>Janelas no chão.</li>
                <li>O número 13 repetido obsessivamente em lustres e degraus.</li>
            </ul>
        `
    },
    {
        titulo: "Fenômeno EVP",
        resumo: "Vozes Eletrônicas: Como sintonizar frequências mortas no seu rádio para ouvir quem já partiu.",
        categoria: "assombracoes",
        data: "05.11.2025",
        imagem: "../img/assombracoes/radio.jpg",
        link: "ver-post.html",
        conteudo: `
            <p>O Fenômeno de Voz Eletrônica (EVP) é a teoria de que espíritos podem manipular energia eletromagnética para imprimir suas vozes em gravações de áudio.</p>
            <h3>Como funciona?</h3>
            <p>A técnica mais comum envolve usar um rádio sintonizado no "ruído branco" (aquele chiado entre estações) ou deixar um gravador ligado em uma sala vazia. Ao reproduzir a fita, pesquisadores alegam ouvir frases curtas, sussurros e respostas inteligentes a perguntas feitas horas antes.</p>
            <p>Céticos dizem que é pareidolia auditiva (o cérebro buscando padrões), mas algumas gravações, como as de Raudive nos anos 70, permanecem inexplicáveis até hoje.</p>
        `
    },

    // --- BIBLIOTECA (LIVROS, FILMES, JOGOS) ---
    {
        titulo: "O Rei de Amarelo",
        resumo: "[ANÁLISE] Como a obra de Robert Chambers influenciou o horror cósmico moderno e a série True Detective.",
        categoria: "livros",
        data: "22.11.2025",
        imagem: "../img/biblioteca/kingyellow.jpg",
        link: "ver-post.html",
        conteudo: `
            <p><em>"Você encontrou o Sinal Amarelo?"</em></p>
            <p>Publicado em 1895, este livro de contos apresenta uma peça de teatro fictícia que induz à loucura qualquer um que leia seu segundo ato. A mitologia de Carcosa, Hastur e o Rei de Trapos influenciou H.P. Lovecraft e, mais recentemente, a primeira temporada de True Detective.</p>
            <p>O horror aqui não é o monstro, mas a ideia de que a realidade é frágil e pode ser rasgada por uma simples obra de arte.</p>
        `
    },
    {
        titulo: "Hereditário (2018)",
        resumo: "[INDICAÇÃO] Um estudo sobre luto que se transforma em um pesadelo ocultista. Perturbador e genial.",
        categoria: "filmes",
        data: "28.11.2025",
        imagem: "../img/biblioteca/hereditario.jpg",
        link: "ver-post.html",
        conteudo: `
            <p>Ari Aster entregou uma obra-prima moderna. O filme começa como um drama familiar sobre a perda de uma avó matriarca, mas lentamente descasca camadas para revelar uma conspiração satânica envolvendo o demônio Paimon.</p>
            <p>A atuação de Toni Collette é visceral. O filme evita sustos fáceis (jump scares) em favor de uma atmosfera de pavor crescente e imagens que ficam gravadas na retina, como a infame cena do carro.</p>
        `
    },
    {
        titulo: "Silent Hill 2",
        resumo: "[ANÁLISE] O terror psicológico definitivo. Como a neblina esconde seus próprios pecados.",
        categoria: "jogos",
        data: "30.11.2025",
        imagem: "../img/biblioteca/silenthill.jpg",
        link: "ver-post.html",
        conteudo: `
            <p>James Sunderland recebe uma carta de sua esposa. O problema? Ela morreu há três anos.</p>
            <p>Silent Hill 2 não é sobre zumbis ou armas biológicas. A cidade é um espelho da psique do protagonista. Cada monstro representa uma parte da culpa, do desejo sexual reprimido e do trauma de James. O Pyramid Head não é apenas um vilão, ele é o desejo de punição de James.</p>
            <p>Com sua trilha sonora melancólica de Akira Yamaoka e enredo maduro, o jogo provou que videogames podem ser uma forma de arte profunda e perturbadora.</p>
        `
    }
];