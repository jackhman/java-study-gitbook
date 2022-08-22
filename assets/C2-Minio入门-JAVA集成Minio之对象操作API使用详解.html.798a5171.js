const data = JSON.parse('{"key":"v-cabb727c","path":"/arch/minio/C2-Minio%E5%85%A5%E9%97%A8-JAVA%E9%9B%86%E6%88%90Minio%E4%B9%8B%E5%AF%B9%E8%B1%A1%E6%93%8D%E4%BD%9CAPI%E4%BD%BF%E7%94%A8%E8%AF%A6%E8%A7%A3.html","title":"Minio\u5165\u95E8-JAVA\u96C6\u6210Minio\u4E4B\u5BF9\u8C61\u64CD\u4F5CAPI\u4F7F\u7528\u8BE6\u89E3","lang":"zh-CN","frontmatter":{"order":110,"summary":"Minio\u5165\u95E8-JAVA\u96C6\u6210Minio\u4E4B\u5BF9\u8C61\u64CD\u4F5CAPI\u4F7F\u7528\u8BE6\u89E3 1. \u4E0A\u4F20\u5BF9\u8C61 1.1 PutObject \u8C03\u7528PutObject\u63A5\u53E3\u4E0A\u4F20\u6587\u4EF6\uFF08Object\uFF09\u3002 \u6CE8\u610F\u4E8B\u9879\uFF1A \u6DFB\u52A0\u7684Object\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC75 GB\u3002; \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u5DF2\u5B58\u5728\u540C\u540DObject\u4E14\u5BF9\u8BE5Object\u6709\u8BBF\u95EE\u6743\u9650\uFF0C\u5219\u65B0\u6DFB\u52A0\u7684Object\u5C06\u8986\u76D6\u539F\u6709\u7684Object\uFF0C\u5E76\u8FD4\u56DE200 OK\u3002; O","head":[["meta",{"property":"og:url","content":"https://java.isture.com/arch/minio/C2-Minio%E5%85%A5%E9%97%A8-JAVA%E9%9B%86%E6%88%90Minio%E4%B9%8B%E5%AF%B9%E8%B1%A1%E6%93%8D%E4%BD%9CAPI%E4%BD%BF%E7%94%A8%E8%AF%A6%E8%A7%A3.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"Minio\u5165\u95E8-JAVA\u96C6\u6210Minio\u4E4B\u5BF9\u8C61\u64CD\u4F5CAPI\u4F7F\u7528\u8BE6\u89E3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-10T14:25:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-08-10T14:25:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u4E0A\u4F20\u5BF9\u8C61","slug":"_1-\u4E0A\u4F20\u5BF9\u8C61","children":[{"level":3,"title":"1.1 PutObject","slug":"_1-1-putobject","children":[]},{"level":3,"title":"1.2 uploadObject","slug":"_1-2-uploadobject","children":[]}]},{"level":2,"title":"2. \u83B7\u53D6\u5BF9\u8C61","slug":"_2-\u83B7\u53D6\u5BF9\u8C61","children":[{"level":3,"title":"2.1 getObject","slug":"_2-1-getobject","children":[]},{"level":3,"title":"2.2 downloadObject","slug":"_2-2-downloadobject","children":[]},{"level":3,"title":"2.3 getPresignedObjectUrl","slug":"_2-3-getpresignedobjecturl","children":[]},{"level":3,"title":"2.4 selectObjectContent","slug":"_2-4-selectobjectcontent","children":[]},{"level":3,"title":"2.5 getPresignedPostFormData","slug":"_2-5-getpresignedpostformdata","children":[]}]},{"level":2,"title":"3. \u590D\u5236\u5BF9\u8C61","slug":"_3-\u590D\u5236\u5BF9\u8C61","children":[{"level":3,"title":"3.1 copyObject","slug":"_3-1-copyobject","children":[]}]},{"level":2,"title":"4 \u5220\u9664\u5BF9\u8C61","slug":"_4-\u5220\u9664\u5BF9\u8C61","children":[{"level":3,"title":"4.1 removeObject","slug":"_4-1-removeobject","children":[]},{"level":3,"title":"4.2 removeObjects","slug":"_4-2-removeobjects","children":[]}]},{"level":2,"title":"5. \u5BF9\u8C61\u4FE1\u606F\u67E5\u8BE2\u53CA\u8BBE\u7F6E","slug":"_5-\u5BF9\u8C61\u4FE1\u606F\u67E5\u8BE2\u53CA\u8BBE\u7F6E","children":[{"level":3,"title":"5.1 \u6876\u7684\u5BF9\u8C61\u4FE1\u606F\u5217\u8868","slug":"_5-1-\u6876\u7684\u5BF9\u8C61\u4FE1\u606F\u5217\u8868","children":[]},{"level":3,"title":"5.2 \u4FDD\u7559\u914D\u7F6E","slug":"_5-2-\u4FDD\u7559\u914D\u7F6E","children":[]},{"level":3,"title":"5.3 \u6807\u7B7E","slug":"_5-3-\u6807\u7B7E","children":[]},{"level":3,"title":"5.4 \u5408\u6CD5\u4FDD\u7559\u5BF9\u8C61","slug":"_5-4-\u5408\u6CD5\u4FDD\u7559\u5BF9\u8C61","children":[]},{"level":3,"title":"5.5 \u7EC4\u5408\u5BF9\u8C61","slug":"_5-5-\u7EC4\u5408\u5BF9\u8C61","children":[]},{"level":3,"title":"5.6 \u5143\u6570\u636E","slug":"_5-6-\u5143\u6570\u636E","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1660045757000,"updatedTime":1660141506000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":3}]},"readingTime":{"minutes":7.51,"words":2252},"filePathRelative":"arch/minio/C2-Minio\u5165\u95E8-JAVA\u96C6\u6210Minio\u4E4B\u5BF9\u8C61\u64CD\u4F5CAPI\u4F7F\u7528\u8BE6\u89E3.md","localizedDate":"2022\u5E748\u67089\u65E5"}');
export { data };
