# Etch a sketch

This project implements an interactive drawing grid using HTML, CSS, and JavaScript. Users can draw, erase, and customize the grid size to create pixel art or sketches.

[Live Demo](https://pmota173.github.io/Etch-a-sketch/){:target="_blank"} :point_left:

## Features

- Drawing and Erasing Modes: Implemented using event listeners on mode buttons (drawMode and eraserMode) to toggle the draw variable between true (drawing mode) and false (erasing mode). When drawing, the grid cell's background color is set to black; when erasing, it's set to white.
- Mode Switching: Event listeners are added to the mode buttons and keyboard shortcuts (keydown event) to toggle between drawing and erasing modes. Clicking the buttons or pressing the corresponding keys (D for draw, E for erase) changes the draw variable and updates the UI accordingly.
- Grid Size Selection: Click event listeners are added to the size buttons (size8, size16, size32, size64) to change the currentSize variable and recreate the grid with the selected size. The grid's CSS dimensions are adjusted based on the selected size to maintain a consistent grid layout.
- Reset Functionality: Click event listener is added to the reset button (reset) to call the makeGrid function with the currentSize variable, effectively resetting the grid to its default size and clearing any drawn content.
- Interactive Drawing: Event listener (mouseover) is added to each grid cell (gridElement) to handle drawing and erasing functionality. Depending on the current mode (draw or erase), hovering over a grid cell sets its background color to black or white, respectively. Opacity is adjusted to give a smooth drawing/erasing effect.
