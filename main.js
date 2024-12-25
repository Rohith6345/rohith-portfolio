// Smooth Scroll
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate Skills Bar
const circularProgress = document.querySelectorAll('.circular-progress');

window.addEventListener('scroll', () => {
    circularProgress.forEach(circle => {
         const rect = circle.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            let percent = circle.dataset.percent;
            let counter = 0;
              // Reset the circle before animation
               circle.style.background = `conic-gradient(transparent 0deg, #f0f0f0 0deg)`;
             circle.querySelector('span').textContent = '0%';

           const interval = setInterval(() => {
               if (counter >= percent) {
                    clearInterval(interval);
               }
               circle.style.background = `conic-gradient(
                   #0081C9 ${counter * 3.6}deg,
                   transparent ${counter * 3.6}deg,
                  #f0f0f0 0deg
                   )`;
                 circle.querySelector('span').textContent = counter + '%';
                counter++;
            }, 20);
       }
    });
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[placeholder="Your Name"]').value.trim();
    const email = this.querySelector('input[placeholder="Your Email"]').value.trim();
    const message = this.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields!');
        return;
    }

    alert('Form submitted successfully!');
    this.reset();
});