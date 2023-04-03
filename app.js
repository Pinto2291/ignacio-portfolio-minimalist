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

$('.about-flex-art-item').on('click', (event) => {
    $(event.currentTarget).siblings($('.about-flex-art-item')).toggleClass('rotation')
    $(event.currentTarget).toggleClass('scale-80')
})

/*
.on('mouseleave', (event) => {
    $(event.currentTarget).siblings($('.about-flex-art-item')).removeClass('rotation')
    $(event.currentTarget).removeClass('scale-80')
})*/

/* ANIMATION SECTION */

let cube_1 = document.querySelector('.flex-item-1');
let cube_2 = document.querySelector('.flex-item-2');
let cube_3 = document.querySelector('.flex-item-3');

const cubeAnimation = anime.timeline({
    loop: true,
    autoplay: false,
    delay: 300,
    direction: 'alternate',
})

cubeAnimation.add({
    targets: cube_1,
    translateY: [0, -100],
    duration: 1200,
    easing: 'easeInOutQuad',
}).add({
    targets: cube_2,
    width: ['10%', '50%'],
    duration: 2000,
    rotate: {
        value: 360,
        duration: 1000,
    },
    easing: 'easeInOutSine',
}).add({
    targets: cube_3,
    translateY: [0, -100],
    duration: 1200,
    easing: 'easeInOutQuad'
})



document.querySelector('.animation-play').onclick = cubeAnimation.play;

document.querySelector('.animation-pause').onclick = cubeAnimation.pause;