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
// my project section
const projects = [
    {
        title: "Nails Pro Website",
        description: "A salon website built with HTML, CSS, and Bootstrap.",
        image: "images/nails-pro.png",
        link: "https://your-project-link-1.com"
    },
    {
        title: "E-commerce Website",
        description: "A fully functional e-commerce website using React and Firebase.",
        image: "images/ecommerce.png",
        link: "https://your-project-link-2.com"
    },
    {
        title: "Portfolio Website",
        description: "My personal portfolio showcasing my web development skills.",
        image: "images/portfolio.png",
        link: "https://your-project-link-3.com"
    }
];

let currentIndex = 0;

function displayProject(index) {
    document.getElementById("projectTitle").innerText = projects[index].title;
    document.getElementById("projectDescription").innerText = projects[index].description;
    document.getElementById("projectImage").src = projects[index].image;
}

function nextProject() {
    currentIndex = (currentIndex + 1) % projects.length; // Loops forward
    displayProject(currentIndex);
}

function prevProject() {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length; // Loops backward
    displayProject(currentIndex);
}

function viewProject() {
    window.open(projects[currentIndex].link, "_blank");
}

// Load first project on page load
displayProject(currentIndex);
//my resume section

//contact section