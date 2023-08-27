const btnDecrementEl = document.querySelector('button[data-action="decrement"]');
const btnIncrementEl = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector("#value");
let counterValue = 0;


btnDecrementEl.addEventListener("click", function() {
    counterValue -= 1;
    counter.textContent = counterValue;
});
btnIncrementEl.addEventListener("click", function() {
    counterValue += 1;
    counter.textContent = counterValue;
});


// function handleDecrement() {
//     counterValue -= 1;
//     counter.textContent = counterValue;
// };
// function handleIncrement() {
//     counterValue += 1;
//     counter.textContent = counterValue;
// };