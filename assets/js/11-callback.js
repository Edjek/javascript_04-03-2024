/* --------------------------- CALLBACK --------------------------- */

// Un callback (fonction de rappel) est une fonction qui est passée en tant qu'argument dans une autre fonction.

// function add
const add = function (x, y) {
    return x + y;
};

// function divide
const divide = function (x, y) {
    return x / y;
};

// function multiply
const multiply = function (x, y) {
    return x * y;
};

function mathematique(x, y, callback) {
    return callback(x, y);
}

const res = mathematique(12, 89, function (a, t) {
    return a * 5 + t * 9;
});
console.log(res);

// Une fonction peut prendre en parametre une autre fonction
// cela permet de rendre personnalisable
function display(callback) {
    callback();
}

const hello = function () {
    console.log('salut tout le monde');
};

display(hello);

display(function () {
    console.log(23 + 67);
});

// Recreons la fonction forEach()
const monthOfYear = [
    'janvier',
    'fevrier',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'aout',
    'septembre',
    'octobre',
    'novembre',
    'decembre',
];

const displayArray = function (string) {
    console.log(string);
};

function forEachPerso(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

forEachPerso(monthOfYear, function () {
    console.log(' 2024');
});
