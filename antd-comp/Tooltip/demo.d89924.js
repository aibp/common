(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1710:function(n,s,a){n.exports={content:[["p","基本用法"]],meta:{title:"基本用法",filename:"docs/antd-comp/Tooltip/demo/basic.md",id:"docs-antd-comp-Tooltip-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span>Tooltip<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>QuestionOutlined<span class="token punctuation">,</span> ExclamationOutlined<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@ant-design/icons\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tooltip</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>单行气泡提示，用于解释说明、提示等<span class="token punctuation">"</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>QuestionOutlined</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tooltip</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tooltip</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>在列表中对异常状态进行说明<span class="token punctuation">"</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ExclamationOutlined</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tooltip</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n    mountNode\n<span class="token punctuation">)</span>'}],highlightedCodes:{jsx:'<span class="token keyword">import</span> <span class="token punctuation">{</span>Tooltip<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>QuestionOutlined<span class="token punctuation">,</span> ExclamationOutlined<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@ant-design/icons\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tooltip</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>单行气泡提示，用于解释说明、提示等<span class="token punctuation">"</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">QuestionOutlined</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tooltip</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tooltip</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>在列表中对异常状态进行说明<span class="token punctuation">"</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ExclamationOutlined</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tooltip</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n    mountNode\n<span class="token punctuation">)</span>'},preview:function(){var n=a(0),s=(a(7),a(118)),t=a(960);return n.createElement("div",null,n.createElement(s.Tooltip,{title:"单行气泡提示，用于解释说明、提示等",placement:"right"},n.createElement(t.QuestionOutlined,null)),n.createElement("br",null),n.createElement(s.Tooltip,{title:"在列表中对异常状态进行说明",placement:"right"},n.createElement(t.ExclamationOutlined,null)))},style:".anticon-question, .anticon-exclamation {\n    width: 14px;\n    height: 14px;\n    border: 1px solid #999;\n    color: #999;\n    font-size: 12px;\n}\n.anticon-question:hover {\n    background: #108CEE;\n    color: #fff;\n    border: 1px solid #108CEE;\n}\n.anticon-exclamation:hover {\n    background: #F38900;\n    color: #fff;\n    border: 1px solid #F38900;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.anticon-question</span>, <span class="token class">.anticon-exclamation</span> </span><span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">14</span>px<span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">14</span>px<span class="token punctuation">;</span>\n    <span class="token property">border</span><span class="token punctuation">:</span> <span class="token number">1</span>px solid <span class="token hexcode">#999</span><span class="token punctuation">;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#999</span><span class="token punctuation">;</span>\n    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">12</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.anticon-question</span><span class="token pseudo-class">:hover</span> </span><span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode">#108CEE</span><span class="token punctuation">;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#fff</span><span class="token punctuation">;</span>\n    <span class="token property">border</span><span class="token punctuation">:</span> <span class="token number">1</span>px solid <span class="token hexcode">#108CEE</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.anticon-exclamation</span><span class="token pseudo-class">:hover</span> </span><span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode">#F38900</span><span class="token punctuation">;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#fff</span><span class="token punctuation">;</span>\n    <span class="token property">border</span><span class="token punctuation">:</span> <span class="token number">1</span>px solid <span class="token hexcode">#F38900</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},794:function(n,s,a){n.exports={basic:a(1710)}},816:function(n,s,a){"use strict";var t=a(42),e=a(6),o=a(43),c=a(0),p=a(3),l=a.n(p),i=a(956),r=a(962),u=a(953);Object(r.b)("#1890ff");var k=c.forwardRef((function(n,s){var a=n.className,p=n.icon,r=n.spin,k=n.rotate,d=n.tabIndex,m=n.onClick,f=n.twoToneColor,j=Object(o.a)(n,["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"]),g=l()("anticon",Object(e.a)({},"anticon-".concat(p.name),Boolean(p.name)),a),b=l()({"anticon-spin":!!r||"loading"===p.name}),h=d;void 0===h&&m&&(h=-1);var y=k?{msTransform:"rotate(".concat(k,"deg)"),transform:"rotate(".concat(k,"deg)")}:void 0,v=Object(u.d)(f),O=Object(t.a)(v,2),w=O[0],C=O[1];return c.createElement("span",Object.assign({role:"img","aria-label":p.name},j,{ref:s,tabIndex:h,onClick:m,className:g}),c.createElement(i.a,{className:b,icon:p,primaryColor:w,secondaryColor:C,style:y}))}));k.displayName="AntdIcon",k.getTwoToneColor=r.a,k.setTwoToneColor=r.b,s.a=k},953:function(n,s,a){"use strict";a.d(s,"g",(function(){return k})),a.d(s,"c",(function(){return d})),a.d(s,"a",(function(){return f})),a.d(s,"b",(function(){return j})),a.d(s,"d",(function(){return g})),a.d(s,"e",(function(){return b})),a.d(s,"f",(function(){return v}));var t=a(6),e=a(41),o=a(351),c=a(0),p=a.n(c),l=a(29),i=a(352);function r(n,s){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable}))),a.push.apply(a,t)}return a}function u(n){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?r(Object(a),!0).forEach((function(s){Object(t.a)(n,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(a,s))}))}return n}function k(n,s){Object(l.a)(n,"[@ant-design/icons] ".concat(s))}function d(n){return"object"===Object(e.a)(n)&&"string"==typeof n.name&&"string"==typeof n.theme&&("object"===Object(e.a)(n.icon)||"function"==typeof n.icon)}function m(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(n).reduce((function(s,a){var t=n[a];switch(a){case"class":s.className=t,delete s.class;break;default:s[a]=t}return s}),{})}function f(n,s,a){return a?p.a.createElement(n.tag,u(u({key:s},m(n.attrs)),a),(n.children||[]).map((function(a,t){return f(a,"".concat(s,"-").concat(n.tag,"-").concat(t))}))):p.a.createElement(n.tag,u({key:s},m(n.attrs)),(n.children||[]).map((function(a,t){return f(a,"".concat(s,"-").concat(n.tag,"-").concat(t))})))}function j(n){return Object(o.generate)(n)[0]}function g(n){return n?Array.isArray(n)?n:[n]:[]}var b={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},h="\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",y=!1,v=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;Object(c.useEffect)((function(){y||(Object(i.insertCss)(n,{prepend:!0}),y=!0)}),[])}},954:function(n,s,a){var t={"./af":819,"./af.js":819,"./ar":820,"./ar-dz":821,"./ar-dz.js":821,"./ar-kw":822,"./ar-kw.js":822,"./ar-ly":823,"./ar-ly.js":823,"./ar-ma":824,"./ar-ma.js":824,"./ar-sa":825,"./ar-sa.js":825,"./ar-tn":826,"./ar-tn.js":826,"./ar.js":820,"./az":827,"./az.js":827,"./be":828,"./be.js":828,"./bg":829,"./bg.js":829,"./bm":830,"./bm.js":830,"./bn":831,"./bn.js":831,"./bo":832,"./bo.js":832,"./br":833,"./br.js":833,"./bs":834,"./bs.js":834,"./ca":835,"./ca.js":835,"./cs":836,"./cs.js":836,"./cv":837,"./cv.js":837,"./cy":838,"./cy.js":838,"./da":839,"./da.js":839,"./de":840,"./de-at":841,"./de-at.js":841,"./de-ch":842,"./de-ch.js":842,"./de.js":840,"./dv":843,"./dv.js":843,"./el":844,"./el.js":844,"./en-au":845,"./en-au.js":845,"./en-ca":846,"./en-ca.js":846,"./en-gb":847,"./en-gb.js":847,"./en-ie":848,"./en-ie.js":848,"./en-il":849,"./en-il.js":849,"./en-in":850,"./en-in.js":850,"./en-nz":851,"./en-nz.js":851,"./en-sg":852,"./en-sg.js":852,"./eo":853,"./eo.js":853,"./es":854,"./es-do":855,"./es-do.js":855,"./es-us":856,"./es-us.js":856,"./es.js":854,"./et":857,"./et.js":857,"./eu":858,"./eu.js":858,"./fa":859,"./fa.js":859,"./fi":860,"./fi.js":860,"./fil":861,"./fil.js":861,"./fo":862,"./fo.js":862,"./fr":863,"./fr-ca":864,"./fr-ca.js":864,"./fr-ch":865,"./fr-ch.js":865,"./fr.js":863,"./fy":866,"./fy.js":866,"./ga":867,"./ga.js":867,"./gd":868,"./gd.js":868,"./gl":869,"./gl.js":869,"./gom-deva":870,"./gom-deva.js":870,"./gom-latn":871,"./gom-latn.js":871,"./gu":872,"./gu.js":872,"./he":873,"./he.js":873,"./hi":874,"./hi.js":874,"./hr":875,"./hr.js":875,"./hu":876,"./hu.js":876,"./hy-am":877,"./hy-am.js":877,"./id":878,"./id.js":878,"./is":879,"./is.js":879,"./it":880,"./it-ch":881,"./it-ch.js":881,"./it.js":880,"./ja":882,"./ja.js":882,"./jv":883,"./jv.js":883,"./ka":884,"./ka.js":884,"./kk":885,"./kk.js":885,"./km":886,"./km.js":886,"./kn":887,"./kn.js":887,"./ko":888,"./ko.js":888,"./ku":889,"./ku.js":889,"./ky":890,"./ky.js":890,"./lb":891,"./lb.js":891,"./lo":892,"./lo.js":892,"./lt":893,"./lt.js":893,"./lv":894,"./lv.js":894,"./me":895,"./me.js":895,"./mi":896,"./mi.js":896,"./mk":897,"./mk.js":897,"./ml":898,"./ml.js":898,"./mn":899,"./mn.js":899,"./mr":900,"./mr.js":900,"./ms":901,"./ms-my":902,"./ms-my.js":902,"./ms.js":901,"./mt":903,"./mt.js":903,"./my":904,"./my.js":904,"./nb":905,"./nb.js":905,"./ne":906,"./ne.js":906,"./nl":907,"./nl-be":908,"./nl-be.js":908,"./nl.js":907,"./nn":909,"./nn.js":909,"./oc-lnc":910,"./oc-lnc.js":910,"./pa-in":911,"./pa-in.js":911,"./pl":912,"./pl.js":912,"./pt":913,"./pt-br":914,"./pt-br.js":914,"./pt.js":913,"./ro":915,"./ro.js":915,"./ru":916,"./ru.js":916,"./sd":917,"./sd.js":917,"./se":918,"./se.js":918,"./si":919,"./si.js":919,"./sk":920,"./sk.js":920,"./sl":921,"./sl.js":921,"./sq":922,"./sq.js":922,"./sr":923,"./sr-cyrl":924,"./sr-cyrl.js":924,"./sr.js":923,"./ss":925,"./ss.js":925,"./sv":926,"./sv.js":926,"./sw":927,"./sw.js":927,"./ta":928,"./ta.js":928,"./te":929,"./te.js":929,"./tet":930,"./tet.js":930,"./tg":931,"./tg.js":931,"./th":932,"./th.js":932,"./tk":933,"./tk.js":933,"./tl-ph":934,"./tl-ph.js":934,"./tlh":935,"./tlh.js":935,"./tr":936,"./tr.js":936,"./tzl":937,"./tzl.js":937,"./tzm":938,"./tzm-latn":939,"./tzm-latn.js":939,"./tzm.js":938,"./ug-cn":940,"./ug-cn.js":940,"./uk":941,"./uk.js":941,"./ur":942,"./ur.js":942,"./uz":943,"./uz-latn":944,"./uz-latn.js":944,"./uz.js":943,"./vi":945,"./vi.js":945,"./x-pseudo":946,"./x-pseudo.js":946,"./yo":947,"./yo.js":947,"./zh-cn":948,"./zh-cn.js":948,"./zh-hk":949,"./zh-hk.js":949,"./zh-mo":950,"./zh-mo.js":950,"./zh-tw":951,"./zh-tw.js":951};function e(n){var s=o(n);return a(s)}function o(n){if(!a.o(t,n)){var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}return t[n]}e.keys=function(){return Object.keys(t)},e.resolve=o,n.exports=e,e.id=954},956:function(n,s,a){"use strict";var t=a(43),e=a(6),o=a(953);function c(n,s){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable}))),a.push.apply(a,t)}return a}function p(n){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?c(Object(a),!0).forEach((function(s){Object(e.a)(n,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(a,s))}))}return n}var l={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};var i=function(n){var s=n.icon,a=n.className,e=n.onClick,c=n.style,i=n.primaryColor,r=n.secondaryColor,u=Object(t.a)(n,["icon","className","onClick","style","primaryColor","secondaryColor"]),k=l;if(i&&(k={primaryColor:i,secondaryColor:r||Object(o.b)(i)}),Object(o.f)(),Object(o.g)(Object(o.c)(s),"icon should be icon definiton, but got ".concat(s)),!Object(o.c)(s))return null;var d=s;return d&&"function"==typeof d.icon&&(d=p(p({},d),{},{icon:d.icon(k.primaryColor,k.secondaryColor)})),Object(o.a)(d.icon,"svg-".concat(d.name),p({className:a,onClick:e,style:c,"data-icon":d.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},u))};i.displayName="IconReact",i.getTwoToneColors=function(){return p({},l)},i.setTwoToneColors=function(n){var s=n.primaryColor,a=n.secondaryColor;l.primaryColor=s,l.secondaryColor=a||Object(o.b)(s),l.calculated=!!a},s.a=i},962:function(n,s,a){"use strict";a.d(s,"b",(function(){return c})),a.d(s,"a",(function(){return p}));var t=a(42),e=a(956),o=a(953);function c(n){var s=Object(o.d)(n),a=Object(t.a)(s,2),c=a[0],p=a[1];return e.a.setTwoToneColors({primaryColor:c,secondaryColor:p})}function p(){var n=e.a.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor}},977:function(n,s,a){"use strict";var t=a(0),e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"},o=a(816),c=function(n,s){return t.createElement(o.a,Object.assign({},n,{ref:s,icon:e}))};c.displayName="CheckCircleFilled";s.a=t.forwardRef(c)},978:function(n,s,a){"use strict";var t=a(0),e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"},o=a(816),c=function(n,s){return t.createElement(o.a,Object.assign({},n,{ref:s,icon:e}))};c.displayName="ExclamationCircleFilled";s.a=t.forwardRef(c)},979:function(n,s,a){"use strict";var t=a(0),e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"}}]},name:"close-circle",theme:"filled"},o=a(816),c=function(n,s){return t.createElement(o.a,Object.assign({},n,{ref:s,icon:e}))};c.displayName="CloseCircleFilled";s.a=t.forwardRef(c)},980:function(n,s,a){"use strict";var t=a(0),e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"}}]},name:"exclamation-circle",theme:"outlined"},o=a(816),c=function(n,s){return t.createElement(o.a,Object.assign({},n,{ref:s,icon:e}))};c.displayName="ExclamationCircleOutlined";s.a=t.forwardRef(c)},981:function(n,s,a){"use strict";var t=a(0),e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"minus-circle",theme:"outlined"},o=a(816),c=function(n,s){return t.createElement(o.a,Object.assign({},n,{ref:s,icon:e}))};c.displayName="MinusCircleOutlined";s.a=t.forwardRef(c)},982:function(n,s,a){"use strict";var t=a(0),e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},o=a(816),c=function(n,s){return t.createElement(o.a,Object.assign({},n,{ref:s,icon:e}))};c.displayName="PlusOutlined";s.a=t.forwardRef(c)},983:function(n,s,a){"use strict";var t=a(0),e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"},o=a(816),c=function(n,s){return t.createElement(o.a,Object.assign({},n,{ref:s,icon:e}))};c.displayName="LeftOutlined";s.a=t.forwardRef(c)},984:function(n,s,a){"use strict";var t=a(0),e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},o=a(816),c=function(n,s){return t.createElement(o.a,Object.assign({},n,{ref:s,icon:e}))};c.displayName="DownOutlined";s.a=t.forwardRef(c)}}]);