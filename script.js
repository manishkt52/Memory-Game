// Array of objects
const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
];

cardArray.sort(function () {
  return 0.5 - Math.random();
});

// Above function can be written in the form of /*arrow function ()=> */
// cardArray.sort(() => 0.5 - Math.random());

/* <div id="grid"></div> 
To set an attribute in-between html element*/
const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const newElement = document.createElement("img");
    newElement.setAttribute("src", "images/blank.png");
    newElement.setAttribute("data-id", i);
    newElement.addEventListener("click", flipCard);
    gridDisplay.appendChild(newElement);
  }
}

createBoard();

// To find the match of two cards
function checkMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
  console.log("check Match");
  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    alert("You have clicked the same image");
  }
  if (cardsChosen[0] == cardsChosen[1]) {
    alert("You have found a match!");
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    alert("Sorry Try Again");
  }
  resultDisplay.textContent = cardsWon.length;
  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.textContent = "Congratulations you found them all!";
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
