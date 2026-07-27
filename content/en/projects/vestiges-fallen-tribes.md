---
title: "Vestiges: Fallen Tribes"
weight: 20
lede: "Performance profiling and optimisation on a sci-fi tactical card game playable flat and in VR."
studio: "Wanadev Studio"
studio_url: "https://www.wanadevstudio.com"
role: "Game Developer"
year: "2024"
engine: "Unreal Engine 5"
platforms: ["PC", "VR (OpenXR / Meta)"]
tech: ["C++", "Blueprint", "Profiling", "Optimisation", "VR"]
store: "https://store.steampowered.com/app/2511780/Vestiges_Fallen_Tribes/"
---

## The game

*Vestiges: Fallen Tribes* is a sci-fi strategy game by Wanadev Studio that blends board game
mechanics with autobattler and deckbuilding: you lead a tribe, deploy animated units round by
round, and play through a solo campaign or against other players. It supports both flat screen
and full VR immersion, and released in April 2025.

## My contributions

- **Optimised performance through component profiling**, improving frame stability.
- Worked with the design and QA teams to keep features consistent and code quality high.

## Why it was interesting

Supporting a flat-screen build and a VR build from the same codebase puts real pressure on
performance work: the VR target sets the ceiling for both. Profiling component by component is
how you find out that the cost is not where the frame graph first suggests — and in VR, frame
*stability* matters more than raw average framerate, because a dropped frame is something the
player feels in their inner ear rather than sees on a counter.
