---
title: "Hacktag"
weight: 50
lede: "Console port and QA bug-fixing on an asymmetric two-player co-op stealth game."
studio: "Piece of Cake Studios"
studio_url: "https://www.pieceofcake-studios.com"
role: "Engine Programmer"
year: "2022 – 2024"
engine: "Unity"
platforms: ["Windows", "macOS", "Nintendo Switch", "PS4", "PS5", "Xbox"]
tech: ["C#", "Console SDKs", "Porting", "Co-op networking"]
store: "https://store.steampowered.com/app/622770/Hacktag/"
---

## The game

*Hacktag* is a two-player co-op stealth game developed and published by Piece of Cake Studios,
released in February 2018. It is built around asymmetric gameplay: one player is the field agent
moving physically through the level, the other is the hacker navigating the same building from
the network side. The design goal is to make both players feel like the heroes of a heist movie.

## My contributions

- **Ported the game to consoles.**
- Fixed issues reported by the **QA team**.
- Integrated SDK features for **Switch, PS4, PS5 and Xbox**.

## Why it was interesting

An asymmetric co-op game raises the stakes of a console port. Two players on two different
screens — potentially on two different platforms — have to stay in lockstep, so networking,
session management and platform online services all have to be re-validated per target rather
than assumed to work.
