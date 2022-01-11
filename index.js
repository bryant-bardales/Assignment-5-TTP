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

