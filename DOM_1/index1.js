const startButton = document.getElementById('start-button');
let counter = 1;
const handeClick = () => {
    alert(counter);
    counter++;
};
startButton.addEventListener('click', handeClick);