var temptimer = 60;
var tempscore = 0;
var rn = 0

function runtimer() {
    setInterval(function () {
        if (temptimer > 0) {
            temptimer--;
            document.querySelector("#timervar").textContent = temptimer;
        }
        else {
            clearInterval(temptimer);
            document.querySelector("#panelbtm").innerHTML=`<h1>  Game Over! Your score is ${tempscore}</h1>`
         }
    }, 1000)
}

function getnewhit() {
    rn = Math.floor(Math.random() * 10);
    document.querySelector("#hitvar").textContent = rn;
}

function makebubble() {
    var clutter = "";
    for (var i = 1; i <= 9999; i++) {
        let random = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${random}</div>`;
    }
    document.querySelector("#panelbtm").innerHTML = clutter;
}

function increasescore() {
    tempscore += 10;
    document.querySelector("#scorevar").textContent = tempscore;
}

document.querySelector("#panelbtm").addEventListener("click", function (details) {
    var clicked = Number(details.target.textContent)

    if (clicked === rn) {
        increasescore()
        getnewhit()
        makebubble()
    }
})

getnewhit()
runtimer()
makebubble()