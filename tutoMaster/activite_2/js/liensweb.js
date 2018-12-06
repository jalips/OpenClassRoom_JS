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

initPageInJS();

function initPageInJS(){
    var content = document.getElementById("contenu");

    /*** ADD ALL LINK */
    var mainElt = document.createElement("div");
    mainElt.id = "main_elt";

    listeLiens.forEach(function (element) {
        var content = document.getElementById("contenu");

        var divElt = document.createElement("div");
        divElt.style.backgroundColor = "white";
        divElt.style.padding = "5px";
        divElt.style.margin = "5px";

        var linkElt = document.createElement("a");
        linkElt.href = element.url;
        linkElt.textContent = element.titre;
        linkElt.style.color = "#428bca";
        linkElt.style.textDecoration = "none";

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

        mainElt.appendChild(divElt);
        content.appendChild(mainElt);
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



            showInfo("Le lien '"+titre+"' à bien été ajouté.", "green");
            setTimeout(function () {
                hideForm();
            }, 2000);

        }else{
            showInfo("Le titre, auteur et url sont obligatoires.", "red");
            setTimeout(function () {
                hideInfo();
            }, 2000);
        }

        e.preventDefault();
    });

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

    var inputTextUrlElt = document.createElement("input");
    inputTextUrlElt.placeholder = "Entrer l'url du lien";
    inputTextUrlElt.style.padding = "5px";
    inputTextUrlElt.style.margin = "5px";
    inputTextUrlElt.id = "inputTextUrlElt";

    var inputTextAuteurElt = document.createElement("input");
    inputTextAuteurElt.placeholder = "Entrer votre nom";
    inputTextAuteurElt.style.padding = "5px";
    inputTextAuteurElt.style.margin = "5px";
    inputTextAuteurElt.id = "inputTextAuteurElt";

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

