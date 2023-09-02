window.addEventListener('scroll', function() {
   const header = document.querySelector('#menu');
   header.classList.toggle('fundoHeader', window.scrollY > 30);
});