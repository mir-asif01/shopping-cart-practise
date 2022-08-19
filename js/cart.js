// phone price field

document.getElementById('phoneMinus').addEventListener('click',function(){
    const inputField = document.getElementById('phoneNumberInput');
    const inputValueStr = inputField.value;
    const inputValue = Number(inputValueStr);
    const updatedInputValue = inputValue - 1;
    inputField.value = updatedInputValue; 

    let phonePriceField = document.getElementById('phone-price');
    const phonePriceStr = phonePriceField.innerText;
    const phonePrice = Number(phonePriceStr);

    const  updatedPhonePrice = updatedInputValue * 1299;
    phonePriceField.innerText = updatedPhonePrice;

    //total cost

    let subTotalField = document.getElementById('sub-total');
    let subTotalStr = subTotalField.innerText;
    const subTotal = Number(subTotalStr);

    let totalField = document.getElementById('total');
    let totalStr = totalField.innerText;
    const total = Number(totalStr);

    let taxField = document.getElementById('tax');
    let taxStr = taxField.innerText;
    const tax = Number(taxStr);
    
    const updatedSubTotal = subTotal - 1299;
    subTotalField.innerText = updatedSubTotal;

    const updatedTotal = updatedSubTotal + (tax*updatedInputValue)
    totalField.innerText = updatedTotal; 
})

document.getElementById('phonePlus').addEventListener('click',function(){
    const inputField = document.getElementById('phoneNumberInput');
    const inputValueStr = inputField.value;
    const inputValue = Number(inputValueStr);
    const updatedInputValue = inputValue + 1;
    inputField.value = updatedInputValue;

    let phonePriceField = document.getElementById('phone-price');
    const phonePriceStr = phonePriceField.innerText;
    const phonePrice = Number(phonePriceStr);
    
    const  updatedPhonePrice = updatedInputValue * 1299;
    phonePriceField.innerText = updatedPhonePrice;

    // total cost

    let subTotalField = document.getElementById('sub-total');
    let subTotalStr = subTotalField.innerText;
    const subTotal = Number(subTotalStr);

    let totalField = document.getElementById('total');
    let totalStr = totalField.innerText;
    const total = Number(totalStr);

    let taxField = document.getElementById('tax');
    let taxStr = taxField.innerText;
    const tax = Number(taxStr);
    
    const updatedSubTotal = subTotal + 1299;
    subTotalField.innerText = updatedSubTotal;

    const updatedTotal = updatedSubTotal + (tax*updatedInputValue)
    totalField.innerText = updatedTotal; 
})

//-------------------------------------------------------------------------//
//=========================================================================//
//0000000000000000000000000000000000000000000000000000000000000000000000000//

//case price field

document.getElementById('case-minus').addEventListener('click',function(){
    const inputField = document.getElementById('case-number');
    const inputValueStr = inputField.value;
    const inputValue = Number(inputValueStr);
    const updatedInputValue = inputValue - 1;
    inputField.value = updatedInputValue; 

    let casePriceField = document.getElementById('case-price');
    const casePriceStr = casePriceField.innerText;
    const casePrice = Number(casePriceStr);

    const  updatedCasePrice = updatedInputValue * 59;
    casePriceField.innerText = updatedCasePrice;

    // total cost

    let subTotalField = document.getElementById('sub-total');
    let subTotalStr = subTotalField.innerText;
    const subTotal = Number(subTotalStr);

    let totalField = document.getElementById('total');
    let totalStr = totalField.innerText;
    const total = Number(totalStr);

    let taxField = document.getElementById('tax');
    let taxStr = taxField.innerText;
    const tax = Number(taxStr);
    
    const updatedSubTotal = subTotal - 59;
    subTotalField.innerText = updatedSubTotal;

    const updatedTotal = updatedSubTotal + (tax*updatedInputValue)
    totalField.innerText = updatedTotal; 
})


document.getElementById('case-plus').addEventListener('click',function(){
    const inputField = document.getElementById('case-number');
    const inputValueStr = inputField.value;
    const inputValue = Number(inputValueStr);
    const updatedInputValue = inputValue + 1;
    inputField.value = updatedInputValue; 

    let casePriceField = document.getElementById('case-price');
    const casePriceStr = casePriceField.innerText;
    const casePrice = Number(casePriceStr);

    const  updatedCasePrice = updatedInputValue * 59;
    casePriceField.innerText = updatedCasePrice;

    // total cost


    let subTotalField = document.getElementById('sub-total');
    let subTotalStr = subTotalField.innerText;
    const subTotal = Number(subTotalStr);

    let totalField = document.getElementById('total');
    let totalStr = totalField.innerText;
    const total = Number(totalStr);

    let taxField = document.getElementById('tax');
    let taxStr = taxField.innerText;
    const tax = Number(taxStr);
    
    const updatedSubTotal = subTotal + 59;
    subTotalField.innerText = updatedSubTotal;

    const updatedTotal = updatedSubTotal + (tax*updatedInputValue)
    totalField.innerText = updatedTotal; 
})

