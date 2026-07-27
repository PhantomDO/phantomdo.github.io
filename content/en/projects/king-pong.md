---
title: "KING PONG"
weight: 60
featured: true
lede: "A custom nodal editor, data-driven combat systems and network optimisation on a VR table-tennis game."
studio: "Iconik Studio"
role: "Gameplay Developer"
year: "2020-2021"
engine: "Unity"
platforms: ["PC VR", "Meta Quest 1", "Meta Quest 2"]
tech: ["C#", "Behavior Trees", "AI systems", "Networking", "Mirror", "PlayFab", "VR"]
store: "https://store.steampowered.com/app/1501390/KING_PONG/"
cover: "king-pong.jpg"
---

## The game

*KING PONG* is a VR table-tennis game by Iconik, published with Plug In Digital and released in
February 2021. Return every ball to score, use special power-ups called Ultimates to change the
rules mid-rally, and play solo arcade modes or competitive online multiplayer in a Tron-styled
arena.

## My contributions

- Developed the **AI behavior trees** and designed a custom **node-based editor** for them, so
  opponents could be tuned without going through a programmer.
- Developed the **"Ultimate Attack" combat systems** using finite state machines and a
  data-driven approach.
- **Optimised network replication** through **Mirror** and **PlayFab** for standalone headset
  performance.

## Why it was interesting

A table-tennis AI has to be beatable in a way that feels fair, which is a design problem before it
is a programming one. Hence building an editor designers could drive themselves, rather than
hard-coding difficulty. The data-driven approach to the Ultimates paid off for the same reason:
new attacks become data, not a code change and a rebuild.

The networking side had the tighter constraint. The Quest is a mobile chip rendering two eyes at
72 Hz, and replication competes directly with that frame budget, in a game where the entire
experience is a fast-moving ball whose position both players must agree on, instantly.
