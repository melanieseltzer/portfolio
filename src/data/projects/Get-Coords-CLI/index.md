---
title: Getcoords CLI
date: "2018-08-19T12:07:00"
layout: project
draft: false
path: "/projects/getcoords-cli/"
tech:
  - "Node"
  - "Javascript"
description: "🌐 Get lat and long coordinates from any street address, in your terminal"
repo: "https://github.com/melanieseltzer/getcoords-cli/"
---

For various projects over the years I've found myself having to retrieve lat and long coordinates - for example to plot nearby attractions on a map relative to a particular business.

This gets frustrating after a while because I have to break my workflow to go to an external site to retrieve the coordinates 🙁

So this Node CLI is my solution to that problem. It uses the [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding/start) to convert any address into geographic coordinates, and you can run it from the terminal anywhere on your system. You just need to sign up for an API key and set that to `GOOGLE_GEOCOORDS_API_KEY` env variable and you're good to go.

I've split it up into two packages on npm because the underlying functionality is just a function that makes a call to the API, so I thought it would be useful to separate them so anyone can use the function in their own app.

<a href="https://www.npmjs.com/package/getcoords-cli" target="_blank">Download on npm</a> &bull; <a href="https://github.com/melanieseltzer/getcoords-cli/" target="_blank">Source Code</a>

And the underlying function:

<a href="https://www.npmjs.com/package/getcoords" target="_blank">Download on npm</a> &bull; <a href="https://github.com/melanieseltzer/getcoords/" target="_blank">Source Code</a>