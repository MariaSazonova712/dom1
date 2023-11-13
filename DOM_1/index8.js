const createDivButton = document.getElementById('square');

createDivButton.addEventListener('click', () => {
    for (let i = 0; i < 10; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('newDiv');
        newDiv.textContent = Math.floor(Math.random() * 10);
        newDiv.addEventListener('click', () => {
            newDiv.remove();
        })
        document.body.appendChild(newDiv);
    }
});

