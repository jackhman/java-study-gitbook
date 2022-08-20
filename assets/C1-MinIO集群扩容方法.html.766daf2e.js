import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.a829be87.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="minio\u96C6\u7FA4\u6269\u5BB9\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#minio\u96C6\u7FA4\u6269\u5BB9\u65B9\u6CD5" aria-hidden="true">#</a> MinIO\u96C6\u7FA4\u6269\u5BB9\u65B9\u6CD5</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>MinIO\u662F\u91C7\u7528Golang\u5B9E\u73B0\u7684\u9AD8\u6027\u80FD\u5BF9\u8C61\u5B58\u50A8\u7CFB\u7EDF\uFF0C\u57FA\u4E8EApache License V2.0\u8FDB\u884C\u5F00\u6E90\uFF0C\u9002\u7528\u4E8E\u6D77\u91CF\u975E\u7ED3\u6784\u5316\u6570\u636E\u5B58\u50A8\uFF0C\u5982\u56FE\u7247\u3001\u89C6\u9891\u3001\u955C\u50CF\u7B49\u3002MinIO\u4EE5\u6781\u7B80\u4E3B\u4E49\u4E3A\u6307\u5BFC\u8FDB\u884C\u8BBE\u8BA1\uFF0C\u8FFD\u6C42\u6781\u81F4\u7684\u7EF4\u62A4\u7CBE\u7B80\u6027\u548C\u5353\u8D8A\u7684\u8BFB\u5199\u6027\u80FD\u8868\u73B0\u3002\u636EMinIO\u5B98\u65B9\u6570\u636E\uFF0C\u5728\u6807\u51C6\u786C\u4EF6\u4E0A\uFF0CMinIO\u7684\u8BFB\u5199\u901F\u7387\u53EF\u5206\u522B\u9AD8\u8FBE183GB/s\u548C171GB/s\u3002</p><p>MinIO\u652F\u6301\u4EE5\u5355\u70B9\u3001\u5206\u5E03\u5F0F\u96C6\u7FA4\u7B49\u65B9\u5F0F\u8FDB\u884C\u90E8\u7F72\u3002\u5176\u4E2D\uFF0CMinIO\u5206\u5E03\u5F0F\u96C6\u7FA4\u662F\u6307\u5728\u591A\u4E2A\u670D\u52A1\u5668\u8282\u70B9\u5747\u90E8\u7F72MinIO\u670D\u52A1\uFF0C\u5E76\u5C06\u5176\u7EC4\u5EFA\u4E3A\u5206\u5E03\u5F0F\u5B58\u50A8\u96C6\u7FA4\uFF0C\u5BF9\u5916\u63D0\u4F9B\u6807\u51C6S3\u63A5\u53E3\u4EE5\u8FDB\u884C\u7EDF\u4E00\u8BBF\u95EE\uFF0C\u5176\u67B6\u6784\u5982\u56FE2-1\u6240\u793A\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220722211312080.png" alt="image-20220722211312080"></p><p>MinIO\u96C6\u7FA4\u91C7\u7528\u53BB\u4E2D\u5FC3\u5316\u65E0\u5171\u4EAB\u67B6\u6784\uFF0C\u5404\u8282\u70B9\u95F4\u4E3A\u5BF9\u7B49\u5173\u7CFB\uFF0C\u8FDE\u63A5\u81F3\u4EFB\u4E00\u8282\u70B9\u5747\u53EF\u5B9E\u73B0\u5BF9\u96C6\u7FA4\u7684\u8BBF\u95EE\uFF0C\u5E76\u901A\u8FC7DNS\u8F6E\u8BE2\u7B49\u65B9\u5F0F\u5B9E\u73B0\u8282\u70B9\u95F4\u7684\u8D1F\u8F7D\u5747\u8861\u3002\u8FD9\u79CD\u8282\u70B9\u95F4\u4FDD\u6301\u5BF9\u7B49\u5173\u7CFB\u7684\u8BBE\u8BA1\u5E76\u975E\u6700\u5E38\u89C1\u7684\u5206\u5E03\u5F0F\u96C6\u7FA4\u67B6\u6784\u3002\u5F53\u524D\u5927\u591A\u6570\u7684\u5206\u5E03\u5F0F\u5B58\u50A8\u96C6\u7FA4\uFF0C\u5176\u8282\u70B9\u5F80\u5F80\u53EF\u5212\u5206\u4E3A\u591A\u7C7B\u89D2\u8272\uFF0C\u4F8B\u5982\u8D1F\u8D23\u8FDE\u63A5\u5E76\u5904\u7406\u5916\u90E8\u5E94\u7528\u8BF7\u6C42\u7684\u8BBF\u95EE\u8282\u70B9\u3001\u8D1F\u8D23\u5B58\u50A8\u5143\u6570\u636E\u7684\u7BA1\u7406\u8282\u70B9\u3001\u5B9E\u9645\u7684\u6570\u636E\u5B58\u50A8\u8282\u70B9\u7B49\u3002MinIO\u5219\u4E0E\u4E4B\u4E0D\u540C\uFF0CMinIO\u96C6\u7FA4\u4E2D\u7684\u6240\u6709\u8282\u70B9\u90FD\u540C\u65F6\u627F\u62C5\u4E86\u591A\u79CD\u89D2\u8272\uFF0C\u96C6\u5143\u6570\u636E\u5B58\u50A8\u3001\u6570\u636E\u5B58\u50A8\u3001\u5E94\u7528\u8BBF\u95EE\u7B49\u529F\u80FD\u4E8E\u4E00\u4F53\uFF0C\u771F\u6B63\u5B9E\u73B0\u4E86\u53BB\u4E2D\u5FC3\u5316\u548C\u6240\u6709\u8282\u70B9\u7684\u5B8C\u5168\u5BF9\u7B49\u3002\u5176\u4F18\u52BF\u5728\u4E8E\u6709\u6548\u5730\u51CF\u5C11\u4E86\u96C6\u7FA4\u5185\u7684\u590D\u6742\u8C03\u5EA6\u8FC7\u7A0B\u4EE5\u53CA\u56E0\u4E2D\u5FC3\u8282\u70B9\u5E26\u6765\u7684\u6545\u969C\u98CE\u9669\u548C\u6027\u80FD\u74F6\u9888\u3002</p><p>\u6570\u636E\u5BF9\u8C61\u5728MinIO\u96C6\u7FA4\u4E2D\u8FDB\u884C\u5B58\u50A8\u65F6\uFF0C\u5148\u8FDB\u884C\u7EA0\u5220\u5206\u7247\uFF0C\u540E\u6253\u6563\u5B58\u50A8\u5728\u5404\u786C\u76D8\u4E0A\u3002\u5177\u4F53\u4E3A\uFF1A</p><ol><li>MinIO\u81EA\u52A8\u5728\u96C6\u7FA4\u5185\u751F\u6210\u82E5\u5E72\u7EA0\u5220\u7EC4\uFF0C\u6BCF\u4E2A\u7EA0\u5220\u7EC4\u5305\u542B\u4E00\u7EC4\u786C\u76D8\uFF0C\u5176\u6570\u91CF\u901A\u5E38\u4E3A4\u81F316\u5757\uFF1B</li><li>\u5BF9\u6570\u636E\u5BF9\u8C61\u8FDB\u884C\u5206\u7247\uFF0C\u9ED8\u8BA4\u7B56\u7565\u662F\u5F97\u5230\u76F8\u540C\u6570\u91CF\u7684\u6570\u636E\u5206\u7247\u548C\u6821\u9A8C\u5206\u7247\uFF1B</li><li>\u800C\u540E\u901A\u8FC7\u54C8\u5E0C\u7B97\u6CD5\u8BA1\u7B97\u51FA\u8BE5\u6570\u636E\u5BF9\u8C61\u5BF9\u5E94\u7684\u7EA0\u5220\u7EC4\uFF0C\u5E76\u5C06\u6570\u636E\u548C\u6821\u9A8C\u5206\u7247\u5B58\u50A8\u81F3\u7EA0\u5220\u7EC4\u5185\u7684\u786C\u76D8\u4E0A\u3002</li></ol><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220722211726136.png" alt="image-20220722211726136"></p><p>\u5982\u56FE2-2\u6240\u793A\uFF0C\u5047\u8BBE\u67D0MinIO\u96C6\u7FA4\u5185\u7EA0\u5220\u7EC4\u5305\u542B4\u5757\u786C\u76D8\uFF0C\u67D0\u6570\u636E\u5BF9\u8C61\u540D\u4E3AMyObject\uFF0C\u5176\u96B6\u5C5E\u5B58\u50A8\u6876\u540D\u4E3AMyBucket\uFF0C\u54C8\u5E0C\u8BA1\u7B97\u5F97\u5230\u5BF9\u5E94\u7684\u7EA0\u5220\u7EC4\u4E3ADisk 1~4\u3002\u90A3\u4E48\u5728Disk 1~4\u7684\u6570\u636E\u8DEF\u5F84\u4E0B\uFF0C\u90FD\u4F1A\u751F\u6210MyBucket/MyObject\u5B50\u8DEF\u5F84\uFF0C\u5B50\u8DEF\u5F84\u4E2D\u5305\u542B2\u4E2A\u6587\u4EF6\uFF0C\u5206\u522B\u4E3A\u5B58\u50A8\u5143\u6570\u636E\u4FE1\u606F\u7684xl.json\u548CMyObject\u5BF9\u8C61\u5728\u8BE5\u76D8\u4E0A\u7684\u7B2C\u4E00\u4E2A\u5206\u7247part.1\u3002\u5176\u4E2D\uFF0Cxl\u8868\u793AMinIO\u4E2D\u6570\u636E\u5BF9\u8C61\u7684\u9ED8\u8BA4\u5B58\u50A8\u683C\u5F0F\u3002</p><h2 id="_2-\u96C6\u7FA4\u6269\u5BB9\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-\u96C6\u7FA4\u6269\u5BB9\u65B9\u6CD5" aria-hidden="true">#</a> 2. \u96C6\u7FA4\u6269\u5BB9\u65B9\u6CD5</h2><p>\u5E38\u89C1\u7684\u96C6\u7FA4\u6269\u5BB9\u65B9\u6CD5\u53EF\u5206\u4E3A\u4E24\u7C7B\uFF1A\u6C34\u5E73\u6269\u5BB9\u548C\u5782\u76F4\u6269\u5BB9\u3002<strong>\u6C34\u5E73\u6269\u5BB9\uFF0C\u4E00\u822C\u6307\u901A\u8FC7\u589E\u52A0\u8282\u70B9\u6570\u6269\u5C55\u7CFB\u7EDF\u6027\u80FD\uFF1B\u800C\u5782\u76F4\u6269\u5BB9\u5219\u6307\u63D0\u5347\u5404\u8282\u70B9\u81EA\u8EAB\u7684\u6027\u80FD\uFF0C\u4F8B\u5982\u589E\u52A0\u8282\u70B9\u7684\u78C1\u76D8\u5B58\u50A8\u7A7A\u95F4</strong>\u3002\u76F4\u63A5\u91C7\u7528\u5782\u76F4\u6269\u5BB9\u65B9\u5F0F\u6269\u5BB9MinIO\u96C6\u7FA4\u7684\u8282\u70B9\u78C1\u76D8\u7A7A\u95F4\uFF0C\u4F1A\u4E3A\u96C6\u7FA4\u8FD0\u884C\u5E26\u6765\u82E5\u5E72\u95EE\u9898\uFF0C\u5B98\u65B9\u4E5F\u5E76\u4E0D\u63A8\u8350\u3002\u56E0\u6B64\u672C\u6587\u4E3B\u8981\u4ECB\u7ECDMinIO\u7684\u4E24\u79CD\u6C34\u5E73\u6269\u5BB9\u65B9\u5F0F\uFF1A\u5BF9\u7B49\u6269\u5BB9\u548C\u8054\u90A6\u6269\u5BB9\u3002</p><h3 id="_2-1-\u5BF9\u7B49\u6269\u5BB9" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5BF9\u7B49\u6269\u5BB9" aria-hidden="true">#</a> 2.1 \u5BF9\u7B49\u6269\u5BB9</h3><p>\u9996\u5148\uFF0CMinIO\u7684\u6781\u7B80\u8BBE\u8BA1\u7406\u5FF5\u4F7F\u5F97MinIO\u5206\u5E03\u5F0F\u96C6\u7FA4<strong>\u5E76\u4E0D\u652F\u6301\u5411\u96C6\u7FA4\u4E2D\u6DFB\u52A0\u5355\u4E2A\u8282\u70B9\u5E76\u8FDB\u884C\u81EA\u52A8\u8C03\u8282\u7684\u6269\u5BB9\u65B9\u5F0F</strong>\uFF0C\u8FD9\u662F<strong>\u56E0\u4E3A\u52A0\u5165\u5355\u4E2A\u8282\u70B9\u540E\u6240\u5F15\u53D1\u7684\u6570\u636E\u5747\u8861\u4EE5\u53CA\u7EA0\u5220\u7EC4\u5212\u5206\u7B49\u95EE\u9898\u4F1A\u4E3A\u6574\u4E2A\u96C6\u7FA4\u5E26\u6765\u590D\u6742\u7684\u8C03\u5EA6\u548C\u5904\u7406\u8FC7\u7A0B</strong>\uFF0C\u5E76\u4E0D\u5229\u4E8E\u7EF4\u62A4\u3002\u56E0\u6B64\uFF0CMinIO\u63D0\u4F9B\u4E86\u4E00\u79CD\u5BF9\u7B49\u6269\u5BB9\u7684\u65B9\u5F0F\uFF0C\u5373\u8981\u6C42\u589E\u52A0\u7684\u8282\u70B9\u6570\u548C\u78C1\u76D8\u6570\u5747\u9700\u4E0E\u539F\u96C6\u7FA4\u4FDD\u6301\u5BF9\u7B49\u3002</p><h4 id="_2-1-1-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-1-1-\u793A\u4F8B" aria-hidden="true">#</a> 2.1.1 \u793A\u4F8B</h4><p>\u4F8B\u5982\u539F\u96C6\u7FA4\u5305\u542B4\u4E2A\u8282\u70B94\u5757\u78C1\u76D8\uFF0C\u5219\u5728\u6269\u5BB9\u65F6\u5FC5\u987B\u540C\u6837\u589E\u52A04\u4E2A\u8282\u70B94\u5757\u78C1\u76D8\uFF08\u6216\u4E3A\u5176\u500D\u6570\uFF09\uFF0C\u4EE5\u4FBF\u7CFB\u7EDF\u7EF4\u6301\u76F8\u540C\u7684\u6570\u636E\u5197\u4F59SLA\uFF0C\u4ECE\u800C\u6781\u5927\u5730\u964D\u4F4E\u6269\u5BB9\u7684\u590D\u6742\u6027\u3002\u5982\u4E0A\u4F8B\uFF0C\u5728\u6269\u5BB9\u540E\uFF0CMinIO\u96C6\u7FA4\u5E76\u4E0D\u4F1A\u5BF9\u5168\u90E8\u76848\u4E2A\u8282\u70B9\u8FDB\u884C\u5B8C\u5168\u7684\u6570\u636E\u5747\u8861\uFF0C\u800C\u662F\u5C06\u539F\u672C\u76844\u4E2A\u8282\u70B9\u89C6\u4F5C\u4E00\u4E2A\u533A\u57DF\uFF0C\u65B0\u52A0\u5165\u76844\u8282\u70B9\u89C6\u4F5C\u53E6\u4E00\u533A\u57DF\uFF0C\u5F53\u6709\u65B0\u5BF9\u8C61\u4E0A\u4F20\u65F6\uFF0C\u96C6\u7FA4\u5C06\u4F9D\u636E\u5404\u533A\u57DF\u7684\u53EF\u7528\u7A7A\u95F4\u6BD4\u4F8B\u786E\u5B9A\u5B58\u653E\u533A\u57DF\uFF0C\u5728\u5404\u533A\u57DF\u5185\u4ECD\u65E7\u901A\u8FC7\u54C8\u5E0C\u7B97\u6CD5\u786E\u5B9A\u5BF9\u5E94\u7684\u7EA0\u5220\u7EC4\u8FDB\u884C\u6700\u7EC8\u7684\u5B58\u653E\u3002\u6B64\u5916\uFF0C\u96C6\u7FA4\u8FDB\u884C\u4E00\u6B21\u5BF9\u7B49\u6269\u5BB9\u540E\uFF0C\u8FD8\u53EF\u4F9D\u636E\u6269\u5BB9\u89C4\u5219\u7EE7\u7EED\u8FDB\u884C\u5BF9\u7B49\u6269\u5BB9\uFF0C\u4F46\u51FA\u4E8E\u5B89\u5168\u6027\u8003\u8651\uFF0C\u96C6\u7FA4\u7684\u6700\u5927\u8282\u70B9\u6570\u4E00\u822C\u4E0D\u5F97\u8D85\u8FC732\u4E2A\u3002</p><h4 id="_2-1-2-\u4F18\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#_2-1-2-\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> 2.1.2 \u4F18\u7F3A\u70B9</h4><p>\u5BF9\u7B49\u6269\u5BB9\u7684\u4F18\u70B9\u5728\u4E8E\u914D\u7F6E\u64CD\u4F5C\u7B80\u5355\u6613\u884C\uFF0C\u901A\u8FC7\u4E00\u6761\u547D\u4EE4\u5373\u53EF\u5B8C\u6210\u6269\u5BB9\uFF08\u6CE8\u610F\uFF1A\u63A8\u8350\u4F7F\u7528\u8FDE\u7EED\u7684\u8282\u70B9IP\uFF0C\u5E76\u53C2\u7167MinIO\u5B98\u7F51\u5728\u6269\u5BB9\u547D\u4EE4\u4E2D\u4F7F\u7528{}\uFF09\u3002\u800C\u5BF9\u7B49\u6269\u5BB9\u7684\u5C40\u9650\u6027\u5728\u4E8E\uFF1A\u2460\u6269\u5BB9\u9700\u91CD\u542F\uFF1B\u2461\u6269\u5BB9\u5B58\u5728\u9650\u5236\uFF0C\u96C6\u7FA4\u8282\u70B9\u6570\u4E00\u822C\u4E0D\u8D85\u8FC732\u4E2A\uFF0C\u8FD9\u662F\u7531\u4E8EMinIO\u96C6\u7FA4\u901A\u8FC7\u5206\u5E03\u5F0F\u9501\u4FDD\u8BC1\u5F3A\u4E00\u81F4\u6027\uFF0C\u82E5\u96C6\u7FA4\u8282\u70B9\u6570\u8FC7\u5927\uFF0C\u7EF4\u62A4\u5F3A\u4E00\u81F4\u6027\u5C06\u5E26\u6765\u6027\u80FD\u95EE\u9898\u3002</p><h3 id="_2-2-\u8054\u90A6\u6269\u5BB9" tabindex="-1"><a class="header-anchor" href="#_2-2-\u8054\u90A6\u6269\u5BB9" aria-hidden="true">#</a> <strong>2.2 \u8054\u90A6\u6269\u5BB9</strong></h3><p>MinIO\u5B98\u65B9\u63D0\u4F9B\u4E86\u53E6\u4E00\u79CD\u6269\u5BB9\u673A\u5236\u2014\u2014\u8054\u90A6\u6269\u5BB9\uFF0C\u5373\u901A\u8FC7\u5F15\u5165etcd\uFF0C\u5C06\u591A\u4E2AMinIO\u5206\u5E03\u5F0F\u96C6\u7FA4\u5728\u903B\u8F91\u4E0A\u7EC4\u6210\u4E00\u4E2A\u8054\u90A6\uFF0C\u5BF9\u5916\u4EE5\u4E00\u4E2A\u6574\u4F53\u63D0\u4F9B\u670D\u52A1\uFF0C\u5E76\u63D0\u4F9B\u7EDF\u4E00\u7684\u547D\u540D\u7A7A\u95F4\u3002MinIO\u8054\u90A6\u96C6\u7FA4\u7684\u67B6\u6784\u5982\u56FE3-1\u6240\u793A\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220722212622430.png" alt="image-20220722212622430"></p><p>\u5176\u4E2D\uFF0Cetcd\u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u5206\u5E03\u5F0F\u952E\u503C\u5B58\u50A8\u6570\u636E\u5E93\uFF0C\u5728\u8054\u90A6\u4E2D\u7528\u4E8E\u8BB0\u5F55\u5B58\u50A8\u6876IP\u5730\u5740\u3002\u8054\u90A6\u5185\u7684\u5404\u4E2A\u96C6\u7FA4\u5176\u6570\u636E\u5B58\u50A8\u4EE5\u53CA\u4E00\u81F4\u6027\u7EF4\u62A4\u4ECD\u7531\u5404\u96C6\u7FA4\u81EA\u884C\u7BA1\u7406\uFF0C\u8054\u90A6\u53EA\u662F\u5BF9\u5916\u63D0\u4F9B\u4E00\u4E2A\u6574\u4F53\u903B\u8F91\u89C6\u56FE\u3002\u901A\u8FC7\u8FDE\u63A5\u5230\u8054\u90A6\u4E2D\u4EFB\u4E00\u96C6\u7FA4\u7684\u4EFB\u4E00\u8282\u70B9\uFF0C\u53EF\u4EE5\u67E5\u8BE2\u5E76\u8BBF\u95EE\u8054\u90A6\u5185\u6240\u6709\u96C6\u7FA4\u7684\u5168\u90E8\u6570\u636E\uFF0C\u7531\u6B64\u83B7\u5F97\u4E86\u903B\u8F91\u4E0A\u7684\u7A7A\u95F4\u6269\u5927\u611F\u3002\u4F46\u5B9E\u9645\u4E0A\uFF0C\u5BF9\u4E8E\u4E00\u4E2A\u5916\u90E8\u5E94\u7528\u8BBF\u95EE\uFF0C\u8054\u90A6\u9700\u4F9D\u8D56etcd\u5B9A\u4F4D\u5230\u5B58\u50A8\u6876\u7684\u5B9E\u9645\u5B58\u50A8\u8282\u70B9\uFF0C\u518D\u8FDB\u884C\u6570\u636E\u8BBF\u95EE\uFF0C\u8054\u90A6\u5219\u5BF9\u5916\u5C4F\u853D\u4E86\u6876IP\u67E5\u627E\u548C\u5B9A\u4F4D\u8FC7\u7A0B\uFF0C\u4ECE\u800C\u5728\u903B\u8F91\u4E0A\u5BF9\u5916\u5F62\u6210\u4E86\u4E00\u4E2A\u7EDF\u4E00\u6574\u4F53\u3002\u56E0\u6B64\uFF0Cetcd\u5B9E\u9645\u4E0A\u8D77\u5230\u4E86\u7C7B\u4F3C\u8DEF\u7531\u5BFB\u5740\u7684\u6548\u679C\u3002</p><h4 id="_2-2-1-minio\u8054\u90A6\u96C6\u7FA4\u7684\u6570\u636E\u8BBF\u95EE\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#_2-2-1-minio\u8054\u90A6\u96C6\u7FA4\u7684\u6570\u636E\u8BBF\u95EE\u673A\u5236" aria-hidden="true">#</a> 2.2.1 MinIO\u8054\u90A6\u96C6\u7FA4\u7684\u6570\u636E\u8BBF\u95EE\u673A\u5236</h4><p>MinIO\u8054\u90A6\u96C6\u7FA4\u7684\u6570\u636E\u8BBF\u95EE\u673A\u5236\u5177\u4F53\u5982\u4E0B\uFF1A</p><p>\u2460\u5BA2\u6237\u7AEF\u5E94\u7528\u5411\u8054\u90A6\u96C6\u7FA4\u53D1\u9001\u521B\u5EFA\u5B58\u50A8\u6876\u8BF7\u6C42\uFF0C\u6876\u540D\u4E3Abucket1\uFF1B</p><p>\u2461\u8054\u90A6\u4F1A\u5C06bucket1\u5B9E\u9645\u6240\u5728\u7684\u96C6\u7FA4\u8282\u70B9IP\u5730\u5740\u5199\u5165etcd\u4E2D\uFF0C\u4F8B\u5982bucket1\u5B9E\u9645\u5C06\u5B58\u50A8\u4E8E\u8054\u90A6\u4E2D\u7684\u96C6\u7FA41\u4E0A\uFF0C\u800C\u96C6\u7FA41\u5305\u542B2\u4E2A\u8282\u70B9\uFF0C\u5176\u8282\u70B9IP\u5730\u5740\u5206\u522B\u4E3A192.168.1.103\u548C192.168.1.104\uFF0C\u5219etcd\u4E2D\u5C06\u5199\u5165\u5982\u4E0B\u4E24\u6761\u8BB0\u5F55\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220722212921098.png" alt="image-20220722212921098"></p><p>\u2462\u5BA2\u6237\u7AEF\u5E94\u7528\u5411\u8054\u90A6\u8BF7\u6C42\u4E0A\u4F201\u4E2A\u5BF9\u8C61\u81F3bucket1\uFF1B</p><p>\u2463\u8054\u90A6\u4F1A\u5148\u67E5\u8BE2etcd\uFF0C\u5B9A\u4F4D\u5230bucket1\u7684\u5B9E\u9645\u5B58\u50A8\u8282\u70B9103\u548C104\uFF0C\u518D\u8FDB\u884C\u76F8\u5E94\u7684\u4E0A\u4F20\u64CD\u4F5C\u3002</p><h4 id="_2-2-2-\u4F18\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#_2-2-2-\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> 2.2.2 \u4F18\u7F3A\u70B9</h4><p>\u76F8\u8F83\u4E8E\u5BF9\u7B49\u6269\u5BB9\uFF0C\u8054\u90A6\u6269\u5BB9\u7684\u4F18\u70B9\u5728\u4E8E\uFF1A\u2460\u8054\u90A6\u4E2D\u7684\u5404\u96C6\u7FA4\u4E0D\u8981\u6C42\u8282\u70B9\u6570\u548C\u78C1\u76D8\u6570\u7684\u5BF9\u7B49\uFF1B\u2461\u8054\u90A6\u53EF\u4EE5\u65E0\u9650\u6269\u5C55\uFF0C\u4E0D\u65AD\u52A0\u5165\u65B0\u96C6\u7FA4\uFF1B\u2462\u82E5\u8054\u90A6\u4E2D\u67D0\u4E2A\u96C6\u7FA4\u51FA\u73B0\u6545\u969C\uFF0C\u8BE5\u6545\u969C\u5C06\u4E0D\u5F71\u54CD\u8054\u90A6\u4E2D\u7684\u5176\u4ED6\u96C6\u7FA4\u63D0\u4F9B\u670D\u52A1\u3002\u5176\u7F3A\u70B9\u4E3A\u9700\u8981\u989D\u5916\u5F15\u5165etcd\uFF0C\u4E14\u914D\u7F6E\u8FC7\u7A0B\u8F83\u4E3A\u590D\u6742\u3002</p><p>\u56E0\u6B64\uFF0C\u672C\u6587\u5C06\u7B80\u8981\u4ECB\u7ECDMinIO\u8054\u90A6\u6269\u5BB9\u914D\u7F6E\u65B9\u6CD5\u3002</p><h2 id="_3-\u8054\u90A6\u6269\u5BB9\u90E8\u7F72\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_3-\u8054\u90A6\u6269\u5BB9\u90E8\u7F72\u64CD\u4F5C" aria-hidden="true">#</a> 3. <strong>\u8054\u90A6\u6269\u5BB9\u90E8\u7F72\u64CD\u4F5C</strong></h2><p>\u672C\u6587\u9488\u5BF9\u8054\u90A6\u6269\u5BB9\uFF0C\u63D0\u4F9B\u53C2\u8003\u914D\u7F6E\u64CD\u4F5C\u5982\u4E0B\uFF1A</p><p>\u5047\u5B9A\u5C06\u4E24\u4E2AMinIO\u96C6\u7FA4\u7EC4\u6210\u8054\u90A6\uFF0C\u6BCF\u4E2A\u96C6\u7FA4\u5305\u542B2\u4E2A\u8282\u70B94\u5757\u78C1\u76D8\u3002etcd\u5EFA\u8BAE\u914D\u7F6E\u4E3A3\u8282\u70B9\u96C6\u7FA4\uFF0C\u4EE5\u907F\u514D\u5355\u70B9\u6545\u969C\u3002\u5177\u4F53\u90E8\u7F72\u4FE1\u606F\u5982\u88684-1\u6240\u793A\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220722213126008.png" alt="image-20220722213126008"></p><p>**\u7B2C\u4E00\u6B65\uFF1A\u642D\u5EFAetcd\u96C6\u7FA4\u3002**\u5728http://github.com/etcd-io/etcd/releases\u4E2D\u4E0B\u8F7D\u5408\u9002\u7248\u672C\u8FDB\u884C\u89E3\u538B\u5B89\u88C5\uFF0C\u521B\u5EFA\u914D\u7F6E\u6587\u4EF6etcd.conf\uFF0C\u4EE5192.168.1.107\u4E3A\u4F8B\uFF0C\u914D\u7F6E\u5185\u5BB9\u5982\u4E0B\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220722213157388.png" alt="image-20220722213157388"></p><p>\u5728192.168.1.108\u548C192.168.1.109\u4E0A\u540C\u6837\u8FDB\u884C\u4E0A\u8FF0\u914D\u7F6E\u3002\u9700\u6CE8\u610F\uFF1A\u914D\u7F6E\u6587\u4EF6\u4E3AYAML\u683C\u5F0F\uFF0C\u53C2\u6570initial-cluster\u5FC5\u987B\u4E0E\u5404\u8282\u70B9\u4E0A\u914D\u7F6E\u7684name\u53C2\u6570\u4EE5\u53CAinitial-advertise-peer-urls\u53C2\u6570\u8FDB\u884C\u5BF9\u5E94\u3002</p><p>\u7136\u540E\uFF0C\u5728\u5404\u8282\u70B9\u5206\u522B\u6267\u884C\u547D\u4EE4./etcd --config-file /home/user/etcd/etcd.conf\u8FDB\u884C\u542F\u52A8\uFF0C\u96C6\u7FA4\u5F00\u59CB\u8FD0\u884C\u3002\u5728\u4EFB\u4E00\u8282\u70B9\u6267\u884C\u547D\u4EE4etcdctl member list\uFF0C\u82E5\u80FD\u663E\u793A\u4E09\u4E2A\u8282\u70B9\u4FE1\u606F\uFF0C\u5219etcd\u96C6\u7FA4\u90E8\u7F72\u6210\u529F\u3002</p><p>**\u7B2C\u4E8C\u6B65\uFF1A\u9010\u4E00\u642D\u5EFA\u5404MinIO\u96C6\u7FA4\u3002**\u5EFA\u8BAE\u5728\u642D\u5EFA\u65B0\u96C6\u7FA4\u65F6\u5C31\u76F4\u63A5\u52A0\u5165\u5230\u8054\u90A6\uFF0C\u4EE5\u4FBF\u540E\u7EED\u7684\u6269\u5BB9\u64CD\u4F5C\u3002\u4EE5\u96C6\u7FA41\u4E3A\u4F8B\uFF0C\u5176\u4E0A192.168.1.103\u548C192.168.1.104\u8282\u70B9\u7684\u914D\u7F6E\u548C\u542F\u52A8\u547D\u4EE4\u5982\u4E0B\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220722213310216.png" alt="image-20220722213310216"></p><p>\u6CE8\u610F\uFF1AMinIO_ETCD_ENDPOINTS\u53C2\u6570\u9700\u4E0E\u642D\u5EFA\u7684ETCD\u96C6\u7FA4\u6240\u6709\u8282\u70B9IP\u76F8\u5BF9\u5E94\uFF1BMINIO_PUBLIC_IPS\u53C2\u6570\u5219\u4E3A\u8BE5\u96C6\u7FA4\u7684\u6240\u6709\u8282\u70B9IP\uFF0C\u5982\u4E0A\u8FF0\u793A\u4F8B\u4E2D\u5BF9\u5E94\u96C6\u7FA41\u76842\u4E2A\u8282\u70B9IP\uFF1BMINIO_DOMAIN\u53C2\u6570\u5FC5\u987B\u8FDB\u884C\u914D\u7F6E\uFF0C\u5373\u4F7F\u4F60\u5E76\u4E0D\u901A\u8FC7\u57DF\u540D\u8BBF\u95EE\u5B58\u50A8\u6876\uFF0C\u5426\u5219\u8054\u90A6\u65E0\u6CD5\u751F\u6548\u3002</p><p>\u5BF9\u96C6\u7FA42\u7684\u5404\u8282\u70B9\u540C\u6837\u6DFB\u52A0\u4E0A\u8FF0\u914D\u7F6E\u9879\u3002\u542F\u52A8\u540E\uFF0C\u8FDB\u884C\u8054\u90A6\u6D4B\u8BD5</p><p>\u9996\u5148\uFF0C\u8FDE\u63A5\u81F3\u96C6\u7FA41\u4E2D\u7684192.168.1.103\u8282\u70B9\uFF0C\u521B\u5EFA\u5B58\u50A8\u6876bucket1\uFF0C\u5E76\u4E0A\u4F201\u4E2A\u5BF9\u8C61\uFF1B\u7136\u540E\u8FDE\u63A5\u81F3\u4EFB\u4E00etcd\u8282\u70B9\uFF0C\u901A\u8FC7\u547D\u4EE4 ETCDCTL_API=3 etcdctl get --from-key &#39;&#39; \u67E5\u770Betcd\u4E2D\u662F\u5426\u5DF2\u5199\u5165bucket1\u7684\u76F8\u5173\u8BB0\u5F55\uFF1B\u6700\u540E\u8FDE\u63A5\u81F3\u96C6\u7FA42\u4E2D\u7684192.168.1.105\u8282\u70B9\uFF0C\u6D4B\u8BD5\u662F\u5426\u80FD\u8BBF\u95EE\u5230bucket1\u53CA\u6876\u5185\u5BF9\u8C61\u3002\u82E5\u80FD\u8BBF\u95EE\uFF0C\u5219\u8054\u90A6\u6A21\u5F0F\u7EC4\u5EFA\u6210\u529F\u3002</p><p>\u540E\u7EED\u82E5\u9700\u8FDB\u884C\u6269\u5BB9\uFF0C\u53EF\u53C2\u7167\u4E0A\u8FF0\u914D\u7F6E\u65B9\u5F0F\u5206\u522B\u90E8\u7F72\u96C6\u7FA43\u3001\u96C6\u7FA44\u3001\u96C6\u7FA4n\uFF0C\u7531\u4E8E\u914D\u7F6E\u4E86\u76F8\u540C\u7684etcd\u5730\u5740\uFF0C\u8FD9\u4E9B\u96C6\u7FA4\u5C06\u81EA\u52A8\u52A0\u5165\u8054\u90A6\uFF0C\u4ECE\u800C\u5B9E\u73B0\u96C6\u7FA4\u7684\u65E0\u9650\u6269\u5C55\u3002</p><h2 id="_4-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_4-\u603B\u7ED3" aria-hidden="true">#</a> 4. \u603B\u7ED3</h2><p>\u672C\u6587\u57FA\u4E8EMinIO\u5F00\u6E90\u5BF9\u8C61\u5B58\u50A8\u7CFB\u7EDF\u7684\u5206\u5E03\u5F0F\u96C6\u7FA4\u6A21\u5F0F\uFF0C\u7B80\u8981\u4ECB\u7ECD\u4E86\u5176\u5E38\u89C1\u7684\u96C6\u7FA4\u6269\u5BB9\u65B9\u6CD5\uFF0C\u65E8\u5728\u4E3A\u6EE1\u8DB3\u5B9E\u9645\u9700\u6C42\uFF0C\u5728\u8FDB\u884C\u6269\u5BB9\u64CD\u4F5C\u65F6\u63D0\u4F9B\u4E00\u5B9A\u53C2\u8003\u3002<strong>\u5EFA\u8BAE\u4F18\u5148\u8003\u8651\u8054\u90A6\u6269\u5BB9</strong>\uFF0C\u4F46\u5728\u539F\u96C6\u7FA4\u8282\u70B9\u6570\u548C\u78C1\u76D8\u6570\u8F83\u5C11\u3001\u7CFB\u7EDF\u6570\u636E\u91CF\u589E\u957F\u8F83\u6162\u3001\u540E\u7EED\u6269\u5BB9\u64CD\u4F5C\u4E0D\u9891\u7E41\u3001\u670D\u52A1\u53EF\u4E2D\u65AD\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u8003\u8651\u5BF9\u7B49\u6269\u5BB9\u3002\u6B64\u5916\uFF0C\u53EF\u8003\u8651\u5728\u9996\u6B21\u8FDB\u884C\u5355\u4E2A\u96C6\u7FA4\u90E8\u7F72\u65F6\u5C31\u5F15\u5165etcd\u8054\u90A6\u6A21\u5F0F\uFF0C\u8FD9\u6837\u540E\u7EED\u8FDB\u884C\u8054\u90A6\u6269\u5BB9\u65F6\u80FD\u7B80\u5316\u5F88\u591A\u6D41\u7A0B\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 49);
const _hoisted_50 = {
  href: "https://mp.weixin.qq.com/s/0W7_UaqeSUfSnG9wr2nywA",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_51 = /* @__PURE__ */ createTextVNode("\u6F2B\u8C08 MinIO \u96C6\u7FA4\u6269\u5BB9\u65B9\u6CD5");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_50, [
        _hoisted_51,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var C1MinIO_______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C1-MinIO\u96C6\u7FA4\u6269\u5BB9\u65B9\u6CD5.html.vue"]]);
export { C1MinIO_______html as default };
