const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener("input", (event) => {
    const newValue = event.currentTarget.value.trim();
    nameOutput.textContent = newValue ? newValue : "Anonymous";
});