const nav = document.querySelector('.nav');
const header = document.querySelector('#menu');
const menuMobile = document.querySelector('.mobile')

window.addEventListener('scroll', function() {
   header.classList.toggle('fundoHeader', window.scrollY > 30);
});

menuMobile.addEventListener('click', function() {
   nav.classList.toggle('ativo');
});