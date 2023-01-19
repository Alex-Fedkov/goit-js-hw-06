const fontControl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontControl.addEventListener("change", () => {
    textEl.style.fontSize = fontControl.value + 'px';
    // console.log(fontControl.value);
});
