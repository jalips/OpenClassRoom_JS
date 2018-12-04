/* 
Activité : gestion des contacts
*/

/*** MY SOLUTION */

// Prototype contact
var Contact = {

    init: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;

        console.log("Création du contact : "+this.toString());
    },

    toString: function () {
        return "Nom : "+this.nom + " Prénom : "+this.prenom;
    }
};

// Function create
function createContact(){
    console.log("Création d'un nouveau contact");
    var nom = prompt("Merci de saisir un nom :");
    var prenom = prompt("Merci de saisir un prénom :");
    var newContact = Object.create(Contact);
    newContact.init(nom, prenom);
    contactList.push(newContact);
}

// Function loop
function loopOnContacts(contacts) {
    console.log("Voici la liste de tous vos contacts :");
    contacts.forEach(function (contact) {
        console.log(contact.toString());
    });
}

// Init contact
var contactA = Object.create(Contact);
contactA.init("Aurora", "Lévisse");
var contactB = Object.create(Contact);
contactB.init("Mélodie", "Nelsonne");

// Init tab
var contactList = [];
contactList.push(contactA);
contactList.push(contactB);

// Launch soft
var isOver = false;
console.log("Bienvenue dans le gestionnaire des contacts");
while(!isOver){
    console.log("1 = Liste des contacts \n2 = Créer nouveau contact \n0 = Quitter");
    var choice = Number(prompt("Votre choix :"));

    switch (choice) {
        case 1:
            loopOnContacts(contactList);
            break;
        case 2:
            createContact();
            break;
        case 0:
            console.log("Au revoir");
            isOver = true;
            break;
        case 42:
            console.log("Easter eggs ; )");
            break;
        default:
            console.log("Choix impossible");
            break;
    }
}