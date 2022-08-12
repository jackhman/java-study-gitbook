import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode } from "./app.2ea2a491.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="docker\u57FA\u7840-docker\u6570\u636E\u5377\u548C\u6570\u636E\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#docker\u57FA\u7840-docker\u6570\u636E\u5377\u548C\u6570\u636E\u7BA1\u7406" aria-hidden="true">#</a> Docker\u57FA\u7840-Docker\u6570\u636E\u5377\u548C\u6570\u636E\u7BA1\u7406</h1><blockquote><p>Docker \u5BB9\u5668\u7684\u6570\u636E\u653E\u54EA\u91CC\u5462\uFF1F \u672C\u6587\u5E26\u4F60\u7406\u89E3\u5982\u4F55\u5728 Docker \u5185\u90E8\u4EE5\u53CA\u5BB9\u5668\u4E4B\u95F4\u7BA1\u7406\u6570\u636E</p></blockquote><h2 id="_1-docker-\u6570\u636E\u7BA1\u7406\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-docker-\u6570\u636E\u7BA1\u7406\u7B80\u4ECB" aria-hidden="true">#</a> 1. Docker \u6570\u636E\u7BA1\u7406\u7B80\u4ECB</h2><blockquote><p>\u5B9E\u9645\u4E0A\u6211\u4EEC\u7684\u5BB9\u5668\u5C31\u597D\u50CF\u662F\u4E00\u4E2A\u7B80\u6613\u7248\u7684\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u53EA\u4E0D\u8FC7\u7CFB\u7EDF\u4E2D\u53EA\u5B89\u88C5\u4E86\u6211\u4EEC\u7684\u7A0B\u5E8F\u8FD0\u884C\u6240\u9700\u8981\u7684\u73AF\u5883\uFF0C\u524D\u8FB9\u8BF4\u5230\u6211\u4EEC\u7684\u5BB9\u5668\u662F\u53EF\u4EE5\u5220\u9664\u7684\uFF0C\u90A3\u5982\u679C\u5220\u9664\u4E86\uFF0C\u5BB9\u5668\u4E2D\u7684\u7A0B\u5E8F\u4EA7\u751F\u7684\u9700\u8981\u6301\u4E45\u5316\u7684\u6570\u636E\u600E\u4E48\u529E\u5462\uFF1F\u5BB9\u5668\u8FD0\u884C\u7684\u65F6\u5019\u6211\u4EEC\u53EF\u4EE5\u8FDB\u5BB9\u5668\u53BB\u67E5\u770B\uFF0C\u5BB9\u5668\u4E00\u65E6\u5220\u9664\u5C31\u4EC0\u4E48\u90FD\u6CA1\u6709\u4E86\u3002</p></blockquote><p>\u6240\u4EE5\u6570\u636E\u5377\u5C31\u662F\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u7684\uFF0C\u662F<strong>\u7528\u6765\u5C06\u6570\u636E\u6301\u4E45\u5316\u5230\u6211\u4EEC\u5BBF\u4E3B\u673A\u4E0A\uFF0C\u4E0E\u5BB9\u5668\u95F4\u5B9E\u73B0\u6570\u636E\u5171\u4EAB\uFF0C\u7B80\u5355\u7684\u8BF4\u5C31\u662F\u5C06\u5BBF\u4E3B\u673A\u7684\u76EE\u5F55\u6620\u5C04\u5230\u5BB9\u5668\u4E2D\u7684\u76EE\u5F55</strong>\uFF0C\u5E94\u7528\u7A0B\u5E8F\u5728\u5BB9\u5668\u4E2D\u7684\u76EE\u5F55\u8BFB\u5199\u6570\u636E\u4F1A\u540C\u6B65\u5230\u5BBF\u4E3B\u673A\u4E0A\uFF0C\u8FD9\u6837\u5BB9\u5668\u4EA7\u751F\u7684\u6570\u636E\u5C31\u53EF\u4EE5\u6301\u4E45\u5316\u4E86\uFF0C\u6BD4\u5982\u6211\u4EEC\u7684\u6570\u636E\u5E93\u5BB9\u5668\uFF0C\u5C31\u53EF\u4EE5\u628A\u6570\u636E\u5B58\u50A8\u5230\u6211\u4EEC\u5BBF\u4E3B\u673A\u4E0A\u7684\u771F\u5B9E\u78C1\u76D8\u4E2D\u3002</p><h3 id="_1-1-\u6570\u636E\u5377-data-volume" tabindex="-1"><a class="header-anchor" href="#_1-1-\u6570\u636E\u5377-data-volume" aria-hidden="true">#</a> 1.1 \u6570\u636E\u5377(Data Volume)</h3><p>\u6570\u636E\u5377(Data Volume)\u662F\u4E00\u4E2A\u53EF\u4F9B\u4E00\u4E2A\u6216\u591A\u4E2A\u5BB9\u5668\u4F7F\u7528\u7684\u7279\u6B8A\u76EE\u5F55\uFF0C\u5B83\u7ED5\u8FC7 UFS\uFF0C\u53EF\u4EE5\u63D0\u4F9B\u5F88\u591A\u6709\u7528\u7684\u7279\u6027\uFF1A</p><ul><li>\u6570\u636E\u5377\u53EF\u4EE5\u5728\u5BB9\u5668\u4E4B\u95F4\u5171\u4EAB\u548C\u91CD\u7528</li><li>\u5BF9\u6570\u636E\u5377\u7684\u4FEE\u6539\u4F1A\u7ACB\u9A6C\u751F\u6548</li><li>\u5BF9\u6570\u636E\u5377\u7684\u66F4\u65B0\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u955C\u50CF</li><li>\u5377\u4F1A\u4E00\u76F4\u5B58\u5728\uFF0C\u76F4\u5230\u6CA1\u6709\u5BB9\u5668\u4F7F\u7528</li></ul><h4 id="_1-1-1-\u5EFA\u4E00\u4E2A\u6570\u636E\u5377" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u5EFA\u4E00\u4E2A\u6570\u636E\u5377" aria-hidden="true">#</a> 1.1.1 \u5EFA\u4E00\u4E2A\u6570\u636E\u5377</h4><blockquote><p>\u5728\u7528 docker run \u547D\u4EE4\u7684\u65F6\u5019\uFF0C\u4F7F\u7528 -v \u6807\u8BB0\u6765\u521B\u5EFA\u4E00\u4E2A\u6570\u636E\u5377\u5E76\u6302\u8F7D\u5230\u5BB9\u5668\u91CC\u3002\u5728\u4E00\u6B21 run \u4E2D\u591A\u6B21\u4F7F\u7528\u53EF\u4EE5\u6302\u8F7D\u591A\u4E2A\u6570\u636E\u5377\u3002</p></blockquote><p>\u4E0B\u9762\u521B\u5EFA\u4E00\u4E2A web \u5BB9\u5668\uFF0C\u5E76\u52A0\u8F7D\u4E00\u4E2A\u6570\u636E\u5377\u5230\u5BB9\u5668\u7684 /webapp-data \u76EE\u5F55\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@pdai ~<span class="token punctuation">]</span><span class="token comment"># docker run -d -P --name web -v /webapp-data training/webapp python app.py</span>\ne331e83e59486a131919cba8698b24eaee051a947838bb1c15c03df8b3464b97\n    \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u770B\u4E0B\u5BB9\u5668\u5185\u90E8\u662F\u5426\u751F\u6210/webapp-data\u76EE\u5F55</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@pdai ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it web /bin/bash</span>\nroot@e331e83e5948:/opt/webapp<span class="token comment"># cd /webapp-data</span>\nroot@e331e83e5948:/webapp-data<span class="token comment"># ll</span>\ntotal <span class="token number">8</span>\ndrwxr-xr-x <span class="token number">2</span> root root <span class="token number">4096</span> Feb <span class="token number">20</span> 01:24 ./\ndrwxr-xr-x <span class="token number">1</span> root root <span class="token number">4096</span> Feb <span class="token number">20</span> 01:24 <span class="token punctuation">..</span>/\nroot@e331e83e5948:/webapp-data<span class="token comment">#</span>\n    \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF1A\u4E5F\u53EF\u4EE5\u5728 Dockerfile \u4E2D\u4F7F\u7528 VOLUME \u6765\u6DFB\u52A0\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\u65B0\u7684\u5377\u5230\u7531\u8BE5\u955C\u50CF\u521B\u5EFA\u7684\u4EFB\u610F\u5BB9\u5668\u3002</p><h4 id="_1-1-2-\u6302\u8F7D\u4E00\u4E2A\u4E3B\u673A\u76EE\u5F55\u4F5C\u4E3A\u6570\u636E\u5377" tabindex="-1"><a class="header-anchor" href="#_1-1-2-\u6302\u8F7D\u4E00\u4E2A\u4E3B\u673A\u76EE\u5F55\u4F5C\u4E3A\u6570\u636E\u5377" aria-hidden="true">#</a> 1.1.2 \u6302\u8F7D\u4E00\u4E2A\u4E3B\u673A\u76EE\u5F55\u4F5C\u4E3A\u6570\u636E\u5377</h4><blockquote><p>\u4F7F\u7528 -v \u6807\u8BB0\u4E5F\u53EF\u4EE5\u6307\u5B9A\u6302\u8F7D\u4E00\u4E2A\u672C\u5730\u4E3B\u673A\u7684\u76EE\u5F55\u5230\u5BB9\u5668\u4E2D\u53BB\u3002</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@pdai ~<span class="token punctuation">]</span><span class="token comment"># docker rm -f web</span>\nweb\n<span class="token punctuation">[</span>root@pdai opt<span class="token punctuation">]</span><span class="token comment"># docker run -d --name web -v /opt/webapp-data5:/opt/webapp2 training/webapp</span>\nfce27f6ea9ce9699864644a48aed6db8b772c96be36f46bee6154d2e2c9915b9\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u9A8C\u8BC1\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@pdai opt<span class="token punctuation">]</span><span class="token comment"># docker exec -it web /bin/bash</span>\nroot@fce27f6ea9ce:/opt/webapp<span class="token comment"># cd ..</span>\nroot@fce27f6ea9ce:/opt<span class="token comment"># ls</span>\nwebapp  webapp2\nroot@fce27f6ea9ce:/opt<span class="token comment"># cd webapp2</span>\nroot@fce27f6ea9ce:/opt/webapp2<span class="token comment"># mkdir test</span>\nroot@fce27f6ea9ce:/opt/webapp2<span class="token comment"># exit</span>\n<span class="token builtin class-name">exit</span>\n<span class="token punctuation">[</span>root@pdai opt<span class="token punctuation">]</span><span class="token comment"># cd webapp-data5</span>\n<span class="token punctuation">[</span>root@pdai webapp-data5<span class="token punctuation">]</span><span class="token comment"># ll</span>\ntotal <span class="token number">4</span>\ndrwxr-xr-x <span class="token number">2</span> root root <span class="token number">4096</span> Feb <span class="token number">20</span> <span class="token number">10</span>:12 <span class="token builtin class-name">test</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u547D\u4EE4\u52A0\u8F7D\u4E3B\u673A\u7684 /opt/webapp-data5 \u76EE\u5F55\u5230\u5BB9\u5668\u7684 /opt/webapp2 \u76EE\u5F55\u3002\u8FD9\u4E2A\u529F\u80FD\u5728\u8FDB\u884C\u6D4B\u8BD5\u7684\u65F6\u5019\u5341\u5206\u65B9\u4FBF\uFF0C\u6BD4\u5982\u7528\u6237\u53EF\u4EE5\u653E\u7F6E\u4E00\u4E9B\u7A0B\u5E8F\u5230\u672C\u5730\u76EE\u5F55\u4E2D\uFF0C\u6765\u67E5\u770B\u5BB9\u5668\u662F\u5426\u6B63\u5E38\u5DE5\u4F5C\u3002<strong>\u672C\u5730\u76EE\u5F55\u7684\u8DEF\u5F84\u5FC5\u987B\u662F\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u5982\u679C\u76EE\u5F55\u4E0D\u5B58\u5728 Docker \u4F1A\u81EA\u52A8\u4E3A\u4F60\u521B\u5EFA\u5B83</strong>\u3002</p><p>*\u6CE8\u610F\uFF1ADockerfile \u663E\u7136\u662F\u4E0D\u652F\u6301\u8FD9\u79CD\u7528\u6CD5\uFF0C\u8FD9\u662F\u56E0\u4E3A Dockerfile \u662F\u4E3A\u4E86\u79FB\u690D\u548C\u5206\u4EAB\u7528\u7684, \u56E0\u4E3A\u4E0D\u540C\u64CD\u4F5C\u7CFB\u7EDF\u7684\u8DEF\u5F84\u683C\u5F0F\u4E0D\u4E00\u6837\uFF0C\u6240\u4EE5\u76EE\u524D\u8FD8\u4E0D\u80FD\u652F\u6301\u3002</p><p>\u6211\u4EEC\u5220\u9664\u5BB9\u5668\uFF0C\u770B\u4E3B\u673A\u4E0A\u6570\u636E\u662F\u5426\u4F1A\u88AB\u5220\u9664</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@pdai opt<span class="token punctuation">]</span><span class="token comment"># docker rm -f web</span>\nweb\n<span class="token punctuation">[</span>root@pdai opt<span class="token punctuation">]</span><span class="token comment"># cd /opt/webapp-data5</span>\n<span class="token punctuation">[</span>root@pdai webapp-data5<span class="token punctuation">]</span><span class="token comment"># ll</span>\ntotal <span class="token number">4</span>\ndrwxr-xr-x <span class="token number">2</span> root root <span class="token number">4096</span> Feb <span class="token number">20</span> <span class="token number">10</span>:12 <span class="token builtin class-name">test</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F88\u660E\u663E\uFF0C\u6CA1\u6709\u88AB\u5220\u9664</p><h4 id="_1-1-3-\u6302\u8F7D\u4E00\u4E2A\u672C\u5730\u4E3B\u673A\u6587\u4EF6\u4F5C\u4E3A\u6570\u636E\u5377" tabindex="-1"><a class="header-anchor" href="#_1-1-3-\u6302\u8F7D\u4E00\u4E2A\u672C\u5730\u4E3B\u673A\u6587\u4EF6\u4F5C\u4E3A\u6570\u636E\u5377" aria-hidden="true">#</a> 1.1.3 \u6302\u8F7D\u4E00\u4E2A\u672C\u5730\u4E3B\u673A\u6587\u4EF6\u4F5C\u4E3A\u6570\u636E\u5377</h4><blockquote><p>-v \u6807\u8BB0\u4E5F\u53EF\u4EE5\u4ECE\u4E3B\u673A\u6302\u8F7D\u5355\u4E2A\u6587\u4EF6\u5230\u5BB9\u5668\u4E2D</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@pdai ~<span class="token punctuation">]</span><span class="token comment"># docker run --rm -it -v ~/.bash_history:/.bash_history ubuntu /bin/bash</span>\nroot@79eca07938db:/<span class="token comment"># ll | grep .bash_history</span>\n-rw-------   <span class="token number">1</span> root root <span class="token number">19549</span> Feb <span class="token number">19</span> <span class="token number">10</span>:28 .bash_history\nroot@79eca07938db:/<span class="token comment"># exit</span>\n<span class="token builtin class-name">exit</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u5C31\u53EF\u4EE5\u8BB0\u5F55\u5728\u5BB9\u5668\u8F93\u5165\u8FC7\u7684\u547D\u4EE4\u4E86\u3002</p><p>*\u6CE8\u610F\uFF1A\u5982\u679C\u76F4\u63A5\u6302\u8F7D\u4E00\u4E2A\u6587\u4EF6\uFF0C\u5F88\u591A\u6587\u4EF6\u7F16\u8F91\u5DE5\u5177\uFF0C\u5305\u62EC <code>vi</code> \u6216\u8005 <code>sed --in-place</code>\uFF0C\u53EF\u80FD\u4F1A\u9020\u6210\u6587\u4EF6 inode \u7684\u6539\u53D8\uFF0C\u4ECE Docker 1.1 .0\u8D77\uFF0C\u8FD9\u4F1A\u5BFC\u81F4\u62A5\u9519\u8BEF\u4FE1\u606F\u3002\u6240\u4EE5\u6700\u7B80\u5355\u7684\u529E\u6CD5\u5C31\u76F4\u63A5\u6302\u8F7D\u6587\u4EF6\u7684\u7236\u76EE\u5F55\u3002</p><h3 id="_1-2-\u6570\u636E\u5377\u5BB9\u5668-data-volume-container" tabindex="-1"><a class="header-anchor" href="#_1-2-\u6570\u636E\u5377\u5BB9\u5668-data-volume-container" aria-hidden="true">#</a> 1.2 \u6570\u636E\u5377\u5BB9\u5668(Data Volume Container)</h3><blockquote><p>\u4E0A\u9762\u8BB2\u8FF0\u7684\u662F\u4E3B\u673A\u548C\u5BB9\u5668\u4E4B\u95F4\u5171\u4EAB\u6570\u636E\uFF0C\u90A3\u4E48\u5982\u4F55\u4F60\u6709\u4E00\u4E9B\u6301\u7EED\u66F4\u65B0\u7684\u6570\u636E\u9700\u8981\u5728\u5BB9\u5668\u4E4B\u95F4\u5171\u4EAB\uFF0C\u6700\u597D\u7684\u65B9\u6CD5\u5C31\u662F\u521B\u5EFA\u6570\u636E\u5377\u5BB9\u5668\u3002</p></blockquote><p>\u6570\u636E\u5377\u5BB9\u5668\uFF0C\u5176\u5B9E\u5C31\u662F\u4E00\u4E2A\u6B63\u5E38\u7684\u5BB9\u5668\uFF0C\u4E13\u95E8\u7528\u6765\u63D0\u4F9B\u6570\u636E\u5377\u4F9B\u5176\u5B83\u5BB9\u5668\u6302\u8F7D\u7684\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@pdai ~<span class="token punctuation">]</span><span class="token comment"># docker run -d -v /dbdata --name dbdata training/postgres</span>\n70966085a85b05dd741a44a96725e2e44f146cc404b1b4e3aa3e519cd546c6b4\n<span class="token punctuation">[</span>root@pdai ~<span class="token punctuation">]</span><span class="token comment"># docker run -d --volumes-from dbdata --name db1 training/postgres</span>\n4c92240096d919724b233e1a5cfca94b5ceb0505e43262a7121cb83cfd8542f6\n<span class="token punctuation">[</span>root@pdai ~<span class="token punctuation">]</span><span class="token comment"># docker run -d --volumes-from dbdata --name db2 training/postgres</span>\n25246ebfae2f8437316b10d7eac3b34c1bd1522f50ba81651aec198bc79415a2\n<span class="token punctuation">[</span>root@pdai ~<span class="token punctuation">]</span><span class="token comment"># docker ps -a</span>\nCONTAINER ID        IMAGE               COMMAND                  CREATED              STATUS              PORTS               NAMES\n70966085a85b        training/postgres   <span class="token string">&quot;su postgres -c &#39;/us\u2026&quot;</span>   <span class="token number">46</span> seconds ago       Up <span class="token number">45</span> seconds       <span class="token number">5432</span>/tcp            dbdata\n25246ebfae2f        training/postgres   <span class="token string">&quot;su postgres -c &#39;/us\u2026&quot;</span>   About a minute ago   Up About a minute   <span class="token number">5432</span>/tcp            db2\n4c92240096d9        training/postgres   <span class="token string">&quot;su postgres -c &#39;/us\u2026&quot;</span>   <span class="token number">2</span> minutes ago        Up <span class="token number">2</span> minutes        <span class="token number">5432</span>/tcp            db1\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-volumes-from \u53EF\u4EE5\u591A\u6B21\u4F7F\u7528\u6765 mount \u591A\u4E2Aconatainer\u91CC\u7684\u591A\u4E2Avolumes\u3002</p><p>\u8FD9\u4E2A\u64CD\u4F5C\u662F\u94FE\u5F0F\u7684\uFF0C \u6211\u4EEC\u5728db1 \u4E2D\u901A\u8FC7 --volumes-from mount\u8FDB\u6765\u7684 volume\u53EF\u4EE5\u7EE7\u7EED\u88AB\u5176\u4ED6container\u4F7F\u7528</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@pdai ~<span class="token punctuation">]</span><span class="token comment"># docker run -d --name db3 --volumes-from db1 training/postgres</span>\n44d0719377e86e3080b26d22adcb6055de93033dc9509ca2ecd8be2c93dc33b5\n<span class="token punctuation">[</span>root@pdai ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES\n44d0719377e8        training/postgres   <span class="token string">&quot;su postgres -c &#39;/us\u2026&quot;</span>   <span class="token number">3</span> seconds ago       Up <span class="token number">2</span> seconds        <span class="token number">5432</span>/tcp            db3\n70966085a85b        training/postgres   <span class="token string">&quot;su postgres -c &#39;/us\u2026&quot;</span>   <span class="token number">3</span> minutes ago       Up <span class="token number">3</span> minutes        <span class="token number">5432</span>/tcp            dbdata\n25246ebfae2f        training/postgres   <span class="token string">&quot;su postgres -c &#39;/us\u2026&quot;</span>   <span class="token number">4</span> minutes ago       Up <span class="token number">4</span> minutes        <span class="token number">5432</span>/tcp            db2\n4c92240096d9        training/postgres   <span class="token string">&quot;su postgres -c &#39;/us\u2026&quot;</span>   <span class="token number">4</span> minutes ago       Up <span class="token number">4</span> minutes        <span class="token number">5432</span>/tcp            db1\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4F7F\u7528 --volumes-from \u53C2\u6570\u6240\u6302\u8F7D\u6570\u636E\u5377\u7684\u5BB9\u5668\u81EA\u5DF1\u5E76\u4E0D\u9700\u8981\u4FDD\u6301\u5728\u8FD0\u884C\u72B6\u6001</strong>\u3002</p><p><strong>\u5982\u679C\u5220\u9664\u4E86\u6302\u8F7D\u7684\u5BB9\u5668\uFF08\u5305\u62EC dbdata\u3001db1 \u548C db2\uFF09\uFF0C\u6570\u636E\u5377\u5E76\u4E0D\u4F1A\u88AB\u81EA\u52A8\u5220\u9664\u3002\u5982\u679C\u8981\u5220\u9664\u4E00\u4E2A\u6570\u636E\u5377\uFF0C\u5FC5\u987B\u5728\u5220\u9664\u6700\u540E\u4E00\u4E2A\u8FD8\u6302\u8F7D\u7740\u5B83\u7684\u5BB9\u5668\u65F6\u4F7F\u7528 <code>docker rm -v</code> \u547D\u4EE4\u6765\u6307\u5B9A\u540C\u65F6\u5220\u9664\u5173\u8054\u7684\u5BB9\u5668\u3002 \u8FD9\u53EF\u4EE5\u8BA9\u7528\u6237\u5728\u5BB9\u5668\u4E4B\u95F4\u5347\u7EA7\u548C\u79FB\u52A8\u6570\u636E\u5377</strong>\u3002</p><h3 id="_1-3-\u6570\u636E\u5907\u4EFD\u3001\u6062\u590D\u3001\u8FC1\u79FB\u6570\u636E\u5377" tabindex="-1"><a class="header-anchor" href="#_1-3-\u6570\u636E\u5907\u4EFD\u3001\u6062\u590D\u3001\u8FC1\u79FB\u6570\u636E\u5377" aria-hidden="true">#</a> 1.3 \u6570\u636E\u5907\u4EFD\u3001\u6062\u590D\u3001\u8FC1\u79FB\u6570\u636E\u5377</h3><p>\u53EF\u4EE5\u5229\u7528\u6570\u636E\u5377\u5BF9\u5176\u4E2D\u7684\u6570\u636E\u8FDB\u884C\u8FDB\u884C\u5907\u4EFD\u3001\u6062\u590D\u548C\u8FC1\u79FB\u3002</p><h4 id="_1-3-1-\u5907\u4EFD" tabindex="-1"><a class="header-anchor" href="#_1-3-1-\u5907\u4EFD" aria-hidden="true">#</a> 1.3.1 \u5907\u4EFD</h4><p>\u9996\u5148\u4F7F\u7528 --volumes-from \u6807\u8BB0\u6765\u521B\u5EFA\u4E00\u4E2A\u52A0\u8F7D dbdata \u5BB9\u5668\u5377\u7684\u5BB9\u5668\uFF0C\u5E76\u4ECE\u672C\u5730\u4E3B\u673A\u6302\u8F7D\u5F53\u524D\u5230\u5BB9\u5668\u7684 /backup \u76EE\u5F55\u3002\u547D\u4EE4\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@pdai ~<span class="token punctuation">]</span><span class="token comment"># docker run --volumes-from dbdata -v $(pwd):/backup ubuntu tar cvf /backup/backup.tar /dbdata</span>\ntar: Removing leading `/&#39; from member names\n/dbdata/\n<span class="token punctuation">[</span>root@pdai ~<span class="token punctuation">]</span><span class="token comment"># ll | grep backup.tar</span>\n-rw-r--r-- <span class="token number">1</span> root root    <span class="token number">10240</span> Feb <span class="token number">20</span> <span class="token number">12</span>:39 backup.tar\n<span class="token punctuation">[</span>root@pdai ~<span class="token punctuation">]</span><span class="token comment">#</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BB9\u5668\u542F\u52A8\u540E\uFF0C\u4F7F\u7528\u4E86 tar \u547D\u4EE4\u6765\u5C06 dbdata \u5377\u5907\u4EFD\u4E3A\u672C\u5730\u7684 /backup/backup.tar\u3002</p><h4 id="_1-3-2-\u6062\u590D" tabindex="-1"><a class="header-anchor" href="#_1-3-2-\u6062\u590D" aria-hidden="true">#</a> 1.3.2 \u6062\u590D</h4><p>\u5982\u679C\u8981\u6062\u590D\u6570\u636E\u5230\u4E00\u4E2A\u5BB9\u5668</p><p>\u9996\u5148\u521B\u5EFA\u4E00\u4E2A\u5E26\u6709\u6570\u636E\u5377\u7684\u5BB9\u5668 dbdata2</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@pdai ~<span class="token punctuation">]</span><span class="token comment"># docker run -v /dbdata --name dbdata2 ubuntu /bin/bash</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u521B\u5EFA\u53E6\u4E00\u4E2A\u5BB9\u5668\uFF0C\u6302\u8F7D dbdata2 \u7684\u5BB9\u5668\uFF0C\u5E76\u4F7F\u7528 untar \u89E3\u538B\u5907\u4EFD\u6587\u4EF6\u5230\u6302\u8F7D\u7684\u5BB9\u5668\u5377\u4E2D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@pdai ~<span class="token punctuation">]</span><span class="token comment"># docker run --volumes-from dbdata2 -v $(pwd):/backup ubuntu tar xvf /backup/backup.tar</span>\ndbdata/\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 52);
const _hoisted_53 = {
  href: "https://pdai.tech/md/devops/docker/docker-06-data.html#%E5%BB%BA%E4%B8%80%E4%B8%AA%E6%95%B0%E6%8D%AE%E5%8D%B7",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("strong", null, "Docker\u57FA\u7840 - Docker\u6570\u636E\u5377\u548C\u6570\u636E\u7BA1\u7406", -1);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_53, [
        _hoisted_54,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var Docker__Docker_________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Docker\u57FA\u7840-Docker\u6570\u636E\u5377\u548C\u6570\u636E\u7BA1\u7406.html.vue"]]);
export { Docker__Docker_________html as default };
