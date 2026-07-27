---
title: "Propagation: Paradise Hotel"
weight: 10
featured: true
lede: "Un jeu d'horreur VR dont j'ai adapté les mécaniques au tapis VR Omni One, chez Wanadev Studio."
studio: "Wanadev Studio"
studio_url: "https://www.wanadevstudio.com"
role: "Développeur jeux vidéo"
year: "2024"
engine: "Unreal Engine 4"
platforms: ["Omni One", "PC VR", "Meta Quest"]
tech: ["C++", "Blueprint", "VR", "Profilage"]
store: "https://store.steampowered.com/app/1824960/Propagation_Paradise_Hotel/"
cover: "propagation-paradise-hotel.jpg"
---

## Le jeu

*Propagation: Paradise Hotel* est un jeu d'horreur et de survie VR solo, développé et édité par
Wanadev Studio, sorti en mai 2023. On y incarne Emily Diaz, piégée dans le Paradise Hotel pendant
une épidémie zombie et à la recherche de sa sœur, en mêlant infiltration, exploration, gestion de
ressources et combat.

## Mes contributions

- **Adaptation des mécaniques de gameplay** pour le tapis VR **Omni One**, dans les contraintes
  du matériel.
- Collaboration avec les équipes design et QA pour garantir la cohérence des features et la
  qualité du code.

## Pourquoi c'était intéressant

L'Omni One est un tapis omnidirectionnel : le joueur marche réellement. Les hypothèses de
locomotion, de mapping des entrées et de confort valables sur un casque VR classique ne se
transposent tout simplement pas — la téléportation et le déplacement au stick n'ont plus de sens
quand ce sont vos jambes qui font office de périphérique d'entrée. Le travail relevait moins de la
recompilation que de la remise à plat de chaque interaction de déplacement face à un modèle
physique différent, tout en préservant le budget par frame sur du matériel autonome.
