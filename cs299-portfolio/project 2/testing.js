let typingCompleted = false;

// Function to open introduction
function openIntroduction() {
    if (typingCompleted) {
        const container = document.getElementById("openContainer");
        container.style.display = "none"; // Hide the open container

        // Show the header with fade-in effect
        const navbar = document.getElementById("navbar");
        navbar.style.display = "block"; // Make it visible
        navbar.style.opacity = "1"; // Fade in

        const intro = document.getElementById("introduction");
        intro.style.display = "block";
        intro.style.opacity = "0.85";

        // Show the first scene after some delay
        setTimeout(() => {
            const scenes = document.querySelectorAll(".parallax");
            scenes.forEach((scene) => {
                scene.style.display = "none"; // Hide all scenes
            });

            // Show the first scene
            document.getElementById("scene1").style.display = "flex"; // Show the first scene
        }, 500); // Delay before showing the scenes
    }
}

// Set a timeout for marking typing as complete
setTimeout(() => {
    typingCompleted = true;
}, 2000); // Match this time with the animation duration

function nextScene(sceneId) {
    // Hide all scenes
    const scenes = document.querySelectorAll(".parallax");
    scenes.forEach((scene) => {
        scene.style.display = "none";
    });

    // Show the selected scene
    const selectedScene = document.getElementById(sceneId);
    selectedScene.style.display = "flex"; // Show the selected scene

    // If the selected scene is scene5, show the techContent divs
    if (sceneId === "scene5") {
        const techContents = selectedScene.querySelectorAll(".techContent");
        techContents.forEach((div) => {
            div.style.display = "none"; // Hide all techContent divs initially
        });
        // Show the first techContent div
        if (techContents.length > 0) {
            techContents[0].style.display = "block"; // Show the first techContent div
        }
    }

    // If the selected scene is scene7, show the techContent divs
    if (sceneId === "scene7") {
        const techContents = selectedScene.querySelectorAll(".techContent");
        techContents.forEach((div) => {
            div.style.display = "none"; // Hide all techContent divs initially
        });
        // Show the first techContent div
        if (techContents.length > 0) {
            techContents[0].style.display = "block"; // Show the first techContent div
        }
    }
}

function nextTechDiv(nextDivId) {
    // Hide all techContent divs
    const techContents = document.querySelectorAll(".techContent");
    techContents.forEach((div) => {
        div.style.display = "none";
    });
    // Show the next techContent div
    const nextDiv = document.getElementById(nextDivId);
    if (nextDiv) {
        nextDiv.style.display = "block";
    }
}

function e() {
    document.getElementById("introduction").style.display = "none";

    document.getElementById("scene1").scrollIntoView();
}

function f() {
    document.getElementById("conclusion").style.display = "none";

    document.getElementById("introduction").style.display = "block";
}

function g() {
    document.getElementById("introduction").style.display = "none";

    document.getElementById("conclusion").style.display = "block";
}

// image scroll
/*

let currentIndex = 0;
const images = [
    "images/data-visualizations/app-open-per-week-months.png",
    "images/data-visualizations/app-open-per-week-months.png      ", // Add paths to your additional images
    "images/data-visualizations/app-open-per-week-months.png"
];

function changeImageOnScroll() {
    const questionVisuals = document.querySelector(".questionVisuals");
    const scrollTrigger = questionVisuals.offsetTop; // Get the position of the visuals div

    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;

        // Change image when user scrolls past the visuals div
        if (scrollPosition > scrollTrigger) {
            currentIndex = (currentIndex + 1) % images.length; // Cycle through images
            document.getElementById("dynamicImage").src = images[currentIndex];
        }
    });
}

// Call the function to set up the image change on scroll
document.addEventListener("DOMContentLoaded", changeImageOnScroll);
*/
