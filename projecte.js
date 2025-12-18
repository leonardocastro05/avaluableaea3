// ============================================
// PORTFOLIO LEONARDO - BLACK & GOLD THEME
// ============================================

// ============================================
// INTRO NETFLIX AMB SO
// ============================================
document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("introduccio");
    const startButton = document.getElementById("boto-inici");
    const introLogo = document.querySelector(".logo-introduccio");
    const audio = new Audio('so/intro-netflix.mp3');

    // Desactiva l'animació automàtica al carregar
    introLogo.style.animation = "none";

    // Quan l'usuari clica el botó
    startButton.addEventListener("click", () => {
        // Amaga el botó
        startButton.style.display = "none";

        // Inicia l'animació del logo
        introLogo.style.animation = "netflixGrow 2.5s";

        // Reprodueix l'àudio sincronitzat
        audio.play().catch(error => {
            console.log("Error reproduint àudio:", error);
        });

        // Amaga la intro després de l'animació (2.5s)
        setTimeout(() => {
            intro.classList.add("hidden");
        }, 2500);
    });
});

// ============================================
// MENÚ HAMBURGUESA FULLSCREEN
// ============================================
const hamburger = document.querySelector('.hamburguesa');
const menuOverlay = document.querySelector('.menu-superposa');
const menuLinks = document.querySelectorAll('.enllac-menu');

// Toggle menú quan es clica la hamburguesa
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menuOverlay.classList.toggle('active');
});

// Tanca el menú quan es clica un enllaç
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        menuOverlay.classList.remove('active');
    });
});

// Opcional: Tanca el menú si es clica fora dels enllaços
menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
        hamburger.classList.remove('active');
        menuOverlay.classList.remove('active');
    }
});

// ============================================
// FILTRE DE PROJECTES
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.boto-filtre');
    const projectItems = document.querySelectorAll('.element-projecte');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Elimina la classe 'active' de tots els botons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Afegeix 'active' al botó clicat
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            projectItems.forEach(item => {
                const category = item.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
});