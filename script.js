document.getElementById('enquiryForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const unit = document.getElementById('unitType').value;

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const unitError = document.getElementById('unitError');
    const successMessage = document.getElementById('successMessage');

    nameError.style.display = 'none';
    emailError.style.display = 'none';
    phoneError.style.display = 'none';
    unitError.style.display = 'none';
    successMessage.style.display = 'none';

    let isValid = true;

    if (name === '') {
        nameError.textContent = 'Please enter your name';  
        nameError.style.display = 'block';
        isValid = false;
    }

    if (email === '') {
        emailError.textContent = 'Please enter your email'; 
        emailError.style.display = 'block';
        isValid = false;
    }

    if (phone === '') {
        phoneError.textContent = 'Please enter your phone number';  
        phoneError.style.display = 'block';
        isValid = false;
    }

    if (unit === '') {
        unitError.textContent = 'Please select interested unit type'; 
        unitError.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        successMessage.textContent = 'Thank you! Our sales team will contact you soon.'; // 
        successMessage.style.display = 'block';
        
        document.getElementById('enquiryForm').reset();
    }
});

const calcUnitType = document.getElementById('calcUnitType');
const calculatedPrice = document.getElementById('calculatedPrice');

calcUnitType.addEventListener('change', function() {
    
    const selectedUnit = calcUnitType.value; 
    
    if (selectedUnit === '2 BHK') {
        calculatedPrice.textContent = 'Rs. 75 Lakhs'; 
    } else if (selectedUnit === '3 BHK') {
        calculatedPrice.textContent = 'Rs. 95 Lakhs'; 
    } else {
        calculatedPrice.textContent = '--'; 
    }
});

