const accordionItems = document.querySelectorAll('.boxConteudo');

accordionItems.forEach((item) => {
    const label = item.querySelector('.label');
    const conteudo = item.querySelector('.conteudo');

    label.addEventListener('click', () => {
        conteudo.classList.toggle('active');
        label.classList.toggle('active')
    });
});

const nav = document.querySelector('.nav');
const menuMobile = document.querySelector('.mobile')

menuMobile.addEventListener('click', () => {
    nav.classList.toggle('ativo')
})