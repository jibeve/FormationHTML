//*********************************************//
//Partie 4 - Exercice 1 

//Je crée une fonction qui permet de joindre 2 tableaux ensemble.
//Il faut concatainer les tableaux ensembles.


// Référence: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

function concatener(tab1, tab2) {

    //La fonction .concat permet de concatainer 2 tableaux ensembles.
    //On fusionne le tableau 2 à la suite du tableau 1
    //On retourne le résultat de la fonction concatener dans un nouveau tableau
    return tab1.concat(tab2);
}

// Afficher la sortie dans la console
console.log(concatener([1, 2], [3, 4]));
console.log(concatener([9, 8], [1, 5, 6, 7]));
console.log(concatener([1, 1, 1], [2, 2, 2]));

//*********************************************//
//Partie 4 - Exercice 2

//Cette fonction cherche l'index d'un élément donné.
//Elle accepte 2 paramètres en entrée: un tableau et une valeur
function find(tab, val) {

    //A l'aide d'une boucle for, on vérifie chaque index du tableau 
    //Dès que l'index (correspondant à la valeur entrée en second paramètre) a été trouvé, on retourne cette valeur
    for (var i = 0; i < tab.length; i++) {
        if (tab[i] == val) return i;
    } //si aucun index correspondant n'a été trouvé on retourne -1
    return -1;
}

// On affiche le résultat dans la console
console.log(find([2, 7, 1], 7));
console.log(find([6, 9, 5], 6));
console.log(find([6, 7, 8], 9));


//*********************************************//
//Partie 4 - Exercice 3

//Cette fonction verifie si un tableau contient un nombre particulier
//Elle accepte deux paramètres en entré de type tableau pour le 1er paramètre 
//et une valeur de type nombre piour le second paramètre.

function nbrExist(tab, val) {
//Une boucle for nous permets de tester chaque index du tableau.
//on teste i = 0 puis i = 1 jusqu'au dernier index correspondant à la taille du tableau
    for (var i = 0; i < tab.length; i++) {
        //dès que l'index i correspond à la valeur de val, on sort de la boucle et la fonction retourne true 
        if (tab[i] === val) {
            return true;
        }
    } //Si le tableau ne contient pas le nombre cherché, la fonction retourne false
    return false;

    // On affiche le résultat dans la console
    console.log(nbrExist([6, 7, 8], 7));
    console.log(nbrExist([1, 2, 3], 5));
    console.log(nbrExist([], 0));



    //*********************************************//
    //Partie 4 - Exercice 4


    //Cette fonction prend une chaine de caractère aléatoire et vérifie si le dernier caractère est un s ou non.
    function checkS(str) {
        //On doit décomposer la chaine de caractère que compose le str renseigné en paramètre.
        //On crée un tableau composé des caractères du paramètre str.
        //On cherche à connaitre la taille du paramètre (c'est à dire combien de caractères)
        //On crée un nouveau tableau composé des caractères du paramètre. 
        var tab = str[str.length - 1];

        //Une fois la taille connue, on extrait le dernier caractère (grace à son indice length-1) et on regarde s'il s'agit d'un caractère s
        //Si le dernier caractère est un s, la fonction renvoie true, 
        if (tab === "s") {
            return true;
        }
        //sinon si le dernier caractère n'est pas un s, la fonction renvoie false.
        else {
            return false;
        }
    }

    // On affiche le resultat dans la console
    console.log(checkS("Thomas"));
    console.log(checkS("Ali"));
    console.log(checkS("Alex"));
    console.log(checkS("Alvis"));

    //*********************************************//
    //Partie 4 - Exercice 5                                                                                             <<<<<<< NE FONCTIONNE PAS >>>>>>>>>>>>
    //Le corrigé m'indique la présence d'une méthode .include bcp plus simple et qui fonctionne//

    //On crée une fonction qui vérifie chaque caractères d'une liste afin de trouver un caractère espace.

    //Référence : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

    function containSpaces(str) {
        //Cette fonction prend le paramètre str.
        //Je crée une boucle et Je vérifie pour chaque indice la présence ou non d'un caractère " "

        for (i = 0; i <= str[str.length - 1]; i++) {
            //i un caractère espace est trouvé, je renvoie true                                               
            if (str[i] == "") {
                return true;
                //sinon je renvoie false
            } else { return false; }
        }
    }

    // Afficher la sortie
    console.log(containSpaces("Thomas"));
    console.log(containSpaces("Hello World!"));
    console.log(containSpaces(" "));
    console.log(containSpaces(""));

}

//*********************************************//
//Partie 4 - Exercice 6  

//Cette fonction extrait 3 propriétés d'un objet.
//Je crée une fonction formatPrs qui contient un objet nommé personne 
//Cet objet  contient 3 caractéristiques que l'on doit extraire pour les affichés dans une chaine concatainée.

function formatPrs(personne) {
    //Pour eaccéder au nom de l'objet personne, j'ajoute à l'objet personne la methode .nom.
    //Je fais la même chose pour chaque propriété que je souhaite extraire.
    //J'affiche chaque caractéristique dans une chaine de caractère concatainée grâce au symbole $

    // La fonction renvoie le résultat dans la console
    return '${personnne.nom} a ${personne.age} ans. Il habite à ${personne.adresse}.';
}

// La fonction renvoie le résultat dans la console
console.log(formatPrs({ nom: "Thomas", age: "25", adresse: "Paris" }));
console.log(formatPrs({ nom: "Emily", age: "22", adresse: "Nantes" }));

//*********************************************//
//Partie 4 - Exercice 7

//Cette fonction renvoie une chaine de caractère concatainée avec un paramètre en entrée.
//Si aucun arguments n'est passé par l'entrée, la fonction renvoie l'arguments neutre.
//Celui-ci est inscrit en dur dans la fonction.
// Le symbol "||" signifie "ou" et renvoie "neutre" si aucun argument n'est entré en paramètre.

function myFeeling(feeling) {
    return `Aujourd'hui, je me sens ${feeling || "neutre"}`
}

// Afficher la sortie
console.log(myFeeling("heureux"));
console.log(myFeeling("triste"));
console.log(myFeeling());


//*********************************************//
//Partie 4 - Exercice 8


//Cette fonctionne renvoie le nombre d'arguments entrés en paramètre.
//Si aucun argument n'est entré, la fonction renvoie 0
//Si un seul argument est entré en paramètre, la fonction renvoie 1
//etc...

//Référence: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/length

function nbrArgs() {
    //La fonction retourne la taille du ou des arguments entré.

    return arguments.length;
}

// On affiche le résultat dans la console
console.log(nbrArgs());
console.log(nbrArgs({}));
console.log(nbrArgs("A"));
console.log(nbrArgs("A", "B"));


//*********************************************//
//Partie 4 - Exercice 9

//Cette fonction détermine si un mot est au pluriel ou au singulier
//Un mot au pluriel se termine par un "s".
//Elle accepte un paramètre de type chaine de caractère en entrée

function plurielSingulier(str);

//On doit avant tout déterminer la taille de la chaine de caractère avec str.length-1
//puis on évalue le dernier caractère.S'il est égal (==) à s alors la fonction renvoie true.
//sinon elle renvoie false

return str[str.length - 1] == 's';

// On affiche le résultat dans la console
console.log(check("enfants"));
console.log(check("filles"));
console.log(check("fille"));
console.log(check("enfant"));