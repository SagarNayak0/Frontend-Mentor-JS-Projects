const circles = document.querySelectorAll('.circle')
const btn = document.querySelector('button')
const main = document.querySelector('main')

let selectedRating = null;

circles.forEach(star => {
    star.addEventListener('click', () => {
        circles.forEach(s => s.classList.remove('active'));
        star.classList.add('active');
        selectedRating = star.getAttribute('data-value');
    });
});

btn.addEventListener('click', () => {
    if (selectedRating) {
        main.innerHTML = `
            <div class="card">
                <image src="/Frontend-Mentor-JS-Projects/Rating Components/images/illustration-thank-you.svg" alt="thank you">

                <div class="selected">
                    <p>You selected ${selectedRating} out of 5</p>
                </div>

                <h1>Thank you!</h1>

                <p class="feedback">
                    We appreciate you taking the time to give a rating. &nbsp;&nbsp;If you ever need more support, 
                    don't hesitate to <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;get in touch!
                </p>
            </div>
        `        
    }
})

