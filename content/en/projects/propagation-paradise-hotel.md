---
title: "Propagation: Paradise Hotel"
weight: 10
featured: true
lede: "A VR survival horror game whose gameplay I adapted to the Omni One VR treadmill at Wanadev Studio."
studio: "Wanadev Studio"
studio_url: "https://www.wanadevstudio.com"
role: "Game Developer"
year: "2024"
engine: "Unreal Engine 4"
platforms: ["Omni One", "PC VR", "Meta Quest"]
tech: ["C++", "Blueprint", "VR", "Profiling"]
store: "https://store.steampowered.com/app/1824960/Propagation_Paradise_Hotel/"
---

## The game

*Propagation: Paradise Hotel* is a single-player VR survival horror game developed and published
by Wanadev Studio, released in May 2023. You play Emily Diaz, trapped in the Paradise Hotel
during a zombie outbreak and looking for her sister, mixing stealth, exploration, resource
management and combat.

## My contributions

- **Adapted the gameplay mechanics** for the **Omni One** VR treadmill, working within the
  constraints of the hardware.
- Worked with the design and QA teams to keep features consistent and code quality high.

## Why it was interesting

Omni One is an omnidirectional treadmill: the player physically walks. Locomotion, input mapping
and comfort assumptions that hold on a standard VR headset simply do not carry over — teleport
and stick-based movement stop making sense when your legs are the input device. The work was less
a recompile than a re-think of every movement interaction against a different physical model,
while keeping the frame budget intact on standalone hardware.
