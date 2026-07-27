---
title: "Propagation: Paradise Hotel"
weight: 10
featured: true
lede: "A VR survival horror game I ported to the Omni One platform at Wanadev Studio."
studio: "Wanadev Studio"
studio_url: "https://www.wanadevstudio.com"
role: "Game Developer"
year: "2024"
engine: "Unity"
platforms: ["Omni One", "PC VR", "Meta Quest"]
tech: ["C#", "VR", "Platform porting", "QA"]
store: "https://store.steampowered.com/app/1824960/Propagation_Paradise_Hotel/"
---

## The game

*Propagation: Paradise Hotel* is a single-player VR survival horror game developed and published
by Wanadev Studio, released in May 2023. You play Emily Diaz, trapped in the Paradise Hotel
during a zombie outbreak and looking for her sister, mixing stealth, exploration, resource
management and combat.

## My contributions

- Ported the game to the **Omni One** platform, verifying that the full experience worked
  correctly on the target hardware.
- Investigated and fixed platform-specific issues surfaced during the port.

## Why it was interesting

Omni One is an omnidirectional treadmill headset — locomotion, input mapping and comfort
assumptions that hold on a standard VR headset do not automatically carry over. A port like this
is less about recompiling and more about re-validating every interaction against a different
physical input model, while keeping the frame budget intact on standalone hardware.
