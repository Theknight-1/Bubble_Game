function makeBubble(){
    const box = document.querySelector('.p-bottom');
    var clutter = "";
    for (let index = 0; index < 90; index++) {
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
            const score = document.querySelector('#score').textContent;
            document.querySelector('.p-bottom').innerHTML = `<div class="reset">
                <h2>Your Score ${score}</h2>
                <h3>Game Over</h3>
                <button class="playAgainBtn">Play Again</button>
            </div>`;
            document.querySelector('.playAgainBtn').addEventListener('click',playAgain);
            clearInterval(moveTimer)
        }
    },1000)
}
runTimer();


var randomNumber = 0;
function getNewHit (){
    randomNumber = Math.floor(Math.random()*10);
    document.querySelector("#hit-value").textContent = randomNumber;
}
getNewHit();

document.querySelector('.p-bottom').addEventListener('click',function(dets){
    var value = Number(dets.target.textContent);
    if(value === randomNumber){
        increaseScore()
    }
})

var score = 0;
function increaseScore(){
    score += 10;
    document.querySelector('#score').textContent = score;
    makeBubble();
    getNewHit();
}


//restart the game
function playAgain(){
    console.log("click hua");
    window.location.reload();
}
