function chooseCard() {
  return Math.floor(Math.random() * cards.length);
}

function card1() {
  document.getElementById("card1").src = "images/" + cards[chooseCard()];
}
button1.addEventListener("click", card1);

function card2() {
  document.getElementById("card2").src = "images/" + cards[chooseCard()];
}
button2.addEventListener("click", card2);

function card3() {
  document.getElementById("card3").src = "images/" + cards[chooseCard()];
}
button3.addEventListener("click", card3);

function card4() {
  document.getElementById("card4").src = "images/" + cards[chooseCard()];
}
button4.addEventListener("click", card4);

function card5() {
  document.getElementById("card5").src = "images/" + cards[chooseCard()];
}
button5.addEventListener("click", card5);

function card6() {
  document.getElementById("card6").src = "images/" + cards[chooseCard()];
}
button6.addEventListener("click", card6);

function card7() {
  document.getElementById("card7").src = "images/" + cards[chooseCard()];
}
button7.addEventListener("click", card7);

function card8() {
  document.getElementById("card8").src = "images/" + cards[chooseCard()];
}
button8.addEventListener("click", card8);

function card9() {
  document.getElementById("card9").src = "images/" + cards[chooseCard()];
}
button9.addEventListener("click", card9);

function card10() {
  document.getElementById("card10").src = "images/" + cards[chooseCard()];
}
button10.addEventListener("click", card10);
