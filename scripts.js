let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicators = document.querySelectorAll('.indicators ul li');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

function updateActiveItem() {
    items.forEach((item, index) => {
        item.classList.toggle('active', index === active);
    });
    indicators.forEach((dot, index) => {
        dot.classList.toggle('active', index === active);
    });
}

function setSlider(direction) {
    items[active].classList.remove('active');
    indicators[active].classList.remove('active');
    
    if (direction === 'prev') {
        active = active - 1 < firstPosition ? lastPosition : active - 1;
    } else if (direction === 'next') {
        active = active + 1 > lastPosition ? firstPosition : active + 1;
    }

    items[active].classList.add('active');
    indicators[active].classList.add('active');
}

prevButton.addEventListener('click', () => {
    setSlider('prev');
    updateActiveItem();
});

nextButton.addEventListener('click', () => {
    setSlider('next');
    updateActiveItem();
});

// Inicializa o item ativo
updateActiveItem();

// Configuração para trocar automaticamente a imagem a cada 3 segundos
setInterval(() => {
    setSlider('next');
    updateActiveItem();
}, 3000);
