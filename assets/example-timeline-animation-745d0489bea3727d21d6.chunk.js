(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{M4Oy:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((r=n("fG8n"))&&r.__esModule?r:{default:r}).default;t.default=o},RpEv:function(e,t,n){"use strict";n.r(t),t.default="<style>\n    .map-overlay {\n        font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;\n        position: absolute;\n        width: 25%;\n        top: 0;\n        left: 0;\n        padding: 10px;\n    }\n\n    .map-overlay .map-overlay-inner {\n        background-color: #fff;\n        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n        border-radius: 3px;\n        padding: 10px;\n        margin-bottom: 10px;\n    }\n\n    .map-overlay h2 {\n        line-height: 24px;\n        display: block;\n        margin: 0 0 10px;\n    }\n\n    .map-overlay .legend .bar {\n        height: 10px;\n        width: 100%;\n        background: linear-gradient(to right, #fca107, #7f3121);\n    }\n\n    .map-overlay input {\n        background-color: transparent;\n        display: inline-block;\n        width: 100%;\n        position: relative;\n        margin: 0;\n        cursor: ew-resize;\n    }\n</style>\n\n<div id=\"map\"></div>\n\n<div class=\"map-overlay top\">\n    <div class=\"map-overlay-inner\">\n        <h2>Significant earthquakes in 2015</h2>\n        <label id=\"month\"></label>\n        <input id=\"slider\" type=\"range\" min=\"0\" max=\"11\" step=\"1\" value=\"0\" />\n    </div>\n    <div class=\"map-overlay-inner\">\n        <div id=\"legend\" class=\"legend\">\n            <div class=\"bar\"></div>\n            <div>Magnitude (m)</div>\n        </div>\n    </div>\n</div>\n\n<script src=\"https://d3js.org/d3.v3.min.js\" charset=\"utf-8\"><\/script>\n<script>\n    goongjs.accessToken = '8qzxZAuxcsctSlmOszInchP1A5GrmRBHJwCBCjO6';\n    var map = new goongjs.Map({\n        container: 'map',\n        style: 'https://tiles.goong.io/assets/goong_map_web.json',\n        center: [31.4606, 20.7927],\n        zoom: 0.5\n    });\n\n    var months = [\n        'January',\n        'February',\n        'March',\n        'April',\n        'May',\n        'June',\n        'July',\n        'August',\n        'September',\n        'October',\n        'November',\n        'December'\n    ];\n\n    function filterBy(month) {\n        var filters = ['==', 'month', month];\n        map.setFilter('earthquake-circles', filters);\n        map.setFilter('earthquake-labels', filters);\n\n        // Set the label to the month\n        document.getElementById('month').textContent = months[month];\n    }\n\n    map.on('load', function () {\n        // Data courtesy of http://earthquake.usgs.gov/\n        // Query for significant earthquakes in 2015 URL request looked like this:\n        // http://earthquake.usgs.gov/fdsnws/event/1/query\n        //    ?format=geojson\n        //    &starttime=2015-01-01\n        //    &endtime=2015-12-31\n        //    &minmagnitude=6'\n        //\n        // Here we're using d3 to help us make the ajax request but you can use\n        // Any request method (library or otherwise) you wish.\n        d3.json(\n            'https://docs.goong.io/assets/significant-earthquakes-2015.geojson',\n            function (err, data) {\n                if (err) throw err;\n\n                // Create a month property value based on time\n                // used to filter against.\n                data.features = data.features.map(function (d) {\n                    d.properties.month = new Date(d.properties.time).getMonth();\n                    return d;\n                });\n\n                map.addSource('earthquakes', {\n                    'type': 'geojson',\n                    data: data\n                });\n\n                map.addLayer({\n                    'id': 'earthquake-circles',\n                    'type': 'circle',\n                    'source': 'earthquakes',\n                    'paint': {\n                        'circle-color': [\n                            'interpolate',\n                            ['linear'],\n                            ['get', 'mag'],\n                            6,\n                            '#FCA107',\n                            8,\n                            '#7F3121'\n                        ],\n                        'circle-opacity': 0.75,\n                        'circle-radius': [\n                            'interpolate',\n                            ['linear'],\n                            ['get', 'mag'],\n                            6,\n                            20,\n                            8,\n                            40\n                        ]\n                    }\n                });\n\n                map.addLayer({\n                    'id': 'earthquake-labels',\n                    'type': 'symbol',\n                    'source': 'earthquakes',\n                    'layout': {\n                        'text-field': [\n                            'concat',\n                            ['to-string', ['get', 'mag']],\n                            'm'\n                        ],\n                        'text-font': [\n                            'Open Sans Bold',\n                            'Arial Unicode MS Bold'\n                        ],\n                        'text-size': 12\n                    },\n                    'paint': {\n                        'text-color': 'rgba(0,0,0,0.5)'\n                    }\n                });\n\n                // Set filter to first month of the year\n                // 0 = January\n                filterBy(0);\n\n                document\n                    .getElementById('slider')\n                    .addEventListener('input', function (e) {\n                        var month = parseInt(e.target.value, 10);\n                        filterBy(month);\n                    });\n            }\n        );\n    });\n<\/script>\n"},ZeRe:function(e,t,n){var r=n("z4NS");r=r.default||r,e.exports={component:r,props:{frontMatter:{title:"Create a time slider",description:"Visualize earthquakes with a range slider.",topics:["User interaction","Sources"],thumbnail:"timeline-animation",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["Documentation"],prependJs:["import Example from '../../components/example';","import html from './timeline-animation.html';"]}}}},mOgX:function(e,t,n){"use strict";var r=n("8UcX");n("yr+R");function o(e,t){return t&&t.local,"https://cdn.jsdelivr.net/npm/@goongmaps/goong-js@".concat(r.a,"/dist/goong-js.").concat(e)}t.a={js:function(e){return o("js",e)},css:function(e){return o("css",e)}}},uLm5:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var r=n("q1tI"),o=n.n(r),a=(n("17x9"),n("mOgX")),i=n("v8ZZ"),c=n.n(i),s=n("irdr"),u=n.n(s),l=n("M4Oy"),p=n.n(l),f=n("umIL"),d=n("wdKx");function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=j(e);if(t){var o=j(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}function w(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x='<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />',S="\tbody { margin: 0; padding: 0; }\n\t#map { position: absolute; top: 0; bottom: 0; width: 100%; }",k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(s,e);var t,n,r,i=v(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=i.call(this,e)).state={unsupported:!1},t}return t=s,(n=[{key:"displayHTML",value:function(e){return'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8" />\n<title>'.concat(this.props.frontMatter.title,"</title>\n").concat(x,'\n<script src="').concat(a.a.js(),'"><\/script>\n<link href="').concat(a.a.css(),'" rel="stylesheet" />\n<style>\n').concat(S,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n</html>")}},{key:"renderHTML",value:function(e){return"<!DOCTYPE html>\n<html>\n<head>\n<meta charset=utf-8 />\n<title>".concat(this.props.frontMatter.title,"</title>\n").concat(x,"\n<script src='https://js.sentry-cdn.com/b4e18cb1943f46289f67ca6a771bd341.min.js' crossorigin=\"anonymous\"><\/script>\n<script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-instrumentile/v3.0.0/mapbox-gl-instrumentile.js' crossorigin=\"anonymous\"><\/script>\n\n<script src='").concat(a.a.js({local:!0}),"'><\/script>\n<link href='").concat(a.a.css({local:!0}),"' rel='stylesheet' />\n<style>\n    ").concat(S,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n<script>\n\n<\/script>\n</html>")}},{key:"renderSnippet",value:function(){var e=this.props,t=e.html,n=e.location,r=this.displayHTML(t),a=d.extractor(r);return o.a.createElement("div",{className:"bg-white"},o.a.createElement("div",{id:"code",className:"relative"},o.a.createElement(u.a,{code:this.displayHTML(t),highlighter:function(){return f.highlightHtml},edit:{frontMatter:h(h({},this.props.frontMatter),{},{pathname:n.pathname}),head:x,js:a.js,html:a.html,css:a.css,resources:a.resources}})))}},{key:"render",value:function(){var e=this,t=this.props,n=t.frontMatter,r=t.height;return o.a.createElement("div",{className:"prose"},this.state.unsupported&&o.a.createElement(p.a,{title:"Goong GL unsupported",theme:"warning"},"Goong GL requires"," ",o.a.createElement("a",{className:"link",href:"https://caniuse.com/#feat=webgl"},"WebGL support"),". Please check that you are using a supported browser and that"," ",o.a.createElement("a",{className:"link",href:"https://get.webgl.org/"},"WebGL is enabled"),"."),c()()&&o.a.createElement("iframe",{id:"demo",style:{height:r},className:"w-full mt18",allowFullScreen:!0,mozallowfullscreen:"true",webkitallowfullscreen:"true",ref:function(t){e.iframe=t},title:"".concat(n.title," example")}),this.props.displaySnippet&&this.renderSnippet())}},{key:"componentDidMount",value:function(){if(c()()||this.setState({unsupported:!0}),this.iframe){var e=this.iframe.contentWindow.document;e.open(),e.write(this.renderHTML(this.props.html)),e.close()}}}])&&b(t.prototype,n),r&&b(t,r),s}(o.a.Component);O(k,"defaultProps",{displaySnippet:!0,height:400})},v8ZZ:function(e,t,n){"use strict";function r(e){return!o(e)}function o(e){return"undefined"==typeof window||"undefined"==typeof document?"not a browser":Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray?Function.prototype&&Function.prototype.bind?Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions?"JSON"in window&&"parse"in JSON&&"stringify"in JSON?function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return!1;var e,t,n=new Blob([""],{type:"text/javascript"}),r=URL.createObjectURL(n);try{t=new Worker(r),e=!0}catch(t){e=!1}t&&t.terminate();return URL.revokeObjectURL(r),e}()?"Uint8ClampedArray"in window?ArrayBuffer.isView?function(){const e=document.createElement("canvas");e.width=e.height=1;const t=e.getContext("2d");if(!t)return!1;const n=t.getImageData(0,0,1,1);return n&&n.width===e.width}()?function(e){void 0===a[e]&&(a[e]=function(e){const t=function(e){var t=document.createElement("canvas"),n=Object.create(r.webGLContextAttributes);return n.failIfMajorPerformanceCaveat=e,t.probablySupportsContext?t.probablySupportsContext("webgl",n)||t.probablySupportsContext("experimental-webgl",n):t.supportsContext?t.supportsContext("webgl",n)||t.supportsContext("experimental-webgl",n):t.getContext("webgl",n)||t.getContext("experimental-webgl",n)}(e);if(!t)return!1;const n=t.createShader(t.VERTEX_SHADER);if(!n||t.isContextLost())return!1;return t.shaderSource(n,"void main() {}"),t.compileShader(n),!0===t.getShaderParameter(n,t.COMPILE_STATUS)}(e));return a[e]}(e&&e.failIfMajorPerformanceCaveat)?void 0:"insufficient WebGL support":"insufficient Canvas/getImageData support":"insufficient ArrayBuffer support":"insufficient Uint8ClampedArray support":"insufficient worker support":"insufficient JSON support":"insufficient Object support":"insufficient Function support":"insufficent Array support"}e.exports?e.exports=r:window&&(window.mapboxgl=window.mapboxgl||{},window.mapboxgl.supported=r,window.mapboxgl.notSupportedReason=o);var a={};r.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0}},wdKx:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractor=function(e){var t="",n={js:[],css:[]},r=/src=("|')([^']*?)("|')/g,o=/href=("|')([^']*?)("|')/g,a=/<script>((.|\n)*)<\/script>/,i=/<style\b[^>]*>([\s\S]*?)<\/style>/g,c=/<body[\s\S]*?>((.|\n)*)<\/body>/,s=e.match(i),u="".concat(e.replace(a,"")),l=e.match(a)[1];s&&(s.forEach((function(e){t+=e.replace(/<[^>]*>/g,"")})),u="".concat(u.replace(i,"")));if(e.match(r)){var p=e.match(r).map((function(e){return e.replace("src=","").replace(/["']/g,"")}));n.js=n.js.concat(p),u="".concat(u.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/g,""))}if(e.match(o)){var f=e.match(o).map((function(e){return e.replace("href=","").replace(/["']/g,"")}));n.css=n.css.concat(f),u="".concat(u.replace(/<link[\s\S]*?>/g,""))}u.match(c)&&(u=u.match(c)[1]);return{html:u,css:t,js:l,resources:n}}},z4NS:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n("q1tI")),a=(n("yr+R"),n("cQZ0"),s(n("uLm5"))),i=s(n("RpEv")),c=s(n("1wO5"));function s(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h={title:"Create a time slider",description:"Visualize earthquakes with a range slider.",topics:["User interaction","Sources"],thumbnail:"timeline-animation",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["Documentation"],headings:[]},b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(m,e);var t,n,r,s=d(m);function m(){return l(this,m),s.apply(this,arguments)}return t=m,(n=[{key:"render",value:function(){var e=this.props;return o.default.createElement(c.default,u({},e,{frontMatter:h}),o.default.createElement("div",null,o.default.createElement("p",null,"Using ",o.default.createElement("a",{href:"https://docs.goong.io/javascript/map/#map#setfilter"},o.default.createElement("code",null,"Map#setFilter"))," and ",o.default.createElement("a",{href:"https://d3js.org/"},"D3.js"),", create a range slider to visualize earthquakes in 2015 that were greater than 5.9 magnitude."),o.default.createElement(a.default,u({html:i.default},this.props))))}}])&&p(t.prototype,n),r&&p(t,r),m}(o.default.PureComponent);t.default=b}}]);
//# sourceMappingURL=example-timeline-animation-745d0489bea3727d21d6.chunk.js.map