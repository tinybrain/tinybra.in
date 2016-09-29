---
title: Dolby Evolution
lightbox:
  evolution: Dolby Evolution
---

The Evolution Transcoder was a system addressing issues related to trusted content boundaries faced by syndicated broadcast networks preparing for compliance with the  [Commercial Advertisement Loudness Mitigation Act (CALM Act)][fcc].

This implementation was a technology preview shown at NAB Show® 2012, mainly for technology partners and technical operations executives from major broadcasters (CBS, ESPN, Comcast, etc.).

::: screenies

![lightbox](0)

:::

The [FCC][fcc] regulations require content providers to match the objective loudness of interstitials (i.e., "shouty ads") to the surrounding program material, by applying measurement and gain adjustment practices described in [ATSC A/85 RP:2013][a85]. Batch analysis tools like the [DP600][dp600] already employed by many broadcasters provided an easy means of achieving compliance for offline content (including interstitials), however not so much for live and syndicated feeds.

The Evolution system employed a lightweight trust mechanism using signed E-AC-3 metadata extensions to validate the source and reliability of a stream's "[dialnorm][dialnorm]". It used these extensions to validate the compliance of upstream content, enforce standards compliance where necessary, and prevent unnecessary signal degradation incurred by transcoding already compliant streams.

My work on the transcoder included most of the audio IO and UI which for a number of reasons was particularly challenging. The research code I inherited was largely spaghetti code maintaining multiple state variables for each parameter, and the specification produced by the project's leader was ultimately based on faulty assumptions regarding the intended use case. After several weeks I still couldn't grok how it was all supposed to work, and was becoming concerned that it might at best confer zero benefit to customer engagements.

How a piece of audio software functions is critical, however often just as important is how it functions visually, as audio professionals in particular tend to "listen with their eyes". Any overhead required to explain a system's function or purpose can translate into significant barriers engaging with potential customers.

the primary objective was to make the interface as self-explanatory as possible

distilling the more critical elements "above the fold" from the more superfluous parameters

emphasise visually the most descriptive "top level" parameters


[nab]:http://investor.dolby.com/releasedetail.cfm?ReleaseID=664300
[dpls]:http://www.dolby.com/us/en/technologies/dolby-professional-loudness-solutions.pdf
[dialnorm]:https://en.wikipedia.org/wiki/Dialnorm

[dp564]:http://www.dolby.com/us/en/professional/broadcast/products/dp564.html
[dp586]:http://www.dolby.com/us/en/professional/broadcast/products/dp568.html
[dp600]:http://www.dolby.com/us/en/professional/broadcast/products/dp600.html


[calm]: https://en.wikipedia.org/wiki/Commercial_Advertisement_Loudness_Mitigation_Act
[fcc]:https://www.fcc.gov/media/policy/loud-commercials
[a53]:http://atsc.org/standard/a53-atsc-digital-television-standard/
[a52]:http://atsc.org/standard/a522012-digital-audio-compression-ac-3-e-ac-3-standard-12172012/
[a85]:http://atsc.org/recommended-practice/a85-techniques-for-establishing-and-maintaining-audio-loudness-for-digital-television/
[r128]:https://tech.ebu.ch/loudness
[bs1770]:http://www.itu.int/rec/R-REC-BS.1770/en


