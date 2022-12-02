import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as p,a as s,b as o,d as t,e as c,r as l}from"./app.7a1da930.js";const r={},i=t(`<h1 id="\u8FBE\u68A6\u6570\u636E\u5E93\u7BA1\u7406\u5E38\u7528-sql-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u8FBE\u68A6\u6570\u636E\u5E93\u7BA1\u7406\u5E38\u7528-sql-\u547D\u4EE4" aria-hidden="true">#</a> \u8FBE\u68A6\u6570\u636E\u5E93\u7BA1\u7406\u5E38\u7528 SQL \u547D\u4EE4</h1><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">--\u67E5\u8BE2\u6570\u636E\u5E93\u7248\u672C</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span>  v$version<span class="token punctuation">;</span>

<span class="token comment">--\u67E5\u8BE2\u6388\u6743\u4FE1\u606F</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span>  v$license<span class="token punctuation">;</span>

<span class="token comment">--\u67E5\u8BE2\u670D\u52A1\u5668\u4FE1\u606F</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span>  V$SYSTEMINFO<span class="token punctuation">;</span>

<span class="token comment">--\u67E5\u8BE2\u4F1A\u8BDD\u8FDE\u63A5\u4FE1\u606F</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span>  v$sessions<span class="token punctuation">;</span>

<span class="token keyword">select</span>  <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">,</span>state <span class="token keyword">from</span> v$sessions <span class="token keyword">group</span> <span class="token keyword">by</span> state<span class="token punctuation">;</span>
<span class="token keyword">select</span>  <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">,</span>clnt_ip <span class="token keyword">from</span> v$sessions <span class="token keyword">group</span> <span class="token keyword">by</span> clnt_ip<span class="token punctuation">;</span>

<span class="token comment">--\u67E5\u770B\u6570\u636E\u5E93\u670D\u52A1\u5668\u914D\u7F6E\u53C2\u6570</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span>  v$dm_ini<span class="token punctuation">;</span>

<span class="token comment">--\u67E5\u8BE2\u6700\u8FD1\u7684 SQL \u6267\u884C\u8BB0\u5F55</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span>  v$sql_history<span class="token punctuation">;</span>

<span class="token comment">--\u67E5\u8BE2\u67D0\u4E2A\u7528\u6237\u4E0B\u6240\u6709\u7684\u8868</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span>  user_tables<span class="token punctuation">;</span> <span class="token comment">--\u67E5\u8BE2\u5F53\u524D\u7528\u6237\u4E0B\u6240\u6709\u7684\u8868</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span>  all_tables <span class="token keyword">where</span> owner<span class="token operator">=</span>\u2019TEST\u2019<span class="token punctuation">;</span> <span class="token comment">--dba \u7528\u6237\u67E5\u8BE2\u67D0\u4E2A\u6A21\u5F0F\u4E0B\u7684\u6240\u6709\u8868</span>

<span class="token comment">--\u67E5\u8BE2\u67D0\u4E2A\u7528\u6237\u4E0B\u6240\u6709\u8868\u5B57\u6BB5</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span>  all_tab_cols <span class="token keyword">where</span> owner<span class="token operator">=</span>\u2019TEST\u2019<span class="token punctuation">;</span>

<span class="token comment">--\u67E5\u770B\u8868\u6CE8\u91CA</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span>  ALL_TAB_COMMENTS <span class="token keyword">where</span> ower<span class="token operator">=</span>\u2019TEST\u2019<span class="token punctuation">;</span>

<span class="token comment">--\u67E5\u770B\u5B57\u6BB5\u6CE8\u91CA</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span>  ALL_COL_COMMENTS <span class="token keyword">where</span> ower<span class="token operator">=</span>\u2019TEST\u2019<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token string">&#39;\u5B9E\u4F8B\u540D\u79F0&#39;</span> \u6570\u636E\u5E93\u9009\u9879<span class="token punctuation">,</span>INSTANCE_NAME \u6570\u636E\u5E93\u96C6\u7FA4\u76F8\u5173\u53C2\u6570\u503C <span class="token keyword">FROM</span> v$instance <span class="token keyword">union</span> <span class="token keyword">all</span>

<span class="token keyword">select</span> <span class="token string">&#39;\u6570\u636E\u5E93\u7248\u672C&#39;</span><span class="token punctuation">,</span>substr<span class="token punctuation">(</span>svr_version<span class="token punctuation">,</span>instr<span class="token punctuation">(</span>svr_version<span class="token punctuation">,</span><span class="token string">&#39;(&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">FROM</span> v$instance <span class="token keyword">union</span> <span class="token keyword">all</span>   <span class="token keyword">SELECT</span> <span class="token string">&#39;\u5B57\u7B26\u96C6&#39;</span><span class="token punctuation">,</span><span class="token keyword">CASE</span> SF_GET_UNICODE_FLAG<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">WHEN</span> <span class="token string">&#39;0&#39;</span> <span class="token keyword">THEN</span> <span class="token string">&#39;GBK18030&#39;</span> <span class="token keyword">WHEN</span> <span class="token string">&#39;1&#39;</span> <span class="token keyword">then</span> <span class="token string">&#39;UTF-8&#39;</span> <span class="token keyword">when</span> <span class="token string">&#39;2&#39;</span> <span class="token keyword">then</span> <span class="token string">&#39;EUC-KR&#39;</span> <span class="token keyword">end</span> <span class="token keyword">union</span> <span class="token keyword">all</span>

<span class="token keyword">SELECT</span> <span class="token string">&#39;\u9875\u5927\u5C0F&#39;</span><span class="token punctuation">,</span>cast<span class="token punctuation">(</span>PAGE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1024</span> <span class="token keyword">as</span> <span class="token keyword">varchar</span><span class="token punctuation">)</span> <span class="token keyword">union</span> <span class="token keyword">all</span>   <span class="token keyword">SELECT</span> <span class="token string">&#39;\u7C07\u5927\u5C0F&#39;</span><span class="token punctuation">,</span>cast<span class="token punctuation">(</span>SF_GET_EXTENT_SIZE<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token keyword">varchar</span><span class="token punctuation">)</span> <span class="token keyword">union</span> <span class="token keyword">all</span>

<span class="token keyword">SELECT</span> <span class="token string">&#39;\u5927\u5C0F\u5199\u654F\u611F&#39;</span><span class="token punctuation">,</span>cast<span class="token punctuation">(</span>SF_GET_CASE_SENSITIVE_FLAG<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token keyword">varchar</span><span class="token punctuation">)</span> <span class="token keyword">union</span> <span class="token keyword">all</span>

<span class="token keyword">select</span> <span class="token string">&#39;\u6570\u636E\u5E93\u6A21\u5F0F&#39;</span><span class="token punctuation">,</span><span class="token keyword">MODE</span>$ <span class="token keyword">from</span> v$instance <span class="token keyword">union</span> <span class="token keyword">all</span>

<span class="token keyword">select</span> <span class="token string">&#39;\u552F\u4E00\u9B54\u6570&#39;</span><span class="token punctuation">,</span>cast<span class="token punctuation">(</span>permanent_magic <span class="token keyword">as</span> <span class="token keyword">varchar</span><span class="token punctuation">)</span> <span class="token keyword">union</span> <span class="token keyword">all</span>

<span class="token keyword">select</span> <span class="token string">&#39;LSN&#39;</span><span class="token punctuation">,</span>cast<span class="token punctuation">(</span>cur_lsn <span class="token keyword">as</span> <span class="token keyword">varchar</span><span class="token punctuation">)</span> <span class="token keyword">from</span> v$rlog<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,3),k={href:"https://www.modb.pro/db/34627",target:"_blank",rel:"noopener noreferrer"},d=c("DM\u8FBE\u68A6\u6570\u636E\u5E93\u7BA1\u7406\u5E38\u7528 SQL \u547D\u4EE4");function u(v,m){const n=l("ExternalLinkIcon");return e(),p("div",null,[i,s("p",null,[s("a",k,[d,o(n)])])])}const b=a(r,[["render",u],["__file","dm-manage-sql.html.vue"]]);export{b as default};
