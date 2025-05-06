// top-bar.js

// Function to handle smooth scrolling to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Create the top navigation bar
function createTopBar() {
    const topBar = document.createElement('div');
    topBar.style.position = 'fixed';
    topBar.style.top = '0';
    topBar.style.width = '100%';
    topBar.style.backgroundColor = '#333';
    topBar.style.color = '#fff';
    topBar.style.padding = '10px 0';
    topBar.style.display = 'flex';
    topBar.style.justifyContent = 'center';
    topBar.style.zIndex = '1000';

    const sections = [
        { id: 'about', label: 'About' },
        { id: 'work-experience', label: 'Work Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
    ];

    sections.forEach((section) => {
        const button = document.createElement('button');
        button.textContent = section.label;
        button.style.margin = '0 10px';
        button.style.padding = '10px 15px';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.backgroundColor = '#555';
        button.style.color = '#fff';
        button.style.cursor = 'pointer';
        button.style.fontSize = '16px';

        button.addEventListener('click', () => scrollToSection(section.id));

        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#777';
        });

        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '#555';
        });

        topBar.appendChild(button);
    });

    document.body.appendChild(topBar);
}

// Initialize the top bar when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', createTopBar);