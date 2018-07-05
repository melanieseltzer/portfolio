---
title: Grabatar
date: "2018-06-28T22:34:00"
layout: project
draft: false
path: "/projects/grabatar"
tech:
  - "React"
  - "React Router"
  - "Formik"
description: "A small interface to easily 'grab' your Gravatar 👾"
repo: "https://github.com/melanieseltzer/grabatar"
---

[Live preview](https://grabatar.netlify.com/)

I decided to create a simple interface to easily 'grab' your Gravatar (see what I did there? 😉) and see it displayed.

The user enters their email address in the form (which is made with the awesome <a href="https://github.com/jaredpalmer/formik" target="_blank">Formik</a>) and their address is validated, normalized (trimmed and lowercase), and hashed using md5.

The Gravatars are compiled using the hash from the address bar.

![Grabatar.jpg](./Grabatar.jpg)