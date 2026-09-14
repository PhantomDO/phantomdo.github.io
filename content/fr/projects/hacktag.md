---
title: "Hacktag"
weight: 50
lede: "Travaux de portage console et de mise en conformité plateforme sur un jeu d'infiltration coopératif asymétrique à deux joueurs. Le portage console n'a pas été publié."
studio: "Piece of Cake Studios"
studio_url: "https://www.pieceofcake-studios.com"
role: "Développeur moteur de jeux"
year: "2022-2024"
engine: "Unity"
platforms: ["Windows", "macOS"]
tech: ["C#", "Asset Bundles", "Rendu", "Split screen", "SDK consoles", "Optimisation"]
store: "https://store.steampowered.com/app/622770/Hacktag/"
cover: "hacktag.jpg"
---

## Le jeu

*Hacktag* est un jeu d'infiltration coopératif à deux joueurs, développé et édité par Piece of Cake
Studios, sorti en février 2018. Il repose sur un gameplay asymétrique : un joueur incarne l'agent
de terrain qui se déplace physiquement dans le niveau, l'autre le hacker qui parcourt le même
bâtiment côté réseau. L'objectif de design est que les deux joueurs se sentent héros d'un film de
casse.

## Mes contributions

- Portage console côté moteur, rendu et performance (un second développeur prenait la partie
  online).
- Migration du projet d'Unity 2018 vers Unity 2022, quatre versions majeures.
- Passage du packaging des ressources en Asset Bundles.
- Bascule du rendu deferred vers forward sur une scène à forte densité de lumières, et refonte du
  budget d'éclairage en conséquence.
- Prise en charge du split screen sur console, Nintendo Switch en particulier, où la charge de
  rendu double sur le matériel cible le plus faible.

## Pourquoi c'était intéressant

Tous les portages n'aboutissent pas. Sur celui-ci, le nombre de cas spécifiques aux plateformes a
fini par dépasser le planning, et le build console a été mis de côté.

Ce qui reste intéressant, c'est ce qu'un rendu forward fait à une scène pensée pour du deferred.
Le deferred absorbe un grand nombre de lumières presque gratuitement ; le forward non. J'ai tenté
de l'instancing de lumières sur GPU via un compute shader : les volumes de lumière devenaient
visibles en screen-space sur certaines scènes, avec un culling incohérent. Aller plus loin relevait
du tech art, qui n'est pas mon métier. La réponse retenue était plus terne et plus juste : moins de
lumières, plus grandes, réglées pour conserver le rendu, plus de la résolution dynamique. Le split
screen rendait chacun de ces budgets deux fois plus serré.
