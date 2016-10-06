---
title: Dolby Evolution
sub: Broadcast Transcoder for ATSC A/85 Compliance (CALM Act)
image:
  alt: Dolby Axon Transcoder
  src: evolution@0.33x.png
  zoom: evolution.png
  width: 867px
---
A realtime system for facilitating trusted CALM act compliance in broadcast networks. It consisted of a realtime E-AC-3 transcoder capable of updating a stream’s ‘dialnorm’ in response to ITU-R.BS.1770 or EBU R 128 compliant levelling, and a signing mechanism implemented in metadata extensions to indicate a stream’s compliance to downstream transcoders.

This implementation was a technology preview shown at NAB Show® 2012, mainly for technology partners and technical operations executives from major broadcasters (CBS, ESPN, Comcast, etc.).

:fa-link: [Dolby Broadcast Loudness Solutions][dls]

**Languages:** C, C++
**Technologies:** [Qt][qt], [DD+ (E-AC-3)][a52], [DPLM][dpls]

[dls]:http://www.dolby.com/us/en/professional/broadcast/industry.html

[qt]:https://www.qt.io/developers/
[a52]:http://atsc.org/standard/a522012-digital-audio-compression-ac-3-e-ac-3-standard-12172012/
[dpls]:http://www.dolby.com/us/en/technologies/dolby-professional-loudness-solutions.pdf
