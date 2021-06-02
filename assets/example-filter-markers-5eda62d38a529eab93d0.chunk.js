(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{M4Oy:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((r=n("fG8n"))&&r.__esModule?r:{default:r}).default;t.default=o},UdDZ:function(e,t,n){var r=n("vP5s");r=r.default||r,e.exports={component:r,props:{frontMatter:{title:"Filter symbols by toggling a list",description:"Filter a set of symbols based on a property value in the data.",topics:["User interaction"],thumbnail:"filter-markers",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["Documentation"],prependJs:["import Example from '../../components/example';","import html from './filter-markers.html';"]}}}},hr8k:function(e,t,n){"use strict";n.r(t),t.default="<style>\n    .filter-group {\n        font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;\n        font-weight: 600;\n        position: absolute;\n        top: 10px;\n        right: 10px;\n        z-index: 1;\n        border-radius: 3px;\n        width: 120px;\n        color: #fff;\n    }\n\n    .filter-group input[type='checkbox']:first-child + label {\n        border-radius: 3px 3px 0 0;\n    }\n\n    .filter-group label:last-child {\n        border-radius: 0 0 3px 3px;\n        border: none;\n    }\n\n    .filter-group input[type='checkbox'] {\n        display: none;\n    }\n\n    .filter-group input[type='checkbox'] + label {\n        background-color: #3386c0;\n        display: block;\n        cursor: pointer;\n        padding: 10px;\n        border-bottom: 1px solid rgba(0, 0, 0, 0.25);\n    }\n\n    .filter-group input[type='checkbox'] + label {\n        background-color: #3386c0;\n        text-transform: capitalize;\n    }\n\n    .filter-group input[type='checkbox'] + label:hover,\n    .filter-group input[type='checkbox']:checked + label {\n        background-color: #4ea0da;\n    }\n\n    .filter-group input[type='checkbox']:checked + label:before {\n        content: '✔';\n        margin-right: 5px;\n    }\n</style>\n<div id=\"map\"></div>\n<nav id=\"filter-group\" class=\"filter-group\"></nav>\n\n<script>\n    var places = {\n        'type': 'FeatureCollection',\n        'features': [\n            {\n                'type': 'Feature',\n                'properties': {\n                    'icon': 'theatre'\n                },\n                'geometry': {\n                    'type': 'Point',\n                    'coordinates': [-77.038659, 38.931567]\n                }\n            },\n            {\n                'type': 'Feature',\n                'properties': {\n                    'icon': 'theatre'\n                },\n                'geometry': {\n                    'type': 'Point',\n                    'coordinates': [-77.003168, 38.894651]\n                }\n            },\n            {\n                'type': 'Feature',\n                'properties': {\n                    'icon': 'bar'\n                },\n                'geometry': {\n                    'type': 'Point',\n                    'coordinates': [-77.090372, 38.881189]\n                }\n            },\n            {\n                'type': 'Feature',\n                'properties': {\n                    'icon': 'bicycle'\n                },\n                'geometry': {\n                    'type': 'Point',\n                    'coordinates': [-77.052477, 38.943951]\n                }\n            },\n            {\n                'type': 'Feature',\n                'properties': {\n                    'icon': 'music'\n                },\n                'geometry': {\n                    'type': 'Point',\n                    'coordinates': [-77.031706, 38.914581]\n                }\n            },\n            {\n                'type': 'Feature',\n                'properties': {\n                    'icon': 'music'\n                },\n                'geometry': {\n                    'type': 'Point',\n                    'coordinates': [-77.020945, 38.878241]\n                }\n            },\n            {\n                'type': 'Feature',\n                'properties': {\n                    'icon': 'music'\n                },\n                'geometry': {\n                    'type': 'Point',\n                    'coordinates': [-77.007481, 38.876516]\n                }\n            }\n        ]\n    };\n\n    var filterGroup = document.getElementById('filter-group');\n    goongjs.accessToken = '8qzxZAuxcsctSlmOszInchP1A5GrmRBHJwCBCjO6';\n    var map = new goongjs.Map({\n        container: 'map',\n        style: 'https://tiles.goong.io/assets/goong_map_web.json',\n        center: [-77.04, 38.907],\n        zoom: 11.15\n    });\n\n    map.on('load', function () {\n        // Add a GeoJSON source containing place coordinates and information.\n        map.addSource('places', {\n            'type': 'geojson',\n            'data': places\n        });\n\n        places.features.forEach(function (feature) {\n            var symbol = feature.properties['icon'];\n            var layerID = 'poi-' + symbol;\n\n            // Add a layer for this symbol type if it hasn't been added already.\n            if (!map.getLayer(layerID)) {\n                map.addLayer({\n                    'id': layerID,\n                    'type': 'symbol',\n                    'source': 'places',\n                    'layout': {\n                        'icon-image': symbol + '_15',\n                        'icon-allow-overlap': true\n                    },\n                    'filter': ['==', 'icon', symbol]\n                });\n\n                // Add checkbox and label elements for the layer.\n                var input = document.createElement('input');\n                input.type = 'checkbox';\n                input.id = layerID;\n                input.checked = true;\n                filterGroup.appendChild(input);\n\n                var label = document.createElement('label');\n                label.setAttribute('for', layerID);\n                label.textContent = symbol;\n                filterGroup.appendChild(label);\n\n                // When the checkbox changes, update the visibility of the layer.\n                input.addEventListener('change', function (e) {\n                    map.setLayoutProperty(\n                        layerID,\n                        'visibility',\n                        e.target.checked ? 'visible' : 'none'\n                    );\n                });\n            }\n        });\n    });\n<\/script>\n"},mOgX:function(e,t,n){"use strict";var r=n("8UcX");n("yr+R");function o(e,t){return t&&t.local,"https://cdn.jsdelivr.net/npm/@goongmaps/goong-js@".concat(r.a,"/dist/goong-js.").concat(e)}t.a={js:function(e){return o("js",e)},css:function(e){return o("css",e)}}},uLm5:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var r=n("q1tI"),o=n.n(r),a=(n("17x9"),n("mOgX")),i=n("v8ZZ"),c=n.n(i),s=n("irdr"),p=n.n(s),l=n("M4Oy"),u=n.n(l),f=n("umIL"),y=n("wdKx");function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}function w(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j='<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />',P="\tbody { margin: 0; padding: 0; }\n\t#map { position: absolute; top: 0; bottom: 0; width: 100%; }",k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(s,e);var t,n,r,i=v(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=i.call(this,e)).state={unsupported:!1},t}return t=s,(n=[{key:"displayHTML",value:function(e){return'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8" />\n<title>'.concat(this.props.frontMatter.title,"</title>\n").concat(j,'\n<script src="').concat(a.a.js(),'"><\/script>\n<link href="').concat(a.a.css(),'" rel="stylesheet" />\n<style>\n').concat(P,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n</html>")}},{key:"renderHTML",value:function(e){return"<!DOCTYPE html>\n<html>\n<head>\n<meta charset=utf-8 />\n<title>".concat(this.props.frontMatter.title,"</title>\n").concat(j,"\n<script src='https://js.sentry-cdn.com/b4e18cb1943f46289f67ca6a771bd341.min.js' crossorigin=\"anonymous\"><\/script>\n<script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-instrumentile/v3.0.0/mapbox-gl-instrumentile.js' crossorigin=\"anonymous\"><\/script>\n\n<script src='").concat(a.a.js({local:!0}),"'><\/script>\n<link href='").concat(a.a.css({local:!0}),"' rel='stylesheet' />\n<style>\n    ").concat(P,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n<script>\n\n<\/script>\n</html>")}},{key:"renderSnippet",value:function(){var e=this.props,t=e.html,n=e.location,r=this.displayHTML(t),a=y.extractor(r);return o.a.createElement("div",{className:"bg-white"},o.a.createElement("div",{id:"code",className:"relative"},o.a.createElement(p.a,{code:this.displayHTML(t),highlighter:function(){return f.highlightHtml},edit:{frontMatter:m(m({},this.props.frontMatter),{},{pathname:n.pathname}),head:j,js:a.js,html:a.html,css:a.css,resources:a.resources}})))}},{key:"render",value:function(){var e=this,t=this.props,n=t.frontMatter,r=t.height;return o.a.createElement("div",{className:"prose"},this.state.unsupported&&o.a.createElement(u.a,{title:"Goong GL unsupported",theme:"warning"},"Goong GL requires"," ",o.a.createElement("a",{className:"link",href:"https://caniuse.com/#feat=webgl"},"WebGL support"),". Please check that you are using a supported browser and that"," ",o.a.createElement("a",{className:"link",href:"https://get.webgl.org/"},"WebGL is enabled"),"."),c()()&&o.a.createElement("iframe",{id:"demo",style:{height:r},className:"w-full mt18",allowFullScreen:!0,mozallowfullscreen:"true",webkitallowfullscreen:"true",ref:function(t){e.iframe=t},title:"".concat(n.title," example")}),this.props.displaySnippet&&this.renderSnippet())}},{key:"componentDidMount",value:function(){if(c()()||this.setState({unsupported:!0}),this.iframe){var e=this.iframe.contentWindow.document;e.open(),e.write(this.renderHTML(this.props.html)),e.close()}}}])&&h(t.prototype,n),r&&h(t,r),s}(o.a.Component);x(k,"defaultProps",{displaySnippet:!0,height:400})},v8ZZ:function(e,t,n){"use strict";function r(e){return!o(e)}function o(e){return"undefined"==typeof window||"undefined"==typeof document?"not a browser":Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray?Function.prototype&&Function.prototype.bind?Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions?"JSON"in window&&"parse"in JSON&&"stringify"in JSON?function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return!1;var e,t,n=new Blob([""],{type:"text/javascript"}),r=URL.createObjectURL(n);try{t=new Worker(r),e=!0}catch(t){e=!1}t&&t.terminate();return URL.revokeObjectURL(r),e}()?"Uint8ClampedArray"in window?ArrayBuffer.isView?function(){const e=document.createElement("canvas");e.width=e.height=1;const t=e.getContext("2d");if(!t)return!1;const n=t.getImageData(0,0,1,1);return n&&n.width===e.width}()?function(e){void 0===a[e]&&(a[e]=function(e){const t=function(e){var t=document.createElement("canvas"),n=Object.create(r.webGLContextAttributes);return n.failIfMajorPerformanceCaveat=e,t.probablySupportsContext?t.probablySupportsContext("webgl",n)||t.probablySupportsContext("experimental-webgl",n):t.supportsContext?t.supportsContext("webgl",n)||t.supportsContext("experimental-webgl",n):t.getContext("webgl",n)||t.getContext("experimental-webgl",n)}(e);if(!t)return!1;const n=t.createShader(t.VERTEX_SHADER);if(!n||t.isContextLost())return!1;return t.shaderSource(n,"void main() {}"),t.compileShader(n),!0===t.getShaderParameter(n,t.COMPILE_STATUS)}(e));return a[e]}(e&&e.failIfMajorPerformanceCaveat)?void 0:"insufficient WebGL support":"insufficient Canvas/getImageData support":"insufficient ArrayBuffer support":"insufficient Uint8ClampedArray support":"insufficient worker support":"insufficient JSON support":"insufficient Object support":"insufficient Function support":"insufficent Array support"}e.exports?e.exports=r:window&&(window.mapboxgl=window.mapboxgl||{},window.mapboxgl.supported=r,window.mapboxgl.notSupportedReason=o);var a={};r.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0}},vP5s:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n("q1tI")),a=(n("yr+R"),n("cQZ0"),s(n("uLm5"))),i=s(n("hr8k")),c=s(n("1wO5"));function s(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m={title:"Filter symbols by toggling a list",description:"Filter a set of symbols based on a property value in the data.",topics:["User interaction"],thumbnail:"filter-markers",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["Documentation"],headings:[]},h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(d,e);var t,n,r,s=y(d);function d(){return l(this,d),s.apply(this,arguments)}return t=d,(n=[{key:"render",value:function(){var e=this.props;return o.default.createElement(c.default,p({},e,{frontMatter:m}),o.default.createElement("div",null,o.default.createElement("p",null,"Filter a set of ",o.default.createElement("a",{href:"https://docs.goong.io/style-spec/layers/#symbol"},"symbols")," based on a property value in the data."),o.default.createElement(a.default,p({html:i.default},this.props))))}}])&&u(t.prototype,n),r&&u(t,r),d}(o.default.PureComponent);t.default=h},wdKx:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractor=function(e){var t="",n={js:[],css:[]},r=/src=("|')([^']*?)("|')/g,o=/href=("|')([^']*?)("|')/g,a=/<script>((.|\n)*)<\/script>/,i=/<style\b[^>]*>([\s\S]*?)<\/style>/g,c=/<body[\s\S]*?>((.|\n)*)<\/body>/,s=e.match(i),p="".concat(e.replace(a,"")),l=e.match(a)[1];s&&(s.forEach((function(e){t+=e.replace(/<[^>]*>/g,"")})),p="".concat(p.replace(i,"")));if(e.match(r)){var u=e.match(r).map((function(e){return e.replace("src=","").replace(/["']/g,"")}));n.js=n.js.concat(u),p="".concat(p.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/g,""))}if(e.match(o)){var f=e.match(o).map((function(e){return e.replace("href=","").replace(/["']/g,"")}));n.css=n.css.concat(f),p="".concat(p.replace(/<link[\s\S]*?>/g,""))}p.match(c)&&(p=p.match(c)[1]);return{html:p,css:t,js:l,resources:n}}}}]);
//# sourceMappingURL=example-filter-markers-5eda62d38a529eab93d0.chunk.js.map