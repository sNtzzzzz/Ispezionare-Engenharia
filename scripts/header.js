const siteHeader = document.querySelector('.headerItens');
const pageHero = document.querySelector('.hero, .aboutHero, .initialContainerServices');
const mobileHeader = window.matchMedia('(max-width: 760px)');
const adaptiveLogo = siteHeader.classList.contains('headerTransparent')
    ? siteHeader.querySelector('.logoHeader')
    : null;
const darkLogo = adaptiveLogo?.getAttribute('src');
const whiteLogo = darkLogo?.replace('logoHeaderB.png', 'logoHeader.png');

if (adaptiveLogo) {
    const preloadLogo = new Image();
    preloadLogo.src = whiteLogo;
}

function updateSiteHeader() {
    const solidHeader = siteHeader.hasAttribute('data-solid-header');
    const pastHero = !pageHero || pageHero.getBoundingClientRect().bottom <= siteHeader.offsetHeight;
    siteHeader.classList.toggle('isScrolled', solidHeader || pastHero);
    if (adaptiveLogo) {
        const source = mobileHeader.matches && (solidHeader || pastHero) ? whiteLogo : darkLogo;
        if (adaptiveLogo.getAttribute('src') !== source) {
            adaptiveLogo.setAttribute('src', source);
        }
    }
}

window.addEventListener('scroll', updateSiteHeader, { passive: true });
window.addEventListener('resize', updateSiteHeader);
window.addEventListener('pageshow', updateSiteHeader);
updateSiteHeader();
