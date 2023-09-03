const difference = [
  {
    name: "Absolu vs Relatif vs Fixed vs Static vs Unset vs Inherit vs initial vs Revert",
    definition: ` Absolu, Relatif, Fixed, Static, Unset, Inherit, Initial et Revert
    sont des valeurs utilisées dans les propriétés CSS pour définir le
    positionnement et le comportement des éléments dans une mise en
    page.`,
    example: `<ul>
    <li>
      <strong>Absolu :</strong> Positionne un élément par rapport à
      son ancêtre positionné le plus proche, en utilisant les
      propriétés top, right, bottom et left.
    </li>
    <li>
      <strong>Relatif :</strong> Positionne un élément par rapport à
      sa position normale, en utilisant les propriétés top, right,
      bottom et left.
    </li>
    <li>
      <strong>Fixed :</strong> Positionne un élément de manière fixe
      par rapport à la fenêtre du navigateur, même lorsque la page est
      défilée.
    </li>
    <li>
      <strong>Static :</strong> Position normale par défaut d'un
      élément, où il est positionné selon le flux normal du document.
    </li>
    <li>
      <strong>Unset :</strong> Réinitialise une propriété à sa valeur
      héritée ou initiale.
    </li>
    <li>
      <strong>Inherit :</strong> Force un élément à hériter la valeur
      de propriété de son parent.
    </li>
    <li>
      <strong>Initial :</strong> Définit une propriété à sa valeur
      initiale.
    </li>
    <li>
      <strong>Revert :</strong> Rétablit la valeur de propriété d'un
      élément à sa valeur définie par l'utilisateur ou à sa valeur
      héritée.
    </li>
  </ul>`,
  },
  {
    name: "Chemin Absolu vs Chemin Relatif",
    definition: ` En développement web, les termes "Chemin Absolu" et "Chemin
    Relatif" font référence à des méthodes différentes pour spécifier
    l'emplacement d'un fichier ou d'une ressource. <br/>
    Un chemin absolu est un chemin complet qui spécifie l'emplacement
              d'un fichier ou d'une ressource à partir de la racine du système
              de fichiers. Il inclut généralement le nom du disque (sur les
              systèmes d'exploitation tels que Windows) suivi de tous les
              dossiers parents jusqu'au fichier ou à la ressource spécifiée.<br/>
              Un chemin relatif, quant à lui, est un chemin qui spécifie
              l'emplacement d'un fichier ou d'une ressource par rapport à la
              position actuelle du fichier ou de la ressource qui fait référence
              à lui. Il ne contient pas le chemin complet depuis la racine du
              système de fichiers.`,
    example: `Supposons que nous ayons l'arborescence de fichiers suivante :
    - /racine
      - fichier.html
      - dossier
        - image.jpg
  
  Chemin absolu du fichier "image.jpg" depuis la racine du système de fichiers :
    /racine/dossier/image.jpg
  
  Chemin relatif du fichier "image.jpg" depuis le fichier "fichier.html" :
    dossier/image.jpg`,
  },
  {
    name: "Clés primaires vs Clés étrangères",
    definition: ` Les clés primaires et les clés étrangères sont des concepts
    utilisés dans les bases de données relationnelles. Une clé
    primaire est une colonne (ou un ensemble de colonnes) qui
    identifie de manière unique chaque enregistrement dans une table.
    Elle garantit l'unicité des données et sert de référence pour les
    relations avec d'autres tables. Une clé étrangère est une colonne
    (ou un ensemble de colonnes) dans une table qui fait référence à
    la clé primaire d'une autre table. Elle établit une relation entre
    les tables et permet de maintenir l'intégrité référentielle.`,
    example: `Table "Utilisateurs":
    - ID (clé primaire)
    - Nom
    - Adresse
  Table "Commandes":
  
  ID (clé primaire)
  IDUtilisateur (clé étrangère vers la table "Utilisateurs")
  Produit
  Quantité`,
  },
  {
    name: "Client vs Serveur",
    definition: `Client vs Serveur est un modèle d'architecture de réseau où les
    tâches et les responsabilités sont réparties entre un client et un
    serveur.`,
    example: `Le client est une entité (généralement un navigateur web) qui envoie des requêtes à un serveur pour demander des ressources ou des services. Le serveur est une entité (généralement un ordinateur distant) qui reçoit les requêtes du client, les traite et renvoie les réponses correspondantes.`,
  },
  {
    name: "CMS vs Frameworks vs Libraries",
    definition: ` Les CMS (Content Management Systems), les frameworks et les
    bibliothèques sont des outils utilisés dans le développement web. <br/>
    Un CMS est une plateforme logicielle préconstruite qui facilite la
    création, la gestion et la publication de contenu en ligne. Il
    fournit une interface conviviale et des fonctionnalités prêtes à
    l'emploi, permettant aux utilisateurs de créer des sites web sans
    avoir à coder. <br/>
    Un framework est un ensemble de bibliothèques, de composants et de
              conventions qui facilitent le développement d'applications web. Il
              fournit une structure et des fonctionnalités de base, permettant
              aux développeurs de construire des applications plus rapidement et
              plus efficacement. <br/>
              Une bibliothèque est un ensemble de fonctions ou de modules
              réutilisables qui aident les développeurs à effectuer des tâches
              spécifiques. Les bibliothèques sont généralement plus légères que
              les frameworks et peuvent être utilisées de manière modulaire.`,
    example: `CMS: WordPress, Joomla, Drupal
    Frameworks: Laravel, Django, Ruby on Rails
    Bibliothèques: React, Vue.js, jQuery`,
  },
  {
    name: "Fonction vs Méthode",
    definition: ` Une fonction et une méthode sont toutes deux des blocs de code qui
    effectuent une action spécifique. <br/>
    Une fonction est un ensemble d'instructions regroupées ensemble
              pour effectuer une tâche spécifique. Elle peut être appelée de
              n'importe où dans le programme pour exécuter cette tâche. Les
              fonctions peuvent accepter des arguments (valeurs d'entrée) et
              renvoyer des résultats (valeurs de sortie). <br/>
              Une méthode est une fonction associée à un objet ou à une classe.
              Elle représente le comportement d'un objet et peut accéder aux
              données de cet objet. Les méthodes sont utilisées dans la
              programmation orientée objet pour définir le comportement des
              objets.`,
    example: `Fonction:
    function calculerSomme(a, b) {
      return a + b;
    }
    Méthode:
    class Personne {
    constructor(nom) {
    this.nom = nom;
    }
    
    saluer() {
    console.log('Bonjour, je suis ' + this.nom);
    }
    }
    
    const personne = new Personne('Alice');
    personne.saluer();`,
  },
  {
    name: "Front-end vs Back-end",
    definition: `Front-end et back-end sont des termes utilisés pour désigner les
    différentes parties d'une application ou d'un système
    informatique. Le front-end fait référence à la partie visible et
    interactive d'une application avec laquelle les utilisateurs
    interagissent directement. Il est généralement développé en
    utilisant des langages de programmation tels que HTML, CSS et
    JavaScript, et est exécuté dans le navigateur web d'un
    utilisateur. Le back-end fait référence à la partie "côté serveur"
    de l'application, qui gère le traitement des données, l'accès à la
    base de données, les fonctionnalités de sécurité, etc. Il est
    généralement développé en utilisant des langages tels que PHP,
    Java, Python, et s'exécute sur un serveur.`,
    example: `Front-end: Interface utilisateur, mise en page, animations, interactions utilisateur (HTML, CSS, JavaScript)
    Back-end: Gestion des données, traitement des requêtes, sécurité, gestion des utilisateurs (PHP, Java, Python)`,
  },
  {
    name: "GET vs POST",
    definition: ` GET et POST sont deux méthodes de requête utilisées dans les
    protocoles HTTP (Hypertext Transfer Protocol) pour communiquer
    avec un serveur web. <br/>
    <ul>
    <li>
      GET : Cette méthode de requête est utilisée pour récupérer des
      données à partir d'un serveur. Les données sont transmises en
      tant que paramètres dans l'URL de la requête. Les requêtes GET
      sont généralement utilisées pour les opérations de lecture et
      n'ont pas d'effets secondaires sur le serveur.
    </li>
    <li>
      POST : Cette méthode de requête est utilisée pour envoyer des
      données au serveur dans le corps de la requête. Les données ne
      sont pas visibles dans l'URL. Les requêtes POST sont utilisées
      pour les opérations qui modifient l'état du serveur, telles que
      la création, la mise à jour ou la suppression de ressources.
    </li>
  </ul>
    `,
    example: `GET /api/users?id=123 <br/>
    POST /api/users
          Content-Type: application/json
          
          {
            "name": "John Doe",
            "email": "johndoe@example.com"
          }`,
  },
  {
    name: "Interface utilisateur web dynamique vs Interface utilisateur web statique",
    definition: `Une interface utilisateur web dynamique se réfère à une interface
    qui offre une interaction et une réactivité en temps réel. Elle
    permet aux utilisateurs d'effectuer des actions, de modifier les
    données et de voir les résultats immédiatement sans recharger la
    page. Les interfaces utilisateur web dynamiques sont généralement
    construites en utilisant des technologies telles que HTML, CSS,
    JavaScript et AJAX. <br/>
    Une interface utilisateur web statique, en revanche, est une
              interface qui ne change pas en fonction des actions de
              l'utilisateur. Elle affiche le contenu et la mise en page de
              manière fixe et ne permet pas d'interactions ou de modifications
              en temps réel. Les interfaces utilisateur web statiques peuvent
              être créées avec des technologies de base telles que HTML et CSS.`,
    example: `Interface utilisateur web dynamique: Réseaux sociaux avec actualisation en temps réel, formulaires interactifs avec validation en direct
    Interface utilisateur web statique: Site web d'entreprise avec des pages fixes et du contenu statique`,
  },
  {
    name: "Paramètres vs Arguments",
    definition: ` Les paramètres et les arguments sont utilisés dans le contexte des
    fonctions et des méthodes. <br/>
    Un paramètre est une variable déclarée dans la définition d'une
    fonction ou d'une méthode. Il sert à recevoir des valeurs d'entrée
    lors de l'appel de la fonction ou de la méthode. Les paramètres
    définissent les informations requises pour effectuer une action
    spécifique. <br/>
    Un argument est une valeur fournie lors de l'appel d'une fonction
    ou d'une méthode. Il correspond à la valeur réelle qui est passée
    à la fonction ou à la méthode pour être utilisée dans son
    exécution. Les arguments sont les valeurs spécifiques qui sont
    utilisées pour remplir les paramètres définis.`,
    example: `Fonction avec paramètres:
    function additionner(a, b) {
      return a + b;
    }
    Appel de la fonction avec arguments:
    const resultat = additionner(3, 5);`,
  },
  {
    name: " Référencement organique vs Référencement payant",
    definition: ` Le référencement organique et le référencement payant sont des
    stratégies utilisées pour améliorer la visibilité et le classement
    d'un site web dans les moteurs de recherche. <br/>
    Le référencement organique, également appelé SEO (Search Engine
        Optimization), consiste à optimiser un site web de manière à
        obtenir un classement élevé et un trafic naturel dans les
        résultats de recherche. Il implique l'optimisation du contenu, des
        balises, des liens et d'autres facteurs pour augmenter la
        visibilité du site de manière organique. <br/>
        Le référencement payant, également appelé SEA (Search Engine
            Advertising) ou publicité PPC (Pay-Per-Click), implique le
            paiement pour afficher des annonces ou des liens sponsorisés dans
            les résultats de recherche. Les annonceurs enchérissent sur des
            mots-clés spécifiques et paient chaque fois qu'un utilisateur
            clique sur leur annonce. Le référencement payant offre une
            visibilité immédiate mais nécessite un budget publicitaire.`,
    example: `Référencement organique: Optimisation du contenu et des balises, création de liens de qualité, recherche de mots-clés pertinents
    Référencement payant: Campagnes publicitaires sur les moteurs de recherche, enchères sur les mots-clés, annonces sponsorisées`,
  },
  {
    name: "Server : machine vs logiciel",
    definition: ` Le terme "server" (serveur) peut se référer à deux choses
    différentes : une machine physique et un logiciel. <br/> Une machine serveur est un ordinateur spécialement configuré et
    dédié à fournir des services et des ressources à d'autres
    ordinateurs ou utilisateurs. Elle est conçue pour être toujours
    disponible, performante et sécurisée. Une machine serveur peut
    exécuter des logiciels de serveur pour répondre aux demandes des
    clients. <br/> Un logiciel serveur est une application informatique qui s'exécute
    sur une machine serveur et fournit des services spécifiques. Il
    peut s'agir de logiciels tels que des serveurs web, des serveurs
    de messagerie, des serveurs de base de données, etc. Le logiciel
    serveur gère les demandes entrantes, les traite et renvoie les
    résultats aux clients correspondants.`,
    example: `Machine serveur: Un ordinateur dédié utilisé pour héberger des sites web
    Logiciel serveur: Apache HTTP Server, Microsoft SQL Server, Nginx`,
  },
  {
    name: "Variable vs Constante",
    definition: `Une variable est un espace de stockage nommé qui peut contenir une
    valeur et qui peut être modifié. <br/> Une constante est un espace de stockage nommé qui contient une
    valeur immuable. Une fois que la valeur d'une constante est
    définie, elle ne peut pas être modifiée par la suite.`,
    example: `Variable:
    let age = 25;
    Constante:
    const PI = 3.14159;`,
  },
  {
    name: "Variable vs Propriété",
    definition: ` Une variable est un espace de stockage nommé qui peut contenir une
    valeur. Elle est utilisée pour stocker temporairement des données
    dans un programme et peut être modifiée pendant l'exécution. <br/> Une propriété est une valeur associée à un objet. Elle représente
    une caractéristique ou un attribut de l'objet. Les propriétés sont
    définies dans le cadre de la structure de l'objet et peuvent être
    accédées et modifiées via l'objet lui-même.`,
    example: `Variable:
    let age = 25;
    Propriété:
    const personne = {
    nom: 'Alice',
    age: 25
    };`,
  },
];
