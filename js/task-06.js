const textForm = document.querySelector("#validation-input");

textForm.addEventListener("blur", onInputBlur);

function onInputBlur(evt) {
    const maxLength = textForm.dataset.length;
    const inputTextLength = textForm.value.length;
    console.log(maxLength);
    console.log(inputTextLength);

if (inputTextLength === Number(maxLength)) {
    textForm.classList.remove("invalid");
    textForm.classList.add("valid");
} else {
    textForm.classList.remove("valid");
    textForm.classList.add("invalid");
}
}


