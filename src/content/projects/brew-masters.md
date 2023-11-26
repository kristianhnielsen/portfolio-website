---
title: Brew Masters
stack: [Astro, Sanity, Tailwind, HTML, Typescript]
image:
  {
    src: ./images/brew-masters.jpg,
    alt: Astro and Sanity's logos connected by a diagonal line,
  }
github: https://github.com/kristianhnielsen/brew-masters
demo: https://brew-masters.vercel.app/
description: A website made with custom integration of Sanity.io headless content management system (CMS). Feel free to contact me for access to the CMS. See my blog post on the integration.
tags: [Website, Content Management System, Server-Side Rendered]
order: 3
---

## Description

A sever-side rendered website for a made-up company, Brew Masters. The website started out as a proof of concept of a custom integration of the Sanity's CMS into Astro.

This custom integration inspired me to write a technical tutorial on <a href="https://kristiannielsen.com/blog/getting-started-with-sanity-in-astro/">how to use Sanity with Astro</a>.

I learned a lot about working with code that doesn't a step-by-step tutorial on how to use it in my framework of choice, and adapting the available documentation to the framework based on my own knowledge of how the framework works.

Figuring out how to setup SSR with Astro was necessary for getting the newest information from the Sanity API. This changed my perception of Astro from being just a static site builder, to being capable of competing with more established frameworks like Next.

While there was already a 3rd party integration of this, the author had posted that he would take a break from programming.
I didn't want to rely on 3rd party integration which may be deprecated before long, and saw this as an opportunity to learn something new on my own, and be able to share.

Sanity released v1.0.0 of their <a href="https://github.com/sanity-io/sanity-astro/">official Astro plugin</a> a month after I made the original blog post.
