function updatePhoneNumber(isIncrease){
    const phoneNumberField =document.getElementById('phone-number-field');
   const phoneNumberFieldString =phoneNumberField.value ;
   const previousNumber =parseInt(phoneNumberFieldString);

   let newPhoneNumber ;
   if(isIncrease===true){
    newPhoneNumber = previousNumber +1;
   }
   else{
    newPhoneNumber =previousNumber -1 ;
   }



phoneNumberField.value =newPhoneNumber;
return newPhoneNumber;

}
function updatePriceTotal (newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219
    const phoneTotalElement =document.getElementById('phone-total');
      phoneTotalElement.innerText= phoneTotalPrice;

}



document.getElementById('btn-phone-plus').addEventListener('click', function (){
     const newPhoneNumber= updatePhoneNumber(true);

     updatePriceTotal(newPhoneNumber);
     calculateSubTotal();
   
    
 
   
});
document.getElementById('btn-phone-minus').addEventListener('click',function(){
         const newPhoneNumber= updatePhoneNumber(false);
         updatePriceTotal(newPhoneNumber);
         calculateSubTotal();
         
})