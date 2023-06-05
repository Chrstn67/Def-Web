const searchForm = document.querySelector("form");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const searchTerm = document.getElementById("searchFrame").value.toLowerCase();

  const cards = document.querySelectorAll(".card");

  let frameFound = false;

  cards.forEach((card) => {
    const frameTitle = card
      .querySelector(".card-title")
      .textContent.toLowerCase();

    if (frameTitle.includes(searchTerm)) {
      card.classList.add("highlight");
      frameFound = true;
    } else {
      card.classList.remove("highlight");
    }
  });

  const frameMessage = document.getElementById("frameMessage");
  if (!frameFound) {
    frameMessage.textContent = "Aucun élément ne correspond à ta recherche...";
  } else {
    frameMessage.textContent = "";
  }

  const firstHighlightedCard = document.querySelector(".highlight");
  if (firstHighlightedCard) {
    firstHighlightedCard.scrollIntoView({ behavior: "smooth" });
  }
});

const toggleButtons = document.querySelectorAll(".card-toggle");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const cardContent = button.parentNode.nextElementSibling;
    cardContent.classList.toggle("is-visible");
  });
});

function scrollToLetter(letter) {
  const letterHeader = document.querySelector(
    'h3.letter[data-letter="' + letter + '"]'
  );
  if (letterHeader) {
    letterHeader.scrollIntoView({ behavior: "smooth" });
  }
}

const alphabetButtonsContainer = document.getElementById("alphabetButtons");
for (let i = 0; i < 26; i++) {
  const letter = String.fromCharCode(65 + i);

  const letterHeaders = document.querySelectorAll(
    'h3.letter[data-letter="' + letter + '"]'
  );

  if (letterHeaders.length > 0) {
    const button = document.createElement("button");
    button.textContent = letter;
    button.addEventListener("click", function () {
      scrollToLetter(letter);
    });
    alphabetButtonsContainer.appendChild(button);
  }
}
