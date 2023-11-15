function getTextElementValueById(elementId){

    const item = document.getElementById(elementId);
    const currentItemString = item.innerText;
    const currentItemTotal = parseInt(currentItemString);

    return currentItemTotal;
};

function setTextElementValueById(elementId, value){
    const subtotalElement = document.getElementById(elementId);
    subtotalElement.innerText = value;
}

function calculateSubTotal(){
      // calculate total
      const currentPhoneTotal = getTextElementValueById('phone-price');
      const currentCaseTotal = getTextElementValueById('case-price');
      const currentSubtotal = currentPhoneTotal + currentCaseTotal;
  
    setTextElementValueById('sub-total', currentSubtotal);

      //calculate tax
      const taxAmountString = (currentSubtotal * 0.1).toFixed(2);

      const taxAmount = parseFloat(taxAmountString);

      setTextElementValueById('tax-total', taxAmount);

      const finalAmount = currentSubtotal + taxAmount;
      setTextElementValueById('total', finalAmount);
  
  };