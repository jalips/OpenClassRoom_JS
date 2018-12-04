
/*
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");
alert("(La solution est " + solution + ")");


/*********** MY SOLUTION */

var nbTry = 0;
var isOver = false;

function cube(nombre) {
    nbTry++;
    if(nombre === solution) {
        isOver = true;
        return "Bravo ! La solution était " + nombre + " \nVous avez trouvé en " + nbTry + " essai(s)";
    }else if(nbTry > 6){
        isOver = true;
        return "Perdu... La solution était "+solution;
    }else if(nombre > solution){
        return nombre+" est trop grand";
    }else if(nombre < solution){
        return nombre+" est trop petit";
    }
};

while (!isOver){
    var nombreSaisi = Number(prompt("Entrez un nombre :"));
    console.log(cube(nombreSaisi));
}
