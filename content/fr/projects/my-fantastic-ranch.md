---
title: "My Fantastic Ranch"
weight: 40
lede: "Adaptation console, conformité plateforme et gestionnaire de succès cross-platform sur un jeu de gestion de ranch fantastique édité par Nacon."
studio: "Piece of Cake Studios"
studio_url: "https://www.pieceofcake-studios.com"
role: "Développeur moteur de jeux"
year: "2022 – 2024"
engine: "Unity"
platforms: ["Windows", "Nintendo Switch", "PS4", "PS5", "Xbox"]
tech: ["C#", "C++", "SDK consoles", "CI/CD", "Perforce"]
store: "https://store.steampowered.com/app/1949100/My_Fantastic_Ranch_Unicorns__Dragons/"
cover: "my-fantastic-ranch.jpg"
---

## Le jeu

*My Fantastic Ranch: Unicorns & Dragons* est un jeu de gestion de Piece of Cake, édité par Nacon
et sorti en novembre 2022. On y gère un ranch de créatures magiques : les entraîner, donner des
cours d'équitation et de voltige, tout en gérant ressources et réputation.

## Mes contributions

- **Adaptation du jeu pour les consoles de 8ᵉ et 9ᵉ génération**, en conformité complète avec les
  exigences des plateformes.
- Développement d'un **gestionnaire de succès cross-platform** avec intégration directe des SDK,
  et suivi de la **certification console**.
- Amélioration des outils internes et des systèmes d'automatisation, optimisation des pipelines de
  build **GitLab CI**.

## Pourquoi c'était intéressant

Le portage console, c'est le moment où un jeu rencontre des règles qui ne se négocient pas. Chaque
constructeur impose ses exigences de certification — mise en veille et reprise, déconnexion de
manette, intégrité des sauvegardes, changement de compte utilisateur — et chacune est un chemin de
code qui ne s'exécute jamais sur PC.

Les succès illustrent bien pourquoi une abstraction est rentable : chaque plateforme expose le
même concept via un SDK complètement différent, avec sa propre sémantique de déblocage et ses
propres modes de défaillance. L'écrire une seule fois, derrière une seule interface, fait la
différence entre sortir sur quatre plateformes et maintenir quatre jeux.
