const reveals = document.querySelectorAll(".reveal");

function animationFade(){
    for(let i=0; i < reveals.length; i++) {
    // la hauteur de la fenetre
    const windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    console.log(elementTop+"oui");
    // la taille de ce qu'on voit de l'element
    const elementVisible = 20;

    if(elementTop < windowHeight - elementVisible){
        reveals[i].classList.add("active");
        } else{
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", animationFade);