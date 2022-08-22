const data = JSON.parse('{"key":"v-39fd92ed","path":"/java/thread/concurrent/Atomic/Atomic%E5%8E%9F%E5%AD%90%E7%B1%BB.html","title":"Atomic\u539F\u5B50\u7C7B","lang":"zh-CN","frontmatter":{"summary":"Atomic\u539F\u5B50\u7C7B 1. \u7B80\u4ECB Java\u4ECEJDK1.5\u5F00\u59CB\u63D0\u4F9B\u4E86java.util.concurrent.atomic\u5305\uFF0Catomic\u5305\u4E2D\u7684\u7C7B\u7528\u4E8E\u5728\u591A\u7EBF\u7A0B\u73AF\u5883\u4E0B\u5B9E\u73B0\u5355\u4E2A\u53D8\u91CF\u591A\u4E2A\u72EC\u7ACB\u64CD\u4F5C\uFF08\u6BD4\u5982\u8BFB-\u5199\uFF09\u7684\u8FDE\u7EED\u539F\u5B50\u6027\u3002 \u5E76\u4E14\u90FD\u6BD4\u8F83\u9AD8\u6548\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u90FD\u662F\u7531\u57FA\u4E8E\u504F\u79FB\u91CF\uFF08\u7C7B\u4F3C\u4E8E\u6307\u9488\uFF09\u7684\u975E\u963B\u585ECAS\u7B97\u6CD5\u5B9E\u73B0\uFF0C\u7528\u4E8E\u66FF\u4EE3\u9501\u7684\u4F7F\u7528\u3002 \\"\u65E0\u9501\u7684\u8FDB\u884C\u539F\u5B50\u64CD\u4F5C\uFF0C\u7528\u4E8E\u66FF\u4EE3\u9501\u7684\u4F7F\u7528\\" \\"\\" ","head":[["meta",{"property":"og:url","content":"https://java.isture.com/java/thread/concurrent/Atomic/Atomic%E5%8E%9F%E5%AD%90%E7%B1%BB.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"Atomic\u539F\u5B50\u7C7B"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-09T11:49:17.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-08-09T11:49:17.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u7B80\u4ECB","slug":"_1-\u7B80\u4ECB","children":[]},{"level":2,"title":"2. JUC\u5305\u4E2D\u76844\u7C7B\u539F\u5B50\u7C7B","slug":"_2-juc\u5305\u4E2D\u76844\u7C7B\u539F\u5B50\u7C7B","children":[{"level":3,"title":"2.1 \u57FA\u672C\u7C7B\u578B","slug":"_2-1-\u57FA\u672C\u7C7B\u578B","children":[]},{"level":3,"title":"2.2 \u6570\u7EC4\u7C7B\u578B","slug":"_2-2-\u6570\u7EC4\u7C7B\u578B","children":[]},{"level":3,"title":"2.3 \u5F15\u7528\u7C7B\u578B","slug":"_2-3-\u5F15\u7528\u7C7B\u578B","children":[]},{"level":3,"title":"2.4 \u5BF9\u8C61\u7684\u5C5E\u6027\u4FEE\u6539\u7C7B\u578B","slug":"_2-4-\u5BF9\u8C61\u7684\u5C5E\u6027\u4FEE\u6539\u7C7B\u578B","children":[]}]},{"level":2,"title":"3. \u5E26\u7248\u672C\u53F7\u7684\u539F\u5B50\u7C7B","slug":"_3-\u5E26\u7248\u672C\u53F7\u7684\u539F\u5B50\u7C7B","children":[{"level":3,"title":"3.1 \u4E3A\u4EC0\u4E48\u9700\u8981\u5E26\u7248\u672C\u53F7\uFF1F\uFF08ABA\u95EE\u9898\uFF09","slug":"_3-1-\u4E3A\u4EC0\u4E48\u9700\u8981\u5E26\u7248\u672C\u53F7-aba\u95EE\u9898","children":[]},{"level":3,"title":"3.2 \u5982\u4F55\u89E3\u51B3ABA\u95EE\u9898","slug":"_3-2-\u5982\u4F55\u89E3\u51B3aba\u95EE\u9898","children":[]}]},{"level":2,"title":"4. AtomicInteger \u7684\u4F7F\u7528","slug":"_4-atomicinteger-\u7684\u4F7F\u7528","children":[]},{"level":2,"title":"5. AtomicInteger \u7C7B\u7684\u539F\u7406","slug":"_5-atomicinteger-\u7C7B\u7684\u539F\u7406","children":[]},{"level":2,"title":"6. JDK1.8\u4E2D\u65B0\u589E\u7684\u539F\u5B50\u52A0\u5F3A\u7C7B","slug":"_6-jdk1-8\u4E2D\u65B0\u589E\u7684\u539F\u5B50\u52A0\u5F3A\u7C7B","children":[{"level":3,"title":"6.1 jdk1.8 \u65B0\u589E\u7684\u539F\u5B50\u52A0\u5F3A\u7C7B","slug":"_6-1-jdk1-8-\u65B0\u589E\u7684\u539F\u5B50\u52A0\u5F3A\u7C7B","children":[]},{"level":3,"title":"6.2 \u4E3A\u4EC0\u4E48\u9700\u8981\u52A0\u5F3A","slug":"_6-2-\u4E3A\u4EC0\u4E48\u9700\u8981\u52A0\u5F3A","children":[]}]},{"level":2,"title":"7. atomic \u5408\u9002\u573A\u666F","slug":"_7-atomic-\u5408\u9002\u573A\u666F","children":[]},{"level":2,"title":"8. \u603B\u7ED3","slug":"_8-\u603B\u7ED3","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1660045757000,"updatedTime":1660045757000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":6.6,"words":1981},"filePathRelative":"java/thread/concurrent/Atomic/Atomic\u539F\u5B50\u7C7B.md","localizedDate":"2022\u5E748\u67089\u65E5"}');
export { data };
