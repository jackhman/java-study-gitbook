import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as e,a as n,b as p,d as c,e as o,r as i}from"./app.7a1da930.js";const l={},u=c(`<h1 id="druid\u6E90\u7801\u5B66\u4E60-\u4E03-druiddatasource\u7684recycle\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#druid\u6E90\u7801\u5B66\u4E60-\u4E03-druiddatasource\u7684recycle\u8FC7\u7A0B" aria-hidden="true">#</a> Druid\u6E90\u7801\u5B66\u4E60\uFF08\u4E03\uFF09-DruidDataSource\u7684recycle\u8FC7\u7A0B</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>Druid \u4E2D\u7684Connection\u5728\u4F7F\u7528\u4E4B\u540E\uFF0C\u8981\u8FDB\u884C\u56DE\u6536\uFF0C\u800C\u56DE\u6536\u8FDE\u63A5\u7684\u65B9\u6CD5\u5C31\u662Frecycle\u65B9\u6CD5\u3002 \u56DE\u6536\u7684\u4E3B\u8981\u76EE\u7684\u662F\u5C06\u8FDE\u63A5\u7684\u72B6\u6001\u6E05\u7A7A/\u91CD\u7F6E\u4E4B\u540E\uFF0C\u653E\u7F6E\u5230\u8FDE\u63A5\u6C60\u7684connections\u6570\u7EC4\u7684\u5C3E\u90E8\uFF0C\u7136\u540E\u53D1\u9001\u8FDE\u63A5\u6C60lock\u7684notEmpty\u6761\u4EF6\u53D8\u91CF \u901A\u77E5\u6D88\u606F\uFF0C\u8BA9\u7B49\u5F85\u7684\u6D88\u8D39\u8005\u7EBF\u7A0B\u6765\u83B7\u53D6\u8FDE\u63A5\u3002</p><h2 id="_2-\u56DE\u6536\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#_2-\u56DE\u6536\u8FC7\u7A0B" aria-hidden="true">#</a> 2.\u56DE\u6536\u8FC7\u7A0B</h2><p>\u56DE\u6536\u65B9\u6CD5\u9996\u5148\u8981\u505A\u7684\u662F\uFF0C\u5224\u65AD\u56DE\u6536\u7EBF\u7A0B\u662F\u5426\u4E3A\u540C\u4E00\u4E2A\u7EBF\u7A0B\u3002\u5982\u679C\u4E0D\u662F\uFF0C\u5219\u6253\u5370\u65E5\u5FD7\u8F93\u51FA\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token doc-comment comment">/**
     * \u56DE\u6536\u8FDE\u63A5
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">recycle</span><span class="token punctuation">(</span><span class="token class-name">DruidPooledConnection</span> pooledConnection<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>logDifferentThread <span class="token comment">//</span>
                <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isAsyncCloseConnectionEnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//</span>
                <span class="token operator">&amp;&amp;</span> pooledConnection<span class="token punctuation">.</span>ownerThread <span class="token operator">!=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token constant">LOG</span><span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&quot;get/close not same thread&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u65E5\u5FD7\u7EA7\u522B\u662Fwarn,\u8FD9\u662F\u6211\u4EEC\u5728\u4F7F\u7528\u8FDE\u63A5\u6C60\u7684\u8FC7\u7A0B\u4E2D\u7279\u522B\u8981\u6CE8\u610F\u7684\u5730\u65B9\uFF0C\u4E00\u822C\u6765\u8BF4\uFF0C\u53EA\u6709\u8FDE\u63A5\u6C60\u53D1\u751F\u4E86\u8FDE\u63A5\u6CC4\u9732\uFF0C\u4F7F\u7528\u8FDE\u63A5\u7684\u7EBF\u7A0B\u957F\u671F\u6301\u6709\u8FDE\u63A5\u800C\u4E0D\u6267\u884C\u5177\u4F53\u64CD\u4F5C\uFF0C\u8FDE\u63A5\u6CC4\u6F0F\u76D1\u6D4B\u7684\u7EBF\u7A0B\u624D\u4F1A\u6765\u5173\u95ED\u8FDE\u63A5\u3002\u8FD9\u79CD\u60C5\u51B5\u9700\u8981\u7279\u522B\u6CE8\u610F\u3002 \u6B64\u5916\uFF0C\u8FDE\u63A5\u6CC4\u9732\u76D1\u6D4B\u673A\u5236\u7684removeAbandoned\u673A\u5236\u4E5F\u4F1A\u8C03\u7528recycle\u65B9\u6CD5\u6765\u8FDB\u884C\u56DE\u6536\u3002</p><p>pooledConnection.traceEnable\u4E0EactiveConnections\u90FD\u662F\u4E0EremoveAbandoned\u673A\u5236\u76F8\u5173\u7684\u53C2\u6570\uFF0C\u8FD9\u5C06\u5728\u540E\u7EED\u5173\u4E8EremoveAbandoned\u673A\u5236\u7684\u65F6\u5019\u8BE6\u7EC6\u5206\u6790\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>pooledConnection<span class="token punctuation">.</span>traceEnable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Object</span> oldInfo <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    activeConnectionLock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>pooledConnection<span class="token punctuation">.</span>traceEnable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//\u5C06\u8FDE\u63A5\u4ECEactiveConnections\u4E2D\u79FB\u9664 \u8003\u8651\u5230\u591A\u7EBF\u7A0B\u573A\u666F\uFF0C\u8981\u52A0\u9501</span>
            oldInfo <span class="token operator">=</span> activeConnections<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>pooledConnection<span class="token punctuation">)</span><span class="token punctuation">;</span>
            pooledConnection<span class="token punctuation">.</span>traceEnable <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
        activeConnectionLock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>oldInfo <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">LOG</span><span class="token punctuation">.</span><span class="token function">isWarnEnabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token constant">LOG</span><span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&quot;remove abandonded failed. activeConnections.size &quot;</span> <span class="token operator">+</span> activeConnections<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rollback\u5904\u7406\uFF1A\u5982\u679C\u4E0D\u662F\u81EA\u52A8commit\u5207\u4E0D\u662F\u53EA\u8BFB\u7684\u8FDE\u63A5\uFF0C\u5728\u56DE\u6536\u7684\u65F6\u5019\uFF0C\u5148\u8FDB\u884C\u56DE\u6EDA\u64CD\u4F5C\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// check need to rollback?</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">!</span>isAutoCommit<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token operator">!</span>isReadOnly<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pooledConnection<span class="token punctuation">.</span><span class="token function">rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>reset\u5904\u7406\uFF1A\u6B64\u5904\u9700\u8981\u5224\u65AD\u662F\u5426\u4E3A\u591A\u7EBF\u7A0B\u573A\u666F\uFF0C\u5982\u679C\u4E0D\u662F\u540C\u4E00\u4E2A\u7EBF\u7A0B\uFF0C\u56E0\u4E3A\u8FDE\u63A5\u672C\u8EAB\u7684\u7EBF\u7A0B\u6709\u53EF\u80FD\u8C03\u7528\u5B8C\u6BD5\u4E4B\u540E\u91CA\u653E\u7684\u65F6\u5019\u4E5F\u4F1A\u8C03\u7528recycle,\u56E0\u6B64\u8FD9\u4E2A\u5730\u65B9\u9700\u8981\u8003\u8651\u5230\u591A\u7EBF\u7A0B\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// reset holder, restore default settings, clear warnings</span>
<span class="token keyword">boolean</span> isSameThread <span class="token operator">=</span> pooledConnection<span class="token punctuation">.</span>ownerThread <span class="token operator">==</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isSameThread<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">ReentrantLock</span> lock <span class="token operator">=</span> pooledConnection<span class="token punctuation">.</span>lock<span class="token punctuation">;</span>
    lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        holder<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
        lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    holder<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u5173\u952E\u7684\u90E8\u5206\u662Freset\u65B9\u6CD5\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//\u6E05\u7A7AListeners</span>
connectionEventListeners<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
statementEventListeners<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Object</span> item <span class="token operator">:</span> statementTrace<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Statement</span> stmt <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Statement</span><span class="token punctuation">)</span> item<span class="token punctuation">;</span>
        <span class="token comment">//\u5173\u95EDstatement</span>
        <span class="token class-name">JdbcUtils</span><span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span>stmt<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//\u6E05\u7A7AstatementTrace</span>
    statementTrace<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u6E05\u7A7Awarning\u4FE1\u606F</span>
conn<span class="token punctuation">.</span><span class="token function">clearWarnings</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>reset\u65B9\u6CD5\u5C06connection\u4E2D\u7684statement\u90FD\u5173\u95ED\uFF0C\u5E76\u5C06\u76F8\u5173\u7684\u62A5\u8B66\u706F\u5185\u5BB9\u6E05\u7A7A\u3002</p><p>\u5173\u95ED\u8FDE\u63A5\u5904\u7406\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//\u5982\u679C\u72B6\u6001\u4E3Adiscard \u5219\u76F4\u63A5\u9000\u51FA</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>holder<span class="token punctuation">.</span>discard<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u5982\u679C\u8D85\u8FC7\u8FDE\u63A5\u6700\u5927\u7684\u4F7F\u7528\u6B21\u6570\uFF0C\u90A3\u4E48\u4E5F\u5C06\u5173\u95ED\u8FDE\u63A5</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>phyMaxUseCount <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> holder<span class="token punctuation">.</span>useCount <span class="token operator">&gt;=</span> phyMaxUseCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">discardConnection</span><span class="token punctuation">(</span>holder<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u5730\u65B9\u5982\u679C\u72B6\u6001\u4E3Audiscard,\u5219\u76F4\u63A5\u9000\u51FArecycle\u65B9\u6CD5\u3002\u4F1A\u5728\u540E\u7EED\u7684\u65B9\u6CD5\u4E2D\u88ABdiscard\u3002 \u5982\u679C\u8FBE\u5230\u6700\u5927\u8C03\u7528\u6B21\u6570\uFF0C\u4E5F\u4F1A\u5173\u95ED\u8FDE\u63A5\u3002</p><p>\u5173\u95ED\u6E05\u7406: \u5982\u679C\u8FDE\u63A5\u5DF2\u7ECF\u5173\u95ED\uFF0C\u5219\u52A0\u9501\uFF0C\u51CF\u53BB\u8BA1\u6570\u5668\u5373\u53EF\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>physicalConnection<span class="token punctuation">.</span><span class="token function">isClosed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>holder<span class="token punctuation">.</span>active<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                activeCount<span class="token operator">--</span><span class="token punctuation">;</span>
                holder<span class="token punctuation">.</span>active <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            closeCount<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>testOnReturn\u5904\u7406\uFF1A \u5982\u679C\u5F00\u542F\u4E86testOnReturn,\u5219\u53D1\u9001\u6D4B\u8BD5\u6570\u636E\uFF0C\u5982\u679C\u6D4B\u8BD5\u5931\u8D25\uFF0C\u5219\u5173\u95ED\u8FDE\u63A5\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>testOnReturn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">boolean</span> validate <span class="token operator">=</span> <span class="token function">testConnectionInternal</span><span class="token punctuation">(</span>holder<span class="token punctuation">,</span> physicalConnection<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>validate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">JdbcUtils</span><span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span>physicalConnection<span class="token punctuation">)</span><span class="token punctuation">;</span>

        destroyCountUpdater<span class="token punctuation">.</span><span class="token function">incrementAndGet</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>holder<span class="token punctuation">.</span>active<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                activeCount<span class="token operator">--</span><span class="token punctuation">;</span>
                holder<span class="token punctuation">.</span>active <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            closeCount<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u914D\u7F6E\u4E86druid.phyTimeoutMillis\uFF0C\u90A3\u4E48\u56DE\u6536\u7684\u65F6\u5019\u9700\u8981\u5BF9\u8FDE\u63A5\u8FDB\u884C\u8D85\u65F6\u68C0\u6D4B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>phyTimeoutMillis <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">long</span> phyConnectTimeMillis <span class="token operator">=</span> currentTimeMillis <span class="token operator">-</span> holder<span class="token punctuation">.</span>connectTimeMillis<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>phyConnectTimeMillis <span class="token operator">&gt;</span> phyTimeoutMillis<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">discardConnection</span><span class="token punctuation">(</span>holder<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u5173\u952E\u7684\u4EE3\u7801\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u4FEE\u6539active\u72B6\u6001\u548CactiveCount\u8BA1\u6570\u5668</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>holder<span class="token punctuation">.</span>active<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        activeCount<span class="token operator">--</span><span class="token punctuation">;</span>
        holder<span class="token punctuation">.</span>active <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//\u589E\u52A0closeCount\u8BA1\u6570\u5668</span>
    closeCount<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token comment">//\u5C06\u8FDE\u63A5\u653E\u7F6E\u5230\u6570\u7EC4\u7684\u672B\u5C3E</span>
    result <span class="token operator">=</span> <span class="token function">putLast</span><span class="token punctuation">(</span>holder<span class="token punctuation">,</span> currentTimeMillis<span class="token punctuation">)</span><span class="token punctuation">;</span>
    recycleCount<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u662F\u8FDE\u63A5\u56DE\u6536\u7684\u6838\u5FC3\u4EE3\u7801\uFF0C\u5C31\u662F\u5C06\u8FDE\u63A5\u653E\u7F6E\u5230\u6570\u7EC4\u7684\u672B\u5C3E\u3002 \u5728putLast\u65B9\u6CD5\u4E2D\u4F1A\u8C03\u7528 notEmpty.signal();\u8FD9\u6837\u6D88\u8D39\u8005\u7EBF\u7A0B\u5C31\u4F1A\u4EA7\u751F\u8C03\u7528\u3002</p><h2 id="_3-recycle\u7684\u8C03\u7528\u65F6\u673A" tabindex="-1"><a class="header-anchor" href="#_3-recycle\u7684\u8C03\u7528\u65F6\u673A" aria-hidden="true">#</a> 3. recycle\u7684\u8C03\u7528\u65F6\u673A</h2><p>recycle\u65B9\u6CD5\u5C06\u5728\u8FDE\u63A5\u7684close\u65B9\u6CD5\u4E2D\u88AB\u8C03\u7528\u3002\u5728\u9700\u8981\u5173\u95ED\u8FDE\u63A5\u7684\u65F6\u5019\uFF0C\u8C03\u7528recycle,\u5C06\u7B26\u5408\u89C4\u5219\u7684\u8FDE\u63A5\u6DFB\u52A0\u5230\u8FDE\u63A5\u6C60\u7684\u672B\u5C3E\u3002 \u8C03\u7528recycle\u7684\u65B9\u6CD5\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">;</span>
  
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">syncClose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>close\u548CsyncClose\u65B9\u6CD5\u90FD\u4F1A\u8C03\u7528recycle\u3002 \u5728\u5173\u95ED\u8FDE\u63A5\u4E4B\u524D\uFF0C\u8DDF\u83B7\u53D6\u8FDE\u63A5\u4E00\u6837\uFF0C\u90FD\u8981\u8FDB\u884C\u8D23\u4EFB\u94FE\u6A21\u5F0F\u7684filter\u5904\u7406\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>filters<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">FilterChainImpl</span> filterChain <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FilterChainImpl</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    filterChain<span class="token punctuation">.</span><span class="token function">dataSource_recycle</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">recycle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,34),d={href:"https://blog.csdn.net/dhaibo1986/article/details/121363454?spm=1001.2014.3001.5502",target:"_blank",rel:"noopener noreferrer"},k=o("Druid\u6E90\u7801\u9605\u8BFB7-DruidDataSource\u7684recycle\u8FC7\u7A0B");function r(v,m){const s=i("ExternalLinkIcon");return t(),e("div",null,[u,n("p",null,[n("a",d,[k,p(s)])])])}const f=a(l,[["render",r],["__file","dbcp-y-druid-source-recycle.html.vue"]]);export{f as default};
