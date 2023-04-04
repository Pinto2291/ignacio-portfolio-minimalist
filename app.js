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
    delay: 500,
    direction: 'alternate',
})

flexAnimation.add({
    targets: cubes,
    translateY: 0,
    borderRadius: "10%",
    duration: 1100,
    easing: 'easeInOutQuad',
}).add({
    targets: cubes,
    translateY: '-100%',
    borderRadius: "20%",
    rotate: 360,
    duration: 1100,
    easing: 'easeInOutQuad',
}).add({
    targets: cubes,
    translateY: '150%',
    borderRadius: "15%",
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
    
    rotate: [0, 90, 180, 270, 300, 0],
    opacity: [1, 0.5, 0.2],
    borderRadius: ['0%','10%', '20%', '25%'],
    width: ['50%', '30%', '50%'],
    duration: 2500,
    easing: 'easeInOutQuad',
    loop: true,
    direction: 'alternate',
    delay: 1500,
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
        {value: .5, easing: 'easeOutSine', duration: 800},
        {value: 1, easing: 'easeInOutQuad', duration: 1200}
      ],
    opacity: [
        {value: 0.5, easing: 'easeOutSine', duration: 600}, //300
        {value: 0.8, easing: 'easeInOutQuad', duration: 800}, //500
        {value: 1, easing: 'easeInOutQuad', duration: 1200}, //500
    ],
    backgroundColor: [
        {value: '#C1605C', easing: 'easeOutSine', duration: 1200},
        {value: '#FFF', easing: 'easeOutSine', duration: 1200},
    ],
    delay: anime.stagger(1500, {grid: [nx, ny], from: 'center'}),
    loop: true,
    autoplay: true,
    direction: 'alternate',
});