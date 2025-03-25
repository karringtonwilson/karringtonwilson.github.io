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
    index = (index + 1) % words.length; // Loop through the words
}

setInterval(changeText, 4000); // Change word every 4 seconds (adjust as needed)
changeText(); // Initialize with the first word
