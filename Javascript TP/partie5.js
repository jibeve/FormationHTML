//*********************************************//
//Partie 5 - Exercice 1 

//Cette fonction vérifie si un nombre est multiple de 3 et de 5 ou
//si un nombre est uniquement mulmtiple de 5 ou
//si un nombre est uniquement multiple de 5

function checkNbr(n) {
    // si le nbre est multipe de 3 et multiple de 5, on retourne Hello World 
    // On teste avec une condition le résultat du reste de l'opération n % 3 est égal à 0.
    // et si le résultat du reste de l'opération n % 5 est de même égal à 0.
    //Les 2 conditions doivent être remplies pour sortir de la condition et pour que la fonction retourne "Hello World"
    if(n % 3 == 0 && n % 5 == 0){
        return ('Hello World');
    }
    //Si la 1er condition n'est pas remplie, on passe à la suivante
    //Si le nbre est multiple de 5 on retourne World
    else if(n % 5 == 0){
         return ('World');
        
    }
    //Si la seconde condition n'est pas remplie, on passe à la dernière
    //Si le nbre est multiple de 3 on retourne Hello
    else if (n % 3 == 0){
        return ('Hello');
    }
}

// On affiche le résultat dans la console
console.log(checkNbr(3));
console.log(checkNbr(5));
console.log(checkNbr(15));

//*********************************************//
//Partie 5 - Exercice 2

//Pour révéler le message cachée, il faut supprimer les nombres de la chaine de caractères.

//Référence : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_régulières
// EN bref; \D est utilisé pour trouver le caractère non numérique. g effectuer une correspondance globale.

//Référence : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/match

//On affecte une chaine de caractère à une variable str
var str = "242Welcome23 45to344 254324WayToLearnX!";
//On affecte à une variable la liste des caractères alphanumériques que l'on souahite effacer par la suite
var patt =  /\D */g;

//On affecte dans une variable nommée result la méthode match qui va chercher 
//les caractères définis dans la variable patt afin de les effacer
//de la chaine de caractère.
var result = str.match(patt);
//On affiche le réultat dans la console après avoir généré une nouvelle chaine de caractère.
console.log(result.join(""));

//*********************************************//
//Partie 5 - Exercice 3

//Cette fonction prend chaque élement d'un tableau et le multiplie par 2.

//La fonction prend un paramétre tableau en entréé:
function tabX2(tab) {
    //La methode map permet de faire des opérations sur l'ensemble des valeurs de chaques index du tableau
    //Je prends la valeur d'un index et je la multiplie par 2
    return tab.map(i => i * 2)
    //La fonction retourne le resultat 
	}
}

// Le resultat est affiché dans la console
console.log(tabX2([1, 2, 3]));
console.log(tabX2([5, 10, 20]));
console.log(tabX2([100, 200, 300]));

//*********************************************//
//Partie 5 - Exercice 4

//Cette fonction détermine si trois nombres entrés comme arguments forment un triangle,
//La fonction renvoie true s'il s'agit d'un triangle et false s'il ne s'agit pas d'un triangle:

//Un triangle est caractérisé par le fait que la somme des longueurs de deux de ses côtés est toujours supérieure au troisième côté.
//Les trois paramètres a, b et c correspondent aux trois longueurs à tester.

function isTriangle(a, b, c) {
    //Si a+b est supérieur à c et b+c est supérieur à a et c+a est supérieur à b 
    //alors il s'agit d'un triangle
    //Les trois conditions doivent être remplies !
    return a + b > c && b + c > a && c + a > b
    //La fonction  renvoie le résultat
}

// On affiche ce résultat dans la console
console.log(isTriangle(2, 3, 4));
console.log(isTriangle(2, 4, 5));
console.log(isTriangle(8, 2, 1));

//*********************************************//
//Partie 5 - Exercice 5

//Référence : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/charCodeAt

//Cette fonction prend un caractère en paramètre et renvoie sa valeur Ascii :
function charToAscii(c) {
    
	return c.charCodeAt(0);
}

// Afficher la sortie
console.log(charToAscii("A"));
console.log(charToAscii("a"));
console.log(charToAscii("+"));
return c.charCodeAt(0);

//                                        .
//                                           `.

//                                      ...
//                                         `.
//                                   ..
//                                     `.
//                             `.        `.
//                          ___`.\.//
//                             `---.---
//                            /     \.--
//                           /       \-
//                          |   /\    \
//                          |\==/\==/  |
//                          | `@'`@'  .--.
//                   .--------.           )
//                 .'             .   `._/
//                /               |     \
//               .               /       |
//               |              /        |
//               |            .'         |   .--.
//              .'`.        .'_          |  /    \
//            .'    `.__.--'.--`.       / .'      |
//          .'            .|    \\     |_/        |
//        .'            .' |     \\               |
//      .-`.           /   |      .      __       |
//    .'    `.     \   |   `           .'  )      \
//   /        \   / \  |            .-'   /       |
//  (  /       \ /   \ |                 |        |
//   \/         (     \/                 |        |
//   (  /        )    /                 /   _.----|
//    \/   //   /   .'                  |.-'       `
//    (   /(   /   /                    /      `.   |
//     `.(  `-')  .---.                |    `.   `._/
//        `._.'  /     `.   .---.      |  .   `._.'
//               |       \ /     `.     \  `.___.'
//               |        Y        `.    `.___.'
//               |      . |          \         \
//               |       `|           \         |
//               |        |       .    \        |
//               |        |        \    \       |
//             .--.       |         \           |
//            /    `.  .----.        \          /
//           /       \/      \        \        /
//           |       |        \       |       /
//            \      |    @    \   `-. \     /
//             \      \         \     \|.__.'
//              \      \         \     |
//               \      \         \    |
//                \      \         \   |
//                 \    .'`.        \  |
//                  `.-'    `.    _.'\ |
//                    |       `.-'    ||
//               .     \     . `.     ||      .'
//                `.    `-.-'    `.__.'     .'
//                  `.                    .'
//              .                       .'
//               `.
//                                            .-'
//                                         .-'

//       \                 \
//        \         ..      \
//         \       /  `-.--.___ __.-.___
// `-.      \     /  #   `-._.-'    \   `--.__
//    `-.        /  ####    /   ###  \        `.
// ________     /  #### ############  |       _|           .'
//             |\ #### ##############  \__.--' |    /    .'
//             | ####################  |       |   /   .'
//             | #### ###############  |       |  /
//             | #### ###############  |      /|      ----
//           . | #### ###############  |    .'<    ____
//         .'  | ####################  | _.'-'\|
//       .'    |   ##################  |       |
//              `.   ################  |       |
//                `.    ############   |       | ----
//               ___`.     #####     _..____.-'     .
//              |`-._ `-._       _.-'    \\\         `.
//           .'`-._  `-._ `-._.-'`--.___.-' \          `.
//         .' .. . `-._  `-._        ___.---'|   \   \
//       .' .. . .. .  `-._  `-.__.-'        |    \   \
//      |`-. . ..  . .. .  `-._|             |     \   \
//      |   `-._ . ..  . ..   .'            _|
//       `-._   `-._ . ..   .' |      __.--'
//           `-._   `-._  .' .'|__.--'
//               `-._   `' .'
//                   `-._.'

