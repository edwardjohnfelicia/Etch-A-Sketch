const container = document.getElementById("container");

// Create a 16x16 square grid and append them to the container
function createGrid(numSquares) {
  container.innerHTML = ""; // Clear previous grid
  container.style.gridTemplateColumns = `repeat(${numSquares}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${numSquares}, 1fr)`;
  for (let i = 0; i < numSquares ** 2; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'black';
    });
    container.appendChild(square);
  }
}
createGrid(16);

const newGridBtn = document.getElementById("new-grid-btn");
newGridBtn.addEventListener("click", () => {
  let numSquares = prompt("Enter the number of squares per side (max 100):");
  numSquares = parseInt(numSquares);
  if (!isNaN(numSquares) && numSquares <= 100) {
    createGrid(numSquares);
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
});