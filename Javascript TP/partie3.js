//*********************************************//
//Partie 3 - Exercice 1 

//Je crée une fonction qui v"rifie l'égalité de 2 paramètres a et b en entrée.

function checkEq(a, b) {
    // Écrivez votre code ici
    //L'opérateur permettant de vérifier l'égalité  de valeurs et de type est le signe ===
    //La fonction retourne true si la condition est vérifiée sinon elle retourne false.
    //Le résultat s'affiche dans la console.
    return a === b;
}

// Afficher la sortie
console.log(checkEq(5, 5));
console.log(checkEq(5, 0));
console.log(checkEq(5, false));
console.log(checkEq(5, "5"));

//*********************************************//
//Partie 3 - Exercice 2

//Cette fonction vérifie si le paramètre en entrée est uen chaine de caractère vide ou non.

function isEmpty(str) {

    //La fonction prend le paramtère str et teste s'il contient des caractères ou non.
    //Si oui, la fonction renvoie true dans la console sinon elle renvoie False
    //Attention, un espace est considéré comme un caractère
	return str === "";
}

// Afficher la sortie
console.log(isEmpty("1"));
console.log(isEmpty("WayToLearnX"));
console.log(isEmpty("  "));
console.log(isEmpty(""));

//*********************************************//
//Partie 3 - Exercice 3

//Ceztte fonction retourne le resultat des 2 chaines de caractères en entrée de la fonction

function concatStr(str1, str2) {
    //pour concatainer 2 chaines de caractères, j'utilise le signe +
    // je mets le symbole "pipe" entre guillemets afin de l'afficher entre les deux chaines de caractère.
    //Je n'oublie pas les espaces devant et après le symbole "pipe" pour aérer et rendre plus lisible le code.
    //La fonction renvoie le premier paramètre suivi d'un espace puis le symbole puis un autre espace et enfin le dernier paramètre
    return str1 + " | " + str2 
}

// Afficher la sortie
console.log(concatStr("True", "False"));
console.log(concatStr("On", "Off"));
console.log(concatStr("A", "B"));

//*********************************************//
//Partie 3 - Exercice 4

//Je crée une fonction fléchées, c'est à dire une version plus condensée d'une fonction
//Je dois concatainer le message de bienvenue avec les trois prénoms indiqués en entrée
// La fonction nommée msg renvoie dans la conole le résultat
const msg = name => "Hello " + name + ", Welcome to WayToLearnX!" ;

// Afficher la sortie
console.log(msg("Thomas"));
console.log(msg("Alex"));
console.log(msg("Emily"));

//*********************************************//
//Partie 3 - Exercice 5

//Je crée une fonction dite "récursive" la loingueur d'une chaine de caractère.
//Une fonction récursive s'appelle elle même dans une fonction
//Je ne sais pas faire cela mais j'ai trouvé autre chose ;-)

//Je cherche à savoir combien de lettre contient une chaine de caractère
//J'utilise la méthode lenght qui renvoie le nombre de caractère de la chaine indiquée en entrée
function size(str) {
    //J'utilise la méthode length qui renvoie le nombre de caractère de la chaine indiquée en entrée
    return str.length;
}

// Afficher la sortie de la fonctiondans la console
console.log(size("alex"));
console.log(size("x"));
console.log(size(""));

//*********************************************//
//Partie 3 - Exercice 6


//Cette fonction compare le nombre de charactères des deux chaines str1 et str2.
//La méthode .length associée au paramètre str1 et str2 permet de compter le nombre de caractères contenus dans 
//On utilise le signe == pour comparer le resultat.
//Si str1 comprend le même nombre de caractères que dans str2, alors la fonction renvoie true dans la console
//Sinon elle renvoie false
function compareSize(str1, str2) {
	
	return str1.length == str2.length;
}

// Afficher la sortie dans la console
console.log(compareSize("AA", "BB"));
console.log(compareSize("123", "1"));
console.log(compareSize("Ali", "Bob"));

//*********************************************//
//Partie 3 - Exercice 7

//Je cherche le perimètre d'un rectangle.
//Je crée une fonction nomméé getPerimeter qui prend 2 paramètres en entrée: height pour la hauteur et width pour la largeur du rectangle

function getPerimeter(height, width){
    //Pour calculer le préimètre d'un rectangle, j'additionne sa hauteur et sa largeur  et kje multiplie le tout par 2
    //Je renvoie le résultat dans la console
    return (height+width)*2;

}

// Afficher la sortie de la fonction daqns la console
//Changer les 2 paramètres entre parenthèses pour effectuer vos calculs
console.log(getPerimeter(2, 6));
console.log(getPerimeter(3, 10));
console.log(getPerimeter(1, 5));

//*********************************************//
//Partie 3 - Exercice 8

//Je crée une fonction afin de calculer le nombre de pattes de ses animaux.
//Cette fonction prends 3 paramètres en entrée, à savoir le nombre d'animaux dans chaques catégories : poulets, vaches et chevaux
//

function nbrsPattes(poulets, vaches, chevaux){ 
    //Nous savons qu'un poulet à 2 pattes, une vaches 4 pattes et un cheval 4 pattes également
    //On multiplie le nombre d'animaux de chaque catégorie par le nombre de pattes qu'il possède.
    //soit : (nbre de poulet) * 2 , (nbre de vaches + nbre de chevaaux) * 4
    //LA fonction renvoie le résultat dans la console
    
	return poulets*2 + (vaches + chevaux)*4;
}

// Afficher la sortie
console.log(nbrsPattes(1, 4, 2));
console.log(nbrsPattes(2, 2, 2));
console.log(nbrsPattes(2, 0, 3));

//*********************************************//
//Partie 3 - Exercice 9

//
function check(n) {
    //Un nombre est aire s'il est un multiple de 2.
    //L'opérateur modulo nous permet de savoir si un nombnre est pair.
    //En effet si le reste de la division par 2 est égal à 0 alors le nombre est pair.
	if(n%2 == 0){
	    return ("pair");
    } 
    //Mais si le reste de la division est différent de 0; alors le nombre est impair
	else {return "impair"};
}

// Afficher la sortie de la fonction dans la console
console.log(check(2));
console.log(check(7));
console.log(check(22));






