---
title: Directions
id: directions
description: Direction from A to B.
contentType: specification
order: 1
layout: page
hideFeedback: true
products:
- Documentation
prependJs:
- "import Copyable from '../../components/copyable';"
---
Get Direction from A to B.  

`URL: /Direction`

`Method: GET`

| Param          | Description                                                                                | Example                |
|----------------|--------------------------------------------------------------------------------------------|------------------------|
| `origin`       | The origin (start) coordinate string (Required)                                            | `20.981971,105.864323` |
| `destination`  | The destination coordinate string (Required)                                               | `21.03876,105.79810`   |
| `alternatives` | Boolean, if `true`, Directions service may return several routes                           | `true`                 |
| `vehicle`      | Vehicle type. Options are `car`, `bike`, `taxi`, `truck`, `hd` (for ride hailing vehicles) | `car`                  |

Example request

{{
    <Copyable lang="javascript">
      {`$ curl "https://rsapi.goong.io/Direction?origin=21.046623224000029,105.790168203000060&destination=21.046666732000062,105.790169569000060&vehicle=car&api_key={YOUR_API_KEY}"`}
    </Copyable>
}}

Example response

`application/json`

{{
    <Copyable lang="javascript">{`
{
  "geocoded_waypoints": [],
  "routes": [
    {
      "bounds": {},
      "legs": [
        {
          "distance": {
            "text": "5 m",
            "value": 5
          },
          "duration": {
            "text": "1 giây",
            "value": 1
          },
          "steps": []
        }
      ],
      "overview_polyline": {
        "points": "mtm_C{cudSG@"
      },
      "warnings": [],
      "waypoint_order": []
    }
  ]
}
  `}</Copyable>
}}