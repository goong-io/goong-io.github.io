---
title: Add a WMS source
description: Add an external Web Map Service raster layer to the map using addSource's tiles option.
topics:
  - Sources
thumbnail: wms
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- Documentation
prependJs:
- "import Example from '../../components/example';"
- "import html from './wms.html';"
---

Add an external [Web Map Service raster layer](https://www.ogc.org/standards/wms) to the map using [`addSource`](https://docs.goong.io/javascript/map/#map#addsource)'s [`tiles`](https://docs.goong.io/style-spec/sources/#raster-tiles) option.

{{ <Example html={html} {...this.props} /> }}
