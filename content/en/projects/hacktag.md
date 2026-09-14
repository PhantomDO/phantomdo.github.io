---
title: "Hacktag"
weight: 50
lede: "Console porting and platform-compliance work on an asymmetric two-player co-op stealth game. The console build was never shipped."
studio: "Piece of Cake Studios"
studio_url: "https://www.pieceofcake-studios.com"
role: "Engine Developer"
year: "2022-2024"
engine: "Unity"
platforms: ["Windows", "macOS"]
tech: ["C#", "Asset Bundles", "Rendering", "Split screen", "Console SDKs", "Optimisation"]
store: "https://store.steampowered.com/app/622770/Hacktag/"
cover: "hacktag.jpg"
---

## The game

*Hacktag* is a two-player co-op stealth game developed and published by Piece of Cake Studios,
released in February 2018. It is built around asymmetric gameplay: one player is the field agent
moving physically through the level, the other is the hacker navigating the same building from
the network side. The design goal is to make both players feel like the heroes of a heist movie.

## My contributions

- Engine, rendering and performance side of the console port (a second developer handled the
  online layer).
- Migrated the project from Unity 2018 to Unity 2022, four major versions.
- Moved asset packaging over to Asset Bundles.
- Switched the renderer from deferred to forward on a scene with a high light count, and reworked
  the lighting budget accordingly.
- Handled split-screen on console, Nintendo Switch in particular, where the rendering load doubles
  on the weakest target hardware.

## Why it was interesting

Not every port ships. On this one the number of platform-specific cases outgrew the schedule, and
the console build was shelved.

The interesting part is what a forward renderer does to a scene that was authored for a deferred
one. Deferred absorbs a large number of lights almost for free; forward does not. I tried GPU
light instancing through a compute shader, and the light volumes started showing up in screen
space on some scenes, with inconsistent culling. Going further would have been tech art work,
which is not my discipline. The answer that actually shipped was duller and correct: fewer lights,
larger, tuned to keep the look, plus dynamic resolution. Split-screen made every one of those
budgets twice as tight.
