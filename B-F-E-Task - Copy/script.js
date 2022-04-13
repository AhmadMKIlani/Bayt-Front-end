const navSlider = () => {
    const resMenu = document.querySelector('.res-menu');
    const navItems = document.querySelector('.navItems');

    resMenu.addEventListener('click', () => {
        navItems.classList.toggle('nav-active');
    });
}

navSlider();