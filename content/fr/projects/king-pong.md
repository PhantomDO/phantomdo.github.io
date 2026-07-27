---
title: "KING PONG"
weight: 60
featured: true
lede: "IA ennemie, outils Behavior Tree et optimisation Meta Quest sur un jeu de tennis de table en VR."
studio: "Iconik Studio"
role: "Programmeur gameplay"
year: "2020 – 2021"
engine: "Unity"
platforms: ["PC VR", "Meta Quest 1", "Meta Quest 2"]
tech: ["C#", "Behavior Trees", "IA", "VR", "Optimisation"]
store: "https://store.steampowered.com/app/1501390/KING_PONG/"
---

## Le jeu

*KING PONG* est un jeu de tennis de table en VR développé par Iconik, édité avec Plug In Digital
et sorti en février 2021. Il faut renvoyer chaque balle pour marquer, utiliser des bonus spéciaux
appelés Ultimates qui changent les règles en plein échange, et enchaîner modes arcade solo ou
multijoueur compétitif en ligne dans une arène au style Tron.

## Mes contributions

- Implémentation de **nouveaux comportements d'IA ennemie** et intégration de systèmes de gameplay.
- Développement d'**outils de personnalisation du comportement des IA** via scripting visuel
  (Behavior Trees), pour que les game designers puissent régler les adversaires sans passer par un
  programmeur.
- **Optimisation des performances** pour Meta Quest 1 et 2.

## Pourquoi c'était intéressant

Une IA de tennis de table doit être battable d'une manière qui paraisse juste : c'est un problème
de design avant d'être un problème de programmation — d'où l'idée de mettre les Behavior Trees
entre les mains des game designers plutôt que de coder la difficulté en dur. En parallèle, le
Quest 1 est une puce mobile qui rend deux yeux à 72 Hz : chaque tick d'IA et chaque requête
physique entre en concurrence avec le budget par frame. Les outils de réglage et le travail
d'optimisation étaient au fond le même problème vu des deux bouts.
