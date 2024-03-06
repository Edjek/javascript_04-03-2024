/* --------------------------- OBJETS --------------------------- */

// Les objets sont des structures de données complexes qui permettent de stocker des valeurs et des fonctions ensemble.

const person = {
    firstName: 'Rachid',
    lastName: 'EDJEKOUANE',
    age: 40,
    formation: ['algorithmique', 'html', 'git', 'javascript'],
    job: {
        name: 'formateur',
        hour: 35,
    },
    getIdentify: function () {
        return `Je m'appelle rachid EDJEKOUANE `;
    },
};

// Pour acceder à la propriété d'un objet
console.log(person.getIdentify());

// Crrer un objet car
// model => 'audi'
// annee => 2010
// couleur => red
// option= > tableau => siege chauffant, vitre electrique
// moteur => objet => cylindre, nombre de chevaux
// descritpion => function => 'Je suis une audi sortie en 2010

// Afficher le model
// Afficher la premiere option
// Afficher la descritpion

const car = {
    model: 'audi',
    year: 2022,
    color: 'red',
    option: ['siege chauffant', 'vitre electrique'],
    motor: {
        cylindre: 202,
        nbChevaux: 33,
    },
    description: function () {
        return `Je suis une ${this.model} sortie en ${this.year}`;
    },
};

console.log(car.description());

window.console.log()