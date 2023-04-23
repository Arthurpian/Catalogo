const plusButtons = document.querySelectorAll("button[id='plus']");
const minusButtons = document.querySelectorAll("button[id='minus']");
const ratings = document.querySelectorAll("span[id='rating']");

for (let i = 0; i < plusButtons.length; i++) {
  let numStars = 4;

  plusButtons[i].addEventListener("click", function() {
    if (numStars < 5) {
      numStars++;
      ratings[i].textContent = "★".repeat(numStars) + "☆".repeat(5 - numStars);
    }
  });

  minusButtons[i].addEventListener("click", function() {
    if (numStars > 0) {
      numStars--;
      ratings[i].textContent = "★".repeat(numStars) + "☆".repeat(5 - numStars);
    }
  });
}