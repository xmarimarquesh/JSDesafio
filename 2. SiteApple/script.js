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

    return cor;
}

const trocarImagem = (img) => {
    let imagemPrincipal = document.getElementById("imagem-visualizacao");
    let imaginha0 = document.getElementById("0-imagem-miniatura");
    let imaginha1 = document.getElementById("1-imagem-miniatura");
    let imaginha2 = document.getElementById("2-imagem-miniatura");

    
}