// Sceond leve menu activation

const menu = document.querySelector(".categories-more");
const activation = document.querySelector(".categories");
console.log(activation);
activation.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    console.log(menu);
});

// Inside text disapear in search input

const input = document.querySelector('.search-input');
const text = document.querySelector('.text-inside');

input.addEventListener('focus', () => {
    text.style.display = 'none';
});

input.addEventListener('blur', () => {
    if (input.value === '') text.style.display = 'block';
});