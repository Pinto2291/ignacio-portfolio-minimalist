// Wrap every letter in a span
let textWrapper1 = document.querySelector('.ml6 .letters');
textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true}).add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 2200,// 10000
    delay: (el, i) => 100 * i
    
    }).add({

    targets: '.ml6',
    opacity: 0,
    duration: 2000,
    easing: "easeOutExpo",
    delay: 1000,

});

$('#menuButton').on('click', () => {
    $('.wrapper').toggleClass('custom');
    $('.header').nextAll().fadeToggle(650);
})

$('.about-flex-art-item').on('click', (event) => {
    $(event.currentTarget).siblings($('.about-flex-art-item')).toggleClass('rotation')
    $(event.currentTarget).toggleClass('scale-80')
})


/* ANIMATION SECTION */

let cubes = document.querySelectorAll('.flex-item');

const flexAnimation = anime.timeline({
    loop: true,
    autoplay: false,
    delay: 1000,
    direction: 'alternate',
})

flexAnimation.add({
    targets: cubes,
    translateY: 0,
    borderRadius: 10,
    duration: 1100,
    easing: 'easeInOutQuad',
}).add({
    targets: cubes,
    translateY: '-100%',
    borderRadius: 20,
    rotate: 360,
    duration: 1100,
    easing: 'easeInOutQuad',
}).add({
    targets: cubes,
    translateY: '150%',
    borderRadius: 10,
    rotate: -360,
    duration: 1100,
    easing: 'easeInOutQuad',
})

document.querySelector('.animation-play').onclick = flexAnimation.play;
document.querySelector('.animation-pause').onclick = flexAnimation.pause;


let cubes2 = document.querySelectorAll('.grid-item');

const gridAnimation = anime.timeline({
    loop: true,
    autoplay: false,
    delay: 500,
    direction: 'alternate',
})

gridAnimation.add({
    targets: cubes2,
    rotate: 360,
    duration: 1500,
    borderRadius: 10,
    easing: 'easeInOutQuad',
}).add({
    targets: cubes2,
    rotate: -360,
    duration: 2000,
    borderRadius: 20,
    easing: 'easeInOutQuad',
})

document.querySelector('.animation-play-2').onclick = gridAnimation.play;
document.querySelector('.animation-pause-2').onclick = gridAnimation.pause;

let code_animation = document.querySelector('.sec-3-anime-1');

let code_animation_1 = anime({
    targets: code_animation,
    width: ['50%', '25%'],
    borderRadius: '100%',
    duration: 1500,
    easing: 'easeInOutQuad',
    loop: true,
    direction: 'alternate',
})

let containerSquares = document.querySelector('.sec-3-anime-2')

let ny = 10;
let nx = 5;

for (let i = 0; i < ny*nx; i++){
    let square = document.createElement('div');
    square.setAttribute('class', 'square');
    containerSquares.appendChild(square)
}



anime({
    targets: '.square',
    //scale: ['100%', '50%'],
    scale: [
        {value: .1, easing: 'easeOutSine', duration: 600},
        {value: 1, easing: 'easeInOutQuad', duration: 1200}
      ],
    opacity: [
        {value: 0.3, easing: 'easeOutSine', duration: 300},
        {value: 0.5, easing: 'easeInOutQuad', duration: 500},
        {value: 1, easing: 'easeInOutQuad', duration: 500},
    ],
    delay: anime.stagger(200, {grid: [nx, ny], axis: 'x'}),
    loop: true,
    autoplay: true,
    direction: 'alternate',
});