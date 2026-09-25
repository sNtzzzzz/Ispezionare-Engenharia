const siteHeader = document.querySelector('.headerItens');
const pageHero = document.querySelector('.hero, .aboutHero, .initialContainerServices');
const mobileHeader = window.matchMedia('(max-width: 760px)');
const adaptiveLogo = siteHeader.classList.contains('headerTransparent')
    ? siteHeader.querySelector('.logoHeader')
    : null;
const darkLogo = adaptiveLogo?.getAttribute('src');
const whiteLogo = darkLogo?.replace('logoHeaderB.png', 'logoHeader.png');
const darkSections = document.querySelectorAll('.finalContact, .siteFooter');

if (adaptiveLogo) {
    const preloadLogo = new Image();
    preloadLogo.src = whiteLogo;
}

function updateSiteHeader() {
    const solidHeader = siteHeader.hasAttribute('data-solid-header');
    const pastHero = !pageHero || pageHero.getBoundingClientRect().bottom <= siteHeader.offsetHeight;
    siteHeader.classList.toggle('isScrolled', solidHeader || pastHero);
    if (adaptiveLogo) {
        const logoRect = adaptiveLogo.getBoundingClientRect();
        const logoCenter = logoRect.top + logoRect.height / 2;
        const onDarkSection = [...darkSections].some(section => {
            const rect = section.getBoundingClientRect();
            return rect.top <= logoCenter && rect.bottom >= logoCenter;
        });
        const source = (mobileHeader.matches && (solidHeader || pastHero)) || onDarkSection ? whiteLogo : darkLogo;
        if (adaptiveLogo.getAttribute('src') !== source) {
            adaptiveLogo.setAttribute('src', source);
        }
    }
}

window.addEventListener('scroll', updateSiteHeader, { passive: true });
window.addEventListener('resize', updateSiteHeader);
window.addEventListener('pageshow', updateSiteHeader);
// Anchor offsets follow the real header height, including wrapped mobile content.
new ResizeObserver(() => {
    document.documentElement.style.setProperty('--header-height', `${siteHeader.offsetHeight}px`);
    updateSiteHeader();
}).observe(siteHeader);
updateSiteHeader();
