const createDivButton = document.getElementById('createDivButton');
    
    createDivButton.addEventListener('click', () => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('newDiv');
    document.body.appendChild(newDiv);
});