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
  if (e.key === "ArrowLeft") {
    //keyCode is deprecated.
    console.log("Before : " + heroLocaNum);

    moveHero.style.left = heroLocaNum - 1 + "px";
    heroLocaNum = heroLocaNum - 1;
    console.log("After : " + heroLocaNum);

    //오른쪽 화살표 키를 눌렀을 때
  } else if (e.key === "ArrowRight") {
    console.log("Before : " + heroLocaNum);

    moveHero.style.left = heroLocaNum + 1 + "px";
    heroLocaNum = heroLocaNum + 1;
    console.log("After : " + heroLocaNum);
  }
});
