function calculate() {
var height = document.getElementById("height").value;
var radius = document.getElementById("radius").value;
   
var surfaceArea = 2 * Math.pow(radius, 2) + 2 * Math.PI * radius;
var volume = height * Math.pow(radius, 2) * Math.PI;

document.getElementById("result").textContent = "Площадь:"+ surfaceArea  + ", Объем:" + volume;
}