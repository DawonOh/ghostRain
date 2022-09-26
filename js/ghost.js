//800px에서 유령 width를 뺀 755px 안에서 랜덤한 수를 구해야 한다.
function randomNum() {
  let random = Math.floor(Math.random() * (BG_WIDTH - GHOST_WIDTH));
  return random;
}

//인자로 받은 유령을 죽은 모습으로 바꾸고 3초후에 사라지게 하는 함수
function ghostDie(ghost) {
  ghost.className = "die";
  ghost.style.backgroundPosition = "-45px, 0px";
  setTimeout(function () {
    ghost.remove();
  }, 3000);
}

//유령을 죽일 때 마다 화면 상단에 "+10"이라는 문구가 1초동안 뜨게 하는 함수
function showMessage() {
  let message = document.getElementById("message");
  message.innerHTML = "+10";
  setTimeout(function () {
    message.innerHTML = "";
  }, 1000);
}

let score = 0;
let scoreElement = document.getElementById("nowScore");

function addScore() {
  score += 10;
  scoreElement.innerHTML = score;
  return score;
}

function createGhost() {
  //유령을 span태그로 생성
  const makeGhost = document.createElement("span");

  //화면에 생성되는 유령 스타일 지정
  makeGhost.style.display = "inline-block";
  makeGhost.style.position = "absolute";
  makeGhost.style.top = "0px";

  let randomLeftNum = randomNum();

  makeGhost.style.left = randomLeftNum + "px";
  makeGhost.style.width = GHOST_WIDTH + "px";
  makeGhost.style.height = GHOST_HEIGHT + "px";
  makeGhost.style.background = "url('./images/ghost.png') no-repeat";

  // makeGhost.className = "ghost";

  //용사와 같은 레벨에 유령 배치
  const backGround = document.getElementById("bg");
  backGround.appendChild(makeGhost);

  //=====

  //유령이 아래로 내려오게 하기
  setInterval(function () {
    let ghostTop = makeGhost.style.top;
    let horoLeft = heroElement.style.left;
    let ghostLeft = makeGhost.style.left;
    let ghostTopNum = splitPxNum(ghostTop);
    let heroLeftNum = splitPxNum(horoLeft);
    let ghostLeftNum = splitPxNum(ghostLeft);

    //유령이 용사에게 닿으면 죽음
    //유령과 용사가 접촉하는 top지점 찾기
    let ghostMeetHeroTop = BG_HEIGHT - (HERO_HEIGHT + GHOST_HEIGHT);
    //if)1. 유령의 top이 접촉하는 top 지점보다 더 크다면?
    //if)2. 유령의 left값이 용사의 left값보다 작다면?(용사의 왼쪽 어깨에 유령이 닿음)
    //if)3. 용사의 left값보다 유령의 left값과 유령의 너비를 더한 값이 크다면?(용사의 오른쪽 어깨에 유령이 닿음)
    if (ghostTopNum > ghostMeetHeroTop) {
      if (
        ghostLeftNum < heroLeftNum &&
        heroLeftNum < ghostLeftNum + GHOST_WIDTH
      ) {
        if (makeGhost.className !== "die") {
          let finalScore = addScore();
          console.log("addScore()");
          isActive = false;
          if (finalScore < 100) {
            showMessage();
            ghostDie(makeGhost);
            return;
          } else if (finalScore === 100) {
            const BG = document.getElementById("bg");
            BG.className = "finish";
            scoreElement.innerHTML = "100";

            const finishMessage = document.createElement("div");
            finishMessage.style.position = "absolute";
            finishMessage.style.left = "50%";
            finishMessage.style.top = "50%";
            finishMessage.style.transform = "translate(-50%, -50%)";
            finishMessage.style.fontSize = "50px";
            finishMessage.style.color = "#fff";
            finishMessage.style.fontWeight = "700";
            finishMessage.innerHTML = "clear!";
            BG.appendChild(finishMessage);

            heroElement.style.left = "calc(50% - 35px)";
            return;
          }
        } else if (makeGhost.className === "die") {
          return;
        }
      }
    }

    //유령이 화면을 넘어가지 못하도록 처리
    if (ghostTopNum >= BG_HEIGHT - GHOST_HEIGHT) {
      //화면 아래 닿으면 사라지게 하기
      makeGhost.remove();
      return;
    }

    makeGhost.style.top = ghostTopNum + (BG_HEIGHT - GHOST_HEIGHT) / 10 + "px";
  }, 1000);
}

//start버튼을 눌렀을 때 유령이 내려오게 한다.
const startButton = document.getElementById("startBtn");
const BG = document.getElementById("bg");
function start() {
  startButton.addEventListener("click", function () {
    setInterval(createGhost, 3000);
  });
}

if (BG.className !== "finish") {
  start();
} else {
  clearInterval(start);
}
//함수를 실행하면 안된다! createGhost() 로 넣으면 안됨
