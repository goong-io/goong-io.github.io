---
title: Use the geocoder without a map
description: Use goong-geocoder-js to display a search box without a map.
topics:
  - Geocoder
thumbnail: goong-geocoder-without-map
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
- "import html from './goong-geocoder-without-map.html';"
---
This example uses the [goong-geocoder](https://github.com/goong-io/goong-geocoder-js) control to enable users to search for places without an associated map view.

No map appears in this example, but you can use the geocoder control to search for a place, and the control will return place results from the [Goong Places API](https://docs.goong.io/rest/place/).

Search for a place like `san bay noi bai` to test the geocoder and see results.

{{ <Example html={html} {...this.props} /> }}
