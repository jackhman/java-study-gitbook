import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.ed238031.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="calc-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#calc-\u51FD\u6570" aria-hidden="true">#</a> calc()\u51FD\u6570</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>CSS3 \u7684 calc() \u51FD\u6570\u5141\u8BB8\u6211\u4EEC\u5728\u5C5E\u6027\u503C\u4E2D\u6267\u884C\u6570\u5B66\u64CD\u4F5C\u3002\u4F8B\u5982\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 calc() \u6307\u5B9A\u4E00\u4E2A\u5143\u7D20\u5BBD\u7684\u56FA\u5B9A\u50CF\u7D20\u503C\u4E3A\u591A\u4E2A\u6570\u503C\u7684\u548C\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.foo</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100px + 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u4E3A\u4EC0\u4E48\u4F7F\u7528-calc" tabindex="-1"><a class="header-anchor" href="#_2-\u4E3A\u4EC0\u4E48\u4F7F\u7528-calc" aria-hidden="true">#</a> 2. \u4E3A\u4EC0\u4E48\u4F7F\u7528 calc()</h2><h3 id="_2-1-css-\u9884\u5904\u7406\u5668-\u662F\u5982\u4F55\u5904\u7406\u7684" tabindex="-1"><a class="header-anchor" href="#_2-1-css-\u9884\u5904\u7406\u5668-\u662F\u5982\u4F55\u5904\u7406\u7684" aria-hidden="true">#</a> 2.1 CSS \u9884\u5904\u7406\u5668 \u662F\u5982\u4F55\u5904\u7406\u7684</h3><p>\u4F7F\u7528 CSS \u9884\u5904\u7406\u5668\uFF0C\u6BD4\u5982 SASS\u7684\u60C5\u51B5</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token selector">.foo </span><span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 100px <span class="token operator">+</span> 50px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token property"><span class="token variable">$width-one</span></span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$width-two</span></span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>\n<span class="token selector">.bar </span><span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$width-one</span> <span class="token operator">+</span> <span class="token variable">$width-two</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-calc-\u51FD\u6570-\u4F18\u52BF\u4E00-\u53EF\u4EE5\u6DF7\u5408\u8BA1\u7B97\u7EDD\u5BF9\u5355\u4F4D" tabindex="-1"><a class="header-anchor" href="#_2-2-calc-\u51FD\u6570-\u4F18\u52BF\u4E00-\u53EF\u4EE5\u6DF7\u5408\u8BA1\u7B97\u7EDD\u5BF9\u5355\u4F4D" aria-hidden="true">#</a> 2.2 calc() \u51FD\u6570 \u4F18\u52BF\u4E00\uFF1A\u53EF\u4EE5\u6DF7\u5408\u8BA1\u7B97\u7EDD\u5BF9\u5355\u4F4D</h3><p><code>calc()</code> \u51FD\u6570\u80FD\u591F\u7EC4\u5408\u4E0D\u540C\u7684\u5355\u5143\u3002\u7279\u522B\u662F\uFF0C<strong>\u6211\u4EEC\u53EF\u4EE5\u6DF7\u5408\u8BA1\u7B97\u7EDD\u5BF9\u5355\u4F4D\uFF08\u6BD4\u5982\u767E\u5206\u6BD4\u4E0E\u89C6\u53E3\u5355\u5143\uFF09\u4E0E\u76F8\u5BF9\u5355\u4F4D\uFF08\u6BD4\u5982\u50CF\u7D20\uFF09</strong>\u3002\u4F8B\u5982\uFF0C\u6211\u4EEC\u53EF\u4EE5\u521B\u9020\u4E00\u4E2A\u8868\u8FBE\u5F0F\uFF0C\u7528\u4E00\u4E2A\u767E\u5206\u6BD4\u51CF\u6389\u4E00\u4E2A\u50CF\u7D20\u503C\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.foo</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u672C\u4F8B\u4E2D\uFF0C<code>.foo</code> \u5143\u7D20\u603B\u662F\u5C0F\u4E8E\u5B83\u7236\u5143\u7D20\u5BBD\u5EA6 50px\u3002</p><h3 id="_2-3-\u51FD\u6570-\u4F18\u52BF\u4E8C-\u66F4\u6E05\u6670" tabindex="-1"><a class="header-anchor" href="#_2-3-\u51FD\u6570-\u4F18\u52BF\u4E8C-\u66F4\u6E05\u6670" aria-hidden="true">#</a> 2.3 \u51FD\u6570 \u4F18\u52BF\u4E8C\uFF1A\u66F4\u6E05\u6670</h3><p>\u4F7F\u7528 <code>calc()</code>\uFF0C\u8BA1\u7B97\u503C\u662F\u8868\u8FBE\u5F0F\u5B83\u81EA\u5DF1\uFF0C\u800C\u975E\u8868\u8FBE\u5F0F\u7684\u7ED3\u679C\u3002\u5F53\u4F7F\u7528 CSS \u9884\u5904\u7406\u5668\u505A\u6570\u5B66\u8FD0\u7B97\u65F6\uFF0C\u7ED9\u5B9A\u503C\u4E3A\u8868\u8FBE\u5F0F\u7684\u7ED3\u679C\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.foo</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 100px + 50px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.foo</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u800C\uFF0C\u6D4F\u89C8\u5668\u89E3\u6790\u7684 calc() \u7684\u503C\u4E3A\u771F\u5B9E\u7684 calc() \u8868\u8FBE\u5F0F\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.foo</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.foo</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u610F\u5473\u7740\u6D4F\u89C8\u5668\u4E2D\u7684\u503C\u53EF\u4EE5\u66F4\u52A0\u7075\u6D3B\uFF0C\u80FD\u591F\u54CD\u5E94\u89C6\u53E3\u7684\u6539\u53D8\u3002\u6211\u4EEC\u80FD\u591F\u7ED9\u5143\u7D20\u8BBE\u5B9A\u4E00\u4E2A\u9AD8\u5EA6\u4E3A\u89C6\u53E3\u7684\u9AD8\u5EA6\u51CF\u53BB\u4E00\u4E2A\u7EDD\u5BF9\u503C\uFF0C\u5B83\u5C06\u968F\u89C6\u53E3\u7684\u6539\u53D8\u8FDB\u884C\u8C03\u8282\u3002</p><h2 id="_3-\u4F7F\u7528-calc" tabindex="-1"><a class="header-anchor" href="#_3-\u4F7F\u7528-calc" aria-hidden="true">#</a> 3. \u4F7F\u7528 calc()</h2><p>calc() \u51FD\u6570\u53EF\u4EE5\u7528\u6765\u5BF9\u6570\u503C\u5C5E\u6027\u6267\u884C\u56DB\u5219\u8FD0\u7B97\u3002\u6BD4\u5982\uFF0C<code>&lt;length&gt;</code>\uFF0C<code>&lt;frequency&gt;</code>\uFF0C<code>&lt;angle&gt;</code>\uFF0C<code>&lt;time&gt;</code>\uFF0C<code>&lt;number&gt;</code> \u6216\u8005 <code>&lt;integer&gt;</code> \u6570\u636E\u7C7B\u578B\u3002</p><p>\u8FD9\u91CC\u6709\u4E00\u4E9B\u793A\u4F8B\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.foo</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>50vmax + 3rem<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>1vw + 1em<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span> <span class="token function">calc</span><span class="token punctuation">(</span>1turn + 28deg<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span>100<span class="token punctuation">,</span> <span class="token function">calc</span><span class="token punctuation">(</span>3 * 20%<span class="token punctuation">)</span><span class="token punctuation">,</span> 40%<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>50vw / 3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-clac-\u5D4C\u5957" tabindex="-1"><a class="header-anchor" href="#_4-clac-\u5D4C\u5957" aria-hidden="true">#</a> 4. clac() \u5D4C\u5957</h2><p>calc() \u51FD\u6570\u53EF\u4EE5\u5D4C\u5957\u3002\u5728\u51FD\u6570\u91CC\u8FB9\uFF0C\u4F1A\u88AB\u89C6\u4E3A\u7B80\u5355\u7684\u62EC\u53F7\u8868\u8FBE\u5F0F\uFF0C\u5982\u4E0B\u4F8B\u6240\u793A\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.foo</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span> 100% / <span class="token function">calc</span><span class="token punctuation">(</span>100px * 2<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u51FD\u6570\u7684\u8BA1\u7B97\u503C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.foo</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span> 100% / <span class="token punctuation">(</span>100px * 2<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u4EC0\u4E48\u573A\u666F\u4F7F\u7528-calc" tabindex="-1"><a class="header-anchor" href="#_5-\u4EC0\u4E48\u573A\u666F\u4F7F\u7528-calc" aria-hidden="true">#</a> 5. \u4EC0\u4E48\u573A\u666F\u4F7F\u7528 calc()</h2><h3 id="_5-1-example-1-\u5C45\u4E2D\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#_5-1-example-1-\u5C45\u4E2D\u5143\u7D20" aria-hidden="true">#</a> 5.1 Example 1 - \u5C45\u4E2D\u5143\u7D20</h3><p>\u4F7F\u7528 calc() \u7ED9\u6211\u4EEC\u63D0\u4F9B\u53E6\u4E00\u4E2A\u5782\u76F4\u5C45\u4E2D\u5143\u7D20\u7684\u89E3\u51B3\u65B9\u6848\u3002\u5982\u679C\u6211\u4EEC\u77E5\u9053\u5143\u7D20\u7684\u5C3A\u5BF8\uFF0C\u4E00\u4E2A\u5178\u578B\u7684\u89E3\u51B3\u65B9\u6848\u662F\u4F7F\u7528\u8D1F\u5916\u8FB9\u8DDD\u79FB\u52A8\u81EA\u8EAB\u8DDD\u79BB\u9AD8\u4E0E\u5BBD\u7684\u4E00\u534A\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.foo</span> <span class="token punctuation">{</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> absolute\n    <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n    <span class="token property">marging-top</span><span class="token punctuation">:</span> -150px<span class="token punctuation">;</span>\n    <span class="token property">margin-left</span><span class="token punctuation">:</span> -150px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528 calc() \u51FD\u6570\uFF0C\u6211\u4EEC\u4EC5\u4EC5\u901A\u8FC7 top \u4E0E left \u5C5E\u6027\u4FBF\u80FD\u5B9E\u73B0\u76F8\u540C\u7684\u6548\u679C\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.foo</span> <span class="token punctuation">{</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> absolute\n    <span class="token property">top</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>50% - 150px<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token property">left</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>50% - 150px<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Flexbox \u7684\u4ECB\u5165\uFF0C\u5DF2\u7ECF\u5F88\u5C11\u9700\u8981\u8FD9\u79CD\u65B9\u6CD5\u4E86\u3002\u4E0D\u8FC7\uFF0C\u4E00\u4E9B\u60C5\u51B5\u4E0B Flexbox \u4E0D\u80FD\u88AB\u4F7F\u7528\u3002\u6BD4\u5982\uFF0C\u5143\u7D20\u9700\u8981\u7EDD\u5BF9\u5B9A\u4F4D\u6216\u8005\u56FA\u5B9A\u5B9A\u4F4D\uFF0C\u8FD9\u79CD\u65B9\u6CD5\u662F\u6709\u7528\u7684\u3002</p><h3 id="_5-2-example-2-\u521B\u5EFA\u6839\u6805\u683C\u5C3A\u5BF8" tabindex="-1"><a class="header-anchor" href="#_5-2-example-2-\u521B\u5EFA\u6839\u6805\u683C\u5C3A\u5BF8" aria-hidden="true">#</a> 5.2 Example 2 - \u521B\u5EFA\u6839\u6805\u683C\u5C3A\u5BF8</h3><p>\u4F7F\u7528 rem\uFF0C<code>calc()</code> \u51FD\u6570\u80FD\u591F\u7528\u6765\u521B\u5EFA\u4E00\u4E2A\u57FA\u4E8E\u89C6\u53E3\u7684\u6805\u683C\u3002\u6211\u4EEC\u53EF\u4EE5\u8BBE\u7F6E\u6839\u5143\u7D20\u7684\u5B57\u4F53\u5927\u5C0F\u4E3A\u89C6\u53E3\u5BBD\u5EA6\u7684\u4E00\u90E8\u5206\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span>  \n    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100vw / 30<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\uFF0C1rem \u4E3A\u89C6\u53E3\u5BBD\u5EA6\u7684 1/30\u3002\u5728\u9875\u9762\u4E0A\u7684\u4EFB\u4F55\u6587\u672C\uFF0C\u5C06\u4F1A\u6839\u636E\u4F60\u7684\u89C6\u53E3\u81EA\u52A8\u7F29\u653E\u3002\u66F4\u8FDB\u4E00\u6B65\uFF0C\u76F8\u540C\u6BD4\u4F8B\u7684\u89C6\u53E3\u603B\u4F1A\u663E\u793A\u76F8\u540C\u7684\u6587\u672C\u6570\u91CF\uFF0C\u4E0D\u7BA1\u89C6\u53E3\u7684\u771F\u5B9E\u5C3A\u5BF8\u662F\u591A\u5C11\u3002</p><p>\u5982\u679C\u6211\u4EEC\u5BF9\u975E\u6587\u672C\u4F7F\u7528 rem \u8BBE\u7F6E\u5927\u5C0F\uFF0C\u5B83\u4EEC\u540C\u6837\u9075\u5B88\u8FD9\u4E2A\u884C\u4E3A\u3002\u4E00\u4E2A 1rem \u5BBD\u5EA6\u7684\u5143\u7D20\u603B\u662F\u89C6\u53E3\u5143\u7D20\u5BBD\u5EA6\u7684 1/30\u3002</p><h3 id="_5-3-example-3-\u6E05\u6670\u5EA6" tabindex="-1"><a class="header-anchor" href="#_5-3-example-3-\u6E05\u6670\u5EA6" aria-hidden="true">#</a> 5.3 Example 3 - \u6E05\u6670\u5EA6</h3><p>\u6700\u540E\uFF0C<code>calc()</code>\u4F7F\u8BA1\u7B97\u66F4\u52A0\u6E05\u6670\u3002\u5982\u679C\u4F60\u4F7F\u4E00\u7EC4\u9879\u76EE\u4E3A\u5B83\u4EEC\u7236\u5143\u7D20\u5BB9\u5668\u5BBD\u5EA6\u7684 1/6\uFF0C\u4F60\u53EF\u80FD\u8FD9\u4E48\u5199\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.foo</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 16.666666667%<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u800C\uFF0C\u5B83\u80FD\u591F\u66F4\u52A0\u6E05\u6670\u5E76\u5177\u6709\u53EF\u8BFB\u6027\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.foo</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% / 6<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528 <code>calc()</code>\uFF0C\u6211\u4EEC\u8FD8\u80FD\u505A\u66F4\u591A\u7684\u4E8B\u60C5\uFF0C\u6BD4\u5982\u521B\u5EFA\u4E00\u4E2A\u6805\u683C\u7CFB\u7EDF\u3002\u5B83\u662F CSS \u6700\u6709\u7528\u7684\u65B0\u7279\u6027\u4E4B\u4E00\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 46);
const _hoisted_47 = {
  href: "https://segmentfault.com/a/1190000019392639",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_48 = /* @__PURE__ */ createTextVNode("\u6D45\u8C08CSS calc()\u51FD\u6570\u7684\u7528\u6CD5");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_47, [
        _hoisted_48,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var C1Calc___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C1-calc\u51FD\u6570.html.vue"]]);
export { C1Calc___html as default };
