let lastScrollY = window.scrollY;
    const bottomBar = document.getElementById('bottomBar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            // Scrolling down
            bottomBar.classList.add('hidden');
        } else {
            // Scrolling up or stopped
            bottomBar.classList.remove('hidden');
        }
        lastScrollY = window.scrollY;
    });