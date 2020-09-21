function pickCard() {
  return Math.floor(Math.random() * cards.length);
}

function mainCard() {
  document.getElementById("cardPic").src = "images/" + cards[pickCard()];
}
mainButton.addEventListener("click", mainCard);
