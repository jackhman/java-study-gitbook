import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as o,a as n,b as t,d as e,e as s,r as l}from"./app.c0d093c6.js";const c={},r=e('<h1 id="springboot\u76D1\u63A7-\u96C6\u6210springboot-admin\u76D1\u63A7\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#springboot\u76D1\u63A7-\u96C6\u6210springboot-admin\u76D1\u63A7\u5DE5\u5177" aria-hidden="true">#</a> SpringBoot\u76D1\u63A7 - \u96C6\u6210springboot admin\u76D1\u63A7\u5DE5\u5177</h1><blockquote><p>\u4E0A\u6587\u4E2D\u5C55\u793A\u4E86SpringBoot\u63D0\u4F9B\u4E86Actuator\u5BF9\u5E94\u7528\u8FDB\u884C\u76D1\u63A7\u548C\u7BA1\u7406\uFF0C \u800CSpring Boot Admin\u80FD\u591F\u5C06 Actuator \u4E2D\u7684\u4FE1\u606F\u8FDB\u884C\u754C\u9762\u5316\u7684\u5C55\u793A\uFF0C\u4E5F\u53EF\u4EE5\u76D1\u63A7\u6240\u6709 Spring Boot \u5E94\u7528\u7684\u5065\u5EB7\u72B6\u51B5\uFF0C\u63D0\u4F9B\u5B9E\u65F6\u8B66\u62A5\u529F\u80FD\u3002 \u672C\u6587\u4E3B\u8981\u4ECB\u7ECDspringboot admin\u4EE5\u53CASpringBoot\u548Cspringboot admin\u7684\u96C6\u6210\u3002</p></blockquote><h2 id="_1-\u77E5\u8BC6\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#_1-\u77E5\u8BC6\u51C6\u5907" aria-hidden="true">#</a> 1. \u77E5\u8BC6\u51C6\u5907</h2><blockquote><p>\u9700\u8981\u4E86\u89E3Spring Boot Admin\u548Cactuartor\u4E4B\u95F4\u7684\u5173\u7CFB\u7B49\u3002</p></blockquote><h3 id="_1-1-\u4EC0\u4E48\u662Fspring-boot-admin-\u548Cactuartor\u662F\u4EC0\u4E48\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_1-1-\u4EC0\u4E48\u662Fspring-boot-admin-\u548Cactuartor\u662F\u4EC0\u4E48\u5173\u7CFB" aria-hidden="true">#</a> 1.1 \u4EC0\u4E48\u662FSpring Boot Admin\uFF1F\u548Cactuartor\u662F\u4EC0\u4E48\u5173\u7CFB\uFF1F</h3><blockquote><p>Spring Boot Admin\u80FD\u591F\u5C06 Actuator \u4E2D\u7684\u4FE1\u606F\u8FDB\u884C\u754C\u9762\u5316\u7684\u5C55\u793A\uFF0C\u4E5F\u53EF\u4EE5\u76D1\u63A7\u6240\u6709 Spring Boot \u5E94\u7528\u7684\u5065\u5EB7\u72B6\u51B5\uFF0C\u63D0\u4F9B\u5B9E\u65F6\u8B66\u62A5\u529F\u80FD\u3002</p></blockquote><ul><li><strong>Spring Boot Admin\u63D0\u4F9B\u7684\u4E3B\u8981\u529F\u80FD</strong></li></ul><ol><li>\u663E\u793A\u5065\u5EB7\u72B6\u51B5</li><li>\u663E\u793A\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u4F8B\u5982 <ol><li>JVM\u548C\u5185\u5B58\u6307\u6807</li><li>micrometer.io\u6307\u6807</li><li>\u6570\u636E\u6E90\u6307\u6807</li><li>\u7F13\u5B58\u6307\u6807</li></ol></li><li>\u663E\u793A\u6784\u5EFA\u4FE1\u606F\u7F16\u53F7</li><li>\u5173\u6CE8\u5E76\u4E0B\u8F7D\u65E5\u5FD7\u6587\u4EF6</li><li>\u67E5\u770Bjvm\u7CFB\u7EDF\u548C\u73AF\u5883\u5C5E\u6027</li><li>\u67E5\u770BSpring Boot\u914D\u7F6E\u5C5E\u6027</li><li>\u652F\u6301Spring Cloud\u7684postable / env-\u548C/ refresh-endpoint</li><li>\u8F7B\u677E\u7684\u65E5\u5FD7\u7EA7\u7BA1\u7406</li><li>\u4E0EJMX-beans\u4EA4\u4E92</li><li>\u67E5\u770B\u7EBF\u7A0B\u8F6C\u50A8</li><li>\u67E5\u770Bhttp\u8DDF\u8E2A</li><li>\u67E5\u770Bauditevents</li><li>\u67E5\u770Bhttp-endpoints</li><li>\u67E5\u770B\u8BA1\u5212\u4EFB\u52A1</li><li>\u67E5\u770B\u548C\u5220\u9664\u6D3B\u52A8\u4F1A\u8BDD\uFF08\u4F7F\u7528spring-session\uFF09</li><li>\u67E5\u770BFlyway / Liquibase\u6570\u636E\u5E93\u8FC1\u79FB</li><li>\u4E0B\u8F7Dheapdump</li><li>\u72B6\u6001\u53D8\u66F4\u901A\u77E5\uFF08\u901A\u8FC7\u7535\u5B50\u90AE\u4EF6\uFF0CSlack\uFF0CHipchat\uFF0C\u2026\uFF09</li><li>\u72B6\u6001\u66F4\u6539\u7684\u4E8B\u4EF6\u65E5\u5FD7\uFF08\u975E\u6301\u4E45\u6027\uFF09</li></ol>',8),u=s("\u66F4\u591A\u7684\u53EF\u4EE5"),d={href:"https://github.com/codecentric/spring-boot-admin",target:"_blank",rel:"noopener noreferrer"},g=s("\u53C2\u8003"),k=n("ul",null,[n("li",null,[n("strong",null,"Spring Boot Admin\u4E0D\u662FSpring\u56E2\u961F\u63D0\u4F9B\u7684\u6A21\u5757"),s("\uFF1F")])],-1),m=s("\u5B83\u662F\u7531Codecentric\u516C\u53F8\u521B\u5EFA\u7684\uFF0C\u4EE3\u7801\u5728"),b={href:"https://github.com/codecentric/spring-boot-admin",target:"_blank",rel:"noopener noreferrer"},v=s("Github\uFF1A spring-boot-admin"),h=s("\u4E0A\u3002"),_=e(`<ul><li><strong>Spring Boot Admin\u548Cactuartor\u662F\u4EC0\u4E48\u5173\u7CFB\uFF1F</strong></li></ul><p>\u4ECE\u5982\u4E0BPOM\u7684\u4F9D\u8D56\u5173\u7CFB\u53EF\u4EE5\u770B\u51FASpring Boot Admin\u672C\u8D28\u4E0A\u96C6\u6210\u4E86actuartor\uFF0C\u5C06\u5B9E\u65F6\u8B66\u62A5\uFF0C\u6B64\u5916\u6DFB\u52A0\u4E00\u4E9B\u5B9E\u65F6\u8B66\u62A5\u529F\u80FD\u7B49\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220720204640820.png" alt="image-20220720204640820" loading="lazy"></p><h3 id="_1-2-springboot-admin\u7684client\u548Cserver" tabindex="-1"><a class="header-anchor" href="#_1-2-springboot-admin\u7684client\u548Cserver" aria-hidden="true">#</a> 1.2 SpringBoot Admin\u7684Client\u548CServer\uFF1F</h3><blockquote><p>Spring Boot Admin\uFF08\u7B80\u79F0SBA\uFF09\u7531\u4E24\u90E8\u5206\u7EC4\u6210\uFF1A<strong>SBA Server</strong>\u548C<strong>SBA Client</strong>\u3002</p></blockquote><p><strong>SBA Server</strong>\uFF1A \u5305\u62ECAdmin\u7528\u6237\u754C\u9762\u5E76\u72EC\u7ACB\u8FD0\u884C\u4E8E\u88AB\u76D1\u63A7\u5E94\u7528</p><p><strong>SBA Client</strong>\uFF1A \u63D0\u4F9B\u4E00\u79CD\u65B9\u5F0F\u5C06\u88AB\u76D1\u63A7\u5E94\u7528\u6CE8\u518C\u5230 SBA Server</p><h4 id="_1-2-1-\u4E3A\u4EC0\u4E48spring-boot-admin\u8BBE\u8BA1\u4E0A\u4F1A\u5206\u4E3Aserver\u548Cclient\u4E24\u4E2A\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#_1-2-1-\u4E3A\u4EC0\u4E48spring-boot-admin\u8BBE\u8BA1\u4E0A\u4F1A\u5206\u4E3Aserver\u548Cclient\u4E24\u4E2A\u90E8\u5206" aria-hidden="true">#</a> 1.2.1 <strong>\u4E3A\u4EC0\u4E48Spring Boot Admin\u8BBE\u8BA1\u4E0A\u4F1A\u5206\u4E3AServer\u548CClient\u4E24\u4E2A\u90E8\u5206</strong>\uFF1F</h4><ol><li>\u9996\u5148\uFF0CSpring Boot Admin\u505A\u7684\u662F\u96C6\u4E2D\u5316\u7684\u76D1\u63A7\uFF08\u6BD4\u5982\u5E94\u7528\u7684\u96C6\u7FA4\uFF0C\u591A\u4E2A\u670D\u52A1\u6216\u8005\u5FAE\u670D\u52A1\u7B49\uFF09\uFF0C\u800C\u4E0D\u662F\u6BCF\u4E2A\u5E94\u7528\u90FD\u9700\u8981\u6709\u4E00\u4E2AUI\u3002</li><li>\u5176\u6B21\uFF0C\u88AB\u76D1\u63A7\u7684\u5E94\u7528\u5E94\u8BE5\u662F\u548C\u76D1\u63A7\u5E73\u53F0\u662F\u5206\u79BB\u7684\uFF0C\u6BD4\u5982Client\u5E94\u7528\u4F1A\u6302\u6389\uFF0C\u8FD9\u65F6\u5019Server\u76D1\u63A7\u4F9D\u7136\u6B63\u5E38\u8FD0\u884C\u5E76\u53D1\u73B0\u548C\u62A5\u8B66Client\u7684\u5F02\u5E38\u72B6\u6001\u3002</li><li>\u518D\u8005\uFF0C\u8FD8\u8981\u8003\u8651\u548C\u5176\u5B83\u8BED\u8A00\u5E94\u7528\uFF0C\u5176\u5B83\u5E73\u53F0\u7B49\u7684\u96C6\u6210\u7B49\u3002</li></ol><h4 id="_1-2-2-\u53EA\u80FD\u901A\u8FC7sba-client\u6CE8\u518C\u5230sba-server\u5417" tabindex="-1"><a class="header-anchor" href="#_1-2-2-\u53EA\u80FD\u901A\u8FC7sba-client\u6CE8\u518C\u5230sba-server\u5417" aria-hidden="true">#</a> 1.2.2 <strong>\u53EA\u80FD\u901A\u8FC7SBA Client\u6CE8\u518C\u5230SBA Server\u5417</strong>\uFF1F</h4><p>\u5E76\u4E0D\u662F\uFF0C \u9664\u4E86SBA Client\uFF0C SBA \u8FD8\u652F\u6301:</p><ol><li>Spring Cloud Discovery: \u4E3A\u4E86\u652F\u6301\u4E00\u4E9B\u5FAE\u670D\u52A1\u6846\u67B6\u5982SpringCloud\u7B49\uFF08\u56E0\u4E3A\u5FAE\u670D\u52A1\u6846\u67B6\u4E2D\u5DF2\u7ECF\u5305\u542B\u4E86\u670D\u52A1\u53D1\u73B0\u548C\u6CE8\u518C\u6A21\u5757\uFF09</li><li>Python Applications Using Pyctuator: \u4E3A\u4E86\u652F\u6301\u5176\u5B83\u8BED\u8A00\u5F00\u53D1\u7684\u5E94\u7528\uFF0C\u6BD4\u5982Python</li></ol><h2 id="_2-\u7B80\u5355\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-\u7B80\u5355\u793A\u4F8B" aria-hidden="true">#</a> 2. \u7B80\u5355\u793A\u4F8B</h2><blockquote><p>\u672C\u4F8B\u5B50\u4E3B\u8981\u5C55\u793ASBA Server + SBA Client\u6CE8\u518C\u7684\u65B9\u5F0F\u3002</p></blockquote><h3 id="_2-1-\u542F\u7528sba-server" tabindex="-1"><a class="header-anchor" href="#_2-1-\u542F\u7528sba-server" aria-hidden="true">#</a> 2.1 \u542F\u7528SBA Server</h3><p>pom\u5F15\u5165\u5305</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>de.codecentric<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-admin-starter-server<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.5.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7@EnableAdminServer\u6CE8\u89E3\u542F\u7528SBA Server</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> pdai
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableAdminServer</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringBootHelloWorldApplication</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * main interface.
     *
     * <span class="token keyword">@param</span> <span class="token parameter">args</span> args
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">SpringBootHelloWorldApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u4F60\u4FBF\u53EF\u4EE5\u6253\u5F00\u5982\u4E0B\u7F51\u5740\u67E5\u770BServer UI\uFF0C\u5F88\u663E\u7136\u76EE\u524D\u6CA1\u6709\u5BA2\u6237\u7AEF\u6CE8\u518C\u4E0A\u6765\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220720205007867.png" alt="image-20220720205007867" loading="lazy"></p><h3 id="_2-2-\u6CE8\u518Cclient" tabindex="-1"><a class="header-anchor" href="#_2-2-\u6CE8\u518Cclient" aria-hidden="true">#</a> 2.2 \u6CE8\u518CClient</h3><p>\u8FD9\u91CC\u91C7\u7528Spring Boot Admin Client\u6CE8\u518C\u7684\u65B9\u5F0F\u3002</p><p>\u5F15\u5165SBA Client\u7684pom\u4F9D\u8D56</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>de.codecentric<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-admin-starter-client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.5.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6DFB\u52A0\u914D\u7F6E</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">boot</span><span class="token punctuation">:</span>
    <span class="token key atrule">admin</span><span class="token punctuation">:</span>
      <span class="token key atrule">client</span><span class="token punctuation">:</span>
        <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&#39;http://localhost:8080&#39;</span>
<span class="token key atrule">management</span><span class="token punctuation">:</span>
  <span class="token key atrule">endpoints</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled-by-default</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">web</span><span class="token punctuation">:</span>
      <span class="token key atrule">base-path</span><span class="token punctuation">:</span> /manage
      <span class="token key atrule">exposure</span><span class="token punctuation">:</span>
        <span class="token key atrule">include</span><span class="token punctuation">:</span> <span class="token string">&#39;*&#39;</span>
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-\u6F14\u793A\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#_2-3-\u6F14\u793A\u6548\u679C" aria-hidden="true">#</a> 2.3 \u6F14\u793A\u6548\u679C</h3>`,28),y=s("\u6253\u5F00 "),f={href:"http://localhost:8080/wallboard",target:"_blank",rel:"noopener noreferrer"},S=s("http://localhost:8080/wallboard"),z=e('<p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220720205101689.png" alt="image-20220720205101689" loading="lazy"></p><p>\u5DE6\u4FA7\u662F\u4E3B\u8981\u529F\u80FD\uFF1A</p><p>Insight - Details</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220720205624005.png" alt="image-20220720205624005" loading="lazy"></p><p>Insight - Metrics</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220720205743086.png" alt="image-20220720205743086" loading="lazy"></p><p>Insight - Configurations</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220720205832953.png" alt="image-20220720205832953" loading="lazy"></p><p>Loggers</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220720205910150.png" alt="image-20220720205910150" loading="lazy"></p><p>JVM</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220720210025579.png" alt="image-20220720210025579" loading="lazy"></p><p>Mappings</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220720210045166.png" alt="image-20220720210045166" loading="lazy"></p><h2 id="_3-\u8FDB\u4E00\u6B65\u7406\u89E3" tabindex="-1"><a class="header-anchor" href="#_3-\u8FDB\u4E00\u6B65\u7406\u89E3" aria-hidden="true">#</a> 3. \u8FDB\u4E00\u6B65\u7406\u89E3</h2>',15),x=s("\u6211\u4EEC\u518D\u901A\u8FC7\u4E00\u4E9B\u95EE\u9898\u6765\u5E2E\u52A9\u4F60\u66F4\u6DF1\u5165\u7406\u89E3SBA\uFF0C \u66F4\u8BE6\u7EC6\u7684\u5185\u5BB9\u53EF\u4EE5\u53C2\u8003"),A={href:"https://codecentric.github.io/spring-boot-admin/current",target:"_blank",rel:"noopener noreferrer"},B=s("\u5B98\u7F51\u6587\u6863 "),I=s("\u3002"),j=e(`<h3 id="_3-1-\u5982\u4F55\u542F\u7528jmx\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#_3-1-\u5982\u4F55\u542F\u7528jmx\u7BA1\u7406" aria-hidden="true">#</a> 3.1 \u5982\u4F55\u542F\u7528JMX\u7BA1\u7406\uFF1F</h3><p>\u9ED8\u8BA4\u4E0BSBA\u6CA1\u6709\u542F\u7528JMX\uFF0C\u9700\u8981\u901A\u8FC7\u5982\u4E0B\u914D\u7F6E\u542F\u7528\u3002</p><p>\u9996\u5148\u9700\u8981\u5F15\u5165POM\u4F9D\u8D56\uFF08PS\uFF1A\u9700\u8981SpringBoot2.2+ \u7248\u672C\uFF09</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.jolokia<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jolokia-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u542F\u7528JMX</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">jmx</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5237\u65B0SBA UI\u5C31\u53EF\u4EE5\u770B\u5230\u589E\u52A0\u4E86JMX\u76F8\u5173\u7684\u8FDE\u63A5</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220720210348392.png" alt="image-20220720210348392" loading="lazy"></p><h3 id="_3-2-\u5982\u4F55\u663E\u793A\u65E5\u5FD7\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#_3-2-\u5982\u4F55\u663E\u793A\u65E5\u5FD7\u5185\u5BB9" aria-hidden="true">#</a> 3.2 \u5982\u4F55\u663E\u793A\u65E5\u5FD7\u5185\u5BB9\uFF1F</h3>`,9),w=s("\u9ED8\u8BA4\u4E0B\u6CA1\u6709\u663E\u793ALog File\u7684\u5185\u5BB9\uFF0C\u5982\u679C\u9700\u8981\u663E\u793ASpringBoot\u5E94\u7528\u65E5\u5FD7\u9700\u8981\u8FDB\u884C\u5982\u4E0B\u914D\u7F6E\uFF08\u914D\u7F6Elogging.file.path "),C={href:"http://xn--logging-gf7nh96s.file.name",target:"_blank",rel:"noopener noreferrer"},M=s("\u6216\u8005logging.file.name"),q=s("\uFF09\u3002"),J=e(`<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">logging</span><span class="token punctuation">:</span>
  <span class="token key atrule">file</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&#39;pdai-spring-boot-application.log&#39;</span>
  <span class="token key atrule">pattern</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> <span class="token string">&#39;%clr(%d{yyyy-MM-dd HH:mm:ss.SSS}){faint} %clr(%5p) %clr(\${PID}){magenta} %clr(---){faint} %clr([%15.15t]){faint} %clr(%-40.40logger{39}){cyan} %clr(:){faint} %m%n%wEx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5237\u65B0SBA UI\u5C31\u53EF\u4EE5\u770B\u5230\u589E\u52A0\u4E86\u65E5\u5FD7\u6587\u4EF6\u76F8\u5173\u7684\u8FDE\u63A5</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220720210606935.png" alt="image-20220720210606935" loading="lazy"></p><h3 id="_3-3-\u5982\u4F55\u7EE7\u627Fspring-security" tabindex="-1"><a class="header-anchor" href="#_3-3-\u5982\u4F55\u7EE7\u627Fspring-security" aria-hidden="true">#</a> 3.3 \u5982\u4F55\u7EE7\u627FSpring Security\uFF1F</h3><p>\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u7EE7\u627Fspring-boot-starter-security</p><p>\u6DFB\u52A0pom\u4F9D\u8D56</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-security<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6DFB\u52A0HttpSecurity\u914D\u7F6E</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">SecurityPermitAllConfig</span> <span class="token keyword">extends</span> <span class="token class-name">WebSecurityConfigurerAdapter</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        http<span class="token punctuation">.</span><span class="token function">authorizeRequests</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">anyRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
            <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">csrf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">disable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),P=s("\u5176\u5B83\u5B89\u5168\u76F8\u5173\u914D\u7F6E\u53EF\u4EE5\u53C2\u8003"),E={href:"https://codecentric.github.io/spring-boot-admin/current/#securing-spring-boot-admin",target:"_blank",rel:"noopener noreferrer"},H=s("\u5B98\u7F51\u6587\u6863"),V=e(`<h3 id="_3-4-\u5982\u4F55\u901A\u77E5\u544A\u8B66\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_3-4-\u5982\u4F55\u901A\u77E5\u544A\u8B66\u4FE1\u606F" aria-hidden="true">#</a> 3.4 \u5982\u4F55\u901A\u77E5\u544A\u8B66\u4FE1\u606F\uFF1F</h3><p>\u53EF\u4EE5\u901A\u8FC7\u96C6\u6210 spring-boot-starter-mail \u914D\u7F6EJavaMailSender \u6765\u7528\u90AE\u4EF6\u901A\u77E5\u4FE1\u606F\u3002</p><p>\u6DFB\u52A0pom\u4F9D\u8D56</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-mail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6DFB\u52A0\u914D\u7F6E\u4FE1\u606F</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>spring.mail.host=smtp.example.com
spring.boot.admin.notify.mail.to=admin@example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9664\u4E86\u90AE\u4EF6\u901A\u77E5\u8FD9\u79CD\uFF0C\u5185\u7F6E\u8FD8\u652F\u6301\u5F88\u591A\u5176\u4ED6\u65B9\u5F0F\u4EE5\u53CA\u652F\u6301\u81EA\u5B9A\u4E49notification\uFF0C\u6BD4\u5982\u9489\u9489\uFF0C\u5FAE\u4FE1\u901A\u77E5\u7B49</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220720210755484.png" alt="image-20220720210755484" loading="lazy"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,9),L={href:"https://pdai.tech/md/spring/springboot/springboot-x-monitor-boot-admin.html",target:"_blank",rel:"noopener noreferrer"},U=n("strong",null,"SpringBoot\u76D1\u63A7 - \u96C6\u6210springboot admin\u76D1\u63A7\u5DE5\u5177",-1);function X(N,D){const a=l("ExternalLinkIcon");return i(),o("div",null,[r,n("p",null,[u,n("a",d,[g,t(a)])]),k,n("p",null,[m,n("a",b,[v,t(a)]),h]),_,n("p",null,[y,n("a",f,[S,t(a)])]),z,n("blockquote",null,[n("p",null,[x,n("a",A,[B,t(a)]),I])]),j,n("p",null,[w,n("a",C,[M,t(a)]),q]),J,n("p",null,[P,n("a",E,[H,t(a)])]),V,n("p",null,[n("a",L,[U,t(a)])])])}const F=p(c,[["render",X],["__file","springboot-y-monitor-admin.html.vue"]]);export{F as default};
