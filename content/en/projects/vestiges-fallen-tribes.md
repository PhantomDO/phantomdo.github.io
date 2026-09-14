---
title: "Vestiges: Fallen Tribes"
weight: 20
lede: "Performance profiling and optimisation on a sci-fi tactical card game playable flat and in VR."
studio: "Wanadev Studio"
studio_url: "https://www.wanadevstudio.com"
role: "Game Developer"
year: "2024"
engine: "Unreal Engine 5"
platforms: ["PC", "VR (OpenXR / Meta)", "Pico"]
tech: ["C++", "Blueprint", "Profiling", "Optimisation", "VR"]
store: "https://store.steampowered.com/app/2511780/Vestiges_Fallen_Tribes/"
cover: "vestiges-fallen-tribes.jpg"
---

## The game

*Vestiges: Fallen Tribes* is a sci-fi strategy game by Wanadev Studio that blends board game
mechanics with autobattler and deckbuilding: you lead a tribe, deploy animated units round by
round, and play through a solo campaign or against other players. It supports both flat screen
and full VR immersion, and released in April 2025.

## My contributions

- **Enhanced performance by profiling and optimising CPU, GPU and memory.**
- Entering the resolution phase respawned every unit and its behavior tree at once. Pooled the
  units and their trees to remove the spike.
- Moved unit textures to texture arrays with an artist.
- Framerate went from around 15 fps to around 30 fps on Pico, and the crashes at phase change
  stopped. Optimisation continued with the team after I left.
- Worked closely with the design, QA and art teams to maintain high code quality.

## Why it was interesting

Supporting a flat-screen build and a VR build from the same codebase puts real pressure on
performance work: the VR target sets the ceiling for both. Profiling component by component is how
you find out that the cost is not where the frame graph first suggests. And in VR, frame
*stability* matters more than raw average framerate, because a dropped frame is something the
player feels in their inner ear rather than sees on a counter.
