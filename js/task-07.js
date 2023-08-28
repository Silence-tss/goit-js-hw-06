const inputForm = document.querySelector("#font-size-control");
const textForm = document.querySelector("#text");

inputForm.addEventListener("input", onFontSizeChange);

function onFontSizeChange(evt) {
    const fontSize = evt.currentTarget.value + "px";
    textForm.style.fontSize = fontSize;
}