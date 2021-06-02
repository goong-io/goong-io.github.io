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
- Documentation
prependJs:
- "import Example from '../../components/example';"
- "import html from './geojson-line.html';"
---

Add a GeoJSON line to a map using [`addSource`](https://docs.goong.io/javascript/map/#map#addsource), then style it using [`addLayer`](https://docs.goong.io/javascript/map/#map#addlayer)’s [`paint`](https://docs.goong.io/style-spec/layers/#line) properties.

{{ <Example html={html} {...this.props} /> }}
