//Header Animation

const words = [
    "A PERSON OF MANY NAMES",
    "CREATOR",
    "DEVELOPER",
    "RESEARCHER",
    "MYDAS",
    "SEVYR SOUNDZ",
    "KARRINGTON WILSON"
];
let index = 0;
const typingElement = document.querySelector(".typedTitle");

function changeText() {
    typingElement.textContent = words[index];
    index = (index + 1) % words.length; // goes through words and loops back
}

setInterval(changeText, 5000); //...every 5 secs
changeText();

//modals with project information
function openModal(id) {
    document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// Close modal if user clicks outside content
window.onclick = function (event) {
    const modals = document.querySelectorAll(".modal-overlay");
    modals.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};
