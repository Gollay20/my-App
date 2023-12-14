let mykeys = document.querySelectorAll(".key");

for (let i = 0; i < mykeys.length; i++) {
  mykeys[i].addEventListener("click", function () {
    playSnd(mykeys[i].innerHTML);
  });
}

function playSnd(key) {
  switch (key) {
    case "C":
      var snd = new Audio("doremi/do.mp3");
      snd.play();
      break;
    case "D":
      var snd = new Audio("doremi/re.mp3");
      snd.play();
      break;
    case "E":
      var snd = new Audio("doremi/mi.mp3");
      snd.play();
      break;
    case "F":
      var snd = new Audio("doremi/fa.mp3");
      snd.play();
      break;
    case "G":
      var snd = new Audio("doremi/sol.mp3");
      snd.play();
      break;
    case "A":
      var snd = new Audio("doremi/la.mp3");
      snd.play();
      break;
    case "B":
      var snd = new Audio("doremi/ti.mp3");
      snd.play();
      break;
    case "K":
      var snd = new Audio("doremi/doh.mp3");
      snd.play();
      break;
    default:
      console.log(key);
  }
}
