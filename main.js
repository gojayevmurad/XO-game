let game = document.querySelector(".game");
let squares = document.querySelectorAll(".square");
let count = 0;

squares.forEach((square) => {
  square.addEventListener("click", (e) => {
    if (e.target.innerHTML.trim() != "") {
      return false;
    }
    if (count % 2 == 0) {
      e.target.innerHTML = "o";
      e.target.classList.add("green");
      count++;
    } else {
      e.target.innerHTML = "x";
      e.target.classList.add("red");
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
    console.log("first");
    if (
      squares[num1].innerHTML == squares[num2].innerHTML ||
      squares[num2].innerHTML == squares[num3]
    ) {
      [squares[num1],squares[num2],squares[num3]].forEach(square=>{
        square.classList.add('bg-winner')
      })
    }
  }
}
