const navEl = document.querySelector('.navbar-shippii');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navEl.classList.add("scrolled");
    } else if (window.scrollY <= 50) {
        navEl.classList.remove("scrolled");
    }
});