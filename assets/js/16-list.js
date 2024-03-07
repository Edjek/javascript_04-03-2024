const listMovies = document.querySelector('#list-movies');

listMovies.addEventListener('click', function (event) {
    if (
        event.target.style.fontSize == '' ||
        event.target.style.fontSize == '16px'
    ) {
        event.target.style.fontSize = '50px';
    } else {
        event.target.style.fontSize = '16px';
    }
});

listMovies.addEventListener('dblclick', function(e){
    const title = document.createElement('h2')
    title.textContent = e.target.textContent
    const container = document.querySelector('#container')
 
    container.prepend(title)

})
// Quand on double sur la liste
    // On va creer un element h2
    // Le texte de ce h2 sera le texte de l'element de la liste sur lequel on double cliqué
    // On l'ajoute en haut (tout en haut avant le titre principale)
