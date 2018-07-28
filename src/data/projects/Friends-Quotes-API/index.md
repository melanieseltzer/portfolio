---
title: Friends Quotes API
date: "2018-07-27T19:38:00"
layout: project
draft: false
path: "/projects/friends-quotes-api/"
tech:
  - "Node"
  - "Express"
  - "API"
description: "Simple Node API to return quotes from the tv show Friends 📺"
repo: "https://github.com/melanieseltzer/friends-quotes-api"
---

I created a Node/Express API to generate quotes from the tv show *Friends*, because it's quite possibly one of the greatest shows on earth.

User has three endpoints to choose from:

`GET /quotes`

Returns an array of all quotes.

`GET /quotes/random`

Returns a single random quote.

`GET /quotes/{num}`

Returns an array of quotes (which are randomized) with length {num}.

<a href="https://friends-quotes-api.herokuapp.com/" target="_blank">API Home</a> &bull; <a href="https://github.com/melanieseltzer/friends-quotes-api" target="_blank">Source Code</a>