(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{"2mI2":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.highlightJsx=function(e){return e?l.default.highlight(e,l.default.languages.jsx):""};var r,l=(r=n("wZee"))&&r.__esModule?r:{default:r};n("CjHp")},CjHp:function(e,t){!function(e){var t=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+(?:\s+(?:[\w.:$-]+(?:=(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i,e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s'">]+)/i,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},e.languages.jsx.tag),e.languages.insertBefore("inside","attr-value",{script:{pattern:/=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:e.languages.jsx},alias:"language-javascript"}},e.languages.jsx.tag);var n=function(e){return e?"string"==typeof e?e:"string"==typeof e.content?e.content:e.content.map(n).join(""):""},r=function(t){for(var l=[],o=0;o<t.length;o++){var a=t[o],u=!1;if("string"!=typeof a&&("tag"===a.type&&a.content[0]&&"tag"===a.content[0].type?"</"===a.content[0].content[0].content?l.length>0&&l[l.length-1].tagName===n(a.content[0].content[1])&&l.pop():"/>"===a.content[a.content.length-1].content||l.push({tagName:n(a.content[0].content[1]),openedBraces:0}):l.length>0&&"punctuation"===a.type&&"{"===a.content?l[l.length-1].openedBraces++:l.length>0&&l[l.length-1].openedBraces>0&&"punctuation"===a.type&&"}"===a.content?l[l.length-1].openedBraces--:u=!0),(u||"string"==typeof a)&&l.length>0&&0===l[l.length-1].openedBraces){var c=n(a);o<t.length-1&&("string"==typeof t[o+1]||"plain-text"===t[o+1].type)&&(c+=n(t[o+1]),t.splice(o+1,1)),o>0&&("string"==typeof t[o-1]||"plain-text"===t[o-1].type)&&(c=n(t[o-1])+c,t.splice(o-1,1),o--),t[o]=new e.Token("plain-text",c,null,c)}a.content&&"string"!=typeof a.content&&r(a.content)}};e.hooks.add("after-tokenize",(function(e){"jsx"!==e.language&&"tsx"!==e.language||r(e.tokens)}))}(Prism)},o2Id:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(n("q1tI")),o=(n("yr+R"),n("cQZ0"),u(n("wWV/"))),a=u(n("1wO5"));function u(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var l=g(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m={title:"Directions",id:"directions",description:"Goong Directions API.",contentType:"API",order:2,layout:"page",hideFeedback:!0,products:["Documentation"],headings:[]},y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(d,e);var t,n,r,u=p(d);function d(){return i(this,d),u.apply(this,arguments)}return t=d,(n=[{key:"render",value:function(){var e=this.props;return l.default.createElement(a.default,c({},e,{frontMatter:m}),l.default.createElement("div",null,l.default.createElement("p",null,"Get Direction from A to B.  "),l.default.createElement("p",null,l.default.createElement("code",null,"URL: /Direction")),l.default.createElement("p",null,l.default.createElement("code",null,"Method: GET")),l.default.createElement("div",{className:"scroll-auto mb18"},l.default.createElement("table",null,l.default.createElement("thead",null,l.default.createElement("tr",null,l.default.createElement("th",null,"Param"),l.default.createElement("th",null,"Description"),l.default.createElement("th",null,"Example"))),l.default.createElement("tbody",null,l.default.createElement("tr",null,l.default.createElement("td",null,l.default.createElement("code",null,"origin")),l.default.createElement("td",null,"The origin (start) coordinate string (Required)"),l.default.createElement("td",null,l.default.createElement("code",null,"20.981971,105.864323"))),l.default.createElement("tr",null,l.default.createElement("td",null,l.default.createElement("code",null,"destination")),l.default.createElement("td",null,"The destination coordinate string (Required)"),l.default.createElement("td",null,l.default.createElement("code",null,"21.03876,105.79810"))),l.default.createElement("tr",null,l.default.createElement("td",null,l.default.createElement("code",null,"alternatives")),l.default.createElement("td",null,"Boolean, if ",l.default.createElement("code",null,"true"),", Directions service may return several routes"),l.default.createElement("td",null,l.default.createElement("code",null,"true"))),l.default.createElement("tr",null,l.default.createElement("td",null,l.default.createElement("code",null,"vehicle")),l.default.createElement("td",null,"Vehicle type. Options are ",l.default.createElement("code",null,"car"),", ",l.default.createElement("code",null,"bike"),", ",l.default.createElement("code",null,"taxi"),", ",l.default.createElement("code",null,"truck"),", ",l.default.createElement("code",null,"hd")," (for ride hailing vehicles)"),l.default.createElement("td",null,l.default.createElement("code",null,"car")))))),l.default.createElement("p",null,"Example request"),l.default.createElement(o.default,{lang:"javascript"},'$ curl "https://rsapi.goong.io/Direction?origin=21.046623224000029,105.790168203000060&destination=21.046666732000062,105.790169569000060&vehicle=car&api_key={YOUR_API_KEY}"'),l.default.createElement("p",null,"Example response"),l.default.createElement("p",null,l.default.createElement("code",null,"application/json")),l.default.createElement(o.default,{lang:"javascript"},'\n{\n  "geocoded_waypoints": [],\n  "routes": [\n    {\n      "bounds": {},\n      "legs": [\n        {\n          "distance": {\n            "text": "5 m",\n            "value": 5\n          },\n          "duration": {\n            "text": "1 giây",\n            "value": 1\n          },\n          "steps": []\n        }\n      ],\n      "overview_polyline": {\n        "points": "mtm_C{cudSG@"\n      },\n      "warnings": [],\n      "waypoint_order": []\n    }\n  ]\n}\n  ')))}}])&&f(t.prototype,n),r&&f(t,r),d}(l.default.PureComponent);t.default=y},qUsC:function(e,t,n){var r=n("o2Id");r=r.default||r,e.exports={component:r,props:{frontMatter:{title:"Directions",id:"directions",description:"Goong Directions API.",contentType:"API",order:2,layout:"page",hideFeedback:!0,products:["Documentation"],prependJs:["import Copyable from '../../components/copyable';"]}}}},"wWV/":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var r=n("q1tI"),l=n.n(r),o=(n("17x9"),n("irdr")),a=n.n(o),u=n("umIL"),c=n("2mI2");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var l=m(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(i,e);var t,n,r,o=d(i);function i(){return f(this,i),o.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){var e={html:function(){return u.highlightHtml},markup:function(){return u.highlightHtml},javascript:function(){return c.highlightJsx}};return l.a.createElement(a.a,{maxHeight:300,code:this.props.children,highlighter:e[this.props.lang]})}}])&&s(t.prototype,n),r&&s(t,r),i}(l.a.Component)}}]);
//# sourceMappingURL=rest-directions-f8eb922cf274989cfb51.chunk.js.map