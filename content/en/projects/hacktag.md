---
title: "Hacktag"
weight: 50
lede: "Console adaptation and platform compliance on an asymmetric two-player co-op stealth game."
studio: "Piece of Cake Studios"
studio_url: "https://www.pieceofcake-studios.com"
role: "Game Engine Developer"
year: "2022 – 2024"
engine: "Unity"
platforms: ["Windows", "macOS", "Nintendo Switch", "PS4", "PS5", "Xbox"]
tech: ["C#", "C++", "Console SDKs", "Co-op networking", "CI/CD"]
store: "https://store.steampowered.com/app/622770/Hacktag/"
cover: "hacktag.jpg"
---

## The game

*Hacktag* is a two-player co-op stealth game developed and published by Piece of Cake Studios,
released in February 2018. It is built around asymmetric gameplay: one player is the field agent
moving physically through the level, the other is the hacker navigating the same building from
the network side. The design goal is to make both players feel like the heroes of a heist movie.

## My contributions

- **Adapted the game for 8th and 9th generation consoles**, with full platform compliance.
- Integrated the **cross-platform achievement manager** and saw the title through
  **console certification**.
- Contributed to internal tooling and **GitLab CI** build pipeline improvements.

## Why it was interesting

An asymmetric co-op game raises the stakes of a console port. Two players on two different
screens — potentially on two different platforms — have to stay in lockstep, so networking,
session management and platform online services all have to be re-validated per target rather
than assumed to work.
