---
title: Javascript API
description: Using the Goong GL JS API documentation to render interactive maps from vector tiles and Goong styles.
contentType: API
navOrder: 1
order: 1
layout: page
hideFeedback: true
language:
- JavaScript
products:
- Documentation
prependJs:
- "import Quickstart from '../../components/quickstart';"
- "import Example from '../../components/example';"
- "import SimpleMapHtml from '../example/simple-map.html';"
overviewHeader:
  title: Using Goong Maps with Goong JS
  features:
    - "Custom map styles"
    - "Fast vector maps"
    - "Compatible with other Goong tools"
  ghLink: "https://github.com/goong-io/goong-js"
  image: simple-map
  # version="" version is set dynamically in page-shell.js
---



Goong JS is a JavaScript library for interactive, customizable vector maps on the web. It is part of the [Goong GL ecosystem](https://github.com/goong-io).  
To get started with Goong JS or any of our other building blocks, [get your own API key](https://account.goong.io/).

## Migration Note

We are now migrating this documentation from Mapbox to Goong. If you want to contribute feel free to open an [issue](https://github.com/goong-io/docs/issues) on GitHub or submit a [pull request](https://github.com/goong-io/docs/pulls) to propose directly your changes.


## Quickstart

{{
    <Example
        frontMatter={{
          title: 'Goong GL JS map',
          description: ''
        }}
        location={this.props.location}
        html={SimpleMapHtml}
        displaySnippet={false}
        height={300}
    />
}}


{{
<Quickstart />
}}


## Reading this documentation

This documentation is divided into several sections:

* [**Map**](https://docs.goong.io/docs/javascript/map/). The `Map` object is the map on your page. It lets you access methods and properties for interacting with the map's style and layers, respond to events, and manipulate the user's perspective with the camera.
* [**Properties and options**](https://docs.goong.io/docs/javascript/properties/). This section describes Goong GL JS's global properties and options that you might want to access while initializing your map or accessing information about its status.
* [**Markers and controls**](https://docs.goong.io/docs/javascript/markers/). This section describes the user interface elements that you can add to your map. The items in this section exist outside of the map's `canvas` element.
* [**Geography and geometry**](https://docs.goong.io/docs/javascript/geography/). This section includes general utilities and types that relate to working with and manipulating geographic information or geometries.
* [**User interaction handlers**](https://docs.goong.io/docs/javascript/handlers/). The items in this section relate to the ways in which the map responds to user input.
* [**Sources**](https://docs.goong.io/docs/javascript/sources/). This section describes the source types Goong GL JS can handle besides the ones described in the [Goong Style Specification](https://docs.goong.io/docs/style-spec/).
* [**Events**](https://docs.goong.io/docs/javascript/events/). This section describes the different types of events that Goong GL JS can raise.

Each section describes classes or objects as well as their **properties**, **parameters**, **instance members**, and associated **events**. Many sections also include inline code examples and related resources.

## Goong CSS

The CSS referenced in the Quickstart is used to style DOM elements created by Mapbox code. Without the CSS, elements like Popups and Markers won't work.

Including it with a `<link>` in the head of the document via the jsdelivr.net CDN is the simplest and easiest way to provide the CSS, but it is also bundled in the Goong module, meaning that if you have a bundler that can handle CSS, you can import the CSS from `goong-js/dist/goong-js.css`.

Note too that if the CSS isn't available by the first render, as soon as the CSS is provided, the DOM elements that depend on this CSS should recover.

## Dependencies

The dependencies for Goong GL JS (`.js` & `.css`) are distributed via [jsdelivr.net](https://cdn.jsdelivr.net/).


*Examples*

| Use Case  | `.js` | `.css` |
| :------- | :---: | :----: |
| `latest` | [https://cdn.jsdelivr.net/npm/@goongmaps/goong-js/dist/goong-js.js](https://cdn.jsdelivr.net/npm/@goongmaps/goong-js/dist/goong-js.js) | [https://cdn.jsdelivr.net/npm/@goongmaps/goong-js/dist/goong-js.css](https://cdn.jsdelivr.net/npm/@goongmaps/goong-js/dist/goong-js.css) |
