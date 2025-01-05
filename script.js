document.addEventListener('DOMContentLoaded', () => {
    initCarousel();    // Inicializa o carrossel da página inicial
    initCarousels();   // Inicializa os carrosséis da seção de serviços e produtos
});

/* Inicializa o Carrossel da Página Inicial */
function initCarousel() {
    const images = document.querySelectorAll('#home .carousel img');
    const prevButton = document.querySelector('#home .carousel .prev');
    const nextButton = document.querySelector('#home .carousel .next');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    showImage(currentIndex); // Exibe a primeira imagem ao carregar
}

/* Inicializa Carrosséis de Serviços e Produtos */
function initCarousels() {
    const carousels = document.querySelectorAll('.split-container .carousel');

    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('img');
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');
        let currentIndex = 0;

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
        }

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });

        showImage(currentIndex); // Exibe a primeira imagem ao carregar
    });
}
