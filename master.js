window.onload = function() {

const buttons = document.getElementsByClassName('button');


const devButton = document.getElementById('dev');
const dataButton = document.getElementById('data');
const dadButton = document.getElementById('dad');

// loop through menu list, select each by innerHTML
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

//loop through wave
for (let i = 0;i < wave.length; i++) {
  co
}



function dev(x) {
  //fade out dev
  devButton.classList.toggle('fade-out');
  dataButton.classList.toggle('slide-left');
  //designer fly off screen right
  dadButton.classList.toggle('slide-right');
  //developer description fly up and fade in
}

function data(x) {
  //fade out data
  dataButton.classList.toggle('fade-out');
  //dad fly off screen left
  dadButton.classList.toggle('slide-left')
  //developer fly off screen right
  devButton.classList.toggle('slide-right')
  //designer description fly up and fade in
}

function dad(x) {
  //fade out dad
  dadButton.classList.toggle('fade-out');
  //data fly off screen left
  dataButton.classList.toggle('slide-left');
  //developer fly off screen right
  devButton.classList.toggle('slide-right');
  //developer description fly up and fade in
}




};
