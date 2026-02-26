document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('[aria-label="Menu"]');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    menuButton.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('flex');
            menuButton.setAttribute('aria-expanded', 'true');
        } else {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
            menuButton.setAttribute('aria-expanded', 'false');
        }
    });
});
