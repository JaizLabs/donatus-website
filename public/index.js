var toggle = document.querySelector('.toggle');
var nav = document.querySelector('.nav');
const tham = document.querySelector('.tham')

toggle.addEventListener('click', function () {
    nav.classList.toggle('flex')
    nav.classList.toggle('flex-col')
    nav.classList.toggle('hidden')
})

tham.addEventListener('click', function () {
    tham.classList.toggle('tham-active');
})