function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const arrDiv = [];
let counterSize = 30;
let amount = 0;

const inputEl = document.querySelector('input');
const createEl = document.querySelector('[data-create]');
const destroyEl = document.querySelector('[data-destroy]');
const boxes = document.querySelector("#boxes");

createEl.addEventListener("click", () => {
  createBoxes(inputEl.value);
});

destroyEl.addEventListener("click", clearBoxes);

  function createBoxes(amount) {
    for (let i = 1; i <= amount; i += 1) {
      const div = document.createElement("div");
      div.style.width = counterSize + i * 10 + "px";
      div.style.height = counterSize + i * 10 + "px";
      div.style.backgroundColor = getRandomHexColor();
      arrDiv.push(div);
    };

    boxes.prepend(...arrDiv);
    console.log(arrDiv);
};
  
function clearBoxes() {
  boxes.innerHTML = "";
}


