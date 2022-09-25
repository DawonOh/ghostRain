let moveHero = document.getElementById("hero");
let heroLocation = getComputedStyle(moveHero).left;

/*
heroLocation에서 1px을 빼거나 더하려면 ?
heroLocation은 문자열이므로 숫자 연산이 되지 않는다.
heroLocation에서 숫자만 따로 빼서 연산하면 된다!
*/
let heroLocaNum = Number(heroLocation.split("px")[0]);

document.addEventListener("keydown", function (e) {
  //왼쪽 화살표 키를 눌렀을 때
  if (e.key === "ArrowLeft" && heroLocaNum > 0) {
    //keyCode is deprecated.
    //용사 방향 왼쪽으로 변경
    moveHero.className = "left";

    // console.log("Before : " + heroLocaNum);

    moveHero.style.left = heroLocaNum - 10 + "px";
    heroLocaNum = heroLocaNum - 10;
    // console.log("After : " + heroLocaNum);
    //오른쪽 화살표 키를 눌렀을 때
  } else if (e.key === "ArrowRight" && heroLocaNum < 765) {
    //용사 방향 오른쪽으로 변경
    moveHero.className = "right";

    // console.log("Before : " + heroLocaNum);

    moveHero.style.left = heroLocaNum + 10 + "px";
    heroLocaNum = heroLocaNum + 10;
    // console.log("After : " + heroLocaNum);
  }
});

document.addEventListener("keyup", function (e) {
  moveHero.className = "stop";
});
