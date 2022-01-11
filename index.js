//fill all uncolored cells with the currently selected color
function fillRest() {
    let sqrs = document.getElementsByClassName("grid-cell");// cells is nodelist of all elements with class name grid-cell
    let arr = Array.from(sqrs);// makes an array from the node list
    arr.forEach(sqr => {// for each element in the array
        if (sqr.classList.contains("uncolored")) {// if statement checks if the cell contains class name uncolored. If true, the background color will change to currentColor and the class name uncolored is removed
            sqr.style.backgroundColor = currentColor;
            sqr.classList.remove("uncolored");
        }
    });
}

//Fills all cells with the currently selected color
function fillAll() {
    let sqrs = document.getElementsByClassName("grid-cell");// cells is nodelist of all elements with class name grid-cell
    let arr = Array.from(sqrs);// makes an array from the node list
    arr.forEach(sqr => { // for each element in the array
        if (sqr.classList.contains("uncolored")) { // if the element is uncolored (they contain the class name uncolored), the we style the cell with the current color and remove the class name uncolored
            sqr.style.backgroundColor = currentColor;
            sqr.classList.remove("uncolored");
        }
        sqr.style.backgroundColor = currentColor;// If the cell already has a background color, then the background color will update with current currentColor
    });
}


function clrAll() {//Clear all cells
    let sqrs = document.getElementsByClassName("grid-cell");// nodeList of every cell in the grid
    let arr = Array.from(sqrs);// Variable arr stores an array from the nodeList of every cell in the grid
    arr.forEach(sqr => { // For every cell in the list we make the background color null, remove all class names available, adds 2 new class names "grid-cell" and "uncolored"
        sqr.style.backgroundColor = null;
        sqr.classList.remove(...sqr.classList);
        sqr.classList.add("grid-cell");
        sqr.classList.add("uncolored");
    });
}
