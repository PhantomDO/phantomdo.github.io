---
title: "KING PONG"
weight: 60
featured: true
lede: "Éditeur nodal sur mesure, systèmes de combat data-driven et optimisation réseau sur un jeu de tennis de table en VR."
studio: "Iconik Studio"
role: "Développeur jeux vidéo"
year: "2020 – 2021"
engine: "Unity"
platforms: ["PC VR", "Meta Quest 1", "Meta Quest 2"]
tech: ["C#", "Systèmes d'IA", "Networking", "Mirror", "PlayFab", "VR"]
store: "https://store.steampowered.com/app/1501390/KING_PONG/"
cover: "king-pong.jpg"
---

## Le jeu

*KING PONG* est un jeu de tennis de table en VR développé par Iconik, édité avec Plug In Digital
et sorti en février 2021. Il faut renvoyer chaque balle pour marquer, utiliser des bonus spéciaux
appelés Ultimates qui changent les règles en plein échange, et enchaîner modes arcade solo ou
multijoueur compétitif en ligne dans une arène au style Tron.

## Mes contributions

- Conception d'un **éditeur nodal sur mesure** pour fluidifier le travail des game designers et
  intégrer les systèmes d'IA, afin qu'ils puissent régler les adversaires sans passer par un
  programmeur.
- Développement des **systèmes de combat « Ultimate Attack »** via machines à états finis et
  approche data-driven.
- **Optimisation de la réplication réseau** via **Mirror** et **PlayFab** pour les performances
  sur casque autonome.

## Pourquoi c'était intéressant

Une IA de tennis de table doit être battable d'une manière qui paraisse juste : c'est un problème
de design avant d'être un problème de programmation — d'où l'idée de construire un éditeur que les
game designers pilotent eux-mêmes plutôt que de coder la difficulté en dur. L'approche data-driven
des Ultimates répond à la même logique : une nouvelle attaque devient une donnée, pas une
modification de code suivie d'un rebuild.

C'est côté réseau que la contrainte était la plus forte. Le Quest est une puce mobile qui rend
deux yeux à 72 Hz, et la réplication entre en concurrence directe avec ce budget par frame — dans
un jeu où toute l'expérience tient à une balle rapide dont les deux joueurs doivent s'accorder sur
la position, instantanément.
