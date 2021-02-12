window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 2000,
    origin: 'bottom'
});

sr.reveal('.show-left', {
    duration: 2000,
    origin: 'top',
    distance: '50px'
});

sr.reveal('.show-right', {
    duration: 2000,
    origin: 'right',
    distance: '50px'
});

sr.reveal('.show-btn', {
    duration: 2000,
    delay: 2000,
    origin: 'bottom'
});
sr.reveal('#test-head', {
    duration: 2000,
    origin: 'bottom'
});
sr.reveal('.testimonial div', {
    duration: 2000,
    origin: 'bottom'
});
sr.reveal('#con-form', {
    duration: 2000,
    origin: 'bottom'
});
sr.reveal('#reg-form', {
    duration: 2000,
    origin: 'bottom'
});

/*
$(function () {
    // Smooth Scrolling
    $('a[href*="#"]:not([href="#"])').click(function(){
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') &&
         location.hostname == this.hostname){
             var target = $(this.hash);
             target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
             if (target.length) {
                 $('html, body').animate({
                     scrollTop: target.offset().top
                 }, 1000);
                 return true;
             }
         }
    });
});
*/