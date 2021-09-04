---
title: Help
description: Find Goong-related terms and their definitions.
contentType: example
language:
- JavaScript
navOrder: 7
layout: page # use the layout page
hideFeedback: true # hide feedback from page
products:
- Documentation
prependJs:
- "import Help from '../../components/help-page';"
---


{{<Help />}}

## Mapload
A map load is counted when a map is initialized on a webpage. User interaction with a map after it has loaded (eg. panning the map, zooming the map) does not have any impact on usage limits.  

## Autocomplete Session
An Autocomplete session includes some Autocomplete requests (to retrieve suggestions on a place as the user types), and at most one Places Details request (to retrieve details about the place selected by the user). The same session token is passed to the Autocomplete and the next Place Detail request. A session starts with the first Autocomplete request (which typically happens when the user starts typing). A Places Details request happens when the user has selected one of the Autocomplete suggestions. If a user does not select a suggestion, means no Places Details request.

## Session Tokens
Place Autocomplete uses session tokens to group the query and selection phases of a user autocomplete search into a discrete session for billing purpose. Be sure you are using unique session token for each new session, using the same token for more than one session will result in each request being billed individually.  
We recommend using a [version 4 UUID](https://tools.ietf.org/html/rfc4122) for session tokens. (Optional)
## API Key
To use any of Goong APIs, SDKs, you'll need API keys.  
Goong uses API key to associate API requests with your account. You can find your keys, create new ones, or delete existing ones on your [Account Page](https://account.goong.io/keys).  

### How to use Goong API Key

Goong provides two types of API Keys:
- **Map tiles key for using of Map view**
- **REST API Key for using of all REST APIs**

Screenshot:  
![Create Goong API KEY](https://docs.goong.io/assets/goong_create_api_key.png)

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

### URL restrictions
You can make your API Keys more secure by adding URL restrictions from the [account dashboard](https://account.goong.io/keys). When you add URL restrictions to a key, that key will only work for requests to billable Goong services that originate from the URLs you specify. Requests from unauthorized URLs will return status code `403: Forbidden`.

API Keys without restrictions will work for requests originating from any URL.

Examples:
```
http*://example.com/*
http*://*.example.com/*
http*://subdomain.example.com/*
```

### Usage statistics
You can see the use statistics for all your tokens, for any specified period, on your Goong account [Statistics](https://account.goong.io/statistics) page.


### Rate limit
***By default, an account has a free amount of $100 each month***  
- REST API Key limit is 1000 requests per day, 5 requests per second per IP address, 
- Maptiles Key limit is 30000 request per month, 500 requests per second per IP address.

If you exceed this rate limit, your request will be throttled and you will receive a `HTTP 429 Too Many Requests` response from the API.  
If you need a rate limit that is higher than the default, see our [Pricing Plans](https://goong.io/payment) or [contact us](mailto:support@goong.io)
