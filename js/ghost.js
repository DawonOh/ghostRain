const GHOST_WIDTH = 45;
const GHOST_HEIGHT = 54;

//유령을 span태그로 생성
const makeGhost = document.createElement("span");

//화면에 생성되는 유령 스타일 지정
makeGhost.style.display = "inline-block";
makeGhost.style.position = "absolute";
makeGhost.style.top = "0";
makeGhost.style.left = "50%";
makeGhost.style.width = GHOST_WIDTH + "px";
makeGhost.style.height = GHOST_HEIGHT + "px";
makeGhost.style.background = "url('./images/ghost.png') no-repeat";

//용사와 같은 레벨에 유령 배치
const backGround = document.getElementById("bg");
backGround.appendChild(makeGhost);
