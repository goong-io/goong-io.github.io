---
title: Distance Matrix
id: DistanceMatrix
description: Get matrix of travel distances from multiple origins to multiple destinations  
contentType: specification
order: 2
layout: page
hideFeedback: true
products:
- Goong Rest API
prependJs:
- "import Copyable from '../../components/copyable';"
---
Get matrix of travel distances from multiple origins to multiple destinations. The API returns distances for the recommended route between each start and end pair.   
  
`URL: /DistanceMatrix`

`Method: GET`

| Param          | Description                                                                                | Example                                                                    |
|----------------|--------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| `origins`      | The origin (start) coordinate string (Required)                                            | `20.981971,105.864323`                                                     |
| `destinations` | The destination coordinate string (Required)                                               | `21.031011,105.783206&#124;21.022328,105.790480&#124;21.016665,105.788774` |
| `vehicle`      | Vehicle type. Options are `car`, `bike`, `taxi`, `truck`, `hd` (for ride hailing vehicles) | `car`                                                                      |

Example request
{{
    <Copyable lang="javascript">
      {`$ curl "https://rsapi.goong.io/DistanceMatrix?origins=20.981971,105.864323&destinations=21.031011,105.783206%7C21.022328,105.790480%7C21.016665,105.788774&vehicle=car&api_key={YOUR_API_KEY}"`}
    </Copyable>
}}

Response

`application/json`

{{
    <Copyable lang="javascript">{`
{
  "rows": [
    {
      "elements": [
        {
          "status": "OK",
          "duration": {
            "text": "33 phút",
            "value": 1983
          },
          "distance": {
            "text": "16 km",
            "value": 15962
          }
        },
        {
          "status": "OK",
          "duration": {
            "text": "32 phút",
            "value": 1914
          },
          "distance": {
            "text": "15 km",
            "value": 14627
          }
        },
        {
          "status": "OK",
          "duration": {
            "text": "29 phút",
            "value": 1749
          },
          "distance": {
            "text": "14 km",
            "value": 13556
          }
        }
      ]
    }
  ]
} 
    `}</Copyable>
}}
