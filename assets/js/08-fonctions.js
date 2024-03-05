/* --------------------------- FONCTIONS --------------------------- */

/*
    Une fonction est bloc de code réutilisable
    qui peut être appelé à partir d'autres parties de votre code pour effectuer une tâche spécifique.
    Les fonctions sont un moyen utile de segmenter votre code en tâches plus petites et plus facile à gérer,
    elles permettent de réutiliser le même code plusieurs fois sans avoir à le copier coller
*/

// Déclaration de fonction
function hello(firstName, lastName) {
    console.log('Bonjour ' + firstName + ' ' + lastName);
}

// Une fonction n'est executée que lorsqu'elle est appelée
hello('rachid', 'edjekouane');

// Il est possible de sauvegarder une fonction dans une variable
// Fonction Anonyme
const math = function (x, y) {
    return x * y;
};

const res = math(12, 89);
console.log(res);

// Arrow function (fonction fléché)
// Nouvelle syntaxe introduite avec ES6 (2015)
const divide = (x, y) => {
    return x / y;
};

const result = divide(23, 90);
console.log(result);

// Il existe des façons encore plus concise d'écrire les fonctions fléchés
const arrow = (x) => x * 2;
const r = arrow(45);
console.log(r);

// Demander à l'utilisateur de rentrer un nombre
// Creer une fonction fléché qui prend en parametre un nombre
// Et qui affiche dans la console si le nombre est pair ou impair (modulo)
// Appeler la fonction en lui passant le nombre 5 en parametre
// Appeler la fonction en lui passant le nombre 256 en parametre

const userInput = prompt('Quel est votre nombre ?');

const evenOddd = (x) => {
    if (x % 2 == 0) {
        console.log('le nombre est pair');
    } else {
        console.log('le nombre est impair');
    }
};

evenOddd(userInput);

// Déclarer une variable qui contient un nombre (demandez à l'utilisateur)
let response = prompt('Donnez-moi un nombre !');

const fizzbuzz = (x) => {
    if (x % 3 == 0 && x % 5 == 0) {
        console.log('fizzbuzz');
    } else if (x % 5 == 0) {
        console.log('buzz');
    } else if (x % 3 == 0) {
        console.log('Fizz');
    } else {
        console.log(x);
    }
};

fizzbuzz(response);
