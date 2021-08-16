function getInputValue(inputId) {
    //input field get depositValue
    const depositInput = document.getElementById(inputId);
    const depositInputValue = parseFloat(depositInput.value);

    depositInput.value = "";

    return depositInputValue;
}

function updateTotalField(totalFieldId, Amount) {
    // debugger;
    //get token value totalFieldId
    const getAmount = document.getElementById(totalFieldId);
    const depositAmountFloat = parseFloat(getAmount.innerText);

    getAmount.innerText = depositAmountFloat + Amount;

}

function updateBalance(value) {
    // get main Balance value
    const getBalance = document.getElementById("balance");
    const balanceValue = parseFloat(getBalance.innerText);

    getBalance.innerText = value + balanceValue

}


//Deposit
document.getElementById("depositBtn").addEventListener("click", function () {
    /*  //input field get depositValue
     const depositInput = document.getElementById("");
     const depositInputValue = parseFloat(depositInput.value); */

    const depositInputValue = getInputValue("depositValue");


    /* 
        //get token value Deposit
        const getDeposit = document.getElementById("deposit");
        const depositAmount = parseFloat(getDeposit.innerText); */
    /* 
        // get main Balance value
        const getBalance = document.getElementById("balance");
        const balanceValue = parseFloat(getBalance.innerText);
     */

    updateTotalField("deposit", depositInputValue);



    // getDeposit.innerText = depositInputValue + depositAmount;
    // getBalance.innerText = depositInputValue + balanceValue
    updateBalance(depositInputValue);


    /* depositInput.value = ""; */
});

//withdraw
document.getElementById("withdrawBtn").addEventListener("click", function () {
    /*
    //get input field value of withdrawValue
    const withdrawElement = document.getElementById("withdrawValue");
    const withdrawAmountFloat = parseFloat(withdrawElement.value); */
    const withdrawAmountFloat = getInputValue("withdrawValue");

    /*     //get toke value of withdraw
        const withdrawTokenElement = document.getElementById("withdraw");
        const withdrawTokenFloat = parseFloat(withdrawTokenElement.innerText);
     */
    // get main Balance value
    const getBalanceElement = document.getElementById("balance");
    const balanceValueFloat = parseFloat(getBalanceElement.innerText);

    //only change depositAmount greater than balanceValue
    if (withdrawAmountFloat > balanceValueFloat) {
        alert("Invalid Input")
    }
    else {

        /* withdrawTokenElement.innerText = withdrawAmountFloat + withdrawTokenFloat; */
        updateTotalField("withdraw", withdrawAmountFloat);


        getBalanceElement.innerText = balanceValueFloat - withdrawAmountFloat;

    }

    /*  //reset withdrawElement
     withdrawElement.value = ""; */
})