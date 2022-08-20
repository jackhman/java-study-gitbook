import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.a829be87.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="mysql\u6309\u65E5\u3001\u5468\u3001\u6708\u8FDB\u884C\u5206\u7EC4\u7EDF\u8BA1" tabindex="-1"><a class="header-anchor" href="#mysql\u6309\u65E5\u3001\u5468\u3001\u6708\u8FDB\u884C\u5206\u7EC4\u7EDF\u8BA1" aria-hidden="true">#</a> Mysql\u6309\u65E5\u3001\u5468\u3001\u6708\u8FDB\u884C\u5206\u7EC4\u7EDF\u8BA1</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u6211\u4EEC\u5728\u7528Mysql\u62BD\u53D6\u6570\u636E\u65F6\u5019\uFF0C\u7ECF\u5E38\u9700\u8981\u6309\u7167\u5929\u3001\u5468\u3001\u6708\u7B49\u4E0D\u540C\u7684\u7C92\u5EA6\u5BF9\u6570\u636E\u8FDB\u884C\u5206\u7EC4\u7EDF\u8BA1\u3002\u800C\u6211\u4EEC\u7684\u65F6\u95F4\u53EF\u80FD\u662F\u201C2017/12/5 0:0:0\u201D\u8FD9\u79CD\u51C6\u786E\u7684\u65F6\u95F4\u3002\u6240\u4EE5\u5728\u8FDB\u884C\u5206\u7EC4\u4E4B\u524D\u6211\u4EEC\u9700\u8981\u5BF9\u65F6\u95F4\u8FDB\u884C\u4E00\u4E0B\u5904\u7406\u3002</p><h2 id="_2-date-format" tabindex="-1"><a class="header-anchor" href="#_2-date-format" aria-hidden="true">#</a> 2. DATE_FORMAT</h2><p><strong>DATE_FORMAT</strong>\u662FMySQL\u5185\u7F6E\u7684\u4E00\u4E2A\u51FD\u6570\uFF0C\u4F5C\u7528\u662F\u4EE5\u4E0D\u540C\u7684\u683C\u5F0F\u663E\u793A\u65E5\u671F/\u65F6\u95F4\u6570\u636E\u3002\u5177\u4F53\u7684\u8BED\u6CD5\u5982\u4E0B\uFF1A</p><p>DATE_FORMAT(date,format)\uFF0C\u5176\u4E2D</p><p>date\uFF1A\u5408\u6CD5\u7684\u65E5\u671F\u3002format\uFF1A\u89C4\u5B9A\u65E5\u671F/\u65F6\u95F4\u7684\u8F93\u51FA\u683C\u5F0F\uFF0C\u5176\u4E2Dformat\u53EF\u4F7F\u7528\u7684\u683C\u5F0F\u89C1\u6587\u672B\u94FE\u63A5\u3002</p><h3 id="_2-1-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-1-\u793A\u4F8B" aria-hidden="true">#</a> 2.1 \u793A\u4F8B</h3><p>\u4E0B\u9762\u6211\u4EEC\u901A\u8FC7\u5177\u4F53\u4F8B\u5B50\u6765\u770B\u5982\u4F55\u901A\u8FC7DATE_FORMAT\u8FDB\u884C\u5206\u7EC4\u7EDF\u8BA1\uFF1A</p><p>\u4E0B\u8868\u4E24\u5217\u5206\u522B\u4EE3\u8868\u4EA7\u54C1\u4E70\u51FA\u7684\u51C6\u786E\u65F6\u95F4\uFF08\u7CBE\u786E\u5230\u79D2\uFF09\uFF0C\u548C\u4E70\u51FA\u7684\u4EA7\u54C1\u7C7B\u578B\u3002</p><table><thead><tr><th>start_time</th><th>product_no</th></tr></thead><tbody><tr><td>2017/12/1 00:00:11</td><td>2A</td></tr><tr><td>2017/12/3 07:51:11</td><td>3C</td></tr><tr><td>2017/12/3 07:59:25</td><td>3C</td></tr><tr><td>2017/12/5 15:40:45</td><td>6C</td></tr></tbody></table><p>\u73B0\u5728\u6211\u4EEC\u9700\u8981\u5BF9\u6BCF\u5929\uFF0C\u6BCF\u5468\uFF0C\u6BCF\u6708\u5404\u4E2A\u4EA7\u54C1\u7684\u9500\u91CF\u8FDB\u884C\u7EDF\u8BA1\uFF0C</p><p>1\uFF09\u6309\u5929\u7EDF\u8BA1\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> DATE_FORMAT<span class="token punctuation">(</span>start_time<span class="token punctuation">,</span><span class="token string">&#39;**%Y%m%d**&#39;</span><span class="token punctuation">)</span> days<span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span>product_no<span class="token punctuation">)</span> count <span class="token keyword">from</span> test <span class="token keyword">group</span> <span class="token keyword">by</span> days<span class="token punctuation">;</span> \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2\uFF09\u6309\u5468\u7EDF\u8BA1\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> DATE_FORMAT<span class="token punctuation">(</span>start_time<span class="token punctuation">,</span><span class="token string">&#39;**%Y%u**&#39;</span><span class="token punctuation">)</span> weeks<span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span>product_no<span class="token punctuation">)</span> count <span class="token keyword">from</span> test <span class="token keyword">group</span> <span class="token keyword">by</span> weeks<span class="token punctuation">;</span> \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3\uFF09\u6309\u6708\u7EDF\u8BA1:</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> DATE_FORMAT<span class="token punctuation">(</span>start_time<span class="token punctuation">,</span><span class="token string">&#39;**%Y%m**&#39;</span><span class="token punctuation">)</span> months<span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span>product_no<span class="token punctuation">)</span> count <span class="token keyword">from</span> test <span class="token keyword">group</span> bymonths<span class="token punctuation">;</span> \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-2-\u9762\u4E34\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_2-2-\u9762\u4E34\u95EE\u9898" aria-hidden="true">#</a> 2.2 \u9762\u4E34\u95EE\u9898</h3><p>\u5982\u679C\u6709\u4E00\u5929\u6CA1\u6709\u6570\u636E\uFF0C\u5219\u6539\u76F4\u63A5\u76F4\u63A5\u4E3A\u7A7A\u767D</p><blockquote><p>\u9700\u6C42\u6CE8\uFF1A\u6309\u7167\u65F6\u95F4\u6BB5\u6765\u67E5\u8BE2\u663E\u793A\u8BE5\u65F6\u95F4\u6BB5\u5185\u6BCF\u4E00\u5929\u7684\u6570\u636E\u91CF\uFF0C\u5982\u679C\u67D0\u4E00\u5929\u6CA1\u6709\u6570\u636E\uFF0C\u663E\u793A\u6570\u636E\u91CF\u4E3A0.</p></blockquote><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210126170727871.png" alt="image-20210126170727871"></p><h2 id="_3-\u4F18\u5316\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_3-\u4F18\u5316\u65B9\u6848" aria-hidden="true">#</a> 3. \u4F18\u5316\u65B9\u6848</h2><p>\u67E5\u8BE2\u65E5\u671F\u8868\uFF0C\u5916\u8FDE\u63A5\u6570\u636E\u8868\u6765\u663E\u793A \u7F51\u7EDC\u4E0A\u67E5\u8BE2\u5230\u751F\u6210\u65E5\u671F\u8868\u7684\u65B9\u6CD5\u6709\u51E0\u79CD</p><ol><li>\u9700\u8981\u53E6\u5EFA\u4E00\u5F20\u65E5\u671F\u8868\uFF0C\u76F4\u63A5\u4ECE\u6B64\u8868\u67E5\u8BE2\uFF08\u6BD4\u8F83\u9EBB\u70E6\uFF09</li><li>\u4F7F\u7528\u7B1B\u5361\u5C14\u79EF\u751F\u6210\u65F6\u95F4\uFF08\u63A8\u8350\uFF09</li></ol><h3 id="_3-1-\u751F\u6210\u8FDE\u7EED\u65E5\u671F\u8868" tabindex="-1"><a class="header-anchor" href="#_3-1-\u751F\u6210\u8FDE\u7EED\u65E5\u671F\u8868" aria-hidden="true">#</a> 3.1 \u751F\u6210\u8FDE\u7EED\u65E5\u671F\u8868</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> date_add<span class="token punctuation">(</span><span class="token string">&#39;2020-04-01&#39;</span><span class="token punctuation">,</span><span class="token keyword">interval</span> <span class="token variable">@i</span>:<span class="token operator">=</span><span class="token variable">@i</span><span class="token operator">+</span><span class="token number">1</span> <span class="token keyword">day</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token keyword">date</span> \n<span class="token keyword">from</span> <span class="token punctuation">(</span>\n<span class="token keyword">select</span> <span class="token number">1</span> \n<span class="token keyword">union</span> <span class="token keyword">all</span> <span class="token keyword">select</span> <span class="token number">1</span> \n<span class="token keyword">union</span> <span class="token keyword">all</span> <span class="token keyword">select</span> <span class="token number">1</span>\n<span class="token keyword">union</span> <span class="token keyword">all</span> <span class="token keyword">select</span> <span class="token number">1</span> \n<span class="token keyword">union</span> <span class="token keyword">all</span> <span class="token keyword">select</span> <span class="token number">1</span> \n<span class="token keyword">union</span> <span class="token keyword">all</span> <span class="token keyword">select</span> <span class="token number">1</span> \n<span class="token keyword">union</span> <span class="token keyword">all</span> <span class="token keyword">select</span> <span class="token number">1</span> \n<span class="token keyword">union</span> <span class="token keyword">all</span> <span class="token keyword">select</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">as</span> tmp<span class="token punctuation">,</span>\n <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token variable">@i</span>:<span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> t\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C\u5982\u4E0B</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210126171101910.png" alt="image-20210126171101910"></p><h3 id="_3-2-\u5173\u8054\u67E5\u8BE2\u663E\u793A" tabindex="-1"><a class="header-anchor" href="#_3-2-\u5173\u8054\u67E5\u8BE2\u663E\u793A" aria-hidden="true">#</a> 3.2 \u5173\u8054\u67E5\u8BE2\u663E\u793A</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>select count(u.id) as count,s.date from \n(select date_add(&#39;2020-04-01&#39;,interval @i:=@i+1 day) as date \nfrom (\nselect 1 \nunion all select 1 \nunion all select 1\nunion all select 1 \nunion all select 1 \nunion all select 1 \nunion all select 1 \nunion all select 1) as tmp,\n (select @i:= -1) t\n) s left join user u on s.date = date_format(u.createtime,&#39;%Y-%m-%d&#39;)\nGROUP BY s.date\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-\u5982\u4F55\u63A7\u5236\u751F\u6210\u591A\u5C11\u4E2A\u65E5\u671F" tabindex="-1"><a class="header-anchor" href="#_3-3-\u5982\u4F55\u63A7\u5236\u751F\u6210\u591A\u5C11\u4E2A\u65E5\u671F" aria-hidden="true">#</a> 3.3 \u5982\u4F55\u63A7\u5236\u751F\u6210\u591A\u5C11\u4E2A\u65E5\u671F</h3><p>\u73B0\u5728\u8FD8\u6709\u4E00\u4E2A\u95EE\u9898\uFF0C\u5982\u4F55\u63A7\u5236\u751F\u6210\u591A\u5C11\u4E2A\u65E5\u671F\uFF0C\u4E5F\u5C31\u662F<strong>union all select 1</strong> \u7684\u4E2A\u6570\uFF0C</p><ol><li>\u4F7F\u7528\u5B58\u50A8\u8FC7\u7A0B\uFF08\u8026\u5408\u6027\u8FC7\u9AD8\uFF0C\u4E0D\u6613\u7EF4\u62A4\uFF0C\u6682\u4E0D\u8003\u8651\uFF09</li><li>mybatis \u5FAA\u73AF\u62FC\u63A5\uFF08\u221A\uFF09</li></ol><p>\u9009\u62E9\u4E86java\u4EE3\u7801\u8BA1\u7B97\u65E5\u671F\u5DEE\uFF0C\u4F7F\u7528mybatis\u7684 <strong>foreach</strong> \u6807\u7B7E\u5B9E\u73B0sql\u62FC\u63A5\uFF0C\u5168\u90E8\u4EE3\u7801\u5982\u4E0B</p><ul><li><p>service</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">queryByDate</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> date<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">String</span> date1 <span class="token operator">=</span> date<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token class-name">String</span> date2 <span class="token operator">=</span> date<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token function">calcBetweenDate</span><span class="token punctuation">(</span>date1<span class="token punctuation">,</span> date2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> countArr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> userMapper<span class="token punctuation">.</span><span class="token function">queryByDate</span><span class="token punctuation">(</span>date1<span class="token punctuation">,</span>countArr<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    \n    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">calcBetweenDate</span><span class="token punctuation">(</span><span class="token class-name">String</span> start<span class="token punctuation">,</span> <span class="token class-name">String</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>  \n        <span class="token class-name">SimpleDateFormat</span> df <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  \n        <span class="token class-name">Date</span> startDate <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>  \n        <span class="token class-name">Date</span> endDate <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>  \n        <span class="token keyword">try</span> <span class="token punctuation">{</span>  \n            startDate <span class="token operator">=</span> df<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">;</span>  \n            endDate <span class="token operator">=</span> df<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>end<span class="token punctuation">)</span><span class="token punctuation">;</span>  \n        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>  \n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u65E5\u671F\u8F6C\u6362\u51FA\u9519&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  \n        <span class="token punctuation">}</span>  \n        <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>endDate<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> startDate<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  \n        <span class="token keyword">return</span> count<span class="token punctuation">;</span>  \n    <span class="token punctuation">}</span>  \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>mapper</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">queryByDate</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;date&quot;</span><span class="token punctuation">)</span><span class="token class-name">String</span> date<span class="token punctuation">,</span> <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;countArr&quot;</span><span class="token punctuation">)</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> countArr<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>xml</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>queryByDate<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>java.util.HashMap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n	   select count(u.id) as count,s.date from \n		(select date_add(&#39;2020-04-01&#39;,interval @i:=@i+1 day) as date \n		from (\n		select 1 \n	   	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>foreach</span> <span class="token attr-name">item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span> <span class="token attr-name">collection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>countArr<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n		  union all select 1 \n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>foreach</span><span class="token punctuation">&gt;</span></span>\n		) as tmp,\n		 (select @i:= -1) t\n		) s left join user u on s.date = date_format(u.createtime,&#39;%Y-%m-%d&#39;)\n		GROUP BY s.date\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 37);
const _hoisted_38 = {
  href: "https://blog.csdn.net/new_yao/article/details/105572684",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_39 = /* @__PURE__ */ createTextVNode("mysql\u67E5\u8BE2\u4E00\u4E2A\u65F6\u95F4\u6BB5\u6BCF\u5929\u6570\u636E\u6570\u91CF\uFF0C\u6CA1\u6709\u663E\u793A\u4E3A0");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_38, [
        _hoisted_39,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var Mysql___________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Mysql\u6309\u65E5\u5468\u6708\u8FDB\u884C\u5206\u7EC4\u7EDF\u8BA1.html.vue"]]);
export { Mysql___________html as default };
