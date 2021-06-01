---
title: Style Specification
description: 'This specification defines and describes the visual appearance of a map: what data to draw, the order to draw it in, and how to style the data when drawing it.'
contentType: specification
navOrder: 6
order: 1
layout: page
hideFeedback: true
products:
- Mapbox Style Specification
overviewHeader:
  title: Style Specification
  features: []
  ghLink: https://github.com/goong-io/goong-js/tree/main/src/style-spec
  changelogLink: https://github.com/goong-io/goong-js/blob/main/src/style-spec/CHANGELOG.md
---

A Goong style is a document that defines the visual appearance of a map: what data to draw, the order to draw it in, and how to style the data when drawing it. A style document is a [JSON](http://www.json.org/) object with specific root level and nested properties. This specification defines and describes these properties.

The intended audience of this specification includes:

- Advanced designers and cartographers who want to write styles by hand.
- Developers using style-related features of [Goong GL JS](https://github.com/goong-io/goong-js)
- Authors of software that generates or processes Goong styles.

## Available styles
- **Light**
```html
https://tiles.goong.io/assets/goong_map_web.json
```
- **Dark**
```
https://tiles.goong.io/assets/goong_map_dark.json
```
- **Navigation Light**
```
https://tiles.goong.io/assets/navigation_day.json
```
- **Navigation Dark**
```
https://tiles.goong.io/assets/navigation_night.json
```
## Style document structure

A Goong style consists of a set of [root properties](/goong-js-docs/style-spec/root), some of which describe a single global property, and some of which contain nested properties. Some root properties, like [`version`](/goong-js-docs/style-spec/root/#version), [`name`](/goong-js-docs/style-spec/root/#name), and [`metadata`](/goong-js-docs/style-spec/root/#metadata), don't have any influence over the appearance or behavior of your map, but provide important descriptive information related to your map. Others, like [`layers`](/goong-js-docs/style-spec/layers) and [`sources`](/goong-js-docs/style-spec/sources), are critical and determine which map features will appear on your map and what they will look like. Some properties, like [`center`](/goong-js-docs/style-spec/root/#center), [`zoom`](/goong-js-docs/style-spec/root/#zoom), [`pitch`](/goong-js-docs/style-spec/root/#pitch), and [`bearing`](/goong-js-docs/style-spec/root/#bearing), provide the map renderer with a set of defaults to be used when initially displaying the map.
