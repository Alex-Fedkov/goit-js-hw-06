const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', () => {
    if (validationInput.value.length < 6) {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    } else {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    }
});
