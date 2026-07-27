---
title: "Vestiges: Fallen Tribes"
weight: 20
lede: "Profilage et optimisation des performances sur un jeu de cartes tactique sci-fi jouable à plat et en VR."
studio: "Wanadev Studio"
studio_url: "https://www.wanadevstudio.com"
role: "Développeur jeux vidéo"
year: "2024"
engine: "Unreal Engine 5"
platforms: ["PC", "VR (OpenXR / Meta)"]
tech: ["C++", "Blueprint", "Profilage", "Optimisation", "VR"]
store: "https://store.steampowered.com/app/2511780/Vestiges_Fallen_Tribes/"
---

## Le jeu

*Vestiges: Fallen Tribes* est un jeu de stratégie sci-fi de Wanadev Studio qui mêle mécaniques de
jeu de plateau, autobattler et deckbuilding : on dirige une tribu, on déploie des unités animées
tour après tour, et on enchaîne campagne solo ou parties contre d'autres joueurs. Le jeu se joue
aussi bien sur écran classique qu'en immersion VR complète, et est sorti en avril 2025.

## Mes contributions

- **Optimisation des performances par profilage des composants**, avec un gain de stabilité du
  framerate.
- Collaboration avec les équipes design et QA pour garantir la cohérence des features et la
  qualité du code.

## Pourquoi c'était intéressant

Faire coexister une version écran plat et une version VR dans la même base de code met le travail
de performance sous pression : c'est la cible VR qui fixe le plafond des deux. Profiler composant
par composant, c'est justement ce qui permet de découvrir que le coût ne se trouve pas là où le
frame graph le laisse d'abord penser. Et en VR, la *stabilité* du framerate compte davantage que
la moyenne brute : une frame perdue, le joueur la ressent dans l'oreille interne plutôt qu'il ne
la voit sur un compteur.
