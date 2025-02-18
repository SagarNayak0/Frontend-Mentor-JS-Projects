document.getElementById("emailForm").addEventListener("submit", (e) => {
    e.preventDefault();
    let emailInput = document.getElementById("email");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(emailInput.value)) {
        emailInput.style.borderColor = "red";
    }else {
        emailInput.style.borderColor = "green";
        alert("Thank you for subscribing!");
    }
});