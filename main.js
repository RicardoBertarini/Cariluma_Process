const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuOrganizacionIcon = document.querySelector('.navbar-user-selection');
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu'); 
const aside = document.querySelector('.organization-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
menuOrganizacionIcon.addEventListener('click', toggleOrganizationAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }  

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleOrganizationAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    //aside.classList.toggle('inactive');
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
    
}