let row = 0;
let col = 1;
let currentColor = "white";
let borderColor = "black";
let color = false;


//add functions below please -----------------------------------------------------

function createGrid() {
    let sqr = document.createElement("td");
    sqr.classList.add("grid-cell");
    sqr.classList.add("uncolored");
    sqr.addEventListener("click", x => { // If the user clicks on a single square, the function will run and change the background of the cell to current color. If the cell is already colored it will change the color to current color.
        sqr.style.backgroundColor = currentColor;
        sqr.classList.remove("uncolored");
    });
    return sqr;
}

//Add rows to the grid
function addRow() {
    row++; //Row variable increments
    let table = document.getElementById("grid");// Table is the div with id grid in index.html
    let newRow = document.createElement("tr");// newRow is the table row list
    newRow.classList.add("grid-row");// each newRow has a class name added grid-row
    table.appendChild(newRow);// Appends the new element to the already existing row
    for (let i = 0; i < col; i++) { // For every column available, the tr element will append a new square as its child. Ex. If col = 2. the new tr element created will append 2 squares as its child
        newRow.appendChild(createGrid());
    }

}

//Add columns to the grid
function addColumn() {
    col++; //column variable increments to allow add row to know how many columns are available
    let table = document.getElementById("grid");// Sets DOM element with id grid to table
    let newCol = document.getElementsByClassName("grid-row");// newCol is a nodeList of elements with class name grid-row
    for (let i = 0; i < newCol.length; i++) { // For every grid-row element, they will append 1 cell to make a new column.
        newCol[i].appendChild(createGrid());
    }
}


//Remove rows from the grid 1 by 1
function deleteRow() {
    if (row === 1) { // If the row value is 1, while the column is greater than -1 the deleteColumn function is called
        while (col > -1) {
            deleteColumn();
        }
    }
    row -= 1;// decrements row
    let table = document.getElementById("grid");// Sets the DOM element with id of "grid" to table
    let finalRow = table.rows.length - 1;// Sets the lengh of the row - 1 for index uses
    table.deleteRow(finalRow);// The grid element deletes the last child
}

//Remove columns from the grid 1 by 1
function deleteColumn() {
    if (col === 1) { // if col === 1, while row !== 0, deleteRow() function is called
        while (row > -1) {
            deleteRow();
        }
    }
    col -= 1;// decrements col
    let table = document.getElementById("grid");// sets DOM element with the id of "grid" to table
    let allCol = table.rows[0].cells.length - 1; // allCol is number of all td elements in each tr element - 1 for index uses.
    for (let i = 0; i < table.rows.length; i++) { // for every tr element, remove the last child
        table.rows[i].deleteCell(allCol);
    }
}

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


function selectColor(color) {//Select a color from a dropdown menu of colors
    currentColor = color;
}

function pickRed() {//Set of function that changes the currentColor as well as the color of the button to let users know what the current color is
    currentColor = "red";// Sets current color to red
    let element = document.getElementById("btn");// Gets the element with id btn
    element.style.backgroundColor = 'red';// Changes color of button to red
}

function pickBlue() { 
    currentColor = "blue"// Sets current color to blue
    let element = document.getElementById("btn");// Gets the element with id btn
    element.style.backgroundColor = 'blue';// Changes color of button to blue
}

function pickGreen() { 
    currentColor = "green"// Sets current color to green
    let element = document.getElementById("btn");// Gets the element with id btn
    element.style.backgroundColor = 'green';// Changes color of button to green. 
}

