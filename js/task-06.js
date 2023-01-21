const validationInput = document.querySelector('#validation-input');

const OPERATION_TYPES = {
    add: "add",
    remove: "remove"
};

validationInput.addEventListener('blur', () => {
    if (validationInput.value.trim().length === Number(validationInput.dataset.length)) {
        classOperations('valid', OPERATION_TYPES.add);
        classOperations('invalid', OPERATION_TYPES.remove);
    } else {
        classOperations('invalid', OPERATION_TYPES.add);
        classOperations('valid', OPERATION_TYPES.remove);
    }
});

function classOperations(className, operationType) {
    if (operationType === OPERATION_TYPES.add) {
        validationInput.classList.add(className);
    } else {
        validationInput.classList.remove(className);
    }
}