import { o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app.a829be87.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="mybatis\u8FDB\u9636\u64CD\u4F5Cmapper\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#mybatis\u8FDB\u9636\u64CD\u4F5Cmapper\u6A21\u677F" aria-hidden="true">#</a> Mybatis\u8FDB\u9636\u64CD\u4F5CMapper\u6A21\u677F</h1><h2 id="_1-\u6279\u91CF\u63D2\u5165" tabindex="-1"><a class="header-anchor" href="#_1-\u6279\u91CF\u63D2\u5165" aria-hidden="true">#</a> 1. \u6279\u91CF\u63D2\u5165</h2><h3 id="_1-1-mysql\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#_1-1-mysql\u7248\u672C" aria-hidden="true">#</a> 1.1 Mysql\u7248\u672C</h3><p>sql \u8BED\u53E5</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> my_table<span class="token punctuation">(</span>field_1<span class="token punctuation">,</span>field_2<span class="token punctuation">)</span>\n<span class="token keyword">values</span>\n<span class="token punctuation">(</span>value_1<span class="token punctuation">,</span>value_2<span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">(</span>value_1<span class="token punctuation">,</span>value_2<span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">(</span>value_1<span class="token punctuation">,</span>value_2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mybatis\u7684\u6A21\u677F</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>insertBatch<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        INSERT INTO t_user\n        (id, name)\n        VALUES\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>foreach</span> <span class="token attr-name">collection</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user<span class="token punctuation">&quot;</span></span> <span class="token attr-name">separator</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>,<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n            (#{user.id}, #{user.name})\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>foreach</span> <span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-oracle\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#_1-2-oracle\u7248\u672C" aria-hidden="true">#</a> 1.2 Oracle\u7248\u672C</h3><p>\u5728oracle\u4E2D\u4E0D\u652F\u6301mysql\u7684\u65B9\u6CD5,\u9700\u4F7F\u7528insert all</p><blockquote><p>insert all\u8FD8\u652F\u6301\u5F80\u4E0D\u540C\u7684\u8868\u91CC\u63D2\u5165\u6570\u636E</p></blockquote><p>sql \u8BED\u53E5</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">all</span> \n<span class="token keyword">into</span> table1<span class="token punctuation">(</span>filed1<span class="token punctuation">,</span>filed2<span class="token punctuation">)</span><span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">&#39;value1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;value2&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">into</span> table2<span class="token punctuation">(</span>\u5B57\u6BB5<span class="token number">1</span>\uFF0C\u5B57\u6BB5<span class="token number">2</span>\uFF0C\u5B57\u6BB5<span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span>\u503C<span class="token number">1</span>\uFF0C\u503C<span class="token number">2</span>\uFF0C\u503C<span class="token number">3</span><span class="token punctuation">)</span>\n<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mybatis\u7684\u6A21\u677F</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token operator">&lt;</span><span class="token keyword">insert</span> id<span class="token operator">=</span><span class="token string">&quot;insertBatch&quot;</span> useGeneratedKeys<span class="token operator">=</span><span class="token string">&quot;false&quot;</span><span class="token operator">&gt;</span>\n   <span class="token keyword">insert</span> <span class="token keyword">all</span>\n   <span class="token operator">&lt;</span>foreach item<span class="token operator">=</span><span class="token string">&quot;item&quot;</span> <span class="token keyword">index</span><span class="token operator">=</span><span class="token string">&quot;index&quot;</span> collection<span class="token operator">=</span><span class="token string">&quot;list&quot;</span><span class="token operator">&gt;</span>\n      <span class="token keyword">into</span> t_user<span class="token punctuation">(</span>id<span class="token punctuation">,</span> name<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token comment">#{item.id},#{item.name})</span>\n   <span class="token operator">&lt;</span><span class="token operator">/</span>foreach<span class="token operator">&gt;</span>\n   <span class="token keyword">SELECT</span> <span class="token number">1</span> <span class="token keyword">FROM</span> DUAL\n<span class="token operator">&lt;</span><span class="token operator">/</span><span class="token keyword">insert</span><span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u6279\u91CF\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#_2-\u6279\u91CF\u66F4\u65B0" aria-hidden="true">#</a> 2. \u6279\u91CF\u66F4\u65B0</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>update</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>updateBatchUserByIds<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>foreach</span> <span class="token attr-name">collection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span> <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>;<span class="token punctuation">&quot;</span></span> <span class="token attr-name">open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>begin<span class="token punctuation">&quot;</span></span> <span class="token attr-name">close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>;end;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n            UPDATE t_user\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>set</span><span class="token punctuation">&gt;</span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n                    name = #{item.name,jdbcType=VARCHAR},\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sex != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n                    sex = #{item.sex,jdbcType=VARCHAR},\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>\n              \n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>set</span><span class="token punctuation">&gt;</span></span>\n            where ID = #{item.id,jdbcType=VARCHAR}\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>foreach</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>update</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u6279\u91CF\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#_3-\u6279\u91CF\u5220\u9664" aria-hidden="true">#</a> 3. \u6279\u91CF\u5220\u9664</h2><p>Mysql\u548COracle\u7248\u672C\u4E00\u81F4</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>delete</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>deleteBatch<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>List<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\nDELETE FROM STUDENT WHERE id IN\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>foreach</span> <span class="token attr-name">collection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span> <span class="token attr-name">item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(<span class="token punctuation">&quot;</span></span> <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>,<span class="token punctuation">&quot;</span></span> <span class="token attr-name">close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n#{item}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>foreach</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>delete</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 19);
const _hoisted_20 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_20);
}
var Mybatis____Mapper___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Mybatis\u8FDB\u9636\u64CD\u4F5CMapper\u6A21\u677F.html.vue"]]);
export { Mybatis____Mapper___html as default };
