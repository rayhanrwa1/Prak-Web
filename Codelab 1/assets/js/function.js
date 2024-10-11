document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 + num2;
    document.getElementById('result').textContent = 'Hasil: ' + result;
});

document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').textContent = 'Hasil: ';
});