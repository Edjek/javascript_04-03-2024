/* --------------------------- Manipulation du DOM --------------------------- */

/*
    Le DOM (Document Object Model) en Javascript
    est une representation en mémoire d'un document HTML chargé par le navigateur
    Le DOM represente chaque élément du document comme un objet Javascript
    qui peut être manipulé et modifié à travers le code Javascript
*/

/*  -------------------------------------------
    Methodes de selecteurs JavaScript
    -------------------------------------------
*/

// ? La methode `getElementById()`
const mainTitle = document.getElementById('main-title');
mainTitle.style.fontFamily = 'Arial';

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
    title[i].style.backgroundColor = 'purple'
}

/*
    ? La methode `querySelector()`
*/
const cssProperties = document.querySelector('#title')
cssProperties.style.fontSize = '30px'

/*
    ? La methode `querySelectorAll()`
    querySelectorAll() renvoi une NodeList
    sur laquelle on pourra itérer avec la boucle `for()`, for(...of..) et la méthode `forEach()`

*/
const newParagraphes = document.querySelectorAll('p')
// for( let paragraphe of newParagraphes){
//     paragraphe.style.textDecoration = 'underline'
// }

newParagraphes.forEach(function(paragraphe){
    paragraphe.style.textDecoration = 'underline'
})

// selectionner tous les elements qui ont la class txt-uppercase
// tous les mettree en majuscule