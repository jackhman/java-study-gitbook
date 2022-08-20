import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.a829be87.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="redis\u4FDD\u8BC1\u7F13\u5B58\u4E0E\u6570\u636E\u5E93\u53CC\u5199\u65F6\u7684\u6570\u636E\u4E00\u81F4\u6027" tabindex="-1"><a class="header-anchor" href="#redis\u4FDD\u8BC1\u7F13\u5B58\u4E0E\u6570\u636E\u5E93\u53CC\u5199\u65F6\u7684\u6570\u636E\u4E00\u81F4\u6027" aria-hidden="true">#</a> Redis\u4FDD\u8BC1\u7F13\u5B58\u4E0E\u6570\u636E\u5E93\u53CC\u5199\u65F6\u7684\u6570\u636E\u4E00\u81F4\u6027</h1><h2 id="_1-\u5F15\u8A00" tabindex="-1"><a class="header-anchor" href="#_1-\u5F15\u8A00" aria-hidden="true">#</a> 1.\u5F15\u8A00</h2><ul><li>\u5728\u8BFB\u53D6\u7F13\u5B58\u65B9\u9762\u7684\u65B9\u6848\u6D41\u7A0B\u56FE</li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20191008234809789.png" alt="image-20191008234809789"></p><ul><li><p>\u66F4\u65B0\u7F13\u5B58\u65B9\u9762</p><p>\u5BF9\u4E8E\u66F4\u65B0\u5B8C\u6570\u636E\u5E93\uFF0C\u662F\u66F4\u65B0\u7F13\u5B58\uFF0C\u8FD8\u662F\u5220\u9664\u7F13\u5B58\uFF0C\u53C8\u6216\u8005\u662F\u5148\u5220\u9664\u7F13\u5B58\uFF0C\u518D\u66F4\u65B0\u6570\u636E\u5E93\uFF0C\u5176\u5B9E\u5927\u5BB6\u5B58\u5728\u5F88\u5927\u7684\u4E89\u8BAE\u3002</p></li></ul><h2 id="_2-\u4E09\u79CD\u66F4\u65B0\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#_2-\u4E09\u79CD\u66F4\u65B0\u7B56\u7565" aria-hidden="true">#</a> 2. \u4E09\u79CD\u66F4\u65B0\u7B56\u7565</h2><ol><li>\u5148\u66F4\u65B0\u6570\u636E\u5E93\uFF0C\u518D\u66F4\u65B0\u7F13\u5B58</li><li>\u5148\u5220\u9664\u7F13\u5B58\uFF0C\u518D\u66F4\u65B0\u6570\u636E\u5E93</li><li><strong>\u5148\u66F4\u65B0\u6570\u636E\u5E93\uFF0C\u518D\u5220\u9664\u7F13\u5B58</strong>\uFF08\u63A8\u8350\uFF09</li></ol><h3 id="_2-1-\u5148\u66F4\u65B0\u6570\u636E\u5E93-\u518D\u66F4\u65B0\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5148\u66F4\u65B0\u6570\u636E\u5E93-\u518D\u66F4\u65B0\u7F13\u5B58" aria-hidden="true">#</a> 2.1 \u5148\u66F4\u65B0\u6570\u636E\u5E93\uFF0C\u518D\u66F4\u65B0\u7F13\u5B58</h3><p>\u8FD9\u5957\u65B9\u6848\uFF0C\u5927\u5BB6\u662F\u666E\u904D\u53CD\u5BF9\u7684\u3002\u4E3A\u4EC0\u4E48\u5462\uFF1F\u6709\u5982\u4E0B\u4E24\u70B9\u539F\u56E0\u3002</p><p><strong>\u539F\u56E01\uFF1A\uFF08\u7EBF\u7A0B\u5B89\u5168\u89D2\u5EA6\uFF09</strong></p><p>\u540C\u65F6\u6709\u8BF7\u6C42A\u548C\u8BF7\u6C42B\u8FDB\u884C\u66F4\u65B0\u64CD\u4F5C\uFF0C\u90A3\u4E48\u4F1A\u51FA\u73B0 \uFF081\uFF09\u7EBF\u7A0BA\u66F4\u65B0\u4E86\u6570\u636E\u5E93 \uFF082\uFF09\u7EBF\u7A0BB\u66F4\u65B0\u4E86\u6570\u636E\u5E93 \uFF083\uFF09\u7EBF\u7A0BB\u66F4\u65B0\u4E86\u7F13\u5B58 \uFF084\uFF09\u7EBF\u7A0BA\u66F4\u65B0\u4E86\u7F13\u5B58 \u8FD9\u5C31\u51FA\u73B0\u8BF7\u6C42A\u66F4\u65B0\u7F13\u5B58\u5E94\u8BE5\u6BD4\u8BF7\u6C42B\u66F4\u65B0\u7F13\u5B58\u65E9\u624D\u5BF9\uFF0C\u4F46\u662F\u56E0\u4E3A\u7F51\u7EDC\u7B49\u539F\u56E0\uFF0CB\u5374\u6BD4A\u66F4\u65E9\u66F4\u65B0\u4E86\u7F13\u5B58\u3002\u8FD9\u5C31\u5BFC\u81F4\u4E86\u810F\u6570\u636E\uFF0C\u56E0\u6B64\u4E0D\u8003\u8651\u3002</p><p><strong>\u539F\u56E0\u4E8C\uFF08\u4E1A\u52A1\u573A\u666F\u89D2\u5EA6\uFF09</strong> \u6709\u5982\u4E0B\u4E24\u70B9\uFF1A \uFF081\uFF09\u5982\u679C\u4F60\u662F\u4E00\u4E2A\u5199\u6570\u636E\u5E93\u573A\u666F\u6BD4\u8F83\u591A\uFF0C\u800C\u8BFB\u6570\u636E\u573A\u666F\u6BD4\u8F83\u5C11\u7684\u4E1A\u52A1\u9700\u6C42\uFF0C\u91C7\u7528\u8FD9\u79CD\u65B9\u6848\u5C31\u4F1A\u5BFC\u81F4\uFF0C\u6570\u636E\u538B\u6839\u8FD8\u6CA1\u8BFB\u5230\uFF0C\u7F13\u5B58\u5C31\u88AB\u9891\u7E41\u7684\u66F4\u65B0\uFF0C\u6D6A\u8D39\u6027\u80FD\u3002 \uFF082\uFF09\u5982\u679C\u4F60\u5199\u5165\u6570\u636E\u5E93\u7684\u503C\uFF0C\u5E76\u4E0D\u662F\u76F4\u63A5\u5199\u5165\u7F13\u5B58\u7684\uFF0C\u800C\u662F\u8981\u7ECF\u8FC7\u4E00\u7CFB\u5217\u590D\u6742\u7684\u8BA1\u7B97\u518D\u5199\u5165\u7F13\u5B58\u3002\u90A3\u4E48\uFF0C\u6BCF\u6B21\u5199\u5165\u6570\u636E\u5E93\u540E\uFF0C\u90FD\u518D\u6B21\u8BA1\u7B97\u5199\u5165\u7F13\u5B58\u7684\u503C\uFF0C\u65E0\u7591\u662F\u6D6A\u8D39\u6027\u80FD\u7684\u3002\u663E\u7136\uFF0C\u5220\u9664\u7F13\u5B58\u66F4\u4E3A\u9002\u5408\u3002</p><h3 id="_2-2-\u5148\u5220\u7F13\u5B58-\u5728\u66F4\u65B0\u6570\u636E\u5E93-\u4E89\u8BAE\u6700\u5927" tabindex="-1"><a class="header-anchor" href="#_2-2-\u5148\u5220\u7F13\u5B58-\u5728\u66F4\u65B0\u6570\u636E\u5E93-\u4E89\u8BAE\u6700\u5927" aria-hidden="true">#</a> 2.2 \u5148\u5220\u7F13\u5B58\uFF0C\u5728\u66F4\u65B0\u6570\u636E\u5E93\uFF08\u4E89\u8BAE\u6700\u5927\uFF09</h3><p>\uFF09\u8BF7\u6C42A\u8FDB\u884C\u5199\u64CD\u4F5C\uFF0C\u5220\u9664\u7F13\u5B58 \uFF082\uFF09\u8BF7\u6C42B\u67E5\u8BE2\u53D1\u73B0\u7F13\u5B58\u4E0D\u5B58\u5728 \uFF083\uFF09\u8BF7\u6C42B\u53BB\u6570\u636E\u5E93\u67E5\u8BE2\u5F97\u5230\u65E7\u503C \uFF084\uFF09\u8BF7\u6C42B\u5C06\u65E7\u503C\u5199\u5165\u7F13\u5B58 \uFF085\uFF09\u8BF7\u6C42A\u5C06\u65B0\u503C\u5199\u5165\u6570\u636E\u5E93 \u4E0A\u8FF0\u60C5\u51B5\u5C31\u4F1A\u5BFC\u81F4\u4E0D\u4E00\u81F4\u7684\u60C5\u5F62\u51FA\u73B0\u3002\u800C\u4E14\uFF0C\u5982\u679C\u4E0D\u91C7\u7528\u7ED9\u7F13\u5B58\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4\u7B56\u7565\uFF0C\u8BE5\u6570\u636E\u6C38\u8FDC\u90FD\u662F\u810F\u6570\u636E\u3002 \u90A3\u4E48\uFF0C<strong>\u5982\u4F55\u89E3\u51B3\u5462\uFF1F\u91C7\u7528\u5EF6\u65F6\u53CC\u5220\u7B56\u7565</strong> \u4F2A\u4EE3\u7801\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public void write(String key,Object data){\n        redis.delKey(key);\n        db.updateData(data);\n        Thread.sleep(1000);\n        redis.delKey(key);\n    }\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F6C\u5316\u4E3A\u4E2D\u6587\u63CF\u8FF0\u5C31\u662F \uFF081\uFF09\u5148\u6DD8\u6C70\u7F13\u5B58 \uFF082\uFF09\u518D\u5199\u6570\u636E\u5E93\uFF08\u8FD9\u4E24\u6B65\u548C\u539F\u6765\u4E00\u6837\uFF09 \uFF083\uFF09\u4F11\u77201\u79D2\uFF0C\u518D\u6B21\u6DD8\u6C70\u7F13\u5B58 \u8FD9\u4E48\u505A\uFF0C\u53EF\u4EE5\u5C061\u79D2\u5185\u6240\u9020\u6210\u7684\u7F13\u5B58\u810F\u6570\u636E\uFF0C\u518D\u6B21\u5220\u9664\u3002 <strong>\u90A3\u4E48\uFF0C\u8FD9\u4E2A1\u79D2\u600E\u4E48\u786E\u5B9A\u7684\uFF0C\u5177\u4F53\u8BE5\u4F11\u7720\u591A\u4E45\u5462\uFF1F</strong> \u9488\u5BF9\u4E0A\u9762\u7684\u60C5\u5F62\uFF0C\u8BFB\u8005\u5E94\u8BE5\u81EA\u884C\u8BC4\u4F30\u81EA\u5DF1\u7684\u9879\u76EE\u7684\u8BFB\u6570\u636E\u4E1A\u52A1\u903B\u8F91\u7684\u8017\u65F6\u3002\u7136\u540E\u5199\u6570\u636E\u7684\u4F11\u7720\u65F6\u95F4\u5219\u5728\u8BFB\u6570\u636E\u4E1A\u52A1\u903B\u8F91\u7684\u8017\u65F6\u57FA\u7840\u4E0A\uFF0C\u52A0\u51E0\u767Ems\u5373\u53EF\u3002\u8FD9\u4E48\u505A\u7684\u76EE\u7684\uFF0C\u5C31\u662F\u786E\u4FDD\u8BFB\u8BF7\u6C42\u7ED3\u675F\uFF0C\u5199\u8BF7\u6C42\u53EF\u4EE5\u5220\u9664\u8BFB\u8BF7\u6C42\u9020\u6210\u7684\u7F13\u5B58\u810F\u6570\u636E\u3002 <strong>\u5982\u679C\u4F60\u7528\u4E86mysql\u7684\u8BFB\u5199\u5206\u79BB\u67B6\u6784\u600E\u4E48\u529E\uFF1F</strong> ok\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u9020\u6210\u6570\u636E\u4E0D\u4E00\u81F4\u7684\u539F\u56E0\u5982\u4E0B\uFF0C\u8FD8\u662F\u4E24\u4E2A\u8BF7\u6C42\uFF0C\u4E00\u4E2A\u8BF7\u6C42A\u8FDB\u884C\u66F4\u65B0\u64CD\u4F5C\uFF0C\u53E6\u4E00\u4E2A\u8BF7\u6C42B\u8FDB\u884C\u67E5\u8BE2\u64CD\u4F5C\u3002 \uFF081\uFF09\u8BF7\u6C42A\u8FDB\u884C\u5199\u64CD\u4F5C\uFF0C\u5220\u9664\u7F13\u5B58 \uFF082\uFF09\u8BF7\u6C42A\u5C06\u6570\u636E\u5199\u5165\u6570\u636E\u5E93\u4E86\uFF0C \uFF083\uFF09\u8BF7\u6C42B\u67E5\u8BE2\u7F13\u5B58\u53D1\u73B0\uFF0C\u7F13\u5B58\u6CA1\u6709\u503C \uFF084\uFF09\u8BF7\u6C42B\u53BB\u4ECE\u5E93\u67E5\u8BE2\uFF0C\u8FD9\u65F6\uFF0C\u8FD8\u6CA1\u6709\u5B8C\u6210\u4E3B\u4ECE\u540C\u6B65\uFF0C\u56E0\u6B64\u67E5\u8BE2\u5230\u7684\u662F\u65E7\u503C \uFF085\uFF09\u8BF7\u6C42B\u5C06\u65E7\u503C\u5199\u5165\u7F13\u5B58 \uFF086\uFF09\u6570\u636E\u5E93\u5B8C\u6210\u4E3B\u4ECE\u540C\u6B65\uFF0C\u4ECE\u5E93\u53D8\u4E3A\u65B0\u503C \u4E0A\u8FF0\u60C5\u5F62\uFF0C\u5C31\u662F\u6570\u636E\u4E0D\u4E00\u81F4\u7684\u539F\u56E0\u3002\u8FD8\u662F\u4F7F\u7528\u53CC\u5220\u5EF6\u65F6\u7B56\u7565\u3002\u53EA\u662F\uFF0C\u7761\u7720\u65F6\u95F4\u4FEE\u6539\u4E3A\u5728\u4E3B\u4ECE\u540C\u6B65\u7684\u5EF6\u65F6\u65F6\u95F4\u57FA\u7840\u4E0A\uFF0C\u52A0\u51E0\u767Ems\u3002 <strong>\u91C7\u7528\u8FD9\u79CD\u540C\u6B65\u6DD8\u6C70\u7B56\u7565\uFF0C\u541E\u5410\u91CF\u964D\u4F4E\u600E\u4E48\u529E\uFF1F</strong> ok\uFF0C\u90A3\u5C31\u5C06\u7B2C\u4E8C\u6B21\u5220\u9664\u4F5C\u4E3A\u5F02\u6B65\u7684\u3002\u81EA\u5DF1\u8D77\u4E00\u4E2A\u7EBF\u7A0B\uFF0C\u5F02\u6B65\u5220\u9664\u3002\u8FD9\u6837\uFF0C\u5199\u7684\u8BF7\u6C42\u5C31\u4E0D\u7528\u6C89\u7761\u4E00\u6BB5\u65F6\u95F4\u540E\u4E86\uFF0C\u518D\u8FD4\u56DE\u3002\u8FD9\u4E48\u505A\uFF0C\u52A0\u5927\u541E\u5410\u91CF\u3002 <strong>\u7B2C\u4E8C\u6B21\u5220\u9664,\u5982\u679C\u5220\u9664\u5931\u8D25\u600E\u4E48\u529E\uFF1F</strong> \u8FD9\u662F\u4E2A\u975E\u5E38\u597D\u7684\u95EE\u9898\uFF0C\u56E0\u4E3A\u7B2C\u4E8C\u6B21\u5220\u9664\u5931\u8D25\uFF0C\u5C31\u4F1A\u51FA\u73B0\u5982\u4E0B\u60C5\u5F62\u3002\u8FD8\u662F\u6709\u4E24\u4E2A\u8BF7\u6C42\uFF0C\u4E00\u4E2A\u8BF7\u6C42A\u8FDB\u884C\u66F4\u65B0\u64CD\u4F5C\uFF0C\u53E6\u4E00\u4E2A\u8BF7\u6C42B\u8FDB\u884C\u67E5\u8BE2\u64CD\u4F5C\uFF0C\u4E3A\u4E86\u65B9\u4FBF\uFF0C\u5047\u8BBE\u662F\u5355\u5E93\uFF1A \uFF081\uFF09\u8BF7\u6C42A\u8FDB\u884C\u5199\u64CD\u4F5C\uFF0C\u5220\u9664\u7F13\u5B58 \uFF082\uFF09\u8BF7\u6C42B\u67E5\u8BE2\u53D1\u73B0\u7F13\u5B58\u4E0D\u5B58\u5728 \uFF083\uFF09\u8BF7\u6C42B\u53BB\u6570\u636E\u5E93\u67E5\u8BE2\u5F97\u5230\u65E7\u503C \uFF084\uFF09\u8BF7\u6C42B\u5C06\u65E7\u503C\u5199\u5165\u7F13\u5B58 \uFF085\uFF09\u8BF7\u6C42A\u5C06\u65B0\u503C\u5199\u5165\u6570\u636E\u5E93 \uFF086\uFF09\u8BF7\u6C42A\u8BD5\u56FE\u53BB\u5220\u9664\u8BF7\u6C42B\u5199\u5165\u5BF9\u7F13\u5B58\u503C\uFF0C\u7ED3\u679C\u5931\u8D25\u4E86\u3002 ok,\u8FD9\u4E5F\u5C31\u662F\u8BF4\u3002\u5982\u679C\u7B2C\u4E8C\u6B21\u5220\u9664\u7F13\u5B58\u5931\u8D25\uFF0C\u4F1A\u518D\u6B21\u51FA\u73B0\u7F13\u5B58\u548C\u6570\u636E\u5E93\u4E0D\u4E00\u81F4\u7684\u95EE\u9898\u3002 <strong>\u5982\u4F55\u89E3\u51B3\u5462\uFF1F</strong> \u5177\u4F53\u89E3\u51B3\u65B9\u6848\uFF0C\u4E14\u770B\u535A\u4E3B\u5BF9\u7B2C(3)\u79CD\u66F4\u65B0\u7B56\u7565\u7684\u89E3\u6790\u3002</p><h3 id="_2-3-\u5148\u66F4\u65B0\u6570\u636E\u5E93-\u518D\u5220\u9664\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#_2-3-\u5148\u66F4\u65B0\u6570\u636E\u5E93-\u518D\u5220\u9664\u7F13\u5B58" aria-hidden="true">#</a> 2.3 \u5148\u66F4\u65B0\u6570\u636E\u5E93\uFF0C\u518D\u5220\u9664\u7F13\u5B58</h3>', 17);
const _hoisted_18 = /* @__PURE__ */ createTextVNode("\u9996\u5148\uFF0C\u5148\u8BF4\u4E00\u4E0B\u3002\u8001\u5916\u63D0\u51FA\u4E86\u4E00\u4E2A\u7F13\u5B58\u66F4\u65B0\u5957\u8DEF\uFF0C\u540D\u4E3A");
const _hoisted_19 = {
  href: "https://docs.microsoft.com/en-us/azure/architecture/patterns/cache-aside",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_20 = /* @__PURE__ */ createTextVNode("\u300ACache-Aside pattern\u300B");
const _hoisted_21 = /* @__PURE__ */ createTextVNode("\u3002\u5176\u4E2D\u5C31\u6307\u51FA");
const _hoisted_22 = /* @__PURE__ */ createStaticVNode('<ul><li><strong>\u5931\u6548</strong>\uFF1A\u5E94\u7528\u7A0B\u5E8F\u5148\u4ECEcache\u53D6\u6570\u636E\uFF0C\u6CA1\u6709\u5F97\u5230\uFF0C\u5219\u4ECE\u6570\u636E\u5E93\u4E2D\u53D6\u6570\u636E\uFF0C\u6210\u529F\u540E\uFF0C\u653E\u5230\u7F13\u5B58\u4E2D\u3002</li><li><strong>\u547D\u4E2D</strong>\uFF1A\u5E94\u7528\u7A0B\u5E8F\u4ECEcache\u4E2D\u53D6\u6570\u636E\uFF0C\u53D6\u5230\u540E\u8FD4\u56DE\u3002</li><li><strong>\u66F4\u65B0</strong>\uFF1A\u5148\u628A\u6570\u636E\u5B58\u5230\u6570\u636E\u5E93\u4E2D\uFF0C\u6210\u529F\u540E\uFF0C\u518D\u8BA9\u7F13\u5B58\u5931\u6548\u3002</li></ul><p><strong>\u8FD9\u79CD\u60C5\u51B5\u4E0D\u5B58\u5728\u5E76\u53D1\u95EE\u9898\u4E48\uFF1F</strong> \u4E0D\u662F\u7684\u3002\u5047\u8BBE\u8FD9\u4F1A\u6709\u4E24\u4E2A\u8BF7\u6C42\uFF0C\u4E00\u4E2A\u8BF7\u6C42A\u505A\u67E5\u8BE2\u64CD\u4F5C\uFF0C\u4E00\u4E2A\u8BF7\u6C42B\u505A\u66F4\u65B0\u64CD\u4F5C\uFF0C\u90A3\u4E48\u4F1A\u6709\u5982\u4E0B\u60C5\u5F62\u4EA7\u751F \uFF081\uFF09\u7F13\u5B58\u521A\u597D\u5931\u6548 \uFF082\uFF09\u8BF7\u6C42A\u67E5\u8BE2\u6570\u636E\u5E93\uFF0C\u5F97\u4E00\u4E2A\u65E7\u503C \uFF083\uFF09\u8BF7\u6C42B\u5C06\u65B0\u503C\u5199\u5165\u6570\u636E\u5E93 \uFF084\uFF09\u8BF7\u6C42B\u5220\u9664\u7F13\u5B58 \uFF085\uFF09\u8BF7\u6C42A\u5C06\u67E5\u5230\u7684\u65E7\u503C\u5199\u5165\u7F13\u5B58 ok\uFF0C\u5982\u679C\u53D1\u751F\u4E0A\u8FF0\u60C5\u51B5\uFF0C\u786E\u5B9E\u662F\u4F1A\u53D1\u751F\u810F\u6570\u636E\u3002 <strong>\u7136\u800C\uFF0C\u53D1\u751F\u8FD9\u79CD\u60C5\u51B5\u7684\u6982\u7387\u53C8\u6709\u591A\u5C11\u5462\uFF1F</strong> \u53D1\u751F\u4E0A\u8FF0\u60C5\u51B5\u6709\u4E00\u4E2A\u5148\u5929\u6027\u6761\u4EF6\uFF0C\u5C31\u662F\u6B65\u9AA4\uFF083\uFF09\u7684\u5199\u6570\u636E\u5E93\u64CD\u4F5C\u6BD4\u6B65\u9AA4\uFF082\uFF09\u7684\u8BFB\u6570\u636E\u5E93\u64CD\u4F5C\u8017\u65F6\u66F4\u77ED\uFF0C\u624D\u6709\u53EF\u80FD\u4F7F\u5F97\u6B65\u9AA4\uFF084\uFF09\u5148\u4E8E\u6B65\u9AA4\uFF085\uFF09\u3002\u53EF\u662F\uFF0C\u5927\u5BB6\u60F3\u60F3\uFF0C\u6570\u636E\u5E93\u7684\u8BFB\u64CD\u4F5C\u7684\u901F\u5EA6\u8FDC\u5FEB\u4E8E\u5199\u64CD\u4F5C\u7684\uFF08\u4E0D\u7136\u505A\u8BFB\u5199\u5206\u79BB\u5E72\u561B\uFF0C\u505A\u8BFB\u5199\u5206\u79BB\u7684\u610F\u4E49\u5C31\u662F\u56E0\u4E3A\u8BFB\u64CD\u4F5C\u6BD4\u8F83\u5FEB\uFF0C\u8017\u8D44\u6E90\u5C11\uFF09\uFF0C\u56E0\u6B64\u6B65\u9AA4\uFF083\uFF09\u8017\u65F6\u6BD4\u6B65\u9AA4\uFF082\uFF09\u66F4\u77ED\uFF0C\u8FD9\u4E00\u60C5\u5F62\u5F88\u96BE\u51FA\u73B0\u3002 \u5047\u8BBE\uFF0C\u6709\u4EBA\u975E\u8981\u62AC\u6760\uFF0C\u6709\u5F3A\u8FEB\u75C7\uFF0C\u4E00\u5B9A\u8981\u89E3\u51B3\u600E\u4E48\u529E\uFF1F <strong>\u5982\u4F55\u89E3\u51B3\u4E0A\u8FF0\u5E76\u53D1\u95EE\u9898\uFF1F</strong> \u9996\u5148\uFF0C\u7ED9\u7F13\u5B58\u8BBE\u6709\u6548\u65F6\u95F4\u662F\u4E00\u79CD\u65B9\u6848\u3002\u5176\u6B21\uFF0C\u91C7\u7528\u7B56\u7565\uFF082\uFF09\u91CC\u7ED9\u51FA\u7684\u5F02\u6B65\u5EF6\u65F6\u5220\u9664\u7B56\u7565\uFF0C\u4FDD\u8BC1\u8BFB\u8BF7\u6C42\u5B8C\u6210\u4EE5\u540E\uFF0C\u518D\u8FDB\u884C\u5220\u9664\u64CD\u4F5C\u3002 <strong>\u8FD8\u6709\u5176\u4ED6\u9020\u6210\u4E0D\u4E00\u81F4\u7684\u539F\u56E0\u4E48\uFF1F</strong> \u6709\u7684\uFF0C\u8FD9\u4E5F\u662F\u7F13\u5B58\u66F4\u65B0\u7B56\u7565\uFF082\uFF09\u548C\u7F13\u5B58\u66F4\u65B0\u7B56\u7565\uFF083\uFF09\u90FD\u5B58\u5728\u7684\u4E00\u4E2A\u95EE\u9898\uFF0C\u5982\u679C\u5220\u7F13\u5B58\u5931\u8D25\u4E86\u600E\u4E48\u529E\uFF0C\u90A3\u4E0D\u662F\u4F1A\u6709\u4E0D\u4E00\u81F4\u7684\u60C5\u51B5\u51FA\u73B0\u4E48\u3002\u6BD4\u5982\u4E00\u4E2A\u5199\u6570\u636E\u8BF7\u6C42\uFF0C\u7136\u540E\u5199\u5165\u6570\u636E\u5E93\u4E86\uFF0C\u5220\u7F13\u5B58\u5931\u8D25\u4E86\uFF0C\u8FD9\u4F1A\u5C31\u51FA\u73B0\u4E0D\u4E00\u81F4\u7684\u60C5\u51B5\u4E86\u3002\u8FD9\u4E5F\u662F\u7F13\u5B58\u66F4\u65B0\u7B56\u7565\uFF082\uFF09\u91CC\u7559\u4E0B\u7684\u6700\u540E\u4E00\u4E2A\u7591\u95EE\u3002 <strong>\u5982\u4F55\u89E3\u51B3\uFF1F</strong> \u63D0\u4F9B\u4E00\u4E2A\u4FDD\u969C\u7684\u91CD\u8BD5\u673A\u5236\u5373\u53EF\uFF0C\u8FD9\u91CC\u7ED9\u51FA\u4E24\u5957\u65B9\u6848\u3002 <strong>\u65B9\u6848\u4E00</strong>\uFF1A \u5982\u4E0B\u56FE\u6240\u793A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20191008235658639.png" alt="image-20191008235658639"></p><p>\u6D41\u7A0B\u5982\u4E0B\u6240\u793A \uFF081\uFF09\u66F4\u65B0\u6570\u636E\u5E93\u6570\u636E\uFF1B \uFF082\uFF09\u7F13\u5B58\u56E0\u4E3A\u79CD\u79CD\u95EE\u9898\u5220\u9664\u5931\u8D25 \uFF083\uFF09\u5C06\u9700\u8981\u5220\u9664\u7684key\u53D1\u9001\u81F3\u6D88\u606F\u961F\u5217 \uFF084\uFF09\u81EA\u5DF1\u6D88\u8D39\u6D88\u606F\uFF0C\u83B7\u5F97\u9700\u8981\u5220\u9664\u7684key \uFF085\uFF09\u7EE7\u7EED\u91CD\u8BD5\u5220\u9664\u64CD\u4F5C\uFF0C\u76F4\u5230\u6210\u529F \u7136\u800C\uFF0C\u8BE5\u65B9\u6848\u6709\u4E00\u4E2A\u7F3A\u70B9\uFF0C\u5BF9\u4E1A\u52A1\u7EBF\u4EE3\u7801\u9020\u6210\u5927\u91CF\u7684\u4FB5\u5165\u3002\u4E8E\u662F\u6709\u4E86\u65B9\u6848\u4E8C\uFF0C\u5728\u65B9\u6848\u4E8C\u4E2D\uFF0C\u542F\u52A8\u4E00\u4E2A\u8BA2\u9605\u7A0B\u5E8F\u53BB\u8BA2\u9605\u6570\u636E\u5E93\u7684binlog\uFF0C\u83B7\u5F97\u9700\u8981\u64CD\u4F5C\u7684\u6570\u636E\u3002\u5728\u5E94\u7528\u7A0B\u5E8F\u4E2D\uFF0C\u53E6\u8D77\u4E00\u6BB5\u7A0B\u5E8F\uFF0C\u83B7\u5F97\u8FD9\u4E2A\u8BA2\u9605\u7A0B\u5E8F\u4F20\u6765\u7684\u4FE1\u606F\uFF0C\u8FDB\u884C\u5220\u9664\u7F13\u5B58\u64CD\u4F5C\u3002 <strong>\u65B9\u6848\u4E8C</strong>\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20191008235715281.png" alt="image-20191008235715281"></p><p>\u6D41\u7A0B\u5982\u4E0B\u56FE\u6240\u793A\uFF1A \uFF081\uFF09\u66F4\u65B0\u6570\u636E\u5E93\u6570\u636E \uFF082\uFF09\u6570\u636E\u5E93\u4F1A\u5C06\u64CD\u4F5C\u4FE1\u606F\u5199\u5165binlog\u65E5\u5FD7\u5F53\u4E2D \uFF083\uFF09\u8BA2\u9605\u7A0B\u5E8F\u63D0\u53D6\u51FA\u6240\u9700\u8981\u7684\u6570\u636E\u4EE5\u53CAkey \uFF084\uFF09\u53E6\u8D77\u4E00\u6BB5\u975E\u4E1A\u52A1\u4EE3\u7801\uFF0C\u83B7\u5F97\u8BE5\u4FE1\u606F \uFF085\uFF09\u5C1D\u8BD5\u5220\u9664\u7F13\u5B58\u64CD\u4F5C\uFF0C\u53D1\u73B0\u5220\u9664\u5931\u8D25 \uFF086\uFF09\u5C06\u8FD9\u4E9B\u4FE1\u606F\u53D1\u9001\u81F3\u6D88\u606F\u961F\u5217 \uFF087\uFF09\u91CD\u65B0\u4ECE\u6D88\u606F\u961F\u5217\u4E2D\u83B7\u5F97\u8BE5\u6570\u636E\uFF0C\u91CD\u8BD5\u64CD\u4F5C\u3002</p>', 6);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      _hoisted_18,
      createBaseVNode("a", _hoisted_19, [
        _hoisted_20,
        createVNode(_component_ExternalLinkIcon)
      ]),
      _hoisted_21
    ]),
    _hoisted_22
  ]);
}
var Redis__________________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Redis\u4FDD\u8BC1\u7F13\u5B58\u4E0E\u6570\u636E\u5E93\u53CC\u5199\u65F6\u7684\u6570\u636E\u4E00\u81F4\u6027.html.vue"]]);
export { Redis__________________html as default };
