import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as e,a as n,b as p,e as o,d as l,r as c}from"./app.dfe6b5b1.js";const i={},r=o(`<h1 id="element\u6587\u4EF6\u4E0A\u4F20-upload" tabindex="-1"><a class="header-anchor" href="#element\u6587\u4EF6\u4E0A\u4F20-upload" aria-hidden="true">#</a> Element\u6587\u4EF6\u4E0A\u4F20-Upload</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>element \u7684\u5B98\u7F51\u5DF2\u7ECF\u633A\u8BE6\u5C3D\u4E86\uFF0C\u8FD9\u91CC\u4E3B\u8981\u662F\u9488\u5BF9\u81EA\u5DF1\u7684\u7591\u60D1\u70B9\uFF0C\u8FDB\u884C\u63CF\u8FF0\u8865\u5145\u3002</p><h2 id="_2-\u57FA\u7840\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-\u57FA\u7840\u4F7F\u7528" aria-hidden="true">#</a> 2. \u57FA\u7840\u4F7F\u7528</h2><h3 id="_2-1-\u70B9\u51FB\u4E0A\u4F20" tabindex="-1"><a class="header-anchor" href="#_2-1-\u70B9\u51FB\u4E0A\u4F20" aria-hidden="true">#</a> 2.1 \u70B9\u51FB\u4E0A\u4F20</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210607093813556.png" alt="image-20210607093813556" loading="lazy"></p><blockquote><p>\u901A\u8FC7 slot \u4F60\u53EF\u4EE5\u4F20\u5165\u81EA\u5B9A\u4E49\u7684\u4E0A\u4F20\u6309\u94AE\u7C7B\u578B\u548C\u6587\u5B57\u63D0\u793A\u3002\u53EF\u901A\u8FC7\u8BBE\u7F6E<code>limit</code>\u548C<code>on-exceed</code>\u6765\u9650\u5236\u4E0A\u4F20\u6587\u4EF6\u7684\u4E2A\u6570\u548C\u5B9A\u4E49\u8D85\u51FA\u9650\u5236\u65F6\u7684\u884C\u4E3A\u3002\u53EF\u901A\u8FC7\u8BBE\u7F6E<code>before-remove</code>\u6765\u963B\u6B62\u6587\u4EF6\u79FB\u9664\u64CD\u4F5C\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>el<span class="token operator">-</span>upload
  <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;upload-demo&quot;</span>
  action<span class="token operator">=</span><span class="token string">&quot;https://jsonplaceholder.typicode.com/posts/&quot;</span>
  <span class="token operator">:</span>on<span class="token operator">-</span>preview<span class="token operator">=</span><span class="token string">&quot;handlePreview&quot;</span>
  <span class="token operator">:</span>on<span class="token operator">-</span>remove<span class="token operator">=</span><span class="token string">&quot;handleRemove&quot;</span>
  <span class="token operator">:</span>before<span class="token operator">-</span>remove<span class="token operator">=</span><span class="token string">&quot;beforeRemove&quot;</span>
  <span class="token literal-property property">multiple</span>
  <span class="token operator">:</span>limit<span class="token operator">=</span><span class="token string">&quot;3&quot;</span>
  <span class="token operator">:</span>on<span class="token operator">-</span>exceed<span class="token operator">=</span><span class="token string">&quot;handleExceed&quot;</span>
  <span class="token operator">:</span>file<span class="token operator">-</span>list<span class="token operator">=</span><span class="token string">&quot;fileList&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>el<span class="token operator">-</span>button size<span class="token operator">=</span><span class="token string">&quot;small&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span><span class="token operator">&gt;</span>\u70B9\u51FB\u4E0A\u4F20<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div slot<span class="token operator">=</span><span class="token string">&quot;tip&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;el-upload__tip&quot;</span><span class="token operator">&gt;</span>\u53EA\u80FD\u4E0A\u4F20jpg<span class="token operator">/</span>png\u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7500kb<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>upload<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">fileList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;food.jpeg&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;food2.jpeg&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100&#39;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">handleRemove</span><span class="token punctuation">(</span><span class="token parameter">file<span class="token punctuation">,</span> fileList</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> fileList<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">handlePreview</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">handleExceed</span><span class="token punctuation">(</span><span class="token parameter">files<span class="token punctuation">,</span> fileList</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u5F53\u524D\u9650\u5236\u9009\u62E9 3 \u4E2A\u6587\u4EF6\uFF0C\u672C\u6B21\u9009\u62E9\u4E86 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>files<span class="token punctuation">.</span>length<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> \u4E2A\u6587\u4EF6\uFF0C\u5171\u9009\u62E9\u4E86 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>files<span class="token punctuation">.</span>length <span class="token operator">+</span> fileList<span class="token punctuation">.</span>length<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> \u4E2A\u6587\u4EF6</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">beforeRemove</span><span class="token punctuation">(</span><span class="token parameter">file<span class="token punctuation">,</span> fileList</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$confirm</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u786E\u5B9A\u79FB\u9664 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> file<span class="token punctuation">.</span>name <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\uFF1F</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u5E38\u89C1\u95EE\u9898\u4E0E\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_3-\u5E38\u89C1\u95EE\u9898\u4E0E\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> 3. \u5E38\u89C1\u95EE\u9898\u4E0E\u89E3\u51B3\u65B9\u6848</h2><h3 id="_3-1-\u4E0A\u4F20\u670D\u52A1\u7684oauth\u8BA4\u8BC1" tabindex="-1"><a class="header-anchor" href="#_3-1-\u4E0A\u4F20\u670D\u52A1\u7684oauth\u8BA4\u8BC1" aria-hidden="true">#</a> 3.1 \u4E0A\u4F20\u670D\u52A1\u7684Oauth\u8BA4\u8BC1</h3><p>\u9879\u76EE\u5982\u679C\u662F\u91C7\u7528OAuth \u7684token \u8BA4\u8BC1\u5F62\u5F0F</p><p>el-upload \u4E2D\u6DFB\u52A0\u8BF7\u6C42\u5934</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;el-upload
   ...
   :headers=&quot;headers&quot;
   /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>js\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> getToken <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/utils/auth&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
 			<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                 <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        					<span class="token literal-property property">Authorization</span><span class="token operator">:</span> <span class="token string">&quot;Bearer &quot;</span> <span class="token operator">+</span> <span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      		<span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-\u4E0A\u4F20\u6587\u4EF6\u989D\u5916\u6307\u5B9A\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_3-2-\u4E0A\u4F20\u6587\u4EF6\u989D\u5916\u6307\u5B9A\u53C2\u6570" aria-hidden="true">#</a> 3.2 \u4E0A\u4F20\u6587\u4EF6\u989D\u5916\u6307\u5B9A\u53C2\u6570</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-upload</span>
   <span class="token attr-name">...</span>
   <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span>
   <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#_3-\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> 3. \u53C2\u8003\u6587\u7AE0</h2>`,18),u={href:"https://element.eleme.cn/#/zh-CN/component/upload",target:"_blank",rel:"noopener noreferrer"},d=l("element-Upload \u4E0A\u4F20");function k(v,m){const s=c("ExternalLinkIcon");return t(),e("div",null,[r,n("p",null,[n("a",u,[d,p(s)])])])}var h=a(i,[["render",k],["__file","element-upload.html.vue"]]);export{h as default};
