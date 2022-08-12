import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.2ea2a491.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u5982\u4F55\u81EA\u5B9A\u4E49minio\u6876\u7684\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u81EA\u5B9A\u4E49minio\u6876\u7684\u6743\u9650" aria-hidden="true">#</a> \u5982\u4F55\u81EA\u5B9A\u4E49MinIO\u6876\u7684\u6743\u9650</h1><h2 id="_1-\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#_1-\u524D\u8A00" aria-hidden="true">#</a> 1. \u524D\u8A00</h2><p>\u6211\u4EEC\u5728\u4F7F\u7528<code>MinIO</code>\u4F5C\u4E3A\u6587\u4EF6\u5B58\u50A8\u7EC4\u4EF6\u7684\u65F6\u5019\uFF0C\u9047\u5230\u4E86\u8FD9\u6837\u4E00\u4E2A\u4E1A\u52A1\u95EE\u9898\uFF1A</p><p>\u9996\u5148\uFF0C<code>MinIO</code>\u7684\u6876\u53EA\u6709<code>public</code>\u548C<code>private</code>\u4E24\u79CD\u6743\u9650\uFF1A</p><ul><li><strong>public</strong>\uFF1A\u6240\u6709\u4EBA\u90FD\u53EF\u4EE5\u8BBF\u95EE\u8BE5\u6876\u7684\u8D44\u6E90\uFF0C\u5305\u62EC\u6876\u5185\u7684\u6587\u4EF6\u5185\u5BB9\u548C\u6587\u4EF6\u76EE\u5F55</li><li><strong>private</strong>\uFF1A\u6240\u6709\u4EBA\u90FD\u65E0\u6CD5\u76F4\u63A5\u8BBF\u95EE\u8BE5\u6876\u7684\u8D44\u6E90\uFF0C\u5982\u679C\u5916\u90E8\u9700\u8981\u8BBF\u95EE\uFF0C\u53EA\u80FD\u901A\u8FC7\u5916\u94FE\uFF08\u6700\u957F\u6709\u6548\u671F7\u5929\uFF09</li></ul><p>\u800C\u6211\u4EEC\u7684\u4E1A\u52A1\u9700\u6C42\u662F\u8981\u628A\u7528\u6237\u5934\u50CF\u653E\u5165<code>MinIO</code>\u7684\u6876\u4E2D\uFF0C\u5982\u679C\u8BBE\u7F6E\u6876\u4E3A<code>public</code>\uFF0C\u90A3\u4E48\u6240\u6709\u4EBA\u90FD\u53EF\u4EE5\u904D\u5386\u5E73\u53F0\u4E0A\u6CE8\u518C\u7528\u6237\u7684\u5934\u50CF\u4FE1\u606F\uFF0C\u8FD9\u4F1A\u9020\u6210\u9690\u79C1\u6CC4\u9732\uFF1B\u5982\u679C\u6876\u8BBE\u7F6E\u4E3A<code>private</code>\uFF0C\u90A3\u4E48\u53EA\u80FD\u4EE5\u5916\u94FE\u7684\u5F62\u5F0F\u7ED9\u5230\u7ED9\u5230\u524D\u7AEF\uFF0C7\u5929\u540E\uFF0C\u8BE5\u5916\u94FEi\u5931\u6548\uFF0C\u5BFC\u81F4\u524D\u7AEF\u9875\u9762\u65E0\u6CD5\u5C55\u793A\u7528\u6237\u5934\u50CF\u3002</p><p>\u90A3\u4E48\uFF0C\u662F\u5426\u53EF\u4EE5<strong>\u65E2\u4E0D\u66B4\u9732\u6876\u4E2D\u6240\u6709\u7684\u7528\u6237\u5934\u50CF\u4FE1\u606F\uFF0C\u53C8\u80FD\u6C38\u4E45\u8BBF\u95EE\uFF08\u4E0D\u901A\u8FC7\u5916\u94FE\u5F62\u5F0F\uFF09\u6307\u5B9A\u7684\u7528\u6237\u5934\u50CF\u6587\u4EF6</strong>\u5462\uFF1F</p><h2 id="_2-\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_2-\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> 2. \u89E3\u51B3\u65B9\u6848</h2><p>\u901A\u8FC7<code>mc</code>\u5DE5\u5177\uFF0C\u5BF9\u6307\u5B9A\u6876\u7684<code>policy</code>\u8FDB\u884C\u5B9A\u5236\u5316\u914D\u7F6E</p><h3 id="_2-1-\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3Atest\u7684\u6876" tabindex="-1"><a class="header-anchor" href="#_2-1-\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3Atest\u7684\u6876" aria-hidden="true">#</a> 2.1. \u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A<code>test</code>\u7684\u6876</h3><p>\u9ED8\u8BA4<code>policy</code>\u662F<code>private</code>\uFF0C\u6F14\u793A\u8D77\u89C1\uFF0C\u53EF\u4EE5\u5148\u8BBE\u4E3A<code>public</code>\u3002</p><h3 id="_2-2-\u4E0A\u4F20\u4E00\u4E2A\u6587\u4EF6\u5230test\u6876\u4E2D" tabindex="-1"><a class="header-anchor" href="#_2-2-\u4E0A\u4F20\u4E00\u4E2A\u6587\u4EF6\u5230test\u6876\u4E2D" aria-hidden="true">#</a> 2.2. \u4E0A\u4F20\u4E00\u4E2A\u6587\u4EF6\u5230test\u6876\u4E2D</h3><p>\u5728\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE\u8BE5\u6876\u7684\u76EE\u5F55\uFF0C\u53EF\u4EE5\u53D1\u73B0\u5217\u51FA\u4E86\u8BE5\u6876\u4E0B\u7684\u6587\u4EF6\u76EE\u5F55\uFF1A</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aa7a7e11aebc49219b1d945a23f4588f~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp" alt="img"></p><h3 id="_2-3-\u8BBE\u7F6E\u8BE5\u6876\u5177\u6709\u4E0B\u8F7D\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#_2-3-\u8BBE\u7F6E\u8BE5\u6876\u5177\u6709\u4E0B\u8F7D\u6743\u9650" aria-hidden="true">#</a> 2.3. \u8BBE\u7F6E\u8BE5\u6876\u5177\u6709\u4E0B\u8F7D\u6743\u9650\uFF1A</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mc policy download minio/test\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-4-\u67E5\u770B\u5F53\u524D\u6876\u7B56\u7565json\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-4-\u67E5\u770B\u5F53\u524D\u6876\u7B56\u7565json\u6587\u4EF6" aria-hidden="true">#</a> 2.4. \u67E5\u770B\u5F53\u524D\u6876\u7B56\u7565json\u6587\u4EF6\uFF1A</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mc get-json minio/test\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>Policy</code>\u6587\u4EF6 (<code>test_policy.json</code>) \u5982\u4E0B\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n	<span class="token property">&quot;Statement&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n			<span class="token property">&quot;Action&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n				<span class="token string">&quot;s3:GetBucketLocation&quot;</span><span class="token punctuation">,</span>\n				<span class="token string">&quot;s3:ListBucket&quot;</span>\n			<span class="token punctuation">]</span><span class="token punctuation">,</span>\n			<span class="token property">&quot;Effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Allow&quot;</span><span class="token punctuation">,</span>\n			<span class="token property">&quot;Principal&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n				<span class="token property">&quot;AWS&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n					<span class="token string">&quot;*&quot;</span>\n				<span class="token punctuation">]</span>\n			<span class="token punctuation">}</span><span class="token punctuation">,</span>\n			<span class="token property">&quot;Resource&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n				<span class="token string">&quot;arn:aws:s3:::test&quot;</span>\n			<span class="token punctuation">]</span>\n		<span class="token punctuation">}</span><span class="token punctuation">,</span>\n		<span class="token punctuation">{</span>\n			<span class="token property">&quot;Action&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n				<span class="token string">&quot;s3:GetObject&quot;</span>\n			<span class="token punctuation">]</span><span class="token punctuation">,</span>\n			<span class="token property">&quot;Effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Allow&quot;</span><span class="token punctuation">,</span>\n			<span class="token property">&quot;Principal&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n				<span class="token property">&quot;AWS&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n					<span class="token string">&quot;*&quot;</span>\n				<span class="token punctuation">]</span>\n			<span class="token punctuation">}</span><span class="token punctuation">,</span>\n			<span class="token property">&quot;Resource&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n				<span class="token string">&quot;arn:aws:s3:::test/*&quot;</span>\n			<span class="token punctuation">]</span>\n		<span class="token punctuation">}</span>\n	<span class="token punctuation">]</span><span class="token punctuation">,</span>\n	<span class="token property">&quot;Version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2012-10-17&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u5728<code>action</code>\u4E2D\u6709<code>s3:ListBucket</code>\u8FD9\u4E00\u9879\u662Fallow\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u4E2D\u904D\u5386\u76EE\u5F55\uFF0C\u5220\u9664\u5373\u53EF</p><h3 id="_2-5-\u4FEE\u6539test-policy-json\u5982\u4E0B" tabindex="-1"><a class="header-anchor" href="#_2-5-\u4FEE\u6539test-policy-json\u5982\u4E0B" aria-hidden="true">#</a> 2.5. \u4FEE\u6539test_policy.json\u5982\u4E0B\uFF1A</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n	<span class="token property">&quot;Statement&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n			<span class="token property">&quot;Action&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n				<span class="token string">&quot;s3:GetBucketLocation&quot;</span>\n			<span class="token punctuation">]</span><span class="token punctuation">,</span>\n			<span class="token property">&quot;Effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Allow&quot;</span><span class="token punctuation">,</span>\n			<span class="token property">&quot;Principal&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n				<span class="token property">&quot;AWS&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n					<span class="token string">&quot;*&quot;</span>\n				<span class="token punctuation">]</span>\n			<span class="token punctuation">}</span><span class="token punctuation">,</span>\n			<span class="token property">&quot;Resource&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n				<span class="token string">&quot;arn:aws:s3:::test&quot;</span>\n			<span class="token punctuation">]</span>\n		<span class="token punctuation">}</span><span class="token punctuation">,</span>\n		<span class="token punctuation">{</span>\n			<span class="token property">&quot;Action&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n				<span class="token string">&quot;s3:GetObject&quot;</span>\n			<span class="token punctuation">]</span><span class="token punctuation">,</span>\n			<span class="token property">&quot;Effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Allow&quot;</span><span class="token punctuation">,</span>\n			<span class="token property">&quot;Principal&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n				<span class="token property">&quot;AWS&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n					<span class="token string">&quot;*&quot;</span>\n				<span class="token punctuation">]</span>\n			<span class="token punctuation">}</span><span class="token punctuation">,</span>\n			<span class="token property">&quot;Resource&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n				<span class="token string">&quot;arn:aws:s3:::test/*&quot;</span>\n			<span class="token punctuation">]</span>\n		<span class="token punctuation">}</span>\n	<span class="token punctuation">]</span><span class="token punctuation">,</span>\n	<span class="token property">&quot;Version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2012-10-17&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-\u91CD\u65B0\u5E94\u7528\u8BE5policy" tabindex="-1"><a class="header-anchor" href="#_2-6-\u91CD\u65B0\u5E94\u7528\u8BE5policy" aria-hidden="true">#</a> 2.6. \u91CD\u65B0\u5E94\u7528\u8BE5policy</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mc policy set-json test_policy.json minio/test\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-7-\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#_2-7-\u9A8C\u8BC1" aria-hidden="true">#</a> 2.7. \u9A8C\u8BC1\uFF1A</h3><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c1af857d0b8b42b6903d214220c98afd~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp" alt="img"></p><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u65E0\u6CD5\u518D\u904D\u5386\u6876\u76EE\u5F55\u4E86\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 29);
const _hoisted_30 = {
  href: "https://juejin.cn/post/7003281659902574628",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_31 = /* @__PURE__ */ createTextVNode("\u5982\u4F55\u81EA\u5B9A\u4E49MinIO\u6876\u7684\u6743\u9650");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_30, [
        _hoisted_31,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var _____MinIO_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "\u5982\u4F55\u81EA\u5B9A\u4E49MinIO\u6876\u7684\u6743\u9650.html.vue"]]);
export { _____MinIO_____html as default };
