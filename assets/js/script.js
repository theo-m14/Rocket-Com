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

//On récupère le texte du background hero
const getFirstPBanniere = document.getElementById('sectionBanniere').children[0];
const getSecondPBanniere = document.getElementById('sectionBanniere').children[1];
const getThirdPBanniere = document.getElementById('sectionBanniere').children[2];

//Fonction qui écrit les lettres une à une selon un timer
function ecritureTestFor(text, element){
    for(let i = 0; i <= text.length; i++){
        setTimeout(() =>{
            element.innerHTML = text.slice(0,i);
        }, i*200)
    }
}

//On stock le texte du background hero et on les vide
const text1 = getFirstPBanniere.innerHTML;
getFirstPBanniere.innerHTML = '';
const text2 = getSecondPBanniere.innerHTML;
getSecondPBanniere.innerHTML = '';
const text3 = getThirdPBanniere.innerHTML;
getThirdPBanniere.innerHTML = '';


//fonction qui va ecrire le texte petit à petit en attendant la fin du mot précédant tout en mettant à jour le placement du curseur
function writeAllHeroText(){
    ecritureTestFor(text1,getFirstPBanniere);
    setTimeout(()=> {
        ecritureTestFor(text2,getSecondPBanniere);
        getFirstPBanniere.style.border = 'none';
        getFirstPBanniere.style.display ='block';
    },text1.length*200);
    setTimeout(()=> {
        ecritureTestFor(text3,getThirdPBanniere);
        getSecondPBanniere.style.border = 'none';
        getSecondPBanniere.style.display ='block';
    },(text2.length+text1.length)*200);
}

writeAllHeroText();


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

// modal background, lors du clique sur le bg, retrait de la classe "active" du bg, background aussi utilisé pour le menu burger
getModalBg.addEventListener('click', function(){
    getModalBg.classList.remove('active');
    if(getBurgerNavbar.classList.contains("active")){//si la navbar du menu burger est active
        // pour le burger, lors du click > même effet que lors d'un click sur la croix du burger
        getBurger.classList.remove('active');
        getBurgerNavbar.classList.remove('active');
    } else{ 
        // retrait de la classe "active" du modal, plus la balise img est supprimé après 0.33secondes
        getModalGalerie.classList.remove('active');
        setTimeout(() => {
        getModalGalerie.removeChild(createImg);
        }, 330);
    }
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

//tableau de la section avis
const avisArray = [
    { 'id': 1,'nom': 'John K.', 'src': "url('assets/images/avis1.png')", 'texte': ' Très bonnes performances, bilan précis. Très grande qualité des opérations et outils réalisés. Délais respectés. Très bon contact. Compréhension des problématiques et enjeux clients. Très focus résultats et business. Des recommandations pertinentes et adaptées à l’échelle de nos budgets et de nos ambitions. ' },
    {'id': 2,'nom': 'Anna C.', 'src': "url('assets/images/avis2.png')", 'texte': "Nous avons fais appel à RocketCom lors de la mise en place de notre site web. Ils ont réalisés une maquette en total accord avec nos attentes. Le référencement du site est bien réalisé et notre position au sein des moteurs de recherches de fais que monter. De plus l'équipe est vraiment sympathique et ont su s'impliquer dans le projet" },
    {'id': 3,'nom': 'Inaya G.', 'src': "url('assets/images/avis3.png')", 'texte': "Le travail mené avec Marc nous a permis d’y voir plus clair sur les missions, valeurs et raison d’être de notre drive zéro déchet, La Caloup. Grâce à cet éclaircissement, il sera plus facile de mener à bien des actions de com’ profitables en restant sur une même ligne de conduite précise et claire. Le travail a été réalisé dans la bonne humeur, de façon structurée et organisée avec un objectif clair et des séances efficaces. Nous remercions chaleureusement Rocket'Com pour cet accompagnement très utile et pratique." },
    {'id':4,'nom': 'Maria J.', 'src': "url('assets/images/avis4.png')", 'texte': ' ComOnlight nous a accompagnés sur toute la mise en place de la stratégie de communication de Demain, dès l’Aube. Thomas a tout de suite cerné nos problématiques et nous a aidés à construire un discours pertinent et adapté à notre secteur d’activité. Lors de la réalisation de notre site Internet, nous avons pu échanger régulièrement avec Lisa (la graphiste), ce qui fut fort appréciable. Tout au long de l’accompagnement, nous nous sommes sentis écoutés et compris. Merci pour votre approche humaine et votre professionnalisme !' },
    {'id':5,'nom': 'Wade W.', 'src': "url('assets/images/avis5.png')", 'texte': ' Agagaga agagaga agagaga agagggaa ! Gouga gaou gaga goukou aougou gougou Gan gougoga. Gagaougou gagag gagga, gagag gagaga, gagaa ga ga gagaga. Gouga gaou gaga goukou, Agagaga agagaga gagag gagga. Agagaga agagaga agagaga agagggaa ! Gouga gaou gaga goukou aougou gougou Gan gougoga. Gagaougou gagag gagga, gagag gagaga, gagaa ga ga gagaga. Gouga gaou gaga goukou, Agagaga agagaga gagag gagga.' },
]

let avisFocusName;
                                                                                               

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
    } else{ //Sinon c'est un chevron de la section avis
        if(chevron.classList.contains('chevronDroite')){
            changeContentAvis('droite');
        }else{//C'est le chevron gauche
            changeContentAvis('gauche');
        }
    }
}

// forEach sur chaque chevron pour ajouter l'addEventListener et appeller la fonction principale
getChevron.forEach(chevron => {
    chevron.addEventListener("click", ()=> switchImage(chevron));
});

let getAllImageAvis = [
    document.querySelector('#avisFocus .img'),
    document.querySelector('.imgContainer1>.img'),
    document.querySelector('.imgContainer2>.img'),
    document.querySelector(' .imgContainer3>.img'),
    document.querySelector('.imgContainer4>.img')
];
let avisTexte = document.getElementById("avisText");
let nomAvis = document.getElementById('avisName');

function changeContentAvis(sens){
        //On mets a jour la place des avis dans le tableau avec leurs id
        updateIdAvis(sens);
        //Pour chaque items dans le tableau je mets a jour les backgrounds image des éléments get au dessus
        for(let i = 0;i<5;i++){
            getAllImageAvis[i].style.backgroundImage = avisArray.filter(avis => avis.id == i+1)[0].src;
        }
        //Puis je mets a jour le texte et le nom de celui affiché( dont l'id est 1)
        avisTexte.innerHTML = '<i class="fas fa-quote-left"></i>'+ avisArray.filter(avis => avis.id == 1)[0].texte + '<i class="fas fa-quote-right"></i>';
        nomAvis.innerText = avisArray.filter(avis => avis.id == 1)[0].nom;
}

//On update le tableau d'avis selon le sens de parcours
function updateIdAvis(sens){
    if(sens === 'droite'){
        for(let avis in avisArray){
            avisArray[avis].id += 1;
            if(avisArray[avis].id  == 6) avisArray[avis].id  = 1;
        }
    }else{
        for(let avis in avisArray){
            avisArray[avis].id  -= 1;
            if(avisArray[avis].id  == 0) avisArray[avis].id  = 5;
        }
    }
}

// Media queries
if (window.matchMedia("(min-width: 900px)").matches) {
    getNavbar.classList.remove("navbarOfBurger");
};

// retrait des classes "reveal" qui ajoute l'animation de fade lors du scroll lorsque l'écran est trop petit est donc que la galerie est visible directement lors du chargement de la page
// if (window.matchMedia("(max-width: 850px)").matches) {
// const getGalerieReveal = document.querySelectorAll("#sectionGallerie .reveal");
// getGalerieReveal.forEach(element => {
//     element.classList.remove('reveal');
// });
// } else {
// /* the view port is less than 900 pixels wide */
// }

window.addEventListener("load", function(){
    const getGalerieReveal = document.querySelectorAll("#sectionGallerie .reveal");
    const windowHeight = window.innerHeight;
    const getSectionGalerie = document.getElementById('sectionGallerie').getBoundingClientRect().top;
    const elementVisible = 20;

    if(getSectionGalerie < windowHeight - elementVisible && window.matchMedia("(max-width: 850px)").matches){
        getGalerieReveal.forEach(element => {
        element.classList.remove('reveal');
        })
    }
});
