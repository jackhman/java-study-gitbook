import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c as o,a as e,b as i,e as l,d as n,r as p}from"./app.dfe6b5b1.js";const g={},s=l('<h1 id="rabbitmq\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#rabbitmq\u57FA\u7840" aria-hidden="true">#</a> RabbitMQ\u57FA\u7840</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>RabbitMQ \u662F\u91C7\u7528Erlang \u8BED\u8A00\u5B9E\u73B0 AMQP(Advanced Message Queuing Protocol\uFF0C\u9AD8\u7EA7\u6D88\u606F\u961F\u5217\u534F\u8BAE) \u7684\u6D88\u606F\u4E2D\u95F4\u4EF6\uFF0C\u6700\u521D\u8D77\u6E90\u4E8E\u91D1\u878D\u7CFB\u7EDF\uFF0C\u7528\u4E8E\u5728\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u5B58\u50A8\u8F6C\u53D1\u6D88\u606F\u3002</p><h3 id="_1-1-\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#_1-1-\u7279\u70B9" aria-hidden="true">#</a> 1.1 \u7279\u70B9</h3><ul><li><strong>\u53EF\u9760\u6027</strong>\uFF1ARabbitMQ \u4F7F\u7528\u4E00\u4E9B\u673A\u5236\u6765\u4FDD\u8BC1\u6D88\u606F\u7684\u53EF\u9760\u6027\uFF0C\u5982\u6301\u4E45\u5316\u3001\u4F20\u8F93\u786E\u8BA4\u53CA\u53D1\u5E03\u786E\u8BA4\u7B49</li><li><strong>\u7075\u6D3B\u7684\u8DEF\u7531</strong>\uFF1A\u5728\u6D88\u606F\u8FDB\u5165\u961F\u5217\u4E4B\u524D\uFF0C\u901A\u8FC7\u4EA4\u6362\u5668\u6765\u8DEF\u7531\u6D88\u606F\u3002\u5BF9\u4E8E\u5178\u578B\u7684\u8DEF\u7531\u529F\u80FD\uFF0CRabbitMQ \u5DF2\u7ECF\u63D0\u4F9B\u4E86\u4E00\u4E9B\u5185\u7F6E\u7684\u4EA4\u6362\u5668\u6765\u5B9E\u73B0\u3002\u9488\u5BF9\u66F4\u590D\u6742\u7684\u8DEF\u7531\u529F\u80FD\uFF0C\u53EF\u4EE5\u5C06\u591A\u4E2A\u4EA4\u6362\u5668\u7ED1\u5B9A\u5728\u4E00\u8D77\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u63D2\u4EF6\u673A\u5236\u6765\u5B9E\u73B0\u81EA\u5DF1\u7684\u4EA4\u6362\u5668\u3002</li><li><strong>\u6269\u5C55\u6027</strong>\uFF1A\u591A\u4E2ARabbitMQ \u8282\u70B9\u53EF\u4EE5\u7EC4\u6210\u4E00\u4E2A\u96C6\u7FA4\uFF0C\u4E5F\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u4E1A\u52A1\u60C5\u51B5\u52A8\u6001\u5730\u6269\u5C55\u96C6\u7FA4\u4E2D\u7684\u8282\u70B9</li><li><strong>\u9AD8\u53EF\u7528\u6027</strong>\uFF1A\u961F\u5217\u53EF\u4EE5\u5728\u96C6\u7FA4\u4E2D\u7684\u673A\u5668\u4E0A\u8BBE\u7F6E\u955C\u50CF\uFF0C\u4F7F\u5F97\u5728\u90E8\u5206\u8282\u70B9\u51FA\u73B0\u95EE\u9898\u7684\u60C5\u51B5\u4E0B\u961F\u5217\u4ECD\u7136\u53EF\u7528</li><li><strong>\u652F\u6301\u591A\u79CD\u534F\u8BAE</strong>\uFF1ARabbitMQ \u9664\u4E86\u539F\u751F\u652F\u6301 AMQP \u534F\u8BAE\uFF0C\u8FD8\u652F\u6301 STOMP\u3001MQTT\u7B49\u591A\u79CD\u6D88\u606F\u4E2D\u95F4\u4EF6\u534F\u8BAE</li><li><strong>\u591A\u8BED\u8A00\u5BA2\u6237\u7AEF</strong>\uFF1ARabbitMQ \u51E0\u4E4E\u652F\u6301\u6240\u6709\u5E38\u7528\u8BED\u8A00\uFF0C\u6BD4\u5982Java\u3001Python\u3001Ruby\u3001PHP\u7B49</li><li><strong>\u6613\u7528\u7684\u7BA1\u7406\u754C\u9762</strong>\uFF1ARabbitMQ\u63D0\u4F9B\u4E86\u4E00\u4E2A\u6613\u7528\u7684\u7528\u6237\u754C\u9762\uFF0C\u4F7F\u5F97\u7528\u6237\u53EF\u4EE5\u76D1\u63A7\u548C\u7BA1\u7406\u6D88\u606F\u3001\u96C6\u7FA4\u4E2D\u7684\u8282\u70B9\u7B49\u3002</li><li><strong>\u63D2\u4EF6\u673A\u5236</strong>\uFF1ARabbitMQ \u63D0\u4F9B\u4E86\u8BB8\u591A\u63D2\u4EF6\uFF0C\u4EE5\u5B9E\u73B0\u4ECE\u591A\u4E2A\u65B9\u9762\u8FDB\u884C\u6269\u5C55\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u7F16\u5199\u81EA\u5DF1\u7684\u63D2\u4EF6</li></ul><h3 id="_1-2-\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_1-2-\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> 1.2 \u4F7F\u7528\u573A\u666F</h3><p>\u5728\u6211\u4EEC\u79D2\u6740\u62A2\u8D2D\u5546\u54C1\u7684\u65F6\u5019\uFF0C\u7CFB\u7EDF\u4F1A\u63D0\u9192\u6211\u4EEC\u7A0D\u7B49\u6392\u961F\u4E2D\uFF0C\u800C\u4E0D\u662F\u50CF\u51E0\u5E74\u524D\u4E00\u6837\u9875\u9762\u5361\u6B7B\u6216\u62A5\u9519\u7ED9\u7528\u6237\u3002</p><p>\u50CF\u8FD9\u79CD\u6392\u961F\u7ED3\u7B97\u5C31\u7528\u5230\u4E86\u6D88\u606F\u961F\u5217\u673A\u5236\uFF0C\u653E\u5165\u901A\u9053\u91CC\u9762\u4E00\u4E2A\u4E00\u4E2A\u7ED3\u7B97\u5904\u7406\uFF0C\u800C\u4E0D\u662F\u67D0\u4E2A\u65F6\u95F4\u65AD\u7A81\u7136\u6D8C\u5165\u5927\u6279\u91CF\u7684\u67E5\u8BE2\u65B0\u589E\u628A\u6570\u636E\u5E93\u7ED9\u641E\u5B95\u673A\uFF0C\u6240\u4EE5RabbitMQ\u672C\u8D28\u4E0A\u8D77\u5230\u7684\u4F5C\u7528\u5C31\u662F<strong>\u524A\u5CF0\u586B\u8C37</strong>\uFF0C\u4E3A\u4E1A\u52A1\u4FDD\u9A7E\u62A4\u822A\u3002</p><h2 id="_2-\u6838\u5FC3\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_2-\u6838\u5FC3\u6982\u5FF5" aria-hidden="true">#</a> 2. \u6838\u5FC3\u6982\u5FF5</h2><p>RabbitMQ \u6574\u4F53\u4E0A\u662F\u4E00\u4E2A\u751F\u4EA7\u8005\u4E0E\u6D88\u8D39\u8005\u6A21\u578B\uFF0C\u4E3B\u8981\u8D1F\u8D23\u63A5\u6536\u3001\u5B58\u50A8\u548C\u8F6C\u53D1\u6D88\u606F\u3002</p><blockquote><p>\u53EF\u4EE5\u628A\u6D88\u606F\u4F20\u9012\u7684\u8FC7\u7A0B\u60F3\u8C61\u6210\uFF1A\u5F53\u4F60\u5C06\u4E00\u4E2A\u5305\u88F9\u9001\u5230\u90AE\u5C40\uFF0C\u90AE\u5C40\u4F1A\u6682\u5B58\u5E76\u6700\u7EC8\u5C06\u90AE\u4EF6\u901A\u8FC7\u90AE\u9012\u5458\u9001\u5230\u6536\u4EF6\u4EBA\u7684\u624B\u4E0A\uFF0CRabbitMQ \u5C31\u597D\u6BD4\u90AE\u5C40\u3001\u90AE\u7BB1\u548C\u90AE\u9012\u5458\u7EC4\u6210\u7684\u4E00\u4E2A\u7CFB\u7EDF\uFF08\u4ECE\u8BA1\u7B97\u673A\u672F\u8BED\u5C42\u9762\u6765\u8BF4\uFF0CRabbitMQ \u6A21\u578B\u66F4\u50CF\u662F\u4E00\u79CD\u4EA4\u6362\u673A\u6A21\u578B\uFF09</p></blockquote><p>Rabbit\u540D\u8BCD\uFF1AConnectionFactory\uFF08\u8FDE\u63A5\u7BA1\u7406\u5668\uFF09\u3001Channel\uFF08\u4FE1\u9053\uFF09\u3001Exchange\uFF08\u4EA4\u6362\u5668\uFF09\u3001Queue\uFF08\u961F\u5217\uFF09\u3001RoutingKey\uFF08\u8DEF\u7531\u952E\uFF09\u3001BindingKey\uFF08\u7ED1\u5B9A\u952E\uFF09\u3002</p><ul><li><p>**ConnectionFactory\uFF08\u8FDE\u63A5\u7BA1\u7406\u5668\uFF09\uFF1A**\u5E94\u7528\u7A0B\u5E8F\u4E0ERabbit\u4E4B\u95F4\u5EFA\u7ACB\u8FDE\u63A5\u7684\u7BA1\u7406\u5668\uFF0C\u7A0B\u5E8F\u4EE3\u7801\u4E2D\u4F7F\u7528\uFF1B</p></li><li><p>**Channel\uFF08\u4FE1\u9053\uFF09\uFF1A**\u6D88\u606F\u63A8\u9001\u4F7F\u7528\u7684\u901A\u9053\uFF1B</p></li><li><p>**Exchange\uFF08\u4EA4\u6362\u5668\uFF09\uFF1A**\u7528\u4E8E\u63A5\u53D7\u3001\u5206\u914D\u6D88\u606F\uFF1B</p></li><li><p><strong>Queue\uFF08\u961F\u5217\uFF09</strong>\uFF1A\u7528\u4E8E\u5B58\u50A8\u751F\u4EA7\u8005\u7684\u6D88\u606F\uFF1B</p></li><li><p><strong>RoutingKey\uFF08\u8DEF\u7531\u952E\uFF09</strong>\uFF1A\u7528\u4E8E\u628A\u751F\u6210\u8005\u7684\u6570\u636E\u5206\u914D\u5230\u4EA4\u6362\u5668\u4E0A\uFF1B</p></li><li><p><strong>BindingKey\uFF08\u7ED1\u5B9A\u952E\uFF09</strong>\uFF1A\u7528\u4E8E\u628A\u4EA4\u6362\u5668\u7684\u6D88\u606F\u7ED1\u5B9A\u5230\u961F\u5217\u4E0A\uFF1B</p></li></ul><h3 id="_2-1-\u6574\u4F53\u67B6\u6784" tabindex="-1"><a class="header-anchor" href="#_2-1-\u6574\u4F53\u67B6\u6784" aria-hidden="true">#</a> 2.1 \u6574\u4F53\u67B6\u6784</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20191106222444116.png" alt="image-20191106222444116" loading="lazy"></p><h4 id="_2-1-producer-\u751F\u6210\u8005-\u548C-consumer-\u6D88\u8D39\u8005" tabindex="-1"><a class="header-anchor" href="#_2-1-producer-\u751F\u6210\u8005-\u548C-consumer-\u6D88\u8D39\u8005" aria-hidden="true">#</a> 2.1 Producer(\u751F\u6210\u8005)\u548C Consumer(\u6D88\u8D39\u8005)</h4><ul><li><strong>Producer(\u751F\u4EA7\u8005)</strong>\uFF1A\u751F\u4EA7\u6D88\u606F\u7684\u4E00\u65B9\uFF08\u90AE\u4EF6\u6295\u9012\u8005\uFF09</li><li><strong>Consumer(\u6D88\u8D39\u8005)</strong>\uFF1A\u6D88\u8D39\u6D88\u606F\u7684\u4E00\u65B9\uFF08\u90AE\u4EF6\u6536\u4EF6\u4EBA\uFF09</li></ul><p>\u6D88\u606F\u4E00\u822C\u75312\u90E8\u5206\u7EC4\u6210\uFF1A\u6D88\u606F\u5934\uFF08\u6216\u8005\u8BF4\u662F\u6807\u7B7ELabel\uFF09\u548C\u6D88\u606F\u4F53\u3002</p><ul><li><p>\u6D88\u606F\u4F53:</p><p>\u6D88\u606F\u4F53\u4E5F\u53EF\u4EE5\u79F0\u4E3ApayLoad\uFF0C\u6D88\u606F\u4F53\u662F\u4E0D\u900F\u660E\u7684,</p></li><li><p>\u6D88\u606F\u5934\u5219\u7531\u4E00\u7CFB\u5217\u53EF\u9009\u5C5E\u6027\u7EC4\u6210\uFF0C\u8FD9\u4E9B\u5C5E\u6027\u5305\u62ECrouting-key\uFF08\u8DEF\u7531\u952E\uFF09\u3001priority\uFF08\u76F8\u5BF9\u4E8E\u5176\u4ED6\u6D88\u606F\u7684\u4F18\u5148\u6743\uFF09\u3001delivery-mode\uFF08\u6307\u51FA\u8BE5\u6D88\u606F\u53EF\u80FD\u9700\u8981\u6301\u4E45\u6027\u5B58\u50A8\uFF09\u7B49\u3002</p></li></ul><p>\u751F\u4EA7\u8005\u628A\u6D88\u606F\u4EA4\u7531RabbitMQ\u540E\uFF0CRabbitMQ\u4F1A<strong>\u6839\u636E\u6D88\u606F\u5934\u628A\u6D88\u606F\u53D1\u9001\u7ED9\u611F\u5174\u8DA3\u7684Consumer(\u6D88\u8D39\u8005)</strong>\u3002</p><h3 id="_2-2-exchange-\u4EA4\u6362\u5668" tabindex="-1"><a class="header-anchor" href="#_2-2-exchange-\u4EA4\u6362\u5668" aria-hidden="true">#</a> 2.2 Exchange(\u4EA4\u6362\u5668)</h3><p>\u5728RabbitMQ \u4E2D\uFF0C\u6D88\u606F\u5E76\u4E0D\u662F\u76F4\u63A5\u88AB\u6295\u9012\u5230 Queue\uFF08\u6D88\u606F\u961F\u5217\uFF09\u4E2D\u7684\uFF0C\u4E2D\u95F4\u8FD8\u9700\u8981<strong>\u7ECF\u8FC7 Exchange(\u4EA4\u6362\u5668)\u8FD9\u4E00\u5C42</strong>\u3002Exchange(\u4EA4\u6362\u5668)\u4F1A\u628A\u6211\u4EEC\u7684\u6D88\u606F\u5206\u914D\u5230\u5BF9\u5E94\u7684Queue\uFF08\u6D88\u606F\u961F\u5217\uFF09\u4E2D</p><p><strong>Exchange(\u4EA4\u6362\u5668)\u7528\u6765\u63A5\u6536\u751F\u4EA7\u8005\u53D1\u9001\u7684\u6D88\u606F\u5E76\u5C06\u8FD9\u4E9B\u6D88\u606F\u8DEF\u7531\u7ED9\u670D\u52A1\u5668\u4E2D\u961F\u5217\u4E2D</strong>\uFF0C\u5982\u679C\u8DEF\u7531\u4E0D\u5230\uFF0C\u6216\u8005\u4F1A\u8FD4\u56DE\u7ED9Producer\uFF08\u751F\u4EA7\u8005\uFF09\uFF0C\u6216\u8BB8\u4F1A\u88AB\u76F4\u63A5\u4E22\u5F03\u6389\u3002\uFF08\u8FD9\u91CC\u53EF\u4EE5\u5C06RabbitMQ\uFF09\u4E2D\u7684\u4EA4\u6362\u5668\u770B\u505A\u4E00\u4E2A\u7B80\u5355\u7684\u5B9E\u4F53\u3002</p><h5 id="_2-2-1-exchange-\u7684\u56DB\u79CD\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#_2-2-1-exchange-\u7684\u56DB\u79CD\u7B56\u7565" aria-hidden="true">#</a> 2.2.1 Exchange \u7684\u56DB\u79CD\u7B56\u7565</h5><p><strong>RabbitMQ \u7684Exchange\uFF08\u4EA4\u6362\u5668\uFF09\u6709\u56DB\u79CD\u7C7B\u578B\uFF0C\u4E0D\u540C\u7684\u7C7B\u578B\u5BF9\u5E94\u7740\u4E0D\u540C\u7684\u8DEF\u7531\u7B56\u7565</strong></p><ul><li><p>direct\uFF08\u9ED8\u8BA4\u7684\uFF09</p><blockquote><p><em>\u76F4\u63A5\u4E1F\u7D66\u6307\u5B9A\u7684 Queue</em></p></blockquote></li><li><p>fanout</p><blockquote><p><em>\u4E00\u6B21\u4E1F\u7D66\u5168\u90E8\u8CA0\u8CAC\u7684 Queue</em></p></blockquote></li><li><p>topic</p><blockquote><p><em>\u985E\u4F3C regular expression\uFF0C\u8A2D\u5B9A binding \u898F\u5247\uFF0C\u4E1F\u7D66\u7B26\u5408\u7684 Queue</em></p></blockquote></li><li><p>headers</p><blockquote><p><em>\u900F\u904E\u50B3\u9001\u8CC7\u6599\u7684 header \u4F86\u7279\u5225\u6307\u5B9A\u6240\u8981\u7684 Queue</em></p></blockquote></li></ul><p>\u4E0D\u540C\u7C7B\u578B\u7684Exchange\u8F6C\u53D1\u6D88\u606F\u7684\u7B56\u7565\u6709\u6240\u533A\u522B\u3002</p><h5 id="_2-2-2-exchange-\u4EA4\u6362\u5668-\u793A\u610F\u56FE" tabindex="-1"><a class="header-anchor" href="#_2-2-2-exchange-\u4EA4\u6362\u5668-\u793A\u610F\u56FE" aria-hidden="true">#</a> 2.2.2 Exchange(\u4EA4\u6362\u5668)\u793A\u610F\u56FE</h5><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20191106224716648.png" alt="image-20191106224716648" loading="lazy"></p><h3 id="_2-3-banding-\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#_2-3-banding-\u7ED1\u5B9A" aria-hidden="true">#</a> 2.3 Banding \u7ED1\u5B9A</h3><blockquote><p><em>\u8DDF Exchange \u6210\u5C0D\u642D\u914D\uFF0C\u4E3B\u8981\u662F\u544A\u8A34 Exchange \u4ED6\u8CA0\u8CAC\u54EA\u4E9B Queue</em></p></blockquote><p>\u751F\u4EA7\u8005\u5C06\u6D88\u606F\u53D1\u7ED9\u4EA4\u6362\u5668\u7684\u65F6\u5019\uFF0C\u4E00\u822C\u4F1A\u6307\u5B9A\u4E00\u4E2A RoutingKey(\u8DEF\u7531\u952E)\uFF0C\u7528\u6765\u6307\u5B9A\u8FD9\u4E2A\u6D88\u606F\u7684\u8DEF\u7531\u89C4\u5219\uFF0C\u800C\u8FD9\u4E2ARoutingKey\u9700\u8981\u4E0E\u4EA4\u6362\u5668\u7C7B\u578B\u548C\u7ED1\u5B9A\u952E\uFF08Bindingkey\uFF09\u8054\u5408\u4F7F\u7528\u624D\u80FD\u6700\u7EC8\u751F\u6548</p><p>RabbitMQ \u4E2D\u901A\u8FC7 Binding(\u7ED1\u5B9A) \u5C06 Exchange(\u4EA4\u6362\u5668)\u4E0E Queue\uFF08\u6D88\u606F\u961F\u5217\uFF09\u5173\u8054\u8D77\u6765\uFF0C\u5728\u7ED1\u5B9A\u7684\u65F6\u5019\uFF0C\u4E00\u822C\u4F1A\u6307\u5B9A\u4E00\u4E2ABindingKey(\u7ED1\u5B9A\u952E)\uFF0C\u8FD9\u6837RabbitMQ \u5C31\u77E5\u9053\u5982\u4F55\u6B63\u786E\u7684\u5C06\u6D88\u606F\u8DEF\u7531\u5230\u961F\u5217\u4E86</p><p>\u5982\u4E0B\u56FE\u6240\u793A\uFF0C\u4E00\u4E2A\u7ED1\u5B9A\u5C31\u662F\u57FA\u4E8E\u8DEF\u7531\u952E\u5C06\u4EA4\u6362\u5668\u548C\u6D88\u606F\u961F\u5217\u8FDE\u63A5\u8D77\u6765\u7684\u8DEF\u7531\u89C4\u5219\uFF0C\u6240\u4EE5\u53EF\u4EE5\u5C06\u4EA4\u6362\u5668\u7406\u89E3\u6210\u4E00\u4E2A\u7531\u7ED1\u5B9A\u6784\u6210\u7684\u8DEF\u7531\u8868\u3002Exchange\u548C Queue \u7684\u7ED1\u5B9A\u53EF\u4EE5\u662F\u591A\u5BF9\u591A\u7684\u5173\u7CFB</p><h5 id="_2-3-1-binding-\u7ED1\u5B9A-\u793A\u610F\u56FE" tabindex="-1"><a class="header-anchor" href="#_2-3-1-binding-\u7ED1\u5B9A-\u793A\u610F\u56FE" aria-hidden="true">#</a> 2.3.1 Binding\uFF08\u7ED1\u5B9A\uFF09\u793A\u610F\u56FE</h5><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20191106225342981.png" alt="image-20191106225342981" loading="lazy"></p><p>\u751F\u4EA7\u8005\u5C06\u6D88\u606F\u53D1\u9001\u7ED9\u4EA4\u6362\u5668\u65F6\uFF0C\u9700\u8981\u4E00\u4E2ARoutingKey\uFF0C\u5F53BindingKey \u548C RoutingKey \u76F8\u5339\u914D\u65F6\uFF0C\u6D88\u606F\u4F1A\u88AB\u8DEF\u7531\u5230\u5BF9\u5E94\u7684\u961F\u5217\u4E2D\u3002\u5728\u7ED1\u5B9A\u591A\u4E2A\u961F\u5217\u5230\u540C\u4E00\u4E2A\u4EA4\u6362\u5668\u7684\u65F6\u5019\uFF0C\u8FD9\u4E9B\u7ED1\u5B9A\u5141\u8BB8\u4F7F\u7528\u76F8\u540C\u7684BindKey\u3002BindKey\u5E76\u4E0D\u662F\u5728\u6240\u6709\u7684\u60C5\u51B5\u4E0B\u90FD\u751F\u6548\uFF0C\u5B83\u4F9D\u8D56\u4E8E\u4EA4\u6362\u5668\u7C7B\u578B\uFF0C\u6BD4\u5982fanout \u7C7B\u578B\u7684\u4EA4\u6362\u5668\u5C31\u4F1A\u65E0\u89C6\uFF0C\u800C\u662F\u5C06\u6D88\u606F\u8DEF\u7531\u5230\u6240\u6709\u7ED1\u5B9A\u5230\u8BE5\u4EA4\u6362\u5668\u7684\u961F\u5217\u4E2D</p><h3 id="_2-4-queue-\u6D88\u606F\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#_2-4-queue-\u6D88\u606F\u961F\u5217" aria-hidden="true">#</a> 2.4 Queue\uFF08\u6D88\u606F\u961F\u5217\uFF09</h3><blockquote><p>\u8D1F\u8D23\u5B58\u653E\u6240\u9700\u8981\u7684\u8D44\u6599</p><p>\u8DDF\u8CC7\u6599\u7D50\u69CB\u7684 Queue \u4E00\u6A23\uFF0C\u6709\u5148\u9032\u5148\u51FA (FIFO) \u7279\u6027</p><p>\u6BCF\u500B Queue \u90FD\u6703\u6709\u4ED6\u7684\u540D\u5B57\u7576 id</p></blockquote><p><strong>Queue(\u6D88\u606F\u961F\u5217)\u7528\u6765\u4FDD\u5B58\u6D88\u606F\u76F4\u5230\u53D1\u9001\u7ED9\u6D88\u8D39\u8005\u3002\u4ED6\u662F\u6D88\u606F\u7684\u5BB9\u5668\uFF0C\u4E5F\u662F\u6D88\u606F\u7684\u7EC8\u70B9</strong>\u3002\u4E00\u4E2A\u6D88\u606F\u53EF\u6295\u5165\u4E00\u4E2A\u6216\u591A\u4E2A\u961F\u5217\u3002\u6D88\u606F\u4E00\u76F4\u5728\u961F\u5217\u91CC\u9762\uFF0C\u7B49\u5F85\u6D88\u8D39\u8005\u8FDE\u63A5\u5230\u8FD9\u4E2A\u961F\u5217\u5C06\u5176\u53D6\u8D70</p><p>RabbitMQ \u4E2D\u6D88\u606F\u53EA\u80FD\u5B58\u50A8\u5728 <strong>\u961F\u5217</strong> \u4E2D\uFF0C\u8FD9\u4E00\u70B9\u548Ckafka \u8FD9\u79CD\u4E2D\u95F4\u4EF6\u76F8\u53CD\u3002**kafka \u5C06\u6D88\u606F\u5B58\u50A8\u5728topic\uFF08\u4E3B\u9898\uFF09**\u8FD9\u4E2A\u903B\u8F91\u5C42\u9762\uFF0C\u800C\u76F8\u5BF9\u5E94\u7684\u961F\u5217\u903B\u8F91\u77E5\u8BC6topic\u5B9E\u9645\u5B58\u50A8\u6587\u4EF6\u4E2D\u7684\u4F4D\u79FB\u6807\u8BC6\u3002RabbitMQ \u7684\u751F\u4EA7\u8005\u751F\u4EA7\u6D88\u606F\u5E76\u6700\u7EC8\u6295\u9012\u5230\u961F\u5217\u4E2D\uFF0C\u6D88\u8D39\u8005\u53EF\u4EE5\u4ECE\u961F\u5217\u4E2D\u83B7\u53D6\u6D88\u606F\u5E76\u6D88\u8D39\u3002</p><p><strong>\u591A\u4E2A\u6D88\u8D39\u8005\u53EF\u4EE5\u8BA2\u9605\u540C\u4E00\u4E2A\u961F\u5217</strong>\uFF0C\u8FD9\u65F6\u961F\u5217\u4E2D\u7684\u6D88\u606F\u4F1A\u88AB\u5E73\u5747\u5206\u644A\uFF08Round-Robin\uFF0C\u5373\u8F6E\u8BE2\uFF09\u7ED9\u591A\u4E2A\u6D88\u8D39\u8005\u8FDB\u884C\u5904\u7406\uFF0C\u800C\u4E0D\u662F\u6BCF\u4E2A\u6D88\u8D39\u8005\u90FD\u6536\u5230\u6240\u6709\u7684\u6D88\u606F\u5E76\u5904\u7406\uFF0C\u8FD9\u6837\u907F\u514D\u7684\u6D88\u606F\u88AB\u91CD\u590D\u6D88\u8D39</p><p>RabbitMQ \u4E0D\u652F\u6301\u961F\u5217\u5C42\u9762\u7684\u5E7F\u64AD\u6D88\u8D39\uFF0C\u5982\u679C\u6709\u5E7F\u64AD\u6D88\u8D39\u7684\u9700\u6C42\uFF0C\u9700\u8981\u5728\u5176\u4E0A\u8FDB\u884C\u4E8C\u6B21\u5F00\u53D1\uFF0C\u8FD9\u6837\u4F1A\u5F88\u9EBB\u70E6\uFF0C\u4E0D\u5EFA\u8BAE\u8FD9\u6837\u505A</p><h3 id="_2-5-broker-\u6D88\u606F\u4E2D\u95F4\u4EF6\u7684\u670D\u52A1\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_2-5-broker-\u6D88\u606F\u4E2D\u95F4\u4EF6\u7684\u670D\u52A1\u8282\u70B9" aria-hidden="true">#</a> 2.5 Broker\uFF08\u6D88\u606F\u4E2D\u95F4\u4EF6\u7684\u670D\u52A1\u8282\u70B9\uFF09</h3><p>\u5BF9\u4E8E RabbitMQ \u6765\u8BF4\uFF0C\u4E00\u4E2ARabbitMQ Broker \u53EF\u4EE5\u7B80\u5355\u5730\u770B\u4F5C\u662F\u4E00\u4E2ARabbitMQ \u670D\u52A1\u8282\u70B9\uFF0C\u6216\u8005RabbitMQ\u670D\u52A1\u5B9E\u4F8B\u3002\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u4E5F\u53EF\u4EE5\u8BB2\u4E00\u4E2ARabbitMQ Broker \u770B\u4F5C\u4E00\u53F0 RabbitMQ \u670D\u52A1\u5668\u3002</p><p>\u4E0B\u56FE\u5C55\u793A\u4E86\u751F\u6210\u8005\u5C06\u6D88\u606F\u5B58\u5165 RabbitMQ Broker,\u4EE5\u53CA\u6D88\u8D39\u8005\u4ECEBroker \u4E2D\u6D88\u8D39\u6570\u636E\u7684\u6574\u4E2A\u6D41\u7A0B</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20191106232115321.png" alt="image-20191106232115321" loading="lazy"></p><h2 id="_3-exchange-types-\u4EA4\u6362\u5668\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_3-exchange-types-\u4EA4\u6362\u5668\u7C7B\u578B" aria-hidden="true">#</a> 3. Exchange Types(\u4EA4\u6362\u5668\u7C7B\u578B)</h2><p>RabbitMQ\u5E38\u7528\u7684 Exchange Type \u6709 fanout\u3001direct\u3001topic\u3001headers \u8FD9\u56DB\u79CD\uFF08AMQP\u89C4\u8303\u91CC\u8FD8\u63D0\u5230\u4E24\u79CD Exchange Type\uFF0C\u5206\u522B\u4E3A system \u4E0E \u81EA\u5B9A\u4E49\uFF0C\u8FD9\u91CC\u4E0D\u4E88\u4EE5\u63CF\u8FF0\uFF09</p><ul><li><p>fanout</p><p>fanout \u7C7B\u578B\u7684Exchange \u8DEF\u7531\u89C4\u5219\u975E\u5E38\u7B80\u5355\uFF0C\u4ED6\u4F1A\u628A\u6240\u6709\u53D1\u9001\u5230\u8BE5Exchange\u7684\u6D88\u606F\u8DEF\u7531\u5230\u6240\u6709\u4E0E\u4ED6\u7ED1\u5B9A\u7684Queue \u4E2D\uFF0C\u4E0D\u9700\u8981\u505A\u4EFB\u4F55\u5224\u65AD\u64CD\u4F5C\uFF0C\u6240\u4EE5fanout \u7C7B\u578B\u662F\u6240\u6709\u7684\u4EA4\u6362\u673A\u7C7B\u578B\u91CC\u9762\u901F\u5EA6\u6700\u5FEB\u7684\uFF0Cfanout \u7C7B\u578B\u5E38\u7528\u6765\u5E7F\u64AD\u6D88\u606F</p></li><li><p>direct</p><p>direct\u7C7B\u578B\u7684Exchange \u8DEF\u7531\u89C4\u5219\u4E5F\u5F88\u7B80\u5355\uFF0C\u4ED6\u4F1A\u628A\u6D88\u606F\u8DEF\u7531\u5230\u90A3\u4E9BBindingkey \u4E0E RoutingKey \u5B8C\u5168\u5339\u914D\u7684 Queue\u4E2D\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20191106232655072.png" alt="image-20191106232655072" loading="lazy"></p><p>\u4EE5\u4E0A\u56FE\u4E3A\u4F8B\uFF0C\u5982\u679C\u53D1\u9001\u6D88\u606F\u7684\u65F6\u5019\u8BBE\u7F6E\u8DEF\u7531\u952E\u4E3A\u201Cwraning\u201D\uFF0C\u90A3\u4E48\u6D88\u606F\u4F1A\u8DEF\u7531\u5230Queue1 \u548C Queue2 \u3002\u5982\u679C\u5728\u53D1\u9001\u6D88\u606F\u7684\u65F6\u5019\uFF0C\u8BBE\u7F6E\u8DEF\u7531\u952E\u4E3Ainfo\u6216\u8005\u201Cdebug\u201D\uFF0C\u90A3\u4E48\u6D88\u606F\u53EA\u4F1A\u8DEF\u7531\u5230Queue2.\u5982\u679C\u4EE5\u5176\u4ED6\u7684\u8DEF\u7531\u952E\u53D1\u9001\u6D88\u606F\uFF0C\u5219\u6D88\u606F\u4E0D\u4F1A\u8DEF\u7531\u5230\u8FD9\u4E24\u4E2A\u961F\u5217\u4E2D\u3002 direct \u7C7B\u578B\u5E38\u7528\u5728\u5904\u7406\u6709\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1\uFF0C\u6839\u636E\u4EFB\u52A1\u7684\u4F18\u5148\u7EA7\u5427\u6D88\u606F\u53D1\u9001\u5230\u5BF9\u5E94\u7684\u961F\u5217\uFF0C\u8FD9\u6837\u53EF\u4EE5\u6307\u6D3E\u66F4\u591A\u7684\u8D44\u6E90\u53BB\u5904\u7406\u9AD8\u4F18\u5148\u7EA7\u7684\u961F\u5217</p></li><li><p>topic</p><p>\u524D\u9762\u8BB2\u5230direct\u7C7B\u578B\u7684\u4EA4\u6362\u5668\u8DEF\u7531\u89C4\u5219\u662F\u5B8C\u5168\u5339\u914D BindingKey \u548C RoutingKey \uFF0C\u4F46\u662F\u8FD9\u79CD\u4E25\u683C\u7684\u5339\u914D\u65B9\u5F0F\u5728\u5F88\u591A\u60C5\u51B5\u4E0B\u4E0D\u80FD\u6EE1\u8DB3\u5B9E\u9645\u4E1A\u52A1\u7684\u9700\u6C42\u3002topic\u7C7B\u578B\u7684\u4EA4\u6362\u5668\u5728\u5339\u914D\u89C4\u5219\u4E0A\u8FDB\u884C\u4E86\u6269\u5C55\uFF0C\u5B83\u4E0E direct \u7C7B\u578B\u7684\u4EA4\u6362\u5668\u76F8\u4F3C\uFF0C\u4E5F\u662F\u5C06\u6D88\u606F\u8DEF\u7531\u5230 BindingKey \u548C RoutingKey \u76F8\u5339\u914D\u7684\u961F\u5217\u4E2D\uFF0C\u4F46\u8FD9\u91CC\u7684\u5339\u914D\u89C4\u5219\u6709\u4E9B\u4E0D\u540C\uFF0C\u5B83\u7EA6\u5B9A\uFF1A</p><p>\u6D88\u8D39\u6D88\u606F\u7684\u65F6\u5019routingKey\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u5B57\u7B26\u5339\u914D\u6D88\u606F\uFF1A</p><ul><li>&quot;*&quot;\u5339\u914D\u4E00\u4E2A\u5206\u6BB5(\u7528\u201C.\u201D\u5206\u5272)\u7684\u5185\u5BB9\uFF1B</li><li>&quot;#&quot;\u5339\u914D0\u548C\u591A\u4E2A\u5B57\u7B26\uFF1B</li></ul></li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20191106233048403.png" alt="image-20191106233048403" loading="lazy"></p><p>\u4EE5\u4E0A\u56FE\u4E3A\u4F8B\uFF1A</p><ul><li><p>\u8DEF\u7531\u952E\u4E3A \u201Ccom.rabbitmq.client\u201D \u7684\u6D88\u606F\u4F1A\u540C\u65F6\u8DEF\u7531\u5230 Queuel \u548C Queue2;</p></li><li><p>\u8DEF\u7531\u952E\u4E3A \u201Ccom.hidden.client\u201D \u7684\u6D88\u606F\u53EA\u4F1A\u8DEF\u7531\u5230 Queue2 \u4E2D\uFF1B</p></li><li><p>\u8DEF\u7531\u952E\u4E3A \u201Ccom.hidden.demo\u201D \u7684\u6D88\u606F\u53EA\u4F1A\u8DEF\u7531\u5230 Queue2 \u4E2D\uFF1B</p></li><li><p>\u8DEF\u7531\u952E\u4E3A \u201Cjava.rabbitmq.demo\u201D \u7684\u6D88\u606F\u53EA\u4F1A\u8DEF\u7531\u5230Queuel\u4E2D\uFF1B</p></li><li><p>\u8DEF\u7531\u952E\u4E3A \u201Cjava.util.concurrent\u201D \u7684\u6D88\u606F\u5C06\u4F1A\u88AB\u4E22\u5F03\u6216\u8005\u8FD4\u56DE\u7ED9\u751F\u4EA7\u8005\uFF08\u9700\u8981\u8BBE\u7F6E mandatory \u53C2\u6570\uFF09\uFF0C\u56E0\u4E3A\u5B83\u6CA1\u6709\u5339\u914D\u4EFB\u4F55\u8DEF\u7531\u952E\u3002</p></li><li><p>headers\uFF08\u4E0D\u63A8\u8350\uFF09</p><p>headers \u7C7B\u578B\u7684\u4EA4\u6362\u5668\u4E0D\u4F9D\u8D56\u4E8E\u8DEF\u7531\u952E\u7684\u5339\u914D\u89C4\u5219\u6765\u8DEF\u7531\u6D88\u606F\uFF0C\u800C\u662F\u6839\u636E\u53D1\u9001\u7684\u6D88\u606F\u5185\u5BB9\u4E2D\u7684 headers \u5C5E\u6027\u8FDB\u884C\u5339\u914D\u3002\u5728\u7ED1\u5B9A\u961F\u5217\u548C\u4EA4\u6362\u5668\u65F6\u5236\u5B9A\u4E00\u7EC4\u952E\u503C\u5BF9\uFF0C\u5F53\u53D1\u9001\u6D88\u606F\u5230\u4EA4\u6362\u5668\u65F6\uFF0CRabbitMQ\u4F1A\u83B7\u53D6\u5230\u8BE5\u6D88\u606F\u7684 headers\uFF08\u4E5F\u662F\u4E00\u4E2A\u952E\u503C\u5BF9\u7684\u5F62\u5F0F)&#39;\u5BF9\u6BD4\u5176\u4E2D\u7684\u952E\u503C\u5BF9\u662F\u5426\u5B8C\u5168\u5339\u914D\u961F\u5217\u548C\u4EA4\u6362\u5668\u7ED1\u5B9A\u65F6\u6307\u5B9A\u7684\u952E\u503C\u5BF9\uFF0C\u5982\u679C\u5B8C\u5168\u5339\u914D\u5219\u6D88\u606F\u4F1A\u8DEF\u7531\u5230\u8BE5\u961F\u5217\uFF0C\u5426\u5219\u4E0D\u4F1A\u8DEF\u7531\u5230\u8BE5\u961F\u5217\u3002headers \u7C7B\u578B\u7684\u4EA4\u6362\u5668\u6027\u80FD\u4F1A\u5F88\u5DEE\uFF0C\u800C\u4E14\u4E5F\u4E0D\u5B9E\u7528\uFF0C\u57FA\u672C\u4E0A\u4E0D\u4F1A\u770B\u5230\u5B83\u7684\u5B58\u5728\u3002</p></li></ul><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',54),b={href:"https://medium.com/@zamhuang/rabbitmq-%E4%BA%94%E5%88%86%E9%90%98%E8%BC%95%E9%AC%86%E4%BA%86%E8%A7%A3-rabbitmq-%E9%81%8B%E4%BD%9C-fcaecbaa69d4",target:"_blank",rel:"noopener noreferrer"},c=n("\u3010RabbitMQ\u3011\u4E94\u5206\u9418\u8F15\u9B06\u4E86\u89E3 RabbitMQ \u904B\u4F5C"),h={href:"https://www.cnblogs.com/vipstone/p/9275256.html",target:"_blank",rel:"noopener noreferrer"},d=n("RabbitMQ\u7CFB\u5217\uFF08\u4E8C\uFF09\u6DF1\u5165\u4E86\u89E3RabbitMQ\u5DE5\u4F5C\u539F\u7406\u53CA\u7B80\u5355\u4F7F\u7528");function u(m,Q){const a=p("ExternalLinkIcon");return r(),o("div",null,[s,e("p",null,[e("a",b,[c,i(a)])]),e("p",null,[e("a",h,[d,i(a)])])])}var R=t(g,[["render",u],["__file","rabbitmq-i-overview.html.vue"]]);export{R as default};
