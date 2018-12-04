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

// TODO (terminé) : compléter ce fichier pour ajouter les liens à la page web


var contenusDiv = document.getElementById("contenu");

var conteneurDeLienDiv;
var nouveauTitreA;
var nouveauLienSpan;
var nouveauLienA;
//var nouvelAuteur; // variable retirée ;P 


// On "loope" chaque lien...
for (var i = 0; i < listeLiens.length; i++) {
	// Création du bloc DIV conteneur pour chaque lien :
	conteneurDeLienDiv = document.createElement("div");
	conteneurDeLienDiv.classList.add("lien");
	
	
	// Création du titre et modification du style :
	nouveauTitreA = document.createElement("a");
	nouveauTitreA.innerText = listeLiens[i].titre;
	// innerText : Oui, on peut écrire nouveauTitreA.createTextNode(listeLiens[i].titre), mais le code produit le même résultat et innerText est plus facile à écrire :/ 
	nouveauTitreA.href = listeLiens[i].url;
	nouveauTitreA.style.color = "#428bca"; // Modification de la couleur comme demandé.
	//nouveauTitreA.style.fontSize = "110%"; // Pas besoin d'affiner la taille (hérite du style de body), mais on peut activer si souhaité...
	nouveauTitreA.style.fontWeight = "bold"; // On rajoute du gras car manquant du CSS
	nouveauTitreA.style.textDecoration = "none"; // ... et on elève l'effet souligné du lien !
	conteneurDeLienDiv.appendChild(nouveauTitreA); // On ajoute cet élément au DIV ici (voir remarque correspondante plus bas)
	
	
	// On crée un espace (voir remarques plus bas) :
	conteneurDeLienDiv.appendChild(document.createTextNode(" "));
	
	
	/*	Création du lien et modification du style :
		On crée un SPAN qui va contenir le lien (élément "A"), 
		afin que cet élément hérite du format des span défini dans le CSS... */
	nouveauLienSpan = document.createElement("span");
	conteneurDeLienDiv.appendChild(nouveauLienSpan);
	
	// On intègre le lien dans le span, et on laisse le CSS gérer la taille du texte...
	nouveauLienA = document.createElement("a");
	nouveauLienA.innerText = listeLiens[i].url;
	nouveauLienA.href = listeLiens[i].url;
	nouveauLienA.style.color = "#000"; // par contre, on modifie la couleur...
	nouveauLienA.style.textDecoration = "none"; // ... et on elève l'effet souligné !
	nouveauLienSpan.appendChild(nouveauLienA);
	
	
	// Passage à la ligne (code en une seule ligne pour éviter de créer une variable de plus, comme pour le textNode) :
	conteneurDeLienDiv.appendChild(document.createElement("br"));
	
	
	// Création de l'auteur (une autre manière de tout écrire en une seule ligne sans variable) :
	conteneurDeLienDiv.appendChild(document.createElement("span")).innerText = "Ajouté par " + listeLiens[i].auteur;
	/*	Oui, ça marche aussi parce que appendChild() renvoie l'élément ajouté au contenant, 
		donc on peut rajouter .innerText juste après appendChild(...), opérant sur l'élément SPAN créé.
		L'essentiel des tâches demandées est déjà présenté dans les lignes au dessus, 
		donc j'ai pris un raccourcit et retiré l'usage de la variable "nouvelAuteur" au début du code. 
		:) */
	
	
	// Insertion final dans le DOM après que tous les traitements soient faites en mémoire :
	contenusDiv.appendChild(conteneurDeLienDiv);
} // Fin de la boucle d'ajout de liens.


/*	REMARQUES :
	
	Vu que l'on n'insère chaque bloc de titre/lien/auteur qu'à la fin de la boucle, 
	on peut insérer progressivement les éléments (titre, lien, auteur) 
	dans chaque bloc DIV sans nécessairement tous les mettre à la fin de la boucle.
	Il n'y a donc aucun impact côté performances, conformément à ce qui est demandé :
	Les éléments sont créés et modifiés avant d'être ajoutés À LA PAGE, 
	mais ils peuvent être ajoutés n'importe où aux éléments EN MÉMOIRE qui ne sont pas encore dans la page. :) 
	Dans quel intérêt ? Imaginons qu'en plus des informations comme les titres, url, auteur, 
	l'on aie aussi des images, de la description, des mots-clefs (...)
	On évite de disperser les lignes de code : Si l'on a créé un élément titre, 
	on montre son insertion au même endroit que sa manipulation, mais pas des centaines de lignes plus bas.
	Rester consistent : on en finit avec un élément avant de passer à un autre ^^.
	
	Pourquoi ne pas avoir mit un seul élément "A" pour le "titre" et un SPAN pour "url" dedans ?
	Parce qu'il y a un espacement entre les deux informations, sinon cet espace devient aussi cliquable.
	C'est d'abord un choix esthétique, puis un choix stratégique :
	Si un jour l'on décide d'insérer une description (non cliquable) entre le titre et l'url, 
	il ne restera qu'à faire le code Javascript de la description (et les sauts de ligne), 
	au lieu d'avoir en plus à casser le "A" principal en deux (et à gérer les réglages esthétiques possibles)
	
	Pourquoi alors ne pas avoir juste créé un deuxième élement "A" au lieu de le mettre dans un SPAN ?
	À cause de la séparation HTML-CSS-JS :
	Tout l'intérêt du CSS est de séparer le contenu (HTML) du format (CSS) ainsi que de la logique (JS).
	Si l'on venait à modifier les propriétés CSS (des SPAN ou des A), l'effet se répercuterait directement 
	sans avoir à modifier AUSSI le JS (et on évite justement la redondance de la maintenance du code). 
	Un test en direct est possible dans l'inspecteur du DOM du navigateur (onglet à côté de la console). 
	L'exemple le plus concret est probablement les thèmes des sites : principalement du CSS. 
	Pour que ces thèmes (ou notre code) soit le plus flexible et le plus facile à mettre-à-jour, 
	il faut penser en amont comment les éléments doivent être imbriqués.
	D'ailleurs, le principe de modifier les styles (color, bold, textDecoration...) par Javascript 
	ne devrait se faire qu'à titre exceptionnel (et n'a qu'un intérêt pédagogique ici). 
	Il aurait été plus pragmatique de définir ces styles (formatage) directement dans le CSS 
	(mais le but de l'exercice est tout simplement de montrer que l'on soit capable de manipuler tout le DOM)
	
	Les espaces avec createTextNode() :
	Les espaces sont... un problème au responsive design (voir la page sur un ordinateur ou un petit smartphone).
	Aujourd'hui, on n'utilise quasiment plus d'espace textuel, mais des marges externes (margin) et internes (padding). 
	CSS permet aussi de formater différemment des éléments successifs de même type ou non (tagName), 
	avec les indicateurs de position (first-child, nth-child(x)...) ou de succession (opérateur "+"), 
	ce qui est une autre manière de garder le contrôle sur les espacements sans passer par Javascript.
	Dans l'idéal, on évite de passer par Javascript tant que c'est possible; 
	l'administration IT de certaines entreprises désactive Javascript pour des impératifs de confidentialité; 
	ainsi les poste ne peuvent pas accéder à des sites comme Facebook ou Gmail, 
	réduisant ainsi les motifs les plus récurrents de fuite d'information.
	
	Merci d'avoir corrigé, désolé pour la longueur; si un jour on se rencontre, j'offre le café et/ou le cachet d'aspirine :D 
	
	*/

