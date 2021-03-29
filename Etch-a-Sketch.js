const grid = document.querySelector('.grid');
const clearButton = document.createElement('button');

let gridSize = 16*16-2;


for(i = -1; i <= gridSize; i++){
    const gridElement = document.createElement('div');
    gridElement.classList.add(`${i}`, `gridElement`);
    grid.appendChild(gridElement);
}
gridColor = document.querySelectorAll('.gridElement');

gridColor.forEach(applyColor =>
    applyColor.addEventListener('mouseover', () => {
    applyColor.style.background = ('black');
     })
    );

clearButton.style.width = ('50px');
clearButton.innerText = ('clear');
grid.appendChild(clearButton);

clearButton.onclick = function() {
    gridColor.forEach(clearGrid => {
        clearGrid.style.background = ('white');
    });
};
