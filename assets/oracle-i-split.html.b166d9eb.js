import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as s,d as e}from"./app.b7aa68e0.js";const t={},o=e(`<h1 id="oracle\u53D6\u51FA-\u53F7\u5206\u5272\u7684id\u5BF9\u5E94\u4E2D\u6587\u540D" tabindex="-1"><a class="header-anchor" href="#oracle\u53D6\u51FA-\u53F7\u5206\u5272\u7684id\u5BF9\u5E94\u4E2D\u6587\u540D" aria-hidden="true">#</a> oracle\u53D6\u51FA\uFF0C\u53F7\u5206\u5272\u7684id\u5BF9\u5E94\u4E2D\u6587\u540D</h1><h2 id="_1-\u9700\u6C42" tabindex="-1"><a class="header-anchor" href="#_1-\u9700\u6C42" aria-hidden="true">#</a> 1. \u9700\u6C42</h2><p>\u6211\u4EEC\u90E8\u95E8\u8868\u4E2D\u5B58\u7740\u7956\u7C4D\u5217\u8868\uFF0C\u6211\u4EEC\u5E0C\u671B\u80FD\u76F4\u63A5\u67E5\u51FA\u6240\u6709\u7956\u7C4D\u90E8\u95E8\u7684\u4E2D\u6587\u540D</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20220302144445229.png" alt="image-20220302144445229" loading="lazy"></p><p>\u5982\uFF1A\u8FD9\u51E0\u4E2A\u90E8\u95E8\u7684\u7956\u7C4D\u90FD\u662F\u4EC0\u4E48</p><h2 id="_2-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_2-\u5B9E\u73B0" aria-hidden="true">#</a> 2.\u5B9E\u73B0</h2><h3 id="_2-1-\u8FBE\u68A6\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#_2-1-\u8FBE\u68A6\u6570\u636E\u5E93" aria-hidden="true">#</a> 2.1 \u8FBE\u68A6\u6570\u636E\u5E93</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> D<span class="token punctuation">.</span>DEPT_ID<span class="token punctuation">,</span>D<span class="token punctuation">.</span>PARENT_ID<span class="token punctuation">,</span>D<span class="token punctuation">.</span>ANCESTORS<span class="token punctuation">,</span>D<span class="token punctuation">.</span>DEPT_NAME<span class="token punctuation">,</span>
       <span class="token punctuation">(</span><span class="token keyword">SELECT</span> WM_CONCAT<span class="token punctuation">(</span>T<span class="token punctuation">.</span>DEPT_NAME<span class="token punctuation">)</span>
        <span class="token keyword">FROM</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> DEPT_NAME
              <span class="token keyword">FROM</span> SYS_DEPT S <span class="token keyword">START</span>
              <span class="token keyword">WITH</span> S<span class="token punctuation">.</span>DEPT_ID<span class="token operator">=</span>D<span class="token punctuation">.</span>DEPT_ID
              <span class="token keyword">CONNECT</span> <span class="token keyword">BY</span> NOCYCLE PRIOR S<span class="token punctuation">.</span>PARENT_ID <span class="token operator">=</span> S<span class="token punctuation">.</span>DEPT_ID<span class="token punctuation">)</span> T<span class="token punctuation">)</span> DEPT_URL
<span class="token keyword">from</span> SYS_DEPT <span class="token keyword">AS</span> D<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),p=[o];function c(i,l){return a(),s("div",null,p)}const u=n(t,[["render",c],["__file","oracle-i-split.html.vue"]]);export{u as default};
