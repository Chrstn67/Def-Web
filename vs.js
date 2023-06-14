const searchForm = document.querySelector("form");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const searchTerm = document.getElementById("searchVs").value.toLowerCase();

  const cards = document.querySelectorAll(".card");

  let vsFound = false;

  cards.forEach((card) => {
    const vsTitle = card.querySelector(".card-title").textContent.toLowerCase();

    if (vsTitle.includes(searchTerm)) {
      card.classList.add("highlight");
      vsFound = true;
    } else {
      card.classList.remove("highlight");
    }
  });

  const vsMessage = document.getElementById("vsMessage");
  if (!vsFound) {
    vsMessage.textContent = "Aucun élément de correspond à ta recherche...";
  } else {
    vsMessage.textContent = "";
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

const scrollButton = document.querySelector(".scroll-top");

scrollButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  scrollButton.style.display = window.scrollY > 50 ? "block" : "none";
});
