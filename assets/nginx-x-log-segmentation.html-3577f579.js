const e=JSON.parse('{"key":"v-d583637c","path":"/deploy/nginx/nginx-x-log-segmentation.html","title":"Nginx - 日志分割&定期删除日志","lang":"zh-CN","frontmatter":{"order":910,"category":["Nginx"],"description":"1. 简介 nginx会按照nginx.conf的配置生成access.log和error.log，随着访问量的增长，日志文件会越来越大，既会影响访问的速度(写入日志时间延长)，也会增加查找日志的难度，nginx没有这种按天或更细粒度生成日志的机制。 2. 日志分割 在http模块下 但是缺点：*\\\\*每次请求都会进行map的正则表达式匹配，对性能有影响...","head":[["meta",{"property":"og:url","content":"https://java.isture.com/deploy/nginx/nginx-x-log-segmentation.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Nginx - 日志分割&定期删除日志"}],["meta",{"property":"og:description","content":"1. 简介 nginx会按照nginx.conf的配置生成access.log和error.log，随着访问量的增长，日志文件会越来越大，既会影响访问的速度(写入日志时间延长)，也会增加查找日志的难度，nginx没有这种按天或更细粒度生成日志的机制。 2. 日志分割 在http模块下 但是缺点：*\\\\*每次请求都会进行map的正则表达式匹配，对性能有影响..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-07-11T03:09:04.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-07-11T03:09:04.000Z"}]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 日志分割","slug":"_2-日志分割","link":"#_2-日志分割","children":[]},{"level":2,"title":"3. 定期删除日志","slug":"_3-定期删除日志","link":"#_3-定期删除日志","children":[{"level":3,"title":"3.1 新建sh,删除5天前的","slug":"_3-1-新建sh-删除5天前的","link":"#_3-1-新建sh-删除5天前的","children":[]},{"level":3,"title":"3.2 添加定时任务","slug":"_3-2-添加定时任务","link":"#_3-2-添加定时任务","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1689044944000,"updatedTime":1689044944000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":0.9,"words":271},"filePathRelative":"deploy/nginx/nginx-x-log-segmentation.md","localizedDate":"2023年7月11日","autoDesc":true}');export{e as data};
