const fillButton = document.getElementById('fillButton');
const textInput = document.getElementById('textInput');

fillButton.addEventListener('click', () => {
    const userInput = prompt('Введите данные:');
    if (userInput) {
        textInput.value = userInput;
    }
});
