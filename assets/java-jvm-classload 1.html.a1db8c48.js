const e=JSON.parse('{"key":"v-8fe9df3c","path":"/java/jvm/java-jvm-classload%201.html","title":"\u7C7B\u52A0\u8F7D\u5668","lang":"zh-CN","frontmatter":{"order":30,"category":["Java","JVM"],"summary":"\u7C7B\u52A0\u8F7D\u5668 1. \u56DE\u987E\u7C7B\u52A0\u8F7D\u8FC7\u7A0B \u7C7B\u52A0\u8F7D\u8FC7\u7A0B\uFF1A\u52A0\u8F7D->\u8FDE\u63A5->\u521D\u59CB\u5316\u3002\u8FDE\u63A5\u8FC7\u7A0B\u7531\u53EF\u4EE5\u5206\u6210\u4E09\u6B65\uFF1A\u9A8C\u8BC1->\u51C6\u5907->\u89E3\u6790 \u4E00\u4E2A\u975E\u6570\u7EC4\u7C7B\u7684\u52A0\u8F7D\u9636\u6BB5\uFF08\u52A0\u8F7D\u9636\u6BB5\u83B7\u53D6\u7C7B\u7684\u4E8C\u8FDB\u5236\u5B57\u8282\u6D41\u7684\u52A8\u4F5C\uFF09\u662F\u53EF\u63A7\u6700\u5F3A\u7684\u9636\u6BB5\uFF0C\u8FD9\u4E00\u6B65\u6211\u4EEC\u53EF\u4EE5\u53BB\u5B8C\u6210\u8FD8\u53EF\u4EE5\u81EA\u5B9A\u4E49\u7C7B\u52A0\u8F7D\u5668\u53BB\u63A7\u5236\u5B57\u8282\u6D41\u7684\u83B7\u53D6\u65B9\u5F0F\uFF08\u91CD\u5199\u4E00\u4E2A\u7C7B\u52A0\u8F7D\u5668\u7684 loadClass() \u65B9\u6CD5\uFF09\u3002\u6570\u7EC4\u7C7B\u578B\u4E0D\u901A\u8FC7\u7C7B\u52A0\u8F7D\u5668\u521B\u5EFA\uFF0C\u4ED6\u7531Java\u865A\u62DF\u673A\u76F4\u63A5\u521B","head":[["meta",{"property":"og:url","content":"https://java.isture.com/java/jvm/java-jvm-classload%201.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"\u7C7B\u52A0\u8F7D\u5668"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-15T08:28:12.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-15T08:28:12.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u56DE\u987E\u7C7B\u52A0\u8F7D\u8FC7\u7A0B","slug":"_1-\u56DE\u987E\u7C7B\u52A0\u8F7D\u8FC7\u7A0B","children":[]},{"level":2,"title":"2. \u7C7B\u52A0\u8F7D\u5668\u603B\u7ED3","slug":"_2-\u7C7B\u52A0\u8F7D\u5668\u603B\u7ED3","children":[]},{"level":2,"title":"3. \u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B","slug":"_3-\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B","children":[{"level":3,"title":"3.1 \u4ECB\u7ECD","slug":"_3-1-\u4ECB\u7ECD","children":[]},{"level":3,"title":"3.2 \u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\u6E90\u7801\u5206\u6790","slug":"_3-2-\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\u6E90\u7801\u5206\u6790","children":[]},{"level":3,"title":"3.3 \u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\u7684\u597D\u5904","slug":"_3-3-\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\u7684\u597D\u5904","children":[]}]},{"level":2,"title":"4. \u4E0D\u4F7F\u7528\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B","slug":"_4-\u4E0D\u4F7F\u7528\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B","children":[{"level":3,"title":"\u5982\u679C\u6211\u4EEC\u4E0D\u60F3\u7528\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\u600E\u4E48\u529E\uFF1F","slug":"\u5982\u679C\u6211\u4EEC\u4E0D\u60F3\u7528\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\u600E\u4E48\u529E","children":[]}]},{"level":2,"title":"5. \u81EA\u5B9A\u4E49\u7C7B\u52A0\u8F7D\u5668","slug":"_5-\u81EA\u5B9A\u4E49\u7C7B\u52A0\u8F7D\u5668","children":[]}],"git":{"createdTime":1663230492000,"updatedTime":1663230492000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":4.37,"words":1310},"filePathRelative":"java/jvm/java-jvm-classload 1.md","localizedDate":"2022\u5E749\u670815\u65E5"}');export{e as data};
