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
const getChevronGalerieDroite = getSectionGalerie.querySelectorAll(".chevronDroite");
const getChevronGalerieGauche = getSectionGalerie.querySelectorAll(".chevronGauche");

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
    { "nom": "Mondar", "src": "gallerie1.jpg"},
    { "nom": "Neucar", "src": "gallerie2.jpg"},
    { "nom": "Buildzer", "src": "gallerie3.jpg"},
    { "nom": "Cashlan", "src": "gallerie4.jpg"},
    { "nom": "Vlogon", "src": "gallerie5.jpg"},
    { "nom": "Offlit", "src": "gallerie6.jpg"},
    { "nom": "Sitent", "src": "gallerie7.jpg"},
    { "nom": "Flixie", "src": "gallerie8.jpg"},
    { "nom": "Mwebe", "src": "gallerie9.jpg"},
    { "nom": "Opoint", "src": "gallerie10.jpg"},
    { "nom": "Revibe", "src": "gallerie11.jpg"},
    { "nom": "Lojoli", "src": "gallerie12.jpg"},
];                                                                    

//tableau de la section avis
const avisArray = [
    { 'id': 1,'nom': 'John K.', 'src': "url('assets/images/avis1.png')", 'texte': ' Très bonnes performances, bilan précis. Très grande qualité des opérations et outils réalisés. Délais respectés. Très bon contact. Compréhension des problématiques et enjeux clients. Très focus résultats et business. Des recommandations pertinentes et adaptées à l’échelle de nos budgets et de nos ambitions. ' },
    {'id': 2,'nom': 'Anna C.', 'src': "url('assets/images/avis2.png')", 'texte': "Nous avons fais appel à RocketCom lors de la mise en place de notre site web. Ils ont réalisés une maquette en total accord avec nos attentes. Le référencement du site est bien réalisé et notre position au sein des moteurs de recherches de fais que monter. De plus l'équipe est vraiment sympathique et ont su s'impliquer dans le projet" },
    {'id': 3,'nom': 'Inaya G.', 'src': "url('assets/images/avis3.png')", 'texte': "Le travail mené avec Marc nous a permis d’y voir plus clair sur les missions, valeurs et raison d’être de notre drive zéro déchet, La Caloup. Grâce à cet éclaircissement, il sera plus facile de mener à bien des actions de com’ profitables en restant sur une même ligne de conduite précise et claire. Le travail a été réalisé dans la bonne humeur, de façon structurée et organisée avec un objectif clair et des séances efficaces. Nous remercions chaleureusement Rocket'Com pour cet accompagnement très utile et pratique." },
    {'id':4,'nom': 'Maria J.', 'src': "url('assets/images/avis4.png')", 'texte': ' RocketCom nous a accompagnés sur toute la mise en place de la stratégie de communication de Demain, dès l’Aube. Marc a tout de suite cerné nos problématiques et nous a aidés à construire un discours pertinent et adapté à notre secteur d’activité. Lors de la réalisation de notre site Internet, nous avons pu échanger régulièrement avec Jeanne (la graphiste), ce qui fut fort appréciable. Tout au long de l’accompagnement, nous nous sommes sentis écoutés et compris. Merci pour votre approche humaine et votre professionnalisme !' },
    {'id':5,'nom': 'Wade W.', 'src': "url('assets/images/avis5.png')", 'texte': ' Agagaga agagaga agagaga agagggaa ! Gouga gaou gaga goukou aougou gougou Gan gougoga. Gagaougou gagag gagga, gagag gagaga, gagaa ga ga gagaga. Gouga gaou gaga goukou, Agagaga agagaga gagag gagga. Agagaga agagaga agagaga agagggaa ! Gouga gaou gaga goukou aougou gougou Gan gougoga. Gagaougou gagag gagga, gagag gagaga, gagaa ga ga gagaga. Gouga gaou gaga goukou, Agagaga agagaga gagag gagga.' },
]

let avisFocusName;
                                                                                               

// fonction pour la galerie pour changer le src de l'image + le nom affiché en dessous
function changeGalerieImgAndText(image,index){
    image.setAttribute('src', `assets/images/${galerieArray[index].src}`);
    image.parentElement.parentElement.querySelector('a').innerText = galerieArray[index].nom;
}

// fonction changement d'ordre des photo dans la section équipe
function changeOrder(mainOrderTo, rightOrderTo, leftOrderTo) {
    // recupération des trois "li"
    const getPhotoContainers = document.querySelectorAll(".liPhotoContainer");
    const left = "1";
    const main = "2";
    const right = "3";
    
    // pour chaque photo de chaque li
    for (const photo of getPhotoContainers) {
      const getDataOrder = photo.getAttribute("data-order");
        //vérification de la valeur de leurs data-order ( 1, 2 ou 3 ) > changement de cette valeur par une valeur passé en argument, ce qui donnera l'animation de mouvement
            switch (getDataOrder) {
            //exemple : si la photo a la data-order = 2, je lui passe en premier argument "1" pour que la photo bouge sur la gauche
            case main:
                photo.setAttribute("data-order", mainOrderTo);
                break;
            case right:
                photo.setAttribute("data-order", rightOrderTo);
                break;
            case left:
                photo.setAttribute("data-order", leftOrderTo);
                break;
            }
        }
    }
    
// fonction pour la galerie pour changer le src de l'image + le nom affiché en dessous
function switchPageGalerie(image, sens){
    // substring pour récuperer la 23eme et 24eme lettre de la string de l'attribut src de l'image, qui sera passé en parseInt pour pouvoir faire une incrémentation de 4 ou -4 
    image.setAttribute('src', `assets/images/gallerie${parseInt(image.getAttribute('src').substring(22,24))+sens}.jpg`);
    // filter pour faire une recherche dans l'array en utilisant la src de l'element que je viens de modifier juste au dessus, renvoi un array donc on accède au nom avec [0].nom pour l'ajouter en innerText 
    image.parentElement.parentElement.querySelector('p').innerText = galerieArray.filter(site => site.src == `gallerie${parseInt(image.getAttribute('src').substring(22,24))}.jpg`)[0].nom;
}

function switchImage(chevron){
    // si le parent du parent du chevron est dans #sectionGallerie 
    if(chevron.parentElement.parentElement.id.includes('sectionGallerie')){
        // si le chevron à la classe chevronDroite
        if(chevron.classList.contains('chevronDroite')){
            // vérifie si la dernière image affiché de la galerie contient dans son attribut "src" un nombre inférieur à la longueur du tableau qui contient la liste des images
            if(parseInt(getGalerieImage[3].getAttribute("src").substring(22,24)) < galerieArray.length){
                // fonction qui fait +4 au nom de l'image dans le src et à l'index du tableau pour changer le nom correspondant
                getGalerieImage.forEach(image => {
                    switchPageGalerie(image,4)
                });
                // pour rendre visible les chevrons gauche ( desktop et mobile )
                getChevronGalerieGauche.forEach(element => {
                    element.style.visibility = "visible";
                });
                //vérifie si la dernière image affiché de la galerie contient dans son attribut "src" un nombre égal à la longueur du tableau, c'est donc la dernière page > chevron droite caché
                if(parseInt(getGalerieImage[3].getAttribute("src").substring(22,24)) == galerieArray.length ){
                    getChevronGalerieDroite.forEach(element => {
                        element.style.visibility = "hidden";
                    });
                }
            } 
        } else if(parseInt(getGalerieImage[0].getAttribute("src").substring(22,24)) > 1){ //devrait donc être le chevron gauche, et vérifie si la première image affiché de la galerie contient dans son attribut "src" un nombre supérieur à 1, donc que l'on ne se trouve pas sur la première page
            getGalerieImage.forEach(image => {
                switchPageGalerie(image,-4)
            });
            getChevronGalerieDroite.forEach(element => {
                element.style.visibility = "visible";
            });
            // si la première image affiché de la galerie contient dans son attribut "src" un nombre égal à 1, on est sur la première page > chevron gauche caché
            if(parseInt(getGalerieImage[0].getAttribute("src").substring(22,24)) == 1){
                getChevronGalerieGauche.forEach(element => {
                    element.style.visibility = "hidden";
                });
            }
        }
    } else if(chevron.parentElement.id.includes('equipePhotoContainer') || chevron.parentElement.parentElement.id.includes('sectionEquipe')){ //sinon si la parent du chevron est dans #equipePhotoContainer ( chevron desktop) OU que le parent du parent du chevron est dans la #sectionEquipe ( pour le chevron en version mobile)
        if(chevron.classList.contains('chevronDroite')){ //si chevron droite > fonction de changement d'ordre avec les argument correspondant au mouvement vers la droite
            changeOrder(3, 1, 2);
        } else{// sinon chevron gauche, mouvement vers la gauche
            changeOrder(1, 2, 3);
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
let getContainerImageAvis = [
    document.querySelector('#avisFocus'),
    document.querySelector('.imgContainer1'),
    document.querySelector('.imgContainer2'),
    document.querySelector(' .imgContainer3'),
    document.querySelector('.imgContainer4')
]
let avisTexte = document.getElementById("avisText");
let nomAvis = document.getElementById('avisName');

function changeContentAvis(sens){
        //On mets a jour la place des avis dans le tableau avec leurs id
        if(sens !== 'click')updateIdAvis(sens);
        //Pour chaque items dans le tableau je mets a jour les backgrounds image des éléments get au dessus
        for(let i = 0;i<5;i++){
            getAllImageAvis[i].parentElement.classList.add('doAFlip');
            const waitImageChange = setTimeout(()=>{
                getAllImageAvis[i].style.backgroundImage = avisArray.filter(avis => avis.id == i+1)[0].src;
            },690);
            
        }
        //Puis je mets a jour le texte et le nom de celui affiché( dont l'id est 1)
        avisTexte.innerHTML = '<i class="fas fa-quote-left"></i>'+ avisArray.filter(avis => avis.id == 1)[0].texte + '<i class="fas fa-quote-right"></i>';
        nomAvis.innerText = avisArray.filter(avis => avis.id == 1)[0].nom;
        const removeFlip = setTimeout(()=>{
            for(let i = 0;i<5;i++){
                getAllImageAvis[i].parentElement.classList.remove('doAFlip');
            }
        },900)
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

// Media query pour retirer le style de la navbar spécifique au burger si la page à une width supérieur a 900px
if (window.matchMedia("(min-width: 900px)").matches) {
    getNavbar.classList.remove("navbarOfBurger");
};

// si jamais la resolution change alors que la page est déjà chargé
window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 900px)").matches) {
        getNavbar.classList.remove("navbarOfBurger");
    }else{
        getNavbar.classList.add("navbarOfBurger");
    };
});

// si la section galerie est visible lors du chargement sur une resolution inférieure à 980px
// retrait de la classe qui déclenche les animations d'apparition des elements de la section (sinon rien n'apparait tant qu'aucun scroll n'a lieu)
window.addEventListener("load", function(){
    const getGalerieReveal = document.querySelectorAll("#sectionGallerie .reveal");
    const windowHeight = window.innerHeight;
    const getSectionGalerie = document.getElementById('sectionGallerie').getBoundingClientRect().top;
    const elementVisible = 20;

    if(getSectionGalerie < windowHeight - elementVisible && window.matchMedia("(max-width: 980px)").matches){
        getGalerieReveal.forEach(element => {
        element.classList.remove('reveal');
        })
    }
});

//Ecoute de chaque image au click pour le switch en avis affiché, prenant en paramètre l'id lié, qui correspond à l'id de avisArray
getAllImageAvis[1].addEventListener('click', ()=> switchAvis(2));
getAllImageAvis[2].addEventListener('click', ()=>switchAvis(3));
getAllImageAvis[3].addEventListener('click', ()=>switchAvis(4));
getAllImageAvis[4].addEventListener('click', ()=>switchAvis(5));

//Fonction exécuté par le click sur l'image
function switchAvis(id){
    //Je stock l'avis que je veux en affichage
    let getAvisCliquer = avisArray.filter(avis => avis.id == id)[0];
    //Je change le tableau jusqu'a que mon avis soit affiché
    while(getAvisCliquer.id!=1){
        updateIdAvis('droite');
    }
    //je change le contenu de mes images
    changeContentAvis('click');
}

// loading bar fixé en bas de page
function loadingBar() {
    // valeur en pixel de ce qui a été scroll au total par rapport au haut de la page
    var scrollFromTop = document.documentElement.scrollTop;
    // la hauteur total si tout les éléments de la page web était visible - la hauteur de la page affiché
    var height = document.documentElement.scrollHeight - window.innerHeight;
    // division des deux variable * 100 pour la passer en valeur à la width de la loading bar
    var scrolled = (scrollFromTop / height) * 100;
    document.getElementById("loadingBar").style.width = scrolled + "%";
}

window.addEventListener("scroll", ()=>loadingBar())