---
title: spaduino
sub: Arduino Hot Tub Controller

image:
  alt: Slimer
  src: spaduino@0.5x.png
  zoom: spaduino.png
---

spaduino was a hot tub controller implemented using an arduino UNO compatible controller. It was used as a drop-in MCU replacement for a [Spa Quip SP500AMKI][sq], manufactured by Spa Quip/Davey in New Zealand.

The original controller in my unit (an [Atmel AT90S4433][avr]) was 15 years old when it died, and I was faced with either replacing it with the same version, or purchase an entirely new controller. A new unit was a big expense, especially considering I had recently replaced the heating element, however the original firmware implementation was very rudimentary, and completely lacked any modern ECO features. And so I decided to implement my own.

:fa-github: GitHub: [tinybrain/spaduino][github]

**Languages:** C++, Objective-C, Ruby
**Technologies:** [Arduino][arduino], [Raspberry Pi][rpi], [Protocol Buffers][protobuf]

[sq]: http://www.spa-quip.co.nz/shop/Controllers/Spa+Power+500/Spa+Power+500+2kW.html
[avr]: http://www.atmel.com/images/doc1042.pdf

[github]:https://github.com/tinybrain/spaduino/

[arduino]:https://arduino.cc/
[rpi]:https://www.raspberrypi.org/
[protobuf]:https://developers.google.com/protocol-buffers/
