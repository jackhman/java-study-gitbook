import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.7a45cd91.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u5546\u57CE\u8BBE\u8BA1\u8981\u70B9-\u4E00-\u907F\u514D\u91CD\u590D\u4E0B\u5355" tabindex="-1"><a class="header-anchor" href="#\u5546\u57CE\u8BBE\u8BA1\u8981\u70B9-\u4E00-\u907F\u514D\u91CD\u590D\u4E0B\u5355" aria-hidden="true">#</a> \u5546\u57CE\u8BBE\u8BA1\u8981\u70B9(\u4E00)-\u907F\u514D\u91CD\u590D\u4E0B\u5355</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u7528\u6237\u5FEB\u901F\u70B9\u4E86\u4E24\u6B21 \u201C\u63D0\u4EA4\u8BA2\u5355\u201D \u6309\u94AE\uFF0C\u6D4F\u89C8\u5668\u4F1A\u5411\u540E\u7AEF\u53D1\u9001\u4E24\u6761\u521B\u5EFA\u8BA2\u5355\u7684\u8BF7\u6C42\uFF0C\u6700\u7EC8\u4F1A\u521B\u5EFA\u4E24\u6761\u4E00\u6A21\u4E00\u6837\u7684\u8BA2\u5355\u3002</p><h2 id="_2-\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_2-\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> 2. \u89E3\u51B3\u65B9\u6848</h2><p>\u89E3\u51B3\u65B9\u6848\u5C31\u662F\u91C7\u7528<strong>\u5E42\u7B49\u673A\u5236</strong>\uFF0C\u591A\u6B21\u8BF7\u6C42\u548C\u4E00\u6B21\u8BF7\u6C42\u4EA7\u751F\u7684\u6548\u679C\u662F\u4E00\u6837\u7684\u3002</p><h3 id="_2-1-\u65B9\u6848\u4E00-\u521B\u5EFA\u8BA2\u5355\u9875\u9762-\u9884\u751F\u6210\u8BA2\u5355id" tabindex="-1"><a class="header-anchor" href="#_2-1-\u65B9\u6848\u4E00-\u521B\u5EFA\u8BA2\u5355\u9875\u9762-\u9884\u751F\u6210\u8BA2\u5355id" aria-hidden="true">#</a> 2.1 \u65B9\u6848\u4E00\uFF1A\u521B\u5EFA\u8BA2\u5355\u9875\u9762\uFF0C\u9884\u751F\u6210\u8BA2\u5355ID</h3><p>\u5229\u7528\u6570\u636E\u5E93\u81EA\u8EAB\u7279\u6027 \u201C\u4E3B\u952E\u552F\u4E00\u7EA6\u675F\u201D\uFF0C\u5728\u63D2\u5165\u8BA2\u5355\u8BB0\u5F55\u65F6\uFF0C\u5E26\u4E0A\u4E3B\u952E\u503C\uFF0C\u5982\u679C\u8BA2\u5355\u91CD\u590D\uFF0C\u8BB0\u5F55\u63D2\u5165\u4F1A\u5931\u8D25\u3002</p><p>\u64CD\u4F5C\u8FC7\u7A0B\uFF1A</p><ul><li>\u5F15\u5165\u4E00\u4E2A\u670D\u52A1\uFF0C\u7528\u4E8E\u751F\u6210\u4E00\u4E2A\u201C\u5168\u5C40\u552F\u4E00\u7684\u8BA2\u5355\u53F7\u201D</li><li>\u8FDB\u5165<strong>\u521B\u5EFA\u8BA2\u5355\u9875\u9762\u65F6</strong>\uFF0C\u524D\u7AEF\u8BF7\u6C42\u8BE5\u670D\u52A1\uFF0C<strong>\u9884\u751F\u6210\u8BA2\u5355ID</strong></li><li>\u63D0\u4EA4\u8BA2\u5355\u65F6\uFF0C\u8BF7\u6C42\u53C2\u6570\u9664\u4E86\u4E1A\u52A1\u53C2\u6570\u5916\uFF0C\u8FD8\u8981\u5E26\u4E0A\u8FD9\u4E2A\u9884\u751F\u6210\u8BA2\u5355ID</li></ul><blockquote><ol><li>mall \u5546\u57CE\u9879\u76EE\u672A\u91C7\u7528\u8BE5\u65B9\u6848</li><li>\u8BA2\u5355id\u662F\u5728\u63D0\u4EA4\u8BA2\u5355\u65F6sql\u751F\u6210</li></ol></blockquote><h3 id="_2-2-\u65B9\u6848\u4E8C-\u524D\u7AEF\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#_2-2-\u65B9\u6848\u4E8C-\u524D\u7AEF\u63A7\u5236" aria-hidden="true">#</a> 2.2 **\u65B9\u6848\u4E8C\uFF1A**\u524D\u7AEF\u63A7\u5236</h3><p>\u524D\u7AEF\u901A\u8FC7js\u811A\u672C\u63A7\u5236\uFF0C\u65E0\u6CD5<strong>\u89E3\u51B3\u7528\u6237\u5237\u65B0\u63D0\u4EA4\u7684\u8BF7\u6C42</strong>\u3002\u53E6\u5916<strong>\u4E5F\u65E0\u6CD5\u89E3\u51B3\u6076\u610F\u63D0\u4EA4\u3002</strong></p><p>\u4E0D\u5EFA\u8BAE\u91C7\u7528\u8BE5\u65B9\u6848\uFF0C\u5982\u679C\u60F3\u7528\uFF0C\u4E5F\u53EA\u662F\u4F5C\u4E3A\u4E00\u4E2A<strong>\u8865\u5145\u65B9\u6848</strong>\u3002</p><blockquote><p>mall\u5546\u57CE\u672C\u8EAB\u4E5F\u6CA1\u6709\u5546\u57CE\u524D\u7AEF</p></blockquote><h3 id="_2-3-\u65B9\u6848\u4E09-\u521B\u5EFA\u8BA2\u5355\u9875\u9762-\u9884\u751F\u6210token" tabindex="-1"><a class="header-anchor" href="#_2-3-\u65B9\u6848\u4E09-\u521B\u5EFA\u8BA2\u5355\u9875\u9762-\u9884\u751F\u6210token" aria-hidden="true">#</a> 2.3 **\u65B9\u6848\u4E09\uFF1A**\u521B\u5EFA\u8BA2\u5355\u9875\u9762\uFF0C\u9884\u751F\u6210token</h3><p>\u524D\u540E\u7EA6\u5B9A\u9644\u52A0\u53C2\u6570\u6821\u9A8C\u3002</p><p>\u5F53\u7528\u6237\u70B9\u51FB\u8D2D\u4E70\u6309\u94AE\u65F6\uFF0C\u6E32\u67D3\u4E0B\u5355\u9875\u9762\uFF0C\u5C55\u793A\u5546\u54C1\u3001\u6536\u8D27\u5730\u5740\u3001\u8FD0\u8D39\u3001\u4EF7\u683C\u7B49\u4FE1\u606F\uFF0C<strong>\u540C\u65F6\u9875\u9762\u4F1A\u57CB\u4E0A<code>Token </code>\u4FE1\u606F</strong>\uFF0C\u7528\u6237\u63D0\u4EA4\u8BA2\u5355\u65F6\uFF0C\u540E\u7AEF\u4E1A\u52A1\u903B\u8F91\u4F1A\u6821\u9A8Ctoken\uFF0C\u6709\u4E14\u5339\u914D\u624D\u8BA4\u4E3A\u662F\u5408\u7406\u8BF7\u6C42\u3002</p><p>\u6CE8\u610F\uFF1A\u540C\u4E00\u4E2A <code>Token</code> \u53EA\u80FD\u7528\u4E00\u6B21\uFF0C\u7528\u5B8C\u540E\u7ACB\u9A6C\u5931\u6548\u6389\u3002</p><p>\u6CE8\u610F\uFF1A\u540C\u4E00\u4E2A <code>Token</code> \u53EA\u80FD\u7528\u4E00\u6B21\uFF0C\u7528\u5B8C\u540E\u7ACB\u9A6C\u5931\u6548\u6389\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>form action<span class="token operator">=</span><span class="token string">&quot;/add-name-v2&quot;</span> method<span class="token operator">=</span><span class="token string">&quot;post&quot;</span><span class="token operator">&gt;</span>\n    <span class="token punctuation">{</span><span class="token operator">%</span> csrf_token <span class="token operator">%</span><span class="token punctuation">}</span>\n    <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> name<span class="token operator">=</span><span class="token string">&quot;name&quot;</span><span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;submit&quot;</span> value<span class="token operator">=</span><span class="token string">&quot;\u63D0\u4EA4&quot;</span><span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ol><li><p>mall \u5546\u57CE\u9879\u76EE\u672A\u91C7\u7528\u8BE5\u65B9\u6848</p></li><li><p>\u6B64\u65B9\u6848\u4E0E\u65B9\u6848\u4E00\uFF0C\u5F02\u66F2\u540C\u5DE5\u4E4B\u5999\uFF0C\u4E00\u4E2A\u662F\u6570\u636E\u5E93id\uFF0C\u4E00\u4E2A\u662F\u4E34\u65F6token</p></li></ol></blockquote><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 22);
const _hoisted_23 = {
  href: "https://mp.weixin.qq.com/s/BgVr0jEBJwQI5UW_ele08A",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_24 = /* @__PURE__ */ createTextVNode("\u804A\u804A\u7535\u5546\u7CFB\u7EDF\u4E2D\u5E38\u89C1\u76849\u5927\u5751\uFF01\u5E93\u5B58\u8D85\u5356\u3001\u91CD\u590D\u4E0B\u5355\u3001\u7269\u6D41\u5355ABA");
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("p", null, "\u5173\u4E8E\u5E42\u7B49\u7684\u5904\u7406\uFF0C\u66F4\u591A\u89E3\u51B3\u65B9\u6848\u53EF\u4EE5\u770B\u8FD9\u4E24\u7BC7\u6587\u7AE0", -1);
const _hoisted_26 = {
  href: "https://mp.weixin.qq.com/s?__biz=Mzg2NzYyNjQzNg==&mid=2247485064&idx=1&sn=0596c89178b7c67c92bfaaf4e44a3b1d&scene=21#wechat_redirect",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_27 = /* @__PURE__ */ createTextVNode("\u9AD8\u5E76\u53D1\u4E0B\u5982\u4F55\u4FDD\u8BC1\u63A5\u53E3\u7684\u5E42\u7B49\u6027\uFF1F");
const _hoisted_28 = {
  href: "https://mp.weixin.qq.com/s?__biz=Mzg2NzYyNjQzNg==&mid=2247489368&idx=1&sn=428dc07c9e788d217d2e357933cb8bc4&scene=21#wechat_redirect",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_29 = /* @__PURE__ */ createTextVNode("\u5E42\u7B49\u8BBE\u8BA1\uFF0C\u90FD\u6709\u54EA\u4E9B\u6280\u672F\u65B9\u6848\uFF1F");
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#",
    "aria-hidden": "true"
  }, "#")
], -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "-1",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#-1",
    "aria-hidden": "true"
  }, "#")
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_23, [
        _hoisted_24,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_25,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("strong", null, [
          createBaseVNode("a", _hoisted_26, [
            _hoisted_27,
            createVNode(_component_ExternalLinkIcon)
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("strong", null, [
          createBaseVNode("a", _hoisted_28, [
            _hoisted_29,
            createVNode(_component_ExternalLinkIcon)
          ])
        ])
      ])
    ]),
    _hoisted_30,
    _hoisted_31
  ]);
}
var C5_______________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C5-\u5546\u57CE\u8BBE\u8BA1\u8981\u70B9-\u907F\u514D\u91CD\u590D\u4E0B\u5355.html.vue"]]);
export { C5_______________html as default };
