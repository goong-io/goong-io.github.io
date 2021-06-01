---
title: Add a GeoJSON line
description: Add a GeoJSON line to a map using addSource, then style it using addLayer’s paint properties.
topics:
  - Layers
thumbnail: geojson-line
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- Goong GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './geojson-line.html';"
---

Add a GeoJSON line to a map using [`addSource`](/docs/javascript/map/#map#addsource), then style it using [`addLayer`](/docs/javascript/map/#map#addlayer)’s [`paint`](/docs/style-spec/layers/#line) properties.

{{ <Example html={html} {...this.props} /> }}
