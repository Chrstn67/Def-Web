const searchForm = document.querySelector("form");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const searchTerm = document.getElementById("searchVocab").value.toLowerCase();

  const cards = document.querySelectorAll(".card");

  let vocabFound = false;

  cards.forEach((card) => {
    const vocabTitle = card
      .querySelector(".card-title")
      .textContent.toLowerCase();

    if (vocabTitle.includes(searchTerm)) {
      card.classList.add("highlight");
      vocabFound = true;
    } else {
      card.classList.remove("highlight");
    }
  });

  const vocabMessage = document.getElementById("vocabMessage");
  if (!vocabFound) {
    vocabMessage.textContent = "Aucun élément de correspond à ta recherche...";
  } else {
    vocabMessage.textContent = "";
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
  const button = document.createElement("button");
  button.textContent = letter;
  button.addEventListener("click", function () {
    scrollToLetter(letter);
  });
  alphabetButtonsContainer.appendChild(button);
}
