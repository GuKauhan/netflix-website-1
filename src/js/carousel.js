function scrollLeft(containerId) {
    // Obtém o elemento do carrossel pelo ID
    const container = document.getElementById(containerId);
    const scrollAmount = 300; // Define a quantidade de pixels para rolar
    // Rola o carrossel para a esquerda
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
}

function scrollRight(containerId) {
    // Obtém o elemento do carrossel pelo ID
    const container = document.getElementById(containerId);
    const scrollAmount = 300; // Define a quantidade de pixels para rolar
    // Rola o carrossel para a direita
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}