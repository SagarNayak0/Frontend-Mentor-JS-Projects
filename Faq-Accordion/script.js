const pluses = document.querySelectorAll('.plus')
const minuses = document.querySelectorAll('.minus')
const containers = document.querySelectorAll('.qs-container')

pluses.forEach((plus) => {
    plus.addEventListener('click', () => {
        plus.offsetParent.classList.add('show')
    })
})

minuses.forEach((minus) => {
    minus.addEventListener('click', () => {
        minus.offsetParent.classList.remove('show')
    })
})

