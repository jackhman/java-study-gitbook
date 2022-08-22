const data = JSON.parse('{"key":"v-06f5c445","path":"/java/jvm/JVM%E5%9F%BA%E7%A1%80-JV%E5%86%85%E5%AD%98%E7%BB%93%E6%9E%84.html","title":"JVM \u57FA\u7840 - JVM \u5185\u5B58\u7ED3\u6784","lang":"zh-CN","frontmatter":{"order":50,"category":["Java"],"summary":"JVM \u57FA\u7840 - JVM \u5185\u5B58\u7ED3\u6784 \\"\u672C\u6587\u4E3B\u8981\u5BF9JVM \u5185\u5B58\u7ED3\u6784\u8FDB\u884C\u8BB2\u89E3\uFF0C\u6CE8\u610F\u4E0D\u8981\u548CJava\u5185\u5B58\u6A21\u578B\u6DF7\u6DC6\u4E86\u3002\\" 0. \u8FD0\u884C\u65F6\u6570\u636E\u533A \u5185\u5B58\u662F\u975E\u5E38\u91CD\u8981\u7684\u7CFB\u7EDF\u8D44\u6E90\uFF0C\u662F\u786C\u76D8\u548C CPU \u7684\u4E2D\u95F4\u4ED3\u5E93\u53CA\u6865\u6881\uFF0C\u627F\u8F7D\u7740\u64CD\u4F5C\u7CFB\u7EDF\u548C\u5E94\u7528\u7A0B\u5E8F\u7684\u5B9E\u65F6\u8FD0\u884C\u3002JVM \u5185\u5B58\u5E03\u5C40\u89C4\u5B9A\u4E86 Java \u5728\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u5185\u5B58\u7533\u8BF7\u3001\u5206\u914D\u3001\u7BA1\u7406\u7684\u7B56\u7565\uFF0C\u4FDD\u8BC1\u4E86 JVM \u7684\u9AD8\u6548\u7A33\u5B9A\u8FD0\u884C\u3002\u4E0D\u540C\u7684 JVM \u5BF9\u4E8E\u5185\u5B58","head":[["meta",{"property":"og:url","content":"https://java.isture.com/java/jvm/JVM%E5%9F%BA%E7%A1%80-JV%E5%86%85%E5%AD%98%E7%BB%93%E6%9E%84.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"JVM \u57FA\u7840 - JVM \u5185\u5B58\u7ED3\u6784"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-21T15:04:56.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-08-21T15:04:56.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"0. \u8FD0\u884C\u65F6\u6570\u636E\u533A","slug":"_0-\u8FD0\u884C\u65F6\u6570\u636E\u533A","children":[]},{"level":2,"title":"1. \u7A0B\u5E8F\u8BA1\u6570\u5668","slug":"_1-\u7A0B\u5E8F\u8BA1\u6570\u5668","children":[{"level":3,"title":"1.1 \u4F5C\u7528","slug":"_1-1-\u4F5C\u7528","children":[]},{"level":3,"title":"1.2 \u6982\u8FF0","slug":"_1-2-\u6982\u8FF0","children":[]}]},{"level":2,"title":"\u4E8C\u3001\u865A\u62DF\u673A\u6808","slug":"\u4E8C\u3001\u865A\u62DF\u673A\u6808","children":[{"level":3,"title":"2.1 \u6982\u8FF0","slug":"_2-1-\u6982\u8FF0","children":[]},{"level":3,"title":"2.2 \u6808\u7684\u5B58\u50A8\u5355\u4F4D","slug":"_2-2-\u6808\u7684\u5B58\u50A8\u5355\u4F4D","children":[]},{"level":3,"title":"2.3 \u6808\u8FD0\u884C\u539F\u7406","slug":"_2-3-\u6808\u8FD0\u884C\u539F\u7406","children":[]},{"level":3,"title":"2.4 \u6808\u5E27\u7684\u5185\u90E8\u7ED3\u6784","slug":"_2-4-\u6808\u5E27\u7684\u5185\u90E8\u7ED3\u6784","children":[]}]},{"level":2,"title":"3. \u672C\u5730\u65B9\u6CD5\u6808","slug":"_3-\u672C\u5730\u65B9\u6CD5\u6808","children":[{"level":3,"title":"3.1 \u672C\u5730\u65B9\u6CD5\u63A5\u53E3","slug":"_3-1-\u672C\u5730\u65B9\u6CD5\u63A5\u53E3","children":[]},{"level":3,"title":"3.2 \u672C\u5730\u65B9\u6CD5\u6808\uFF08Native Method Stack\uFF09","slug":"_3-2-\u672C\u5730\u65B9\u6CD5\u6808-native-method-stack","children":[]}]},{"level":2,"title":"4. \u5806\u5185\u5B58","slug":"_4-\u5806\u5185\u5B58","children":[{"level":3,"title":"4.1 \u5185\u5B58\u5212\u5206","slug":"_4-1-\u5185\u5B58\u5212\u5206","children":[]},{"level":3,"title":"4.2 \u8BBE\u7F6E\u5806\u5185\u5B58\u5927\u5C0F\u548C OOM","slug":"_4-2-\u8BBE\u7F6E\u5806\u5185\u5B58\u5927\u5C0F\u548C-oom","children":[]},{"level":3,"title":"4.3 \u5BF9\u8C61\u5728\u5806\u4E2D\u7684\u751F\u547D\u5468\u671F","slug":"_4-3-\u5BF9\u8C61\u5728\u5806\u4E2D\u7684\u751F\u547D\u5468\u671F","children":[]},{"level":3,"title":"4.4 \u5BF9\u8C61\u7684\u5206\u914D\u8FC7\u7A0B","slug":"_4-4-\u5BF9\u8C61\u7684\u5206\u914D\u8FC7\u7A0B","children":[]},{"level":3,"title":"4.5 GC \u5783\u573E\u56DE\u6536\u7B80\u4ECB","slug":"_4-5-gc-\u5783\u573E\u56DE\u6536\u7B80\u4ECB","children":[]},{"level":3,"title":"4.6 TLAB","slug":"_4-6-tlab","children":[]},{"level":3,"title":"4.7 \u5806\u662F\u5206\u914D\u5BF9\u8C61\u5B58\u50A8\u7684\u552F\u4E00\u9009\u62E9\u5417","slug":"_4-7-\u5806\u662F\u5206\u914D\u5BF9\u8C61\u5B58\u50A8\u7684\u552F\u4E00\u9009\u62E9\u5417","children":[]}]},{"level":2,"title":"5. \u65B9\u6CD5\u533A","slug":"_5-\u65B9\u6CD5\u533A","children":[{"level":3,"title":"5.1 \u89E3\u60D1","slug":"_5-1-\u89E3\u60D1","children":[]},{"level":3,"title":"5.2 \u8BBE\u7F6E\u65B9\u6CD5\u533A\u5185\u5B58\u7684\u5927\u5C0F","slug":"_5-2-\u8BBE\u7F6E\u65B9\u6CD5\u533A\u5185\u5B58\u7684\u5927\u5C0F","children":[]},{"level":3,"title":"5.3 \u65B9\u6CD5\u533A\u5185\u90E8\u7ED3\u6784","slug":"_5-3-\u65B9\u6CD5\u533A\u5185\u90E8\u7ED3\u6784","children":[]},{"level":3,"title":"5.4 \u8FD0\u884C\u65F6\u5E38\u91CF\u6C60","slug":"_5-4-\u8FD0\u884C\u65F6\u5E38\u91CF\u6C60","children":[]},{"level":3,"title":"5.5 \u65B9\u6CD5\u533A\u5728 JDK6\u30017\u30018\u4E2D\u7684\u6F14\u8FDB\u7EC6\u8282","slug":"_5-5-\u65B9\u6CD5\u533A\u5728-jdk6\u30017\u30018\u4E2D\u7684\u6F14\u8FDB\u7EC6\u8282","children":[]},{"level":3,"title":"5.6 \u65B9\u6CD5\u533A\u7684\u5783\u573E\u56DE\u6536","slug":"_5-6-\u65B9\u6CD5\u533A\u7684\u5783\u573E\u56DE\u6536","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1661094296000,"updatedTime":1661094296000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":48.04,"words":14411},"filePathRelative":"java/jvm/JVM\u57FA\u7840-JV\u5185\u5B58\u7ED3\u6784.md","localizedDate":"2022\u5E748\u670821\u65E5"}');
export { data };
