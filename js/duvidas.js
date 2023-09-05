const accordionItems = document.querySelectorAll('.boxConteudo');

accordionItems.forEach((item) => {
    const label = item.querySelector('.label');
    const conteudo = item.querySelector('.conteudo');

    label.addEventListener('click', () => {
        conteudo.classList.toggle('active');
    });
});