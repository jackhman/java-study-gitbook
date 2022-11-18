import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as e,a as n,b as o,d as p,e as i,r as c}from"./app.c0d093c6.js";const l={},u=p(`<h1 id="rabbitmq\u96C6\u7FA4-\u96C6\u7FA4\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#rabbitmq\u96C6\u7FA4-\u96C6\u7FA4\u642D\u5EFA" aria-hidden="true">#</a> RabbitMQ\u96C6\u7FA4 - \u96C6\u7FA4\u642D\u5EFA</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u5355\u673A\u95EE\u9898\u5C31\u662F\u4E0D\u80FD\u9AD8\u53EF\u7528\uFF0C\u541E\u5410\u91CF\u6709\u74F6\u9888\u3001\u5B58\u50A8\u6709\u74F6\u9888\u3002\u642D\u5EFA\u96C6\u7FA4\u624D\u80FD\u89E3\u51B3\u8FD9\u4E9B</p><p>\u4F46\u662F RabbitMQ \u96C6\u7FA4\u4E0D\u80FD\u4FDD\u8BC1\u6D88\u606F\u7684\u4E07\u65E0\u4E00\u5931\uFF0C\u5F53\u96C6\u7FA4\u4E2D\u4E00\u4E2A RabbitMQ \u8282\u70B9\u5D29\u6E83\u65F6\uFF0C\u8BE5\u8282\u70B9\u4E0A\u7684\u6240\u6709\u961F\u5217\u4E2D\u7684\u6D88\u606F\u4E5F\u4F1A\u4E22\u5931\u3002RabbitMQ \u96C6\u7FA4\u4E2D\u7684\u6240\u6709\u8282\u70B9\u90FD\u4F1A\u5907\u4EFD\u6240\u6709\u7684\u5143\u6570\u636E\u4FE1\u606F\uFF0C\u5305\u62EC\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><ul><li>\u961F\u5217\u5143\u6570\u636E\uFF1A\u961F\u5217\u540D\u79F0\u548C\u5C5E\u6027</li><li>\u4EA4\u6362\u5668\u5143\u6570\u636E\uFF1A\u4EA4\u6362\u5668\u540D\u79F0\u548C\u5C5E\u6027</li><li>\u7ED1\u5B9A\u5173\u7CFB\u5143\u6570\u636E\uFF1A\u4EA4\u6362\u5668\u4E0E\u961F\u5217\u6216\u4EA4\u6362\u5668\u4E0E\u4EA4\u6362\u5668\u4E4B\u95F4\u7684\u7ED1\u5B9A\u5173\u7CFB</li><li>vhost \u5143\u6570\u636E\uFF1A\u4E3A vhost \u5185\u7684\u961F\u5217\u3001\u4EA4\u6362\u5668\u548C\u7ED1\u5B9A\u63D0\u4F9B\u547D\u540D\u7A7A\u95F4\u53CA\u5B89\u5168\u5C5E\u6027</li></ul><p>\u4F46\u662F\u4E0D\u4F1A\u5907\u4EFD\u6D88\u606F\uFF08\u53EF\u4EE5\u901A\u8FC7\u7279\u6B8A\u7684\u955C\u50CF\u961F\u5217\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF09\u3002</p><p>\u57FA\u4E8E\u5B58\u50A8\u7A7A\u95F4\u548C\u6027\u80FD\u7684\u8003\u8651\uFF0C \u5728 RabbitMQ \u96C6\u7FA4\u4E2D <strong>\u521B\u5EFA\u961F\u5217</strong>\uFF0C\u96C6\u7FA4\u53EA\u4F1A\u5728 <strong>\u5355\u4E2A\u8282\u70B9</strong> \u4E0A\u521B\u5EFA\u961F\u5217\u7684\u8FDB\u7A0B\u5E76\u5305\u542B\u5B8C\u6574\u7684\u961F\u5217\u4FE1\u606F\uFF08\u5143\u6570\u636E\u3001\u72B6\u6001\u3001\u5185\u5BB9\uFF09\uFF0C\u8FD9\u6837\u53EA\u6709 **\u961F\u5217\u7684\u5BBF\u4E3B\u8282\u70B9 **\u77E5\u9053\u961F\u5217\u7684\u6240\u6709\u4FE1\u606F\uFF0C<strong>\u5176\u4ED6\u8282\u70B9\u53EA\u77E5\u9053\u961F\u5217\u7684\u5143\u6570\u636E</strong> \u548C <strong>\u6307\u5411\u8BE5\u961F\u5217\u5B58\u5728\u7684\u90A3\u4E2A\u8282\u70B9\u7684\u6307\u9488</strong>\u3002\u56E0\u6B64\u5F53\u96C6\u7FA4\u8282\u70B9\u5D29\u6E83\u65F6\uFF0C\u8BE5\u8282\u70B9\u7684\u961F\u5217\u8FDB\u7A0B\u548C\u5173\u8054\u7684\u7ED1\u5B9A\u90FD\u4F1A\u6D88\u5931\u3002\u8BA2\u9605\u8FD9\u4E2A\u961F\u5217\u7684\u4E0A\u7684\u6D88\u8D39\u8005\u4E5F\u4F1A\u4E22\u5931\u6240\u8BA2\u9605\u7684\u4FE1\u606F\uFF0C\u5E76\u4E14\u4EFB\u4F55\u5339\u914D\u8BE5\u961F\u5217\u7ED1\u5B9A\u4FE1\u606F\u7684\u65B0\u6D88\u606F\u4E5F\u4F1A\u6D88\u5931\u3002</p><p><strong>\u4EA4\u6362\u5668</strong> \u5176\u5B9E\u53EA\u662F\u4E00\u4E2A\u540D\u79F0\u548C\u7ED1\u5B9A\u5217\u8868\uFF0C\u5F53\u6D88\u606F\u53D1\u5E03\u5230\u4EA4\u6362\u5668\u65F6\uFF0C\u5B9E\u9645\u4E0A\u662F\u7531 <strong>\u6240\u8FDE\u63A5\u7684\u4FE1\u9053</strong> \u5C06 <strong>\u6D88\u606F\u4E0A\u7684\u8DEF\u7531\u952E\u540C\u4EA4\u6362\u5668\u7684\u7ED1\u5B9A\u5217\u8868\u8FDB\u884C\u6BD4\u8F83</strong>\uFF0C\u7136\u540E\u518D\u8DEF\u7531\u6D88\u606F\u3002\u5F53\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u4EA4\u6362\u5668\u65F6\uFF0CRabbitMQ \u8981\u505A\u7684\u662F <strong>\u5C06\u7ED1\u5B9A\u5217\u8868\u6DFB\u52A0\u5230\u96C6\u7FA4\u4E2D\u7684\u6240\u6709\u8282\u70B9\u4E0A</strong>\uFF0C\u8FD9\u6837\uFF0C\u6BCF\u4E2A\u8282\u70B9\u7684\u6BCF\u6761\u4FE1\u9053\u90FD\u53EF\u4EE5\u8BBF\u95EE\u5230\u65B0\u7684\u4EA4\u6362\u5668\u4E86</p><h2 id="_2-\u591A\u673A\u591A\u8282\u70B9\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-\u591A\u673A\u591A\u8282\u70B9\u914D\u7F6E" aria-hidden="true">#</a> 2. \u591A\u673A\u591A\u8282\u70B9\u914D\u7F6E</h2><p>\u6BCF\u53F0\u673A\u5668\u4E0A\u90E8\u7F72\u4E00\u4E2A RabbitMQ\uFF0C\u7EC4\u6210\u7684 RabbitMQ \u96C6\u7FA4\u3002</p><p>\u7531\u4E8E RabbitMQ \u96C6\u7FA4\u5BF9\u5EF6\u8FDF\u975E\u5E38\u654F\u611F\uFF0C\u9700\u8981\u5728\u5C40\u57DF\u7F51\u4E2D\u7EC4\u6210\u96C6\u7FA4\uFF0C\u5E7F\u57DF\u7F51\u96C6\u7FA4\u53EF\u4EE5\u4F7F\u7528 Federation \u6216\u5219 Shovel \u6765\u4EE3\u66FF\u3002</p><h3 id="_2-1-\u90E8\u7F72\u8282\u89C4\u5212" tabindex="-1"><a class="header-anchor" href="#_2-1-\u90E8\u7F72\u8282\u89C4\u5212" aria-hidden="true">#</a> 2.1 \u90E8\u7F72\u8282\u89C4\u5212\uFF1A</h3><table><thead><tr><th>\u540D\u79F0</th><th>ip</th></tr></thead><tbody><tr><td>node1</td><td>192.168.0.2</td></tr><tr><td>node2</td><td>192.168.0.3</td></tr><tr><td>node3</td><td>192.168.0.4</td></tr></tbody></table><p>\u5728\u4E09\u53F0\u673A\u5668\u4E0A\u5B89\u88C5\u597D RabbitMQ\u3002\u7136\u540E\u4FEE\u6539\u5404\u4E2A\u8282\u70B9\u7684 <code>/etc/hosts</code> \u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BA9\u673A\u5668\u4E4B\u95F4\u901A\u8FC7 hostname \u8BBF\u95EE</span>
<span class="token function">vim</span> /etc/hosts

<span class="token number">192.168</span>.110.10 node1
<span class="token number">192.168</span>.110.12 node2
<span class="token number">192.168</span>.110.13 node3

<span class="token comment"># \u8BBE\u7F6E\u6BCF\u53F0\u673A\u5668\u7684 hostname\uFF0C\u7528 hostname \u547D\u4EE4</span>
hostnamectl  set-hostname node1

<span class="token comment"># \u914D\u7F6E\u6BCF\u4E2A\u8282\u70B9\u4E0A\u7684 nodename\uFF0C\u5185\u5BB9\u914D\u7F6E\u4E3A\u4E0A\u9762\u8BBE\u7F6E\u7684 hostname</span>
/opt/rabbitmq/etc/rabbitmq/rabbitmq-env.conf
<span class="token comment"># \u5185\u5BB9\u4E3A\u5BF9\u5E94\u7684 hostname</span>
<span class="token assign-left variable">NODENAME</span><span class="token operator">=</span>rabbit@node1

<span class="token comment"># \u4FEE\u6539\u5B8C\u6210\u4E4B\u540E\uFF0C\u91CD\u542F\u673A\u5668\u8BA9 hostname \u751F\u6548</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7F16\u8F91 RabbitMQ \u7684 cookie \u6587\u4EF6\uFF0C<strong>\u786E\u4FDD\u5404\u4E2A\u8282\u70B9\u7684 cookie \u6587\u4EF6\u4F7F\u7528\u7684\u662F\u540C\u4E00\u4E2A\u503C</strong>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># cookie \u6587\u4EF6\u9ED8\u8BA4\u8DEF\u5F84\u5728\uFF1A/var/lib/rabbitmq/.erlang.cookie</span>
<span class="token comment"># \u6216\u5219\u5728\uFF1A $HOME/.erlang.cookie</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># vim /root/.erlang.cookie</span>
TGPVCOQIXBHWWDHUCJGP
<span class="token comment"># \u53EF\u4EE5\u7528\u5176\u4E2D\u7684\u4E00\u53F0\u4E0A\u9762\u7684 cookie \u590D\u5236\u5230\u5176\u4ED6\u8282\u70B9\u4E0A</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cookie \u76F8\u5F53\u4E8E\u5BC6\u5319\u4EE4\u724C\uFF0C\u6240\u4EE5\u8981\u4E00\u81F4\u3002</p><h3 id="_2-2-\u914D\u7F6E\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#_2-2-\u914D\u7F6E\u96C6\u7FA4" aria-hidden="true">#</a> 2.2 \u914D\u7F6E\u96C6\u7FA4</h3><p>\u53EF\u4EE5\u901A\u8FC7\uFF1A</p><ul><li>rabbitmqctl \uFF1A\u5E38\u7528\uFF0C\u672C\u8282\u8BB2\u89E3\u8FD9\u79CD</li><li>rabbitmq.config \u914D\u7F6E\u6587\u4EF6</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5148\u542F\u52A8\u4E09\u4E2A\u8282\u70B9\u7684 RabbitMQ \u670D\u52A1</span>
rabbitmq-server <span class="token parameter variable">-detached</span>

<span class="token comment"># \u76EE\u524D\u8FD9\u4E09\u4E2A\u8282\u70B9\u90FD\u662F\u72EC\u7ACB\u7684\u5355\u8282\u70B9\u96C6\u7FA4</span>
<span class="token comment"># \u53EF\u4EE5\u67E5\u770B\u4ED6\u4EEC\u7684\u96C6\u7FA4\u72B6\u6001\u4FE1\u606F</span>
<span class="token punctuation">[</span>root@study rabbitmq<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl cluster_status</span>
Cluster status of <span class="token function">node</span> node1@node1
<span class="token punctuation">[</span><span class="token punctuation">{</span>nodes,<span class="token punctuation">[</span><span class="token punctuation">{</span>disc,<span class="token punctuation">[</span>node1@node1<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>running_nodes,<span class="token punctuation">[</span>node1@node1<span class="token punctuation">]</span><span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>cluster_name,<span class="token operator">&lt;&lt;</span><span class="token string">&quot;node1@node1&quot;</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>partitions,<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>alarms,<span class="token punctuation">[</span><span class="token punctuation">{</span>node1@node1,<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">]</span>


<span class="token comment"># \u7136\u540E\u4EE5 node1 \u4E3A\u57FA\u51C6\uFF0C\u5C06\u5176\u4ED6\u4E24\u4E2A\u8282\u70B9\u52A0\u5165\u5230 node1 \u8282\u70B9\u7684\u96C6\u7FA4\u4E2D</span>
<span class="token comment"># \u52A0\u5165\u8981\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u5728\u5176\u4ED6\u4E24\u4E2A\u8282\u70B9\u4E0A\u6267\u884C</span>
<span class="token comment"># 0. \u8981\u5148\u6253\u5F00\u6BCF\u53F0\u673A\u5668\u4E0A\u7684 4369 \u7AEF\u53E3\uFF0C\u52A0\u5165\u96C6\u7FA4\u9700\u8981\u8BBF\u95EE\u8FD9\u4E2A\u7AEF\u53E3</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">4369</span>/tcp <span class="token parameter variable">--permanent</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">25672</span>/tcp <span class="token parameter variable">--permanent</span>
firewall-cmd <span class="token parameter variable">--reload</span>

<span class="token comment"># 1. \u505C\u6B62 rabbitmq \u5E94\u7528</span>
rabbitmqctl stop_app
<span class="token comment"># 2. \u91CD\u7F6E</span>
rabbitmqctl reset
<span class="token comment"># 3. \u52A0\u5165\u96C6\u7FA4</span>
<span class="token punctuation">[</span>root@node2 ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl join_cluster rabbit@node1</span>
Clustering <span class="token function">node</span> rabbit@node2 with rabbit@node1
<span class="token comment"># 3. \u542F\u52A8 rabbitmq \u5E94\u7528</span>
rabbitmqctl start_app

<span class="token comment"># \u518D\u6B21\u67E5\u770B\u96C6\u7FA4\u72B6\u6001</span>
<span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl cluster_status</span>
Cluster status of <span class="token function">node</span> rabbit@node1
<span class="token punctuation">[</span><span class="token punctuation">{</span>nodes,<span class="token punctuation">[</span><span class="token punctuation">{</span>disc,<span class="token punctuation">[</span>rabbit@node1,rabbit@node2,rabbit@node3<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>running_nodes,<span class="token punctuation">[</span>rabbit@node2,rabbit@node3,rabbit@node1<span class="token punctuation">]</span><span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>cluster_name,<span class="token operator">&lt;&lt;</span><span class="token string">&quot;rabbit@node1&quot;</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>partitions,<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>alarms,<span class="token punctuation">[</span><span class="token punctuation">{</span>rabbit@node2,<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span>,<span class="token punctuation">{</span>rabbit@node3,<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span>,<span class="token punctuation">{</span>rabbit@node1,<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
 <span class="token comment"># \u53D1\u73B0\u5DF2\u7ECF\u52A0\u5165\u8FDB\u6765\u4E86</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-\u95ED\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#_2-3-\u95ED\u96C6\u7FA4" aria-hidden="true">#</a> 2.3 \u95ED\u96C6\u7FA4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5173\u95ED node2 \u8282\u70B9\u7684\u5E94\u7528</span>
<span class="token punctuation">[</span>root@node2 ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl stop_app</span>
Stopping rabbit application on <span class="token function">node</span> rabbit@node2

<span class="token comment"># \u7136\u540E\u67E5\u770B\u96C6\u7FA4\u72B6\u6001</span>
<span class="token comment"># \u4F1A\u770B\u5230 running_nodes \u4E2D\u7684\u786E\u5C11\u4E86\u4E00\u4E2A</span>
<span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl cluster_status</span>
Cluster status of <span class="token function">node</span> rabbit@node1
<span class="token punctuation">[</span><span class="token punctuation">{</span>nodes,<span class="token punctuation">[</span><span class="token punctuation">{</span>disc,<span class="token punctuation">[</span>rabbit@node1,rabbit@node2,rabbit@node3<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>running_nodes,<span class="token punctuation">[</span>rabbit@node3,rabbit@node1<span class="token punctuation">]</span><span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>cluster_name,<span class="token operator">&lt;&lt;</span><span class="token string">&quot;rabbit@node1&quot;</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>partitions,<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>alarms,<span class="token punctuation">[</span><span class="token punctuation">{</span>rabbit@node3,<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span>,<span class="token punctuation">{</span>rabbit@node1,<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u5173\u95ED\u4E86\u96C6\u7FA4\u4E2D\u7684\u6240\u6709\u8282\u70B9\uFF0C\u5219\u9700\u8981\u786E\u4FDD <strong>\u6700\u540E\u5173\u95ED\u7684\u90A3\u4E2A\u8282\u70B9\u662F\u7B2C\u4E00\u4E2A\u542F\u52A8</strong> \u7684\uFF0C\u5982\u679C\u4E0D\u662F\u6700\u540E\u5173\u95ED\u7684\u8282\u70B9\u88AB\u7B2C\u4E00\u4E2A\u542F\u52A8\uFF0C\u8BE5\u8282\u70B9\u4F1A\u9ED8\u8BA4\u7B49\u5F85 30 \u79D2\uFF08\u65B0\u7248\u6709\u91CD\u8BD5\u673A\u5236\uFF0C\u65F6\u95F4\u53E6\u7B97\uFF09\uFF0C\u7B49\u5F85\u6700\u540E\u4E00\u4E2A\u8282\u70B9\u7684\u542F\u52A8\uFF0C\u7B49\u5F85\u4E0D\u5230\uFF0C\u5219\u81EA\u5DF1\u542F\u52A8\u5931\u8D25\u3002</p><p>\u5982\u679C\u56E0\u4E3A\u6700\u540E\u4E00\u4E2A\u8282\u70B9\u542F\u52A8\u4E0D\u4E86\uFF0C\u53EF\u4EE5\u53C2\u8003\u524D\u4E00\u7AE0\u8282\u7684\u96C6\u7FA4\u7BA1\u7406\u547D\u4EE4\uFF0C\u5C06\u8FD9\u4E2A\u8282\u70B9\u8E22\u51FA\u53BB\uFF0C\u9009\u62E9\u5176\u4ED6\u7684\u8282\u70B9\u542F\u52A8\u3002\uFF08\u4E5F\u53EF\u4EE5\u672C\u7AE0\u4E0B\u4E00\u5C0F\u8282\u7684\u5185\u5BB9\uFF09</p><h2 id="_3-\u96C6\u7FA4\u8282\u70B9\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_3-\u96C6\u7FA4\u8282\u70B9\u7C7B\u578B" aria-hidden="true">#</a> 3. \u96C6\u7FA4\u8282\u70B9\u7C7B\u578B</h2><p>\u67E5\u770B\u96C6\u7FA4\u72B6\u6001\u4FE1\u606F\u65F6\uFF0C\u4F1A\u770B\u5230 <code>{nodes,[{disc,[rabbit@node1,rabbit@node2,rabbit@node3]}</code> \u7684\u4FE1\u606F\u3002\u5176\u4E2D <strong>disc</strong> \u5C31\u662F RabbitMQ \u8282\u70B9\u7684\u7C7B\u578B\u3002\u6709\u4E24\u79CD\u7C7B\u578B\uFF1A</p><ul><li><p>disc\uFF1A\u78C1\u76D8\u8282\u70B9</p><p>\u5143\u6570\u636E\u4FDD\u5B58\u5728\u78C1\u76D8\u4E0A</p></li><li><p>ram\uFF1A\u5185\u5B58\u8282\u70B9</p><p>\u5C06\u6240\u6709\u7684 \u961F\u5217\u3001\u4EA4\u6362\u5668\u3001\u7ED1\u5B9A\u5173\u7CFB\u3001\u7528\u6237\u3001\u6743\u9650\u548C vhost \u7684 <strong>\u5143\u6570\u636E</strong> \u90FD\u5B58\u50A8\u5728\u5185\u5B58\u4E2D\u3002</p></li></ul><p>\u5355\u8282\u70B9\u7684\u96C6\u7FA4\u4E2D\uFF0C\u53EA\u80FD\u6709\u78C1\u76D8\u7C7B\u578B\u7684\u8282\u70B9\uFF0C\u5426\u5219\u91CD\u542F RabbitMQ \u540E\uFF0C\u6240\u6709\u7CFB\u7EDF\u914D\u7F6E\u4FE1\u606F\u90FD\u4F1A\u4E22\u5931\u3002\u5728\u96C6\u7FA4\u8282\u70B9\u4E2D\uFF0C\u53EF\u4EE5\u9009\u62E9\u914D\u7F6E\u90E8\u5206\u8282\u70B9\u4E3A\u5185\u5B58\u8282\u70B9\uFF0C\u53EF\u4EE5\u83B7\u5F97\u66F4\u597D\u7684\u4FE1\u606F\u3002</p><p>\u6BD4\u5982\u5C06 node2 \u52A0\u5165\u8282\u70B9\u65F6\u6307\u5B9A\u4E3A\u5185\u5B58\u8282\u70B9</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u52A0\u5165\u8282\u70B9\u65F6\u6307\u5B9A --ram \u53C2\u6570</span>
<span class="token punctuation">[</span>root@node2 ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl join_cluster rabbit@node1 --ram</span>
Clustering <span class="token function">node</span> rabbit@node2 with rabbit@node1

<span class="token comment"># \u5982\u679C\u5DF2\u7ECF\u52A0\u5165\u4E86\u96C6\u7FA4\uFF0C\u5219\u53EF\u4EE5\u66F4\u6539\u8282\u70B9\u7C7B\u578B</span>
rabbitmqctl change_cluster_node_type <span class="token punctuation">{</span>disc,ram<span class="token punctuation">}</span>

<span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl cluster_status</span>
Cluster status of <span class="token function">node</span> rabbit@node1
<span class="token punctuation">[</span><span class="token punctuation">{</span>nodes,<span class="token punctuation">[</span><span class="token punctuation">{</span>disc,<span class="token punctuation">[</span>rabbit@node1,rabbit@node3<span class="token punctuation">]</span><span class="token punctuation">}</span>,<span class="token punctuation">{</span>ram,<span class="token punctuation">[</span>rabbit@node2<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>running_nodes,<span class="token punctuation">[</span>rabbit@node3,rabbit@node1<span class="token punctuation">]</span><span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>cluster_name,<span class="token operator">&lt;&lt;</span><span class="token string">&quot;rabbit@node1&quot;</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>partitions,<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>alarms,<span class="token punctuation">[</span><span class="token punctuation">{</span>rabbit@node3,<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span>,<span class="token punctuation">{</span>rabbit@node1,<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u96C6\u7FA4\u4E2D\u521B\u5EFA\u961F\u5217\u3001\u4EA4\u6362\u5668\u6216\u5219\u7ED1\u5B9A\u5173\u7CFB\u65F6\uFF0C\u8FD9\u4E9B\u64CD\u4F5C\u76F4\u5230 <strong>\u6240\u6709\u96C6\u7FA4\u8282\u70B9\u90FD\u6210\u529F\u63D0\u4EA4\u5143\u6570\u636E\u53D8\u66F4\u540E\u624D\u4F1A\u8FD4\u56DE</strong>\uFF0C\u8FD9\u5C31\u610F\u5473\u7740\u78C1\u76D8\u8282\u70B9\u4F1A\u8017\u8D39\u66F4\u591A\u7684\u65F6\u95F4\uFF0C\u800C\u5185\u5B58\u8282\u70B9\u5C06\u8017\u8D39\u66F4\u5C11\u7684\u65F6\u95F4\u3002</p><ul><li>\u5185\u5B58\u8282\u70B9\uFF1A\u63D0\u4F9B\u51FA\u8272\u7684\u6027\u80FD</li><li>\u78C1\u76D8\u8282\u70B9\uFF1A\u80FD\u4FDD\u8BC1\u96C6\u7FA4\u914D\u7F6E\u4FE1\u606F\u7684\u9AD8\u53EF\u9760\u6027</li></ul><p>RabbitMQ\xB7 \u53EA\u8981\u6C42\u5728 <strong>\u96C6\u7FA4\u4E2D\u81F3\u5C11\u6709\u4E00\u4E2A\u78C1\u76D8\u8282\u70B9</strong>\uFF0C\u5F53\u8282\u70B9\u52A0\u5165\u6216\u5219\u79BB\u5F00\u96C6\u7FA4\u65F6\uFF0C\u4ED6\u4EEC\u5FC5\u987B\u5C06\u53D8\u66F4\u901A\u77E5\u5230\u81F3\u5C11\u4E00\u4E2A\u78C1\u76D8\u8282\u70B9\u3002\u5982\u679C <strong>\u53EA\u6709\u4E00\u4E2A\u78C1\u76D8\u8282\u70B9</strong>\uFF0C\u8BE5\u8282\u70B9 <strong>\u5D29\u6E83</strong> \u7684\u8BDD\uFF0C\u90A3\u4E48 <strong>\u5C06\u4E0D\u80FD\u6267\u884C\u521B\u5EFA\u961F\u5217\u3001\u4EA4\u6362\u5668\u3001\u7ED1\u5B9A\u5173\u7CFB\u3001\u7528\u6237\u3001\u66F4\u6539\u6743\u9650\u3001\u6DFB\u52A0\u6216\u5220\u9664\u96C6\u7FA4\u8282\u70B9\u7684\u64CD\u4F5C\u4E86</strong>\uFF0C\u4F46\u662F\u53EF\u4EE5\u7EE7\u7EED\u6536\u53D1\u4FE1\u606F\u3002</p><p>\u5185\u5B58\u8282\u70B9\u91CD\u542F\u540E\uFF0C\u4F1A\u8FDE\u63A5\u5230\u9884\u5148\u914D\u7F6E\u7684\u78C1\u76D8\u8282\u70B9\uFF0C\u4E0B\u8F7D\u5F53\u524D\u96C6\u7FA4\u5143\u6570\u636E\u7684\u526F\u672C\u3002\u5F53\u5728\u96C6\u7FA4\u4E2D\u6DFB\u52A0\u5185\u5B58\u8282\u70B9\u65F6\uFF0C\u786E\u4FDD\u544A\u77E5\u5176\u6240\u6709\u7684\u78C1\u76D8\u8282\u70B9\uFF08<strong>\u5185\u5B58\u8282\u70B9\u552F\u4E00\u5B58\u50A8\u5230\u78C1\u76D8\u7684\u5143\u6570\u636E\u4FE1\u606F\u662F\u96C6\u7FA4\u4E2D\u78C1\u76D8\u8282\u70B9\u7684\u5730\u5740</strong>\uFF09\uFF0C\u53EA\u8981\u5185\u5B58\u8282\u70B9\u53EF\u4EE5\u627E\u5230\u81F3\u5C11\u4E00\u4E2A\u78C1\u76D8\u8282\u70B9\uFF0C\u90A3\u4E48\u5B83\u5728\u91CD\u542F\u540E\uFF0C\u5C31\u80FD\u91CD\u65B0\u52A0\u5165\u96C6\u7FA4</p><h3 id="_3-1-\u5982\u4F55\u9009\u62E9\u78C1\u76D8\u8282\u70B9\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_3-1-\u5982\u4F55\u9009\u62E9\u78C1\u76D8\u8282\u70B9\u7C7B\u578B" aria-hidden="true">#</a> 3.1 \u5982\u4F55\u9009\u62E9\u78C1\u76D8\u8282\u70B9\u7C7B\u578B\uFF1F</h3><p>\u5982\u4E0A\u6240\u8FF0\uFF0C\u518D\u770B\u573A\u666F\uFF1A\u53EA\u6709\u5728\u4F7F\u7528 RPC \u529F\u80FD\u65F6\uFF0C\u521B\u5EFA\u961F\u5217\u3001\u4EA4\u6362\u5668\u7ED1\u5B9A\u5173\u7CFB\u7B49\u7684\u64CD\u4F5C\u4F1A\u5F88\u9891\u7E41\uFF0C\u5176\u4ED6\u7684\u573A\u666F\u90FD\u4E0D\u9891\u7E41\uFF0C\u6240\u4EE5\u5EFA\u8BAE\u90FD\u4F7F\u7528\u78C1\u76D8\u8282\u70B9\u7C7B\u578B</p><h2 id="_4-\u5254\u9664\u5355\u4E2A\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_4-\u5254\u9664\u5355\u4E2A\u8282\u70B9" aria-hidden="true">#</a> 4. \u5254\u9664\u5355\u4E2A\u8282\u70B9</h2><p>\u5254\u9664\u5355\u4E2A\u8282\u70B9\u6709\u4E24\u79CD\u65B9\u5F0F</p><h3 id="_4-1-\u9002\u5408\u4E0D\u518D\u8FD0\u884C-rabbitmq-\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#_4-1-\u9002\u5408\u4E0D\u518D\u8FD0\u884C-rabbitmq-\u5E94\u7528" aria-hidden="true">#</a> 4.1 \u9002\u5408\u4E0D\u518D\u8FD0\u884C RabbitMQ \u5E94\u7528</h3><p>\u5F53\u4E00\u4E2A\u8282\u70B9\u4E0D\u518D\u8FD0\u884C RabbitMQ \u5E94\u7528\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u547D\u4EE4\u3002\u6BD4\u5982\u5C06 node2 \u5254\u9664</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5173\u95ED node2  </span>
<span class="token punctuation">[</span>root@node2 ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl stop_app</span>

<span class="token comment"># \u5728\u5176\u4ED6\u8282\u70B9\u4E0A\u5C06 node2 \u8E22\u51FA\u53BB</span>
<span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl forget_cluster_node rabbit@node2</span>
Removing <span class="token function">node</span> rabbit@node2 from cluster
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u79CD\u64CD\u4F5C\u65B9\u5F0F\u4E4B\u540E\uFF0C node2 \u8282\u70B9\u5C31\u65E0\u6CD5\u8FD0\u884C\u8D77\u6765\u4E86\u3002</p><p>\u8FD9\u672C\u4E66\u8BB2\u7684\u592A\u4E71\u4E86\u3002\u5B8C\u5168\u624D\u5806\u780C\u529F\u80FD\uFF0C\u4E5F\u4E0D\u8BF4\u573A\u666F\uFF1F\u611F\u89C9\u7279\u522B\u4E71</p><p>\u4E0B\u9762\u7684\u7531\u4E8E\u65E0\u6CD5\u524D\u9762\u5F3A\u5236\u5254\u9664\u4E86 node2\uFF0C node2 \u65E0\u6CD5\u542F\u52A8\u4E86\uFF0C\u4E0B\u9762\u7684\u5B9E\u9A8C\u4E5F\u65E0\u6CD5\u505A\u4E0B\u53BB\u4E86\uFF0C\u53EA\u8BB0\u5F55</p><p>\u524D\u9762\u63D0\u5230\u8FC7\uFF0C\u5F53\u5173\u95ED\u96C6\u7FA4\u6700\u540E\u4E00\u4E2A\u8282\u70B9\uFF0C\u8BE5\u8282\u70B9\u65E0\u6CD5\u542F\u52A8\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 forget_cluster_node \u547D\u4EE4\u5C06\u6B64\u8282\u70B9\u5254\u9664\u5F53\u524D\u96C6\u7FA4\u3002\u6BD4\u5982\uFF0C\u96C6\u7FA4\u6309\u7167 node3\u3001node2\u3001node1 \u7684\u987A\u5E8F\u5173\u95ED\uFF0C\u5982\u679C\u8981\u542F\u52A8\u96C6\u7FA4\uFF0C\u5C31\u8981\u5148\u542F\u52A8 node1 \u8282\u70B9\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6309\u987A\u5E8F\u5173\u95ED\u8282\u70B9</span>
<span class="token punctuation">[</span>root@node3 ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl stop</span>
<span class="token punctuation">[</span>root@node2 ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl stop</span>
<span class="token punctuation">[</span>root@node3 ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl stop</span>

<span class="token comment"># \u5982\u679C\u7531\u4E8E node1 \u8282\u70B9\u542F\u52A8\u4E0D\u8D77\u6765\u4E86\u3002</span>
<span class="token comment"># \u53EF\u4EE5\u5728 node2 \u4E0A\u5254\u9664 node1 \u8282\u70B9</span>
<span class="token comment"># \u8FD9\u91CC\u4F7F\u7528  -offline \u662F\u79BB\u7EBF\u6A21\u5F0F\uFF0C\u7531\u4E8E node2 \u542F\u52A8\u4E0D\u8D77\u6765</span>
<span class="token punctuation">[</span>root@node2 ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl forget_cluster_node rabbit@node1 -offline</span>
<span class="token comment"># \u7136\u540E\u542F\u52A8</span>
<span class="token punctuation">[</span>root@node2 ~<span class="token punctuation">]</span><span class="token comment"># rabbitmq-server -detached</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-\u7B2C\u4E8C\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_4-2-\u7B2C\u4E8C\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> 4.2 \u7B2C\u4E8C\u79CD\u65B9\u5F0F</h3><p>\u5C31\u662F\u5728\u80FD\u542F\u52A8\u7684\u60C5\u51B5\u4E0B\uFF0C\u54EA\u4E2A\u8282\u70B9\u8981\u9000\u51FA\uFF0C\u5C31\u4F7F\u7528 reset \u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@node2 ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl stop_app</span>
<span class="token punctuation">[</span>root@node2 ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl reset</span>
<span class="token punctuation">[</span>root@node2 ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl start_app</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,52),d={href:"https://zq99299.github.io/mq-tutorial/rabbitmq-ac/07/01.html",target:"_blank",rel:"noopener noreferrer"},r=i("\u96C6\u7FA4\u642D\u5EFA");function b(m,k){const s=c("ExternalLinkIcon");return t(),e("div",null,[u,n("p",null,[n("a",d,[r,o(s)])])])}const g=a(l,[["render",b],["__file","rabbitmq-z-cluster.html.vue"]]);export{g as default};
