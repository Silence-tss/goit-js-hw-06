const formInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
// console.log(formInput);
// console.log(nameOutput.textContent);
formInput.addEventListener('input', onFormInput);

function onFormInput(evt) {
    if (!evt.currentTarget.value.length || evt.currentTarget.value.trim() === '') {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = evt.currentTarget.value;
    }

}
