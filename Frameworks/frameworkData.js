const frameworks = [
  {
    name: "Angular",
    definition: `Angular est un framework JavaScript développé par Google. Il est utilisé pour la création d'applications web dynamiques et performantes. Angular propose une architecture basée sur les composants et facilite la manipulation du DOM, la gestion des états et la communication avec les services web.`,
    example: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <h1>Hello, Angular!</h1>
  \`
})
export class AppComponent { }`,
  },
  {
    name: "Bootstrap",
    definition: `Bootstrap est une bibliothèque CSS populaire qui offre une
              collection de composants prêts à l'emploi et un système de grille
              responsive. Elle facilite la création d'interfaces web modernes et
              attractives avec peu de code.`,
    example: `&lt;html&gt;
          &lt;head&gt;
            &lt;link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-pzjw8y/u/mKp12ZlE6R5EL3p5SLZK8YbU8LGA3k6TTCFKe6l/A6pzN1q5PZcw7Ys" crossorigin="anonymous"&gt;
          &lt;/head&gt;
          &lt;body&gt;
            &lt;div class="container"&gt;
              &lt;h1&gt;Hello, Bootstrap!&lt;/h1&gt;
              &lt;button class="btn btn-primary"&gt;Click Me&lt;/button&gt;
            &lt;/div&gt;
            &lt;script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"&gt;&lt;/script&gt;
            &lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-pzjw8y/u/mKp12ZlE6R5EL3p5SLZK8YbU8LGA3k6TTCFKe6l/A6pzN1q5PZcw7Ys" crossorigin="anonymous"&gt;&lt;/script&gt;
          &lt;/body&gt;
        &lt;/html&gt;`,
  },
  {
    name: "Express",
    definition: `Express est un framework web minimaliste pour Node.js. Il
              simplifie la création d'applications web en fournissant des
              fonctionnalités pour la gestion des routes, des middlewares et des
              requêtes/réponses HTTP.`,
    example: `const express = require('express');
        const app = express();
        
        app.get('/', (req, res) => {
          res.send('Hello, Express!');
        });
        
        app.listen(3000, () => {
          console.log('Server running at http://localhost:3000/');
        });`,
  },
  {
    name: "Flutter",
    definition: `Flutter est un framework de développement d'applications
              multiplateformes créé par Google. Il permet de créer des
              applications mobiles et de bureau avec un seul codebase, en
              utilisant le langage de programmation Dart.`,
    example: `// main.dart
        import 'package:flutter/material.dart';
        
        void main() {
          runApp(MyApp());
        }
        
        class MyApp extends StatelessWidget {
          @override
          Widget build(BuildContext context) {
            return MaterialApp(
              home: Scaffold(
                appBar: AppBar(
                  title: Text('Hello, Flutter!'),
                ),
                body: Center(
                  child: Text('Welcome to Flutter'),
                ),
              ),
            );
          }
        }`,
  },
  {
    name: "Next.js",
    definition: ` Next.js est un framework de développement web basé sur React. Il
              permet de créer des applications web modernes avec des
              fonctionnalités avancées telles que le rendu côté serveur (SSR),
              le rendu statique (SSG) et le routage client-side.`,
    example: `// pages/index.js
        import React from 'react';
        
        const HomePage = () => {
          return (
            &lt;div&gt;
              &lt;h1&gt;Hello, Next.js!&lt;/h1&gt;
            &lt;/div&gt;
          );
        };
        
        export default HomePage;`,
  },
  {
    name: "Node.js",
    definition: `Node.js est un environnement d'exécution JavaScript côté serveur.
              Il permet d'exécuter du code JavaScript en dehors d'un navigateur
              et est souvent utilisé pour créer des serveurs web, des outils en
              ligne de commande et des applications réseau.`,
    example: `// server.js
        const http = require('http');
        
        const server = http.createServer((req, res) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain');
          res.end('Hello, Node.js!');
        });
        
        server.listen(3000, 'localhost', () => {
          console.log('Server running at http://localhost:3000/');
        });`,
  },
  {
    name: "React",
    definition: `React est une bibliothèque JavaScript développée par Facebook.
              Elle est utilisée pour la création d'interfaces utilisateur
              interactives et réactives. React utilise un concept appelé
              "Virtual DOM" qui permet d'optimiser les performances en ne
              mettant à jour que les parties nécessaires de l'interface
              lorsqu'un état change.`,
    example: `import React from 'react';
        
        function App() {
          return (
            &lt;div&gt;
              &lt;h1&gt;Hello, React!&lt;/h1&gt;
            &lt;/div&gt;
          );
        }
        
        export default App;`,
  },
  {
    name: "Redux",
    definition: ` Redux est une bibliothèque de gestion d'état prévisible pour les
              applications JavaScript. Il est souvent utilisé en conjonction
              avec des bibliothèques de vues telles que React. Redux facilite la
              gestion de l'état global de l'application de manière organisée et
              maintenable.`,
    example: `import { createStore } from 'redux';
        
        // Définition du reducer
        function counterReducer(state = 0, action) {
          switch (action.type) {
            case 'INCREMENT':
              return state + 1;
            case 'DECREMENT':
              return state - 1;
            default:
              return state;
          }
        }
        
        // Création du store
        const store = createStore(counterReducer);
        
        // Dispatch d'actions
        store.dispatch({ type: 'INCREMENT' });
        store.dispatch({ type: 'INCREMENT' });
        store.dispatch({ type: 'DECREMENT' });
        
        // Obtention de l'état actuel
        const currentState = store.getState();
        console.log(currentState); // Output: 1`,
  },
  {
    name: "Symfony",
    definition: `Symfony est un framework PHP utilisé pour le développement
              d'applications web. Il suit le modèle de conception MVC
              (Modèle-Vue-Contrôleur) et fournit des composants réutilisables,
              une architecture modulaire et des outils puissants pour faciliter
              le développement.`,
    example: `// src/Controller/DefaultController.php
        namespace App\Controller;
        
        use Symfony\Component\HttpFoundation\Response;
        use Symfony\Component\Routing\Annotation\Route;
        
        class DefaultController
        {
            /**
             * @Route("/", name="homepage")
             */
            public function index(): Response
            {
                return new Response('Hello, Symfony!');
            }
        }`,
  },
  {
    name: "Tailwind",
    definition: `Tailwind CSS est une bibliothèque CSS utilitaire qui permet de
              créer rapidement des interfaces web personnalisées. Elle fournit
              une collection de classes prêtes à l'emploi pour la mise en page,
              les couleurs, les typographies et bien plus encore.`,
    example: `&lt;html&gt;
          &lt;head&gt;
            &lt;link href="https://cdn.tailwindcss.com/2.2.16/tailwind.min.css" rel="stylesheet"&gt;
          &lt;/head&gt;
          &lt;body&gt;
            &lt;div class="bg-blue-500 text-white p-4"&gt;
              &lt;h1 class="text-3xl"&gt;Hello, Tailwind!&lt;/h1&gt;
            &lt;/div&gt;
          &lt;/body&gt;
        &lt;/html&gt;`,
  },
  {
    name: "Vue.js",
    definition: `Vue.js est un framework JavaScript progressif utilisé pour la
              création d'interfaces utilisateur. Il se concentre sur la partie
              vue d'une application web, offrant des fonctionnalités telles que
              la liaison de données, la gestion des événements et la création de
              composants réutilisables. Vue.js est apprécié pour sa simplicité
              et sa flexibilité.`,
    example: `&lt;template&gt;
          &lt;div&gt;
            &lt;h1&gt;Hello, Vue.js!&lt;/h1&gt;
          &lt;/div&gt;
        &lt;/template&gt;
        
        &lt;script&gt;
        export default {
          name: 'App'
        }
        &lt;/script&gt;`,
  },
];
