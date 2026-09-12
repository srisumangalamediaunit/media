function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => page.style.display = 'none');

    // Show selected page
    const selectedPage = document.getElementById('page-' + pageId);
    if (selectedPage) {
        selectedPage.style.display = 'block';
    }

    // Update active nav item
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));

    const activeLink = Array.from(links).find(link => link.getAttribute('onclick').includes(`'${pageId}'`));
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}
