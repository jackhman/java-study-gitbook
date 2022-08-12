import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.2ea2a491.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u67B6\u6784\u4E4B\u9AD8\u53EF\u7528-\u8D1F\u8F7D\u5747\u8861" tabindex="-1"><a class="header-anchor" href="#\u67B6\u6784\u4E4B\u9AD8\u53EF\u7528-\u8D1F\u8F7D\u5747\u8861" aria-hidden="true">#</a> \u67B6\u6784\u4E4B\u9AD8\u53EF\u7528: \u8D1F\u8F7D\u5747\u8861</h1><blockquote><p>\u8D1F\u8F7D\u5747\u8861\uFF08Load Balance\uFF09\uFF0C\u610F\u601D\u662F\u5C06\u8D1F\u8F7D\uFF08\u5DE5\u4F5C\u4EFB\u52A1\uFF0C\u8BBF\u95EE\u8BF7\u6C42\uFF09\u8FDB\u884C\u5E73\u8861\u3001\u5206\u644A\u5230\u591A\u4E2A\u64CD\u4F5C\u5355\u5143\uFF08\u670D\u52A1\u5668\uFF0C\u7EC4\u4EF6\uFF09\u4E0A\u8FDB\u884C\u6267\u884C\u3002\u662F\u89E3\u51B3\u9AD8\u6027\u80FD\uFF0C\u5355\u70B9\u6545\u969C\uFF08\u9AD8\u53EF\u7528\uFF09\uFF0C\u6269\u5C55\u6027\uFF08\u6C34\u5E73\u4F38\u7F29\uFF09\u7684\u7EC8\u6781\u89E3\u51B3\u65B9\u6848\u3002</p></blockquote><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u8D1F\u8F7D\u5747\u8861\uFF08Load Balance\uFF09\uFF0C\u610F\u601D\u662F\u5C06\u8D1F\u8F7D\uFF08\u5DE5\u4F5C\u4EFB\u52A1\uFF0C\u8BBF\u95EE\u8BF7\u6C42\uFF09\u8FDB\u884C\u5E73\u8861\u3001\u5206\u644A\u5230\u591A\u4E2A\u64CD\u4F5C\u5355\u5143\uFF08\u670D\u52A1\u5668\uFF0C\u7EC4\u4EF6\uFF09\u4E0A\u8FDB\u884C\u6267\u884C\u3002\u662F\u89E3\u51B3\u9AD8\u6027\u80FD\uFF0C\u5355\u70B9\u6545\u969C\uFF08\u9AD8\u53EF\u7528\uFF09\uFF0C\u6269\u5C55\u6027\uFF08\u6C34\u5E73\u4F38\u7F29\uFF09\u7684\u7EC8\u6781\u89E3\u51B3\u65B9\u6848\u3002</p><blockquote><ul><li>\u4ECE\u63D0\u9AD8\u5355\u673A\u6027\u80FD\u5230\u5206\u5E03\u5F0F\u89E3\u51B3</li></ul><p>\u9762\u5BF9\u5927\u91CF\u7528\u6237\u8BBF\u95EE\u3001\u9AD8\u5E76\u53D1\u8BF7\u6C42\uFF0C\u6D77\u91CF\u6570\u636E\uFF0C\u53EF\u4EE5\u4F7F\u7528\u9AD8\u6027\u80FD\u7684\u670D\u52A1\u5668\u3001\u5927\u578B\u6570\u636E\u5E93\uFF0C\u5B58\u50A8\u8BBE\u5907\uFF0C\u9AD8\u6027\u80FDWeb\u670D\u52A1\u5668\uFF0C\u91C7\u7528\u9AD8\u6548\u7387\u7684\u7F16\u7A0B\u8BED\u8A00\u6BD4\u5982(Go,Scala)\u7B49\uFF0C\u5F53\u5355\u673A\u5BB9\u91CF\u8FBE\u5230\u6781\u9650\u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u8003\u8651\u4E1A\u52A1\u62C6\u5206\u548C\u5206\u5E03\u5F0F\u90E8\u7F72\uFF0C\u6765\u89E3\u51B3\u5927\u578B\u7F51\u7AD9\u8BBF\u95EE\u91CF\u5927\uFF0C\u5E76\u53D1\u91CF\u9AD8\uFF0C\u6D77\u91CF\u6570\u636E\u7684\u95EE\u9898\u3002</p><ul><li>\u5206\u5E03\u5F0F\u89E3\u51B3\u7EDF\u4E00\u5165\u53E3\u95EE\u9898</li></ul><p>\u4ECE\u5355\u673A\u7F51\u7AD9\u5230\u5206\u5E03\u5F0F\u7F51\u7AD9\uFF0C\u5F88\u91CD\u8981\u7684\u533A\u522B\u662F\u4E1A\u52A1\u62C6\u5206\u548C\u5206\u5E03\u5F0F\u90E8\u7F72\uFF0C\u5C06\u5E94\u7528\u62C6\u5206\u540E\uFF0C\u90E8\u7F72\u5230\u4E0D\u540C\u7684\u673A\u5668\u4E0A\uFF0C\u5B9E\u73B0\u5927\u89C4\u6A21\u5206\u5E03\u5F0F\u7CFB\u7EDF\u3002\u5206\u5E03\u5F0F\u548C\u4E1A\u52A1\u62C6\u5206\u89E3\u51B3\u4E86\uFF0C\u4ECE\u96C6\u4E2D\u5230\u5206\u5E03\u7684\u95EE\u9898\uFF0C\u4F46\u662F\u6BCF\u4E2A\u90E8\u7F72\u7684\u72EC\u7ACB\u4E1A\u52A1\u8FD8\u5B58\u5728\u5355\u70B9\u7684\u95EE\u9898\u548C\u8BBF\u95EE\u7EDF\u4E00\u5165\u53E3\u95EE\u9898\uFF0C\u4E3A\u89E3\u51B3\u5355\u70B9\u6545\u969C\uFF0C\u6211\u4EEC\u53EF\u4EE5\u91C7\u53D6\u5197\u4F59\u7684\u65B9\u5F0F\u3002\u5C06\u76F8\u540C\u7684\u5E94\u7528\u90E8\u7F72\u5230\u591A\u53F0\u673A\u5668\u4E0A\u3002\u89E3\u51B3\u8BBF\u95EE\u7EDF\u4E00\u5165\u53E3\u95EE\u9898\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u96C6\u7FA4\u524D\u9762\u589E\u52A0\u8D1F\u8F7D\u5747\u8861\u8BBE\u5907\uFF0C\u5B9E\u73B0\u6D41\u91CF\u5206\u53D1\u3002</p></blockquote><h2 id="_2-\u8D1F\u8F7D\u5747\u8861\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_2-\u8D1F\u8F7D\u5747\u8861\u539F\u7406" aria-hidden="true">#</a> 2. \u8D1F\u8F7D\u5747\u8861\u539F\u7406</h2><p>\u7CFB\u7EDF\u7684\u6269\u5C55\u53EF\u5206\u4E3A\u7EB5\u5411\uFF08\u5782\u76F4\uFF09\u6269\u5C55\u548C\u6A2A\u5411\uFF08\u6C34\u5E73\uFF09\u6269\u5C55\u3002</p><ul><li><p>\u7EB5\u5411\u6269\u5C55</p><ul><li>\u4ECE\u5355\u673A\u7684\u89D2\u5EA6\u901A\u8FC7\u589E\u52A0\u786C\u4EF6\u5904\u7406\u80FD\u529B\uFF0C\u6BD4\u5982CPU\u5904\u7406\u80FD\u529B\uFF0C\u5185\u5B58\u5BB9\u91CF\uFF0C\u78C1\u76D8\u7B49\u65B9\u9762\uFF0C\u5B9E\u73B0\u670D\u52A1\u5668\u5904\u7406\u80FD\u529B\u7684\u63D0\u5347</li><li>\u4E0D\u80FD\u6EE1\u8DB3\u5927\u578B\u5206\u5E03\u5F0F\u7CFB\u7EDF\uFF08\u7F51\u7AD9\uFF09\uFF0C\u5927\u6D41\u91CF\uFF0C\u9AD8\u5E76\u53D1\uFF0C\u6D77\u91CF\u6570\u636E\u7684\u95EE\u9898\u3002</li></ul><p>\u56E0\u6B64\u9700\u8981\u91C7\u7528\u6A2A\u5411\u6269\u5C55\u7684\u65B9\u5F0F\uFF0C</p></li><li><p>\u6A2A\u5411\u6269\u5C55</p><ul><li>\u901A\u8FC7\u6DFB\u52A0\u673A\u5668\u6765\u6EE1\u8DB3\u5927\u578B\u7F51\u7AD9\u670D\u52A1\u7684\u5904\u7406\u80FD\u529B\u3002</li><li>\u6BD4\u5982\uFF1A\u4E00\u53F0\u673A\u5668\u4E0D\u80FD\u6EE1\u8DB3\uFF0C\u5219\u589E\u52A0\u4E24\u53F0\u6216\u8005\u591A\u53F0\u673A\u5668\uFF0C\u5171\u540C\u627F\u62C5\u8BBF\u95EE\u538B\u529B\u3002\u8FD9\u5C31\u662F\u5178\u578B\u7684\u96C6\u7FA4\u548C\u8D1F\u8F7D\u5747\u8861\u67B6\u6784\uFF1A\u5982\u4E0B\u56FE\uFF1A</li></ul></li></ul><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220701210221965.png" alt="image-20220701210221965" style="zoom:50%;"><h3 id="_2-1-\u8D1F\u8F7D\u5747\u8861\u7684\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-1-\u8D1F\u8F7D\u5747\u8861\u7684\u65B9\u5F0F" aria-hidden="true">#</a> 2.1 <strong>\u8D1F\u8F7D\u5747\u8861\u7684\u65B9\u5F0F</strong></h3><ul><li><p><strong>\u5E94\u7528\u96C6\u7FA4</strong>\uFF1A\u5C06\u540C\u4E00\u5E94\u7528\u90E8\u7F72\u5230\u591A\u53F0\u673A\u5668\u4E0A\uFF0C\u7EC4\u6210\u5904\u7406\u96C6\u7FA4\uFF0C\u63A5\u6536\u8D1F\u8F7D\u5747\u8861\u8BBE\u5907\u5206\u53D1\u7684\u8BF7\u6C42\uFF0C\u8FDB\u884C\u5904\u7406\uFF0C\u5E76\u8FD4\u56DE\u76F8\u5E94\u6570\u636E\u3002</p></li><li><p><strong>\u8D1F\u8F7D\u5747\u8861\u8BBE\u5907</strong>\uFF1A\u5C06\u7528\u6237\u8BBF\u95EE\u7684\u8BF7\u6C42\uFF0C\u6839\u636E\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5\uFF0C\u5206\u53D1\u5230\u96C6\u7FA4\u4E2D\u7684\u4E00\u53F0\u5904\u7406\u670D\u52A1\u5668\u3002\uFF08\u4E00\u79CD\u628A\u7F51\u7EDC\u8BF7\u6C42\u5206\u6563\u5230\u4E00\u4E2A\u670D\u52A1\u5668\u96C6\u7FA4\u4E2D\u7684\u53EF\u7528\u670D\u52A1\u5668\u4E0A\u53BB\u7684\u8BBE\u5907\uFF09</p></li></ul><h3 id="_2-2-\u8D1F\u8F7D\u5747\u8861\u7684\u4F5C\u7528-\u89E3\u51B3\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_2-2-\u8D1F\u8F7D\u5747\u8861\u7684\u4F5C\u7528-\u89E3\u51B3\u7684\u95EE\u9898" aria-hidden="true">#</a> 2.2 <strong>\u8D1F\u8F7D\u5747\u8861\u7684\u4F5C\u7528</strong>\uFF08\u89E3\u51B3\u7684\u95EE\u9898\uFF09\uFF1A</h3><ol><li><p>\u89E3\u51B3\u5E76\u53D1\u538B\u529B\uFF0C\u63D0\u9AD8\u5E94\u7528\u5904\u7406\u6027\u80FD\uFF08\u589E\u52A0\u541E\u5410\u91CF\uFF0C\u52A0\u5F3A\u7F51\u7EDC\u5904\u7406\u80FD\u529B\uFF09\uFF1B</p></li><li><p>\u63D0\u4F9B\u6545\u969C\u8F6C\u79FB\uFF0C\u5B9E\u73B0\u9AD8\u53EF\u7528\uFF1B</p></li><li><p>\u901A\u8FC7\u6DFB\u52A0\u6216\u51CF\u5C11\u670D\u52A1\u5668\u6570\u91CF\uFF0C\u63D0\u4F9B\u7F51\u7AD9\u4F38\u7F29\u6027\uFF08\u6269\u5C55\u6027\uFF09\uFF1B</p></li><li><p>\u5B89\u5168\u9632\u62A4\uFF1B\uFF08\u8D1F\u8F7D\u5747\u8861\u8BBE\u5907\u4E0A\u505A\u4E00\u4E9B\u8FC7\u6EE4\uFF0C\u9ED1\u767D\u540D\u5355\u7B49\u5904\u7406\uFF09</p></li></ol><h2 id="_3-\u8D1F\u8F7D\u5747\u8861\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#_3-\u8D1F\u8F7D\u5747\u8861\u5206\u7C7B" aria-hidden="true">#</a> 3. \u8D1F\u8F7D\u5747\u8861\u5206\u7C7B</h2><h3 id="_3-1-dns-\u8D1F\u8F7D\u5747\u8861" tabindex="-1"><a class="header-anchor" href="#_3-1-dns-\u8D1F\u8F7D\u5747\u8861" aria-hidden="true">#</a> 3.1 DNS \u8D1F\u8F7D\u5747\u8861</h3><p>\u601D\u8DEF\u662F DNS \u89E3\u6790\u540C\u4E00\u4E2A\u57DF\u540D\u65F6\u53EF\u4EE5\u8FD4\u56DE\u4E0D\u540C\u7684IP\u5730\u5740\u3002</p><p>\u7528\u6765\u5B9E\u73B0\u5730\u7406\u7EA7\u522B\u7684\u5747\u8861\uFF0C\u4F8B\u5982\uFF0C\u5317\u65B9\u7528\u6237\u8BBF\u95EE\u5317\u4EAC\u673A\u623F\u3001\u5357\u65B9\u7528\u6237\u8BBF\u95EE\u6DF1\u5733\u673A\u623F\u3002</p><ul><li><p>\u4F18\u70B9\uFF1A</p><ul><li><p>\u7B80\u5355\uFF0C\u6210\u672C\u4F4E\uFF0C\u76F4\u63A5\u4EA4\u7ED9DNS\u670D\u52A1\u5668\u5904\u7406\u5373\u53EF\uFF0C\u65E0\u9700\u81EA\u5DF1\u7EF4\u62A4\u3002</p></li><li><p>\u5C31\u8FD1\u8BBF\u95EE\uFF0C\u63D0\u5347\u8BBF\u95EE\u901F\u5EA6\u3002</p></li></ul></li><li><p>\u7F3A\u70B9\uFF1A</p><ul><li><p>DNS\u7F13\u5B58\u65F6\u95F4\u8F83\u957F\uFF0C\u66F4\u65B0\u4E0D\u53CA\u65F6\u3002</p></li><li><p>DNS\u63A7\u5236\u6743\u5728\u57DF\u540D\u5546\u90A3\u91CC\uFF0C\u65E0\u6CD5\u6839\u636E\u4E1A\u52A1\u7279\u70B9\u5B9A\u5236\u6269\u5C55\u3002</p></li></ul></li></ul><h3 id="_3-2-\u786C\u4EF6\u8D1F\u8F7D\u5747\u8861" tabindex="-1"><a class="header-anchor" href="#_3-2-\u786C\u4EF6\u8D1F\u8F7D\u5747\u8861" aria-hidden="true">#</a> 3.2 \u786C\u4EF6\u8D1F\u8F7D\u5747\u8861</h3><p>\u901A\u8FC7\u5355\u72EC\u7684\u786C\u4EF6\u8BBE\u5907\u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861\uFF0C<strong>\u5178\u578B\u8BBE\u5907\u4F8B\u5982 F5</strong>\u3001A10\u3002</p><ul><li><p>\u4F18\u70B9\uFF1A</p><ul><li><p>\u529F\u80FD\u5F3A\u5927\uFF0C\u652F\u6301\u5404\u7EA7\u8D1F\u8F7D\u5747\u8861\uFF0C\u652F\u6301\u5404\u79CD\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5\uFF0C\u652F\u6301\u5168\u5C40\u8D1F\u8F7D\u5747\u8861\u3002</p></li><li><p>\u6027\u80FD\u5F3A\u5927\uFF0C\u53EF\u4EE5\u652F\u6301100\u4E07\u4EE5\u4E0A\u7684\u5E76\u53D1\u3002</p></li><li><p>\u7A33\u5B9A\u6027\u9AD8\u3002</p></li><li><p>\u652F\u6301\u5B89\u5168\u9632\u62A4\uFF0C\u9664\u4E86\u8D1F\u8F7D\u5747\u8861\u7684\u529F\u80FD\uFF0C\u8FD8\u6709\u9632\u706B\u5899\u3001\u9632DDoS\u653B\u51FB\u7B49\u5B89\u5168\u529F\u80FD\u3002</p></li></ul></li><li><p>\u7F3A\u70B9\uFF1A</p><ul><li><p>\u6602\u8D35\uFF0C\u4EF7\u683C\u51E0\u4E07\u751A\u81F3\u6570\u5341\u4E07\u3002</p></li><li><p>\u6269\u5C55\u80FD\u529B\u5DEE\u3002</p></li></ul></li></ul><h3 id="_3-3-\u8F6F\u4EF6\u8D1F\u8F7D\u5747\u8861" tabindex="-1"><a class="header-anchor" href="#_3-3-\u8F6F\u4EF6\u8D1F\u8F7D\u5747\u8861" aria-hidden="true">#</a> 3.3 \u8F6F\u4EF6\u8D1F\u8F7D\u5747\u8861</h3><p>\u901A\u8FC7\u8F6F\u4EF6\u5B9E\u73B0\uFF0C\u4F8B\u5982\u6211\u4EEC\u719F\u6089\u7684 Nginx\uFF087\u5C42\u8D1F\u8F7D\u5747\u8861\uFF09 \u548C LVS\uFF084\u5C42\u8D1F\u8F7D\u5747\u8861\uFF09\u3002</p><blockquote><p>\u548C\u786C\u4EF6\u8D1F\u8F7D\u5747\u8861\u76F8\u6BD4\uFF0C\u6027\u80FD\u5DEE\u4E86\u5F88\u591A\uFF0C<strong>Nginx \u80FD\u652F\u63015\u4E07/\u79D2\uFF0C\u800CF5\u662F\u767E\u4E07\u7EA7</strong>\uFF0C\u4F46\u4EF7\u683C\u4E5F\u4FBF\u5B9C\u4E86\u5F88\u591A\u3002</p></blockquote><ul><li><p>\u4F18\u70B9\uFF1A</p><ul><li><p>\u7B80\u5355</p></li><li><p>\u4FBF\u5B9C</p></li><li><p>\u7075\u6D3B</p></li></ul></li><li><p>\u7F3A\u70B9\uFF1A</p><ul><li><p>\u6027\u80FD\u4E00\u822C</p></li><li><p>\u6CA1\u6709\u9632\u706B\u5899\u7B49\u5B89\u5168\u529F\u80FD</p></li></ul></li></ul><h2 id="_4-\u8D1F\u8F7D\u5747\u8861\u7684\u5178\u578B\u67B6\u6784" tabindex="-1"><a class="header-anchor" href="#_4-\u8D1F\u8F7D\u5747\u8861\u7684\u5178\u578B\u67B6\u6784" aria-hidden="true">#</a> 4. \u8D1F\u8F7D\u5747\u8861\u7684\u5178\u578B\u67B6\u6784</h2><p>DNS\u3001\u786C\u4EF6\u3001\u8F6F\u4EF6\u8FD93\u4E2D\u65B9\u5F0F\u53EF\u4EE5\u7EC4\u5408\u4F7F\u7528\uFF0C\u57FA\u672C\u539F\u5219\uFF1A</p><ul><li><p>DNS\u65B9\u5F0F\u7528\u4E8E\u5B9E\u73B0<strong>\u5730\u7406\u7EA7\u522B</strong>\u7684\u8D1F\u8F7D\u5747\u8861\u3002</p></li><li><p>\u786C\u4EF6\u65B9\u5F0F\u7528\u4E8E\u5B9E\u73B0<strong>\u96C6\u7FA4\u7EA7\u522B</strong>\u7684\u8D1F\u8F7D\u5747\u8861\u3002</p></li><li><p>\u8F6F\u4EF6\u65B9\u5F0F\u7528\u4E8E\u5B9E\u73B0<strong>\u673A\u5668\u7EA7\u522B</strong>\u7684\u8D1F\u8F7D\u5747\u8861\u3002</p></li></ul><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220701211454617.png" alt="image-20220701211454617" style="zoom:50%;"><h2 id="_5-\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#_5-\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5" aria-hidden="true">#</a> 5. \u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5</h2><h3 id="_5-1-\u8F6E\u8BE2" tabindex="-1"><a class="header-anchor" href="#_5-1-\u8F6E\u8BE2" aria-hidden="true">#</a> 5.1 \u8F6E\u8BE2</h3><p>\u8D1F\u8F7D\u5747\u8861\u7CFB\u7EDF\u63A5\u6536\u5230\u8BF7\u6C42\u540E\uFF0C\u6309\u7167\u987A\u5E8F\u8F6E\u6D41\u5206\u914D\u7ED9\u670D\u52A1\u5668\u3002</p><p>\u8FD9\u79CD\u65B9\u5F0F\u975E\u5E38\u7B80\u5355\uFF0C\u53EA\u7BA1\u6309\u987A\u5E8F\u5206\u914D\uFF0C\u81F3\u4E8E\u670D\u52A1\u5668\u5F53\u524D\u8D1F\u8F7D\u60C5\u51B5\u3001\u786C\u4EF6\u80FD\u529B\u7B49\u90FD\u4E0D\u5173\u5FC3\uFF0C\u53EA\u8981\u670D\u52A1\u5668\u8FD8\u80FD\u5DE5\u4F5C\uFF0C\u5C31\u53EF\u4EE5\u5206\u914D\uFF0C\u9664\u975E\u670D\u52A1\u5668\u6302\u4E86\u3002</p><h3 id="_5-2-\u52A0\u6743\u8F6E\u8BE2" tabindex="-1"><a class="header-anchor" href="#_5-2-\u52A0\u6743\u8F6E\u8BE2" aria-hidden="true">#</a> 5.2 \u52A0\u6743\u8F6E\u8BE2</h3><p>\u662F\u8F6E\u8BE2\u65B9\u5F0F\u7684\u4E00\u79CD\u6539\u8FDB\uFF0C\u8F6E\u8BE2\u65B9\u5F0F\u662F\u65E0\u5DEE\u522B\u5206\u914D\uFF0C\u4F46\u5B9E\u9645\u670D\u52A1\u5668\u7684\u5904\u7406\u80FD\u529B\u662F\u6709\u5DEE\u5F02\u7684\uFF0C\u6240\u4EE5\u9700\u8981\u533A\u522B\u5BF9\u5F85\u3002</p><p>\u4E3A\u670D\u52A1\u5668\u8BBE\u7F6E\u6743\u503C\uFF0C\u6743\u503C\u9AD8\u7684\u5C31\u591A\u5206\u914D\u70B9\u3002</p><h3 id="_5-3-\u8D1F\u8F7D\u6700\u4F4E\u4F18\u5148" tabindex="-1"><a class="header-anchor" href="#_5-3-\u8D1F\u8F7D\u6700\u4F4E\u4F18\u5148" aria-hidden="true">#</a> 5.3 \u8D1F\u8F7D\u6700\u4F4E\u4F18\u5148</h3><p>\u5C06\u4EFB\u52A1\u5206\u914D\u7ED9\u5F53\u524D\u8D1F\u8F7D\u6700\u4F4E\u7684\u670D\u52A1\u5668\u3002</p><p>\u4F8B\u5982 LVS \u53EF\u4EE5\u6839\u636E\u201C\u8FDE\u63A5\u6570\u201D\u5224\u65AD\u670D\u52A1\u5668\u72B6\u6001\uFF0CNGINX \u53EF\u4EE5\u6839\u636E\u201CHTTP\u8BF7\u6C42\u6570\u201D\u6765\u5224\u65AD\u3002</p><p>\u8FD9\u79CD\u65B9\u5F0F\u6BD4\u8F6E\u8BE2\u9AD8\u7EA7\u5F88\u591A\uFF0C\u53EF\u4EE5\u611F\u77E5\u670D\u52A1\u5668\u7684\u72B6\u6001\u4E86\uFF0C\u4F46\u5176\u590D\u6742\u5EA6\u4E5F\u5927\u5927\u63D0\u9AD8\u4E86\uFF0C\u8981\u6536\u96C6\u7EDF\u8BA1\u670D\u52A1\u5668\u7684\u8D1F\u8F7D\u4FE1\u606F\u3002</p><h3 id="_5-4-\u6027\u80FD\u6700\u4F18" tabindex="-1"><a class="header-anchor" href="#_5-4-\u6027\u80FD\u6700\u4F18" aria-hidden="true">#</a> 5.4 \u6027\u80FD\u6700\u4F18</h3><p>\u4F18\u5148\u5C06\u4EFB\u52A1\u5206\u914D\u7ED9\u5904\u7406\u901F\u5EA6\u6700\u5FEB\u7684\u670D\u52A1\u5668\uFF0C\u6765\u8FBE\u5230\u6700\u5FEB\u54CD\u5E94\u5BA2\u6237\u7AEF\u7684\u76EE\u7684\u3002</p><p>\u6B64\u65B9\u5F0F\u4E5F\u662F\u611F\u77E5\u670D\u52A1\u5668\u7684\u72B6\u6001\uFF0C\u6807\u51C6\u662F\u54CD\u5E94\u65F6\u95F4\u3002</p><p>\u9700\u8981\u6536\u96C6\u5206\u6790\u670D\u52A1\u5668\u7684\u54CD\u5E94\u65F6\u95F4\uFF0C\u8FD9\u4E2A\u5DE5\u4F5C\u672C\u8EAB\u6D88\u8017\u4E5F\u4E0D\u5C0F\uFF0C\u6240\u4EE5\u91C7\u7528\u91C7\u6837\u7684\u65B9\u5F0F\uFF0C\u4E0D\u7EDF\u8BA1\u6240\u6709\u4EFB\u52A1\u7684\u54CD\u5E94\u65F6\u95F4\uFF0C\u7EDF\u8BA1\u4E00\u4E2A\u5468\u671F\uFF08\u4F8B\u5982 10\u79D2/1\u5206\u949F/5\u5206\u949F\uFF09\u5185\u7684\u72B6\u6001\u3002</p><p>\u4F18\u7F3A\u70B9\u4E0E \u8D1F\u8F7D\u6700\u4F4E\u4F18\u5148 \u76F8\u540C\u3002</p><h3 id="_5-5-hash" tabindex="-1"><a class="header-anchor" href="#_5-5-hash" aria-hidden="true">#</a> 5.5 Hash</h3><p>\u5BF9\u8BF7\u6C42\u4E2D\u7684\u5173\u952E\u4FE1\u606F\uFF08\u5982IP\uFF09\u8FDB\u884Chash\u8BA1\u7B97\uFF0Chash\u503C\u76F8\u540C\u7684\u8BF7\u6C42\u5206\u914D\u5230\u540C\u4E00\u53F0\u670D\u52A1\u5668\uFF0C\u4F8B\u5982\u4E1A\u52A1\u4E2D\u5E0C\u671B\u540C\u4E00\u7528\u6237\u7684\u8BF7\u6C42\u90FD\u7531\u540C\u4E00\u53F0\u670D\u52A1\u5668\u6765\u5904\u7406\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 48);
const _hoisted_49 = {
  href: "https://blog.51cto.com/u_15127579/2722198",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_50 = /* @__PURE__ */ createTextVNode("\u8D1F\u8F7D\u5747\u8861\u7684\u5206\u7C7B\u53CA\u7B97\u6CD5");
const _hoisted_51 = {
  href: "https://pdai.tech/md/arch/arch-y-loadbalance.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_52 = /* @__PURE__ */ createTextVNode("\u67B6\u6784\u4E4B\u9AD8\u53EF\u7528\uFF1A\u8D1F\u8F7D\u5747\u8861");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_49, [
        _hoisted_50,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_51, [
        _hoisted_52,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var ____________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "\u67B6\u6784\u4E4B\u9AD8\u53EF\u7528-\u8D1F\u8F7D\u5747\u8861.html.vue"]]);
export { ____________html as default };
