/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

/*** MY PROPOSITION */
var content = document.getElementById("contenu");

/*** ADD ALL LINK */
var mainElt = document.createElement("div");
mainElt.id = "mainElt";
content.appendChild(mainElt);
listeLiens.forEach(function (element) {
    addElement(element, 0);
});

/*** ADD FORM */
addForm();

/*** Listeners */
document.getElementById("mainFormElt").addEventListener("submit", function (e) {

    var auteur = mainFormElt.elements.inputTextAuteurElt.value;
    var titre = mainFormElt.elements.inputTextTitreElt.value;
    var url = mainFormElt.elements.inputTextUrlElt.value;

    console.log("Titre " + titre + ", Auteur " + auteur + " URL " + url);

    if(auteur !== "" && titre !== "" && url !== ""){

        if(url.search("http://") === -1 || url.search("http://s") === -1){
            url = "http://" + url;
        }

        var element = {
            titre: titre,
            url: url,
            auteur: auteur
        };
        addElement(element, 1);

        showInfo("Le lien '"+titre+"' à bien été ajouté.", "green");
        setTimeout(function () {
            hideInfo();
            hideForm();
        }, 2000);

    }else{
        showInfo("La saisie des champs Titre, URL et Auteur du lien est obligatoire.", "red");
        setTimeout(function () {
            hideInfo();
        }, 2000);
    }

    e.preventDefault();
});

function addForm(){
    var content = document.getElementById("contenu");
    var mainElt = document.getElementById("mainElt");

    var mainFormElt = document.createElement("form");
    mainFormElt.style.padding = "5px";
    mainFormElt.style.margin = "5px";
    mainFormElt.style.display = "none";
    mainFormElt.id = "mainFormElt";

    var textInfoElt = document.createElement("span");
    textInfoElt.style.padding = "5px";
    textInfoElt.style.margin = "5px";
    textInfoElt.style.display = "none";
    textInfoElt.id = "textInfoElt";

    var inputTextTitreElt = document.createElement("input");
    inputTextTitreElt.placeholder = "Entrer le titre du lien";
    inputTextTitreElt.style.padding = "5px";
    inputTextTitreElt.style.margin = "5px";
    inputTextTitreElt.id = "inputTextTitreElt";
    inputTextTitreElt.required = "true";

    var inputTextUrlElt = document.createElement("input");
    inputTextUrlElt.placeholder = "Entrer l'url du lien";
    inputTextUrlElt.style.padding = "5px";
    inputTextUrlElt.style.margin = "5px";
    inputTextUrlElt.id = "inputTextUrlElt";
    inputTextUrlElt.required = "true";

    var inputTextAuteurElt = document.createElement("input");
    inputTextAuteurElt.placeholder = "Entrer votre nom";
    inputTextAuteurElt.style.padding = "5px";
    inputTextAuteurElt.style.margin = "5px";
    inputTextAuteurElt.id = "inputTextAuteurElt";
    inputTextAuteurElt.required = "true";

    var inputSubmitElt = document.createElement("button");
    inputSubmitElt.type = "submit";
    inputSubmitElt.textContent = "Valider";
    //inputSubmitElt.addEventListener("click", handleForm);

    mainFormElt.appendChild(textInfoElt);
    mainFormElt.appendChild(inputTextAuteurElt);
    mainFormElt.appendChild(inputTextTitreElt);
    mainFormElt.appendChild(inputTextUrlElt);
    mainFormElt.appendChild(inputSubmitElt);

    content.insertBefore(mainFormElt, mainElt);

    // Add button part
    var buttonAddElt = document.createElement("button");
    buttonAddElt.id = "buttonAddElt";
    buttonAddElt.style.padding = "5px";
    buttonAddElt.style.margin = "5px";
    buttonAddElt.textContent = "Ajouter un lien";
    buttonAddElt.addEventListener("click", showForm);
    content.insertBefore(buttonAddElt, mainElt);
}

function addElement(element, isFirstOrder) {
    var mainElt = document.getElementById("mainElt");

    var divElt = document.createElement("div");
    divElt.style.backgroundColor = "white";
    divElt.style.padding = "5px";
    divElt.style.margin = "5px";

    var linkElt = document.createElement("a");
    linkElt.href = element.url;
    linkElt.textContent = element.titre;
    linkElt.style.color = "#428bca";
    linkElt.style.textDecoration = "none";
    linkElt.target = "_blank";

    var titleElt = document.createElement("h2");
    titleElt.style.display = "inline-block";
    titleElt.style.paddingRight = "5px";

    titleElt.appendChild(linkElt);

    var urlElt = document.createElement("p");
    urlElt.textContent = element.url;
    urlElt.style.display = "inline-block";

    var textElt = document.createElement("p");
    textElt.textContent = "Ajouté par " + element.auteur;

    divElt.appendChild(titleElt);
    divElt.appendChild(urlElt);
    divElt.appendChild(textElt);

    if(isFirstOrder){
        mainElt.insertBefore(divElt, mainElt.firstChild);
    }else{
        mainElt.appendChild(divElt);
    }
}

function showForm(){
    var mainFormElt = document.getElementById("mainFormElt");
    mainFormElt.style.display = "block";

    var buttonAddElt = document.getElementById("buttonAddElt");
    buttonAddElt.style.display = "none";
}

function hideForm(){
    var mainFormElt = document.getElementById("mainFormElt");
    mainFormElt.style.display = "none";
    mainFormElt.elements.inputTextAuteurElt.value = "";
    mainFormElt.elements.inputTextTitreElt.value = "";
    mainFormElt.elements.inputTextUrlElt.value = "";

    var buttonAddElt = document.getElementById("buttonAddElt");
    buttonAddElt.style.display = "block";
}

function showInfo(content, color){
    var textInfoElt = document.getElementById("textInfoElt");
    textInfoElt.style.display = "block";
    textInfoElt.style.backgroundColor = color;
    textInfoElt.textContent = content;
}

function hideInfo(){
    var textInfoElt = document.getElementById("textInfoElt");
    textInfoElt.style.display = "none";
}

