const burger = document.querySelector('.burger')
const nav = document.querySelector('.navbar')
burger.addEventListener('mouseover', function () {
  nav.style.display = 'flex';
})
nav.addEventListener('mouseout', function () {
  nav.style.display = 'none';
})