import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.ed238031.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="java\u96C6\u6210rabbitmq-amqp-client" tabindex="-1"><a class="header-anchor" href="#java\u96C6\u6210rabbitmq-amqp-client" aria-hidden="true">#</a> Java\u96C6\u6210RabbitMQ(amqp-client)</h1><h2 id="_1-\u57FA\u7840\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_1-\u57FA\u7840\u4F7F\u7528" aria-hidden="true">#</a> 1. \u57FA\u7840\u4F7F\u7528</h2><ol><li><p>pom \u4F9D\u8D56</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.rabbitmq<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>amqp-client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>Rabbit\u7684\u8FDE\u63A5\uFF0C\u4E24\u79CD\u65B9\u5F0F\uFF1A</strong></p><p>\u65B9\u5F0F\u4E00\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Connection</span> <span class="token class-name">GetRabbitConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n	<span class="token class-name">ConnectionFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConnectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n	factory<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token class-name">Config<span class="token punctuation">.</span>UserName</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n	factory<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token class-name">Config<span class="token punctuation">.</span>Password</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n	factory<span class="token punctuation">.</span><span class="token function">setVirtualHost</span><span class="token punctuation">(</span><span class="token class-name">Config<span class="token punctuation">.</span>VHost</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n	factory<span class="token punctuation">.</span><span class="token function">setHost</span><span class="token punctuation">(</span><span class="token class-name">Config<span class="token punctuation">.</span>Host</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n	factory<span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span><span class="token class-name">Config<span class="token punctuation">.</span>Port</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n	<span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n	<span class="token keyword">try</span> <span class="token punctuation">{</span>\n		conn <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">newConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n	<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n		e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n	<span class="token punctuation">}</span>\n	<span class="token keyword">return</span> conn<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B9\u5F0F\u4E8C\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Connection</span> <span class="token class-name">GetRabbitConnection2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n	<span class="token class-name">ConnectionFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConnectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n	<span class="token comment">// \u8FDE\u63A5\u683C\u5F0F\uFF1Aamqp://userName:password@hostName:portNumber/virtualHost</span>\n	<span class="token class-name">String</span> uri <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;amqp://%s:%s@%s:%d%s&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Config<span class="token punctuation">.</span>UserName</span><span class="token punctuation">,</span> <span class="token class-name">Config<span class="token punctuation">.</span>Password</span><span class="token punctuation">,</span> <span class="token class-name">Config<span class="token punctuation">.</span>Host</span><span class="token punctuation">,</span> <span class="token class-name">Config<span class="token punctuation">.</span>Port</span><span class="token punctuation">,</span>\n			<span class="token class-name">Config<span class="token punctuation">.</span>VHost</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n	<span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n	<span class="token keyword">try</span> <span class="token punctuation">{</span>\n		factory<span class="token punctuation">.</span><span class="token function">setUri</span><span class="token punctuation">(</span>uri<span class="token punctuation">)</span><span class="token punctuation">;</span>\n		factory<span class="token punctuation">.</span><span class="token function">setVirtualHost</span><span class="token punctuation">(</span><span class="token class-name">Config<span class="token punctuation">.</span>VHost</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n		conn <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">newConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n	<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n		e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n	<span class="token punctuation">}</span>\n	<span class="token keyword">return</span> conn<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>\u7B2C\u4E8C\u90E8\u5206\uFF1A\u5E94\u7528\u7C7B\uFF0C\u4F7F\u7528\u6700\u7B80\u5355\u7684\u65B9\u5F0F\u53D1\u5E03\u548C\u6D88\u8D39\u6D88\u606F</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n	<span class="token class-name">Publisher</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u63A8\u9001\u6D88\u606F</span>\n\n	<span class="token class-name">Consumer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6D88\u8D39\u6D88\u606F</span>\n<span class="token punctuation">}</span>\n\n<span class="token doc-comment comment">/**\n * \u63A8\u9001\u6D88\u606F\n */</span>\n<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token class-name">Publisher</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n	<span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u8FDE\u63A5</span>\n	<span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">ConnectionFactoryUtil<span class="token punctuation">.</span>GetRabbitConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n	<span class="token keyword">if</span> <span class="token punctuation">(</span>conn <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n		<span class="token keyword">try</span> <span class="token punctuation">{</span>\n			<span class="token comment">// \u521B\u5EFA\u901A\u9053</span>\n			<span class="token class-name">Channel</span> channel <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n			<span class="token comment">// \u58F0\u660E\u961F\u5217\u3010\u53C2\u6570\u8BF4\u660E\uFF1A\u53C2\u6570\u4E00\uFF1A\u961F\u5217\u540D\u79F0\uFF0C\u53C2\u6570\u4E8C\uFF1A\u662F\u5426\u6301\u4E45\u5316\uFF1B\u53C2\u6570\u4E09\uFF1A\u662F\u5426\u72EC\u5360\u6A21\u5F0F\uFF1B\u53C2\u6570\u56DB\uFF1A\u6D88\u8D39\u8005\u65AD\u5F00\u8FDE\u63A5\u65F6\u662F\u5426\u5220\u9664\u961F\u5217\uFF1B\u53C2\u6570\u4E94\uFF1A\u6D88\u606F\u5176\u4ED6\u53C2\u6570\u3011</span>\n			channel<span class="token punctuation">.</span><span class="token function">queueDeclare</span><span class="token punctuation">(</span><span class="token class-name">Config<span class="token punctuation">.</span>QueueName</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n			<span class="token class-name">String</span> content <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F53\u524D\u65F6\u95F4\uFF1A%s&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n			<span class="token comment">// \u53D1\u9001\u5185\u5BB9\u3010\u53C2\u6570\u8BF4\u660E\uFF1A\u53C2\u6570\u4E00\uFF1A\u4EA4\u6362\u673A\u540D\u79F0\uFF1B\u53C2\u6570\u4E8C\uFF1A\u961F\u5217\u540D\u79F0\uFF0C\u53C2\u6570\u4E09\uFF1A\u6D88\u606F\u7684\u5176\u4ED6\u5C5E\u6027-routing headers\uFF0C\u6B64\u5C5E\u6027\u4E3AMessageProperties.PERSISTENT_TEXT_PLAIN\u7528\u4E8E\u8BBE\u7F6E\u7EAF\u6587\u672C\u6D88\u606F\u5B58\u50A8\u5230\u786C\u76D8\uFF1B\u53C2\u6570\u56DB\uFF1A\u6D88\u606F\u4E3B\u4F53\u3011</span>\n			channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Config<span class="token punctuation">.</span>QueueName</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> content<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5DF2\u53D1\u9001\u6D88\u606F\uFF1A&quot;</span> <span class="token operator">+</span> content<span class="token punctuation">)</span><span class="token punctuation">;</span>\n			<span class="token comment">// \u5173\u95ED\u8FDE\u63A5</span>\n			channel<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n			conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n		<span class="token punctuation">}</span>\n	<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token doc-comment comment">/**\n * \u6D88\u8D39\u6D88\u606F\n */</span>\n<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token class-name">Consumer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n	<span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u8FDE\u63A5</span>\n	<span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">ConnectionFactoryUtil<span class="token punctuation">.</span>GetRabbitConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n	<span class="token keyword">if</span> <span class="token punctuation">(</span>conn <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n		<span class="token keyword">try</span> <span class="token punctuation">{</span>\n			<span class="token comment">// \u521B\u5EFA\u901A\u9053</span>\n			<span class="token class-name">Channel</span> channel <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n			<span class="token comment">// \u58F0\u660E\u961F\u5217\u3010\u53C2\u6570\u8BF4\u660E\uFF1A\u53C2\u6570\u4E00\uFF1A\u961F\u5217\u540D\u79F0\uFF0C\u53C2\u6570\u4E8C\uFF1A\u662F\u5426\u6301\u4E45\u5316\uFF1B\u53C2\u6570\u4E09\uFF1A\u662F\u5426\u72EC\u5360\u6A21\u5F0F\uFF1B\u53C2\u6570\u56DB\uFF1A\u6D88\u8D39\u8005\u65AD\u5F00\u8FDE\u63A5\u65F6\u662F\u5426\u5220\u9664\u961F\u5217\uFF1B\u53C2\u6570\u4E94\uFF1A\u6D88\u606F\u5176\u4ED6\u53C2\u6570\u3011</span>\n			channel<span class="token punctuation">.</span><span class="token function">queueDeclare</span><span class="token punctuation">(</span><span class="token class-name">Config<span class="token punctuation">.</span>QueueName</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n			<span class="token comment">// \u521B\u5EFA\u8BA2\u9605\u5668\uFF0C\u5E76\u63A5\u53D7\u6D88\u606F</span>\n			channel<span class="token punctuation">.</span><span class="token function">basicConsume</span><span class="token punctuation">(</span><span class="token class-name">Config<span class="token punctuation">.</span>QueueName</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">DefaultConsumer</span><span class="token punctuation">(</span>channel<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n				<span class="token annotation punctuation">@Override</span>\n				<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handleDelivery</span><span class="token punctuation">(</span><span class="token class-name">String</span> consumerTag<span class="token punctuation">,</span> <span class="token class-name">Envelope</span> envelope<span class="token punctuation">,</span> <span class="token class-name">AMQP<span class="token punctuation">.</span>BasicProperties</span> properties<span class="token punctuation">,</span>\n						<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> body<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>\n					<span class="token class-name">String</span> routingKey <span class="token operator">=</span> envelope<span class="token punctuation">.</span><span class="token function">getRoutingKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u961F\u5217\u540D\u79F0</span>\n					<span class="token class-name">String</span> contentType <span class="token operator">=</span> properties<span class="token punctuation">.</span><span class="token function">getContentType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5185\u5BB9\u7C7B\u578B</span>\n					<span class="token class-name">String</span> content <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>body<span class="token punctuation">,</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6D88\u606F\u6B63\u6587</span>\n					<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6D88\u606F\u6B63\u6587\uFF1A&quot;</span> <span class="token operator">+</span> content<span class="token punctuation">)</span><span class="token punctuation">;</span>\n					channel<span class="token punctuation">.</span><span class="token function">basicAck</span><span class="token punctuation">(</span>envelope<span class="token punctuation">.</span><span class="token function">getDeliveryTag</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u624B\u52A8\u786E\u8BA4\u6D88\u606F\u3010\u53C2\u6570\u8BF4\u660E\uFF1A\u53C2\u6570\u4E00\uFF1A\u8BE5\u6D88\u606F\u7684index\uFF1B\u53C2\u6570\u4E8C\uFF1A\u662F\u5426\u6279\u91CF\u5E94\u7B54\uFF0Ctrue\u6279\u91CF\u786E\u8BA4\u5C0F\u4E8Eindex\u7684\u6D88\u606F\u3011</span>\n				<span class="token punctuation">}</span>\n			<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n		<span class="token punctuation">}</span>\n	<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 4);
const _hoisted_5 = {
  href: "https://www.cnblogs.com/vipstone/p/9275256.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_6 = /* @__PURE__ */ createTextVNode("RabbitMQ\u7CFB\u5217\uFF08\u4E8C\uFF09\u6DF1\u5165\u4E86\u89E3RabbitMQ\u5DE5\u4F5C\u539F\u7406\u53CA\u7B80\u5355\u4F7F\u7528");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_5, [
        _hoisted_6,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var Java__RabbitMQ_amqpClient_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Java\u96C6\u6210RabbitMQ\u4E4Bamqp-client.html.vue"]]);
export { Java__RabbitMQ_amqpClient_html as default };
