const search = document.querySelector('.search');
const input = document.querySelector('.inputText');
const button = document.querySelector('.searchButton');

button.addEventListener('click', function () {
    search.classList.toggle('active');
    input.focus();
});