(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{H6nf:function(e,t,a){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(a("q1tI")),s=(a("yr+R"),a("cQZ0"),o(a("1wO5")));function o(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=d(e);if(t){var l=d(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return i(this,a)}}function i(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f={title:"Mobile libraries",description:"Learn how to integrate GoongMaps to your mobile applications.",contentType:"API",language:["JavaScript"],navOrder:2,layout:"page",hideFeedback:!0,products:["Documentation"],headings:[{text:"Installation guide and documentation:",slug:"installation-guide-and-documentation",level:2},{text:"Mapbox requires a secret token to download their SDKs, you can use this token below or create your own.",slug:"mapbox-requires-a-secret-token-to-download-their-sdks-you-can-use-this-token-below-or-create-your-own",level:3},{text:"Or use .netrc file below",slug:"or-use-netrc-file-below",level:3},{text:"Installation guide",slug:"installation-guide",level:3},{text:"Goong Styles",slug:"goong-styles",level:2},{text:"Code example",slug:"code-example",level:2},{text:"iOS",slug:"ios",level:3},{text:"Android",slug:"android",level:3},{text:"React Native",slug:"react-native",level:3},{text:"Flutter",slug:"flutter",level:3}]},E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(i,e);var t,a,n,o=p(i);function i(){return u(this,i),o.apply(this,arguments)}return t=i,(a=[{key:"render",value:function(){var e=this.props;return l.default.createElement(s.default,c({},e,{frontMatter:f}),l.default.createElement("div",null,l.default.createElement("p",null,"Goong use Mapbox based mobile libraries to provide map elements for your applications."),l.default.createElement("h2",{id:"installation-guide-and-documentation",className:"anchor"},l.default.createElement("a",{href:"#installation-guide-and-documentation",className:"unprose color-blue-on-hover"},"Installation guide and documentation:")),l.default.createElement("h3",{id:"mapbox-requires-a-secret-token-to-download-their-sdks-you-can-use-this-token-below-or-create-your-own",className:"anchor"},l.default.createElement("a",{href:"#mapbox-requires-a-secret-token-to-download-their-sdks-you-can-use-this-token-below-or-create-your-own",className:"unprose color-blue-on-hover"},"Mapbox requires a secret token to download their SDKs, you can use this token below or create your own.")),l.default.createElement("p",null,l.default.createElement("code",null,"sk.eyJ1IjoiaWJpbmgiLCJhIjoiY2t2YWZpdXdmMzd4cDMxbHBsNmU4NmNsMyJ9.WT8r42HijaCYAeUPq3xCxA")),l.default.createElement("h3",{id:"or-use-netrc-file-below",className:"anchor"},l.default.createElement("a",{href:"#or-use-netrc-file-below",className:"unprose color-blue-on-hover"},"Or use ",l.default.createElement("code",null,".netrc")," file below")),l.default.createElement("pre",null,l.default.createElement("code",null,"machine api.mapbox.com","\n","login mapbox","\n","password sk.eyJ1IjoiaWJpbmgiLCJhIjoiY2t2YWZpdXdmMzd4cDMxbHBsNmU4NmNsMyJ9.WT8r42HijaCYAeUPq3xCxA","\n")),l.default.createElement("h3",{id:"installation-guide",className:"anchor"},l.default.createElement("a",{href:"#installation-guide",className:"unprose color-blue-on-hover"},"Installation guide")),l.default.createElement("ul",null,l.default.createElement("li",null,l.default.createElement("a",{href:"https://docs.mapbox.com/ios/maps/guides/install/"},"iOS")),l.default.createElement("li",null,l.default.createElement("a",{href:"https://docs.mapbox.com/android/maps/guides/install/"},"Android")),l.default.createElement("li",null,l.default.createElement("a",{href:"https://github.com/react-native-mapbox-gl/maps/"},"React Native")),l.default.createElement("li",null,l.default.createElement("a",{href:"https://github.com/tobrun/flutter-mapbox-gl"},"Flutter"))),l.default.createElement("h2",{id:"goong-styles",className:"anchor"},l.default.createElement("a",{href:"#goong-styles",className:"unprose color-blue-on-hover"},"Goong Styles")),l.default.createElement("p",null,"We provide following style URLs:"),l.default.createElement("ul",null,l.default.createElement("li",null,"Light")),l.default.createElement("pre",{className:"language-html"},l.default.createElement("code",{className:"language-html"},"https://tiles.goong.io/assets/goong_light_v2.json","\n")),l.default.createElement("ul",null,l.default.createElement("li",null,"Street")),l.default.createElement("pre",null,l.default.createElement("code",null,"https://tiles.goong.io/assets/goong_map_web.json","\n")),l.default.createElement("ul",null,l.default.createElement("li",null,"Dark")),l.default.createElement("pre",null,l.default.createElement("code",null,"https://tiles.goong.io/assets/goong_map_dark.json","\n")),l.default.createElement("ul",null,l.default.createElement("li",null,"Navigation Day")),l.default.createElement("pre",null,l.default.createElement("code",null,"https://tiles.goong.io/assets/navigation_day.json","\n")),l.default.createElement("ul",null,l.default.createElement("li",null,"Navigation Night")),l.default.createElement("pre",null,l.default.createElement("code",null,"https://tiles.goong.io/assets/navigation_night.json","\n")),l.default.createElement("h2",{id:"code-example",className:"anchor"},l.default.createElement("a",{href:"#code-example",className:"unprose color-blue-on-hover"},"Code example")),l.default.createElement("p",null,"After installation, set the ",l.default.createElement("code",null,"styleURL")," to Goong's ",l.default.createElement("code",null,"styleURL")),l.default.createElement("h3",{id:"ios",className:"anchor"},l.default.createElement("a",{href:"#ios",className:"unprose color-blue-on-hover"},"iOS")),l.default.createElement("pre",{className:"language-swift"},l.default.createElement("code",{className:"language-swift"},l.default.createElement("span",{className:"token keyword"},"import")," ",l.default.createElement("span",{className:"token builtin"},"Mapbox"),"\n",l.default.createElement("span",{className:"token keyword"},"class")," ",l.default.createElement("span",{className:"token class-name"},"ViewController"),l.default.createElement("span",{className:"token punctuation"},":")," ",l.default.createElement("span",{className:"token builtin"},"UIViewController")," ",l.default.createElement("span",{className:"token punctuation"},"{"),"\n","\t",l.default.createElement("span",{className:"token keyword"},"override")," ",l.default.createElement("span",{className:"token keyword"},"func")," ",l.default.createElement("span",{className:"token function"},"viewDidLoad"),l.default.createElement("span",{className:"token punctuation"},"("),l.default.createElement("span",{className:"token punctuation"},")")," ",l.default.createElement("span",{className:"token punctuation"},"{"),"\n","\t","\t"," ",l.default.createElement("span",{className:"token keyword"},"super"),l.default.createElement("span",{className:"token punctuation"},"."),l.default.createElement("span",{className:"token function"},"viewDidLoad"),l.default.createElement("span",{className:"token punctuation"},"("),l.default.createElement("span",{className:"token punctuation"},")"),"\n","\t","\t"," ",l.default.createElement("span",{className:"token keyword"},"let")," url ",l.default.createElement("span",{className:"token operator"},"=")," ",l.default.createElement("span",{className:"token function"},"URL"),l.default.createElement("span",{className:"token punctuation"},"("),"string",l.default.createElement("span",{className:"token punctuation"},":")," ",l.default.createElement("span",{className:"token string"},'"https://tiles.goong.io/assets/goong_map_web.json?api_key=your_maptiles_key"'),l.default.createElement("span",{className:"token punctuation"},")"),"\n","\t","\t"," ",l.default.createElement("span",{className:"token keyword"},"let")," mapView ",l.default.createElement("span",{className:"token operator"},"=")," ",l.default.createElement("span",{className:"token function"},"MGLMapView"),l.default.createElement("span",{className:"token punctuation"},"("),"frame",l.default.createElement("span",{className:"token punctuation"},":")," view",l.default.createElement("span",{className:"token punctuation"},"."),"bounds",l.default.createElement("span",{className:"token punctuation"},",")," styleURL",l.default.createElement("span",{className:"token punctuation"},":")," url",l.default.createElement("span",{className:"token punctuation"},")"),"\n","\t","\t"," mapView",l.default.createElement("span",{className:"token punctuation"},"."),"autoresizingMask ",l.default.createElement("span",{className:"token operator"},"=")," ",l.default.createElement("span",{className:"token punctuation"},"["),l.default.createElement("span",{className:"token punctuation"},"."),"flexibleWidth",l.default.createElement("span",{className:"token punctuation"},",")," ",l.default.createElement("span",{className:"token punctuation"},"."),"flexibleHeight",l.default.createElement("span",{className:"token punctuation"},"]"),"\n","\t","\t"," mapView",l.default.createElement("span",{className:"token punctuation"},"."),l.default.createElement("span",{className:"token function"},"setCenter"),l.default.createElement("span",{className:"token punctuation"},"("),l.default.createElement("span",{className:"token function"},"CLLocationCoordinate2D"),l.default.createElement("span",{className:"token punctuation"},"("),"latitude",l.default.createElement("span",{className:"token punctuation"},":")," ",l.default.createElement("span",{className:"token number"},"21"),l.default.createElement("span",{className:"token punctuation"},",")," longitude",l.default.createElement("span",{className:"token punctuation"},":")," ",l.default.createElement("span",{className:"token number"},"105"),l.default.createElement("span",{className:"token punctuation"},")"),l.default.createElement("span",{className:"token punctuation"},",")," zoomLevel",l.default.createElement("span",{className:"token punctuation"},":")," ",l.default.createElement("span",{className:"token number"},"9"),l.default.createElement("span",{className:"token punctuation"},",")," animated",l.default.createElement("span",{className:"token punctuation"},":")," ",l.default.createElement("span",{className:"token boolean"},"false"),l.default.createElement("span",{className:"token punctuation"},")")," ","\n","\t","\t"," view",l.default.createElement("span",{className:"token punctuation"},"."),l.default.createElement("span",{className:"token function"},"addSubview"),l.default.createElement("span",{className:"token punctuation"},"("),"mapView",l.default.createElement("span",{className:"token punctuation"},")")," ","\n","\t",l.default.createElement("span",{className:"token punctuation"},"}"),"\n",l.default.createElement("span",{className:"token punctuation"},"}"),"\n")),l.default.createElement("h3",{id:"android",className:"anchor"},l.default.createElement("a",{href:"#android",className:"unprose color-blue-on-hover"},"Android")),l.default.createElement("pre",{className:"language-kotlin"},l.default.createElement("code",{className:"language-kotlin"},l.default.createElement("span",{className:"token keyword"},"private")," ",l.default.createElement("span",{className:"token keyword"},"var")," mapView",l.default.createElement("span",{className:"token operator"},":")," MapView",l.default.createElement("span",{className:"token operator"},"?")," ",l.default.createElement("span",{className:"token operator"},"=")," ",l.default.createElement("span",{className:"token keyword"},"null"),"\n","\n",l.default.createElement("span",{className:"token keyword"},"override")," ",l.default.createElement("span",{className:"token keyword"},"fun")," ",l.default.createElement("span",{className:"token function"},"onCreate"),l.default.createElement("span",{className:"token punctuation"},"("),"savedInstanceState",l.default.createElement("span",{className:"token operator"},":")," Bundle",l.default.createElement("span",{className:"token operator"},"?"),l.default.createElement("span",{className:"token punctuation"},")")," ",l.default.createElement("span",{className:"token punctuation"},"{"),"\n","  ",l.default.createElement("span",{className:"token keyword"},"super"),l.default.createElement("span",{className:"token punctuation"},"."),l.default.createElement("span",{className:"token function"},"onCreate"),l.default.createElement("span",{className:"token punctuation"},"("),"savedInstanceState",l.default.createElement("span",{className:"token punctuation"},")"),"\n","\n","  ","Mapbox",l.default.createElement("span",{className:"token punctuation"},"."),l.default.createElement("span",{className:"token function"},"getInstance"),l.default.createElement("span",{className:"token punctuation"},"("),l.default.createElement("span",{className:"token keyword"},"this"),l.default.createElement("span",{className:"token punctuation"},",")," ",l.default.createElement("span",{className:"token function"},"getString"),l.default.createElement("span",{className:"token punctuation"},"("),"R",l.default.createElement("span",{className:"token punctuation"},"."),"string",l.default.createElement("span",{className:"token punctuation"},"."),"mapbox_access_token",l.default.createElement("span",{className:"token punctuation"},")"),l.default.createElement("span",{className:"token punctuation"},")"),"\n","\n","  ",l.default.createElement("span",{className:"token function"},"setContentView"),l.default.createElement("span",{className:"token punctuation"},"("),"R",l.default.createElement("span",{className:"token punctuation"},"."),"layout",l.default.createElement("span",{className:"token punctuation"},"."),"activity_main",l.default.createElement("span",{className:"token punctuation"},")"),"\n","\n","  ","mapView ",l.default.createElement("span",{className:"token operator"},"=")," ",l.default.createElement("span",{className:"token function"},"findViewById"),l.default.createElement("span",{className:"token punctuation"},"("),"R",l.default.createElement("span",{className:"token punctuation"},"."),"id",l.default.createElement("span",{className:"token punctuation"},"."),"mapView",l.default.createElement("span",{className:"token punctuation"},")"),"\n","  ","mapView",l.default.createElement("span",{className:"token operator"},"?"),l.default.createElement("span",{className:"token punctuation"},"."),l.default.createElement("span",{className:"token function"},"onCreate"),l.default.createElement("span",{className:"token punctuation"},"("),"savedInstanceState",l.default.createElement("span",{className:"token punctuation"},")"),"\n","  ","mapView",l.default.createElement("span",{className:"token operator"},"?"),l.default.createElement("span",{className:"token punctuation"},"."),l.default.createElement("span",{className:"token function"},"getMapAsync")," ",l.default.createElement("span",{className:"token punctuation"},"{")," mapboxMap ",l.default.createElement("span",{className:"token operator"},"->"),"\n","\n","  ","\t","mapboxMap",l.default.createElement("span",{className:"token punctuation"},"."),l.default.createElement("span",{className:"token function"},"setStyle"),l.default.createElement("span",{className:"token punctuation"},"("),"Style",l.default.createElement("span",{className:"token punctuation"},"."),l.default.createElement("span",{className:"token function"},"Builder"),l.default.createElement("span",{className:"token punctuation"},"("),l.default.createElement("span",{className:"token punctuation"},")"),l.default.createElement("span",{className:"token punctuation"},"."),l.default.createElement("span",{className:"token function"},"fromUri"),l.default.createElement("span",{className:"token punctuation"},"("),l.default.createElement("span",{className:"token string"},'"https://tiles.goong.io/assets/goong_map_web.json?api_key=your_maptiles_key"'),l.default.createElement("span",{className:"token punctuation"},")"),l.default.createElement("span",{className:"token punctuation"},")")," ",l.default.createElement("span",{className:"token punctuation"},"{"),"\n","      ",l.default.createElement("span",{className:"token comment"},"// Map is set up and Goong style has loaded. Now you can add data or make other map adjustments"),"\n","      ","\n","  ","\t",l.default.createElement("span",{className:"token punctuation"},"}"),"\n","\n","  ",l.default.createElement("span",{className:"token punctuation"},"}"),"\n",l.default.createElement("span",{className:"token punctuation"},"}"),"\n")),l.default.createElement("h3",{id:"react-native",className:"anchor"},l.default.createElement("a",{href:"#react-native",className:"unprose color-blue-on-hover"},"React Native")),l.default.createElement("pre",{className:"language-javascript"},l.default.createElement("code",{className:"language-javascript"},l.default.createElement("span",{className:"token keyword module"},"export")," ",l.default.createElement("span",{className:"token keyword module"},"default")," ",l.default.createElement("span",{className:"token keyword"},"class")," ",l.default.createElement("span",{className:"token class-name"},"App")," ",l.default.createElement("span",{className:"token keyword"},"extends")," ",l.default.createElement("span",{className:"token class-name"},"Component")," ",l.default.createElement("span",{className:"token punctuation"},"{"),"\n","  ",l.default.createElement("span",{className:"token function"},"render"),l.default.createElement("span",{className:"token punctuation"},"("),l.default.createElement("span",{className:"token punctuation"},")")," ",l.default.createElement("span",{className:"token punctuation"},"{"),"\n","    ",l.default.createElement("span",{className:"token keyword control-flow"},"return")," ",l.default.createElement("span",{className:"token punctuation"},"("),"\n","      ",l.default.createElement("span",{className:"token operator"},"<"),l.default.createElement("span",{className:"token maybe-class-name"},"View")," style",l.default.createElement("span",{className:"token operator"},"="),l.default.createElement("span",{className:"token punctuation"},"{"),"styles",l.default.createElement("span",{className:"token punctuation"},"."),l.default.createElement("span",{className:"token property-access"},"page"),l.default.createElement("span",{className:"token punctuation"},"}"),l.default.createElement("span",{className:"token operator"},">"),"\n","        ",l.default.createElement("span",{className:"token operator"},"<"),l.default.createElement("span",{className:"token maybe-class-name"},"View")," style",l.default.createElement("span",{className:"token operator"},"="),l.default.createElement("span",{className:"token punctuation"},"{"),"styles",l.default.createElement("span",{className:"token punctuation"},"."),l.default.createElement("span",{className:"token property-access"},"container"),l.default.createElement("span",{className:"token punctuation"},"}"),l.default.createElement("span",{className:"token operator"},">"),"\n","          ",l.default.createElement("span",{className:"token operator"},"<"),l.default.createElement("span",{className:"token maybe-class-name"},"MapboxGL"),l.default.createElement("span",{className:"token punctuation"},"."),l.default.createElement("span",{className:"token property-access"},l.default.createElement("span",{className:"token maybe-class-name"},"MapView"))," styleURL",l.default.createElement("span",{className:"token operator"},"="),l.default.createElement("span",{className:"token string"},"'https://tiles.goong.io/assets/goong_map_web.json?api_key=your_maptiles_key'")," ",l.default.createElement("span",{className:"token operator"},"/"),l.default.createElement("span",{className:"token operator"},">"),"\n","        ",l.default.createElement("span",{className:"token operator"},"<"),l.default.createElement("span",{className:"token operator"},"/"),l.default.createElement("span",{className:"token maybe-class-name"},"View"),l.default.createElement("span",{className:"token operator"},">"),"\n","      ",l.default.createElement("span",{className:"token operator"},"<"),l.default.createElement("span",{className:"token operator"},"/"),l.default.createElement("span",{className:"token maybe-class-name"},"View"),l.default.createElement("span",{className:"token operator"},">"),"\n","    ",l.default.createElement("span",{className:"token punctuation"},")"),l.default.createElement("span",{className:"token punctuation"},";"),"\n","  ",l.default.createElement("span",{className:"token punctuation"},"}"),"\n",l.default.createElement("span",{className:"token punctuation"},"}"),"\n")),l.default.createElement("p",null,"See ",l.default.createElement("a",{href:"https://github.com/react-native-mapbox-gl/maps/blob/master/docs/MapView.md"},"React Native MapView API")),l.default.createElement("h3",{id:"flutter",className:"anchor"},l.default.createElement("a",{href:"#flutter",className:"unprose color-blue-on-hover"},"Flutter")),l.default.createElement("p",null,"See ",l.default.createElement("a",{href:"https://github.com/tobrun/flutter-mapbox-gl#map-styles"},"Map Styles"))))}}])&&r(t.prototype,a),n&&r(t,n),i}(l.default.PureComponent);t.default=E},cVeh:function(e,t,a){var n=a("H6nf");n=n.default||n,e.exports={component:n,props:{frontMatter:{title:"Mobile libraries",description:"Learn how to integrate GoongMaps to your mobile applications.",contentType:"API",language:["JavaScript"],navOrder:2,layout:"page",hideFeedback:!0,products:["Documentation"]}}}}}]);
//# sourceMappingURL=mobiles-60c979a1b785348a99aa.chunk.js.map