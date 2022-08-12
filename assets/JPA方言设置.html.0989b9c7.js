import { o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app.2ea2a491.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="jpa\u65B9\u8A00\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#jpa\u65B9\u8A00\u8BBE\u7F6E" aria-hidden="true">#</a> JPA\u65B9\u8A00\u8BBE\u7F6E</h1><p>\u4F8B\u5982\u6570\u636E\u5E93\u7684sql\u7684\u5206\u9875\u6BCF\u4E2A\u7248\u672C\u53EF\u80FD\u4E0D\u4E00\u6837\u3002</p><p>\u4F8B\u5982\u5728oracle11g \u4E0A\u7684\u5206\u9875\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Hibernate: \n    select\n        * \n    from\n        ( select\n            row_.*,\n            rownum rownum_ \n        from\n            ( select\n               *\n            from\n                MY_TABLE  ) row_ \n        where\n            rownum &lt;= ?\n        ) \n    where\n        rownum_ &gt; ?\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u800C\u5728oracle 12G \u4E0A\u662F:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> select\n        *\n    from\n       MY_TABLE\n  offset 0 rows fetch next 10 rows only\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u65B9\u8A00\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-\u65B9\u8A00\u8BBE\u7F6E" aria-hidden="true">#</a> 2. \u65B9\u8A00\u8BBE\u7F6E</h2><p>\u8BBE\u7F6Eoracle11G\u7684\u65B9\u8A00</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.Oracle10gDialect\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>oracle12G \u7684\u65B9\u8A00</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.Oracle10gDialect\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>', 11);
const _hoisted_12 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_12);
}
var JPA_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "JPA\u65B9\u8A00\u8BBE\u7F6E.html.vue"]]);
export { JPA_____html as default };
