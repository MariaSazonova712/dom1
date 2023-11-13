const changeButton = document.getElementById('changeButton');
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const input3 = document.getElementById('input3');

changeButton.addEventListener('click', () => {
    const temp = input1.value;
    input1.value = input2.value;
    input2.value = input3.value;
    input3.value = temp;
    });