import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as s,d as t}from"./app.7a1da930.js";const e={},p=t(`<h1 id="mall\u4E2D\u5546\u54C1\u5C5E\u6027\u7C7B\u578B-\u7C7B\u578B-\u5C5E\u6027-\u89C4\u683C-\u53C2\u6570-\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#mall\u4E2D\u5546\u54C1\u5C5E\u6027\u7C7B\u578B-\u7C7B\u578B-\u5C5E\u6027-\u89C4\u683C-\u53C2\u6570-\u8BBE\u8BA1" aria-hidden="true">#</a> mall\u4E2D\u5546\u54C1\u5C5E\u6027\u7C7B\u578B\uFF08\u7C7B\u578B=\u5C5E\u6027=\u89C4\u683C+\u53C2\u6570\uFF09\u8BBE\u8BA1</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u5546\u54C1\u7C7B\u578B\u5373\u5546\u54C1\u5C5E\u6027\uFF0C\u4E3B\u8981\u662F\u6307\u5546\u54C1\u7684\u89C4\u683C\u548C\u53C2\u6570\uFF0C</p><ul><li>\u89C4\u683C\uFF1A\u7528\u4E8E\u7528\u6237\u8D2D\u4E70\u5546\u54C1\u65F6\u9009\u62E9</li><li>\u53C2\u6570\uFF1A\u7528\u4E8E\u6807\u793A\u5546\u54C1\u5C5E\u6027\u53CA\u641C\u7D22\u65F6\u7B5B\u9009\u3002</li></ul><h2 id="_2-\u8868\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#_2-\u8868\u8BBE\u8BA1" aria-hidden="true">#</a> 2. \u8868\u8BBE\u8BA1</h2><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20220320091410960.png" alt="image-20220320091410960" loading="lazy"></p><h3 id="_2-1-\u5546\u54C1\u5C5E\u6027\u5206\u7C7B\u8868" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5546\u54C1\u5C5E\u6027\u5206\u7C7B\u8868" aria-hidden="true">#</a> 2.1 \u5546\u54C1\u5C5E\u6027\u5206\u7C7B\u8868</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> pms_product_attribute_category
<span class="token punctuation">(</span>
   id                   <span class="token keyword">bigint</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">auto_increment</span><span class="token punctuation">,</span>
   name                 <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span> <span class="token keyword">comment</span> <span class="token string">&#39;\u540D\u79F0&#39;</span><span class="token punctuation">,</span>
   attribute_count      <span class="token keyword">int</span> <span class="token keyword">comment</span> <span class="token string">&#39;\u5C5E\u6027\u6570\u91CF&#39;</span><span class="token punctuation">,</span>
   param_count          <span class="token keyword">int</span> <span class="token keyword">comment</span> <span class="token string">&#39;\u53C2\u6570\u6570\u91CF&#39;</span><span class="token punctuation">,</span>
   <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-\u5546\u54C1\u5C5E\u6027\u8868" tabindex="-1"><a class="header-anchor" href="#_2-2-\u5546\u54C1\u5C5E\u6027\u8868" aria-hidden="true">#</a> 2.2 \u5546\u54C1\u5C5E\u6027\u8868</h3><p>type\u5B57\u6BB5\u7528\u4E8E\u63A7\u5236\u5176\u662F\u89C4\u683C\u8FD8\u662F\u53C2\u6570</p><ul><li>type\uFF1A\u5C5E\u6027\u7684\u7C7B\u578B\uFF1B0-&gt;\u89C4\u683C\uFF1B1-&gt;\u53C2\u6570&#39;,</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>create table pms_product_attribute
<span class="token punctuation">(</span>
   id                   bigint not <span class="token keyword">null</span> auto_increment<span class="token punctuation">,</span>
   product_attribute_category_id bigint comment &#39;\u5546\u54C1\u5C5E\u6027\u5206\u7C7Bid&#39;<span class="token punctuation">,</span>
   name                 <span class="token function">varchar</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span> comment <span class="token char">&#39;\u540D\u79F0&#39;</span><span class="token punctuation">,</span>
   select_type          <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> comment &#39;\u5C5E\u6027\u9009\u62E9\u7C7B\u578B\uFF1A<span class="token number">0</span><span class="token operator">-&gt;</span>\u552F\u4E00\uFF1B<span class="token number">1</span><span class="token operator">-&gt;</span>\u5355\u9009\uFF1B<span class="token number">2</span><span class="token operator">-&gt;</span>\u591A\u9009\uFF1B\u5BF9\u5E94\u5C5E\u6027\u548C\u53C2\u6570\u610F\u4E49\u4E0D\u540C\uFF1B&#39;<span class="token punctuation">,</span>
   input_type           <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> comment &#39;\u5C5E\u6027\u5F55\u5165\u65B9\u5F0F\uFF1A<span class="token number">0</span><span class="token operator">-&gt;</span>\u624B\u5DE5\u5F55\u5165\uFF1B<span class="token number">1</span><span class="token operator">-&gt;</span>\u4ECE\u5217\u8868\u4E2D\u9009\u53D6&#39;<span class="token punctuation">,</span>
   input_list           <span class="token function">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> comment &#39;\u53EF\u9009\u503C\u5217\u8868\uFF0C\u4EE5\u9017\u53F7\u9694\u5F00&#39;<span class="token punctuation">,</span>
   sort                 <span class="token keyword">int</span> comment &#39;\u6392\u5E8F\u5B57\u6BB5\uFF1A\u6700\u9AD8\u7684\u53EF\u4EE5\u5355\u72EC\u4E0A\u4F20\u56FE\u7247&#39;<span class="token punctuation">,</span>
   filter_type          <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> comment &#39;\u5206\u7C7B\u7B5B\u9009\u6837\u5F0F\uFF1A<span class="token number">1</span><span class="token operator">-&gt;</span>\u666E\u901A\uFF1B<span class="token number">1</span><span class="token operator">-&gt;</span>\u989C\u8272&#39;<span class="token punctuation">,</span>
   search_type          <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> comment &#39;\u68C0\u7D22\u7C7B\u578B\uFF1B<span class="token number">0</span><span class="token operator">-&gt;</span>\u4E0D\u9700\u8981\u8FDB\u884C\u68C0\u7D22\uFF1B<span class="token number">1</span><span class="token operator">-&gt;</span>\u5173\u952E\u5B57\u68C0\u7D22\uFF1B<span class="token number">2</span><span class="token operator">-&gt;</span>\u8303\u56F4\u68C0\u7D22&#39;<span class="token punctuation">,</span>
   related_status       <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> comment &#39;\u76F8\u540C\u5C5E\u6027\u4EA7\u54C1\u662F\u5426\u5173\u8054\uFF1B<span class="token number">0</span><span class="token operator">-&gt;</span>\u4E0D\u5173\u8054\uFF1B<span class="token number">1</span><span class="token operator">-&gt;</span>\u5173\u8054&#39;<span class="token punctuation">,</span>
   hand_add_status      <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> comment &#39;\u662F\u5426\u652F\u6301\u624B\u52A8\u65B0\u589E\uFF1B<span class="token number">0</span><span class="token operator">-&gt;</span>\u4E0D\u652F\u6301\uFF1B<span class="token number">1</span><span class="token operator">-&gt;</span>\u652F\u6301&#39;<span class="token punctuation">,</span>
   type                 <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> comment &#39;\u5C5E\u6027\u7684\u7C7B\u578B\uFF1B<span class="token number">0</span><span class="token operator">-&gt;</span>\u89C4\u683C\uFF1B<span class="token number">1</span><span class="token operator">-&gt;</span>\u53C2\u6570&#39;<span class="token punctuation">,</span>
   primary key <span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-\u5546\u54C1\u5C5E\u6027\u503C\u8868" tabindex="-1"><a class="header-anchor" href="#_2-3-\u5546\u54C1\u5C5E\u6027\u503C\u8868" aria-hidden="true">#</a> 2.3 \u5546\u54C1\u5C5E\u6027\u503C\u8868</h3><p>\u5982\u679C\u5BF9\u5E94\u7684\u53C2\u6570\u662F\u89C4\u683C\u4E14\u89C4\u683C\u652F\u6301\u624B\u52A8\u6DFB\u52A0\uFF0C\u90A3\u4E48\u8BE5\u8868\u7528\u4E8E\u5B58\u50A8\u624B\u52A8\u65B0\u589E\u7684\u503C\uFF1B\u5982\u679C\u5BF9\u5E94\u7684\u5546\u54C1\u5C5E\u6027\u662F\u53C2\u6570\uFF0C\u90A3\u4E48\u8BE5\u8868\u7528\u4E8E\u5B58\u50A8\u53C2\u6570\u7684\u503C\u3002</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> pms_product_attribute_value
<span class="token punctuation">(</span>
   id                   <span class="token keyword">bigint</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">auto_increment</span><span class="token punctuation">,</span>
   product_id           <span class="token keyword">bigint</span> <span class="token keyword">comment</span> <span class="token string">&#39;\u5546\u54C1id&#39;</span><span class="token punctuation">,</span>
   product_attribute_id <span class="token keyword">bigint</span> <span class="token keyword">comment</span> <span class="token string">&#39;\u5546\u54C1\u5C5E\u6027id&#39;</span><span class="token punctuation">,</span>
   <span class="token keyword">value</span>                <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span> <span class="token keyword">comment</span> <span class="token string">&#39;\u624B\u52A8\u6DFB\u52A0\u89C4\u683C\u6216\u53C2\u6570\u7684\u503C\uFF0C\u53C2\u6570\u5355\u503C\uFF0C\u89C4\u683C\u6709\u591A\u4E2A\u65F6\u4EE5\u9017\u53F7\u9694\u5F00&#39;</span><span class="token punctuation">,</span>
   <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-\u5546\u54C1\u5206\u7C7B\u548C\u5C5E\u6027\u7684\u5173\u7CFB\u8868" tabindex="-1"><a class="header-anchor" href="#_2-4-\u5546\u54C1\u5206\u7C7B\u548C\u5C5E\u6027\u7684\u5173\u7CFB\u8868" aria-hidden="true">#</a> 2.4 \u5546\u54C1\u5206\u7C7B\u548C\u5C5E\u6027\u7684\u5173\u7CFB\u8868</h3><p>\u7528\u4E8E\u9009\u4E2D\u5206\u7C7B\u540E\u641C\u7D22\u65F6\u751F\u6210\u7B5B\u9009\u5C5E\u6027\u3002</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> pms_product_category_attribute_relation
<span class="token punctuation">(</span>
   id                   <span class="token keyword">bigint</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">auto_increment</span><span class="token punctuation">,</span>
   product_category_id  <span class="token keyword">bigint</span> <span class="token keyword">comment</span> <span class="token string">&#39;\u5546\u54C1\u5206\u7C7Bid&#39;</span><span class="token punctuation">,</span>
   product_attribute_id <span class="token keyword">bigint</span> <span class="token keyword">comment</span> <span class="token string">&#39;\u5546\u54C1\u5C5E\u6027id&#39;</span><span class="token punctuation">,</span>
   <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u4EE3\u7801\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#_3-\u4EE3\u7801\u8BBE\u8BA1" aria-hidden="true">#</a> 3. \u4EE3\u7801\u8BBE\u8BA1</h2><h3 id="_3-1-\u65B0\u589E\u5546\u54C1\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_3-1-\u65B0\u589E\u5546\u54C1\u5C5E\u6027" aria-hidden="true">#</a> 3.1 \u65B0\u589E\u5546\u54C1\u5C5E\u6027</h3><p>\u65B0\u589E\u5546\u54C1\u5C5E\u6027\u4EE5\u540E\u9700\u8981\u66F4\u65B0\u5546\u54C1\u5C5E\u6027\u5206\u7C7B\u6570\u91CF</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">PmsProductAttributeParam</span> pmsProductAttributeParam<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">PmsProductAttribute</span> pmsProductAttribute <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PmsProductAttribute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BeanUtils</span><span class="token punctuation">.</span><span class="token function">copyProperties</span><span class="token punctuation">(</span>pmsProductAttributeParam<span class="token punctuation">,</span> pmsProductAttribute<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> productAttributeMapper<span class="token punctuation">.</span><span class="token function">insertSelective</span><span class="token punctuation">(</span>pmsProductAttribute<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u65B0\u589E\u5546\u54C1\u5C5E\u6027\u4EE5\u540E\u9700\u8981\u66F4\u65B0\u5546\u54C1\u5C5E\u6027\u5206\u7C7B\u6570\u91CF</span>
        <span class="token class-name">PmsProductAttributeCategory</span> pmsProductAttributeCategory <span class="token operator">=</span> productAttributeCategoryMapper<span class="token punctuation">.</span><span class="token function">selectByPrimaryKey</span><span class="token punctuation">(</span>pmsProductAttribute<span class="token punctuation">.</span><span class="token function">getProductAttributeCategoryId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>pmsProductAttribute<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            pmsProductAttributeCategory<span class="token punctuation">.</span><span class="token function">setAttributeCount</span><span class="token punctuation">(</span>pmsProductAttributeCategory<span class="token punctuation">.</span><span class="token function">getAttributeCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>pmsProductAttribute<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            pmsProductAttributeCategory<span class="token punctuation">.</span><span class="token function">setParamCount</span><span class="token punctuation">(</span>pmsProductAttributeCategory<span class="token punctuation">.</span><span class="token function">getParamCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        productAttributeCategoryMapper<span class="token punctuation">.</span><span class="token function">updateByPrimaryKey</span><span class="token punctuation">(</span>pmsProductAttributeCategory<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u754C\u9762\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#_4-\u754C\u9762\u8BBE\u8BA1" aria-hidden="true">#</a> 4. \u754C\u9762\u8BBE\u8BA1</h2><h3 id="_4-1-\u7BA1\u7406\u7AEF" tabindex="-1"><a class="header-anchor" href="#_4-1-\u7BA1\u7406\u7AEF" aria-hidden="true">#</a> 4.1 \u7BA1\u7406\u7AEF</h3><h4 id="_4-1-1-\u5546\u54C1\u5C5E\u6027\u5206\u7C7B\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#_4-1-1-\u5546\u54C1\u5C5E\u6027\u5206\u7C7B\u5217\u8868" aria-hidden="true">#</a> 4.1.1 \u5546\u54C1\u5C5E\u6027\u5206\u7C7B\u5217\u8868</h4><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20220320085212569.png" alt="image-20220320085212569" loading="lazy"></p><h4 id="_4-1-2-\u5546\u54C1\u89C4\u683C\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#_4-1-2-\u5546\u54C1\u89C4\u683C\u5217\u8868" aria-hidden="true">#</a> 4.1.2 \u5546\u54C1\u89C4\u683C\u5217\u8868</h4><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20220320085314213.png" alt="image-20220320085314213" loading="lazy"></p><h4 id="_4-1-3-\u5546\u54C1\u53C2\u6570\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#_4-1-3-\u5546\u54C1\u53C2\u6570\u5217\u8868" aria-hidden="true">#</a> 4.1.3 \u5546\u54C1\u53C2\u6570\u5217\u8868</h4><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20220320085349425.png" alt="image-20220320085349425" loading="lazy"></p><h4 id="_4-1-4-\u6DFB\u52A0\u5546\u54C1\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_4-1-4-\u6DFB\u52A0\u5546\u54C1\u5C5E\u6027" aria-hidden="true">#</a> 4.1.4 \u6DFB\u52A0\u5546\u54C1\u5C5E\u6027</h4><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20220320085501748.png" alt="image-20220320085501748" loading="lazy"></p><h4 id="_4-1-5\u6DFB\u52A0\u5546\u54C1\u65F6-\u9009\u4E2D\u5546\u54C1\u5C5E\u6027\u5206\u7C7B-\u5C31\u4F1A\u663E\u793A\u8BE5\u5206\u7C7B\u7684\u5C5E\u6027-\u7528\u4E8E\u751F\u6210sku" tabindex="-1"><a class="header-anchor" href="#_4-1-5\u6DFB\u52A0\u5546\u54C1\u65F6-\u9009\u4E2D\u5546\u54C1\u5C5E\u6027\u5206\u7C7B-\u5C31\u4F1A\u663E\u793A\u8BE5\u5206\u7C7B\u7684\u5C5E\u6027-\u7528\u4E8E\u751F\u6210sku" aria-hidden="true">#</a> 4.1.5\u6DFB\u52A0\u5546\u54C1\u65F6\uFF0C\u9009\u4E2D\u5546\u54C1\u5C5E\u6027\u5206\u7C7B\uFF0C\u5C31\u4F1A\u663E\u793A\u8BE5\u5206\u7C7B\u7684\u5C5E\u6027\uFF0C\u7528\u4E8E\u751F\u6210sku</h4><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20220320085541469.png" alt="image-20220320085541469" loading="lazy"></p><h4 id="_4-1-6-\u6DFB\u52A0\u5546\u54C1\u65F6-\u9009\u4E2D\u5546\u54C1\u5C5E\u6027\u5206\u7C7B-\u4F1A\u663E\u793A\u8BE5\u5206\u7C7B\u7684\u53C2\u6570\u7528\u4E8E\u5F55\u5165" tabindex="-1"><a class="header-anchor" href="#_4-1-6-\u6DFB\u52A0\u5546\u54C1\u65F6-\u9009\u4E2D\u5546\u54C1\u5C5E\u6027\u5206\u7C7B-\u4F1A\u663E\u793A\u8BE5\u5206\u7C7B\u7684\u53C2\u6570\u7528\u4E8E\u5F55\u5165" aria-hidden="true">#</a> 4.1.6 \u6DFB\u52A0\u5546\u54C1\u65F6\uFF0C\u9009\u4E2D\u5546\u54C1\u5C5E\u6027\u5206\u7C7B\uFF0C\u4F1A\u663E\u793A\u8BE5\u5206\u7C7B\u7684\u53C2\u6570\u7528\u4E8E\u5F55\u5165</h4><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20220320085637294.png" alt="image-20220320085637294" loading="lazy"></p><h3 id="_4-2-\u79FB\u52A8\u7AEF" tabindex="-1"><a class="header-anchor" href="#_4-2-\u79FB\u52A8\u7AEF" aria-hidden="true">#</a> 4.2 \u79FB\u52A8\u7AEF</h3><h4 id="_4-2-1-\u9009\u62E9\u5546\u54C1\u89C4\u683C" tabindex="-1"><a class="header-anchor" href="#_4-2-1-\u9009\u62E9\u5546\u54C1\u89C4\u683C" aria-hidden="true">#</a> 4.2.1 \u9009\u62E9\u5546\u54C1\u89C4\u683C</h4><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20220320085754333.png" alt="image-20220320085754333" loading="lazy"></p><h4 id="_4-2-2-\u67E5\u770B\u5546\u54C1\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_4-2-2-\u67E5\u770B\u5546\u54C1\u53C2\u6570" aria-hidden="true">#</a> 4.2.2 \u67E5\u770B\u5546\u54C1\u53C2\u6570</h4><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20220320085836611.png" alt="image-20220320085836611" loading="lazy"></p><h4 id="_4-2-3-\u641C\u7D22\u5546\u54C1\u65F6\u7528\u4E8E\u9009\u62E9\u5206\u7C7B\u540E\u7684\u7B5B\u9009" tabindex="-1"><a class="header-anchor" href="#_4-2-3-\u641C\u7D22\u5546\u54C1\u65F6\u7528\u4E8E\u9009\u62E9\u5206\u7C7B\u540E\u7684\u7B5B\u9009" aria-hidden="true">#</a> 4.2.3 \u641C\u7D22\u5546\u54C1\u65F6\u7528\u4E8E\u9009\u62E9\u5206\u7C7B\u540E\u7684\u7B5B\u9009</h4><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20220320085906873.png" alt="image-20220320085906873" loading="lazy"></p>`,43),o=[p];function c(i,l){return a(),s("div",null,o)}const d=n(e,[["render",c],["__file","mall-product-attribute.html.vue"]]);export{d as default};
