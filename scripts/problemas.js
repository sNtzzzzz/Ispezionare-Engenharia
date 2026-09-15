const hoverDisponivel = window.matchMedia('(hover: hover) and (pointer: fine)');

document.querySelectorAll('.problema').forEach((card) => {
    const botao = card.querySelector('.problemsImg');
    const descricao = card.querySelector('.problema-descricao');
    let fixado = false;

    function mostrar(aberto) {
        card.classList.toggle('ativo', aberto);
        botao.setAttribute('aria-expanded', String(aberto));
        descricao.hidden = !aberto;
    }

    botao.addEventListener('click', () => {
        fixado = !fixado;
        mostrar(fixado);
    });
    card.addEventListener('pointerenter', () => {
        if (hoverDisponivel.matches) mostrar(true);
    });
    card.addEventListener('pointerleave', () => {
        if (!fixado && !card.contains(document.activeElement)) mostrar(false);
    });
    card.addEventListener('focusout', (event) => {
        if (!fixado && !card.contains(event.relatedTarget)) mostrar(false);
    });
    card.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            fixado = false;
            botao.focus();
            mostrar(false);
        }
    });
});
