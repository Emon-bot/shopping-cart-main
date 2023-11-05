
function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;

    if(isIncrease  === true){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}


document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
    const caseTotalPrice = newCaseNumber * 60;
    const caseTotalElement = document.getElementById('case-price');
   caseTotalElement.innerText = caseTotalPrice; 
});

document.getElementById('btn-case-minus').addEventListener('click', function(){
    updateCaseNumber(false);
})