const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('hero-nav');

 navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", () => {
    const icons = {
        "student-page.html": "img/main_page_btn_active.svg",
        "student-courses.html": "img/courses_page_btn_active.svg",
        "student-help.html": "img/help_page_btn_active.svg",
        "student-cart.html": "img/shop_page_btn_active.svg"
    };


    const activeLinks = (selector, labelClass, iconClass) => {
        document.querySelectorAll(selector).forEach(item => {
            const label = item.querySelector(labelClass);
            const icon = item.querySelector(iconClass);
            const href = item.getAttribute("href");

            if (window.location.pathname.includes(href)) {
                label.setAttribute("data-active", "true");
                if (icons[href]) {
                    icon.src = icons[href];
                }
            }
        })
    };

    activeLinks(".sidebar__link", ".sidebar__panel", ".sidebar__icon");
    activeLinks(".footer__item", ".footer__label", ".footer__icon");
});
