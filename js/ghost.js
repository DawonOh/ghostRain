const GHOST_WIDTH = 45;
const GHOST_HEIGHT = 54;
const BG_HEIGHT = 600;

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

  //유령이 아래로 내려오게 하기
  setInterval(function(){
    //유령 요소 접근해서 top 값 가져오기
    let ghostTop = makeGhost.style.top;
    console.log(ghostTop);

    //top값에서 숫자 부분만 추출
    let ghostTopNum = Number(ghostTop.split("px")[0]);
    console.log(ghostTopNum);

    //유령이 화면을 넘어가지 못하도록 처리
    if(ghostTopNum >= BG_HEIGHT-GHOST_HEIGHT){
      //화면 아래 닿으면 사라지게 하기
      makeGhost.remove();
      return;
    }

    makeGhost.style.top = ghostTopNum + (BG_HEIGHT-GHOST_HEIGHT)/10 + "px";


  },1000);

}

createGhost();

//함수를 실행하면 안된다! createGhost() 로 넣으면 안됨
setInterval(createGhost,3000);
