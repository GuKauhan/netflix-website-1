document.addEventListener("DOMContentLoaded", () => {
    const filmes = {
        acao: [
            { titulo: "Missão Impossível", imagem: "img/missao-impossivel.jpg", link: "https://www.netflix.com/missao-impossivel" },
            { titulo: "Velozes e Furiosos", imagem: "img/velozes-furiosos.jpg", link: "https://www.netflix.com/velozes-furiosos" },
            { titulo: "John Wick", imagem: "img/john-wick.jpg", link: "https://www.netflix.com/john-wick" }
        ],
        terror: [
            { titulo: "Invocação do Mal", imagem: "img/invocacao-mal.jpg", link: "https://www.netflix.com/invocacao-mal" },
            { titulo: "It: A Coisa", imagem: "img/it-a-coisa.jpg", link: "https://www.netflix.com/it-a-coisa" },
            { titulo: "O Exorcista", imagem: "img/o-exorcista.jpg", link: "https://www.netflix.com/o-exorcista" }
        ],
        romance: [
            { titulo: "Titanic", imagem: "img/titanic.jpg", link: "https://www.netflix.com/titanic" },
            { titulo: "Diário de uma Paixão", imagem: "img/diario-paixao.jpg", link: "https://www.netflix.com/diario-paixao" },
            { titulo: "Como Eu Era Antes de Você", imagem: "img/como-eu-era.jpg", link: "https://www.netflix.com/como-eu-era" }
        ],
        comedia: [
            { titulo: "Se Beber, Não Case", imagem: "img/se-beber-nao-case.jpg", link: "https://www.netflix.com/se-beber-nao-case" },
            { titulo: "As Branquelas", imagem: "img/as-branquelas.jpg", link: "https://www.netflix.com/as-branquelas" },
            { titulo: "Deadpool", imagem: "img/deadpool.jpg", link: "https://www.netflix.com/deadpool" }
        ]
    };

    function carregarFilmes(tema, containerId) {
        const container = document.getElementById(containerId);
        filmes[tema].forEach(filme => {
            const link = document.createElement("a");
            link.href = filme.link;
            link.target = "_blank";

            const img = document.createElement("img");
            img.src = filme.imagem;
            img.alt = filme.titulo;
            img.title = filme.titulo;
            img.classList.add("filme-imagem");

            link.appendChild(img);
            container.appendChild(link);
        });
    }

    // Carregar filmes para cada tema
    carregarFilmes("acao", "acao");
    carregarFilmes("terror", "terror");
    carregarFilmes("romance", "romance");
    carregarFilmes("comedia", "comedia");
});