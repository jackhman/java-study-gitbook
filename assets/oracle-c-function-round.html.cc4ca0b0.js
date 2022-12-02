import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as p}from"./app.7a1da930.js";const t={},o=p(`<h1 id="oracle\u4E2D\u56DB\u820D\u4E94\u5165round\u51FD\u6570\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#oracle\u4E2D\u56DB\u820D\u4E94\u5165round\u51FD\u6570\u7684\u4F7F\u7528" aria-hidden="true">#</a> Oracle\u4E2D\u56DB\u820D\u4E94\u5165Round\u51FD\u6570\u7684\u4F7F\u7528</h1><h1 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h1><p>Round \u51FD\u6570</p><p>\u200B \u8BED\u6CD5\uFF1AROUND(number\uFF0Cnum_digits)</p><p>\u5176\u4E2DNumber \u662F\u9700\u8981\u8FDB\u884C\u56DB\u820D\u4E94\u5165\u7684\u6570\u5B57\uFF0CNum_digits\u4E3A\u6307\u5B9A\u7684\u4F4D\u7F6E\uFF0C\u6309\u6B64\u4F4D\u6570\u8FDB\u884C\u56DB\u820D\u4E94\u5165\u3002</p><ul><li>\u5982\u4F55num_digits \u5927\u4E8E0\uFF0C\u5219\u56DB\u820D\u4E94\u5165\u5230\u6307\u5B9A\u7684\u5C0F\u6570\u4F4D</li><li>\u5982\u679Cnum_digits\u7B49\u4E8E0\uFF0C\u5219\u56DB\u820D\u4E94\u5165\u5230\u6700\u63A5\u8FD1\u7684\u6574\u6570</li><li>\u5982\u679Cnum_digits\u5C0F\u4E8E0\uFF0C\u5219\u5728\u5C0F\u6570\u70B9\u5DE6\u4FA7\u8FDB\u884C\u56DB\u820D\u4E94\u5165</li></ul><h2 id="_2-\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-\u6848\u4F8B" aria-hidden="true">#</a> 2. \u6848\u4F8B</h2><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">sum</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>long_time<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">3</span>
<span class="token punctuation">,</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token function">sum</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>long_time<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span> r0 
<span class="token punctuation">,</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token function">sum</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>long_time<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> r1 
<span class="token punctuation">,</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token function">sum</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>long_time<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> r2 
<span class="token punctuation">,</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token function">sum</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>long_time<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span> r3 
<span class="token punctuation">,</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token function">sum</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>long_time<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span> r4 
<span class="token punctuation">,</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token function">sum</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>long_time<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span> r5 
<span class="token punctuation">,</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token function">sum</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>long_time<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> r_1 
<span class="token punctuation">,</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token function">sum</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>long_time<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span> r_2 
<span class="token punctuation">,</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token function">sum</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>long_time<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span> r_3 
<span class="token punctuation">,</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token function">sum</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>long_time<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">)</span> r_4 
<span class="token punctuation">,</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token function">sum</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>long_time<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span> r_5 
 <span class="token keyword">from</span>  hd_agent_voice_seq a 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C</p><p>SUM(A.LONG_TIME)/3 R0 R1 R2 R3 R4 R5 R_1 R_2 R_3 R_4 R_5 4001.33333333333 4001 4001.3 4001.33 4001.333 4001.3333 4001.33333 4000 4000 4000 0 0</p>`,10),c=[o];function e(u,l){return s(),a("div",null,c)}const r=n(t,[["render",e],["__file","oracle-c-function-round.html.vue"]]);export{r as default};
