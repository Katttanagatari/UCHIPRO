document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".sidebar__link");

    const icons = {
        "student-page.html": "img/main_page_btn_active.svg",
        "student-courses.html": "img/courses_page_btn_active.svg",
        "student-help.html": "img/help_page_btn_active.svg",
    };

    links.forEach(link => {
        const panel = link.querySelector(".sidebar__panel");
        const icon = link.querySelector(".sidebar__icon");
        const href = link.getAttribute("href");

        if (window.location.pathname.includes(href)) {
            panel.setAttribute("data-active", "true");
            if (icons[href]) {
                icon.src = icons[href];
            }
        }
    });
});
