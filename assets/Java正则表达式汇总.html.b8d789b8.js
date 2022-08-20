import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.a829be87.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="java\u6B63\u5219\u8868\u8FBE\u5F0F\u6C47\u603B" tabindex="-1"><a class="header-anchor" href="#java\u6B63\u5219\u8868\u8FBE\u5F0F\u6C47\u603B" aria-hidden="true">#</a> Java\u6B63\u5219\u8868\u8FBE\u5F0F\u6C47\u603B</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u6B63\u5219\u8868\u8FBE\u5F0F(regular expression)\u63CF\u8FF0\u4E86\u4E00\u79CD\u5B57\u7B26\u4E32\u5339\u914D\u7684\u6A21\u5F0F\uFF08pattern\uFF09\uFF0C\u53EF\u4EE5\u7528\u6765\u68C0\u67E5\u4E00\u4E2A\u4E32\u662F\u5426\u542B\u6709\u67D0\u79CD\u5B50\u4E32\u3001\u5C06\u5339\u914D\u7684\u5B50\u4E32\u66FF\u6362\u6216\u8005\u4ECE\u67D0\u4E2A\u4E32\u4E2D\u53D6\u51FA\u7B26\u5408\u67D0\u4E2A\u6761\u4EF6\u7684\u5B50\u4E32\u7B49\u3002</p><h2 id="_2-\u5339\u914D\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#_2-\u5339\u914D\u89C4\u5219" aria-hidden="true">#</a> 2. \u5339\u914D\u89C4\u5219</h2><h3 id="_2-1-\u5355\u5B57\u7B26\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5355\u5B57\u7B26\u5339\u914D" aria-hidden="true">#</a> 2.1 \u5355\u5B57\u7B26\u5339\u914D</h3><table><thead><tr><th style="text-align:left;">\u6B63\u5219\u8868\u8FBE\u5F0F</th><th style="text-align:left;">\u89C4\u5219</th><th style="text-align:left;">\u53EF\u4EE5\u5339\u914D</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code></td><td style="text-align:left;">\u6307\u5B9A\u5B57\u7B26</td><td style="text-align:left;"><code>A</code></td></tr><tr><td style="text-align:left;"><code>\\u548c</code></td><td style="text-align:left;">\u6307\u5B9AUnicode\u5B57\u7B26</td><td style="text-align:left;"><code>\u548C</code></td></tr><tr><td style="text-align:left;"><code>.</code></td><td style="text-align:left;">\u4EFB\u610F\u5B57\u7B26</td><td style="text-align:left;"><code>a</code>\uFF0C<code>b</code>\uFF0C<code>&amp;</code>\uFF0C<code>0</code></td></tr><tr><td style="text-align:left;"><code>\\d</code></td><td style="text-align:left;">\u6570\u5B570~9</td><td style="text-align:left;"><code>0</code>~<code>9</code></td></tr><tr><td style="text-align:left;"><code>\\w</code></td><td style="text-align:left;">\u5927\u5C0F\u5199\u5B57\u6BCD\uFF0C\u6570\u5B57\u548C\u4E0B\u5212\u7EBF</td><td style="text-align:left;"><code>a</code>~<code>z</code>\uFF0C<code>A</code>~<code>Z</code>\uFF0C<code>0</code>~<code>9</code>\uFF0C<code>_</code></td></tr><tr><td style="text-align:left;"><code>\\s</code></td><td style="text-align:left;">\u7A7A\u683C\u3001Tab\u952E</td><td style="text-align:left;">\u7A7A\u683C\uFF0CTab</td></tr><tr><td style="text-align:left;"><code>\\D</code></td><td style="text-align:left;">\u975E\u6570\u5B57</td><td style="text-align:left;"><code>a</code>\uFF0C<code>A</code>\uFF0C<code>&amp;</code>\uFF0C<code>_</code>\uFF0C\u2026\u2026</td></tr><tr><td style="text-align:left;"><code>\\W</code></td><td style="text-align:left;">\u975E\\w</td><td style="text-align:left;"><code>&amp;</code>\uFF0C<code>@</code>\uFF0C<code>\u4E2D</code>\uFF0C\u2026\u2026</td></tr><tr><td style="text-align:left;"><code>\\S</code></td><td style="text-align:left;">\u975E\\s</td><td style="text-align:left;"><code>a</code>\uFF0C<code>A</code>\uFF0C<code>&amp;</code>\uFF0C<code>_</code>\uFF0C\u2026\u2026</td></tr></tbody></table><h3 id="_2-2-\u591A\u5B57\u7B26\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#_2-2-\u591A\u5B57\u7B26\u5339\u914D" aria-hidden="true">#</a> 2.2 \u591A\u5B57\u7B26\u5339\u914D</h3><p><strong>\u90FD\u662F\u9488\u5BF9\u524D\u4E00\u4E2A\u5B57\u7B26\u5339\u914D</strong></p><table><thead><tr><th style="text-align:left;">\u6B63\u5219\u8868\u8FBE\u5F0F</th><th style="text-align:left;">\u89C4\u5219</th><th style="text-align:left;">\u53EF\u4EE5\u5339\u914D</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A*</code></td><td style="text-align:left;">\u4EFB\u610F\u4E2A\u6570\u5B57\u7B26</td><td style="text-align:left;">\u7A7A\uFF0C<code>A</code>\uFF0C<code>AA</code>\uFF0C<code>AAA</code>\uFF0C\u2026\u2026</td></tr><tr><td style="text-align:left;"><code>A+</code></td><td style="text-align:left;">\u81F3\u5C111\u4E2A\u5B57\u7B26</td><td style="text-align:left;"><code>A</code>\uFF0C<code>AA</code>\uFF0C<code>AAA</code>\uFF0C\u2026\u2026</td></tr><tr><td style="text-align:left;"><code>A?</code></td><td style="text-align:left;">0\u4E2A\u62161\u4E2A\u5B57\u7B26</td><td style="text-align:left;">\u7A7A\uFF0C<code>A</code></td></tr><tr><td style="text-align:left;"><code>A{3}</code></td><td style="text-align:left;">\u6307\u5B9A\u4E2A\u6570\u5B57\u7B26</td><td style="text-align:left;"><code>AAA</code></td></tr><tr><td style="text-align:left;"><code>A{2,3}</code></td><td style="text-align:left;">\u6307\u5B9A\u8303\u56F4\u4E2A\u6570\u5B57\u7B26</td><td style="text-align:left;"><code>AA</code>\uFF0C<code>AAA</code></td></tr><tr><td style="text-align:left;"><code>A{2,}</code></td><td style="text-align:left;">\u81F3\u5C11n\u4E2A\u5B57\u7B26</td><td style="text-align:left;"><code>AA</code>\uFF0C<code>AAA</code>\uFF0C<code>AAAA</code>\uFF0C\u2026\u2026</td></tr><tr><td style="text-align:left;"><code>A{0,3}</code></td><td style="text-align:left;">\u6700\u591An\u4E2A\u5B57\u7B26</td><td style="text-align:left;">\u7A7A\uFF0C<code>A</code>\uFF0C<code>AA</code>\uFF0C<code>AAA</code></td></tr></tbody></table><h3 id="_2-3-\u590D\u6742\u5339\u914D\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#_2-3-\u590D\u6742\u5339\u914D\u89C4\u5219" aria-hidden="true">#</a> 2.3 \u590D\u6742\u5339\u914D\u89C4\u5219</h3><table><thead><tr><th style="text-align:left;">\u6B63\u5219\u8868\u8FBE\u5F0F</th><th style="text-align:left;">\u89C4\u5219</th><th style="text-align:left;">\u53EF\u4EE5\u5339\u914D</th></tr></thead><tbody><tr><td style="text-align:left;">^</td><td style="text-align:left;">\u5F00\u5934</td><td style="text-align:left;">\u5B57\u7B26\u4E32\u5F00\u5934</td></tr><tr><td style="text-align:left;">$</td><td style="text-align:left;">\u7ED3\u5C3E</td><td style="text-align:left;">\u5B57\u7B26\u4E32\u7ED3\u675F</td></tr><tr><td style="text-align:left;">[ABC]</td><td style="text-align:left;">[\u2026]\u5185\u4EFB\u610F\u5B57\u7B26</td><td style="text-align:left;">A\uFF0CB\uFF0CC</td></tr><tr><td style="text-align:left;">[A-F0-9xy]</td><td style="text-align:left;">\u6307\u5B9A\u8303\u56F4\u7684\u5B57\u7B26</td><td style="text-align:left;"><code>A</code>\uFF0C\u2026\u2026\uFF0C<code>F</code>\uFF0C<code>0</code>\uFF0C\u2026\u2026\uFF0C<code>9</code>\uFF0C<code>x</code>\uFF0C<code>y</code></td></tr><tr><td style="text-align:left;">[^A-F]</td><td style="text-align:left;">\u6307\u5B9A\u8303\u56F4\u5916\u7684\u4EFB\u610F\u5B57\u7B26</td><td style="text-align:left;">\u975E<code>A</code>~<code>F</code></td></tr><tr><td style="text-align:left;">AB|CD|EF</td><td style="text-align:left;">AB\u6216CD\u6216EF</td><td style="text-align:left;"><code>AB</code>\uFF0C<code>CD</code>\uFF0C<code>EF</code></td></tr></tbody></table><h3 id="_2-4-\u975E\u8D2A\u5A6A\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#_2-4-\u975E\u8D2A\u5A6A\u5339\u914D" aria-hidden="true">#</a> 2.4 \u975E\u8D2A\u5A6A\u5339\u914D</h3><p><strong>\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u9ED8\u8BA4\u4F7F\u7528\u8D2A\u5A6A\u5339\u914D</strong>\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>?</code>\u8868\u793A\u5BF9\u67D0\u4E00\u89C4\u5219\u8FDB\u884C\u975E\u8D2A\u5A6A\u5339\u914D\u3002</p><ul><li>\u8D2A\u5A6A\u5339\u914D\uFF1A\u4EFB\u4F55\u4E00\u4E2A\u89C4\u5219\uFF0C\u5B83\u603B\u662F\u5C3D\u53EF\u80FD\u591A\u5730\u5411\u540E\u5339\u914D\uFF0C\u56E0\u6B64\uFF0C<code>\\d+</code>\u603B\u662F\u4F1A\u628A\u540E\u9762\u7684<code>0</code>\u5305\u542B\u8FDB\u6765\u3002</li><li>\u8981\u8BA9<code>\\d+</code>\u5C3D\u91CF\u5C11\u5339\u914D\uFF0C\u8BA9<code>0*</code>\u5C3D\u91CF\u591A\u5339\u914D\uFF0C\u6211\u4EEC\u5C31\u5FC5\u987B\u8BA9<code>\\d+</code>\u4F7F\u7528\u975E\u8D2A\u5A6A\u5339\u914D\u3002</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Pattern</span> pattern <span class="token operator">=</span> <span class="token class-name">Pattern</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span><span class="token string">&quot;(\\\\d+?)(0*)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">Matcher</span> matcher <span class="token operator">=</span> pattern<span class="token punctuation">.</span><span class="token function">matcher</span><span class="token punctuation">(</span><span class="token string">&quot;1230000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>matcher<span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;group1=&quot;</span> <span class="token operator">+</span> matcher<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;123&quot;</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;group2=&quot;</span> <span class="token operator">+</span> matcher<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;0000&quot;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-java-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-java-\u65B9\u6CD5" aria-hidden="true">#</a> 3. java \u65B9\u6CD5</h2><h3 id="_3-1-\u5206\u5272\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#_3-1-\u5206\u5272\u5B57\u7B26\u4E32" aria-hidden="true">#</a> 3.1 \u5206\u5272\u5B57\u7B26\u4E32</h3><p>\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u5206\u5272\u5B57\u7B26\u4E32\u53EF\u4EE5\u5B9E\u73B0\u66F4\u52A0\u7075\u6D3B\u7684\u529F\u80FD\u3002<code>String.split()</code>\u65B9\u6CD5\u4F20\u5165\u7684\u6B63\u662F\u6B63\u5219\u8868\u8FBE\u5F0F\u3002\u6211\u4EEC\u6765\u770B\u4E0B\u9762\u7684\u4EE3\u7801\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token string">&quot;a b c&quot;</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;\\\\s&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { &quot;a&quot;, &quot;b&quot;, &quot;c&quot; }</span>\n<span class="token string">&quot;a b  c&quot;</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;\\\\s&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { &quot;a&quot;, &quot;b&quot;, &quot;&quot;, &quot;c&quot; }</span>\n<span class="token string">&quot;a, b ;; c&quot;</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;[\\\\,\\\\;\\\\s]+&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { &quot;a&quot;, &quot;b&quot;, &quot;c&quot; }</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u6211\u4EEC\u60F3\u8BA9\u7528\u6237\u8F93\u5165\u4E00\u7EC4\u6807\u7B7E\uFF0C\u7136\u540E\u628A\u6807\u7B7E\u63D0\u53D6\u51FA\u6765\uFF0C\u56E0\u4E3A\u7528\u6237\u7684\u8F93\u5165\u5F80\u5F80\u662F\u4E0D\u89C4\u8303\u7684\uFF0C\u8FD9\u65F6\uFF0C\u4F7F\u7528\u5408\u9002\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5C31\u53EF\u4EE5\u6D88\u9664\u591A\u4E2A\u7A7A\u683C\u3001\u6DF7\u5408<code>,</code>\u548C<code>;</code>\u8FD9\u4E9B\u4E0D\u89C4\u8303\u7684\u8F93\u5165\uFF0C\u76F4\u63A5\u63D0\u53D6\u51FA\u89C4\u8303\u7684\u5B57\u7B26\u4E32\u3002</p><h3 id="_3-2-\u641C\u7D22\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#_3-2-\u641C\u7D22\u5B57\u7B26\u4E32" aria-hidden="true">#</a> 3.2 \u641C\u7D22\u5B57\u7B26\u4E32</h3><p>\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u8FD8\u53EF\u4EE5\u641C\u7D22\u5B57\u7B26\u4E32\uFF0C\u6211\u4EEC\u6765\u770B\u4F8B\u5B50\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;the quick brown fox jumps over the lazy dog.&quot;</span><span class="token punctuation">;</span>\n        <span class="token class-name">Pattern</span> p <span class="token operator">=</span> <span class="token class-name">Pattern</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span><span class="token string">&quot;\\\\wo\\\\w&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">Matcher</span> m <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">matcher</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">while</span> <span class="token punctuation">(</span>m<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token class-name">String</span> sub <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> m<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sub<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u83B7\u53D6\u5230<code>Matcher</code>\u5BF9\u8C61\u540E\uFF0C\u4E0D\u9700\u8981\u8C03\u7528<code>matches()</code>\u65B9\u6CD5\uFF08\u56E0\u4E3A\u5339\u914D\u6574\u4E2A\u4E32\u80AF\u5B9A\u8FD4\u56DEfalse\uFF09\uFF0C\u800C\u662F\u53CD\u590D\u8C03\u7528<code>find()</code>\u65B9\u6CD5\uFF0C\u5728\u6574\u4E2A\u4E32\u4E2D\u641C\u7D22\u80FD\u5339\u914D\u4E0A<code>\\\\wo\\\\w</code>\u89C4\u5219\u7684\u5B50\u4E32\uFF0C\u5E76\u6253\u5370\u51FA\u6765\u3002\u8FD9\u79CD\u65B9\u5F0F\u6BD4<code>String.indexOf()</code>\u8981\u7075\u6D3B\u5F97\u591A\uFF0C\u56E0\u4E3A\u6211\u4EEC\u641C\u7D22\u7684\u89C4\u5219\u662F3\u4E2A\u5B57\u7B26\uFF1A\u4E2D\u95F4\u5FC5\u987B\u662F<code>o</code>\uFF0C\u524D\u540E\u4E24\u4E2A\u5FC5\u987B\u662F\u5B57\u7B26<code>[A-Za-z0-9_]</code>\u3002</p><h3 id="_3-3-\u66FF\u6362\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#_3-3-\u66FF\u6362\u5B57\u7B26\u4E32" aria-hidden="true">#</a> 3.3 \u66FF\u6362\u5B57\u7B26\u4E32</h3><p>\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u66FF\u6362\u5B57\u7B26\u4E32\u53EF\u4EE5\u76F4\u63A5\u8C03\u7528<code>String.replaceAll()</code>\uFF0C\u5B83\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u5F85\u66FF\u6362\u7684\u5B57\u7B26\u4E32\u3002\u6211\u4EEC\u8FD8\u662F\u6765\u770B\u4F8B\u5B50\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;The     quick\\t\\t brown   fox  jumps   over the  lazy dog.&quot;</span><span class="token punctuation">;</span>\n        <span class="token class-name">String</span> r <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">&quot;\\\\s+&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;The quick brown fox jumps over the lazy dog.&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-\u83B7\u53D6\u5206\u7EC4\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#_3-4-\u83B7\u53D6\u5206\u7EC4\u5339\u914D" aria-hidden="true">#</a> 3.4 \u83B7\u53D6\u5206\u7EC4\u5339\u914D</h3><p>\u6B63\u5219\u8868\u8FBE\u5F0F\u7528<code>(...)</code>\u5206\u7EC4\u53EF\u4EE5\u901A\u8FC7<code>Matcher</code>\u5BF9\u8C61\u5FEB\u901F\u63D0\u53D6\u5B50\u4E32\uFF1A</p><ul><li><code>group(0)</code>\u8868\u793A\u5339\u914D\u7684\u6574\u4E2A\u5B57\u7B26\u4E32\uFF1B</li><li><code>group(1)</code>\u8868\u793A\u7B2C1\u4E2A\u5B50\u4E32\uFF0C<code>group(2)</code>\u8868\u793A\u7B2C2\u4E2A\u5B50\u4E32\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u3002</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Pattern</span> pattern <span class="token operator">=</span> <span class="token class-name">Pattern</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span><span class="token string">&quot;(\\\\d{3,4})\\\\-(\\\\d{7,8})&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        pattern<span class="token punctuation">.</span><span class="token function">matcher</span><span class="token punctuation">(</span><span class="token string">&quot;010-12345678&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n        pattern<span class="token punctuation">.</span><span class="token function">matcher</span><span class="token punctuation">(</span><span class="token string">&quot;021-123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n        pattern<span class="token punctuation">.</span><span class="token function">matcher</span><span class="token punctuation">(</span><span class="token string">&quot;022#1234567&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n        <span class="token comment">// \u83B7\u5F97Matcher\u5BF9\u8C61:</span>\n        <span class="token class-name">Matcher</span> matcher <span class="token operator">=</span> pattern<span class="token punctuation">.</span><span class="token function">matcher</span><span class="token punctuation">(</span><span class="token string">&quot;010-12345678&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>matcher<span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token class-name">String</span> whole <span class="token operator">=</span> matcher<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;010-12345678&quot;, 0\u8868\u793A\u5339\u914D\u7684\u6574\u4E2A\u5B57\u7B26\u4E32</span>\n            <span class="token class-name">String</span> area <span class="token operator">=</span> matcher<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;010&quot;, 1\u8868\u793A\u5339\u914D\u7684\u7B2C1\u4E2A\u5B50\u4E32</span>\n            <span class="token class-name">String</span> tel <span class="token operator">=</span> matcher<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;12345678&quot;, 2\u8868\u793A\u5339\u914D\u7684\u7B2C2\u4E2A\u5B50\u4E32</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>area<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>tel<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 32);
const _hoisted_33 = {
  href: "https://www.liaoxuefeng.com/wiki/1252599548343744/1255945288020320",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_34 = /* @__PURE__ */ createTextVNode("\u5ED6\u96EA\u5CF0-java\u6B63\u5219\u8868\u8FBE\u5F0F");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_33, [
        _hoisted_34,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var Java________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Java\u6B63\u5219\u8868\u8FBE\u5F0F\u6C47\u603B.html.vue"]]);
export { Java________html as default };
