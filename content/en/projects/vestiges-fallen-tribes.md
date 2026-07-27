---
title: "Vestiges: Fallen Tribes"
weight: 20
lede: "Optimisation and architecture rework on a sci-fi tactical card game playable flat and in VR."
studio: "Wanadev Studio"
studio_url: "https://www.wanadevstudio.com"
role: "Game Developer"
year: "2024"
engine: "Unity"
platforms: ["PC", "VR (OpenXR / Meta)"]
tech: ["C#", "Optimisation", "Architecture", "VR"]
store: "https://store.steampowered.com/app/2511780/Vestiges_Fallen_Tribes/"
---

## The game

*Vestiges: Fallen Tribes* is a sci-fi strategy game by Wanadev Studio that blends board game
mechanics with autobattler and deckbuilding: you lead a tribe, deploy animated units round by
round, and play through a solo campaign or against other players. It supports both flat screen
and full VR immersion, and released in April 2025.

## My contributions

- Contributed to **optimisation** work across the game.
- Contributed to an **architecture rework** of the codebase.

## Why it was interesting

Supporting a flat-screen build and a VR build from the same codebase puts real pressure on
architecture. Presentation has to be decoupled from game logic cleanly enough that a turn plays
identically whether it's rendered on a monitor or around you at room scale — and the VR target
sets the performance ceiling for both.
