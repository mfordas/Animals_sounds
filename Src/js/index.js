window.addEventListener('keydown', playSound);
window.addEventListener('click', playSound);



function playSound(e){
    e.preventDefault();
    const audio = document.querySelector(`audio[data-key='${e.keyCode || e.srcElement.parentNode.dataset.key || e.target.dataset.key}']`);
    const key = document.querySelector(`.animal[data-key='${e.keyCode || e.srcElement.parentNode.dataset.key || e.target.dataset.key}']`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('animal-sound');
}
// .parentElement.dataset.key
function removeTransition(e){
if(e.propertyName !== 'transform') return;
this.classList.remove('animal-sound');
}

const keys = document.querySelectorAll('.animal');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))


function loadScript() {
    const script = document.createElement('script');
    script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-149871373-1');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-149871373-1';
    document.head.appendChild(script);
}
}

loadScript();
