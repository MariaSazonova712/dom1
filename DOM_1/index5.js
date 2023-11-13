const inputField = document.getElementById('input-field');
const hideButton = document.getElementById('hide-btn');
const showButton = document.getElementById('show-btn');

function hideInput() {
    inputField.style.display = 'none';
}

function showInput() {
    inputField.style.display = 'block';
}

hideButton.addEventListener('click', hideInput);
showButton.addEventListener('click', showInput);
