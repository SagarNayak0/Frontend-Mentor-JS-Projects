const input = document.getElementById('email');
const btn = document.getElementById('notify');
const error = document.getElementById('warning');
let isValid = true;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

btn.addEventListener('click', () => {
    if (!emailPattern.test(input.value.trim())) {
        error.style.display = "block";
        isValid = false;
    }else {
        error.style.display = "none";
    }
})

input.addEventListener('focus', () => {
    error.style.display = "none";
})