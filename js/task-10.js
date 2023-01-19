function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// const heading = document.createElement("h1");
const arrDiv = [];
let counterSize = 30;
let amount = 0;

const numberEl = document.querySelector('input');
const createEl = document.querySelector('.data-create');
const destroyEl = document.querySelector('.data-destroy');
const boxes = document.getElementById("#boxes");

// destroyBoxes() 

numberEl.addEventListener("change", () => {
  amount = numberEl.value;
    console.log(amount);
});

// createEl.addEventListener('click', () => {
//   createBoxes(amount) {
//     for (let i = 1; i <= amount; i += 1){
//   createElement
//   Element.style.width = counterSize + i * 10
//   arrDiv.push
// }
//     }

// });


