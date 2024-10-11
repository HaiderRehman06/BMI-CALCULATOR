let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');

    if (!weight || !height) {
        alert('Please fill out both fields.');
        return;
    }
    if (weight <= 0 || height <= 0) {
        alert('Please enter positive numbers for weight and height.');
        return;
    }


        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        if(bmi < 18.6){
            result.innerHTML = 'Under weight : ' + bmi;
        }else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = 'Normal : ' + bmi;
        }else if(bmi >= 25 && bmi < 29.9 ){
            result.innerHTML = 'Overweight : ' + bmi;
        }else if(bmi >= 30 ){
            result.innerHTML = 'Obesity : ' + bmi;
        }else{
        alert('The form has errors');
        result.innerHTML = '';}
});