---
title: Display buildings in 3D
description: Use extrusions to display buildings' height in 3D.
topics:
  - Layers
thumbnail: 3d-buildings
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- Documentation
- Mapbox Streets tileset
prependJs:
- "import Example from '../../components/example';"
- "import html from './3d-buildings.html';"
---

Use [extrusions](https://docs.goong.io/style-spec/layers/#fill-extrusion) to display buildings' height in 3D.

{{ <Example html={html} {...this.props} /> }}
