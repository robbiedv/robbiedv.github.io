window.onload = function() {

    // MENU BUTTONS //

    const menuButtons = document.getElementsByClassName('button');
    const devButton = document.getElementById('dev');
    const dataButton = document.getElementById('data');
    const dadButton = document.getElementById('dad');

    // SKILLTREE GRID ID'S //
    const mainSkill = document.getElementById('skill-main');
    const devSkill = document.getElementById('dev-skill');
    const dataSkill = document.getElementById('data-skill');
    const dadSkill = document.getElementById('dad-skill');

    // CLOSE BUTTON //

    const closeButton = document.getElementById('close-button');
    const skillText = document.getElementsByTagName('text');

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
            drawSkillTree();
            if (menuButtons[i].innerHTML == 'DEVELOPER') {
                devMenu();
                devSkillTree();
                devClicked = true;
            } else if (menuButtons[i].innerHTML == 'DATA') {
                dataMenu();
                dataSkillTree();
                dataClicked = true;
            } else if (menuButtons[i].innerHTML == 'DAD') {
                dadMenu();
                dadSkillTree();
                dadClicked = true;
            } else {
                console.log('menu button error')
            }
        }
    }

    // MENU ANIMATIONS //

    function devMenu() {
        console.log('dev button was clicked')
        devButton.classList.add('fade-out');
        dataButton.classList.add('slide-left');
        dadButton.classList.add('slide-right');
        removeClass(closeButton, 'hide');
        // closeButton.classList.remove('hide');
        closeButton.classList.add('show');
    }

    function dataMenu() {
        console.log('the data button was clicked');
        dataButton.classList.add('fade-out');
        devButton.classList.add('slide-left');
        dadButton.classList.add('slide-right');
        closeButton.classList.remove('hide');
        closeButton.classList.add('show');
    }

    function dadMenu() {
        console.log('the dad button was clicked');
        dadButton.classList.add('fade-out');
        devButton.classList.add('slide-left');
        dataButton.classList.add('slide-right');
        closeButton.classList.remove('hide');
        closeButton.classList.add('show');
    }

    // SKILLTREE GRID ANIMATION FUNCTIONS //

    function drawSkillTree() {
      //fadeIn skill-main
      removeClass(mainSkill, 'hide');
      //draw-border-left
      //draw-border-right
      //skill-glow
      //skill-buttons
    }

    function hideSkillTree() {
      addClass(mainSkill, 'hide');
    }

    function devSkillTree() {
        removeClass(devSkill, 'hide');
        //skillTextFade('dev');
    }

    function dataSkillTree() {
        removeClass(dataSkill, 'hide');
        // addClass(dataSkill, 'draw-grid');
        //skillTextFade('data');
    }

    function dadSkillTree() {
        removeClass(dadSkill, 'hide');
        // addClass(dadSkill, 'draw-grid');
        //skillTextFade('dad');
    }

    // function skillTextFade(skillTree) {
    //     for (i = 0; i < skillText.length; i++) {
    //         if (skillText[i].classList == skillTree) {
    //             skillText[i].classList.add('fade-skill-text')
    //         }
    //     }
    // }

    // CLOSE BUTTON FUNTCTIONS //

    closeButton.onclick = function() {
        hideSkillTree();
        if (devClicked == true) {
            devButton.classList.remove('fade-out');
            dataButton.classList.remove('slide-left');
            dadButton.classList.remove('slide-right');
            closeButton.classList.remove('show');
            closeButton.classList.add('hide');
            // removeClass(devSkill, 'draw-grid');
            addClass(devSkill, 'hide');
            devClicked = false;
        } else if (dataClicked == true) {
            dataButton.classList.remove('fade-out');
            devButton.classList.remove('slide-left');
            dadButton.classList.remove('slide-right');
            closeButton.classList.remove('show');
            closeButton.classList.add('hide');
            // removeClass(dataSkill, 'draw-grid');
            addClass(dataSkill, 'hide');
            dataClicked = false;
        } else if (dadClicked == true) {
            removeClass(dadButton, 'fade-out')
            removeClass(devButton, 'slide-left');
            removeClass(dataButton, 'slide-right');
            removeClass(closeButton, 'show');
            addClass(closeButton, 'hide');
            // removeClass(dadSkill, 'draw-grid');
            addClass(dadSkill, 'hide');
            dadClicked = false;
        }
    }



}
