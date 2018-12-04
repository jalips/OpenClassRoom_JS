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

listeLiens.forEach(function (element) {
    //console.log(element);

    var mainElt = document.createElement("div");
    mainElt.style.backgroundColor = "white";
    mainElt.style.padding = "5px";
    mainElt.style.margin = "5px";
    
    var linkElt = document.createElement("a");
    linkElt.href = element.url;
    linkElt.textContent = element.titre;
    linkElt.style.color = "#428bca";
    linkElt.style.textDecoration = "none";

    var titleElt = document.createElement("h2");
    //titleElt.textContent = element.titre;
    titleElt.style.display = "inline-block";
    titleElt.style.paddingRight = "5px";
    
    titleElt.appendChild(linkElt);

    var urlElt = document.createElement("p");
    urlElt.textContent = element.url;
    urlElt.style.display = "inline-block";

    var textElt = document.createElement("p");
    textElt.textContent = "Ajouté par " + element.auteur;

    mainElt.appendChild(titleElt);
    //mainElt.appendChild(linkElt);
    mainElt.appendChild(urlElt);
    mainElt.appendChild(textElt);

    var content = document.getElementById("contenu");
    content.appendChild(mainElt);
});
