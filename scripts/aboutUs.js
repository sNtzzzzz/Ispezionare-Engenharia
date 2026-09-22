const aboutHeader = document.querySelector('.aboutPage .headerItens');
const aboutHero = document.querySelector('.aboutHero');
const aboutLogo = aboutHeader.querySelector('.logoHeader');
const lightLogo = aboutLogo.getAttribute('src');
const darkLogo = '../images/images/logoHeaderB.png';

const logoPreload = new Image();
logoPreload.src = darkLogo;

function updateHeader(pastHero) {
    const source = pastHero ? darkLogo : lightLogo;
    if (aboutLogo.getAttribute('src') !== source) {
        aboutLogo.setAttribute('src', source);
    }
}

const heroObserver = new IntersectionObserver(([entry]) => {
    updateHeader(!entry.isIntersecting && entry.boundingClientRect.bottom <= 0);
});

heroObserver.observe(aboutHero);
window.addEventListener('pageshow', () => {
    updateHeader(aboutHero.getBoundingClientRect().bottom <= 0);
});
