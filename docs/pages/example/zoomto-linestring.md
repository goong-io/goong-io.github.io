---
title: Fit to the bounds of a LineString
description: Get the bounds of a LineString.
topics:
  - User interaction
thumbnail: zoomto-linestring
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- Goong GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './zoomto-linestring.html';"
---

Get the bounds of a LineString by passing its first coordinates to [`LngLatBounds`](/docs/javascript/geography/#lnglatbounds) and chaining [`extend`](/docs/javascript/geography/#lnglatbounds#extend) to include the last coordinates.

{{ <Example html={html} {...this.props} /> }}
