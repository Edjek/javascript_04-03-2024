/* --------------------------- FONCTIONS SUR LES TABLEAUX --------------------------- */
// Créer un tableau d'animaux ('chat', 'chien', 'tigre', 'lion', 'requin','panda')

const animals = ['chat', 'chien', 'tigre', 'lion', 'requin', 'panda'];

// ? Attention la plupart des méthodes modifient le tableau de départ

// Ajouter un ou plusieurs éléments à la fin d'un tableau
// Renvoie la nouvelle longueur du tableau
let response = animals.push('dauphin', 'loup');
// console.log(response);

// Supprimer le dernier élément du tableau
// Renvoie l'élément supprimé
response = animals.pop();
// console.log(response);

// Ajouter un ou plusieurs éléments au début du tableau
// Renvoie la nouvelle longueur du tableau
response = animals.unshift('hiboux');
// console.log(response);

// Supprimer le premier élément du tableau
// Renvoie l'élément supprimé
response = animals.shift();
// console.log(response);

// Réorganiser le tableau de la fin vers le début
animals.reverse();
// console.log(animals);

// Modifier ou Ajouter ou Supprimer un élément dans un tableau
// Ajouter
animals.splice(1, 0, 'raton laveur');
// console.log(animals);
// Modifier
animals.splice(6, 1, 'aigle');
// console.log(animals);
// Supprimer
animals.splice(2, 1);
// console.log(animals);

for (let i = 0; i < animals.length; i++) {
    // console.log(animals[i]);
}

// for(.. of ..){} permet de parcourir les elements d'un objet itérable (ex: tableau, string)
for (let animal of animals) {
    // console.log(animal);
}

// foreach(){} est une méthode Javascript qui permet d'itérer sur les éléments d'un tableau
animals.forEach(function (animal) {
    console.log(animal);
});

const capitalCities = [
    'Paris',
    'Berlin',
    'Rome',
    'Moscou',
    'Londres',
    'Madrid',
];

const modifyArray = (array) => {
    // array.pop()
    // array.unshift('Vienne')
    // array.splice(3, 1, 'Alger')
    // return array.length
};

const capitalCitiesLength = modifyArray(capitalCities);
