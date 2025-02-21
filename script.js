document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const logos = document.querySelectorAll('.education-logo');
    const totalLogos = logos.length;

    // Ensure only the first logo is visible at the start
    logos.forEach((logo, i) => {
        logo.style.display = i === 0 ? 'block' : 'none';
    });

    document.getElementById('next-btn').addEventListener('click', function () {
        logos[index].style.display = 'none'; // Hide current logo
        index = (index + 1) % totalLogos; // Move to next logo
        logos[index].style.display = 'block'; // Show next logo
    });

    document.getElementById('prev-btn').addEventListener('click', function () {
        logos[index].style.display = 'none'; // Hide current logo
        index = (index - 1 + totalLogos) % totalLogos; // Move to previous logo
        logos[index].style.display = 'block'; // Show previous logo
    });
});
