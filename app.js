// Wrap every letter in a span
let textWrapper1 = document.querySelector('.ml6 .letters');
textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true}).add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 2000,// 10000
    delay: (el, i) => 300 * i
    
    }).add({

    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 500,

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
    delay: 200,
    direction: 'alternate',
})

flexAnimation.add({
    targets: cubes,
    translateY: 0,
    borderRadius: "10%",
    duration: 1000,
    easing: 'easeInOutQuad',
}).add({
    targets: cubes,
    //translateY: '-100%',
    keyframes: [
        {translateY:  60},
        {translateY: 0},
        {translateY: -60},
        {translateY: 0},
      ],
    borderRadius: "20%",
    rotate: 90,
    duration: 2000,
    easing: 'easeInOutQuad',
    delay: 100,
}).add({
    targets: cubes,
    //translateY: '150%',
    keyframes: [
        {translateY:  60},
        {translateY: 0},
        {translateY: -120},
        {translateY: 0},
      ],
    borderRadius: "15%",
    rotate: -90,
    duration: 2000,
    easing: 'easeInOutQuad',
    delay: 100,
})

$('.animation-play').on('click', (event) => {
    if(!flexAnimation['autoplay']){
        flexAnimation.play();
        flexAnimation['autoplay'] = true;
        $(event.currentTarget).html('pause');
    } else {
        flexAnimation.pause();
        flexAnimation['autoplay'] = false;
        $(event.currentTarget).html('play');
    }
})

let cubes2 = document.querySelectorAll('.grid-item');
let midleCubes = document.querySelectorAll('.midle-cube')

const gridAnimation = anime.timeline({
    loop: true,
    autoplay: false,
    delay: 200,
    direction: 'alternate',
})

gridAnimation.add({
    targets: cubes2,
    keyframes: [
        {translateX:  50},
        {translateX:  0},
        {translateX: -50},
        {translateX:  0},
      ],
    duration: 2000,
    borderRadius: '10%',
    easing: 'easeInOutQuad',
}).add({
    targets: cubes2,
    rotate: 180,
    duration: 2000,
    borderRadius: '10%',
    easing: 'easeInOutQuad',
}).add({
    targets: midleCubes,
    scaleX: [1, 2, 2.5, 3],
    duration: 2000,
    easing: 'easeInOutQuad',
    delay: 100,
})

$('.animation-play-2').on('click', (event) => {
    if(!gridAnimation['autoplay']){
        gridAnimation.play();
        gridAnimation['autoplay'] = true;
        $(event.currentTarget).html('pause');
    } else {
        gridAnimation.pause();
        gridAnimation['autoplay'] = false;
        $(event.currentTarget).html('play');
    }
})

let code_animation = document.querySelector('.sec-3-anime-1');

/*
let code_animation_1 = anime({
    targets: code_animation,
    rotate: [0, 90, 180, 270, 300, 0],
    opacity: [1, 0.5, 0.2],
    borderRadius: ['0%','10%', '20%', '25%'],
    width: ['40%', '30%', '40%'],
    duration: 2500,
    easing: 'easeInOutQuad',
    loop: true,
    direction: 'alternate',
    delay: 1500,
    autoplay: true,
})
*/
let code_animation_1 = anime.timeline({
    targets: code_animation,
    easing: 'easeInOutQuad',
    loop: true,
    direction: 'alternate',
    delay: 1000,
    autoplay: true,
}).add({
    rotate: [0, 1080],
    opacity: [1, 0.5, 0.2],
    borderRadius: ['0%','10%', '20%'],
    duration: 2500,
    delay: 100,
}).add({
    width: ["10%", "20%", "25%", "30%", '50%'],
    opacity: [0.5, 0.8, 1],
    duration: 2000,
    delay: 200,
})

const $codeAnimation = $('.sec-3-anime-1-play').on('click', () => {
        if(!code_animation_1['autoplay']){
            code_animation_1.play();
            code_animation_1['autoplay'] = true;
            
        } else {
            code_animation_1.pause();
            code_animation_1['autoplay'] = false;
            
        }
})


$('#code-section').on('click', (event) => {
    $(event.currentTarget).siblings().slideToggle(3000);
})

let containerSquares = document.querySelector('.sec-3-anime-2')

let ny = 10;
let nx = 5;

for (let i = 0; i < ny*nx; i++){
    let square = document.createElement('div');
    square.setAttribute('class', 'square');
    containerSquares.appendChild(square)
}

const squaresAnimation = anime({
    targets: '.square',
    //scale: ['100%', '50%'],
    scale: [
        {value: .1, easing: 'easeOutSine', duration: 500}, // 600
        {value: .5, easing: 'easeOutSine', duration: 500}, // 800
        {value: 1, easing: 'easeInOutQuad', duration: 800} // 1200
      ],
    opacity: [
        {value: 0.5, easing: 'easeOutSine', duration: 600}, //300
        {value: 0.8, easing: 'easeInOutQuad', duration: 800}, //500
        {value: 1, easing: 'easeInOutQuad', duration: 1200}, //500
    ],
    backgroundColor: [
        {value: '#C1605C', easing: 'easeOutSine', duration: 1000},
        {value: '#FFF', easing: 'easeOutSine', duration: 1000},
    ],
    delay: anime.stagger(500, {grid: [nx, ny], from: 'center'}), // 1500
    loop: true,
    autoplay: true,
    direction: 'alternate',
});

$('.sec-3-anime-2-play').on('click', () => {
    if(!squaresAnimation['autoplay']){
        squaresAnimation.play();
        squaresAnimation['autoplay'] = true;
    } else {
        squaresAnimation.pause();
        squaresAnimation['autoplay'] = false;
    }
})

$('#web-design-section').on('click', (event) => {
    $(event.currentTarget).siblings().slideToggle(3000)
})

let sec_3_anime_3_elements = 3;

for(let i = 0; i < sec_3_anime_3_elements; i++){
    let div = document.createElement('div');
    let container = document.querySelector('.sec-3-anime-3');
    div.setAttribute('class', `sec-3-anime-3-square sec-3-anime-3-square-${i}`)
    container.appendChild(div);
}

const sec_3_cubes = anime.timeline({

    loop: true,
    autoplay: true,
    delay: 200,
    direction: 'alternate',

}).add({

    targets: '.sec-3-anime-3-square-0',
    keyframes: [
        //{translateY: -5},
        {translateX: -60},
        {translateY:  60},
      ],
      duration: 1000,
      easing: 'easeOutElastic(1, .8)',
      delay: 100,
}).add({

    targets: '.sec-3-anime-3-square-2',
    keyframes: [
        //{translateY:  5},
        {translateX:  60},
        {translateY: -60},
      ],
      duration: 1000,
      easing: 'easeOutElastic(1, .8)',
      delay: 100,
}).add({
    targets: '.sec-3-anime-3-square-1',
    keyframes: [
        {translateY: -60},
      ],
      duration: 1000,
      easing: 'easeOutElastic(1, .8)',
      delay: 100,
}).add({

    targets: '.sec-3-anime-3-square-0',
    keyframes: [
        {translateX: 0},
      ],
    duration: 1000, //3000
    easing: 'easeOutElastic(1, .8)',
    delay: 100,

}).add({

    targets: '.sec-3-anime-3-square-2',
    keyframes: [
        {translateY: 0},
        {translateX: 0},
      ],
    duration: 1000,
    easing: 'easeOutElastic(1, .8)',
    delay: 100,

}).add({
    targets: '.sec-3-anime-3-square-1',
    //scaleX: [1, 3.2],
    width: 160,
    duration: 1200,
    easing: 'easeOutElastic(1, .8)',
    delay: 100,
}).add({
    targets: '.sec-3-anime-3-square-0',
    width: 160,
    duration: 1200,
    easing: 'easeOutElastic(1, .8)',
    delay: 100,
}).add({
    targets: '.sec-3-anime-3-square-2',
    width: 160,
    duration: 1200,
    easing: 'easeOutElastic(1, .8)',
    delay: 100,
})


$('.sec-3-anime-3-play').on('click', () => {
    if(!sec_3_cubes['autoplay']){
        sec_3_cubes.play();
        sec_3_cubes['autoplay'] = true;
        
    } else {
        sec_3_cubes.pause();
        sec_3_cubes['autoplay'] = false;
        
    }
})