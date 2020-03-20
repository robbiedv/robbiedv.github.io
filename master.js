

window.onload = function () {

  // MENU BUTTONS //

  var buttons = document.getElementsByClassName('button');
  var devButton = document.getElementById('dev');
  var dataButton = document.getElementById('data');
  var dadButton = document.getElementById('dad');

  // SKILL TREE ID'S //

  var devGrid = document.getElementById('dev-grid');
  var dataGrid = document.getElementById('data-grid');
  var dadGrid = document.getElementById('dad-grid');

  // CLOSE BUTTON //

  let closeButton = document.getElementById('close-button');
  var gridText = document.getElementsByTagName('text');

  // loop through menu list, select each by innerHTML
  var _loop = function _loop(_i) {
    // closeButton.classList.toggle('show-hide');
    buttons[_i].onclick = function () {
      if (buttons[_i].innerHTML == "DEVELOPER") {
        dev(buttons[_i]);
      } else if (buttons[_i].innerHTML == "DATA") {
        data(buttons[_i]);
      } else {
        dad(buttons[_i]);
      }
    };
  };

  for (var _i = 0; _i < buttons.length; _i++) {
    _loop(_i);
  }

  var devClicked = false;
  var dataClicked = false;
  var dadClicked = false;

  // CLOSE BUTTON FUNCTION //

  closeButton.onclick = function () {
    // closeButton.classList.toggle('show-hide');
    console.log(devClicked, dataClicked, dadClicked);
    if (devClicked = true) {
      devButton.classList.remove('fade-out');
      dataButton.classList.remove('slide-left');
      dadButton.classList.remove('slide-right');
      devGrid.classList.add('hide-grid');
      devGrid.classList.remove('draw-grid');
      devClicked = false;
    } else if (dataClicked = true) {
      console.log('ya crazy animal')
      dataButton.classList.remove('fade-out');
      dadButton.classList.remove('slide-left');
      devButton.classList.remove('slide-right');
      dataGrid.classList.add('hide-grid');
      dataGrid.classList.remove('draw-grid');
      dataClicked = false;
    } else if (dadClicked = true) {
      console.log('lets go');
      dadButton.classList.remove('fade-out');
      dataButton.classList.remove('slide-left');
      devButton.classList.remove('slide-right');
      dadGrid.classList.add('hide-grid');
      dadGrid.classList.remove('draw-grid');
      dadClicked = false;
    } else {
      console.log('Garbage!!!!!!')
    }
  };

  function dev(x) {
    devClicked = true;
    console.log(devClicked);
    devButton.classList.add('fade-out');
    dataButton.classList.add('slide-left');
    dadButton.classList.add('slide-right');
    devGrid.classList.remove('hide-grid');
    devGrid.classList.add('draw-grid');

    for (i = 0; i < gridText.length; i++) {
      if (gridText[i].classList == "dev") {
        gridText[i].classList.add('grid-text');
      }
    }
  }

  function data(x) {
    dataClicked = true;
    dataButton.classList.add('fade-out');
    dadButton.classList.add('slide-left');
    devButton.classList.add('slide-right');
    dataGrid.classList.remove('hide-grid');
    dataGrid.classList.add('draw-grid');

    for (i = 0; i < gridText.length; i++) {
      if (gridText[i].classList == "data") {
        gridText[i].classList.add('grid-text');
      }
    }
  }

  function dad(x) {
    dadClicked = true;
    dadButton.classList.add('fade-out');
    dataButton.classList.add('slide-left');
    devButton.classList.add('slide-right');
    dadGrid.classList.remove('hide-grid');
    dadGrid.classList.add('draw-grid');

    for (i = 0; i < gridText.length; i++) {
      if (gridText[i].classList == "dad") {
        gridText[i].classList.add('grid-text');
      }
    }
  }
};
