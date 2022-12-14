import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as t}from"./app.b7aa68e0.js";const p={},e=t(`<h1 id="\u6811\u7ED3\u6784\u4F18\u5316\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#\u6811\u7ED3\u6784\u4F18\u5316\u8BB0\u5F55" aria-hidden="true">#</a> \u6811\u7ED3\u6784\u4F18\u5316\u8BB0\u5F55</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u672C\u6765\u662F\u5F88\u7B80\u5355\u7684\u4E00\u4E2A\u6811\u7ED3\u6784\uFF0C\u4F46\u662F\u6211\u4EEC\u6570\u636E\u5E93\u4E2D\u7684\u6570\u636E\u8FC7\u5927\uFF0C\u5BFC\u81F4\u67E5\u8BE2SQL \u548C \u8F6C\u6362\u4E3A\u6811\u7ED3\u6784\u7684\u65F6\u5019\u901F\u5EA6\u8FC7\u6162</p><h2 id="_2-\u4F18\u5316\u524D\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_2-\u4F18\u5316\u524D\u6570\u636E" aria-hidden="true">#</a> 2. \u4F18\u5316\u524D\u6570\u636E</h2><table><thead><tr><th>\u6570\u636E\u91CF</th><th>SQL \u67E5\u8BE2\u8017\u65F6</th><th>\u8F6C\u4E3A\u6811\u7ED3\u6784</th></tr></thead><tbody><tr><td>6000\u6761</td><td>1881ms</td><td>12658ms</td></tr></tbody></table><p>\u6211\u4EEC\u524D\u7AEF10s \u5C31\u8D85\u65F6\u4E86\uFF0C\u6240\u4EE5\u8FD9\u91CC\u603B\u5171\u8017\u8D3914s \u662F\u4E0D\u80FD\u63A5\u53D7\u7684</p><h2 id="_3-\u4F18\u5316\u524D\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_3-\u4F18\u5316\u524D\u4EE3\u7801" aria-hidden="true">#</a> 3. \u4F18\u5316\u524D\u4EE3\u7801</h2><p>Controller \u5C42</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token doc-comment comment">/**
     * \u83B7\u53D6\u90E8\u95E8\u4E0B\u62C9\u6811\u5217\u8868
     */</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/treeselect&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">AjaxResult</span> <span class="token function">treeselect</span><span class="token punctuation">(</span><span class="token class-name">SysDept</span> dept<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SysDept</span><span class="token punctuation">&gt;</span></span> depts <span class="token operator">=</span> deptService<span class="token punctuation">.</span><span class="token function">selectDeptList</span><span class="token punctuation">(</span>dept<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">AjaxResult</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>deptService<span class="token punctuation">.</span><span class="token function">buildDeptTreeSelect</span><span class="token punctuation">(</span>depts<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>\u67E5\u8BE2\u90E8\u95E8\u4E0B\u6240\u6709\u6570\u636E</li><li>\u5C06\u6570\u636E\u8F6C\u4E3A\u6811\u7ED3\u6784</li></ol><p>service \u5C42</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>  <span class="token doc-comment comment">/**
     * \u6784\u5EFA\u524D\u7AEF\u6240\u9700\u8981\u4E0B\u62C9\u6811\u7ED3\u6784
     * 
     * <span class="token keyword">@param</span> <span class="token parameter">depts</span> \u90E8\u95E8\u5217\u8868
     * <span class="token keyword">@return</span> \u4E0B\u62C9\u6811\u7ED3\u6784\u5217\u8868
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeSelect</span><span class="token punctuation">&gt;</span></span> <span class="token function">buildDeptTreeSelect</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SysDept</span><span class="token punctuation">&gt;</span></span> depts<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SysDept</span><span class="token punctuation">&gt;</span></span> deptTrees <span class="token operator">=</span> <span class="token function">buildDeptTree</span><span class="token punctuation">(</span>depts<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> deptTrees<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token class-name">TreeSelect</span><span class="token operator">::</span><span class="token keyword">new</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    
        <span class="token doc-comment comment">/**
     * \u6784\u5EFA\u524D\u7AEF\u6240\u9700\u8981\u6811\u7ED3\u6784
     * 
     * <span class="token keyword">@param</span> <span class="token parameter">depts</span> \u90E8\u95E8\u5217\u8868
     * <span class="token keyword">@return</span> \u6811\u7ED3\u6784\u5217\u8868
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SysDept</span><span class="token punctuation">&gt;</span></span> <span class="token function">buildDeptTree</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SysDept</span><span class="token punctuation">&gt;</span></span> depts<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SysDept</span><span class="token punctuation">&gt;</span></span> returnList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SysDept</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> tempList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">SysDept</span> dept <span class="token operator">:</span> depts<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            tempList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>dept<span class="token punctuation">.</span><span class="token function">getDeptId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SysDept</span><span class="token punctuation">&gt;</span></span> iterator <span class="token operator">=</span> depts<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> iterator<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token class-name">SysDept</span> dept <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">SysDept</span><span class="token punctuation">)</span> iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// \u5982\u679C\u662F\u9876\u7EA7\u8282\u70B9, \u904D\u5386\u8BE5\u7236\u8282\u70B9\u7684\u6240\u6709\u5B50\u8282\u70B9</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>tempList<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>dept<span class="token punctuation">.</span><span class="token function">getParentId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token function">recursionFn</span><span class="token punctuation">(</span>depts<span class="token punctuation">,</span> dept<span class="token punctuation">)</span><span class="token punctuation">;</span>
                returnList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>dept<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>returnList<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            returnList <span class="token operator">=</span> depts<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> returnList<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
     <span class="token doc-comment comment">/**
     * \u9012\u5F52\u5217\u8868
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">recursionFn</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SysDept</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">,</span> <span class="token class-name">SysDept</span> t<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// \u5F97\u5230\u5B50\u8282\u70B9\u5217\u8868</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SysDept</span><span class="token punctuation">&gt;</span></span> childList <span class="token operator">=</span> <span class="token function">getChildList</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
        t<span class="token punctuation">.</span><span class="token function">setChildren</span><span class="token punctuation">(</span>childList<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">SysDept</span> tChild <span class="token operator">:</span> childList<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasChild</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> tChild<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token function">recursionFn</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> tChild<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u7528\u9012\u5F52\u5B9E\u73B0\u6811\u7ED3\u6784\u6392\u5E8F\uFF0C\u5BFC\u81F4\u6392\u5E8F\u975E\u5E38\u8017\u65F6</p><h2 id="_4-\u4F18\u5316\u540E\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_4-\u4F18\u5316\u540E\u4EE3\u7801" aria-hidden="true">#</a> 4. \u4F18\u5316\u540E\u4EE3\u7801</h2><h3 id="_4-1-\u4F7F\u7528\u975E\u9012\u5F52\u65B9\u5F0F\u6784\u5EFA\u6811" tabindex="-1"><a class="header-anchor" href="#_4-1-\u4F7F\u7528\u975E\u9012\u5F52\u65B9\u5F0F\u6784\u5EFA\u6811" aria-hidden="true">#</a> 4.1 \u4F7F\u7528\u975E\u9012\u5F52\u65B9\u5F0F\u6784\u5EFA\u6811</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>  <span class="token doc-comment comment">/**
     * \u7528\u975E\u9012\u5F52\u7684\u65B9\u5F0F\u5B9E\u73B0\u8F6C\u6362\u4E3A\u6570\u7ED3\u6784
     *
     * <span class="token keyword">@param</span> <span class="token parameter">depts</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">buildDeptTreeSelectNoRecursion</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SysDept</span><span class="token punctuation">&gt;</span></span> depts<span class="token punctuation">,</span> <span class="token class-name">Long</span> parentId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u914D\u7F6E</span>
        <span class="token class-name">TreeNodeConfig</span> treeNodeConfig <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNodeConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        treeNodeConfig<span class="token punctuation">.</span><span class="token function">setNameKey</span><span class="token punctuation">(</span><span class="token string">&quot;label&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u81EA\u5B9A\u4E49\u5C5E\u6027\u540D \u90FD\u8981\u9ED8\u8BA4\u503C\u7684</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> treeList <span class="token operator">=</span> <span class="token class-name">TreeUtil</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span>depts<span class="token punctuation">,</span> parentId<span class="token punctuation">,</span> treeNodeConfig<span class="token punctuation">,</span>
                <span class="token punctuation">(</span>treeNode<span class="token punctuation">,</span> tree<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                    tree<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span>treeNode<span class="token punctuation">.</span><span class="token function">getDeptId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    tree<span class="token punctuation">.</span><span class="token function">setParentId</span><span class="token punctuation">(</span>treeNode<span class="token punctuation">.</span><span class="token function">getParentId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    tree<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span>treeNode<span class="token punctuation">.</span><span class="token function">getDeptName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    tree<span class="token punctuation">.</span><span class="token function">putExtra</span><span class="token punctuation">(</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span> treeNode<span class="token punctuation">.</span><span class="token function">getDeptId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> treeList<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u4F18\u5316\u540E\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_4-\u4F18\u5316\u540E\u6570\u636E" aria-hidden="true">#</a> 4. \u4F18\u5316\u540E\u6570\u636E</h2><table><thead><tr><th></th><th>\u6570\u636E\u91CF</th><th>SQL \u67E5\u8BE2\u8017\u65F6</th><th>\u8F6C\u4E3A\u6811\u7ED3\u6784</th></tr></thead><tbody><tr><td>\u4F18\u5316\u524D</td><td>6000\u6761</td><td>1881ms</td><td>12658ms</td></tr><tr><td>\u4F18\u5316\u540E</td><td>6000\u6761</td><td></td><td>22ms</td></tr></tbody></table>`,18),c=[e];function o(l,i){return s(),a("div",null,c)}const d=n(p,[["render",o],["__file","optimization-x-tree-structure.html.vue"]]);export{d as default};
