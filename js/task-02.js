const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// ingredients

const ingredientsEl = document.querySelector("#ingredients");

const liFirstEl = document.createElement("li");
liFirstEl.textContent = ingredients[0];
liFirstEl.classList.add("item");

const liSecondEl = document.createElement("li");
liSecondEl.textContent = ingredients[1];
liSecondEl.classList.add("item");

const liThirdEl = document.createElement("li");
liThirdEl.textContent = ingredients[2];
liThirdEl.classList.add("item");

const liFourthEl = document.createElement("li");
liFourthEl.textContent = ingredients[3];
liFourthEl.classList.add("item");

const liFifthEl = document.createElement("li");
liFifthEl.textContent = ingredients[4];
liFifthEl.classList.add("item");

const liSixthEl = document.createElement("li");
liSixthEl.textContent = ingredients[5];
liSixthEl.classList.add("item");

ingredientsEl.append(liFirstEl, liSecondEl, liThirdEl, liFourthEl, liFifthEl, liSixthEl);
console.log(liFirstEl);


