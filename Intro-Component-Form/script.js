const subscribeBtn = document.getElementById('subscribe');
const inputs = document.querySelectorAll('input');

subscribeBtn.addEventListener('click', () => {
    alert('Thank You for Subscribe')
})

inputs.forEach((input) => {
    const errorText = input.nextElementSibling.nextElementSibling;
    const errorIcon = input.nextElementSibling;
    input.addEventListener('focus', () => {
    input.style.borderColor = "#ddd";
    errorText.style.display = "none";
    errorIcon.style.display = "none";
})
})

document.getElementById("form").addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    validateField(firstName);
    validateField(lastName);
    validateEmail(email);
    validateField(password);

    if (isValid) {
        alert('Form submitted successfully!');
    }

    function validateField(input) {
        const errorText = input.nextElementSibling.nextElementSibling;
        const errorIcon = input.nextElementSibling;
        
        if (input.value.trim() === "") {
            showError(input, errorText, errorIcon);
            isValid = false;
        }else {
            hideError(input, errorText, errorIcon);
        }
        
    }

    function validateEmail(input) {
        const errorText = input.nextElementSibling.nextElementSibling;
        const errorIcon = input.nextElementSibling;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(input.value.trim())) {
            showError(input, errorText, errorIcon);
            isValid = false;
        } else {
            hideError(input, errorText, errorIcon);
        }
    }

    function showError(input, errorText, errorIcon) {
        input.style.borderColor = "red";    
        errorText.style.display = "block";
        errorIcon.style.display = "block";
    }

    function hideError(input, errorText, errorIcon) {
        input.style.borderColor = "#ddd";
        errorText.style.display = "none";
        errorIcon.style.display = "none";
    }

})
