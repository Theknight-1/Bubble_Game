function makeBubble(){
    const box = document.querySelector('.p-bottom');
var clutter = "";
for (let index = 0; index < 114; index++) {
   clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`
}
box.innerHTML = clutter
}
makeBubble();


var timer = 60;
function runTimer(){
    var moveTimer = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector('.timer').textContent = timer
        }
        else{
            clearInterval(moveTimer)
        }
    },1000)
}
runTimer();

function getNewHit (){
    const randomNumber = Math.floor(Math.random()*10);
    document.querySelector("#hit-value").textContent = randomNumber;
}
getNewHit() 