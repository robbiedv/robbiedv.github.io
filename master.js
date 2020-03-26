"use strict";

window.onload = function () {

  // MENU BUTTONS //
  
  var menuButtons = document.getElementsByClassName('button');
  var devButton = document.getElementById('dev');
  var dataButton = document.getElementById('data');
  var dadButton = document.getElementById('dad');

  // PODS //

  var mainPod = document.getElementById('main-pod');
  var mainPodText = document.getElementById('main-pod-text');

  var pod1 = document.getElementById('pod-1');
  var pod2 = document.getElementById('pod-2');
  var pod3 = document.getElementById('pod-3');
  var pod4 = document.getElementById('pod-4');
  var pod5 = document.getElementById('pod-5');
  var pod6 = document.getElementById('pod-6');

  var pod1Text = document.getElementById('pod1-text');
  var pod2Text = document.getElementById('pod2-text');
  var pod3Text = document.getElementById('pod3-text');
  var pod4Text = document.getElementById('pod4-text');
  var pod5Text = document.getElementById('pod5-text');
  var pod6Text = document.getElementById('pod6-text');

  var devPods = [pod1, pod2, pod3, pod4, pod5, pod6];
  var dataPods = [pod1, pod3, pod4];
  var dadPods = [pod1, pod2, pod4, pod5];

  // CLOSE BUTTON //

  var closeButton = document.getElementById('close-button');

  // FUNCTIONS FOR ADDING + REMOVING CLASSES

  function addClass(elementName, className) {
    elementName.classList.add(className);
  }

  function removeClass(elementName, className) {
    elementName.classList.remove(className);
  }

  var devClicked = false;
  var dataClicked = false;
  var dadClicked = false;

  var _loop = function _loop(i) {
    menuButtons[i].onclick = function () {
      if (menuButtons[i].innerHTML == 'DEVELOPER') {
        devMenu();
        devClicked = true;
      } else if (menuButtons[i].innerHTML == 'DATA') {
        dataMenu();
        dataClicked = true;
      } else if (menuButtons[i].innerHTML == 'DAD') {
        dadMenu();
        dadClicked = true;
      } else {
        console.log('menu button error');
      }
    };
  };

  for (var i = 0; i < menuButtons.length; i++) {
    _loop(i);
  }

  // MENU ANIMATIONS //

  function devMenu() {
    console.log('dev button was clicked');
    showDevPods();
    devButton.classList.add('fade-out');
    dataButton.classList.add('slide-left');
    dadButton.classList.add('slide-right');
    removeClass(closeButton, 'hide');
    closeButton.classList.add('show');
  }

  function dataMenu() {
    console.log('the data button was clicked');
    showDataPods();
    dataButton.classList.add('fade-out');
    devButton.classList.add('slide-left');
    dadButton.classList.add('slide-right');
    closeButton.classList.remove('hide');
    closeButton.classList.add('show');
  }

  function dadMenu() {
    console.log('the dad button was clicked');
    showDadPods();
    dadButton.classList.add('fade-out');
    devButton.classList.add('slide-left');
    dataButton.classList.add('slide-right');
    closeButton.classList.remove('hide');
    closeButton.classList.add('show');
  }

  // SKILL POD FUNCTIONS //

  // DEVELOPER //

  function showDevPods() {
    for (var _i = 0; _i < devPods.length; _i++) {
      removeClass(devPods[_i], 'hide');
      addClass(devPods[_i], 'show');
    }

    addClass(mainPod, 'show');
    removeClass(mainPod, 'hide');
    mainPodText.innerHTML = 'DEV';
    pod1Text.innerHTML = 'HTML';
    pod2Text.innerHTML = 'CSS';
    pod3Text.innerHTML = 'JS';
    pod4Text.innerHTML = 'GIT';
    pod5Text.innerHTML = 'REACT';
    pod6Text.innerHTML = 'LINUX';
  }

  function hideDevPods() {
    for (var _i2 = 0; _i2 < devPods.length; _i2++) {
      addClass(devPods[_i2], 'hide');
      removeClass(devPods[_i2], 'show');
    }

    addClass(mainPod, 'hide');
    removeClass(mainPod, 'show');
  }

  // DATA //

  function showDataPods() {
    for (var _i3 = 0; _i3 < dataPods.length; _i3++) {
      removeClass(dataPods[_i3], 'hide');
      addClass(dataPods[_i3], 'show');
    }

    addClass(mainPod, 'show');
    removeClass(mainPod, 'hide');
    mainPodText.innerHTML = 'DATA';
    pod1Text.innerHTML = 'PYTHON';
    pod3Text.innerHTML = 'SQL';
    pod4Text.innerHTML = 'D3';
  }

  function hideDataPods() {
    for (var _i4 = 0; _i4 < dataPods.length; _i4++) {
      addClass(dataPods[_i4], 'hide');
      removeClass(dataPods[_i4], 'show');
    }

    addClass(mainPod, 'hide');
    removeClass(mainPod, 'show');
  }

  // DAD //


  function showDadPods() {
    for (var _i5 = 0; _i5 < dadPods.length; _i5++) {
      removeClass(dadPods[_i5], 'hide');
      addClass(dadPods[_i5], 'show');
    }

    addClass(mainPod, 'show');
    removeClass(mainPod, 'hide');
    mainPodText.innerHTML = 'DAD';
    pod1Text.innerHTML = 'LEGOS';
    pod2Text.innerHTML = 'HOCKEY';
    pod4Text.innerHTML = 'FORTS';
    pod5Text.innerHTML = 'PIZZA';
  }

  function hideDadPods() {
    for (var _i6 = 0; _i6 < dadPods.length; _i6++) {
      addClass(dadPods[_i6], 'hide');
      removeClass(dadPods[_i6], 'show');
    }

    addClass(mainPod, 'hide');
    removeClass(mainPod, 'show');
  }

  // CLOSE BUTTON FUNTCTIONS //

  closeButton.onclick = function () {
    if (devClicked == true) {
      hideDevPods();
      devButton.classList.remove('fade-out');
      dataButton.classList.remove('slide-left');
      dadButton.classList.remove('slide-right');
      closeButton.classList.remove('show');
      closeButton.classList.add('hide');

      devClicked = false;
    } else if (dataClicked == true) {
      hideDataPods();
      dataButton.classList.remove('fade-out');
      devButton.classList.remove('slide-left');
      dadButton.classList.remove('slide-right');
      closeButton.classList.remove('show');
      closeButton.classList.add('hide');

      dataClicked = false;
    } else if (dadClicked == true) {
      hideDadPods();
      removeClass(dadButton, 'fade-out');
      removeClass(devButton, 'slide-left');
      removeClass(dataButton, 'slide-right');
      removeClass(closeButton, 'show');
      addClass(closeButton, 'hide');

      dadClicked = false;
    }
  };
};
