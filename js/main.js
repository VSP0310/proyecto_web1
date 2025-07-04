const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('.navbar');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});