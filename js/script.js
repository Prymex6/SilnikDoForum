// Sceond leve menu activation

const menu = document.querySelector(".categories-more");
const activation = document.querySelector(".categories");
console.log(activation);
activation.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    console.log(menu);
});