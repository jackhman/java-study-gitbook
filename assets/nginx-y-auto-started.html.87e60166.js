import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,a as e,b as d,d as t,e as r,r as l}from"./app.c0d093c6.js";const c={},u=t(`<h1 id="nginx\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#nginx\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8" aria-hidden="true">#</a> nginx\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8</h1><blockquote><p>centos 7\u5F00\u673A\u81EA\u542F\u52A8\u6709\u4E24\u79CD\u4E0D\u540C\u7684\u8BBE\u7F6E\u65B9\u5F0F\uFF0C\u5982\u679C\u662Fyum\u76F4\u63A5\u5B89\u88C5\u7684\u8F6F\u4EF6\u670D\u52A1\uFF0C\u5219\u76F4\u63A5\u5F00\u542F\u5373\u53EF\uFF0C\u5982\u679C\u662F\u6E90\u7801\u7F16\u8BD1\u5B89\u88C5\u7684\uFF0C\u5219\u9700\u8981\u5728\u7CFB\u7EDF\u670D\u52A1\uFF08system\uFF09\u521B\u5EFAservice\u6587\u4EF6\uFF0C\u7136\u540E\u624D\u80FD\u8BBE\u7F6E\u3002</p></blockquote><h2 id="_1-\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#_1-\u524D\u8A00" aria-hidden="true">#</a> 1. \u524D\u8A00</h2><p>centos 7\u4EE5\u4E0A\u662F\u7528Systemd\u8FDB\u884C\u7CFB\u7EDF\u521D\u59CB\u5316\u7684\uFF0CSystemd \u662F Linux \u7CFB\u7EDF\u4E2D\u6700\u65B0\u7684\u521D\u59CB\u5316\u7CFB\u7EDF\uFF08init\uFF09\uFF0C\u5B83\u4E3B\u8981\u7684\u8BBE\u8BA1\u76EE\u6807\u662F\u514B\u670D sysvinit \u56FA\u6709\u7684\u7F3A\u70B9\uFF0C\u63D0\u9AD8\u7CFB\u7EDF\u7684\u542F\u52A8\u901F\u5EA6\u3002</p><h2 id="_2-\u5B89\u88C5\u65B9\u5F0F\u4E3A-yum\u76F4\u63A5\u5B89\u88C5nginx\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5\u65B9\u5F0F\u4E3A-yum\u76F4\u63A5\u5B89\u88C5nginx\u670D\u52A1" aria-hidden="true">#</a> 2. \u5B89\u88C5\u65B9\u5F0F\u4E3A\uFF1Ayum\u76F4\u63A5\u5B89\u88C5Nginx\u670D\u52A1</h2><p>Systemd\u670D\u52A1\u6587\u4EF6\u4EE5<code>.service</code>\u7ED3\u5C3E\uFF0C\u6BD4\u5982\u73B0\u5728\u8981\u5EFA\u7ACBnginx\u4E3A\u5F00\u673A\u542F\u52A8\uFF0C\u5982\u679C\u7528<code>yum install</code>\u547D\u4EE4\u5B89\u88C5\u7684\uFF0Cyum\u547D\u4EE4\u4F1A\u81EA\u52A8\u521B\u5EFA<code>nginx.service</code>\u6587\u4EF6\uFF0C\u76F4\u63A5\u7528\u547D\u4EE4:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemcel <span class="token builtin class-name">enable</span> nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-\u5B89\u88C5\u65B9\u5F0F\u4E3A-\u6E90\u7801\u7F16\u8BD1\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_3-\u5B89\u88C5\u65B9\u5F0F\u4E3A-\u6E90\u7801\u7F16\u8BD1\u5B89\u88C5" aria-hidden="true">#</a> 3.\u5B89\u88C5\u65B9\u5F0F\u4E3A\uFF1A \u6E90\u7801\u7F16\u8BD1\u5B89\u88C5</h2><p>\u5728\u8FD9\u91CC\u6211\u662F\u7528\u6E90\u7801\u7F16\u8BD1\u5B89\u88C5\u7684\uFF0C\u6240\u4EE5\u8981\u624B\u52A8\u521B\u5EFA<code>nginx.service</code>\u670D\u52A1\u6587\u4EF6\u3002\u5F00\u673A\u6CA1\u6709\u767B\u9646\u60C5\u51B5\u4E0B\u5C31\u80FD\u8FD0\u884C\u7684\u7A0B\u5E8F\uFF0C\u5B58\u5728\u7CFB\u7EDF\u670D\u52A1\uFF08system\uFF09\u91CC\uFF0C\u5373\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/lib/systemd/system/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-1-\u521B\u5EFAnginx-service\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-1-\u521B\u5EFAnginx-service\u6587\u4EF6" aria-hidden="true">#</a> 3.1 \u521B\u5EFAnginx.service\u6587\u4EF6</h3><p>\u5728\u7CFB\u7EDF\u670D\u52A1\u76EE\u5F55\u91CC\u521B\u5EFAnginx.service\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vim /lib/systemd/system/nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5199\u5165\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Unit]
Description=nginx
After=network.target
  
[Service]
Type=forking
ExecStart=/usr/local/nginx/sbin/nginx
ExecReload=/usr/local/nginx/sbin/nginx -s reload
ExecStop=/usr/local/nginx/sbin/nginx -s quit
PrivateTmp=true
  
[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>[Unit]:\u670D\u52A1\u7684\u8BF4\u660E</strong></p><p>Description:\u63CF\u8FF0\u670D\u52A1 After:\u63CF\u8FF0\u670D\u52A1\u7C7B\u522B [Service]\u670D\u52A1\u8FD0\u884C\u53C2\u6570\u7684\u8BBE\u7F6E Type=forking\u662F\u540E\u53F0\u8FD0\u884C\u7684\u5F62\u5F0F ExecStart\u4E3A\u670D\u52A1\u7684\u5177\u4F53\u8FD0\u884C\u547D\u4EE4 ExecReload\u4E3A\u91CD\u542F\u547D\u4EE4 ExecStop\u4E3A\u505C\u6B62\u547D\u4EE4 PrivateTmp=True\u8868\u793A\u7ED9\u670D\u52A1\u5206\u914D\u72EC\u7ACB\u7684\u4E34\u65F6\u7A7A\u95F4 \u6CE8\u610F\uFF1A[Service]\u7684\u542F\u52A8\u3001\u91CD\u542F\u3001\u505C\u6B62\u547D\u4EE4\u5168\u90E8\u8981\u6C42\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84 [Install]\u8FD0\u884C\u7EA7\u522B\u4E0B\u670D\u52A1\u5B89\u88C5\u7684\u76F8\u5173\u8BBE\u7F6E\uFF0C\u53EF\u8BBE\u7F6E\u4E3A\u591A\u7528\u6237\uFF0C\u5373\u7CFB\u7EDF\u8FD0\u884C\u7EA7\u522B\u4E3A3</p><h3 id="_3-2-\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#_3-2-\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8" aria-hidden="true">#</a> 3.2 \u8BBE\u7F6E\u5F00\u673A\u542F\u52A8</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl enable nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-3-\u67E5\u770Bnginx\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_3-3-\u67E5\u770Bnginx\u72B6\u6001" aria-hidden="true">#</a> 3.3 \u67E5\u770Bnginx\u72B6\u6001</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl status nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-4-\u5176\u4ED6\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_3-4-\u5176\u4ED6\u547D\u4EE4" aria-hidden="true">#</a> 3.4 \u5176\u4ED6\u547D\u4EE4</h3><p>\u542F\u52A8nginx\u670D\u52A1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl start nginx.service\u3000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl enable nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u505C\u6B62\u5F00\u673A\u81EA\u542F\u52A8</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl disable nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770B\u670D\u52A1\u5F53\u524D\u72B6\u6001</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl status nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u91CD\u65B0\u542F\u52A8\u670D\u52A1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl status nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770B\u6240\u6709\u5DF2\u542F\u52A8\u7684\u670D\u52A1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl list-units --type=service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,35),v={href:"https://segmentfault.com/a/1190000022665540",target:"_blank",rel:"noopener noreferrer"},o=r("CentOS7.5 \u8BBE\u7F6E Nginx \u5F00\u673A\u81EA\u542F\u52A8");function m(x,g){const n=l("ExternalLinkIcon");return s(),a("div",null,[u,e("p",null,[e("a",v,[o,d(n)])])])}const p=i(c,[["render",m],["__file","nginx-y-auto-started.html.vue"]]);export{p as default};
