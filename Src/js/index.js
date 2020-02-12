import '../css/main.css';

import dog from '../img/dog.png';
import cat from '../img/cat.png';
import cow from '../img/cow.png';
import chicken from '../img/chicken.png';
import elephant from '../img/elephant.png';
import goat from '../img/goat.png';
import lion from '../img/lion.png';
import monkey from '../img/monkey.png';
import pig from '../img/pig.png';

document.getElementById('dog').src = dog;
document.getElementById('cat').src = cat;
document.getElementById('cow').src = cow;
document.getElementById('chicken').src = chicken;
document.getElementById('elephant').src = elephant;
document.getElementById('goat').src = goat;
document.getElementById('lion').src = lion;
document.getElementById('monkey').src = monkey;
document.getElementById('pig').src = pig;

import dogSound from '../sounds/467840__sgak__bark.wav';
import catSound from '../sounds/260179__swatkamus__kitty-meow.wav';
import cowSound from '../sounds/117251__rvinyard__cow.mp3';
import chickenSound from '../sounds/69135__milton__gallo.mp3';
import elephantSound from '../sounds/139052__jasher70__elephant-scream.wav';
import goatSound from '../sounds/103414__confusion-music__goat-5-c.wav';
import lionSound from '../sounds/467762__sgak__lion.wav';
import monkeySound from '../sounds/417816__antumdeluge__monkey-imitation-2.wav';
import pigSound from '../sounds/449986__reinsamba__pig-grunt.wav';

document.getElementById('dogSound').src = dogSound;
document.getElementById('catSound').src = catSound;
document.getElementById('cowSound').src = cowSound;
document.getElementById('chickenSound').src = chickenSound;
document.getElementById('elephantSound').src = elephantSound;
document.getElementById('goatSound').src = goatSound;
document.getElementById('lionSound').src = lionSound;
document.getElementById('monkeySound').src = monkeySound;
document.getElementById('pigSound').src = pigSound;

window.addEventListener('keydown', playSound);
window.addEventListener('click', playSound);


function playSound(e) {
    e.preventDefault();
    const audio = document.querySelector(`audio[data-key='${e.keyCode || e.srcElement.parentNode.dataset.key || e.target.dataset.key}']`);
    const key = document.querySelector(`.animal[data-key='${e.keyCode || e.srcElement.parentNode.dataset.key || e.target.dataset.key}']`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('animal-sound');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('animal-sound');
}

const keys = document.querySelectorAll('.animal');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

function loadScript() {
    const script = document.createElement('script');
    script.onload = () => {
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'UA-149871373-1');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-149871373-1';
        document.head.appendChild(script);
    }
}

loadScript();