(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1685:function(n,s,a){n.exports={content:[["p","基本用法"]],meta:{order:0,title:"基本用法",filename:"docs/antd-comp/Form/demo/basic.md",id:"docs-antd-comp-Form-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span>Form<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Checkbox<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> layout <span class="token operator">=</span> <span class="token punctuation">{</span>\n    labelCol<span class="token punctuation">:</span> <span class="token punctuation">{</span>span<span class="token punctuation">:</span> <span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    wrapperCol<span class="token punctuation">:</span> <span class="token punctuation">{</span>span<span class="token punctuation">:</span> <span class="token number">16</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> tailLayout <span class="token operator">=</span> <span class="token punctuation">{</span>\n    wrapperCol<span class="token punctuation">:</span> <span class="token punctuation">{</span>offset<span class="token punctuation">:</span> <span class="token number">8</span><span class="token punctuation">,</span> span<span class="token punctuation">:</span> <span class="token number">16</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Demo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> onFinish <span class="token operator">=</span> values <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Success:\'</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">const</span> onFinishFailed <span class="token operator">=</span> errorInfo <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Failed:\'</span><span class="token punctuation">,</span> errorInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token operator">&lt;</span>Form\n            <span class="token punctuation">{</span><span class="token operator">...</span>layout<span class="token punctuation">}</span>\n            name<span class="token operator">=</span><span class="token string">"basic"</span>\n            initialValues<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> remember<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n            onFinish<span class="token operator">=</span><span class="token punctuation">{</span>onFinish<span class="token punctuation">}</span>\n            onFinishFailed<span class="token operator">=</span><span class="token punctuation">{</span>onFinishFailed<span class="token punctuation">}</span>\n        <span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form.Item</span>\n            <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Username<span class="token punctuation">"</span></span>\n            <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span>\n            <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> required<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token punctuation">:</span> <span class="token string">\'Please input your username!\'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form.Item</span>\n            <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Password<span class="token punctuation">"</span></span>\n            <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>\n            <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> required<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token punctuation">:</span> <span class="token string">\'Please input your password!\'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input.Password</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>\n\n        <span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>Item <span class="token punctuation">{</span><span class="token operator">...</span>tailLayout<span class="token punctuation">}</span> name<span class="token operator">=</span><span class="token string">"remember"</span> valuePropName<span class="token operator">=</span><span class="token string">"checked"</span><span class="token operator">></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span><span class="token punctuation">></span></span>Remember me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>\n\n        <span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>Item <span class="token punctuation">{</span><span class="token operator">...</span>tailLayout<span class="token punctuation">}</span><span class="token operator">></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">htmlType</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            Submit\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],highlightedCodes:{jsx:'<span class="token keyword">import</span> <span class="token punctuation">{</span>Form<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Checkbox<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> layout <span class="token operator">=</span> <span class="token punctuation">{</span>\n    labelCol<span class="token operator">:</span> <span class="token punctuation">{</span>span<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    wrapperCol<span class="token operator">:</span> <span class="token punctuation">{</span>span<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> tailLayout <span class="token operator">=</span> <span class="token punctuation">{</span>\n    wrapperCol<span class="token operator">:</span> <span class="token punctuation">{</span>offset<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span> span<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">Demo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token function-variable function">onFinish</span> <span class="token operator">=</span> <span class="token parameter">values</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Success:\'</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">const</span> <span class="token function-variable function">onFinishFailed</span> <span class="token operator">=</span> <span class="token parameter">errorInfo</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Failed:\'</span><span class="token punctuation">,</span> errorInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span>\n            <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">layout</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>basic<span class="token punctuation">"</span></span>\n            <span class="token attr-name">initialValues</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> remember<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onFinish</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onFinish<span class="token punctuation">}</span></span>\n            <span class="token attr-name">onFinishFailed</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onFinishFailed<span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span>\n            <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Username<span class="token punctuation">"</span></span>\n            <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span>\n            <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">\'Please input your username!\'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span>\n            <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Password<span class="token punctuation">"</span></span>\n            <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>\n            <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">\'Please input your password!\'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input.Password</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">tailLayout</span><span class="token punctuation">}</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>remember<span class="token punctuation">"</span></span> <span class="token attr-name">valuePropName</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>checked<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span>Remember me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">tailLayout</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">htmlType</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            Submit\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},preview:function(){var n=a(0),s=(a(7),a(118));function t(){return(t=Object.assign||function(n){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n}).apply(this,arguments)}var p={labelCol:{span:8},wrapperCol:{span:16}},o={wrapperCol:{offset:8,span:16}},e=function(){return n.createElement(s.Form,t({},p,{name:"basic",initialValues:{remember:!0},onFinish:function(n){console.log("Success:",n)},onFinishFailed:function(n){console.log("Failed:",n)}}),n.createElement(s.Form.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}]},n.createElement(s.Input,null)),n.createElement(s.Form.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},n.createElement(s.Input.Password,null)),n.createElement(s.Form.Item,t({},o,{name:"remember",valuePropName:"checked"}),n.createElement(s.Checkbox,null,"Remember me")),n.createElement(s.Form.Item,o,n.createElement(s.Button,{type:"primary",htmlType:"submit"},"Submit")))};return n.createElement(e,null)}}},758:function(n,s,a){n.exports={basic:a(1685)}},954:function(n,s,a){var t={"./af":819,"./af.js":819,"./ar":820,"./ar-dz":821,"./ar-dz.js":821,"./ar-kw":822,"./ar-kw.js":822,"./ar-ly":823,"./ar-ly.js":823,"./ar-ma":824,"./ar-ma.js":824,"./ar-sa":825,"./ar-sa.js":825,"./ar-tn":826,"./ar-tn.js":826,"./ar.js":820,"./az":827,"./az.js":827,"./be":828,"./be.js":828,"./bg":829,"./bg.js":829,"./bm":830,"./bm.js":830,"./bn":831,"./bn.js":831,"./bo":832,"./bo.js":832,"./br":833,"./br.js":833,"./bs":834,"./bs.js":834,"./ca":835,"./ca.js":835,"./cs":836,"./cs.js":836,"./cv":837,"./cv.js":837,"./cy":838,"./cy.js":838,"./da":839,"./da.js":839,"./de":840,"./de-at":841,"./de-at.js":841,"./de-ch":842,"./de-ch.js":842,"./de.js":840,"./dv":843,"./dv.js":843,"./el":844,"./el.js":844,"./en-au":845,"./en-au.js":845,"./en-ca":846,"./en-ca.js":846,"./en-gb":847,"./en-gb.js":847,"./en-ie":848,"./en-ie.js":848,"./en-il":849,"./en-il.js":849,"./en-in":850,"./en-in.js":850,"./en-nz":851,"./en-nz.js":851,"./en-sg":852,"./en-sg.js":852,"./eo":853,"./eo.js":853,"./es":854,"./es-do":855,"./es-do.js":855,"./es-us":856,"./es-us.js":856,"./es.js":854,"./et":857,"./et.js":857,"./eu":858,"./eu.js":858,"./fa":859,"./fa.js":859,"./fi":860,"./fi.js":860,"./fil":861,"./fil.js":861,"./fo":862,"./fo.js":862,"./fr":863,"./fr-ca":864,"./fr-ca.js":864,"./fr-ch":865,"./fr-ch.js":865,"./fr.js":863,"./fy":866,"./fy.js":866,"./ga":867,"./ga.js":867,"./gd":868,"./gd.js":868,"./gl":869,"./gl.js":869,"./gom-deva":870,"./gom-deva.js":870,"./gom-latn":871,"./gom-latn.js":871,"./gu":872,"./gu.js":872,"./he":873,"./he.js":873,"./hi":874,"./hi.js":874,"./hr":875,"./hr.js":875,"./hu":876,"./hu.js":876,"./hy-am":877,"./hy-am.js":877,"./id":878,"./id.js":878,"./is":879,"./is.js":879,"./it":880,"./it-ch":881,"./it-ch.js":881,"./it.js":880,"./ja":882,"./ja.js":882,"./jv":883,"./jv.js":883,"./ka":884,"./ka.js":884,"./kk":885,"./kk.js":885,"./km":886,"./km.js":886,"./kn":887,"./kn.js":887,"./ko":888,"./ko.js":888,"./ku":889,"./ku.js":889,"./ky":890,"./ky.js":890,"./lb":891,"./lb.js":891,"./lo":892,"./lo.js":892,"./lt":893,"./lt.js":893,"./lv":894,"./lv.js":894,"./me":895,"./me.js":895,"./mi":896,"./mi.js":896,"./mk":897,"./mk.js":897,"./ml":898,"./ml.js":898,"./mn":899,"./mn.js":899,"./mr":900,"./mr.js":900,"./ms":901,"./ms-my":902,"./ms-my.js":902,"./ms.js":901,"./mt":903,"./mt.js":903,"./my":904,"./my.js":904,"./nb":905,"./nb.js":905,"./ne":906,"./ne.js":906,"./nl":907,"./nl-be":908,"./nl-be.js":908,"./nl.js":907,"./nn":909,"./nn.js":909,"./oc-lnc":910,"./oc-lnc.js":910,"./pa-in":911,"./pa-in.js":911,"./pl":912,"./pl.js":912,"./pt":913,"./pt-br":914,"./pt-br.js":914,"./pt.js":913,"./ro":915,"./ro.js":915,"./ru":916,"./ru.js":916,"./sd":917,"./sd.js":917,"./se":918,"./se.js":918,"./si":919,"./si.js":919,"./sk":920,"./sk.js":920,"./sl":921,"./sl.js":921,"./sq":922,"./sq.js":922,"./sr":923,"./sr-cyrl":924,"./sr-cyrl.js":924,"./sr.js":923,"./ss":925,"./ss.js":925,"./sv":926,"./sv.js":926,"./sw":927,"./sw.js":927,"./ta":928,"./ta.js":928,"./te":929,"./te.js":929,"./tet":930,"./tet.js":930,"./tg":931,"./tg.js":931,"./th":932,"./th.js":932,"./tk":933,"./tk.js":933,"./tl-ph":934,"./tl-ph.js":934,"./tlh":935,"./tlh.js":935,"./tr":936,"./tr.js":936,"./tzl":937,"./tzl.js":937,"./tzm":938,"./tzm-latn":939,"./tzm-latn.js":939,"./tzm.js":938,"./ug-cn":940,"./ug-cn.js":940,"./uk":941,"./uk.js":941,"./ur":942,"./ur.js":942,"./uz":943,"./uz-latn":944,"./uz-latn.js":944,"./uz.js":943,"./vi":945,"./vi.js":945,"./x-pseudo":946,"./x-pseudo.js":946,"./yo":947,"./yo.js":947,"./zh-cn":948,"./zh-cn.js":948,"./zh-hk":949,"./zh-hk.js":949,"./zh-mo":950,"./zh-mo.js":950,"./zh-tw":951,"./zh-tw.js":951};function p(n){var s=o(n);return a(s)}function o(n){if(!a.o(t,n)){var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}return t[n]}p.keys=function(){return Object.keys(t)},p.resolve=o,n.exports=p,p.id=954}}]);