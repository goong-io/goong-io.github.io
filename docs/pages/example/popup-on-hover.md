---
title: Display a popup on hover
description: When a user hovers over a custom marker, show a popup containing more information.
topics:
  - Controls and overlays
thumbnail: popup-on-hover
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- Documentation
prependJs:
- "import Example from '../../components/example';"
- "import html from './popup-on-hover.html';"
---

When a user hovers over a custom marker, show a [`Popup`](https://docs.goong.io/javascript/markers/#popup) containing more information.

{{ <Example html={html} {...this.props} /> }}
