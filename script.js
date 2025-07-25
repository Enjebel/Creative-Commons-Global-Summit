document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
  
    if (toggleButton && navMenu) {
      toggleButton.addEventListener('click', () => {
        navMenu.classList.toggle('open');
      });
    }
  });
  