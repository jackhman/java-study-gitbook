import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.2ea2a491.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="java\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#java\u6CE8\u89E3" aria-hidden="true">#</a> Java\u6CE8\u89E3</h1><h2 id="_1-\u6CE8\u89E3\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_1-\u6CE8\u89E3\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 1. \u6CE8\u89E3\u662F\u4EC0\u4E48\uFF1F</h2><blockquote><p>\u6CE8\u89E3\u662F\u4E00\u7CFB\u5217\u5143\u6570\u636E\uFF0C\u5B83\u63D0\u4F9B\u6570\u636E\u7528\u6765\u89E3\u91CA\u7A0B\u5E8F\u4EE3\u7801\uFF0C\u4F46\u662F\u6CE8\u89E3\u5E76\u975E\u662F\u6240\u89E3\u91CA\u7684\u4EE3\u7801\u672C\u8EAB\u7684\u4E00\u90E8\u5206\u3002\u6CE8\u89E3\u5BF9\u4E8E\u4EE3\u7801\u7684\u8FD0\u884C\u6548\u679C\u6CA1\u6709\u76F4\u63A5\u5F71\u54CD\u3002</p><p>\u200B ---\u62BD\u8C61\u7684\u5B98\u65B9\u5B9A\u4E49</p></blockquote><p>\u6CE8\u89E3\u76F8\u5F53\u4E8E\u4E00\u4E2A<strong>\u6807\u7B7E</strong>\uFF0C\u7ED9\u4EE3\u7801\u8D34\u4E0A\u4E00\u4E2A\u4E2A\u6807\u7B7E\u6765\u63CF\u8FF0\u4EE3\u7801\u7684\u76F8\u5173\u7279\u6027</p><h2 id="_2-\u6CE8\u89E3\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-\u6CE8\u89E3\u8BED\u6CD5" aria-hidden="true">#</a> 2. \u6CE8\u89E3\u8BED\u6CD5</h2><p>\u6CE8\u89E3\u901A\u8FC7<code>@Interface</code> \u5173\u952E\u5B57\u8FDB\u884C\u5B9A\u4E49</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public @interface TestAnnotation {\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u6CE8\u89E3\u4E0E\u53CD\u5C04" tabindex="-1"><a class="header-anchor" href="#_3-\u6CE8\u89E3\u4E0E\u53CD\u5C04" aria-hidden="true">#</a> 3. \u6CE8\u89E3\u4E0E\u53CD\u5C04</h2><ol><li><p>\u6CE8\u89E3\u901A\u8FC7\u53CD\u5C04\u83B7\u53D6\u3002\u9996\u5148\u53EF\u4EE5\u901A\u8FC7 Class \u5BF9\u8C61\u7684 isAnnotationPresent() \u65B9\u6CD5\u5224\u65AD\u5B83\u662F\u5426\u5E94\u7528\u4E86\u67D0\u4E2A\u6CE8\u89E3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public boolean isAnnotationPresent(Class&lt;? extends Annotation&gt; annotationClass) {}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u7136\u540E\u901A\u8FC7 getAnnotation() \u65B9\u6CD5\u6765\u83B7\u53D6 Annotation \u5BF9\u8C61\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> public &lt;A extends Annotation&gt; A getAnnotation(Class&lt;A&gt; annotationClass) {}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6216\u8005\u662F getAnnotations() \u65B9\u6CD5\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public Annotation[] getAnnotations() {}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5982\u679C\u83B7\u53D6\u5230\u7684 Annotation \u5982\u679C\u4E0D\u4E3A null\uFF0C\u5219\u5C31\u53EF\u4EE5\u8C03\u7528\u5B83\u4EEC\u7684\u5C5E\u6027\u65B9\u6CD5\u4E86\u3002\u6BD4\u5982</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@TestAnnotation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>\n	\n	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n		\n		<span class="token keyword">boolean</span> hasAnnotation <span class="token operator">=</span> <span class="token class-name">Test</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">isAnnotationPresent</span><span class="token punctuation">(</span><span class="token class-name">TestAnnotation</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n		\n		<span class="token keyword">if</span> <span class="token punctuation">(</span> hasAnnotation <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n			<span class="token class-name">TestAnnotation</span> testAnnotation <span class="token operator">=</span> <span class="token class-name">Test</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getAnnotation</span><span class="token punctuation">(</span><span class="token class-name">TestAnnotation</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n			\n			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;id:&quot;</span><span class="token operator">+</span>testAnnotation<span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;msg:&quot;</span><span class="token operator">+</span>testAnnotation<span class="token punctuation">.</span><span class="token function">msg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n		<span class="token punctuation">}</span>\n\n	<span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 10);
const _hoisted_11 = {
  href: "https://blog.csdn.net/briblue/article/details/73824058",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_12 = /* @__PURE__ */ createTextVNode("\u79D2\u61C2\uFF0CJava \u6CE8\u89E3 \uFF08Annotation\uFF09\u4F60\u53EF\u4EE5\u8FD9\u6837\u5B66");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_11, [
        _hoisted_12,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var Java__2_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Java\u53CD\u5C042.html.vue"]]);
export { Java__2_html as default };
