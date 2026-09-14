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
platforms: ["Virtuix Omni One", "PC VR", "Meta Quest"]
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

- Portage du déplacement joueur et d'une partie de l'UI sur le tapis de locomotion **Virtuix
  Omni One**, jusqu'à publication sur le store de la plateforme.
- Développé sans le matériel : le tapis était aux États-Unis et l'OS cible indisponible au départ,
  soit un build par soir et un retour par jour.
- Simulation des entrées du tapis au joystick pour travailler en local ; le jeu a été terminé de
  bout en bout à travers cette simulation.
- Livraison de commandes de debug aux testeurs distants pour qu'ils règlent eux-mêmes la vitesse de
  déplacement, au lieu d'attendre une journée par valeur.
- Collaboration étroite avec les équipes design, QA et art pour maintenir la qualité du code.

## Pourquoi c'était intéressant

L'Omni One est un tapis omnidirectionnel : le joueur marche réellement. Les hypothèses de
locomotion, de mapping des entrées et de confort valables sur un casque VR classique ne se
transposent tout simplement pas. La téléportation et le déplacement au stick n'ont plus de sens
quand ce sont vos jambes qui font office de périphérique d'entrée. Le travail relevait moins de la
recompilation que de la remise à plat de chaque interaction de déplacement face à un modèle
physique différent, tout en préservant le budget par frame sur du matériel autonome.
