import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.7a45cd91.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u4E0D\u540Cfont-size\u7684\u6587\u5B57\u5E95\u90E8\u5728\u4E00\u6761\u7EBF\u4E0A" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u540Cfont-size\u7684\u6587\u5B57\u5E95\u90E8\u5728\u4E00\u6761\u7EBF\u4E0A" aria-hidden="true">#</a> \u4E0D\u540Cfont-size\u7684\u6587\u5B57\u5E95\u90E8\u5728\u4E00\u6761\u7EBF\u4E0A</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u6709\u4E2A\u9700\u6C42\u662F\u524D\u7AEF\u9700\u8981\u5C55\u793A\uFFE5158.8\uFF0C\u4E3A\u4E86\u51F8\u663E\u91D1\u989D\uFF0C\u6240\u4EE5158.8 \u7684\u5B57\u4F53\u8981\u5927\uFF0C\uFFE5\u7684\u5B57\u4F53\u8981\u5C0F\u3002\u539F\u672C\u633A\u7B80\u5355\u7684\u9700\u6C42\uFF0C\u5374\u88AB\u6211\u73A9\u574F\u4E86</p><h3 id="_1-1-\u95EE\u9898\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#_1-1-\u95EE\u9898\u539F\u56E0" aria-hidden="true">#</a> 1.1 \u95EE\u9898\u539F\u56E0</h3><p>\u867D\u7136\u53EA\u662F\u5C55\u793A\u4E24\u4E2A\u6587\u5B57\uFF0C\u4F46\u6211\u5728\u9009\u62E9\u5E03\u5C40\u7684\u65F6\u5019\u3002\u5374\u9009\u62E9\u4E86flex+div\u7684\u5F62\u5F0F\u3002\u5BFC\u81F4\u6211\u9677\u5728\u91CC\u9762\u4E00\u76F4\u65E0\u6CD5\u5B9E\u73B0\u6B64\u529F\u80FD\u3002\u54EA\u6015\u662F\u8BBE\u7F6E\u4E3A\u5E95\u90E8\u5BF9\u9F50\u548Cbaseline</p><ul><li><p>align-items: flex-end</p><ul><li><p>\u6CA1\u6709\u4E00\u4E2A\u80FD\u5BF9\u9F50\u7684</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220403233950269.png" alt="image-20220403233950269"></p></li></ul></li><li><p>align-items: baseline;</p><ul><li><p>\u7B26\u53F7\u548C\u6570\u5B57\u5BF9\u9F50\u4E86,\u4E2D\u6587\u8FD8\u5DEE\u70B9\u610F\u601D</p><p>![image-20220403235103157](/Users/zsz/Library/Application Support/typora-user-images/image-20220403235103157.png)</p></li></ul></li></ul><p><strong>\u73B0\u5728\u611F\u89C9\u81EA\u5DF1\u5565\u4E1C\u897F\u90FD\u60F3\u5957flex\u5E03\u5C40\uFF0C\u8FD9\u5C31\u662F\u4E00\u4E2A\u5178\u578B\u7684\u53CD\u9762\u6559\u6750</strong></p><h2 id="_2-\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#_2-\u89E3\u51B3" aria-hidden="true">#</a> 2. \u89E3\u51B3</h2><h3 id="_2-1-\u57FA\u7840\u65B9\u68481" tabindex="-1"><a class="header-anchor" href="#_2-1-\u57FA\u7840\u65B9\u68481" aria-hidden="true">#</a> 2.1 \u57FA\u7840\u65B9\u68481\uFF1A</h3><p>\u53BB\u6389\u5916\u56F4\u7684flex \u5E03\u5C40\uFF0C\u9ED8\u8BA4\u5C31\u662F\u5E95\u90E8\u5BF9\u9F50\u7684\uFF0C\u5F53\u7136\u4E2D\u6587\u8FD8\u6709\u70B9\u95EE\u9898</p><blockquote><p>\u9002\u7528\u4E8E\u90A3\u4E9B\u6CA1\u6709\u4E2D\u6587\u7B49\uFF0C\u7279\u6B8A\u60C5\u51B5\u7684</p></blockquote><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220403234509741.png" alt="image-20220403234509741"></p><h3 id="_2-2-\u65B9\u68482-\u624B\u5DE5\u8BA1\u7B97" tabindex="-1"><a class="header-anchor" href="#_2-2-\u65B9\u68482-\u624B\u5DE5\u8BA1\u7B97" aria-hidden="true">#</a> 2.2 \u65B9\u68482\uFF1A\u624B\u5DE5\u8BA1\u7B97</h3><p>\u9700\u8981\u652F\u6301\u4E2D\u6587\uFF0C\u4F60\u9700\u8981\u5F3A\u5236\u5BF9\u4E0D\u540C\u5927\u5C0F\u7684\u5B57\u4F53\u8BBE\u5B9A\u4E0D\u540C\u7684\u884C\u9AD8\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a inline<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u54C8\u54C8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u560E\u560E<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5471\u5471<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b e1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>haha<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b e2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>gaga<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b e3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>guagua<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.a</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>\n  <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid lightblue<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> 40px auto<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.inline .b</span> <span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> inline<span class="token punctuation">;</span>\n  <span class="token property">vertical-align</span><span class="token punctuation">:</span> bottom<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.a div</span> <span class="token punctuation">{</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>\n  <span class="token property">line-height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.a span</span> <span class="token punctuation">{</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>\n  <span class="token property">line-height</span><span class="token punctuation">:</span> 37px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.a b</span> <span class="token punctuation">{</span>\n  <span class="token property">line-height</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.b.e1</span> <span class="token punctuation">{</span>\n  <span class="token property">line-height</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.b.e2</span> <span class="token punctuation">{</span>\n  <span class="token property">line-height</span><span class="token punctuation">:</span> 46px<span class="token punctuation">;</span>  \n<span class="token punctuation">}</span>\n<span class="token selector">.b.e3</span> <span class="token punctuation">{</span>\n  <span class="token property">line-height</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u7EC8\u6548\u679C\u5982\u4E0B\uFF1A</p><p><img src="https://segmentfault.com/img/bV2Nvn?w=592&amp;h=120" alt="clipboard.png"></p><h3 id="_2-3-\u65B9\u68483-\u81EA\u52A8\u8BA1\u7B97" tabindex="-1"><a class="header-anchor" href="#_2-3-\u65B9\u68483-\u81EA\u52A8\u8BA1\u7B97" aria-hidden="true">#</a> 2.3 \u65B9\u68483\uFF1A\u81EA\u52A8\u8BA1\u7B97</h3><p>\u5982\u679C\u4E0D\u60F3\u624B\u5DE5\u8C03\u6574\uFF0C\u800C\u60F3\u81EA\u52A8\u8BA1\u7B97\u7684\u8BDD\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a inline<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b c1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u54C8\u54C8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b c2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u560E\u560E<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b c3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5471\u5471<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b e1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>haha<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b e2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>gaga<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b e3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>guagua<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-stylus ext-styl line-numbers-mode"><pre class="language-stylus"><code><span class="token selector">.a <span class="token punctuation">{</span></span>\n  <span class="token property-declaration"><span class="token property">border-bottom</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token unit">px</span> solid <span class="token color">lightblue</span><span class="token punctuation">;</span></span>\n<span class="token punctuation">}</span>\n<span class="token selector">.inline .b <span class="token punctuation">{</span></span>\n  <span class="token property-declaration"><span class="token property">display</span><span class="token punctuation">:</span> inline<span class="token punctuation">;</span></span>\n  <span class="token property-declaration"><span class="token property">vertical-align</span><span class="token punctuation">:</span> bottom<span class="token punctuation">;</span></span>\n  <span class="token property-declaration"><span class="token property">line-height</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">;</span></span>\n<span class="token punctuation">}</span>\n<span class="token selector">.a .c1 <span class="token punctuation">{</span></span>\n  <span class="token property-declaration"><span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">40</span><span class="token unit">px</span><span class="token punctuation">;</span></span>\n<span class="token punctuation">}</span>\n<span class="token selector">.a .c2 <span class="token punctuation">{</span></span>\n  <span class="token property-declaration"><span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">80</span><span class="token unit">px</span><span class="token punctuation">;</span></span>\n<span class="token punctuation">}</span>\n<span class="token selector">.a .c3 <span class="token punctuation">{</span></span>\n  <span class="token property-declaration"><span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token unit">px</span><span class="token punctuation">;</span></span>\n<span class="token punctuation">}</span>\n<span class="token selector">.a .e1 <span class="token punctuation">{</span></span>\n  <span class="token property-declaration"><span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">40</span><span class="token unit">px</span><span class="token punctuation">;</span></span>\n<span class="token punctuation">}</span>\n<span class="token selector">.a .e2 <span class="token punctuation">{</span></span>\n  <span class="token property-declaration"><span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">80</span><span class="token unit">px</span><span class="token punctuation">;</span></span>\n<span class="token punctuation">}</span>\n<span class="token selector">.a .e3 <span class="token punctuation">{</span></span>\n  <span class="token property-declaration"><span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token unit">px</span><span class="token punctuation">;</span></span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6548\u679C\u4E5F\u8FD8\u53EF\u4EE5\uFF0C\u82F1\u6587\u7684\u51FA\u5165\u6BD4\u8F83\u5927\uFF0C\u4E2D\u6587\u7565\u6709\u5DEE\u8DDD\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220403235355217.png" alt="image-20220403235355217"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 25);
const _hoisted_26 = {
  href: "https://segmentfault.com/q/1010000012994498",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_27 = /* @__PURE__ */ createTextVNode("\u89C6\u89C9\u4E0A\u5982\u4F55\u8BA9\u4E0D\u540C font-size \u7684\u6587\u5B57\u5E95\u90E8\u5728\u4E00\u6761\u7EBF\u4E0A\uFF1F");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_26, [
        _hoisted_27,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var C3___fontSize___________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C3-\u4E0D\u540Cfont-size\u7684\u6587\u5B57\u5E95\u90E8\u5728\u4E00\u6761\u7EBF\u4E0A.html.vue"]]);
export { C3___fontSize___________html as default };
