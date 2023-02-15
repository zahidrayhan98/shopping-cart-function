

function updateCaseNumber (isIncrease){
    const caseNumberField =document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value ;
    const previousCaseNumber =parseInt(caseNumberString);
     let newCaseNumber ;

     if(isIncrease=== true){
        newCaseNumber = previousCaseNumber +1;
     }
     else{
        newCaseNumber = previousCaseNumber - 1;
     }
     caseNumberField.value = newCaseNumber;
     return newCaseNumber;
      

}
function UpdatePriceList (newCaseNumber){
   const newCaseTotalPrice = newCaseNumber * 59;
   const caseTotalElement =document.getElementById('case-total');
   caseTotalElement.innerText= newCaseTotalPrice;
  
}



document.getElementById('btn-case-plus').addEventListener('click', function (){
 const newCaseNumber= updateCaseNumber(true);

 UpdatePriceList(newCaseNumber);
 calculateSubTotal();

   
})

document.getElementById('btn-case-minus').addEventListener('click', function (){
    
   const newCaseNumber = updateCaseNumber(false);
   UpdatePriceList(newCaseNumber);
   calculateSubTotal();
  
})