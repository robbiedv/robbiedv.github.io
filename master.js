window.onload = function() {

// access menu buttons
const buttons = document.getElementsByClassName('button');

const devButton = document.getElementById('dev');
const dataButton = document.getElementById('data');
const dadButton = document.getElementById('dad');

// loop through list, select each one by innerHTML
for (let i=0; i < buttons.length; i++) {
  buttons[i].onclick = function() {
    if (buttons[i].innerHTML == "DEVELOPER") {
      dev(buttons[i]);
    } else if (buttons[i].innerHTML == "DATA") {
      data(buttons[i]);
    } else {
      dad(buttons[i]);
    }
  }
}



function dev(x) {
    //data fly off screen left
    console.log(x)
    //designer fly off screen right
    //move developer up increase space between letters
    //grow a text box
    //developer description fly up and fade in
}

function data(x) {
  console.log(x)
  //when the data button is clicked
    //dad fly off screen left
    //developer fly off screen right
    //move data up increase space between letters
    //grow a text box
    //designer description fly up and fade in
}

function dad(x) {
  console.log(x)
  //when the dad button is clicked
    //data fly off screen left
    //developer fly off screen right
    //move dad up increase space between letters
    //grow a text box
    //developer description fly up and fade in
}



};
