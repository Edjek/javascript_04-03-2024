const listMovies = document.querySelector('#list-movies');
console.log(listMovies);

listMovies.addEventListener('click', function (event) {
    if (event.target.style.fontSize == '' || event.target.style.fontSize == '16px') {
        event.target.style.fontSize = '50px';
    } else {
        event.target.style.fontSize = '16px';
    }

    console.log(event.target.style.fontSize);
});
