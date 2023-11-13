var shape = document.getElementById("square");

shape.addEventListener("mouseover", function() {
    this.style.borderRadius = "50%";
});

shape.addEventListener("mouseout", function() {
    this.style.borderRadius = "0";
});