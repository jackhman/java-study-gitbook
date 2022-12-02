import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as t,a,b as r,d as i,e as o,r as c}from"./app.7a1da930.js";const d={},l=i(`<h1 id="jpa\u67E5\u8BE2\u90E8\u5206\u5B57\u6BB5\u5217\u540D\u65E0\u6548\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#jpa\u67E5\u8BE2\u90E8\u5206\u5B57\u6BB5\u5217\u540D\u65E0\u6548\u95EE\u9898" aria-hidden="true">#</a> JPA\u67E5\u8BE2\u90E8\u5206\u5B57\u6BB5\u5217\u540D\u65E0\u6548\u95EE\u9898</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>spring data jpa\u539F\u751Fsql\u67E5\u8BE2\u95EE\u9898\uFF0C\u6211<strong>\u53EA\u8981\u8868\u5176\u4E2D\u7684\u51E0\u4E2A\u5B57\u6BB5\u7684\u503C</strong>\uFF0C\u672C\u4EE5\u4E3A\u5199\u4E2A\u539F\u751Fsql\uFF0C\u62FF\u5B9E\u4F53\u7C7B\u5BF9\u8C61\u53BB\u63A5\u6CA1\u95EE\u9898\uFF0C\u7ED3\u679C\u5217\u540D\u65E0\u6548</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Query</span><span class="token punctuation">(</span>value <span class="token operator">=</span> 
      <span class="token string">&quot;select d.order_id,d.user_id,d.price  from EDU_ORDER d  where  d.GENERIC_PROD_ID in(?1) &quot;</span> <span class="token operator">+</span>
      <span class="token string">&quot; order by d.create_time desc &quot;</span><span class="token punctuation">,</span> nativeQuery <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Order</span><span class="token punctuation">&gt;</span></span>  <span class="token function">findOrderList</span><span class="token punctuation">(</span><span class="token class-name">List</span> groupSubIdList<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>java.sql.SQLException: \u5217\u540D\u65E0\u6548</p><h2 id="_2-\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_2-\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> 2. \u89E3\u51B3\u65B9\u6848</h2><h3 id="_2-1-select" tabindex="-1"><a class="header-anchor" href="#_2-1-select" aria-hidden="true">#</a> 2.1 select *</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Query</span><span class="token punctuation">(</span>value <span class="token operator">=</span>
<span class="token string">&quot;select d.* from EDU_ORDER d where d.GENERIC_PROD_ID in(?1) &quot;</span> <span class="token operator">+</span>
<span class="token string">&quot; order by d.create_time desc &quot;</span><span class="token punctuation">,</span> nativeQuery <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Order</span><span class="token punctuation">&gt;</span></span> <span class="token function">findOrderList</span><span class="token punctuation">(</span><span class="token class-name">List</span> groupSubIdList<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u867D\u7136\u5B9E\u73B0\u4E86\u529F\u80FD\uFF0C \u8FD9\u6837\u8FD8\u662F\u5168\u8868\u67E5\u8BE2\u4E86\uFF0C\u800C\u4E14\u5BF9\u8868\u5173\u8054\u7B49\u590D\u6742\u903B\u8F91\u65E0\u6CD5\u6BD4\u8F83\u65E0\u529B</p><h3 id="_2-2-hql" tabindex="-1"><a class="header-anchor" href="#_2-2-hql" aria-hidden="true">#</a> 2.2 HQL</h3><div class="language-SQL ext-SQL line-numbers-mode"><pre class="language-SQL"><code>@Query(value =
&quot;select d.orderId,d.userId,d.price from Order where d.GENERICPRODID in(?1) &quot; +
&quot; order by d.createTime desc &quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528HQL \u4E5F\u53EF\u4EE5\u5B9E\u73B0\uFF0C\u4F46\u8FD8\u662F\u4E0D\u591F\u7075\u6D3B</p><h3 id="_2-3-\u8FD4\u56DEmap-string-object-\u4E0D\u8FD4\u56DE\u5B9E\u4F53" tabindex="-1"><a class="header-anchor" href="#_2-3-\u8FD4\u56DEmap-string-object-\u4E0D\u8FD4\u56DE\u5B9E\u4F53" aria-hidden="true">#</a> 2.3 \u8FD4\u56DEMap&lt;String,Object&gt; \u4E0D\u8FD4\u56DE\u5B9E\u4F53</h3><div class="language-jpa ext-jpa line-numbers-mode"><pre class="language-jpa"><code>@Query(value = 
      &quot;select d.order_id,d.user_id,d.price  from EDU_ORDER d  where  d.GENERIC_PROD_ID in(?1) &quot; +
      &quot; order by d.create_time desc &quot;, nativeQuery = true)
List&lt;Map&lt;String,Object&gt;&gt;  findOrderList(List groupSubIdList);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,15),p={href:"https://blog.csdn.net/theweather/article/details/104961113",target:"_blank",rel:"noopener noreferrer"},u=o("JPA \u5217\u540D\u65E0\u6548\u95EE\u9898");function h(v,m){const n=c("ExternalLinkIcon");return s(),t("div",null,[l,a("p",null,[a("a",p,[u,r(n)])])])}const k=e(d,[["render",h],["__file","jpa-y-field.html.vue"]]);export{k as default};
