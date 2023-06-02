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
