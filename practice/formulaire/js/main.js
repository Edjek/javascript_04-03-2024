const submit = document.querySelector('#submit');

submit.addEventListener('click', function (e) {
    e.preventDefault();

    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');

    if (nameInput.value == '') {
        const messageError = document.createElement('p');
        messageError.textContent = 'Le champs est vide';
        messageError.classList.add('error-message');
        console.log(nameInput.parentElement);
        nameInput.parentElement.append(messageError);
    } else if (emailInput.value == '') {
        const messageError = document.createElement('p');
        messageError.textContent = 'Le champs est vide';
        messageError.classList.add('error-message');
        emailInput.parentElement.append(messageError);
    }
});
