function findRoots() {
    let a = parseFloat(document.getElementById('input-1').value);
    let b = parseFloat(document.getElementById('input-2').value);
    let c = parseFloat(document.getElementById('input-3').value);

    let discriminant = b*b - 4*a*c;

    if (discriminant > 0) {
        let root1 = (-b + Math.sqrt(discriminant)) / (2*a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2*a);
        document.getElementById('result').innerText = `Корни уравнения: ${root1.toFixed(2)}, ${root2.toFixed(2)}`;
    } else if (discriminant === 0) {
        let root = -b / (2*a);
        document.getElementById('result').innerText = `Уравнение имеет один корень: ${root.toFixed(2)}`;
    } else {
        document.getElementById('result').innerText = 'Уравнение не имеет действительных корней';
    }
}