import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.80478ce0.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u81EA\u5B9A\u4E49springboot-starter\u5B9E\u73B0\u81EA\u52A8\u5316\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49springboot-starter\u5B9E\u73B0\u81EA\u52A8\u5316\u914D\u7F6E" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49SpringBoot Starter\u5B9E\u73B0\u81EA\u52A8\u5316\u914D\u7F6E</h1><p>\u81EA\u52A8\u5316\u914D\u7F6E\u9700\u6EE1\u8DB3\u4E24\u4E2A\u6761\u4EF6</p><ol><li>\u80FD\u591F\u751F\u6210Bean\uFF0C\u5E76\u6CE8\u518C\u5230Bean\u5BB9\u5668\u4E2D</li><li>\u80FD\u591F\u81EA\u52A8\u914D\u7F6E\u9879\u76EE\u6240\u9700\u8981\u7684\u914D\u7F6E</li></ol><h2 id="_1-\u81EA\u5B9A\u4E49\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_1-\u81EA\u5B9A\u4E49\u6B65\u9AA4" aria-hidden="true">#</a> 1. \u81EA\u5B9A\u4E49\u6B65\u9AA4</h2><h3 id="_1-1-\u5F15\u5165springboot-\u81EA\u52A8\u5316\u914D\u7F6E\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5F15\u5165springboot-\u81EA\u52A8\u5316\u914D\u7F6E\u4F9D\u8D56" aria-hidden="true">#</a> 1.1 \u5F15\u5165SpringBoot \u81EA\u52A8\u5316\u914D\u7F6E\u4F9D\u8D56\uFF1A</h3><p>\u5F15\u5165 SpringBoot \u81EA\u52A8\u5316\u914D\u7F6E\u4F9D\u8D56\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-autoconfigure<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.5.9.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-\u521B\u5EFA-service" tabindex="-1"><a class="header-anchor" href="#_1-2-\u521B\u5EFA-service" aria-hidden="true">#</a> 1.2 \u521B\u5EFA Service</h3><p>spring-boot-starter-helloworld \u53EA\u662F\u4F5C\u4E3A\u4F8B\u5B50\u6F14\u793A\u81EA\u5B9A\u4E49 starter \u7684\u8FC7\u7A0B\uFF0C\u5B9E\u73B0\u7684\u529F\u80FD\u5F88\u7B80\u5355\u5C31\u662F\u521B\u5EFA\u4E00\u4E2A HelloworldService \u7684\uFF0C\u5E76\u914D\u7F6E sayHello() \u65B9\u6CD5\u6253\u5370\u7684\u8BED\u53E5\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloworldService</span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">private</span> <span class="token class-name">String</span> words<span class="token punctuation">;</span>\n\n  <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">getWords</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> words<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setWords</span><span class="token punctuation">(</span><span class="token class-name">String</span> words<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>words <span class="token operator">=</span> words<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n     <span class="token keyword">return</span> <span class="token string">&quot;hello, &quot;</span> <span class="token operator">+</span> words<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-\u521B\u5EFA\u5C5E\u6027\u7C7B" tabindex="-1"><a class="header-anchor" href="#_1-3-\u521B\u5EFA\u5C5E\u6027\u7C7B" aria-hidden="true">#</a> 1.3 \u521B\u5EFA\u5C5E\u6027\u7C7B</h3><p>\u521B\u5EFA\u5C5E\u6027\u7C7B\uFF0Cprefix = \u201Chelloworld\u201D\u4EE3\u8868\u8BE5\u9879\u76EE\u5728\u5C5E\u6027\u6587\u4EF6\u4E2D\u914D\u7F6E\u7684\u524D\u7F00\uFF0C\u5373\u53EF\u4EE5\u5728\u5C5E\u6027\u6587\u4EF6\u4E2D\u901A\u8FC7 helloworld.words=springboot\uFF0C\u5C31\u53EF\u4EE5\u6539\u53D8\u5C5E\u6027\u7C7B\u5B57\u6BB5 words \u7684\u503C\u4E86\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;helloworld&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloworldProperties</span> <span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> DEFAULT_WORDS <span class="token operator">=</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">private</span> <span class="token class-name">String</span> words <span class="token operator">=</span> DEFAULT_WORDS<span class="token punctuation">;</span>\n\n  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getWords</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> words<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setWords</span><span class="token punctuation">(</span><span class="token class-name">String</span> words<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>words <span class="token operator">=</span> words<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-\u521B\u5EFA\u81EA\u52A8\u914D\u7F6E\u7C7B" tabindex="-1"><a class="header-anchor" href="#_1-4-\u521B\u5EFA\u81EA\u52A8\u914D\u7F6E\u7C7B" aria-hidden="true">#</a> 1.4 \u521B\u5EFA\u81EA\u52A8\u914D\u7F6E\u7C7B</h3><p>\u521B\u5EFA\u81EA\u52A8\u5316\u914D\u7F6E\u7C7B\uFF0C\u8FD9\u4E2A\u76F8\u5F53\u4E8E\u5C31\u662F\u4E00\u4E2A\u666E\u901A\u7684 Java \u914D\u7F6E\u7C7B\uFF0C\u53EF\u4EE5\u5728\u8FD9\u91CC\u521B\u5EFA Bean\uFF0C\u5E76\u53EF\u83B7\u5F97\u4E0E application.properties \u5C5E\u6027\u6587\u4EF6\u76F8\u5BF9\u5E94\u7684\u5C5E\u6027\u7C7B\u7684 Bean\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u76F8\u5F53\u4E8E\u4E00\u4E2A\u666E\u901A\u7684 java \u914D\u7F6E\u7C7B</span>\n<span class="token annotation punctuation">@Configuration</span>\n<span class="token comment">// \u5F53 HelloworldService \u5728\u7C7B\u8DEF\u5F84\u7684\u6761\u4EF6\u4E0B</span>\n<span class="token annotation punctuation">@ConditionalOnClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">HelloworldService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">// \u5C06 application.properties \u7684\u76F8\u5173\u7684\u5C5E\u6027\u5B57\u6BB5\u4E0E\u8BE5\u7C7B\u4E00\u4E00\u5BF9\u5E94\uFF0C\u5E76\u751F\u6210 Bean</span>\n<span class="token annotation punctuation">@EnableConfigurationProperties</span><span class="token punctuation">(</span><span class="token class-name">HelloworldProperties</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloworldAutoConfiguration</span> <span class="token punctuation">{</span>\n\n  <span class="token comment">// \u6CE8\u5165\u5C5E\u6027\u7C7B</span>\n  <span class="token annotation punctuation">@Autowired</span>\n  <span class="token keyword">private</span> <span class="token class-name">HelloworldProperties</span> hellowordProperties<span class="token punctuation">;</span>\n\n  <span class="token annotation punctuation">@Bean</span>\n  <span class="token comment">// \u5F53\u5BB9\u5668\u6CA1\u6709\u8FD9\u4E2A Bean \u7684\u65F6\u5019\u624D\u521B\u5EFA\u8FD9\u4E2A Bean</span>\n  <span class="token annotation punctuation">@ConditionalOnMissingBean</span><span class="token punctuation">(</span><span class="token class-name">HelloworldService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>\n  <span class="token keyword">public</span> <span class="token class-name">HelloworldService</span> <span class="token function">helloworldService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">HelloworldService</span> helloworldService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HelloworldService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    helloworldService<span class="token punctuation">.</span><span class="token function">setWords</span><span class="token punctuation">(</span>hellowordProperties<span class="token punctuation">.</span><span class="token function">getWords</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> helloworldService<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-meta-inf-\u76EE\u5F55\u4E0B\u521B\u5EFA-spring-factories" tabindex="-1"><a class="header-anchor" href="#_1-5-meta-inf-\u76EE\u5F55\u4E0B\u521B\u5EFA-spring-factories" aria-hidden="true">#</a> 1.5 META-INF \u76EE\u5F55\u4E0B\u521B\u5EFA spring.factories</h3><p>\u5728 META-INF \u76EE\u5F55\u4E0B\u521B\u5EFA spring.factories\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u6587\u4EF6\u53EF\u91CD\u8981\u5566\uFF0C\u56E0\u4E3A SpringBoot \u81EA\u52A8\u5316\u914D\u7F6E\u6700\u7EC8\u5C31\u662F\u8981\u626B\u63CF META-INF/spring.factories \u6765\u52A0\u8F7D\u9879\u76EE\u7684\u81EA\u52A8\u5316\u914D\u7F6E\u7C7B\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code># <span class="token class-name">Auto</span> <span class="token class-name">Configure</span>\n<span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span>EnableAutoConfiguration</span><span class="token operator">=</span><span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>objcoding<span class="token punctuation">.</span>starters<span class="token punctuation">.</span>helloworld<span class="token punctuation">.</span></span>HelloworldAutoConfiguration</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u5F15\u7528starter" tabindex="-1"><a class="header-anchor" href="#_2-\u5F15\u7528starter" aria-hidden="true">#</a> 2. \u5F15\u7528Starter</h2><p>\u4E3A\u4E86\u5F15\u5165 starter\uFF0C\u6211\u5728\u8FD9\u91CC\u518D\u521B\u5EFA\u4E00\u4E2A spring-boot-starter-helloworld-sample \u9879\u76EE\u3002</p><p>\u6DFB\u52A0 spring-boot-starter-helloworld \u8D77\u6B65\u4F9D\u8D56\uFF1A</p><div class="language-pom ext-pom line-numbers-mode"><pre class="language-pom"><code>&lt;dependency&gt;\n  &lt;groupId&gt;com.objcoding&lt;/groupId&gt;\n  &lt;artifactId&gt;spring-boot-starter-helloworld&lt;/artifactId&gt;\n  &lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;\n&lt;/dependency&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 application.properties \u4E2D\u6DFB\u52A0\u5C5E\u6027\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>helloworld.words=springboot\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728 SpringBoot \u4E3B\u7A0B\u5E8F\u4E2D \u6CE8\u5165 helloworldService</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>\n<span class="token annotation punctuation">@SpringBootApplication</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloworldApplication</span> <span class="token punctuation">{</span>\n\n  <span class="token annotation punctuation">@Autowired</span>\n  <span class="token keyword">private</span> <span class="token class-name">HelloworldService</span> helloworldService<span class="token punctuation">;</span>\n\n  <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>\n  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> helloworldService<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">HelloworldApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BBF\u95EE http://localhost:8080/\uFF0C\u6253\u5370\u4EE5\u4E0B\u7ED3\u679C\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200321000541904.png" alt="image-20200321000541904"></p><h2 id="\u9762\u8BD5\u771F\u9898" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u771F\u9898" aria-hidden="true">#</a> \u9762\u8BD5\u771F\u9898</h2><p>\u4F60\u81EA\u5DF1\u6709\u5B9A\u4E49\u8FC7\u4E00\u4E9B\uFF08Springboot\uFF09\u81EA\u52A8\u5316\u914D\u7F6E\u5417\uFF1F</p><blockquote><p>\u6211\u4E4B\u524D\u505A\u8FC7xxx\u4F7F\u7528\u5230\u4E86\uFF0C\u4ED6\u7684\u521B\u5EFA\u6B65\u9AA4</p><ol><li>\u4F7F\u7528 @ConfigurationProperties \u521B\u5EFA\u5C5E\u6027\u7C7B</li><li>\u4E3B\u8981\u901A\u8FC7@Configuration \u548C @Bean \u5B9E\u73B0 Java\u663E\u793A\u914D\u7F6E\uFF0C\u5E76\u6CE8\u5165\u5C5E\u6027</li><li>\u521B\u5EFA META-INF/spring.factories \u6587\u4EF6\uFF0C\u6DFB\u52A0\u8FD9\u4E2A\u5141\u8BB8\u81EA\u52A8\u914D\u7F6E\u7684\u7C7B</li></ol></blockquote><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 33);
const _hoisted_34 = {
  href: "https://objcoding.com/2018/02/02/Costom-SpringBoot-Starter/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_35 = /* @__PURE__ */ createTextVNode("\u5B9E\u6218|\u5982\u4F55\u81EA\u5B9A\u4E49SpringBoot Starter\uFF1F");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_34, [
        _hoisted_35,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var ___SpringBootStarter________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "\u81EA\u5B9A\u4E49SpringBootStarter\u5B9E\u73B0\u81EA\u52A8\u5316\u914D\u7F6E.html.vue"]]);
export { ___SpringBootStarter________html as default };
