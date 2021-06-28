---
title: Places
id: places
description: Goong Places API.
contentType: API
order: 4
layout: page
hideFeedback: true
products:
- Documentation
prependJs:
- "import Copyable from '../../components/copyable';"
---

Goong Place API does:
- Return predictions according to search keyword
- Return detail of a place by it's `place_id`

## Places Search by keyword with autocomplete

URL: `/Place/AutoComplete`

Method: `GET`

| Param          | Description                                                                                                                                   | Example                                |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------|
| `input`        | Your search keyword (Required)                                                                                                                | `ho hoan kiem`                         |
| `location`     | Coordinates for location biased search                                                                                                        | `20.981971,105.864323`                 |
| `limit`        | Limit number of results. Defaults to `10`                                                                                                     | `20`                                   |
| `radius`       | Limits Search to a radius from specified location (in km). Defaults to `50`                                                                   | `2000`                                 |
| `sessiontoken` | Your generated token to group multiple Autocomplete requests in 1 session. We recommend using a version 4 UUID for session tokens. (Optional) | `a68dfa01-a5aa-47d1-aaa7-a3184896b283` |

Example request
{{
  <Copyable lang="javascript">{`
  $ curl "https://rsapi.goong.io/Place/AutoComplete?api_key={YOUR_API_KEY}&location=21.013715429594125,%20105.79829597455202&input=91%20Trung%20Kinh"  
  `}</Copyable>
}}

Response

`application/json`

{{
  <Copyable lang="javascript">{`
{
  "predictions": [
    {
      "description": "91 Trung Kính, Trung Hòa, Cầu Giấy, Hà Nội",
      "matched_substrings": [],
      "place_id": "Hobn8WqBW6rsKtKq2PDrVKp4BJNRtiILxTQbB__muXgRB3v8GRDTfkp_6lc4cbLw/5PUgWrMDrSI/xlqDBt5XA==.ZXhwYW5kMA==",
      "reference": "o/QzXNc_eBKsOWX6kdbOcABtO4zUQz0lzdK1jpi0R__J2vFKeRAM2VSYo38AfaShP/7qpUhrwc0l/t/AIYwRnQ==.ZXhwYW5kMA==",
      "structured_formatting": {
        "main_text": "91 Trung Kính",
        "secondary_text": "Trung Hòa, Cầu Giấy, Hà Nội"
      },
      "terms": [],
      "has_children": false,
      "display_type": "expand0",
      "score": 633.7587,
      "plus_code": {
        "compound_code": "+6DW1G Trung Hòa, Cầu Giấy, Hà Nội",
        "global_code": "LOC1+6DW1G"
      }
    },
    {
      "description": "43/91 Trung Kính, Trung Hòa, Cầu Giấy, Hà Nội",
      "matched_substrings": [],
      "place_id": "ytdKslLHBd1_mSnLu_bQHGu1yZyLeBt9haGgyFDN1EIOy7I9uEQyTmRkyNZL3BRpT_Knj31YK/Irv3KkEIIZqw==.ZXhwYW5kMA==",
      "reference": "nP7fBjweFzWzkU8gq/ki_xEAF3fpVoZ3aQcfXx4ZRHX7QaQPNBPpNToMKx1KZw09gWUhpnSdXJSLowB4qFlCMg==.ZXhwYW5kMA==",
      "structured_formatting": {
        "main_text": "43/91 Trung Kính",
        "secondary_text": "Trung Hòa, Cầu Giấy, Hà Nội"
      },
      "terms": [],
      "has_children": false,
      "display_type": "expand0",
      "score": 597.5509,
      "plus_code": {
        "compound_code": "+63G73 Trung Hòa, Cầu Giấy, Hà Nội",
        "global_code": "LOC1+63G73"
      }
    },
    {
      "description": "95 Trung Kính, Trung Hòa, Cầu Giấy, Hà Nội",
      "matched_substrings": [],
      "place_id": "mUuwMwTPf5/1WFznDr94rtLvQffNhj1NzWQqDJqgsdUfCqTZdUcHTTav64BxPOC6dSdgZ9WUmwARwQlhmYonvA==.ZXhwYW5kMA==",
      "reference": "lPHbKnLx64d2Ikp35RrFcdRphjayJn2rjapjNhjPuBmPxB9GzirgM6NT0OH65gG2Mf4qGswZXQ8d6U4XBfltjQ==.ZXhwYW5kMA==",
      "structured_formatting": {
        "main_text": "95 Trung Kính",
        "secondary_text": "Trung Hòa, Cầu Giấy, Hà Nội"
      },
      "terms": [],
      "has_children": false,
      "display_type": "expand0",
      "score": 358.45456,
      "plus_code": {
        "compound_code": "+6DW1M Trung Hòa, Cầu Giấy, Hà Nội",
        "global_code": "LOC1+6DW1M"
      }
    },
    {
      "description": "93 Trung Kính, Trung Hòa, Cầu Giấy, Hà Nội",
      "matched_substrings": [],
      "place_id": "xFchTd18UNmq7/rWipBrI6LtqEcDdReZ8cGV3mxeK4yxmmL7hZat/i8cLBdGhdaeNYFQLk4H5AuP2ntIHfS7EQ==.ZXhwYW5kMA==",
      "reference": "dMG3Lmo6Rux8NsEd9lwoDGUOH22aZbMdzDiMy1RhS73mM/uA0rZsX2M0y0Wm990nx4PGw1jd54YkUeqLzySwaQ==.ZXhwYW5kMA==",
      "structured_formatting": {
        "main_text": "93 Trung Kính",
        "secondary_text": "Trung Hòa, Cầu Giấy, Hà Nội"
      },
      "terms": [],
      "has_children": false,
      "display_type": "expand0",
      "score": 358.1594,
      "plus_code": {
        "compound_code": "+6DW1I Trung Hòa, Cầu Giấy, Hà Nội",
        "global_code": "LOC1+6DW1I"
      }
    },
    {
      "description": "89 Trung Kính, Trung Hòa, Cầu Giấy, Hà Nội",
      "matched_substrings": [],
      "place_id": "OTzyxbl3DUoqV90GZW8D_2FCVMaEizDWVmAhzTc2d8KmYL/h2cPpfE97BmSabHzliRz3GSgjXWVRxI0bZMxqew==.ZXhwYW5kMA==",
      "reference": "7ESn5kbjYSJJfOstrAkpIRG26bEQi1atPuZKWKyymY9Q7raTcScHyAFeWejvoiu_aa46E/IYxOvOPsmkZgYfOQ==.ZXhwYW5kMA==",
      "structured_formatting": {
        "main_text": "89 Trung Kính",
        "secondary_text": "Trung Hòa, Cầu Giấy, Hà Nội"
      },
      "terms": [],
      "has_children": false,
      "display_type": "expand0",
      "score": 358.14783,
      "plus_code": {
        "compound_code": "+6DW1E Trung Hòa, Cầu Giấy, Hà Nội",
        "global_code": "LOC1+6DW1E"
      }
    }
  ],
  "executed_time": 61,
  "executed_time_all": 63,
  "status": "OK"
}
`}</Copyable>
}}

## Get place detail by Id

`URL: /Place/Detail`

`Method: GET`

| Param      | Description     | Example                            |
|------------|-----------------|------------------------------------|
| `place_id` | The id of place | `0WmA4vbeody2J9AEvVM9YE3ZN85z7Mrw` |

Example request

{{
  <Copyable lang="javascript">{`
  $curl "https://rsapi.goong.io/Place/Detail?place_id=Hobn8WqBW6rsKtKq2PDrVKp4BJNRtiILxTQbB__muXgRB3v8GRDTfkp_6lc4cbLw%2F5PUgWrMDrSI%2FxlqDBt5XA%3D%3D.ZXhwYW5kMA%3D%3D&api_key={YOUR_API_KEY}"
  `}</Copyable>
}}

Response

`application/json`

{{
  <Copyable lang="javascript">{`
{
  "result": {
    "place_id": "Hobn8WqBW6rsKtKq2PDrVKp4BJNRtiILxTQbB__muXgRB3v8GRDTfkp_6lc4cbLw/5PUgWrMDrSI/xlqDBt5XA==.ZXhwYW5kMA==",
    "formatted_address": "Phường Trung Hòa, Quận Cầu Giấy, Thành phố Hà Nội",
    "geometry": {
      "location": {
        "lat": 21.0137625240001,
        "lng": 105.798267363
      }
    },
    "name": "91 Trung Kính"
  },
  "status": "OK"
}
  `}</Copyable>
}}