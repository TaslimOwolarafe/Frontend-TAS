var face1 = Math.floor(Math.random() * 6) + 1;
var face2 = Math.floor(Math.random() * 6) + 1;
document.querySelector("img.img1").setAttribute("src", `images/dice${face1}.png`);
document.querySelector("img.img2").setAttribute("src", `images/dice${face2}.png`);

if (face1>face2) {
  document.querySelector("h1").textContent = "🚩Player 1 Wins!"
} else if (face2>face1) {
  document.querySelector("h1").textContent = "Player 2 Wins!🚩"
} else {
  document.querySelector("h1").textContent = "It's a tie!🏁"
}
