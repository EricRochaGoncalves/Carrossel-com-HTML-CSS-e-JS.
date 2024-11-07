// Seleciona os elementos relevantes
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;
let currentIndex = 0;

// Função para mostrar a imagem atual
function showImage(index) {
    // A propriedade transform faz a transição das imagens
    const offset = -index * 600; // Largura de cada item
    document.querySelector(".carousel-images").style.transform = `translateX(${offset}px)`;
}

// Função para ir à imagem anterior
function showPrevImage() {
    if (currentIndex === 0) {
        currentIndex = totalItems - 1; // Vai para a última imagem
    } else {
        currentIndex--; // Decrementa o índice
    }
    showImage(currentIndex); // Atualiza a imagem visível
}

// Função para ir à próxima imagem
function showNextImage() {
    if (currentIndex === totalItems - 1) {
        currentIndex = 0; // Vai para a primeira imagem
    } else {
        currentIndex++; // Incrementa o índice
    }
    showImage(currentIndex); // Atualiza a imagem visível
}

// Event listeners para os botões
prevBtn.addEventListener("click", showPrevImage);
nextBtn.addEventListener("click", showNextImage);

// Inicializa o carrossel com a primeira imagem
showImage(currentIndex);


