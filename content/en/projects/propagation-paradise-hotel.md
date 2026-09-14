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
platforms: ["Virtuix Omni One", "PC VR", "Meta Quest"]
tech: ["C++", "Blueprint", "VR", "Profiling"]
store: "https://store.steampowered.com/app/1824960/Propagation_Paradise_Hotel/"
cover: "propagation-paradise-hotel.jpg"
---

## The game

*Propagation: Paradise Hotel* is a single-player VR survival horror game developed and published
by Wanadev Studio, released in May 2023. You play Emily Diaz, trapped in the Paradise Hotel
during a zombie outbreak and looking for her sister, mixing stealth, exploration, resource
management and combat.

## My contributions

- Ported player movement and part of the UI to the **Virtuix Omni One** locomotion treadmill,
  through to publication on the platform store.
- Developed without the hardware: the treadmill was in the United States and the target OS was
  unavailable at first, leaving one build per evening and one round of feedback per day.
- Simulated the treadmill's input with a joystick to work locally; the game was completed end to
  end through that simulation.
- Shipped debug commands to the remote testers so they could tune movement speed themselves rather
  than waiting a day per value.
- Worked closely with the design, QA and art teams to maintain high code quality.

## Why it was interesting

Omni One is an omnidirectional treadmill: the player physically walks. Locomotion, input mapping
and comfort assumptions that hold on a standard VR headset simply do not carry over. Teleport and
stick-based movement stop making sense when your legs are the input device. The work was less a
recompile than a re-think of every movement interaction against a different physical model, while
keeping the frame budget intact on standalone hardware.
