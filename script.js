(function() {
    'use strict';

    const button = document.querySelector('#toggleBtn');
    const body = document.querySelector('body');
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav');

    let mode = 'dark';

    button.addEventListener('click', function() {
        if (mode === 'dark') {
            body.classList.add('switch');
            header.classList.add('switch');
            nav.classList.add('switch');
            button.classList.add('switch');
            mode = 'light';
        } else {
            body.classList.remove('switch');
            header.classList.remove('switch');
            nav.classList.remove('switch');
            button.classList.remove('switch');
            mode = 'dark';
        }
    });

})();