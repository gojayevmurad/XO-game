let game = document.querySelector(".game");
let squares = document.querySelectorAll(".square");
let xRide = document.querySelector(".x--player");
let oRide = document.querySelector(".o--player");
let winnerPlayer = document.querySelector(".modal p span");
let restartBtn = document.querySelector(".modal button");
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");

let count = 0;
let winner = false;

restartBtn.addEventListener("click", () => {
  winner = false;
  count = 0;
  squares.forEach((square) => {
    square.classList = "square";
    square.innerHTML = "";
  });
  modal.classList.add("hide");
  overlay.classList.add("hide");
  oRide.classList = "o--player ride";
  xRide.classList = "x--player";
});

squares.forEach((square) => {
  square.addEventListener("click", (e) => {
    if (e.target.innerHTML.trim() != "" || winner) {
      return false;
    } else if (count % 2 == 0) {
      e.target.innerHTML = "o";
      e.target.classList.add("green");
      xRide.classList.add("ride");
      oRide.classList.remove("ride");
      count++;
    } else {
      e.target.innerHTML = "x";
      e.target.classList.add("red");

      oRide.classList.add("ride");
      xRide.classList.remove("ride");
      count++;
    }
    checkWinner(0, 1, 2);
    checkWinner(3, 4, 5);
    checkWinner(6, 7, 8);
    checkWinner(0, 3, 6);
    checkWinner(1, 4, 7);
    checkWinner(2, 5, 8);
    checkWinner(0, 4, 8);
    checkWinner(2, 4, 6);
  });
});

function checkWinner(num1, num2, num3) {
  if (
    squares[num1].innerHTML != "" &&
    squares[num2].innerHTML != "" &&
    squares[num3].innerHTML != ""
  ) {
    if (
      squares[num1].innerHTML == squares[num2].innerHTML &&
      squares[num2].innerHTML == squares[num3].innerHTML
    ) {
      [squares[num1], squares[num2], squares[num3]].forEach((square) => {
        square.classList.add("bg-winner");
      });

      [(xRide, oRide)].forEach((e) => {
        e.classList.remove("ride");
      });
      winnerPlayer.innerHTML = squares[num1].innerHTML;
      winner = !winner;
      overlay.classList.remove("hide");
      modal.classList.remove("hide");
    }
  }

  if (count == 9) {
    winnerPlayer.innerHTML = "NOBODY WON";
    modal.classList.remove("hide");
    overlay.classList.remove("hide");
  }
}
