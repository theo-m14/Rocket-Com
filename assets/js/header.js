// js pour le burger button de la version mobile
const getBurgerButton = document.getElementById('burgerButton');
const getBurger = document.getElementById('burger');
const getBurgerNavbar = document.querySelector('.navbarOfBurger');
const getNavbar = document.querySelector('nav');

// lors du click sur le burger button > rajout si non présent/retrait si déjà présent de la classe "active" 
getBurgerButton.addEventListener('click', function() {
    getBurger.classList.toggle('active');
    getBurgerNavbar.classList.toggle('active');
    getModalBg.classList.toggle('active')
})

const getModalBg = document.getElementById("modalBackground");
// modal background, lors du clique sur le bg, retrait de la classe "active" du bg, background aussi utilisé pour le menu burger
getModalBg.addEventListener('click', function(){
    getModalBg.classList.remove('active');
    // pour le burger, lors du click > même effet que lors d'un click sur la croix du burger
    getBurger.classList.remove('active');
    getBurgerNavbar.classList.remove('active');
})

// Media queries
if (window.matchMedia("(min-width: 900px)").matches) {
    getNavbar.classList.remove("navbarOfBurger");
};

