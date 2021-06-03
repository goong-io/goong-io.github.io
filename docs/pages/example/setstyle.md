---
title: Change a map's style
description: Change a map's style.
topics:
  - Styles
thumbnail: setstyle
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- Documentation
prependJs:
- "import Example from '../../components/example';"
- "import html from './setstyle.html';"
---

This example adds a clickable interface that enables a user to apply several different styles to the map.

When the user clicks a style name, it uses setStyle to redraw the map using the style URL associated with that option.

The map is centered at `21.03194,105.85315` near `Hồ Hoàn Kiếm, Hà Nội, Việt Nam`.

{{ <Example html={html} {...this.props} /> }}
