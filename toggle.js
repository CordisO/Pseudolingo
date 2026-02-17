document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    
    // Check saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('darktheme');
        themeToggle.checked = true;
    }
    
    // Toggle theme
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('darktheme'); 
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('darktheme');
            localStorage.setItem('theme', 'light');
        }
    });
});