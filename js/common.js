function totalPriceElement(elementId){
    const phoneTotalElement =document. getElementById(elementId);
    const currentTotalElementString =phoneTotalElement.innerText ;
    const currentPhoneTotal =parseInt(currentTotalElementString);
    return currentPhoneTotal;
}

function setElementValue (element,value){
    const subTotalElement =document.getElementById(element);
    subTotalElement.innerText = value;
  }
  

  function calculateSubTotal (){
    const currentPhoneTotal =totalPriceElement('phone-total');
    const currentCaseTotal =totalPriceElement('case-total');

    // calculate value ////  
    const CurrentTotal = currentCaseTotal + currentPhoneTotal;
     setElementValue('sub-total', CurrentTotal);

     const taxAmountString = (CurrentTotal * 0.1).toFixed(2);
     const taxAmount = parseFloat(taxAmountString);
setElementValue('tax-amount', taxAmount);
const finalTotal = taxAmount + CurrentTotal;
setElementValue('final-total', finalTotal);
  
      
  }
  
//   calculate tax ////


 
