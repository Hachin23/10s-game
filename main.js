let bgIndex = 0;
let startTime, bgTimer, ojamaTimer;
const button = document.getElementById("start-btn");
const bgmArray = [
  "asset/voice/akita.mp3",
  "asset/voice/aomori.mp3",
  "asset/voice/fukuoka.mp3",
  "asset/voice/hiroshima.mp3",
  "asset/voice/hokkaido.mp3",
  "asset/voice/kyoto.mp3",
  "asset/voice/nagoya.mp3",
  "asset/voice/okinawa.mp3",
  "asset/voice/okinawa1.mp3",
  "asset/voice/tokyo.mp3"
];

button.addEventListener("click", (e) => {
  text = button.textContent
  if (text === "START") {
    startGame();
    button.textContent = "STOP";
  } else if (text === "STOP") {
    stopGame();
    button.textContent = "START";
  }
});

function startGame() {
  startTime = performance.now();
  document.getElementById("result").textContent = "";
  document.getElementById("comment").textContent = "";
  mode = document.getElementById("mode-select").value;

  // 邪魔モード
  if(mode === "bother"){
    ojamaTimer = setInterval(() => {
      new Audio(bgmArray[Math.floor(Math.random() * 10)]).play();
    }, 2500);
  }
}

function stopGame(){
  let time = (performance.now() - startTime) / 1000;
  let resultTime = time.toFixed(2);
  let timeError = (Math.abs(time - 10)).toFixed(2);
  document.getElementById("result").textContent = 
    `結果: ${resultTime}秒 (誤差 ${timeError}秒)`;
  
  resultComment = document.getElementById("comment");
  if (timeError === 0.00) {
    resultComment.textContent = "おめでとう！";
  } else {
    resultComment.textContent = "残念！";
  }
  clearInterval(bgTimer);
  clearInterval(ojamaTimer);
}