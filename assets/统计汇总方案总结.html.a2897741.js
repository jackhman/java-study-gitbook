import { o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app.ed238031.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u7EDF\u8BA1\u6C47\u603B\u65B9\u6848\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u7EDF\u8BA1\u6C47\u603B\u65B9\u6848\u603B\u7ED3" aria-hidden="true">#</a> \u7EDF\u8BA1\u6C47\u603B\u65B9\u6848\u603B\u7ED3</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1 \u7B80\u4ECB</h2><p>\u7EDF\u8BA1\u65B9\u5F0F</p><ol><li>\u5B9E\u65F6\u7EDF\u8BA1</li><li>\u65B0\u5EFA\u6C47\u603B\u8868</li><li>\u6DFB\u52A0\u8FDB\u641C\u7D22\u5F15\u64CE</li></ol><h2 id="_2-\u9002\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_2-\u9002\u7528\u573A\u666F" aria-hidden="true">#</a> 2. \u9002\u7528\u573A\u666F</h2><h3 id="_2-1-\u5B9E\u65F6\u7EDF\u8BA1" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5B9E\u65F6\u7EDF\u8BA1" aria-hidden="true">#</a> 2.1 \u5B9E\u65F6\u7EDF\u8BA1</h3><p>\u9002\u5408\u90A3\u4E9B\u6BD4\u8F83\u903B\u8F91\u7B80\u5355\u7684\u7EDF\u8BA1\u67E5\u8BE2\u3002\u5982\u5355\u8868\u67E5\u8BE2\u6216\u7B80\u5355\u7684\u8FDE\u8868\u67E5\u8BE2</p><h4 id="_2-1-1-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-1-1-\u793A\u4F8B" aria-hidden="true">#</a> 2.1.1 \u793A\u4F8B</h4><ul><li><p>\u5355\u8868\u67E5\u8BE2\u793A\u4F8B</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- \u7EDF\u8BA1\u7528\u6237\u6570</span>\n<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> userCount\n<span class="token keyword">from</span> sys_user<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u7B80\u5355\u7684\u8FDE\u8868\u67E5\u8BE2</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- \u7EDF\u8BA1\u90E8\u95E8\u4E0B\u7684\u7528\u6237\u6570</span>\n<span class="token keyword">select</span> d<span class="token punctuation">.</span>dept_name<span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span>u<span class="token punctuation">.</span>user_id<span class="token punctuation">)</span> userCount\n<span class="token keyword">from</span> sys_dept d\n<span class="token keyword">left</span> <span class="token keyword">join</span> sys_user u <span class="token keyword">on</span> d<span class="token punctuation">.</span>dept_id <span class="token operator">=</span> u<span class="token punctuation">.</span>dept_id\n<span class="token keyword">group</span> <span class="token keyword">by</span> d<span class="token punctuation">.</span>dept_name\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_2-2-\u65B0\u5EFA\u6C47\u603B\u8868" tabindex="-1"><a class="header-anchor" href="#_2-2-\u65B0\u5EFA\u6C47\u603B\u8868" aria-hidden="true">#</a> 2.2 \u65B0\u5EFA\u6C47\u603B\u8868</h3><p>\u6C47\u603B\u8868\u9002\u5408\u903B\u8F91\u76F8\u5BF9\u590D\u6742\u7684\u67E5\u8BE2\u3002</p><ul><li>\u6570\u636E\u6765\u6E90\u53EF\u80FD<strong>\u6765\u6E90\u4E8E\u591A\u5F20\u8868</strong></li><li>\u8FD9\u4E9B\u6570\u636E\u53EF\u80FD\u5E76\u4E0D\u80FD\u76F4\u63A5\u4F7F\u7528\uFF0C\u9700\u8981\u5BF9\u5176<strong>\u8FDB\u884C\u4E00\u5B9A\u7684\u903B\u8F91\u5904\u7406</strong>\uFF0C\u63D0\u524D\u5C06\u6570\u636E\u5206\u6790\u540E\u7684\u7ED3\u6784\u6DFB\u52A0\u5230\u8BB0\u5F55\u8868</li><li>\u6570\u636E\u662F<strong>\u4E00\u5BF9\u591A\u7684\u5173\u7CFB</strong>\uFF0C\u4E14\u8FD8\u9700\u8981\u8FC7\u6EE4\u591A\u7684\u8FD9\u4E00\u65B9\u6761\u4EF6</li></ul><h4 id="_2-2-1-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-2-1-\u793A\u4F8B" aria-hidden="true">#</a> 2.2.1 \u793A\u4F8B</h4><p>\u4E0D\u662F\u7279\u522B\u597D\u4E3E\u4F8B\uFF0C\u6BD4\u5982\u8BF4\u6211\u4EEC\u5546\u57CE\u4E2D\u9700\u8981\u7EDF\u8BA1\u4F7F\u7528\u4F18\u60E0\u5377\u7684\u4EBA\u6570\uFF0C</p><h3 id="_2-3-\u6DFB\u52A0\u8FDB\u641C\u7D22\u5F15\u64CE" tabindex="-1"><a class="header-anchor" href="#_2-3-\u6DFB\u52A0\u8FDB\u641C\u7D22\u5F15\u64CE" aria-hidden="true">#</a> 2.3 \u6DFB\u52A0\u8FDB\u641C\u7D22\u5F15\u64CE</h3><ul><li>\u9002\u5408\u90A3\u4E9B\u5BF9<strong>\u6027\u80FD\u8981\u6C42\u6BD4\u8F83\u9AD8</strong>\u7684\u573A\u666F</li><li>\u9700\u8981\u6A21\u7CCA\u641C\u7D22\u3001\u5206\u8BCD\u641C\u7D22\u7684\u573A\u666F</li></ul>', 16);
const _hoisted_17 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_17);
}
var _________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "\u7EDF\u8BA1\u6C47\u603B\u65B9\u6848\u603B\u7ED3.html.vue"]]);
export { _________html as default };
