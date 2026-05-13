(function () {
    'use strict';
 // Had to change the JavaScript, since the nav is gone.
    const button = document.querySelector('#toggleBtn');
    const body = document.querySelector('body');

    let darkMode = false;

    button.addEventListener('click', function () {

        darkMode = !darkMode;
        body.classList.toggle('switch');
        button.classList.toggle('switch');

    });

})();