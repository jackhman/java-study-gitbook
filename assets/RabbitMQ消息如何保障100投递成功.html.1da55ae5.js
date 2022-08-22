import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.80478ce0.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="rabbitmq\u6D88\u606F\u5982\u4F55\u4FDD\u969C100-\u6295\u9012\u6210\u529F" tabindex="-1"><a class="header-anchor" href="#rabbitmq\u6D88\u606F\u5982\u4F55\u4FDD\u969C100-\u6295\u9012\u6210\u529F" aria-hidden="true">#</a> RabbitMQ\u6D88\u606F\u5982\u4F55\u4FDD\u969C100%\u6295\u9012\u6210\u529F</h1><h2 id="_1-\u4FDD\u8BC1\u53EF\u9760\u6027\u6295\u9012\u9700\u5177\u5907\u7684\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u4FDD\u8BC1\u53EF\u9760\u6027\u6295\u9012\u9700\u5177\u5907\u7684\u6761\u4EF6" aria-hidden="true">#</a> 1. \u4FDD\u8BC1\u53EF\u9760\u6027\u6295\u9012\u9700\u5177\u5907\u7684\u6761\u4EF6</h2><ol><li><p>\u4FDD\u969C\u6D88\u606F\u7684\u6210\u529F\u53D1\u51FA</p></li><li><p>\u4FDD\u969CMQ\u8282\u70B9\u7684\u6210\u529F\u63A5\u6536</p></li><li><p>\u53D1\u9001\u7AEF\u6536\u5230MQ\u8282\u70B9\uFF08broker\uFF09\u786E\u8BA4\u5E94\u7B54</p></li><li><p>\u5B8C\u5584\u7684\u6D88\u606F\u8865\u507F\u673A\u5236</p></li></ol><p>\u5728\u5B9E\u9645\u751F\u4EA7\u4E2D\uFF0C\u5F88\u96BE\u4FDD\u969C\u524D\u4E09\u70B9\u7684\u5B8C\u5168\u53EF\u9760\uFF0C\u6BD4\u5982\u5728\u6781\u7AEF\u7684\u73AF\u5883\u4E2D\uFF0C\u751F\u4EA7\u8005\u53D1\u9001\u6D88\u606F\u5931\u8D25\u4E86\uFF0C\u53D1\u9001\u7AEF\u5728\u63A5\u53D7\u786E\u8BA4\u5E94\u7B54\u65F6\u7A81\u7136\u53D1\u751F\u7F51\u7EDC\u95EA\u65AD\u7B49\u7B49\u60C5\u51B5\uFF0C\u5F88\u96BE\u4FDD\u969C\u53EF\u9760\u6027\u6295\u9012\uFF0C\u6240\u4EE5\u5C31\u9700\u8981\u6709\u7B2C\u56DB\u70B9\u5B8C\u5584\u7684\u6D88\u606F\u8865\u507F\u673A\u5236\u3002</p><h2 id="_2-\u4E92\u8054\u7F51\u5927\u5382\u7684\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_2-\u4E92\u8054\u7F51\u5927\u5382\u7684\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> 2. <strong>\u4E92\u8054\u7F51\u5927\u5382\u7684\u89E3\u51B3\u65B9\u6848</strong></h2><ul><li><p>\u7B2C\u4E00\u79CD\uFF1A\u6D88\u606F\u843D\u5E93\uFF0C\u5BF9\u6D88\u606F\u72B6\u6001\u8FDB\u884C\u6253\u6807\u3002\u5177\u4F53\u6765\u8BF4\u5C31\u662F\u5C06\u6D88\u606F\u6301\u4E45\u5316\u5230\u6570\u636E\u5E93\u5E76\u8BBE\u7F6E\u72B6\u6001\u503C\uFF0C\u6536\u5230\u6D88\u8D39\u7AEF\u7684\u5E94\u7B54\u5C31\u6539\u53D8\u5F53\u524D\u8BB0\u5F55\u7684\u72B6\u6001\u3002\u518D\u7528\u8F6E\u8BE2\u53BB\u91CD\u65B0\u53D1\u9001\u6CA1\u63A5\u6536\u5230\u5E94\u7B54\u7684\u6D88\u606F\uFF0C\u6CE8\u610F\u8FD9\u91CC\u8981\u8BBE\u7F6E\u91CD\u8BD5\u6B21\u6570\u3002</p></li><li><p>\u7B2C\u4E8C\u79CD\uFF1A\u6D88\u606F\u7684\u5EF6\u8FDF\u6295\u9012\uFF0C\u505A\u4E8C\u6B21\u786E\u8BA4\uFF0C\u56DE\u8C03\u68C0\u67E5\u3002</p></li></ul><h2 id="_3-\u65B9\u6848\u4E00-\u6D88\u606F\u843D\u5E93-\u5BF9\u6D88\u606F\u72B6\u6001\u8FDB\u884C\u6253\u6807" tabindex="-1"><a class="header-anchor" href="#_3-\u65B9\u6848\u4E00-\u6D88\u606F\u843D\u5E93-\u5BF9\u6D88\u606F\u72B6\u6001\u8FDB\u884C\u6253\u6807" aria-hidden="true">#</a> 3. \u65B9\u6848\u4E00\uFF1A<strong>\u6D88\u606F\u843D\u5E93\uFF0C\u5BF9\u6D88\u606F\u72B6\u6001\u8FDB\u884C\u6253\u6807</strong></h2><p>\u6D88\u606F\u843D\u5E93\u7684\u6D41\u7A0B\u56FE</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210514102652979.png" alt="image-20210514102652979"></p><p>\u4EE5\u6211\u4EEC\u7528\u6237\u4E0B\u5355\u6210\u529F\u4E3A\u4F8B\uFF1A</p><ol><li><p>step1: \u5BF9\u6211\u7684\u4E1A\u52A1\u6570\u636E\u8FDB\u884C\u5165\u5E93\uFF0C\u4E1A\u52A1\u6570\u636E\u5165\u5E93\u5B8C\u6BD5\uFF08\u8FD9\u91CC\u8981\u7279\u522B\u6CE8\u610F\u4E00\u5B9A\u8981\u4FDD\u8BC1\u4E1A\u52A1\u6570\u636E\u5165\u5E93\uFF09\u518D\u5BF9\u8981\u53D1\u9001\u7684\u6D88\u606F\u8FDB\u884C\u5165\u5E93\uFF0C</p><blockquote><p>\u56FE\u4E2D\u91C7\u7528\u4E86\u4E24\u4E2A\u6570\u636E\u5E93\uFF0C\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u4E1A\u52A1\u573A\u666F\u6765\u786E\u5B9A\u662F\u5426\u91C7\u7528\u4E24\u4E2A\u6570\u636E\u5E93\uFF0C\u5982\u679C\u91C7\u7528\u4E86\u4E24\u4E2A\u6570\u636E\u5E93\uFF0C\u6709\u4EBA\u53EF\u80FD\u5C31\u50CF\u5230\u4E86\u91C7\u7528\u5206\u5E03\u5F0F\u4E8B\u52A1\u6765\u4FDD\u8BC1\u6570\u636E\u7684\u4E00\u81F4\u6027\uFF0C\u4F46\u662F\u5728\u5927\u578B\u4E92\u8054\u7F51\u4E2D\uFF0C\u57FA\u672C\u5F88\u5C11\u91C7\u7528\u4E8B\u52A1\uFF0C\u90FD\u662F\u91C7\u7528\u8865\u507F\u673A\u5236</p></blockquote></li><li><p>setp2&amp; Step3 &amp; Step 4:</p><ol><li>Step2: \u5BF9\u4E1A\u52A1\u6570\u636E\u548C\u6D88\u606F\u5165\u5E93\u5B8C\u6BD5\u5C31\u8FDB\u5165 setp2\uFF0C\u53D1\u9001\u6D88\u606F\u5230 MQ \u670D\u52A1\u4E0A</li><li>Step3: \u6309\u7167\u6B63\u5E38\u7684\u6D41\u7A0B\u5C31\u662F\u6D88\u8D39\u8005\u76D1\u542C\u5230\u8BE5\u6D88\u606F\uFF0C\u5C31\u6839\u636E\u552F\u4E00 id \u4FEE\u6539\u8BE5\u6D88\u606F\u7684\u72B6\u6001\u4E3A\u5DF2\u6D88\u8D39\uFF0C\u5E76\u7ED9\u4E00\u4E2A\u786E\u8BA4\u5E94\u7B54 ack \u5230 Listener\u3002</li><li>Step4: \u4FEE\u6539msg \u6570\u636E\u5E93\uFF0C\u66F4\u6539\u72B6\u6001</li></ol></li><li><p>Step5 &amp; Step6 :</p><ol><li>Step5: \u5982\u679C\u51FA\u73B0\u610F\u5916\u60C5\u51B5\uFF0C\u6D88\u8D39\u8005\u672A\u63A5\u6536\u5230\u6216\u8005 Listener \u63A5\u6536\u786E\u8BA4\u65F6\u53D1\u751F\u7F51\u7EDC\u95EA\u65AD\uFF0C\u63A5\u6536\u4E0D\u5230\uFF0C\u8FD9\u65F6\u5019\u5C31\u9700\u8981\u7528\u5230\u6211\u4EEC\u7684<strong>\u5206\u5E03\u5F0F\u5B9A\u65F6\u4EFB\u52A1\u6765\u4ECE msg \u6570\u636E\u5E93\u6293\u53D6\u90A3\u4E9B\u8D85\u65F6\u4E86\u8FD8\u672A\u88AB\u6D88\u8D39\u7684\u6D88\u606F</strong>\uFF0C</li><li>Step6: <strong>\u91CD\u65B0\u53D1\u9001\u4E00\u904D</strong>\u3002</li></ol><blockquote><p>\u91CD\u8BD5\u673A\u5236\u91CC\u9762\u8981\u8BBE\u7F6E\u91CD\u8BD5\u6B21\u6570\u9650\u5236\uFF0C\u56E0\u4E3A\u4E00\u4E9B\u5916\u90E8\u7684\u539F\u56E0\u5BFC\u81F4\u4E00\u76F4\u53D1\u9001\u5931\u8D25\u7684\uFF0C\u4E0D\u80FD\u91CD\u8BD5\u592A\u591A\u6B21\uFF0C\u8981\u4E0D\u7136\u4F1A\u62D6\u57AE\u6574\u4E2A\u670D\u52A1\u3002</p></blockquote></li><li><p>Step7: \u4F8B\u5982\u91CD\u8BD5\u4E09\u6B21\u8FD8\u662F\u5931\u8D25\u7684\uFF0C\u5C31\u628A\u6D88\u606F\u7684 status \u8BBE\u7F6E\u6210 2\uFF0C\u7136\u540E\u901A\u8FC7\u8865\u507F\u673A\u5236\uFF0C\u4EBA\u5DE5\u53BB\u5904\u7406\u3002\u5B9E\u9645\u751F\u4EA7\u4E2D\uFF0C\u8FD9\u79CD\u60C5\u51B5\u8FD8\u662F\u6BD4\u8F83\u5C11\u7684\uFF0C\u4F46\u662F\u4F60\u4E0D\u80FD\u6CA1\u6709\u8FD9\u4E2A\u8865\u507F\u673A\u5236\uFF0C\u8981\u4E0D\u7136\u5C31\u505A\u4E0D\u5230\u53EF\u9760\u6027\u4E86\u3002</p></li></ol><h2 id="_4-\u65B9\u6848\u4E8C-\u5EF6\u8FDF\u6295\u9012-\u505A\u4E8C\u6B21\u786E\u8BA4-\u56DE\u8C03\u68C0\u67E5\u3002" tabindex="-1"><a class="header-anchor" href="#_4-\u65B9\u6848\u4E8C-\u5EF6\u8FDF\u6295\u9012-\u505A\u4E8C\u6B21\u786E\u8BA4-\u56DE\u8C03\u68C0\u67E5\u3002" aria-hidden="true">#</a> 4. \u65B9\u6848\u4E8C\uFF1A<strong>\u5EF6\u8FDF\u6295\u9012\uFF0C\u505A\u4E8C\u6B21\u786E\u8BA4\uFF0C\u56DE\u8C03\u68C0\u67E5\u3002</strong></h2><h3 id="_4-1-\u65B9\u6848\u4E00\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_4-1-\u65B9\u6848\u4E00\u7684\u95EE\u9898" aria-hidden="true">#</a> 4.1 \u65B9\u6848\u4E00\u7684\u95EE\u9898\uFF1A</h3><p>\u751F\u4EA7\u7AEF\u65E2\u8981\u5BF9\u4E1A\u52A1\u6570\u636E\u5165\u5E93\uFF0C\u53C8\u8981\u5BF9\u6D88\u606F\u6570\u636E\u5165\u5E93\uFF0C\u8FD9\u79CD\u8BBE\u8BA1\u5728\u9AD8\u5E76\u53D1\u573A\u666F\u4E0B\uFF0C\u771F\u7684\u5408\u9002\u5417\uFF1F\u5728\u6838\u5FC3\u94FE\u8DEF\u4E0A\uFF0C\u6BCF\u4E00\u6B21\u6301\u4E45\u5316\u90FD\u662F\u9700\u8981\u5F88\u7CBE\u5FC3\u8003\u91CF\u7684\uFF0C\u6301\u4E45\u5316\u4E00\u6B21\u5C31\u82B1\u8D39 100 - 200 \u6BEB\u79D2\uFF0C\u8FD9\u5728\u9AD8\u5E76\u53D1\u573A\u666F\u4E0B\u662F\u5FCD\u53D7\u4E0D\u4E86\u7684\u3002</p><h3 id="_4-2-\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_4-2-\u6D41\u7A0B" aria-hidden="true">#</a> 4.2 \u6D41\u7A0B</h3><p>\u8FD9\u65F6\u5019\u9700\u8981\u6211\u4EEC\u7684\u7B2C\u4E8C\u79CD\u65B9\u6848\u4E86\uFF0C\u6D41\u7A0B\u56FE\u5982\u4E0B\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210514092618725.png" alt="image-20210514092618725"></p><ol><li><p>Step1 &amp; Step2:</p><p>upstream Server \u5C31\u662F\u6211\u4EEC\u7684\u4E0A\u6E38\u670D\u52A1\uFF0C\u4E5F\u5C31\u662F\u751F\u4EA7\u8005\uFF0C\u751F\u4EA7\u8005\u5C06\u4E1A\u52A1\u6570\u636E\u5165\u5E93\u6210\u529F\u540E\uFF0C\u751F\u6210\u4E24\u6761\u6D88\u606F</p><ol><li>Step1: \u4E00\u6761\u662F\u7ACB\u5373\u53D1\u9001\u51FA\u53BB\u7ED9\u5230\u4E0B\u6E38\u670D\u52A1 downstream Server\u7684</li><li>Step2: \u4E00\u6761\u662F\u5EF6\u8FDF\u6D88\u606F\u7ED9\u5230 \u8865\u507F\u670D\u52A1 callback Server\u7684\u3002</li></ol></li><li><p>Setp3 &amp; Step4:</p><ol><li>Step3:\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C\u4E0B\u6E38\u670D\u52A1\u76D1\u542C\u5230\u8FD9\u4E2A\u5373\u65F6\u7684\u6D88\u606F</li><li>Step4: \u4F1A\u53D1\u9001\u4E00\u6761\u6D88\u606F\u7ED9\u5230 callback Server\uFF0C\u6CE8\u610F\u8FD9\u91CC\u4E0D\u662F\u91C7\u7528\u7B2C\u4E00\u79CD\u65B9\u6848\u91CC\u9762\u7684\u8FD4\u56DE ack \u65B9\u5F0F\uFF0C\u800C\u662F\u53D1\u9001\u4E86\u4E00\u6761\u6D88\u606F\u7ED9\u56DE\u53BB\u3002</li></ol></li><li><p>Step5 &amp; Step6</p><ol><li>Step5: callback Server \u76D1\u542C\u5230\u8FD9\u4E2A\u6D88\u606F\uFF0C\u77E5\u9053\u4E86\u521A\u624D\u6709\u4E00\u6761\u6D88\u606F\u6D88\u8D39\u6210\u529F\u4E86\uFF0C\u7136\u540E\u628A\u8FD9\u4E2A\u6301\u4E45\u5316\u5230\u6570\u636E\u5E93\u4E2D</li><li>Step6: \u5F53\u4E0A\u6E38\u670D\u52A1\u53D1\u9001\u7684\u5EF6\u8FDF\u6D88\u606F\u5230\u8FBE callback Server \u65F6\uFF0Ccallback Server \u5C31\u4F1A\u53BB\u6570\u636E\u5E93\u67E5\u8BE2\uFF0C\u521A\u624D\u4E0B\u6E38\u670D\u52A1\u662F\u5426\u6709\u5904\u7406\u8FC7\u8FD9\u4E2A\u5BF9\u5E94\u7684\u6D88\u606F\uFF0C\u5982\u679C\u5176 msg DB \u91CC\u9762\u6709\u8FD9\u4E2A\u8BB0\u5F55\u5C31\u8BF4\u660E\u8FD9\u6761\u6D88\u606F\u662F\u5DF2\u7ECF\u88AB\u6D88\u8D39\u4E86\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u8FD9\u4E2A\u8BB0\u5F55\uFF0C\u90A3\u4E48 callback Server \u5C31\u4F1A\u53D1\u8D77\u4E00\u4E2A RPC \u8BF7\u6C42\u7ED9\u5230\u4E0A\u6E38\u670D\u52A1\uFF0C\u544A\u8BC9\u4E0A\u6E38\u670D\u52A1\uFF0C\u4F60\u521A\u624D\u8FD9\u4E2A\u6D88\u606F\u6CA1\u53D1\u9001\u6210\u529F\uFF0C\u9700\u8981\u91CD\u65B0\u53D1\u9001\u4E00\u904D\uFF0C\u4E0A\u6E38\u670D\u52A1\u5C31\u91CD\u65B0\u53D1\u9001\u5373\u65F6\u548C\u5EF6\u8FDF\u7684\u4E24\u6761\u6D88\u606F\u51FA\u53BB\uFF0C\u6309\u7167\u4E4B\u524D\u7684\u6D41\u7A0B\u7EE7\u7EED\u8D70\u4E00\u904D\u3002</li></ol></li></ol><p>\u867D\u7136\u7B2C\u4E8C\u79CD\u65B9\u6848\u4E5F\u662F\u65E0\u6CD5\u505A\u5230 100% \u7684\u53EF\u9760\u4F20\u9012\uFF0C\u5728\u7279\u522B\u6781\u7AEF\u7684\u60C5\u51B5\uFF0C\u8FD8\u662F\u9700\u8981\u5B9A\u65F6\u4EFB\u52A1\u548C\u8865\u507F\u673A\u5236\u8FDB\u884C\u8F85\u52A9\u7684\u3002\u4F46\u662F\u7B2C\u4E8C\u79CD\u65B9\u6848\u7684\u6838\u5FC3\u662F\u51CF\u5C11\u6570\u636E\u5E93\u64CD\u4F5C\uFF0C\u8FD9\u4E2A\u70B9\u5F88\u91CD\u8981\uFF01</p><p>\u5728\u9AD8\u5E76\u53D1\u573A\u666F\u4E0B\uFF0C\u6211\u8003\u8651\u7684\u4E0D\u662F\u767E\u5206\u767E\u7684\u53EF\u9760\u6027\u4E86\uFF0C\u800C\u662F\u8003\u8651\u53EF\u7528\u6027\uFF0C\u6027\u80FD\u80FD\u5426\u625B\u5F97\u4F4F\u8FD9\u4E2A\u6D41\u91CF\uFF0C\u6240\u4EE5\u6211\u80FD\u51CF\u5C11\u4E00\u6B21\u6570\u636E\u5E93\u64CD\u4F5C\u5C31\u51CF\u5C11\u4E00\u6B21\u3002\u6211\u4E0A\u6E38\u670D\u52A1\u51CF\u5C11\u4E86\u4E00\u6B21\u6570\u636E\u5E93\u64CD\u4F5C\uFF0C\u6211\u7684\u670D\u52A1\u6027\u80FD\u76F8\u5BF9\u800C\u8A00\u5C31\u63D0\u9AD8\u4E86\u4E00\u4E9B\uFF0C\u800C\u4E14\u53C8\u80FD\u628A\u5F02\u6B65 callback Server \u8865\u507F\u670D\u52A1\u89E3\u8026\u51FA\u6765\u3002</p><h2 id="_5-\u7ED3\u8BBA" tabindex="-1"><a class="header-anchor" href="#_5-\u7ED3\u8BBA" aria-hidden="true">#</a> 5. \u7ED3\u8BBA</h2><p>\u8FD9\u4E24\u79CD\u65B9\u6848\u90FD\u662F\u53EF\u884C\u7684\uFF0C\u9700\u8981\u6839\u636E\u5B9E\u9645\u4E1A\u52A1\u6765\u8FDB\u884C\u9009\u62E9\uFF0C\u5927\u578B\u7684\u8D85\u9AD8\u5E76\u53D1\u7684\u573A\u666F\u4F1A\u9009\u62E9\u7B2C\u4E8C\u79CD\u65B9\u6848\uFF0C\u666E\u901A\u7684\u5C31\u91C7\u7528\u7B2C\u4E00\u79CD\u5373\u53EF\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 23);
const _hoisted_24 = {
  href: "https://www.jianshu.com/p/1a95ad12dc9d",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_25 = /* @__PURE__ */ createTextVNode("RabbitMQ 100% \u6295\u9012\u6210\u529F\u65B9\u6848\u8BE6\u89E3");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_24, [
        _hoisted_25,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var RabbitMQ______100_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "RabbitMQ\u6D88\u606F\u5982\u4F55\u4FDD\u969C100\u6295\u9012\u6210\u529F.html.vue"]]);
export { RabbitMQ______100_____html as default };
