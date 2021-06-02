(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{"2mI2":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.highlightJsx=function(e){return e?a.default.highlight(e,a.default.languages.jsx):""};var r,a=(r=n("wZee"))&&r.__esModule?r:{default:r};n("CjHp")},CjHp:function(e,t){!function(e){var t=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+(?:\s+(?:[\w.:$-]+(?:=(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i,e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s'">]+)/i,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},e.languages.jsx.tag),e.languages.insertBefore("inside","attr-value",{script:{pattern:/=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:e.languages.jsx},alias:"language-javascript"}},e.languages.jsx.tag);var n=function(e){return e?"string"==typeof e?e:"string"==typeof e.content?e.content:e.content.map(n).join(""):""},r=function(t){for(var a=[],o=0;o<t.length;o++){var l=t[o],u=!1;if("string"!=typeof l&&("tag"===l.type&&l.content[0]&&"tag"===l.content[0].type?"</"===l.content[0].content[0].content?a.length>0&&a[a.length-1].tagName===n(l.content[0].content[1])&&a.pop():"/>"===l.content[l.content.length-1].content||a.push({tagName:n(l.content[0].content[1]),openedBraces:0}):a.length>0&&"punctuation"===l.type&&"{"===l.content?a[a.length-1].openedBraces++:a.length>0&&a[a.length-1].openedBraces>0&&"punctuation"===l.type&&"}"===l.content?a[a.length-1].openedBraces--:u=!0),(u||"string"==typeof l)&&a.length>0&&0===a[a.length-1].openedBraces){var i=n(l);o<t.length-1&&("string"==typeof t[o+1]||"plain-text"===t[o+1].type)&&(i+=n(t[o+1]),t.splice(o+1,1)),o>0&&("string"==typeof t[o-1]||"plain-text"===t[o-1].type)&&(i=n(t[o-1])+i,t.splice(o-1,1),o--),t[o]=new e.Token("plain-text",i,null,i)}l.content&&"string"!=typeof l.content&&r(l.content)}};e.hooks.add("after-tokenize",(function(e){"jsx"!==e.language&&"tsx"!==e.language||r(e.tokens)}))}(Prism)},o0sC:function(e,t,n){var r=n("tm3k");r=r.default||r,e.exports={component:r,props:{frontMatter:{title:"Distance Matrix",id:"DistanceMatrix",description:"Get matrix of travel distances from multiple origins to multiple destinations.",contentType:"specification",order:2,layout:"page",hideFeedback:!0,products:["Documentation"],prependJs:["import Copyable from '../../components/copyable';"]}}}},tm3k:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n("q1tI")),o=(n("yr+R"),n("cQZ0"),u(n("wWV/"))),l=u(n("1wO5"));function u(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var a=m(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g={title:"Distance Matrix",id:"DistanceMatrix",description:"Get matrix of travel distances from multiple origins to multiple destinations.",contentType:"specification",order:2,layout:"page",hideFeedback:!0,products:["Documentation"],headings:[]},y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(d,e);var t,n,r,u=p(d);function d(){return c(this,d),u.apply(this,arguments)}return t=d,(n=[{key:"render",value:function(){var e=this.props;return a.default.createElement(l.default,i({},e,{frontMatter:g}),a.default.createElement("div",null,a.default.createElement("p",null,"Get matrix of travel distances from multiple origins to multiple destinations. The API returns distances for the recommended route between each start and end pair.   "),a.default.createElement("p",null,a.default.createElement("code",null,"URL: /DistanceMatrix")),a.default.createElement("p",null,a.default.createElement("code",null,"Method: GET")),a.default.createElement("div",{className:"scroll-auto mb18"},a.default.createElement("table",null,a.default.createElement("thead",null,a.default.createElement("tr",null,a.default.createElement("th",null,"Param"),a.default.createElement("th",null,"Description"),a.default.createElement("th",null,"Example"))),a.default.createElement("tbody",null,a.default.createElement("tr",null,a.default.createElement("td",null,a.default.createElement("code",null,"origins")),a.default.createElement("td",null,"The origin (start) coordinate string (Required)"),a.default.createElement("td",null,a.default.createElement("code",null,"20.981971,105.864323"))),a.default.createElement("tr",null,a.default.createElement("td",null,a.default.createElement("code",null,"destinations")),a.default.createElement("td",null,"The destination coordinate string (Required)"),a.default.createElement("td",null,a.default.createElement("code",null,"21.031011,105.783206|21.022328,105.790480|21.016665,105.788774"))),a.default.createElement("tr",null,a.default.createElement("td",null,a.default.createElement("code",null,"vehicle")),a.default.createElement("td",null,"Vehicle type. Options are ",a.default.createElement("code",null,"car"),", ",a.default.createElement("code",null,"bike"),", ",a.default.createElement("code",null,"taxi"),", ",a.default.createElement("code",null,"truck"),", ",a.default.createElement("code",null,"hd")," (for ride hailing vehicles)"),a.default.createElement("td",null,a.default.createElement("code",null,"car")))))),a.default.createElement("p",null,"Example request"),a.default.createElement(o.default,{lang:"javascript"},'$ curl "https://rsapi.goong.io/DistanceMatrix?origins=20.981971,105.864323&destinations=21.031011,105.783206%7C21.022328,105.790480%7C21.016665,105.788774&vehicle=car&api_key={YOUR_API_KEY}"'),a.default.createElement("p",null,"Response"),a.default.createElement("p",null,a.default.createElement("code",null,"application/json")),a.default.createElement(o.default,{lang:"javascript"},'\n{\n  "rows": [\n    {\n      "elements": [\n        {\n          "status": "OK",\n          "duration": {\n            "text": "33 phút",\n            "value": 1983\n          },\n          "distance": {\n            "text": "16 km",\n            "value": 15962\n          }\n        },\n        {\n          "status": "OK",\n          "duration": {\n            "text": "32 phút",\n            "value": 1914\n          },\n          "distance": {\n            "text": "15 km",\n            "value": 14627\n          }\n        },\n        {\n          "status": "OK",\n          "duration": {\n            "text": "29 phút",\n            "value": 1749\n          },\n          "distance": {\n            "text": "14 km",\n            "value": 13556\n          }\n        }\n      ]\n    }\n  ]\n} \n    ')))}}])&&s(t.prototype,n),r&&s(t,r),d}(a.default.PureComponent);t.default=y},"wWV/":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var r=n("q1tI"),a=n.n(r),o=(n("17x9"),n("irdr")),l=n.n(o),u=n("umIL"),i=n("2mI2");function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var a=g(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(c,e);var t,n,r,o=d(c);function c(){return s(this,c),o.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){var e={html:function(){return u.highlightHtml},markup:function(){return u.highlightHtml},javascript:function(){return i.highlightJsx}};return a.a.createElement(l.a,{maxHeight:300,code:this.props.children,highlighter:e[this.props.lang]})}}])&&f(t.prototype,n),r&&f(t,r),c}(a.a.Component)}}]);
//# sourceMappingURL=rest-distance-matrix-b61acc21810980ec8e3b.chunk.js.map