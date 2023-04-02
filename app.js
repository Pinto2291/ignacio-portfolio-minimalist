// Wrap every letter in a span
let textWrapper1 = document.querySelector('.ml6 .letters');
textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true}).add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
    
    }).add({

    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000

});

// SECOND TITLE 

/*
let menu = document.querySelector('.wrapper');

function toggleMenu(){
    if(menu.classList.contains('custom')){
        menu.classList.remove('custom')    
    }else{
        menu.classList.add('custom')
        body
    }
}
*/

$('#menuButton').on('click', () => {
    $('.wrapper').toggleClass('custom');
    //$('.header').nextAll().toggleClass('opacity-0');
    $('.header').nextAll().fadeToggle(650);
})

$('.about-flex-art-item').on('mouseenter', (event) => {
    $(event.currentTarget).siblings($('.about-flex-art-item')).addClass('rotation')
    $(event.currentTarget).addClass('scale-80')
}).on('mouseleave', (event) => {
    $(event.currentTarget).siblings($('.about-flex-art-item')).removeClass('rotation')
    $(event.currentTarget).removeClass('scale-80')
})