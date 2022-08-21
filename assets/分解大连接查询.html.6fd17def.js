import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.7a45cd91.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u5206\u89E3\u5927\u8FDE\u63A5\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u5206\u89E3\u5927\u8FDE\u63A5\u67E5\u8BE2" aria-hidden="true">#</a> \u5206\u89E3\u5927\u8FDE\u63A5\u67E5\u8BE2</h1><h2 id="_1-\u5927\u8FDE\u63A5\u67E5\u8BE2\u5206\u89E3\u597D\u5904" tabindex="-1"><a class="header-anchor" href="#_1-\u5927\u8FDE\u63A5\u67E5\u8BE2\u5206\u89E3\u597D\u5904" aria-hidden="true">#</a> 1. \u5927\u8FDE\u63A5\u67E5\u8BE2\u5206\u89E3\u597D\u5904</h2><p>\u5C06\u4E00\u4E2A\u5927\u8FDE\u63A5\u67E5\u8BE2\u5206\u89E3\u6210\u5BF9\u6BCF\u4E00\u4E2A\u8868\u8FDB\u884C\u4E00\u6B21\u5355\u8868\u67E5\u8BE2\uFF0C\u7136\u540E\u5C06\u7ED3\u679C\u5728\u5E94\u7528\u7A0B\u5E8F\u4E2D\u8FDB\u884C\u5173\u8054\uFF0C\u8FD9\u6837\u505A\u7684\u597D\u5904\u6709:</p><ul><li><strong>\u8BA9\u7F13\u5B58\u66F4\u9AD8\u6548</strong>\u3002\u5BF9\u4E8E\u8FDE\u63A5\u67E5\u8BE2\uFF0C\u5982\u679C\u5176\u4E2D\u4E00\u4E2A\u8868\u53D1\u751F\u53D8\u5316\uFF0C\u90A3\u4E48\u6574\u4E2A\u67E5\u8BE2\u7F13\u5B58\u5C31\u65E0\u6CD5\u4F7F\u7528\u3002\u800C\u5206\u89E3\u540E\u7684\u591A\u4E2A\u67E5\u8BE2\uFF0C\u5373\u4F7F\u5176\u4E2D\u4E00\u4E2A\u8868\u53D1\u751F\u53D8\u5316\uFF0C\u5BF9\u5176\u5B83\u8868\u7684\u67E5\u8BE2\u7F13\u5B58\u4F9D\u7136\u53EF\u4EE5\u4F7F\u7528\u3002</li><li>\u5206\u89E3\u6210\u591A\u4E2A\u5355\u8868\u67E5\u8BE2\uFF0C\u8FD9\u4E9B<strong>\u5355\u8868\u67E5\u8BE2\u7684\u7F13\u5B58\u7ED3\u679C\u66F4\u53EF\u80FD\u88AB\u5176\u5B83\u67E5\u8BE2\u4F7F\u7528\u5230</strong>\uFF0C\u4ECE\u800C\u51CF\u5C11\u5197\u4F59\u8BB0\u5F55\u7684\u67E5\u8BE2\u3002</li><li><strong>\u51CF\u5C11\u9501\u7ADE\u4E89</strong>\uFF1B</li><li>\u5728\u5E94\u7528\u5C42\u8FDB\u884C\u8FDE\u63A5\uFF0C\u53EF\u4EE5\u66F4\u5BB9\u6613\u5BF9\u6570\u636E\u5E93\u8FDB\u884C\u62C6\u5206\uFF0C\u4ECE\u800C<strong>\u66F4\u5BB9\u6613\u505A\u5230\u9AD8\u6027\u80FD\u548C\u53EF\u4F38\u7F29</strong>\u3002</li><li>\u67E5\u8BE2\u672C\u8EAB\u6548\u7387\u4E5F\u53EF\u80FD\u4F1A\u6709\u6240\u63D0\u5347\u3002\u4F8B\u5982\u4E0B\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u4F7F\u7528 IN() \u4EE3\u66FF\u8FDE\u63A5\u67E5\u8BE2\uFF0C\u53EF\u4EE5\u8BA9 MySQL \u6309\u7167 ID \u987A\u5E8F\u8FDB\u884C\u67E5\u8BE2\uFF0C\u8FD9\u53EF\u80FD\u6BD4\u968F\u673A\u7684\u8FDE\u63A5\u8981\u66F4\u9AD8\u6548\u3002</li></ul><h2 id="_2-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-\u793A\u4F8B" aria-hidden="true">#</a> 2. \u793A\u4F8B</h2><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> tab\n<span class="token keyword">JOIN</span> tag_post <span class="token keyword">ON</span> tag_post<span class="token punctuation">.</span>tag_id<span class="token operator">=</span>tag<span class="token punctuation">.</span>id\n<span class="token keyword">JOIN</span> post <span class="token keyword">ON</span> tag_post<span class="token punctuation">.</span>post_id<span class="token operator">=</span>post<span class="token punctuation">.</span>id\n<span class="token keyword">WHERE</span> tag<span class="token punctuation">.</span>tag<span class="token operator">=</span><span class="token string">&#39;mysql&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> tag <span class="token keyword">WHERE</span> tag<span class="token operator">=</span><span class="token string">&#39;mysql&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> tag_post <span class="token keyword">WHERE</span> tag_id<span class="token operator">=</span><span class="token number">1234</span><span class="token punctuation">;</span>\n<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> post <span class="token keyword">WHERE</span> post<span class="token punctuation">.</span>id <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span><span class="token number">456</span><span class="token punctuation">,</span><span class="token number">567</span><span class="token punctuation">,</span><span class="token number">9098</span><span class="token punctuation">,</span><span class="token number">8904</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 8);
const _hoisted_9 = {
  href: "https://pdai.tech/md/db/sql-mysql/sql-mysql-performance.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_10 = /* @__PURE__ */ createTextVNode("MySQL - \u6027\u80FD\u4F18\u5316");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_9, [
        _hoisted_10,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var ________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "\u5206\u89E3\u5927\u8FDE\u63A5\u67E5\u8BE2.html.vue"]]);
export { ________html as default };
