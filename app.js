var timer = 60;
var score = 0;
var hitrn;

function increaseScore() {
  score += 1;
  document.querySelector("#score-val").textContent = score;
}

function gitNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hit-timer").textContent = hitrn;
}

function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 160; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#panel-body").innerHTML = clutter;
}

function runTimer() {
  var timerInterval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(timerInterval);
      document.querySelector("#panel-body").innerHTML = "<h1>Game Over<h1>";
    }
  }, 1000);
}

document
  .querySelector("#panel-body")
  .addEventListener("click", function (dets) {
    var clickedNum = Number(dets.target.textContent);
    if (clickedNum == hitrn) {
      increaseScore();
      gitNewHit();
      makeBubble();
    }
  });

runTimer();

makeBubble();

gitNewHit();
