import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.ed238031.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="oracle\u5982\u679C\u8868\u4E0D\u5B58\u5728-\u5219\u521B\u5EFA\u8BE5\u8868" tabindex="-1"><a class="header-anchor" href="#oracle\u5982\u679C\u8868\u4E0D\u5B58\u5728-\u5219\u521B\u5EFA\u8BE5\u8868" aria-hidden="true">#</a> ORACLE\u5982\u679C\u8868\u4E0D\u5B58\u5728\uFF0C\u5219\u521B\u5EFA\u8BE5\u8868</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>Oracle\u4F7F\u7528\u7684\u662FPL/SQL, \u4E0D\u652F\u6301IF NOT EXISTS \u6761\u4EF6\u3002</p><h2 id="_2-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-\u793A\u4F8B" aria-hidden="true">#</a> 2. \u793A\u4F8B</h2><p>\u4F7F\u7528counter\u5728USER_ALL_TABLES\u4E2D\u6765\u5217\u4E3E\u6709\u51E0\u4E2APRODUCT\u8868 \uFF0C\u5982\u679Ci&gt;0\u5219\u8BF4\u660E\u81F3\u5C11\u6709\u4E00\u4E2APRODUCT\u8868\u3002</p><p>\u6839\u636E\u6761\u4EF6\u7684\u5224\u65AD\u5220\u6216\u589EPRODUCT\u8868\u3002</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">DECLARE</span>\ni <span class="token keyword">integer</span><span class="token punctuation">;</span>\n<span class="token keyword">BEGIN</span>\n	<span class="token keyword">SELECT</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">INTO</span> i <span class="token keyword">FROM</span> USER_ALL_TABLES <span class="token keyword">WHERE</span> TABLE_NAME<span class="token operator">=</span><span class="token string">&#39;PRODUCT&#39;</span><span class="token punctuation">;</span>\n	<span class="token keyword">IF</span> i<span class="token operator">&gt;</span><span class="token number">0</span> \n	<span class="token keyword">THEN</span>\n		<span class="token keyword">EXECUTE</span> immediate <span class="token string">&#39;DROP TABLE PRODUCT&#39;</span><span class="token punctuation">;</span>\n	<span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>\n	<span class="token keyword">EXECUTE</span> immediate <span class="token string">&#39;CREATE TABLE PRODUCT\n		(\n			ID integer NOT NULL,\n			VERSION integer,\n			TITLE varchar (255),\n			SKU varchar (255),\n			PARENTSKU varchar (255),\n			COLOR varchar (255),\n			DESCRIPTION varchar (255),\n			PRICE varchar (255),\n			CONSTRAINT PK_PRODUCT_ID PRIMARY KEY(ID)\n		)&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">END</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\uFF1A \u5220\u9664\u4E4B\u540E\u8FD8\u662F\u8981\u65B0\u5EFA\uFF01\uFF01\uFF01\uFF0C\u7F51\u4E0A\u5F88\u591A\u6559\u7A0B\u5220\u9664\u540E\u5C31\u5220\u4E86\uFF0C\u4E0D\u5EFA\u8868</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 9);
const _hoisted_10 = {
  href: "https://blog.csdn.net/qq_24702233/article/details/89483613",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_11 = /* @__PURE__ */ createTextVNode("ORACLE \u5982\u679C\u8868\u4E0D\u5B58\u5728\uFF0C\u5219\u521B\u5EFA\u8BE5\u8868");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_10, [
        _hoisted_11,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var ORACLE_____________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ORACLE\u5982\u679C\u8868\u4E0D\u5B58\u5728\uFF0C\u5219\u521B\u5EFA\u8BE5\u8868.html.vue"]]);
export { ORACLE_____________html as default };
