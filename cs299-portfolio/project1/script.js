function buttonClicked() {
    document.getElementById("welcome-page").style.display = "none";
    // Show the second page
    document.getElementById("main-content").style.display = "block";
}

function linkPlay() {
    document.getElementById("linkplay").play();
}

// Select the draggable container
const draggableElement = document.getElementById("projectsTab");
const dragTitle = document.getElementById("projectsTabTitle"); // You can drag by the title bar

let isDragging = false;
let startX, startY, initialX, initialY;

dragTitle.addEventListener("mousedown", dragStart);
document.addEventListener("mousemove", drag);
document.addEventListener("mouseup", dragEnd);

function dragStart(e) {
    isDragging = true;

    // Record the initial mouse and element positions
    startX = e.clientX;
    startY = e.clientY;
    initialX = draggableElement.offsetLeft;
    initialY = draggableElement.offsetTop;
}

function drag(e) {
    if (!isDragging) return;

    // Calculate new position
    const currentX = e.clientX;
    const currentY = e.clientY;

    const dx = currentX - startX;
    const dy = currentY - startY;

    // Update the position of the container
    draggableElement.style.left = `${initialX + dx}px`;
    draggableElement.style.top = `${initialY + dy}px`;
}

function dragEnd() {
    isDragging = false;
}
