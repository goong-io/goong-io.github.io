(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{M4Oy:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((r=n("fG8n"))&&r.__esModule?r:{default:r}).default;t.default=o},aAuZ:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n("q1tI")),a=(n("yr+R"),n("cQZ0"),s(n("uLm5"))),i=s(n("er0T")),c=s(n("1wO5"));function s(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h={title:"Add a stretchable image to the map",description:"Use a stretchable image as a background for text.",topics:["Styles","Layers"],thumbnail:"add-image-stretchable",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["Documentation"],headings:[]},b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(d,e);var t,n,r,s=m(d);function d(){return u(this,d),s.apply(this,arguments)}return t=d,(n=[{key:"render",value:function(){var e=this.props;return o.default.createElement(c.default,p({},e,{frontMatter:h}),o.default.createElement("div",null,o.default.createElement("p",null,"Use a stretchable image as a background for text. Stretchable images allow some parts of the image to stretch while keeping other parts, such as corners, at a constant size. Set the ",o.default.createElement("code",null,"layout")," property ",o.default.createElement("code",null,"'icon-text-fit': 'both'")," to use the image as background for the text."),o.default.createElement(a.default,p({html:i.default},this.props))))}}])&&l(t.prototype,n),r&&l(t,r),d}(o.default.PureComponent);t.default=b},er0T:function(e,t,n){"use strict";n.r(t),t.default="<div id=\"map\"></div>\n\n<script>\n    goongjs.accessToken = '8qzxZAuxcsctSlmOszInchP1A5GrmRBHJwCBCjO6';\n    var map = new goongjs.Map({\n        container: 'map',\n        style: 'https://tiles.goong.io/assets/goong_map_web.json',\n        zoom: 0.1\n    });\n\n    var images = {\n        'popup': 'https://docs.goong.io/assets/popup.png',\n        'popup-debug': 'https://docs.goong.io/assets/popup_debug.png'\n    };\n\n    loadImages(images, function (loadedImages) {\n        map.on('load', function () {\n            map.addImage('popup-debug', loadedImages['popup-debug'], {\n                // The two (blue) columns of pixels that can be stretched horizontally:\n                //   - the pixels between x: 25 and x: 55 can be stretched\n                //   - the pixels between x: 85 and x: 115 can be stretched.\n                stretchX: [\n                    [25, 55],\n                    [85, 115]\n                ],\n                // The one (red) row of pixels that can be stretched vertically:\n                //   - the pixels between y: 25 and y: 100 can be stretched\n                stretchY: [[25, 100]],\n                // This part of the image that can contain text ([x1, y1, x2, y2]):\n                content: [25, 25, 115, 100],\n                // This is a high-dpi image:\n                pixelRatio: 2\n            });\n            map.addImage('popup', loadedImages['popup'], {\n                stretchX: [\n                    [25, 55],\n                    [85, 115]\n                ],\n                stretchY: [[25, 100]],\n                content: [25, 25, 115, 100],\n                pixelRatio: 2\n            });\n\n            map.addSource('points', {\n                'type': 'geojson',\n                'data': {\n                    'type': 'FeatureCollection',\n                    'features': [\n                        {\n                            'type': 'Feature',\n                            'geometry': {\n                                'type': 'Point',\n                                'coordinates': [40, -30]\n                            },\n                            'properties': {\n                                'image-name': 'popup-debug',\n                                'name': 'Line 1\\nLine 2\\nLine 3'\n                            }\n                        },\n                        {\n                            'type': 'Feature',\n                            'geometry': {\n                                'type': 'Point',\n                                'coordinates': [40, 30]\n                            },\n                            'properties': {\n                                'image-name': 'popup',\n                                'name': 'Line 1\\nLine 2\\nLine 3'\n                            }\n                        },\n                        {\n                            'type': 'Feature',\n                            'geometry': {\n                                'type': 'Point',\n                                'coordinates': [-40, -30]\n                            },\n                            'properties': {\n                                'image-name': 'popup-debug',\n                                'name': 'One longer line'\n                            }\n                        },\n                        {\n                            'type': 'Feature',\n                            'geometry': {\n                                'type': 'Point',\n                                'coordinates': [-40, 30]\n                            },\n                            'properties': {\n                                'image-name': 'popup',\n                                'name': 'One longer line'\n                            }\n                        }\n                    ]\n                }\n            });\n            map.addLayer({\n                'id': 'points',\n                'type': 'symbol',\n                'source': 'points',\n                'layout': {\n                    'text-field': ['get', 'name'],\n                    'icon-text-fit': 'both',\n                    'icon-image': ['get', 'image-name'],\n                    'icon-allow-overlap': true,\n                    'text-allow-overlap': true\n                }\n            });\n\n            // the original, unstretched image for comparison\n            map.addSource('original', {\n                'type': 'geojson',\n                'data': {\n                    'type': 'FeatureCollection',\n                    'features': [\n                        {\n                            'type': 'Feature',\n                            'geometry': {\n                                'type': 'Point',\n                                'coordinates': [0, -70]\n                            }\n                        }\n                    ]\n                }\n            });\n            map.addLayer({\n                'id': 'original',\n                'type': 'symbol',\n                'source': 'original',\n                'layout': {\n                    'text-field': 'unstretched image',\n                    'icon-image': 'popup-debug',\n                    'icon-allow-overlap': true,\n                    'text-allow-overlap': true\n                }\n            });\n        });\n    });\n\n    function loadImages(urls, callback) {\n        var results = {};\n        for (var name in urls) {\n            map.loadImage(urls[name], makeCallback(name));\n        }\n\n        function makeCallback(name) {\n            return function (err, image) {\n                results[name] = err ? null : image;\n\n                // if all images are loaded, call the callback\n                if (Object.keys(results).length === Object.keys(urls).length) {\n                    callback(results);\n                }\n            };\n        }\n    }\n<\/script>\n"},mOgX:function(e,t,n){"use strict";var r=n("8UcX");function o(e,t){return t&&t.local,"https://cdn.jsdelivr.net/npm/@goongmaps/goong-js@".concat(r.a,"/dist/goong-js.").concat(e)}t.a={js:function(e){return o("js",e)},css:function(e){return o("css",e)}}},r190:function(e,t,n){var r=n("aAuZ");r=r.default||r,e.exports={component:r,props:{frontMatter:{title:"Add a stretchable image to the map",description:"Use a stretchable image as a background for text.",topics:["Styles","Layers"],thumbnail:"add-image-stretchable",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["Documentation"],prependJs:["import Example from '../../components/example';","import html from './add-image-stretchable.html';"]}}}},uLm5:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return P}));var r=n("q1tI"),o=n.n(r),a=(n("17x9"),n("mOgX")),i=n("v8ZZ"),c=n.n(i),s=n("irdr"),p=n.n(s),u=n("M4Oy"),l=n.n(u),f=n("umIL"),m=n("wdKx");function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x='<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />',S="\tbody { margin: 0; padding: 0; }\n\t#map { position: absolute; top: 0; bottom: 0; width: 100%; }",P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(s,e);var t,n,r,i=w(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=i.call(this,e)).state={unsupported:!1},t}return t=s,(n=[{key:"displayHTML",value:function(e){return'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8" />\n<title>'.concat(this.props.frontMatter.title,"</title>\n").concat(x,'\n<script src="').concat(a.a.js(),'"><\/script>\n<link href="').concat(a.a.css(),'" rel="stylesheet" />\n<style>\n').concat(S,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n</html>")}},{key:"renderHTML",value:function(e){return"<!DOCTYPE html>\n<html>\n<head>\n<meta charset=utf-8 />\n<title>".concat(this.props.frontMatter.title,"</title>\n").concat(x,"\n<script src='https://js.sentry-cdn.com/b4e18cb1943f46289f67ca6a771bd341.min.js' crossorigin=\"anonymous\"><\/script>\n<script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-instrumentile/v3.0.0/mapbox-gl-instrumentile.js' crossorigin=\"anonymous\"><\/script>\n\n<script src='").concat(a.a.js({local:!0}),"'><\/script>\n<link href='").concat(a.a.css({local:!0}),"' rel='stylesheet' />\n<style>\n    ").concat(S,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n<script>\n\n<\/script>\n</html>")}},{key:"renderSnippet",value:function(){var e=this.props,t=e.html,n=e.location,r=this.displayHTML(t),a=m.extractor(r);return o.a.createElement("div",{className:"bg-white"},o.a.createElement("div",{id:"code",className:"relative"},o.a.createElement(p.a,{code:this.displayHTML(t),highlighter:function(){return f.highlightHtml},edit:{frontMatter:h(h({},this.props.frontMatter),{},{pathname:n.pathname}),head:x,js:a.js,html:a.html,css:a.css,resources:a.resources}})))}},{key:"render",value:function(){var e=this,t=this.props,n=t.frontMatter,r=t.height;return o.a.createElement("div",{className:"prose"},this.state.unsupported&&o.a.createElement(l.a,{title:"Goong GL unsupported",theme:"warning"},"Goong GL requires"," ",o.a.createElement("a",{className:"link",href:"https://caniuse.com/#feat=webgl"},"WebGL support"),". Please check that you are using a supported browser and that"," ",o.a.createElement("a",{className:"link",href:"https://get.webgl.org/"},"WebGL is enabled"),"."),c()()&&o.a.createElement("iframe",{id:"demo",style:{height:r},className:"w-full mt18",allowFullScreen:!0,mozallowfullscreen:"true",webkitallowfullscreen:"true",ref:function(t){e.iframe=t},title:"".concat(n.title," example")}),this.props.displaySnippet&&this.renderSnippet())}},{key:"componentDidMount",value:function(){if(c()()||this.setState({unsupported:!0}),this.iframe){var e=this.iframe.contentWindow.document;e.open(),e.write(this.renderHTML(this.props.html)),e.close()}}}])&&b(t.prototype,n),r&&b(t,r),s}(o.a.Component);j(P,"defaultProps",{displaySnippet:!0,height:400})},v8ZZ:function(e,t,n){"use strict";function r(e){return!o(e)}function o(e){return"undefined"==typeof window||"undefined"==typeof document?"not a browser":Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray?Function.prototype&&Function.prototype.bind?Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions?"JSON"in window&&"parse"in JSON&&"stringify"in JSON?function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return!1;var e,t,n=new Blob([""],{type:"text/javascript"}),r=URL.createObjectURL(n);try{t=new Worker(r),e=!0}catch(t){e=!1}t&&t.terminate();return URL.revokeObjectURL(r),e}()?"Uint8ClampedArray"in window?ArrayBuffer.isView?function(){const e=document.createElement("canvas");e.width=e.height=1;const t=e.getContext("2d");if(!t)return!1;const n=t.getImageData(0,0,1,1);return n&&n.width===e.width}()?function(e){void 0===a[e]&&(a[e]=function(e){const t=function(e){var t=document.createElement("canvas"),n=Object.create(r.webGLContextAttributes);return n.failIfMajorPerformanceCaveat=e,t.probablySupportsContext?t.probablySupportsContext("webgl",n)||t.probablySupportsContext("experimental-webgl",n):t.supportsContext?t.supportsContext("webgl",n)||t.supportsContext("experimental-webgl",n):t.getContext("webgl",n)||t.getContext("experimental-webgl",n)}(e);if(!t)return!1;const n=t.createShader(t.VERTEX_SHADER);if(!n||t.isContextLost())return!1;return t.shaderSource(n,"void main() {}"),t.compileShader(n),!0===t.getShaderParameter(n,t.COMPILE_STATUS)}(e));return a[e]}(e&&e.failIfMajorPerformanceCaveat)?void 0:"insufficient WebGL support":"insufficient Canvas/getImageData support":"insufficient ArrayBuffer support":"insufficient Uint8ClampedArray support":"insufficient worker support":"insufficient JSON support":"insufficient Object support":"insufficient Function support":"insufficent Array support"}e.exports?e.exports=r:window&&(window.mapboxgl=window.mapboxgl||{},window.mapboxgl.supported=r,window.mapboxgl.notSupportedReason=o);var a={};r.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0}},wdKx:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractor=function(e){var t="",n={js:[],css:[]},r=/src=("|')([^']*?)("|')/g,o=/href=("|')([^']*?)("|')/g,a=/<script>((.|\n)*)<\/script>/,i=/<style\b[^>]*>([\s\S]*?)<\/style>/g,c=/<body[\s\S]*?>((.|\n)*)<\/body>/,s=e.match(i),p="".concat(e.replace(a,"")),u=e.match(a)[1];s&&(s.forEach((function(e){t+=e.replace(/<[^>]*>/g,"")})),p="".concat(p.replace(i,"")));if(e.match(r)){var l=e.match(r).map((function(e){return e.replace("src=","").replace(/["']/g,"")}));n.js=n.js.concat(l),p="".concat(p.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/g,""))}if(e.match(o)){var f=e.match(o).map((function(e){return e.replace("href=","").replace(/["']/g,"")}));n.css=n.css.concat(f),p="".concat(p.replace(/<link[\s\S]*?>/g,""))}p.match(c)&&(p=p.match(c)[1]);return{html:p,css:t,js:u,resources:n}}}}]);
//# sourceMappingURL=example-add-image-stretchable-b78e608b386a428d44b4.chunk.js.map