---
title: "Souls Boss Arena"
weight: 70
lede: "Un prototype de combat de boss compact bâti sur le Gameplay Ability System : combat avec lock-on, endurance et frames d'invincibilité, et un boss à deux phases piloté par behavior trees."
studio: "Projet personnel"
role: "Seul développeur"
year: "2025"
engine: "Unreal Engine 5.6"
tech: ["C++", "Blueprint", "Gameplay Ability System", "Behavior Trees", "Niagara"]
source: "https://gitlab.com/PhantomDO/souls-like"
---

## Mes contributions

- Seul développeur. C++ / Blueprint, 254 commits.
- Combat bâti sur le **Gameplay Ability System**, avec abilities, effects, attributs et gameplay
  tags plutôt que du code de combat ad hoc.
- **Ciblage lock-on** et roulade directionnelle avec frames d'invincibilité.
- **Endurance** comme ressource partagée conditionnant les attaques comme les esquives.
- **Boss à deux phases** piloté par behavior trees, changeant de jeu de patterns en cours de
  combat.
- **Outils de debug** : god mode, bascule d'invulnérabilité, logs de combat.
- Support manette et clavier, VFX Niagara et sound cues.

## Pourquoi c'était intéressant

Construit pendant une période entre deux postes, en appui de deux cursus distincts : l'un sur le
combat action, l'autre sur le Gameplay Ability System. Le travail intéressant n'a pas été de les
suivre. Il a été de faire cohabiter deux architectures différentes dans un même projet, et de
décider quoi garder de chacune.

GAS est un framework qu'on ne comprend qu'en le câblant de bout en bout : les attributs qui
alimentent les effets, les effets conditionnés par les tags, les tags qui pilotent les abilities,
les abilities qui s'annulent entre elles. La lecture donne le vocabulaire. Livrer un boss qui
change de phase en plein combat sans laisser traîner un effet obsolète donne le reste.

L'outillage de debug est venu en premier, pas en dernier. Un prototype de combat qu'on ne peut pas
rendre invincible est un prototype sur lequel on ne peut pas itérer.
