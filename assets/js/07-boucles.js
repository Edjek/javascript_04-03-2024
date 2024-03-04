/* --------------------------- BOUCLES --------------------------- */

// Les boucles sont des structures permettant d'executer plusieurs fois des instructions

// Écrire un programme qui demande à l'utilisateur de saisir un nombre entier compris entre 1 et 10.
// Si la réponse n'est pas entre 1 et 10, afficher que le message devait être compris entre 1 et 10
// Le programme doit ensuite dessiner un sapin de Noël composé d'étoiles (*)
// *
// **
// ***
// ****
// *****

// let response = prompt('donne moi un nombre entre 1 et 10');

// while (response < 1 || response > 10) {
//     response = prompt('donne moi un nombre entre 1 et 10');
// }
let response;

do {
    response = prompt('donne moi un nombre entre 1 et 10');
} while (response < 1 || response > 10);

let stars = '';
for (let i = 0; i < response; i++) {
    stars = stars + '*';
    console.log(stars);
}
