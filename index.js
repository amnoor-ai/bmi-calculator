const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMi(){
    const heightValue = document.getElementById("height").value / 100
    const weightValue = document.getElementById("weight").value
    
    const bmiValue = (weightValue / (heightValue * heightValue)).toFixed(2)
    
    bmiInputEl.value = bmiValue;

if (bmiValue < 18.5) {
        weightConditionEl.innerText = "Under Weight";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        weightConditionEl.innerText = "Normal Weight"; 
    } else if (bmiValue > 24.9 && bmiValue <= 29.9) {
        weightConditionEl.innerText = "Overweight";
    } else {
        weightConditionEl.innerText = "Obese";
    }
}

btnEl.addEventListener("click", calculateBMi)