// Un peu d'html avant la liste
let versusListHtml = `<main>
    <section class="category">
        <h2>VS</h2>`;

difference.sort((a, b) => a.name.localeCompare(b.name));
difference.forEach((versus, index) => {
  const letter = versus.name[0];
  // On affiche L'ancre de la lettre
  if (index == 0 || difference[index - 1].name[0] != letter) {
    versusListHtml += `<h3 class="letter" data-letter="${letter}">${letter}</h3>`;
  }

  versusListHtml += `
  <section class="card">
      <div class="card-header">
          <h3 class="card-title">${versus.name}</h3>
          <button class="card-toggle">Voir</button>
      </div>
      <div class="card-content">
          <p class="card-definition">${
            versus.definition || `Différence entre ${versus.name}`
          }</p>
          ${
            versus.example
              ? `<p class="card-example">Exemple de code ${versus.name} :</p>
          <pre><code>${versus.example}</code></pre>`
              : ""
          }
      </div>
  </section>`;
});

// On oublie pas de fermer les balises
versusListHtml += "</section></main>";

// On ajoute le contenu à la page
const categorySection = document.querySelector(".category");
if (categorySection) {
  categorySection.innerHTML = versusListHtml;
}

// Récupère le formulaire de recherche
const searchForm = document.querySelector("form");

// Ajoute un écouteur d'événement à la soumission du formulaire
searchForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Empêche le rechargement de la page

  // Récupère la valeur de recherche
  const searchTerm = document
    .getElementById("searchNotion")
    .value.toLowerCase();

  // Récupère toutes les cartes
  const cards = document.querySelectorAll(".card");

  let notionFound = false; // Variable pour suivre si une notion correspondante est trouvée

  // Parcourt chaque carte
  cards.forEach((card) => {
    // Récupère le titre de la notion dans la carte
    const notionTitle = card
      .querySelector(".card-title")
      .textContent.toLowerCase();

    // Vérifie si le titre de la notion correspond à la recherche
    if (notionTitle.includes(searchTerm)) {
      // Ajoute une classe pour mettre en valeur la notion correspondante
      card.classList.add("highlight");
      notionFound = true; // Une notion correspondante est trouvée
    } else {
      // Retire la classe de mise en valeur pour les autres notions
      card.classList.remove("highlight");
    }
  });
  // Vérifie si aucune notion correspondante n'a été trouvée
  const notionMessage = document.getElementById("notionMessage");
  if (!notionFound) {
    notionMessage.textContent = "Aucun élément de correspond à ta recherche...";
  } else {
    notionMessage.textContent = ""; // Réinitialise le message si une notion est trouvée
  }

  // Fait défiler jusqu'à la première notion mise en valeur
  const firstHighlightedCard = document.querySelector(".highlight");
  if (firstHighlightedCard) {
    firstHighlightedCard.scrollIntoView({ behavior: "smooth" });
  }
});

// Gestion du basculement (toggle) des contenus des cartes
const toggleButtons = document.querySelectorAll(".card-toggle");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const cardContent = button.parentNode.nextElementSibling;
    cardContent.classList.toggle("is-visible");
  });
});

// Fonction pour faire défiler la page jusqu'au h3 correspondant à la lettre cliquée
function scrollToLetter(letter) {
  const letterHeader = document.querySelector(
    'h3.letter[data-letter="' + letter + '"]'
  );
  if (letterHeader) {
    letterHeader.scrollIntoView({ behavior: "smooth" });
  }
}

// Générer les boutons pour chaque lettre de l'alphabet
const alphabetButtonsContainer = document.getElementById("alphabetButtons");
for (let i = 0; i < 26; i++) {
  const letter = String.fromCharCode(65 + i); // Convertir le code ASCII en lettre (A = 65, B = 66, etc.)
  const button = document.createElement("button");
  button.textContent = letter;
  button.addEventListener("click", function () {
    scrollToLetter(letter);
  });
  alphabetButtonsContainer.appendChild(button);
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
