const vocabulaire = [
  {
    name: "a",
    definition: `La balise &lt;a&gt; définit un lien hypertexte. Elle est utilisée
              pour créer des liens vers d'autres pages, des fichiers ou des
              emplacements dans la même page.`,
    example: `&lt;a href="https://example.com"&gt;Lien vers exemple.com&lt;/a&gt;`,
  },
  {
    name: "abbr",
    definition: ` La balise &lt;abbr&gt; définit une abréviation ou un acronyme.
      Elle est utilisée pour indiquer la signification complète d'un mot
      ou d'une expression lorsqu'il est survolé par la souris.`,
    example: `&lt;abbr title="Hypertext Markup Language"&gt;HTML&lt;/abbr&gt;`,
  },
  {
    name: "absolu",
    definition: `Le positionnement absolu est une méthode de placement d'un élément
      sur la page web par rapport à son premier parent positionné
      (c'est-à-dire ayant une position différente de la valeur par
      défaut "static"). L'élément positionné de manière absolue est
      déplacé en utilisant les propriétés "top", "right", "bottom" et
      "left". Il est hors du flux normal du document et peut se
      superposer à d'autres éléments.`,
    example: `&lt;div style="position: absolute; top: 10px; left: 20px;"&gt;
      Contenu positionné de manière absolue
    &lt;/div&gt;`,
  },
  {
    name: "Abstract",
    definition: ` Le mot-clé "Abstract" est utilisé en programmation orientée objet
      pour déclarer une classe ou une méthode abstraite. Une classe
      abstraite ne peut pas être instanciée directement, mais elle peut
      servir de classe parente pour d'autres classes qui en héritent.
      Les méthodes abstraites définissent une signature sans fournir une
      implémentation, et doivent être implémentées dans les classes
      dérivées.`,
    example: `abstract class Shape {
        abstract public function calculateArea();
      }
      class Circle extends Shape {
      public function calculateArea() {
      // Logique de calcul de l'aire d'un cercle
      }
      }`,
  },
  {
    name: "Accessibilité",
    definition: ` L'accessibilité en matière de conception web fait référence à la
      pratique de créer des sites web et des applications accessibles à
      tous les utilisateurs, y compris ceux ayant des handicaps ou des
      limitations physiques, cognitives ou sensorielles. L'objectif est
      de permettre à tous les utilisateurs de percevoir, comprendre,
      naviguer et interagir avec le contenu de manière efficace.`,
    example: `<ul>
      <li>
        Utiliser des balises HTML appropriées et sémantiques pour
        structurer le contenu de manière logique.
      </li>
      <li>
        Utiliser des attributs alt pour décrire les images de manière
        textuelle pour les utilisateurs ayant une déficience visuelle.
      </li>
      <li>
        Utiliser des couleurs contrastées pour faciliter la lisibilité
        du texte.
      </li>
      <li>
        Fournir des alternatives textuelles pour les contenus non
        textuels tels que les vidéos ou les fichiers audio.
      </li>
      <li>
        Utiliser des formulaires accessibles avec des étiquettes et des
        indications claires.
      </li>
      <li>
        Permettre la navigation au clavier et fournir des indications
        visuelles pour les éléments interactifs.
      </li>
      <li>
        Tester et valider l'accessibilité de votre site web à l'aide
        d'outils et de vérificateurs d'accessibilité.
      </li>
    </ul>`,
  },
  {
    name: "address",
    definition: `La balise &lt;address&gt; définit les informations de contact pour
    l'auteur ou le propriétaire d'un document ou d'une section. Elle
    peut contenir une adresse postale, un numéro de téléphone, une
    adresse e-mail, etc.`,
    example: `&lt;address&gt;
    John Doe
    123 Rue des Exemples
    12345 Ville
  &lt;/address&gt;`,
  },
  {
    name: "Affectation",
    definition: ` L'affectation est l'action d'attribuer une valeur à une variable.
    Elle permet de stocker une donnée dans une variable pour une
    utilisation ultérieure. L'opérateur d'affectation le plus
    couramment utilisé est le signe égal (=), qui attribue la valeur à
    droite de l'opérateur à la variable à gauche.`,
    example: `var x = 10; // La valeur 10 est attribuée à la variable x`,
  },
  {
    name: "alt",
    definition: `L'attribut "alt" est utilisé dans les balises d'images HTML pour
    fournir un texte alternatif décrivant l'image. Cet attribut est
    important pour l'accessibilité, car il permet aux lecteurs d'écran
    et aux moteurs de recherche de comprendre le contenu de l'image en
    cas de non-affichage de celle-ci.`,
    example: `&lt;img src="image.jpg" alt="Description de l'image"&gt;`,
  },
  {
    name: "API",
    definition: ` Une API (Application Programming Interface) est un ensemble de
    règles et de protocoles qui permettent à différents logiciels de
    communiquer entre eux. Elle définit les méthodes de communication
    et les formats de données pour l'échange d'informations entre les
    applications.`,
    example: `fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
      // Traitement des données reçues
    });`,
  },
  {
    name: "Architecture",
    definition: `L'architecture fait référence à la structure globale et à
    l'organisation d'un système ou d'une application informatique.
    Elle définit la manière dont les différents composants d'un
    système interagissent entre eux, comment les données sont
    traitées, et comment les différentes fonctionnalités sont
    réparties et gérées.`,
    example: `L'architecture d'une application web peut être basée sur le modèle client-serveur, où le client (généralement un navigateur web) envoie des requêtes au serveur, qui traite ces requêtes et renvoie les réponses correspondantes. Cela peut impliquer l'utilisation de technologies telles que HTML, CSS et JavaScript pour la partie front-end, et des langages tels que PHP, Java ou .NET pour la partie back-end.`,
  },
  {
    name: "Arguments",
    definition: ` Les arguments sont les valeurs effectivement passées à une
    fonction ou à une méthode lors de son appel. Ils correspondent aux
    paramètres définis dans la signature de la fonction. Les arguments
    peuvent varier en nombre et en type, en fonction des paramètres de
    la fonction.`,
    example: `function greet(name) {
        console.log("Bonjour, " + name + " !");
      }
      greet("Alice"); // Affiche "Bonjour, Alice !"
      greet("Bob"); // Affiche "Bonjour, Bob !"`,
  },
  {
    name: "article",
    definition: ` La balise &lt;article&gt; est utilisée pour représenter un contenu
    indépendant et autonome dans un document HTML. Elle peut être
    utilisée pour encapsuler des articles de blog, des commentaires,
    des widgets, etc. Elle devrait avoir un sens complet en étant
    extraite de son contexte.`,
    example: `&lt;article&gt;
    &lt;h2&gt;Titre de l'article&lt;/h2&gt;
    &lt;p&gt;Contenu de l'article...&lt;/p&gt;
  &lt;/article&gt;`,
  },
  {
    name: "aside",
    definition: `La balise &lt;aside&gt; est utilisée pour représenter un contenu
    connexe ou supplémentaire qui est lié au contenu principal du
    document, mais qui peut être considéré comme distinct. Elle peut
    être utilisée pour afficher des encarts publicitaires, des
    citations, des biographies, etc.`,
    example: `&lt;aside&gt;
    &lt;h3&gt;À propos de l'auteur&lt;/h3&gt;
    &lt;p&gt;Informations supplémentaires...&lt;/p&gt;
  &lt;/aside&gt;`,
  },
  {
    name: "Attaque XSS",
    definition: `Une attaque XSS (Cross-Site Scripting) est une vulnérabilité de
    sécurité courante sur les sites web. Elle se produit lorsque des
    scripts malveillants sont injectés dans des pages web et exécutés
    côté client, compromettant ainsi la sécurité des utilisateurs et
    des données.`,
    example: `Exemple d'attaque XSS :</p>
    <pre><code>&lt;script&gt;alert("Vous avez été piraté !");&lt;/script&gt;`,
  },
  {
    name: "Attribut",
    definition: ` Un attribut est une valeur spécifique ajoutée à une balise HTML
    pour lui donner des propriétés supplémentaires ou des informations
    spécifiques.`,
    example: `<ul>
    <li>
      <strong>class</strong> : L'attribut "class" est utilisé pour
      spécifier une ou plusieurs classes CSS qui sont appliquées à un
      élément.
    </li>
    <li>
      <strong>id</strong> : L'attribut "id" est utilisé pour donner un
      identifiant unique à un élément.
    </li>
    <li>
      <strong>src</strong> : L'attribut "src" est utilisé pour
      spécifier l'URL de la source (comme une image ou une vidéo) à
      afficher dans un élément.
    </li>
    <li>
      <strong>href</strong> : L'attribut "href" est utilisé pour
      spécifier l'URL de destination d'un lien hypertexte.
    </li>
    <li>
      <strong>alt</strong> : L'attribut "alt" est utilisé pour
      spécifier un texte alternatif à afficher lorsque l'élément
      (comme une image) ne peut pas être affiché.
    </li>
    <li>
      <strong>style</strong> : L'attribut "style" est utilisé pour
      spécifier des règles CSS pour un élément spécifique.
    </li>
    <li>
      <strong>disabled</strong> : L'attribut "disabled" est utilisé
      pour désactiver un élément interactif, comme un champ de saisie
      ou un bouton.
    </li>
    <li>
      <strong>required</strong> : L'attribut "required" est utilisé
      pour indiquer que la saisie d'un champ est obligatoire.
    </li>
    <li>
      <strong>value</strong> : L'attribut "value" est utilisé pour
      spécifier la valeur par défaut d'un champ de saisie ou d'un
      élément de formulaire.
    </li>
    <li>
      <strong>data-*</strong> : Les attributs "data-*" sont utilisés
      pour stocker des données personnalisées pour un élément, où *
      représente le nom spécifique de l'attribut.
    </li>
    <li>
      <strong>rel</strong> : L'attribut "rel" est utilisé pour
      spécifier la relation entre la page courante et la page liée,
      généralement utilisé dans les balises
      <code>&lt;a&gt;</code> pour les liens.
    </li>
    <li>
      <strong>target</strong> : L'attribut "target" est utilisé pour
      spécifier où ouvrir la page liée, généralement utilisé avec
      l'attribut "href" dans les balises <code>&lt;a&gt;</code>.
    </li>
  </ul>`,
  },
  {
    name: "b",
    definition: ` La balise &lt;b&gt; est utilisée pour mettre en évidence un texte
    important dans un document HTML. Par défaut, le texte entouré de
    balises &lt;b&gt; est affiché en gras, mais son utilisation
    actuelle est plus générale et dépend de la signification donnée au
    texte.`,
    example: `&lt;b&gt;Texte important&lt;/b&gt;`,
  },
  {
    name: "background",
    definition: ` La propriété CSS "background" est utilisée pour définir
    l'arrière-plan d'un élément. Elle regroupe plusieurs
    sous-propriétés qui permettent de définir la couleur, l'image, la
    position et d'autres paramètres de l'arrière-plan.`,
    example: `.element {
        background: #f9f9f9 url("background.jpg") no-repeat center top;
      }`,
  },
  {
    name: "background-attachment",
    definition: ` La propriété CSS "background-attachment" est utilisée pour définir
    si l'arrière-plan d'un élément défile avec le contenu ou reste
    fixe lorsque l'utilisateur fait défiler la page.`,
    example: `.element {
        background-attachment: fixed;
      }`,
  },
  {
    name: "background-color",
    definition: `La propriété CSS "background-color" est utilisée pour définir la
    couleur de l'arrière-plan d'un élément.`,
    example: `.element {
        background-color: #f9f9f9;
      }`,
  },
  {
    name: "background-image",
    definition: `La propriété CSS "background-image" est utilisée pour définir une
    image comme arrière-plan d'un élément.`,
    example: `.element {
        background-image: url("background.jpg");
      }`,
  },
  {
    name: "background-position-x / background-position-y",
    definition: `Les propriétés CSS "background-position-x" et
    "background-position-y" sont utilisées pour définir la position
    horizontale et verticale de l'arrière-plan d'un élément,
    respectivement.`,
    example: `.element {
        background-position-x: center;
        background-position-y: top;
      }`,
  },
  {
    name: "background-position",
    definition: ` La propriété CSS "background-position" est utilisée pour définir
    la position horizontale et verticale de l'arrière-plan d'un
    élément en utilisant une seule valeur.`,
    example: `element {
        background-position: center top;
      }`,
  },
  {
    name: "BackOffice",
    definition: ` Le BackOffice, également appelé interface d'administration, est la
    partie d'une application web réservée aux administrateurs ou aux
    utilisateurs autorisés. Il permet de gérer et de configurer les
    fonctionnalités de l'application, de gérer les utilisateurs,
    d'accéder aux données de la base de données, etc.`,
    example: `Modifier les paramètres du site, gérer les utilisateurs et les autorisations, consulter les statistiques`,
  },
  {
    name: "Balise",
    definition: `En HTML, une balise est un élément utilisé pour marquer et
    structurer le contenu d'une page web. Elle est composée d'une
    balise ouvrante (&lt;span&gt;) et d'une balise fermante
    (&lt;/span&gt;). Les balises définissent la structure et le sens
    du contenu.`,
    example: `&lt;h1&gt;Titre&lt;/h1&gt;`,
  },
  {
    name: "base",
    definition: ` La balise 'base' définit l'URL de base pour les liens d'une page
    HTML. Elle est utilisée pour spécifier l'URL de base à partir de
    laquelle tous les liens relatifs dans le document seront résolus.`,
    example: `&lt;head&gt;
    &lt;base href="https://www.example.com/"&gt;
  &lt;/head&gt;`,
  },
  {
    name: "bdi",
    definition: ` La balise &lt;bdi&gt; est utilisée pour isoler une partie de texte
    qui peut être formatée différemment en fonction de la direction du
    texte environnant. Elle est souvent utilisée pour gérer
    correctement l'affichage de texte dans des langues qui s'écrivent
    de droite à gauche (comme l'arabe ou l'hébreu) lorsqu'il est
    mélangé avec du texte de gauche à droite.`,
    example: `&lt;bdi&gt;العالم&lt;/bdi&gt;`,
  },
  {
    name: "bdo",
    definition: `La balise &lt;bdo&gt; est utilisée pour spécifier explicitement la
    direction d'un texte dans un document HTML. Elle est souvent
    utilisée pour formater correctement le texte dans des langues qui
    s'écrivent de droite à gauche (comme l'arabe ou l'hébreu) ou de
    gauche à droite (comme l'anglais ou le français).`,
    example: `&lt;bdo dir="rtl"&gt;العالم&lt;/bdo&gt;`,
  },
  {
    name: "blockquote",
    definition: `La balise &lt;blockquote&gt; est utilisée pour citer un contenu
    provenant d'une autre source. Elle indique que le texte cité est
    une citation et peut être utilisée pour mettre en valeur ou
    styliser le texte cité.`,
    example: `&lt;blockquote&gt;
    Voici une citation.
  &lt;/blockquote&gt;`,
  },
  {
    name: "body",
    definition: `La balise 'body' représente le contenu principal d'une page HTML.
    Elle contient tous les éléments visibles à l'écran, tels que le
    texte, les images, les liens, etc.`,
    example: `&lt;body&gt;
    &lt;h1&gt;Titre de la page&lt;/h1&gt;
    &lt;p&gt;Contenu de la page...&lt;/p&gt;
  &lt;/body&gt;`,
  },
  {
    name: "border",
    definition: `La propriété CSS "border" est utilisée pour définir la bordure
    d'un élément. Elle permet de spécifier la largeur, le style et la
    couleur de la bordure.`,
    example: `.element {
        border: 1px solid black;
      }`,
  },
  {
    name: "border-bottom",
    definition: `La propriété CSS "border-bottom" est utilisée pour définir la
    bordure inférieure d'un élément. Elle permet de spécifier la
    largeur, le style et la couleur de la bordure inférieure.`,
    example: `.element {
        border-bottom: 2px dashed red;
      }`,
  },
  {
    name: "border-bottom-color",
    definition: ` La propriété CSS "border-bottom-color" est utilisée pour définir
    la couleur de la bordure inférieure d'un élément.`,
    example: `.element {
        border-bottom-color: blue;
      }`,
  },
  {
    name: "border-bottom-style",
    definition: ` La propriété CSS "border-bottom-style" est utilisée pour définir
    le style de la bordure inférieure d'un élément.`,
    example: `.element {
        border-bottom-style: dotted;
      }`,
  },
  {
    name: "border-bottom-width",
    definition: `La propriété CSS "border-bottom-width" est utilisée pour définir
    la largeur de la bordure inférieure d'un élément.`,
    example: `.element {
        border-bottom-width: 3px;
      }`,
  },
  {
    name: "border-collapse",
    definition: ` La propriété CSS "border-collapse" est utilisée pour spécifier si
    les bordures des cellules d'un tableau doivent être fusionnées en
    une seule bordure ou séparées.`,
    example: `table {
        border-collapse: collapse;
      }`,
  },
  {
    name: "border-color",
    definition: ` La propriété CSS "border-color" est utilisée pour définir la
    couleur des bordures d'un élément. Elle peut prendre plusieurs
    valeurs pour spécifier différentes couleurs de bordure.`,
    example: `.element {
        border-color: red green blue;
      }`,
  },
  {
    name: "border-left",
    definition: `La propriété CSS "border-left" est utilisée pour définir la
    bordure gauche d'un élément. Elle permet de spécifier la largeur,
    le style et la couleur de la bordure gauche.`,
    example: `.element {
        border-left: 1px solid black;
      }`,
  },
  {
    name: "border-left-color",
    definition: ` La propriété CSS "border-left-color" est utilisée pour définir la
    couleur de la bordure gauche d'un élément.`,
    example: `.element {
        border-left-color: #FF0000;
      }`,
  },
  {
    name: "border-left-style",
    definition: `La propriété CSS "border-left-style" est utilisée pour définir le
    style de la bordure gauche d'un élément.`,
    example: `.element {
        border-left-style: dashed;
      }`,
  },
  {
    name: "border-left-width",
    definition: `La propriété CSS "border-left-width" est utilisée pour définir la
    largeur de la bordure gauche d'un élément.`,
    example: `.element {
        border-left-width: 2px;
      }`,
  },
  {
    name: "border-right",
    definition: `La propriété CSS "border-right" est utilisée pour définir la
    bordure droite d'un élément. Elle permet de spécifier la largeur,
    le style et la couleur de la bordure droite.`,
    example: `.element {
        border-right: 1px solid black;
      }`,
  },
  {
    name: "border-right-color",
    definition: ` La propriété CSS "border-right-color" est utilisée pour définir la
    couleur de la bordure droite d'un élément.`,
    example: `.element {
        border-right-color: #00FF00;
      }`,
  },
  {
    name: "border-right-style",
    definition: ` La propriété CSS "border-right-style" est utilisée pour définir le
    style de la bordure droite d'un élément.`,
    example: `.element {
        border-right-style: double;
      }`,
  },
  {
    name: "border-right-width",
    definition: ` La propriété CSS "border-right-width" est utilisée pour définir la
    largeur de la bordure droite d'un élément.`,
    example: `.element {
        border-right-width: 3px;
      }`,
  },
  {
    name: "border-spacing",
    definition: ` La propriété CSS "border-spacing" est utilisée pour spécifier
    l'espace entre les cellules d'un tableau lorsque la propriété
    "border-collapse" est définie sur "separate".`,
    example: `table {
        border-collapse: separate;
        border-spacing: 5px;
      }`,
  },
  {
    name: "border-style",
    definition: ` La propriété CSS "border-style" est utilisée pour définir le style
    des bordures d'un élément.`,
    example: `.element {
        border-style: dotted;
      }`,
  },
  {
    name: "border-top",
    definition: `La propriété CSS "border-top" est utilisée pour définir la bordure
    supérieure d'un élément. Elle permet de spécifier la largeur, le
    style et la couleur de la bordure supérieure.`,
    example: `.element {
        border-top: 1px solid black;
      }`,
  },
  {
    name: "border-top-color",
    definition: ` La propriété CSS "border-top-color" est utilisée pour définir la
    couleur de la bordure supérieure d'un élément.`,
    example: `.element {
        border-top-color: #0000FF;
      }`,
  },
  {
    name: "border-top-style",
    definition: ` La propriété CSS "border-top-style" est utilisée pour définir le
    style de la bordure supérieure d'un élément.`,
    example: `.element {
        border-top-style: double;
      }`,
  },
  {
    name: "border-top-width",
    definition: ` La propriété CSS "border-top-width" définit la largeur de la
    bordure supérieure d'un élément.`,
    example: `.element {
        border-top-width: 2px;
      }`,
  },
  {
    name: "border-width",
    definition: ` La propriété CSS "border-width" définit la largeur des quatre
    bordures d'un élément dans l'ordre suivant : bordure supérieure,
    bordure droite, bordure inférieure, bordure gauche.`,
    example: `.element {
        border-width: 1px 2px 3px 4px;
      }`,
  },
  {
    name: "bottom",
    definition: `La propriété CSS "bottom" spécifie la distance entre le bas d'un
    élément et le bord inférieur de son conteneur.`,
    example: `.element {
        position: absolute;
        bottom: 20px;
      }`,
  },
  {
    name: "br",
    definition: `La balise &lt;br&gt; est utilisée pour insérer un saut de ligne
    (retour à la ligne) à l'intérieur d'un paragraphe ou d'un texte.
    Elle est généralement utilisée lorsque vous souhaitez créer une
    nouvelle ligne sans créer un nouveau paragraphe.`,
    example: `Texte sur une ligne &lt;br&gt; Texte sur une nouvelle ligne`,
  },
  {
    name: "Cahier des charges",
    definition: ` Un cahier des charges est un document qui décrit de manière
    détaillée les spécifications, les objectifs, les contraintes et
    les attentes d'un projet. Il sert de référence commune entre le
    client et l'équipe de développement pour définir les
    fonctionnalités, les délais, les ressources nécessaires et les
    critères de réussite du projet.`,
    example: `Objectif du projet :
    - Créer un site web e-commerce pour la vente de produits électroniques.
    Fonctionnalités :
    
    Page d'accueil avec mise en avant des produits populaires.
    Catalogue de produits avec filtres de recherche.
    Panier d'achat et processus de paiement.
    Gestion des utilisateurs (inscription, connexion, profil).
    Système de commentaires et d'évaluations des produits.
    Contraintes :
    
    Utiliser le framework PHP Laravel.
    Respecter les bonnes pratiques de sécurité.`,
  },
  {
    name: "CallBack",
    definition: `Un callback, ou fonction de rappel, est une fonction qui est
    passée comme argument à une autre fonction. Elle permet d'indiquer
    à cette fonction quoi faire une fois qu'une opération asynchrone
    est terminée ou lorsqu'un événement se produit. Le callback est
    appelé ultérieurement pour traiter les résultats ou les
    événements.`,
    example: `setTimeout(function() {
        console.log("Le délai est écoulé !");
      }, 3000);`,
  },
  {
    name: "Captcha",
    definition: `Un Captcha (Completely Automated Public Turing test to tell
        Computers and Humans Apart) est un test de sécurité utilisé pour
        distinguer les humains des robots ou des programmes automatisés
        sur internet. Il consiste généralement en une tâche que les
        humains peuvent accomplir facilement, mais qui est difficile pour
        les machines, comme recopier des caractères déformés, résoudre un
        puzzle visuel ou répondre à une question simple.`,
    example: `&lt;form action="traitement.php" method="post"&gt;
    &lt;label for="captcha"&gt;Recopiez le texte ci-dessous :&lt;/label&gt;
    &lt;input type="text" id="captcha" name="captcha"&gt;
    &lt;img src="captcha_image.jpg" alt="Captcha image"&gt;
    &lt;input type="submit" value="Envoyer"&gt;
  &lt;/form&gt;`,
  },
  {
    name: "caption-side",
    definition: ` La propriété CSS "caption-side" est utilisée pour spécifier
    l'alignement de la légende d'un tableau par rapport à ce dernier.`,
    example: `table {
        caption-side: bottom;
      }`,
  },
  {
    name: "cite",
    definition: ` La balise &lt;cite&gt; est utilisée pour indiquer une référence à
    une source dans un document HTML. Elle est généralement utilisée
    pour citer des livres, des articles, des œuvres d'art, etc., et
    peut être stylisée pour indiquer visuellement qu'il s'agit d'une
    citation.`,
    example: `&lt;cite&gt;Titre de l'article&lt;/cite&gt;`,
  },
  {
    name: "Classe",
    definition: ` En programmation orientée objet, une classe est un modèle ou un
    plan pour créer des objets. Elle définit les propriétés et les
    comportements communs à un groupe d'objets. Une classe sert de
    structure pour créer des instances individuelles appelées objets,
    qui peuvent avoir leurs propres valeurs de propriétés uniques mais
    partagent les mêmes méthodes et fonctionnalités définies dans la
    classe.`,
    example: `public class Circle {
        private double radius;
      public Circle(double radius) {
      this.radius = radius;
      }
      
      public double getArea() {
      return Math.PI * radius * radius;
      }
      }`,
  },
  {
    name: "Clé étrangère",
    definition: ` Une clé étrangère (foreign key) est une colonne ou un groupe de
    colonnes dans une table de base de données qui fait référence à la
    clé primaire d'une autre table. Elle établit une relation entre
    les deux tables en permettant de lier les enregistrements de
    manière cohérente.`,
    example: ` CREATE TABLE Orders (
        OrderID int PRIMARY KEY,
        CustomerID int,
        OrderDate date,
        FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
      );`,
  },
  {
    name: "Clé primaire",
    definition: `En base de données, une clé primaire est un attribut ou un
    ensemble d'attributs qui identifient de manière unique chaque
    enregistrement dans une table. Elle garantit l'unicité et
    l'identification des données au sein de la table.`,
    example: `CREATE TABLE Users (
        id INT PRIMARY KEY,
        name VARCHAR(50),
        email VARCHAR(100)
      );`,
  },
  {
    name: "clear",
    definition: ` La propriété CSS "clear" spécifie si un élément doit être déplacé
    en dessous des éléments flottants voisins qui le précèdent.`,
    example: `.element {
        clear: left;
      }`,
  },
  {
    name: "clip",
    definition: ` La propriété CSS "clip" spécifie une région rectangulaire à
    afficher d'un élément positionné de façon absolue.`,
    example: `.element {
        position: absolute;
        clip: rect(0px, 100px, 100px, 0px);
      }`,
  },
  {
    name: "CMS",
    definition: `CMS (Content Management System) est un système de gestion de
    contenu qui permet de créer, de modifier et de publier facilement
    du contenu sur le web. Il offre une interface conviviale pour
    gérer les pages, les articles, les médias et d'autres éléments du
    site web sans avoir à écrire de code.`,
    example: `WordPress, Joomla, Drupal, Magento`,
  },
  {
    name: "code",
    definition: `La balise &lt;code&gt; est utilisée pour représenter du code
    informatique dans un document HTML. Elle est généralement utilisée
    pour afficher du code source, des commandes, des expressions,
    etc., de manière à ce qu'elles soient distinguées du texte normal
    et à largeur fixe.`,
    example: `&lt;code&gt;var x = 5;&lt;/code&gt;`,
  },
  {
    name: "color",
    definition: `La propriété CSS "color" est utilisée pour définir la couleur du
    texte à l'intérieur d'un élément HTML. Elle permet de spécifier la
    couleur du texte en utilisant différents formats tels que les noms
    de couleurs prédéfinis, les valeurs hexadécimales, les valeurs RVB
    ou les valeurs HSL.`,
    example: `p {
        color: red;
      }`,
  },
  {
    name: "Composant",
    definition: `Un composant est une unité autonome et réutilisable de code qui
    encapsule des fonctionnalités spécifiques et peut être utilisé
    pour construire des interfaces utilisateur. Les composants sont
    largement utilisés dans les frameworks de développement web tels
    que React, Angular et Vue.js.`,
    example: `// Exemple de composant en React
    class Button extends React.Component {
      render() {
        return (
          &lt;button onClick={this.props.onClick}&gt;
            {this.props.label}
          &lt;/button&gt;
        );
      }
    }`,
  },
  {
    name: "Composer",
    definition: `Composer est un gestionnaire de dépendances pour les projets PHP.
    Il permet de gérer les bibliothèques et les packages tiers
    nécessaires à un projet, en s'assurant de leur installation, de
    leur mise à jour et de leur compatibilité. Composer facilite la
    gestion des dépendances et favorise la réutilisation du code dans
    les projets PHP.`,
    example: `composer require monolog/monolog`,
  },
  {
    name: "Constructeur",
    definition: `En programmation orientée objet, un constructeur est une méthode
    spéciale utilisée pour initialiser un objet lors de sa création.
    Il définit les propriétés et les comportements initiaux de
    l'objet. Le constructeur est appelé automatiquement lorsqu'un
    nouvel objet est créé (instencié) à partir d'une classe.`,
    example: `class Person {
        constructor(name, age) {
          this.name = name;
          this.age = age;
        }
      
        greet() {
          console.log(\`Hello, my name is ${this.name} and I'm ${this.age} years old.\`);
        }
      }
      
      const person1 = new Person("John", 30);
      person1.greet(); // Output: Hello, my name is John and I'm 30 years old.`,
  },
  {
    name: "content",
    definition: `La propriété CSS "content" est utilisée pour insérer du contenu
    généré dans un élément à l'aide des pseudo-éléments "::before" et
    "::after". Elle permet d'ajouter du texte, des images ou d'autres
    éléments de contenu à l'élément sélectionné.`,
    example: `p::before {
        content: "Avant ";
      }
      p::after {
      content: " Après";
      }`,
  },
  {
    name: "Controller",
    definition: `Le "Controller" dans le modèle de conception MVC est responsable
    de la gestion des interactions entre le modèle et la vue. Il
    reçoit les requêtes de l'utilisateur, effectue les opérations
    nécessaires sur le modèle et prépare les données à afficher dans
    la vue.`,
    example: `class UserController {
        public function show($id) {
          $user = UserRepository::find($id);
          View::render('user_profile', ['user' => $user]);
        }
      }`,
  },
  {
    name: "Cookies",
    definition: ` Les cookies sont de petits fichiers texte stockés par le
    navigateur sur l'ordinateur d'un utilisateur. Ils sont utilisés
    pour stocker des informations spécifiques au site web, telles que
    des préférences utilisateur, des paniers d'achat ou des données de
    session. Les cookies permettent aux sites web de maintenir l'état
    et de fournir une expérience personnalisée aux utilisateurs.`,
    example: `// Stocker un cookie
    document.cookie = "nom=John Doe; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/";
    // Lire un cookie
    const nom = document.cookie.split(';')
    .map(cookie => cookie.trim())
    .find(cookie => cookie.startsWith("nom="))
    .split("=")[1];
    
    console.log(nom); // Affiche "John Doe"`,
  },

  {
    name: "CORS",
    definition: ` CORS (Cross-Origin Resource Sharing) est un mécanisme de sécurité
    utilisé par les navigateurs web pour contrôler les requêtes HTTP
    effectuées entre différentes origines (domaines, protocoles,
    ports).`,
    example: `const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.example.com/data', true);
    xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();`,
  },
  {
    name: "counter-increment",
    definition: `La propriété CSS "counter-increment" est utilisée pour incrémenter
    la valeur d'un compteur spécifié. Elle est couramment utilisée en
    combinaison avec les pseudo-éléments "::before" et "::after" pour
    créer des listes numérotées ou d'autres éléments de numérotation.`,
    example: `ol {
        counter-reset: section;
      }
      li::before {
      counter-increment: section;
      content: "Section " counter(section) ": ";
      }`,
  },
  {
    name: "counter-reset",
    definition: `La propriété CSS "counter-reset" est utilisée pour réinitialiser
    la valeur d'un compteur spécifié. Elle est couramment utilisée en
    combinaison avec les pseudo-éléments "::before" et "::after" pour
    créer des listes numérotées ou d'autres éléments de numérotation.`,
    example: `ol {
        counter-reset: section;
      }
      li::before {
      counter-increment: section;
      content: "Section " counter(section) ": ";
      }`,
  },
  {
    name: "CRUD",
    definition: ` CRUD est un acronyme pour Create, Read, Update et Delete, qui sont
    les quatre opérations de base dans la manipulation des données
    d'une application. Le CRUD correspond à la création, la lecture,
    la mise à jour et la suppression de données dans une base de
    données ou tout autre système de stockage.`,
    example: `// Create
    INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com');
    // Read
    SELECT * FROM users;
    
    // Update
    UPDATE users SET name = 'Jane Smith' WHERE id = 1;
    
    // Delete
    DELETE FROM users WHERE id = 1;`,
  },
  {
    name: "cursor",
    definition: ` La propriété CSS "cursor" est utilisée pour spécifier le type de
    curseur qui doit être affiché lorsque l'utilisateur survole un
    élément.`,
    example: `.element {
        cursor: pointer;
      }`,
  },
  {
    name: "Cyberattaque",
    definition: `Une cyberattaque est une action malveillante entreprise par des
    individus ou des groupes pour compromettre, perturber ou accéder
    de manière non autorisée à des systèmes informatiques, des réseaux
    ou des données. Les cyberattaques peuvent prendre différentes
    formes et viser différents objectifs.`,
    example: ` <ol>
    <li>
      <strong>Phishing :</strong>
      Une attaque de phishing consiste à envoyer des messages
      frauduleux, tels que des e-mails ou des messages instantanés,
      pour tromper les utilisateurs et les inciter à divulguer des
      informations confidentielles, telles que des identifiants de
      connexion ou des numéros de carte de crédit.
    </li>
    <li>
      <strong>Attaque par déni de service (DDoS) :</strong>
      Une attaque DDoS vise à submerger un système informatique ou un
      réseau de trafic illégitime, le rendant indisponible aux
      utilisateurs légitimes.
    </li>
    <li>
      <strong>Malware :</strong>
      Les logiciels malveillants (malware) sont des programmes
      informatiques conçus pour infecter un système et causer des
      dommages, tels que des virus, des chevaux de Troie, des
      ransomwares, etc.
    </li>
    <li>
      <strong>Ingénierie sociale :</strong>
      L'ingénierie sociale est une technique utilisée pour manipuler
      les individus et les inciter à divulguer des informations
      sensibles ou à effectuer des actions non sécurisées.
    </li>
    <li>
      <strong>Attaque de force brute :</strong>
      Une attaque de force brute consiste à essayer de deviner les
      identifiants de connexion en testant toutes les combinaisons
      possibles jusqu'à trouver la bonne.
    </li>
    <li>
      <strong>Ransomware :</strong>
      Les ransomwares sont des logiciels malveillants qui chiffrent
      les données d'un système et demandent une rançon en échange de
      leur déchiffrement.
    </li>
    <li>
      <strong>Attaque par injection SQL :</strong>
      L'attaque par injection SQL vise à exploiter les failles de
      sécurité d'une application web pour exécuter des commandes SQL
      non autorisées et accéder à la base de données sous-jacente.
    </li>
    <li>
      <strong>Attaque de l'homme du milieu (MITM) :</strong>
      Une attaque de l'homme du milieu consiste à intercepter les
      communications entre deux parties légitimes afin d'espionner, de
      modifier ou de bloquer les échanges.
    </li>
  </ol>`,
  },
  {
    name: "data (balise)",
    definition: `La balise &lt;data&gt; est utilisée pour représenter une valeur
    numérique ou scientifique dans un document HTML. Elle peut être
    utilisée pour ajouter des métadonnées aux éléments HTML et pour
    faciliter la manipulation des données via des scripts.`,
    example: `&lt;p&gt;La population mondiale est d'environ &lt;data value="7800000000"&gt;&lt;/data&gt; habitants.&lt;/p&gt;`,
  },
  {
    name: "Data (données)",
    definition: `Les données représentent des informations stockées et utilisées
    dans un système informatique. Elles peuvent prendre différentes
    formes, telles que des textes, des nombres, des images, des
    fichiers, etc. Les données sont manipulées, traitées et analysées
    par les programmes informatiques pour effectuer des opérations et
    fournir des résultats.`,
    example: `const user = {
        name: 'John Doe',
        age: 30,
        email: 'john@example.com'
      };`,
  },
  {
    name: "del",
    definition: `La balise &lt;del&gt; est utilisée pour représenter du texte
    supprimé ou barré dans un document HTML. Elle est souvent utilisée
    pour indiquer des suppressions, des omissions ou des modifications
    dans le texte existant, notamment dans le contexte de la
    comparaison ou de la révision de texte.`,
    example: `&lt;del&gt;Texte supprimé&lt;/del&gt;`,
  },
  {
    name: "Dépendance",
    definition: `En développement logiciel, une dépendance est une relation entre
    deux éléments, où un élément dépend de l'autre pour fonctionner
    correctement. Dans le contexte des langages de programmation, une
    dépendance peut se référer à une bibliothèque, un module, ou une
    autre ressource externe utilisée dans un projet.`,
    example: `Utilisation d'une bibliothèque externe dans un projet, importation d'un module`,
  },
  {
    name: "Design pattern",
    definition: ` Un design pattern (patron de conception) est une solution
    réutilisable à un problème courant de conception de logiciel. Il
    fournit des directives pour structurer, organiser et résoudre
    efficacement les problèmes récurrents lors du développement
    logiciel. Les design patterns favorisent la maintenabilité, la
    flexibilité et la compréhension du code.`,
    example: `// Exemple du design pattern Singleton
    class Database {
      private static instance;
    private constructor() {
    // Initialisation de la connexion à la base de données
    }
    
    public static getInstance() {
    if (!this.instance) {
    this.instance = new Database();
    }
    return this.instance;
    }
    }`,
  },
  {
    name: "details, dialog, summary",
    definition: ` Ces balises sont utilisées pour créer des éléments interactifs de
    l'interface utilisateur, tels que des sections déroulantes (avec
    les balises details et summary) et des boîtes de dialogue modales
    (avec la balise dialog).`,
    example: `&lt;details&gt;
    &lt;summary&gt;Titre de la section&lt;/summary&gt;
    Contenu de la section
  &lt;/details&gt;
  
  &lt;dialog open&gt;
    &lt;p&gt;Contenu de la boîte de dialogue&lt;/p&gt;
    &lt;button&gt;Fermer&lt;/button&gt;
  &lt;/dialog&gt;`,
  },
  {
    name: "dfn",
    definition: `La balise &lt;dfn&gt; est utilisée pour indiquer la définition
    d'un terme dans un document HTML. Elle est souvent utilisée pour
    fournir une explication ou un contexte supplémentaire pour un
    terme qui peut ne pas être familier à tous les lecteurs.`,
    example: `&lt;dfn&gt;Terme à définir&lt;/dfn&gt;`,
  },
  {
    name: "direction",
    definition: `La propriété CSS "direction" est utilisée pour spécifier la
    direction de l'écriture du texte dans un élément. Elle détermine
    si le texte est écrit de gauche à droite (valeur par défaut) ou de
    droite à gauche pour les langues telles que l'arabe ou l'hébreu.`,
    example: `.arabic-text {
        direction: rtl;
      }`,
  },
  {
    name: "dispatch",
    definition: `Le terme "dispatch" fait référence à l'action de transmettre ou
    d'envoyer des événements ou des actions à des gestionnaires
    appropriés pour qu'ils soient traités. Cela peut se produire dans
    le contexte de la programmation, en particulier dans le
    développement d'applications ou de systèmes basés sur des
    événements.`,
    example: `// Dispatch d'un événement personnalisé
    const event = new CustomEvent('monEvenement', { detail: { message: 'Hello' } });
    document.dispatchEvent(event);`,
  },
  {
    name: "display",
    definition: `La propriété CSS "display" spécifie le type d'affichage utilisé
    pour un élément.`,
    example: `.element {
        display: flex;
      }`,
  },
  {
    name: "div",
    definition: ` La balise &lt;div&gt; est utilisée pour créer une division ou une
    section générique dans un document HTML. Elle est souvent utilisée
    comme un conteneur pour regrouper d'autres éléments HTML et
    appliquer des styles ou des fonctionnalités à ces éléments
    groupés.`,
    example: `&lt;div&gt;
    &lt;p&gt;Contenu du div&lt;/p&gt;
    &lt;img src="image.jpg" alt="Image"&gt;
  &lt;/div&gt;`,
  },
  {
    name: "dl, dt, dd",
    definition: `Les balises &lt;dl&gt;, &lt;dt&gt; et &lt;dd&gt; sont utilisées
    pour créer une liste de définitions dans un document HTML.
    &lt;dl&gt; est le conteneur principal, &lt;dt&gt; est utilisée
    pour définir le terme ou le nom, et &lt;dd&gt; est utilisée pour
    définir la description ou la signification du terme.`,
    example: `&lt;dl&gt;
    &lt;dt&gt;Terme 1&lt;/dt&gt;
    &lt;dd&gt;Description 1&lt;/dd&gt;
    &lt;dt&gt;Terme 2&lt;/dt&gt;
    &lt;dd&gt;Description 2&lt;/dd&gt;
  &lt;/dl&gt;`,
  },
  {
    name: "Doctrine",
    definition: `Doctrine est une bibliothèque ORM (Object-Relational Mapping) pour
    PHP. Elle permet de faciliter la gestion des données en
    fournissant une couche d'abstraction pour interagir avec la base
    de données. Doctrine permet de manipuler les données en utilisant
    des objets métier plutôt que des requêtes SQL directes,
    simplifiant ainsi le développement et la maintenance des
    applications.`,
    example: `use Doctrine\ORM\Mapping as ORM;
    /**
    
    @ORM\Entity
    @ORM\Table(name="users")
    */
    class User {
    // Propriétés et annotations ORM
    }`,
  },
  {
    name: "DOM (Document Object Model)",
    definition: `Le DOM (Document Object Model) est une interface de programmation
    pour les documents HTML et XML. Il représente la structure logique
    d'un document et permet aux programmes d'accéder et de manipuler
    le contenu, la structure et le style d'un document.`,
    example: `// Accéder à un élément par son ID
    const element = document.getElementById("myElement");
    // Modifier le contenu d'un élément
    element.innerHTML = "Nouveau contenu";
    
    // Ajouter une classe à un élément
    element.classList.add("highlight");`,
  },
  {
    name: "Doctype",
    definition: ` Le doctype est une déclaration placée au début d'un document HTML
    pour indiquer au navigateur quel type de document il est en train
    de traiter. Il définit également la version de HTML utilisée et
    permet au navigateur d'interpréter correctement le code HTML.`,
    example: `&lt;!DOCTYPE html&gt;`,
  },
  {
    name: "Élément",
    definition: `En HTML, un élément est une partie de la structure d'une page web
    qui est délimitée par une balise ouvrante et une balise fermante,
    ou une balise auto-fermante. Les éléments peuvent contenir du
    texte, des images, d'autres éléments et des attributs qui
    définissent leurs caractéristiques.`,
    example: `&lt;p&gt;Ceci est un paragraphe.&lt;/p&gt;`,
  },
  {
    name: "empty-cells",
    definition: `La propriété CSS "empty-cells" est utilisée pour spécifier la
    manière dont les cellules vides d'un tableau doivent être
    affichées.`,
    example: `table {
        empty-cells: hide;
      }`,
  },
  {
    name: "Entity",
    definition: ` Une "Entity" est une classe qui représente une entité métier dans
    un système de gestion de base de données relationnelle (SGBDR).
    Elle est utilisée pour définir la structure et les relations des
    tables de la base de données, ainsi que pour effectuer des
    opérations de manipulation des données.`,
    example: `/**
    * @Entity
    * @Table(name="users")
    */
   class User {
     /**
      * @Id
      * @GeneratedValue
      * @Column(type="integer")
      */
     private $id;
   /**
   
   @Column(type="string")
   */
   private $name;
   }`,
  },
  {
    name: "Événement",
    definition: `En programmation, un événement est un signal ou une notification
    générée par le système ou par l'utilisateur pour indiquer qu'une
    action ou un changement s'est produit. Les événements peuvent être
    associés à des éléments de l'interface utilisateur, tels que des
    clics de souris, des pressions de touches, des chargements de
    page, etc., et peuvent déclencher l'exécution de code spécifique,
    appelé gestionnaire d'événements.`,
    example: `document.getElementById("myButton").addEventListener("click", function() {
        console.log("Le bouton a été cliqué.");
      });`,
  },
  {
    name: "extract",
    definition: `La fonction extract est une fonction PHP qui est utilisée pour
    importer les variables d'un tableau associatif dans la table des
    symboles actuelle, ce qui permet d'accéder directement aux valeurs
    du tableau sans utiliser leurs clés.`,
    example: `$personne = array(
        'nom' => 'Dupont',
        'age' => 25,
        'ville' => 'Paris'
      );
      
      extract($personne);
      
      echo $nom; // Affiche 'Dupont'
      echo $age; // Affiche 25
      echo $ville; // Affiche 'Paris'`,
  },
  {
    name: "Faker",
    definition: `Faker est une bibliothèque PHP qui permet de générer des données
    fictives aléatoires. Elle est utile pour générer des jeux de
    données de test, des données de remplissage pour les bases de
    données ou pour simuler des données réalistes dans le
    développement d'applications. Faker fournit une API simple et
    flexible pour créer une variété de données telles que des noms,
    des adresses, des numéros de téléphone, des adresses email, etc.`,
    example: `$faker = \Faker\Factory::create();
    $name = $faker->name;
    $email = $faker->email;`,
  },
  {
    name: "figcaption, figure",
    definition: `Les balises &lt;figure&gt; et &lt;figcaption&gt; sont utilisées
    pour encapsuler une image ou un média avec une légende associée
    dans un document HTML. La balise &lt;figure&gt; est utilisée comme
    conteneur principal et la balise &lt;figcaption&gt; est utilisée
    pour définir la légende.`,
    example: `&lt;figure&gt;
    &lt;img src="image.jpg" alt="Image"&gt;
    &lt;figcaption&gt;Légende de l'image&lt;/figcaption&gt;
  &lt;/figure&gt;`,
  },
  {
    name: "filter",
    definition: ` La propriété CSS "filter" est utilisée pour appliquer des effets
    visuels, tels que des filtres de couleur, de flou ou de
    luminosité, à un élément.`,
    example: `.element {
        filter: grayscale(100%);
      }`,
  },
  {
    name: "Fixtures",
    definition: `Les "Fixtures" sont des données de test préconfigurées utilisées
    lors du développement ou du test d'une application. Elles
    permettent de peupler la base de données avec des données fictives
    et réalistes afin de simuler des conditions réelles et de vérifier
    le bon fonctionnement de l'application.`,
    example: `class UserFixtures implements FixtureInterface {
        public function load(ObjectManager $manager) {
          $user = new User();
          $user->setName('John Doe');
          $manager->persist($user);
          $manager->flush();
        }
      }`,
  },
  {
    name: "flexbox",
    definition: ` Flexbox est une méthode de disposition flexible en CSS qui permet
    de créer des mises en page réactives et adaptatives. Il utilise un
    système de conteneurs (éléments parent) et d'éléments enfants pour
    créer des designs flexibles et dynamiques.`,
    example: `.container {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .item {
      flex: 1;
      }`,
  },
  {
    name: "float",
    definition: ` La propriété CSS "float" spécifie que l'élément doit être placé le
    plus à gauche ou le plus à droite possible, et que le texte et les
    autres éléments doivent s'écouler autour de lui.`,
    example: `.element {
        float: left;
      }`,
  },
  {
    name: "fonction",
    definition: ` Une fonction est un bloc de code réutilisable qui effectue une
    tâche spécifique. Elle permet d'encapsuler une séquence
    d'instructions et de lui donner un nom, ce qui facilite son appel
    et sa réutilisation dans un programme. Les fonctions peuvent
    prendre des paramètres en entrée et renvoyer des valeurs en
    sortie.`,
    example: `function greet(name) {
        console.log('Hello, ' + name + '!');
      }
      greet('John');`,
  },
  {
    name: "font",
    definition: ` La propriété CSS "font" est une propriété raccourcie qui permet de
    définir plusieurs propriétés de police en une seule déclaration.
    Elle est utilisée pour spécifier la famille de police, la taille
    de police, le style de police et d'autres propriétés liées à la
    police.`,
    example: `.my-text {
        font: 16px/1.5 Arial, sans-serif;
      }`,
  },
  {
    name: "font-family",
    definition: `La propriété CSS "font-family" est utilisée pour spécifier la
    famille de polices utilisée pour afficher le texte dans un
    élément. Elle permet de définir plusieurs noms de polices
    préférées, classées par ordre de priorité, afin que le navigateur
    puisse choisir la première police disponible sur le système de
    l'utilisateur.`,
    example: `.my-text {
        font-family: Arial, sans-serif;
      }`,
  },
  {
    name: "font-size",
    definition: ` La propriété CSS "font-size" est utilisée pour spécifier la taille
    de la police utilisée pour afficher le texte dans un élément. Elle
    permet de définir la taille de police en pixels, en pourcentage,
    en em ou en d'autres unités de mesure.`,
    example: `.my-text {
        font-size: 16px;
      }`,
  },
  {
    name: "font-size-adjust",
    definition: ` La propriété CSS "font-size-adjust" est utilisée pour ajuster la
    taille de la police en fonction de la hauteur x des lettres
    majuscules dans une police de substitution, afin de maintenir la
    cohérence de l'apparence du texte lors du changement de police.`,
    example: `.my-text {
        font-size-adjust: 0.5;
      }`,
  },
  {
    name: "font-stretch",
    definition: ` La propriété CSS "font-stretch" est utilisée pour spécifier
    l'étirement ou la compression horizontal de la largeur des
    caractères dans une police de caractères. Elle permet de contrôler
    la largeur relative de la police, en utilisant des valeurs
    prédéfinies ou des pourcentages personnalisés.`,
    example: `.my-text {
        font-stretch: expanded;
      }`,
  },
  {
    name: "font-style",
    definition: `La propriété CSS "font-style" est utilisée pour spécifier le style
    de police utilisé pour afficher le texte dans un élément. Elle
    permet de rendre le texte en italique, en oblique ou de revenir au
    style de police normal.`,
    example: `.my-text {
        font-style: italic;
      }`,
  },
  {
    name: "font-variant",
    definition: `La propriété CSS "font-variant" est utilisée pour spécifier les
    variantes de police utilisées pour afficher le texte dans un
    élément. Elle permet de modifier l'apparence du texte en utilisant
    des variantes de police spécifiques, telles que les capitales
    petites-caps, les chiffres spéciaux ou d'autres styles de police.`,
    example: `.my-text {
        font-variant: small-caps;
      }`,
  },
  {
    name: "font-weight",
    definition: `La propriété CSS "font-weight" est utilisée pour spécifier
    l'épaisseur ou la graisse de la police utilisée pour afficher le
    texte dans un élément. Elle permet de rendre le texte plus gras ou
    plus fin en utilisant des valeurs prédéfinies ou des valeurs
    numériques.`,
    example: `.my-text {
        font-weight: bold;
      }`,
  },
  {
    name: "form, input, label, textarea, select, option, optgroup, button, fieldset, legend, datalist, progress, output, mete",
    definition: ` Ces balises sont utilisées pour créer des formulaires interactifs
    dans un document HTML, permettant aux utilisateurs de saisir et de
    soumettre des données.`,
    example: `&lt;form action="/submit" method="post"&gt;
    &lt;label for="name"&gt;Nom :&lt;/label&gt;
    &lt;input type="text" id="name" name="name"&gt;
  
    &lt;label for="email"&gt;Email :&lt;/label&gt;
    &lt;input type="email" id="email" name="email"&gt;
  
    &lt;input type="submit" value="Envoyer"&gt;
  &lt;/form&gt;`,
  },
  {
    name: "footer",
    definition: `La balise &lt;footer&gt; représente le pied de page d'une section
    ou d'une page. Elle contient généralement des informations de
    droits d'auteur, des liens vers des pages connexes, des
    coordonnées de contact, etc.`,
    example: `&lt;footer&gt;
    &lt;p&gt;© 2023 Mon Site. Tous droits réservés.&lt;/p&gt;
    &lt;nav&gt;
      &lt;a href="#"&gt;Accueil&lt;/a&gt;
      &lt;a href="#"&gt;À propos&lt;/a&gt;
      &lt;a href="#"&gt;Contact&lt;/a&gt;
    &lt;/nav&gt;
  &lt;/footer&gt;`,
  },
  {
    name: "Gestion de version",
    definition: ` La gestion de version, également appelée contrôle de version, est
    le processus de suivi et de gestion des modifications apportées à
    un ensemble de fichiers au fil du temps. Elle permet de conserver
    un historique des modifications, de faciliter la collaboration
    entre les développeurs et de revenir à des versions antérieures si
    nécessaire.`,
    example: `Git, SVN (Subversion), Mercurial, CVS`,
  },
  {
    name: "Grid",
    definition: ` CSS Grid est un système de disposition bidimensionnel en CSS qui
    permet de créer des mises en page complexes et flexibles. Il
    utilise une grille de lignes et de colonnes pour organiser les
    éléments de manière précise et réactive.`,
    example: `.container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
      }
      .item {
      grid-column: span 2;
      }`,
  },
  {
    name: "h1-h6",
    definition: `Les balises &lt;h1&gt; à &lt;h6&gt; sont utilisées pour définir
    les titres et sous-titres dans un document HTML. &lt;h1&gt; est le
    titre le plus important, tandis que &lt;h6&gt; est le moins
    important. Ces balises fournissent une structure hiérarchique au
    contenu et ont également un impact sur l'accessibilité et le
    référencement.`,
    example: `&lt;h1&gt;Titre principal&lt;/h1&gt;
    &lt;h2&gt;Sous-titre&lt;/h2&gt;
    &lt;h3&gt;Sous-sous-titre&lt;/h3&gt;`,
  },
  {
    name: "handler",
    definition: ` Un handler, ou gestionnaire, est une fonction ou un morceau de
    code responsable de la gestion d'événements ou d'erreurs
    spécifiques. Il est généralement attaché à un événement ou à une
    condition et est invoqué lorsque cet événement se produit ou que
    cette condition est rencontrée. Les handlers sont utilisés pour
    traiter des actions spécifiques en réponse à des événements ou des
    erreurs.`,
    example: `document.addEventListener("click", function(event) {
        console.log("Clic détecté !");
      });`,
  },
  {
    name: "head",
    definition: ` La balise &lt;head&gt; est utilisée pour définir l'en-tête d'un
    document HTML. Elle contient des éléments qui ne sont pas affichés
    directement dans la page, tels que le titre, les liens vers des
    feuilles de style, les scripts, les métadonnées, etc.`,
    example: `&lt;head&gt;
    &lt;title&gt;Titre de la page&lt;/title&gt;
    &lt;link rel="stylesheet" href="style.css"&gt;
  &lt;/head&gt;`,
  },
  {
    name: "header",
    definition: `La balise &lt;header&gt; représente l'en-tête d'une section ou
    d'une page. Elle peut contenir des éléments tels que le logo, le
    titre, la navigation, etc., généralement situés en haut de la
    page.`,
    example: `&lt;header&gt;
    &lt;h1&gt;Mon Site&lt;/h1&gt;
    &lt;nav&gt;
      &lt;a href="#"&gt;Accueil&lt;/a&gt;
      &lt;a href="#"&gt;À propos&lt;/a&gt;
      &lt;a href="#"&gt;Contact&lt;/a&gt;
    &lt;/nav&gt;
  &lt;/header&gt;`,
  },
  {
    name: "Headers",
    definition: ` Les headers, ou en-têtes, font partie des informations transmises
    dans une requête HTTP ou une réponse HTTP. Ils contiennent des
    métadonnées sur la requête ou la réponse, telles que le type de
    contenu, les cookies, les informations de l'utilisateur, etc. Les
    headers sont utilisés pour communiquer des informations
    supplémentaires entre le client et le serveur.`,
    example: `Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8`,
  },
  {
    name: "height",
    definition: `La propriété CSS "height" spécifie la hauteur d'un élément.`,
    example: `.element {
        height: 200px;
      }`,
  },
  {
    name: "Héritage (en POO)",
    definition: ` En programmation orientée objet (POO), l'héritage est un mécanisme
    qui permet à une classe d'hériter les propriétés et les
    comportements d'une autre classe appelée classe parente ou classe
    de base. La classe qui hérite est appelée classe enfant ou classe
    dérivée. L'héritage permet de créer une relation hiérarchique
    entre les classes, où les classes enfant peuvent accéder et
    étendre les fonctionnalités de la classe parente.`,
    example: `class Animal {
        constructor(name) {
          this.name = name;
        }
      
        eat() {
          console.log(this.name + ' mange.');
        }
      }
      
      class Cat extends Animal {
        constructor(name, breed) {
          super(name);
          this.breed = breed;
        }
      
        meow() {
          console.log(this.name + ' miaule.');
        }
      }
      
      const myCat = new Cat('Misty', 'Persan');
      myCat.eat(); // Affiche "Misty mange."
      myCat.meow(); // Affiche "Misty miaule."`,
  },
  {
    name: "Hook",
    definition: `En React, un Hook est une fonction spéciale qui permet de
    "s'accrocher" à l'état et au cycle de vie d'un composant
    fonctionnel. Les Hooks permettent d'ajouter des fonctionnalités,
    de gérer l'état local et d'effectuer des effets secondaires dans
    un composant fonctionnel, sans avoir besoin de transformer le
    composant en une classe.`,
    example: `import React, { useState } from 'react';
      
    function Counter() {
      const [count, setCount] = useState(0);
    
      const increment = () => {
        setCount(count + 1);
      };
    
      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={increment}>Increment</button>
        </div>
      );
    }`,
  },
  {
    name: "hr",
    definition: `La balise &lt;hr&gt; est utilisée pour insérer une ligne
    horizontale dans un document HTML. Elle est souvent utilisée pour
    séparer visuellement des sections ou des éléments dans une page.`,
    example: `&lt;hr&gt;`,
  },
  {
    name: "html",
    definition: ` La balise 'html' représente l'élément racine d'un document HTML.
    Elle englobe tous les autres éléments du document, y compris la
    balise 'head' et la balise 'body'.`,
    example: `&lt;!DOCTYPE html&gt;
    &lt;html&gt;
      &lt;head&gt;
        &lt;title&gt;Titre de la page&lt;/title&gt;
      &lt;/head&gt;
      &lt;body&gt;
        &lt;h1&gt;Contenu de la page&lt;/h1&gt;
      &lt;/body&gt;
    &lt;/html&gt;`,
  },
  {
    name: "i",
    definition: ` La balise &lt;i&gt; est utilisée pour mettre en évidence un texte
    dans un document HTML. Traditionnellement, elle était utilisée
    pour afficher le texte en italique, mais son utilisation actuelle
    est plus générale et dépend de la signification donnée au texte.`,
    example: `&lt;i&gt;Texte en italique&lt;/i&gt;`,
  },
  {
    name: "IDE",
    definition: `IDE (Integrated Development Environment) est un environnement de
    développement intégré qui regroupe des outils et fonctionnalités
    pour faciliter le développement de logiciels. Il comprend
    généralement un éditeur de code, un débogueur, un compilateur, un
    gestionnaire de projets et d'autres fonctionnalités de
    productivité pour les développeurs.`,
    example: `Visual Studio Code, Eclipse, IntelliJ IDEA, Xcode`,
  },
  {
    name: "img, picture, source, video, audio, track, iframe, object, param, embed, map, area, svg, math",
    definition: `Ces balises sont utilisées pour intégrer et afficher des médias
    (images, vidéos, fichiers audio) et des éléments interactifs dans
    un document HTML.`,
    example: `&lt;img src="image.jpg" alt="Image"&gt;
    &lt;video src="video.mp4" controls&gt;&lt;/video&gt;
    &lt;audio src="audio.mp3" controls&gt;&lt;/audio&gt;`,
  },
  {
    name: "!important",
    definition: ` Le mot-clé CSS "!important" est utilisé pour donner la priorité à
    une règle CSS spécifique et la rendre non remplaçable par d'autres
    règles.`,
    example: `.element {
        color: red !important;
      }`,
  },
  {
    name: "Injection SQL",
    definition: ` L'injection SQL est une technique d'attaque utilisée pour
    exploiter les vulnérabilités des applications web qui
    interagissent avec une base de données. Elle consiste à insérer du
    code SQL malveillant dans une requête afin de compromettre la
    sécurité de la base de données.`,
    example: `SELECT * FROM users WHERE username = 'admin' OR '1'='1'`,
  },
  {
    name: "ins",
    definition: ` La balise &lt;ins&gt; est utilisée pour représenter du texte
    inséré dans un document HTML. Elle est souvent utilisée pour
    indiquer des modifications ou des ajouts apportés au texte
    existant, notamment dans le contexte de la comparaison ou de la
    révision de texte.`,
    example: `&lt;ins&gt;Texte inséré&lt;/ins&gt;`,
  },
  {
    name: "Itération (boucle)",
    definition: ` L'itération, également appelée boucle, est un processus de
    répétition d'un bloc de code plusieurs fois. Elle permet
    d'exécuter une série d'instructions de manière répétée jusqu'à ce
    qu'une condition spécifiée soit remplie. Les boucles sont
    utilisées pour automatiser des tâches répétitives et pour traiter
    des collections de données.`,
    example: `for (var i = 0; i < 5; i++) {
        console.log(i);
      }`,
  },
  {
    name: "Interface",
    definition: ` Une interface, en programmation, fait référence à un ensemble de
    méthodes et de propriétés qui définissent les actions et les
    comportements d'un objet ou d'une classe. Elle permet de définir
    un contrat que les classes doivent respecter en implémentant les
    méthodes et les propriétés spécifiées par l'interface.`,
    example: `public interface Drawable {
        void draw();
        void resize(int width, int height);
      }`,
  },
  {
    name: "Jointure SQL",
    definition: ` La jointure SQL est une opération permettant de combiner les
    enregistrements de deux ou plusieurs tables en utilisant une
    relation commune entre elles. Elle est utilisée pour obtenir des
    résultats combinés et plus complets à partir de différentes
    sources de données.`,
    example: `SELECT * FROM table1
    JOIN table2 ON table1.column = table2.column;
    
    SELECT * FROM customers
    INNER JOIN orders ON customers.customer_id = orders.customer_id;
    
    SELECT * FROM employees
    LEFT JOIN departments ON employees.department_id = departments.department_id;
    
    SELECT * FROM products
    RIGHT JOIN categories ON products.category_id = categories.category_id;`,
  },
  {
    name: "JSON",
    definition: ` JSON (JavaScript Object Notation) est un format de données léger
    et facile à lire et à écrire. Il est largement utilisé pour
    échanger des données entre un serveur et un client web, ainsi que
    pour le stockage et le transfert de données. JSON est basé sur la
    notation d'objet JavaScript et est indépendant du langage.`,
    example: `{
        "nom": "John Doe",
        "age": 30,
        "ville": "Paris"
      }`,
  },
  {
    name: "kdb",
    definition: ` La balise &lt;kdb&gt; est utilisée pour représenter une entrée
    clavier dans un document HTML. Elle est souvent utilisée pour
    indiquer les touches à appuyer ou les commandes à saisir dans des
    tutoriels, des documentations techniques, etc.`,
    example: `&lt;kdb&gt;Ctrl + C&lt;/kdb&gt;`,
  },
  {
    name: "Keyframes",
    definition: `Les keyframes sont utilisés en CSS pour définir des étapes
    d'animation à travers lesquelles un élément passe de son état
    initial à son état final. Ils permettent de contrôler et d'animer
    les propriétés d'un élément à différents moments de l'animation.`,
    example: `@keyframes myAnimation {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 0.5;
          transform: scale(1.2);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }
      .element {
      animation: myAnimation 2s infinite;
      }`,
  },
  {
    name: "left",
    definition: `La propriété CSS "left" spécifie la distance entre le bord gauche
    d'un élément et le bord gauche de son conteneur.`,
    example: `.element {
        position: absolute;
        left: 50px;
      }`,
  },
  {
    name: "letter-spacing",
    definition: `La propriété CSS "letter-spacing" est utilisée pour spécifier
    l'espacement entre les caractères d'un texte dans un élément. Elle
    permet d'ajuster l'espacement horizontal des caractères, en
    augmentant ou en diminuant la distance entre eux.`,
    example: `.my-text {
        letter-spacing: 2px;
      }`,
  },
  {
    name: "line-break",
    definition: ` La propriété CSS "line-break" est utilisée pour spécifier le
    comportement de saut de ligne d'un texte long dans un élément.
    Elle permet de contrôler la façon dont les lignes de texte sont
    enveloppées ou coupées lorsque la largeur de l'élément est
    insuffisante pour contenir tout le texte.`,
    example: `.my-text {
        line-break: strict;
      }`,
  },
  {
    name: "line-height",
    definition: ` La propriété CSS "line-height" est utilisée pour spécifier la
    hauteur de ligne d'un élément. Elle détermine l'espace vertical
    entre les lignes de texte et affecte également l'alignement
    vertical du texte à l'intérieur de l'élément.`,
    example: `.my-text {
        line-height: 1.5;
      }`,
  },
  {
    name: "link",
    definition: ` La balise 'link' est utilisée pour relier un document HTML à une
    ressource externe. Elle est couramment utilisée pour lier une
    feuille de style CSS, une icône de site, une police personnalisée,
    etc.`,
    example: `&lt;head&gt;
    &lt;link rel="stylesheet" href="styles.css"&gt;
  &lt;/head&gt;`,
  },
  {
    name: "Listener / Subscriber",
    definition: `Les "Listeners" et "Subscribers" sont des composants utilisés dans
    les architectures de type "Observer" pour gérer les événements
    dans une application. Ils écoutent les événements spécifiques et
    réagissent en exécutant des actions définies. Les listeners sont
    souvent utilisés pour gérer des événements spécifiques, tandis que
    les subscribers permettent de regrouper plusieurs listeners.`,
    example: `class UserListener {
        public function onUserCreated(UserCreatedEvent $event) {
          // Actions à exécuter lorsque l'événement "UserCreated" est déclenché <br/> 
          class UserSubscriber implements EventSubscriberInterface {
            public static function getSubscribedEvents() {
              return [
                UserCreatedEvent::class => 'onUserCreated',
                UserDeletedEvent::class => 'onUserDeleted',
              ];
            }
          public function onUserCreated(UserCreatedEvent $event) {
          // Actions à exécuter lorsque l'événement "UserCreated" est déclenché
          }
          
          public function onUserDeleted(UserDeletedEvent $event) {
          // Actions à exécuter lorsque l'événement "UserDeleted" est déclenché
          }
          }
        }
      }`,
  },
  {
    name: "list-style-image",
    definition: `La propriété CSS list-style-image permet de spécifier une image
    personnalisée à utiliser comme marqueur pour les éléments de
    liste.`,
    example: `ul {
        list-style-image: url('marker.png');
      }`,
  },
  {
    name: "list-style-position",
    definition: `La propriété CSS list-style-position permet de spécifier la
    position du marqueur par rapport au contenu de l'élément de liste.`,
    example: `ul {
        list-style-position: inside;
      }`,
  },
  {
    name: "list-style-type",
    definition: ` La propriété CSS list-style-type permet de spécifier le type de
    marqueur à utiliser pour les éléments de liste.`,
    example: `ul {
        list-style-type: disc;
      }`,
  },
  {
    name: "list-style",
    definition: ` La propriété CSS list-style est une propriété raccourcie
    permettant de définir les propriétés list-style-type,
    list-style-position et list-style-image en une seule déclaration.`,
    example: `ul {
        list-style: square inside url('marker.png');
      }`,
  },
  {
    name: "loader",
    definition: ` Un "loader" est un élément visuel utilisé pour indiquer à
    l'utilisateur que le contenu de la page est en cours de
    chargement. Il est souvent représenté sous forme d'une animation
    ou d'une icône tournante. Les loaders sont couramment utilisés
    lorsqu'une application web effectue des requêtes asynchrones ou
    traite de grandes quantités de données afin de fournir une
    indication visuelle de l'activité en cours.`,
    example: `&lt;div class="loader"&gt;&lt;/div&gt;
    .loader {
    border: 8px solid #f3f3f3;
    border-top: 8px solid #3498db;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 2s linear infinite;
    }
    
    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    }`,
  },
  {
    name: "main",
    definition: `La balise &lt;main&gt; représente le contenu principal d'une
    section ou d'une page. Elle doit être unique et ne doit pas être
    imbriquée à l'intérieur d'autres éléments tels que &lt;header&gt;,
    &lt;footer&gt; ou &lt;article&gt;. Le contenu principal d'une
    page, tel que les articles, les sections ou les éléments centraux,
    devrait être placé à l'intérieur de la balise &lt;main&gt;.`,
    example: `&lt;main&gt;
    &lt;h1&gt;Contenu principal&lt;/h1&gt;
    &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&lt;/p&gt;
  &lt;/main&gt;`,
  },
  {
    name: "margin",
    definition: `La propriété CSS "margin" spécifie la marge d'un élément.`,
    example: `.element {
        margin: 10px;
      }`,
  },
  {
    name: "margin-top",
    definition: ` La propriété CSS "margin-top" spécifie la marge supérieure d'un
    élément.`,
    example: `.element {
        margin-top: 20px;
      }`,
  },
  {
    name: "margin-right",
    definition: `La propriété CSS "margin-right" spécifie la marge droite d'un
    élément.`,
    example: `.element {
        margin-right: 10px;
      }`,
  },
  {
    name: "margin-left",
    definition: `La propriété CSS "margin-left" spécifie la marge gauche d'un
    élément.`,
    example: `.element {
        margin-left: 10px;
      }`,
  },
  {
    name: "mark",
    definition: ` La balise &lt;mark&gt; est utilisée pour mettre en évidence ou
    surligner une partie du texte dans un document HTML. Elle est
    souvent utilisée pour attirer l'attention de l'utilisateur sur un
    texte spécifique.`,
    example: `&lt;mark&gt;Texte surligné&lt;/mark&gt;`,
  },
  {
    name: "marker-offset",
    definition: ` La propriété CSS marker-offset permet de spécifier l'espacement
    entre le marqueur d'un élément de liste et son contenu.`,
    example: `ul {
        marker-offset: 10px;
      }`,
  },
  {
    name: "marks",
    definition: ` La propriété CSS "marks" est utilisée pour spécifier si les
    marques de coupe (crop marks) et les marques de repère (cross
    marks) doivent être affichées lors de l'impression d'une page.`,
    example: `@page {
        marks: crop cross;
      }`,
  },
  {
    name: "max-height",
    definition: ` La propriété CSS "max-height" spécifie la hauteur maximale d'un
    élément.`,
    example: `.element {
        max-height: 300px;
      }`,
  },
  {
    name: "max-width",
    definition: `La propriété CSS "max-width" spécifie la largeur maximale d'un
    élément.`,
    example: `.element {
        max-width: 500px;
      }`,
  },
  {
    name: "MCD",
    definition: `Le MCD (Modèle Conceptuel de Données) est une représentation
    graphique des concepts et des relations entre les entités d'un
    système d'information. Il est utilisé dans la modélisation des
    bases de données pour définir la structure logique des données et
    leurs interactions.`,
    example: `Entité : Utilisateur
    Attributs : ID, Nom, Email`,
  },
  {
    name: "Mécanisme asynchrone",
    definition: ` Un mécanisme asynchrone est une méthode de traitement dans
    laquelle les tâches sont exécutées de manière indépendante et non
    bloquante. Cela permet à un programme ou à une application de
    continuer à fonctionner sans attendre la fin d'une opération
    asynchrone, améliorant ainsi l'efficacité et la réactivité.`,
    example: `fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data));`,
  },
  {
    name: "Media Queries",
    definition: `Les media queries sont utilisées en CSS pour appliquer des styles
    différents en fonction des caractéristiques du périphérique et de
    l'affichage, telles que la taille de l'écran, l'orientation, la
    résolution et bien d'autres.`,
    example: `@media screen and (max-width: 768px) {
        /* Styles appliqués aux écrans d'une largeur maximale de 768px */
        body {
          font-size: 14px;
        }
      }`,
  },
  {
    name: "meta",
    definition: `La balise &lt;meta&gt; est utilisée pour spécifier des métadonnées
    sur un document HTML. Ces métadonnées fournissent des informations
    sur la page, telles que l'encodage des caractères, la description,
    les mots-clés, etc. Les balises &lt;meta&gt; ne sont pas affichées
    à l'utilisateur, mais sont utilisées par les navigateurs et les
    moteurs de recherche.`,
    example: `&lt;meta charset="UTF-8"&gt;`,
  },
  {
    name: "Méthode",
    definition: `En programmation, une méthode est une fonction associée à un objet
    ou à une classe. Elle représente un comportement ou une action
    spécifique que l'objet ou la classe est capable d'effectuer. Les
    méthodes sont utilisées pour encapsuler la logique et les
    opérations liées à un objet ou à une classe.`,
    example: `class Voiture {
      constructor(marque, modèle) {
        this.marque = marque;
        this.modèle = modèle;
      }
    démarrer() {
    console.log("La voiture démarre !");
    }
    }`,
  },
  {
    name: "Méthode AGILE",
    definition: ` La méthode Agile est une approche de gestion de projet basée sur
    des principes de flexibilité, de collaboration et d'adaptation
    continue. Elle se concentre sur la livraison de fonctionnalités de
    manière itérative et incrémentale, en favorisant une communication
    régulière entre les membres de l'équipe de développement et les
    parties prenantes du projet. L'objectif principal de la méthode
    Agile est de répondre rapidement aux changements et de s'adapter
    aux besoins changeants du projet, tout en maintenant un haut
    niveau de qualité.`,
    example: `Une équipe de développement logiciel utilise la méthode Agile pour développer une application web. Au lieu de planifier et de concevoir l'ensemble de l'application dès le début, l'équipe divise le projet en petites itérations appelées "sprints". À la fin de chaque sprint, l'équipe présente une version fonctionnelle de l'application, recueille les commentaires des utilisateurs et ajuste les prochaines itérations en conséquence. Cette approche permet à l'équipe de s'adapter rapidement aux changements, d'optimiser la satisfaction des utilisateurs et d'améliorer continuellement l'application.`,
  },
  {
    name: "middleware",
    definition: `En développement logiciel, un middleware est une couche
    intermédiaire entre le système d'exploitation ou le framework et
    l'application. Il s'agit d'un composant logiciel qui permet
    d'ajouter des fonctionnalités supplémentaires, de gérer les
    requêtes et les réponses, et d'effectuer des opérations de
    traitement spécifiques.`,
    example: `const express = require('express');
    const app = express();
    app.use(middlewareFunction);
    
    app.get('/', (req, res) => {
    // Traitement de la requête
    res.send('Hello, world!');
    });
    
    function middlewareFunction(req, res, next) {
    // Traitement du middleware
    console.log('Middleware executed');
    next();
    }`,
  },
  {
    name: "min-height",
    definition: `La propriété CSS "min-height" spécifie la hauteur minimale d'un
    élément.`,
    example: `.element {
      min-height: 100px;
    }`,
  },
  {
    name: "min-width",
    definition: ` La propriété CSS "min-width" spécifie la largeur minimale d'un
    élément.`,
    example: `.element {
      min-width: 200px;
    }`,
  },
  {
    name: "MLD",
    definition: ` Le MLD (Modèle Logique de Données) est une représentation
    intermédiaire entre le modèle conceptuel (MCD) et le modèle
    physique (MPD). Il décrit les tables, les colonnes, les relations,
    les clés primaires, les clés étrangères, etc., sans prendre en
    compte les détails d'implémentation spécifiques à une base de
    données.`,
    example: `Table : Utilisateur
    Colonnes : ID (int), Nom (varchar), Email (varchar)`,
  },
  {
    name: "Mobile-first",
    definition: `Mobile-first est une approche de conception et de développement
    web qui consiste à créer d'abord une version optimisée pour les
    appareils mobiles, puis à ajouter des fonctionnalités et des
    styles supplémentaires pour les appareils de bureau et les écrans
    plus larges.`,
    example: `@media screen and (min-width: 768px) {
      /* Styles pour les appareils de bureau */
    }
    
    @media screen and (max-width: 767px) {
      /* Styles pour les appareils mobiles */
    }`,
  },
  {
    name: "Model",
    definition: ` En développement logiciel, le terme "Model" fait référence à la
    partie du modèle de conception MVC (Modèle-Vue-Contrôleur) qui
    représente les données et la logique métier d'une application. Le
    modèle est responsable de la manipulation, de la validation et de
    la persistance des données.`,
    example: `class User {
      // Propriétés du modèle
      private $id;
      private $name;
    // Méthodes du modèle
    public function getName() {
    return $this->name;
    }
    
    public function setName($name) {
    $this->name = $name;
    }
    }`,
  },
  {
    name: "MPD",
    definition: ` Le MPD (Modèle Physique de Données) est une représentation
    détaillée des données dans une base de données, incluant les
    tables, les colonnes, les contraintes, les clés primaires, les
    clés étrangères, etc. Il traduit le modèle conceptuel (MCD) en une
    structure physique prête à être implémentée dans un système de
    gestion de bases de données.`,
    example: `Table : Utilisateur
    Colonnes : ID (int), Nom (varchar), Email (varchar)`,
  },
  {
    name: "MVC (Modèle-Vue-Contrôleur)",
    definition: `MVC est un modèle d'architecture logicielle largement utilisé dans
    le développement d'applications web. Il divise une application en
    trois composants principaux : le Modèle, la Vue et le Contrôleur.
    Chaque composant a un rôle distinct : <br/>  <ul>
    <li>
      <strong>Modèle :</strong> Représente les données et la logique
      métier de l'application.
    </li>
    <li>
      <strong>Vue :</strong> Gère l'affichage des données et interagit
      avec l'utilisateur.
    </li>
    <li>
      <strong>Contrôleur :</strong> Traite les actions de
      l'utilisateur, met à jour le modèle et contrôle le flux de
      l'application.
    </li>
  </ul>`,
    example: `------------------------        ------------------------        ------------------------
    |       Modèle        |        |          Vue            |        |   Contrôleur        |
    |---------------------|        |-------------------------|        |---------------------|
    |      Données        |        |        Affichage         |        |    Gestion Actions  |
    |      Logique        |        |     Interaction Utilisateur    |        |    Mise à jour du Modèle   |
    ------------------------        ------------------------        ------------------------`,
  },
  {
    name: "nav",
    definition: `La balise &lt;nav&gt; est utilisée pour représenter une section de
    navigation dans un document HTML. Elle est utilisée pour regrouper
    les liens de navigation tels que les menus, les listes de
    navigation, etc. Lorsqu'elle est utilisée correctement, elle
    permet aux utilisateurs de naviguer plus facilement à travers le
    site.`,
    example: `&lt;nav&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href="#accueil"&gt;Accueil&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#services"&gt;Services&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#contact"&gt;Contact&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/nav&gt;`,
  },
  {
    name: "ODM (Object-Document Mapping)",
    definition: ` ODM (Object-Document Mapping) est une technique de programmation
    utilisée dans les applications qui utilisent une base de données
    NoSQL (comme MongoDB). Elle permet de faire correspondre les
    objets du code source avec les documents de la base de données,
    facilitant ainsi leur manipulation et leur persistance.`,
    example: `const user = new User({ name: 'John', age: 25 });
    user.save();`,
  },
  {
    name: "ol, ul, li",
    definition: ` Les balises &lt;ol&gt;, &lt;ul&gt; et &lt;li&gt; sont utilisées
    pour créer des listes dans un document HTML. &lt;ol&gt; est
    utilisée pour une liste ordonnée (numérotée), &lt;ul&gt; est
    utilisée pour une liste non ordonnée (à puces) et &lt;li&gt; est
    utilisée pour les éléments de la liste.`,
    example: `&lt;ol&gt;
    &lt;li&gt;Élément 1&lt;/li&gt;
    &lt;li&gt;Élément 2&lt;/li&gt;
    &lt;li&gt;Élément 3&lt;/li&gt;
  &lt;/ol&gt;
  
  &lt;ul&gt;
    &lt;li&gt;Élément A&lt;/li&gt;
    &lt;li&gt;Élément B&lt;/li&gt;
    &lt;li&gt;Élément C&lt;/li&gt;
  &lt;/ul&gt;`,
  },
  {
    name: "opacity",
    definition: ` La propriété CSS "opacity" est utilisée pour contrôler le degré de
    transparence d'un élément, où une valeur de 0 signifie
    complètement transparent et une valeur de 1 signifie complètement
    opaque.`,
    example: `.element {
      opacity: 0.5;
    }`,
  },
  {
    name: "ORM",
    definition: `ORM (Object-Relational Mapping) est une technique de programmation
    qui permet de faire le lien entre les objets d'une application et
    les tables d'une base de données relationnelle. Il facilite
    l'accès et la manipulation des données en fournissant une
    interface orientée objet pour interagir avec la base de données.`,
    example: `const user = new User();
    user.firstName = "John";
    user.lastName = "Doe";
    user.email = "john.doe@example.com";
    
    // Enregistrer l'utilisateur dans la base de données
    user.save();
    
    // Récupérer tous les utilisateurs
    const users = User.findAll();
    
    // Modifier un utilisateur
    user.lastName = "Smith";
    user.save();
    
    // Supprimer un utilisateur
    user.delete();`,
  },
  {
    name: "orphans",
    definition: ` La propriété CSS "orphans" est utilisée pour spécifier le nombre
    minimum de lignes qui doivent être laissées à la fin d'un élément
    lorsqu'il est fractionné en plusieurs pages.`,
    example: `p {
      orphans: 2;
    }`,
  },
  {
    name: "outline",
    definition: ` La propriété CSS "outline" est une propriété raccourcie qui permet
    de définir simultanément le style, la largeur et la couleur du
    contour autour d'un élément.`,
    example: `div {
      outline: solid 2px red;
    }`,
  },
  {
    name: "outline-color",
    definition: ` La propriété CSS "outline-color" est utilisée pour définir la
    couleur de l'outline (contour) d'un élément HTML. L'outline est
    une ligne qui entoure un élément, généralement utilisée pour
    mettre en évidence un élément lorsqu'il est sélectionné ou
    survolé. Cette propriété permet de spécifier la couleur de
    l'outline en utilisant les mêmes formats que la propriété "color".`,
    example: `a:hover {
      outline-color: blue;
    }`,
  },
  {
    name: "outline-style",
    definition: ` La propriété CSS "outline-style" définit le style de contour
    autour d'un élément.`,
    example: `div {
      outline-style: dashed;
    }`,
  },
  {
    name: "outline-width",
    definition: ` La propriété CSS "outline-width" définit la largeur du contour
    autour d'un élément.`,
    example: `div {
      outline-width: 2px;
    }`,
  },
  {
    name: "overflow",
    definition: `La propriété CSS "overflow" spécifie comment gérer le dépassement
    du contenu dans les directions horizontale et verticale.`,
    example: `.element {
      overflow: hidden;
    }`,
  },
  {
    name: "overflow-x",
    definition: `La propriété CSS "overflow-x" spécifie comment gérer le
    dépassement du contenu dans la direction horizontale.`,
    example: `.element {
      overflow-x: scroll;
    }`,
  },
  {
    name: "overflow-y",
    definition: `La propriété CSS "overflow-y" spécifie comment gérer le
    dépassement du contenu dans la direction verticale.`,
    example: `.element {
      overflow-y: auto;
    }`,
  },
  {
    name: "OWASP",
    definition: `OWASP (Open Web Application Security Project) est une communauté
    mondiale dédiée à la sécurité des applications web. Elle fournit
    des ressources, des outils, des recommandations et des bonnes
    pratiques pour aider les développeurs à sécuriser leurs
    applications web contre les vulnérabilités et les attaques.`,
    example: `OWASP Top 10 - Liste des 10 principales vulnérabilités de sécurité des applications web`,
  },
  {
    name: "p",
    definition: `La balise &lt;p&gt; est utilisée pour définir un paragraphe de
    texte dans un document HTML. Elle est couramment utilisée pour
    séparer et structurer le texte en paragraphes.`,
    example: `&lt;p&gt;Ceci est un paragraphe.&lt;/p&gt;`,
  },
  {
    name: "padding",
    definition: ` La propriété CSS "padding" spécifie la zone de remplissage autour
    du contenu d'un élément.`,
    example: `.element {
      padding: 10px;
    }`,
  },
  {
    name: "padding-bottom",
    definition: `La propriété CSS "padding-bottom" définit l'espace vide (marge
      interne) en bas du contenu d'un élément. Cela crée un espace entre
      le contenu de l'élément et sa bordure inférieure.`,
    example: `.example {
      padding-bottom: 10px;
    }`,
  },
  {
    name: "padding-left",
    definition: ` La propriété CSS "padding-left" spécifie le remplissage gauche
    d'un élément.`,
    example: `.element {
      padding-left: 10px;
    }`,
  },
  {
    name: "padding-right",
    definition: ` La propriété CSS "padding-right" définit l'espace vide (marge
      interne) à droite du contenu d'un élément. Cela crée un espace
      entre le contenu de l'élément et sa bordure droite.`,
    example: `.example {
      padding-right: 20px;
    }`,
  },
  {
    name: "padding-top",
    definition: ` La propriété CSS "padding-top" spécifie le remplissage supérieur
    d'un élément.`,
    example: `.element {
      padding-top: 20px;
    }`,
  },
  {
    name: "page",
    definition: ` La propriété CSS "page" est utilisée pour définir les
    caractéristiques d'une boîte de page à l'intérieur d'un document
    CSS.`,
    example: `@page {
      size: A4;
      margin: 2cm;
    }`,
  },
  {
    name: "page-break-before",
    definition: ` La propriété CSS "page-break-before" est utilisée pour spécifier
    si un saut de page doit être effectué avant un élément lors de
    l'impression.`,
    example: `h1 {
      page-break-before: always;
    }`,
  },
  {
    name: "page-break-after",
    definition: `  La propriété CSS "page-break-after" est utilisée pour spécifier si
    un saut de page doit être effectué après un élément lors de
    l'impression.`,
    example: `h2 {
      page-break-after: avoid;
    }`,
  },
  {
    name: "page-break-inside",
    definition: `La propriété CSS "page-break-inside" est utilisée pour spécifier
    si un élément peut être fractionné sur plusieurs pages lors de
    l'impression ou si celui-ci doit rester sur une seule page.`,
    example: `div {
      page-break-inside: avoid;
    }`,
  },

  {
    name: "Paramètres",
    definition: ` Les paramètres sont des valeurs qui peuvent être passées à une
    fonction ou à une méthode lors de son appel. Ils permettent de
    transmettre des informations à la fonction, qui peut les utiliser
    pour effectuer des opérations ou des calculs spécifiques. Les
    paramètres sont définis dans la signature de la fonction et
    peuvent être optionnels ou requis.`,
    example: `function multiply(a, b) {
      return a * b;
    }
    var result = multiply(5, 3);
    console.log(result); // Affiche 15`,
  },
  {
    name: "Paramètres d'URL",
    definition: ` Les paramètres d'URL, également appelés paramètres de requête,
    sont des informations supplémentaires transmises dans une URL
    après le point d'interrogation (?). Ils sont utilisés pour
    transmettre des données à une page web ou à une API. Les
    paramètres d'URL sont constitués d'une clé et d'une valeur,
    séparées par le signe égal (=), et plusieurs paramètres peuvent
    être séparés par le signe et commercial (&).`,
    example: `https://www.example.com/search?query=keyword&amp;page=2`,
  },
  {
    name: "payload",
    definition: ` Le terme "payload" fait référence aux données transportées dans un
    message ou une requête. Dans le contexte du développement web, le
    payload est généralement utilisé pour désigner les données
    envoyées avec une requête HTTP, telles que les données d'un
    formulaire ou les données à traiter par un service ou une API.`,
    example: `const payload = {
      username: 'john_doe',
      email: 'john@example.com',
      age: 25
    };
    fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
    console.log(data);
    });`,
  },
  {
    name: "PDO",
    definition: ` PDO (PHP Data Objects) est une extension de PHP qui fournit une
    interface unifiée pour accéder à des bases de données. Elle offre
    une abstraction de la base de données, permettant aux développeurs
    de travailler avec différents types de bases de données en
    utilisant une syntaxe cohérente et sécurisée.`,
    example: `$pdo = new PDO('mysql:host=localhost;dbname=mydatabase', 'username', 'password');
    $stmt = $pdo->prepare('SELECT * FROM users');
    $stmt->execute();
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);`,
  },
  {
    name: "position",
    definition: ` La propriété CSS "position" définit le type de positionnement
    utilisé pour un élément dans une mise en page. Elle permet de
    spécifier si un élément doit être positionné de manière statique,
    relative, absolue ou fixe.`,
    example: `.example {
      position: absolute;
      top: 50px;
      left: 100px;
    }`,
  },
  {
    name: "pre",
    definition: `La balise &lt;pre&gt; est utilisée pour afficher du texte
    préformaté. Le texte à l'intérieur de la balise &lt;pre&gt; est
    affiché avec une police à largeur fixe et conserve les espaces,
    les sauts de ligne et les autres espaces blancs tels qu'ils sont
    écrits dans le code HTML.`,
    example: `&lt;pre&gt;
    Code préformaté
    avec des espaces
    et des sauts de ligne
  &lt;/pre&gt;`,
  },
  {
    name: "Préprocesseur",
    definition: ` Un préprocesseur est un outil utilisé dans le développement
    logiciel pour effectuer des transformations sur le code source
    avant sa compilation ou son interprétation. Il permet d'ajouter
    des fonctionnalités supplémentaires au langage de programmation
    utilisé, telles que des macros, des imports de fichiers, des
    variables, etc.`,
    example: `$primary-color: #007bff;
    body {
      color: $primary-color;
    }`,
  },
  {
    name: "Préproduction",
    definition: ` La préproduction, également appelée environnement de préparation
    ou d'essai, est une étape intermédiaire entre le développement et
    la production d'un logiciel. C'est un environnement contrôlé et
    isolé où les applications et les systèmes sont déployés pour
    effectuer des tests approfondis, des validations finales et des
    vérifications avant leur mise en production. La préproduction
    permet de détecter et de corriger les problèmes potentiels avant
    qu'ils n'affectent les utilisateurs finaux.`,
    example: `Développement -&gt; Préproduction -&gt; Production`,
  },
  {
    name: "quotes",
    definition: ` La propriété CSS "quotes" est utilisée pour spécifier les
    guillemets utilisés pour les citations dans un document. Elle
    permet de personnaliser l'apparence des guillemets lorsqu'ils sont
    affichés à l'aide de la fonction "content" et des pseudo-éléments
    "::before" et "::after".`,
    example: `blockquote {
      quotes: "«" "»" "‘" "’";
    }
    blockquote p::before {
    content: open-quote;
    }
    
    blockquote p::after {
    content: close-quote;
    }`,
  },
  {
    name: "reducer",
    definition: `En programmation, un reducer est une fonction qui prend en entrée
    un état courant et une action, et qui retourne un nouvel état
    résultant de l'application de l'action à l'état courant. Les
    reducers sont couramment utilisés dans les architectures de
    gestion d'état, comme Redux, pour mettre à jour et gérer l'état de
    l'application de manière prévisible et immuable.`,
    example: `const initialState = {
      count: 0
    };
    function counterReducer(state = initialState, action) {
    switch (action.type) {
    case 'INCREMENT':
    return { ...state, count: state.count + 1 };
    case 'DECREMENT':
    return { ...state, count: state.count - 1 };
    default:
    return state;
    }
    }`,
  },

  {
    name: "Recette",
    definition: ` En développement logiciel, une recette, également appelée test
    d'acceptation ou test fonctionnel, est une phase du cycle de vie
    du logiciel qui consiste à vérifier si le logiciel répond aux
    exigences fonctionnelles spécifiées. La recette implique
    l'exécution de scénarios de test pour valider le bon
    fonctionnement du logiciel, la conformité aux spécifications et la
    satisfaction des besoins des utilisateurs.`,
    example: `Validation des fonctionnalités, vérification des résultats attendus, détection des erreurs ou des anomalies, etc.`,
  },
  {
    name: "REGEX",
    definition: `REGEX (Regular Expression) est un langage formel utilisé pour
    décrire des modèles de chaînes de caractères. Les expressions
    régulières permettent de rechercher, de valider et de manipuler
    des textes en utilisant des règles de correspondance spécifiques.
    Elles sont largement utilisées dans le traitement des chaînes de
    caractères, notamment pour la validation des formulaires, la
    recherche de motifs, le remplacement de texte, etc.`,
    example: `const regex = /[A-Za-z]+/;
    const result = regex.test('Hello');
    console.log(result); // true`,
  },
  {
    name: "relatif",
    definition: ` Le positionnement relatif est une méthode de placement d'un
    élément sur la page web par rapport à sa position normale.
    L'élément positionné de manière relative peut être déplacé en
    utilisant les propriétés "top", "right", "bottom" et "left", mais
    il conserve sa place dans le flux normal du document. Les autres
    éléments du document sont ajustés en fonction de sa position.`,
    example: `&lt;div style="position: relative; top: 10px; left: 20px;"&gt;
    Contenu positionné de manière relative
  &lt;/div&gt;`,
  },
  {
    name: "Relations SQL (0,1 ; 1,1; 0,N; 1,N)",
    definition: ` Les relations SQL définissent les liens entre les tables d'une
    base de données relationnelle. Elles décrivent comment les
    enregistrements des différentes tables sont associés les uns aux
    autres.`,
    example: `<ul>
    <li>
      <strong>One-to-One (1,1) :</strong> Une relation où chaque
      enregistrement d'une table est associé à un seul enregistrement
      d'une autre table.
    </li>
    <li>
      <strong>One-to-Many (1,N) :</strong> Une relation où chaque
      enregistrement d'une table est associé à plusieurs
      enregistrements d'une autre table.
    </li>
    <li>
      <strong>Many-to-Many (N,N) :</strong> Une relation où chaque
      enregistrement d'une table peut être associé à plusieurs
      enregistrements d'une autre table, et vice versa.
    </li>
    <li>
      <strong>Zero or One-to-One (0,1) :</strong> Une relation
      optionnelle où chaque enregistrement d'une table peut être
      associé à zéro ou un seul enregistrement d'une autre table.
    </li>
    <li>
      <strong>Zero or Many-to-One (0,N) :</strong> Une relation
      optionnelle où chaque enregistrement d'une table peut être
      associé à zéro ou plusieurs enregistrements d'une autre table.
    </li>
  </ul>`,
  },
  {
    name: "Requêtes HTTP",
    definition: ` Les requêtes HTTP (Hypertext Transfer Protocol) sont utilisées
    pour communiquer avec les serveurs web et demander des ressources.
    Elles permettent d'envoyer des informations au serveur et de
    recevoir les réponses correspondantes. Les requêtes HTTP sont
    essentielles pour l'échange d'informations entre un navigateur et
    un serveur.`,
    example: `GET /page.html HTTP/1.1
    Host: www.example.com
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
    Accept-Language: en-US,en;q=0.5
    Accept-Encoding: gzip, deflate
    Connection: keep-alive
    Referer: http://www.example.com/index.html`,
  },
  {
    name: "Requêtes HTTPS",
    definition: `Les requêtes HTTPS (Hypertext Transfer Protocol Secure) sont
    similaires aux requêtes HTTP, mais elles utilisent une couche de
    chiffrement SSL/TLS pour sécuriser les échanges de données entre
    un navigateur et un serveur. Les requêtes HTTPS offrent un niveau
    supplémentaire de confidentialité et de protection contre les
    interceptions et les attaques de type "man-in-the-middle". Elles
    sont couramment utilisées pour les transactions en ligne et les
    sites web nécessitant une sécurité renforcée.`,
    example: `GET /secure-page.html HTTP/1.1
    Host: www.example.com
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
    Accept-Language: en-US,en;q=0.5
    Accept-Encoding: gzip, deflate
    Connection: keep-alive
    Referer: https://www.example.com/index.html`,
  },
  {
    name: "Requêtes SQL",
    definition: `Les requêtes SQL (Structured Query Language) sont utilisées pour
    interagir avec les bases de données relationnelles. Elles
    permettent de récupérer, d'insérer, de mettre à jour ou de
    supprimer des données dans une base de données en utilisant des
    commandes spécifiques du langage SQL.`,
    example: `SELECT * FROM users WHERE age &gt; 18;`,
  },
  {
    name: "responsive",
    definition: ` Le terme "responsive" fait référence à la conception et au
    développement de sites web qui s'adaptent de manière dynamique à
    différents appareils et tailles d'écran. Un site responsive offre
    une expérience utilisateur optimale, quel que soit le dispositif
    utilisé pour y accéder.`,
    example: `&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;`,
  },
  {
    name: "REST",
    definition: ` REST (Representational State Transfer) est un style d'architecture
    logicielle utilisé pour créer des services web. Il repose sur des
    principes tels que l'utilisation des méthodes HTTP (GET, POST,
    PUT, DELETE) pour effectuer des opérations sur des ressources et
    l'utilisation de l'URI (Uniform Resource Identifier) pour
    identifier les ressources.`,
    example: `GET /api/users - Récupérer la liste des utilisateurs
    POST /api/users - Créer un nouvel utilisateur
    PUT /api/users/{id} - Mettre à jour un utilisateur spécifique
    DELETE /api/users/{id} - Supprimer un utilisateur spécifique`,
  },
  {
    name: "right",
    definition: `La propriété CSS "right" définit la distance entre le bord droit
    d'un élément positionné et le bord droit de son conteneur
    positionné.`,
    example: `.example {
      position: absolute;
      right: 20px;
    }`,
  },
  {
    name: "Routes",
    definition: `Les "Routes" sont utilisées dans les frameworks web pour définir
    les URL et les actions correspondantes dans une application. Elles
    permettent de mapper les requêtes HTTP reçues aux différentes
    actions du contrôleur qui doivent être exécutées. Les routes
    déterminent comment les URL sont structurées et quelles actions
    sont associées à chaque URL.`,
    example: `Route::get('/users/{id}', 'UserController@show');`,
  },
  {
    name: "Repository",
    definition: `Un "Repository" est un composant qui agit comme une couche
    d'abstraction entre l'application et la source de données
    (généralement une base de données). Il est responsable de la
    récupération, de la persistance et de la manipulation des objets
    métier. Les repositories fournissent une interface pour effectuer
    des opérations CRUD (Create, Read, Update, Delete) sur les entités
    de l'application.`,
    example: `class UserRepository {
      public function findById($id) {
        // Logique pour récupérer un utilisateur par son ID depuis la base de données
      }
    public function save(User $user) {
    // Logique pour sauvegarder un utilisateur dans la base de données
    }
    }`,
  },
  {
    name: "ruby, rb, rt, rtc, rp",
    definition: ` Les balises &lt;ruby&gt;, &lt;rb&gt;, &lt;rt&gt;, &lt;rtc&gt; et
    &lt;rp&gt; sont utilisées pour représenter le texte de rubis, qui
    est utilisé dans les langues asiatiques pour indiquer la
    prononciation ou la signification d'un caractère ou d'un mot.`,
    example: `&lt;ruby&gt;漢&lt;rt&gt;かん&lt;/rt&gt;&lt;/ruby&gt;`,
  },
  {
    name: "ruby-align",
    definition: ` La propriété CSS "ruby-align" définit l'alignement des annotations
    rubis, qui sont des petites annotations souvent utilisées dans les
    langues asiatiques pour indiquer la prononciation ou la
    signification d'un caractère.`,
    example: `.ruby-text {
      ruby-align: space-around;
    }`,
  },
  {
    name: "ruby-overhang",
    definition: `La propriété CSS "ruby-overhang" contrôle le dépassement des
    annotations rubis en dehors des limites de leur base. Cela permet
    de spécifier si les annotations rubis doivent déborder sur les
    marges du texte adjacent ou être contenues dans les limites de
    leur base.`,
    example: `.ruby-text {
      ruby-overhang: auto;
    }`,
  },
  {
    name: "ruby-position",
    definition: `La propriété CSS "ruby-position" définit la position des
    annotations rubis par rapport à leur base. Elle permet de
    spécifier si les annotations rubis doivent être positionnées
    au-dessus ou au-dessous de leur base.`,
    example: `.ruby-text {
      ruby-position: over;
    }`,
  },
  {
    name: "s",
    definition: ` La balise &lt;s&gt; est utilisée pour indiquer que le texte est
    barré ou rayé dans un document HTML. Elle peut être utilisée pour
    indiquer du texte supprimé, des informations obsolètes ou tout
    autre texte qui n'est plus valide ou pertinent.`,
    example: `&lt;s&gt;Texte barré&lt;/s&gt;`,
  },
  {
    name: "SASS",
    definition: ` SASS (Syntactically Awesome Style Sheets) est une extension de
    syntaxe pour le langage de style CSS. Il introduit des
    fonctionnalités avancées telles que les variables, les mixins, les
    fonctions et les imports, ce qui permet de créer des feuilles de
    style CSS plus modulaires et réutilisables. SASS doit être compilé
    en CSS standard avant d'être utilisé dans un navigateur web.`,
    example: `$primary-color: #ff0000;
    .button {
    background-color: $primary-color;
    color: white;
    padding: 10px;
    }`,
  },
  {
    name: "Scope/Portée",
    definition: ` Le scope, ou portée, fait référence à la visibilité et à
    l'accessibilité des variables, des fonctions et d'autres éléments
    dans un programme. Il définit les parties du code où une variable
    ou une fonction peut être référencée et utilisée. Le scope peut
    être global (accessible partout dans le programme) ou local
    (limité à une portion spécifique du code).`,
    example: `function maFonction() {
      var x = 10; // variable locale à la fonction
      console.log(x);
    }
    maFonction(); // Affiche 10
    
    console.log(x); // Erreur : x n'est pas défini en dehors de la fonction`,
  },
  {
    name: "script, canvas, template, noscript, slot",
    definition: ` Ces balises sont utilisées pour ajouter des fonctionnalités
    interactives, du contenu dynamique et du contenu conditionnel à un
    document HTML.`,
    example: `&lt;script src="script.js"&gt;&lt;/script&gt;
    &lt;canvas id="myCanvas"&gt;&lt;/canvas&gt;
    &lt;template&gt;Modèle de contenu&lt;/template&gt;
    &lt;noscript&gt;Contenu alternatif&lt;/noscript&gt;
    &lt;slot name="content"&gt;Contenu par défaut&lt;/slot&gt;`,
  },
  {
    name: "SCSS",
    definition: `SCSS (Sassy CSS) est une extension de syntaxe pour le langage de
    style CSS. Il permet d'ajouter des fonctionnalités supplémentaires
    à CSS, telles que les variables, les boucles et les mixins. SCSS
    est compilé en CSS standard avant d'être utilisé dans un
    navigateur web, ce qui facilite l'écriture et la gestion du style
    d'une application ou d'un site web.`,
    example: `$primary-color: #ff0000;
    .button {
    background-color: $primary-color;
    color: white;
    padding: 10px;
    }`,
  },
  {
    name: "section",
    definition: ` La balise &lt;section&gt; est utilisée pour diviser une page en
    sections thématiques ou fonctionnelles. Elle aide à organiser et
    structurer le contenu de manière logique et cohérente. Les
    sections peuvent contenir des en-têtes, des paragraphes, des
    listes, des images, etc.`,
    example: `&lt;section&gt;
    &lt;h2&gt;Titre de la section&lt;/h2&gt;
    &lt;p&gt;Contenu de la section...&lt;/p&gt;
  &lt;/section&gt;`,
  },
  {
    name: "selector",
    definition: ` En développement web, un selector est une expression utilisée pour
    cibler des éléments spécifiques dans une page HTML ou dans le DOM
    (Document Object Model). Les selectors permettent de sélectionner
    et de styliser des éléments HTML en utilisant des règles CSS ou de
    manipuler ces éléments à l'aide de JavaScript.`,
    example: `.container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .container p {
    color: red;
    }`,
  },
  {
    name: "Sémantique",
    definition: ` La sémantique, dans le contexte du développement web, se réfère à
    l'utilisation appropriée des balises et des attributs HTML pour
    donner un sens et une structure au contenu d'une page web. Une
    approche sémantique consiste à utiliser les balises HTML de
    manière cohérente et significative afin d'améliorer
    l'accessibilité, l'indexation par les moteurs de recherche et la
    compréhension du contenu par les utilisateurs et les développeurs.`,
    example: `&lt;header&gt;
    &lt;h1&gt;Titre principal&lt;/h1&gt;
    &lt;nav&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;a href="#accueil"&gt;Accueil&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#services"&gt;Services&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#contact"&gt;Contact&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/nav&gt;
  &lt;/header&gt;`,
  },
  {
    name: "SEO",
    definition: ` SEO (Search Engine Optimization), également appelé référencement
    naturel, désigne l'ensemble des techniques et pratiques visant à
    améliorer la visibilité et le positionnement d'un site web dans
    les résultats des moteurs de recherche.`,
    example: `En optimisant le contenu et la structure d'un site web conformément aux bonnes pratiques de SEO, il est possible d'améliorer son classement dans les résultats de recherche, ce qui peut entraîner une augmentation du trafic organique et une meilleure visibilité en ligne.`,
  },
  {
    name: "SGBD",
    definition: ` SGBD (Système de Gestion de Base de Données) est un logiciel
    permettant de gérer et d'organiser des bases de données. Il offre
    des fonctionnalités pour la création, la modification, la
    consultation et la suppression des données stockées dans une base
    de données.`,
    example: `MySQL, PostgreSQL, Oracle, Microsoft SQL Server, SQLite`,
  },
  {
    name: "size",
    definition: ` La propriété CSS "size" est utilisée pour définir la taille d'une
    boîte de page lors de l'impression.`,
    example: `@page {
      size: landscape;
    }`,
  },
  {
    name: "Serveur",
    definition: ` Un serveur fait référence à un ordinateur ou un système qui
    fournit des services, des ressources ou des fonctionnalités à
    d'autres ordinateurs ou utilisateurs, appelés clients. Il joue le
    rôle d'hôte pour les applications, les fichiers et les données,
    répondant aux demandes des clients et leur fournissant les
    informations demandées.`,
    example: `Un serveur web qui héberge un site web et répond aux requêtes HTTP des navigateurs des utilisateurs.`,
  },
  {
    name: "small",
    definition: ` La balise &lt;small&gt; est utilisée pour indiquer que le texte
    est de taille réduite par rapport au texte environnant. Elle est
    généralement utilisée pour afficher des légendes, des annotations,
    des notes de bas de page ou tout autre texte qui doit être
    présenté à une taille de police plus petite.`,
    example: `&lt;small&gt;Texte de petite taille&lt;/small&gt;`,
  },
  {
    name: "span",
    definition: `La balise &lt;span&gt; est utilisée pour grouper des éléments en
    ligne et leur appliquer des styles spécifiques à l'aide de CSS.
    Elle n'a aucun effet sémantique par elle-même, mais peut être
    utilisée comme un conteneur pour appliquer des styles ou des
    scripts à une partie du texte.`,
    example: `&lt;span class="highlight"&gt;Texte avec style&lt;/span&gt;`,
  },
  {
    name: "speak-header",
    definition: `La propriété CSS "speak-header" est utilisée pour spécifier si les
    éléments d'en-tête d'un tableau doivent être prononcés par les
    lecteurs d'écran.`,
    example: `table {
      speak-header: always;
    }`,
  },
  {
    name: "state",
    definition: `Le state, ou état en français, est un concept clé de React. Il
    représente l'état interne d'un composant React qui peut être
    modifié et influencer le rendu de ce dernier. Le state permet de
    stocker et de gérer les données dynamiques d'un composant.`,
    example: `import React, { useState } from 'react';
    function Counter() {
    const [count, setCount] = useState(0);
    
    const increment = () => {
    setCount(count + 1);
    };
    
    return (
    <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
    </div>
    );
    }`,
  },
  {
    name: "store",
    definition: ` En termes de développement web, le terme "store" fait référence à
    un conteneur de données utilisé pour stocker et gérer l'état d'une
    application. Il peut s'agir d'un magasin de données centralisé où
    les informations sont stockées et accessibles à différents
    composants de l'application.`,
    example: `// Création d'un store
    const store = createStore(reducer);
    // Récupération de l'état du store
    const state = store.getState();
    
    // Mise à jour de l'état du store
    store.dispatch({ type: 'INCREMENT' });`,
  },
  {
    name: "strong",
    definition: ` La balise &lt;strong&gt; est utilisée pour indiquer un texte
    important ou fortement mis en évidence dans un document HTML. Par
    défaut, le texte entouré de balises &lt;strong&gt; est affiché en
    gras.`,
    example: `&lt;strong&gt;Texte important&lt;/strong&gt;`,
  },
  {
    name: "style",
    definition: ` La balise &lt;style&gt; est utilisée pour inclure des règles de
    style CSS directement dans un document HTML. Elle permet de
    définir le style visuel des éléments présents dans la page. Les
    règles de style spécifiées à l'intérieur de la balise
    &lt;style&gt; sont appliquées uniquement aux éléments du document
    courant.`,
    example: `&lt;style&gt;
    body {
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      color: #333;
    }
  &lt;/style&gt;`,
  },
  {
    name: "sub",
    definition: ` La balise &lt;sub&gt; est utilisée pour représenter du texte en
    indice (en bas de ligne) dans un document HTML. Elle est souvent
    utilisée pour afficher des formules chimiques, des équations
    mathématiques, des notes de bas de page, etc.`,
    example: `&lt;sub&gt;H&lt;/sub&gt;2&lt;sub&gt;O&lt;/sub&gt;`,
  },
  {
    name: "sup",
    definition: `La balise &lt;sup&gt; est utilisée pour représenter du texte en
    exposant (en haut de ligne) dans un document HTML. Elle est
    souvent utilisée pour afficher des indices, des exposants, des
    puissances, etc.`,
    example: `10&lt;sup&gt;2&lt;/sup&gt;`,
  },
  {
    name: "table, thead, tbody, tfoot, tr, th, td, colgroup, col, caption",
    definition: ` Ces balises sont utilisées pour créer et structurer des tableaux
    de données dans un document HTML.`,
    example: `&lt;table&gt;
    &lt;thead&gt;
      &lt;tr&gt;
        &lt;th&gt;Entête 1&lt;/th&gt;
        &lt;th&gt;Entête 2&lt;/th&gt;
      &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
      &lt;tr&gt;
        &lt;td&gt;Donnée 1&lt;/td&gt;
        &lt;td&gt;Donnée 2&lt;/td&gt;
      &lt;/tr&gt;
    &lt;/tbody&gt;
  &lt;/table&gt;`,
  },
  {
    name: "table-layout",
    definition: ` La propriété CSS "table-layout" est utilisée pour spécifier
    l'algorithme de disposition à utiliser pour rendre un tableau.`,
    example: `table {
      table-layout: fixed;
    }`,
  },

  {
    name: "test unitaire",
    definition: `Un test unitaire est une procédure de test qui vérifie le bon
    fonctionnement d'une unité de code, généralement une fonction, une
    méthode ou une classe, de manière isolée. Les tests unitaires
    permettent de s'assurer que chaque composant du logiciel
    fonctionne correctement et de détecter d'éventuels problèmes ou
    erreurs.`,
    example: `function sum(a, b) {
      return a + b;
    }
    test('sum adds two numbers', () => {
    expect(sum(2, 3)).toBe(5);
    });`,
  },
  {
    name: "text-align",
    definition: ` La propriété CSS "text-align" définit l'alignement horizontal du
    texte à l'intérieur d'un élément.`,
    example: `.example {
      text-align: center;
    }`,
  },
  {
    name: "text-decoration",
    definition: `La propriété CSS "text-decoration" est utilisée pour ajouter une
    décoration visuelle au texte, telle que souligner, barrer,
    surligner, etc.`,
    example: `.souligne {
      text-decoration: underline;
    }
    .barrer {
    text-decoration: line-through;
    }`,
  },
  {
    name: "text-indent",
    definition: ` La propriété CSS "text-indent" est utilisée pour définir
    l'indentation de la première ligne d'un paragraphe ou d'un élément
    texte.`,
    example: `p {
      text-indent: 20px;
    }`,
  },
  {
    name: "text-justify",
    definition: `La propriété CSS "text-justify" est utilisée pour spécifier
    comment l'espacement des mots et la justification du texte doivent
    être gérés lorsque le texte s'étend sur plusieurs lignes.`,
    example: `p {
      text-justify: inter-word;
    }`,
  },
  {
    name: "text-overflow",
    definition: ` La propriété CSS "text-overflow" est utilisée pour spécifier
    comment gérer le dépassement du contenu d'un élément lorsque
    celui-ci est tronqué.`,
    example: `p {
      text-overflow: ellipsis;
    }`,
  },
  {
    name: "text-shadow",
    definition: ` La propriété CSS "text-shadow" est utilisée pour ajouter une ombre
    au texte.`,
    example: `p {
      text-shadow: 2px 2px 4px #000000;
    }`,
  },
  {
    name: "text-transform",
    definition: ` La propriété CSS "text-transform" est utilisée pour spécifier la
    transformation du texte, telle que la conversion en majuscules, en
    minuscules ou en majuscule initiale.`,
    example: `p {
      text-transform: uppercase;
    }`,
  },
  {
    name: "time",
    definition: `La balise &lt;time&gt; est utilisée pour représenter une date ou
    une heure dans un document HTML. Elle peut être utilisée pour
    afficher des informations sur les horaires, les dates, les
    événements planifiés, etc., et facilite également l'accès et la
    manipulation de ces informations via des scripts.`,
    example: `&lt;p&gt;La date d'aujourd'hui est &lt;time datetime="2023-06-02"&gt;2 juin 2023&lt;/time&gt;.&lt;/p&gt;`,
  },
  {
    name: "title",
    definition: ` La balise 'title' est utilisée pour spécifier le titre d'un
    document HTML. Le titre apparaît généralement dans la barre de
    titre du navigateur ou dans l'onglet de la page.`,
    example: `&lt;head&gt;
    &lt;title&gt;Titre de la page&lt;/title&gt;
  &lt;/head&gt;`,
  },
  {
    name: "top",
    definition: `La propriété CSS "top" définit la distance entre le bord supérieur
    d'un élément positionné et le bord supérieur de son conteneur
    positionné.`,
    example: `.example {
      position: absolute;
      top: 50px;
    }`,
  },
  {
    name: "Twig",
    definition: ` Twig est un moteur de template pour le langage de programmation
    PHP. Il permet de séparer la logique métier de la présentation en
    utilisant des fichiers de template. Twig offre une syntaxe claire
    et concise pour générer des pages web dynamiques.`,
    example: `{% raw %}
    &lt;h1&gt;{{ title }}&lt;/h1&gt;
    &lt;p&gt;{{ content }}&lt;/p&gt;
    {% endraw %}`,
  },
  {
    name: "u",
    definition: `La balise &lt;u&gt; est utilisée pour souligner un texte dans un
    document HTML. Elle peut être utilisée pour indiquer que le texte
    est une annotation, une correction, une entrée utilisateur ou
    toute autre information similaire.`,
    example: `&lt;u&gt;Texte souligné&lt;/u&gt;`,
  },
  {
    name: " Unités CSS (%, px, em, rem, vh, vw, etc.)",
    definition: ` Les unités CSS sont utilisées pour définir les dimensions, les
    positions et d'autres valeurs numériques dans les styles CSS. Les
    unités les plus couramment utilisées sont : <br/> <ul>
    <li>% : Pourcentage par rapport à la valeur parente.</li>
    <li>
      px : Pixels, unité de mesure basée sur les pixels de l'écran.
    </li>
    <li>
      em : Taille relative par rapport à la taille de la police du
      parent direct.
    </li>
    <li>
      rem : Taille relative par rapport à la taille de la police de la
      racine du document (html).
    </li>
    <li>vh : Pourcentage de la hauteur de la fenêtre d'affichage.</li>
    <li>vw : Pourcentage de la largeur de la fenêtre d'affichage.</li>
    <li>
      etc. : Il existe de nombreuses autres unités CSS disponibles
      pour des utilisations spécifiques.
    </li>
  </ul>
    `,
    example: `.container {
      width: 100%;
    }
    .heading {
    font-size: 2rem;
    }
    
    .paragraph {
    line-height: 1.5em;
    }`,
  },
  {
    name: "URL",
    definition: ` Une URL (Uniform Resource Locator) est une adresse web qui permet
    d'accéder à une ressource sur Internet. Elle spécifie le protocole
    à utiliser (http://, https://, ftp://, etc.), le nom de domaine,
    le chemin d'accès et éventuellement les paramètres d'URL. Les URL
    sont utilisées pour naviguer sur le web, accéder à des pages web,
    des images, des vidéos, des fichiers, etc.`,
    example: `https://www.example.com/page1.html`,
  },
  {
    name: "useContext",
    definition: `Le hook useContext permet d'accéder au contexte d'un composant
    fonctionnel. Le contexte est utilisé pour partager des données
    entre plusieurs composants sans avoir besoin de les passer
    explicitement en tant que props. Le hook useContext permet
    d'accéder aux valeurs fournies par le Provider du contexte.`,
    example: `import React, { useContext } from 'react';
    import { UserContext } from './UserContext';
    function UserProfile() {
    const user = useContext(UserContext);
    
    return (
    <div>
    <h2>User Profile</h2>
    <p>Name: {user.name}</p>
    <p>Email: {user.email}</p>
    </div>
    );
    }`,
  },
  {
    name: "useDispatch",
    definition: `useDispatch est un hook fourni par la bibliothèque de gestion
    d'état Redux dans le développement d'applications React. Il permet
    d'envoyer des actions vers le store Redux, ce qui déclenche les
    modifications de l'état de l'application.`,
    example: `import { useDispatch } from 'react-redux';
        
    const MyComponent = () => {
      const dispatch = useDispatch();
    
      const handleClick = () => {
        dispatch({ type: 'INCREMENT' });
      };
    
      return (
        <button onClick={handleClick}>Incrémenter</button>
      );
    };`,
  },
  {
    name: "useEffect",
    definition: ` Le hook useEffect est utilisé pour effectuer des effets de bord
    dans un composant React, tels que la gestion d'abonnements, les
    requêtes HTTP, la manipulation du DOM, etc. Il permet d'exécuter
    du code en réponse à certaines actions, telles que le montage ou
    la mise à jour d'un composant, ou lorsque certaines valeurs
    changent.`,
    example: `import React, { useEffect, useState } from 'react';
    function Example() {
    const [data, setData] = useState(null);
    
    useEffect(() => {
    fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => setData(data));
    }, []);
    
    return (
    <div>
    {data ? (
    <p>Data: {data}</p>
    ) : (
    <p>Loading data...</p>
    )}
    </div>
    );
    }`,
  },
  {
    name: "useReducer",
    definition: ` useReducer est un hook de gestion d'état avancé dans React qui
    permet de gérer des états complexes en utilisant une fonction de
    réduction (reducer). Il est souvent utilisé pour gérer des états
    qui ont une logique plus complexe que simplement stocker une
    valeur.`,
    example: `import React, { useReducer } from 'react';
      
    // Définition du reducer
    const reducer = (state, action) => {
      switch (action.type) {
        case 'INCREMENT':
          return { count: state.count + 1 };
        case 'DECREMENT':
          return { count: state.count - 1 };
        default:
          return state;
      }
    };
    
    // Initialisation de l'état initial
    const initialState = { count: 0 };
    
    // Utilisation de useReducer
    const MyComponent = () => {
      const [state, dispatch] = useReducer(reducer, initialState);
    
      const increment = () => {
        dispatch({ type: 'INCREMENT' });
      };
    
      const decrement = () => {
        dispatch({ type: 'DECREMENT' });
      };
    
      return (
        <div>
          <p>Count: {state.count}</p>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      );
    };
    
    export default MyComponent;`,
  },
  {
    name: "useState",
    definition: `useState est un hook de React qui permet de gérer l'état local
    d'un composant fonctionnel. Il permet de déclarer une variable
    d'état et une fonction de mise à jour associée. Lorsque la
    fonction de mise à jour est appelée, le composant est re-renderisé
    avec la nouvelle valeur de l'état.`,
    example: `import React, { useState } from 'react';
    const Counter = () => {
    const [count, setCount] = useState(0);
    
    const increment = () => {
    setCount(count + 1);
    };
    
    return (
    <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
    </div>
    );
    };`,
  },
  {
    name: "user story",
    definition: `Une user story (histoire utilisateur) est une technique utilisée
    dans la gestion de projet agile pour décrire les fonctionnalités
    ou les besoins d'un système du point de vue de l'utilisateur. Elle
    se présente généralement sous la forme d'une courte description ou
    d'un scénario simple.`,
    example: `En tant qu'utilisateur, je souhaite pouvoir me connecter à mon compte avec mon adresse email et mon mot de passe.`,
  },
  {
    name: "var (balise)",
    definition: ` La balise &lt;var&gt; est utilisée pour représenter une variable
    dans un document HTML. Elle est souvent utilisée dans des
    contextes scientifiques ou mathématiques pour indiquer des
    variables dans des équations ou des formules.`,
    example: `&lt;var&gt;x&lt;/var&gt;`,
  },
  {
    name: "variable",
    definition: `Une variable est un espace de stockage nommé qui permet de
    conserver une valeur ou une référence à une valeur. Les variables
    sont utilisées pour stocker des données temporaires ou des
    résultats de calculs dans un programme. Elles peuvent être
    modifiées et réutilisées tout au long de l'exécution du programme.`,
    example: `let age = 30;`,
  },
  {
    name: "vertical-align",
    definition: ` La propriété CSS "vertical-align" définit l'alignement vertical du
    contenu d'un élément dans une ligne de texte ou d'une cellule de
    tableau.`,
    example: `.example {
      vertical-align: middle;
    }`,
  },
  {
    name: "View",
    definition: `Dans le modèle de conception MVC, la "View" représente la partie
    de l'application chargée de l'affichage des données et de
    l'interaction avec l'utilisateur. La vue reçoit les données du
    modèle et les présente sous forme de pages web, d'interfaces
    graphiques ou d'autres formats visuels.`,
    example: `&lt;html&gt;
    &lt;head&gt;
      &lt;title&gt;Mon application&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
      &lt;h1&gt;Bienvenue&lt;/h1&gt;
      &lt;p&gt;Bonjour, &lt;?php echo $user->getName(); ?&gt;!&lt;/p&gt;
    &lt;/body&gt;
  &lt;/html&gt;`,
  },
  {
    name: "visibility",
    definition: `La propriété CSS "visibility" est utilisée pour contrôler la
    visibilité d'un élément, où une valeur de "visible" signifie que
    l'élément est visible, et une valeur de "hidden" signifie que
    l'élément est caché mais occupe toujours de l'espace.`,
    example: `.element {
      visibility: hidden;
    }`,
  },
  {
    name: "wbr",
    definition: ` La balise &lt;wbr&gt; est utilisée pour indiquer un point de
    coupure suggéré dans un mot lorsqu'il est nécessaire de le diviser
    en plusieurs lignes. Elle est souvent utilisée pour améliorer la
    lisibilité du texte lorsque la largeur de la fenêtre ou du
    conteneur change, en permettant au navigateur de choisir le
    meilleur endroit pour effectuer la coupure.`,
    example: `&lt;p&gt;Mot long &lt;wbr&gt;à couper&lt;/p&gt;`,
  },
  {
    name: "Websocket",
    definition: ` Websocket est un protocole de communication bidirectionnelle et
    full-duplex utilisé dans les applications web pour établir une
    connexion persistante entre un navigateur et un serveur. Il permet
    des échanges de données en temps réel et une communication
    instantanée.`,
    example: `const socket = new WebSocket('wss://mon-serveur.com/socket');
        
    // Événement déclenché lorsqu'une connexion WebSocket est établie
    socket.onopen = function(event) {
      console.log('Connexion établie');
    };
    
    // Événement déclenché lorsqu'un message est reçu du serveur
    socket.onmessage = function(event) {
      console.log('Message reçu : ' + event.data);
    };
    
    // Événement déclenché lorsqu'une erreur se produit
    socket.onerror = function(error) {
      console.error('Erreur WebSocket : ' + error);
    };
    
    // Événement déclenché lorsqu'une connexion WebSocket est fermée
    socket.onclose = function(event) {
      console.log('Connexion fermée');
    };`,
  },
  {
    name: "white-space",
    definition: `La propriété CSS "white-space" est utilisée pour contrôler comment
    les espaces et les retours à la ligne à l'intérieur d'un élément
    doivent être gérés et affichés.`,
    example: `.element {
      white-space: nowrap;
    }`,
  },
  {
    name: "width",
    definition: `La propriété CSS "width" définit la largeur d'un élément.`,
    example: `.example {
      width: 200px;
    }`,
  },
  {
    name: "Wireframe",
    definition: ` Un wireframe est une représentation visuelle simplifiée de
    l'interface d'un site web ou d'une application. Il s'agit d'un
    schéma structurel qui met en évidence la disposition des éléments,
    la navigation et les interactions principales, sans se concentrer
    sur les détails de conception visuelle. Les wireframes servent à
    planifier et à communiquer la structure et la fonctionnalité d'une
    interface.`,
    example: `Header
    Menu
    Content
      - Sidebar
      - Main Content
    Footer`,
  },
  {
    name: "XHR",
    definition: ` XHR (XMLHttpRequest) est un objet JavaScript utilisé pour
    effectuer des requêtes HTTP asynchrones vers un serveur web. Il
    permet d'envoyer des requêtes et de recevoir des réponses sans
    avoir à recharger la page. L'objet XHR est couramment utilisé pour
    implémenter des fonctionnalités de chargement de contenu
    dynamique, de mise à jour de pages web sans rechargement complet,
    etc.`,
    example: `var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.example.com/data', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        console.log(response);
      }
    };
    xhr.send();`,
  },
  {
    name: "z-index",
    definition: `La propriété CSS "z-index" définit l'empilement d'éléments
    positionnés qui se chevauchent dans une mise en page. Elle
    spécifie l'ordre d'affichage des éléments en utilisant des valeurs
    entières, où un indice z plus élevé indique que l'élément sera
    positionné au-dessus des éléments avec un indice z inférieur.`,
    example: `.example {
      position: relative;
      z-index: 2;
        }`,
  },
];
