---
title: Restrict map panning to an area
description: Prevent a map from being panned to a different place by setting maxBounds.
topics:
  - User interaction
thumbnail: restrict-bounds
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- Documentation
prependJs:
- "import Example from '../../components/example';"
- "import html from './restrict-bounds.html';"
---

Prevent a map from being panned to a different place by setting [`maxBounds`](https://docs.goong.io/docs/javascript/map/#map#setmaxbounds).

{{ <Example html={html} {...this.props} /> }}
