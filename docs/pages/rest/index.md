---
title: Rest API
description: Goong REST API is a drop-in replacement for Google Maps API, only endpoint and API-key change necessary. Request and Response format same as Google Maps.
contentType: API
language:
- JavaScript
navOrder: 3
layout: page # use the layout page
hideFeedback: true # hide feedback from page
products:
- Documentation
prependJs:
- "import OverviewHeader from '@mapbox/dr-ui/overview-header';"
- "import Note from '@mapbox/dr-ui/note';"
- "import RelatedPage from '@mapbox/dr-ui/related-page';"
---
{{
    <OverviewHeader
        features={[
            'Directions',
            'Trip',
            'Distance Matrix',
            'Places',
            'Geocoding',
            'Static Map'
        ]}
        title=""
    />
            <Note theme="beta" title="Goong Maps APIs is a drop-in replacement for Google Maps APIs, only endpoint and API-key change necessary. Request and Response format same as Google Maps">
        <p></p>
    </Note>
}}

To access Goong API endpoints, you need a valid [API Key](https://docs.goong.io/help/#api-key), which will connect API requests to your account. You must supply a valid API Key by using the `api_key` query parameter in every request.  

Example: 
```
https://rsapi.goong.io/{endpoint}?api_key={your_api_key}
```
## Hostname

```
https://rsapi.goong.io/
```

## Pricing
Use of the REST API is billed by API requests. For more details, see the [API pricing page](https://goong.io/full-pricing).  

For more information, try our API Play Ground
{{
    <RelatedPage
    contentType="playground"
    title="Goong API Playground"
    URL="https://inspector.goong.io"
    >
    Try Goong Maps REST APIs.
    </RelatedPage>
}}