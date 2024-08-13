const trocaCor = (cor) => {
    let caminhos = [
        "./imagens/opcoes-cores/imagens-verde-cipreste",
        "./imagens/opcoes-cores/imagens-azul-inverno",
        "./imagens/opcoes-cores/imagens-meia-noite",
        "./imagens/opcoes-cores/imagens-estelar",
        "./imagens/opcoes-cores/imagens-rosa-claro",
    ]
        
    let imagemPrincipal = document.getElementById("imagem-visualizacao");
    let imaginha0 = document.getElementById("0-imagem-miniatura");
    let imaginha1 = document.getElementById("1-imagem-miniatura");
    let imaginha2 = document.getElementById("2-imagem-miniatura");

    imagemPrincipal.src = caminhos[cor] + "/imagem-1.jpeg"
    imaginha0.src = caminhos[cor] + "/imagem-0.jpeg"
    imaginha1.src = caminhos[cor] + "/imagem-1.jpeg"
    imaginha2.src = caminhos[cor] + "/imagem-2.jpeg"

    let tituloproduto = document.getElementById("titulo-produto");
    let nomecor = document.getElementById("nome-cor-selecionada");

    tituloproduto.innerHTML = "Pulseira loop esportiva " + caminhos[cor].slice(31) + " para caixa de 45 mm";
    nomecor.innerHTML = "Cor - " + capitalizeFirstLetter(caminhos[cor].slice(31));
}

const trocarImagem = (img) => {
    let caminhos = [
        "/imagem-0.jpeg",
        "/imagem-1.jpeg",
        "/imagem-2.jpeg"
    ]

    let imagemPrincipal = document.getElementById("imagem-visualizacao");

    let src = imagemPrincipal.src.slice(0, -13);

    imagemPrincipal.src = src + caminhos[img];
}

const trocarTamanho = (tam) => {
    let imagemPrincipal = document.getElementById("imagem-visualizacao");

    if (tam === 0) {
        imagemPrincipal.style.width = "540px";
        imagemPrincipal.style.height = "auto";
    } else {
        imagemPrincipal.style.width = "580px";
        imagemPrincipal.style.height = "auto";
    }
}

function capitalizeFirstLetter(string) {
    if (string.length === 0) return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
  }