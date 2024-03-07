/* --------------------------- EVENT --------------------------- */

/*
    En Javascript les évènements (events) permettent d'interagir avec les actions de l'utilisateur sur une page web, telles que le click, le scroll..
*/

const title = document.querySelector('#main-title');
const title2 = document.querySelector('#title');

title.addEventListener('click', function () {
    title2.style.fontSize = '50px';
});

title.addEventListener('dblclick', function () {
    title2.style.fontSize = '100px';
});

title.addEventListener('mouseenter', function () {
    title2.style.fontSize = '50px';
});

// `addEventListener()` permet de recuperer l'evenement (toutes les informations liées au clics)
// .target pet met par exemple de recuperer la balise HTML qui a réellement été cliqué
const paragrapheContainer = document.querySelector('#paragraphe-container');

paragrapheContainer.addEventListener('click', function (e) {
    console.log(e.target);
    e.target.style.color = 'red';
});
