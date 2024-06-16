// script.js

document.addEventListener('DOMContentLoaded', function() {
    const highlights = document.querySelectorAll('.highlight');
    highlights.forEach(function(span) {
        span.addEventListener('mouseover', function() {
            this.style.color = '#ff4500';
        });
        span.addEventListener('mouseout', function() {
            this.style.color = '#ffd700';
        });
    });

    const buttons = document.querySelectorAll('.show-btn');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            const brand = this.nextElementSibling;
            if (brand.style.display === 'none' || brand.style.display === '') {
                brand.style.display = 'block';
                this.textContent = 'Hide Info';
            } else {
                brand.style.display = 'none';
                this.textContent = 'Show Info';
            }
        });
    });
});
