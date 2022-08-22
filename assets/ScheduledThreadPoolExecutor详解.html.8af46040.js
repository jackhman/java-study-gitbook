const data = JSON.parse('{"key":"v-0d063008","path":"/java/thread/JUCExecutor/ScheduledThreadPoolExecutor%E8%AF%A6%E8%A7%A3.html","title":"ScheduledThreadPoolExecutor\u8BE6\u89E3","lang":"zh-CN","frontmatter":{"summary":"ScheduledThreadPoolExecutor\u8BE6\u89E3 0. \u9762\u8BD5\u9898 ScheduledThreadPoolExecutor\u8981\u89E3\u51B3\u4EC0\u4E48\u6837\u7684\u95EE\u9898?; ScheduledThreadPoolExecutor\u76F8\u6BD4ThreadPoolExecutor\u6709\u54EA\u4E9B\u7279\u6027?; ScheduledThreadPoolExecutor\u6709\u4EC0\u4E48\u6837\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u6838\u5FC3\u5185\u90E8\u7C7B\u548C\u62BD\u8C61\u7C7B?; ","head":[["meta",{"property":"og:url","content":"https://java.isture.com/java/thread/JUCExecutor/ScheduledThreadPoolExecutor%E8%AF%A6%E8%A7%A3.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"ScheduledThreadPoolExecutor\u8BE6\u89E3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-09T11:49:17.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-08-09T11:49:17.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"0. \u9762\u8BD5\u9898","slug":"_0-\u9762\u8BD5\u9898","children":[]},{"level":2,"title":"1. \u7B80\u4ECB","slug":"_1-\u7B80\u4ECB","children":[{"level":3,"title":"1.1 \u5E94\u7528\u573A\u666F","slug":"_1-1-\u5E94\u7528\u573A\u666F","children":[]}]},{"level":2,"title":"2. \u6570\u636E\u7ED3\u6784","slug":"_2-\u6570\u636E\u7ED3\u6784","children":[{"level":3,"title":"2.1 \u7EE7\u627FThreadPoolExecutor","slug":"_2-1-\u7EE7\u627Fthreadpoolexecutor","children":[]},{"level":3,"title":"2.2 \u4E24\u4E2A\u5185\u90E8\u7C7B ScheduledFutureTask \u548C DelayedWorkQueue","slug":"_2-2-\u4E24\u4E2A\u5185\u90E8\u7C7B-scheduledfuturetask-\u548C-delayedworkqueue","children":[]}]},{"level":2,"title":"3. \u6E90\u7801\u89E3\u6790","slug":"_3-\u6E90\u7801\u89E3\u6790","children":[{"level":3,"title":"3.1 \u5185\u90E8\u7C7BScheduledFutureTask","slug":"_3-1-\u5185\u90E8\u7C7Bscheduledfuturetask","children":[]},{"level":3,"title":"3.2 \u6838\u5FC3\u5C5E\u6027","slug":"_3-2-\u6838\u5FC3\u5C5E\u6027","children":[]},{"level":3,"title":"3.3 \u6784\u9020\u51FD\u6570","slug":"_3-3-\u6784\u9020\u51FD\u6570","children":[]},{"level":3,"title":"3.4 \u6838\u5FC3\u65B9\u6CD5:Schedule","slug":"_3-4-\u6838\u5FC3\u65B9\u6CD5-schedule","children":[]},{"level":3,"title":"3.5 \u6838\u5FC3\u65B9\u6CD5:scheduleAtFixedRate \u548C scheduleWithFixedDelay","slug":"_3-5-\u6838\u5FC3\u65B9\u6CD5-scheduleatfixedrate-\u548C-schedulewithfixeddelay","children":[]},{"level":3,"title":"3.6 \u6838\u5FC3\u65B9\u6CD5:shutdown()","slug":"_3-6-\u6838\u5FC3\u65B9\u6CD5-shutdown","children":[]}]},{"level":2,"title":"4. \u95EE\u9898","slug":"_4-\u95EE\u9898","children":[{"level":3,"title":"4.1 \u4E3A\u4EC0\u4E48ThreadPoolExecutor \u7684\u8C03\u6574\u7B56\u7565\u5374\u4E0D\u9002\u7528\u4E8E ScheduledThreadPoolExecutor\uFF1F","slug":"_4-1-\u4E3A\u4EC0\u4E48threadpoolexecutor-\u7684\u8C03\u6574\u7B56\u7565\u5374\u4E0D\u9002\u7528\u4E8E-scheduledthreadpoolexecutor","children":[]},{"level":3,"title":"4.2 Executors \u63D0\u4F9B\u4E86\u54EA\u51E0\u79CD\u65B9\u6CD5\u6765\u6784\u9020 ScheduledThreadPoolExecutor\uFF1F","slug":"_4-2-executors-\u63D0\u4F9B\u4E86\u54EA\u51E0\u79CD\u65B9\u6CD5\u6765\u6784\u9020-scheduledthreadpoolexecutor","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1660045757000,"updatedTime":1660045757000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":10.6,"words":3180},"filePathRelative":"java/thread/JUCExecutor/ScheduledThreadPoolExecutor\u8BE6\u89E3.md","localizedDate":"2022\u5E748\u67089\u65E5"}');
export { data };
