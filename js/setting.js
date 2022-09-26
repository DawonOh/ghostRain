//배경 가로 길이
const BG_WIDTH = 800;

//배경 세로 길이
const BG_HEIGHT = 600;

//유령 가로 길이
const GHOST_WIDTH = 45;

//유령 세로 길이
const GHOST_HEIGHT = 54;

//영웅 가로 길이
const HERO_WIDTH = 35;

//영웅 세로 길이
const HERO_HEIGHT = 54;

//~~px 에서 ~~만 split 하는 함수
function splitPxNum(str) {
  let splitResult = Number(str.split("px")[0]);
  return splitResult;
}

//영웅 요소 가져오기
let heroElement = document.getElementById("hero");
