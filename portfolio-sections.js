// portfolio-sections.js

// Create sections dynamically
const sections = [
    { id: "about-me", title: "About Me" },
    { id: "work-experience", title: "Work Experience" },
    { id: "skills", title: "Skills" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" },
];

// Create sections
sections.forEach((section) => {
    const sectionElement = document.createElement("section");
    sectionElement.id = section.id;
    sectionElement.style.height = "100vh";
    sectionElement.style.display = "flex";
    sectionElement.style.justifyContent = "center";
    sectionElement.style.alignItems = "top";
    sectionElement.style.fontSize = "2rem";
    sectionElement.style.color = "#fff";

    // Alternate background colors for sections
    sectionElement.style.backgroundColor =
        sections.indexOf(section) % 2 === 0 ? "#444" : "#666";

    sectionElement.textContent = section.title;
    document.body.appendChild(sectionElement);
});
