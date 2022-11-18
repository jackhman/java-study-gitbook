import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as e}from"./app.c0d093c6.js";const i={},l=e(`<h1 id="awk\u5F3A\u5927\u7684\u6587\u672C\u5206\u6790\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#awk\u5F3A\u5927\u7684\u6587\u672C\u5206\u6790\u547D\u4EE4" aria-hidden="true">#</a> awk\u5F3A\u5927\u7684\u6587\u672C\u5206\u6790\u547D\u4EE4</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1 \u7B80\u4ECB</h2><p>awk\u662F\u4E00\u4E2A\u5F3A\u5927\u7684\u6587\u672C\u5206\u6790\u5DE5\u5177\uFF0C\u76F8\u5BF9\u4E8Egrep\u7684\u67E5\u627E\uFF0Csed\u7684\u7F16\u8F91\uFF0Cawk\u5728\u5176\u5BF9\u6570\u636E\u5206\u6790\u5E76\u751F\u6210\u62A5\u544A\u65F6\uFF0C\u663E\u5F97\u5C24\u4E3A\u5F3A\u5927\u3002\u7B80\u5355\u6765\u8BF4awk\u5C31\u662F\u628A\u6587\u4EF6\u9010\u884C\u7684\u8BFB\u5165\uFF0C\u4EE5\u7A7A\u683C\u4E3A\u9ED8\u8BA4\u5206\u9694\u7B26\u5C06\u6BCF\u884C\u5207\u7247\uFF0C\u5207\u5F00\u7684\u90E8\u5206\u518D\u8FDB\u884C\u5404\u79CD\u5206\u6790\u5904\u7406\u3002</p><h2 id="_2-\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-\u8BED\u6CD5" aria-hidden="true">#</a> 2 \u8BED\u6CD5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">awk</span> <span class="token string">&#39;{pattern + action}&#39;</span> <span class="token punctuation">{</span>filenames<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5C3D\u7BA1\u64CD\u4F5C\u53EF\u80FD\u4F1A\u5F88\u590D\u6742\uFF0C\u4F46\u8BED\u6CD5\u603B\u662F\u8FD9\u6837\uFF0C\u5176\u4E2D pattern \u8868\u793A AWK \u5728\u6570\u636E\u4E2D\u67E5\u627E\u7684\u5185\u5BB9\uFF0C\u800C action \u662F\u5728\u627E\u5230\u5339\u914D\u5185\u5BB9\u65F6\u6240\u6267\u884C\u7684\u4E00\u7CFB\u5217\u547D\u4EE4\u3002\u82B1\u62EC\u53F7\uFF08{}\uFF09\u4E0D\u9700\u8981\u5728\u7A0B\u5E8F\u4E2D\u59CB\u7EC8\u51FA\u73B0\uFF0C\u4F46\u5B83\u4EEC\u7528\u4E8E\u6839\u636E\u7279\u5B9A\u7684\u6A21\u5F0F\u5BF9\u4E00\u7CFB\u5217\u6307\u4EE4\u8FDB\u884C\u5206\u7EC4\u3002 pattern\u5C31\u662F\u8981\u8868\u793A\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u7528\u659C\u6760\u62EC\u8D77\u6765\u3002</p><p>awk\u8BED\u8A00\u7684\u6700\u57FA\u672C\u529F\u80FD\u662F\u5728\u6587\u4EF6\u6216\u8005\u5B57\u7B26\u4E32\u4E2D\u57FA\u4E8E\u6307\u5B9A\u89C4\u5219\u6D4F\u89C8\u548C\u62BD\u53D6\u4FE1\u606F\uFF0Cawk\u62BD\u53D6\u4FE1\u606F\u540E\uFF0C\u624D\u80FD\u8FDB\u884C\u5176\u4ED6\u6587\u672C\u64CD\u4F5C\u3002\u5B8C\u6574\u7684awk\u811A\u672C\u901A\u5E38\u7528\u6765\u683C\u5F0F\u5316\u6587\u672C\u6587\u4EF6\u4E2D\u7684\u4FE1\u606F\u3002</p><p>\u901A\u5E38\uFF0Cawk\u662F\u4EE5\u6587\u4EF6\u7684\u4E00\u884C\u4E3A\u5904\u7406\u5355\u4F4D\u7684\u3002awk\u6BCF\u63A5\u6536\u6587\u4EF6\u7684\u4E00\u884C\uFF0C\u7136\u540E\u6267\u884C\u76F8\u5E94\u7684\u547D\u4EE4\uFF0C\u6765\u5904\u7406\u6587\u672C\u3002</p><h2 id="_3-awk\u5165\u95E8" tabindex="-1"><a class="header-anchor" href="#_3-awk\u5165\u95E8" aria-hidden="true">#</a> 3 awk\u5165\u95E8</h2><p>\u5047\u8BBElast -n 5\u7684\u8F93\u51FA\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@iZwz914d1peizv4h7laju4Z ~<span class="token punctuation">]</span><span class="token comment">#  last -n 5 # \u4EC5\u53D6\u51FA\u524D\u4E94\u884C</span>
root     pts/3        <span class="token number">223.104</span>.6.18     Thu Apr <span class="token number">21</span> <span class="token number">17</span>:22   still logged <span class="token keyword">in</span>   
root     pts/2        <span class="token number">223.104</span>.6.18     Thu Apr <span class="token number">21</span> <span class="token number">17</span>:22   still logged <span class="token keyword">in</span>   
root     pts/3        <span class="token number">223.104</span>.6.18     Thu Apr <span class="token number">21</span> <span class="token number">16</span>:30 - <span class="token number">17</span>:13  <span class="token punctuation">(</span>00:43<span class="token punctuation">)</span>    
root     pts/2        <span class="token number">223.104</span>.6.18     Thu Apr <span class="token number">21</span> <span class="token number">16</span>:30 - <span class="token number">17</span>:13  <span class="token punctuation">(</span>00:43<span class="token punctuation">)</span>    
root     pts/3        <span class="token number">223.104</span>.6.12     Tue Apr <span class="token number">19</span> <span class="token number">17</span>:35 - <span class="token number">17</span>:52  <span class="token punctuation">(</span>00:17<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u53EA\u662F\u663E\u793A\u6700\u8FD1\u767B\u5F55\u76845\u4E2A\u5E10\u53F7\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@iZwz914d1peizv4h7laju4Z ~<span class="token punctuation">]</span><span class="token comment"># last -n 5 | awk  &#39;{print $1}&#39;</span>
root
root
root
root
root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>awk\u5DE5\u4F5C\u6D41\u7A0B\u662F\u8FD9\u6837\u7684\uFF1A\u8BFB\u5165\u6709&#39;\\n&#39;\u6362\u884C\u7B26\u5206\u5272\u7684\u4E00\u6761\u8BB0\u5F55\uFF0C\u7136\u540E\u5C06\u8BB0\u5F55\u6309\u6307\u5B9A\u7684\u57DF\u5206\u9694\u7B26\u5212\u5206\u57DF\uFF0C\u586B\u5145\u57DF\uFF0C0\u5219\u8868\u793A\u6240\u6709\u57DF,0\u5219\u8868\u793A\u6240\u6709\u57DF,1\u8868\u793A\u7B2C\u4E00\u4E2A\u57DF,\u{1D45B}\u8868\u793A\u7B2C\u{1D45B}\u4E2A\u57DF\u3002\u9ED8\u8BA4\u57DF\u5206\u9694\u7B26\u662F&quot;\u7A7A\u767D\u952E&quot;\u6216&quot;[\u{1D461}\u{1D44E}\u{1D44F}]\u952E&quot;,\u6240\u4EE5n\u8868\u793A\u7B2Cn\u4E2A\u57DF\u3002\u9ED8\u8BA4\u57DF\u5206\u9694\u7B26\u662F&quot;\u7A7A\u767D\u952E&quot;\u6216&quot;[tab]\u952E&quot;,\u6240\u4EE51\u8868\u793A\u767B\u5F55\u7528\u6237\uFF0C$3\u8868\u793A\u767B\u5F55\u7528\u6237ip,\u4EE5\u6B64\u7C7B\u63A8\u3002</p><p>\u5982\u679C\u53EA\u662F\u663E\u793A/etc/passwd\u7684\u8D26\u6237\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@iZwz914d1peizv4h7laju4Z ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/passwd |awk  -F &#39;:&#39;  &#39;{print $1}&#39;  </span>
root
bin
daemon
adm
lp
<span class="token function">sync</span>
<span class="token function">shutdown</span>
<span class="token function">halt</span>
mail
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u79CD\u662Fawk+action\u7684\u793A\u4F8B\uFF0C\u6BCF\u884C\u90FD\u4F1A\u6267\u884Caction{print $1}\u3002</p><p><strong>-F\u6307\u5B9A\u57DF\u5206\u9694\u7B26\u4E3A&#39;:&#39;\u3002</strong></p><p>\u5982\u679C\u53EA\u662F\u663E\u793A/etc/passwd\u7684\u8D26\u6237\u548C\u8D26\u6237\u5BF9\u5E94\u7684shell,\u800C\u8D26\u6237\u4E0Eshell\u4E4B\u95F4\u4EE5tab\u952E\u5206\u5272\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@iZwz914d1peizv4h7laju4Z ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/passwd |awk  -F &#39;:&#39;  &#39;{print $1&quot;\\t&quot;$7}&#39;</span>
root    /bin/bash
bin     /sbin/nologin
daemon  /sbin/nologin
adm     /sbin/nologin

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u53EA\u662F\u663E\u793A/etc/passwd\u7684\u8D26\u6237\u548C\u8D26\u6237\u5BF9\u5E94\u7684shell,\u800C\u8D26\u6237\u4E0Eshell\u4E4B\u95F4\u4EE5\u9017\u53F7\u5206\u5272,\u800C\u4E14\u5728\u6240\u6709\u884C\u6DFB\u52A0\u5217\u540Dname,shell,\u5728\u6700\u540E\u4E00\u884C\u6DFB\u52A0&quot;blue,/bin/nosh&quot;\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@iZwz914d1peizv4h7laju4Z ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/passwd |awk  -F &#39;:&#39;  &#39;BEGIN {print &quot;name,shell&quot;}  {print $1&quot;,&quot;$7} END {print &quot;blue,/bin/nosh&quot;}&#39;</span>
name,shell
root,/bin/bash
bin,/sbin/nologin
daemon,/sbin/nologin
adm,/sbin/nologin
lp,/sbin/nologin
sync,/bin/sync

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>awk\u5DE5\u4F5C\u6D41\u7A0B\u662F\u8FD9\u6837\u7684\uFF1A\u5148\u6267\u884CBEGING\uFF0C\u7136\u540E\u8BFB\u53D6\u6587\u4EF6\uFF0C\u8BFB\u5165\u6709/n\u6362\u884C\u7B26\u5206\u5272\u7684\u4E00\u6761\u8BB0\u5F55\uFF0C\u7136\u540E\u5C06\u8BB0\u5F55\u6309\u6307\u5B9A\u7684\u57DF\u5206\u9694\u7B26\u5212\u5206\u57DF\uFF0C\u586B\u5145\u57DF\uFF0C0\u5219\u8868\u793A\u6240\u6709\u57DF,0\u5219\u8868\u793A\u6240\u6709\u57DF,1\u8868\u793A\u7B2C\u4E00\u4E2A\u57DF,$n\u8868\u793A\u7B2Cn\u4E2A\u57DF,\u968F\u540E\u5F00\u59CB\u6267\u884C\u6A21\u5F0F\u6240\u5BF9\u5E94\u7684\u52A8\u4F5Caction\u3002\u63A5\u7740\u5F00\u59CB\u8BFB\u5165\u7B2C\u4E8C\u6761\u8BB0\u5F55\xB7\xB7\xB7\xB7\xB7\xB7\u76F4\u5230\u6240\u6709\u7684\u8BB0\u5F55\u90FD\u8BFB\u5B8C\uFF0C\u6700\u540E\u6267\u884CEND\u64CD\u4F5C\u3002</p><p>\u641C\u7D22/etc/passwd\u6709root\u5173\u952E\u5B57\u7684\u6240\u6709\u884C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@iZwz914d1peizv4h7laju4Z ~<span class="token punctuation">]</span><span class="token comment"># awk -F: &#39;/root/{print $7}&#39; /etc/passwd   </span>
/bin/bash
/sbin/nologin

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u6307\u5B9A\u4E86action{print $7}\u3002</p><h2 id="_4-awk-\u8FDB\u9636" tabindex="-1"><a class="header-anchor" href="#_4-awk-\u8FDB\u9636" aria-hidden="true">#</a> 4 awk \u8FDB\u9636</h2><h3 id="_4-1-\u5185\u7F6E\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_4-1-\u5185\u7F6E\u53D8\u91CF" aria-hidden="true">#</a> 4.1 \u5185\u7F6E\u53D8\u91CF</h3><p>awk\u6709\u8BB8\u591A\u5185\u7F6E\u53D8\u91CF\u7528\u6765\u8BBE\u7F6E\u73AF\u5883\u4FE1\u606F\uFF0C\u8FD9\u4E9B\u53D8\u91CF\u53EF\u4EE5\u88AB\u6539\u53D8\uFF0C\u4E0B\u9762\u7ED9\u51FA\u4E86\u6700\u5E38\u7528\u7684\u4E00\u4E9B\u53D8\u91CF\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ARGC               \u547D\u4EE4\u884C\u53C2\u6570\u4E2A\u6570
ARGV               \u547D\u4EE4\u884C\u53C2\u6570\u6392\u5217
ENVIRON            \u652F\u6301\u961F\u5217\u4E2D\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF\u7684\u4F7F\u7528
FILENAME           awk\u6D4F\u89C8\u7684\u6587\u4EF6\u540D
FNR                \u6D4F\u89C8\u6587\u4EF6\u7684\u8BB0\u5F55\u6570
FS                 \u8BBE\u7F6E\u8F93\u5165\u57DF\u5206\u9694\u7B26\uFF0C\u7B49\u4EF7\u4E8E\u547D\u4EE4\u884C -F\u9009\u9879
NF                 \u6D4F\u89C8\u8BB0\u5F55\u7684\u57DF\u7684\u4E2A\u6570
NR                 \u5DF2\u8BFB\u7684\u8BB0\u5F55\u6570
OFS                \u8F93\u51FA\u57DF\u5206\u9694\u7B26
ORS                \u8F93\u51FA\u8BB0\u5F55\u5206\u9694\u7B26
RS                 \u63A7\u5236\u8BB0\u5F55\u5206\u9694\u7B26
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u5916,0\u53D8\u91CF\u662F\u6307\u6574\u6761\u8BB0\u5F55\u30020\u53D8\u91CF\u662F\u6307\u6574\u6761\u8BB0\u5F55\u30021\u8868\u793A\u5F53\u524D\u884C\u7684\u7B2C\u4E00\u4E2A\u57DF,$2\u8868\u793A\u5F53\u524D\u884C\u7684\u7B2C\u4E8C\u4E2A\u57DF,......\u4EE5\u6B64\u7C7B\u63A8\u3002</p><p>\u7EDF\u8BA1/etc/passwd:\u6587\u4EF6\u540D\uFF0C\u6BCF\u884C\u7684\u884C\u53F7\uFF0C\u6BCF\u884C\u7684\u5217\u6570\uFF0C\u5BF9\u5E94\u7684\u5B8C\u6574\u884C\u5185\u5BB9:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@iZwz914d1peizv4h7laju4Z ~<span class="token punctuation">]</span><span class="token comment"># awk  -F &#39;:&#39;  &#39;{print &quot;filename:&quot; FILENAME &quot;,linenumber:&quot; NR &quot;,columns:&quot; NF &quot;,linecontent:&quot;$0}&#39; /etc/passwd</span>
filename:/etc/passwd,linenumber:1,columns:7,linecontent:root:x:0:0:root:/root:/bin/bash
filename:/etc/passwd,linenumber:2,columns:7,linecontent:bin:x:1:1:bin:/bin:/sbin/nologin
filename:/etc/passwd,linenumber:3,columns:7,linecontent:daemon:x:2:2:daemon:/sbin:/sbin/nologin
filename:/etc/passwd,linenumber:4,columns:7,linecontent:adm:x:3:4:adm:/var/adm:/sbin/nologin
filename:/etc/passwd,linenumber:5,columns:7,linecontent:lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
filename:/etc/passwd,linenumber:6,columns:7,linecontent:sync:x:5:0:sync:/sbin:/bin/sync

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-\u53D8\u91CF\u548C\u8D4B\u503C" tabindex="-1"><a class="header-anchor" href="#_4-2-\u53D8\u91CF\u548C\u8D4B\u503C" aria-hidden="true">#</a> 4.2 \u53D8\u91CF\u548C\u8D4B\u503C</h3><p>\u9664\u4E86awk\u7684\u5185\u7F6E\u53D8\u91CF\uFF0Cawk\u8FD8\u53EF\u4EE5\u81EA\u5B9A\u4E49\u53D8\u91CF\u3002</p><p>\u4E0B\u9762\u7EDF\u8BA1/etc/passwd\u7684\u8D26\u6237\u4EBA\u6570\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">awk</span> <span class="token string">&#39;{count++;print $0;} END{print &quot;user count is &quot;, count}&#39;</span> /etc/passwd
root:x:0:0:root:/root:/bin/bash
<span class="token punctuation">..</span>.
user count is  <span class="token number">25</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>count\u662F\u81EA\u5B9A\u4E49\u53D8\u91CF\u3002\u4E4B\u524D\u7684action{}\u91CC\u90FD\u662F\u53EA\u6709\u4E00\u4E2Aprint,\u5176\u5B9Eprint\u53EA\u662F\u4E00\u4E2A\u8BED\u53E5\uFF0C\u800Caction{}\u53EF\u4EE5\u6709\u591A\u4E2A\u8BED\u53E5\uFF0C\u4EE5;\u53F7\u9694\u5F00\u3002</p><p>\u8FD9\u91CC\u6CA1\u6709\u521D\u59CB\u5316count\uFF0C\u867D\u7136\u9ED8\u8BA4\u662F0\uFF0C\u4F46\u662F\u59A5\u5F53\u7684\u505A\u6CD5\u8FD8\u662F\u521D\u59CB\u5316\u4E3A0:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">awk</span> <span class="token string">&#39;BEGIN {count=0;print &quot;[start]user count is &quot;, count} {count=count+1;print $0;} END{print &quot;[end]user count is &quot;, count}&#39;</span> /etc/passwd
<span class="token punctuation">[</span>start<span class="token punctuation">]</span>user count is  <span class="token number">0</span>
root:x:0:0:root:/root:/bin/bash
<span class="token punctuation">..</span>.
nexus:x:1001:1001::/home/nexus:/bin/bash
<span class="token punctuation">[</span>end<span class="token punctuation">]</span>user count is  <span class="token number">25</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-\u6761\u4EF6\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_4-3-\u6761\u4EF6\u8BED\u53E5" aria-hidden="true">#</a> 4.3 \u6761\u4EF6\u8BED\u53E5</h3><p>awk\u4E2D\u7684\u6761\u4EF6\u8BED\u53E5\u662F\u4ECEC\u8BED\u8A00\u4E2D\u501F\u9274\u6765\u7684\uFF0C\u7528\u6CD5\u4E0EC\u8BED\u8A00\u4E00\u81F4\u3002</p><p>\u7EDF\u8BA1\u67D0\u4E2A\u6587\u4EF6\u5939\u4E0B\u7684\u6587\u4EF6\u5360\u7528\u7684\u5B57\u8282\u6570,\u8FC7\u6EE44096\u5927\u5C0F\u7684\u6587\u4EF6(\u4E00\u822C\u90FD\u662F\u6587\u4EF6\u5939):</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#ls -l |awk &#39;BEGIN {size=0;print &quot;[start]size is &quot;, size} {if($5!=4096){size=size+$5;}} END{print &quot;[end]size is &quot;, size/1024/1024,&quot;M&quot;}&#39; </span>
<span class="token punctuation">[</span>end<span class="token punctuation">]</span>size is  <span class="token number">8.22339</span> M
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-\u5FAA\u73AF\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_4-4-\u5FAA\u73AF\u8BED\u53E5" aria-hidden="true">#</a> 4.4 \u5FAA\u73AF\u8BED\u53E5</h3><p>awk\u4E2D\u7684\u5FAA\u73AF\u8BED\u53E5\u540C\u6837\u501F\u9274\u4E8EC\u8BED\u8A00\uFF0C\u652F\u6301while\u3001do/while\u3001for\u3001break\u3001continue\uFF0C\u8FD9\u4E9B\u5173\u952E\u5B57\u7684\u8BED\u4E49\u548CC\u8BED\u8A00\u4E2D\u7684\u8BED\u4E49\u5B8C\u5168\u76F8\u540C\u3002</p><h3 id="_4-5-\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#_4-5-\u6570\u7EC4" aria-hidden="true">#</a> 4.5 \u6570\u7EC4</h3><p>\u56E0\u4E3Aawk\u4E2D\u6570\u7EC4\u7684\u4E0B\u6807\u53EF\u4EE5\u662F\u6570\u5B57\u548C\u5B57\u6BCD\uFF0C\u6570\u7EC4\u7684\u4E0B\u6807\u901A\u5E38\u88AB\u79F0\u4E3A\u5173\u952E\u5B57(key)\u3002\u503C\u548C\u5173\u952E\u5B57\u90FD\u5B58\u50A8\u5728\u5185\u90E8\u7684\u4E00\u5F20\u9488\u5BF9key/value\u5E94\u7528hash\u7684\u8868\u683C\u91CC\u3002\u7531\u4E8Ehash\u4E0D\u662F\u987A\u5E8F\u5B58\u50A8\uFF0C\u56E0\u6B64\u5728\u663E\u793A\u6570\u7EC4\u5185\u5BB9\u65F6\u4F1A\u53D1\u73B0\uFF0C\u5B83\u4EEC\u5E76\u4E0D\u662F\u6309\u7167\u4F60\u9884\u6599\u7684\u987A\u5E8F\u663E\u793A\u51FA\u6765\u7684\u3002\u6570\u7EC4\u548C\u53D8\u91CF\u4E00\u6837\uFF0C\u90FD\u662F\u5728\u4F7F\u7528\u65F6\u81EA\u52A8\u521B\u5EFA\u7684\uFF0Cawk\u4E5F\u540C\u6837\u4F1A\u81EA\u52A8\u5224\u65AD\u5176\u5B58\u50A8\u7684\u662F\u6570\u5B57\u8FD8\u662F\u5B57\u7B26\u4E32\u3002\u4E00\u822C\u800C\u8A00\uFF0Cawk\u4E2D\u7684\u6570\u7EC4\u7528\u6765\u4ECE\u8BB0\u5F55\u4E2D\u6536\u96C6\u4FE1\u606F\uFF0C\u53EF\u4EE5\u7528\u4E8E\u8BA1\u7B97\u603B\u548C\u3001\u7EDF\u8BA1\u5355\u8BCD\u4EE5\u53CA\u8DDF\u8E2A\u6A21\u677F\u88AB\u5339\u914D\u7684\u6B21\u6570\u7B49\u7B49\u3002</p><p>\u663E\u793A/etc/passwd\u7684\u8D26\u6237\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#awk -F &#39;:&#39; &#39;BEGIN {count=0;} {name[count] = $1;count++;}; END{for (i = 0; i &lt; NR; i++) print i, name[i]}&#39; /etc/passwd</span>
<span class="token number">0</span> root
<span class="token number">1</span> daemon
<span class="token number">2</span> bin
<span class="token number">3</span> sys
<span class="token number">4</span> <span class="token function">sync</span>
<span class="token number">5</span> games
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u4F7F\u7528for\u5FAA\u73AF\u904D\u5386\u6570\u7EC4\u3002</p>`,51),t=[l];function d(o,c){return s(),a("div",null,t)}const r=n(i,[["render",d],["__file","linux-k-awk.html.vue"]]);export{r as default};
