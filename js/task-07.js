const fontControl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
textEl.style.fontSize = fontControl.value + 'px';
// console.log(fontControl.min);

fontControl.addEventListener("input", () => {
    textEl.style.fontSize = fontControl.value + 'px';
    // console.log(fontControl.value);
});
