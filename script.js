let weightInput = document.getElementById('weight');
let heightInput = document.getElementById('height');
let calculateBtn = document.getElementById('calculate-btn');
let bmiResultElement = document.getElementById('bmi-result');
let categoryMsgElement = document.getElementById('category-msg');


calculateBtn.addEventListener('click', calculateBMI);

function calculateBMI() {
    
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (!weight || !height) {
        alert('Please fill out both fields.');
        return;
    }
    if (weight <= 0 || height <= 0) {
        alert('Please enter positive numbers for weight and height.');
        return;
    }
}
