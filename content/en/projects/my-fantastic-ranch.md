---
title: "My Fantastic Ranch"
weight: 40
lede: "Console adaptation, platform compliance and a cross-platform achievement manager on a fantasy ranch management game published by Nacon."
studio: "Piece of Cake Studios"
studio_url: "https://www.pieceofcake-studios.com"
role: "Game Engine Developer"
year: "2022 – 2024"
engine: "Unity"
platforms: ["Windows", "Nintendo Switch", "PS4", "PS5", "Xbox"]
tech: ["C#", "C++", "Console SDKs", "CI/CD", "Perforce"]
store: "https://store.steampowered.com/app/1949100/My_Fantastic_Ranch_Unicorns__Dragons/"
cover: "my-fantastic-ranch.jpg"
---

## The game

*My Fantastic Ranch: Unicorns & Dragons* is a management game from Piece of Cake, published by
Nacon and released in November 2022. You run a ranch of magical creatures, training them and
teaching riding and aerobatics lessons while managing resources and reputation.

## My contributions

- **Adapted the game for 8th and 9th generation consoles**, with full platform compliance.
- Built a **cross-platform achievement manager** with direct SDK integration, and oversaw
  **console certification**.
- Improved internal tooling and automation, and optimised **GitLab CI** build pipelines.

## Why it was interesting

Console porting is where a game meets rules it cannot argue with. Each platform holder has
certification requirements — suspend and resume, controller disconnection, save data integrity,
user account switching — and every one of them is a code path that never runs on PC.

Achievements are a good example of why an abstraction earns its keep: every platform exposes the
same concept through a completely different SDK, with different unlock semantics and different
failure modes. Writing that once, behind one interface, is the difference between shipping on four
platforms and maintaining four games.
