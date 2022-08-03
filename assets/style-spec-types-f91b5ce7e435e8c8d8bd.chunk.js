(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{"8CN9":function(e,t,a){var n=a("Dpw9");n=n.default||n,e.exports={component:n,props:{frontMatter:{title:"Types",id:"types",description:"A Goong style contains values of various types, most commonly as values for the style properties of a layer.",contentType:"specification",order:9,layout:"page",hideFeedback:!0,products:["Mapbox Style Specification"]}}}},Dpw9:function(e,t,a){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(a("q1tI")),s=(a("yr+R"),a("cQZ0"),o(a("1wO5")));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=f(e);if(t){var l=f(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return i(this,a)}}function i(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d={title:"Types",id:"types",description:"A Goong style contains values of various types, most commonly as values for the style properties of a layer.",contentType:"specification",order:9,layout:"page",hideFeedback:!0,products:["Mapbox Style Specification"],headings:[{text:"Color",slug:"color",level:2},{text:"Formatted",slug:"formatted",level:2},{text:"ResolvedImage",slug:"resolvedimage",level:2},{text:"String",slug:"string",level:2},{text:"Boolean",slug:"boolean",level:2},{text:"Number",slug:"number",level:2},{text:"Array",slug:"array",level:2}]},E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(i,e);var t,a,n,o=p(i);function i(){return c(this,i),o.apply(this,arguments)}return t=i,(a=[{key:"render",value:function(){var e=this.props;return l.default.createElement(s.default,r({},e,{frontMatter:d}),l.default.createElement("div",null,l.default.createElement("p",null,"A Goong style contains values of various types, most commonly as values for the style properties of a layer."),l.default.createElement("h2",{id:"color",className:"anchor"},l.default.createElement("a",{href:"#color",className:"unprose color-blue-on-hover"},"Color")),l.default.createElement("p",null,"The ",l.default.createElement("code",null,"color")," type is a color in the ",l.default.createElement("a",{href:"https://en.wikipedia.org/wiki/SRGB"},"sRGB color space"),". Colors are JSON strings in a variety of permitted formats: HTML-style hex values, RGB, RGBA, HSL, and HSLA. Predefined HTML colors names, like ",l.default.createElement("code",null,"yellow")," and ",l.default.createElement("code",null,"blue"),", are also permitted."),l.default.createElement("pre",{className:"language-json"},l.default.createElement("code",{className:"language-json"},l.default.createElement("span",{className:"token punctuation"},"{"),"\n","    ",l.default.createElement("span",{className:"token property"},'"line-color"'),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token string"},'"#ff0"'),l.default.createElement("span",{className:"token punctuation"},","),"\n","    ",l.default.createElement("span",{className:"token property"},'"line-color"'),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token string"},'"#ffff00"'),l.default.createElement("span",{className:"token punctuation"},","),"\n","    ",l.default.createElement("span",{className:"token property"},'"line-color"'),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token string"},'"rgb(255, 255, 0)"'),l.default.createElement("span",{className:"token punctuation"},","),"\n","    ",l.default.createElement("span",{className:"token property"},'"line-color"'),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token string"},'"rgba(255, 255, 0, 1)"'),l.default.createElement("span",{className:"token punctuation"},","),"\n","    ",l.default.createElement("span",{className:"token property"},'"line-color"'),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token string"},'"hsl(100, 50%, 50%)"'),l.default.createElement("span",{className:"token punctuation"},","),"\n","    ",l.default.createElement("span",{className:"token property"},'"line-color"'),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token string"},'"hsla(100, 50%, 50%, 1)"'),l.default.createElement("span",{className:"token punctuation"},","),"\n","    ",l.default.createElement("span",{className:"token property"},'"line-color"'),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token string"},'"yellow"'),"\n",l.default.createElement("span",{className:"token punctuation"},"}"),"\n")),l.default.createElement("p",null,"Especially of note is the support for HSL, which can be ",l.default.createElement("a",{href:"http://mothereffinghsl.com/"},"easier to reason about than RGB"),"."),l.default.createElement("h2",{id:"formatted",className:"anchor"},l.default.createElement("a",{href:"#formatted",className:"unprose color-blue-on-hover"},"Formatted")),l.default.createElement("p",null,"The ",l.default.createElement("code",null,"formatted")," type is a string broken into sections annotated with separate formatting options."),l.default.createElement("pre",{className:"language-json"},l.default.createElement("code",{className:"language-json"},l.default.createElement("span",{className:"token punctuation"},"{"),"\n","    ",l.default.createElement("span",{className:"token property"},'"text-field"'),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token punctuation"},"["),l.default.createElement("span",{className:"token string"},'"format"'),l.default.createElement("span",{className:"token punctuation"},","),"\n","        ",l.default.createElement("span",{className:"token string"},'"foo"'),l.default.createElement("span",{className:"token punctuation"},",")," ",l.default.createElement("span",{className:"token punctuation"},"{")," ",l.default.createElement("span",{className:"token property"},'"font-scale"'),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token number"},"1.2")," ",l.default.createElement("span",{className:"token punctuation"},"}"),l.default.createElement("span",{className:"token punctuation"},","),"\n","        ",l.default.createElement("span",{className:"token string"},'"bar"'),l.default.createElement("span",{className:"token punctuation"},",")," ",l.default.createElement("span",{className:"token punctuation"},"{")," ",l.default.createElement("span",{className:"token property"},'"font-scale"'),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token number"},"0.8")," ",l.default.createElement("span",{className:"token punctuation"},"}"),"\n","    ",l.default.createElement("span",{className:"token punctuation"},"]"),"\n",l.default.createElement("span",{className:"token punctuation"},"}"),"\n")),l.default.createElement("h2",{id:"resolvedimage",className:"anchor"},l.default.createElement("a",{href:"#resolvedimage",className:"unprose color-blue-on-hover"},"ResolvedImage")),l.default.createElement("p",null,"The ",l.default.createElement("code",null,"resolvedImage")," type is an image (e.g., an icon or pattern) which is used in a layer. An input to the ",l.default.createElement("code",null,"image")," expression operator is checked against the current map style to see if it is available to be rendered or not, and the result is returned in the ",l.default.createElement("code",null,"resolvedImage")," type. This approach allows developers to define a series of images which the map can fall back to if previous images are not found, which cannot be achieved by providing, for example, ",l.default.createElement("code",null,"icon-image")," with a plain string (because multiple strings cannot be supplied to ",l.default.createElement("code",null,"icon-image")," and multiple images cannot be defined in a string)."),l.default.createElement("pre",{className:"language-json"},l.default.createElement("code",{className:"language-json"},l.default.createElement("span",{className:"token punctuation"},"{"),"\n","    ",l.default.createElement("span",{className:"token property"},'"icon-image"'),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token punctuation"},"["),l.default.createElement("span",{className:"token string"},'"coalesce"'),l.default.createElement("span",{className:"token punctuation"},",")," ",l.default.createElement("span",{className:"token punctuation"},"["),l.default.createElement("span",{className:"token string"},'"image"'),l.default.createElement("span",{className:"token punctuation"},",")," ",l.default.createElement("span",{className:"token string"},'"myImage"'),l.default.createElement("span",{className:"token punctuation"},"]"),l.default.createElement("span",{className:"token punctuation"},",")," ",l.default.createElement("span",{className:"token punctuation"},"["),l.default.createElement("span",{className:"token string"},'"image"'),l.default.createElement("span",{className:"token punctuation"},",")," ",l.default.createElement("span",{className:"token string"},'"fallbackImage"'),l.default.createElement("span",{className:"token punctuation"},"]"),l.default.createElement("span",{className:"token punctuation"},"]"),"\n",l.default.createElement("span",{className:"token punctuation"},"}"),"\n")),l.default.createElement("h2",{id:"string",className:"anchor"},l.default.createElement("a",{href:"#string",className:"unprose color-blue-on-hover"},"String")),l.default.createElement("p",null,"A string is text. In Goong styles, strings are in quotes."),l.default.createElement("pre",{className:"language-json"},l.default.createElement("code",{className:"language-json"},l.default.createElement("span",{className:"token punctuation"},"{"),"\n","    ",l.default.createElement("span",{className:"token property"},'"source"'),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token string"},'"mySource"'),"\n",l.default.createElement("span",{className:"token punctuation"},"}"),"\n")),l.default.createElement("h2",{id:"boolean",className:"anchor"},l.default.createElement("a",{href:"#boolean",className:"unprose color-blue-on-hover"},"Boolean")),l.default.createElement("p",null,"Boolean means yes or no, so it accepts the values ",l.default.createElement("code",null,"true")," or ",l.default.createElement("code",null,"false"),"."),l.default.createElement("pre",{className:"language-json"},l.default.createElement("code",{className:"language-json"},l.default.createElement("span",{className:"token punctuation"},"{"),"\n","    ",l.default.createElement("span",{className:"token property"},'"fill-enabled"'),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token boolean"},"true"),"\n",l.default.createElement("span",{className:"token punctuation"},"}"),"\n")),l.default.createElement("h2",{id:"number",className:"anchor"},l.default.createElement("a",{href:"#number",className:"unprose color-blue-on-hover"},"Number")),l.default.createElement("p",null,"A number value, often an integer or floating point (decimal number). Written without quotes."),l.default.createElement("pre",{className:"language-json"},l.default.createElement("code",{className:"language-json"},l.default.createElement("span",{className:"token punctuation"},"{"),"\n","    ",l.default.createElement("span",{className:"token property"},'"text-size"'),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token number"},"24"),"\n",l.default.createElement("span",{className:"token punctuation"},"}"),"\n")),l.default.createElement("h2",{id:"array",className:"anchor"},l.default.createElement("a",{href:"#array",className:"unprose color-blue-on-hover"},"Array")),l.default.createElement("p",null,"Arrays are comma-separated lists of one or more numbers in a specific order. For example, they're used in line dash arrays, in which the numbers specify intervals of line, break, and line again. If an array is used as an argument in an expression, the array must be wrapped in a ",l.default.createElement("code",null,"literal")," expression."),l.default.createElement("pre",{className:"language-json"},l.default.createElement("code",{className:"language-json"},l.default.createElement("span",{className:"token punctuation"},"{"),"\n","    ",l.default.createElement("span",{className:"token property"},'"line-dasharray"'),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token punctuation"},"["),l.default.createElement("span",{className:"token number"},"2"),l.default.createElement("span",{className:"token punctuation"},",")," ",l.default.createElement("span",{className:"token number"},"4"),l.default.createElement("span",{className:"token punctuation"},"]"),"\n",l.default.createElement("span",{className:"token punctuation"},"}"),"\n","\n",l.default.createElement("span",{className:"token punctuation"},"{"),"\n","    ",l.default.createElement("span",{className:"token property"},'"circle-color"'),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token punctuation"},"["),l.default.createElement("span",{className:"token string"},'"in"'),l.default.createElement("span",{className:"token punctuation"},",")," ",l.default.createElement("span",{className:"token number"},"1"),l.default.createElement("span",{className:"token punctuation"},",")," ",l.default.createElement("span",{className:"token punctuation"},"["),l.default.createElement("span",{className:"token string"},'"literal"'),l.default.createElement("span",{className:"token punctuation"},",")," ",l.default.createElement("span",{className:"token punctuation"},"["),l.default.createElement("span",{className:"token number"},"1"),l.default.createElement("span",{className:"token punctuation"},",")," ",l.default.createElement("span",{className:"token number"},"2"),l.default.createElement("span",{className:"token punctuation"},",")," ",l.default.createElement("span",{className:"token number"},"3"),l.default.createElement("span",{className:"token punctuation"},"]"),l.default.createElement("span",{className:"token punctuation"},"]"),l.default.createElement("span",{className:"token punctuation"},"]"),"\n",l.default.createElement("span",{className:"token punctuation"},"}"),"\n"))))}}])&&u(t.prototype,a),n&&u(t,n),i}(l.default.PureComponent);t.default=E}}]);
//# sourceMappingURL=style-spec-types-f91b5ce7e435e8c8d8bd.chunk.js.map