window.onload = function() {

    // MENU BUTTONS //

    const menuButtons = document.getElementsByClassName('button');
    const devButton = document.getElementById('dev');
    const dataButton = document.getElementById('data');
    const dadButton = document.getElementById('dad');

    // PODS //

    const mainPod = document.getElementById('main-pod');
    const mainPodText = document. getElementById('main-pod-text');

    const pod1 = document.getElementById('pod-1');
    const pod2 = document.getElementById('pod-2');
    const pod3 = document.getElementById('pod-3');
    const pod4 = document.getElementById('pod-4');
    const pod5 = document.getElementById('pod-5');
    const pod6 = document.getElementById('pod-6');

    const pod1Text = document.getElementById('pod1-text');
    const pod2Text = document.getElementById('pod2-text');
    const pod3Text = document.getElementById('pod3-text');
    const pod4Text = document.getElementById('pod4-text');
    const pod5Text = document.getElementById('pod5-text');
    const pod6Text = document.getElementById('pod6-text');

    const devPods = [pod1, pod2, pod3, pod4, pod5, pod6];
    const dataPods = [pod1, pod3, pod4];
    const dadPods = [pod1, pod2, pod4, pod5];

    // const devPodText = [pod1Text, pod2Text, pod3Text, pod4Text, pod5Text, pod6Text];
    // const dataPodText = [pod1Text, pod3Text, pod4Text];
    // const dadPodText = [pod1Text, pod2Text, pod4Text, pod5Text];

    // CLOSE BUTTON //

    const closeButton = document.getElementById('close-button');

    // FUNCTIONS FOR ADDING + REMOVING CLASSES

    function addClass(elementName, className) {
        elementName.classList.add(className)
    }

    function removeClass(elementName, className) {
        elementName.classList.remove(className)
    }

    let devClicked = false;
    let dataClicked = false;
    let dadClicked = false;

    for (let i = 0; i < menuButtons.length; i++) {
        menuButtons[i].onclick = function() {
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
                console.log('menu button error')
            }
        }
    }

    // MENU ANIMATIONS //

    function devMenu() {
        console.log('dev button was clicked')
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

      for (let i = 0; i < devPods.length; i++) {
        removeClass(devPods[i], 'hide');
        addClass(devPods[i], 'show');
      }
      addClass(mainPod, 'show')
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

      for (let i = 0; i < devPods.length; i++) {
        addClass(devPods[i], 'hide');
        removeClass(devPods[i], 'show');
      }
      addClass(mainPod, 'hide');
      removeClass(mainPod, 'show');
    }

    // DATA //

    function showDataPods() {

      for (let i = 0; i < dataPods.length; i++) {
        removeClass(dataPods[i], 'hide');
        addClass(dataPods[i], 'show');
      }

      addClass(mainPod, 'show')
      removeClass(mainPod, 'hide');
      mainPodText.innerHTML = 'DATA';

      pod1Text.innerHTML = 'PYTHON';
      pod3Text.innerHTML = 'SQL';
      pod4Text.innerHTML = 'D3';

    }
    function hideDataPods() {

      for (let i = 0; i < dataPods.length; i++) {
        addClass(dataPods[i], 'hide');
        removeClass(dataPods[i], 'show');
      }
      addClass(mainPod, 'hide');
      removeClass(mainPod, 'show');
    }

    // DAD //

    function showDadPods() {

      for (let i = 0; i < dadPods.length; i++) {
        removeClass(dadPods[i], 'hide');
        addClass(dadPods[i], 'show');
      }
      addClass(mainPod, 'show')
      removeClass(mainPod, 'hide');
      mainPodText.innerHTML = 'DAD';

      pod1Text.innerHTML = 'LEGOS';
      pod2Text.innerHTML = 'HOCKEY';
      pod4Text.innerHTML = 'FORTS';
      pod5Text.innerHTML = 'PIZZA';
    }

    function hideDadPods() {

      for (let i = 0; i < dadPods.length; i++) {
        addClass(dadPods[i], 'hide');
        removeClass(dadPods[i], 'show');
      }
      addClass(mainPod, 'hide');
      removeClass(mainPod, 'show');
    }


    // CLOSE BUTTON FUNTCTIONS //

    closeButton.onclick = function() {
        if (devClicked == true) {
            hideDevPods();
            devButton.classList.remove('fade-out');
            dataButton.classList.remove('slide-left');
            dadButton.classList.remove('slide-right');
            closeButton.classList.remove('show');
            closeButton.classList.add('hide');
            // removeClass(devSkill, 'draw-grid');
            devClicked = false;
        } else if (dataClicked == true) {
            hideDataPods();
            dataButton.classList.remove('fade-out');
            devButton.classList.remove('slide-left');
            dadButton.classList.remove('slide-right');
            closeButton.classList.remove('show');
            closeButton.classList.add('hide');
            // removeClass(dataSkill, 'draw-grid');
            dataClicked = false;
        } else if (dadClicked == true) {
            hideDadPods();
            removeClass(dadButton, 'fade-out')
            removeClass(devButton, 'slide-left');
            removeClass(dataButton, 'slide-right');
            removeClass(closeButton, 'show');
            addClass(closeButton, 'hide');
            // removeClass(dadSkill, 'draw-grid');
            dadClicked = false;
        }
    }



}
