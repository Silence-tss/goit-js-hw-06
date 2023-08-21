const categoryLengthEl = document.querySelectorAll('.item');
console.log('Number of categories:', categoryLengthEl.length);

const navArray = document.querySelector('#categories');
const listNavArray = navArray.children;
console.log(listNavArray);

listNavArray.forEach(function (name, index, array) {
    const navElement = document.querySelector('.item');
    const firstEl = navElement.firstElementChild;
    console.log('Category:', firstEl.textContent);

});

// const navElement = document.querySelector('.item');
// const firstEl = navElement.firstElementChild;
// console.log('Category:', firstEl.textContent);

// const newClassNavEl = navElement.lastElementChild;
// newClassNavEl.classList.add('child-item');

// const listNavEl = newClassNavEl.children;
// console.log('Elements:', listNavEl.length);
// })

// const navElement = document.querySelector('.item');
// const firstEl = navElement.firstElementChild;
// console.log('Category:', firstEl.textContent);

// const newClassNavEl = navElement.lastElementChild;
// newClassNavEl.classList.add('child-item');

// const listNavEl = newClassNavEl.children;
// console.log('Elements:', listNavEl.length);
