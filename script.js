const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  

  const btn = document.getElementById('map-toggle-btn');
  const map = document.getElementById('map-container');

  btn.addEventListener('click', () => {
    if (map.style.display === 'none') {
      map.style.display = 'block';
      btn.textContent = 'Hide Map';
    } else {
      map.style.display = 'none';
      btn.textContent = 'Show Map';
    }
  });


  emailjs.init("YwgS8hLuJhLTwbVIa");

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      emailjs.sendForm("service_9mbx4as", "template_roxyvp9", form)
        .then(() => {
          alert("✅ Message sent successfully!");
          form.reset();
        }, (error) => {
          alert("❌ Failed to send message: " + error.text);
        });
    });
  });
  
