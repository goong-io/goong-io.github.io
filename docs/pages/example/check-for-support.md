---
title: Check if Goong GL JS is supported
description: Check for Goong GL browser support.
topics:
  - Browser support
thumbnail: check-for-support
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- Documentation
prependJs:
- "import Example from '../../components/example';"
- "import html from './check-for-support.html';"
---

Use [`supported`](https://docs.goong.io/javascript/properties/#supported) to check for Goong GL browser support, and show an alert if the browser does not support Goong GL. Find more information about browser support for Mapbox tools in the [Browser support](https://docs.goong.io/example/check-for-support/) troubleshooting guide.

{{ <Example html={html} {...this.props} /> }}
