/* MAIN FUNCTIONS */

/* FUNCTION to create multiple cubes inside a parent container */

function createCubes({nCubes, domElement, domClass, parent}) {
    let container = document.querySelector(`.${parent}`);
    for(let i = 0; i < nCubes; i++){
        let cubeElement = document.createElement(domElement);
        cubeElement.setAttribute('class', `${domClass} ${domClass}-${i}`);
        container.appendChild(cubeElement);
    }
}

/* This function takes a string, a DOM element to create, one or multiple classes and a parent by query selector */

function spanLetter({string, domElement, className, parent, parentClass}) {
    let stringElement = string.split('');
    let parentElement = document.querySelector(parent)
    parentElement.setAttribute('class', parentClass);
    for(let i = 0; i < stringElement.length; i++){
      let letter = document.createElement(domElement);
      letter.setAttribute('class', className);
      if(stringElement[i] == ' ') {
        letter.innerHTML = '&nbsp';
        parentElement.appendChild(letter);
      }else {
        letter.textContent = stringElement[i];
        parentElement.appendChild(letter);
      }
    }
}

/* DEVELOPER title */

const developer_title = spanLetter({
    string: 'developer',
    domElement: 'span',
    className: 'font-white uppercase title-section-font bold-700 header-developer-title',
    parent: '.header-developer',
    parentClass: 'header-developer',
})

anime({
    targets: '.header-developer-title',
    opacity: [1, 0.8, 0.6, 1],
    rotateX: [0, 180],
    rotateY: [0, 180],
    //translateX: 50,
    color: ['#FFF', '#250f18'],
    easing: 'easeOutElastic(5, .3)',
    //translateX: 50,
    duration: 2500,
    delay: anime.stagger(200, {start: 500}),
    autoplay: true,
    loop: true,
    direction: 'alternate',
})

/* TITLE  */

const main_title = spanLetter({
    string: "Hi, I'm Ignacio",
    domElement: 'span',
    className: 'letters letter font-white bold-700 title-section-font',
    parent: '.text-wrapper',
    parentClass: 'text-wrapper',
})

// Wrap every letter in a span

anime.timeline({loop: true}).add({
    targets: '.letter', //ml6
    translateY: ["15rem", 0],
    opacity: [0, 1],
    translateZ: 0,
    duration: 1000,// 10000
    delay: (el, i) => 150 * i //el
    //delay: anime.stagger(250, {start: 500}),
    
    }).add({
    targets: '.header-text',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 500,
});

/* DESIGNER title */

const designer_title = spanLetter({
    string: 'designer',
    domElement: 'span',
    className: 'uppercase title-section-font bold-700 header-designer-letter relative inline-block',
    parent: '.header-designer-title',
    parentClass: 'header-designer-title relative',
})

anime.timeline({loop: true}).add({
    targets: '.header-designer-letter', //ml6
    translateY: ["-15rem", 0],
    opacity: [0, 1],
    translateZ: 0,
    duration: 1000,// 10000
    easing: 'easeOutElastic(2, .3)', //easeOutElastic
    delay: (el, i) => 120 * i //el
    
    }).add({
    targets: '.header-designer-title',
    opacity: 0,
    duration: 1200,
    easing: "easeOutExpo",
    delay: 500,
});

/* OVERLAY MENU */

$('#menuButton').on('click', () => {
    $('.wrapper').toggleClass('custom');
    $('.header').nextAll().fadeToggle(650);
})

$('.about-flex-art-item').on('click', (event) => {
    $(event.currentTarget).siblings($('.about-flex-art-item')).toggleClass('rotation')
    $(event.currentTarget).toggleClass('scale-80')
})

/* CUBES for About section */

let aboutSectionCubes = createCubes({
    nCubes: 6,
    domElement: 'div',
    domClass: 'about-flex-art-item',
    parent: 'about-flex-art-container',
})

const aboutSectionCubesAnimation = anime.timeline({
    loop: true,
    autoplay: true,
    direction: 'alternate',
    delay: 500,
}).add({
    targets: '.about-flex-art-container',
    width: ['10%', '50%'],
    height: ['10%', '40%'],
    duration: 2000,
    easing: 'easeInElastic(3, .5)',
}).add({
    targets: '.about-flex-art-item-0',
    keyframes: [
        {translateY: '-300%'},
        {translateY: '-350%'},
    ],
    duration: 500,
    easing: 'easeOutElastic(2, .3)',
    delay: 200,
}).add({
    targets: '.about-flex-art-item-0',
    width: '80%',
    duration: 1000,
    opacity: [0.25, 0.5, 1],
    easing: 'easeOutElastic(5, .3)',
    delay: 200,
}).add({
    targets: '.about-flex-art-item-1',
    keyframes: [
        {translateX: '-350%'},
        {translateY: '10%'}
    ],
    height: '70%',
    opacity: [0.25, 0.5, 1],
    duration: 1000,
    easing: 'easeOutElastic(2, .3)',
    delay: 250,
}).add({
    targets: '.about-flex-art-item-2',
    keyframes: [
        {translateY: '360%'},
        {translateX: '10%'}
    ],
    width: '65%',
    duration: 800,
    opacity: [0.25, 0.5, 1],
    easing: 'easeOutElastic(1, .2)',
    delay: 200,
}).add({
    targets: '.about-flex-art-item-3',
    keyframes: [
        {translateY: '55%'},
        {translateX: '10%'}
    ],
    width: '65%',
    height: '25%',
    duration: 800,
    opacity: [0.25, 0.5, 1],
    easing: 'easeOutElastic(1, .2)',
    delay: 200,
}).add({
    targets: '.about-flex-art-item-4',
    keyframes: [
        {translateY: '-55%'},
        {translateX: '80%'}
    ],
    height: '25%',
    width: '30%',
    duration: 800,
    opacity: [0, 0.5, 1],
    easing: 'easeOutElastic(5, .5)',
    delay: 200,
}).add({
    targets: '.about-flex-art-item-5',
    keyframes: [
        {translateY: '-55%'},
        {translateX: '-35%'}
    ],
    height: '25%',
    width: '30%',
    duration: 1000,
    opacity: [0, 0.5, 1],
    easing: 'easeOutElastic(5, .5)',
    delay: 800,
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
      easing: 'easeOutElastic(3, .5)',
      delay: 100,
}).add({

    targets: '.sec-3-anime-3-square-2',
    keyframes: [
        //{translateY:  5},
        {translateX:  60},
        {translateY: -60},
      ],
      duration: 1000,
      easing: 'easeOutElastic(3, .5)',
      delay: 100,
}).add({
    targets: '.sec-3-anime-3-square-1',
    keyframes: [
        {translateY: -60},
      ],
      duration: 1000,
      easing: 'easeOutElastic(3, .5)',
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
    duration: 1500,
    easing: 'easeOutElastic(5, .3)', // 'easeOutElastic(1, .8)'
    delay: 100,
}).add({
    targets: '.sec-3-anime-3-square-0',
    width: 160,
    duration: 1500,
    easing: 'easeOutElastic(3, .3)',
    delay: 100,
}).add({
    targets: '.sec-3-anime-3-square-2',
    width: 160,
    duration: 1500,
    easing: 'easeOutElastic(4, .3)',
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

