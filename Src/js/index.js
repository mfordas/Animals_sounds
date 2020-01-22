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


/*This function will load script and call the callback once the script has loaded*/
function loadScriptAsync(scriptSrc, callback) {
    if (typeof callback !== 'function') {
        throw new Error('Not a valid callback for async script load');
    }
    var script = document.createElement('script');
    script.onload = callback;
    script.src = scriptSrc;
    document.head.appendChild(script);
}

/* This is the part where you call the above defined function and "call back" your code which gets executed after the script has loaded */
loadScriptAsync('https://www.googletagmanager.com/gtag/js?id=UA-149871373-1', function(){
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-149871373-1');
})
