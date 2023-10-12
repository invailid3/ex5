function calculate (){
    let quantityEl = document.getElementById("calc-quantity");
    let quantity = parseInt(quantityEl.value);
    let priceEl = document.getElementById("calc-opt");
    let price = parseInt(priceEl.value);
    let resultEl = document.getElementById("calc-out");
    
    let result = quantity * price;

    if(isNaN(result)){
        resultEl.innerHTML = "Remind";
    }
    else{
        resultEl.innerHTML = "Result: " +  result;    
    }
}
