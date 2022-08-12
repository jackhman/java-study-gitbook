import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.2ea2a491.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="final\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#final\u5173\u952E\u5B57" aria-hidden="true">#</a> final\u5173\u952E\u5B57</h1><h2 id="_0-\u9762\u8BD5" tabindex="-1"><a class="header-anchor" href="#_0-\u9762\u8BD5" aria-hidden="true">#</a> 0. \u9762\u8BD5</h2><ul><li>\u6240\u6709\u7684final\u4FEE\u9970\u7684\u5B57\u6BB5\u90FD\u662F\u7F16\u8BD1\u671F\u5E38\u91CF\u5417?</li><li>\u5982\u4F55\u7406\u89E3private\u6240\u4FEE\u9970\u7684\u65B9\u6CD5\u662F\u9690\u5F0F\u7684final?</li><li>\u8BF4\u8BF4final\u7C7B\u578B\u7684\u7C7B\u5982\u4F55\u62D3\u5C55? \u6BD4\u5982String\u662Ffinal\u7C7B\u578B\uFF0C\u6211\u4EEC\u60F3\u5199\u4E2AMyString\u590D\u7528\u6240\u6709String\u4E2D\u65B9\u6CD5\uFF0C\u540C\u65F6\u589E\u52A0\u4E00\u4E2A\u65B0\u7684toMyString()\u7684\u65B9\u6CD5\uFF0C\u5E94\u8BE5\u5982\u4F55\u505A?</li><li>final\u65B9\u6CD5\u53EF\u4EE5\u88AB\u91CD\u8F7D\u5417? \u53EF\u4EE5</li><li>\u7236\u7C7B\u7684final\u65B9\u6CD5\u80FD\u4E0D\u80FD\u591F\u88AB\u5B50\u7C7B\u91CD\u5199? \u4E0D\u53EF\u4EE5</li><li>\u8BF4\u8BF4final\u57DF\u91CD\u6392\u5E8F\u89C4\u5219?</li><li>\u8BF4\u8BF4final\u7684\u539F\u7406?</li><li>\u4F7F\u7528 final \u7684\u9650\u5236\u6761\u4EF6\u548C\u5C40\u9650\u6027?</li></ul><h2 id="_1-final\u57FA\u7840\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_1-final\u57FA\u7840\u4F7F\u7528" aria-hidden="true">#</a> 1. final\u57FA\u7840\u4F7F\u7528</h2><h3 id="_1-1-\u4FEE\u9970\u7C7B" tabindex="-1"><a class="header-anchor" href="#_1-1-\u4FEE\u9970\u7C7B" aria-hidden="true">#</a> 1.1 \u4FEE\u9970\u7C7B</h3><p>\u5F53\u67D0\u4E2A\u7C7B\u7684\u6574\u4F53\u5B9A\u4E49\u4E3Afinal\u65F6\uFF0C\u5C31\u8868\u660E\u4E86\u4F60\u4E0D\u80FD\u6253\u7B97\u7EE7\u627F\u8BE5\u7C7B\uFF0C\u800C\u4E14\u4E5F\u4E0D\u5141\u8BB8\u522B\u4EBA\u8FD9\u4E48\u505A\u3002\u5373\u8FD9\u4E2A\u7C7B\u662F\u4E0D\u80FD\u6709\u5B50\u7C7B\u7684\u3002</p><p>\u6CE8\u610F\uFF1Afinal\u7C7B\u4E2D\u7684\u6240\u6709\u65B9\u6CD5\u90FD\u9690\u5F0F\u4E3Afinal\uFF0C\u56E0\u4E3A\u65E0\u6CD5\u8986\u76D6\u4ED6\u4EEC\uFF0C\u6240\u4EE5\u5728final\u7C7B\u4E2D\u7ED9\u4EFB\u4F55\u65B9\u6CD5\u6DFB\u52A0final\u5173\u952E\u5B57\u662F\u6CA1\u6709\u4EFB\u4F55\u610F\u4E49\u7684\u3002</p><blockquote><p>\u8FD9\u91CC\u987A\u9053\u8BF4\u8BF4final\u7C7B\u578B\u7684\u7C7B\u5982\u4F55\u62D3\u5C55? \u6BD4\u5982String\u662Ffinal\u7C7B\u578B\uFF0C\u6211\u4EEC\u60F3\u5199\u4E2AMyString\u590D\u7528\u6240\u6709String\u4E2D\u65B9\u6CD5\uFF0C\u540C\u65F6\u589E\u52A0\u4E00\u4E2A\u65B0\u7684toMyString()\u7684\u65B9\u6CD5\uFF0C\u5E94\u8BE5\u5982\u4F55\u505A? @pdai</p></blockquote><p>\u8BBE\u8BA1\u6A21\u5F0F\u4E2D\u6700\u91CD\u8981\u7684\u4E24\u79CD\u5173\u7CFB\uFF0C\u4E00\u79CD\u662F\u7EE7\u627F/\u5B9E\u73B0\uFF1B\u53E6\u5916\u4E00\u79CD\u662F\u7EC4\u5408\u5173\u7CFB\u3002\u6240\u4EE5\u5F53\u9047\u5230\u4E0D\u80FD\u7528\u7EE7\u627F\u7684(final\u4FEE\u9970\u7684\u7C7B),\u5E94\u8BE5\u8003\u8651\u7528\u7EC4\u5408, \u5982\u4E0B\u4EE3\u7801\u5927\u6982\u5199\u4E2A\u7EC4\u5408\u5B9E\u73B0\u7684\u610F\u601D\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">MyString</span><span class="token punctuation">{</span>\n\n    <span class="token keyword">private</span> <span class="token class-name">String</span> innerString<span class="token punctuation">;</span>\n\n    <span class="token comment">// ...init &amp; other methods</span>\n\n    <span class="token comment">// \u652F\u6301\u8001\u7684\u65B9\u6CD5</span>\n    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> innerString<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u901A\u8FC7innerString\u8C03\u7528\u8001\u7684\u65B9\u6CD5</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// \u6DFB\u52A0\u65B0\u65B9\u6CD5</span>\n    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toMyString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token comment">//...</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-\u4FEE\u9970\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_1-2-\u4FEE\u9970\u65B9\u6CD5" aria-hidden="true">#</a> 1.2 \u4FEE\u9970\u65B9\u6CD5</h3><blockquote><p>\u5E38\u89C4\u7684\u4F7F\u7528\u5C31\u4E0D\u8BF4\u4E86\uFF0C\u8FD9\u91CC\u8BF4\u4E0B:</p></blockquote><ul><li>private \u65B9\u6CD5\u662F\u9690\u5F0F\u7684final</li><li>final\u65B9\u6CD5\u662F\u53EF\u4EE5\u88AB\u91CD\u8F7D\u7684</li></ul><h4 id="_1-2-1-private-final" tabindex="-1"><a class="header-anchor" href="#_1-2-1-private-final" aria-hidden="true">#</a> 1.2.1 private final</h4><p>\u7C7B\u4E2D\u6240\u6709private\u65B9\u6CD5\u90FD\u9690\u5F0F\u5730\u6307\u5B9A\u4E3Afinal\u7684\uFF0C\u7531\u4E8E\u65E0\u6CD5\u53D6\u7528private\u65B9\u6CD5\uFF0C\u6240\u4EE5\u4E5F\u5C31\u4E0D\u80FD\u8986\u76D6\u5B83\u3002\u53EF\u4EE5\u5BF9private\u65B9\u6CD5\u589E\u6DFBfinal\u5173\u952E\u5B57\uFF0C\u4F46\u8FD9\u6837\u505A\u5E76\u6CA1\u6709\u4EC0\u4E48\u597D\u5904\u3002\u770B\u4E0B\u4E0B\u9762\u7684\u4F8B\u5B50\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Son</span> <span class="token keyword">extends</span> <span class="token class-name">Base</span><span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Son</span> son <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Son</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">Base</span> father <span class="token operator">=</span> son<span class="token punctuation">;</span>\n        <span class="token comment">//father.test();</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Base\u548CSon\u90FD\u6709\u65B9\u6CD5test(),\u4F46\u662F\u8FD9\u5E76\u4E0D\u662F\u4E00\u79CD\u8986\u76D6\uFF0C\u56E0\u4E3Aprivate\u6240\u4FEE\u9970\u7684\u65B9\u6CD5\u662F\u9690\u5F0F\u7684final\uFF0C\u4E5F\u5C31\u662F\u65E0\u6CD5\u88AB\u7EE7\u627F\uFF0C\u6240\u4EE5\u66F4\u4E0D\u7528\u8BF4\u662F\u8986\u76D6\u4E86\uFF0C\u5728Son\u4E2D\u7684test()\u65B9\u6CD5\u4E0D\u8FC7\u662F\u5C5E\u4E8ESon\u7684\u65B0\u6210\u5458\u7F62\u4E86\uFF0CSon\u8FDB\u884C\u5411\u4E0A\u8F6C\u578B\u5F97\u5230father\uFF0C\u4F46\u662Ffather.test()\u662F\u4E0D\u53EF\u6267\u884C\u7684\uFF0C\u56E0\u4E3ABase\u4E2D\u7684test\u65B9\u6CD5\u662Fprivate\u7684\uFF0C\u65E0\u6CD5\u88AB\u8BBF\u95EE\u5230\u3002</p><h4 id="_1-2-2-final\u65B9\u6CD5\u662F\u53EF\u4EE5\u88AB\u91CD\u8F7D\u7684" tabindex="-1"><a class="header-anchor" href="#_1-2-2-final\u65B9\u6CD5\u662F\u53EF\u4EE5\u88AB\u91CD\u8F7D\u7684" aria-hidden="true">#</a> 1.2.2 final\u65B9\u6CD5\u662F\u53EF\u4EE5\u88AB\u91CD\u8F7D\u7684</h4><p>\u6211\u4EEC\u77E5\u9053\u7236\u7C7B\u7684final\u65B9\u6CD5\u662F\u4E0D\u80FD\u591F\u88AB\u5B50\u7C7B\u91CD\u5199\u7684\uFF0C\u90A3\u4E48final\u65B9\u6CD5\u53EF\u4EE5\u88AB\u91CD\u8F7D\u5417? \u7B54\u6848\u662F\u53EF\u4EE5\u7684\uFF0C\u4E0B\u9762\u4EE3\u7801\u662F\u6B63\u786E\u7684\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FinalExampleParent</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-\u4FEE\u9970\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_1-3-\u4FEE\u9970\u53C2\u6570" aria-hidden="true">#</a> 1.3 \u4FEE\u9970\u53C2\u6570</h3><p>Java\u5141\u8BB8\u5728\u53C2\u6570\u5217\u8868\u4E2D\u4EE5\u58F0\u660E\u7684\u65B9\u5F0F\u5C06\u53C2\u6570\u6307\u660E\u4E3Afinal\uFF0C\u8FD9\u610F\u5473\u8FD9\u4F60\u65E0\u6CD5\u5728\u65B9\u6CD5\u4E2D\u66F4\u6539\u53C2\u6570\u5F15\u7528\u6240\u6307\u5411\u7684\u5BF9\u8C61\u3002\u8FD9\u4E2A\u7279\u6027\u4E3B\u8981\u7528\u6765\u5411\u533F\u540D\u5185\u90E8\u7C7B\u4F20\u9012\u6570\u636E\u3002</p><h3 id="_1-4-\u4FEE\u9970\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_1-4-\u4FEE\u9970\u53D8\u91CF" aria-hidden="true">#</a> 1.4 \u4FEE\u9970\u53D8\u91CF</h3><blockquote><p>\u5E38\u89C4\u7684\u7528\u6CD5\u6BD4\u8F83\u7B80\u5355\uFF0C\u8FD9\u91CC\u901A\u8FC7\u4E0B\u9762\u4E09\u4E2A\u95EE\u9898\u8FDB\u4E00\u6B65\u8BF4\u660E\u3002</p></blockquote><h4 id="_1-4-1-\u6240\u6709\u7684final\u4FEE\u9970\u7684\u5B57\u6BB5\u90FD\u662F\u7F16\u8BD1\u671F\u5E38\u91CF\u5417" tabindex="-1"><a class="header-anchor" href="#_1-4-1-\u6240\u6709\u7684final\u4FEE\u9970\u7684\u5B57\u6BB5\u90FD\u662F\u7F16\u8BD1\u671F\u5E38\u91CF\u5417" aria-hidden="true">#</a> 1.4.1 \u6240\u6709\u7684final\u4FEE\u9970\u7684\u5B57\u6BB5\u90FD\u662F\u7F16\u8BD1\u671F\u5E38\u91CF\u5417?</h4><p>\u73B0\u5728\u6765\u770B\u7F16\u8BD1\u671F\u5E38\u91CF\u548C\u975E\u7F16\u8BD1\u671F\u5E38\u91CF, \u5982\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>\n    <span class="token comment">//\u7F16\u8BD1\u671F\u5E38\u91CF</span>\n    <span class="token keyword">final</span> <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token class-name">J</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">final</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token comment">//\u975E\u7F16\u8BD1\u671F\u5E38\u91CF</span>\n    <span class="token class-name">Random</span> r <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">final</span> <span class="token keyword">int</span> k <span class="token operator">=</span> r<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>k\u7684\u503C\u7531\u968F\u673A\u6570\u5BF9\u8C61\u51B3\u5B9A\uFF0C\u6240\u4EE5\u4E0D\u662F\u6240\u6709\u7684final\u4FEE\u9970\u7684\u5B57\u6BB5\u90FD\u662F\u7F16\u8BD1\u671F\u5E38\u91CF\uFF0C\u53EA\u662Fk\u7684\u503C\u5728\u88AB\u521D\u59CB\u5316\u540E\u65E0\u6CD5\u88AB\u66F4\u6539\u3002</p><h4 id="_1-4-2-static-final" tabindex="-1"><a class="header-anchor" href="#_1-4-2-static-final" aria-hidden="true">#</a> 1.4.2 static final</h4><p>\u4E00\u4E2A\u65E2\u662Fstatic\u53C8\u662Ffinal \u7684\u5B57\u6BB5\u53EA\u5360\u636E\u4E00\u6BB5\u4E0D\u80FD\u6539\u53D8\u7684\u5B58\u50A8\u7A7A\u95F4\uFF0C\u5B83\u5FC5\u987B\u5728\u5B9A\u4E49\u7684\u65F6\u5019\u8FDB\u884C\u8D4B\u503C\uFF0C\u5426\u5219\u7F16\u8BD1\u5668\u5C06\u4E0D\u4E88\u901A\u8FC7\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Random</span></span><span class="token punctuation">;</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>\n    <span class="token keyword">static</span> <span class="token class-name">Random</span> r <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">final</span> <span class="token keyword">int</span> k <span class="token operator">=</span> r<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> k2 <span class="token operator">=</span> r<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Test</span> t1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;k=&quot;</span><span class="token operator">+</span>t1<span class="token punctuation">.</span>k<span class="token operator">+</span><span class="token string">&quot; k2=&quot;</span><span class="token operator">+</span>t1<span class="token punctuation">.</span>k2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">Test</span> t2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;k=&quot;</span><span class="token operator">+</span>t2<span class="token punctuation">.</span>k<span class="token operator">+</span><span class="token string">&quot; k2=&quot;</span><span class="token operator">+</span>t2<span class="token punctuation">.</span>k2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u67D0\u6B21\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>k=2 k2=7\nk=8 k2=7\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\u5BF9\u4E8E\u4E0D\u540C\u7684\u5BF9\u8C61k\u7684\u503C\u662F\u4E0D\u540C\u7684\uFF0C\u4F46\u662Fk2\u7684\u503C\u5374\u662F\u76F8\u540C\u7684\uFF0C\u8FD9\u662F\u4E3A\u4EC0\u4E48\u5462? \u56E0\u4E3Astatic\u5173\u952E\u5B57\u6240\u4FEE\u9970\u7684\u5B57\u6BB5\u5E76\u4E0D\u5C5E\u4E8E\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u800C\u662F\u5C5E\u4E8E\u8FD9\u4E2A\u7C7B\u7684\u3002\u4E5F\u53EF\u7B80\u5355\u7684\u7406\u89E3\u4E3Astatic final\u6240\u4FEE\u9970\u7684\u5B57\u6BB5\u4EC5\u5360\u636E\u5185\u5B58\u7684\u4E00\u4E2A\u4E00\u4EFD\u7A7A\u95F4\uFF0C\u4E00\u65E6\u88AB\u521D\u59CB\u5316\u4E4B\u540E\u4FBF\u4E0D\u4F1A\u88AB\u66F4\u6539\u3002</p><h4 id="_1-4-3-blank-final" tabindex="-1"><a class="header-anchor" href="#_1-4-3-blank-final" aria-hidden="true">#</a> 1.4.3 blank final</h4><p>Java\u5141\u8BB8\u751F\u6210\u7A7A\u767Dfinal\uFF0C\u4E5F\u5C31\u662F\u8BF4\u88AB\u58F0\u660E\u4E3Afinal\u4F46\u53C8\u6CA1\u6709\u7ED9\u51FA\u5B9A\u503C\u7684\u5B57\u6BB5,\u4F46\u662F\u5FC5\u987B\u5728\u8BE5\u5B57\u6BB5\u88AB\u4F7F\u7528\u4E4B\u524D\u88AB\u8D4B\u503C\uFF0C\u8FD9\u7ED9\u4E88\u6211\u4EEC\u4E24\u79CD\u9009\u62E9\uFF1A</p><ul><li>\u5728\u5B9A\u4E49\u5904\u8FDB\u884C\u8D4B\u503C(\u8FD9\u4E0D\u53EB\u7A7A\u767Dfinal)</li><li>\u5728\u6784\u9020\u5668\u4E2D\u8FDB\u884C\u8D4B\u503C\uFF0C\u4FDD\u8BC1\u4E86\u8BE5\u503C\u5728\u88AB\u4F7F\u7528\u524D\u8D4B\u503C\u3002</li></ul><p>\u8FD9\u589E\u5F3A\u4E86final\u7684\u7075\u6D3B\u6027\u3002</p><p>\u770B\u4E0B\u9762\u4EE3\u7801:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>\n    <span class="token keyword">final</span> <span class="token keyword">int</span> i1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">final</span> <span class="token keyword">int</span> i2<span class="token punctuation">;</span><span class="token comment">//\u7A7A\u767Dfinal</span>\n    <span class="token keyword">public</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        i2 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>i2 <span class="token operator">=</span> x<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230i2\u7684\u8D4B\u503C\u66F4\u4E3A\u7075\u6D3B\u3002\u4F46\u662F\u8BF7\u6CE8\u610F\uFF0C\u5982\u679C\u5B57\u6BB5\u7531static\u548Cfinal\u4FEE\u9970\uFF0C\u4EC5\u80FD\u5728\u58F0\u660E\u65F6\u8D4B\u503C\u6216\u58F0\u660E\u540E\u5728\u9759\u6001\u4EE3\u7801\u5757\u4E2D\u8D4B\u503C\uFF0C\u56E0\u4E3A\u8BE5\u5B57\u6BB5\u4E0D\u5C5E\u4E8E\u5BF9\u8C61\uFF0C\u5C5E\u4E8E\u8FD9\u4E2A\u7C7B\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 42);
const _hoisted_43 = {
  href: "https://pdai.tech/md/java/thread/java-thread-x-key-final.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_44 = /* @__PURE__ */ createTextVNode("\u5173\u952E\u5B57: final\u8BE6\u89E3");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_43, [
        _hoisted_44,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var final____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "final\u5173\u952E\u5B57.html.vue"]]);
export { final____html as default };
