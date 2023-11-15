function updatePhoneNumber(isIncrease){
    
    const phoneNumberField = document.getElementById('phone-number');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;

    if(isIncrease === true){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber -1;
    }

    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
}


function phoneTotalPrice(newPhoneNumber){
    const totalPrice = newPhoneNumber * 999;
    const phoneTotalElement = document.getElementById('phone-price');
    phoneTotalElement.innerText = totalPrice;
}





document.getElementById('btn-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);

    phoneTotalPrice(newPhoneNumber);
    calculateSubTotal();

});
  

document.getElementById('btn-minus').addEventListener('click',
function(){
    const newPhoneNumber = updatePhoneNumber(false);

    phoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
})