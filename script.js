// Funcionalidade do Menu Mobile (Hamburger)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

// Fecha o menu ao clicar em um link
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
    });
});

// Highlight do menu ativo baseado no scroll (Melhora a navegabilidade)
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section, header');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Lógica do Ar Condicionado
let acOn = false;
let currentTemp = 22;

const displayElement = document.getElementById('ac-display');
const acContainer = document.getElementById('ar-condicionado');

function togglePower() {
    acOn = !acOn;
    if (acOn) {
        acContainer.classList.add('on');
        updateACDisplay();
    } else {
        acContainer.classList.remove('on');
        displayElement.innerText = '--';
    }
}

function changeTemp(amount) {
    if (!acOn) return; // Só muda se estiver ligado
    
    currentTemp += amount;
    
    // Limites de temperatura
    if (currentTemp < 16) currentTemp = 16;
    if (currentTemp > 30) currentTemp = 30;
    
    updateACDisplay();
}

function updateACDisplay() {
    displayElement.innerText = currentTemp + '°C';
}
