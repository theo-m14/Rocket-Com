const reveals = document.querySelectorAll(".reveal");

function animationFade(){
    // pour chaque element avec la classe "reveal"
    for(let i=0; i < reveals.length; i++) {
    // la hauteur de la fenetre
    const windowHeight = window.innerHeight;
    // distance entre le haut de l'element et le haut de la page
    let elementTop = reveals[i].getBoundingClientRect().top;
    // la taille de ce que l'on voit de l'element
    const elementVisible = 20;

    // lorsque l'element entre dans le champ de la hauteur de la page de 20px j'ajoute la classe "active" à l'element pour activer l'animation d'apparition, sinon je la retire
    if(elementTop < windowHeight - elementVisible){
        reveals[i].classList.add("active");
        } else{
            reveals[i].classList.remove("active");
        }
    }
}
// lors du scroll > ma fonction d'ajout ou retrait de classe "active"
window.addEventListener("scroll", animationFade);

// js pour la section galerie
const getContainerImgGalerie = document.getElementById("imageGallerieContainer");
const getGalerieImage = getContainerImgGalerie.querySelectorAll(".imgContainer > img");
const getModalGalerie = document.getElementById("modalGalerie");
const getModalBg = document.getElementById("modalBackground");
const createImg = document.createElement('img');

const getSectionGalerie = document.getElementById("sectionGallerie");
const getChevronContainer = getSectionGalerie.querySelector(".chevronContainer");
const getChevron = document.querySelectorAll(".chevron");

// get pour section equipe
const getMainEquipePhoto = document.querySelector(".mainPhoto");
const getGaucheEquipePhoto = document.querySelector(".leftPhoto");
const getDroiteEquipePhoto = document.querySelector(".rightPhoto");

// modal, lors du clique ajout de la classe "active" sur le modal et modalbackground, ajout d'une div img pour le modal + modif de l'attribut src pour rajouter l'image lié à l'élément
getGalerieImage.forEach(e => {
    e.addEventListener("click", function(e){
        createImg.setAttribute('src',e.target.getAttribute('src'));
        getModalGalerie.classList.add('active');
        getModalBg.classList.add('active');
        getModalGalerie.appendChild(createImg);
    })
});

// modal background, lors du clique sur le bg, retrait des classes "active" du modal et bg, plus la balise img est supprimé après 0.33secondes
getModalBg.addEventListener('click', function(){
    getModalGalerie.classList.remove('active');
    getModalBg.classList.remove('active');
    setTimeout(() => {
        getModalGalerie.removeChild(createImg);
    }, 330);
})

// tableau d'image avec nom pour la galerie
const galerieArray = [ 
    { "nom": "Mondare", "src": "gallerie01.jpg"},
    { "nom": "Neucaro", "src": "gallerie02.jpg"},
    { "nom": "Buildzer", "src": "gallerie03.jpg"},
    { "nom": "Cashlan", "src": "gallerie04.jpg"},
    { "nom": "Vlogon", "src": "gallerie05.jpg"},
    { "nom": "Offlit", "src": "gallerie06.jpg"},
    { "nom": "Sitent", "src": "gallerie07.jpg"},
    { "nom": "Flixie", "src": "gallerie08.jpg"},
    { "nom": "Mwebe", "src": "gallerie09.jpg"},
    { "nom": "Opoint", "src": "gallerie10.jpg"},
    { "nom": "Revibe", "src": "gallerie11.jpg"},
    { "nom": "Lojoli", "src": "gallerie12.jpg"},
];

// tableau pour la section equipe
const equipeArray = [
    { "nom": "Jeanne", "src": "url('assets/images/jeannePhoto.jpg')", "bgPosition": "bottom center", "job": "Graphiste"},
    { "nom": "Marc", "src": "url('assets/images/marcPhoto.jpg')", "bgPosition": "center center", "job": "Seo / CM"},
    { "nom": "Martine", "src": "url('assets/images/martinePhoto.jpg')", "bgPosition": "top left", "job": "Security"},
]                                                                                                  

// fonction pour la galerie pour changer le src de l'image + le nom affiché en dessous
function changeGalerieImgAndText(image,index){
    image.setAttribute('src', `assets/images/${galerieArray[index].src}`);
    image.parentElement.parentElement.querySelector('a').innerText = galerieArray[index].nom;
}

// modification de l'img background + position + le texte sous la photo à chaque clique sur chevron
function changementContentEquipe(left, main, right){
    getGaucheEquipePhoto.style.backgroundImage = equipeArray[left].src;
    getGaucheEquipePhoto.style.backgroundPosition = equipeArray[left].bgPosition;
    getGaucheEquipePhoto.parentElement.parentElement.querySelector("p").innerText = equipeArray[left].nom;
    getMainEquipePhoto.style.backgroundPosition = equipeArray[main].bgPosition;
    getMainEquipePhoto.style.backgroundImage = equipeArray[main].src;
    getMainEquipePhoto.parentElement.parentElement.querySelector("p").innerText = equipeArray[main].nom;getMainEquipePhoto.parentElement.parentElement.querySelectorAll("p")[1].innerText = equipeArray[main].job;
    getDroiteEquipePhoto.style.backgroundImage = equipeArray[right].src;
    getDroiteEquipePhoto.style.backgroundPosition = equipeArray[right].bgPosition;
    getDroiteEquipePhoto.parentElement.parentElement.querySelector("p").innerText = equipeArray[right].nom;
}

function switchImage(chevron){
    // si le parent du parent du chevron est dans #sectionGallerie 
    if(chevron.parentElement.parentElement.id.includes('sectionGallerie')){
        // si le chevron à la classe chevronDroite
        if(chevron.classList.contains('chevronDroite')){
            // vérifie si la première image affiché de la galerie contient gallerie01 pour adapter la valeur initiale de l'index du galerieArray contenu dans la fonction qui est passé en forEach pour chaque image
            if(getGalerieImage[0].src.includes('gallerie01')){
                let index = 4;
                getGalerieImage.forEach(image => {
                    changeGalerieImgAndText(image,index)
                    index++;
                });
            } else if(getGalerieImage[0].src.includes('gallerie05')){
                let index = 8;
                getGalerieImage.forEach(image => {
                    changeGalerieImgAndText(image,index)
                    index++;
                });
            }  
         } else{ //else = si le chevron à la classe chevronGauche
            if(getGalerieImage[0].src.includes('gallerie05')){
                let index = 0;
                getGalerieImage.forEach(image => {
                    changeGalerieImgAndText(image,index)
                    index++;
                });
            } else if(getGalerieImage[0].src.includes('gallerie09')){
                let index = 4;
                getGalerieImage.forEach(image => {
                    changeGalerieImgAndText(image,index)
                    index++;
                });
            }
        }
    } else if(chevron.parentElement.id.includes('equipePhotoContainer') || chevron.parentElement.parentElement.id.includes('sectionEquipe')){ //sinon si la parent du chevron est dans #equipePhotoContainer ( chevron desktop) OU que le parent du parent du chevron est dans la #sectionEquipe ( pour le chevron en version mobile)
        let jeanne = 0;
        let marc = 1;
        let martine = 2;
        if(chevron.classList.contains('chevronDroite')){ //si chevron droite 
            if(getMainEquipePhoto.style.backgroundImage){// et si la photo du centre à un bg img ( qui n'est pas le cas par défaut), j'appelle ma fonction qui modifie le DOM selon la personne active en photo du centre
                if(getMainEquipePhoto.style.backgroundImage.includes("jeanne")){
            changementContentEquipe(marc, martine, jeanne);
            } else if(getMainEquipePhoto.style.backgroundImage.includes("martine")){
                changementContentEquipe(jeanne, marc, martine);
            } else{
                changementContentEquipe(martine, jeanne, marc);
            }
        }else if(window.getComputedStyle(getMainEquipePhoto).backgroundImage.includes("marc")){ // sinon si la photo du centre contient "marc" dans son bg img (cas par défaut)
            changementContentEquipe(martine, jeanne, marc);
        }
        }else{// sinon chevron gauche
            if(getMainEquipePhoto.style.backgroundImage){
                if(getMainEquipePhoto.style.backgroundImage.includes("martine")){
                    changementContentEquipe(martine, jeanne, marc);
                    } else if(getMainEquipePhoto.style.backgroundImage.includes("jeanne")){
                        changementContentEquipe(jeanne, marc, martine);
                    } else{
                        changementContentEquipe(marc, martine, jeanne);
                    }
            }else if(window.getComputedStyle(getMainEquipePhoto).backgroundImage.includes("marc")){
                changementContentEquipe(marc, martine, jeanne);
            }
        }       
    } 
}

// forEach sur chaque chevron pour ajouter l'addEventListener et appeller la fonction principale
getChevron.forEach(chevron => {
    chevron.addEventListener("click", ()=> switchImage(chevron));
});
