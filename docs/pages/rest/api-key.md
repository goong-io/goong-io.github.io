---
title: API Key
id: api_key
description: Goong API Key.
contentType: API
order: 1
layout: page
hideFeedback: true
products:
- Documentation
---
To use any of Goong APIs, SDKs, you'll need API keys.  
Goong uses API key to associate API requests with your account. You can find your keys, create new ones, or delete existing ones on your [Account Page](https://account.goong.io/keys).  

## How to use Goong API Key

Goong provides two types of API Keys:
- **Map tiles key for using of Map view**
- **REST API Key for using of all REST APIs**

Screenshot:  
![Create Goong API KEY](https://docs.goong.io/assets/goong_create_api_key-500.png)

For example: If you want to display a mapview with [goong-js](https://docs.goong.io/javascript), you should create a Map tiles key.  
Then provide your key like below:
```javascript
goongjs.accessToken = 'your maptiles key here';
    var map = new goongjs.Map({
    container: 'map',
    style: 'https://tiles.goong.io/assets/goong_map_web.json', // stylesheet location
    center: [105.83991, 21.02800], // starting position [lng, lat]
    zoom: 9 // starting zoom
});
```
Or if you want to use Geocoding API you should create an API KEY.  
Geocoding example request:
```shell
$ curl "https://rsapi.goong.io/Geocode?latlng=21.013715429594125,%20105.79829597455202&api_key={YOUR_API_KEY}"
```

## URL restrictions
You can make your API Keys more secure by adding URL restrictions from the [account dashboard](https://account.goong.io/keys). When you add URL restrictions to a key, that key will only work for requests to billable Goong services that originate from the URLs you specify. Requests from unauthorized URLs will return status code `403: Forbidden`.

API Keys without restrictions will work for requests originating from any URL.

Examples:
```
http*://example.com/*
http*://*.example.com/*
http*://subdomain.example.com/*
```

## Usage statistics
You can see the use statistics for all your tokens, for any specified period, on your Goong account [Statistics](https://account.goong.io/statistics) page.


## Rate limit
***By default, an account has a free amount of $100 each month, each API Key has a rate limit of 1000 requests per day, 5 requests per second per IP address.***  
If you exceed this rate limit, your request will be throttled and you will receive a `HTTP 429 Too Many Requests` response from the API.  
If you need a rate limit that is higher than the default, see our [Pricing Plans](https://goong.io/payment) or [contact us](mailto:support@goong.io)