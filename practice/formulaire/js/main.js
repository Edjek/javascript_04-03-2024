const submit = document.querySelector('#submit');
const form = document.querySelector('#form-inscription');

submit.addEventListener('click', function (e) {
    // Prevent the form from being submitted
    e.preventDefault();

    // Remove all error messages
    removeErrorMessages();

    // Check if inputs are valid
    if (checkValidity()) {
        // Submit the form
        form.submit();
    }
});

// Remove all error messages
function removeErrorMessages() {
    const messageError = document.querySelectorAll('.message-error');
    messageError.forEach((message) => {
        message.remove();
    });
}

// Function to display error message
function displayErrorMessage(input, message) {
    const messageError = document.createElement('p');
    messageError.textContent = message;
    messageError.classList.add('message-error');
    input.parentElement.append(messageError);
}

// Function to check if inputs are valid
function checkValidity() {
    // Get all inputs
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const pswdInput = document.querySelector('#pswd');
    const confirmPswdInput = document.querySelector('#confirm-pswd');

    let isValide = true;

    // Check if inputs are empty
    if (nameInput.value == '') {
        displayErrorMessage(nameInput, 'Veuillez indiquer votre nom et prénom');
        isValide = false;
    } else if (emailInput.value == '') {
        displayErrorMessage(
            emailInput,
            'Veuillez indiquer votre adresse email'
        );
        isValide = false;
    } else if (pswdInput.value == '') {
        displayErrorMessage(pswdInput, 'Veuillez choisir un mot de passe');
        isValide = false;
    } else if (confirmPswdInput.value == '') {
        displayErrorMessage(
            confirmPswdInput,
            'Veuillez confirmer votre mot de passe'
        );
        isValide = false;
    } else if (pswdInput.value != confirmPswdInput.value) {
        displayErrorMessage(
            confirmPswdInput,
            'Les mots de passe ne correspondent pas'
        );
        isValide = false;
    }
    return isValide;
}
