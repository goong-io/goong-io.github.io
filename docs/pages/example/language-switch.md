---
title: Change a map's language
description: Use setLayoutProperty to switch languages dynamically.
topics:
  - User interaction
thumbnail: language-switch
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- Documentation
prependJs:
- "import Example from '../../components/example';"
- "import html from './language-switch.html';"
---

Use [`setLayoutProperty`](https://docs.goong.io/javascript/map/#map#setlayoutproperty) to switch languages dynamically. For a more complete solution see the [mapbox-gl-language](https://github.com/mapbox/mapbox-gl-language/) plugin.

{{ <Example html={html} {...this.props} /> }}
