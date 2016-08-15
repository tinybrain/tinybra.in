---
title: Dolby Lake / Lab.gruppen
lightbox:
  dlp: Dolby Lake Processor
  labgruppen-plm-u2-1: Labgruppen PLM - U2 360 Tour
  labgruppen-plm-u2-2: Labgruppen PLM - U2 360 Tour
---

In the live sound industry, the Lake series loudspeaker processors and equalisers are as good as it gets.

I had a wide range of responsibilities related to product specification and development, hardware and software validation, manufacturing tests and software development. I worked on various parts of the Lake Controller, firmware update and preset management utilities (Win32/DirectX), and firmware for Clair iO, Lake Contour/Mesa, Dolby Lake Processor (ARM/Nucleus) and Lab.gruppen PLM series (Ti C67x).

::: screenies

![lightbox](0)

:::


As an analyst, I worked with systems engineers at Clair Brothers, Brittania Row,   Eighth Day Sound and other major touring companies developing new features and resolving technical issues, particularly with respect to LimiterMax Peak/RMS limiting, gain structure and metering, and Audinate's DANTE network audio stack.

Lab.gruppen's PLM series amplifiers consisted of Lake processing board tightly integrated into power amplifiers based on the FP+ series, providing 10, 14 and 20kw in a 2RU form factor. The Lake board provided front-end I/O, networking and signal processing to Lab.gruppen's analog gain stages and integrated control with their sophisticated system management processor.

I handled much of work integrating and exposing Lab.gruppen’s digital systems and features through the Lake firmware and controller software, including the front panel, 'Load Library' complex impedance load sensing, gain stage configuration, fault protection and other safety features. The PLM series has since been replaced with the enhanced PLM+ series.

::: screenies

![lightbox](1)

![lightbox](2)

:::

In between the Dolby Lake Processor and Lab.gruppen products, we did a fair amount of work on what was to be a modular second generation software architecture for current Lake hardware a range of installation processors. I built a UI toolkit with primitives to cater for hybrid 2D/3D iteraction, with the intention of combining traditional parametric interfaces with spatial representations of both physical and virtual sound spaces. The system was based on OpenGL pbuffers and VBO extensions, and used a loosley coupled 'delegate' event system implemented in C++.


[lake]: http://labgruppen.com/about/about-lake
[plm]: http://labgruppen.com/series/plm-series
