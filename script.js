function calculate (){
    let quantityEl = document.getElementById("calc-quantity");
    let quantity = parseInt(quantityEl.value);
    let priceEl = document.getElementById("calc-opt");
    let price = parseInt(priceEl.value);
    let resultEl = document.getElementById("calc-out");
    
    let result = quantity * price;

    if(isNaN(result) || result < 0){
        resultEl.innerHTML = "Remind";
    }
    else{
        resultEl.innerHTML = "Result: " +  result;    
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let buttonEl = document.getElementById("calc-butt");
    buttonEl.addEventListener("click", calculate);
});
