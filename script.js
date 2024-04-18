// Selecting the grid container element
const gridContainer = document.querySelector(".container");

// Variable to determine whether to draw or erase
let draw = true;

// Default size of the grid
let currentSize = 16;

// Selecting drawing and eraser mode elements
const drawMode = document.querySelector(".drawing");
const eraserMode = document.querySelector(".eraser");

// Selecting the element to display current mode
let currentMode = document.querySelector(".currentMode");

// Styling for draw and erase modes
drawMode.style.backgroundColor = 'black';
drawMode.style.color = 'white';
eraserMode.style.backgroundColor = 'white';
eraserMode.style.color = 'black';

// Event listener for switching to draw mode
drawMode.addEventListener("click", function() {
    draw = true;
    drawMode.style.backgroundColor = 'black';
    drawMode.style.color = 'white';
    eraserMode.style.backgroundColor = 'white';
    eraserMode.style.color = 'black';
})

// Event listener for switching to eraser mode
eraserMode.addEventListener("click", function() {
    draw = false;
    eraserMode.style.backgroundColor = 'black';
    eraserMode.style.color = 'white';
    drawMode.style.backgroundColor = 'white';
    drawMode.style.color = 'black';
})

// Event listener for switching modes using keyboard (D for draw, E for erase)
document.addEventListener("keydown", function(event) {
    if (event.key === "D" || event.key === "d") {
        draw = true;
        drawMode.style.backgroundColor = 'black';
        drawMode.style.color = 'white';
        eraserMode.style.backgroundColor = 'white';
        eraserMode.style.color = 'black';
    }
})

document.addEventListener("keydown", function(event) {
    if (event.key === "E" || event.key === "e") {
        draw = false;
        eraserMode.style.backgroundColor = 'black';
        eraserMode.style.color = 'white';
        drawMode.style.backgroundColor = 'white';
        drawMode.style.color = 'black';
    }
})

// Selecting size options and reset button
const size8 = document.querySelector(".size8");
const size16 = document.querySelector(".size16");
const size32 = document.querySelector(".size32");
const size64 = document.querySelector(".size64");
const reset = document.querySelector(".reset");

// Styling for default size (16)
size16.style.backgroundColor = 'black';
size16.style.color = 'white';
size8.style.backgroundColor = 'white';
size8.style.color = 'black';
size32.style.backgroundColor = 'white';
size32.style.color = 'black';
size64.style.backgroundColor = 'white';
size64.style.color = 'black';

// Event listener for creating grid using spacebar
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 32 || event.key === " ") {
      makeGrid(currentSize);
    }
})

// Event listener for reset button
reset.addEventListener("click", function() {
    makeGrid(currentSize);
})

// Event listeners for changing grid size
size8.addEventListener("click", function() {
    currentSize = 8;
    makeGrid(currentSize);
    // Styling for size selection
    size8.style.backgroundColor = 'black';
    size8.style.color = 'white';
    size16.style.backgroundColor = 'white';
    size16.style.color = 'black';
    size32.style.backgroundColor = 'white';
    size32.style.color = 'black';
    size64.style.backgroundColor = 'white';
    size64.style.color = 'black';
})

size16.addEventListener("click", function() {
    currentSize = 16;
    makeGrid(currentSize);
    size16.style.backgroundColor = 'black';
    size16.style.color = 'white';
    size8.style.backgroundColor = 'white';
    size8.style.color = 'black';
    size32.style.backgroundColor = 'white';
    size32.style.color = 'black';
    size64.style.backgroundColor = 'white';
    size64.style.color = 'black';
})

size32.addEventListener("click", function() {
    currentSize = 32;
    makeGrid(currentSize);
    size32.style.backgroundColor = 'black';
    size32.style.color = 'white';
    size8.style.backgroundColor = 'white';
    size8.style.color = 'black';
    size16.style.backgroundColor = 'white';
    size16.style.color = 'black';
    size64.style.backgroundColor = 'white';
    size64.style.color = 'black';
})

size64.addEventListener("click", function() {
    currentSize = 64;
    makeGrid(currentSize);
    size64.style.backgroundColor = 'black';
    size64.style.color = 'white';
    size8.style.backgroundColor = 'white';
    size8.style.color = 'black';
    size16.style.backgroundColor = 'white';
    size16.style.color = 'black';
    size32.style.backgroundColor = 'white';
    size32.style.color = 'black';
})

// Function to create the grid
function makeGrid(size){
    // Clearing the grid container
    gridContainer.innerHTML = "";
    gridContainer.style.backgroundColor = "white";

    // Loop to create grid elements
    for (i=0; i < size * size; i++){
        
        // Creating individual grid elements
        const gridElement = document.createElement("div");
        let opacity = gridElement.style.opacity = 0.0;  

        // Setting dimensions and class
        gridElement.style.width = `${(720 / size)}px`;
        gridElement.style.height = `${(720 / size)}px`;
        gridElement.classList.add("element");
        gridContainer.appendChild(gridElement);
        
        // Event listener for mouseover to draw or erase
        gridElement.addEventListener("mouseover", function() {
            if (draw == true)
            {
                gridElement.style.backgroundColor = "black";
                opacity = gridElement.style.opacity = opacity + 0.25;  
            }
            else {
                gridElement.style.backgroundColor = "white";
                opacity = gridElement.style.opacity = 0.10;   
            }
        });

    }
}
// Initial creation of the grid with default size
makeGrid(currentSize);
