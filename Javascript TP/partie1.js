//*********************************************//
//Partie 1 - Exercice 1 

//Cette fonction permet d'additionner les 2 paramètres en entrée
//et il faut que ces paramètres soient uniquement des nombres

function addition(x, y) {
    //J'additionne x et y et je retourne le résultat.
    return x + y;
}

// Afficher la sortie
console.log(addition(1,2));
console.log(addition(-2,-4));

//*********************************************//

//Partie 1 - Exercice 2:

//Cette fonction permet convertir des minutes en secondes. Elle accepte un paramètre 
//et il faut que ce paramètre soit uniquement un nombre entier
//Sachant qu'une minute est égale à 60 secondes, je multiplie le nombres de minutes par 60

function minuteToSecond(minutes) {
    // Écrivez votre code ici
    //La fonction prend en entrée la variable minute et  la multiplie par 60
    return minutes*60;
    //Elle retourne le résultat dans la console
  }
  
  // Afficher la sortie
  console.log(minuteToSecond(4));
  console.log(minuteToSecond(3));


  //*********************************************//

//Partie 1 - Exercice 3:

//Cette fonction permet d'incrémenter(ajouter) 1 au paramètre indiqué en entrée (ici n)
//il faut que ce paramètre soit uniquement un nombre entier
function increment(n) {
    // Écrivez votre code ici
    //Je prends n et je lui ajoute 1
    //Pour le paramètre 1, je retourne 1+1 soit 2
    //Pour le second paramètre, je retourne 4+1 soit 5
    return n+=1;
  }
  
  // Afficher la sortie
  console.log(increment(1));
  console.log(increment(4));

  //*********************************************//

//Partie 1 - Exercice 4:

//Je crée une fonction que j'appelle getSurface permettant de calculer la surface d'un triangle
//Cette fonction prend 2 paramètres (nombres) en entrée: la base du triangle et sa hauteur.
//Pour calculer la surface d'un triangle, j'applique la formule:
//La surface d'un triangle est égale à sa base multiplié par sa hauteur, le tout divisé par 2.

  
function getSurface(base, hauteur) {
    // Écrivez votre code ici
    //La fonction prend les 2 paramètres (nombres) en entrée et applique la formule.
    //La fonction getSurface renvoie le résultat dans la console.
    return (base*hauteur)/2
  }
  
  // Afficher la sortie dans en faisant appelle à la fonction à laquelle on applique les 2 paramètres en entrée.
  console.log(getSurface(8, 2));
  console.log(getSurface(7, 3));

//*********************************************//

//Partie 1 - Exercice 5:

//On cherche à créer une fonction pour inverser les lettres d'un mot.
//La premiere lettre se retrouve à la dernière place, la seconde lettre à l'avant dernière place et ainsi de suite
//Cette fonction accepte une chaine de caractère.
  
function strReverse(str) {
//Cette fonction utilise trois methodes afin d'arriver au résultat.
//Il faut éclater la chaine de caractères, puis l'inverser et enfin la recoller 
  return str.split("").reverse().join("");
}

// Afficher la sortie
console.log(strReverse("WayToLearnX"));
console.log(strReverse("Hello"));
  


//*********************************************//

////Partie 1 - Exercice 6:

  //Je crée une fonction pour trouver le plus grand des entiers donnés
  //Je dois comparer chaque entier avec le suivant.
  
    function getMax(a, b, c) {
    //Je crée une variable que j'apelle "maximum" à laquelle j'affecte un entier.
    maximum = 0;
    //Je teste une condition: l'entier a est-il supérieur à l'entier b ?
    //si a est supérieur à b (donc si ma condition est vraie) 
    if(a > b){
        //a est bien supérieur à b, donc j'affecte mon entier à à ma variable maximum
        maximum = a;
    }
    //En revanche si b est supérieur à a, alors b devient l'entier le plus grand 
    //donc je l'affecte à ma variable maximum
    else if(b > a){
        maximum = b;
    }
    //Il me reste à savoir si ma variable maximum est supérieur ou inférieur à mon entier c:
    if (maximum > c){
        //alors maximum est le plus grand
        return maximum
    }
    
}
    // Afficher la sortie
    console.log(getMax(5, 9, 1));
    console.log(getMax(2, 3, 10));

//*********************************************//

////Partie 1 - Exercice 7:

//Je cherche à afficher le premier élément d'un tableau

      
    function getFirst(tab) {

    //Un tableau est composé de n élement à une position i
    //Le premier élément du tableau est situé à l'indice 0, le second élément à l'indice 1, ....
    //le nième élement à l'indice n-1
    //Cette fonction prend en entrée un tableau de 3 éléments et reourne dans la console le premier élément.
        return tab[0];
    }

    // Afficher la sortie
    console.log(getFirst([1, 2, 3]));
    console.log(getFirst([50, 60, 70]));

//*********************************************//

////Partie 1 - Exercice 8:

//Je cherche à récupérer l'adresse internet d'un site web.
//Il existe une propriété permettant de récupérer l'adresse d'une page html (appelée également document)
document.URL
//Une fois l'adresse récupérée, je l'affiche dans la console avec la commande console.log
console.log(document.URL);

//*********************************************//

////Partie 1 - Exercice 9:

//Cette fonction permet de connaitre le reste de deux nombres renseignés en paramètres.
//Pour cela j'utilise l'opérateur modulo (le signe pourcentage).
//Celui ci me donne le reste de la division, par exemple 12 modulo 2 donne 0


function resteDiv(a, b) {
  //J'utilise l'opérateur modulo pour afficher le reste de la division entre le paramètre a et le paramètre b
  return a%b;
}

// Afficher la sortie
console.log(resteDiv(1, 3));
console.log(resteDiv(2, 4));
console.log(resteDiv(3, 3));

//*********************************************//




