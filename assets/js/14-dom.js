/* --------------------------- Manipulation du DOM --------------------------- */

/*
    Le DOM (Document Object Model) en Javascript
    est une representation en mémoire d'un document HTML chargé par le navigateur
    Le DOM represente chaque élément du document comme un objet Javascript
    qui peut être manipulé et modifié à travers le code Javascript
*/

/*
    -------------------------------------------
    Methodes de selecteurs JavaScript
    -------------------------------------------
*/

// ? La methode `getElementById()`
const mainTitle = document.getElementById('main-title');
mainTitle.style.fontFamily = 'Arial';
mainTitle.style.fontSize = '50px';

/*
    ? La methode `getElementsByTagName()`
    getElementsByTagName renvoi une HTMLCollection
    sur laquelle on pourra itérer avec la boucle for(){}
*/
const paragraphes = document.getElementsByTagName('p');
for (let i = 0; i < paragraphes.length; i++) {
    paragraphes[i].style.color = 'green';
}

/*
    ? La methode `getElementsByClassName()`
    getElementsByClassName() renvoi une HTMLCollection
    sur laquelle on pourra itérer avec la boucle for(){}
*/
const title = document.getElementsByClassName('title');
for (let i = 0; i < title.length; i++) {
    title[i].style.backgroundColor = 'purple';
    title[i].style.color = '#fff';
}

/*
    ? La methode `querySelector()`
*/
const cssProperties = document.querySelector('#title');
cssProperties.style.fontSize = '30px';

/*
    ? La methode `querySelectorAll()`
    querySelectorAll() renvoi une NodeList
    sur laquelle on pourra itérer avec la boucle `for()`, for(...of..) et la méthode `forEach()`

*/
const newParagraphes = document.querySelectorAll('p');
// for( let paragraphe of newParagraphes){
//     paragraphe.style.textDecoration = 'underline'
// }

newParagraphes.forEach(function (paragraphe) {
    paragraphe.style.textDecoration = 'underline';
});

// selectionner tous les elements qui ont la class txt-uppercase
// tous les mettre en majuscule

const txtUppercases = document.querySelectorAll('.paragraphe-container p');

for (let txtUppercase of txtUppercases) {
    txtUppercase.style.textTransform = 'uppercase';
}

/*
    Quelques propriétés liées aux éléments du DOM
*/

// La propriété `style` permet de modifier le style
mainTitle.style.textTransform = 'uppercase';

// La méthode `classList.add()` permet d'ajouter une classe à un élément HTML.
mainTitle.classList.add('txt-green', 'test');

// La méthode `classList.remove()` permet d'ajouter une classe à un élément HTML.
const paragrapheTest = document.querySelector('#paragraphe-test');
paragrapheTest.classList.remove('txt-uppercase');

// La méthode `classList.contains()` permet de vérifier si un élément HTML possède une classe donnée.
const title2 = document.querySelector('#title-2');
const isTitle = title2.classList.contains('chaussette');

// La propriété `innerHTML` permet de récupérer ou de définir le contenu HTML d'un élément HTML (le HTML est interprété).
title2.innerHTML = "C'est <em> pas si dur</em> le Js";

// La propriété `textContent` permet de récupérer ou de définir le contenu textuel d'un élément HTML.
title2.textContent = "C'est <strong> passi dur </strong> le Js";

// La méthode `setAttribute()` permet de définir la valeur d'un attribut HTML.
const paragrapheWithTitle = document.querySelector('#paragraphe-with-title');
paragrapheTest.setAttribute('title', 'Je suis encore une pop up');
paragrapheWithTitle.title = 'Je suis aussi une pop-up';
