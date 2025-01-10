function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
}

function showSection(section) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(s => s.classList.remove('active'));
    document.getElementById(section).classList.add('active');
}
