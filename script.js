const calculateBtn = document.querySelector("#calculateBtn");

function calculateTip(){
    
    const billAmount = parseFloat(document.querySelector("#billAmount").value);
    const serviceQuality = parseFloat(document.querySelector("#serviceQuality").value);
     
    console.log(billAmount)

    if (billAmount ==="") {
        alert("Por favor, Preencha os dados");
        return;
    }

    const tipAmount = billAmount * serviceQuality;
    const totalAmount = billAmount + tipAmount;

    const tipAmountInput = document.querySelector("#tipAmount");
    const totalAmountInput = document.querySelector("#totalAmount"); 

    tipAmountInput.value = `R$ ${tipAmount}`;
    totalAmountInput.value = `R$ ${totalAmount}`;


}

calculateBtn.addEventListener("click",calculateTip);