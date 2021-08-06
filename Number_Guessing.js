let submit = document.getElementById("submit");
let count = 0;

submit.addEventListener("click", function () {
  let num = document.getElementById("number").value;
  let message = document.getElementById("message");

  message.innerHTML = guess(500, num, count);
  count++;
});

function guess(value, guess, count) {
  if (typeof Number(guess) !== "number") {
    return "please enter a number";
  }
  if (guess > value) {
    return "Lower please";
  } else if (guess < value) {
    return "Higher please";
  } else {
    return "congratulations! you guessed in " + count + " tries ✌ ";
  }
}

