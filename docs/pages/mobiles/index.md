---
title: Mobile libraries
description: Learn how to integrate GoongMaps to your mobile applications.
contentType: API
language:
- JavaScript
navOrder: 2
layout: page # use the layout page
hideFeedback: true # hide feedback from page
products:
- Documentation
---

Goong use Mapbox based mobile libraries to provide map elements for your applications.
## Installation guide and documentation:
- [iOS](https://docs.mapbox.com/ios/maps/guides/install/)
- [Android](https://docs.mapbox.com/android/maps/guides/install/)
- [React Native](https://github.com/react-native-mapbox-gl/maps/)
- [Flutter](https://github.com/tobrun/flutter-mapbox-gl)
## Goong Styles
We provide following style URLs:
- Light
```html
https://tiles.goong.io/assets/goong_light_v2.json
```
- Street
```
https://tiles.goong.io/assets/goong_map_web.json
```
- Dark
```
https://tiles.goong.io/assets/goong_map_dark.json
```
- Navigation Day
```
https://tiles.goong.io/assets/navigation_day.json
```
- Navigation Night
```
https://tiles.goong.io/assets/navigation_night.json
```
## Code example
After installation, set the `styleURL` to Goong's `styleURL`
### iOS
```swift
import Mapbox
class ViewController: UIViewController {
	override func viewDidLoad() {
		 super.viewDidLoad()
		 let url = URL(string: "https://tiles.goong.io/assets/goong_map_web.json?api_key=your_maptiles_key")
		 let mapView = MGLMapView(frame: view.bounds, styleURL: url)
		 mapView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
		 mapView.setCenter(CLLocationCoordinate2D(latitude: 21, longitude: 105), zoomLevel: 9, animated: false) 
		 view.addSubview(mapView) 
	}
}
```

### Android
```kotlin
private var mapView: MapView? = null

override fun onCreate(savedInstanceState: Bundle?) {
  super.onCreate(savedInstanceState)

  Mapbox.getInstance(this, getString(R.string.mapbox_access_token))

  setContentView(R.layout.activity_main)

  mapView = findViewById(R.id.mapView)
  mapView?.onCreate(savedInstanceState)
  mapView?.getMapAsync { mapboxMap ->

  	mapboxMap.setStyle(Style.Builder().fromUri("https://tiles.goong.io/assets/goong_map_web.json?api_key=your_maptiles_key")) {
      // Map is set up and Goong style has loaded. Now you can add data or make other map adjustments
      
  	}

  }
}
```
### React Native
```javascript
export default class App extends Component {
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView styleURL='https://tiles.goong.io/assets/goong_map_web.json?api_key=your_maptiles_key' />
        </View>
      </View>
    );
  }
}
```
See [React Native MapView API](https://github.com/react-native-mapbox-gl/maps/blob/master/docs/MapView.md)

### Flutter
See [Map Styles](https://github.com/tobrun/flutter-mapbox-gl#map-styles)
