---
title: Speed Limit
id: speed-limit
description: Goong Speed Limit API.
contentType: API
order: 2
layout: page
hideFeedback: true
products:
- Documentation
prependJs:
- "import Copyable from '../../components/copyable';"
---
Get max speed at a given location.  
`URL: https://speed-api.goong.io/roadinfo`

`Method: GET`

| Param | Description | Example      |
|-------|-------------|--------------|
| `lat` | Latitude    | 10.8005397   |
| `lon` | Latitude    | 106.6393208  |

Example request

{{
    <Copyable lang="javascript">
      {`$ curl "https://speed-api.goong.io/roadinfo?lat=10.8005397&lon=106.6393208&api_key={YOUR_API_KEY}"`}
    </Copyable>
}}

Example response

`application/json`

{{
    <Copyable lang="javascript">{`
{
  "road_name": "Trường Chinh",
  "speed": 60
}
  `}</Copyable>
}}
