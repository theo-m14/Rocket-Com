const reveals = document.querySelectorAll(".reveal");



function animationFade(){
    for(let i=0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 20;

    if(elementTop < windowHeight - elementVisible){
        reveals[i].classList.add("active");
        } else{
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", animationFade);