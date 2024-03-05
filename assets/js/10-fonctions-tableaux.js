/* --------------------------- FONCTIONS SUR LES TABLEAUX --------------------------- */
// Créer un tableau d'animaux ('chat', 'chien', 'tigre', 'lion', 'requin','panda')

const animals = ['chat', 'chien', 'tigre', 'lion', 'requin', 'panda'];

// ? Attention la plupart des méthodes modifient le tableau de départ

// Ajouter un ou plusieurs éléments à la fin d'un tableau
// Renvoie la nouvelle longueur du tableau
let response = animals.push('dauphin', 'loup');
console.log(response);

// Supprimer le dernier élément du tableau
// Renvoie l'élément supprimé
response = animals.pop();
console.log(response);

// Ajouter un ou plusieurs éléments au début du tableau
// Renvoie la nouvelle longueur du tableau
response = animals.unshift('hiboux');
console.log(response);

// Supprimer le premier élément du tableau
// Renvoie l'élément supprimé
response = animals.shift();
console.log(response);

// Réorganiser le tableau de la fin vers le début
animals.reverse();
console.log(animals);

// Modifier ou Ajouter ou Supprimer un élément dans un tableau
// Ajouter un 'raton laveur' en deuxieme position
animals.splice(1, 0, 'raton laveur');
console.log(animals);
// Modifier chien en aigle
animals.splice(6, 1, 'aigle');
console.log(animals);
// Supprimer
animals.splice(2, 1);
console.log(animals);

// Declarer un tableau contenant (Paris, Berlin, Rome, Moscou, Londres, Madrid)
/*
    Créer une fonction qui prend en parametre un tableau:
        Retire Madrid
        Ajoute au debut Vienne
        Rome devient Alger
        Retourne la taille du tableau
*/