function calculateBMI() 
{
    let weight = parseInt(document.getElementById('weight').value);
    let heightCm = parseInt(document.getElementById('height').value);

    let heightMeter = heightCm / 100;
    let bmi = weight / (heightMeter * heightMeter);

    document.getElementById('bmiResult').textContent = bmi;
    document.getElementById('bmiCategory').textContent = Category(bmi);
}

function Category(bmi)

{
    if (bmi < 18) 
        {
          return ('Low Weight');
        } 
    else if (bmi >= 18 && bmi < 25) 
        {
          return ('Normal Weight');
        } 
    else if (bmi >= 25 && bmi < 30) 
        {
          return ('Obesity');
        } 
    else 
        {
          return ('Severe Obesity');
        }
}
