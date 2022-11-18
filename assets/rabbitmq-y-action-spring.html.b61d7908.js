import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as p,a as n,b as e,d as o,e as c,r as i}from"./app.c0d093c6.js";const l={},u=o(`<h1 id="spring\u96C6\u6210rabbitmq-spring-rabbit" tabindex="-1"><a class="header-anchor" href="#spring\u96C6\u6210rabbitmq-spring-rabbit" aria-hidden="true">#</a> Spring\u96C6\u6210RabbitMQ(spring-rabbit)</h1><h1 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h1><p>Spring AMQP \u662F\u57FA\u4E8E Spring \u6846\u67B6\u7684AMQP\u6D88\u606F\u89E3\u51B3\u65B9\u6848\uFF0C\u63D0\u4F9B\u6A21\u677F\u5316\u7684\u53D1\u9001\u548C\u63A5\u6536\u6D88\u606F\u7684\u62BD\u8C61\u5C42\uFF0C\u63D0\u4F9B\u57FA\u4E8E\u6D88\u606F\u9A71\u52A8\u7684 POJO\u7684\u6D88\u606F\u76D1\u542C\u7B49\uFF0C</p><ul><li>\u4F7F\u7528<code>RabbitAdmin</code>\u53BB\u81EA\u52A8\u58F0\u660E\u961F\u5217\uFF08<code>queues</code>\uFF09\uFF0C\u4EA4\u6362\u673A\uFF08<code>exchanges</code>\uFF09\uFF0C\u7ED1\u5B9A\uFF08<code>bindings</code>\uFF09</li><li>\u4F7F\u7528<code>RabbitTemplate</code>\u7C7B\u7684\u5B9E\u4F8B\u6765\u53D1\u9001\u548C\u63A5\u6536\u6D88\u606F\u3002</li><li>\u5F02\u6B65\u5904\u7406\u6D88\u8D39\u6D88\u606F\u7684\u4E00\u4E2A\u76D1\u542C\u5BB9\u5668\uFF08<code>Listener container</code>\uFF09</li></ul><h2 id="_2-\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_2-\u6982\u5FF5" aria-hidden="true">#</a> 2. \u6982\u5FF5</h2><p><code>spring-amqp</code>\u6A21\u5757\u662F\u5BF9AMQP\u534F\u8BAE\u7684\u4E00\u4E2A\u62BD\u8C61\u548C\u5C01\u88C5\u3002\u6240\u4EE5\u8BF4\u5BF9\u6240\u6709\u7684AMQP\u7684\u5B9E\u73B0\u90FD\u8FDB\u884C\u7684\u62BD\u8C61\u548C\u5C01\u88C5\uFF0C\u6BD4\u5982</p><ul><li><p><code>org.springframework.amqp.core.Binding</code>\uFF1A\u7ED1\u5B9A\u7684\u5C01\u88C5\uFF0C\u7C7B\u578B\u6709<code>QUEUE</code>\u548C<code>EXCHANGE</code>\u3002</p></li><li><p><code>org.springframework.amqp.core.Exchange</code>\uFF1A\u5176\u6709\u57FA\u672C\u7684\u56DB\u79CD\u5B9E\u73B0</p></li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210527162649214.png" alt="image-20210527162649214" loading="lazy"></p><ul><li><code>org.springframework.amqp.core.Message</code>\uFF1A\u6D88\u606F\u662F\u7531\u5C5E\u6027\u548Cbody\u6784\u6210\uFF0C\u5C06\u5C5E\u6027\u4E5F\u5C01\u88C5\u6210\u4E00\u4E2A\u5BF9\u8C61MessageProperties\u3002</li><li><code>org.springframework.amqp.core.MessageProperties</code>\uFF1A\u5BF9\u6D88\u606F\u5C5E\u6027\u8FDB\u884C\u4E86\u62BD\u8C61\u3002</li><li><code>org.springframework.amqp.core.Queue</code>\uFF1A\u961F\u5217\u7684\u5C01\u88C5\u3002</li></ul><h2 id="_3-\u5165\u95E8\u5B9E\u6218demo" tabindex="-1"><a class="header-anchor" href="#_3-\u5165\u95E8\u5B9E\u6218demo" aria-hidden="true">#</a> 3. \u5165\u95E8\u5B9E\u6218Demo</h2><ol><li><p>\u52A0\u5165spring-amqp\u4F9D\u8D56\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.amqp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-rabbit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.7.3.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5BB9\u5668\u4E2D\u7EB3\u5165ConnectionFactory\u548CRabbitAdmin\u7BA1\u7406</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MQConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">ConnectionFactory</span> <span class="token function">connectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">CachingConnectionFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CachingConnectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">setUri</span><span class="token punctuation">(</span><span class="token string">&quot;amqp://zhihao.miao:123456@192.168.1.131:5672&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> factory<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">RabbitAdmin</span> <span class="token function">rabbitAdmin</span><span class="token punctuation">(</span><span class="token class-name">ConnectionFactory</span> connectionFactory<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RabbitAdmin</span><span class="token punctuation">(</span>connectionFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4F7F\u7528RabbitAdmin\u8FDB\u884CExchange\uFF0CQueue\uFF0CBinding\u64CD\u4F5C</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>rabbit<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">RabbitAdmin</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">AnnotationConfigApplicationContext</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">ComponentScan</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashMap</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@ComponentScan</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">AnnotationConfigApplicationContext</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AnnotationConfigApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">Application</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">RabbitAdmin</span> rabbitAdmin <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">RabbitAdmin</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>rabbitAdmin<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//\u521B\u5EFA\u56DB\u79CD\u7C7B\u578B\u7684Exchange\uFF0C\u53EF\u91CD\u590D\u6267\u884C</span>
        rabbitAdmin<span class="token punctuation">.</span><span class="token function">declareExchange</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">DirectExchange</span><span class="token punctuation">(</span><span class="token string">&quot;zhihao.direct.exchange&quot;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        rabbitAdmin<span class="token punctuation">.</span><span class="token function">declareExchange</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TopicExchange</span><span class="token punctuation">(</span><span class="token string">&quot;zhihao.topic.exchange&quot;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        rabbitAdmin<span class="token punctuation">.</span><span class="token function">declareExchange</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FanoutExchange</span><span class="token punctuation">(</span><span class="token string">&quot;zhihao.fanout.exchange&quot;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        rabbitAdmin<span class="token punctuation">.</span><span class="token function">declareExchange</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">HeadersExchange</span><span class="token punctuation">(</span><span class="token string">&quot;zhihao.header.exchange&quot;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//\u5220\u9664Exchange</span>
        <span class="token comment">//rabbitAdmin.deleteExchange(&quot;zhihao.header.exchange&quot;);</span>

        <span class="token comment">//\u5B9A\u4E49\u961F\u5217</span>
        rabbitAdmin<span class="token punctuation">.</span><span class="token function">declareQueue</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token string">&quot;zhihao.debug&quot;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        rabbitAdmin<span class="token punctuation">.</span><span class="token function">declareQueue</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token string">&quot;zhihao.info&quot;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        rabbitAdmin<span class="token punctuation">.</span><span class="token function">declareQueue</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token string">&quot;zhihao.error&quot;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//\u5220\u9664\u961F\u5217</span>
        <span class="token comment">//rabbitAdmin.deleteQueue(&quot;zhihao.debug&quot;);</span>

        <span class="token comment">//\u5C06\u961F\u5217\u4E2D\u7684\u6D88\u606F\u5168\u6D88\u8D39\u6389</span>
        rabbitAdmin<span class="token punctuation">.</span><span class="token function">purgeQueue</span><span class="token punctuation">(</span><span class="token string">&quot;zhihao.info&quot;</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//\u7ED1\u5B9A,\u6307\u5B9A\u8981\u7ED1\u5B9A\u7684Exchange\u548CRoute key</span>
        rabbitAdmin<span class="token punctuation">.</span><span class="token function">declareBinding</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Binding</span><span class="token punctuation">(</span><span class="token string">&quot;zhihao.debug&quot;</span><span class="token punctuation">,</span><span class="token class-name">Binding<span class="token punctuation">.</span>DestinationType</span><span class="token punctuation">.</span><span class="token constant">QUEUE</span><span class="token punctuation">,</span>
                <span class="token string">&quot;zhihao.direct.exchange&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;zhihao.hehe&quot;</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        rabbitAdmin<span class="token punctuation">.</span><span class="token function">declareBinding</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Binding</span><span class="token punctuation">(</span><span class="token string">&quot;zhihao.info&quot;</span><span class="token punctuation">,</span><span class="token class-name">Binding<span class="token punctuation">.</span>DestinationType</span><span class="token punctuation">.</span><span class="token constant">QUEUE</span><span class="token punctuation">,</span>
                <span class="token string">&quot;zhihao.direct.exchange&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;zhihao.haha&quot;</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        rabbitAdmin<span class="token punctuation">.</span><span class="token function">declareBinding</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Binding</span><span class="token punctuation">(</span><span class="token string">&quot;zhihao.error&quot;</span><span class="token punctuation">,</span><span class="token class-name">Binding<span class="token punctuation">.</span>DestinationType</span><span class="token punctuation">.</span><span class="token constant">QUEUE</span><span class="token punctuation">,</span>
                <span class="token string">&quot;zhihao.direct.exchange&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;zhihao.welcome&quot;</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">//\u7ED1\u5B9Aheader exchange</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> headerValues <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        headerValues<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;type&quot;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        headerValues<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;size&quot;</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//whereAll\u6307\u5B9A\u4E86x-match:   all\u53C2\u6570</span>
        rabbitAdmin<span class="token punctuation">.</span><span class="token function">declareBinding</span><span class="token punctuation">(</span><span class="token class-name">BindingBuilder</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token string">&quot;zhihao.debug&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
                <span class="token keyword">to</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">HeadersExchange</span><span class="token punctuation">(</span><span class="token string">&quot;zhihao.header.exchange&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">whereAll</span><span class="token punctuation">(</span>headerValues<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//whereAll\u6307\u5B9A\u4E86x-match:   any\u53C2\u6570</span>
        rabbitAdmin<span class="token punctuation">.</span><span class="token function">declareBinding</span><span class="token punctuation">(</span><span class="token class-name">BindingBuilder</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token string">&quot;zhihao.info&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
                <span class="token keyword">to</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">HeadersExchange</span><span class="token punctuation">(</span><span class="token string">&quot;zhihao.header.exchange&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">whereAny</span><span class="token punctuation">(</span>headerValues<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">//\u8FDB\u884C\u89E3\u7ED1</span>
        rabbitAdmin<span class="token punctuation">.</span><span class="token function">removeBinding</span><span class="token punctuation">(</span><span class="token class-name">BindingBuilder</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token string">&quot;zhihao.info&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
              <span class="token keyword">to</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TopicExchange</span><span class="token punctuation">(</span><span class="token string">&quot;zhihao.direct.exchange&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">with</span><span class="token punctuation">(</span><span class="token string">&quot;zhihao.info&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//\u58F0\u660Etopic\u7C7B\u578B\u7684exchange</span>
        rabbitAdmin<span class="token punctuation">.</span><span class="token function">declareExchange</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TopicExchange</span><span class="token punctuation">(</span><span class="token string">&quot;zhihao.hehe.exchange&quot;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        rabbitAdmin<span class="token punctuation">.</span><span class="token function">declareExchange</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TopicExchange</span><span class="token punctuation">(</span><span class="token string">&quot;zhihao.miao.exchange&quot;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//exchange\u4E0Eexchange\u7ED1\u5B9A</span>
        rabbitAdmin<span class="token punctuation">.</span><span class="token function">declareBinding</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Binding</span><span class="token punctuation">(</span><span class="token string">&quot;zhihao.hehe.exchange&quot;</span><span class="token punctuation">,</span><span class="token class-name">Binding<span class="token punctuation">.</span>DestinationType</span><span class="token punctuation">.</span><span class="token constant">EXCHANGE</span><span class="token punctuation">,</span>
                <span class="token string">&quot;zhihao.miao.exchange&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;zhihao&quot;</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//\u4F7F\u7528BindingBuilder\u8FDB\u884C\u7ED1\u5B9A</span>
        rabbitAdmin<span class="token punctuation">.</span><span class="token function">declareBinding</span><span class="token punctuation">(</span><span class="token class-name">BindingBuilder</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token string">&quot;zhihao.debug&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
                <span class="token keyword">to</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TopicExchange</span><span class="token punctuation">(</span><span class="token string">&quot;zhihao.topic.exchange&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">with</span><span class="token punctuation">(</span><span class="token string">&quot;zhihao.miao&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//rabbitAdmin.declareBinding(new Binding(&quot;amq.rabbitmq.trace&quot;,Binding.DestinationType.EXCHANGE,</span>
                <span class="token comment">//&quot;amq.rabbitmq.log&quot;,&quot;zhihao&quot;,new HashMap()));</span>

        context<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,12),k={href:"https://www.jianshu.com/p/e8de480e3598",target:"_blank",rel:"noopener noreferrer"},d=c("RabbitMQ\u7B14\u8BB0\u516D\uFF1ASpring AMQP\u7B80\u4ECB\u4E0Equick start");function r(m,b){const s=i("ExternalLinkIcon");return t(),p("div",null,[u,n("p",null,[n("a",k,[d,e(s)])])])}const h=a(l,[["render",r],["__file","rabbitmq-y-action-spring.html.vue"]]);export{h as default};
