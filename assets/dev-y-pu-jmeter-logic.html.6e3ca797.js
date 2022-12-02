import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as o,a as l,b as s,d as n,e as r,r as t}from"./app.7a1da930.js";const g={},p=n('<h1 id="jmeter\u903B\u8F91\u63A7\u5236\u5668" tabindex="-1"><a class="header-anchor" href="#jmeter\u903B\u8F91\u63A7\u5236\u5668" aria-hidden="true">#</a> JMeter\u903B\u8F91\u63A7\u5236\u5668</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><blockquote><p>Jmeter\u5B98\u7F51\u5BF9\u903B\u8F91\u63A7\u5236\u5668\u7684\u89E3\u91CA\u662F\uFF1A\u201CLogic Controllers determine the order in which Samplers are processed.\u201D\u3002</p></blockquote><p>\u903B\u8F91\u63A7\u5236\u5668\u53EF\u4EE5<strong>\u63A7\u5236\u91C7\u6837\u5668(samplers)\u7684\u6267\u884C\u987A\u5E8F</strong>\u3002</p><p>\u7531\u6B64\u53EF\u77E5\uFF0C\u63A7\u5236\u5668\u9700\u8981\u548C\u91C7\u6837\u5668\u4E00\u8D77\u4F7F\u7528\uFF0C\u5426\u5219\u63A7\u5236\u5668\u5C31\u6CA1\u6709\u4EC0\u4E48\u610F\u4E49\u4E86\u3002<strong>\u653E\u5728\u63A7\u5236\u5668\u4E0B\u9762\u7684\u6240\u6709\u7684\u91C7\u6837\u5668\u90FD\u4F1A\u5F53\u505A\u4E00\u4E2A\u6574\u4F53\uFF0C\u6267\u884C\u65F6\u4E5F\u4F1A\u4E00\u8D77\u88AB\u6267\u884C\u3002</strong></p><p>JMeter\u903B\u8F91\u63A7\u5236\u5668\u53EF\u4EE5\u5BF9\u5143\u4EF6\u7684\u6267\u884C\u903B\u8F91\u8FDB\u884C\u63A7\u5236\uFF0C\u9664\u4EC5\u4E00\u6B21\u63A7\u5236\u5668\u5916\uFF0C\u5176\u4ED6\u53EF\u4EE5\u5D4C\u5957\u522B\u7684\u79CD\u7C7B\u7684\u903B\u8F91\u63A7\u5236\u5668\u3002</p><h2 id="_2-\u903B\u8F91\u63A7\u5236\u5668\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#_2-\u903B\u8F91\u63A7\u5236\u5668\u5206\u7C7B" aria-hidden="true">#</a> 2. \u903B\u8F91\u63A7\u5236\u5668\u5206\u7C7B</h2><p>JMeter\u4E2D\u7684Logic Controller\u5206\u4E3A\u4E24\u7C7B\uFF1A</p><ul><li><p>\u63A7\u5236\u6D4B\u8BD5\u8BA1\u5212<strong>\u6267\u884C\u8FC7\u7A0B\u4E2D\u8282\u70B9\u7684\u903B\u8F91\u6267\u884C\u987A\u5E8F</strong>\uFF0C</p><p>\u5982\uFF1ALoop Controller\u3001If Controller\u7B49\uFF1B</p></li><li><p>\u5BF9\u6D4B\u8BD5\u8BA1\u5212\u4E2D\u7684<strong>\u811A\u672C\u8FDB\u884C\u5206\u7EC4\u3001\u65B9\u4FBFJMeter\u7EDF\u8BA1\u6267\u884C\u7ED3\u679C\u4EE5\u53CA\u8FDB\u884C\u811A\u672C\u7684\u8FD0\u884C\u65F6\u63A7\u5236</strong>\u7B49\uFF0C</p><p>\u5982\uFF1AThroughput Controller\u3001Transaction Controller\u3002</p></li></ul><h2 id="_3-\u9884\u89C8\u903B\u8F91\u63A7\u5236\u5668\u5BB6\u65CF" tabindex="-1"><a class="header-anchor" href="#_3-\u9884\u89C8\u903B\u8F91\u63A7\u5236\u5668\u5BB6\u65CF" aria-hidden="true">#</a> 3. \u9884\u89C8\u903B\u8F91\u63A7\u5236\u5668\u5BB6\u65CF</h2><p>\u9996\u5148\u6211\u4EEC\u6765\u770B\u4E00\u4E0BJMeter\u7684\u903B\u8F91\u63A7\u5236\u5668\uFF0C\u8DEF\u5F84\uFF1A\u7EBF\u7A0B\u7EC4\uFF08\u7528\u6237\uFF09-&gt;\u6DFB\u52A0-&gt;\u903B\u8F91\u63A7\u5236\u5668\uFF08Logic Controller\uFF09\uFF1B\u6211\u4EEC\u53EF\u4EE5\u6E05\u695A\u5730\u770B\u5230JMeter5\u4E2D\u5171\u670917\u4E2A\u903B\u8F91\u63A7\u5236\u5668\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622134741975.png" alt="image-20220622134741975" loading="lazy"></p><h2 id="_4-\u5E38\u7528\u903B\u8F91\u63A7\u5236\u5668\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#_4-\u5E38\u7528\u903B\u8F91\u63A7\u5236\u5668\u8BE6\u89E3" aria-hidden="true">#</a> 4.\u5E38\u7528\u903B\u8F91\u63A7\u5236\u5668\u8BE6\u89E3</h2><h3 id="_4-1-if-controller" tabindex="-1"><a class="header-anchor" href="#_4-1-if-controller" aria-hidden="true">#</a> 4.1 if Controller</h3><p>\u5728\u5B9E\u9645\u5DE5\u4F5C\u4E2D\uFF0C\u5F53\u4F7F\u7528Jmeter\u8FDB\u884C\u63A5\u53E3\u6D4B\u8BD5\u6216\u8005\u6027\u80FD\u6D4B\u8BD5\u65F6\uFF0C\u6709\u65F6\u9700\u8981\u6839\u636E\u4E0D\u540C\u6761\u4EF6\u505A\u4E0D\u540C\u7684\u64CD\u4F5C\uFF0C\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0CJmeter\u63D0\u4F9B\u4E86IF\u63A7\u5236\u5668\u3002\u987E\u540D\u601D\u4E49\uFF0CIF\u63A7\u5236\u5668\u5B9E\u73B0\u4E86\u4EE3\u7801\u4E2DIF\u7684\u529F\u80FD\uFF0C\u901A\u8FC7\u5224\u65AD\u8868\u8FBE\u5F0F\u7684True/False\u6765\u5224\u5B9A\u662F\u5426\u6267\u884C\u76F8\u5E94\u7684\u64CD\u4F5C\u3002\u901A\u8FC7\u6761\u4EF6\u5224\u65AD\u4E0B\u8FB9\u7684\u8282\u70B9\u6267\u884C\u4E0D\u6267\u884C\u3002</p><ol><li><p>\u6211\u4EEC\u5148\u6765\u770B\u770B\u8FD9\u4E2Aif Controller\u957F\u5F97\u662F\u5565\u6837\u5B50\uFF0C\u8DEF\u5F84\uFF1A<strong>\u7EBF\u7A0B\u7EC4 &gt; \u6DFB\u52A0 &gt; \u903B\u8F91\u63A7\u5236\u5668 &gt; \u5982\u679C (if) \u63A7\u5236\u5668</strong>\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622134857392.png" alt="image-20220622134857392" loading="lazy"></p></li><li><p>\u5173\u952E\u53C2\u6570\u8BF4\u660E\u5982\u4E0B\uFF1A</p><ul><li><p>**Name\uFF1A**\u540D\u79F0\uFF0C\u53EF\u4EE5\u968F\u610F\u8BBE\u7F6E\uFF0C\u751A\u81F3\u4E3A\u7A7A\uFF1B</p></li><li><p>**Comments\uFF1A**\u6CE8\u91CA\uFF0C\u53EF\u968F\u610F\u8BBE\u7F6E\uFF0C\u53EF\u4EE5\u4E3A\u7A7A\u3002</p></li><li><p>**Expression (must evaluate to true or false) \uFF1A**\u8868\u8FBE\u5F0F(\u503C\u5FC5\u987B\u662Ftrue\u6216false)\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5728\u53F3\u8FB9\u6587\u672C\u6846\u4E2D\u8F93\u5165\u7684\u6761\u4EF6\u503C\u5FC5\u987B\u662Ftrue \u6216 false\uFF0C\uFF08\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF09</p></li><li><p>**Interpret Condition as Variable Expression?\uFF1A**\u9ED8\u8BA4\u52FE\u9009\u9879\uFF0C\u5C06\u6761\u4EF6\u89E3\u91CA\u4E3A\u53D8\u91CF\u8868\u8FBE\u5F0F\uFF08\u9700\u8981\u4F7F\u7528__jexl3 or __groovy \u8868\u8FBE\u5F0F\uFF09</p></li><li><p>**Evaluate for all children?\uFF1A**\u6761\u4EF6\u4F5C\u7528\u4E8E\u6BCF\u4E2A\u5B50\u9879\uFF08\u5177\u4F53\u7406\u89E3\u4F1A\u5728\u540E\u8FB9\u5B9E\u6218\u7BC7\u5217\u4E3E\u4F8B\u5B50\u8BF4\u660E\uFF09\uFF0C\u5224\u65AD\u6761\u4EF6\u662F\u5426\u9488\u5BF9\u6240\u6709\u5B50\u8282\u70B9\uFF0C\u9ED8\u8BA4\u4E0D\u52FE\u9009\uFF0C\u53EA\u5728if Controller\u7684\u5165\u53E3\u5904\u5224\u65AD\u4E00\u6B21\u3002</p></li></ul><blockquote><ol><li><p>\u6587\u672C\u6846\u4E0A\u7684\u9EC4\u8272\u611F\u53F9\u53F7\uFF0C\u5C31\u662F\u63D0\u793A\u4F60\uFF0C\u5EFA\u8BAE\u91C7\u7528__jexl3 or __groovy \u8868\u8FBE\u5F0F\uFF0C\u4EE5\u63D0\u9AD8\u6027\u80FD\uFF0C\u4E5F\u5C31\u662F\u9ED8\u8BA4\u7684\u65B9\u5F0F\u3002</p></li><li><p>if \u63A7\u5236\u5668 \u53EA\u80FD\u4F5C\u7528\u4E8E\u5176\u4E0B\u7684\u5B50\u9879</p></li></ol></blockquote></li></ol><h4 id="_4-1-1-\u9ED8\u8BA4\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#_4-1-1-\u9ED8\u8BA4\u7528\u6CD5" aria-hidden="true">#</a> 4.1.1 \u9ED8\u8BA4\u7528\u6CD5</h4><ol><li><p>\u9ED8\u8BA4\u7528\u6CD5\uFF0C\u5C31\u662F\u91C7\u7528__jexl3 or __groovy \u8868\u8FBE\u5F0Fif \u63A7\u5236\u5668\u4E0B\u6709\u4E00\u4E2A \u8BBF\u95EE\u767E\u5EA6\u7684 \u53D6\u6837\u5668\uFF0C\u53EA\u6709if\u6761\u4EF6\u6EE1\u8DB3\u65F6\uFF0C\u624D\u4F1A\u6267\u884C\u8BE5\u53D6\u6837\u5668\u3002\u91C7\u7528\u9ED8\u8BA4\u65B9\u5F0F\uFF0C\u5C06\u6761\u4EF6&#39;zsz&#39;==&#39;zsz&#39;\uFF0C\u653E\u5165 __jexl3\u8868\u8FBE\u5F0F\u4E2D\u3002\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>${__jexl3(&#39;zsz&#39;==&#39;zsz&#39;,)}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622140146988.png" alt="image-20220622140146988" loading="lazy"></p></li><li><p>\u5982\u679C\u4E0D\u77E5\u9053\u8868\u8FBE\u5F0F\u5982\u4F55\u4F7F\u7528\uFF0C\u53EF\u4F7F\u7528Jmeter \u7684\u51FD\u6570\u52A9\u624B\uFF0C<strong>\u51FD\u6570\u52A9\u624B\u56FE\u6807 &gt; \u9009\u62E9_jexl3 &gt; \u5728\u503C\u7684\u8F93\u5165\u6846\u8F93\u5165&#39;zsz&#39;==&#39;zsz&#39; &gt; \u70B9\u51FB\u2018\u751F\u6210\u2019 &gt; \u5168\u9009Ctrl+C\u590D\u5236 &gt; Ctrl+V\u7C98\u8D34\u5230\u8868\u8FBE\u5F0F\u5904</strong> \u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622135619920.png" alt="image-20220622135619920" loading="lazy"></p></li><li><p>\u914D\u7F6E\u597D\u4EE5\u540E\uFF0C\u8FD0\u884CJMeter\uFF0C\u9009\u62E9HTML\uFF0C\u7136\u540E\u67E5\u770B\u7ED3\u679C\u6811\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A <img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622140254353.png" alt="image-20220622140254353" loading="lazy"></p></li></ol><h4 id="_4-1-2\u76F4\u63A5\u8F93\u5165\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-1-2\u76F4\u63A5\u8F93\u5165\u6761\u4EF6" aria-hidden="true">#</a> 4.1.2\u76F4\u63A5\u8F93\u5165\u6761\u4EF6</h4><ol><li><p>\u76F4\u63A5\u8F93\u5165\u53EA\u9700\u8981\u53BB\u6389 \u201C<strong>Interpret Condition as Variable Expression?</strong>\u201D \u524D\u9762\u590D\u9009\u6846\uFF0C\u76F4\u63A5\u8F93\u5165\u6761\u4EF6\uFF1A <strong>&#39;zsz&#39;==&#39;zsz&#39;</strong> \u3002\u8BBF\u95EE\u767E\u5EA6\u7684\u9996\u9875\u7684\u53D6\u6837\u5668\u5C06\u88AB\u6267\u884C\u3002\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622140433258.png" alt="image-20220622140433258" loading="lazy"></p></li><li><p>\u914D\u7F6E\u597D\u4EE5\u540E\uFF0C\u8FD0\u884CJMeter\uFF0C\u9009\u62E9HTML\uFF0C\u7136\u540E\u67E5\u770B\u7ED3\u679C\u6811\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622140522289.png" alt="image-20220622140522289" loading="lazy"></p></li></ol><h4 id="_4-1-3-\u6761\u4EF6\u4E2D\u4F7F\u7528\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_4-1-3-\u6761\u4EF6\u4E2D\u4F7F\u7528\u53D8\u91CF" aria-hidden="true">#</a> 4.1.3 \u6761\u4EF6\u4E2D\u4F7F\u7528\u53D8\u91CF</h4><p>\u6211\u4EEC\u5728\u65E5\u5E38\u5DE5\u4F5C\u4E2D\u5728\u5F88\u591A\u7684\u6D4B\u8BD5\u573A\u666F\u4E0B**\uFF0C\u9700\u8981\u6839\u636E\u7528\u6237\u53D8\u91CF\u6216\u8005\u4E0A\u4E00\u4E2A\u53D6\u6837\u5668\u7684\u8FD4\u56DE\u503C\u6765\u8FDB\u884C\u6761\u4EF6\u5224\u65AD\uFF0C\u4ECE\u800C\u51B3\u5B9A\u662F\u5426\u9700\u8981\u6267\u884C\u67D0\u4E00\u4E2A\u7684\u53D6\u6837\u5668**\u3002</p><ol><li><p>\u9996\u5148\u6211\u4EEC\u65B0\u589E\u4E00\u4E2A\u7528\u6237\u53D8\u91CF\uFF1Azszkey\u3002\u6761\u4EF6\uFF1A<strong>zszkey</strong> \u7684\u503C\u4E3A <strong>zsz</strong> \u7684\u65F6\u5019\uFF0C\u624D\u6267\u884C\u8BBF\u95EE\u767E\u5EA6\u9996\u9875\u7684\u53D6\u6837\u5668\u3002\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p>\u7528\u6237\u53D8\u91CF\u53CA\u914D\u7F6E\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622140730134.png" alt="image-20220622140730134" loading="lazy"></p></li><li><p>IF Controller\u53CA\u914D\u7F6E\uFF0C\u53EF\u4EE5\u7528\u8868\u8FBE\u5F0F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&#39;${zszkey}&#39;==&#39;zsz&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622141150602.png" alt="image-20220622141150602" loading="lazy"></p></li></ol><h4 id="_4-1-4-evaluate-for-all-children-\u7684\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#_4-1-4-evaluate-for-all-children-\u7684\u7528\u6CD5" aria-hidden="true">#</a> 4.1.4 Evaluate for all children? \u7684\u7528\u6CD5</h4><ol><li><p>\u5728\u4E0A\u9762\u7684\u5C0F\u8282\u4E2D\u8BB2\u89E3\u548C\u5206\u4EAB\u4E86\u5728\u6761\u4EF6\u4E2D\u5982\u4F55\u4F7F\u7528\u53D8\u91CF\uFF0C\u6211\u4EEC\u5047\u8BBE\u4E00\u79CD\u6D4B\u8BD5\u573A\u666F\uFF1A\u5982\u679C if \u63A7\u5236\u5668\u4E0B\u7684\u53D6\u6837\u5668\u6267\u884C\u540E\uFF0C\u6539\u53D8\u4E86\u8BE5\u53D8\u91CF\u7684\u503C\uFF0Cif \u63A7\u5236\u5668\u4E0B \u5176\u540E\u7684\u53D6\u6837\u5668\u8FD8\u4F1A\u88AB\u7EE7\u7EED\u6267\u884C\u5417\uFF1F\u4E00\u8D77\u6765\u770B\u770B\u4E0B\u9762\u7684\u5217\u5B50\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622141407756.png" alt="image-20220622141407756" loading="lazy"></p></li><li><p>\u6539\u53D8\u201Czszkey\u201D\u53D8\u91CF\u7684\u503C\u4E3A\u201Czsz01\u201D\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vars.put(&#39;zszkey&#39;,&#39;zsz01&#39;)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622141849119.png" alt="image-20220622141849119" loading="lazy"></p></li><li><p>JMeter\u6267\u884C\u8FC7\u7A0B\u7684\u903B\u8F91\u5206\u6790\uFF1A</p></li><li><p>if \u63A7\u5236\u5668\u4E0B \u6709 3 \u4E2A\u53D6\u6837\u5668\uFF08\u767E\u5EA6\uFF0C\u77E5\u4E4E\uFF0C\u8C46\u74E3\uFF09\uFF0C\u53D8\u91CF zszkey \u7684\u521D\u59CB\u503C\u4E3A zsz\uFF0Cif \u63A7\u5236\u5668\u7684\u6761\u4EF6\u4E3A\uFF1A&#39;${zszkey}&#39;==&#39;zsz&#39;</p></li><li><p>\u5F00\u59CB\u6267\u884C\u7684\u65F6\u5019\u6EE1\u8DB3\u6761\u4EF6\uFF0C\u90A3\u4E48\u6309\u7406\u8BF4\u5E94\u8BE5\u6267\u884C \u767E\u5EA6\uFF0C\u77E5\u4E4E\uFF0C\u8C46\u74E33\u4E2A\u53D6\u6837\u5668\uFF0C</p></li><li><p>\u4F46\u662F <strong>\u8BBF\u95EE\u767E\u5EA6\u9996\u9875</strong> \u6267\u884C\u540E\uFF0C\u5C06 <strong>zszkey</strong> \u7684\u503C\u53D8\u4E86 <strong>zsz01</strong>\uFF0C\u5DF2\u7ECF\u4E0D\u80FD\u6EE1\u8DB3 \uFF1A<strong>&#39;${zszkey}&#39;==&#39;zsz&#39;</strong> \u6761\u4EF6\u3002</p></li><li><p>\u6240\u4EE5 <strong>\u8BBF\u95EE\u77E5\u4E4E</strong> \u8FD9\u4E2A\u53D6\u6837\u5668\u4E0D\u4F1A\u88AB\u6267\u884C\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622142143256.png" alt="image-20220622142143256" loading="lazy"></p></li><li><p>\u5982\u679C\u8FD9\u4E2A\u65F6\u5019\uFF0C\u53BB\u6389 Evaluate for all children? \u7684\u52FE\u9009\uFF0C\u4F1A\u53D1\u751F\u4EC0\u4E48\u5462\uFF0C\u5927\u5BB6\u53EF\u4EE5\u81EA\u5DF1\u52A8\u624B\u8BD5\u8BD5\u3002\u4FEE\u6539\u540E\u8BB0\u5F97\u70B9\u51FB\u201C\u4FDD\u5B58\u201D\u3002\u4E0B\u8FB9\u662F\u7684\u6267\u884C\u7ED3\u679C\uFF0C\u5982\u4E0B\u4E0B\u56FE\u6240\u793A\uFF1A</p><p>\u4E4B\u524D\u6761\u4EF6\u4E0D\u901A\u8FC7\u540E\u9762\u7684\u8C46\u74E3\u5C31\u6CA1\u6709\u6267\u884C\u4E86\u3002\u73B0\u5728\u8C46\u74E3\u7EE7\u7EED\u6267\u884C</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622142615051.png" alt="image-20220622142615051" loading="lazy"></p></li></ol><p>\u53E6\u5916\uFF0C\u5982\u679C\u65F6\u5B57\u7B26\u4E32\u5FC5\u987B\u8981\u7528\u5F15\u53F7\uFF0C\u53D8\u91CF\u90FD\u8BA4\u4E3A\u662F\u5B57\u7B26\u4E32\u7684\u5F62\u5F0F</p><h3 id="_4-2-transaction-controller" tabindex="-1"><a class="header-anchor" href="#_4-2-transaction-controller" aria-hidden="true">#</a> 4.2 Transaction Controller</h3><p><strong>\u4E8B\u52A1\u54CD\u5E94\u65F6\u95F4\u662F\u6211\u4EEC\u8861\u91CF\u4E1A\u52A1\u6027\u80FD\u7684\u4E3B\u8981\u6307\u6807\uFF0C\u4E8B\u52A1\u63A7\u5236\u5668\u53EF\u4EE5\u628A\u5176\u4ED6\u8282\u70B9\u4E0B\u7684\u53D6\u6837\u5668\u6267\u884C\u6D88\u8017\u65F6\u95F4\u7D2F\u52A0\u5728\u4E00\u8D77\uFF0C\u4FBF\u4E8E\u7EDF\u8BA1</strong>\u3002\u540C\u65F6\u5BF9\u6BCF\u4E00\u4E2A\u53D6\u6837\u5668\u7684\u6267\u884C\u65F6\u95F4\u8FDB\u884C\u7EDF\u8BA1\u3002</p><p>\u5982\u679C\u4E8B\u52A1\u63A7\u5236\u5668\u4E0B\u7684\u53D6\u6837\u5668\u6709\u591A\u4E2A\uFF0C\u53EA\u6709\u5F53\u6240\u6709\u7684\u53D6\u6837\u5668\u90FD\u8FD0\u884C\u6210\u529F\uFF0C\u6574\u4E2A\u4E8B\u52A1\u63A7\u5236\u5668\u5B9A\u4E49\u7684\u4E8B\u7269\u624D\u7B97\u6210\u529F\u3002</p><p>\u7528\u4E8E\u5C06Test Plan\u4E2D\u7684\u7279\u5B9A\u90E8\u5206\u7EC4\u7EC7\u6210\u4E00\u4E2ATransaction\uFF0CJMeter\u4E2DTransaction\u7684\u4F5C\u7528\u5728\u4E8E\uFF0C\u53EF\u4EE5\u9488\u5BF9Transaction\u7EDF\u8BA1\u5176\u54CD\u5E94\u65F6\u95F4\u3001\u541E\u5410\u91CF\u7B49\u3002\u6BD4\u5982\u8BF4\uFF0C\u4E00\u4E2A\u7528\u6237\u64CD\u4F5C\u53EF\u80FD\u9700\u8981\u591A\u4E2ASampler\u6765\u6A21\u62DF\uFF0C\u6B64\u65F6\u4F7F\u7528Transaction Controller\uFF0C\u53EF\u4EE5\u66F4\u51C6\u786E\u5730\u5F97\u5230\u8BE5\u7528\u6237\u64CD\u4F5C\u7684\u6027\u80FD\u6307\u6807\uFF0C\u5982\u54CD\u5E94\u65F6\u95F4\u7B49\u3002\u8FD9\u4E2A\u65F6\u95F4\u5305\u542B\u8BE5\u63A7\u5236\u5668\u8303\u56F4\u5185\u7684\u6240\u6709\u5904\u7406\u65F6\u95F4\uFF0C\u800C\u4E0D\u4EC5\u4EC5\u662F\u91C7\u6837\u5668\u7684\u3002</p><p>\u8FD9\u4E2A\u5C31\u975E\u5E38\u6709\u7528\u4E86\u3002\u6211\u4EEC\u524D\u9762\u6709\u63D0\u5230\u8FC7\u4E8B\u52A1\u7684\u6982\u5FF5\uFF0C\u6709\u65F6\u5019\u6211\u4EEC\u4E0D\u5173\u5FC3\u5355\u4E2A\u8BF7\u6C42\u7684\u54CD\u5E94\u65F6\u95F4\uFF0C\u800C\u662F\u5173\u5FC3\u4E00\u7EC4\u76F8\u5173\u8BF7\u6C42\u7684\u6574\u4F53\u54CD\u5E94\u65F6\u95F4\uFF0C\u600E\u4E48\u6765\u7EDF\u8BA1\u5462\uFF1F\u5C31\u9700\u8981\u501F\u52A9\u4E8B\u52A1\u8FD9\u4E2A\u6982\u5FF5\uFF0C\u628A\u8FD9\u7EC4\u8BF7\u6C42\uFF0C\u653E\u5230\u4E00\u4E2A\u4E8B\u52A1\u63A7\u5236\u5668\u4E0B\u9762\u3002</p><ol><li><p>\u6211\u4EEC\u5148\u6765\u770B\u770B\u8FD9\u4E2ATransaction Controller\u957F\u5F97\u662F\u5565\u6837\u5B50\uFF0C\u8DEF\u5F84\uFF1A<strong>\u7EBF\u7A0B\u7EC4 &gt; \u6DFB\u52A0 &gt; \u903B\u8F91\u63A7\u5236\u5668 &gt; \u4E8B\u52A1\u63A7\u5236\u5668</strong>\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622143034887.png" alt="image-20220622143034887" loading="lazy"></p></li><li><p>\u5173\u952E\u53C2\u6570\u8BF4\u660E\u5982\u4E0B\uFF1A</p></li></ol><ul><li><p>**Name\uFF1A**\u540D\u79F0\uFF0C\u53EF\u4EE5\u968F\u610F\u8BBE\u7F6E\uFF0C\u751A\u81F3\u4E3A\u7A7A\uFF1B</p></li><li><p>**Comments\uFF1A**\u6CE8\u91CA\uFF0C\u53EF\u968F\u610F\u8BBE\u7F6E\uFF0C\u53EF\u4EE5\u4E3A\u7A7A\uFF1B</p></li><li><p>**generate parent sample\uFF1A**\u9009\u62E9\u662F\u5426\u751F\u6210\u4E00\u4E2A\u7236\u53D6\u6837\u5668\uFF1B</p></li><li><p>**include duration of timer and pre-post processors in generated samle\uFF1A**\u662F\u5426\u5305\u542B\u5B9A\u65F6\u5668\uFF0C\u9009\u62E9\u5C06\u5728\u53D6\u6837\u5668\u524D\u4E0E\u540E\u52A0\u4E0A\u5EF6\u65F6\u3002\uFF08\u5B8F\u54E5\u5EFA\u8BAE\u5927\u5BB6\u4E0D\u8981\u52FE\u9009\uFF0C\u5426\u5219\u7EDF\u8BA1\u5C31\u6BD4\u8F83\u9EBB\u70E6\u4E86\uFF0C\u8FD8\u9700\u8981\u4F60\u6263\u9664\u5EF6\u65F6\uFF09</p></li></ul><h4 id="_4-2-1-generate-parent-sample\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#_4-2-1-generate-parent-sample\u7528\u6CD5" aria-hidden="true">#</a> 4.2.1 generate parent sample\u7528\u6CD5</h4><h5 id="_4-2-1-1-\u5B9E\u4F8B\u4E00-\u5206\u5F00\u7EDF\u8BA1" tabindex="-1"><a class="header-anchor" href="#_4-2-1-1-\u5B9E\u4F8B\u4E00-\u5206\u5F00\u7EDF\u8BA1" aria-hidden="true">#</a> 4.2.1.1 \u5B9E\u4F8B\u4E00\uFF1A\u5206\u5F00\u7EDF\u8BA1</h5><p>\u5217\u4E3E\u4E00\u4E2A\u6D4B\u8BD5\u573A\u666F\uFF1A\u6211\u4EEC\u9700\u8981\u4E86\u89E3 \u8BBF\u95EE\u767E\u5EA6\u9996\u9875\uFF0C\u641C\u7D22jmeter\u5173\u952E\u8BCD \u8FD9\u4E24\u4E2A\u8BF7\u6C42\u7684\u5355\u4E2A\u8BF7\u6C42\u7684\u54CD\u5E94\u65F6\u95F4\uFF0C\u90A3\u4E48\u5C31\u6765\u770B\u770B\u5982\u4E0B\u5B9E\u4F8B\u3002</p><ol><li><p>\u5355\u4E2A\u8BF7\u6C42\uFF0C\u90A3\u4E48\u4E0D\u52FE\u9009generate parent sample\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622143556321.png" alt="image-20220622143556321" loading="lazy"></p></li><li><p>\u8FD0\u884CJMeter\uFF0C\u67E5\u770B\u805A\u5408\u62A5\u544A\u7684\u5355\u4E2A\u8BF7\u6C42\u7684\u54CD\u5E94\u65F6\u95F4\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622143707200.png" alt="image-20220622143707200" loading="lazy"></p></li></ol><h5 id="_4-2-1-2-\u5B9E\u4F8B\u4E00-\u805A\u5408\u7EDF\u8BA1" tabindex="-1"><a class="header-anchor" href="#_4-2-1-2-\u5B9E\u4F8B\u4E00-\u805A\u5408\u7EDF\u8BA1" aria-hidden="true">#</a> 4.2.1.2 \u5B9E\u4F8B\u4E00\uFF1A\u805A\u5408\u7EDF\u8BA1</h5><p>\u518D\u5217\u4E3E\u4E00\u4E2A\u6D4B\u8BD5\u573A\u666F\uFF1A\u6211\u4EEC\u9700\u8981\u4E86\u89E3 \u8BBF\u95EE\u767E\u5EA6\u9996\u9875 \u8BBF\u95EE\u767E\u5EA6\u641C\u7D22jmeter\u8FD9\u4E24\u4E2A\u8BF7\u6C42\u4F5C\u4E3A\u4E00\u7EC4\u8BF7\u6C42\u7684\u54CD\u5E94\u65F6\u95F4\uFF0C\u90A3\u4E48\u5C31\u6765\u770B\u770B\u5982\u4E0B\u5B9E\u4F8B\u3002</p><ol><li><p>\u4E00\u7EC4\u8BF7\u6C42\uFF0C\u90A3\u4E48\u52FE\u9009generate parent sample\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622143825684.png" alt="image-20220622143825684" loading="lazy"></p></li><li><p>\u8FD0\u884CJMeter\uFF0C\u67E5\u770B\u805A\u5408\u62A5\u544A\u7684\u4E00\u7EC4\u8BF7\u6C42\u7684\u54CD\u5E94\u65F6\u95F4\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622143858396.png" alt="image-20220622143858396" loading="lazy"></p></li></ol><h3 id="_4-3-loop-controller" tabindex="-1"><a class="header-anchor" href="#_4-3-loop-controller" aria-hidden="true">#</a> 4.3 Loop Controller</h3><p>\u5FAA\u73AF\u63A7\u5236\u5668\u53EF\u4EE5\u63A7\u5236\u5728\u5176\u8282\u70B9\u4E0B\u7684\u5143\u4EF6\u7684\u6267\u884C\u6B21\u6570\uFF0C\u53EF\u4EE5\u662F\u5177\u4F53\u6570\u5B57\uFF0C\u4E5F\u53EF\u4EE5\u662F\u53D8\u91CF\u3002</p><ol><li><p>\u6211\u4EEC\u5148\u6765\u770B\u770B\u8FD9\u4E2ALoop Controller\u957F\u5F97\u662F\u5565\u6837\u5B50\uFF0C\u9ED8\u8BA4\u5FAA\u73AF\u4E00\u6B21\u3002\u8DEF\u5F84\uFF1A<strong>\u7EBF\u7A0B\u7EC4 &gt; \u6DFB\u52A0 &gt; \u903B\u8F91\u63A7\u5236\u5668 &gt; \u5FAA\u73AF\u63A7\u5236\u5668</strong>\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622144029235.png" alt="image-20220622144029235" loading="lazy"></p></li><li><p>\u5173\u952E\u53C2\u6570\u8BF4\u660E\u5982\u4E0B\uFF1A</p></li></ol><ul><li><p>**Name\uFF1A**\u540D\u79F0\uFF0C\u53EF\u4EE5\u968F\u610F\u8BBE\u7F6E\uFF0C\u751A\u81F3\u4E3A\u7A7A\uFF1B</p></li><li><p>**Comments\uFF1A**\u6CE8\u91CA\uFF0C\u53EF\u968F\u610F\u8BBE\u7F6E\uFF0C\u53EF\u4EE5\u4E3A\u7A7A\uFF1B</p></li><li><p>**Forever\uFF1A**\u52FE\u9009\u4E0A\u8FD9\u4E00\u9879\u8868\u793A\u4E00\u76F4\u5FAA\u73AF\u4E0B\u53BB\u3002</p></li></ul><blockquote><p><strong>\u6CE8\u610F\uFF1A\u6572\u9ED1\u677F\uFF0C\u6572\u8111\u58F3\uFF01\uFF01\uFF01</strong></p><p>\u5982\u679C\u540C\u65F6\u8BBE\u7F6E\u4E86\u7EBF\u7A0B\u7EC4\u7684\u5FAA\u73AF\u6B21\u6570\u548C\u5FAA\u73AF\u63A7\u5236\u5668\u7684\u5FAA\u73AF\u6B21\u6570\uFF0C\u90A3<strong>\u5FAA\u73AF\u63A7\u5236\u5668\u7684\u5B50\u8282\u70B9\u8FD0\u884C\u7684\u6B21\u6570\u4E3A\u4E24\u4E2A\u6570\u503C\u76F8\u4E58\u7684\u7ED3\u679C</strong>\u3002</p></blockquote><h5 id="_4-3-1-thread-group\u548C\u5FAA\u73AF\u63A7\u5236\u5668\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_4-3-1-thread-group\u548C\u5FAA\u73AF\u63A7\u5236\u5668\u7684\u533A\u522B" aria-hidden="true">#</a> 4.3.1 Thread Group\u548C\u5FAA\u73AF\u63A7\u5236\u5668\u7684\u533A\u522B</h5><p>\u73B0\u5728\u51C6\u5907\u4E24\u4E2A\u8BF7\u6C42\uFF0C\u8BBE\u7F6E\u7EBF\u7A0B\u7EC41\u4E2A\u7EBF\u7A0B\uFF0C5\u6B21loop\uFF0C\u4E0B\u8FB9\u6709\u4E00\u4E2A\u8BF7\u6C42\uFF1A<strong>\u8BBF\u95EE\u767E\u5EA6\u9996\u9875</strong> \u4E00\u4E2ALoop Controller\uFF08\u8BBE\u7F6E2\u6B21loop\uFF09\uFF0C\u4E0B\u8FB9\u6709\u4E00\u4E2A\u8BF7\u6C42\uFF1A<strong>\u8BBF\u95EE\u535A\u5BA2\u56ED\u9996\u9875</strong></p><ol><li><p>\u7EBF\u7A0B\u7EC4\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622144251550.png" alt="image-20220622144251550" loading="lazy"></p></li><li><p>\u5FAA\u73AF\u63A7\u5236\u5668\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622144550864.png" alt="image-20220622144550864" loading="lazy"></p></li><li><p>\u8FD0\u884CJMeter\uFF0C\u67E5\u770B\u7ED3\u679C\u6811\uFF0C\u4E3A\u4E86\u6E05\u695A\u5730\u770B\u51FA\u7ED3\u679C\uFF0C\u5C06\u7B2C\u4E00\u4E2A\u8BF7\u6C42\u6545\u610F\u914D\u7F6E\u6210\u5931\u8D25\u7684\uFF1B\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622144613462.png" alt="image-20220622144613462" loading="lazy"></p></li></ol><p>\u4ECE\u4E0A\u8FB9\u7684\u7ED3\u679C\u53EF\u4EE5\u770B\u51FA\uFF1A</p><ul><li><p>\u5982\u679C\u540C\u65F6\u8BBE\u7F6E\u4E86\u7EBF\u7A0B\u7EC4\u7684\u5FAA\u73AF\u6B21\u6570\u548C\u5FAA\u73AF\u63A7\u5236\u5668\u7684\u5FAA\u73AF\u6B21\u6570\uFF0C\u90A3\u5FAA\u73AF\u63A7\u5236\u5668\u7684\u5B50\u8282\u70B9\u8FD0\u884C\u7684\u6B21\u6570\u4E3A\u4E24\u4E2A\u6570\u503C\u76F8\u4E58\u7684\u7ED3\u679C\u3002</p></li><li><p>\u8FD0\u884C\u987A\u5E8F\u662F\uFF1A\u5148\u6267\u884C\u7EBF\u7A0B\u7EC4\u91CC\u7684\u5FAA\u73AF\uFF0C\u518D\u6267\u884C\u5FAA\u73AF\u63A7\u5236\u5668\u91CC\u7684\u5FAA\u73AF\u3002</p></li></ul><h3 id="_4-4-while-controller" tabindex="-1"><a class="header-anchor" href="#_4-4-while-controller" aria-hidden="true">#</a> 4.4 While Controller</h3><p>While\u6761\u4EF6\u63A7\u5236\u5668\uFF0C\u5176\u8282\u70B9\u4E0B\u7684\u5143\u4EF6\u5C06\u4E00\u76F4\u8FD0\u884C\u76F4\u5230While \u6761\u4EF6\u4E3Afalse\u3002</p><ol><li><p>\u6211\u4EEC\u5148\u6765\u770B\u770B\u8FD9\u4E2AWhile Controller\u957F\u5F97\u662F\u5565\u6837\u5B50\uFF0C\u9ED8\u8BA4\u5FAA\u73AF\u4E00\u6B21\u3002\u8DEF\u5F84\uFF1A<strong>\u7EBF\u7A0B\u7EC4 &gt; \u6DFB\u52A0 &gt; \u903B\u8F91\u63A7\u5236\u5668 &gt; While\u63A7\u5236\u5668</strong>\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622144731040.png" alt="image-20220622144731040" loading="lazy"></p></li><li><p>\u5173\u952E\u53C2\u6570\u8BF4\u660E\u5982\u4E0B\uFF1A</p></li></ol><ul><li><p>**Name\uFF1A**\u540D\u79F0\uFF0C\u53EF\u4EE5\u968F\u610F\u8BBE\u7F6E\uFF0C\u751A\u81F3\u4E3A\u7A7A\uFF1B</p></li><li><p>**Comments\uFF1A**\u6CE8\u91CA\uFF0C\u53EF\u968F\u610F\u8BBE\u7F6E\uFF0C\u53EF\u4EE5\u4E3A\u7A7A\uFF1B</p></li><li><p>**Condition\uFF1A**\u63A5\u53D7\u53D8\u91CF\u8868\u8FBE\u5F0F\u4E0E\u53D8\u91CF\u3002\u6761\u4EF6\u4E3A Flase \u7684\u65F6\u5019\uFF0C\u624D\u4F1A\u8DF3\u51FA While \u5FAA\u73AF\uFF0C\u5426\u5219\u4E00\u76F4\u6267\u884C While \u63A7\u5236\u5668\u4E0B\u7684\u5143\u4EF6\u3002</p></li></ul><ol start="3"><li>While\u63A7\u5236\u5668\u63D0\u4F9B\u4E09\u4E2A\u5E38\u91CF</li></ol><ul><li><p>Blank\uFF1A\u5F53\u5FAA\u73AF\u4E2D\u6700\u540E\u4E00\u4E2A\u53D6\u6837\u5668\u5931\u8D25\u540E\u505C\u6B62</p></li><li><p>LAST\uFF1A\u5F53\u5FAA\u6362\u524D\u6709\u53D6\u6837\u5668\u5931\u8D25\uFF0C\u4E0D\u8FDB\u5165\u5FAA\u73AF</p></li><li><p>Otherwise\uFF1A\u5F53\u5224\u65AD\u6761\u4EF6\u4E3Afalse\u65F6\uFF0C\u505C\u6B62\u5FAA\u73AF</p></li></ul><h5 id="_4-4-1blank" tabindex="-1"><a class="header-anchor" href="#_4-4-1blank" aria-hidden="true">#</a> 4.4.1Blank</h5><ol><li><p>\u4E0D\u586B\uFF08\u7A7A\uFF09\uFF1A\u5F53 While \u63A7\u5236\u5668\u4E0B<strong>\u6700\u540E\u4E00\u4E2A</strong>\u6837\u4F8B\u6267\u884C\u5931\u8D25\u540E \u8DF3\u51FA\u5FAA\u73AF\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622144931238.png" alt="image-20220622144931238" loading="lazy"></p></li><li><p>\u8FD0\u884CJMeter\uFF0C\u67E5\u770B\u7ED3\u679C\u6811\uFF0C\uFF08\u4F60\u53EF\u4EE5\u901A\u8FC7\u9F20\u6807\u62D6\u52A8\u6700\u540E\u5931\u8D25\u7684\u53D6\u6837\u5668\uFF0C\u79FB\u52A8\u5230\u7B2C\u4E00\u4E2A\u6216\u8005\u7B2C\u4E8C\u4E2A\u4F4D\u7F6E\u7684\u65F6\u5019\uFF0C\u8FD0\u884CJMeter\u540E\uFF0C\u4F1A\u53D1\u73B0\u5728\u4E00\u76F4\u8FD0\u884C\uFF09\uFF1B\u5982\u4E0B\u56FE\u6240\u793A\uFF1A(\u6CA1\u7406\u89E3)</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622145252566.png" alt="image-20220622145252566" loading="lazy"></p></li></ol><h5 id="_4-4-2-last" tabindex="-1"><a class="header-anchor" href="#_4-4-2-last" aria-hidden="true">#</a> 4.4.2 LAST</h5><p>LAST \uFF1A\u5F53 While \u63A7\u5236\u5668\u4E0B<strong>\u6700\u540E\u4E00\u4E2A</strong>\u6837\u4F8B\u6267\u884C\u5931\u8D25\u540E \u8DF3\u51FA\u5FAA\u73AF\uFF0C<strong>\u5982\u679C While \u63A7\u5236\u5668 \u524D\u4E00\u4E2A\u6837\u4F8B\u6267\u884C\u5931\u8D25\uFF0C\u5219\u4E0D\u4F1A\u8FDB\u5165While\u5FAA\u73AF\uFF0C\u4E5F\u5C31\u662F\u4E0D\u4F1A\u6267\u884CWhile\u63A7\u5236\u5668\u4E0B\u7684\u6837\u4F8B\u3002</strong></p><ol><li><p>\u53D6\u6837\u5668\u6811\u8FD8\u662F\u4E0A\u8FB9\u7684\u4F4D\u7F6E\u548C\u987A\u5E8F\u3002\u8FD9\u6B21\u6211\u4EEC\u5728While\u63A7\u5236\u5668\u8868\u8FBE\u5F0F\u5904\u586B\u5199\uFF1ALAST\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622145355098.png" alt="image-20220622145355098" loading="lazy"></p></li><li><p>\u8FD0\u884CJMeter\uFF0C\u67E5\u770B\u7ED3\u679C\u6811\uFF0C\uFF08\u4F60\u53EF\u4EE5\u901A\u8FC7\u9F20\u6807\u62D6\u52A8\u6700\u540E\u5931\u8D25\u7684\u53D6\u6837\u5668\uFF0C\u79FB\u52A8\u5230\u7B2C\u4E00\u4E2A\u6216\u8005\u7B2C\u4E8C\u4E2A\u4F4D\u7F6E\u7684\u65F6\u5019\uFF0C\u8FD0\u884CJMeter\u540E\uFF0C\u4F1A\u53D1\u73B0\u5728\u4E00\u76F4\u8FD0\u884C\uFF09\uFF1B\u7EC6\u5FC3\u7684\u4F60<strong>\u53EF\u4EE5\u53D1\u73B0\u5FAA\u73AF\u53EA\u8DD1\u4E00\u904D</strong></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622145424566.png" alt="image-20220622145424566" loading="lazy"></p></li><li><p>\u4F46\u662F\u8F93\u5165LAST\u7684\u65F6\u5019\uFF0C\u8FD8\u4F1A\u51FA\u73B0\u4E00\u4E2A\u7ED3\u679C\uFF0C\u90A3\u5C31\u662F\uFF1A\u5982\u679CWhile \u63A7\u5236\u5668 \u7684\u524D\u4E00\u4E2A\u6837\u4F8B\u6267\u884C\u5931\u8D25\uFF0C\u5219\u4E0D\u4F1A\u8FDB\u5165While \u63A7\u5236\u5668</p><p>\u5728While \u63A7\u5236\u5668 \u524D\u9762 \u6DFB\u52A0\u4E24\u4E2A\u53D6\u6837\u5668\uFF1A\u53D6\u6837\u56681 <strong>\u8BBF\u95EE\u767E\u5EA6</strong>\uFF0C\u53D6\u6837\u56682 <strong>\u8BBF\u95EE\u5317\u4EAC\u5B8F\u54E5</strong> \u4F7F\u53D6\u6837\u56682 <strong>\u8BBF\u95EE\u5317\u4EAC\u5B8F\u54E5</strong> \u6267\u884C\u5931\u8D25\u3002\u53D6\u6837\u56682\u5FC5\u987B\u5728While\u63A7\u5236\u5668\u524D\u8FB9\u4E14\u6267\u884C\u5931\u8D25\u3002\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622145551396.png" alt="image-20220622145551396" loading="lazy"></p></li><li><p>\u8FD0\u884CJMeter\uFF0C\u67E5\u770B\u7ED3\u679C\u6811\uFF0C\u6267\u884C\u7ED3\u679C\u53D1\u73B0\uFF0C\u53D6\u6837\u56681\u3001\u53D6\u6837\u56682 \u6267\u884C\u4E86\uFF0C\u4F46\u6CA1\u6709\u8FDB\u5165While \u63A7\u5236\u5668\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622145612368.png" alt="image-20220622145612368" loading="lazy"></p></li></ol><h5 id="_4-4-3-otherwise" tabindex="-1"><a class="header-anchor" href="#_4-4-3-otherwise" aria-hidden="true">#</a> 4.4.3 Otherwise</h5><p>\u81EA\u5B9A\u4E49\u6761\u4EF6\uFF1A\u503C\u4E3ATrue \u6216 False\u7684\u51FD\u6570/\u53D8\u91CF/\u5C5E\u6027 \u8868\u8FBE\u5F0F\uFF1B\u7C7B\u4F3C\u524D\u8FB9\u8BB2\u89E3\u7684IF\u63A7\u5236\u5668\uFF0C\u5B8F\u54E5\u8FD9\u91CC\u5C31\u7167\u732B\u753B\u864E\u7684\u4E3E\u4E2A\u4F8B\u5B50\u3002</p><ol><li><p>\u7528\u6237\u81EA\u5B9A\u4E49\u53D8\u91CF\uFF0C\u53D8\u91CF\u540D\uFF1A\u5317\u4EAC\u5B8F\u54E5\uFF0C\u53D8\u91CF\u503C\uFF1Atrue\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622145637666.png" alt="image-20220622145637666" loading="lazy"></p></li><li><p>While\u63A7\u5236\u5668\u914D\u7F6E\uFF0C\u53D6\u5230\u53D8\u91CF\u7684\u503C\uFF1A${\u5317\u4EAC\u5B8F\u54E5}\uFF0C\u586B\u5199\u5230\u8868\u8FBE\u5F0F\u7684\u5730\u65B9\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622145653128.png" alt="image-20220622145653128" loading="lazy"></p></li><li><p>JMeter\u6267\u884C\u8FC7\u7A0B\u7684\u903B\u8F91\u5206\u6790\uFF1A</p></li></ol><p>\uFF081\uFF09\u5317\u4EAC\u5B8F\u54E5\u7528\u6237\uFF08\u7EBF\u7A0B\u7EC4\uFF09\u4E0B \u6709 1 \u4E2A\u7528\u6237\u81EA\u5B9A\u4E49\u53D8\u91CF\uFF0C\u53D8\u91CF <strong>\u5317\u4EAC\u5B8F\u54E5</strong> \u7684\u503C\u4E3A <strong>true</strong>\uFF0CWhile\u63A7\u5236\u5668\u7684\u6761\u4EF6\u4E3A\uFF1A<strong>${\u5317\u4EAC\u5B8F\u54E5}</strong> \u53D6\u5230\u7684\u503C\u59CB\u7EC8\u662F <strong>true</strong>\u3002</p><p>\uFF082\uFF09\u6240\u4EE5\u4E00\u65E6\u5F00\u59CB\u6267\u884C\u59CB\u7EC8\u6EE1\u8DB3\u6761\u4EF6\uFF0C\u90A3\u4E48\u6309\u7406\u8BF4\u5C31\u5E94\u8BE5\u4E00\u76F4\u6267\u884C <strong>\u8BBF\u95EE\u535A\u5BA2\u56ED\u9996\u9875</strong> \u3001<strong>\u8BBF\u95EE\u5317\u4EAC\u5B8F\u54E5\u7684\u535A\u5BA2\u56ED\u9996\u9875</strong>\u3001<strong>\u8BBF\u95EE\u5B8F\u54E5\u7684JMeter\u7CFB\u5217\u6587\u7AE0</strong> 3\u4E2A\u53D6\u6837\u5668\uFF0C</p><ol start="4"><li>\u8FD0\u884CJMeter\uFF0C\u67E5\u770B\u7ED3\u679C\u6811\uFF0C\uFF08\u8FD0\u884CJMeter\u540E\uFF0C\u4F1A\u53D1\u73B0\u5728\u4E00\u76F4\u8FD0\u884C\uFF09\uFF0C\u5BF9\u6BD4\u4E00\u4E0B\uFF0C\u4E0E\u5B8F\u54E5\u7684\u5206\u6790\u662F\u4E0D\u662F\u9AD8\u5EA6\u4E00\u81F4\u54C8\uFF1B\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</li></ol><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622145712398.png" alt="image-20220622145712398" loading="lazy"></p><h3 id="_4-5-once-only-controller" tabindex="-1"><a class="header-anchor" href="#_4-5-once-only-controller" aria-hidden="true">#</a> 4.5 Once Only Controller</h3><p>\u5728\u6BCF\u4E2A\u7EBF\u7A0B\u5185\uFF0C<strong>\u8BE5\u63A7\u5236\u5668\u4E0B\u7684\u5185\u5BB9\u53EA\u4F1A\u88AB\u6267\u884C\u4E00\u904D\uFF0C\u65E0\u8BBA\u5FAA\u73AF\u591A\u5C11\u6B21\uFF0C\u90FD\u53EA\u6267\u884C\u4E00\u904D\u3002</strong></p><blockquote><p>\u5D4C\u5957\u5728\u5FAA\u73AF\u63A7\u5236\u5668\u4E4B\u5185\u65F6\u662F\u4E2A\u4F8B\u5916\uFF0C\u6BCF\u4E2A\u7EBF\u7A0B\u7EC4\u5FAA\u73AF\u90FD\u4F1A\u88AB\u6267\u884C\u4E00\u904D</p></blockquote><p>\u6B64\u63A7\u5236\u5668\u901A\u5E38\u7528\u4E8E\u63A7\u5236\u9700\u8981\u767B\u5F55\u7684\u8BF7\u6C42\uFF0C\u6D4B\u8BD5\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u5F80\u5F80\u90FD\u53EA\u9700\u8981\u767B\u5F55\u4E00\u6B21\uFF0C\u83B7\u53D6\u5230\u5BF9\u5E94\u7684\u767B\u5F55\u4FE1\u606F\u540E\u5373\u53EF\u6267\u884C\u540E\u7EED\u76F8\u5173\u7684\u8BF7\u6C42\uFF0C\u800C\u4E0D\u662F\u6BCF\u6267\u884C\u4E00\u4E2A\u8BF7\u6C42\u90FD\u767B\u5F55\u4E00\u6B21\uFF0C\u5982\u5C06login\u8BF7\u6C42\u653E\u5165\u4EC5\u4E00\u6B21\u63A7\u5236\u5668\uFF0C\u5219\u5728\u7EBF\u7A0B\u7EC4\u5FAA\u73AF\u8FD0\u884C\u671F\u95F4\uFF0C\u4E0D\u8BBA\u5FAA\u73AF\u6B21\u6570\u8BBE\u7F6E\u4E3A\u591A\u5C11\u6B21\uFF0Clogin\u8BF7\u6C42\u90FD\u5C06\u4EC5\u5728\u7B2C\u4E00\u6B21\u6267\u884C\u65F6\u8FD0\u884C</p><ol><li><p>\u6211\u4EEC\u5148\u6765\u770B\u770B\u8FD9\u4E2AOnce Only Controller\u957F\u5F97\u662F\u5565\u6837\u5B50\uFF0C\u8DEF\u5F84\uFF1A<strong>\u7EBF\u7A0B\u7EC4 &gt; \u6DFB\u52A0 &gt; \u903B\u8F91\u63A7\u5236\u5668 &gt; \u4EC5\u4E00\u6B21\u63A7\u5236\u5668</strong>\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622150049842.png" alt="image-20220622150049842" loading="lazy"></p></li><li><p>\u5173\u952E\u53C2\u6570\u8BF4\u660E\u5982\u4E0B\uFF1A</p></li></ol><ul><li><p>**Name\uFF1A**\u540D\u79F0\uFF0C\u53EF\u4EE5\u968F\u610F\u8BBE\u7F6E\uFF0C\u751A\u81F3\u4E3A\u7A7A\uFF1B</p></li><li><p>**Comments\uFF1A**\u6CE8\u91CA\uFF0C\u53EF\u968F\u610F\u8BBE\u7F6E\uFF0C\u53EF\u4EE5\u4E3A\u7A7A\u3002</p></li></ul><h5 id="_4-2-1-\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_4-2-1-\u5B9E\u4F8B" aria-hidden="true">#</a> 4.2.1 \u5B9E\u4F8B</h5><p>\u6D4B\u8BD5\u573A\u666F\uFF1A\u6B63\u5E38\u903B\u8F91\u6211\u4EEC\u9700\u8981\u5148\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u505A\u5176\u4ED6\u529F\u80FD\u7684\u6D4B\u8BD5</p><ol><li>\u6309\u7167\u4E0A\u8FB9\u7684\u6D4B\u8BD5\u573A\u666F\uFF0C\u6DFB\u52A0\u6D4B\u8BD5\u811A\u672C\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</li></ol><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622150418979.png" alt="image-20220622150418979" loading="lazy"></p><ol start="2"><li>\u914D\u7F6E\u597D\u4EE5\u540E\uFF0C\u70B9\u51FB\u201C\u4FDD\u5B58\u201D\uFF0C\u8FD0\u884CJMeter\uFF0C\u7136\u540E\u67E5\u770B\u7ED3\u679C\u6811\uFF08 \u4ECE\u7ED3\u679C\u53EF\u4EE5\u770B\u51FA\uFF0C\u4E00\u6B21\u767B\u5F55\u7136\u540E\u591A\u6B21\u67E5\u8BE2\u5217\u8868\uFF1B\u800C\u4E0D\u662F\u67E5\u8BE2\u4E00\u6B21\u5C31\u9700\u8981\u767B\u5F55\u4E00\u6B21\uFF09\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</li></ol><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622150716268.png" alt="image-20220622150716268" loading="lazy"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',81),c={href:"https://cloud.tencent.com/developer/article/1645549",target:"_blank",rel:"noopener noreferrer"},z=r("Jmeter(\u4E5D) - \u4ECE\u5165\u95E8\u5230\u7CBE\u901A - JMeter\u903B\u8F91\u63A7\u5236\u5668 - \u4E0A\u7BC7\uFF08\u8BE6\u89E3\u6559\u7A0B\uFF09");function h(d,m){const e=t("ExternalLinkIcon");return a(),o("div",null,[p,l("p",null,[l("a",c,[z,s(e)])])])}const y=i(g,[["render",h],["__file","dev-y-pu-jmeter-logic.html.vue"]]);export{y as default};
