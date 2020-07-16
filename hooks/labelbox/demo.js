(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hooks/labelbox/demo"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/hooks/labelbox/demo/basic.md":
/*!***********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/hooks/labelbox/demo/basic.md ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [
    [
      "p",
      "1、以下代码展示标注展示、在线标注、options参数配置、onChange事件；"
    ],
    [
      "p",
      "2、 核心：在组件中使用useLabelBox，它的三个参数是options、props和onChange，返回一个对象如下说明："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "labelProps: 当前列表中展现的数据集合"
        ]
      ],
      [
        "li",
        [
          "p",
          "gMap: 标注主实例对象【关键对象】"
        ]
      ],
      [
        "li",
        [
          "p",
          "initZoom: 当前图像最佳展示zoom值，能够保证全图展示在标注容器中【复位可能使用】"
        ]
      ],
      [
        "li",
        [
          "p",
          "tools: {worldToScreen} 对外暴露方法"
        ]
      ]
    ]
  ],
  "meta": {
    "order": 0,
    "title": "基本用法",
    "filename": "docs/hooks/labelbox/demo/basic.md",
    "id": "docs-hooks-labelbox-demo-basic"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#<!--",
          "title": "<!--"
        },
        "<!--"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> _ <span class=\"token keyword\">from</span> <span class=\"token string\">'lodash'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>useCallback<span class=\"token punctuation\">,</span> useState<span class=\"token punctuation\">,</span> useMemo<span class=\"token punctuation\">,</span> useEffect<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>hooks<span class=\"token punctuation\">,</span> components<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'baidu-aibp-react-common'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// 相关hooks引入</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>useLabelBox<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> hooks<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>HooksLabelBox<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> components<span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// 图像信息</span>\n<span class=\"token keyword\">const</span> defaultImage <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    url<span class=\"token punctuation\">:</span> <span class=\"token string\">'http://img2.imgtn.bdimg.com/it/u=1962045236,1139336730&amp;fm=26&amp;gp=0.jpg'</span><span class=\"token punctuation\">,</span>\n    width<span class=\"token punctuation\">:</span> <span class=\"token number\">500</span><span class=\"token punctuation\">,</span>\n    height<span class=\"token punctuation\">:</span> <span class=\"token number\">334</span><span class=\"token punctuation\">,</span>\n    grid<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        rowCount<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span><span class=\"token punctuation\">,</span>\n        columnCount<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span><span class=\"token punctuation\">,</span>\n        color<span class=\"token punctuation\">:</span> <span class=\"token string\">'blue'</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// 标签名&amp;标注框样式声明</span>\n<span class=\"token keyword\">const</span> labelNameStyle <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>fontColor<span class=\"token punctuation\">:</span> <span class=\"token string\">'#FFFFFF'</span><span class=\"token punctuation\">,</span> fontSize<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span><span class=\"token punctuation\">,</span> bgColor<span class=\"token punctuation\">:</span> <span class=\"token string\">'#1890FF'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> labelTextStyle <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>fontColor<span class=\"token punctuation\">:</span> <span class=\"token string\">'#000'</span><span class=\"token punctuation\">,</span> fontSize<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span><span class=\"token punctuation\">,</span> bgColor<span class=\"token punctuation\">:</span> <span class=\"token string\">'#FFFFFF'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> labelFeatureStyle <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>strokeColor<span class=\"token punctuation\">:</span> <span class=\"token string\">'#0000FF'</span><span class=\"token punctuation\">,</span> fillColor<span class=\"token punctuation\">:</span> <span class=\"token string\">'#FF0000'</span><span class=\"token punctuation\">,</span> opacity<span class=\"token punctuation\">:</span> <span class=\"token number\">0.5</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> labelDrawStyle <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>strokeColor<span class=\"token punctuation\">:</span> <span class=\"token string\">'#0000FF'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\" spellcheck=\"true\">// 标注集合</span>\n<span class=\"token keyword\">const</span> defaultLabels <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">'110'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// [必传] 暂做必传处理，避免引发不可预知错误</span>\n        select<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// 当前标注对象是否呈现选中态[目前由于底层限制，控制每次至多有一个select：true, 即每次最多只能编辑一个标注对象]</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> <span class=\"token comment\" spellcheck=\"true\">// 标签名配置</span>\n            name<span class=\"token punctuation\">:</span> <span class=\"token string\">'中国'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// 标签名称</span>\n            style<span class=\"token punctuation\">:</span> labelNameStyle <span class=\"token comment\" spellcheck=\"true\">// 标签样式</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        type<span class=\"token punctuation\">:</span> <span class=\"token string\">'rect'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// 矩形，支持'rect'， 'polygon'</span>\n        texts<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> <span class=\"token comment\" spellcheck=\"true\">// 该标注对象关联的文本集合，一般业务不需要</span>\n            position<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>x<span class=\"token punctuation\">:</span> <span class=\"token number\">20</span><span class=\"token punctuation\">,</span> y<span class=\"token punctuation\">:</span> <span class=\"token number\">20</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            offset<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>x<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> y<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            maxWidth<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span>\n            text<span class=\"token punctuation\">:</span> <span class=\"token string\">'中国北京'</span><span class=\"token punctuation\">,</span>\n            style<span class=\"token punctuation\">:</span> labelTextStyle\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        markers<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> <span class=\"token comment\" spellcheck=\"true\">// 该标注对象关联的标记集合，一般业务不需要</span>\n            position<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>x<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span><span class=\"token punctuation\">,</span> y<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            offset<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>x<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> y<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            events<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>click<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>p1<span class=\"token punctuation\">,</span> p2<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n                console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'p1, p2'</span><span class=\"token punctuation\">,</span> p1<span class=\"token punctuation\">,</span> p2<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        points<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span> <span class=\"token comment\" spellcheck=\"true\">// 该标注对象坐标信息【相对于图像左上角的坐标值】</span>\n            <span class=\"token punctuation\">{</span>x<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span> y<span class=\"token punctuation\">:</span> <span class=\"token number\">50</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">{</span>x<span class=\"token punctuation\">:</span> <span class=\"token number\">200</span><span class=\"token punctuation\">,</span> y<span class=\"token punctuation\">:</span> <span class=\"token number\">50</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">{</span>x<span class=\"token punctuation\">:</span> <span class=\"token number\">200</span><span class=\"token punctuation\">,</span> y<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">{</span>x<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span> y<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span><span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        style<span class=\"token punctuation\">:</span> labelFeatureStyle <span class=\"token comment\" spellcheck=\"true\">// 标注框展示样式</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// useLabelBox:options配置</span>\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> props <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    id<span class=\"token punctuation\">:</span> <span class=\"token string\">'map-container-id'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// [必传] 标注区域的dom-id，此处设置唯一值即可</span>\n    wrapClassName<span class=\"token punctuation\">:</span> <span class=\"token string\">'map-container-class'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// [可选] 标注区域的dom-class，可根据业务需求自行决定是否添加</span>\n    container<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> <span class=\"token comment\" spellcheck=\"true\">//[必传] 标注区域的dom-size，设置标注区域大小，支持相对单位</span>\n        width<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span><span class=\"token punctuation\">,</span>\n        height<span class=\"token punctuation\">:</span> <span class=\"token number\">400</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    image<span class=\"token punctuation\">:</span> props<span class=\"token punctuation\">.</span>bizImage<span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">//[必传] 图像信息</span>\n    labels<span class=\"token punctuation\">:</span> props<span class=\"token punctuation\">.</span>bizLabels<span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// [必传] 标注框信息</span>\n    mode<span class=\"token punctuation\">:</span> props<span class=\"token punctuation\">.</span>bizMode<span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// [必传] 当前标注模式【'pan'、‘drawRect’、‘drawPolygon’】，开发人员可自行决定切换模式</span>\n    deleteIcon<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// [可选] 删除按钮icon[此处建议默认即可，即不传或者设置为空即可，建议设置此字段]</span>\n    drawStyle<span class=\"token punctuation\">:</span> labelDrawStyle<span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// [可选] 绘制过程样式</span>\n    filter<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// [可选] 是否触发默认内在过滤，默认false【内在过滤仅会对标注框是否超出图像区域进行过滤】</span>\n    clip<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> <span class=\"token comment\" spellcheck=\"true\">// [可选] 是否需要进行内置图片内裁剪【默认不裁剪】，只针对绘制add情况</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> Label <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token comment\" spellcheck=\"true\">// 业务变量声明</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">[</span>bizLabels<span class=\"token punctuation\">,</span> setBizLabels<span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> <span class=\"token function\">useState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">[</span>bizImage<span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> <span class=\"token function\">useState</span><span class=\"token punctuation\">(</span>defaultImage<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">[</span>bizMode<span class=\"token punctuation\">,</span> setBizMode<span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> <span class=\"token function\">useState</span><span class=\"token punctuation\">(</span><span class=\"token string\">'drawRect'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// labels数据change</span>\n    <span class=\"token keyword\">const</span> handleLabelChange <span class=\"token operator\">=</span> <span class=\"token function\">useCallback</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>operateType<span class=\"token punctuation\">,</span> label<span class=\"token punctuation\">,</span> evt<span class=\"token punctuation\">,</span> wxy<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// 有些中间状态是不需要进行label重设</span>\n        <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>_<span class=\"token punctuation\">.</span><span class=\"token function\">includes</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">[</span><span class=\"token string\">'updating'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'boundsChanged'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'updateReset'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'hover'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span> operateType<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n            <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span>\n        <span class=\"token comment\" spellcheck=\"true\">// 需要进行labels变化时，才进行setBizLabels，否则中间态持续执行，如果不停的setBizLabels会造成死循环</span>\n        <span class=\"token function\">setBizLabels</span><span class=\"token punctuation\">(</span>preLabels <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n            <span class=\"token keyword\">let</span> newLabels <span class=\"token operator\">=</span> _<span class=\"token punctuation\">.</span><span class=\"token function\">cloneDeep</span><span class=\"token punctuation\">(</span>preLabels<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n            <span class=\"token comment\" spellcheck=\"true\">// label添加</span>\n            <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>operateType <span class=\"token operator\">===</span> <span class=\"token string\">'add'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n                newLabels<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n                    key<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`model-label-</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>_<span class=\"token punctuation\">.</span><span class=\"token function\">uniqueId</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n                    label<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n                        name<span class=\"token punctuation\">:</span> <span class=\"token string\">'测试'</span><span class=\"token punctuation\">,</span>\n                        style<span class=\"token punctuation\">:</span> labelNameStyle\n                    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n                    <span class=\"token operator\">...</span>label<span class=\"token punctuation\">,</span>\n                    style<span class=\"token punctuation\">:</span> labelFeatureStyle\n                <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n            <span class=\"token punctuation\">}</span>\n            <span class=\"token comment\" spellcheck=\"true\">// label删除/更新/选中</span>\n            <span class=\"token keyword\">else</span> <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>_<span class=\"token punctuation\">.</span><span class=\"token function\">includes</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">[</span><span class=\"token string\">'delete'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'update'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'select'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span> operateType<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n                <span class=\"token keyword\">const</span> findIndex <span class=\"token operator\">=</span> _<span class=\"token punctuation\">.</span><span class=\"token function\">findIndex</span><span class=\"token punctuation\">(</span>newLabels<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>key<span class=\"token punctuation\">:</span> label<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n                <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>findIndex <span class=\"token operator\">>=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n                    newLabels<span class=\"token punctuation\">.</span><span class=\"token function\">splice</span><span class=\"token punctuation\">(</span>findIndex<span class=\"token punctuation\">,</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n                    operateType <span class=\"token operator\">===</span> <span class=\"token string\">'update'</span> <span class=\"token operator\">&amp;&amp;</span> newLabels<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>label<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n                    operateType <span class=\"token operator\">===</span> <span class=\"token string\">'select'</span> <span class=\"token operator\">&amp;&amp;</span> newLabels<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>label<span class=\"token punctuation\">,</span> select<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n                <span class=\"token punctuation\">}</span>\n            <span class=\"token punctuation\">}</span>\n            <span class=\"token comment\" spellcheck=\"true\">// 【【特别注意：特别注意：特别注意】】：reset 这一步目前必须，需要将label进行直接覆盖即可【作用：所有select: false】</span>\n            <span class=\"token keyword\">else</span> <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>operateType <span class=\"token operator\">===</span> <span class=\"token string\">'reset'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n                <span class=\"token keyword\">const</span> formatLabels <span class=\"token operator\">=</span> _<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>newLabels<span class=\"token punctuation\">,</span> label <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>label<span class=\"token punctuation\">,</span> select<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n                newLabels <span class=\"token operator\">=</span> formatLabels<span class=\"token punctuation\">;</span>\n            <span class=\"token punctuation\">}</span>\n            <span class=\"token keyword\">return</span> newLabels<span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>\n        labelProps<span class=\"token punctuation\">,</span>\n        gMap<span class=\"token punctuation\">,</span>\n        initZoom\n    <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token function\">useLabelBox</span><span class=\"token punctuation\">(</span>\n        options<span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span>bizLabels<span class=\"token punctuation\">,</span> bizImage<span class=\"token punctuation\">,</span> bizMode<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        handleLabelChange\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">return</span> <span class=\"token operator\">&lt;</span>HooksLabelBox <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>labelProps<span class=\"token punctuation\">}</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Label</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> _ <span class=\"token keyword\">from</span> <span class=\"token string\">'lodash'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>useCallback<span class=\"token punctuation\">,</span> useState<span class=\"token punctuation\">,</span> useMemo<span class=\"token punctuation\">,</span> useEffect<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>hooks<span class=\"token punctuation\">,</span> components<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'baidu-aibp-react-common'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\">// 相关hooks引入</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>useLabelBox<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> hooks<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>HooksLabelBox<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> components<span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\">// 图像信息</span>\n<span class=\"token keyword\">const</span> defaultImage <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    url<span class=\"token operator\">:</span> <span class=\"token string\">'http://img2.imgtn.bdimg.com/it/u=1962045236,1139336730&amp;fm=26&amp;gp=0.jpg'</span><span class=\"token punctuation\">,</span>\n    width<span class=\"token operator\">:</span> <span class=\"token number\">500</span><span class=\"token punctuation\">,</span>\n    height<span class=\"token operator\">:</span> <span class=\"token number\">334</span><span class=\"token punctuation\">,</span>\n    grid<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        rowCount<span class=\"token operator\">:</span> <span class=\"token number\">5</span><span class=\"token punctuation\">,</span>\n        columnCount<span class=\"token operator\">:</span> <span class=\"token number\">5</span><span class=\"token punctuation\">,</span>\n        color<span class=\"token operator\">:</span> <span class=\"token string\">'blue'</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\">// 标签名&amp;标注框样式声明</span>\n<span class=\"token keyword\">const</span> labelNameStyle <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>fontColor<span class=\"token operator\">:</span> <span class=\"token string\">'#FFFFFF'</span><span class=\"token punctuation\">,</span> fontSize<span class=\"token operator\">:</span> <span class=\"token number\">12</span><span class=\"token punctuation\">,</span> bgColor<span class=\"token operator\">:</span> <span class=\"token string\">'#1890FF'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> labelTextStyle <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>fontColor<span class=\"token operator\">:</span> <span class=\"token string\">'#000'</span><span class=\"token punctuation\">,</span> fontSize<span class=\"token operator\">:</span> <span class=\"token number\">12</span><span class=\"token punctuation\">,</span> bgColor<span class=\"token operator\">:</span> <span class=\"token string\">'#FFFFFF'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> labelFeatureStyle <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>strokeColor<span class=\"token operator\">:</span> <span class=\"token string\">'#0000FF'</span><span class=\"token punctuation\">,</span> fillColor<span class=\"token operator\">:</span> <span class=\"token string\">'#FF0000'</span><span class=\"token punctuation\">,</span> opacity<span class=\"token operator\">:</span> <span class=\"token number\">0.5</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> labelDrawStyle <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>strokeColor<span class=\"token operator\">:</span> <span class=\"token string\">'#0000FF'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\">// 标注集合</span>\n<span class=\"token keyword\">const</span> defaultLabels <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span>\n        key<span class=\"token operator\">:</span> <span class=\"token string\">'110'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\">// [必传] 暂做必传处理，避免引发不可预知错误</span>\n        select<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span> <span class=\"token comment\">// 当前标注对象是否呈现选中态[目前由于底层限制，控制每次至多有一个select：true, 即每次最多只能编辑一个标注对象]</span>\n        label<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span> <span class=\"token comment\">// 标签名配置</span>\n            name<span class=\"token operator\">:</span> <span class=\"token string\">'中国'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\">// 标签名称</span>\n            style<span class=\"token operator\">:</span> labelNameStyle <span class=\"token comment\">// 标签样式</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        type<span class=\"token operator\">:</span> <span class=\"token string\">'rect'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\">// 矩形，支持'rect'， 'polygon'</span>\n        texts<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> <span class=\"token comment\">// 该标注对象关联的文本集合，一般业务不需要</span>\n            position<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>x<span class=\"token operator\">:</span> <span class=\"token number\">20</span><span class=\"token punctuation\">,</span> y<span class=\"token operator\">:</span> <span class=\"token number\">20</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            offset<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>x<span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> y<span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            maxWidth<span class=\"token operator\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span>\n            text<span class=\"token operator\">:</span> <span class=\"token string\">'中国北京'</span><span class=\"token punctuation\">,</span>\n            style<span class=\"token operator\">:</span> labelTextStyle\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        markers<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> <span class=\"token comment\">// 该标注对象关联的标记集合，一般业务不需要</span>\n            position<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>x<span class=\"token operator\">:</span> <span class=\"token number\">150</span><span class=\"token punctuation\">,</span> y<span class=\"token operator\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            offset<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>x<span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> y<span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            events<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span><span class=\"token function-variable function\">click</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">p1<span class=\"token punctuation\">,</span> p2</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n                console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'p1, p2'</span><span class=\"token punctuation\">,</span> p1<span class=\"token punctuation\">,</span> p2<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        points<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span> <span class=\"token comment\">// 该标注对象坐标信息【相对于图像左上角的坐标值】</span>\n            <span class=\"token punctuation\">{</span>x<span class=\"token operator\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span> y<span class=\"token operator\">:</span> <span class=\"token number\">50</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">{</span>x<span class=\"token operator\">:</span> <span class=\"token number\">200</span><span class=\"token punctuation\">,</span> y<span class=\"token operator\">:</span> <span class=\"token number\">50</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">{</span>x<span class=\"token operator\">:</span> <span class=\"token number\">200</span><span class=\"token punctuation\">,</span> y<span class=\"token operator\">:</span> <span class=\"token number\">150</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">{</span>x<span class=\"token operator\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span> y<span class=\"token operator\">:</span> <span class=\"token number\">150</span><span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        style<span class=\"token operator\">:</span> labelFeatureStyle <span class=\"token comment\">// 标注框展示样式</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\">// useLabelBox:options配置</span>\n<span class=\"token keyword\">const</span> <span class=\"token function-variable function\">options</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">props</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    id<span class=\"token operator\">:</span> <span class=\"token string\">'map-container-id'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\">// [必传] 标注区域的dom-id，此处设置唯一值即可</span>\n    wrapClassName<span class=\"token operator\">:</span> <span class=\"token string\">'map-container-class'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\">// [可选] 标注区域的dom-class，可根据业务需求自行决定是否添加</span>\n    container<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span> <span class=\"token comment\">//[必传] 标注区域的dom-size，设置标注区域大小，支持相对单位</span>\n        width<span class=\"token operator\">:</span> <span class=\"token string\">'100%'</span><span class=\"token punctuation\">,</span>\n        height<span class=\"token operator\">:</span> <span class=\"token number\">400</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    image<span class=\"token operator\">:</span> props<span class=\"token punctuation\">.</span>bizImage<span class=\"token punctuation\">,</span> <span class=\"token comment\">//[必传] 图像信息</span>\n    labels<span class=\"token operator\">:</span> props<span class=\"token punctuation\">.</span>bizLabels<span class=\"token punctuation\">,</span> <span class=\"token comment\">// [必传] 标注框信息</span>\n    mode<span class=\"token operator\">:</span> props<span class=\"token punctuation\">.</span>bizMode<span class=\"token punctuation\">,</span> <span class=\"token comment\">// [必传] 当前标注模式【'pan'、‘drawRect’、‘drawPolygon’】，开发人员可自行决定切换模式</span>\n    deleteIcon<span class=\"token operator\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span> <span class=\"token comment\">// [可选] 删除按钮icon[此处建议默认即可，即不传或者设置为空即可，建议设置此字段]</span>\n    drawStyle<span class=\"token operator\">:</span> labelDrawStyle<span class=\"token punctuation\">,</span> <span class=\"token comment\">// [可选] 绘制过程样式</span>\n    filter<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> <span class=\"token comment\">// [可选] 是否触发默认内在过滤，默认false【内在过滤仅会对标注框是否超出图像区域进行过滤】</span>\n    clip<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span> <span class=\"token comment\">// [可选] 是否需要进行内置图片内裁剪【默认不裁剪】，只针对绘制add情况</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token function-variable function\">Label</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token comment\">// 业务变量声明</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">[</span>bizLabels<span class=\"token punctuation\">,</span> setBizLabels<span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> <span class=\"token function\">useState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">[</span>bizImage<span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> <span class=\"token function\">useState</span><span class=\"token punctuation\">(</span>defaultImage<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">[</span>bizMode<span class=\"token punctuation\">,</span> setBizMode<span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> <span class=\"token function\">useState</span><span class=\"token punctuation\">(</span><span class=\"token string\">'drawRect'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\">// labels数据change</span>\n    <span class=\"token keyword\">const</span> handleLabelChange <span class=\"token operator\">=</span> <span class=\"token function\">useCallback</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">operateType<span class=\"token punctuation\">,</span> label<span class=\"token punctuation\">,</span> evt<span class=\"token punctuation\">,</span> wxy</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token comment\">// 有些中间状态是不需要进行label重设</span>\n        <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>_<span class=\"token punctuation\">.</span><span class=\"token function\">includes</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">[</span><span class=\"token string\">'updating'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'boundsChanged'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'updateReset'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'hover'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span> operateType<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n            <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span>\n        <span class=\"token comment\">// 需要进行labels变化时，才进行setBizLabels，否则中间态持续执行，如果不停的setBizLabels会造成死循环</span>\n        <span class=\"token function\">setBizLabels</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">preLabels</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n            <span class=\"token keyword\">let</span> newLabels <span class=\"token operator\">=</span> _<span class=\"token punctuation\">.</span><span class=\"token function\">cloneDeep</span><span class=\"token punctuation\">(</span>preLabels<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n            <span class=\"token comment\">// label添加</span>\n            <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>operateType <span class=\"token operator\">===</span> <span class=\"token string\">'add'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n                newLabels<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n                    key<span class=\"token operator\">:</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">model-label-</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>_<span class=\"token punctuation\">.</span><span class=\"token function\">uniqueId</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">,</span>\n                    label<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n                        name<span class=\"token operator\">:</span> <span class=\"token string\">'测试'</span><span class=\"token punctuation\">,</span>\n                        style<span class=\"token operator\">:</span> labelNameStyle\n                    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n                    <span class=\"token operator\">...</span>label<span class=\"token punctuation\">,</span>\n                    style<span class=\"token operator\">:</span> labelFeatureStyle\n                <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n            <span class=\"token punctuation\">}</span>\n            <span class=\"token comment\">// label删除/更新/选中</span>\n            <span class=\"token keyword\">else</span> <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>_<span class=\"token punctuation\">.</span><span class=\"token function\">includes</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">[</span><span class=\"token string\">'delete'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'update'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'select'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span> operateType<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n                <span class=\"token keyword\">const</span> findIndex <span class=\"token operator\">=</span> _<span class=\"token punctuation\">.</span><span class=\"token function\">findIndex</span><span class=\"token punctuation\">(</span>newLabels<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>key<span class=\"token operator\">:</span> label<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n                <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>findIndex <span class=\"token operator\">>=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n                    newLabels<span class=\"token punctuation\">.</span><span class=\"token function\">splice</span><span class=\"token punctuation\">(</span>findIndex<span class=\"token punctuation\">,</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n                    operateType <span class=\"token operator\">===</span> <span class=\"token string\">'update'</span> <span class=\"token operator\">&amp;&amp;</span> newLabels<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>label<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n                    operateType <span class=\"token operator\">===</span> <span class=\"token string\">'select'</span> <span class=\"token operator\">&amp;&amp;</span> newLabels<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>label<span class=\"token punctuation\">,</span> select<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n                <span class=\"token punctuation\">}</span>\n            <span class=\"token punctuation\">}</span>\n            <span class=\"token comment\">// 【【特别注意：特别注意：特别注意】】：reset 这一步目前必须，需要将label进行直接覆盖即可【作用：所有select: false】</span>\n            <span class=\"token keyword\">else</span> <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>operateType <span class=\"token operator\">===</span> <span class=\"token string\">'reset'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n                <span class=\"token keyword\">const</span> formatLabels <span class=\"token operator\">=</span> _<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>newLabels<span class=\"token punctuation\">,</span> <span class=\"token parameter\">label</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>label<span class=\"token punctuation\">,</span> select<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n                newLabels <span class=\"token operator\">=</span> formatLabels<span class=\"token punctuation\">;</span>\n            <span class=\"token punctuation\">}</span>\n            <span class=\"token keyword\">return</span> newLabels<span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>\n        labelProps<span class=\"token punctuation\">,</span>\n        gMap<span class=\"token punctuation\">,</span>\n        initZoom\n    <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token function\">useLabelBox</span><span class=\"token punctuation\">(</span>\n        options<span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span>bizLabels<span class=\"token punctuation\">,</span> bizImage<span class=\"token punctuation\">,</span> bizMode<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        handleLabelChange\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">HooksLabelBox</span></span> <span class=\"token spread\"><span class=\"token punctuation\">{</span><span class=\"token punctuation\">...</span><span class=\"token attr-value\">labelProps</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Label</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _lodash = _interopRequireDefault(__webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"));

  var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var _baiduAibpReactCommon = __webpack_require__(/*! baidu-aibp-react-common */ "./src/index.ts");

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  // 相关hooks引入
  var useLabelBox = _baiduAibpReactCommon.hooks.useLabelBox;
  var HooksLabelBox = _baiduAibpReactCommon.components.HooksLabelBox; // 图像信息

  var defaultImage = {
    url: 'http://img2.imgtn.bdimg.com/it/u=1962045236,1139336730&fm=26&gp=0.jpg',
    width: 500,
    height: 334,
    grid: {
      rowCount: 5,
      columnCount: 5,
      color: 'blue'
    }
  }; // 标签名&标注框样式声明

  var labelNameStyle = {
    fontColor: '#FFFFFF',
    fontSize: 12,
    bgColor: '#1890FF'
  };
  var labelTextStyle = {
    fontColor: '#000',
    fontSize: 12,
    bgColor: '#FFFFFF'
  };
  var labelFeatureStyle = {
    strokeColor: '#0000FF',
    fillColor: '#FF0000',
    opacity: 0.5
  };
  var labelDrawStyle = {
    strokeColor: '#0000FF'
  }; // 标注集合

  var defaultLabels = [{
    key: '110',
    // [必传] 暂做必传处理，避免引发不可预知错误
    select: false,
    // 当前标注对象是否呈现选中态[目前由于底层限制，控制每次至多有一个select：true, 即每次最多只能编辑一个标注对象]
    label: {
      // 标签名配置
      name: '中国',
      // 标签名称
      style: labelNameStyle // 标签样式

    },
    type: 'rect',
    // 矩形，支持'rect'， 'polygon'
    texts: [{
      // 该标注对象关联的文本集合，一般业务不需要
      position: {
        x: 20,
        y: 20
      },
      offset: {
        x: 0,
        y: 0
      },
      maxWidth: 100,
      text: '中国北京',
      style: labelTextStyle
    }],
    markers: [{
      // 该标注对象关联的标记集合，一般业务不需要
      position: {
        x: 150,
        y: 100
      },
      offset: {
        x: 0,
        y: 0
      },
      events: {
        click: function click(p1, p2) {
          console.log('p1, p2', p1, p2);
        }
      }
    }],
    points: [// 该标注对象坐标信息【相对于图像左上角的坐标值】
    {
      x: 100,
      y: 50
    }, {
      x: 200,
      y: 50
    }, {
      x: 200,
      y: 150
    }, {
      x: 100,
      y: 150
    }],
    style: labelFeatureStyle // 标注框展示样式

  }]; // useLabelBox:options配置

  var options = function options(props) {
    return {
      id: 'map-container-id',
      // [必传] 标注区域的dom-id，此处设置唯一值即可
      wrapClassName: 'map-container-class',
      // [可选] 标注区域的dom-class，可根据业务需求自行决定是否添加
      container: {
        //[必传] 标注区域的dom-size，设置标注区域大小，支持相对单位
        width: '100%',
        height: 400
      },
      image: props.bizImage,
      //[必传] 图像信息
      labels: props.bizLabels,
      // [必传] 标注框信息
      mode: props.bizMode,
      // [必传] 当前标注模式【'pan'、‘drawRect’、‘drawPolygon’】，开发人员可自行决定切换模式
      deleteIcon: '',
      // [可选] 删除按钮icon[此处建议默认即可，即不传或者设置为空即可，建议设置此字段]
      drawStyle: labelDrawStyle,
      // [可选] 绘制过程样式
      filter: true,
      // [可选] 是否触发默认内在过滤，默认false【内在过滤仅会对标注框是否超出图像区域进行过滤】
      clip: true // [可选] 是否需要进行内置图片内裁剪【默认不裁剪】，只针对绘制add情况

    };
  };

  var Label = function Label() {
    // 业务变量声明
    var _useState = (0, _react.useState)(),
        _useState2 = _slicedToArray(_useState, 2),
        bizLabels = _useState2[0],
        setBizLabels = _useState2[1];

    var _useState3 = (0, _react.useState)(defaultImage),
        _useState4 = _slicedToArray(_useState3, 1),
        bizImage = _useState4[0];

    var _useState5 = (0, _react.useState)('drawRect'),
        _useState6 = _slicedToArray(_useState5, 2),
        bizMode = _useState6[0],
        setBizMode = _useState6[1]; // labels数据change


    var handleLabelChange = (0, _react.useCallback)(function (operateType, label, evt, wxy) {
      // 有些中间状态是不需要进行label重设
      if (_lodash["default"].includes(['updating', 'boundsChanged', 'updateReset', 'hover'], operateType)) {
        return;
      } // 需要进行labels变化时，才进行setBizLabels，否则中间态持续执行，如果不停的setBizLabels会造成死循环


      setBizLabels(function (preLabels) {
        var newLabels = _lodash["default"].cloneDeep(preLabels); // label添加


        if (operateType === 'add') {
          newLabels.push(_objectSpread(_objectSpread({
            key: "model-label-".concat(_lodash["default"].uniqueId()),
            label: {
              name: '测试',
              style: labelNameStyle
            }
          }, label), {}, {
            style: labelFeatureStyle
          }));
        } // label删除/更新/选中
        else if (_lodash["default"].includes(['delete', 'update', 'select'], operateType)) {
            var findIndex = _lodash["default"].findIndex(newLabels, {
              key: label.key
            });

            if (findIndex >= 0) {
              newLabels.splice(findIndex, 1);
              operateType === 'update' && newLabels.push(label);
              operateType === 'select' && newLabels.push(_objectSpread(_objectSpread({}, label), {}, {
                select: true
              }));
            }
          } // 【【特别注意：特别注意：特别注意】】：reset 这一步目前必须，需要将label进行直接覆盖即可【作用：所有select: false】
          else if (operateType === 'reset') {
              var formatLabels = _lodash["default"].map(newLabels, function (label) {
                return _objectSpread(_objectSpread({}, label), {}, {
                  select: false
                });
              });

              newLabels = formatLabels;
            }

        return newLabels;
      });
    }, []);

    var _useLabelBox = useLabelBox(options, {
      bizLabels: bizLabels,
      bizImage: bizImage,
      bizMode: bizMode
    }, handleLabelChange),
        labelProps = _useLabelBox.labelProps,
        gMap = _useLabelBox.gMap,
        initZoom = _useLabelBox.initZoom;

    return /*#__PURE__*/React.createElement(HooksLabelBox, labelProps);
  };

  return /*#__PURE__*/React.createElement(Label, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/tmp/hooks-labelbox-demo.index.js":
/*!***************************************************************!*\
  !*** ./node_modules/bisheng/tmp/hooks-labelbox-demo.index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./docs/hooks/labelbox/demo/basic.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/hooks/labelbox/demo/basic.md"),
}

/***/ })

}]);
//# sourceMappingURL=demo.js.map