---
title: Static Map
id: StaticMap
description: Goong Static Map API.
contentType: API
order: 6
layout: page
hideFeedback: true
products:
- Documentation
prependJs:
- "import Copyable from '../../components/copyable';"
---
Get image preview with a route line from A to B  
`URL: /staticmap/route`

`Method: GET`

| Parameters     | Description                                                                                | Example                |
|----------------|--------------------------------------------------------------------------------------------|------------------------|
| `origin`       | The origin (start) coordinate string (Required)                                            | `20.981971,105.864323` |
| `destination`  | The destination coordinate string (Required).                                              | `21.03876,105.79810`   |
| `width`        | Witdh of response image. Defaults to 600(px)                                               | `600`                  |
| `height`       | Witdh of response image. Defaults to 400(px)                                               | `400`                  |
| `vehicle`      | Vehicle type. Options are `car`, `bike`, `taxi`, `truck`, `hd` (for ride hailing vehicles) | `car`                  |
| `type`         | Direction types. Options are `fastest`, `shortest`. Defaults to `fastest`                  | `fastest`              |
| `color`        | The color of route line. Defaults to `#253494`                                             | `#253494`              |


Example request
{{
  <Copyable lang="javascript">{`
  $ curl "https://rsapi.goong.io/staticmap/route?origin=20.981971,105.864323&destination=21.03876,105.79810&vehicle=car&api_key={YOUR_API_KEY}"
  `}</Copyable>
}}


Response is an `Image`  
![Goong Static Map Image](https://i.imgur.com/Uf5m99h.jpg)