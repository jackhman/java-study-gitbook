import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as h,c as i,a,b as t,d as n,r as d}from"./app.c0d093c6.js";const l={},o=n('<h1 id="collection-\u7C7B\u5173\u7CFB\u56FE" tabindex="-1"><a class="header-anchor" href="#collection-\u7C7B\u5173\u7CFB\u56FE" aria-hidden="true">#</a> Collection \u7C7B\u5173\u7CFB\u56FE</h1><blockquote><p>\u672C\u6587\u4E3B\u8981\u4ECB\u7ECDJDK\u4E2DCollection\u548CMap\u76F8\u5173\u77E5\u8BC6\u4F53\u7CFB\uFF0C\u540E\u7EED\u7AE0\u8282\u5C06\u5BF9\u4E3B\u8981\u5BF9\u7C7B\u8FDB\u884C\u6E90\u7801\u89E3\u8BFB\u3002</p></blockquote><h2 id="_1-\u77E5\u8BC6\u4F53\u7CFB\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_1-\u77E5\u8BC6\u4F53\u7CFB\u7ED3\u6784" aria-hidden="true">#</a> 1. \u77E5\u8BC6\u4F53\u7CFB\u7ED3\u6784</h2><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/java_collections_overview.png" alt="java_collections_overview" loading="lazy"></p><h2 id="_2-\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_2-\u4ECB\u7ECD" aria-hidden="true">#</a> 2. \u4ECB\u7ECD</h2><p>\u5BB9\u5668\uFF0C\u5C31\u662F\u53EF\u4EE5\u5BB9\u7EB3\u5176\u4ED6Java\u5BF9\u8C61\u7684\u5BF9\u8C61\u3002<em>Java Collections Framework(JCF)</em> \u4E3AJava\u5F00\u53D1\u8005\u63D0\u4F9B\u4E86\u901A\u7528\u7684\u5BB9\u5668\uFF0C\u5176\u59CB\u4E8EJDK 1.2\uFF0C\u4F18\u70B9\u662F:</p><ul><li>\u964D\u4F4E\u7F16\u7A0B\u96BE\u5EA6</li><li>\u63D0\u9AD8\u7A0B\u5E8F\u6027\u80FD</li><li>\u63D0\u9AD8API\u95F4\u7684\u4E92\u64CD\u4F5C\u6027</li><li>\u964D\u4F4E\u5B66\u4E60\u96BE\u5EA6</li><li>\u964D\u4F4E\u8BBE\u8BA1\u548C\u5B9E\u73B0\u76F8\u5173API\u7684\u96BE\u5EA6</li><li>\u589E\u52A0\u7A0B\u5E8F\u7684\u91CD\u7528\u6027</li></ul><p>Java\u5BB9\u5668\u91CC\u53EA\u80FD\u653E\u5BF9\u8C61\uFF0C\u5BF9\u4E8E\u57FA\u672C\u7C7B\u578B(int, long, float, double\u7B49)\uFF0C\u9700\u8981\u5C06\u5176\u5305\u88C5\u6210\u5BF9\u8C61\u7C7B\u578B\u540E(Integer, Long, Float, Double\u7B49)\u624D\u80FD\u653E\u5230\u5BB9\u5668\u91CC\u3002\u5F88\u591A\u65F6\u5019\u62C6\u5305\u88C5\u548C\u89E3\u5305\u88C5\u80FD\u591F\u81EA\u52A8\u5B8C\u6210\u3002\u8FD9\u867D\u7136\u4F1A\u5BFC\u81F4\u989D\u5916\u7684\u6027\u80FD\u548C\u7A7A\u95F4\u5F00\u9500\uFF0C\u4F46\u7B80\u5316\u4E86\u8BBE\u8BA1\u548C\u7F16\u7A0B\u3002</p><h2 id="_3-collection" tabindex="-1"><a class="header-anchor" href="#_3-collection" aria-hidden="true">#</a> 3. Collection</h2><blockquote><p>\u5BB9\u5668\u4E3B\u8981\u5305\u62EC Collection \u548C Map \u4E24\u79CD\uFF0CCollection \u5B58\u50A8\u7740\u5BF9\u8C61\u7684\u96C6\u5408\uFF0C\u800C Map \u5B58\u50A8\u7740\u952E\u503C\u5BF9(\u4E24\u4E2A\u5BF9\u8C61)\u7684\u6620\u5C04\u8868\u3002</p></blockquote><h3 id="_3-1-set" tabindex="-1"><a class="header-anchor" href="#_3-1-set" aria-hidden="true">#</a> 3.1 Set</h3><h4 id="_3-1-1-treeset" tabindex="-1"><a class="header-anchor" href="#_3-1-1-treeset" aria-hidden="true">#</a> 3.1.1 TreeSet</h4><p>\u57FA\u4E8E\u7EA2\u9ED1\u6811\u5B9E\u73B0\uFF0C\u652F\u6301\u6709\u5E8F\u6027\u64CD\u4F5C\uFF0C\u4F8B\u5982\u6839\u636E\u4E00\u4E2A\u8303\u56F4\u67E5\u627E\u5143\u7D20\u7684\u64CD\u4F5C\u3002\u4F46\u662F\u67E5\u627E\u6548\u7387\u4E0D\u5982 HashSet\uFF0CHashSet \u67E5\u627E\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(1)\uFF0CTreeSet \u5219\u4E3A O(logN)\u3002</p><h4 id="_3-1-2-hashset" tabindex="-1"><a class="header-anchor" href="#_3-1-2-hashset" aria-hidden="true">#</a> 3.1.2 HashSet</h4><p>\u57FA\u4E8E\u54C8\u5E0C\u8868\u5B9E\u73B0\uFF0C\u652F\u6301\u5FEB\u901F\u67E5\u627E\uFF0C\u4F46\u4E0D\u652F\u6301\u6709\u5E8F\u6027\u64CD\u4F5C\u3002\u5E76\u4E14\u5931\u53BB\u4E86\u5143\u7D20\u7684\u63D2\u5165\u987A\u5E8F\u4FE1\u606F\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4F7F\u7528 Iterator \u904D\u5386 HashSet \u5F97\u5230\u7684\u7ED3\u679C\u662F\u4E0D\u786E\u5B9A\u7684\u3002</p><h4 id="_3-1-3-linkedhashset" tabindex="-1"><a class="header-anchor" href="#_3-1-3-linkedhashset" aria-hidden="true">#</a> 3.1.3 LinkedHashSet</h4><p>\u5177\u6709 HashSet \u7684\u67E5\u627E\u6548\u7387\uFF0C\u4E14\u5185\u90E8\u4F7F\u7528\u53CC\u5411\u94FE\u8868\u7EF4\u62A4\u5143\u7D20\u7684\u63D2\u5165\u987A\u5E8F\u3002</p><h3 id="_3-2-list" tabindex="-1"><a class="header-anchor" href="#_3-2-list" aria-hidden="true">#</a> 3.2 List</h3><h4 id="_3-2-1-arraylist" tabindex="-1"><a class="header-anchor" href="#_3-2-1-arraylist" aria-hidden="true">#</a> 3.2.1 ArrayList</h4><p>\u57FA\u4E8E\u52A8\u6001\u6570\u7EC4\u5B9E\u73B0\uFF0C\u652F\u6301\u968F\u673A\u8BBF\u95EE\u3002</p><h4 id="_3-2-2-vector" tabindex="-1"><a class="header-anchor" href="#_3-2-2-vector" aria-hidden="true">#</a> 3.2.2 Vector</h4><p>\u548C ArrayList \u7C7B\u4F3C\uFF0C\u4F46\u5B83\u662F\u7EBF\u7A0B\u5B89\u5168\u7684\u3002</p><h4 id="_3-2-3-linkedlist" tabindex="-1"><a class="header-anchor" href="#_3-2-3-linkedlist" aria-hidden="true">#</a> 3.2.3 LinkedList</h4><p>\u57FA\u4E8E\u53CC\u5411\u94FE\u8868\u5B9E\u73B0\uFF0C\u53EA\u80FD\u987A\u5E8F\u8BBF\u95EE\uFF0C\u4F46\u662F\u53EF\u4EE5\u5FEB\u901F\u5730\u5728\u94FE\u8868\u4E2D\u95F4\u63D2\u5165\u548C\u5220\u9664\u5143\u7D20\u3002\u4E0D\u4EC5\u5982\u6B64\uFF0CLinkedList \u8FD8\u53EF\u4EE5\u7528\u4F5C\u6808\u3001\u961F\u5217\u548C\u53CC\u5411\u961F\u5217\u3002</p><h3 id="_3-3-queue" tabindex="-1"><a class="header-anchor" href="#_3-3-queue" aria-hidden="true">#</a> 3.3 Queue</h3><h4 id="_3-3-1-linkedlist" tabindex="-1"><a class="header-anchor" href="#_3-3-1-linkedlist" aria-hidden="true">#</a> 3.3.1 LinkedList</h4><p>\u53EF\u4EE5\u7528\u5B83\u6765\u5B9E\u73B0\u53CC\u5411\u961F\u5217\u3002</p><h4 id="_3-3-2-priorityqueue" tabindex="-1"><a class="header-anchor" href="#_3-3-2-priorityqueue" aria-hidden="true">#</a> 3.3.2 PriorityQueue</h4><p>\u57FA\u4E8E\u5806\u7ED3\u6784\u5B9E\u73B0\uFF0C\u53EF\u4EE5\u7528\u5B83\u6765\u5B9E\u73B0\u4F18\u5148\u961F\u5217\u3002</p><h2 id="_4-map" tabindex="-1"><a class="header-anchor" href="#_4-map" aria-hidden="true">#</a> 4. Map</h2><h3 id="_4-1-treemap" tabindex="-1"><a class="header-anchor" href="#_4-1-treemap" aria-hidden="true">#</a> 4.1 TreeMap</h3><p>\u57FA\u4E8E\u7EA2\u9ED1\u6811\u5B9E\u73B0\u3002</p><h3 id="_4-2-hashmap" tabindex="-1"><a class="header-anchor" href="#_4-2-hashmap" aria-hidden="true">#</a> 4.2 HashMap</h3><p>\u57FA\u4E8E\u54C8\u5E0C\u8868\u5B9E\u73B0\u3002</p><h3 id="_4-3-hashtable" tabindex="-1"><a class="header-anchor" href="#_4-3-hashtable" aria-hidden="true">#</a> 4.3 HashTable</h3><p>\u548C HashMap \u7C7B\u4F3C\uFF0C\u4F46\u5B83\u662F\u7EBF\u7A0B\u5B89\u5168\u7684\uFF0C\u8FD9\u610F\u5473\u7740\u540C\u4E00\u65F6\u523B\u591A\u4E2A\u7EBF\u7A0B\u53EF\u4EE5\u540C\u65F6\u5199\u5165 HashTable \u5E76\u4E14\u4E0D\u4F1A\u5BFC\u81F4\u6570\u636E\u4E0D\u4E00\u81F4\u3002\u5B83\u662F\u9057\u7559\u7C7B\uFF0C\u4E0D\u5E94\u8BE5\u53BB\u4F7F\u7528\u5B83\u3002\u73B0\u5728\u53EF\u4EE5\u4F7F\u7528 ConcurrentHashMap \u6765\u652F\u6301\u7EBF\u7A0B\u5B89\u5168\uFF0C\u5E76\u4E14 ConcurrentHashMap \u7684\u6548\u7387\u4F1A\u66F4\u9AD8\uFF0C\u56E0\u4E3A ConcurrentHashMap \u5F15\u5165\u4E86\u5206\u6BB5\u9501\u3002</p><h3 id="_4-4-linkedhashmap" tabindex="-1"><a class="header-anchor" href="#_4-4-linkedhashmap" aria-hidden="true">#</a> 4.4 LinkedHashMap</h3><p>\u4F7F\u7528\u53CC\u5411\u94FE\u8868\u6765\u7EF4\u62A4\u5143\u7D20\u7684\u987A\u5E8F\uFF0C\u987A\u5E8F\u4E3A\u63D2\u5165\u987A\u5E8F\u6216\u8005\u6700\u8FD1\u6700\u5C11\u4F7F\u7528(LRU)\u987A\u5E8F\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',39),s={href:"https://pdai.tech/md/java/collection/java-collection-all.html",target:"_blank",rel:"noopener noreferrer"},c=a("strong",null,"Collection \u7C7B\u5173\u7CFB\u56FE",-1);function p(_,u){const e=d("ExternalLinkIcon");return h(),i("div",null,[o,a("p",null,[a("a",s,[c,t(e)])])])}const x=r(l,[["render",p],["__file","java-collection-overview.html.vue"]]);export{x as default};
