const languages = [
  {
    name: "A+",
    definition: `A+ est un langage de programmation éducatif conçu pour enseigner
  les concepts de base de la programmation. Il met l'accent sur la
  simplicité et la lisibilité du code, ce qui en fait un choix idéal
  pour les débutants.`,
    example: `afficher("Bonjour, monde !");`,
  },
  {
    name: "A++",
    definition: `A++ est un langage de programmation qui étend les fonctionnalités
    du langage A. Il est principalement utilisé pour le développement
    d'applications scientifiques et mathématiques.`,
    example: `fonction factorielle(n)
  si n = 0 alors
    retourne 1
  sinon
    retourne n * factorielle(n - 1)
  fin si
fin fonction`,
  },
  {
    name: "A Sharp (.NET)",
    definition: `A# (.NET) est un langage de programmation orienté objet qui fait
    partie de la plateforme .NET développée par Microsoft. Il offre
    des fonctionnalités avancées pour la création d'applications
    Windows et Web.`,
    example: `using System;

class Program
{
  static void Main(string[] args)
  {
    Console.WriteLine("Bonjour, monde !");
  }
}`,
  },
  {
    name: "A# (Axiom)",
    definition: `A# (Axiom) est un langage de programmation fonctionnel basé sur le
    système de calcul formel Axiom. Il est utilisé pour la résolution
    de problèmes mathématiques complexes.`,
    example: `factorial(n) ==
  if n = 0 then 1 else n * factorial(n - 1)

output(factorial(5))`,
  },
  {
    name: "A-0 System",
    definition: `A-0 System est un langage de programmation historique développé
    dans les années 1950. Il a été utilisé pour la modélisation et la
    simulation de systèmes complexes.`,
    example: `INPUT X1
X2 = X1 + 10
OUTPUT X2`,
  },
  {
    name: "ABAL",
    definition: `L (Advanced Business Application Programming Language) est un
    langage de programmation développé par IBM pour la programmation
    des systèmes IBM i.`,
    example: `DCL VAR(&amp;MESSAGE) TYPE(*CHAR) LEN(20)
CHGVAR VAR(&amp;MESSAGE) VALUE('Bonjour, monde !')
SNDPGMMSG MSG(&amp;MESSAGE)`,
  },
  {
    name: "ABAL++",
    definition: `L++ est une version étendue du langage ABAL qui prend en charge
    les fonctionnalités avancées de la programmation orientée objet.
    Il est utilisé pour le développement d'applications sur les
    systèmes IBM i.`,
    example: `class HelloWorld
{
  void main()
  {
    message("Bonjour, monde !");
  }
}`,
  },
  {
    name: "ABAP",
    definition: `P (Advanced Business Application Programming) est un langage de
    programmation utilisé pour le développement d'applications dans le
    système SAP. Il est principalement utilisé pour la programmation
    d'applications d'entreprise.`,
    example: `DATA: message TYPE string.
message = 'Bonjour, monde !'.
WRITE: / message.`,
  },
  {
    name: "ABC",
    definition: `C est un langage de programmation impératif simple conçu pour
    l'enseignement de la programmation. Il est souvent utilisé pour
    initier les débutants à la programmation en raison de sa syntaxe
    simple et de ses concepts fondamentaux.`,
    example: `PRINT "Bonjour, monde !"`,
  },
  {
    name: "ABCL/1",
    definition: `L/1 (Advanced Business Control Language) est un langage de
    programmation utilisé pour le développement d'applications métier
    sur les systèmes IBM AS/400. Il permet de gérer les transactions
    et les bases de données dans un environnement d'entreprise.`,
    example: `IF CONDITION THEN
  PERFORM ACTION
END IF`,
  },
  {
    name: "ABCL/c+",
    definition: `L/c+ (Advanced Business Control Language for CICS Plus) est un
    langage de programmation utilisé pour le développement
    d'applications transactionnelles sur les systèmes IBM CICS
    (Customer Information Control System). Il permet de créer des
    programmes interactifs et de gérer les transactions en temps réel.`,
    example: `EXEC CICS
  SEND TEXT('Hello, world!')
END EXEC`,
  },
  {
    name: "ABCL/R",
    definition: `L/R (Advanced Business Control Language for Report) est un
    langage de programmation utilisé pour la génération de rapports
    sur les systèmes IBM AS/400. Il permet de créer des rapports
    personnalisés à partir des données stockées dans les bases de
    données.`,
    example: `RUN REPORT
  WITH CRITERIA
END REPORT`,
  },
  {
    name: "ABCL/R2",
    definition: `L/R2 (Advanced Business Control Language for Report 2) est une
    version améliorée du langage ABCL/R. Il offre des fonctionnalités
    supplémentaires pour la génération de rapports complexes sur les
    systèmes IBM AS/400.`,
    example: `RUN REPORT
  WITH ADVANCED OPTIONS
END REPORT`,
  },
  {
    name: "Abel",
    definition: `l est un langage de programmation utilisé pour le développement
    de systèmes d'exploitation. Il a été utilisé dans le passé pour le
    développement du système d'exploitation Multics.`,
    example: `DEFINE FUNCTION
  PARAMETERS
END FUNCTION`,
  },
  {
    name: "ABSET",
    definition: `T (Algorithmic Basic Language Extended for System Engineering
    and Technology) est un langage de programmation utilisé pour le
    développement de systèmes temps réel et de contrôle-commande. Il
    est couramment utilisé dans le domaine de l'ingénierie et de la
    technologie.`,
    example: `IF CONDITION THEN
  PERFORM ACTION
ELSE
  PERFORM ALTERNATIVE ACTION
END IF`,
  },
  {
    name: "ABSYS",
    definition: `S est un langage de programmation utilisé pour le
    développement de systèmes informatiques embarqués. Il permet de
    contrôler le comportement des systèmes et de gérer les
    interactions avec les périphériques.`,
    example: `MODULE MAIN
  PROCESS
    CALL SUBROUTINE
  END PROCESS
END MODULE`,
  },
  {
    name: "ALI",
    definition: `I (Assembly Language Interpreter) est un langage de
    programmation intermédiaire utilisé pour la représentation et
    l'exécution de programmes en langage d'assemblage. Il est souvent
    utilisé dans les systèmes de compilation et d'émulation.`,
    example: `LOAD MEMORY
  ASSEMBLE PROGRAM
  EXECUTE PROGRAM
END LOAD`,
  },
  {
    name: "Abundance",
    definition: `e est un langage de programmation fonctionnel conçu pour
la modélisation financière et l'analyse quantitative. Il est
utilisé dans les domaines de la finance, des statistiques et de
l'économie.`,
    example: `DEFINE FUNCTION
  PARAMETERS
END FUNCTION`,
  },
  {
    name: "ACC",
    definition: `C (A Class Compiler) est un langage de programmation orienté
    objet conçu pour l'enseignement de la programmation. Il se
    distingue par sa simplicité syntaxique et sa facilité de
    compréhension.`,
    example: `class HelloWorld {
  static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`,
  },
  {
    name: "Accent",
    definition: `t est un langage de programmation conçu pour la programmation
    d'applications d'entreprise. Il met l'accent sur la simplicité, la
    fiabilité et les performances élevées.`,
    example: `function hello() {
  return "Bonjour, monde !";
}`,
  },
  {
    name: "ActForex",
    definition: `x est une plateforme de trading en ligne qui fournit un
    langage de script pour automatiser les stratégies de trading. Il
    permet aux traders de créer des indicateurs personnalisés et des
    algorithmes de trading.`,
    example: `if (Ask > Bid) {
  CloseOrder();
}`,
  },
  {
    name: "Ace DASL",
    definition: `e DASL (A Classroom Environment for DAta Structure Learning) est
    un langage de programmation utilisé dans le domaine de l'éducation
    pour enseigner les structures de données et les concepts de
    programmation. Il est spécialement conçu pour faciliter
    l'apprentissage des étudiants en fournissant un environnement
    d'apprentissage interactif.`,
    example: `program HelloWorld;
begin
  WriteLn('Hello, World!');
end.`,
  },
  {
    name: "ACT-III",
    definition: `T-III (Actor-based Concurrent Thing) est un langage de
    programmation orienté objet et concurrent. Il est basé sur le
    modèle d'acteur, où les entités autonomes appelées acteurs
    interagissent entre elles en échangeant des messages. ACT-III est
    utilisé dans le domaine des systèmes distribués et de
    l'informatique concurrente.`,
    example: `actor HelloWorld {
  behavior {
    receive {
      Hello() -&gt; {
        print("Hello, World!");
      }
    }
  }
}`,
  },
  {
    name: "Ada",
    definition: `a est un langage de programmation à usage général développé à
    l'origine pour répondre aux besoins des systèmes embarqués et des
    applications critiques. Il met l'accent sur la fiabilité, la
    sécurité et la maintenabilité du code. Ada est utilisé dans des
    domaines tels que l'aérospatiale, la défense et les systèmes de
    transport.`,
    example: `with Ada.Text_IO;
use Ada.Text_IO;
procedure HelloWorld is
begin
   Put_Line("Hello, World!");
end HelloWorld;`,
  },
  {
    name: "Adenine",
    definition: `e est un langage de programmation fonctionnel conçu pour le
    développement d'applications Web. Il est basé sur le langage
    Scheme et offre des fonctionnalités avancées pour la programmation
    fonctionnelle ainsi que des outils intégrés pour la manipulation
    des données et la génération de pages Web dynamiques.`,
    example: `(define (hello-world)
  "Hello, World!")`,
  },
  {
    name: "Afnix",
    definition: `x est un langage de programmation interprété et extensible. Il
    combine des fonctionnalités de programmation fonctionnelle,
    orientée objet et impérative. Afnix est conçu pour être utilisé
    dans divers domaines, notamment le développement d'applications
    Web, les scripts système et les applications distribuées.`,
    example: `(define hello-world
  "Hello, World!")`,
  },
  {
    name: "Agora",
    definition: `a est un langage de programmation conçu pour le développement
    d'applications distribuées et parallèles. Il offre des
    fonctionnalités avancées pour la programmation concurrente et la
    communication entre les processus. Agora est souvent utilisé pour
    construire des systèmes distribués hautement performants.`,
    example: `process HelloWorld {
  behavior {
    receive {
      Hello -&gt; {
        print("Hello, World!");
      }
    }
  }
}`,
  },
  {
    name: "AIS Balise",
    definition: `S Balise est un langage de programmation utilisé dans le domaine
    de la signalisation maritime. Il est spécifiquement conçu pour
    programmer les balises AIS (Automatic Identification System)
    utilisées pour la surveillance et la communication entre les
    navires. AIS Balise permet de contrôler les informations
    transmises par les balises AIS.`,
    example: `balise {
  emit "Hello, World!";
}`,
  },
  {
    name: "Aikido",
    definition: `o est un langage de programmation orienté objet utilisé pour
    le développement d'applications distribuées et concurrentes. Il
    offre des fonctionnalités avancées pour la programmation parallèle
    et la communication entre les objets. Aikido est basé sur le
    modèle d'acteur et est utilisé dans des systèmes nécessitant une
    haute performance et une grande scalabilité.`,
    example: `class HelloWorld {
  def main() {
    println("Hello, World!");
  }
}`,
  },
  {
    name: "Alef",
    definition: `f est un langage de programmation impératif développé à
    l'Université de Californie à Berkeley. Il a été conçu pour la
    programmation concurrente et parallèle et intègre des
    fonctionnalités telles que les goroutines et les canaux pour
    faciliter la communication entre les processus.`,
    example: `module main;
import "sys";
const (
    N = 10;
    MAX = 1000;
)
var (
    numbers: array of int;
)

init {
    numbers = make(array of int, N);
    for i := 0; i < N; i++ {
        numbers[i] = i * MAX / N;
    }
    sys->print("Numbers: ", numbers, "\n");
}`,
  },
  {
    name: "Algebraic Logic Functional programming language",
    definition: `c Logic Functional (ALF) est un langage de programmation
basé sur la logique algébrique et fonctionnelle. Il combine des
concepts de programmation logique avec des fonctions d'ordre
supérieur et des types de données algébriques, ce qui permet une
programmation déclarative et expressive.`,
    example: `sort list : list of int {
  nil {
    []
  } | {
    insert(x, sort(tail))
  }
}

insert x:list of int, y:list of int : list of int {
  nil {
    [x]
  } | {
    if x<=head then
      [x,y]
    else
      [head, insert(x,tail)]
  }
}`,
  },
  {
    name: "Algol 60",
    definition: `l 60 est un langage de programmation impératif qui a été
    développé dans les années 1960. Il a joué un rôle important dans
    le développement des langages de programmation modernes et a
    introduit de nombreuses fonctionnalités clés, telles que les blocs
    structurés, les variables locales statiques, la récursivité et la
    portée lexicale.`,
    example: `PROCEDURE factor(n);
    BEGIN INTEGER i;
      FOR i := 2 STEP 1 UNTIL n DIV 2 DO
        IF n MOD i = 0 THEN
          BEGIN print(i); factor(n DIV i); RETURN END
        END
      END
    END;
    BEGIN INTEGER n;
      read(n); factor(n); print(n)
    END.`,
  },
  {
    name: "Algol 68",
    definition: `l 68 est un langage de programmation impératif, orienté objet
    et fonctionnel qui a été conçu pour succéder à Algol 60. Il
    propose de nombreuses fonctionnalités avancées, notamment des
    types de données complexes, des structures flexibles et des
    opérations sur les listes et les tableaux.`,
    example: `PROC comb := (INT n, INT k)VOID:
    (
      INT i, c;
      IF k = 0 | n = k THEN
        c := 1
      ELSE
        c := comb(n - 1, k - 1) + comb(n - 1, k)
      FI;
      print(c)
    );
    comb(5, 2)`,
  },
  {
    name: "Algol W",
    definition: `l W est une version étendue du langage Algol 60 qui a été
    développée dans les années 1980. Elle a introduit des
    fonctionnalités supplémentaires telles que la gestion des
    exceptions, les expressions rationnelles et les types de données
    abstraits, ce qui en fait un langage plus puissant et plus
    expressif.`,
    example: `PROCEDURE Reverse(INPUT, OUTPUT);
  WHILE INPUT > 0 DO
    WRITE(INPUT MOD 10); INPUT := INPUT DIV 10
  END
END Reverse;

VAR n: INTEGER;

BEGIN
  READ(n); Reverse(n)
END.`,
  },
  {
    name: "Alice",
    definition: `e est un langage de programmation orienté objet conçu pour
    l'enseignement de la programmation et la création d'environnements
    de réalité virtuelle. Il facilite la création d'animations 3D
    interactives en offrant des fonctionnalités spécifiques aux
    objets, telles que la manipulation d'objets virtuels, les
    interactions utilisateur et la gestion de la physique.`,
    example: `class MyScene : Scene {
    function void setup() {
        setLight(true);
        addSphere("MySphere");
        setCameraPosition(0, 0, -8);
    }
    
    function void myMethod() {
        // Code de la méthode
    }
}`,
  },
  {
    name: "Ambi",
    definition: `i est un langage de programmation fonctionnel pur qui met
    l'accent sur l'expressivité et la concision du code. Il prend en
    charge des fonctionnalités avancées telles que les types
    dépendants, l'inférence de types, la correspondance de motifs et
    les fonctions d'ordre supérieur, ce qui en fait un langage
    puissant pour la programmation fonctionnelle.`,
    example: `let rec factorial = fun (n: int) -> if n = 0 then 1 else n * factorial (n-1) in
    print_int (factorial 5)`,
  },
  {
    name: "Amiga E",
    definition: `a E est un langage de programmation impératif et orienté objet
    qui a été développé pour la plateforme informatique Amiga dans les
    années 1990. Il combine des fonctionnalités du langage C avec des
    concepts orientés objet, tels que l'encapsulation, l'héritage et
    le polymorphisme, ce qui facilite le développement de logiciels
    pour l'Amiga.`,
    example: ` Exemple de code pour afficher "Hello, World!" en utilisant Amiga E
PROC main()
  WriteF('Hello, World!')
ENDPROC`,
  },
  {
    name: "AML",
    definition: `L (Attribute Manipulation Language) est un langage de
    programmation utilisé pour manipuler des données avec des
    attributs. Il est souvent utilisé dans le domaine de la
    modélisation des données et de la gestion des métadonnées, où il
    permet de spécifier et de manipuler des attributs d'objets ou
    d'entités.`,
    example: `CREATE TYPE Person EXTENDS Entity;
    ATTRIBUTE name : STRING;
    ATTRIBUTE age : INTEGER;
    ENDTYPE;

CREATE Person p1;
p1.name := "John";
p1.age := 30;`,
  },
  {
    name: "AMOS",
    definition: `S (AMOS Basic) est un langage de programmation basé sur le
    langage de programmation BASIC, conçu pour le développement de
    jeux sur la plateforme Amiga. Il offre des fonctionnalités
    spécifiques aux jeux, telles que la gestion des sprites, des
    animations, des effets sonores et des contrôles de jeu, ce qui en
    fait un langage populaire parmi les développeurs de jeux sur
    Amiga.`,
    example: `; Exemple de code pour afficher "Hello, World!" en utilisant AMOS Basic
SCREEN OPEN 0
PRINT "Hello, World!"
SCREEN CLOSE 0`,
  },
  {
    name: "AMPLE",
    definition: `E est un langage de programmation de script qui a été
    développé pour la création d'applications et de sites web
    interactifs. Il met l'accent sur la manipulation du DOM (Document
    Object Model) et offre des fonctionnalités telles que les
    événements, les animations, les requêtes HTTP et la manipulation
    des éléments de la page, ce qui permet de créer des expériences
    utilisateur dynamiques.`,
    example: `&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Exemple AMPLE&lt;/title&gt;
    &lt;script type="text/ample"&gt;
      $window.onload = function() {
        var button = $id("myButton");
        button.onclick = function() {
          alert("Hello, AMPLE!");
        };
      };
    &lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;button id="myButton"&gt;Cliquez-moi&lt;/button&gt;
  &lt;/body&gt;
&lt;/html&gt;`,
  },
  {
    name: "AppleScript",
    definition: `t est un langage de script utilisé sur les systèmes
    d'exploitation macOS. Il permet d'automatiser des tâches et
    d'interagir avec les applications et les services du système.`,
    example: `tell application "Finder"
  display dialog "Hello, World!"
end tell`,
  },
  {
    name: "Arc",
    definition: `c est un langage de programmation fonctionnel et dialecte de
    Lisp. Il se caractérise par sa simplicité syntaxique et son
    orientation vers la programmation web.`,
    example: `(define (factorial n)
  (if (<= n 1)
    1
    (* n (factorial (- n 1)))))`,
  },
  {
    name: "Ariberion",
    definition: `n est un langage de programmation de haut niveau utilisé
    pour le développement de jeux vidéo. Il offre des fonctionnalités
    spécifiques au développement de jeux et facilite la gestion des
    graphiques, du son et des interactions utilisateur.`,
    example: `import Ariberion

def main():
  window = create_window("Mon jeu", 800, 600)
  sprite = load_sprite("image.png")
  
  while True:
    process_events()
    draw_sprite(sprite, 100, 100)
    update_screen()

if __name__ == "__main__":
  main()`,
  },
  {
    name: "Arobase",
    definition: `e est un symbole utilisé dans les adresses e-mail pour
    séparer le nom d'utilisateur du nom de domaine. Il est également
    utilisé dans certains langages de programmation pour représenter
    des opérations telles que la concaténation de chaînes.`,
    example: `const email = "exemple@example.com";
console.log(email.split("@"));`,
  },
  {
    name: "Assembleur",
    definition: `L'assembleur est un langage de programmation bas niveau qui permet
    de programmer directement les instructions du processeur d'un
    ordinateur. Il est utilisé pour écrire des programmes très
    optimisés et spécifiques à une architecture matérielle donnée.`,
    example: `mov eax, 1
mov ebx, 0
int 0x80`,
  },
  {
    name: "ASP.NET",
    definition: `P.NET est un framework de développement web créé par Microsoft.
    Il permet de créer des applications web dynamiques en utilisant
    les langages de programmation C# ou Visual Basic.NET. ASP.NET
    offre une approche orientée objet et prend en charge la gestion
    des événements, la gestion de la sécurité, le traitement des
    formulaires, etc.`,
    example: `&lt;%@ Page Language="C#" %&gt;
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Mon site ASP.NET&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Bienvenue sur mon site ASP.NET !&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;`,
  },
  {
    name: "ATS",
    definition: `S (Applied Type System) est un langage de programmation
    statiquement typé qui intègre des fonctionnalités avancées de
    types, de preuves et de programmation fonctionnelle. Il permet de
    développer des applications à haut niveau d'assurance, avec une
    vérification statique avancée des propriétés du programme.`,
    example: `fun fib(n: int): int =
if n <= 1 then n else fib(n-1) + fib(n-2)

val result = fib(10)
println("Le 10ème nombre de Fibonacci est : " + result)`,
  },
  {
    name: "AUPL",
    definition: `L (Advanced User Programming Language) est un langage de
    programmation spécifique au domaine qui permet aux utilisateurs de
    créer des applications personnalisées à l'aide d'une interface
    graphique intuitive. Il est souvent utilisé dans des
    environnements où la programmation traditionnelle peut être
    complexe pour les utilisateurs finaux.`,
    example: `button("Cliquez ici") {
alert("Vous avez cliqué sur le bouton !")
}`,
  },
  {
    name: "AutoHotkey",
    definition: `y est un langage de script qui permet d'automatiser des
    tâches répétitives sur un ordinateur Windows. Il permet de créer
    des raccourcis clavier personnalisés, d'automatiser des actions de
    souris, de contrôler des applications et d'interagir avec des
    fichiers et des dossiers.`,
    example: `#IfWinActive, Notepad
^s::
SendInput, Exemple de sauvegarde automatique
return`,
  },
  {
    name: "AutoIt",
    definition: `t est un langage de script conçu pour automatiser les tâches
    sous Windows. Il permet de créer des scripts qui contrôlent des
    applications, effectuent des actions de souris et de clavier,
    manipulent des fichiers et des dossiers, et effectuent d'autres
    opérations automatisées.`,
    example: `Run("notepad.exe")
WinWaitActive("Untitled - Notepad")
Send("Hello, world!")
WinClose("Untitled - Notepad")`,
  },
  {
    name: "Averest",
    definition: `t est un langage de programmation fonctionnel et
    concurrentiel utilisé pour le développement de systèmes embarqués
    critiques. Il offre des fonctionnalités de vérification formelle
    et de preuves automatiques pour garantir la sûreté et la sécurité
    des systèmes logiciels et matériels.`,
    example: `input int x, y;
output int result;

if (x > y) {
result = x - y;
} else {
result = y - x;
}`,
  },
  {
    name: "awk",
    definition: `k est un langage de programmation utilisé pour le traitement de
    fichiers et la génération de rapports. Il est couramment utilisé
    pour rechercher des motifs dans des fichiers, extraire et
    manipuler des données, et générer des rapports basés sur ces
    données.`,
    example: `awk '/motif/ { print $1 }' fichier.txt`,
  },
  {
    name: "axe parser",
    definition: `L'axe parser est un outil utilisé pour analyser et manipuler des
    documents XML. Il permet de parcourir la structure hiérarchique
    d'un document XML et d'extraire des informations spécifiques en
    utilisant des requêtes XPath.`,
    example: `import org.xml.sax.Attributes;
import org.xml.sax.helpers.DefaultHandler;

public class MyHandler extends DefaultHandler {
// Méthodes de manipulation du document XML
}`,
  },
  {
    name: "B",
    definition: `B est un langage de programmation procédural créé par Ken Thompson
    en 1970. Il a été utilisé pour le développement du système
    d'exploitation Unix. B est considéré comme l'ancêtre du langage de
    programmation C.`,
    example: `int main() {
  printf("Bonjour, monde !\n");
  return 0;
}`,
  },
  {
    name: "Bah-Lang",
    definition: `h-Lang est un langage de programmation conçu pour être simple et
    facile à apprendre. Il est basé sur le langage de script Lua et
    offre des fonctionnalités supplémentaires pour le développement de
    jeux et d'applications graphiques.`,
    example: `fonction bonjour() {
  afficher("Bonjour, monde !");
}

bonjour();`,
  },
  {
    name: "BASIC",
    definition: `C (Beginner's All-purpose Symbolic Instruction Code) est un
    langage de programmation de haut niveau conçu pour être simple à
    utiliser et à apprendre. Il a été largement utilisé dans les
    années 1970 et 1980 pour l'enseignement de la programmation.`,
    example: `10 PRINT "Bonjour, monde !"
20 GOTO 10`,
  },
  {
    name: "BASICA",
    definition: `A est un dialecte du langage de programmation BASIC qui a été
    utilisé sur les premiers ordinateurs personnels IBM. Il a été
    inclus dans le système d'exploitation PC DOS.`,
    example: `10 PRINT "Bonjour, monde !"
20 GOTO 10`,
  },
  {
    name: "Basic Nspire",
    definition: `c Nspire est un langage de programmation utilisé sur les
    calculatrices graphiques de la série TI-Nspire de Texas
    Instruments. Il permet aux utilisateurs de créer des programmes
    pour effectuer des calculs et des tâches spécifiques sur leurs
    calculatrices.`,
    example: `Disp "Bonjour, monde !"`,
  },
  {
    name: "BlitzBasic",
    definition: `c est un langage de programmation utilisé pour le
    développement de jeux vidéo. Il offre des fonctionnalités
    spécifiques aux jeux, telles que la gestion des graphiques, du son
    et des entrées utilisateur.`,
    example: `Graphics 800, 600, 32
SetBuffer BackBuffer()

Print "Bonjour, monde !"

Flip
WaitKey()`,
  },
  {
    name: "DarkBasic",
    definition: `c est un langage de programmation orienté vers la création
    de jeux vidéo. Il simplifie le processus de développement de jeux
    en offrant une interface conviviale et des fonctionnalités
    spécifiques aux jeux.`,
    example: `Print "Bonjour, monde !"
Delay 2000`,
  },
  {
    name: "FreeBasic",
    definition: `c est un langage de programmation compatible avec le
    langage BASIC. Il permet de développer des applications pour
    différentes plateformes, y compris Windows, Linux et DOS.`,
    example: `#include "fbgfx.bi"

ScreenRes 800, 600, 32

Print "Bonjour, monde !"
Sleep`,
  },
  {
    name: "GW-BASIC",
    definition: `W-BASIC est une version du langage de programmation BASIC
    développée par Microsoft. Il a été largement utilisé sur les
    premiers ordinateurs personnels IBM.`,
    example: `10 PRINT "Bonjour, monde !"
20 GOTO 10`,
  },
  {
    name: "Microsoft Small Basic",
    definition: `t Small Basic est un langage de programmation simplifié
    conçu pour les débutants. Il offre une interface conviviale et des
    fonctionnalités de base pour apprendre les concepts de la
    programmation.`,
    example: `TextWindow.WriteLine("Bonjour, monde !")`,
  },
  {
    name: "PowerBasic",
    definition: `c est un langage de programmation compatible avec le
    langage BASIC. Il offre des fonctionnalités avancées et une
    meilleure performance par rapport à d'autres dialectes de BASIC.`,
    example: `PRINT "Bonjour, monde !"
SLEEP`,
  },
  {
    name: "PureBasic",
    definition: `c est un langage de programmation multiplateforme. Il
    offre une syntaxe simple et des fonctionnalités avancées pour le
    développement d'applications professionnelles.`,
    example: `Procedure HelloWorld()
  Debug "Bonjour, monde !"
EndProcedure
          
HelloWorld()`,
  },
  {
    name: "QuickBasic",
    definition: `c est un langage de programmation structuré de haut
    niveau développé par Microsoft. Il est dérivé du langage BASIC et
    était principalement utilisé pour le développement de logiciels
    pour les systèmes d'exploitation MS-DOS.`,
    example: `PRINT "Bonjour, monde !"
END`,
  },
  {
    name: "SmallBasic",
    definition: `c est un langage de programmation développé par
    Microsoft, conçu pour enseigner les concepts de base de la
    programmation de manière ludique et accessible aux débutants. Il
  est basé sur le langage BASIC.`,
    example: `TextWindow.WriteLine("Bonjour, monde !")`,
  },
  {
    name: "TI-Basic",
    definition: `I-Basic est un langage de programmation utilisé sur les
    calculatrices graphiques de Texas Instruments (TI). Il permet aux
    utilisateurs de créer des programmes personnalisés pour effectuer
    des calculs, résoudre des problèmes mathématiques et réaliser
    diverses tâches sur les calculatrices TI.`,
    example: `:Disp "Bonjour, monde !`,
  },
  {
    name: "True Basic",
    definition: `e Basic est un langage de programmation de haut niveau basé sur
    le langage BASIC. Il est conçu pour être simple et convivial, tout
    en offrant des fonctionnalités avancées pour le développement de
    logiciels. True Basic est multiplateforme et peut être utilisé
    pour créer des applications sur différents systèmes
    d'exploitation.`,
    example: `PRINT "Bonjour, monde !"`,
  },
  {
    name: "Turbo Basic",
    definition: `o Basic est un langage de programmation dérivé du langage
    BASIC et développé par Borland International. Il était populaire
    dans les années 1980 et 1990, et était souvent utilisé pour le
    développement de logiciels pour les systèmes d'exploitation
    MS-DOS.`,
    example: `PRINT "Bonjour, monde !"`,
  },
  {
    name: "Visual Basic",
    definition: `l Basic (VB) est un langage de programmation de haut niveau
    développé par Microsoft. Il fait partie de la famille des langages
    BASIC et est souvent utilisé pour le développement d'applications
    Windows avec une interface graphique conviviale.`,
    example: `MsgBox "Bonjour, monde !"`,
  },
  {
    name: "wxBasic",
    definition: `c est un langage de programmation basé sur le langage BASIC
    et utilisé pour développer des applications à l'aide de la
    bibliothèque wxWidgets. Il permet de créer des interfaces
    graphiques multiplateformes et est principalement utilisé pour le
    développement d'applications de bureau.`,
    example: `PRINT "Bonjour, monde !"`,
  },
  {
    name: "Bash (Bourne-Again shell)",
    definition: `h (Bourne-Again shell) est un interpréteur de commandes et un
    langage de script utilisé principalement sur les systèmes
    d'exploitation basés sur UNIX et Linux. Il offre une interface en
    ligne de commande permettant d'exécuter des commandes système et
    d'automatiser des tâches.`,
    example: `echo "Bonjour, monde !"`,
  },
  {
    name: "Batch file (fichier bat)",
    definition: `e Batch file (fichier bat) est un langage de script utilisé sur
    les systèmes d'exploitation Windows. Il permet d'exécuter une
    série de commandes en séquence et d'automatiser des tâches système
    courantes.`,
    example: `@echo off
echo Bonjour, monde !
pause`,
  },
  {
    name: "bc",
    definition: `c est un langage de calcul utilisé comme calculatrice de ligne de
    commande sur les systèmes UNIX et Linux. Il permet d'effectuer des
    calculs arithmétiques, des opérations mathématiques avancées et
    des manipulations de données.`,
    example: `scale=2
3.14 * 2`,
  },
  {
    name: "BCPL",
    definition: `L (Basic Combined Programming Language) est un langage de
    programmation de haut niveau développé au début des années 1960.
    Il a influencé de nombreux langages ultérieurs, notamment le
    langage C. BCPL était utilisé pour le développement de logiciels
    sur les premiers ordinateurs.`,
    example: `LET x = 10
PRINT x + 5`,
  },
  {
    name: "BeanShell",
    definition: `l est un langage de script et un interpréteur Java qui
    permet d'exécuter du code Java de manière dynamique. Il est
    souvent utilisé pour des tâches d'automatisation, des tests ou des
    prototypages rapides.`,
    example: `int x = 5;
int y = 10;
int sum = x + y;
System.out.println("La somme est : " + sum);`,
  },
  {
    name: "Beef",
    definition: `f est un langage de programmation de haut niveau spécialement
    conçu pour le développement de logiciels embarqués et de systèmes
    en temps réel. Il met l'accent sur la sûreté, la sécurité et la
    performance.`,
    example: `func main() {
print("Hello, world!")
}`,
  },
  {
    name: "Befunge",
    definition: `e est un langage de programmation exotique basé sur une
    grille bidimensionnelle. Il est conçu pour être difficile à lire
    et à comprendre, ce qui en fait un langage amusant pour des défis
    de programmation.`,
    example: `0"!dlroW ,olleH">:#,_@`,
  },
  {
    name: "Bennu",
    definition: `u est un langage de programmation orienté objet conçu pour le
    développement de jeux vidéo. Il fournit des fonctionnalités telles
    que la gestion des graphiques, de l'audio et de l'entrée
    utilisateur.`,
    example: `Import "mod_say";
Procedure Main()
say("Hello, world!")
End`,
  },
  {
    name: "Bertrand",
    definition: `d est un langage de programmation fonctionnel basé sur
    l'interprétation de termes. Il offre un système de types puissant
    et des fonctionnalités avancées pour la manipulation des données.`,
    example: `add = \\x y -> x + y
main = add 2 3`,
  },
  {
    name: "BETA",
    definition: `A est un langage de programmation orienté objet conçu pour la
    programmation interactive. Il met l'accent sur la facilité
    d'utilisation, la modularité et la gestion des exceptions.`,
    example: `class Person:
attributes
  name: Text
operations
  greet: () -> Text
  greet() -> "Hello, I'm " & name

person = new Person(name: "John")
print(person.greet())`,
  },
  {
    name: "Bigwig",
    definition: `g est un langage de programmation orienté objet utilisé pour
    développer des applications dans le domaine de la bioinformatique.
    Il offre des fonctionnalités spécifiques pour la manipulation et
    l'analyse de données biologiques.`,
    example: `class Sequence {
private string sequenceData;

public Sequence(string data) {
  sequenceData = data;
}

public void Analyze() {
  // Code d'analyse de la séquence
}
}`,
  },
  {
    name: "Bistro",
    definition: `o est un langage de programmation fonctionnel utilisé pour
    l'analyse et la manipulation de données. Il offre des
    fonctionnalités avancées pour le traitement de listes et de
    tableaux de données.`,
    example: `let data = [1, 2, 3, 4, 5];
let doubledData = map(\(x) => x * 2, data);
print(doubledData);`,
  },
  {
    name: "BitC",
    definition: `C est un langage de programmation bas niveau conçu pour le
    développement de systèmes d'exploitation et de pilotes de
    périphériques. Il offre un contrôle précis sur le matériel et
    permet une programmation efficace en termes de performance.`,
    example: `void main() {
// Code BitC
}`,
  },
  {
    name: "BLISS",
    definition: `S est un langage de programmation orienté objet utilisé pour
    le développement de systèmes d'exploitation et de logiciels
    embarqués. Il offre des fonctionnalités avancées de gestion de la
    mémoire et de la concurrence.`,
    example: `class MyClass {
private int myData;

public constructor(int data) {
  myData = data;
}

public method1() {
  // Code de la méthode 1
}

public method2() {
  // Code de la méthode 2
}
}`,
  },
  {
    name: "BlitzBasic",
    definition: `c est un langage de programmation dérivé du langage
    BASIC, utilisé pour le développement de jeux et d'applications
    multimédias. Il offre des fonctionnalités spécifiques pour la
    création de graphiques et de sons.`,
    example: `Graphics(800, 600, 32);
SetBuffer(FrameBuffer());

While Not KeyDown(KEY_ESCAPE)
Cls();
DrawText(10, 10, "Hello, world!");
Flip();
Wend`,
  },
  {
    name: "Blueprint Visual Scripting",
    definition: `t Visual Scripting est un langage de programmation visuel
    utilisé dans le moteur de jeu Unreal Engine. Il permet de créer
    des logiques de jeu en reliant des nœuds graphiques représentant
    des actions et des conditions.`,
    example: `            <pre><code>OnOverlapBegin()
SpawnEmitter(ParticleSystem, Location);
PlaySound(SoundEffect);
End`,
  },
  {
    name: "Blue",
    definition: `e est un langage de programmation utilisé pour la création
    d'applications mobiles et de jeux sur la plateforme Blue Brain
    Project. Il offre des fonctionnalités spécifiques pour la
    simulation de réseaux de neurones et la modélisation biologique.`,
    example: `neuron1 = Neuron();
neuron2 = Neuron();
connection = Connection(neuron1, neuron2);
network = Network([neuron1, neuron2], [connection]);

while Simulating {
network.update();
plot(network.activity());
}`,
  },
  {
    name: "Bon",
    definition: `n est un langage de programmation fonctionnel conçu pour être
    simple, élégant et efficace. Il met l'accent sur l'immuabilité des
    données et la programmation déclarative.`,
    example: `function add(a, b) {
return a + b;
}`,
  },
  {
    name: "Boo",
    definition: `o est un langage de programmation orienté objet, statiquement
    typé et basé sur le framework .NET. Il est conçu pour être simple,
    expressif et flexible.`,
    example: `class MyClass:
def __init__(self):
  self.message = "Hello, world!"

def print_message(self):
  print(self.message)`,
  },
  {
    name: "Boomerang",
    definition: `g est un langage de programmation de haut niveau utilisé
    principalement pour l'analyse et la transformation de code. Il est
    souvent utilisé dans le domaine de la rétro-ingénierie logicielle.`,
    example: `proc main() {
printf("Hello, world!");
}`,
  },
  {
    name: "Bosque",
    definition: `e est un langage de programmation fonctionnel et structuré
    qui vise à fournir une syntaxe claire et un modèle d'exécution
    simple. Il est conçu pour faciliter la compréhension et la
    vérification formelle des programmes.`,
    example: `namespace HelloWorld {
function main(): String {
  return "Hello, world!";
}
}`,
  },
  {
    name: "Bourne shell (sh)",
    definition: `e shell, abrégé en sh, est un langage de script utilisé
    principalement sur les systèmes Unix et Linux pour
    l'automatisation des tâches et l'écriture de scripts système.`,
    example: `#!/bin/sh
echo "Hello, world!"`,
  },
  {
    name: "BPEL",
    definition: `L (Business Process Execution Language) est un langage de
    modélisation utilisé pour spécifier des processus métier et
    orchestrer des services web.`,
    example: `&lt;bpel:process name="HelloWorldProcess" targetNamespace="http://example.com/hello" xmlns:bpel="http://docs.oasis-open.org/wsbpel/2.0/process/executable"&gt;
&lt;bpel:sequence&gt;
  &lt;bpel:receive name="receiveInput" partnerLink="client" operation="operation1" variable="inputVariable" createInstance="yes"/&gt;
  &lt;bpel:invoke name="invokeService" partnerLink="service" operation="operation2" inputVariable="inputVariable" outputVariable="outputVariable"/&gt;
  &lt;bpel:reply name="replyOutput" partnerLink="client" operation="operation1" variable="outputVariable"/&gt;
&lt;/bpel:sequence&gt;
&lt;/bpel:process&gt;`,
  },
  {
    name: "Brainfuck",
    definition: `k est un langage de programmation minimaliste et
    esotérique. Il utilise un modèle de calcul très minimaliste avec
    un ensemble limité d'instructions pour manipuler un ruban de
    mémoire.`,
    example: `++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.`,
  },
  {
    name: "BUGSYS",
    definition: `S est un langage de programmation orienté objet utilisé pour
    l'apprentissage de la programmation. Il est souvent utilisé pour
    enseigner les concepts de base de la programmation et la
    résolution de problèmes.`,
    example: `classe "Bonjour Monde" [
methode "afficherMessage" [
  ecrire "Bonjour, monde!"
]
]`,
  },
  {
    name: "BuildProfessional",
    definition: `l est un langage de script utilisé dans
    l'environnement de développement de jeux vidéo Unity pour
    automatiser le processus de construction des jeux.`,
    example: `// Définition des étapes de construction
target Setup {
exec "npm install"
}

target Build {
exec "unity -batchmode -buildTarget StandaloneWindows64 -projectPath MyGame"
}

target Deploy {
exec "scp MyGame.exe user@server:/path/to/deploy"
}

// Exécution des étapes
run Setup
run Build
run Deploy`,
  },
  {
    name: "C",
    definition: `C est un langage de programmation impératif et procédural qui
    permet de développer des logiciels système et des applications. Il
  est largement utilisé pour sa performance et son contrôle bas
    niveau.`,
    example: `#include &lt;stdio.h&gt;

int main() {
printf("Bonjour, monde !\n");
return 0;
}`,
  },
  {
    name: "C--",
    definition: `C-- est un langage de programmation impératif inspiré du langage
    C. Il offre des fonctionnalités avancées telles que la gestion
    automatique de la mémoire et la sécurité des types.`,
    example: `import io;

class HelloWorld {
public static void main(String[] args) {
  Console.printLine("Bonjour, monde !");
}
}`,
  },
  {
    name: "C++",
    definition: `C++ est un langage de programmation orienté objet dérivé du
    langage C. Il offre des fonctionnalités supplémentaires telles que
    l'encapsulation, l'héritage et le polymorphisme, ce qui permet de
    développer des applications complexes.`,
    example: `#include &lt;iostream&gt;

int main() {
std::cout << "Bonjour, monde !" << std::endl;
return 0;
}`,
  },
  {
    name: "C++11",
    definition: `C++11 est une version majeure de C++ qui a introduit de nouvelles
    fonctionnalités telles que les lambdas, les fonctions constexpr et
    l'inférence de type automatique, ce qui facilite le développement
    d'applications C++.`,
    example: `#include &lt;iostream&gt;
#include &lt;vector&gt;

int main() {
std::vector&lt;int&gt; numbers = {1, 2, 3, 4, 5};
for (int number : numbers) {
  std::cout &lt;&lt; number &lt;&lt; " ";
}
std::cout &lt;&lt; std::endl;
return 0;
}`,
  },
  {
    name: "C++14",
    definition: `C++14 est une version ultérieure de C++ qui a apporté des
    améliorations à la version C++11, notamment en matière de lambdas,
    de types constexpr et d'initialisation des variables. Il offre une
    syntaxe plus concise et plus expressive.`,
    example: `#include &lt;iostream&gt;
#include &lt;vector&gt;

int main() {
std::vector&lt;int&gt; numbers = {1, 2, 3, 4, 5};
for (auto number : numbers) {
  std::cout &lt;&lt; number &lt;&lt; " ";
}
std::cout &lt;&lt; std::endl;
return 0;
}`,
  },
  {
    name: "C++17",
    definition: `C++17 est une version ultérieure de C++ qui a ajouté de nouvelles
    fonctionnalités, telles que la déduction de types dans les
    variables, les boucles if constexpr et les structures if
    initiales. Elle améliore encore la productivité des développeurs
    C++.`,
    example: `#include &lt;iostream&gt;
#include &lt;vector&gt;

int main() {
std::vector&lt;int&gt; numbers = {1, 2, 3, 4, 5};
for (const auto& number : numbers) {
  std::cout &lt;&lt; number &lt;&lt; " ";
}
std::cout &lt;&lt; std::endl;
return 0;
}`,
  },
  {
    name: "C#",
    definition: `C# (prononcé "C sharp") est un langage de programmation orienté
    objet développé par Microsoft. Il est utilisé principalement pour
    le développement d'applications sur la plateforme .NET.`,
    example: `using System;

class Program {
static void Main() {
  Console.WriteLine("Bonjour, monde !");
}
}`,
  },
  {
    name: "C/AL",
    definition: `C/AL (C/SIDE/Advanced Language) est un langage de programmation
    utilisé dans le système de gestion d'entreprise Microsoft Dynamics
    NAV (Navision). Il permet de personnaliser et d'étendre les
    fonctionnalités de l'application.`,
    example: `PROCEDURE BonjourMonde@1@1();
BEGIN
MESSAGE('Bonjour, monde !');
END;`,
  },
  {
    name: "Caché ObjectScript",
    definition: `é ObjectScript est un langage de programmation utilisé dans le
    système de gestion de bases de données Caché, développé par
    InterSystems. Il est utilisé pour créer des applications et
    manipuler les données dans le système.`,
    example: `Class HelloWorld
{
ClassMethod BonjourMonde() As %Status
{
  Write "Bonjour, monde !"
  Quit $$$OK
}
}`,
  },
  {
    name: "Cameleon",
    definition: `n est un langage de programmation utilisé pour la
    modélisation et la simulation de systèmes complexes. Il permet de
    décrire les entités du système, leurs interactions et de simuler
    leur comportement.`,
    example: `MODEL HelloWorld
ENTITIES
  Entity Greeting
    Properties
      Text : String
    Behavior
      Action SayHello
        Write "Bonjour, monde !"
      EndAction
  EndEntity
ENDMODEL`,
  },
  {
    name: "Caml",
    definition: `l est une famille de langages de programmation fonctionnelle et
    impérative. Il est utilisé principalement dans le domaine de la
    programmation formelle, de l'intelligence artificielle et des
    langages de programmation fonctionnelle.`,
    example: `let rec factorial n =
if n = 0 then 1
else n * factorial (n - 1)
`,
  },
  {
    name: "Cat",
    definition: `t est une commande Unix qui permet de concaténer et afficher le
    contenu de fichiers. Elle est utilisée pour lire, écrire et
    manipuler des fichiers textuels dans un environnement de ligne de
    commande.`,
    example: `            <pre><code>cat file1.txt file2.txt`,
  },
  {
    name: "Cayenne",
    definition: `e est un framework de développement d'applications Java
    orienté objet. Il offre des fonctionnalités avancées pour la
    persistance des données et facilite la création d'applications
    Java basées sur des bases de données.`,
    example: `ObjectContext context = ...;
Artist artist = context.newObject(Artist.class);
artist.setName("John Doe");
context.commitChanges();`,
  },
  {
    name: "Cecil",
    definition: `l est un langage de programmation orienté objet et impératif
    qui prend en charge l'héritage multiple et la réflexion. Il est
    principalement utilisé pour le développement d'applications basées
    sur le framework .NET.`,
    example: `class MyClass {
void PrintMessage() {
  Console.WriteLine("Hello, world!");
}
}`,
  },
  {
    name: "Cel",
    definition: `l est un langage d'expression utilisé pour l'évaluation
    d'expressions dans les systèmes de calcul et les outils
    d'automatisation. Il est conçu pour être simple, portable et
    facile à intégrer dans d'autres langages de programmation.`,
    example: `2 + 3 * 4`,
  },
  {
    name: "Cesil",
    definition: `l est une bibliothèque .NET pour la lecture et l'écriture de
    fichiers CSV. Elle offre des fonctionnalités avancées pour le
    traitement des fichiers CSV, notamment la sérialisation et la
    désérialisation d'objets .NET.`,
    example: `using Cesil;
using System.IO;

// Lecture d'un fichier CSV
using (var reader = new StreamReader("data.csv"))
{
var config = Configuration.For&lt;Person&gt;();
using (var csvReader = config.CreateReader(reader))
{
  foreach (var row in csvReader.EnumerateAll())
  {
    // Traiter chaque ligne du fichier
    var person = row.GetCurrent();
    // ...
  }
}
}`,
  },
  {
    name: "Ceylon",
    definition: `n est un langage de programmation moderne et évolutif qui
    s'exécute sur la machine virtuelle Java (JVM) et la plateforme
    JavaScript. Il offre des fonctionnalités avancées pour le
    développement d'applications web et d'applications d'entreprise.`,
    example: `shared class Person(name, age) {
shared actual String string => "Person(name=$name, age=$age)";
}

value alice = Person("Alice", 30);
print(alice);`,
  },
  {
    name: "CFML",
    definition: `L (ColdFusion Markup Language) est un langage de script utilisé
    pour le développement d'applications web basées sur le framework
    ColdFusion. Il permet de créer des pages web dynamiques et
    interactives avec des fonctionnalités avancées.`,
    example: `&lt;cfscript&gt;
function sayHello(name) {
  writeOutput("Hello, " &amp; name &amp; "!");
}

sayHello("John");
&lt;/cfscript&gt;`,
  },
  {
    name: "Cg",
    definition: `g (C for Graphics) est un langage de programmation utilisé pour
    écrire des shaders (programmes graphiques) dans les applications
    graphiques 3D. Il permet de contrôler le rendu des objets et des
    effets visuels dans les jeux vidéo, les logiciels de modélisation
    3D et les applications graphiques avancées.`,
    example: `void vertex(inout float4 vertex : POSITION) {
// Transformation du vertex
vertex = mul(UNITY_MATRIX_MVP, vertex);`,
  },
  {
    name: "Ch interpreter",
    definition: `h interpreter est un langage de programmation de script
    open-source utilisé principalement dans le domaine de la
    simulation et du contrôle. Il est basé sur le langage C et fournit
    des fonctionnalités étendues pour le développement rapide
    d'applications.`,
    example: `printf("Bonjour, monde !\n");`,
  },
  {
    name: "Chapel",
    definition: `l est un langage de programmation parallèle développé
    spécifiquement pour les systèmes hautes performances et les
    calculs scientifiques. Il offre des fonctionnalités avancées pour
    l'écriture de programmes parallèles et distribués.`,
    example: `forall i in 1..10 do
writeln("Hello, world!");
endforall;`,
  },
  {
    name: "CHAIN",
    definition: `N est un langage de programmation développé spécifiquement
    pour l'analyse et la manipulation de chaînes de caractères. Il
    offre des fonctionnalités avancées pour les opérations de
    recherche, de remplacement et de traitement de chaînes de
    caractères.`,
    example: `string greeting = "Hello, world!";
print(greeting);`,
  },
  {
    name: "Charity",
    definition: `y est un langage de programmation fonctionnel basé sur
    Haskell. Il est utilisé pour la programmation fonctionnelle pure
    et met l'accent sur la programmation avec des fonctions et des
    structures de données immuables.`,
    example: `add : Int -&gt; Int -&gt; Int;
add x y = x + y;`,
  },
  {
    name: "Chef",
    definition: `f est un langage de programmation basé sur la cuisine. Il
    utilise une syntaxe et un vocabulaire culinaires pour décrire les
    étapes d'une recette, qui sont ensuite interprétées comme des
    instructions de programmation.`,
    example: `Ingredients.
72 g de farine
101 cl d'eau

Method.
Preheat oven to 180°C.
Mix flour and water.
Bake for 30 minutes.`,
  },
  {
    name: "CHILL",
    definition: `L (CCITT High-Level Language) est un langage de programmation
    orienté système utilisé dans les télécommunications. Il est conçu
    pour le développement de logiciels de communication et offre des
    fonctionnalités spécifiques pour ce domaine.`,
    example: `MODULE Main;
IMPORT Terminal;

BEGIN
Terminal.OutText("Hello, world!");
Terminal.OutImage;
END Main.`,
  },
  {
    name: "CHIP-8",
    definition: `P-8 est un langage de programmation utilisé pour le
    développement de jeux vidéo rétro. Il est généralement interprété
    par un émulateur et offre un ensemble d'instructions simples pour
    la création de jeux sur des machines virtuelles spécifiques.`,
    example: `6X0A 	LD Vx, byte
8XY4 	ADD Vx, Vy`,
  },
  {
    name: "chomski",
    definition: `i est un langage de programmation basé sur l'auto-référence.
    Il est conçu pour illustrer les concepts de la théorie des
    langages formels, notamment la grammaire de Chomsky.`,
    example: `a = a`,
  },
  {
    name: "CHR",
    definition: `R est un langage de programmation logique basé sur la réécriture
    de termes. Il permet de décrire des règles de réécriture et de
    résoudre des problèmes en utilisant l'unification et l'inférence
    logique.`,
    example: `:- op(700, xfx, ==>).
:- chr_constraint sum/2.

sum(X, Y) ==> Z is X + Y, write(Z).`,
  },
  {
    name: "Chrome",
    definition: `e est un navigateur web développé par Google. Il utilise le
    moteur de rendu Blink et prend en charge les langages de
    programmation tels que HTML, CSS et JavaScript pour la création
    d'applications web interactives.`,
    example: `            <pre><code>chrome.browserAction.onClicked.addListener(function(tab) {
chrome.tabs.create({ url: "https://example.com" });
});`,
  },
  {
    name: "ChucK",
    definition: `K est un langage de programmation audio orienté temps réel. Il
  est utilisé pour la création et la manipulation de sons et de
    musiques électroniques. ChucK permet de composer et d'exécuter des
    compositions sonores en temps réel.`,
    example: `SinOsc s => dac;
s.freq(440);
s.gain(0.2);
1::second => now;`,
  },
  {
    name: "CICODE",
    definition: `E est un langage de programmation utilisé pour la création
    d'animations et de jeux interactifs. Il est basé sur le langage C
    et est principalement utilisé dans le domaine de l'informatique
    graphique.`,
    example: `var obj = createObject();
obj.setPosition(100, 200);
obj.setColor(255, 0, 0);
obj.draw();`,
  },
  {
    name: "CIL",
    definition: `L (Common Intermediate Language) est un langage de bas niveau
    utilisé dans le cadre de la plateforme .NET. Il est utilisé pour
    compiler le code source des langages de programmation .NET en un
    format intermédiaire qui est ensuite exécuté par la machine
    virtuelle .NET.`,
    example: `.assembly HelloWorld { }
.method static void Main() {
ldstr "Hello, world!"
call void [mscorlib]System.Console::WriteLine(string)
ret
}`,
  },
  {
    name: "Cilk",
    definition: `k est une extension du langage C qui permet la programmation
    multithreaded. Il permet d'exprimer facilement des tâches
    parallèles et d'exploiter les capacités de calcul parallèle des
    processeurs modernes.`,
    example: `#include &lt;stdio.h&gt;
#include &lt;cilk/cilk.h&gt;

int sum(int a, int b) {
return a + b;
}

int main() {
int result = cilk_spawn sum(2, 3);
cilk_sync;
printf("Result: %d\n", result);
return 0;
}`,
  },
  {
    name: "CL",
    definition: `L (Common Lisp) est une famille de langages de programmation
    basée sur le langage Lisp. Il est utilisé pour le développement de
    logiciels dans des domaines tels que l'intelligence artificielle,
    le traitement du langage naturel et la programmation symbolique.`,
    example: `(defun factorial (n)
(if (<= n 1)
    1
    (* n (factorial (- n 1)))))

(print (factorial 5))`,
  },
  {
    name: "Claire",
    definition: `e est un langage de programmation déclaratif utilisé pour le
    développement de systèmes d'information. Il se base sur le
    paradigme de la programmation logique et permet de spécifier des
    contraintes et des règles logiques pour résoudre des problèmes
    complexes.`,
    example: `PERSONNE EST_UN_ADULTE X:-
age(X,A), A &gt;= 18.`,
  },
  {
    name: "Clarion",
    definition: `n est un langage de programmation de haut niveau utilisé
    pour le développement de logiciels d'entreprise. Il est souvent
    utilisé pour la création de systèmes de gestion de bases de
    données et d'applications de gestion.`,
    example: `PROGRAM
MAP
INCLUDE('equates.clw')
INCLUDE('structs.clw')
INCLUDE('constants.clw')
INCLUDE('procedures.clw')
INCLUDE('windows.clw')
INCLUDE('reports.clw')
END

INCLUDE('events.clw')

MAP
INCLUDE('utilities.clw')
INCLUDE('functions.clw')
INCLUDE('classes.clw')
INCLUDE('accessories.clw')
INCLUDE('data.clw')
END

INCLUDE('modules.clw')

INCLUDE('extensions.clw')

INCLUDE('main.clw')`,
  },
  {
    name: "Clean",
    definition: `n est un langage de programmation fonctionnelle pure. Il est
    conçu pour faciliter le développement de programmes à la fois
    efficaces et fiables en mettant l'accent sur la pureté des
    fonctions et l'absence d'effets de bord.`,
    example: `factorial :: Int -&gt; Int
factorial 0 = 1
factorial n = n * factorial (n - 1)

main :: IO ()
main = do
let result = factorial 5
print result`,
  },
  {
    name: "Clipper",
    definition: `r est un langage de programmation de haut niveau utilisé
    pour le développement d'applications basées sur la base de données
    xBase. Il est souvent utilisé pour le développement de logiciels
    de gestion d'entreprise.`,
    example: `PROCEDURE Main
  LOCAL cName := "John Doe"
  ? "Hello, " + cName + "!"
RETURN`,
  },
  {
    name: "CLIST",
    definition: `T (Command List) est un langage de script utilisé sur les
    systèmes IBM Mainframe. Il est utilisé pour automatiser des tâches
    et exécuter des commandes système dans un environnement z/OS.`,
    example: `/* Mon programme CLIST */
SAY 'Hello, World!'`,
  },
  {
    name: "Clojure",
    definition: `e est un langage de programmation fonctionnelle basé sur la
    plateforme Java. Il est conçu pour être simple, immuable et
    favorise la programmation fonctionnelle pure.`,
    example: `(defn hello-world []
(println "Hello, World!"))`,
  },
  {
    name: "CLU",
    definition: `U est un langage de programmation orienté objet. Il est connu
    pour sa forte prise en charge des abstractions de données et des
    concepts de programmation avancés.`,
    example: `class Point {
x: real;
y: real;

op +(p: Point) {
  return new Point(x + p.x, y + p.y);
}
}`,
  },
  {
    name: "CMS-2",
    definition: `S-2 (Command and Macro System-2) est un langage de programmation
    utilisé pour le développement de systèmes informatiques. Il est
    principalement utilisé pour la conception de systèmes
    d'exploitation et de logiciels embarqués.`,
    example: `DEFINE SYMBOL X=10;
DISPLAY X;`,
  },
  {
    name: "COBOL",
    definition: `L (Common Business-Oriented Language) est un langage de
    programmation développé pour les applications commerciales. Il est
    largement utilisé dans les systèmes informatiques hérités et est
    connu pour sa syntaxe anglaise proche de l'anglais courant.`,
    example: `IDENTIFICATION DIVISION.
PROGRAM-ID. HELLO-WORLD.
PROCEDURE DIVISION.
  DISPLAY "Hello, World!".
STOP RUN.`,
  },
  {
    name: "CobolScript",
    definition: `t est une version JavaScript du langage COBOL. Il permet
    d'écrire du code COBOL en utilisant la syntaxe et les conventions
    de JavaScript.`,
    example: `IDENTIFICATION DIVISION.
PROGRAM-ID. HELLO-WORLD.
PROCEDURE DIVISION.
  DISPLAY "Hello, World!".
STOP RUN.`,
  },
  {
    name: "Cobra",
    definition: `a est un langage de programmation moderne et orienté objet. Il
  est conçu pour être sûr, expressif et hautement productif.`,
    example: `class HelloWorld
  cue Main
      def main
          print "Hello, World!"`,
  },
  {
    name: "CODE",
    definition: `E est un langage de programmation utilisé pour créer des effets
    visuels et des animations dans le domaine du développement
    graphique.`,
    example: `CODE.SetProperty(CODE.FLASH, true)
CODE.SetText(CODE.TEXT, "Hello, World!")
CODE.Play()`,
  },
  {
    name: "CoffeeScript",
    definition: `t est un langage de programmation qui se compile en
    JavaScript. Il vise à améliorer la lisibilité et la concision du
    code JavaScript en introduisant une syntaxe plus expressive.`,
    example: `greeting = "Hello, World!"
console.log greeting`,
  },
  {
    name: "Cola",
    definition: `a est un langage de programmation orienté objet conçu pour
    simplifier le développement de logiciels. Il offre une syntaxe
    expressive et des fonctionnalités avancées telles que l'héritage
    multiple et les opérations sur les ensembles.`,
    example: `class Person {
name: "John";
age: 30;

sayHello() {
  print("Hello, I'm " + this.name);
}
}

var person = new Person();
person.sayHello();`,
  },
  {
    name: "ColdC",
    definition: `C est un langage de script utilisé dans le développement de
    serveurs MUD (Multi-User Dungeon). Il est conçu pour étendre les
    fonctionnalités d'un MUD en permettant la création de nouveaux
    objets, de comportements personnalisés et d'interactions entre les
    joueurs.`,
    example: `object Example {
// Propriétés
int counter = 0;

// Méthode
void increment() {
  counter = counter + 1;
}
}`,
  },
  {
    name: "ColdFusion",
    definition: `n est un langage de script côté serveur utilisé pour
    développer des applications web dynamiques. Il offre des
    fonctionnalités puissantes telles que l'intégration avec les bases
    de données, la gestion des formulaires, la génération de rapports
    et l'interfaçage avec d'autres technologies web.`,
    example: `&lt;cfoutput&gt;
&lt;h1&gt;Bonjour, #name#!&lt;/h1&gt;
&lt;/cfoutput&gt;`,
  },
  {
    name: "COMAL",
    definition: `L est un langage de programmation utilisé pour l'enseignement
    de la programmation informatique. Il se caractérise par une
    syntaxe simplifiée et un niveau d'abstraction élevé, ce qui en
    fait un choix populaire pour les débutants.`,
    example: `PROMPT "Quel est votre nom ? ": name$
PRINT "Bonjour, "; name$;`,
  },
  {
    name: "Common Lisp",
    definition: `n Lisp est un dialecte du langage de programmation Lisp. Il
  est utilisé pour le développement de logiciels, la création
    d'outils et la résolution de problèmes complexes. Common Lisp
    offre une puissance et une flexibilité remarquables, ainsi qu'une
    vaste bibliothèque standard.`,
    example: `(defun say-hello (name)
(format t "Hello, ~a!" name))

(say-hello "John")`,
  },
  {
    name: "COMPASS",
    definition: `S est un langage de programmation utilisé pour le
    développement de systèmes de gestion de bases de données. Il offre
    des fonctionnalités avancées pour la définition de schémas de base
    de données, l'interrogation des données et la manipulation des
    structures de données complexes.`,
    example: `DECLARE
TABLE employees
  ID INTEGER,
  NAME STRING,
  SALARY DECIMAL
END;

SELECT * FROM employees WHERE SALARY &gt; 5000;`,
  },
  {
    name: "Component Pascal",
    definition: `t Pascal est un langage de programmation dérivé de Pascal.
    Il est conçu pour le développement de logiciels système et
    d'applications embarquées, en mettant l'accent sur la sûreté du
    langage, la programmation orientée objet et la facilité de
    maintenance du code.`,
    example: `MODULE HelloWorld;

IMPORT Out;

VAR
name: ARRAY 30 OF CHAR;

BEGIN
Out.String("Quel est votre nom ? ");
Out.Ln;
In.String(name);
Out.String("Bonjour, ");
Out.String(name);
Out.Ln;
END HelloWorld.`,
  },
  {
    name: "COMIT",
    definition: `T est un langage de programmation conçu pour le traitement de
    données commerciales et financières. Il offre des fonctionnalités
    pour la manipulation de nombres décimaux, la gestion des
    transactions et la génération de rapports.`,
    example: `PROCEDURE PrintHello;
BEGIN
WRITE 'Hello, world!';
END;

BEGIN
PrintHello;
END.`,
  },
  {
    name: "Converge",
    definition: `e est un langage de programmation fonctionnel conçu pour le
    développement d'applications concurrentes et distribuées. Il offre
    des fonctionnalités avancées pour la manipulation des flux de
    données, la gestion des erreurs et la coordination des processus
    parallèles.`,
    example: `let message = "Hello, world!";
print(message);`,
  },
  {
    name: "Cool",
    definition: `l est un langage de programmation orienté objet conçu pour
    l'enseignement de la programmation. Il met l'accent sur la
    simplicité et la facilité de compréhension, tout en introduisant
    des concepts de programmation avancés tels que l'héritage, la
    polymorphie et la liaison dynamique.`,
    example: `class Person {
var name : String;

met sayHello() : Object {
  out_string("Hello, I'm " + name);
};
};

let person : Person <- new Person;
person.name <- "John";
person.sayHello();`,
  },
  {
    name: "Coq",
    definition: `q est un assistant de preuve et un langage de programmation
    fonctionnel. Il est utilisé pour la vérification formelle de
    logiciels et la construction de preuves mathématiques.`,
    example: `Theorem plus_0_n : forall n : nat, 0 + n = n.
Proof.
intros n.
simpl.
reflexivity.
Qed.`,
  },
  {
    name: "Coral 66",
    definition: `l 66 est un langage de programmation impératif spécialement
    conçu pour les systèmes embarqués. Il offre des fonctionnalités de
    bas niveau pour la programmation en temps réel.`,
    example: `PROCEDURE Main;
VAR
count : INTEGER;
BEGIN
count := 0;
REPEAT
count := count + 1;
WRITE(count);
UNTIL count = 10;
END Main.`,
  },
  {
    name: "Corn",
    definition: `n est un langage de programmation de haut niveau conçu pour la
    manipulation des graphes et la résolution de problèmes
    combinatoires. Il est basé sur le langage C.`,
    example: `function factorial(n) {
if (n <= 1)
return 1;
else
return n * factorial(n - 1);
}`,
  },
  {
    name: "CorVision",
    definition: `n est un langage de programmation visuelle utilisé pour le
    développement d'applications basées sur la vision par ordinateur.
    Il facilite la création d'algorithmes de traitement d'images.`,
    example: `FOR i := 1 TO 10 DO
IF image.GetPixel(i, j) = RED THEN
image.SetPixel(i, j, GREEN);
ELSE
image.SetPixel(i, j, BLUE);
ENDIF;
ENDFOR;`,
  },
  {
    name: "Cosmos-f",
    definition: `s-f est un langage de programmation fonctionnel déclaratif
    utilisé pour la modélisation et la simulation de systèmes
    dynamiques. Il est particulièrement adapté à l'analyse et à la
    résolution de problèmes complexes.`,
    example: `let rec factorial n =
if n = 0 then 1
else n * factorial (n - 1)`,
  },
  {
    name: "COWSEL",
    definition: `L (COntrol WorkStation Embedded Language) est un langage de
    script utilisé pour programmer des applications de contrôle et
    d'automatisation des systèmes embarqués.`,
    example: `VAR x : INT;
x := 10;`,
  },
  {
    name: "CpcdosC+ (CC+)",
    definition: `C+ (CC+) est une version améliorée du langage C pour les
    systèmes d'exploitation CP/M et DOS. Il offre des fonctionnalités
    supplémentaires par rapport au langage C standard.`,
    example: `#include &lt;stdio.h&gt;

int main() {
printf("Hello, world!\n");
return 0;
}`,
  },
  {
    name: "CPL",
    definition: `L (Combined Programming Language) est un langage de
    programmation développé dans les années 1960 pour le traitement
    des données complexes. Il a influencé plusieurs autres langages de
    programmation.`,
    example: `DECLARE a, b, c, d REAL;
a := 10.0;
b := 5.0;
c := a + b;
d := a * b - c;`,
  },
  {
    name: "Crystal",
    definition: `l est un langage de programmation statiquement typé, inspiré
    de Ruby. Il vise à allier la simplicité et la concision du code
    Ruby avec les performances proches de celles du langage C.`,
    example: `def factorial(n : Int) : Int
  if n <= 1
    1
  else
    n * factorial(n - 1)
  end
end`,
  },
  {
    name: "C shell (csh)",
    definition: `e C shell (csh) est un interpréteur de commandes inspiré du
    langage de programmation C. Il est principalement utilisé sur les
    systèmes Unix et propose une syntaxe similaire à celle du langage
    C pour l'écriture de scripts et l'automatisation de tâches en
    ligne de commande.`,
    example: `#!/bin/csh
set my_variable = "Hello, world!"
echo $my_variable`,
  },
  {
    name: "CSP",
    definition: `P (Communicating Sequential Processes) est un langage de
    programmation conçu pour la modélisation et la vérification de
    systèmes concurrents. Il se base sur le concept de processus
    communicants qui interagissent via des canaux de communication
    synchronisée.`,
    example: `PROCESSES
P = (a -> STOP),
Q = (b -> STOP)
CHANNELS
a, b`,
  },
  {
    name: "Csound",
    definition: `d est un langage de programmation dédié à la composition et à
    la production de musique électronique. Il permet de créer des sons
    et des compositions musicales en combinant des éléments de
    synthèse sonore et de traitement audio.`,
    example: `instr 1
a1 oscil 10000, 440, 1
out a1
endin`,
  },
  {
    name: "CSS",
    definition: `S (Cascading Style Sheets) est un langage de feuille de style
    utilisé pour décrire la présentation et le style des documents
    HTML. Il permet de contrôler l'apparence des éléments HTML en
    spécifiant les couleurs, les polices, les marges, les positions,
    etc.`,
    example: `body {
font-family: Arial, sans-serif;
background-color: #f9f9f9;
color: #333;
}

h1 {
font-size: 2.5rem;
margin-bottom: 10px;
}`,
  },
  {
    name: "CSS 3",
    definition: `S 3 est la dernière version majeure du langage CSS. Elle
    introduit de nombreuses fonctionnalités avancées permettant de
    créer des mises en page et des effets visuels complexes sur les
    pages web. CSS 3 inclut des sélecteurs étendus, des transitions,
    des animations, des ombres, des bordures arrondies, etc.`,
    example: `.box {
border-radius: 10px;
box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
transition: background-color 0.3s ease;
}

.box:hover {
background-color: #f1f1f1;
}`,
  },
  {
    name: "Cubescript",
    definition: `t est un langage de script utilisé pour le développement
    de jeux vidéo basés sur le moteur Cube Engine. Il permet de créer
    des scripts pour gérer les comportements des personnages, les
    interactions avec l'environnement, les armes, etc.`,
    example: `if (distance(player1, player2) &lt; 100) {
player1.attack(player2);
}`,
  },
  {
    name: "Curl",
    definition: `l est une commande utilisée dans les lignes de commande pour
    effectuer des requêtes réseau, telles que le téléchargement de
    fichiers, l'envoi de données HTTP, FTP, etc. Il permet d'interagir
    avec des serveurs distants et d'automatiser des tâches liées aux
    protocoles réseau.`,
    example: `curl -o fichier.txt http://example.com/fichier.txt`,
  },
  {
    name: "Curry",
    definition: `y est un langage de programmation fonctionnel qui se base sur
    le concept de la curryfication. Il permet de créer des fonctions
    partiellement appliquées en les transformant en séquences de
    fonctions à un seul argument, facilitant ainsi la composition de
    fonctions et le passage de paramètres.`,
    example: `add a b = a + b
add3 = add 3
result = add3 5`,
  },
  {
    name: "Cyclone",
    definition: `e est un langage de programmation qui combine des éléments
    de langages impératifs et fonctionnels. Il se base sur le langage
    C et ajoute des fonctionnalités telles que la gestion automatique
    de la mémoire (garbage collection) et le typage statique pour
    prévenir les erreurs de mémoire et de typage.`,
    example: `void printHello() {
printf("Hello, world!\n");
}`,
  },
  {
    name: "D",
    definition: `D est un langage de programmation de haut niveau conçu pour le
    développement système. Il offre des fonctionnalités de
    programmation impérative, fonctionnelle et orientée objet.`,
    example: `import std.stdio;

void main()
{
  writeln("Bonjour, monde !");
}`,
  },
  {
    name: "Dao",
    definition: `o est un langage de programmation orienté objet utilisé pour le
    développement d'applications distribuées. Il offre des
    fonctionnalités pour la manipulation des bases de données et la
    gestion des transactions.`,
    example: `class Person {
  var name: String;

  constructor(name: String) {
      this.name = name;
  }

  method greet() {
      print("Bonjour, je m'appelle " + name);
  }
}

var person = new Person("John Doe");
person.greet();`,
  },
  {
    name: "DASL - Distributed Application Specification Language",
    definition: `L est un langage de spécification utilisé pour décrire les
    interactions entre les composants d'une application distribuée. Il
    permet de définir les services, les interfaces et les contraintes
    de l'application.`,
    example: `service HelloWorld {
  interface sayHello() returns (string);
}`,
  },
  {
    name: "DASL - Datapoint's Advanced Systems Language",
    definition: `L est un langage de programmation utilisé pour le développement
    de systèmes embarqués et de contrôleurs. Il offre des
    fonctionnalités pour la communication avec des périphériques et la
    gestion des entrées/sorties.`,
    example: `VAR
  OUTPUT 7 BOOLEAN INITIAL VALUE FALSE;
  INPUT 3 BOOLEAN;
BEGIN
  IF INPUT = TRUE THEN
      OUTPUT := TRUE;
  END_IF;
END;`,
  },
  {
    name: "DarkBASIC",
    definition: `C est un langage de programmation dédié au développement
    de jeux vidéo. Il fournit des fonctionnalités spécifiques pour la
    création de graphismes, d'animations et de jeux interactifs.`,
    example: `Graphics3D 800, 600
SetBuffer BackBuffer()

While Not KeyDown(1)
  Cls()
  Sphere 100, 100, 100, 50
  UpdateWorld()
  Flip()
Wend

End`,
  },
  {
    name: "Dart",
    definition: `t est un langage de programmation développé par Google. Il est
    principalement utilisé pour le développement d'applications web et
    mobiles. Dart est utilisé avec le framework Flutter pour la
    création d'applications multiplateformes.`,
    example: `void main() {
  print("Bonjour, monde !");
}`,
  },
  {
    name: "DataFlex",
    definition: `x est un langage de programmation utilisé pour le
    développement d'applications d'entreprise. Il offre des
    fonctionnalités pour l'accès aux bases de données, la gestion des
    interfaces utilisateur et la manipulation des données.`,
    example: `PROGRAM Test
  MESSAGEBOX("Bonjour, monde !")
  EXIT
END PROGRAM`,
  },
  {
    name: "Datalog",
    definition: `g est un langage de requête logique utilisé pour interroger
    les bases de données relationnelles. Il permet d'exprimer des
    règles de déduction et d'effectuer des requêtes complexes sur les
    données.`,
    example: `parent(john, alice).
parent(john, bob).
parent(bob, charlie).

grandparent(X, Y) :- parent(X, Z), parent(Z, Y).`,
  },
  {
    name: "dBase",
    definition: `e est un langage de programmation et un système de gestion de
    bases de données. Il a été largement utilisé dans les années 1980
    et 1990 pour le développement d'applications de base de données.`,
    example: `USE Customers
GO TOP
DO WHILE !EOF()
  ? CustomerName
  SKIP
ENDDO`,
  },
  {
    name: "dc",
    definition: `c est un langage de calcul utilisé pour effectuer des opérations
    arithmétiques sur la ligne de commande. Il est souvent utilisé
    comme une calculatrice puissante avec des fonctionnalités
    avancées.`,
    example: `2 3 + p`,
  },
  {
    name: "DCL",
    definition: `L (Data Control Language) est un langage de contrôle de données
    utilisé dans les systèmes de gestion de bases de données pour
    définir les autorisations d'accès et les privilèges des
    utilisateurs sur les données.`,
    example: `GRANT SELECT, INSERT, UPDATE ON employees TO user1;`,
  },
  {
    name: "Deesel",
    definition: `l (anciennement G) est un langage de programmation orienté
    objet conçu pour la création d'applications distribuées et
    parallèles. Il met l'accent sur la simplicité, la performance et
    la sécurité.`,
    example: `class HelloWorld {
static void main(String[] args) {
  System.out.println("Hello, World!");
}
}`,
  },
  {
    name: "Delphi",
    definition: `i est un environnement de développement logiciel qui utilise
    le langage de programmation Object Pascal. Il est principalement
    utilisé pour créer des applications Windows et dispose d'une
    bibliothèque riche de composants visuels et de fonctionnalités.`,
    example: `procedure TForm1.Button1Click(Sender: TObject);
begin
ShowMessage('Hello, World!');
end;`,
  },
  {
    name: "Devling",
    definition: `g est un langage de programmation orienté objet et
    fonctionnel qui se concentre sur la concision et la simplicité du
    code. Il est conçu pour être facile à apprendre et à utiliser.`,
    example: `let message = "Hello, World!";
console.log(message);`,
  },
  {
    name: "Dialect",
    definition: `t est un langage de programmation fonctionnel qui prend en
    charge la programmation par contrat. Il permet de spécifier des
    préconditions et des postconditions pour garantir le bon
    fonctionnement des fonctions et des méthodes.`,
    example: `def sum(a, b) -> int:
requires a &gt;= 0 and b &gt;= 0
ensures result &gt;= a and result &gt;= b
return a + b`,
  },
  {
    name: "DinkC",
    definition: `C est un langage de script utilisé pour le développement de
    jeux vidéo. Il est spécifiquement conçu pour être utilisé avec le
    moteur de jeu Dink Smallwood et permet de créer des interactions,
    des dialogues et des mécanismes de jeu.`,
    example: `&on_start:
    say("Hello, world!");
    kill_this_task();
`,
  },
  {
    name: "Dialog Manager",
    definition: `g Manager est un langage de programmation utilisé pour créer
    des dialogues et des interactions utilisateur dans les
    applications. Il permet de gérer les flux de conversation, les
    choix et les réponses de l'utilisateur.`,
    example: `start:
display_message("Bonjour, que puis-je faire pour vous ?");
user_input = get_user_input();
if user_input == "1":
  display_message("Option 1 sélectionnée.");
else:
  display_message("Option invalide.");
  goto start;`,
  },
  {
    name: "DIBOL",
    definition: `L (Digital Business Oriented Language) est un langage de
    programmation principalement utilisé pour le développement
    d'applications commerciales et de systèmes d'information. Il est
    conçu pour être facile à lire et à écrire.`,
    example: `PROCEDURE DISPLAY_HELLO_WORLD;
PRINT "HELLO, WORLD!";
END;`,
  },
  {
    name: "Down",
    definition: `n est un langage de balisage léger utilisé pour rédiger des
    documents et des articles techniques. Il permet de structurer le
    contenu et d'ajouter des éléments tels que des titres, des listes
    et des liens.`,
    example: `# Titre
## Sous-titre

- Élément 1
- Élément 2

[Un lien](https://example.com)`,
  },
  {
    name: "Duke C",
    definition: `e C est une version du langage de programmation C optimisée
    pour le développement de jeux vidéo sur la console Nintendo
    GameCube. Il fournit des fonctionnalités spécifiques pour tirer
    parti des capacités de la console.`,
    example: `#include &lt;stdio.h&gt;

int main() {
printf("Hello, World!");
return 0;
}`,
  },
  {
    name: "Dylan",
    definition: `n est un langage de programmation orienté objet et fonctionnel
    conçu pour être simple, expressif et efficace. Il est adapté au
    développement d'applications logicielles et est utilisé dans
    divers domaines.`,
    example: `define method hello-world()
print("Hello, World!")
end method`,
  },
  {
    name: "Dynace",
    definition: `e est un framework et un environnement de développement pour
    le langage de programmation C++. Il fournit des fonctionnalités
    avancées telles que l'héritage multiple, la réflexion et la
    gestion automatique de la mémoire.`,
    example: `#include &lt;stdio.h&gt;
#include "dynace.h"

int main() {
object greeting = gNewWithStr("String", "Hello, World!");
printf("%s\n", gStringValue(greeting));
gDispose(greeting);
return 0;
}`,
  },
  {
    name: "E",
  },
  {
    name: "Ease",
  },
  {
    name: "EASY",
  },
  {
    name: "Easytrieve Classic",
  },
  {
    name: "Easytrieve Plus",
  },
  {
    name: "eC (Ecere C)",
  },
  {
    name: "ECMAScript",
  },
  {
    name: "eDeveloper",
  },
  {
    name: "Edinburgh IMP",
  },
  {
    name: "EGL",
  },
  {
    name: "Eiffel",
  },
  {
    name: "Einstein",
  },
  {
    name: "Elan",
  },
  {
    name: "elastiC",
  },
  {
    name: "Elf",
  },
  {
    name: "Elm",
  },
  {
    name: "Emacs Lisp",
    definition: `s Lisp est un dialecte du langage Lisp utilisé pour étendre et
    personnaliser l'éditeur de texte Emacs. Il permet aux utilisateurs
    d'écrire des scripts pour automatiser des tâches et ajouter de
    nouvelles fonctionnalités à Emacs.`,
    example: `(defun hello-world ()
(message "Hello, world!"))`,
  },
  {
    name: "Englesi",
    definition: `i est un langage de programmation spécifique au domaine
    (DSL) utilisé pour modéliser et résoudre des problèmes
    d'optimisation. Il offre des fonctionnalités avancées pour décrire
    des problèmes d'optimisation linéaire et non linéaire.`,
    example: `maximize 2x + 3y
subject to
x + y &lt;= 10
2x + 5y &lt;= 20`,
  },
  {
    name: "Epigram",
    definition: `m est un langage de programmation fonctionnel et dépendant
    du type utilisé pour écrire des programmes formels avec des
    preuves mathématiques. Il combine les concepts de programmation et
    de logique formelle.`,
    example: `data Bool : Type where
true  : Bool
false : Bool

not : Bool -> Bool
not true  = false
not false = true`,
  },
  {
    name: "Erlang",
    definition: `g est un langage de programmation fonctionnel conçu pour
    construire des systèmes distribués, concurrents et tolérants aux
    pannes. Il est utilisé principalement dans le développement de
    logiciels de télécommunications et de systèmes distribués à grande
    échelle.`,
    example: `
    -module(hello).
-export([world/0]).

world() ->
  io:format("Hello, world!~n").

  `,
  },
  {
    name: "Escapade",
    definition: `e est un langage de programmation fonctionnel pur qui se
    concentre sur la sécurité et la fiabilité. Il est conçu pour
    permettre aux programmeurs de raisonner de manière formelle sur
    leurs programmes et d'éviter les erreurs courantes.`,
    example: `let rec factorial (n: int): int =
if n &lt;= 0 then
  1
else
n * factorial (n - 1)`,
  },
  {
    name: "Escher",
    definition: `r est un langage de programmation visuelle basé sur des
    diagrammes et des graphiques. Il permet de créer des compositions
    graphiques interactives en spécifiant des règles de transformation
    des formes.`,
    example: `rectangle(x, y, width, height)
-&gt; translate(x, y)
-&gt; scale(width, height)
-&gt; draw()`,
  },
  {
    name: "Esterel",
    definition: `l est un langage de programmation utilisé pour la
    spécification et la programmation des systèmes réactifs. Il est
    conçu pour modéliser et simuler des systèmes réactifs concurrents
    et synchrones.`,
    example: `module Blinker
[ Input Reset; Output Led ]

let blinker () =
loop
  pause 1.0
  emit Led true
  pause 1.0
  emit Led false

system
automaton
  blinker()`,
  },
  {
    name: "Etoys",
    definition: `s est un langage de programmation visuel et un environnement
    de développement destiné aux enfants. Il permet aux jeunes
    utilisateurs de créer des jeux, des animations et des simulations
    en manipulant des objets graphiques.`,
    example: `turtle := Turtle new.
turtle color: Color red.
turtle go: 100.
turtle turnLeft: 90.
turtle go: 100.`,
  },
  {
    name: "Euclid",
    definition: `d est un langage de programmation utilisé pour l'enseignement
    des mathématiques et la résolution de problèmes mathématiques. Il
  est basé sur les principes de la géométrie euclidienne.`,
    example: `procedure EuclideanAlgorithm(a, b)
while b ≠ 0 do
  t := b
  b := a mod b
  a := t
return a`,
  },
  {
    name: "Euler",
    definition: `r est un langage de programmation utilisé pour résoudre des
    problèmes mathématiques et effectuer des calculs numériques. Il
    offre des fonctionnalités avancées pour la manipulation de nombres
    et la résolution d'équations.`,
    example: `function euler(n)
local sum = 0
for i = 1 to n do
  sum = sum + 1 / i
return sum`,
  },
  {
    name: "Euphoria",
    definition: `a est un langage de programmation interprété et orienté
    objet. Il est conçu pour être simple, facile à apprendre et à
    utiliser. Euphoria est souvent utilisé pour le développement
    rapide d'applications et de jeux.`,
    example: `include std/io.e

procedure hello_world()
puts(1, "Hello, world!")

hello_world()`,
  },
  {
    name: "CMS EXEC",
    definition: `S EXEC (Executive Control Program) est un langage de
    programmation utilisé sur les systèmes IBM mainframe. Il est
    utilisé pour contrôler et exécuter des programmes et des tâches
    sur ces systèmes.`,
    example: `// Hello World program
IDENTIFY HELLO
PRINT 'Hello, world!'
END`,
  },
  {
    name: "EXEC 2",
    definition: `C 2 est un langage de programmation utilisé sur les systèmes
    IBM mainframe. Il est utilisé pour écrire des commandes et des
    scripts pour interagir avec le système d'exploitation et les
    applications.`,
    example: `// Hello World program
/* REXX */
SAY 'Hello, world!'`,
  },
  {
    name: "Extends",
    definition: `s est un langage de programmation utilisé pour créer des
    extensions et des modules dans le système de gestion de contenu
    (CMS) TYPO3. Il permet de personnaliser et d'étendre les
    fonctionnalités de TYPO3.`,
    example: `plugin.tx_myextension {
view {
  templateRootPaths.10 = EXT:my_extension/Resources/Private/Templates/
  partialRootPaths.10 = EXT:my_extension/Resources/Private/Partials/
  layoutRootPaths.10 = EXT:my_extension/Resources/Private/Layouts/
}
}`,
  },
  {
    name: "F",
    definition: `F est un langage de programmation fonctionnel et impératif qui met
    l'accent sur l'expressivité et la concision du code. Il est
    utilisé pour le développement de logiciels, en particulier dans le
    domaine de la finance.`,
    example: `let add x y = x + y`,
  },
  {
    name: "F#",
    definition: `F# est un langage de programmation fonctionnel qui s'exécute sur
    le .NET Framework. Il combine les aspects fonctionnels et orientés
    objet et est souvent utilisé pour le développement d'applications
    Web et de calcul scientifique.`,
    example: `let rec factorial n =
  if n = 0 then 1
  else n * factorial (n - 1)`,
  },
  {
    name: "Factor",
    definition: `r est un langage de programmation de type concaténatif. Il
    utilise une approche basée sur la manipulation de la pile de
    données et la combinaison de mots pour créer des programmes. Il
  est conçu pour être simple et expressif.`,
    example: `3 4 + .`,
  },
  {
    name: "Falcon",
    definition: `n est un langage de programmation dynamique et
    multi-paradigme conçu pour la création d'applications web. Il
    offre une syntaxe simple et concise, et est souvent utilisé pour
    le développement d'API RESTful.`,
    example: `GET /hello:
  def on_get(req, resp):
      resp.body = "Hello, Falcon!"`,
  },
  {
    name: "False",
    definition: `e est un langage de programmation minimaliste inspiré par le
    langage Brainfuck. Il utilise une syntaxe minimaliste et un modèle
    de calcul basé sur la manipulation de la mémoire et du pointeur.`,
    example: `[factorial]v!1-:n;
[1-p!]v!;n!`,
  },
  {
    name: "Fan",
    definition: `n est un langage de programmation généraliste conçu pour la
    concurrence et le calcul parallèle. Il offre des primitives pour
    gérer efficacement les tâches concurrentes et est souvent utilisé
    pour le développement de logiciels hautement performants.`,
    example: `class Main {
  static Void main() {
      echo("Hello, Fan!");
  }
}`,
  },
  {
    name: "Fancy",
    definition: `y est un langage de programmation dynamique orienté objet qui
    tire parti des concepts de langages tels que Smalltalk et Ruby. Il
    met l'accent sur la lisibilité et la simplicité du code.`,
    example: `class Hello {
  run: method() {
      "Hello, Fancy!" println;
  }
}`,
  },
  {
    name: "Fantom",
    definition: `m est un langage de programmation multiparadigme conçu pour
    la JVM (Java Virtual Machine). Il combine des fonctionnalités de
    langages tels que Java, C#, Python et Ruby, et est souvent utilisé
    pour le développement d'applications Java.`,
    example: `class Main {
  static Void main() {
      echo("Hello, Fantom!");
  }
}`,
  },
  {
    name: "FAUST",
    definition: `T est un langage de programmation fonctionnel dédié à la
    conception de processeurs de signaux audio. Il permet de spécifier
    des algorithmes de traitement du signal de manière concise et de
    les compiler pour différentes plateformes.`,
    example: `process = +;
process = _ <: process :> +;`,
  },
  {
    name: "Felix",
    definition: `x est un langage de programmation fonctionnel conçu pour la
    programmation concurrente et parallèle. Il met l'accent sur la
    simplicité et la sûreté, offrant des fonctionnalités avancées
    telles que la manipulation de ressources partagées de manière
    sécurisée.`,
    example: `let x = 5;
let y = 10;
let sum = x + y;
console.log(sum);`,
  },
  {
    name: "Ferite",
    definition: `e est un langage de programmation orienté objet et
    interprété. Il est conçu pour être facile à apprendre et à
    utiliser, offrant une syntaxe concise et expressive. Il est
    souvent utilisé pour le développement d'applications graphiques et
    d'interfaces utilisateur.`,
    example: `class Person {
constructor(name, age) {
  this.name = name;
  this.age = age;
}

sayHello() {
  console.log("Hello, " + this.name + "!");
}
}

let person = new Person("John", 25);
person.sayHello();`,
  },
  {
    name: "FFP",
    definition: `P (Formac File Processor) est un langage de programmation
    spécifique au domaine utilisé pour le traitement de fichiers
    plats. Il fournit des fonctionnalités avancées pour manipuler et
    transformer des données structurées dans des fichiers texte, tels
    que la recherche, la tri et la transformation.`,
    example: `INPUT: data.txt;
SORT: column1 ASC;
FILTER: column2 &gt; 10;
OUTPUT: result.txt;`,
  },
  {
    name: "Fjölnir",
    definition: `r est un langage de programmation fonctionnel pur conçu pour
    la manipulation de listes et de structures de données. Il offre
    des fonctionnalités avancées telles que la programmation
    fonctionnelle sans effets de bord et la manipulation d'arbres
    syntaxiques abstraits.`,
    example: `let numbers = [1, 2, 3, 4, 5];
let sum = foldl (+) 0 numbers;
console.log(sum);`,
  },
  {
    name: "FL",
    definition: `L (Functional Language) est un langage de programmation
    fonctionnel conçu pour la programmation symbolique et la
    manipulation de formules mathématiques. Il est utilisé dans les
    domaines de la logique, des mathématiques et de l'intelligence
    artificielle.`,
    example: `let x = 5;
let y = 10;
let sum = x + y;
console.log(sum);`,
  },
  {
    name: "Flavors",
    definition: `s est un langage de programmation orienté objet développé à
    l'origine pour les systèmes Lisp. Il offre des fonctionnalités
    avancées pour la programmation orientée objet, y compris
    l'héritage multiple, les classes abstraites et les mixins.`,
    example: `(defclass person ()
(name age))

(defmethod say-hello ((p person))
(format t "Hello, ~a!" (slot-value p 'name)))

(let ((person (make-instance 'person :name "John" :age 25)))
(say-hello person))`,
  },
  {
    name: "FLOW-MATIC",
    definition: `W-MATIC est un langage de programmation développé à des fins
    commerciales pour la manipulation et le traitement des données. Il
  est basé sur le paradigme du traitement par lots et est utilisé
    pour automatiser les tâches de gestion des données dans les
    systèmes d'information.`,
    example: `START TRANSACTION;
GET FILE "input.txt";
SORT FIELD "LastName";
PRINT RECORD "output.txt";
COMMIT;`,
  },
  {
    name: "Fly",
    definition: `y est un langage de programmation fonctionnel développé pour
    être simple et intuitif. Il est conçu pour permettre aux
    programmeurs de s'exprimer de manière concise et élégante en
    utilisant des fonctionnalités telles que la composition de
    fonctions et la manipulation de listes.`,
    example: `let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = map (* 2) numbers;
console.log(doubledNumbers);`,
  },
  {
    name: "FOCAL",
    definition: `L (Formulation One Compiler Assembly Language) est un langage
    de programmation développé pour les ordinateurs de la série DEC
    PDP-8. Il est utilisé pour la programmation bas niveau et est
    souvent utilisé dans des applications embarquées et des systèmes
    de contrôle.`,
    example: `LDA 200
ADD 201
STA 202
HLT`,
  },
  {
    name: "FOCUS",
    definition: `S est un langage de programmation utilisé pour le
    développement d'applications décisionnelles et de rapports. Il est
    souvent utilisé pour l'analyse et la manipulation de grandes
    quantités de données.`,
    example: `TABLE FILE EMPLOYEE
PRINT LAST_NAME, FIRST_NAME, SALARY
WHERE DEPARTMENT = 'IT';
END;`,
  },
  {
    name: "FOIL",
    definition: `L (First-Order Inductive Learner) est un algorithme
    d'apprentissage automatique utilisé pour la classification de
    données. Il est basé sur la logique du premier ordre et est
    souvent utilisé dans le domaine de l'intelligence artificielle.`,
    example: `train(Examples, Target)
hypothesis = findHypothesis(Examples, Target)
return hypothesis;`,
  },
  {
    name: "FORMAC",
    definition: `C est un langage de programmation utilisé pour le calcul
    symbolique et l'analyse mathématique. Il est souvent utilisé dans
    le domaine des mathématiques et de la recherche scientifique.`,
    example: `PROCEDURE exp(x)
BEGIN
  sum := 1;
  term := 1;
  i := 1;
  WHILE term > epsilon DO
    BEGIN
      term := term * x / i;
      sum := sum + term;
      i := i + 1;
    END;
  RETURN sum;
END;`,
  },
  {
    name: "@Formula",
    definition: `a est un langage de programmation utilisé dans les feuilles
    de calcul. Il est spécifiquement utilisé dans les applications
    comme Microsoft Excel pour créer des formules et effectuer des
    calculs sur les données des cellules.`,
    example: `=SUM(A1:A10)`,
  },
  {
    name: "Forth",
    definition: `h est un langage de programmation à pile qui se base sur la
    notation polonaise inverse. Il est souvent utilisé dans les
    systèmes embarqués et les environnements de développement pour
    contrôler le matériel.`,
    example: `: SQUARE ( n -- n^2 ) DUP * ;`,
  },
  {
    name: "Fortran",
    definition: `n (Formula Translation) est un langage de programmation
    utilisé principalement pour le calcul scientifique et numérique.
    Il a été l'un des premiers langages de programmation établis et
  est toujours largement utilisé aujourd'hui dans le domaine de la
    recherche scientifique.`,
    example: `PROGRAM HelloWorld
PRINT *, 'Hello, world!'
END PROGRAM HelloWorld`,
  },
  {
    name: "Fortress",
    definition: `s est un langage de programmation conçu pour le calcul
    parallèle et distribué. Il a été développé par Sun Microsystems et
  est axé sur la programmation scientifique et technique.`,
    example: `start worker1;
start worker2;
...
`,
  },
  {
    name: "FoxPro 2",
    definition: `o 2 est un système de gestion de base de données
    relationnelle (SGBDR) et un langage de programmation utilisé pour
    le développement d'applications de base de données. Il a été
    développé par Microsoft et est principalement utilisé pour les
    applications de bureau.`,
    example: `USE Customer
INDEX ON LastName TO LastName`,
  },
  {
    name: "FP",
    definition: `P (Functional Programming) est un paradigme de programmation qui
    se concentre sur l'évaluation des fonctions mathématiques et évite
    les changements d'état et les données mutables. Il est souvent
    utilisé dans le domaine de l'intelligence artificielle et du
    développement de logiciels sûrs.`,
    example: `let factorial = n => n === 0 ? 1 : n * factorial(n - 1);`,
  },
  {
    name: "Franz Lisp",
    definition: `z Lisp est un dialecte du langage de programmation Lisp
    développé par la société Franz Inc. Il est connu pour sa puissance
    et sa flexibilité, notamment dans le domaine de l'intelligence
    artificielle.`,
    example: `(defun factorial (n)
    (if (zerop n)
      1
      (* n (factorial (- n 1)))))`,
  },
  {
    name: "Frink",
    definition: `k est un langage de programmation développé par Alan Eliasen.
    Il est conçu pour effectuer des calculs numériques précis et
    prendre en charge les unités physiques. Il offre également des
    fonctionnalités avancées telles que l'inférence de types.`,
    example: `def gravAccel[planetRadius, planetMass] := 
gravitationalConstant * planetMass / (planetRadius^2)`,
  },
  {
    name: "F-Script",
    definition: `F-Script est un langage de script basé sur Smalltalk. Il est
    principalement utilisé pour le développement d'applications Mac OS
    X et offre une syntaxe concise et expressive pour manipuler les
    objets.`,
    example: `employees select: [:employee | employee age &gt; 30]`,
  },
  {
    name: "FSProg",
    definition: `g est un langage de programmation fonctionnel développé par
    l'INRIA. Il se distingue par son système de types avancé et sa
    prise en charge des concepts de programmation parallèle et
    distribuée.`,
    example: `let rec factorial n =
if n = 0 then 1 else n * factorial (n - 1)`,
  },
  {
    name: "Funnel",
    definition: `l est un langage de programmation fonctionnel conçu pour la
    programmation concurrente et parallèle. Il offre des
    fonctionnalités telles que les coroutines, les canaux de
    communication et la gestion automatique de la mémoire.`,
    example: `fun fib 0 = 0
| fib 1 = 1
| fib n = fib (n - 1) + fib (n - 2)`,
  },
  {
    name: "Fuxi",
    definition: `i est un langage de programmation logique basé sur Prolog. Il
  est utilisé pour résoudre des problèmes de logique et de
    raisonnement, en particulier dans le domaine de l'intelligence
    artificielle.`,
    example: `father(john, jim).
father(john, ann).
mother(mary, jim).

parent(X, Y) :- father(X, Y).
parent(X, Y) :- mother(X, Y).`,
  },
  {
    name: "FranceScript",
    definition: `t est un langage de programmation inspiré par
    JavaScript et développé pour enseigner les concepts de la
    programmation aux débutants. Il se concentre sur une syntaxe
    simple et des concepts fondamentaux de la programmation.`,
    example: `var message = "Bonjour, monde !";
console.log(message);`,
  },
  {
    name: "Gambas",
    definition: `s est un environnement de développement intégré (IDE) utilisé
    pour créer des applications logicielles en langage de
    programmation BASIC. Il offre une interface visuelle conviviale
    pour le développement d'applications graphiques.`,
    example: `Public Sub Main()
Print "Bonjour, monde !"
End`,
  },
  {
    name: "GAMS",
    definition: `S (General Algebraic Modeling System) est un langage de
    modélisation mathématique utilisé pour résoudre des problèmes
    d'optimisation. Il permet de formuler des modèles mathématiques
    complexes et de trouver les solutions optimales.`,
    example: `Set i /i1*i10/;
Variable x(i), z;
Equation obj;
obj.. z =e= sum(i, x(i));
Model m /all/;
Solve m using lp minimizing z;`,
  },
  {
    name: "GAP (RGP)",
    definition: `P (Groups, Algorithms, and Programming) est un système de calcul
    formel utilisé pour l'étude des groupes et des objets
    mathématiques associés. Il fournit un langage de programmation
    dédié à la manipulation et à l'exploration des structures
    mathématiques.`,
    example: `g := Group((1,2,3), (1,2));
Size(g);`,
  },
  {
    name: "G-code",
    definition: `e G-code est un langage de programmation utilisé pour contrôler
    les machines-outils à commande numérique (CNC). Il définit les
    mouvements, les vitesses et les opérations de coupe nécessaires
    pour produire des pièces usinées.`,
    example: `G01 X10 Y5 F200 ; Déplacer à la position (10, 5) à une vitesse d'avance de 200 unités par minute`,
  },
  {
    name: "GDL (Geometric Description Language)",
    definition: `L (Geometric Description Language) est un langage de
    programmation utilisé dans le logiciel de modélisation et de rendu
    d'objets 3D ArchiCAD. Il permet de décrire la géométrie des
    objets, les matériaux et les propriétés associées.`,
    example: `parameters w, h;
rectangle (0, 0, w, h);`,
  },
  {
    name: "Gibiane",
    definition: `e est un langage de programmation conçu pour enseigner les
    concepts de base de la programmation aux enfants. Il utilise une
    syntaxe simple et intuitive pour créer des animations et des jeux
    interactifs.`,
    example: `POUR i DE 1 A 10 FAIRE
AFFICHER "Bonjour, monde !"
FIN POUR`,
  },
  {
    name: "GFA BASIC",
    definition: `A BASIC (Atari ST Graphics For All BASIC) est un langage de
    programmation BASIC utilisé sur les ordinateurs Atari ST. Il offre
    des fonctionnalités avancées pour la programmation graphique et la
    création de jeux.`,
    example: `REM "Hello, World!"
PRINT "Bonjour, monde !"`,
  },
  {
    name: "GJ",
    definition: `J est l'abréviation de "Game Jam", un événement où les
    développeurs de jeux travaillent en équipe pour créer un jeu dans
    un laps de temps limité, souvent 48 heures. Les Game Jams sont un
    excellent moyen de stimuler la créativité et de développer
    rapidement des prototypes de jeux.`,
    example: `// Exemple de code GJ
function startGame() {
// Code de démarrage du jeu
}`,
  },
  {
    name: "GLSL",
    definition: `L (OpenGL Shading Language) est un langage de programmation
    utilisé pour écrire des shaders, qui sont des programmes utilisés
    pour définir les propriétés de rendu des objets dans les
    applications graphiques 3D. GLSL est largement utilisé dans le
    développement de jeux et d'applications graphiques avancées.`,
    example: `// Exemple de code GLSL
void main() {
// Code du shader
}`,
  },
  {
    name: "GM",
    definition: `M est l'abréviation de "GameMaker", un moteur de jeu populaire
    utilisé pour créer des jeux 2D. GameMaker propose un langage de
    script propriétaire appelé GML (GameMaker Language), qui permet
    aux développeurs de créer des logiques de jeu, des comportements
    d'objets et des interactions dans leurs jeux.`,
    example: `// Exemple de code GM
if (keyboard_check(vk_space)) {
// Code de traitement de l'appui sur la barre d'espace
}`,
  },
  {
    name: "GML (Game Maker Language)",
    definition: `L (Game Maker Language) est un langage de script utilisé dans le
    moteur de jeu GameMaker. GML est spécialement conçu pour faciliter
    le développement de jeux 2D et propose une syntaxe simple et des
    fonctions intégrées pour gérer les objets, les sprites, les sons,
    les collisions, etc.`,
    example: `// Exemple de code GML
if (keyboard_check(ord("A"))) {
// Code de traitement de l'appui sur la touche A
}`,
  },
  {
    name: "Go",
    definition: `o, également connu sous le nom de Golang, est un langage de
    programmation développé par Google. Go se distingue par sa
    simplicité, sa sécurité et sa facilité de concurrence. Il est
    souvent utilisé pour le développement d'applications réseau, de
    serveurs et de systèmes distribués.`,
    example: `// Exemple de code Go
package main

import "fmt"

func main() {
fmt.Println("Hello, world!")
}`,
  },
  {
    name: "Go!",
    definition: `o! est un langage de script utilisé dans le moteur de jeu RPG
    Maker. Il permet aux développeurs de créer des événements, des
    dialogues, des actions et des conditions dans leurs jeux RPG. Go!
  est spécialement conçu pour être simple à utiliser et à comprendre
    pour les créateurs de jeux RPG.`,
    example: `// Exemple de code Go!
if player_hp &lt;= 0 {
game_over();
}`,
  },
  {
    name: "GOAL",
    definition: `L (Game Oriented Assembly Lisp) est un langage de script
    utilisé dans le développement de jeux sur la console PlayStation
    2. GOAL permet aux développeurs de créer des scripts pour
    contrôler l'intelligence artificielle, la logique de jeu, la
    gestion des personnages et d'autres aspects du jeu sur la
    plateforme PS2.`,
    example: `; Exemple de code GOAL
(if (== (get-flag player) 1)
(do-something)
(do-something-else))`,
  },
  {
    name: "GDScript",
    definition: `t est un langage de script utilisé dans le moteur de jeu
    Godot. GDScript est spécialement conçu pour le développement de
    jeux 2D et 3D et offre une syntaxe simple et facile à apprendre.
    Il est souvent utilisé pour créer des logiques de jeu, des
    comportements d'objets, des animations et des interactions dans
    les jeux développés avec Godot.`,
    example: `# Exemple de code GDScript
var score = 0

func _process(delta):
  score += 1
  print("Score:", score)`,
  },
  {
    name: "Gödel",
    definition: `l est un langage de programmation conçu pour la manipulation
    de preuves mathématiques et la formalisation de théories. Il est
    basé sur la logique mathématique et permet de représenter des
    concepts et des raisonnements complexes.`,
    example: `P(x) -&gt; P(G(x))
P(x) -&gt; P(G(x)) -&gt; P(G(G(x)))`,
  },
  {
    name: "Godiva",
    definition: `a est un langage de programmation orienté objet utilisé pour
    développer des applications d'entreprise. Il se concentre sur la
    modélisation des objets du monde réel et permet une programmation
    efficace et modulaire.`,
    example: `class Person {
String name;
int age;

void sayHello() {
  print("Hello, I'm " + name);
}
}`,
  },
  {
    name: "Goo",
    definition: `o est un langage de programmation fonctionnel qui met l'accent
    sur l'expression concise et l'immuabilité des données. Il est
    conçu pour faciliter la programmation parallèle et distribuée.`,
    example: `def sumList(list):
if list == []:
  return 0
else:
  return list[0] + sumList(list[1:])`,
  },
  {
    name: "GOTO++",
    definition: `O++ est une extension du langage de programmation GOTO qui
    permet un contrôle de flux plus structuré et l'utilisation de
    structures de contrôle telles que les boucles et les conditions.
    Il est souvent utilisé à des fins pédagogiques pour illustrer les
    concepts de programmation bas niveau.`,
    example: `DECLARE x;
DECLARE y;
DECLARE z;

READ x;
READ y;
z := x + y;
PRINT z;`,
  },
  {
    name: "GOTRAN",
    definition: `N est un langage de programmation spécifiquement conçu pour
    les calculs scientifiques et les simulations numériques. Il permet
    de manipuler efficacement des tableaux multidimensionnels et
    d'exécuter des calculs complexes.`,
    example: `PROGRAM heat_transfer_simulation
INTEGER :: n, m
REAL :: temperature(n, m)

! Code de simulation du transfert de chaleur

END PROGRAM heat_transfer_simulation`,
  },
  {
    name: "GPSS",
    definition: `S (General Purpose Simulation System) est un langage de
    simulation utilisé pour modéliser et analyser les systèmes
    complexes. Il permet de représenter des entités, des files
    d'attente et des événements pour simuler le comportement d'un
    système réel.`,
    example: `GENERATE 100, 10
QUEUE Queue1
DEPART Queue1, 3, Process1
PROCESS Process1, 5
TERMINATE`,
  },
  {
    name: "GraphTalk",
    definition: `k est un langage de programmation orienté objet utilisé
    pour le développement d'applications distribuées. Il permet de
    modéliser et de simuler des systèmes complexes en utilisant des
    objets et des connexions graphiques.`,
    example: `class Person {
name: String;
age: Integer;

sayHello() {
  print("Hello, I'm " + name);
}
}`,
  },
  {
    name: "GRASS",
    definition: `S (Geographic Resources Analysis Support System) est un
    langage de programmation utilisé pour la gestion et l'analyse des
    données géospatiales. Il est principalement utilisé dans les
    domaines de la cartographie, de la télédétection et de l'analyse
    environnementale.`,
    example: `r.mapcalc "elevation_2m = elevation + 2"`,
  },
  {
    name: "Grammer",
    definition: `r est un langage de programmation développé spécifiquement
    pour la programmation sur les calculatrices graphiques de la
    marque Casio. Il est utilisé pour créer des programmes et des jeux
    sur ces calculatrices.`,
    example: `:Func
    "Hello, world!" →Str1
    Disp Str1
    Stop`,
  },
  {
    name: "Green",
    definition: `n est un langage de programmation fonctionnel et concurrent
    inspiré du langage Erlang. Il est conçu pour le développement de
    systèmes distribués et parallèles et offre des fonctionnalités
    avancées pour la gestion de la concurrence.`,
    example: `module HelloWorld

export main

main : IO ()
main = io (putStrLn "Hello, world!")`,
  },
  {
    name: "Groovy",
    definition: `y est un langage de script dynamique qui s'exécute sur la
    machine virtuelle Java (JVM). Il est conçu pour être compatible
    avec le langage Java tout en offrant des fonctionnalités
    supplémentaires et une syntaxe plus concise.`,
    example: `def message = "Hello, world!"
println message`,
  },
  {
    name: "GrooveX",
    definition: `X est un langage de programmation expérimental basé sur le
    langage Groovy. Il vise à introduire de nouvelles fonctionnalités
    et des améliorations par rapport à Groovy tout en conservant sa
    compatibilité avec la JVM.`,
    example: `def message = "Hello, world!"
println message.toUpperCase()`,
  },
  {
    name: "GW-Basic",
    definition: `W-Basic (Gee-Whiz Basic) est un langage de programmation
    interprété qui était populaire dans les années 1980 et au début
    des années 1990. Il a été largement utilisé pour le développement
    de logiciels sur les premiers ordinateurs personnels.`,
    example: `10 PRINT "Hello, world!"
20 GOTO 10`,
  },
  {
    name: "Hack",
    definition: `k est un langage de programmation développé par Facebook. Il
  est basé sur PHP et offre des fonctionnalités supplémentaires
    telles que le typage statique et des améliorations de performance.
    Hack est utilisé pour développer des applications web évolutives.`,
    example: `<?hh
function greet(string $name): void {
  echo "Hello, ".$name;
}

greet("John");
?>`,
  },
  {
    name: "HAL/S",
    definition: `L/S (High-Level Assembly/Shuttle) est un langage de
    programmation utilisé pour développer des logiciels pour le
    système d'exploitation du vaisseau spatial de la NASA. Il offre
    des fonctionnalités spécifiques au domaine de l'aérospatiale pour
    la programmation de missions spatiales.`,
    example: `PROGRAM MAIN
BEGIN
  SET LOCATION = EARTH;
  LAUNCH;
END;`,
  },
  {
    name: "Haskell",
    definition: `l est un langage de programmation fonctionnelle pur. Il est
    connu pour son système de typage fort et statique, ainsi que pour
    sa capacité à écrire des programmes concis et élégants. Haskell
  est utilisé dans divers domaines, y compris la recherche en
    informatique et le développement de logiciels.`,
    example: `factorial :: Integer -> Integer
factorial 0 = 1
factorial n = n * factorial (n - 1)`,
  },
  {
    name: "Haxe",
    definition: `e est un langage de programmation multiplateforme qui permet le
    développement d'applications pour différentes plateformes telles
    que Web, mobile, bureau et plus encore. Il est connu pour sa
    capacité à compiler du code source dans différents langages
    cibles, ce qui permet de partager facilement du code entre
    différentes plateformes.`,
    example: `class Main {
static function main() {
  trace("Hello, World!");
}
}`,
  },
  {
    name: "High Level Assembly",
    definition: `h Level Assembly (Assemblage de Haut Niveau) est un langage de
    programmation qui combine les caractéristiques de l'assemblage et
    du langage de haut niveau. Il permet aux programmeurs d'écrire du
    code avec une syntaxe plus conviviale tout en ayant un contrôle
    précis sur l'architecture matérielle. Il est souvent utilisé pour
    développer des logiciels bas niveau et des pilotes de
    périphériques.`,
    example: `section .data
message db 'Hello, World!',0

section .text
global _start

_start:
mov eax, 4
mov ebx, 1
mov ecx, message
mov edx, 13
int 0x80

mov eax, 1
xor ebx, ebx
int 0x80`,
  },
  {
    name: "HLSL",
    definition: `L (High-Level Shader Language) est un langage de programmation
    utilisé pour écrire des shaders dans le cadre du développement de
    jeux et de la programmation graphique. Il est utilisé pour
    contrôler le rendu graphique et les effets visuels dans les
    applications 3D.`,
    example: `float4 main(float2 uv : TEXCOORD0) : SV_Target
{
float4 color = float4(1, 0, 0, 1); // Rouge
return color;
}`,
  },
  {
    name: "Hop",
    definition: `p est un langage de programmation basé sur le langage Scheme. Il
  est principalement utilisé pour le développement d'applications
    web et offre des fonctionnalités telles que la gestion des
    sessions, les opérations sur les bases de données et la génération
    de contenu dynamique.`,
    example: `(define (hello name)
(display "Hello, ")
(display name)
(newline))

(hello "John")`,
  },
  {
    name: "Hope",
    definition: `e est un langage de programmation orienté objet qui se
    concentre sur la programmation concurrente et distribuée. Il offre
    des fonctionnalités avancées pour la gestion des processus et des
    threads, ainsi que des mécanismes de communication entre les
    entités concurrentes.`,
    example: `class HelloWorld {
public static void main(String[] args) {
  System.out.println("Hello, World!");
}
}`,
  },
  {
    name: "Hugo",
    definition: `o est un générateur de sites statiques. Il permet de créer des
    sites web rapides et faciles à déployer en utilisant des fichiers
    texte et des modèles pour générer le contenu. Hugo est souvent
    utilisé par les développeurs web pour créer des blogs, des
    documentations et d'autres types de sites statiques.`,
    example: `{{ define "main" }}
&lt;h1&gt;Hello, World!&lt;/h1&gt;
{{ end }}`,
  },
  {
    name: "Hume",
    definition: `e est un langage de programmation basé sur le modèle de calcul
    par flux. Il est utilisé pour la programmation réactive et permet
    de décrire des systèmes qui réagissent aux événements et aux
    changements de manière déclarative.`,
    example: `trigger Alarm = input &gt; 100

reaction Alert:
when Alarm:
  output = "High temperature detected."`,
  },
  {
    name: "HyperTalk",
    definition: `k est un langage de programmation utilisé dans le logiciel
    HyperCard, qui était populaire dans les années 1980 et 1990. Il
    permettait de créer des applications interactives et multimédias
    en utilisant une approche de programmation orientée événements.`,
    example: `on mouseUp
answer "Hello, World!"
end mouseUp`,
  },
  {
    name: "IBM Basic Assembly Language (BAL)",
    definition: `M Basic Assembly Language (BAL) est un langage de programmation
    utilisé pour écrire des programmes en langage d'assemblage pour
    les ordinateurs de la famille IBM System/360 et z/Architecture. Il
    permet une programmation bas niveau pour une meilleure
    optimisation des ressources matérielles.`,
    example: `START  EXEC    PGM=MYPROGRAM
     ....
     ....
END    EXEC    PGM=MYPROGRAM`,
  },
  {
    name: "IBM Informix-4GL",
    definition: `M Informix-4GL est un langage de programmation de haut niveau
    utilisé pour le développement d'applications basées sur la base de
    données Informix. Il permet de créer des interfaces utilisateur et
    de manipuler les données de manière efficace.`,
    example: `LET customer_name = 'John Smith'
DISPLAY "Customer name: ", customer_name`,
  },
  {
    name: "IBM RPG",
    definition: `M RPG (Report Program Generator) est un langage de programmation
    utilisé pour le développement d'applications sur les systèmes IBM
    i. Il est principalement utilisé pour le traitement des données et
    la génération de rapports.`,
    example: `     C                   EVAL      RESULT = NUMBER1 + NUMBER2
   C                   MOVE      RESULT OUTVAR`,
  },
  {
    name: "ICI",
    definition: `I (Ivory Compiler Interpreter) est un langage de programmation
    fonctionnel utilisé pour le développement d'applications de
    traitement de l'image. Il est conçu pour faciliter la manipulation
    et la transformation des images de manière expressive.`,
    example: `image := load("image.jpg")
gray_image := grayscale(image)
display(gray_image)`,
  },
  {
    name: "Icon",
    definition: `n est un langage de programmation impératif utilisé pour le
    développement d'applications générales. Il se distingue par sa
    manipulation facile des chaînes de caractères et ses
    fonctionnalités avancées pour le traitement des expressions
    régulières.`,
    example: `procedure factorial(n)
  if n = 0 then return 1
  else return n * factorial(n-1)
end`,
  },
  {
    name: "Id",
    definition: `d est un langage de programmation fonctionnel et impératif
    utilisé pour la programmation interactive. Il est utilisé pour
    l'écriture de scripts, l'exploration de données et la manipulation
    de fichiers.`,
    example: `var x = 5
print(x + 3)`,
  },
  {
    name: "IDL (Interactive Data Language)",
    definition: `L (Interactive Data Language) est un langage de programmation
    utilisé pour le traitement, l'analyse et la visualisation des
    données scientifiques. Il est largement utilisé dans les domaines
    de l'astronomie, de la géophysique et de la recherche
    environnementale.`,
    example: `data = [1, 2, 3, 4, 5]
mean = mean(data)
print, mean`,
  },
  {
    name: "IL",
    definition: `L (Intermediate Language) est un langage de programmation
    intermédiaire utilisé dans le domaine de la compilation et de la
    virtualisation. Il est souvent utilisé comme représentation
    intermédiaire pour la traduction de langages source en langages
    cibles.`,
    example: `ldarg.0
call void [mscorlib]System.Console::WriteLine(string)`,
  },
  {
    name: "IMP",
    definition: `P est un langage de programmation impératif simple utilisé à des
    fins pédagogiques. Il est souvent utilisé pour enseigner les
    concepts de base de la programmation.`,
    example: `var x = 10;
print x;`,
  },
  {
    name: "Inform",
    definition: `m est un langage de programmation utilisé pour créer des jeux
    d'aventure textuels. Il est spécialement conçu pour la création de
    jeux interactifs basés sur le texte.`,
    example: `Object Room "Kitchen"
with description "This is a small kitchen."
     has light;`,
  },
  {
    name: "INTERCAL",
    definition: `L est un langage de programmation humoristique conçu pour
    être difficile à comprendre et à utiliser. Il est souvent utilisé
    pour illustrer les concepts de programmation étranges et
    inhabituels.`,
    example: `DO ,1 <- #13 PLEASE DO ,1 SUB #1 <- #238 DO READ OUT ,1 PLEASE ABSTAIN`,
  },
  {
    name: "Io",
    definition: `o est un langage de programmation orienté objet et réactif. Il
  est connu pour sa syntaxe simple et expressive et est souvent
    utilisé pour créer des applications web et des scripts
    d'automatisation.`,
    example: `Greet := method("Hello, " .. self .. "!")
"John" Greet println`,
  },
  {
    name: "Ioke",
    definition: `e est un langage de programmation dynamique et extensible. Il
  est basé sur un modèle de programmation orientée message et offre
    une grande flexibilité pour créer de nouveaux comportements.`,
    example: `Person addMethod(
lastName, method(lastName println)
)

Person new lastName("Doe")`,
  },
  {
    name: "IPL",
    definition: `L (Information Processing Language) est un langage de
    programmation développé dans les années 1960. Il était
    principalement utilisé pour le développement de logiciels
    scientifiques et numériques.`,
    example: `LIST 'Hello, world!'`,
  },
  {
    name: "IPTSCRAE",
    definition: `E (Initial Program Test System Combined with Realistic
    Application Elements) est un langage de programmation utilisé pour
    écrire des scripts dans le cadre de la création de jeux
    informatiques.`,
    example: `getObject(12).move(3, 2)`,
  },
  {
    name: "Isnubi",
    definition: `i est un langage de programmation expérimental basé sur le
    modèle de calcul des machines de Turing. Il est conçu pour
    explorer les concepts de programmation avancés et
    l'automatisation.`,
    example: `fact(n) = {
if (n == 0) {
  return 1;
} else {
  return n * fact(n - 1);
}
}
fact(5)`,
  },
  {
    name: "ISWIM",
    definition: `M (If You See What I Mean) est un langage de programmation
    fonctionnelle développé dans les années 1960. Il est connu pour
    son utilisation de l'inférence de type et a servi de base pour
    d'autres langages de programmation fonctionnels.`,
    example: `fun double(x) = x * 2
double(5)`,
  },
  {
    name: "J",
    definition: `J est un langage de programmation fonctionnel et orienté tableau.
    Il est principalement utilisé pour effectuer des calculs
    mathématiques et analyser des données.`,
    example: `+/%#~ i. 10`,
  },
  {
    name: "J#",
    definition: `J# (J Sharp) est un langage de programmation développé par
    Microsoft, basé sur Java. Il permet de développer des applications
    pour la plate-forme .NET.`,
    example: `public class HelloWorld {
public static void main(String[] args) {
  System.out.println("Hello, world!");
}
}`,
  },
  {
    name: "JADE",
    definition: `E (Java Agent DEvelopment Framework) est un framework utilisé
    pour développer des systèmes multi-agents. Il fournit des outils
    et des fonctionnalités pour faciliter la création d'agents
    autonomes.`,
    example: `Agent agent = new Agent();
agent.setup();
agent.addBehaviour(new MyBehaviour());
agent.start();`,
  },
  {
    name: "Jako",
    definition: `o est un langage de programmation fonctionnel conçu pour la
    programmation parallèle. Il est basé sur le langage Jak. Il permet
    d'exprimer des algorithmes parallèles de manière concise.`,
    example: `let x = 5;
print(x);`,
  },
  {
    name: "Jackson Structured Programming",
    definition: `n Structured Programming (JSP) est une méthode de
    programmation structurée qui se concentre sur la hiérarchie des
    données. Elle utilise des diagrammes de structure de programme
    pour représenter les étapes d'exécution.`,
    example: `start
input x, y
z = x + y
output z
end`,
  },
  {
    name: "JAL",
    definition: `L (Just Another Language) est un langage de programmation
    utilisé pour développer des microcontrôleurs. Il offre des
    fonctionnalités spécifiques pour la programmation bas-niveau et
  est souvent utilisé dans les systèmes embarqués.`,
    example: `INCLUDE 16f84A.inc
ORG 0
GOTO START

START:
BSF STATUS, RP0
CLRF TRISA
MOVLW B'00000000'
MOVWF TRISB
BCF STATUS, RP0
CLRF PORTA
CLRF PORTB

; Ajoutez le reste du code ici

END`,
  },
  {
    name: "Janus",
    definition: `s est un langage de programmation utilisé pour le
    développement de systèmes experts et d'applications basées sur la
    connaissance. Il est principalement utilisé dans le domaine de
    l'intelligence artificielle.`,
    example: `ruleset
(if (patient has fever)
  then (prescribe aspirin))

(if (patient has sore throat)
  then (prescribe antibiotics))
end`,
  },
  {
    name: "JASS",
    definition: `S (Just Another Scripting Syntax) est un langage de script
    utilisé pour développer des mods pour le jeu vidéo Warcraft III.
    Il permet de créer de nouvelles fonctionnalités et de modifier le
    comportement du jeu.`,
    example: `function HelloWorld takes nothing returns nothing
call BJDebugMsg("Hello, world!")
endfunction`,
  },
  {
    name: "Java",
    definition: `a est un langage de programmation polyvalent et orienté objet.
    Il est utilisé pour développer une large gamme d'applications, des
    applications de bureau aux applications mobiles et aux
    applications d'entreprise.`,
    example: `public class HelloWorld {
public static void main(String[] args) {
  System.out.println("Hello, world!");
}
}`,
  },
  {
    name: "JavaScript",
    definition: `t est un langage de programmation utilisé pour ajouter
    des fonctionnalités interactives aux pages web. Il permet de
    manipuler le contenu HTML, de gérer des événements et d'effectuer
    des appels réseau.`,
    example: `const greeting = 'Hello, world!';
console.log(greeting);`,
  },
  {
    name: "JCL (Job Control Language)",
    definition: `L (Job Control Language) est un langage utilisé principalement
    sur les systèmes d'exploitation mainframe IBM pour contrôler les
    travaux informatiques. Il est utilisé pour définir, exécuter et
    gérer des travaux batch sur ces systèmes.`,
    example: `//JOBNAME JOB (ACCOUNT), 'DESCRIPTION', MSGCLASS=X
//STEP1 EXEC PGM=PROGRAM`,
  },
  {
    name: "JEAN",
    definition: `N est un langage de programmation orienté objet développé par
    Sun Microsystems. Il est basé sur Java et fournit des
    fonctionnalités supplémentaires pour le développement
    d'applications orientées objet.`,
    example: `public class HelloWorld {
public static void main(String[] args) {
  System.out.println("Hello, world!");
}
}`,
  },
  {
    name: "Join Java",
    definition: `n Java est un langage de programmation conçu pour la
    programmation parallèle et distribuée. Il offre des
    fonctionnalités avancées pour la gestion des threads et la
    communication entre les processus.`,
    example: `public class HelloWorld {
public static void main(String[] args) {
  System.out.println("Hello, world!");
}
}`,
  },
  {
    name: "JOSS",
    definition: `S (JOHNNIAC Open Shop System) est un langage de programmation
    conçu pour le JOHNNIAC, un ordinateur des années 1950. Il était
    principalement utilisé pour la recherche scientifique et la
    résolution de problèmes mathématiques.`,
    example: `PRINT 2 + 2`,
  },
  {
    name: "Joule",
    definition: `e est un langage de programmation développé pour la
    programmation de systèmes répartis et d'applications sensibles à
    l'énergie. Il permet de modéliser et de contrôler l'allocation
    d'énergie dans les systèmes embarqués.`,
    example: `behaviour {
on signal1 do {
  // Actions à exécuter en réponse à signal1
}
}`,
  },
  {
    name: "JOVIAL",
    definition: `L (Jules Own Version of the International Algorithmic
    Language) est un langage de programmation de haut niveau conçu
    pour les systèmes embarqués. Il est utilisé principalement dans
    l'industrie aérospatiale et la défense.`,
    example: `PROCEDURE DIVISION.
DISPLAY "Hello, world!".
STOP RUN.`,
  },
  {
    name: "Joy",
    definition: `y est un langage de programmation fonctionnel inspiré de Forth.
    Il se distingue par sa syntaxe minimaliste et son approche basée
    sur la composition de fonctions. Joy est souvent utilisé pour
    l'enseignement de la programmation fonctionnelle.`,
    example: `[1 2 3 4] [dup *] apply`,
  },
  {
    name: "JSP (JavaServer Pages)",
    definition: `P (JavaServer Pages) est une technologie basée sur Java utilisée
    pour créer des pages web dynamiques. Les JSP permettent
    d'incorporer du code Java dans des pages HTML, ce qui facilite la
    génération de contenu dynamique.`,
    example: `&lt;%@ page language="java" %&gt;
&lt;html&gt;
&lt;body&gt;
  &lt;h1&gt;&lt;%= "Bonjour, monde !" %&gt;&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;`,
  },
  {
    name: "Julia",
    definition: `a est un langage de programmation de haut niveau conçu pour le
    calcul scientifique et la programmation technique. Il offre une
    syntaxe concise et des performances élevées, ce qui en fait un
    choix populaire pour le calcul numérique.`,
    example: `function hello(name)
println("Hello, $name!")
end

hello("world")`,
  },
  {
    name: "Karel",
    definition: `l est un langage de programmation éducatif utilisé pour
    enseigner les concepts de base de la programmation. Il est basé
    sur des simulations de robots et permet aux étudiants de résoudre
    des problèmes en utilisant des instructions simples.`,
    example: `function main() {
  move();
  turnLeft();
  move();
  turnRight();
  move();
}`,
  },
  {
    name: "Kite",
    definition: `e est un langage de programmation conçu pour simplifier le
    développement d'applications Web en utilisant une approche
    déclarative. Il permet de créer facilement des interfaces
    utilisateur interactives et réactives.`,
    example: `import kite

app = kite.create_app()

@app.route('/')
def hello():
  return 'Hello, World!'

if __name__ == '__main__':
  app.run()`,
  },
  {
    name: "Kogut",
    definition: `t est un langage de programmation fonctionnel inspiré de Lisp.
    Il se distingue par sa simplicité et sa syntaxe minimaliste. Il
  est souvent utilisé pour l'enseignement de la programmation
    fonctionnelle.`,
    example: `(define (factorial n)
(if (zero? n)
    1
    (* n (factorial (- n 1)))))

(display (factorial 5))`,
  },
  {
    name: "Korn shell (ksh)",
    definition: `n shell (ksh) est un shell de commande et un langage de script
    développé par David Korn. Il est utilisé principalement sur les
    systèmes d'exploitation Unix et permet d'automatiser des tâches
    système et d'interagir avec l'interface en ligne de commande.`,
    example: `#!/bin/ksh
echo "Hello, World!"`,
  },
  {
    name: "Kotlin",
    definition: `n est un langage de programmation moderne et concis qui
    s'exécute sur la machine virtuelle Java (JVM). Il est souvent
    utilisé pour le développement d'applications Android, mais peut
    également être utilisé pour des applications serveur, des
    applications web et plus encore.`,
    example: `fun main() {
  val message = "Hello, World!"
  println(message)
}`,
  },
  {
    name: "KRC",
    definition: `C (Karel Robot Control) est un langage de programmation utilisé
    pour enseigner les concepts de base de la programmation et de la
    robotique. Il est souvent utilisé avec le robot virtuel Karel pour
    résoudre des problèmes simples à l'aide d'instructions de
    déplacement et de manipulation d'objets.`,
    example: `PROGRAM helloWorld
BEGIN
  WRITE("Hello, World!")
END helloWorld`,
  },
  {
    name: "KRYPTON",
    definition: `N est un langage de programmation conçu pour les
    applications de calcul haute performance et de modélisation
    scientifique. Il offre des fonctionnalités avancées pour la
    manipulation de tableaux multidimensionnels et la parallélisation
    des calculs.`,
    example: `program helloWorld;
begin
  writeln('Hello, World!');
end.`,
  },
  {
    name: "KUKA",
    definition: `A est un langage de programmation utilisé pour contrôler les
    robots industriels fabriqués par l'entreprise KUKA. Il permet de
    programmer les mouvements, les tâches et les interactions des
    robots pour automatiser des processus industriels.`,
    example: `MODULE MainModule
  TASK HelloWorld()
      BEGIN
          TPWrite("Hello, World!");
      END HelloWorld;
ENDMODULE`,
  },
  {
    name: "L",
    definition: `L est un langage de programmation fonctionnel conçu pour être
    simple et expressif. Il est basé sur le lambda-calcul et est
    utilisé principalement pour l'enseignement et la recherche.`,
    example: `(define (factorial n)
(if (<= n 1)
  1
  (* n (factorial (- n 1)))))`,
  },
  {
    name: "L# .NET",
    definition: `L# .NET est un langage de programmation orienté objet développé
    par Microsoft. Il s'appuie sur le framework .NET et permet de
    créer des applications pour diverses plateformes, y compris
    Windows, Android et iOS.`,
    example: `class HelloWorld
{
static void Main()
{
  Console.WriteLine("Hello, World!");
}
}`,
  },
  {
    name: "LabVIEW",
    definition: `W est un langage de programmation graphique utilisé
    principalement pour le développement d'applications de test, de
    mesure et de contrôle. Il permet de représenter le flux de données
    entre les différentes parties d'un programme à l'aide de
    diagrammes de blocs.`,
    example: `// Exemple de diagramme de blocs LabVIEW`,
  },
  {
    name: "Ladder (LD)",
    definition: `r (LD) est un langage de programmation utilisé dans la
    programmation des automates programmables industriels (API). Il
    utilise des symboles graphiques pour représenter les circuits
    électriques et les opérations logiques.`,
    example: `// Exemple de diagramme Ladder (LD)`,
  },
  {
    name: "Lagoona",
    definition: `a est un langage de programmation dédié au développement de
    jeux vidéo. Il offre des fonctionnalités spécifiques pour la
    création d'environnements virtuels interactifs et de scénarios de
    jeu.`,
    example: `// Exemple de code Lagoona`,
  },
  {
    name: "LANSA",
    definition: `A est un langage de programmation et un environnement de
    développement intégré (EDI) utilisés pour la création
    d'applications d'entreprise. Il permet le développement rapide
    d'applications en utilisant des outils visuels et des générateurs
    de code.`,
    example: `// Exemple de code LANSA`,
  },
  {
    name: "LARP",
    definition: `P (Live Action Role Playing) est un langage de programmation
    utilisé pour créer des règles et des mécanismes de jeu pour les
    jeux de rôle grandeur nature. Il permet de définir les
    comportements des personnages, les interactions avec
    l'environnement et les résolutions des actions des joueurs.`,
    example: `// Exemple de code LARP`,
  },
  {
    name: "Lasso",
    definition: `o est un langage de programmation utilisé pour le
    développement web. Il est principalement utilisé pour la création
    de sites web dynamiques et d'applications web.`,
    example: `// Exemple de code Lasso`,
  },
  {
    name: "Lava",
    definition: `a est un langage de programmation utilisé dans le cadre de
    l'environnement de développement modulaire LavaPE. Il permet de
    créer des extensions et des modules personnalisés pour LavaPE.`,
    example: `// Exemple de code Lava`,
  },
  {
    name: "Leadwerks Script",
    definition: `s Script est un langage de script utilisé dans le moteur
    de jeu Leadwerks. Il est spécifiquement conçu pour la création de
    jeux vidéo et offre des fonctionnalités spécifiques pour le
    développement de scénarios de jeu.`,
    example: `// Exemple de code Leadwerks Script`,
  },
  {
    name: "Leda",
    definition: `a est un langage de programmation fonctionnelle utilisé pour le
    développement de logiciels et la recherche en informatique. Il est
    basé sur le langage de programmation ML.`,
    example: `fac := fun n ->
if n <= 0 then 1
else n * fac (n - 1)
in
result := fac 5;`,
  },
  {
    name: "leekwars",
    definition: `s est un jeu en ligne qui permet de programmer des IA pour
    des combats entre poireaux (leeks en anglais). Le langage de
    programmation utilisé est basé sur le JavaScript.`,
    example: `function turn() {
// Code pour déterminer les actions du poireau
}`,
  },
  {
    name: "Legoscript",
    definition: `t est un langage de programmation utilisé pour contrôler
    les robots Lego Mindstorms EV3. Il permet de programmer les
    mouvements, les capteurs et les actions du robot.`,
    example: `moveForward(100);
turnRight(90);
moveForward(50);`,
  },
  {
    name: "Lexico",
    definition: `o est un langage de programmation spécifiquement conçu pour
    le traitement du langage naturel. Il permet de créer des
    applications qui analysent et manipulent du texte écrit en
    utilisant des règles et des modèles linguistiques.`,
    example: `rule: salutation
  "Bonjour" { action: say("Bonjour !"); }
  "Salut" { action: say("Salut !"); }
  "Hello" { action: say("Hello!"); }`,
  },
  {
    name: "Light Script",
    definition: `t Script est un langage de script léger utilisé pour la
    création d'applications web et mobiles. Il est caractérisé par sa
    simplicité et sa facilité d'apprentissage, ce qui en fait un choix
    populaire pour les développeurs débutants.`,
    example: `function greet() {
console.log("Hello, world!");
}`,
  },
  {
    name: "Limbo",
    definition: `o est un langage de programmation conçu pour le développement
    de systèmes d'exploitation. Il est apprécié pour sa sécurité, sa
    concision et son support du parallélisme, ce qui en fait un choix
    courant pour les projets bas niveau.`,
    example: `include "sys.m";
include "draw.m";

Limbo: module
{
init: fn();
};

init: fn() {
sys = load Sys Sys->PATH;
sys->print("Hello, Limbo!");
}`,
  },
  {
    name: "Limnor",
    definition: `r est un langage de programmation visuelle utilisé pour le
    développement d'applications logicielles. Il permet de créer des
    applications en reliant des blocs d'instructions graphiques,
    offrant ainsi une approche intuitive et conviviale pour les
    développeurs non techniques.`,
    example: `// Crée un bouton et déclenche une action lorsqu'il est cliqué
OnClick(Button1) {
MsgBox("Bonjour, monde!");
}`,
  },
  {
    name: "LINC",
    definition: `C (Language for Interactive Nonfiction Creation) est un langage
    de programmation utilisé pour le développement de jeux interactifs
    et de fictions interactives. Il permet de créer des histoires
    interactives avec des choix, des personnages et des dialogues.`,
    example: `location "chambre";

chambre: room {
description: "Vous êtes dans une chambre sombre.";
exits {
  nord: couloir;
};
};

couloir: room {
description: "Vous êtes dans un couloir éclairé.";
exits {
  sud: chambre;
  est: salon;
};
};`,
  },
  {
    name: "Lingo",
    definition: `o est un langage de script utilisé principalement dans le
    logiciel d'auteur multimédia Adobe Director. Il est utilisé pour
    créer des interactions et des animations dans les projets
    multimédias tels que les jeux, les présentations interactives et
    les simulations.`,
    example: `on mouseUp {
put "Hello, world!" into field "myTextField"
}`,
  },
  {
    name: "Linoleum",
    definition: `m est un langage de programmation fonctionnelle utilisé
    pour le développement de logiciels et de systèmes. Il est
    caractérisé par sa forte expressivité et sa capacité à traiter des
    problèmes complexes avec une syntaxe concise.`,
    example: `+def factorial(n) {
if (n == 0) {
  1;
} else {
  n * factorial(n - 1);
}
}`,
  },
  {
    name: "Linotte",
    definition: `e est un langage de programmation créé spécifiquement pour
    l'enseignement de la programmation. Il vise à simplifier les
    concepts de base de la programmation et à fournir une syntaxe
    facile à comprendre pour les débutants.`,
    example: `Afficher "Bonjour, monde !"`,
  },
  {
    name: "LIS",
    definition: `S (Language for Implementation of Systems) est un langage de
    programmation utilisé pour la programmation système et la mise en
    œuvre de compilateurs. Il fournit des outils et des bibliothèques
    pour faciliter la création de systèmes logiciels.`,
    example: `(defun fact (n)
(if (<= n 1)
    1
    (* n (fact (- n 1)))))`,
  },
  {
    name: "LISA",
    definition: `A (Language for Instruction Set Architecture) est un langage de
    description utilisé pour spécifier l'architecture d'un processeur.
    Il permet de définir les instructions, les registres et les autres
    caractéristiques d'un processeur.`,
    example: `Instruction ADD:
Operation: R[rd] = R[rs1] + R[rs2]
Encoding: 000000 rs1 rs2 rd 00000 1000011`,
  },
  {
    name: "Lisaac",
    definition: `c est un langage de programmation utilisé pour la
    modélisation et la simulation de systèmes d'automatisation
    industrielle. Il permet de décrire les comportements des
    équipements et des processus industriels.`,
    example: `Device Lamp {
Var int status;
Method turnOn() {
  status = 1;
}
Method turnOff() {
  status = 0;
}
}`,
  },
  {
    name: "Lisp",
    definition: `p est un langage de programmation basé sur le calcul symbolique
    et la manipulation de listes. Il est connu pour sa syntaxe
    parenthésée et sa capacité à représenter des programmes en tant
    que données manipulables.`,
    example: `(defun factorial (n)
(if (<= n 1)
    1
    (* n (factorial (- n 1)))))`,
  },
  {
    name: "Lithe",
    definition: `e est un langage de programmation fonctionnelle conçu pour la
    programmation concurrente et distribuée. Il met l'accent sur la
    composition de fonctions immuables et la gestion des processus
    concurrents.`,
    example: `def fib(n):
if n < 2:
  return n
else:
  return fib(n-1) + fib(n-2)`,
  },
  {
    name: "Little b",
    definition: `e b est un langage de programmation utilisé pour enseigner
    les bases de la programmation. Il utilise une syntaxe simple et
    des concepts fondamentaux pour aider les débutants à comprendre
    les principes de base de la programmation.`,
    example: `Print "Hello, world!"`,
  },
  {
    name: "Logo",
    definition: `o est un langage de programmation éducatif qui met l'accent sur
    le dessin et les graphiques. Il permet de contrôler un curseur
    graphique pour créer des dessins géométriques et d'explorer des
    concepts mathématiques.`,
    example: `TO square :size
REPEAT 4 [
  FORWARD :size
  RIGHT 90
]
END`,
  },
  {
    name: "LOLCODE",
    definition: `E est un langage de programmation humoristique basé sur des
    phrases et des images de chats. Il est conçu pour être amusant et
    ne doit pas être pris au sérieux comme langage de programmation de
    production.`,
    example: `HAI
CAN HAS STDIO?
VISIBLE "HAI WORLD!"
KTHXBYE`,
  },
  {
    name: "LPC",
    definition: `C (Lars Pensjö C) est un langage de programmation utilisé pour
    développer des jeux en ligne multijoueurs basés sur le MUD
    (Multi-User Dungeon). Il permet de créer des environnements
    virtuels interactifs avec des joueurs connectés.`,
    example: `void create() {
write("Un nouvel objet est créé.\n");`,
  },
  {
    name: "LSE",
    definition: `E (Literate Software Environment) est un langage de
    programmation conçu pour la création de documents contenant du
    code source et de la documentation. Il permet d'écrire du code
    lisible par les humains tout en générant des programmes
    exécutables.`,
    example: `@title Bonjour, monde !
@description Affiche un message de salutation.
@output Bonjour, monde !

Afficher "Bonjour, monde !" sur la sortie standard.
PRINT "Bonjour, monde !"`,
  },
  {
    name: "LSL",
    definition: `L (Linden Scripting Language) est un langage de script utilisé
    pour programmer des objets virtuels dans Second Life, une
    plateforme de réalité virtuelle en ligne. Il permet de créer des
    interactions et des comportements pour les objets dans
    l'environnement virtuel.`,
    example: `// Script qui fait tourner un objet
default
{
  state_entry()
  {
      llTargetOmega(<1,0,0>, 1.0, 1.0);
  }
}`,
  },
  {
    name: "Lua",
    definition: `a est un langage de script léger et rapide qui est souvent
    utilisé comme langage d'extension dans d'autres applications. Il
  est largement utilisé dans le développement de jeux vidéo et offre
    une syntaxe simple et expressive.`,
    example: `function factorial(n)
  if n == 0 then
      return 1
  else
      return n * factorial(n - 1)
  end
end

print(factorial(5)) -- Affiche 120`,
  },
  {
    name: "Lucci",
    definition: `i est un langage de programmation fonctionnel conçu pour la
    programmation concurrente et parallèle. Il permet d'exprimer des
    calculs concurrents de manière concise et sûre.`,
    example: `let rec factorial n =
  if n = 0 then
      1
  else
      n * factorial (n - 1)

print_int (factorial 5) (* Affiche 120 *)`,
  },
  {
    name: "Lucid",
    definition: `d est un langage de programmation déclaratif utilisé pour
    l'écriture de programmes de calcul symbolique. Il est souvent
    utilisé dans les domaines des mathématiques, de l'intelligence
    artificielle et de la programmation logique.`,
    example: `let rec factorial n =
  if n = 0 then
      1
  else
      n * factorial (n - 1)

print_int (factorial 5) (* Affiche 120 *)`,
  },
  {
    name: "Lush",
    definition: `h est un langage de programmation fonctionnel utilisé pour le
    développement de logiciels scientifiques et l'apprentissage
    automatique. Il est basé sur le langage Lisp et offre des
    fonctionnalités avancées pour la manipulation de données et les
    calculs numériques.`,
    example: `(defun factorial (n)
  (if (<= n 1)
      1
      (* n (factorial (- n 1)))))

(print (factorial 5)) ; Affiche 120`,
  },
  {
    name: "Lustre",
    definition: `e est un langage de programmation synchrone utilisé pour la
    modélisation et la vérification de systèmes temps réel. Il permet
    de décrire le comportement réactif des systèmes en spécifiant des
    relations entre des signaux échantillonnés dans le temps.`,
    example: `node Factorial (n: int) returns (result: int);
var
fact: int;
let
fact = if n = 0 then 1 else n * Factorial(n - 1);
result = fact;
tel

tel`,
  },
  {
    name: "LYaPAS",
    definition: `S (Language for Yet Another Pseudo Assembly System) est un
    langage de programmation utilisé pour écrire du code assembleur
    simplifié. Il est souvent utilisé pour l'apprentissage des bases
    de la programmation bas niveau.`,
    example: `LOAD R0, 5
ADD R0, R0, 3
STORE R0, 10`,
  },
  {
    name: "Lynx",
    definition: `x est un langage de programmation orienté objet et fonctionnel
    utilisé pour le développement d'applications web. Il permet de
    créer des sites web dynamiques en utilisant une syntaxe concise et
    expressive.`,
    example: `def factorial(n):
  if n == 0:
      return 1
  else:
      return n * factorial(n - 1)

print(factorial(5)) # Affiche 120`,
  },
  {
    name: "LZX",
    definition: `X (LiveScript eXtensible) est un langage de programmation
    utilisé pour le développement d'applications web interactives. Il
    offre des fonctionnalités avancées pour la manipulation du DOM et
    la gestion des événements.`,
    example: `class Main extends Component {
  function factorial(n) {
      if (n <= 1) {
          return 1;
      } else {
          return n * factorial(n - 1);
      }
  }

  onMount() {
      console.log(factorial(5)); // Affiche 120
  }

  render() {
      return null;
  }
}`,
  },
  {
    name: "M",
    definition: `M est un langage de programmation utilisé principalement pour le
    développement de logiciels scientifiques et statistiques. Il est
    largement utilisé dans le domaine de la modélisation et de
    l'analyse de données.`,
    example: `FUNCTION factorial(n)
IF n = 0 THEN RETURN 1
ELSE RETURN n * factorial(n - 1)
END FUNCTION`,
  },
  {
    name: "M4",
    definition: `4 est un langage de macro utilisé pour générer du code source ou
    d'autres fichiers textuels. Il permet de définir des modèles et de
    les étendre grâce à des macros pour automatiser des tâches de
    génération de code.`,
    example: `dnl Ceci est un commentaire en M4
define(\`GREETING', \`Hello, world!')
GREETING`,
  },
  {
    name: "Maxima",
    definition: `a est un système de calcul formel basé sur le langage de
    programmation Lisp. Il est utilisé pour effectuer des calculs
    symboliques et numériques avancés, notamment en mathématiques et
    en physique.`,
    example: `f(x) := x^2 + 2*x + 1
integrate(f(x), x)`,
  },
  {
    name: "MAD",
    definition: `D (Mean Absolute Deviation) est une technique de programmation
    utilisée pour calculer la déviation absolue moyenne d'un ensemble
    de données. Elle est souvent utilisée en statistiques pour mesurer
    la dispersion des valeurs.`,
    example: `data = [1, 2, 3, 4, 5]
mean = sum(data) / len(data)
mad = sum(abs(x - mean) for x in data) / len(data)`,
  },
  {
    name: "Magik",
    definition: `k est un langage de programmation utilisé dans le système de
    développement Smallworld pour créer des applications géospatiales.
    Il est utilisé pour développer des fonctionnalités avancées de
    gestion des réseaux et de visualisation cartographique.`,
    example: `method helloWorld()
<< "Hello, world!" >>
endmethod`,
  },
  {
    name: "Magma",
    definition: `a est un langage de calcul formel et de programmation utilisé
    pour la recherche en mathématiques. Il offre une large gamme de
    fonctionnalités pour effectuer des calculs algébriques, des
    calculs sur les groupes et les anneaux, ainsi que des calculs de
    courbes et de surfaces.`,
    example: `R&lt;x&gt; := PolynomialRing(RationalField())
f := x^2 + 2*x + 1
Factorization(f)`,
  },
  {
    name: "Malbolge",
    definition: `e est un langage de programmation ésotérique notoire pour
    sa conception complexe et sa difficulté extrême. Il est considéré
    comme l'un des langages les plus difficiles à programmer et à
    comprendre.`,
    example: ` (voir ici: https://fr.wikipedia.org/wiki/Malbolge)`,
  },
  {
    name: "MapBasic",
    definition: `c est un langage de programmation utilisé pour le
    développement d'applications géospatiales avec le logiciel MapInfo
    Professional. Il permet de personnaliser et d'automatiser les
    fonctionnalités de MapInfo en utilisant des scripts.`,
    example: `Include "MapBasic.def"

Declare Sub Main
Declare Sub CustomProcedure

Sub Main
Print "Hello, world!"
End Sub

Sub CustomProcedure
' Code personnalisé ici
End Sub`,
  },
  {
    name: "Maple",
    definition: `e est un logiciel de calcul formel et numérique utilisé en
    mathématiques, en ingénierie et en sciences. Il permet de résoudre
    des équations, de manipuler des expressions mathématiques et de
    réaliser des graphiques.`,
    example: `f := x - 2*x^2 + x^3;
solve(f = 0, x);`,
  },
  {
    name: "MAPPER",
    definition: `R est un langage de programmation utilisé pour le
    développement d'applications d'entreprise. Il est principalement
    utilisé dans le domaine des bases de données et permet de
    manipuler et de gérer les données stockées.`,
    example: `DEFINE FILE EMPLOYEE
NAME/A30
AGE/I2
END
PRINT NAME AGE
FROM EMPLOYEE
WHERE AGE &gt; 30;`,
  },
  {
    name: "MARK-IV",
    definition: `K-IV est un langage de programmation utilisé pour le
    développement d'applications d'entreprise. Il offre des
    fonctionnalités de traitement des fichiers et de gestion des bases
    de données.`,
    example: `UPDATE EMPLOYEE
SET SALARY = SALARY * 1.1
WHERE DEPARTMENT = 'SALES';`,
  },
  {
    name: "Mary",
    definition: `y est un langage de programmation utilisé pour la composition
    musicale. Il permet de créer et de manipuler des séquences de
    notes et de contrôler les paramètres sonores.`,
    example: `$ chord = [C4 E4 G4];
$ melody = [A4 B4 C5 D5];
$ play($ chord, $ melody);`,
  },
  {
    name: "Microsoft Macro Assembler",
    definition: `t Macro Assembler (MASM) est un langage d'assemblage
    utilisé pour développer des logiciels bas niveau et des pilotes de
    périphériques pour les systèmes d'exploitation Windows.`,
    example: `.model small
.stack 100h
.data
message db 'Hello, world!', '$'
.code
main proc
  mov ah, 9
  mov dx, offset message
  int 21h
  mov ah, 4Ch
  int 21h
main endp
end main`,
  },
  {
    name: "Micro Lua DS",
    definition: `o Lua DS est un langage de programmation utilisé pour le
    développement de jeux et d'applications sur la console de jeu
    Nintendo DS. Il est basé sur le langage Lua.`,
    example: `function love.load()
print("Hello, world!")
end`,
  },
  {
    name: "Mathematica",
    definition: `a est un système de calcul formel et numérique utilisé
    en mathématiques, en physique, en ingénierie et dans d'autres
    domaines scientifiques. Il permet de réaliser des calculs avancés,
    des simulations et des visualisations.`,
    example: `f[x_] := x^2 + 2x + 1;
Plot[f[x], {x, -5, 5}];`,
  },
  {
    name: "MATLAB",
    definition: `B est un langage de programmation utilisé principalement dans
    le domaine des mathématiques, de l'ingénierie et des sciences. Il
  est utilisé pour effectuer des calculs numériques, des
    simulations, de l'analyse de données et de la visualisation.`,
    example: `x = linspace(0, 2*pi, 100);
y = sin(x);
plot(x, y);`,
  },
  {
    name: "MaxScript (Autodesk 3ds Max)",
    definition: `t est un langage de script utilisé pour automatiser les
    tâches dans le logiciel de modélisation et d'animation 3D Autodesk
    3ds Max. Il permet de créer des outils personnalisés,
    d'automatiser des opérations répétitives et de contrôler le
    comportement des objets dans une scène 3D.`,
    example: `box width: 100 height: 200 length: 50
rotate $ [0, 0, 1] 45`,
  },
  {
    name: "Maya (MEL)",
    definition: `a Embedded Language (MEL) est un langage de script utilisé dans
    le logiciel de modélisation et d'animation 3D Autodesk Maya. Il
    permet de créer des outils personnalisés, d'automatiser des tâches
    et de contrôler le comportement des objets dans une scène 3D.`,
    example: `polyCube -w 2 -h 4 -d 2;
rotate -r -y 45;`,
  },
  {
    name: "MDL",
    definition: `L (Microcomputer Device Language) est un langage de
    programmation utilisé pour le développement de logiciels pour les
    micro-ordinateurs. Il est principalement utilisé pour la
    programmation système et le développement de pilotes de
    périphériques.`,
    example: `SYSPUT "Bonjour, monde !"`,
  },
  {
    name: "Mercury",
    definition: `y est un langage de programmation fonctionnelle et logique
    utilisé pour le développement d'applications à forte fiabilité. Il
  est conçu pour faciliter la programmation sans erreur et offre des
    fonctionnalités avancées telles que l'inférence de types et la
    détection automatique de fuites de mémoire.`,
    example: `factorial(0) = 1.
factorial(N) = N * factorial(N - 1).`,
  },
  {
    name: "Mesa",
    definition: `a est un langage de programmation conçu pour le développement
    de systèmes d'exploitation et de logiciels système. Il met
    l'accent sur la simplicité, la sécurité et la portabilité, et a
    été utilisé dans des projets tels que Xerox Alto et Xerox Star.`,
    example: `PROCEDURE Fibonacci(n: CARDINAL): CARDINAL;
BEGIN
  IF n <= 1 THEN
    RETURN n;
  ELSE
    RETURN Fibonacci(n - 1) + Fibonacci(n - 2);
  END;
END Fibonacci;`,
  },
  {
    name: "MetaL",
    definition: `L (Meta Language) est un langage de programmation développé
    pour la génération automatique de compilateurs. Il est utilisé
    pour décrire la syntaxe et la sémantique des langages de
    programmation et peut générer du code source dans différents
    langages cibles.`,
    example: `expr: term ('+' term)*;`,
  },
  {
    name: "Metamath",
    definition: `h est un langage de description de preuves formelles
    utilisé pour la vérification formelle des mathématiques. Il permet
    de formaliser les axiomes, les définitions et les théorèmes
    mathématiques, et d'effectuer des preuves vérifiées par
    ordinateur.`,
    example: `$a |- $a.`,
  },
  {
    name: "MicroAlg",
    definition: `g est un langage de programmation utilisé pour
    l'enseignement de l'algorithmique et la résolution de problèmes.
    Il se caractérise par une syntaxe simple et une prise en charge
    des structures de contrôle de base telles que les boucles et les
    conditions.`,
    example: `Pour I de 1 à 10 faire
Afficher I
Fin Pour`,
  },
  {
    name: "Microcode",
    definition: `e est un langage de bas niveau utilisé pour décrire les
    instructions exécutées par un processeur. Il permet de spécifier
    le comportement des micro-opérations et des étapes de contrôle
    internes du processeur.`,
    example: `0000: LOAD R1, [R2]
0001: ADD R3, R1, R4
0010: STORE [R5], R3`,
  },
  {
    name: "MicroScript",
    definition: `t est un langage de script utilisé pour la programmation
    de systèmes embarqués et de dispositifs à microcontrôleurs. Il
    offre une syntaxe légère et des fonctionnalités de haut niveau
    pour faciliter le développement d'applications embarquées.`,
    example: `var led = new DigitalOutputPin(13);
led.write(HIGH);`,
  },
  {
    name: "MIIS",
    definition: `S (Microsoft Identity Integration Server) est un produit
    Microsoft utilisé pour la gestion des identités et la
    synchronisation des données d'annuaire. Il permet de gérer les
    utilisateurs, les groupes et les informations d'identification
    dans un environnement d'entreprise.`,
    example: `miis.exe -sync`,
  },
  {
    name: "MillScript",
    definition: `t est un langage de script utilisé dans le domaine de
    l'automatisation industrielle et des systèmes embarqués. Il permet
    de contrôler et de programmer des équipements et des machines.`,
    example: `SET variable = 10
PRINT "La valeur de la variable est " + variable`,
  },
  {
    name: "MIMIC",
    definition: `C (Multi-Purpose Internet Mail Extensions Interoperability
    Center) est un outil utilisé pour tester la compatibilité et
    l'interopérabilité des logiciels de messagerie électronique. Il
    permet de simuler différents scénarios de communication pour
    tester les fonctionnalités des clients de messagerie.`,
    example: `mimic.exe --test-suite=imap --scenario=login`,
  },
  {
    name: "min",
    definition: `n est un langage de programmation minimaliste conçu pour être
    simple et léger. Il se concentre sur l'essentiel et offre une
    syntaxe épurée. Il est souvent utilisé à des fins éducatives pour
    enseigner les concepts de base de la programmation.`,
    example: `PRINT "Hello, world!"`,
  },
  {
    name: "MisterDev",
    definition: `v est un langage de programmation créé par la communauté
    de développeurs en ligne. Il est souvent utilisé pour développer
    des projets open source et encourage la collaboration entre les
    développeurs.`,
    example: `VAR name = "John"
PRINT "Hello, " + name + "!"`,
  },
  {
    name: "Mindscript",
    definition: `t est un langage de programmation utilisé dans les jeux
    vidéo et les simulations. Il permet de définir le comportement des
    personnages non joueurs (PNJ) et de créer des scénarios
    interactifs.`,
    example: `WHEN player.approaches(npc):
npc.say("Bienvenue dans le village !")`,
  },
  {
    name: "Miranda",
    definition: `a est un langage de programmation fonctionnel utilisé pour
    la vérification formelle et la preuve de programmes. Il permet de
    spécifier et de vérifier les propriétés des programmes de manière
    mathématique.`,
    example: `factorial :: Integer -> Integer
factorial 0 = 1
factorial n = n * factorial (n-1)`,
  },
  {
    name: "Miva Script",
    definition: `a Script est un langage de programmation utilisé pour
    développer des applications e-commerce. Il permet de créer des
    fonctionnalités personnalisées et d'interagir avec les bases de
    données pour gérer les transactions en ligne.`,
    example: `GLOBAL g_ProductCount
g_ProductCount = 0

FUNCTION AddProduct()
g_ProductCount++
RETURN g_ProductCount
END FUNCTION`,
  },
  {
    name: "ML",
    definition: `L (Meta Language) est un langage de programmation fonctionnel
    utilisé pour le développement d'applications formelles, l'analyse
    de programmes et la vérification de la correction des logiciels.
    Il offre un système de types fort et des mécanismes avancés pour
    la manipulation des fonctions.`,
    example: `fun factorial 0 = 1
| factorial n = n * factorial (n-1)`,
  },
  {
    name: "Moby",
    definition: `y est un langage de programmation utilisé pour le développement
    d'applications mobiles. Il permet de créer des applications
    multiplateformes en utilisant une syntaxe simple et des
    bibliothèques spécifiques aux appareils mobiles.`,
    example: `FUNCTION calculateSum(a, b)
RETURN a + b
END FUNCTION`,
  },
  {
    name: "Model 204",
    definition: `l 204 est un langage de programmation utilisé pour le
    développement d'applications mainframe et de systèmes de gestion
    de bases de données. Il offre des fonctionnalités avancées pour
    manipuler et interroger des données massives.`,
    example: `QUERY employeeData
SELECT * FROM employees WHERE department = 'IT'`,
  },
  {
    name: "Modula",
    definition: `a est un langage de programmation structuré conçu pour le
    développement de logiciels à grande échelle. Il offre des
    fonctionnalités avancées telles que la modularité, la gestion des
    exceptions et les types de données abstraits.`,
    example: `MODULE HelloWorld;
IMPORT InOut;

PROCEDURE Hello;
BEGIN
InOut.WriteString("Hello, world!");
InOut.WriteLn;
END Hello;

BEGIN
Hello;
END HelloWorld.`,
  },
  {
    name: "Modula-2",
    definition: `a-2 est une évolution du langage Modula. Il est utilisé pour
    le développement de logiciels embarqués, les systèmes
    d'exploitation et les applications scientifiques. Il offre des
    fonctionnalités de programmation structurée avancées et un système
    de types statique.`,
    example: `MODULE HelloWorld;
  FROM InOut IMPORT WriteString, WriteLn;
  
  PROCEDURE Hello;
  BEGIN
    WriteString("Hello, world!");
    WriteLn;
  END Hello;
  
  BEGIN
    Hello;
  END HelloWorld.`,
  },
  {
    name: "Modula-3",
    definition: `a-3 est un langage de programmation conçu pour le
    développement de logiciels système fiables et sûrs. Il est dérivé
    du langage Pascal et combine des fonctionnalités de différents
    langages tels que Modula-2 et Oberon.`,
    example: `MODULE HelloWorld;
IMPORT Out;

PROCEDURE Run;
BEGIN
  Out.String("Hello, world!");
  Out.Ln;
END Run;

BEGIN
Run;
END HelloWorld.`,
  },
  {
    name: "Mondrian",
    definition: `n est un langage de programmation graphique utilisé pour
    créer des dessins et des images. Il tire son nom du célèbre
    peintre néerlandais Piet Mondrian et permet de manipuler des
    formes géométriques et des couleurs pour créer des compositions
    artistiques.`,
    example: `rectangle(0, 0, 100, 100, RED);
circle(50, 50, 30, BLUE);
triangle(80, 20, 60, 50, 90, 70, YELLOW);`,
  },
  {
    name: "MOO",
    definition: `O (MUD Object-Oriented) est un langage de programmation utilisé
    pour développer des environnements virtuels multi-utilisateurs,
    appelés MUD (Multi-User Dungeon). Il permet de créer des objets,
    des personnages et des interactions dans ces mondes virtuels.`,
    example: `$player: #2.player;

$player:doAction("move", "north");
$player:doAction("say", "Hello, world!");`,
  },
  {
    name: "MUMPS",
    definition: `S (Massachusetts General Hospital Utility Multi-Programming
    System) est un langage de programmation utilisé dans le domaine de
    la santé pour le développement de systèmes d'information médicale.
    Il est connu pour sa simplicité et sa capacité à manipuler
    efficacement les données.`,
    example: `SET name="John Doe"
SET age=30
WRITE "Patient: ",name," (",age," years old)"`,
  },
  {
    name: "Mythryl",
    definition: `l est un langage de programmation fonctionnel et impératif
    conçu pour la programmation système et le développement de
    logiciels robustes. Il offre des fonctionnalités de programmation
    concurrente et prend en charge la programmation orientée objet.`,
    example: `fun factorial 0 = 1
| factorial n = n * factorial (n - 1)

val result = factorial 5`,
  },
  {
    name: "N",
    definition: `N est un langage de programmation de haut niveau utilisé pour le
    développement de logiciels système et d'applications. Il est connu
    pour sa simplicité et sa facilité d'utilisation.`,
    example: `// Hello World en N
print("Hello, World!");`,
  },
  {
    name: "Napier88",
    definition: `8 est un langage de programmation conçu pour l'enseignement
    de l'informatique. Il est utilisé pour introduire les concepts
    fondamentaux de la programmation aux débutants.`,
    example: `# Afficher un message
AFFICHE "Bonjour, monde!"`,
  },
  {
    name: "Natural",
    definition: `l est un langage de programmation de haut niveau utilisé
    pour le développement d'applications commerciales et d'entreprise.
    Il est particulièrement adapté pour travailler avec des bases de
    données et des transactions.`,
    example: `// Déclarer une variable
DEFINE DATA LOCAL
1 nom (A20)
END-DEFINE

// Affecter une valeur à la variable
MOVE 'John' TO nom`,
  },
  {
    name: "Ncodi",
    definition: `i est un langage de programmation orienté objet utilisé pour
    le développement de jeux vidéo. Il offre des fonctionnalités
    avancées pour la création de graphismes, l'interaction utilisateur
    et la gestion des ressources.`,
    example: `// Définir une classe
class Personnage {
constructor(nom, pointsDeVie) {
  this.nom = nom;
  this.pointsDeVie = pointsDeVie;
}

attaquer(cible) {
  // Logique d'attaque
}
}`,
  },
  {
    name: "NBC",
    definition: `C (N-Ball Compiler) est un langage de programmation utilisé pour
    le développement de jeux vidéo en 2D. Il est souvent utilisé avec
    le moteur de jeu N-Ball pour créer des jeux pour diverses
    plateformes.`,
    example: `// Définir une fonction
function direBonjour(nom) {
afficher("Bonjour, " + nom + " !");
}`,
  },
  {
    name: "NEAT chipset",
    definition: `T chipset est un langage de description matériel utilisé pour
    la conception de circuits intégrés. Il permet de spécifier le
    comportement et la structure des puces électroniques.`,
    example: `// Définir un composant
component Additionneur {
inputs: [A, B];
outputs: [Somme, Retenue];

// Logique de l'additionneur
}`,
  },
  {
    name: "Neko",
    definition: `o est un langage de programmation interprété utilisé pour le
    développement d'applications légères et de jeux. Il est connu pour
    sa simplicité et sa portabilité.`,
    example: `// Afficher un message
trace("Bonjour, monde!");`,
  },
  {
    name: "Nemerle",
    definition: `e est un langage de programmation polyvalent qui prend en
    charge la programmation orientée objet, fonctionnelle et
    métaprogrammation. Il est utilisé principalement pour le
    développement d'applications .NET.`,
    example: `// Déclarer une classe
  class Personne {
    mutable nom: string;
    mutable age: int;
  
    // Constructeur
    constructor(nom: string, age: int) {
      this.nom = nom;
      this.age = age;
    }
  }`,
  },
  {
    name: "Neonitisme",
    definition: `e Neonitisme est un langage de programmation fictif utilisé à des
    fins d'exemple. Il n'a pas de syntaxe ou de fonctionnalités
    réelles, mais il est souvent utilisé pour expliquer les concepts
    de programmation d'une manière simplifiée.`,
    example: `// Exemple de code Neonitisme
fonction principale() {
afficher("Bonjour, monde !");
}`,
  },
  {
    name: "NESL",
    definition: `L (Nested Data-Parallelism in C) est un langage de
    programmation parallèle utilisé pour exprimer efficacement des
    calculs parallèles sur des données structurées. Il permet
    d'exploiter efficacement les architectures parallèles pour
    résoudre des problèmes de grande taille.`,
    example: `// Exemple de code NESL
let somme = 0;
pour chaque élément dans tableau {
somme = somme + élément;
}`,
  },
  {
    name: "NestJs",
    definition: `s est un framework de développement d'applications back-end
    pour Node.js. Il utilise TypeScript pour créer des applications
    modulaires et évolutives, en suivant le paradigme de
    l'architecture orientée services.`,
    example: `// Exemple de code NestJs
@Contrôleur()
classe MonContrôleur {
@Obtenir('/')
racine() {
  renvoie 'Bonjour, monde !';
}
}`,
  },
  {
    name: "Net.Data",
    definition: `t.Data est un langage de programmation spécifique au domaine
    utilisé pour accéder et manipuler des bases de données IBM DB2. Il
    fournit des fonctionnalités avancées pour interagir avec les
    données, notamment la récupération, la mise à jour et la
    suppression.`,
    example: `// Exemple de code Net.Data
SÉLECTIONNER * DE clients
OÙ nom = 'John Doe';`,
  },
  {
    name: "NetLogo",
    definition: `o est un environnement de modélisation et de simulation
    utilisé pour créer des modèles basés sur des agents. Il est
    largement utilisé dans les domaines de la recherche en sciences
    sociales et en sciences de la complexité pour simuler des
    phénomènes complexes.`,
    example: `// Exemple de code NetLogo
demander [x y] de patches-environnants [
si pcolor = orange [
  colorier en rouge
]
]`,
  },
  {
    name: "NewLISP",
    definition: `P est un langage de programmation fonctionnel et impératif
    conçu pour être simple et facile à apprendre. Il prend en charge
    la programmation orientée objet, la programmation fonctionnelle et
    la manipulation de listes de données.`,
    example: `; Exemple de code NewLISP
(définir (somme a b)
(+ a b))

(afficher (somme 2 3))`,
  },
  {
    name: "NEWP",
    definition: `P (New Embedded Wilderness Programming) est un langage de
    programmation minimaliste conçu pour être utilisé dans des
    environnements embarqués et des systèmes à ressources limitées. Il
    offre une syntaxe simple et des fonctionnalités de base pour la
    programmation de microcontrôleurs et d'autres dispositifs.`,
    example: `// Exemple de code NEWP
marquer LED comme sortie
allumer LED`,
  },
  {
    name: "NewtonScript",
    definition: `t est un langage de programmation utilisé pour
    développer des applications pour les assistants personnels (PDA)
    Newton d'Apple. Il est basé sur Smalltalk et a été conçu pour
    faciliter le développement d'applications pour les appareils
    portables.`,
    example: `// Exemple de code NewtonScript
  fonction afficherMessage() {
    message := "Bonjour, monde !";
    afficher(message);
  }`,
  },
  {
    name: "NQC",
    definition: `C (Not Quite C) est un langage de programmation utilisé pour
    programmer les robots Lego Mindstorms. Il est basé sur le langage
    C et offre des fonctionnalités spécifiques pour le contrôle des
    moteurs, des capteurs et d'autres composants des robots Lego.`,
    example: `task main() {
SetSensorTouch(IN_1);
while (Sensor(IN_1) == 0) {
  OnFwd(OUT_A, 75);
  Wait(100);
}
Off(OUT_A);
}`,
  },
  {
    name: "Nu",
    definition: `u est un langage de programmation fonctionnel qui combine des
    fonctionnalités de langages tels que Lisp et Objective-C. Il est
    conçu pour être simple, expressif et extensible, et il est souvent
    utilisé pour le développement d'applications Mac et iOS.`,
    example: `(def greeting "Hello, world!")
(println greeting)`,
  },
  {
    name: "Nutty",
    definition: `y est un langage de programmation spécialement conçu pour la
    création de jeux vidéo. Il offre des fonctionnalités orientées jeu
    telles que la gestion des sprites, des sons, des collisions et des
    contrôles de joueur, ce qui en fait un choix populaire pour le
    développement de jeux indépendants.`,
    example: `var player = new Sprite();
player.setImage("player.png");
player.setPosition(100, 100);
player.setRotation(45);
game.addSprite(player);`,
  },
  {
    name: "NXC",
    definition: `C (Not eXactly C) est un langage de programmation utilisé pour
    programmer les robots Lego Mindstorms NXT. Il est basé sur le
    langage C et offre des fonctionnalités spécifiques pour le
    contrôle des moteurs, des capteurs et d'autres composants des
    robots Lego.`,
    example: `task main() {
SetSensorTouch(IN_1);
while (Sensor(IN_1) == 0) {
  OnFwd(OUT_A, 75);
  Wait(100);
}
Off(OUT_A);
}`,
  },
  {
    name: "NXT-G",
    definition: `T-G est un environnement de programmation graphique utilisé pour
    programmer les robots Lego Mindstorms NXT. Il permet aux
    utilisateurs de créer des programmes en plaçant des blocs de
    programmation graphiques et en les reliant pour former des
    séquences d'instructions.`,
    example: `Start
Loop
Motor A On
Wait 1 Second
Motor A Off
Wait 1 Second
End Loop`,
  },
  {
    name: "Nyquist",
    definition: `t est un langage de programmation utilisé pour la synthèse
    et le traitement audio. Il offre des fonctionnalités spécifiques
    pour la création et la manipulation de sons et de musiques, et il
  est souvent utilisé dans le domaine de la musique électronique et
    de la recherche sonore.`,
    example: `(setq sound (osc 440))
(play sound)`,
  },
  {
    name: "Oak",
    definition: `k est un langage de programmation développé par James Gosling,
    connu comme étant l'un des inventeurs du langage Java. Oak a été
    créé comme une version préliminaire de Java et a ensuite été
    renommé en Java.`,
    example: `// Exemple de code Oak
public class HelloWorld {
public static void main(String[] args) {
  System.out.println("Hello, World!");
}
}`,
  },
  {
    name: "Oberon",
    definition: `n est un langage de programmation développé par Niklaus
    Wirth. Il est basé sur le langage Pascal et est conçu pour être
    simple, efficace et utilisé principalement dans les systèmes
    embarqués et les applications temps réel.`,
    example: `// Exemple de code Oberon
MODULE HelloWorld;
IMPORT Out;
BEGIN
Out.String("Hello, World!");
Out.Ln;
END HelloWorld.`,
  },
  {
    name: "Object Lisp",
    definition: `t Lisp est une extension du langage de programmation Lisp qui
    introduit des concepts orientés objet. Il permet de créer des
    classes, des objets et d'utiliser l'héritage pour organiser et
    structurer le code.`,
    example: `;; Exemple de code Object Lisp
(defclass person ()
((name :accessor name :initarg :name)
 (age :accessor age :initarg :age)))

(defmethod introduce ((p person))
(format t "Je m'appelle ~A et j'ai ~A ans." (name p) (age p)))

(let ((john (make-instance 'person :name "John" :age 30)))
(introduce john))`,
  },
  {
    name: "Objective-C",
    definition: `e-C est un langage de programmation orienté objet utilisé
    principalement pour le développement d'applications sur les
    systèmes d'exploitation macOS et iOS. Il est basé sur le langage C
    et ajoute des fonctionnalités orientées objet.`,
    example: `// Exemple de code Objective-C
#import &lt;Foundation/Foundation.h&gt;

@interface Person : NSObject
@property NSString *name;
@property int age;
- (void)introduce;
@end

@implementation Person
- (void)introduce {
NSLog(@"Je m'appelle %@ et j'ai %d ans.", _name, _age);
}
@end

int main(int argc, const char * argv[]) {
@autoreleasepool {
  Person *john = [[Person alloc] init];
  john.name = @"John";
  john.age = 30;
  [john introduce];
}
return 0;
}`,
  },
  {
    name: "OCaml",
    definition: `l est un langage de programmation fonctionnel et impératif. Il
  est largement utilisé dans le développement de logiciels, en
    particulier dans le domaine des systèmes de type statique, de
    l'analyse formelle et de l'apprentissage automatique.`,
    example: `// Exemple de code OCaml
let rec fibonacci n =
match n with
| 0 -> 0
| 1 -> 1
| _ -> fibonacci (n - 1) + fibonacci (n - 2)

let () =
let result = fibonacci 10 in
print_endline (string_of_int result)`,
  },
  {
    name: "occam",
    definition: `m est un langage de programmation concurrente utilisé pour la
    programmation de systèmes embarqués et distribués. Il est basé sur
    le modèle CSP (Communicating Sequential Processes) et facilite la
    création de systèmes parallèles et concurrents.`,
    example: `-- Exemple de code occam
PROC main (CHAN OF INT out)
INT i:
SEQ
  i := 0
  WHILE TRUE
    SEQ
      out ! i
      i := i + 1
      IF i = 10
        SKIP
      ELSE
        SEQ
          out ? i
          SEQ
            i := i + 1
            SKIP
          out ! i
      FI
    SKIP
  SKIP
:
PROC pong (CHAN OF INT in, CHAN OF INT out)
INT value:
WHILE TRUE
  SEQ
    in ? value
    out ! (value + 1)
  SKIP
:
CHAN OF INT channel:
PAR
main (channel)
pong (channel, channel)
:`,
  },
  {
    name: "OmniMark",
    definition: `k est un langage de programmation utilisé pour le
    traitement de données structurées. Il est souvent utilisé dans le
    domaine de la publication électronique pour la transformation de
    contenu.`,
    example: `PROCESS
 INPUT DOCUMENT "input.xml"
 OUTPUT DOCUMENT "output.xml"
 USING RULES "transformation.rul"
 RUN`,
  },
  {
    name: "ooc",
    definition: `c est un langage de programmation orienté objet inspiré de C. Il
    vise à améliorer la productivité du développeur grâce à une
    syntaxe plus claire et à la prise en charge de fonctionnalités
    avancées.`,
    example: `class HelloWorld {
 static func main() {
    "Hello, world!".println()
 }
}`,
  },
  {
    name: "Opa",
    definition: `a est un langage de programmation conçu pour le développement
    d'applications web. Il permet de combiner le développement côté
    client et côté serveur dans un seul langage.`,
    example: `server greet(name) {
 "Hello, {name}!".println()
}`,
  },
  {
    name: "Opal",
    definition: `l est un langage de programmation fonctionnel qui cible la
    machine virtuelle Java (JVM). Il offre des fonctionnalités
    avancées telles que la programmation concurrente et la gestion
    automatique de la mémoire.`,
    example: `def factorial(n: Int): Int = {
if (n <= 1) 1
else n * factorial(n - 1)
}`,
  },
  {
    name: "OpenEdge ABL",
    definition: `e ABL (Advanced Business Language) est un langage de
    programmation utilisé pour le développement d'applications
    d'entreprise. Il est souvent utilisé avec la base de données
    Progress pour créer des applications robustes et évolutives.`,
    example: `DEFINE VARIABLE num AS INTEGER NO-UNDO.
ASSIGN num = 10.
DISPLAY num.`,
  },
  {
    name: "OPL",
    definition: `L (Optimization Programming Language) est un langage de
    modélisation utilisé pour résoudre des problèmes d'optimisation.
    Il permet de décrire des problèmes complexes et de les résoudre à
    l'aide de solveurs d'optimisation.`,
    example: `int n = ...; // Nombre de variables
range R = 1..n;
dvar float+ x[R];
maximize sum(i in R) x[i];
subject to {
 sum(i in R) i * x[i] <= 100;
}`,
  },
  {
    name: "OPS5",
    definition: `5 est un langage de programmation utilisé pour le développement
    de systèmes experts. Il est basé sur le paradigme de production de
    règles et est utilisé pour modéliser des connaissances et prendre
    des décisions basées sur ces connaissances.`,
    example: `(defrule example-rule
 (fact-1)
 (fact-2)
 =>
 (assert (result "Some result")))
`,
  },
  {
    name: "Ork",
    definition: `k est un langage de programmation fonctionnel conçu pour les
    applications parallèles et distribuées. Il offre des
    fonctionnalités pour la programmation concurrente et la
    manipulation de grands ensembles de données.`,
    example: `def fibonacci(n) {
if (n < 2) n
else fibonacci(n - 1) + fibonacci(n - 2)
}`,
  },
  {
    name: "ORCA/Modula-2",
    definition: `A/Modula-2 est un langage de programmation utilisé pour le
    développement de logiciels système et embarqués. Il offre des
    fonctionnalités de bas niveau et un typage fort pour assurer la
    sécurité et la fiabilité du code.`,
    example: `MODULE HelloWorld;
FROM Terminal IMPORT WriteString;
BEGIN
 WriteString("Hello, world!");
END HelloWorld.`,
  },
  {
    name: "Orwell",
    definition: `l est un langage de programmation conçu pour l'apprentissage
    de la programmation. Il a une syntaxe simple et des
    fonctionnalités de base pour aider les débutants à comprendre les
    concepts de base de la programmation.`,
    example: `PROGRAM HelloWorld;
BEGIN
 PRINT "Hello, world!";
END.`,
  },
  {
    name: "Oxygene",
    definition: `e est un langage de programmation moderne qui prend en
    charge le développement d'applications pour différentes
    plates-formes, notamment .NET, Java et Android. Il combine des
    fonctionnalités de plusieurs langages populaires pour offrir une
    expérience de développement fluide.`,
    example: `namespace HelloWorldApp;

interface

type
 HelloWorld = class
    class method Main(args: array of String);
 end;

implementation

class method HelloWorld.Main(args: array of String);
begin
 Console.WriteLine('Hello, world!');
end;

end.`,
  },
  {
    name: "Oz",
    definition: `z est un langage de programmation multiparadigme utilisé pour le
    développement de systèmes distribués et concurrents. Il offre des
    fonctionnalités avancées pour la programmation concurrente, la
    communication entre processus et la manipulation de données
    distribuées.`,
    example: `declare
 proc {Factorial N Fact}
    if N==0 then Fact=1
    else {Factorial N-1 F1}
         Fact=N*F1
    end
 end
in
 {Factorial 5 Fact}
 {Browse Fact}
end`,
  },
  {
    name: "Panoramic",
    definition: `c est un langage de programmation utilisé pour le
    développement d'applications graphiques et multimédias. Il offre
    des fonctionnalités avancées pour la création d'interfaces
    utilisateur interactives et la manipulation de graphiques, de sons
    et de vidéos.`,
    example: `function main() {
print("Bonjour, monde !");
}`,
  },
  {
    name: "PARI/GP",
    definition: `I/GP est un système de calcul formel utilisé pour les
    mathématiques et la cryptographie. Il offre un large éventail de
    fonctionnalités pour effectuer des calculs arithmétiques,
    algébriques et analytiques, ainsi que des outils pour manipuler
    des courbes elliptiques et des corps finis.`,
    example: `a = 2;
b = 3;
c = a + b;
print(c);`,
  },
  {
    name: "Pascal - ISO 71855 et ISO 102066",
    definition: `l est un langage de programmation impératif créé par Niklaus
    Wirth. Il a été conçu pour être simple, structuré et efficace,
    avec une syntaxe claire et des fonctionnalités de programmation
    structurée. Les normes ISO 7185 et ISO 10206 définissent les
    spécifications du langage Pascal.`,
    example: `program HelloWorld;
begin
writeln('Bonjour, monde !');
end.`,
  },
  {
    name: "P4",
    definition: `4 (Programming Protocol-Independent Packet Processors) est un
    langage de programmation utilisé pour la définition du
    comportement des processeurs de paquets réseau. Il permet de
    spécifier les actions à effectuer sur les paquets entrants et
    sortants, telles que l'analyse, la transformation et la
    classification.`,
    example: `control ingress {
apply {
  if (ethernet.isValid()) {
    // Traitement des paquets Ethernet
  }
}
}`,
  },
  {
    name: "Pawn",
    definition: `n est un langage de script utilisé pour le développement de
    mods et de plugins pour les jeux vidéo. Il offre des
    fonctionnalités de haut niveau pour créer du contenu personnalisé,
    des fonctionnalités de jeu et des interactions avec les joueurs.`,
    example: `public OnPlayerConnect(playerid) {
printf("Joueur connecté : %d", playerid);
}`,
  },
  {
    name: "PCASTL",
    definition: `L (Pattern Calculus for Software Technology Language) est un
    langage de programmation utilisé pour la spécification formelle et
    l'analyse des systèmes logiciels. Il est basé sur le calcul des
    motifs (pattern calculus) et permet d'exprimer des propriétés et
    des comportements des systèmes.`,
    example: `pattern Factorial(n, res) {
res = 1;
for i = 2 to n {
  res = res * i;
}
}`,
  },
  {
    name: "PCF",
    definition: `F (Program Control Flow) est un langage de programmation utilisé
    pour décrire le flux de contrôle d'un programme. Il permet de
    spécifier l'ordre d'exécution des instructions et les conditions
    de branchement.`,
    example: `function main() {
if (condition) {
  // Instructions
} else {
  // Instructions
}
}`,
  },
  {
    name: "PEARL",
    definition: `L (Process and Experiment Automation Realtime Language) est un
    langage de programmation utilisé dans le domaine de
    l'automatisation industrielle et des systèmes temps réel. Il
    permet de spécifier le comportement des processus et de contrôler
    les opérations en temps réel.`,
    example: `PROCESS
MAIN;
DCL x FIXED;
x := 10;
OUT x;
END;`,
  },
  {
    name: "Perl",
    definition: `l est un langage de programmation polyvalent utilisé pour
    l'automatisation de tâches, le traitement de texte,
    l'administration système et le développement web. Il offre une
    large gamme de fonctionnalités pour la manipulation de chaînes de
    caractères, le traitement de fichiers, les expressions régulières,
    etc.`,
    example: `#!/usr/bin/perl
use strict;
use warnings;

print "Bonjour, monde !\n";`,
  },
  {
    name: "Pharo",
    definition: `o est un environnement de développement et un langage de
    programmation orienté objet. Il est basé sur le langage Smalltalk
    et est utilisé pour le développement d'applications et de systèmes
    logiciels complets. Pharo offre une grande souplesse et
    expressivité dans la programmation orientée objet.`,
    example: `helloWorld
Transcript show: 'Bonjour, monde !'`,
  },
  {
    name: "PHP",
    definition: `P (Hypertext Preprocessor) est un langage de programmation
    principalement utilisé pour le développement web. Il permet de
    créer des pages web dynamiques en incorporant des scripts PHP
    directement dans le code HTML. PHP offre une grande facilité
    d'utilisation pour l'interaction avec des bases de données et la
    manipulation de contenu web.`,
    example: `&lt;?php
$greeting = "Bonjour, monde !";
echo $greeting;
?&gt;`,
  },
  {
    name: "Phrogram7",
    definition: `7 est un environnement de programmation visuelle utilisé
    pour l'apprentissage de la programmation. Il est conçu pour être
    convivial et adapté aux débutants, offrant une approche visuelle
    pour créer des programmes en assemblant des blocs d'instructions.`,
    example: `Quand le drapeau vert est cliqué
dire "Bonjour, monde !"`,
  },
  {
    name: "Pico",
    definition: `o est un langage de script utilisé dans le jeu vidéo Minecraft.
    Il permet aux joueurs de créer des programmes et des scripts pour
    automatiser des tâches et ajouter des fonctionnalités
    personnalisées dans le jeu.`,
    example: `function onPlayerJoin(player) {
    echo("Joueur connecté : " + player.name);
  }`,
  },
  {
    name: "Pict",
    definition: `t est un langage de programmation conçu pour la création de
    scripts et l'automatisation de tâches. Il se distingue par sa
    syntaxe simple et expressive, ce qui en fait un choix populaire
    pour l'écriture de scripts de traitement de données.`,
    example: `for i in range(10):
print(i)`,
  },
  {
    name: "Piet",
    definition: `t est un langage de programmation visuel où les programmes sont
    représentés sous forme de graphiques colorés. Chaque couleur et
    forme a une signification spécifique, ce qui permet de créer des
    programmes en utilisant des compositions artistiques plutôt que du
    code traditionnel.`,
    example: `██████████████████████`,
  },
  {
    name: "Pike",
    definition: `e est un langage de programmation orienté objet et impératif
    utilisé principalement pour le développement d'applications web et
    de jeux. Il offre une syntaxe similaire à celle de C et prend en
    charge de nombreuses fonctionnalités avancées, telles que la
    réflexion et les fonctions anonymes.`,
    example: `class HelloWorld {
void main() {
  write("Hello, world!");
}
}`,
  },
  {
    name: "PIKT",
    definition: `T est un système de surveillance, de configuration et de
    contrôle automatisé qui utilise son propre langage de
    programmation. Il permet de gérer et de surveiller efficacement
    des systèmes informatiques en automatisant des tâches de routine
    et en générant des rapports détaillés.`,
    example: `ALARMPAGE GROUP supervisor@mycompany.com
SET $mydbhost = "database.server.com"
DBCONNECT $mydbhost "mydatabase" "myusername" "mypassword"
$host = "webserver"
ifdown $host {
ALARM CRITICAL "Host $host is down!"
}`,
  },
  {
    name: "PILOT",
    definition: `T est un langage de programmation conçu pour l'écriture de
    systèmes experts et d'applications interactives. Il est basé sur
    le concept de règles conditionnelles et offre des fonctionnalités
    pour l'inférence, la manipulation de bases de connaissances et la
    communication avec l'utilisateur.`,
    example: `ASK "Quel est votre nom ?" name
SAY "Bonjour, " + name + "!"`,
  },
  {
    name: "Pizza",
    definition: `a est un langage de programmation fonctionnelle conçu pour la
    programmation concurrente et parallèle. Il offre des constructions
    spéciales pour la synchronisation et la communication entre les
    processus, ce qui le rend adapté aux systèmes distribués et aux
    calculs intensifs.`,
    example: `fun main() {
println("Hello, World!")
}`,
  },
  {
    name: "Pi-calcul",
    definition: `e calcul Pi (π-calcul) est un langage de modélisation et de
    calcul utilisé dans le domaine des systèmes concurrents et
    distribués. Il permet de décrire le comportement des processus
    parallèles en utilisant des opérateurs tels que l'application, la
    composition et la restriction.`,
    example: `P = (x).0`,
  },
  {
    name: "PL-11",
    definition: `L-11 est un langage de programmation utilisé pour la
    programmation d'ordinateurs scientifiques. Il offre des
    fonctionnalités pour la manipulation de tableaux
    multidimensionnels, les calculs mathématiques avancés et la
    gestion des données. PL-11 est souvent utilisé dans les
    applications scientifiques et d'ingénierie.`,
    example: `var x: integer;
begin
x := 5;
writeln(x);
end.`,
  },
  {
    name: "PL/0",
    definition: `L/0 est un langage de programmation utilisé pour l'apprentissage
    des concepts de la compilation et de la construction de
    compilateurs. Il offre une syntaxe simple et un ensemble limité
    d'instructions, ce qui en fait un bon choix pour les débutants en
    programmation.`,
    example: `VAR x, factorial;
PROCEDURE fact;
VAR y;
BEGIN
IF y = 0 THEN factorial := 1
ELSE
  BEGIN
    CALL fact(y - 1);
    factorial := y * factorial
  END
END;`,
  },
  {
    name: "PL/B",
    definition: `L/B (Programming Language for Business) est un langage de
    programmation orienté vers les applications commerciales et les
    systèmes d'information. Il offre des fonctionnalités pour la
    manipulation des données, le traitement des transactions et la
    génération de rapports, ce qui en fait un choix courant pour les
    applications de gestion d'entreprise.`,
    example: `MAIN: PROCEDURE OPTIONS (MAIN);
BEGIN
PRINT 'Hello, World!';
END MAIN;`,
  },
  {
    name: "PL/C",
    definition: `L/C est un langage de programmation dérivé de C et utilisé
    principalement pour le développement de systèmes embarqués et
    temps réel. Il offre des fonctionnalités spécifiques pour la
    programmation bas niveau, la gestion des interruptions et le
    contrôle précis du matériel.`,
    example: `#include &lt;stdio.h&gt;

int main() {
printf("Hello, World!\n");
return 0;
}`,
  },
  {
    name: "PL/I",
    definition: `L/I (Programming Language One) est un langage de programmation
    généraliste qui combine des fonctionnalités de plusieurs langages,
    notamment le Fortran et le COBOL. Il offre un large éventail de
    fonctionnalités, telles que la manipulation des chaînes de
    caractères, les opérations sur les fichiers et la gestion de la
    mémoire.`,
    example: `PROGRAM HELLO;
DCL MESSAGE CHAR(20) INIT('Hello, World!');
PUT SKIP LIST (MESSAGE);
END HELLO;`,
  },
  {
    name: "PL/M",
    definition: `L/M (Programming Language for Microcomputers) est un langage de
    programmation utilisé pour le développement de logiciels embarqués
    sur des microcontrôleurs et des microprocesseurs. Il offre des
    fonctionnalités spécifiques pour la programmation bas niveau et la
    gestion du matériel, ce qui en fait un choix courant pour les
    systèmes embarqués.`,
    example: `PROCEDURE FACTORIAL(X);
VALUE X;
BEGIN
IF X = 0 THEN FACTORIAL := 1
ELSE FACTORIAL := X * FACTORIAL(X - 1)
END;`,
  },
  {
    name: "PL/P",
    definition: `L/P (Programming Language for Prime) est un langage de
    programmation utilisé pour le développement de logiciels sur les
    ordinateurs de la marque Prime. Il offre des fonctionnalités
    spécifiques à ces systèmes, telles que la gestion des
    entrées-sorties, les opérations sur les chaînes de caractères et
    les calculs mathématiques avancés.`,
    example: `MAIN: PROCEDURE;
  BEGIN
    WRITEL('Hello, World!');
    RETURN;
  END MAIN;`,
  },
  {
    name: "PL/SQL",
    definition: `L/SQL (Procedural Language/Structured Query Language) est un
    langage de programmation procédural utilisé pour écrire des
    procédures stockées, des déclencheurs (triggers) et des fonctions
    dans une base de données Oracle. Il permet de manipuler et de
    contrôler les données stockées.`,
    example: `DECLARE
message VARCHAR2(100) := 'Hello, world!';
BEGIN
DBMS_OUTPUT.PUT_LINE(message);
END;`,
  },
  {
    name: "PL360",
    definition: `0 est un langage de programmation procédural utilisé pour le
    développement de logiciels scientifiques et techniques. Il a été
    développé dans les années 1960 pour les ordinateurs IBM
    System/360.`,
    example: `START PROCEDURE MYPROC
WRITE 'Hello, world!'
END;`,
  },
  {
    name: "PLANC",
    definition: `C (Programming Language for Algorithmic and Numerical
    Calculations) est un langage de programmation utilisé pour les
    calculs algorithmiques et numériques. Il est conçu pour être
    simple à utiliser et efficace dans le calcul scientifique.`,
    example: `DECLARE
VAR x, y, z: REAL;
BEGIN
x := 2.0;
y := 3.0;
z := x * y;
WRITE z;
END.`,
  },
  {
    name: "Plankalkül",
    definition: `l est considéré comme le premier langage de programmation
    de haut niveau créé par Konrad Zuse dans les années 1940. Bien
    qu'il n'ait pas été largement utilisé à l'époque, il a jeté les
    bases des concepts de programmation utilisés aujourd'hui.`,
    example: `VAR
x: INTEGER;
BEGIN
x := 5;
WRITE x;
END.`,
  },
  {
    name: "PLEX",
    definition: `X (Programming Language for EXchanges) est un langage de
    programmation utilisé pour le développement de systèmes de
    télécommunications. Il permet de spécifier et de générer du code
    pour des commutateurs téléphoniques et d'autres équipements de
    communication.`,
    example: `ENTITY 'Phone'
ATTRIBUTES
  Type: STRING,
  Number: INTEGER
OPERATIONS
  Dial(number: INTEGER);
END;`,
  },
  {
    name: "PLEXIL",
    definition: `L (Plan Execution Interchange Language) est un langage de
    programmation utilisé pour spécifier et exécuter des plans dans
    les systèmes autonomes. Il est souvent utilisé dans le domaine des
    systèmes robotiques et des systèmes de contrôle de mission.`,
    example: `tree SensorData
sequence
  command GetTemperature
  command GetHumidity
end
end`,
  },
  {
    name: "Pliant",
    definition: `t est un langage de programmation conçu pour la programmation
    de systèmes distribués et parallèles. Il permet de spécifier des
    tâches et de les exécuter efficacement sur des clusters de
    machines.`,
    example: `task main
int a = 10;
int b = 20;
int sum = a + b;
print(sum);
endtask`,
  },
  {
    name: "POP-11",
    definition: `P-11 (Programming for One-Parent Information Processors) est un
    langage de programmation utilisé dans le domaine de l'intelligence
    artificielle. Il est basé sur le langage LISP et est utilisé pour
    la programmation symbolique et le développement d'applications
    intelligentes.`,
    example: `DEFINE square(x);
x * x;
ENDDEFINE;`,
  },
  {
    name: "Poplog",
    definition: `g est un environnement de programmation qui comprend
    plusieurs langages de programmation, notamment POP-11, Prolog et
    Common Lisp. Il est utilisé pour le développement de logiciels
    d'intelligence artificielle et d'applications de traitement du
    langage naturel.`,
    example: `PROCEDURE Square(x);
RETURN x * x;
ENDPROCEDURE;`,
  },
  {
    name: "Portal",
    definition: `l est un langage de programmation développé par Oracle pour
    le développement d'applications d'entreprise. Il permet de créer
    des interfaces utilisateur graphiques et de se connecter à des
    bases de données pour manipuler les données.`,
    example: `PROCEDURE PrintMessage;
BEGIN
  DBMS_OUTPUT.PUT_LINE('Hello, world!');
END;`,
  },
  {
    name: "PostScript",
    definition: `t est un langage de description de page utilisé
    principalement dans l'impression et l'édition électronique. Il
    permet de définir la mise en page des documents et d'effectuer des
    opérations graphiques avancées.`,
    example: `/Helvetica findfont
12 scalefont
setfont
72 500 moveto
(Hello, world!) show`,
  },
  {
    name: "PortablE",
    definition: `E est un langage de programmation basé sur le langage E et
    destiné à être portable sur différentes plates-formes. Il prend en
    charge la programmation orientée objet et est utilisé pour le
    développement d'applications multiplateformes.`,
    example: `PROCEDURE HelloWorld;
BEGIN
  WriteLn('Hello, world!');
END;`,
  },
  {
    name: "PowerBuilder",
    definition: `r est un environnement de développement utilisé pour
    créer des applications d'entreprise. Il prend en charge la
    création d'interfaces utilisateur graphiques et la connexion à des
    bases de données pour manipuler les données.`,
    example: `FUNCTION HelloWorld () RETURNS STRING;
STRING ls_message;
ls_message = "Hello, world!"
RETURN ls_message;
END FUNCTION;`,
  },
  {
    name: "Powerhouse",
    definition: `e est un langage de programmation utilisé pour le
    développement d'applications d'entreprise. Il est connu pour sa
    puissance et sa capacité à manipuler efficacement de grandes
    quantités de données.`,
    example: `PROGRAM HelloWorld;
  BEGIN
    DISPLAY 'Hello, world!';
  END;`,
  },
  {
    name: "PowerShell",
    definition: `l est un langage de script et une interface de ligne de
    commande développé par Microsoft. Il est utilisé pour
    l'automatisation des tâches système, l'administration de serveurs
    et la gestion des configurations.`,
    example: `$message = "Hello, World!"
Write-Host $message`,
  },
  {
    name: "PPL",
    definition: `L (Parma Polyhedra Library) est une bibliothèque de
    programmation utilisée pour l'analyse statique des programmes.
    Elle permet de manipuler des polyèdres pour représenter des
    ensembles de valeurs.`,
    example: `polyhedron p;
p.add_constraint("x >= 0");
p.add_constraint("y >= 0");
p.add_constraint("x + y <= 10");
p.solve();`,
  },
  {
    name: "Processing",
    definition: `g est un environnement de développement et un langage de
    programmation utilisé pour la création d'œuvres d'art et
    d'animations interactives. Il est basé sur Java et simplifie la
    création graphique et interactive.`,
    example: `void setup() {
size(400, 400);
background(0);
}

void draw() {
ellipse(mouseX, mouseY, 50, 50);
}`,
  },
  {
    name: "Prograph",
    definition: `h est un langage de programmation visuelle qui permet de
    créer des programmes en manipulant des icônes représentant des
    opérations et des objets. Il est utilisé pour l'enseignement de la
    programmation et le développement de logiciels graphiques.`,
    example: `Start: Repeat
  Display "Hello, World!"
  Until Done`,
  },
  {
    name: "Progress 4GL",
    definition: `s 4GL (Fourth Generation Language) est un langage de
    programmation utilisé pour le développement d'applications
    d'entreprise. Il offre des fonctionnalités avancées pour la
    gestion des données, les interfaces utilisateur et l'intégration
    de systèmes.`,
    example: `DEFINE VARIABLE message AS CHARACTER NO-UNDO.

ASSIGN message = "Hello, World!".

DISPLAY message.`,
  },
  {
    name: "PROIV",
    definition: `V est un langage de développement d'applications d'entreprise
    utilisé pour créer des systèmes logiciels sur mesure. Il permet de
    modéliser des processus métier, de concevoir des interfaces
    utilisateur et de gérer les données.`,
    example: `TABLE Customers
COLUMN CustomerID INTEGER PRIMARY KEY
COLUMN FirstName STRING
COLUMN LastName STRING
ENDTABLE`,
  },
  {
    name: "Prolog",
    definition: `g est un langage de programmation logique utilisé pour la
    résolution de problèmes basée sur des règles et des faits. Il est
    utilisé dans le domaine de l'intelligence artificielle, la
    programmation de systèmes experts et la logique mathématique.`,
    example: `father(john, jim).
father(john, ann).

grandfather(X, Y) :-
father(X, Z),
father(Z, Y).`,
  },
  {
    name: "PROMELA",
    definition: `A (Process Meta Language) est un langage de modélisation
    utilisé pour la vérification des systèmes concurrents. Il permet
    de décrire le comportement des processus et de spécifier des
    propriétés à vérifier.`,
    example: `active proctype Sender() {
byte x = 0;
do
  :: x == 0 -> x = 1; send(1);
  :: x == 1 -> x = 0; send(0);
od
}`,
  },
  {
    name: "PROTEL",
    definition: `L est un langage de programmation utilisé pour le
    développement de logiciels de gestion d'entreprise. Il permet de
    créer des applications intégrant des fonctionnalités de gestion
    des ressources humaines, de comptabilité, de ventes, etc.`,
    example: `MODULE Employee;
ATTRIBUTE name AS STRING;
ATTRIBUTE age AS INTEGER;
ATTRIBUTE salary AS DECIMAL;
ENDMODULE`,
  },
  {
    name: "Proteus",
    definition: `s est un environnement de développement intégré (EDI)
    utilisé pour la conception et la simulation de circuits
    électroniques. Il permet de créer des schémas, de simuler le
    comportement des circuits et de tester leur fonctionnement.`,
    example: `COMPONENT LED;
PORTS: OUT { Anode, Cathode };
END LED;`,
  },
  {
    name: "ProvideX",
    definition: `X est un langage de programmation utilisé pour le
    développement d'applications d'entreprise. Il offre des
    fonctionnalités pour la gestion des bases de données, les
    interfaces utilisateur et la programmation de systèmes.`,
    example: `PROCEDURE SayHello();
MESSAGE "Hello, World!" TO MESSAGE_BOX;
END PROCEDURE`,
  },
  {
    name: "Pure",
    definition: `e est un langage de programmation fonctionnel utilisé pour le
    calcul symbolique et la manipulation des expressions
    mathématiques. Il permet de résoudre des équations, de simuler des
    systèmes dynamiques et d'effectuer des opérations sur les listes.`,
    example: `double x = 2.5;
double y = sin(x) + cos(x);`,
  },
  {
    name: "PureBasic",
    definition: `c est un langage de programmation utilisé pour le
    développement d'applications logicielles. Il permet de créer des
    programmes pour Windows, macOS et Linux, en utilisant une syntaxe
    simple et des fonctionnalités avancées.`,
    example: `Procedure HelloWorld()
Debug "Hello, World!"
EndProcedure`,
  },
  {
    name: "Python",
    definition: `n est un langage de programmation interprété, polyvalent et
    facile à apprendre. Il est utilisé pour le développement web, la
    science des données, l'intelligence artificielle, l'automatisation
    des tâches et bien plus encore.`,
    example: `message = "Hello, World!"
print(message)`,
  },
  {
    name: "Q",
    definition: `Q est un langage de programmation utilisé pour la manipulation et
    l'analyse de données. Il est souvent utilisé dans le domaine de la
    finance et de l'analyse quantitative.`,
    example: `sum: 1 2 3 4`,
  },
  {
    name: "Q#",
    definition: `Q# (Q Sharp) est un langage de programmation utilisé pour le
    développement d'algorithmes quantiques. Il est utilisé en
    combinaison avec les ordinateurs quantiques pour résoudre des
    problèmes complexes.`,
    example: `operation HelloQ() : Unit {
Message("Hello, Q#!");
}`,
  },
  {
    name: "Qi",
    definition: `i est un langage de requête et de manipulation de données utilisé
    dans les bases de données orientées objet.`,
    example: `SELECT * FROM users WHERE age &gt; 18;`,
  },
  {
    name: "QtScript",
    definition: `t est un langage de script utilisé avec la bibliothèque de
    développement d'interfaces graphiques Qt. Il permet de créer des
    applications graphiques interactives.`,
    example: `var message = "Hello, world!";
print(message);`,
  },
  {
    name: "QBasic",
    definition: `c est un langage de programmation basé sur le langage BASIC.
    Il était souvent utilisé pour l'apprentissage de la programmation
    et le développement de petites applications.`,
    example: `PRINT "Hello, world!"`,
  },
  {
    name: "QML",
    definition: `L (Qt Meta-Object Language) est un langage de programmation
    déclaratif utilisé pour créer des interfaces graphiques dans les
    applications Qt. Il permet de décrire l'apparence et le
    comportement des éléments graphiques de manière déclarative.`,
    example: `import QtQuick 2.0

Text {
text: "Hello, world!"
}`,
  },
  {
    name: "QuakeC",
    definition: `C est un langage de programmation utilisé pour le
    développement de mods et de jeux basés sur le moteur du jeu Quake.
    Il permet de créer de nouvelles fonctionnalités et de modifier le
    comportement du jeu.`,
    example: `float player_health = 100.0;

void ShowPlayerHealth() {
Print("Player health: " + ftos(player_health));
}`,
  },
  {
    name: "QPL",
    definition: `L (Query and Programming Language) est un langage de requête et
    de programmation utilisé dans le système de gestion de base de
    données Quipu. Il permet de manipuler et d'interroger des données
    stockées dans le système Quipu.`,
    example: `SELECT * FROM employees WHERE department = 'IT';`,
  },
  {
    name: "R",
    definition: `R est un langage de programmation open source et un environnement
    logiciel utilisé pour le traitement statistique et graphique. Il
  est largement utilisé dans le domaine de l'analyse de données et
    de la science des données.`,
    example: `# Calcul de la moyenne
data <- c(1, 2, 3, 4, 5)
mean_value <- mean(data)
print(mean_value)`,
  },
  {
    name: "R++",
    definition: `R++ est une extension du langage de programmation R qui apporte
    des fonctionnalités supplémentaires, notamment la programmation
    orientée objet. Il permet de développer des applications plus
    complexes en utilisant les capacités de R et les concepts de la
    programmation orientée objet.`,
    example: `# Définition d'une classe
class Person {
  string name;
  int age;

  void displayInfo() {
    print("Name: " + name);
    print("Age: " + age);
  }
}

# Utilisation de la classe
Person p = new Person();
p.name = "John";
p.age = 30;
p.displayInfo();`,
  },
  {
    name: "Rapira",
    definition: `a est un langage de programmation russe développé dans les
    années 1970. Il est conçu pour l'apprentissage de la programmation
    et utilise une syntaxe proche de la langue russe.`,
    example: `ЦЕЛАЯ a;
ВЕЩ b;
Строка c;
a := 42;
b := 3.14;
c := "Bonjour, monde !";`,
  },
  {
    name: "Ratfiv",
    definition: `v est un langage de programmation utilisé pour la
    programmation de systèmes embarqués et de microcontrôleurs. Il est
    connu pour sa syntaxe simple et sa faible consommation de
    ressources.`,
    example: `SI condition ALORS
FAIRE quelque_chose;
SINON
FAIRE autre_chose;
FIN_SI;`,
  },
  {
    name: "Ratfor",
    definition: `r (Rational Fortran) est un préprocesseur qui permet d'écrire
    du code en utilisant une syntaxe plus conviviale que le Fortran
    traditionnel. Il ajoute des fonctionnalités de contrôle de flux et
    de manipulation de chaînes de caractères à Fortran.`,
    example: `#include "ratfor.h"

PROGRAM exemple
  REAL x, y
  INTEGER i

  DO i = 1, 10
    x = 0.5 * i
    y = SIN(x)
    WRITE(6, '(2F12.6)') x, y
  END DO
END PROGRAM`,
  },
  {
    name: "RBScript",
    definition: `t est un langage de script utilisé pour automatiser des
    tâches et développer des applications web. Il est basé sur le
    langage de programmation Ruby et offre des fonctionnalités telles
    que la manipulation de fichiers, l'accès aux bases de données et
    la création de pages web dynamiques.`,
    example: `# Définition d'une fonction
def say_hello(name)
  puts "Hello, #{name}!"
end

# Appel de la fonction
say_hello("John")`,
  },
  {
    name: "rc",
    definition: `c est un langage de script utilisé dans certains systèmes
    d'exploitation Unix, tels que Plan 9 et Inferno. Il est conçu pour
    être simple, léger et offrir des fonctionnalités de programmation
    système.`,
    example: `# Affichage de la date
date := \`{date}
echo $date\``,
  },
  {
    name: "Rebol",
    definition: `l (Relative Expression Based Object Language) est un langage
    de programmation conçu pour être simple et expressif. Il est
    utilisé pour le développement d'applications web, de scripts et
    d'interfaces utilisateur.`,
    example: ` Affichage de "Bonjour, monde !"
print "Bonjour, monde !"`,
  },
  {
    name: "Red",
    definition: `d est un langage de programmation inspiré du langage Rebol. Il
  est conçu pour être simple, flexible et productif. Red est utilisé
    pour le développement d'applications, y compris les applications
    graphiques et les scripts système.`,
    example: `; Affichage de "Bonjour, monde !"
print "Bonjour, monde !"`,
  },
  {
    name: "Redcode",
    definition: `e est un langage de programmation utilisé pour écrire des
    programmes pour le jeu Core War. Core War est un jeu de
    programmation où les programmes s'affrontent dans une mémoire
    virtuelle.`,
    example: `; Exemple de programme Redcode
MOV 1, 2
ADD 3, 4
JMP -1`,
  },
  {
    name: "REFAL",
    definition: `L (REcursive Functions Algorithmic Language) est un langage de
    programmation utilisé pour la programmation fonctionnelle et la
    manipulation de chaînes de caractères. Il est utilisé
    principalement pour le traitement automatique du langage naturel
    et la transformation de textes.`,
    example: `; Définition d'une règle de transformation
$copy 'abc => 'abc ;
$copy a b c => [a b c]`,
  },
  {
    name: "Reia",
    definition: `a est un langage de programmation fonctionnelle et orienté
    objet basé sur Erlang. Il est conçu pour être simple, expressif et
    permettre une programmation concurrente et distribuée.`,
    example: `# Définition d'une fonction
  func hello_world() {
    io:format("Hello, world!~n")
  }
  
  # Appel de la fonction
  hello_world()`,
  },
  {
    name: "Revolution",
    definition: `n est un langage de programmation conçu pour le
    développement rapide d'applications. Il est orienté objet et
    dispose d'une syntaxe simplifiée pour faciliter la création
    d'interfaces utilisateur graphiques.`,
    example: `on mouseUp
answer "Hello, world!"
end mouseUp`,
  },
  {
    name: "REXX",
    definition: `X (REstructured eXtended eXecutor) est un langage de script
    interprété principalement utilisé pour l'automatisation de tâches
    et la manipulation de données. Il est souvent utilisé dans les
    environnements mainframe.`,
    example: `/* Simple programme REXX qui affiche "Bonjour, monde !" */
say "Bonjour, monde !"`,
  },
  {
    name: "Rlab",
    definition: `b est un langage de programmation destiné à l'analyse et à la
    visualisation de données. Il offre une syntaxe similaire à MATLAB
    et est utilisé dans des domaines tels que la statistique, la
    recherche scientifique et l'apprentissage automatique.`,
    example: `x = [1, 2, 3, 4, 5]
y = sin(x)
plot(x, y)`,
  },
  {
    name: "ROOP",
    definition: `P (Real-time Object-Oriented Programming) est un langage de
    programmation orienté objet conçu pour le développement de
    logiciels en temps réel. Il met l'accent sur les fonctionnalités
    de concurrence et de synchronisation.`,
    example: `class MyTask extends Task {
method run() {
  // Code de la tâche
}
}`,
  },
  {
    name: "RPG",
    definition: `G (Report Program Generator) est un langage de programmation
    utilisé pour développer des applications d'entreprise sur les
    systèmes IBM i (anciennement connus sous le nom de système
    d'exploitation AS/400).`,
    example: `C     *ENTRY        PLIST
C                   PARM                    NOM
C                   PARM                    AGE
C                   PARM                    EMAIL
C                   PARM                    SALAIRE
C                   PARM                    DATE_EMP
C
C     D MOIS            S              2  0
C     D JOUR            S              2  0
C     D ANNEE           S              4  0
C
C                   EVAL      MOIS            = %SUBST(DATE_EMP: 1: 2)
C                   EVAL      JOUR            = %SUBST(DATE_EMP: 3: 2)
C                   EVAL      ANNEE           = %SUBST(DATE_EMP: 5: 4)
C
C                   WRITE     ENR_SALARIE
C                   CLOSE     FICH_SALARIE`,
  },
  {
    name: "RPL",
    definition: `L (Reverse Polish Lisp) est un langage de programmation utilisé
    sur les calculatrices de la gamme HP 48/49. Il utilise une
    notation polonaise inverse et est particulièrement adapté aux
    calculs mathématiques et scientifiques.`,
    example: `1 2 +`,
  },
  {
    name: "RSL",
    definition: `L (RenderMan Shading Language) est un langage de programmation
    utilisé pour décrire les propriétés et les interactions de la
    lumière dans les logiciels de rendu 3D. Il est utilisé dans des
    applications telles que l'animation et les effets visuels.`,
    example: `surface simpleShader(
float Kd = 0.8;
float Ks = 0.2;
)
{
// Code du shader
}`,
  },
  {
    name: "RTL/2",
    definition: `L/2 (Register Transfer Level version 2) est un langage de
    description matériel utilisé pour spécifier le comportement des
    circuits logiques au niveau de transfert de registre. Il est
    utilisé dans la conception de circuits numériques.`,
    example: `PROCESSOR
{
ALU
{
  // Code de l'ALU
}
}`,
  },
  {
    name: "Ruby",
    definition: `y est un langage de programmation interprété et orienté objet.
    Il met l'accent sur la simplicité et la lisibilité du code. Ruby
  est souvent utilisé pour le développement web et est connu pour
    son framework populaire, Ruby on Rails.`,
    example: `def say_hello
puts "Bonjour, monde !"
end

say_hello`,
  },
  {
    name: "Rust",
    definition: `t est un langage de programmation système qui met l'accent sur
    la sécurité, la concurrence et la performance. Il est conçu pour
    être sûr et sans erreurs tout en permettant un contrôle fin sur le
    matériel. Rust est souvent utilisé pour développer des logiciels
    critiques.`,
    example: `fn main() {
println!("Bonjour, monde !");
}`,
  },
  {
    name: "S",
    definition: `S est un langage de programmation statistique utilisé pour
    l'analyse de données et les calculs statistiques. Il est largement
    utilisé dans le domaine de la statistique et de la recherche.`,
    example: `mean <- function(x) {
sum(x) / length(x)
}
data <- c(1, 2, 3, 4, 5)
result <- mean(data)
print(result)`,
  },
  {
    name: "S2",
    definition: `2 est un langage de programmation orienté objet utilisé
    principalement dans le développement logiciel. Il met l'accent sur
    l'encapsulation des données et le polymorphisme.`,
    example: `class Rectangle {
    private int width;
    private int height;
    
    public Rectangle(int w, int h) {
      width = w;
      height = h;
    }
    
    public int getArea() {
      return width * height;
    }
  }
  
  Rectangle rect = new Rectangle(5, 10);
  int area = rect.getArea();
  System.out.println("Area: " + area);`,
  },
  {
    name: "S3",
    definition: `3 est un système de programmation orienté objet basé sur le
    langage S. Il fournit des fonctionnalités avancées pour la
    programmation orientée objet, notamment l'héritage et le
    polymorphisme.`,
    example: `setClass("Person",
representation(
  name = "character",
  age = "numeric"
),
prototype(
  name = "Unknown",
  age = NA_real_
)
)

person <- new("Person", name = "John", age = 30)
print(person)`,
  },
  {
    name: "S-Lang",
    definition: `S-Lang est un langage de script extensible et interprété, conçu
    pour être utilisé comme langage de macro dans des applications. Il
  est également utilisé pour créer des interfaces utilisateur et des
    extensions dans des environnements logiciels.`,
    example: `prompt("Entrez votre nom : ")
name = getch()
print("Bonjour, " + name + "!")`,
  },
  {
    name: "SA-C",
    definition: `A-C (Single Assignment C) est une extension du langage C qui
    prend en charge la programmation parallèle et le traitement des
    tableaux multidimensionnels. Il permet de développer des
    applications efficaces pour les systèmes multiprocesseurs et
    distribués.`,
    example: `#pragma spmd
{
int a[1000];
int b[1000];
int c[1000];

for (int i = 0; i < 1000; i++)
{
  a[i] = i;
  b[i] = i * 2;
}

for (int i = 0; i < 1000; i++)
{
  c[i] = a[i] + b[i];
}
}`,
  },
  {
    name: "SAC",
    definition: `C (Simple API for CSS) est une interface de programmation
    d'application qui permet de manipuler et de générer des styles CSS
    de manière programmatique. Il facilite la génération dynamique de
    styles CSS en utilisant du code JavaScript.`,
    example: `const element = document.getElementById("myElement");
const styles = SAC.getStyle(element);

styles.color = "red";
styles.backgroundColor = "blue";
styles.fontSize = "16px";

SAC.applyStyle(element, styles);`,
  },
  {
    name: "Safe C",
    definition: `e C est une extension du langage C qui vise à améliorer la
    sécurité et la sûreté du code en introduisant des fonctionnalités
    de vérification des limites des tableaux et des pointeurs. Il aide
    à prévenir les vulnérabilités courantes telles que les
    dépassements de tampon.`,
    example: `#include &lt;safec.h&gt;

void printString(const char *str)
{
printf("%s\n", str);
}

int main()
{
char buffer[10];
strcpy_s(buffer, sizeof(buffer), "Hello, world!");
printString(buffer);

return 0;
}`,
  },
  {
    name: "SAIL",
    definition: `L (Stanford Artificial Intelligence Language) est un langage de
    programmation développé à Stanford dans les années 1960. Il a été
    utilisé pour des projets de recherche en intelligence artificielle
    et a jeté les bases de nombreux concepts et techniques de l'IA.`,
    example: `(defun factorial (n)
(if (= n 0)
  1
  (* n (factorial (- n 1)))))

(format t "Factorial of 5: ~a" (factorial 5))`,
  },
  {
    name: "SALSA",
    definition: `A (Simple Actor Language System and Architecture) est un
    langage de programmation orienté objet et concurrent basé sur le
    modèle des acteurs. Il facilite la programmation parallèle et
    distribuée en permettant la création d'acteurs qui communiquent
    par envoi de messages.`,
    example: `actor Greeter {
receive {
  case Greet(name) => println("Hello, " + name + "!")
}
}

val greeter = new Greeter
greeter ! Greet("John")`,
  },
  {
    name: "SAM76",
    definition: `6 est un langage de programmation conçu pour le développement
    de jeux vidéo. Il fournit des fonctionnalités spécifiques pour la
    création de graphismes, l'interaction avec les utilisateurs et la
    gestion des ressources de jeu.`,
    example: `entity Player {
    properties {
      x: float;
      y: float;
      speed: float;
    }
  
    method move(dx: float, dy: float) {
      x += dx * speed;
      y += dy * speed;
    }
  }
  
  let player = new Player();
  player.move(1.0, 0.5);`,
  },
  {
    name: "SAS",
    definition: `S (Statistical Analysis System) est un logiciel utilisé pour
    l'analyse statistique et la gestion des données. Il est largement
    utilisé dans le domaine de la recherche, de l'analyse de données
    et de la business intelligence.`,
    example: `DATA example;
INPUT x y;
datalines;
1 10
2 20
3 30
;
RUN;`,
  },
  {
    name: "SASL",
    definition: `L (Stochastic Algorithmic Language) est un langage de
    programmation utilisé pour l'implémentation d'algorithmes
    stochastiques et probabilistes. Il est souvent utilisé dans le
    domaine de la modélisation mathématique et de la simulation.`,
    example: `factorial : proc n : natural -> natural = %{
case n of
  0 : 1;
  n : n * factorial(n - 1);
end
%};`,
  },
  {
    name: "Sather",
    definition: `r est un langage de programmation orienté objet conçu pour la
    programmation parallèle. Il offre des fonctionnalités avancées
    telles que l'héritage multiple, la généricité et le
    ramasse-miettes automatique.`,
    example: `class POINT is
x: INT;
y: INT;

init(newx: INT, newy: INT) is
  x := newx;
  y := newy;
  
feature move(nx: INT, ny: INT) is
  x := nx;
  y := ny;
  
feature display is
  print("Point(", x, ",", y, ")");
end;`,
  },
  {
    name: "Sawzall",
    definition: `l est un langage de programmation développé par Google pour
    effectuer des analyses de données massives. Il est conçu pour être
    efficace dans le traitement de grands volumes de données et pour
    prendre en charge des opérations de transformation et d'agrégation
    complexes.`,
    example: `count_words: map&lt;string&gt;, int = make_map();
foreach record in input {
words = split(record, " ");
foreach word in words {
  if word in count_words {
    count_words[word] += 1;
  } else {
    count_words[word] = 1;
  }
}
}
emit(count_words);`,
  },
  {
    name: "SBL",
    definition: `L (Scientific Batch Language) est un langage de programmation
    utilisé pour la programmation scientifique et l'automatisation des
    tâches. Il est souvent utilisé dans les environnements de
    recherche et de calcul scientifique.`,
    example: `PROGRAM example
PRINT "Hello, world!"
END PROGRAM`,
  },
  {
    name: "Scala",
    definition: `a est un langage de programmation polyvalent qui combine les
    paradigmes de programmation orientée objet et fonctionnelle. Il
  est conçu pour être extensible et permet le développement
    d'applications robustes et évolutives.`,
    example: `object HelloWorld {
def main(args: Array[String]): Unit = {
  println("Hello, world!")
}
}`,
  },
  {
    name: "Scheme",
    definition: `e est un dialecte du langage de programmation Lisp. Il est
    connu pour sa simplicité syntaxique et sa sémantique minimale.
    Scheme est souvent utilisé pour l'enseignement de la programmation
    fonctionnelle et la mise en œuvre de langages de programmation.`,
    example: `(define (factorial n)
(if (= n 0)
  1
  (* n (factorial (- n 1)))))
  
(display (factorial 5))`,
  },
  {
    name: "Scilab",
    definition: `b est un langage de programmation utilisé pour le calcul
    numérique et l'analyse scientifique. Il offre une large gamme de
    fonctionnalités pour la modélisation mathématique, la simulation,
    l'optimisation et la visualisation de données.`,
    example: `x = 0:0.1:2*%pi;
y = sin(x);
plot(x, y);`,
  },
  {
    name: "Scol",
    definition: `l est un langage de programmation utilisé pour le développement
    d'applications 3D et de jeux vidéo. Il offre des fonctionnalités
    avancées pour la modélisation, la simulation physique et le rendu
    graphique.`,
    example: `global cube = add_cube();
translate(cube, 0, 0, 10);
rotate(cube, 45, 0, 1, 0);
scale(cube, 2, 2, 2);
render();`,
  },
  {
    name: "Scratch",
    definition: `h est un environnement de programmation visuelle conçu pour
    initier les enfants et les débutants à la programmation. Il permet
    de créer des animations interactives, des jeux et des histoires en
    assemblant des blocs de code.`,
    example: `quand le drapeau vert est cliqué
dire "Bonjour, monde!" pendant 2 secondes`,
  },
  {
    name: "Script.NET",
    definition: `t.NET est un langage de script utilisé pour automatiser des
    tâches dans des applications .NET. Il permet d'étendre les
    fonctionnalités d'une application en écrivant des scripts qui
    interagissent avec les objets et les fonctionnalités du framework
    .NET.`,
    example: `using System;

public class HelloWorld
{
public static void Main()
{
  Console.WriteLine("Hello, world!");
}
}`,
  },
  {
    name: "Sed",
    definition: `d (Stream Editor) est un utilitaire en ligne de commande utilisé
    pour filtrer et transformer des flux de texte. Il permet
    d'effectuer des opérations de recherche, de remplacement,
    d'insertion et de suppression sur des lignes de texte en utilisant
    des expressions régulières.`,
    example: `s/Hello/Bonjour/g`,
  },
  {
    name: "Seed7",
    definition: `7 est un langage de programmation multiparadigme qui prend en
    charge la programmation orientée objet, la programmation générique
    et la programmation fonctionnelle. Il se distingue par sa
    flexibilité et son extensibilité.`,
    example: `const PI = 3.14159;
var radius: float := 5.0;
var area: float := PI * radius * radius;
put("The area of the circle is: ", area);`,
  },
  {
    name: "Self",
    definition: `f est un langage de programmation orienté objet utilisé pour le
    développement de systèmes interactifs et de simulations. Il met
    l'accent sur la manipulation d'objets et offre des fonctionnalités
    avancées pour la réflexion et l'introspection.`,
    example: `| 'factorial' =
( | 'n' |
  | 'if:else:' |
  [ | '1' |
    ( | 'n' | | 'n' '1' - 'factorial' 'n' * | 'if:else:' | ) |
  ] |
  'n' '0' = | 'if:else:' |
) ;
| '5' 'factorial' . `,
  },
  {
    name: "SETL",
    definition: `L (SET Language) est un langage de programmation utilisé pour
    la manipulation d'ensembles et la résolution de problèmes
    ensemblistes. Il offre des fonctionnalités puissantes pour la
    manipulation d'ensembles, l'itération et la recherche.`,
    example: `PROCEDURE factorial(n);
  IF n = 0 THEN
    RETURN 1;
  ELSE
    RETURN n * factorial(n - 1);
  END;
END;

print(factorial(5));`,
  },
  {
    name: "Shakespeare Programming Language (SPL)",
    definition: `e Shakespeare Programming Language (SPL) est un langage de
    programmation esotérique basé sur les pièces de théâtre de William
    Shakespeare. Il utilise une syntaxe théâtrale où les programmes
    ressemblent à des pièces de théâtre et les variables sont des
    personnages.`,
    example: `Romeo, a young man with remarkable patience.
Juliet, a likewise young woman of remarkable grace.
Romeo: Speak your mind!
Juliet: Speak yours too!`,
  },
  {
    name: "Shift Script",
    definition: `t Script est un langage de programmation minimaliste qui se
    concentre sur l'écriture de code de manière concise et expressive.
    Il utilise une syntaxe minimaliste et des opérations de décalage
    pour manipuler les données.`,
    example: `foo = 10;
bar = 20;
foo = foo + bar;`,
  },
  {
    name: "Signal",
    definition: `l est un langage de programmation fonctionnel utilisé pour le
    développement de systèmes de communication et de protocoles. Il
  est conçu pour faciliter la spécification formelle et la
    vérification des systèmes de communication.`,
    example: `module Main where

import Signal

main :: Signal ()
main = do
Signal.output "Hello, world!"`,
  },
  {
    name: "Silq",
    definition: `q est un langage de programmation quantique conçu pour le
    développement de programmes quantiques. Il introduit des concepts
    tels que les qubits persistants et l'inversion conditionnelle pour
    faciliter la programmation quantique.`,
    example: `function oracle(x: UInt<8>): UInt<8> {
if x == 42 {
  return 1;
} else {
  return 0;
}
}`,
  },
  {
    name: "SiMPLE",
    definition: `E est un langage de programmation minimaliste conçu pour être
    facile à apprendre et à comprendre. Il met l'accent sur la
    simplicité syntaxique et la facilité de lecture du code.`,
    example: `main()
{
print("Hello, world!");
}`,
  },
  {
    name: "SIMPOL",
    definition: `L (SIMPle Object Language) est un langage de programmation
    orienté objet utilisé pour développer des applications
    d'entreprise. Il met l'accent sur la facilité de développement et
    la réutilisabilité du code.`,
    example: `class HelloWorld {
static function main() {
  print("Hello, world!");
}
}`,
  },
  {
    name: "SIMSCRIPT",
    definition: `T est un langage de simulation utilisé pour modéliser et
    simuler des systèmes complexes. Il est largement utilisé dans le
    domaine de la recherche opérationnelle et de la modélisation des
    processus.`,
    example: `ENTITY Truck {
NAME : STRING;
CAPACITY : INTEGER;
ARRIVAL_TIME : INTEGER;
}

TYPE Queue : LIST[Truck];

CREATE QUEUE mainQueue;
CREATE Truck truck1;
CREATE Truck truck2;

mainQueue.APPEND(truck1);
mainQueue.APPEND(truck2);`,
  },
  {
    name: "Simula",
    definition: `a est un langage de programmation orienté objet utilisé pour
    le développement de simulations. Il est connu comme le premier
    langage de programmation orienté objet et a posé les bases des
    concepts objets qui sont utilisés dans de nombreux langages
    modernes.`,
    example: `class Person;
BEGIN
  INTEGER age;
  TEXT name;
END;

BEGIN
  Person p;
  p.name := "John";
  p.age := 30;
END;`,
  },
  {
    name: "SISAL",
    definition: `L (Streams and Iteration in a Single Assignment Language) est
    un langage de programmation fonctionnel qui met l'accent sur la
    programmation parallèle. Il offre des primitives pour la
    manipulation de flux de données et facilite la programmation de
    systèmes parallèles.`,
    example: `PROGRAM example;
INTEGER A[10], B[10], C[10];

DO i = 1 TO 10
  C[i] := A[i] + B[i]
END;`,
  },
  {
    name: "Slate",
    definition: `e est un langage de programmation orienté objet conçu pour
    être simple, expressif et extensible. Il offre une syntaxe
    minimaliste et met l'accent sur la lisibilité du code.`,
    example: `Object subclass: 'Greeter'
instanceVariableNames: ''
classVariableNames: ''
poolDictionaries: ''
category: 'Examples'

Greeter subclass: 'HelloWorld'
instanceVariableNames: ''
classVariableNames: ''
poolDictionaries: ''
category: 'Examples'`,
  },
  {
    name: "SLIP",
    definition: `P (Symmetric LIst Processor) est un langage de programmation
    fonctionnel utilisé pour le traitement des listes. Il met l'accent
    sur la manipulation de listes de manière efficace et expressive.`,
    example: `(defun sum (list)
(if (null list)
    0
    (+ (car list) (sum (cdr list)))))`,
  },
  {
    name: "SMALL",
    definition: `L est un langage de programmation conçu pour l'enseignement de
    la programmation aux débutants. Il offre une syntaxe simple et
    facilite l'apprentissage des concepts de base de la programmation.`,
    example: `PROGRAM Hello;
VAR
  message : STRING;

BEGIN
  message := "Hello, world!";
  WriteLn(message);
END.`,
  },
  {
    name: "Smalltalk",
    definition: `k est un langage de programmation orienté objet connu pour
    sa simplicité et sa convivialité. Il offre un environnement de
    développement intégré puissant et met l'accent sur la
    collaboration entre les objets.`,
    example: `| greeting |
  greeting := 'Hello, world!'.
  Transcript show: greeting.`,
  },
  {
    name: "SML",
    definition: `L (Standard ML) est un langage de programmation fonctionnelle et
    statiquement typé. Il est utilisé pour le développement
    d'applications, principalement dans le domaine de la programmation
    formelle et de la recherche en langages de programmation.`,
    example: `fun factorial 0 = 1
| factorial n = n * factorial (n - 1)`,
  },
  {
    name: "SNOBOL",
    definition: `L est un langage de programmation orienté chaîne de
    caractères. Il est conçu pour manipuler et traiter efficacement
    des chaînes de caractères complexes.`,
    example: `OUTPUT = "Hello, world!"
OUTPUT`,
  },
  {
    name: "SPARK",
    definition: `K est un langage de programmation orienté vérification
    statique, basé sur le langage Ada. Il est utilisé pour le
    développement de logiciels critiques où la sûreté de
    fonctionnement est primordiale, notamment dans les domaines de
    l'aérospatiale, de la défense et des transports.`,
    example: `procedure Increment (X : in out Integer) is
begin
   X := X + 1;
end Increment;`,
  },
  {
    name: "Spice",
    definition: `e (Simulation Program with Integrated Circuit Emphasis) est un
    langage de description de circuits électroniques utilisé pour la
    simulation et l'analyse des circuits analogiques et mixtes.`,
    example: `R1 1 2 1k
C1 2 0 1u
V1 1 0 DC 10`,
  },
  {
    name: "SPIN",
    definition: `N est un langage de programmation utilisé pour le développement
    de logiciels embarqués sur les microcontrôleurs de la famille
    Parallax Propeller. Il est conçu pour faciliter la programmation
    multitâche et la gestion des entrées/sorties.`,
    example: `CON
  _clkmode = xtal1 + pll16x
  _xinfreq = 5_000_000

VAR
  counter : WORD

PUB main
  repeat
    counter := counter + 1
    waitcnt(clkfreq / 10 + cnt)
  forever`,
  },
  {
    name: "SP/k",
    definition: `P/k est un langage de programmation fonctionnel conçu pour le
    traitement parallèle. Il permet de développer des programmes
    hautement parallèles en spécifiant des flux de données et des
    opérations à effectuer sur ces flux.`,
    example: `(defun fact (n)
(if (<= n 1)
  1
  (* n (fact (- n 1)))))`,
  },
  {
    name: "SPS",
    definition: `S (Stack Programming System) est un langage de programmation
    orienté pile qui permet d'écrire des programmes de manière concise
    en utilisant une pile de données et des opérations sur cette pile.`,
    example: `: fact ( n -- n! )
1 swap 1 ?do
  dup 1- over * swap
loop drop ;`,
  },
  {
    name: "Squeak",
    definition: `k est un langage de programmation orienté objet dérivé de
    Smalltalk. Il est utilisé pour le développement d'applications et
    de systèmes interactifs, et est souvent associé à l'environnement
    de développement Squeak.`,
    example: `factorial: n
| result |
result := 1.
n to: 1 by: -1 do: [:i |
  result := result * i].
^ result.`,
  },
  {
    name: "Squirrel",
    definition: `l est un langage de script léger et orienté objet, conçu
    pour être intégré dans des applications. Il est souvent utilisé
    dans le développement de jeux vidéo pour créer des scripts d'IA,
    de gameplay et de gestion des ressources.`,
    example: `function factorial(n) {
if (n <= 1)
  return 1;
else
  return n * factorial(n - 1);
}`,
  },
  {
    name: "SR",
    definition: `R (System R) est un langage de requête relationnel développé au
    sein d'IBM dans les années 1970. Il a jeté les bases du langage
    SQL et a été utilisé pour expérimenter les concepts de bases de
    données relationnelles.`,
    example: `FOR p IN Persons
WHERE p.age &gt;= 18
RETURN p.name;`,
  },
  {
    name: "SSL",
    definition: `L (Standard ML) est un langage de programmation fonctionnel et
    statiquement typé. Il offre des fonctionnalités avancées de type
    et de gestion des exceptions, et est utilisé pour le développement
    d'applications critiques.`,
    example: `fun factorial n =
if n <= 1 then
  1
else
  n * factorial (n - 1)`,
  },
  {
    name: "STOS BASIC",
    definition: `S BASIC est un dialecte du langage de programmation BASIC
    développé pour les ordinateurs Thomson de la gamme ST (Système
    Thomson). Il était principalement utilisé pour le développement de
    logiciels sur ces systèmes.`,
    example: `10 PRINT "Hello, world!"
20 GOTO 10`,
  },
  {
    name: "Strand",
    definition: `d est un langage de programmation orienté objet et concurrent
    basé sur le modèle des objets acteurs. Il permet de créer des
    systèmes distribués et parallèles en utilisant des acteurs qui
    communiquent par envoi de messages asynchrones.`,
    example: `class HelloWorldActor : strand {
    behavior {
      receive {
        case hello: HelloMessage =>
          println("Hello, " + hello.name + "!")
      }
    }
  }
  
  val actor = new HelloWorldActor()
  actor ! HelloMessage("world")`,
  },
  {
    name: "Suneido",
    definition: `o est un langage de programmation orienté objet et un
    système de base de données intégré. Il est conçu pour le
    développement d'applications d'entreprise et offre des
    fonctionnalités telles que la persistance des objets, les
    transactions et les requêtes de bases de données.`,
    example: `class Person {
var name;
var age;

constructor(name, age) {
  this.name = name;
  this.age = age;
}

function greet() {
  return "Hello, my name is " + this.name;
}
}

var person = new Person("John", 25);
console.log(person.greet());`,
  },
  {
    name: "SuperCollider",
    definition: `r est un environnement de programmation et un langage
    de programmation dédié à la synthèse sonore et à la composition
    musicale. Il offre une puissante bibliothèque de traitement audio
    en temps réel et est utilisé par de nombreux musiciens,
    compositeurs et chercheurs sonores.`,
    example: `SynthDef(\sine, {
arg freq = 440, amp = 0.5;
var sineWave;
sineWave = SinOsc.ar(freq, 0, amp);
Out.ar(0, sineWave);
}).play;`,
  },
  {
    name: "Suylo",
    definition: `o est un langage de programmation conçu pour la création de
    jeux vidéo en 2D. Il offre des fonctionnalités spécifiques au
    développement de jeux, telles que la gestion des sprites, les
    animations et les interactions avec les utilisateurs.`,
    example: `// Définition d'un sprite
var player = new Sprite("player.png", 100, 100);

// Déplacement du sprite
player.x += 10;
player.y += 5;

// Affichage du sprite à l'écran
player.draw();`,
  },
  {
    name: "Swift",
    definition: `t est un langage de programmation développé par Apple pour la
    création d'applications iOS, macOS, watchOS et tvOS. Il est conçu
    pour être sûr, rapide et expressif, et offre de nombreuses
    fonctionnalités modernes pour le développement d'applications
    Apple.`,
    example: `let greeting = "Hello, world!"
print(greeting)`,
  },
  {
    name: "SYMPL",
    definition: `L (SYntax Macro Processor Language) est un langage de
    programmation basé sur des macros qui permet la manipulation et la
    génération de code source. Il est utilisé pour automatiser des
    tâches répétitives et faciliter le développement de logiciels.`,
    example: `macro double(x) {
return x * 2;
}

var result = double(5);
print(result);`,
  },
  {
    name: "SyncCharts",
    definition: `s est un langage de programmation graphique utilisé pour
    la modélisation et la simulation de systèmes réactifs. Il permet
    de créer des diagrammes d'états et de définir le comportement des
    objets et des interactions entre eux.`,
    example: `statechart MyChart {
initial state Idle {
  on event Start {
    goto Running;
  }
}
state Running {
  on event Stop {
    goto Idle;
  }
}
}`,
  },
  {
    name: "SystemVerilog",
    definition: `g est une extension du langage de description matériel
    Verilog, utilisée pour la conception et la vérification de
    circuits intégrés. Il offre des fonctionnalités avancées telles
    que les types de données complexes, la programmation orientée
    objet et les assertions pour la vérification formelle.`,
    example: `module Counter(
input wire clk,
input wire reset,
output wire [7:0] count
);
reg [7:0] internalCount;

always @(posedge clk or posedge reset) begin
  if (reset)
    internalCount <= 0;
  else
    internalCount <= internalCount + 1;
end

assign count = internalCount;
endmodule`,
  },
  {
    name: "Sourcepawn",
    definition: `n est un langage de programmation utilisé pour le
    développement de plugins et de modifications de jeux basés sur le
    moteur Source, tel que le moteur de jeu de Valve (utilisé par
    Counter-Strike, Half-Life, Team Fortress, etc.). Il offre une
    interface pour étendre les fonctionnalités des jeux et créer des
    scripts personnalisés.`,
    example: `// Définition d'une commande
CMD:command_hello(client) {
  PrintToChat(client, "Hello, world!");
  return Plugin_Handled;
}`,
  },
  {
    name: "TACL",
    definition: `L (Tandem Advanced Command Language) est un langage de commande
    utilisé dans le système d'exploitation Tandem. Il permet aux
    utilisateurs d'interagir avec le système et d'exécuter des
    commandes spécifiques.`,
    example: `SHOWSERVERINFO;`,
  },
  {
    name: "TACPOL",
    definition: `L (Tandem Access Control Program) est un langage de
    programmation utilisé pour définir et contrôler les autorisations
    d'accès aux ressources dans le système d'exploitation Tandem.`,
    example: `RESOURCE DATABASE 'MyDatabase' 
OWNER ('User1', 'User2')
ACCESS ('User3', 'READ');
`,
  },
  {
    name: "TADS",
    definition: `S (Text Adventure Development System) est un langage de
    programmation utilisé pour créer des jeux d'aventure textuels. Il
    offre des fonctionnalités spécifiques pour la création et la
    gestion de l'interaction avec les joueurs.`,
    example: `object -> SomeObject
name = 'Objet';
initial_desc = 'Ceci est un objet.';
dobjFor(Take) {
  inheritedAction();
  "<br>Vous avez pris l'objet.";
}
;`,
  },
  {
    name: "TAL",
    definition: `L (Transaction Application Language) est un langage de
    programmation utilisé dans les systèmes IBM pour développer des
    applications transactionnelles. Il permet de gérer les opérations
    de base de données et d'assurer la cohérence des transactions.`,
    example: `DEFINE TRANSACTION transaction_name
APPLICATION application_name
PROGRAM program_name
ISOLATION LEVEL read_committed;
`,
  },
  {
    name: "Tcl8",
    definition: `8 (Tool Command Language) est un langage de script utilisé pour
    l'automatisation de tâches, la création de tests et le
    développement d'interfaces utilisateur. Il est souvent utilisé
    dans les applications et les outils logiciels.`,
    example: `set name "John Doe"
puts "Bonjour, $name !";
`,
  },
  {
    name: "Tea",
    definition: `a est un langage de programmation orienté objet utilisé pour
    développer des applications web. Il est basé sur le langage Tcl et
    offre des fonctionnalités spécifiques pour la création
    d'applications web dynamiques.`,
    example: `class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    
    getFullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
  
  const person = new Person('John', 'Doe');
  console.log(person.getFullName());`,
  },
  {
    name: "TI-Basic",
    definition: `I-Basic est un langage de programmation utilisé sur les
    calculatrices graphiques de la marque Texas Instruments (TI). Il
  est principalement utilisé pour créer des programmes et des jeux
    sur les calculatrices TI.`,
    example: `&gt;PROGRAM:HELLO
  :Disp "HELLO, WORLD!"
  :End`,
  },
  {
    name: "TI-Extended Basic",
    definition: `I-Extended Basic est une extension du langage TI-Basic utilisée
    sur les calculatrices graphiques de la marque Texas Instruments.
    Elle ajoute des fonctionnalités avancées telles que le support des
    listes, des matrices et des chaînes de caractères.`,
    example: `&gt;PROGRAM:FACT
:Input "Enter a number: ", N
:1→F
:For I,1,N
:F*I→F
:End
:Disp "Factorial:",F
:End`,
  },
  {
    name: "Timber",
    definition: `r est un framework PHP pour WordPress qui permet de
    structurer le code de manière plus modulaire en utilisant le
    moteur de templating Twig.`,
    example: `/* Code d'exemple Timber */
$context = Timber::context();
$context['posts'] = new Timber\PostQuery();
Timber::render('index.twig', $context);`,
  },
  {
    name: "Tom",
    definition: `m est un langage de programmation fonctionnel conçu pour
    l'écriture de programmes concurrents et parallèles. Il se base sur
    le modèle d'acteurs pour gérer la communication entre les
    différentes entités.`,
    example: `/* Code d'exemple Tom */
actor Fibonacci {
def fib(n: Int): Int =
  if (n < 2) n
  else fib(n-1) + fib(n-2)
}`,
  },
  {
    name: "TOM",
    definition: `M (Task-Oriented Programming Language) est un langage de
    programmation utilisé pour la modélisation et la simulation de
    systèmes à événements discrets.`,
    example: `/* Code d'exemple TOM */
task Main()
{
Print("Hello, world!");
}`,
  },
  {
    name: "Topspeed",
    definition: `d est un langage de programmation orienté objet utilisé
    principalement pour le développement d'applications d'entreprise.
    Il permet de créer des applications rapides et évolutives en
    utilisant des concepts tels que l'héritage, le polymorphisme et
    les classes.`,
    example: `/* Code d'exemple Topspeed */
class Person {
String name;
int age;

method displayInfo() {
  Print("Name: " + name);
  Print("Age: " + age);
}
}`,
  },
  {
    name: "TPU",
    definition: `U (Transaction Processing Utility) est un langage de
    programmation utilisé pour le développement d'applications de
    traitement des transactions. Il fournit des fonctionnalités
    spécifiques pour gérer les opérations de traitement des
    transactions dans les bases de données.`,
    example: `/* Code d'exemple TPU */
PROCESS CUSTOMER_ORDER {
TRANSACT {
  READ customer_info FROM CUSTOMER_DB
  WRITE order_info TO ORDER_DB
  COMMIT
}
}`,
  },
  {
    name: "Trac",
    definition: `c est un système de suivi de problèmes et un outil de gestion
    de projet basé sur le langage de programmation Python. Il permet
    de gérer les problèmes, les tâches et le suivi des versions d'un
    projet.`,
    example: `/* Code d'exemple Trac */
def create_ticket(summary, description):
ticket = Ticket()
ticket.summary = summary
ticket.description = description
ticket.save()`,
  },
  {
    name: "Transact-SQL",
    definition: `t-SQL (T-SQL) est une extension du langage SQL spécifique à
    Microsoft SQL Server. Il permet d'écrire des procédures stockées,
    des déclencheurs et d'autres types d'instructions pour manipuler
    les données dans une base de données SQL Server.`,
    example: `/* Code d'exemple Transact-SQL */
CREATE PROCEDURE GetCustomerInfo
@customerId INT
AS
BEGIN
SELECT * FROM Customers WHERE CustomerId = @customerId
END`,
  },
  {
    name: "TTCN",
    definition: `N (Testing and Test Control Notation) est un langage de
    programmation utilisé pour la spécification et l'exécution de
    tests automatiques. Il est souvent utilisé dans le domaine des
    télécommunications pour tester les protocoles de communication.`,
    example: `/* Code d'exemple TTCN */
module TestSuite {
testcase TC_init {
  var integer x := 5;
  x := x + 10;
  log("x = ", x);
}
}`,
  },
  {
    name: "Turing",
    definition: `g est un langage de programmation basé sur le langage Pascal.
    Il est principalement utilisé pour l'enseignement de la
    programmation et la conception de programmes simples.`,
    example: `/* Code d'exemple Turing */
var x : int := 5;
var y : int := 10;
var sum : int := x + y;
put "Sum =", sum;`,
  },
  {
    name: "TUTOR",
    definition: `R est un langage de programmation utilisé pour l'enseignement
    de la programmation. Il met l'accent sur la simplicité et la
    facilité d'apprentissage.`,
    example: `/* Code d'exemple TUTOR */
PROCEDURE Hello;
BEGIN
PRINT("Hello, world!");
END;`,
  },
  {
    name: "TXL",
    definition: `L (Tree Transformation Language) est un langage de programmation
    utilisé pour la manipulation et la transformation des arbres
    syntaxiques abstraits. Il est souvent utilisé dans le domaine de
    la compilation et de l'analyse de code.`,
    example: `/* Code d'exemple TXL */
ruleset line:source_code do
rule replace_plus_minus
  "+" ==> "plus"
  "-" ==> "minus"
end
end`,
  },
  {
    name: "Turbo Pascal",
    definition: `o Pascal est un langage de programmation structuré et compilé.
    Il est utilisé pour le développement d'applications logicielles et
  est souvent utilisé comme langage d'enseignement.`,
    example: `/* Code d'exemple Turbo Pascal */
program HelloWorld;
begin
writeln('Hello, world!');
end.`,
  },
  {
    name: "TypeScript",
    definition: `t est un langage de programmation développé par Microsoft
    qui ajoute des fonctionnalités de typage statique à JavaScript. Il
    permet de détecter et de corriger les erreurs de type lors de la
    phase de développement.`,
    example: `/* Code d'exemple TypeScript */
function greet(name: string): string {
return "Hello, " + name + "!";
}

console.log(greet("world"));`,
  },
  {
    name: "Ubercode",
    definition: `e est un langage de programmation convivial et facile à
    apprendre qui permet de développer des applications pour Windows.
    Il est basé sur le langage BASIC et offre des fonctionnalités
    avancées pour la création de logiciels.`,
    example: `PROCEDURE Main()
PRINT "Hello, world!"
END PROCEDURE`,
  },
  {
    name: "Unicon",
    definition: `n est un langage de programmation orienté objet et impératif
    utilisé pour le développement d'applications. Il combine des
    fonctionnalités du langage C avec des extensions orientées objet
    pour offrir une programmation puissante et expressive.`,
    example: `procedure hello()
write("Hello, world!")
end`,
  },
  {
    name: "Uniface",
    definition: `e est un environnement de développement rapide
    d'applications (RAD) utilisé pour créer des applications
    d'entreprise. Il permet de concevoir, de modéliser et de générer
    des applications en utilisant un langage de script propriétaire.`,
    example: `trigger ButtonClicked
  message("Hello, world!")
end`,
  },
  {
    name: "uniPaaS",
    definition: `S (unified Platform as a Service) est un environnement de
    développement d'applications qui permet de créer des applications
    d'entreprise multiplateformes, basées sur des modèles et orientées
    vers les données. Il facilite le développement rapide et la
    gestion des applications.`,
    example: `CREATE BUTTON myButton
LABEL "Click Me"
ACTION "BUTTON_CLICK"`,
  },
  {
    name: "unison",
    definition: `n est un langage de programmation fonctionnel conçu pour la
    programmation concurrente et la synchronisation des données entre
    différents systèmes. Il permet de résoudre les problèmes de
    synchronisation et de cohérence des données dans les applications
    distribuées.`,
    example: `let sum = foldl (+) 0 [1, 2, 3, 4, 5]`,
  },
  {
    name: "UNITY",
    definition: `Y est un moteur de jeu multiplateforme utilisé pour développer
    des jeux en 2D et en 3D. Il offre un large éventail de
    fonctionnalités pour la création de jeux, y compris des outils de
    modélisation, d'animation, de rendu graphique et de physique.`,
    example: `void Start()
{
  Debug.Log("Hello, World!");
}`,
  },
  {
    name: "UnityScript",
    definition: `t était un langage de script utilisé pour le
    développement de jeux avec le moteur Unity. Cependant, à partir de
    Unity 2017, il a été remplacé par C# comme langage de script
    principal.`,
    example: `function Start() {
  Debug.Log("Hello, World!");
}`,
  },
  {
    name: "Unix shell",
    definition: `x shell est un interpréteur de commandes utilisé dans les
    systèmes d'exploitation Unix et Unix-like. Il permet aux
    utilisateurs d'interagir avec le système d'exploitation en
    exécutant des commandes pour effectuer des tâches telles que la
    gestion des fichiers, la manipulation des processus et la
    configuration du système.`,
    example: `ls -l
cd mydirectory
mkdir newdirectory`,
  },
  {
    name: "Unlambda",
    definition: `a est un langage de programmation minimaliste et
    expérimental basé sur la notion de calcul lambda. Il se distingue
    par sa syntaxe et ses opérations de base inhabituelles, ce qui en
    fait un langage peu utilisé en pratique mais intéressant du point
    de vue théorique.`,
    example: `\`r\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`.H.e.l.l.o.,. .w.o.r.l.d.!\``,
  },
  {
    name: "UnrealScript",
    definition: `t était le langage de script utilisé pour le
    développement de jeux avec le moteur Unreal Engine. Cependant, à
    partir d'Unreal Engine 4, UnrealScript a été remplacé par
    Blueprints et C++ comme langages de script et de programmation
    principaux.`,
    example: `class MyActor extends Actor;
{
  function BeginPlay()
  {
      \`Log("Hello, World!");\`
  }
}`,
  },
  {
    name: "UbikCode",
    definition: `e est un langage de programmation spécifique à un domaine
    (DSL) utilisé pour le développement de jeux vidéo. Il est conçu
    pour simplifier la création de jeux en fournissant des
    abstractions et des fonctionnalités spécifiques au développement
    de jeux.`,
    example: `entity player {
  sprite = "player.png"
  position = (0, 0)
  velocity = (0, 0)
  
  onUpdate() {
      if (Input.isKeyDown("up")) {
          velocity.y = -1
      }
      else if (Input.isKeyDown("down")) {
          velocity.y = 1
      }
      else {
          velocity.y = 0
      }
      
      position += velocity
  }
}`,
  },
  {
    name: "USE",
    definition: `E (Universal Scene Description) est un format de fichier et un
    langage de script utilisés pour la description de scènes 3D,
    principalement dans l'industrie du cinéma et des effets visuels.
    Il permet de décrire la géométrie, les matériaux, l'éclairage et
    les animations d'une scène 3D de manière indépendante des
    logiciels utilisés.`,
    example: `#usda 1.0

def Sphere "MySphere"
{
  double radius = 1.0
  color3f color = (1.0, 0.0, 0.0)
  token[] subdivisionScheme = ["loop"]
}`,
  },
  {
    name: "V11",
    definition: `1 est un langage de programmation orienté objet utilisé
    principalement dans le développement de jeux vidéo. Il offre des
    fonctionnalités avancées pour la création de graphiques et
    d'effets visuels.`,
    example: `// Exemple de code V11
main {
print("Bonjour, monde !");
}`,
  },
  {
    name: "Vlang",
    definition: `g est un langage de programmation compilé qui met l'accent sur
    la simplicité, la sécurité et les performances. Il est conçu pour
    être facile à apprendre et à lire, tout en offrant des
    performances élevées.`,
    example: `// Exemple de code Vlang
module main

import os

fn main() {
os.stdout.writeln("Bonjour, monde !")
}`,
  },
  {
    name: "Vala",
    definition: `a est un langage de programmation qui facilite le développement
    d'applications en s'appuyant sur la plateforme GNOME. Il est conçu
    pour être simple, efficace et expressif.`,
    example: `// Exemple de code Vala
class HelloWorld : Object {
static void main(string[] args) {
  stdout.printf("Bonjour, monde !\n");
}
}`,
  },
  {
    name: "VBA (Visual Basic for Applications)",
    definition: `A est un langage de programmation utilisé pour automatiser des
    tâches dans les applications de la suite Microsoft Office, telles
    que Excel, Word et Access. Il permet de créer des macros et
    d'interagir avec les fonctionnalités des applications.`,
    example: `' Exemple de code VBA
  Sub HelloWorld()
    MsgBox "Bonjour, monde !"
  End Sub`,
  },
  {
    name: "VBScript",
    definition: `t (Visual Basic Scripting Edition) est un langage de script
    développé par Microsoft. Il est principalement utilisé pour
    automatiser des tâches au sein de pages web et pour interagir avec
    des applications Windows.`,
    example: `Dim message
message = "Bonjour, monde !"
MsgBox message`,
  },
  {
    name: "Verilog",
    definition: `g est un langage de description matériel (HDL - Hardware
    Description Language) utilisé pour modéliser et concevoir des
    circuits électroniques. Il est largement utilisé dans l'industrie
    de la conception des puces électroniques (ASIC et FPGA).`,
    example: `module AND_GATE (
input a,
input b,
output y
);
assign y = a & b;
endmodule`,
  },
  {
    name: "VHDL",
    definition: `L (VHSIC Hardware Description Language) est un langage de
    description matériel utilisé pour modéliser et concevoir des
    circuits électroniques. Il est utilisé pour la conception de
    circuits intégrés et de systèmes embarqués.`,
    example: `entity AND_GATE is
port (
  a, b : in bit;
  y : out bit
);
end entity;

architecture RTL of AND_GATE is
begin
y <= a and b;
end architecture;`,
  },
  {
    name: "Visual Adélia",
    definition: `l Adélia est un langage de programmation développé par IBM.
    Il était utilisé pour le développement d'applications pour les
    systèmes d'exploitation mainframe IBM z/OS.`,
    example: `PROGRAM EXAMPLE;
DCL A CHAR(10);
DCL B CHAR(5) INIT('ABCDE');
DCL C FIXED(5) INIT(12345);
DCL D BINARY FIXED(15);
DCL E (10) BIN FIXED(15);
PUT SKIP LIST(A,B,C,D,E); /* Affiche les valeurs des variables */
END EXAMPLE;`,
  },
  {
    name: "Visual Basic (VB6)",
    definition: `l Basic (VB6) est un langage de programmation événementiel
    développé par Microsoft. Il était largement utilisé pour le
    développement d'applications Windows avec une interface graphique.`,
    example: `Private Sub CommandButton_Click()
MsgBox "Bonjour, monde !"
End Sub`,
  },
  {
    name: "Visual Basic .NET",
    definition: `l Basic .NET est une version évoluée du langage Visual Basic.
    Il est utilisé pour le développement d'applications Windows, Web
    et mobiles dans le cadre du framework .NET de Microsoft.`,
    example: `Imports System

Module Module1
  Sub Main()
      Console.WriteLine("Bonjour, monde !")
  End Sub
End Module`,
  },
  {
    name: "Visual DataFlex",
    definition: `l DataFlex est un langage de programmation orienté objet
    utilisé pour le développement d'applications d'entreprise. Il est
    utilisé pour créer des applications de gestion de bases de données
    et des systèmes de traitement des transactions.`,
    example: `PROGRAM EXAMPLE
PROCEDURE Main()
  DEFINE VARIABLE message AS CHARACTER.
  ASSIGN message = "Bonjour, monde !"
  DISPLAY message
END PROCEDURE
END PROGRAM.`,
  },
  {
    name: "Visual DialogScript",
    definition: `l DialogScript est un langage de script utilisé pour créer
    des interfaces utilisateur et des dialogues interactifs. Il était
    souvent utilisé pour le développement d'applications Windows.`,
    example: `ON CLICK OK
MESSAGE "Bonjour, monde !"`,
  },
  {
    name: "Visual FoxPro",
    definition: `l FoxPro est un langage de programmation orienté objet
    utilisé pour le développement d'applications de base de données.
    Il était souvent utilisé pour créer des applications de gestion de
    données et des systèmes d'information.`,
    example: `lcMessage = "Bonjour, monde !"
MESSAGEBOX(lcMessage)`,
  },
  {
    name: "Visual Objects",
    definition: `l Objects est un langage de programmation orienté objet
    utilisé pour le développement d'applications graphiques. Il est
    souvent utilisé pour créer des interfaces utilisateur et des
    applications professionnelles.`,
    example: `CLASS MainDialog FROM Dialog
METHOD Init()
  SELF:AddControl(Button, "btnHello", , , 100, 50)
  SELF:Center()
  SELF:Create()
END METHOD

METHOD btnHello.Click()
  SELF:MessageBox("Bonjour, monde !")
END METHOD
END CLASS

oMainDialog := MainDialog():New()
oMainDialog:Init()`,
  },
  {
    name: "Vvvv",
    definition: `v est un environnement de programmation visuelle utilisé pour
    la création de médias interactifs en temps réel. Il est souvent
    utilisé dans les domaines de l'art numérique, de la scénographie
    et de l'installation multimédia.`,
    example: `int count = 0;
while (count < 10)
{
// Fait quelque chose...
count++;
}`,
  },
  {
    name: "Water",
    definition: `r est un langage de programmation conçu pour la programmation
    par contraintes. Il permet de résoudre des problèmes complexes en
    spécifiant des contraintes logiques sur les variables.`,
    example: `sum([X, Y], Result) :- Result = X + Y.`,
  },
  {
    name: "WATFIV, WATFOR (en)",
    definition: `V et WATFOR sont des anciens langages de programmation en
    langage Fortran développés par le Waterford Institute of
    Technology en Irlande. Ils ont été utilisés pour l'enseignement et
    le développement logiciel.`,
    example: `PROGRAM HELLO
PRINT *, "Hello, World!"
END`,
  },
  {
    name: "WebQL",
    definition: `L est un langage de requête conçu pour interroger et manipuler
    des données structurées sur le web. Il facilite l'extraction
    d'informations à partir de pages web et leur traitement.`,
    example: `SELECT * FROM website WHERE domain = 'example.com';`,
  },
  {
    name: "Whitespace",
    definition: `e est un langage de programmation exotique qui utilise
    uniquement des espaces, des tabulations et des retours à la ligne
    pour définir les instructions et les données. Les caractères non
    blancs sont ignorés.`,
    example: `   	
  

    `,
  },
  {
    name: "Winbatch",
    definition: `h est un langage de script conçu pour l'automatisation de
    tâches sous Windows. Il permet d'écrire des scripts pour manipuler
    les applications, les fichiers et les paramètres du système
    d'exploitation Windows.`,
    example: `@ECHO OFF
MESSAGEBOX("Hello, world!", "Winbatch Example")`,
  },
  {
    name: "WLangage (WinDev)",
    definition: `e est un langage de programmation propriétaire utilisé avec
    l'outil de développement WinDev. Il permet de créer des
    applications logicielles pour Windows, le web et les appareils
    mobiles.`,
    example: `PROCÉDURE MaProcédure()
Info("Hello, world!")
FIN`,
  },
  {
    name: "Windows PowerShell",
    definition: `s PowerShell est un environnement de ligne de commande et un
    langage de script développés par Microsoft. Il est principalement
    utilisé pour l'automatisation de tâches système et
    l'administration de Windows.`,
    example: `Write-Host "Hello, world!"`,
  },
  {
    name: "X#",
    definition: `X# est un langage de programmation orienté objet basé sur le
    langage XBase. Il est utilisé pour le développement d'applications
    Windows et supporte la programmation en couches, la programmation
    d'événements et bien plus encore.`,
    example: `CLASS MyClass
METHOD MyMethod()
  ? "Hello, world!"
RETURN`,
  },
  {
    name: "X++",
    definition: `X++ (ou Xpp) est un langage de programmation utilisé pour le
    développement d'applications sur la plateforme Microsoft Dynamics
    AX (maintenant appelée Dynamics 365 Finance and Operations). Il
  est basé sur le langage C++ et fournit des fonctionnalités
    spécifiques pour la gestion des processus d'entreprise.`,
    example: `class HelloWorld
{
static void main(Args _args)
{
  info("Hello, world!");
}
}`,
  },
  {
    name: "X10",
    definition: `0 est un langage de programmation concurrent orienté objet
    utilisé pour le développement d'applications parallèles sur des
    systèmes distribués. Il offre des fonctionnalités avancées pour la
    programmation parallèle et la manipulation de données distribuées.`,
    example: `class Hello {
public static def main(args: Rail[String](1)) {
  Console.OUT.println("Hello, world!");
}
}`,
  },
  {
    name: "XBL",
    definition: `L (eXtensible Binding Language) est un langage de description
    utilisé pour définir les comportements et les propriétés des
    éléments d'interface utilisateur dans les technologies web basées
    sur XUL (XML User Interface Language), telles que Mozilla Firefox
    et Thunderbird.`,
    example: `&lt;bindings xmlns="http://www.mozilla.org/xbl"&gt;
&lt;binding id="myButtonBinding"&gt;
  &lt;implementation&gt;
    &lt;constructor&gt;
      &lt;h:button label="Hello, world!" oncommand="alert('Button clicked!')" xmlns:h="http://www.w3.org/1999/xhtml"/&gt;
    &lt;/constructor&gt;
  &lt;/implementation&gt;
&lt;/binding&gt;
&lt;/bindings&gt;`,
  },
  {
    name: "xHarbour",
    definition: `r est un langage de programmation basé sur le langage de
    programmation xBase. Il est compatible avec le langage de
    programmation Clipper et fournit des fonctionnalités avancées pour
    le développement d'applications de gestion de bases de données.`,
    example: `PROCEDURE Main()
? "Hello, world!"
RETURN`,
  },
  {
    name: "XL",
    definition: `L est un langage de programmation fonctionnelle utilisé pour la
    manipulation et l'analyse de données. Il fournit des
    fonctionnalités avancées pour la programmation fonctionnelle et
  est souvent utilisé dans le domaine de l'analyse des données et de
    la science des données.`,
    example: `let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = map(\(x) -> x * 2, numbers);
print(doubledNumbers);`,
  },
  {
    name: "XNA",
    definition: `A (XNA's Not Acronymed) est un framework de développement de
    jeux vidéo créé par Microsoft. Il est basé sur le langage C# et
    fournit des outils et des bibliothèques pour le développement de
    jeux sur les plateformes Xbox et Windows.`,
    example: `using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;

class Game1 : Game
{
protected override void Draw(GameTime gameTime)
{
  GraphicsDevice.Clear(Color.CornflowerBlue);

  spriteBatch.Begin();
  spriteBatch.DrawString(font, "Hello, world!", new Vector2(100, 100), Color.White);
  spriteBatch.End();

  base.Draw(gameTime);
}
}`,
  },
  {
    name: "XOTcl",
    definition: `l (Extended Object Tcl) est une extension du langage de script
    Tcl qui ajoute des fonctionnalités orientées objet. Il permet la
    programmation orientée objet dans le style de Tcl et fournit des
    mécanismes avancés tels que l'héritage de classes et la création
    de nouveaux objets.`,
    example: `Class MyClass {
method hello {} {
  puts "Hello, world!"
}
}

set obj [MyClass new]
$obj hello`,
  },
  {
    name: "XPL",
    definition: `L (eXtensible Programming Language) est un langage de
    programmation utilisé pour la simulation et la modélisation de
    systèmes complexes. Il est utilisé dans le domaine de la recherche
    scientifique et permet d'exprimer des modèles mathématiques et de
    simuler leur comportement.`,
    example: `MODEL HelloWorld
VARIABLES
  x, y: REAL;
EQUATIONS
  x = 1;
  y = 2 * x;
END HelloWorld;`,
  },
  {
    name: "XPL0",
    definition: `0 est une version simplifiée du langage de programmation XPL
    utilisée pour l'apprentissage et la compréhension des concepts de
    programmation. Il offre une syntaxe simplifiée et des
    fonctionnalités de base pour introduire les principes de base de
    la programmation.`,
    example: `program HelloWorld;
begin
writeln('Hello, world!');
end.`,
  },
  {
    name: "XQuery",
    definition: `y est un langage de requête conçu pour interroger des données
    XML. Il permet d'extraire des informations spécifiques d'un
    document XML en utilisant une syntaxe déclarative. XQuery est
    souvent utilisé dans le contexte du web sémantique et des bases de
    données XML.`,
    example: `for $book in doc("books.xml")//book
where $book/price &lt; 30
return $book/title`,
  },
  {
    name: "XSLT",
    definition: `T (eXtensible Stylesheet Language Transformations) est un
    langage de transformation utilisé pour convertir des documents XML
    en d'autres formats, tels que HTML, XML ou PDF. Il permet de
    définir des règles de transformation pour spécifier comment les
    données doivent être extraites et présentées.`,
    example: `&lt;xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"&gt;
&lt;xsl:template match="/"&gt;
  &lt;html&gt;
    &lt;body&gt;
      &lt;h1&gt;Hello, world!&lt;/h1&gt;
    &lt;/body&gt;
  &lt;/html&gt;
&lt;/xsl:template&gt;
&lt;/xsl:stylesheet&gt;`,
  },
  {
    name: "Y",
    definition: `Y est un langage de programmation développé à des fins éducatives.
    Il est conçu pour être simple et facile à apprendre, ce qui en
    fait un choix populaire pour les débutants en programmation.`,
    example: `Pour afficher "Bonjour, monde !" en Y :
PRINT "Bonjour, monde !"
  `,
  },
  {
    name: "YaBasic",
    definition: `c est un langage de programmation basé sur BASIC. Il est
    utilisé pour créer des programmes simples et rapides. YaBasic est
    souvent utilisé pour des tâches telles que la création de scripts
    automatisés et de petits jeux.`,
    example: `Pour afficher "Bonjour, monde !" en YaBasic :
PRINT "Bonjour, monde !"
  `,
  },
  {
    name: "YACC",
    definition: `C (Yet Another Compiler Compiler) est un outil utilisé pour
    générer des analyseurs syntaxiques. Il est souvent utilisé dans le
    processus de développement de compilateurs pour analyser et
    interpréter la structure d'un langage de programmation.`,
    example: `Exemple de règle de grammaire en YACC :
expression : expression '+' expression
         | expression '-' expression
         | expression '*' expression
         | expression '/' expression
         | '(' expression ')'
         | NUMBER
         ;
  `,
  },
  {
    name: "YAL",
    definition: `L (Yet Another Language) est un langage de programmation simple
    et minimaliste. Il est souvent utilisé dans un contexte
    pédagogique pour enseigner les concepts de base de la
    programmation.`,
    example: `Pour afficher "Bonjour, monde !" en YAL :
PRINT "Bonjour, monde !"
  `,
  },
  {
    name: "Yoix",
    definition: `x est un langage de programmation orienté objet et interprété.
    Il est utilisé pour développer des applications graphiques et des
    interfaces utilisateur.`,
    example: `Pour créer une fenêtre avec un bouton en Yoix :
import yoix.awt.*;
import yoix.swing.*;

public class HelloWorld extends YoixSwingJFrame {
public HelloWorld() {
  YoixSwingJButton button = new YoixSwingJButton("Cliquez ici");
  add(button);
}

public static void main(String[] args) {
  HelloWorld frame = new HelloWorld();
  frame.setVisible(true);
}
}
  `,
  },
  {
    name: "Yorick",
    definition: `k est un langage de programmation interprété utilisé pour
    l'analyse de données et le calcul scientifique. Il offre un
    ensemble de fonctions et de bibliothèques pour effectuer des
    calculs numériques et des visualisations graphiques.`,
    example: `Pour calculer la somme des éléments d'un tableau en Yorick :
array = [1, 2, 3, 4, 5];
sum = total(array);
print, "La somme des éléments du tableau est :", sum;
  `,
  },
  {
    name: "Z notation",
    definition: `a Z notation est un langage formel utilisé pour spécifier et
    décrire formellement des systèmes logiciels et matériels. Il est
    largement utilisé dans le domaine de l'ingénierie des systèmes.`,
    example: `[ADT]
Node ::= num : Nat
        val : Int
        next : Node
[Function]
insert : Int x Node -> Node
insert(v, nil) = Node(1, v, nil)
insert(v, Node(n, x, p)) =
  if v &lt; x then
    Node(n+1, v, Node(n, x, p))
  else
    Node(n+1, x, insert(v, p))`,
  },
  {
    name: "Zeno",
    definition: `o est un langage de programmation fonctionnel pur conçu pour
    l'écriture de programmes concurrents et parallèles. Il met
    l'accent sur la composition de processus et fournit des primitives
    pour la communication et la synchronisation.`,
    example: `let rec factorial n =
if n = 0 then
  1
else
  n * factorial (n - 1)`,
  },
  {
    name: "Zig",
    definition: `g est un langage de programmation moderne et performant qui met
    l'accent sur la sécurité, la simplicité et la stabilité. Il est
    conçu pour être rapide à compiler et produit du code optimisé avec
    un contrôle fin sur la mémoire et l'exécution.`,
    example: `const print = @import("std").fmt.print;

pub fn main() void {
print("Hello, world!\n");
}`,
  },
  {
    name: "Zonnon",
    definition: `n est un langage de programmation conçu pour le développement
    de systèmes embarqués en temps réel. Il prend en charge la
    modélisation formelle et l'analyse statique pour garantir la
    sûreté et la fiabilité des systèmes.`,
    example: `MODULE HelloWorld;
IMPORT SYSTEM;

VAR
  message: STRING := "Hello, world!";

BEGIN
  SYSTEM.PUT(message);
  SYSTEM.PUT(0X0A);
END HelloWorld.`,
  },
  {
    name: "ZOPL",
    definition: `L (Z Object Programming Language) est un langage de
    programmation orienté objet basé sur la Z notation. Il permet la
    spécification formelle et la mise en œuvre d'objets et de systèmes
    orientés objet.`,
    example: `class Point {
var x: int;
var y: int;

method constructor(x: int, y: int) {
  self.x = x;
  self.y = y;
}

method move(dx: int, dy: int) {
  self.x += dx;
  self.y += dy;
}
}`,
  },
  {
    name: "ZPL",
    definition: `L (Z Processing Language) est un langage de programmation dérivé
    de Java conçu pour la programmation graphique et le développement
    d'applications multimédias interactives.`,
    example: `import processing.core.PApplet;

public class HelloWorld extends PApplet {
public void setup() {
  size(400, 400);
}

public void draw() {
  background(255);
  fill(0);
  textAlign(CENTER);
  textSize(32);
  text("Hello, world!", width/2, height/2);
}

public static void main(String[] args) {
  PApplet.main("HelloWorld");
}
}`,
  },
  {
    name: "ZScript",
    definition: `t est un langage de script utilisé pour le développement de
    jeux dans le moteur de jeu ZDoom. Il permet de créer des scripts
    pour définir le comportement des ennemis, des objets, des armes et
    d'autres éléments dans le jeu.`,
    example: `actor MyEnemy : Demon {
States {
  Spawn:
    TNT1 A 0;
    Loop;
    
  See:
    CHAS AB 3;
    Loop;
    
  Missile:
    CHAS C 10 A_FaceTarget;
    CHAS D 8 A_CustomMissile("Fireball", 32, 2, 20);
    CHAS C 8;
    Goto See;
}
}`,
  },
  {
    name: "ZZT-oop",
    definition: `T-oop est un langage de programmation orienté objet utilisé dans
    le jeu ZZT pour créer des objets et définir leur comportement. Il
    permet de créer des scénarios interactifs et des niveaux
    personnalisés dans le jeu.`,
    example: `class MyObject {
var x: int;
var y: int;

method move(dx: int, dy: int) {
  self.x += dx;
  self.y += dy;
}

method draw() {
  drawChar(x, y, 219, Color.Blue, Color.White);
}
}`,
  },
]
