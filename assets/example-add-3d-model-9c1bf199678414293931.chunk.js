(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Crgp:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s(n("q1tI")),a=(n("yr+R"),n("cQZ0"),s(n("uLm5"))),i=s(n("nl7L")),c=s(n("1wO5"));function s(t){return t&&t.__esModule?t:{default:t}}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h(t);if(e){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y={title:"Add a 3D model",description:"Use a custom style layer with three.js to add a 3D model to the map.",topics:["Layers"],thumbnail:"add-3d-model",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["Documentation"],headings:[]},b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(m,t);var e,n,r,s=d(m);function m(){return u(this,m),s.apply(this,arguments)}return e=m,(n=[{key:"render",value:function(){var t=this.props;return o.default.createElement(c.default,l({},t,{frontMatter:y}),o.default.createElement("div",null,o.default.createElement("p",null,"Use a ",o.default.createElement("a",{href:"https://docs.goong.io/javascript/properties/#customlayerinterface"},"custom style layer")," with ",o.default.createElement("a",{href:"https://threejs.org"},"three.js")," to add a 3D model to the map."),o.default.createElement(a.default,l({html:i.default},this.props))))}}])&&p(e.prototype,n),r&&p(e,r),m}(o.default.PureComponent);e.default=b},M4Oy:function(t,e,n){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=((r=n("fG8n"))&&r.__esModule?r:{default:r}).default;e.default=o},eeOW:function(t,e,n){var r=n("Crgp");r=r.default||r,t.exports={component:r,props:{frontMatter:{title:"Add a 3D model",description:"Use a custom style layer with three.js to add a 3D model to the map.",topics:["Layers"],thumbnail:"add-3d-model",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["Documentation"],prependJs:["import Example from '../../components/example';","import html from './add-3d-model.html';"]}}}},mOgX:function(t,e,n){"use strict";var r=n("8UcX");n("yr+R");function o(t,e){return e&&e.local,"https://cdn.jsdelivr.net/npm/@goongmaps/goong-js@".concat(r.a,"/dist/goong-js.").concat(t)}e.a={js:function(t){return o("js",t)},css:function(t){return o("css",t)}}},nl7L:function(t,e,n){"use strict";n.r(e),e.default="<script src=\"https://unpkg.com/three@0.106.2/build/three.min.js\"><\/script>\n<script src=\"https://unpkg.com/three@0.106.2/examples/js/loaders/GLTFLoader.js\"><\/script>\n<div id=\"map\"></div>\n<script>\n    goongjs.accessToken = '8qzxZAuxcsctSlmOszInchP1A5GrmRBHJwCBCjO6';\n    var map = (window.map = new goongjs.Map({\n        container: 'map',\n        style: 'https://tiles.goong.io/assets/goong_map_web.json',\n        zoom: 18,\n        center: [105.83991, 21.028],\n        pitch: 60,\n        antialias: true // create the gl context with MSAA antialiasing, so custom layers are antialiased\n    }));\n\n    // parameters to ensure the model is georeferenced correctly on the map\n    var modelOrigin = [105.83991, 21.028];\n    var modelAltitude = 0;\n    var modelRotate = [Math.PI / 2, 0, 0];\n\n    var modelAsMercatorCoordinate = goongjs.MercatorCoordinate.fromLngLat(\n        modelOrigin,\n        modelAltitude\n    );\n\n    // transformation parameters to position, rotate and scale the 3D model onto the map\n    var modelTransform = {\n        translateX: modelAsMercatorCoordinate.x,\n        translateY: modelAsMercatorCoordinate.y,\n        translateZ: modelAsMercatorCoordinate.z,\n        rotateX: modelRotate[0],\n        rotateY: modelRotate[1],\n        rotateZ: modelRotate[2],\n        /* Since our 3D model is in real world meters, a scale transform needs to be\n         * applied since the CustomLayerInterface expects units in MercatorCoordinates.\n         */\n        scale: modelAsMercatorCoordinate.meterInMercatorCoordinateUnits()\n    };\n\n    var THREE = window.THREE;\n\n    // configuration of the custom layer for a 3D model per the CustomLayerInterface\n    var customLayer = {\n        id: '3d-model',\n        type: 'custom',\n        renderingMode: '3d',\n        onAdd: function (map, gl) {\n            this.camera = new THREE.Camera();\n            this.scene = new THREE.Scene();\n\n            // create two three.js lights to illuminate the model\n            var directionalLight = new THREE.DirectionalLight(0xffffff);\n            directionalLight.position.set(0, -70, 100).normalize();\n            this.scene.add(directionalLight);\n\n            var directionalLight2 = new THREE.DirectionalLight(0xffffff);\n            directionalLight2.position.set(0, 70, 100).normalize();\n            this.scene.add(directionalLight2);\n\n            // use the three.js GLTF loader to add the 3D model to the three.js scene\n            var loader = new THREE.GLTFLoader();\n            loader.load(\n                'https://docs.goong.io/assets/34M_17/34M_17.gltf',\n                function (gltf) {\n                    this.scene.add(gltf.scene);\n                }.bind(this)\n            );\n            this.map = map;\n\n            // use the Goong GL JS map canvas for three.js\n            this.renderer = new THREE.WebGLRenderer({\n                canvas: map.getCanvas(),\n                context: gl,\n                antialias: true\n            });\n\n            this.renderer.autoClear = false;\n        },\n        render: function (gl, matrix) {\n            var rotationX = new THREE.Matrix4().makeRotationAxis(\n                new THREE.Vector3(1, 0, 0),\n                modelTransform.rotateX\n            );\n            var rotationY = new THREE.Matrix4().makeRotationAxis(\n                new THREE.Vector3(0, 1, 0),\n                modelTransform.rotateY\n            );\n            var rotationZ = new THREE.Matrix4().makeRotationAxis(\n                new THREE.Vector3(0, 0, 1),\n                modelTransform.rotateZ\n            );\n\n            var m = new THREE.Matrix4().fromArray(matrix);\n            var l = new THREE.Matrix4()\n                .makeTranslation(\n                    modelTransform.translateX,\n                    modelTransform.translateY,\n                    modelTransform.translateZ\n                )\n                .scale(\n                    new THREE.Vector3(\n                        modelTransform.scale,\n                        -modelTransform.scale,\n                        modelTransform.scale\n                    )\n                )\n                .multiply(rotationX)\n                .multiply(rotationY)\n                .multiply(rotationZ);\n\n            this.camera.projectionMatrix = m.multiply(l);\n            this.renderer.state.reset();\n            this.renderer.render(this.scene, this.camera);\n            this.map.triggerRepaint();\n        }\n    };\n\n    map.on('style.load', function () {\n        map.addLayer(customLayer, 'road-primary');\n    });\n<\/script>\n"},uLm5:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return R}));var r=n("q1tI"),o=n.n(r),a=(n("17x9"),n("mOgX")),i=n("v8ZZ"),c=n.n(i),s=n("irdr"),l=n.n(s),u=n("M4Oy"),p=n.n(u),f=n("umIL"),d=n("wdKx");function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){O(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=j(t);if(e){var o=j(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function j(t){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var E='<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />',x="\tbody { margin: 0; padding: 0; }\n\t#map { position: absolute; top: 0; bottom: 0; width: 100%; }",R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(s,t);var e,n,r,i=w(s);function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(e=i.call(this,t)).state={unsupported:!1},e}return e=s,(n=[{key:"displayHTML",value:function(t){return'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8" />\n<title>'.concat(this.props.frontMatter.title,"</title>\n").concat(E,'\n<script src="').concat(a.a.js(),'"><\/script>\n<link href="').concat(a.a.css(),'" rel="stylesheet" />\n<style>\n').concat(x,"\n</style>\n</head>\n<body>\n").concat(t,"\n</body>\n</html>")}},{key:"renderHTML",value:function(t){return"<!DOCTYPE html>\n<html>\n<head>\n<meta charset=utf-8 />\n<title>".concat(this.props.frontMatter.title,"</title>\n").concat(E,"\n<script src='https://js.sentry-cdn.com/b4e18cb1943f46289f67ca6a771bd341.min.js' crossorigin=\"anonymous\"><\/script>\n<script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-instrumentile/v3.0.0/mapbox-gl-instrumentile.js' crossorigin=\"anonymous\"><\/script>\n\n<script src='").concat(a.a.js({local:!0}),"'><\/script>\n<link href='").concat(a.a.css({local:!0}),"' rel='stylesheet' />\n<style>\n    ").concat(x,"\n</style>\n</head>\n<body>\n").concat(t,"\n</body>\n<script>\n\n<\/script>\n</html>")}},{key:"renderSnippet",value:function(){var t=this.props,e=t.html,n=t.location,r=this.displayHTML(e),a=d.extractor(r);return o.a.createElement("div",{className:"bg-white"},o.a.createElement("div",{id:"code",className:"relative"},o.a.createElement(l.a,{code:this.displayHTML(e),highlighter:function(){return f.highlightHtml},edit:{frontMatter:y(y({},this.props.frontMatter),{},{pathname:n.pathname}),head:E,js:a.js,html:a.html,css:a.css,resources:a.resources}})))}},{key:"render",value:function(){var t=this,e=this.props,n=e.frontMatter,r=e.height;return o.a.createElement("div",{className:"prose"},this.state.unsupported&&o.a.createElement(p.a,{title:"Goong GL unsupported",theme:"warning"},"Goong GL requires"," ",o.a.createElement("a",{className:"link",href:"https://caniuse.com/#feat=webgl"},"WebGL support"),". Please check that you are using a supported browser and that"," ",o.a.createElement("a",{className:"link",href:"https://get.webgl.org/"},"WebGL is enabled"),"."),c()()&&o.a.createElement("iframe",{id:"demo",style:{height:r},className:"w-full mt18",allowFullScreen:!0,mozallowfullscreen:"true",webkitallowfullscreen:"true",ref:function(e){t.iframe=e},title:"".concat(n.title," example")}),this.props.displaySnippet&&this.renderSnippet())}},{key:"componentDidMount",value:function(){if(c()()||this.setState({unsupported:!0}),this.iframe){var t=this.iframe.contentWindow.document;t.open(),t.write(this.renderHTML(this.props.html)),t.close()}}}])&&b(e.prototype,n),r&&b(e,r),s}(o.a.Component);O(R,"defaultProps",{displaySnippet:!0,height:400})},v8ZZ:function(t,e,n){"use strict";function r(t){return!o(t)}function o(t){return"undefined"==typeof window||"undefined"==typeof document?"not a browser":Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray?Function.prototype&&Function.prototype.bind?Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions?"JSON"in window&&"parse"in JSON&&"stringify"in JSON?function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return!1;var t,e,n=new Blob([""],{type:"text/javascript"}),r=URL.createObjectURL(n);try{e=new Worker(r),t=!0}catch(e){t=!1}e&&e.terminate();return URL.revokeObjectURL(r),t}()?"Uint8ClampedArray"in window?ArrayBuffer.isView?function(){const t=document.createElement("canvas");t.width=t.height=1;const e=t.getContext("2d");if(!e)return!1;const n=e.getImageData(0,0,1,1);return n&&n.width===t.width}()?function(t){void 0===a[t]&&(a[t]=function(t){const e=function(t){var e=document.createElement("canvas"),n=Object.create(r.webGLContextAttributes);return n.failIfMajorPerformanceCaveat=t,e.probablySupportsContext?e.probablySupportsContext("webgl",n)||e.probablySupportsContext("experimental-webgl",n):e.supportsContext?e.supportsContext("webgl",n)||e.supportsContext("experimental-webgl",n):e.getContext("webgl",n)||e.getContext("experimental-webgl",n)}(t);if(!e)return!1;const n=e.createShader(e.VERTEX_SHADER);if(!n||e.isContextLost())return!1;return e.shaderSource(n,"void main() {}"),e.compileShader(n),!0===e.getShaderParameter(n,e.COMPILE_STATUS)}(t));return a[t]}(t&&t.failIfMajorPerformanceCaveat)?void 0:"insufficient WebGL support":"insufficient Canvas/getImageData support":"insufficient ArrayBuffer support":"insufficient Uint8ClampedArray support":"insufficient worker support":"insufficient JSON support":"insufficient Object support":"insufficient Function support":"insufficent Array support"}t.exports?t.exports=r:window&&(window.mapboxgl=window.mapboxgl||{},window.mapboxgl.supported=r,window.mapboxgl.notSupportedReason=o);var a={};r.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0}},wdKx:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.extractor=function(t){var e="",n={js:[],css:[]},r=/src=("|')([^']*?)("|')/g,o=/href=("|')([^']*?)("|')/g,a=/<script>((.|\n)*)<\/script>/,i=/<style\b[^>]*>([\s\S]*?)<\/style>/g,c=/<body[\s\S]*?>((.|\n)*)<\/body>/,s=t.match(i),l="".concat(t.replace(a,"")),u=t.match(a)[1];s&&(s.forEach((function(t){e+=t.replace(/<[^>]*>/g,"")})),l="".concat(l.replace(i,"")));if(t.match(r)){var p=t.match(r).map((function(t){return t.replace("src=","").replace(/["']/g,"")}));n.js=n.js.concat(p),l="".concat(l.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/g,""))}if(t.match(o)){var f=t.match(o).map((function(t){return t.replace("href=","").replace(/["']/g,"")}));n.css=n.css.concat(f),l="".concat(l.replace(/<link[\s\S]*?>/g,""))}l.match(c)&&(l=l.match(c)[1]);return{html:l,css:e,js:u,resources:n}}}}]);
//# sourceMappingURL=example-add-3d-model-9c1bf199678414293931.chunk.js.map