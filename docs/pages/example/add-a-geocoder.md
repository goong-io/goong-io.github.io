---
title: Add a geocoder control to Goong JS
description: Use goong-geocoder-js to display a search box.
topics:
  - Geocoder
thumbnail: add-a-geocoder
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- Documentation
prependJs:
- "import Example from '../../components/example';"
- "import html from './add-a-geocoder.html';"
---

This example adds a geocoding control to a web map, enabling users to search the map for a place.

It adds the control by loading the [goong-geocoder](https://github.com/goong-io/goong-geocoder-js) plugin inside a `<script>` tag, then using map.addControl to add the control with `GoongGeocoder` defined in the options. The `GoongGeocoder` object uses the [Goong Places API](https://docs.goong.io/rest/place/) to enable places search.

Search for a place like `san bay noi bai` to test the geocoder control.

To explore how query parameters affect places search results, use the [Place API Inspector](https://inspector.goong.io/#!/Place/get_Place_AutoComplete).


{{ <Example html={html} {...this.props} /> }}
