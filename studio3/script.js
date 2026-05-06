(function (){
 'use strict'
 console.log('running j.s.');
    
 document.addEventListener('DOMContentLoaded', function () {
 
 // Scroll Hint 
    const scrollHint = document.querySelector('.scroll-hint');

    window.addEventListener('scroll', function () {
    if (window.scrollY > 80) {
        scrollHint.style.opacity = '0';
        scrollHint.style.pointerEvents = 'none';
    } else {
        scrollHint.style.opacity = '1';
    }
    });

    // Init AOS 
    AOS.init({
      once: true,
      offset: 100,
      easing: 'ease-out-quart',
    });

    // t.js typewriter: start when closing section scrolls into view 
    const closingSection = document.querySelector('#closing');
    const typedWrap = document.querySelector('#typed-text-wrap');

    const closingObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          typedWrap.style.visibility = 'visible';
          $('#typed-text-wrap').t({
            speed: 55,
            speed_vary: true,
            repeat: true,
            caret: true,
            blink: true,
            blink_perm: false,
          });
          closingObserver.disconnect();
        }
      });
    }, { threshold: 0.3 });

    closingObserver.observe(closingSection); 
});
}());