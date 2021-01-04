//*********************************************//
//Partie 2 - Exercice 1 

//La fonction prend en entrée un paramètre b qui n'apparait pas dans la fonction.
// La fonction retourne le produit de 2 paramètre non définis
//Pour que cette fonction puisse retourner le résultat, je renseigne correctement les paramètres dans le produit.

function carre(b) {
	return b*b;
}

// Afficher la sortie
console.log(carre(2));
console.log(carre(4));

//*********************************************//
//Partie 2 - Exercice 2 

//Cette fonction additionne 2 paramètres en entréé puis vérifie si l'addition est supérieure ou inférieure à 100.

function check(a, b) {
    //La fonction additionne les deux paramètres en entrée.
    //L'addition est-elle inférieure à 100 ?
    //Si oui
    if(a + b < 100){
        // on affiche true dans la console
        return true;
    }
    // sinon on affiche false dans la console
    else{return false;}
}

// Afficher la sortie
console.log(check(5, 20));
console.log(check(60, 55));

//*********************************************//
//Partie 2 - Exercice 3

//Je crée une fonction que je nomme heureSeconde
//Cette fonction prend un seul paramètre (nommé a) en entrée qui correspond à l'entier que l'on souhaite convertir.

function heureSeconde(a){
    //Une heure est égale à 3600 secondes.
    //La fonction retourne le résultat de la multiplication de a par 3600
    return a*3600;
}

//On teste la fonction en renseignant le paramètre, ici 5 heures
//Dans la console, la fonction nous retourne le résultat calculé soit 18000 secondes
console.log(heureSeconde(5))



//*********************************************//
//Partie 2 - Exercice 4

//Je crée une fonctionne qui teste si le paramètre en entrée est plus petit ou égal à 0

function checkNbr(n) {
	// Si le paramètre renseigné est inférieur ou égal à 0, la fonction retourne true dans la console
	if(n <= 0){
	    return true;
    }
    //Sinon, si le paramètre n'est pas inférieru ou égal à 0, donc supérieur, la fonction renvoie false dans la console
	else{ return false;}
}

// Afficher la sortie
console.log(checkNbr(1));
console.log(checkNbr(-1));
console.log(checkNbr(0));

//*********************************************//
//Partie 2 - Exercice 5

//Je crée une fonction que je nomme isEqual.
//Cette fonction prend 2 paramètres (nbr1 et nbr2) en entrée et retourne le résultat dans la console

function isEqual(nbr1, nbr2){
    //Je teste si nbr1 est égale en valeur et en type à nbr2
    if(nbr1 === nbr2){
    //si nbr1 est égal à nbr2, alors la fonction retourne true
        return true;
    //sinon la fonction retourne false
    } else {return false;}
}

// Afficher la sortie
console.log(checkNbr(1));
console.log(checkNbr(-1));
console.log(checkNbr(0));

//*********************************************//
//Partie 2 - Exercice 6
// Je crée une fonction qui prend un paramètre en entrée et retourne le ré&sultat dans la console

function isDivisible(n) {
    // L'opérateur modulo me permet de tester si le nombre n est divisible par 5.
    //Si le résultat de l'opération est égale à 0 (en valeur et en type) donc s'il n'y a pas de reste  alors la fonction renvoie true
    //sinon elle retourne false
   return n%5 === 0;
}

// Afficher la sortie
console.log(isDivisible(5));
console.log(isDivisible(10));
console.log(isDivisible(6));

//*********************************************//
//Partie 2 - Exercice 7

//Je crée une fonction que je nomme hmTos
//Cette fonction convertie 2 paramètres (un pour les heures et un pour les minutes) en secondes.


function hmTos(heure, minute) {
    // Écrivez votre code ici
    //Je convertis les heures en secondes et les minutes en secondes;
    //J'additionne le résultat
    //La fonction renvoie le résultat 
	return (heure*3600 + minute*60);
}

// Afficher la sortie
console.log(hmTos(1, 10));
console.log(hmTos(0, 59));
console.log(hmTos(0, 0));

//*********************************************//
//Partie 2 - Exercice 8

//Je crée une fonction qui inverse les éléments d'un tableau.

function reverseTab(tab) {
    // Écrivez votre code ici
    //Je crée une variable avec tableau vide dans laquelle je pourrai stocker mes éléments
    var reverseTab=[];
 
    //Je cherche à connaitre la taille du tableau avec la méthode tab.length
    //Pour chaque indice du tableau
    for (var i = tab.length -1; i > -1; i--) {
    }
    //j'inscirs dans mon nouveau tableau les caractères inversés du tableau précédent à l'indice correspondant.
      reverseTab.push(tab[i]);
    }
    //La fonction retourne le résultat
    return reverseTab;
    


// Le résultat est affiché dans la console
console.log(reverseTab([1, 2, 3]));
console.log(reverseTab([1, 1, 2, 2, 3]));

//*********************************************//
//Partie 2 - Exercice 9

//Je crée une fonction que je nomme getLastElem qui renvoie le dernier élément d'un tableau
//Cette fonction prend 1 seul paramètre en entrée Ce paramètre est nommé tab. Il correspond au tableau dans lequel on souhaite connaitre le dernier élément
function getLastElem(tab){
    //pour connaitre le dernier élément d'un tableau, j'utilise la méthode tab.length-1.
    //Un tableau est constitué de n-1 élément car le premier élément est à l'indice 0.
    //La fonction retourne le résultat dans la console
    return tab[tab.length-1];
    // Le dernier élément du premier tableau est bien 4 et celui du seconde tableau est bien Emily
}

// On affiche le résultat dans la console
console.log(getLastElem([1, 2, 3, 4]));
console.log(getLastElem(["Alex", "Bob", "Emily"]));


