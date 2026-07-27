---
title: "KING PONG"
weight: 60
featured: true
lede: "Enemy AI, Behaviour Tree tooling and Meta Quest performance work on a VR table-tennis game."
studio: "Iconik Studio"
role: "Gameplay Programmer"
year: "2020 – 2021"
engine: "Unity"
platforms: ["PC VR", "Meta Quest 1", "Meta Quest 2"]
tech: ["C#", "Behaviour Trees", "AI", "VR", "Optimisation"]
store: "https://store.steampowered.com/app/1501390/KING_PONG/"
---

## The game

*KING PONG* is a VR table-tennis game by Iconik, published with Plug In Digital and released in
February 2021. Return every ball to score, use special power-ups called Ultimates to change the
rules mid-rally, and play solo arcade modes or competitive online multiplayer in a Tron-styled
arena.

## My contributions

- Implemented **new enemy AI behaviour** and integrated new gameplay systems.
- Developed **tools for AI behaviour customisation** using visual scripting (Behaviour Trees),
  so designers could tune opponents without going through a programmer.
- **Optimised performance** for Meta Quest 1 and 2.

## Why it was interesting

A table-tennis AI has to be beatable in a way that feels fair, which is a design problem before
it is a programming one — hence putting Behaviour Trees in designers' hands rather than hard-coding
difficulty. Meanwhile the Quest 1 is a mobile chip rendering two eyes at 72 Hz: every AI tick and
every physics query competes with the frame budget, so the tuning tools and the optimisation work
were really the same problem seen from two ends.
