import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as e,d as n}from"./app.7a1da930.js";const i={},l=n(`<h1 id="docker\u57FA\u7840-docker\u5165\u95E8\u5B9E\u6218\u5FEB\u901F\u4E0A\u624B" tabindex="-1"><a class="header-anchor" href="#docker\u57FA\u7840-docker\u5165\u95E8\u5B9E\u6218\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a> Docker\u57FA\u7840 - Docker\u5165\u95E8\u5B9E\u6218\u5FEB\u901F\u4E0A\u624B</h1><h1 id="docker\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#docker\u4ECB\u7ECD" aria-hidden="true">#</a> Docker\u4ECB\u7ECD</h1><h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><h2 id="\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u955C\u50CF" aria-hidden="true">#</a> \u955C\u50CF</h2><p>\u53EF\u4EE5\u7406\u89E3\u4E3A\u5B89\u88C5\u5305</p><h2 id="\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u5668" aria-hidden="true">#</a> \u5BB9\u5668</h2><p>\u6B63\u5728\u8FD0\u884C\u7684\u7A0B\u5E8F</p><h2 id="\u5BBF\u4E3B\u673A" tabindex="-1"><a class="header-anchor" href="#\u5BBF\u4E3B\u673A" aria-hidden="true">#</a> \u5BBF\u4E3B\u673A</h2><p>\u670D\u52A1\u5668\u672C\u8EAB</p><h1 id="\u5B89\u88C5docker" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5docker" aria-hidden="true">#</a> \u5B89\u88C5Docker</h1><h2 id="centos\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#centos\u5B89\u88C5" aria-hidden="true">#</a> CentOS\u5B89\u88C5</h2><blockquote><p>\u5B89\u88C5\u4F9D\u8D56</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> yum-utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u6DFB\u52A0docker\u5B89\u88C5\u5730\u5740</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u5B89\u88C5docker</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> docker-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u542F\u52A8docker\u670D\u52A1</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="ubuntu\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#ubuntu\u5B89\u88C5" aria-hidden="true">#</a> Ubuntu\u5B89\u88C5</h2><blockquote><p>\u66F4\u65B0\u5305\u7D22\u5F15</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">apt</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u5B89\u88C5docker</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> docker.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u8FDB\u884C\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u884C\u521D\u59CB\u5316" aria-hidden="true">#</a> \u8FDB\u884C\u521D\u59CB\u5316</h2><blockquote><p>\u914D\u7F6E\u955C\u50CF\u52A0\u901F\u5668</p></blockquote><p>vim /etc/docker/daemon.json</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;registry-mirros&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://mirror.ccs.tencent.com&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u91CD\u542Fdocker</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl daemon-reload
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u67E5\u770B\u955C\u50CF</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="\u5B89\u88C5\u5E38\u7528\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u5E38\u7528\u8F6F\u4EF6" aria-hidden="true">#</a> \u5B89\u88C5\u5E38\u7528\u8F6F\u4EF6</h1><h2 id="\u5B89\u88C5tomcat" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5tomcat" aria-hidden="true">#</a> \u5B89\u88C5tomcat</h2><blockquote><p>\u62C9\u53D6\u955C\u50CF</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull tomcat:9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u8FD0\u884C\u5BB9\u5668</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> tomcat <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 tomcat:9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5B89\u88C5mysql" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5mysql" aria-hidden="true">#</a> \u5B89\u88C5mysql</h2><blockquote><p>\u521B\u5EFA\u6587\u4EF6\u5939</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/mysql
<span class="token builtin class-name">cd</span> /data/mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u7F16\u8F91\u914D\u7F6E\u6587\u4EF6</p></blockquote><p>vim my.cnf</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>client<span class="token punctuation">]</span>
default-character-set<span class="token operator">=</span>utf8mb4
<span class="token punctuation">[</span>mysql<span class="token punctuation">]</span>
default-character-set<span class="token operator">=</span>utf8mb4
<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
character-set-server<span class="token operator">=</span>utf8mb4
default-time-zone<span class="token operator">=</span>+8:00
<span class="token assign-left variable">secure_file_priv</span><span class="token operator">=</span>NULL
<span class="token assign-left variable">max_allowed_packet</span><span class="token operator">=</span>2G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u62C9\u53D6mysql\u955C\u50CF</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u8FD0\u884Cmysql</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> mysql <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token parameter variable">-v</span> /data/mysql:/etc/mysql <span class="token parameter variable">--restart</span><span class="token operator">=</span>always mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u521B\u5EFA\u5BB9\u5668\u65F6\u6DFB\u52A0\u53C2\u6570 --restart=always \u540E\uFF0C\u5F53docker\u91CD\u542F\u65F6\uFF0C\u5BB9\u5668\u81EA\u52A8\u542F\u52A8\u3002</li></ul><h2 id="\u5B89\u88C5oracle" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5oracle" aria-hidden="true">#</a> \u5B89\u88C5oracle</h2><blockquote><p>\u62C9\u53D6oracle\u955C\u50CF</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>hangzhou.aliyuncs.com/helowin/oracle_11g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u8FD0\u884C\u5BB9\u5668</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> oracle <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">1521</span>:1521 registry.cn-hangzhou.aliyuncs.com/helowin/oracle_11g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u8FDB\u5165\u5BB9\u5668</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> oracle <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u5207\u6362root\u7528\u6237</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">su</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u8F93\u5165\u5BC6\u7801</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>helowin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u7F16\u8F91\u73AF\u5883\u53D8\u91CF</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> /etc/profile

<span class="token builtin class-name">export</span> <span class="token assign-left variable">ORACLE_HOME</span><span class="token operator">=</span>/home/oracle/app/oracle/product/11.2.0/dbhome_2
<span class="token builtin class-name">export</span> <span class="token assign-left variable">ORACLE_SID</span><span class="token operator">=</span>helowin
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$ORACLE_HOME</span>/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5237\u65B0\u73AF\u5883\u53D8\u91CF</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u5207\u5230oracle\u7528\u6237</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">su</span> - oracle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u767B\u5F55sqlplus</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>sqlplus /nolog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u8FDE\u63A5\u6570\u636E\u5E93dba</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>conn /as sysdba<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u4FEE\u6539system\u7528\u6237\u7684\u5BC6\u7801</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>alter user system identified by <span class="token number">123456</span><span class="token punctuation">;</span>
alter user sys identified by <span class="token number">123456</span><span class="token punctuation">;</span>
<span class="token comment"># \u8BBE\u7F6E\u5BC6\u7801\u4E0D\u8FC7\u671F</span>
alter profile default limit PASSWORD_LIFE_TIME unlimited<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u8FDE\u63A5oracle</p></blockquote><h2 id="\u5B89\u88C5nginx" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5nginx" aria-hidden="true">#</a> \u5B89\u88C5nginx</h2><blockquote><p>\u62C9\u53D6\u955C\u50CF</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u542F\u52A8\u5BB9\u5668</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> nginx <span class="token parameter variable">--net</span><span class="token operator">=</span>host <span class="token parameter variable">--privileged</span> <span class="token parameter variable">-v</span> /data/nginx/conf.d:/etc/nginx/conf.d nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u7F16\u8F91\u914D\u7F6E\u6587\u4EF6</p></blockquote><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">vim</span> 80.conf

server</span> <span class="token punctuation">{</span>
        <span class="token comment"># \u76D1\u542C80\u7AEF\u53E3</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>

        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        		<span class="token comment"># \u5BB9\u5668\u5185\u90E8\u7684\u9759\u6001\u6587\u4EF6\u76EE\u5F55</span>
                <span class="token directive"><span class="token keyword">root</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u90E8\u7F72\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u9879\u76EE" aria-hidden="true">#</a> \u90E8\u7F72\u9879\u76EE</h1><h2 id="\u90E8\u7F72\u540E\u7AEF\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u540E\u7AEF\u9879\u76EE" aria-hidden="true">#</a> \u90E8\u7F72\u540E\u7AEF\u9879\u76EE</h2><blockquote><p>\u62C9\u53D6\u82E5\u4F9D\u524D\u540E\u7AEF\u5206\u79BB\u7248\u4EE3\u7801</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone git@gitee.com:y_project/RuoYi-Vue.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u521B\u5EFA\u6570\u636E\u5E93</p></blockquote><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>create database ruoyi;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u4FEE\u6539application-druid.yml\u914D\u7F6E\u6587\u4EF6</p></blockquote><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//10.0.4.9<span class="token punctuation">:</span>3306/ruoyi<span class="token punctuation">?</span>useUnicode=true<span class="token important">&amp;characterEncoding=utf8&amp;zeroDateTimeBehavior=convertToNull&amp;useSSL=true&amp;serverTimezone=GMT%2B8</span>
<span class="token key atrule">username</span><span class="token punctuation">:</span> root
<span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>10.0.4.9\u662F\u670D\u52A1\u5668\u7684\u5185\u7F51ip\uFF0C\u901A\u8FC7ipconfig\u53EF\u67E5\u770B\uFF0C\u4E0D\u53EF\u4F7F\u7528localhost</p><blockquote><p>\u4FEE\u6539application.yml\u914D\u7F6E\u6587\u4EF6</p></blockquote><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token comment"># redis\u5730\u5740</span>
    <span class="token key atrule">host</span><span class="token punctuation">:</span> 10.0.4.9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5982\u679C\u6CA1\u6709\u5B89\u88C5redis\uFF0C\u5219\u9700\u8981\u5B89\u88C5redis</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> redis <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u7F16\u5199Dockerfile</p></blockquote><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> openjdk:8</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 8080</span>
<span class="token instruction"><span class="token keyword">ENV</span> TZ=Asia/Shanghai</span>
<span class="token instruction"><span class="token keyword">ADD</span> ruoyi-admin.jar app.jar</span>
<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">&quot;java&quot;</span>, <span class="token string">&quot;-jar&quot;</span>, <span class="token string">&quot;app.jar&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u8FDB\u884Cmaven\u6253\u5305\uFF0C\u5E76\u4E0A\u4F20\u5230Dockerfile\u540C\u7EA7\u76EE\u5F55</p></blockquote><blockquote><p>\u6784\u5EFA\u955C\u50CF</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> ruoyi-server <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u8FD0\u884C\u5BB9\u5668</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> ruoyi-server <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 ruoyi-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u90E8\u7F72\u524D\u7AEF\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u524D\u7AEF\u9879\u76EE" aria-hidden="true">#</a> \u90E8\u7F72\u524D\u7AEF\u9879\u76EE</h2><blockquote><p>\u5B89\u88C5\u4F9D\u8D56</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u6253\u5305</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> run build:prod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u6DFB\u52A0\u5230zip\u538B\u7F29\u6587\u4EF6</p></blockquote><p>\u7136\u540E\u4E0A\u4F20\u5230\u670D\u52A1\u5668</p><p>\u670D\u52A1\u5668\u89E3\u538Bzip\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">unzip</span> dist.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u7F16\u5199nginx\u914D\u7F6E\u6587\u4EF6</p></blockquote><p>vim nginx.conf</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">8081</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
				<span class="token directive"><span class="token keyword">root</span> /dist</span><span class="token punctuation">;</span>
				<span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
				<span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span>	
     <span class="token punctuation">}</span>
  
     <span class="token directive"><span class="token keyword">location</span> /prod-api</span><span class="token punctuation">{</span>	
        <span class="token comment"># \u8F6C\u53D1\u5230\u540E\u7AEF\u5730\u5740\uFF08\u7531\u4E8E\u5BB9\u5668\u548C\u5BB9\u5668\u662F\u4E92\u76F8\u9694\u79BB\u7684\uFF0C\u6240\u4EE5\u4E0D\u80FD\u7528localhost\uFF0Clocalhost\u8868\u793A\u5BB9\u5668\u672C\u8EAB\uFF09</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://10.0.4.9:8080</span><span class="token punctuation">;</span>
        <span class="token comment"># \u53BB\u6389/prod-api</span>
        <span class="token directive"><span class="token keyword">rewrite</span> ^/prod-api/(.*)$ /<span class="token variable">$1</span> break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u7F16\u5199Dockerfile</p></blockquote><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token comment"># \u4F7F\u7528\u57FA\u7840\u955C\u50CF</span>
<span class="token instruction"><span class="token keyword">FROM</span> nginx</span>
<span class="token comment"># \u6DFB\u52A0\u9879\u76EE\u6587\u4EF6</span>
<span class="token instruction"><span class="token keyword">COPY</span> dist/ /dist/</span>
<span class="token comment"># \u6DFB\u52A0nginx\u914D\u7F6E\u6587\u4EF6</span>
<span class="token instruction"><span class="token keyword">ADD</span> nginx.conf /etc/nginx/conf.d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6784\u5EFA\u955C\u50CF</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> ruoyi-ui <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u8FD0\u884C\u5BB9\u5668</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> ruoyi-ui <span class="token parameter variable">-p</span> <span class="token number">8081</span>:8081 ruoyi-ui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BBF\u95EE\u670D\u52A1\u5668ip:8081\u5373\u53EF\u8FDB\u5165\u82E5\u4F9D\u9879\u76EE</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220615173424184.png" alt="image-20220615173424184" loading="lazy"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2><ul><li>\u90E8\u95E8\u540C\u4E8B\u6797\u54F2\u8C6A\u7684\u5206\u4EAB\u4F1A</li></ul>`,122),c=[l];function o(d,r){return s(),e("div",null,c)}const u=a(i,[["render",o],["__file","docker-action.html.vue"]]);export{u as default};
