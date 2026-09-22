const siteHeader = document.querySelector('.headerItens');
const pageHero = document.querySelector('.hero, .aboutHero, .initialContainerServices');

function updateSiteHeader() {
    const solidHeader = siteHeader.hasAttribute('data-solid-header');
    const pastHero = !pageHero || pageHero.getBoundingClientRect().bottom <= siteHeader.offsetHeight;
    siteHeader.classList.toggle('isScrolled', solidHeader || pastHero);
}

window.addEventListener('scroll', updateSiteHeader, { passive: true });
window.addEventListener('resize', updateSiteHeader);
window.addEventListener('pageshow', updateSiteHeader);
updateSiteHeader();
