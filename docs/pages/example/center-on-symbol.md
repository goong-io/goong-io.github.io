---
title: Center the map on a clicked symbol
description: Use events and flyTo to center the map on a symbol.
topics:
  - Camera
  - User interaction
thumbnail: center-on-symbol
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- Documentation
prependJs:
- "import Example from '../../components/example';"
- "import html from './center-on-symbol.html';"
---

Use events and [`flyTo`](https://docs.goong.io/javascript/map/#map#flyto) to center the map on a [`symbol`](https://docs.goong.io/style-spec/layers/#symbol).

{{ <Example html={html} {...this.props} /> }}
