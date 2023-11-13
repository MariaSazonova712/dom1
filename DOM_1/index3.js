function calculateSum() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

if (isNaN(num1) || isNaN(num2)) {
    alert("Введите числа");
    return;
}

var sum = num1 + num2;
alert("Сумма чисел: " + sum);
}