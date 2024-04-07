---
title: China News Distributor
stack: [Python]
image:
  {
    src: ./images/news-distributor.jpg,
    alt: Python logo with a newspaper and the Chinese flag,
  }
github: https://github.com/kristianhnielsen/news-distributor
description: Webscraper used to get gather and distribute news articles based on keywords.
tags: [Webscraping, E-mail, Docx]
deprecated: true
order: 3
---

## Description

Webscraper used to get gather and distribute news articles based on keywords.

This project allows for a list of “collections” based on any number of keywords. The articles are organized in a Word document (.docx) with custom styling, allowing for easy overview. The documents are then sent out via e-mail.

This was a project born from the book and online course <a href="https://automatetheboringstuff.com/">AutomateTheBoringStuffWithPython</a>, which then got expanded way beyond it’s initial scope.

The problem is solved was, that a number of people, skimmed Chinese news websites and articles, whose content were interesting for the international context. These articles were copy/pasted into a document, which in turn was sent to be proofread, before being distributed to a large number of subscribers. This was done manually on a daily basis.
The entire task took around 5 man-hours per day.

This was my very first project that had a real impact, was solving a real problem.

This project taught me the basics of refactoring, organizing code, Object-Oriented Programming, and scope creep.

I also learned how dynamic the web actually is under the hood, by how many times a correction was necessary when a path or selector had changed for a target HTML element.
