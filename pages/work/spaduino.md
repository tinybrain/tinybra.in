---
title: spaduino
lightbox:
  spaduino-iphone: Spaduino iPhone
  sp500a-1: SP500A MCU & Sensors
  sp500a-2: SP500A Power & Relays
---

**spaduino** was a drop-in MCU retrofit for a hot tub controller, specifically a New Zealand made [SpaQuip SP500][sq].

The original controller in my unit (an [Atmel AT90S4433][avr]) was 15 years old when it died, and I was faced with either replacing it with the same version, or purchase an entirely new controller. A new unit was a big expense, especially considering I had recently replaced the heating element, however the original firmware implementation was very rudimentary, and completely lacked any modern ECO features. And so I decided to implement my own.

The project consisted of three applications:

* [**SpaController**][sc] is the arduino sketch for the core firmware. The [rpi-ios branch][sc-rpi-ios] is the version used during the development phase, which used a serial protocol for interactivity and an RTC source. The [master branch][sc] is the final self-contained version providing user interaction and display via the unit's original front-panel interface, and an integrated module as an RTC source.

* [**SpaServer**][ss] is a simple server which in the first phase was run on a raspberry-pi running Arch Linux, connected to the arduino via RS232. It primarily acted as a Wi-Fi enabled console host and relay on top of the arduino's serial protocol, as well as providing an RTC source via a chrony NTP daemon.

* [**Slimer**][sl] is an iOS frontend also used during the first phase. It connected to the SpaServer using Google Protocol Buffers over TCP using NSStream, and provided an interface for system interaction and status display.

::: screenies

![lightbox](0)

:::

I also maintained schematics of the original controller board throughout the project ([github][sch]). Although the design was relatively simple, the safety implications were far from trivial, and these were essential for understanding the rationale behind each engineering decision.

[View as PDF][pdf]

::: screenies

![lightbox](1)

![lightbox](2)

:::

[sq]: http://www.spa-quip.co.nz/shop/Controllers/Spa+Power+500/Spa+Power+500+2kW.html
[avr]: http://www.atmel.com/images/doc1042.pdf

[sc]: https://github.com/tinybrain/spaduino/tree/master/SpaController
[sc-rpi-ios]: https://github.com/tinybrain/spaduino/tree/rpi-ios/SpaController
[ss]: https://github.com/tinybrain/spaduino/tree/master/SpaServer
[sl]: https://github.com/tinybrain/spaduino/tree/master/Slimer

[sch]: https://github.com/tinybrain/spaduino-schematics
[pdf]: https://github.com/tinybrain/spaduino-schematics/raw/master/sp500-tinybrain-combined.pdf

[gaf]: http://geda-project.org/
