const GHOST_WIDTH = 45;
const GHOST_HEIGHT = 54;

//800px에서 유령 width를 뺀 755px 안에서 랜덤한 수를 구해야 한다.
function randomNum() {
  let random = Math.floor(Math.random() * 755);
  return random;
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

  //용사와 같은 레벨에 유령 배치
  const backGround = document.getElementById("bg");
  backGround.appendChild(makeGhost);
}

createGhost();
