const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

const allInputEl = form.elements;
console.log(form.elements);





function onSubmit(evt) {
    evt.preventDefault();
    // const allInputEl = form.currentTarget.elements;
    // console.log(allInputEl);

    const message = "All fields must be fillded";
    
}
