if (sessionStorage.getItem("visited")) {
  var Random_No1 = Math.floor(Math.random() * 6 + 1);
  var Random_No2 = Math.floor(Math.random() * 6 + 1);
  
  document
    .querySelector(".img1")
    .setAttribute("src", "./images/dice" + Random_No1 + ".png");
  document
    .querySelector(".img2")
    .setAttribute("src", "./images/dice" + Random_No2 + ".png");

  if (Random_No1 == Random_No2) {
    document.querySelector("h1").textContent = "Draw!";
  } else if (Random_No1 > Random_No2) {
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
  } else {
    document.querySelector("h1").textContent = "🚩Player 2 Wins!";
  }
} else {
  sessionStorage.setItem("visited", "true");
}
