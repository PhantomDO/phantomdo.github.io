---
title: "Souls Boss Arena"
weight: 70
lede: "A compact boss-fight prototype built on the Gameplay Ability System: lock-on combat, stamina and invincibility frames, and a two-phase boss running on behavior trees."
studio: "Personal project"
role: "Sole developer"
year: "2025"
engine: "Unreal Engine 5.6"
tech: ["C++", "Blueprint", "Gameplay Ability System", "Behavior Trees", "Niagara"]
source: "https://gitlab.com/PhantomDO/souls-like"
---

## My contributions

- Sole developer. C++ / Blueprint hybrid, 254 commits.
- Combat built on the **Gameplay Ability System**, using abilities, effects, attributes and
  gameplay tags rather than bespoke combat code.
- **Lock-on targeting** and directional roll with invincibility frames.
- **Stamina** as a shared resource gating both attacks and dodges.
- A **two-phase boss** driven by behavior trees, switching pattern set mid-fight.
- **Debug tooling**: god mode, invulnerability toggle, combat logs.
- Gamepad and keyboard support, Niagara VFX and sound cues.

## Why it was interesting

Built during a period between jobs, alongside two separate courses: one on action combat, one on
the Gameplay Ability System. The work that mattered was not following either of them. It was
making two different architectures coexist in a single project, and deciding what to keep from
each.

GAS is a framework you only understand by wiring it end to end: attributes feeding effects,
effects gated by tags, tags driving abilities, abilities cancelling each other. Reading about it
teaches you the vocabulary. Shipping a boss that changes phase mid-fight without leaving a stale
effect behind teaches you the rest.

The debug tooling came first, not last. A combat prototype you cannot make invincible is a
prototype you cannot iterate on.
