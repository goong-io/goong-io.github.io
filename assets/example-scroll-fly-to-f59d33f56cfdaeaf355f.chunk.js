(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{M4Oy:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((r=n("fG8n"))&&r.__esModule?r:{default:r}).default;t.default=o},NTXs:function(e,t,n){var r=n("yYVR");r=r.default||r,e.exports={component:r,props:{frontMatter:{title:"Fly to a location based on scroll position",description:"Scroll down through the story and the map will fly to the chapter's location.",topics:["Camera"],thumbnail:"scroll-fly-to",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["Documentation"],prependJs:["import Example from '../../components/example';","import html from './scroll-fly-to.html';"]}}}},mOgX:function(e,t,n){"use strict";var r=n("8UcX");n("yr+R");function o(e,t){return t&&t.local,"https://cdn.jsdelivr.net/npm/@goongmaps/goong-js@".concat(r.a,"/dist/goong-js.").concat(e)}t.a={js:function(e){return o("js",e)},css:function(e){return o("css",e)}}},ocrt:function(e,t,n){"use strict";n.r(t),t.default="<style>\n    #map {\n        position: fixed;\n        width: 50%;\n    }\n    #features {\n        width: 50%;\n        margin-left: 50%;\n        font-family: sans-serif;\n        overflow-y: scroll;\n        background-color: #fafafa;\n    }\n    section {\n        padding: 25px 50px;\n        line-height: 25px;\n        border-bottom: 1px solid #ddd;\n        opacity: 0.25;\n        font-size: 13px;\n    }\n    section.active {\n        opacity: 1;\n    }\n    section:last-child {\n        border-bottom: none;\n        margin-bottom: 200px;\n    }\n</style>\n\n<div id=\"map\"></div>\n<div id=\"features\">\n    <section id=\"baker\" class=\"active\">\n        <h3>221b Baker St.</h3>\n        <p>\n            November 1895. London is shrouded in fog and Sherlock Holmes and\n            Watson pass time restlessly awaiting a new case. \"The London\n            criminal is certainly a dull fellow,\" Sherlock bemoans. \"There have\n            been numerous petty thefts,\" Watson offers in response. Just then a\n            telegram arrives from Sherlock's brother Mycroft with a mysterious\n            case.\n        </p>\n    </section>\n    <section id=\"aldgate\">\n        <h3>Aldgate Station</h3>\n        <p>\n            Arthur Cadogan West was found dead, head crushed in on train tracks\n            at Aldgate Station at 6AM Tuesday morning. West worked at Woolwich\n            Arsenal on the Bruce-Partington submarine, a secret military\n            project. Plans for the submarine had been stolen and seven of the\n            ten missing papers were found in West's possession. Mycroft implores\n            Sherlock to take the case and recover the three missing papers.\n        </p>\n    </section>\n    <section id=\"london-bridge\">\n        <h3>London Bridge</h3>\n        <p>\n            Holmes and Watson's investigations take them across London. Sherlock\n            deduces that West was murdered elsewhere, then moved to Aldgate\n            Station to create the illusion that he was crushed on the tracks by\n            a train. On their way to Woolwich Sherlock dispatches a telegram to\n            Mycroft at London Bridge: \"Send list of all foreign spies known to\n            be in England, with full address.\"\n        </p>\n    </section>\n    <section id=\"woolwich\">\n        <h3>Woolwich Arsenal</h3>\n        <p>\n            While investigating at Woolwich Arsenal Sherlock learns that West\n            did not have the three keys&mdash;door, office, and\n            safe&mdash;necessary to steal the papers. The train station clerk\n            mentions seeing an agitated West boarding the 8:15 train to London\n            Bridge. Sherlock suspects West of following someone who had access\n            to the Woolwich chief's keyring with all three keys.\n        </p>\n    </section>\n    <section id=\"gloucester\">\n        <h3>Gloucester Road</h3>\n        <p>\n            Mycroft responds to Sherlock's telegram and mentions several spies.\n            Hugo Oberstein of 13 Caulfield Gardens catches Sherlock's eye. He\n            heads to the nearby Gloucester Road station to investigate and\n            learns that the windows of Caulfield Gardens open over rail tracks\n            where trains stop frequently.\n        </p>\n    </section>\n    <section id=\"caulfield-gardens\">\n        <h3>13 Caulfield Gardens</h3>\n        <p>\n            Holmes deduces that the murderer placed West atop a stopped train at\n            Caulfield Gardens. The train traveled to Aldgate Station before\n            West's body finally toppled off. Backtracking to the criminal's\n            apartment, Holmes finds a series of classified ads from\n            <em>The Daily Telegraph</em> stashed away. All are under the name\n            Pierrot: \"Monday night after nine. Two taps. Only ourselves. Do not\n            be so suspicious. Payment in hard cash when goods delivered.\"\n        </p>\n    </section>\n    <section id=\"telegraph\">\n        <h3>The Daily Telegraph</h3>\n        <p>\n            Holmes and Watson head to The Daily Telegraph and place an ad to\n            draw out the criminal. It reads: \"To-night. Same hour. Same place.\n            Two taps. Most vitally important. Your own safety at stake.\n            Pierrot.\" The trap works and Holmes catches the criminal: Colonel\n            Valentine Walter, the brother of Woolwich Arsenal's chief. He\n            confesses to working for Hugo Oberstein to obtain the submarine\n            plans in order to pay off his debts.\n        </p>\n    </section>\n    <section id=\"charing-cross\">\n        <h3>Charing Cross Hotel</h3>\n        <p>\n            Walter writes to Oberstein and convinces him to meet in the smoking\n            room of the Charing Cross Hotel where he promises additional plans\n            for the submarine in exchange for money. The plan works and Holmes\n            and Watson catch both criminals.\n        </p>\n        <small id=\"citation\">\n            Adapted from\n            <a href=\"http://www.gutenberg.org/files/2346/2346-h/2346-h.htm\"\n                >Project Gutenberg</a\n            >\n        </small>\n    </section>\n</div>\n<script>\n    goongjs.accessToken = '8qzxZAuxcsctSlmOszInchP1A5GrmRBHJwCBCjO6';\n    var map = new goongjs.Map({\n        container: 'map',\n        style: 'https://tiles.goong.io/assets/goong_map_web.json',\n        center: [-0.15591514, 51.51830379],\n        zoom: 15.5,\n        bearing: 27,\n        pitch: 45\n    });\n\n    var chapters = {\n        'baker': {\n            bearing: 27,\n            center: [-0.15591514, 51.51830379],\n            zoom: 15.5,\n            pitch: 20\n        },\n        'aldgate': {\n            duration: 6000,\n            center: [-0.07571203, 51.51424049],\n            bearing: 150,\n            zoom: 15,\n            pitch: 0\n        },\n        'london-bridge': {\n            bearing: 90,\n            center: [-0.08533793, 51.50438536],\n            zoom: 13,\n            speed: 0.6,\n            pitch: 40\n        },\n        'woolwich': {\n            bearing: 90,\n            center: [0.05991101, 51.48752939],\n            zoom: 12.3\n        },\n        'gloucester': {\n            bearing: 45,\n            center: [-0.18335806, 51.49439521],\n            zoom: 15.3,\n            pitch: 20,\n            speed: 0.5\n        },\n        'caulfield-gardens': {\n            bearing: 180,\n            center: [-0.19684993, 51.5033856],\n            zoom: 12.3\n        },\n        'telegraph': {\n            bearing: 90,\n            center: [-0.10669358, 51.51433123],\n            zoom: 17.3,\n            pitch: 40\n        },\n        'charing-cross': {\n            bearing: 90,\n            center: [-0.12416858, 51.50779757],\n            zoom: 14.3,\n            pitch: 20\n        }\n    };\n\n    // On every scroll event, check which element is on screen\n    window.onscroll = function () {\n        var chapterNames = Object.keys(chapters);\n        for (var i = 0; i < chapterNames.length; i++) {\n            var chapterName = chapterNames[i];\n            if (isElementOnScreen(chapterName)) {\n                setActiveChapter(chapterName);\n                break;\n            }\n        }\n    };\n\n    var activeChapterName = 'baker';\n    function setActiveChapter(chapterName) {\n        if (chapterName === activeChapterName) return;\n\n        map.flyTo(chapters[chapterName]);\n\n        document.getElementById(chapterName).setAttribute('class', 'active');\n        document.getElementById(activeChapterName).setAttribute('class', '');\n\n        activeChapterName = chapterName;\n    }\n\n    function isElementOnScreen(id) {\n        var element = document.getElementById(id);\n        var bounds = element.getBoundingClientRect();\n        return bounds.top < window.innerHeight && bounds.bottom > 0;\n    }\n<\/script>\n"},uLm5:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var r=n("q1tI"),o=n.n(r),a=(n("17x9"),n("mOgX")),i=n("v8ZZ"),s=n.n(i),c=n("irdr"),l=n.n(c),p=n("M4Oy"),u=n.n(p),f=n("umIL"),h=n("wdKx");function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S='<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />',k="\tbody { margin: 0; padding: 0; }\n\t#map { position: absolute; top: 0; bottom: 0; width: 100%; }",x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(c,e);var t,n,r,i=w(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e)).state={unsupported:!1},t}return t=c,(n=[{key:"displayHTML",value:function(e){return'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8" />\n<title>'.concat(this.props.frontMatter.title,"</title>\n").concat(S,'\n<script src="').concat(a.a.js(),'"><\/script>\n<link href="').concat(a.a.css(),'" rel="stylesheet" />\n<style>\n').concat(k,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n</html>")}},{key:"renderHTML",value:function(e){return"<!DOCTYPE html>\n<html>\n<head>\n<meta charset=utf-8 />\n<title>".concat(this.props.frontMatter.title,"</title>\n").concat(S,"\n<script src='https://js.sentry-cdn.com/b4e18cb1943f46289f67ca6a771bd341.min.js' crossorigin=\"anonymous\"><\/script>\n<script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-instrumentile/v3.0.0/mapbox-gl-instrumentile.js' crossorigin=\"anonymous\"><\/script>\n\n<script src='").concat(a.a.js({local:!0}),"'><\/script>\n<link href='").concat(a.a.css({local:!0}),"' rel='stylesheet' />\n<style>\n    ").concat(k,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n<script>\n\n<\/script>\n</html>")}},{key:"renderSnippet",value:function(){var e=this.props,t=e.html,n=e.location,r=this.displayHTML(t),a=h.extractor(r);return o.a.createElement("div",{className:"bg-white"},o.a.createElement("div",{id:"code",className:"relative"},o.a.createElement(l.a,{code:this.displayHTML(t),highlighter:function(){return f.highlightHtml},edit:{frontMatter:y(y({},this.props.frontMatter),{},{pathname:n.pathname}),head:S,js:a.js,html:a.html,css:a.css,resources:a.resources}})))}},{key:"render",value:function(){var e=this,t=this.props,n=t.frontMatter,r=t.height;return o.a.createElement("div",{className:"prose"},this.state.unsupported&&o.a.createElement(u.a,{title:"Goong GL unsupported",theme:"warning"},"Goong GL requires"," ",o.a.createElement("a",{className:"link",href:"https://caniuse.com/#feat=webgl"},"WebGL support"),". Please check that you are using a supported browser and that"," ",o.a.createElement("a",{className:"link",href:"https://get.webgl.org/"},"WebGL is enabled"),"."),s()()&&o.a.createElement("iframe",{id:"demo",style:{height:r},className:"w-full mt18",allowFullScreen:!0,mozallowfullscreen:"true",webkitallowfullscreen:"true",ref:function(t){e.iframe=t},title:"".concat(n.title," example")}),this.props.displaySnippet&&this.renderSnippet())}},{key:"componentDidMount",value:function(){if(s()()||this.setState({unsupported:!0}),this.iframe){var e=this.iframe.contentWindow.document;e.open(),e.write(this.renderHTML(this.props.html)),e.close()}}}])&&b(t.prototype,n),r&&b(t,r),c}(o.a.Component);j(x,"defaultProps",{displaySnippet:!0,height:400})},v8ZZ:function(e,t,n){"use strict";function r(e){return!o(e)}function o(e){return"undefined"==typeof window||"undefined"==typeof document?"not a browser":Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray?Function.prototype&&Function.prototype.bind?Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions?"JSON"in window&&"parse"in JSON&&"stringify"in JSON?function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return!1;var e,t,n=new Blob([""],{type:"text/javascript"}),r=URL.createObjectURL(n);try{t=new Worker(r),e=!0}catch(t){e=!1}t&&t.terminate();return URL.revokeObjectURL(r),e}()?"Uint8ClampedArray"in window?ArrayBuffer.isView?function(){const e=document.createElement("canvas");e.width=e.height=1;const t=e.getContext("2d");if(!t)return!1;const n=t.getImageData(0,0,1,1);return n&&n.width===e.width}()?function(e){void 0===a[e]&&(a[e]=function(e){const t=function(e){var t=document.createElement("canvas"),n=Object.create(r.webGLContextAttributes);return n.failIfMajorPerformanceCaveat=e,t.probablySupportsContext?t.probablySupportsContext("webgl",n)||t.probablySupportsContext("experimental-webgl",n):t.supportsContext?t.supportsContext("webgl",n)||t.supportsContext("experimental-webgl",n):t.getContext("webgl",n)||t.getContext("experimental-webgl",n)}(e);if(!t)return!1;const n=t.createShader(t.VERTEX_SHADER);if(!n||t.isContextLost())return!1;return t.shaderSource(n,"void main() {}"),t.compileShader(n),!0===t.getShaderParameter(n,t.COMPILE_STATUS)}(e));return a[e]}(e&&e.failIfMajorPerformanceCaveat)?void 0:"insufficient WebGL support":"insufficient Canvas/getImageData support":"insufficient ArrayBuffer support":"insufficient Uint8ClampedArray support":"insufficient worker support":"insufficient JSON support":"insufficient Object support":"insufficient Function support":"insufficent Array support"}e.exports?e.exports=r:window&&(window.mapboxgl=window.mapboxgl||{},window.mapboxgl.supported=r,window.mapboxgl.notSupportedReason=o);var a={};r.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0}},wdKx:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractor=function(e){var t="",n={js:[],css:[]},r=/src=("|')([^']*?)("|')/g,o=/href=("|')([^']*?)("|')/g,a=/<script>((.|\n)*)<\/script>/,i=/<style\b[^>]*>([\s\S]*?)<\/style>/g,s=/<body[\s\S]*?>((.|\n)*)<\/body>/,c=e.match(i),l="".concat(e.replace(a,"")),p=e.match(a)[1];c&&(c.forEach((function(e){t+=e.replace(/<[^>]*>/g,"")})),l="".concat(l.replace(i,"")));if(e.match(r)){var u=e.match(r).map((function(e){return e.replace("src=","").replace(/["']/g,"")}));n.js=n.js.concat(u),l="".concat(l.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/g,""))}if(e.match(o)){var f=e.match(o).map((function(e){return e.replace("href=","").replace(/["']/g,"")}));n.css=n.css.concat(f),l="".concat(l.replace(/<link[\s\S]*?>/g,""))}l.match(s)&&(l=l.match(s)[1]);return{html:l,css:t,js:p,resources:n}}},yYVR:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n("q1tI")),a=(n("yr+R"),n("cQZ0"),c(n("uLm5"))),i=c(n("ocrt")),s=c(n("1wO5"));function c(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y={title:"Fly to a location based on scroll position",description:"Scroll down through the story and the map will fly to the chapter's location.",topics:["Camera"],thumbnail:"scroll-fly-to",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["Documentation"],headings:[]},b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(d,e);var t,n,r,c=h(d);function d(){return p(this,d),c.apply(this,arguments)}return t=d,(n=[{key:"render",value:function(){var e=this.props;return o.default.createElement(s.default,l({},e,{frontMatter:y}),o.default.createElement("div",null,o.default.createElement("p",null,"Scroll down through the story and the map will fly to the chapter's location."),o.default.createElement(a.default,l({html:i.default},this.props))))}}])&&u(t.prototype,n),r&&u(t,r),d}(o.default.PureComponent);t.default=b}}]);
//# sourceMappingURL=example-scroll-fly-to-f59d33f56cfdaeaf355f.chunk.js.map