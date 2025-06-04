function showSection(sectionId) {
    event.preventDefault();
    
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all nav links
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
    });

    // Show selected section
    document.getElementById(sectionId).classList.add('active');

    // Add active class to clicked nav link
    document.querySelector(`nav ul li a[href="#${sectionId}"]`).classList.add('active');
}

// Show home section by default on page load
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});