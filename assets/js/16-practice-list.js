const listMovies = document.querySelector('#list-movies');
// listMovies.style.backgroundColor = 'red'
// listMovies.style.padding = '30px'

listMovies.addEventListener('click', function (event) {
    if (
        event.target.style.fontSize == '' ||
        event.target.style.fontSize == '16px'
    ) {
        event.target.style.fontSize = '30px';
    } else {
        event.target.style.fontSize = '16px';
    }
});

listMovies.addEventListener('dblclick', function (e) {
    const title = document.createElement('h2');
    title.textContent = e.target.textContent;

    const container = document.querySelector('#container');

    container.prepend(title);
});
