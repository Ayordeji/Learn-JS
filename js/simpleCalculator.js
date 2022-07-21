  let num1 = prompt("Please enter a number", "0");
  let num2 = prompt("Please enter a number", "0");
  
    document.getElementById("num1-el").textContent = num1;
    document.getElementById("num2-el").textContent = num2 ;



function add() {
    let result = parseInt(num1) + parseInt(num2)
    let Fresult = "Sum: " + result
    document.getElementById("sum-el").textContent = Fresult
    console.log(result)
    console.log(Fresult)
}

function subtract() {
    let result = num1 - num2
    let Fresult = "Difference: " + result
    document.getElementById("diff-el").textContent = Fresult
    console.log(result)
    console.log(Fresult)
    
}

function divide(){
    let result = num1 / num2
    let Fresult = "Division: " + result
    document.getElementById("div-el").textContent = Fresult
    console.log(result)
    console.log(Fresult)
}

function multiply() {
    let result = num1 * num2
    let Fresult = "Multipication: " + result
    document.getElementById("mul-el").textContent = Fresult
    console.log(result)
    console.log(Fresult)
}
