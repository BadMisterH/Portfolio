const devwindow = []

devwindow.onload = function (){

    const EFFECT = document.querySelector('.blocks');

    window.addEventListener('scroll', scrollEffect);

    function scrollEffect(){

        if(window.scrollY>=500) {

            EFFECT.style.opacity = '1';
            EFFECT.style.transform = 'translateX(0px)';
            EFFECT.style.transition = '1s ease-in-out';
            
        }
        
        else{

            EFFECT.style.opacity = '0';
            EFFECT.style.transform = 'transalteX(-50px)';

        }
    }

    scrollEffect();
}


var typed = new Typed('#typed', {
    strings: ["Developpeur", "Webdesigner", "UX/UI Designer"],
    typeSpeed: 100,
    backSpeed : 50,
    loop : true
  });
// background: rgb(255,255,255);
// background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(193,16,71,1) 0%, rgba(206,80,101,1) 98%);