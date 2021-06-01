---
title: Geocode
id: Geocode
description: Goong Geocoding API.
contentType: specification
order: 4
layout: page
hideFeedback: true
products:
- Documentation
prependJs:
- "import Copyable from '../../components/copyable';"
---

`URL: /Geocode`

`Method: GET`

The Goong Geocoding API does three things: 
- Forward geocoding converts location text into geographic coordinates, turning `91 Trung Kính, Trung Hòa, Cầu Giấy, Hà Nội` into `21.0137443130001,105.798346108`
- Reverse geocoding turns geographic coordinates into place names, turning `21.0137443130001,105.798346108` into `91 Trung Kính, Trung Hòa, Cầu Giấy, Hà Nội`.
- Get place detail by place_id 


## Reverse Geocoding

| Parameter  | Description                        | Example                                      |
|------------|------------------------------------|----------------------------------------------|
| `latlng`   | Coordinate string                  | `20.981971,105.864323`                       |

Example request for reverse Geocoding (coordinates to address)

{{
    <Copyable lang="javascript">
      {`$ curl "https://rsapi.goong.io/Geocode?latlng=21.013715429594125,%20105.79829597455202&api_key={YOUR_API_KEY}"`}
    </Copyable>
}}
Response

`application/json`

{{
    <Copyable lang="javascript">{`
{
  "plus_code": {},
  "results": [
    {
      "address_components": [
        {
          "long_name": "Sảnh đón/trả khách",
          "short_name": "Sảnh đón/trả khách"
        },
        {
          "long_name": " Tòa nhà Bluesea",
          "short_name": " Tòa nhà Bluesea"
        },
        {
          "long_name": " 91 Trung Kính",
          "short_name": " 91 Trung Kính"
        },
        {
          "long_name": " Trung Hòa",
          "short_name": " Trung Hòa"
        },
        {
          "long_name": " Cầu Giấy",
          "short_name": " Cầu Giấy"
        },
        {
          "long_name": " Hà Nội",
          "short_name": " Hà Nội"
        }
      ],
      "formatted_address": "Sảnh đón/trả khách, Tòa nhà Bluesea, 91 Trung Kính, Trung Hòa, Cầu Giấy, Hà Nội",
      "geometry": {
        "location": {
          "lat": 21.0137210140001,
          "lng": 105.798261367
        }
      },
      "place_id": "ycg/XqGmIbYRNpFn61oPzIloTKrtDcs/jGfpESyuqFaYonQl1TEh63TyXS0HXUeN2zAqvsElmxtFcuPT6Ca4/A==.bm9ybWFs",
      "reference": "C0x/fNfYy5guordl7DF4fTotMNqwqC82TT0EKXo1olSmGFMYBQ2fOG60iRY_G8r3TTnv1RM0LdHVFW3R1B/uNw==.bm9ybWFs",
      "plus_code": {
        "compound_code": "+J4VO Trung Hòa, Cầu Giấy, Hà Nội",
        "global_code": "LOC1+J4VO"
      },
      "types": []
    },
    {
      "address_components": [
        {
          "long_name": "Công ty Cổ phần Công nghệ và Truyền thông Biển Xanh",
          "short_name": "Công ty Cổ phần Công nghệ và Truyền thông Biển Xanh"
        },
        {
          "long_name": " Tầng 6",
          "short_name": " Tầng 6"
        },
        {
          "long_name": " Tòa nhà BlueSea",
          "short_name": " Tòa nhà BlueSea"
        },
        {
          "long_name": " 91 Trung Kính",
          "short_name": " 91 Trung Kính"
        },
        {
          "long_name": " Trung Hòa",
          "short_name": " Trung Hòa"
        },
        {
          "long_name": " Cầu Giấy",
          "short_name": " Cầu Giấy"
        },
        {
          "long_name": " Hà Nội",
          "short_name": " Hà Nội"
        }
      ],
      "formatted_address": "Công ty Cổ phần Công nghệ và Truyền thông Biển Xanh, Tầng 6, Tòa nhà BlueSea, 91 Trung Kính, Trung Hòa, Cầu Giấy, Hà Nội",
      "geometry": {
        "location": {
          "lat": 21.013693996,
          "lng": 105.79826308
        }
      },
      "place_id": "lurFHQGTOE3WAR1zyIeXmSYmz/KufpERlwXh6PY8XFdCeu1a47r2pTRDo2/wEoAv7Z5lbZA20CRMqOtNMoTfYw==.bm9ybWFs",
      "reference": "pg7nOP5oMqoWSUJ9lF1baRaEw8Zw7O1GYsLuYIH/z2c6xNZpmKasJ1zmNjfwRF5w/foeeffqrVZ1wi8arP3FEQ==.bm9ybWFs",
      "plus_code": {
        "compound_code": "+2AHY Trung Hòa, Cầu Giấy, Hà Nội",
        "global_code": "LOC1+2AHY"
      },
      "types": []
    },
    {
      "address_components": [
        {
          "long_name": "Công ty CP Công nghệ bản đồ số Imap",
          "short_name": "Công ty CP Công nghệ bản đồ số Imap"
        },
        {
          "long_name": " Tầng 5",
          "short_name": " Tầng 5"
        },
        {
          "long_name": " Tòa nhà Bluesea",
          "short_name": " Tòa nhà Bluesea"
        },
        {
          "long_name": " 91 Trung Kính",
          "short_name": " 91 Trung Kính"
        },
        {
          "long_name": " Trung Hòa",
          "short_name": " Trung Hòa"
        },
        {
          "long_name": " Cầu Giấy",
          "short_name": " Cầu Giấy"
        },
        {
          "long_name": " Hà Nội",
          "short_name": " Hà Nội"
        }
      ],
      "formatted_address": "Công ty CP Công nghệ bản đồ số Imap, Tầng 5, Tòa nhà Bluesea, 91 Trung Kính, Trung Hòa, Cầu Giấy, Hà Nội",
      "geometry": {
        "location": {
          "lat": 21.0136939070001,
          "lng": 105.798255672
        }
      },
      "place_id": "7RjkxCbg/ilVed0U8BDQvPbBepxqvUw5Eu_ESr_S_kC/PNKRxe5CA6UFaagaro5NBc5TLLA_V21uDgIgfB0Byw==.bm9ybWFs",
      "reference": "1hSB6a/RazY5EXcj8Hn_SMfsVr0yl0HjGfkUmqRbzsi40xXZNO__q0GBk779xOpV0l2dSklmjEWpUnWQSujmLw==.bm9ybWFs",
      "plus_code": {
        "compound_code": "+J4VP Trung Hòa, Cầu Giấy, Hà Nội",
        "global_code": "LOC1+J4VP"
      },
      "types": []
    },
    {
      "address_components": [
        {
          "long_name": "91 Trung Kính",
          "short_name": "91 Trung Kính"
        },
        {
          "long_name": " Trung Hòa",
          "short_name": " Trung Hòa"
        },
        {
          "long_name": " Cầu Giấy",
          "short_name": " Cầu Giấy"
        },
        {
          "long_name": " Hà Nội",
          "short_name": " Hà Nội"
        }
      ],
      "formatted_address": "91 Trung Kính, Trung Hòa, Cầu Giấy, Hà Nội",
      "geometry": {
        "location": {
          "lat": 21.0137625240001,
          "lng": 105.798267363
        }
      },
      "place_id": "Hobn8WqBW6rsKtKq2PDrVKp4BJNRtiILxTQbB__muXgRB3v8GRDTfkp_6lc4cbLw/5PUgWrMDrSI/xlqDBt5XA==.bm9ybWFs",
      "reference": "o/QzXNc_eBKsOWX6kdbOcABtO4zUQz0lzdK1jpi0R__J2vFKeRAM2VSYo38AfaShP/7qpUhrwc0l/t/AIYwRnQ==.bm9ybWFs",
      "plus_code": {
        "compound_code": "+6DW1G Trung Hòa, Cầu Giấy, Hà Nội",
        "global_code": "LOC1+6DW1G"
      },
      "types": []
    },
    {
      "address_components": [
        {
          "long_name": "Phở Lý Quốc Sư",
          "short_name": "Phở Lý Quốc Sư"
        },
        {
          "long_name": " 89 Trung Kính",
          "short_name": " 89 Trung Kính"
        },
        {
          "long_name": " Trung Hòa",
          "short_name": " Trung Hòa"
        },
        {
          "long_name": " Cầu Giấy",
          "short_name": " Cầu Giấy"
        },
        {
          "long_name": " Hà Nội",
          "short_name": " Hà Nội"
        }
      ],
      "formatted_address": "Phở Lý Quốc Sư, 89 Trung Kính, Trung Hòa, Cầu Giấy, Hà Nội",
      "geometry": {
        "location": {
          "lat": 21.0137443130001,
          "lng": 105.798346108
        }
      },
      "place_id": "CRdosr1ubzG5V1sgzSQZXTwQhIluaaL22NnLu8oexUab2u9UvIIYbw0HtK2d9w9__8oQ4JGNBpBS/zQm2vueqA==.bm9ybWFs",
      "reference": "I/MQNwiLvyD6DU7dvCluUAxXv6gQw1ESrk7gWPGVSQ1xFXJLQaW8us3HMUTTU7VJfUEQvw2OXOzZsUI4hHSEhA==.bm9ybWFs",
      "plus_code": {
        "compound_code": "+J4VT Trung Hòa, Cầu Giấy, Hà Nội",
        "global_code": "LOC1+J4VT"
      },
      "types": []
    }
  ],
  "status": "OK"
}
`}</Copyable>
}}


## Forward Geocoding
| Parameter  | Description                        | Example                                      |
|------------|------------------------------------|----------------------------------------------|
| `address`  | Address string you are looking for | `91 Trung Kinh, Trung Hoa, Cau Giay, Ha Noi` |

Example request for forward Geocoding (full address to coordinates)

{{
    <Copyable lang="javascript">
      {`$ curl "https://rsapi.goong.io/geocode?address=91%20Trung%20K%C3%ADnh,%20Trung%20H%C3%B2a,%20C%E1%BA%A7u%20Gi%E1%BA%A5y,%20H%C3%A0%20N%E1%BB%99i&api_key={YOUR_API_KEY}"`}
    </Copyable>
}}
Response

`application/json`

{{
    <Copyable lang="javascript">{`
{
  "plus_code": {},
  "results": [
    {
      "address_components": [
        {
          "long_name": "91 Trung Kính",
          "short_name": "91 Trung Kính"
        },
        {
          "long_name": " Trung Hòa",
          "short_name": " Trung Hòa"
        },
        {
          "long_name": " Cầu Giấy",
          "short_name": " Cầu Giấy"
        },
        {
          "long_name": " Hà Nội",
          "short_name": " Hà Nội"
        }
      ],
      "formatted_address": "91 Trung Kính, Trung Hòa, Cầu Giấy, Hà Nội",
      "geometry": {
        "location": {
          "lat": 21.0137625240001,
          "lng": 105.798267363
        }
      },
      "place_id": "Hobn8WqBW6rsKtKq2PDrVKp4BJNRtiILxTQbB__muXgRB3v8GRDTfkp_6lc4cbLw/5PUgWrMDrSI/xlqDBt5XA==.ZXhwYW5kMA==",
      "reference": "o/QzXNc_eBKsOWX6kdbOcABtO4zUQz0lzdK1jpi0R__J2vFKeRAM2VSYo38AfaShP/7qpUhrwc0l/t/AIYwRnQ==.ZXhwYW5kMA==",
      "plus_code": {
        "compound_code": "+6DW1G Trung Hòa, Cầu Giấy, Hà Nội",
        "global_code": "LOC1+6DW1G"
      },
      "types": []
    },
    {
      "address_components": [
        {
          "long_name": "91 Ngõ 43 Trung Kính",
          "short_name": "91 Ngõ 43 Trung Kính"
        },
        {
          "long_name": " Trung Hòa",
          "short_name": " Trung Hòa"
        },
        {
          "long_name": " Cầu Giấy",
          "short_name": " Cầu Giấy"
        },
        {
          "long_name": " Hà Nội",
          "short_name": " Hà Nội"
        }
      ],
      "formatted_address": "91 Ngõ 43 Trung Kính, Trung Hòa, Cầu Giấy, Hà Nội",
      "geometry": {
        "location": {
          "lat": 21.01178451,
          "lng": 105.796537474
        }
      },
      "place_id": "ytdKslLHBd1_mSnLu_bQHGu1yZyLeBt9haGgyFDN1EIOy7I9uEQyTmRkyNZL3BRpT_Knj31YK/Irv3KkEIIZqw==.ZXhwYW5kMg==",
      "reference": "nP7fBjweFzWzkU8gq/ki_xEAF3fpVoZ3aQcfXx4ZRHX7QaQPNBPpNToMKx1KZw09gWUhpnSdXJSLowB4qFlCMg==.ZXhwYW5kMg==",
      "plus_code": {
        "compound_code": "+63G73 Trung Hòa, Cầu Giấy, Hà Nội",
        "global_code": "LOC1+63G73"
      },
      "types": []
    },
    {
      "address_components": [
        {
          "long_name": "Trung Kính",
          "short_name": "Trung Kính"
        },
        {
          "long_name": " Trung Hòa",
          "short_name": " Trung Hòa"
        },
        {
          "long_name": " Cầu Giấy",
          "short_name": " Cầu Giấy"
        },
        {
          "long_name": " Hà Nội",
          "short_name": " Hà Nội"
        }
      ],
      "formatted_address": "Trung Kính, Trung Hòa, Cầu Giấy, Hà Nội",
      "geometry": {
        "location": {
          "lat": 21.01200742,
          "lng": 105.798556266
        }
      },
      "place_id": "4PhN5GTxC3Txq1qu_KZ_Wb0/fTn7CqblD5melLEhPCrWDoxqkBxTsLTWmYCJnM8gAREUdOKZVNHyHTYAelWOZw==.ZXhwYW5kMA==",
      "reference": "Ltd3mU697w2W10zYKNvWxB6aK8CT45xU8y2B7hzpgt8M0an4e4G3tz7WFP27QH56DCOVFFR1IAT0McC5hJtSmA==.ZXhwYW5kMA==",
      "plus_code": {
        "compound_code": "+ALSA Trung Hòa, Cầu Giấy, Hà Nội",
        "global_code": "LOC1+ALSA"
      },
      "types": []
    },
    {
      "address_components": [
        {
          "long_name": "95 Trung Kính",
          "short_name": "95 Trung Kính"
        },
        {
          "long_name": " Trung Hòa",
          "short_name": " Trung Hòa"
        },
        {
          "long_name": " Cầu Giấy",
          "short_name": " Cầu Giấy"
        },
        {
          "long_name": " Hà Nội",
          "short_name": " Hà Nội"
        }
      ],
      "formatted_address": "95 Trung Kính, Trung Hòa, Cầu Giấy, Hà Nội",
      "geometry": {
        "location": {
          "lat": 21.0138168300001,
          "lng": 105.79788971
        }
      },
      "place_id": "mUuwMwTPf5/1WFznDr94rtLvQffNhj1NzWQqDJqgsdUfCqTZdUcHTTav64BxPOC6dSdgZ9WUmwARwQlhmYonvA==.ZXhwYW5kMA==",
      "reference": "lPHbKnLx64d2Ikp35RrFcdRphjayJn2rjapjNhjPuBmPxB9GzirgM6NT0OH65gG2Mf4qGswZXQ8d6U4XBfltjQ==.ZXhwYW5kMA==",
      "plus_code": {
        "compound_code": "+6DW1M Trung Hòa, Cầu Giấy, Hà Nội",
        "global_code": "LOC1+6DW1M"
      },
      "types": []
    },
    {
      "address_components": [
        {
          "long_name": "93 Trung Kính",
          "short_name": "93 Trung Kính"
        },
        {
          "long_name": " Trung Hòa",
          "short_name": " Trung Hòa"
        },
        {
          "long_name": " Cầu Giấy",
          "short_name": " Cầu Giấy"
        },
        {
          "long_name": " Hà Nội",
          "short_name": " Hà Nội"
        }
      ],
      "formatted_address": "93 Trung Kính, Trung Hòa, Cầu Giấy, Hà Nội",
      "geometry": {
        "location": {
          "lat": 21.0138434450029,
          "lng": 105.798052001
        }
      },
      "place_id": "xFchTd18UNmq7/rWipBrI6LtqEcDdReZ8cGV3mxeK4yxmmL7hZat/i8cLBdGhdaeNYFQLk4H5AuP2ntIHfS7EQ==.ZXhwYW5kMA==",
      "reference": "dMG3Lmo6Rux8NsEd9lwoDGUOH22aZbMdzDiMy1RhS73mM/uA0rZsX2M0y0Wm990nx4PGw1jd54YkUeqLzySwaQ==.ZXhwYW5kMA==",
      "plus_code": {
        "compound_code": "+6DW1I Trung Hòa, Cầu Giấy, Hà Nội",
        "global_code": "LOC1+6DW1I"
      },
      "types": []
    }
  ],
  "status": "OK"
}
`}</Copyable>
}}
## Get place detail
| Parameter  | Description                        | Example                                      |
|------------|------------------------------------|----------------------------------------------|
| `place_id` | Place ID string                    | `uq58Yr/RA0wuHVtqzDczw7bbR4Gs7gs2b5DRZtogUr2bvWTaN5Vb2qd/atCZ1FoPg7cdIqFo9E_2TxQzrc20hw==.ZXhwYW5kMA==` |

Example:

{{
    <Copyable lang="javascript">
      {`$ curl "https://rsapi.goong.io/geocode?place_id=uq58Yr/RA0wuHVtqzDczw7bbR4Gs7gs2b5DRZtogUr2bvWTaN5Vb2qd/atCZ1FoPg7cdIqFo9E_2TxQzrc20hw==.ZXhwYW5kMA==&api_key={YOUR_API_KEY}"`}
    </Copyable>
}}
Response
`application/json`
{{
    <Copyable lang="javascript">{`
{
  "plus_code": {
    
  },
  "results": [
    {
      "address_components": [
        {
          "long_name": "91 Trung Kính",
          "short_name": "91 Trung Kính"
        },
        {
          "long_name": " Phường Trung Hòa",
          "short_name": " Phường Trung Hòa"
        },
        {
          "long_name": " Quận Cầu Giấy",
          "short_name": " Quận Cầu Giấy"
        },
        {
          "long_name": " Thành phố Hà Nội",
          "short_name": " Thành phố Hà Nội"
        }
      ],
      "formatted_address": "91 Trung Kính, Phường Trung Hòa, Quận Cầu Giấy, Thành phố Hà Nội",
      "geometry": {
        "location": {
          "lat": 21.0137625240001,
          "lng": 105.798267363
        }
      },
      "place_id": "uq58Yr/RA0wuHVtqzDczw7bbR4Gs7gs2b5DRZtogUr2bvWTaN5Vb2qd/atCZ1FoPg7cdIqFo9E_2TxQzrc20hw==.ZXhwYW5kMA==",
      "reference": "Hobn8WqBW6rsKtKq2PDrVKp4BJNRtiILxTQbB__muXgRB3v8GRDTfkp_6lc4cbLw/5PUgWrMDrSI/xlqDBt5XA==.ZXhwYW5kMA==",
      "plus_code": {
        "compound_code": "+6DW1G Trung Hòa, Cầu Giấy, Hà Nội",
        "global_code": "LOC1+6DW1G"
      },
      "types": [
        
      ]
    }
  ],
  "status": "OK"
}
`}</Copyable>
}}