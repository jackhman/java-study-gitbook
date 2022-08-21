import { o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app.ed238031.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="jenkins\u4F7F\u7528jenkinsfile\u90E8\u7F72springboot\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#jenkins\u4F7F\u7528jenkinsfile\u90E8\u7F72springboot\u9879\u76EE" aria-hidden="true">#</a> Jenkins\u4F7F\u7528jenkinsfile\u90E8\u7F72springboot\u9879\u76EE</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>jenkinsfile\u7684\u6587\u4EF6\u901A\u7528\u6027\u66F4\u5F3A\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u7684\u590D\u5236\u5230\u5404\u4E2A\u9879\u76EE</p><h2 id="_2-\u521B\u5EFA\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA\u4EFB\u52A1" aria-hidden="true">#</a> 2. \u521B\u5EFA\u4EFB\u52A1</h2><p>\u521B\u5EFA\u7684\u65F6\u5019\u9009\u62E9\uFF1A\u6D41\u6C34\u7EBF</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210919194741168.png" alt="image-20210919194741168"></p><h2 id="_3-\u90E8\u7F72\u6587\u4EF6jenkinsfile\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_3-\u90E8\u7F72\u6587\u4EF6jenkinsfile\u4EE3\u7801" aria-hidden="true">#</a> 3. \u90E8\u7F72\u6587\u4EF6jenkinsfile\u4EE3\u7801</h2><p>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u5EFA\uFF1Ajenkinsfile\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#!groovy</span>\n\n@Library<span class="token punctuation">(</span><span class="token string">&#39;jenkinslib&#39;</span><span class="token punctuation">)</span> _\n\ndef color <span class="token operator">=</span> new org.devops.color<span class="token punctuation">(</span><span class="token punctuation">)</span>\ndef build <span class="token operator">=</span> new org.devops.build<span class="token punctuation">(</span><span class="token punctuation">)</span>\ndef deploy <span class="token operator">=</span> new org.devops.deploy<span class="token punctuation">(</span><span class="token punctuation">)</span>\ndef systemtime <span class="token operator">=</span> new org.devops.systemtime<span class="token punctuation">(</span><span class="token punctuation">)</span>\n\ndef String isDeploy <span class="token operator">=</span> <span class="token string">&quot;<span class="token variable">${env.isDeploy}</span>&quot;</span>\n//\u76EE\u6807\u670D\u52A1\u5668ip\u548C\u8DEF\u5F84\uFF0C\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u4FEE\u6539\ndef String serverIp <span class="token operator">=</span> <span class="token string">&#39;192.168.0.1&#39;</span>\ndef String targetPath <span class="token operator">=</span> <span class="token string">&#39;/home/myproject&#39;</span>\n\n//\u90E8\u7F72\u5305\u7684\u7B80\u79F0\uFF0C\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u4FEE\u6539\ndef artifactShortName <span class="token operator">=</span> <span class="token string">&#39;MYAPP_SERVER&#39;</span>\ndef String releaseVersion <span class="token operator">=</span> <span class="token string">&quot;<span class="token variable">${env.releaseVersion}</span>&quot;</span>\n\npipeline <span class="token punctuation">{</span>\n    agent <span class="token punctuation">{</span>\n        <span class="token function">node</span> <span class="token punctuation">{</span>\n            label <span class="token string">&#39;master&#39;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    options <span class="token punctuation">{</span>\n        buildDiscarder<span class="token punctuation">(</span>logRotator<span class="token punctuation">(</span>numToKeepStr: <span class="token string">&#39;10&#39;</span><span class="token punctuation">))</span>\n        disableConcurrentBuilds<span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    triggers <span class="token punctuation">{</span>\n        <span class="token function">cron</span> <span class="token string">&#39;H 22 * * *&#39;</span>\n    <span class="token punctuation">}</span>\n    parameters <span class="token punctuation">{</span>\n        string defaultValue: <span class="token string">&#39;0.10.0&#39;</span>, description: <span class="token string">&#39;\u8BF7\u8F93\u5165\u672C\u6B21\u6784\u5EFA\u7684\u524D\u4E09\u6BB5\u7248\u672C\u53F7&#39;</span>, name: <span class="token string">&#39;releaseVersion&#39;</span>, trim: <span class="token boolean">true</span>\n        choice choices: <span class="token punctuation">[</span><span class="token string">&#39;\u662F&#39;</span>, <span class="token string">&#39;\u5426&#39;</span><span class="token punctuation">]</span>, description: <span class="token string">&#39;\u662F\u5426\u8981\u53D1\u5E03\u5230\u670D\u52A1\u5668\uFF0C\u9ED8\u8BA4\u53D1\u5E03&#39;</span>, name: <span class="token string">&#39;isDeploy&#39;</span>\n    <span class="token punctuation">}</span>\n    stages <span class="token punctuation">{</span>\n        stage<span class="token punctuation">(</span><span class="token string">&#39;Mvn Build&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            steps <span class="token punctuation">{</span>\n                script <span class="token punctuation">{</span>\n                    color.PrintMes<span class="token punctuation">(</span><span class="token string">&#39;\u5F00\u59CB\u6253\u5305&#39;</span>, <span class="token string">&#39;green&#39;</span><span class="token punctuation">)</span>\n                    build.Build<span class="token punctuation">(</span><span class="token string">&#39;mvn&#39;</span>, <span class="token string">&#39;mvn clean package&#39;</span>, <span class="token string">&#39;master&#39;</span><span class="token punctuation">)</span>\n                    //\u9ED8\u8BA4\u4E3Ajdk8\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n//            post <span class="token punctuation">{</span>\n//                success <span class="token punctuation">{</span>\n//                    wrap<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token variable">$class</span><span class="token builtin class-name">:</span> <span class="token string">&#39;BuildUser&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n//                        script <span class="token punctuation">{</span>\n//                            currentTime <span class="token operator">=</span> systemtime.GetSysTime<span class="token punctuation">(</span><span class="token string">&#39;yyMMdd&#39;</span><span class="token punctuation">)</span>\n//                            //\u90E8\u7F72\u5305\u662Fjar\u8FD8\u662Fwar\uFF0C\u4EE5\u53CA\u8DEF\u5F84\u8981\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u4FEE\u6539\n//                            <span class="token function">sh</span> <span class="token string">&quot;&quot;</span>&quot;cd my-admin/target\n//                                <span class="token function">cp</span> my-admin.jar <span class="token variable">${artifactShortName}</span>-<span class="token variable">${releaseVersion}</span>-<span class="token variable">${env.GIT_COMMIT.take(8)}</span>-BETA-<span class="token variable">${currentTime}</span>.jar\n//                            <span class="token string">&quot;&quot;</span>&quot;\n//                            //\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u4FEE\u6539\u5236\u54C1\u8DEF\u5F84\u548C\u540D\u79F0\uFF0C\u8FD9\u4E2A\u662F\u7528\u6765\u628A\u5305\u63D0\u53D6\u5230jenkins\u9875\u9762\uFF0C\u7ED9\u6D4B\u8BD5\u4E0B\u8F7D\u7684\n//                            archiveArtifacts <span class="token string">&#39;my-admin/target/*.jar&#39;</span>\n//                            currentBuild.description <span class="token operator">=</span> <span class="token string">&quot;Start By <span class="token variable">${env.BUILD_USER}</span> And Build Success&quot;</span>\n//                        <span class="token punctuation">}</span>\n//                    <span class="token punctuation">}</span>\n//                <span class="token punctuation">}</span>\n//            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        stage<span class="token punctuation">(</span><span class="token string">&#39;archive&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            steps <span class="token punctuation">{</span>\n                script <span class="token punctuation">{</span>\n                    color.PrintMes<span class="token punctuation">(</span><span class="token string">&#39;\u5F00\u59CB\u538B\u7F29&#39;</span>, <span class="token string">&#39;green&#39;</span><span class="token punctuation">)</span>\n                    currentTime <span class="token operator">=</span> systemtime.GetSysTime<span class="token punctuation">(</span><span class="token string">&#39;yyMMdd&#39;</span><span class="token punctuation">)</span>\n                    //\u90E8\u7F72\u5305\u662Fjar\u8FD8\u662Fwar\uFF0C\u4EE5\u53CA\u8DEF\u5F84\u8981\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u4FEE\u6539\n                    <span class="token function">sh</span> <span class="token string">&quot;&quot;</span>&quot; <span class="token function">rm</span> -rf archive<span class="token string">&quot;&quot;</span>&quot;\n                    <span class="token function">sh</span> <span class="token string">&quot;&quot;</span>&quot; <span class="token function">mkdir</span> archive <span class="token string">&quot;&quot;</span>&quot;\n                    <span class="token function">sh</span> <span class="token string">&quot;&quot;</span>&quot; <span class="token function">cp</span> my-admin/target/*.jar archive <span class="token string">&quot;&quot;</span>&quot;\n                    <span class="token function">sh</span> <span class="token string">&quot;&quot;</span>&quot; <span class="token function">cp</span> doc/\u7248\u672C\u66F4\u65B0\u8BF4\u660E.md archive <span class="token string">&quot;&quot;</span>&quot;\n                    <span class="token function">sh</span> <span class="token string">&quot;&quot;</span>&quot; <span class="token function">tar</span> -zcvf <span class="token variable">${artifactShortName}</span>-<span class="token variable">${releaseVersion}</span>-<span class="token variable">${env.GIT_COMMIT.take(8)}</span>-BETA-<span class="token variable">${currentTime}</span>.tar.gz archive <span class="token string">&quot;&quot;</span>&quot;\n                    //\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u4FEE\u6539\u5236\u54C1\u8DEF\u5F84\u548C\u540D\u79F0\uFF0C\u8FD9\u4E2A\u662F\u7528\u6765\u628A\u5305\u63D0\u53D6\u5230jenkins\u9875\u9762\uFF0C\u7ED9\u6D4B\u8BD5\u4E0B\u8F7D\u7684\n                    archiveArtifacts <span class="token string">&#39;*.tar.gz&#39;</span>\n                    currentBuild.description <span class="token operator">=</span> <span class="token string">&quot;Start By <span class="token variable">${env.BUILD_USER}</span> And Build Success&quot;</span>\n\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        stage<span class="token punctuation">(</span><span class="token string">&#39;Deploy App&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            when <span class="token punctuation">{</span>\n                expression <span class="token punctuation">{</span>\n                    <span class="token builtin class-name">return</span> <span class="token punctuation">(</span>isDeploy <span class="token operator">==</span> <span class="token string">&#39;\u662F&#39;</span><span class="token punctuation">)</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n            steps <span class="token punctuation">{</span>\n                script <span class="token punctuation">{</span>\n                    color.PrintMes<span class="token punctuation">(</span><span class="token string">&#39;\u81EA\u52A8\u53D1\u5E03&#39;</span>, <span class="token string">&#39;green&#39;</span><span class="token punctuation">)</span>\n                    deployCommand <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>&quot;cd /home/myproject/ <span class="token operator">&amp;&amp;</span> <span class="token function">sh</span> deploy.sh restart<span class="token string">&quot;&quot;</span>&quot;\n                    deploy.Publish<span class="token punctuation">(</span>serverIp, deployCommand, targetPath, <span class="token string">&#39;my-admin/target/my-admin.jar&#39;</span>, <span class="token string">&#39;my-admin/target&#39;</span><span class="token punctuation">)</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u9879\u76EE\u542F\u52A8\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_4-\u9879\u76EE\u542F\u52A8\u811A\u672C" aria-hidden="true">#</a> 4. \u9879\u76EE\u542F\u52A8\u811A\u672C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>\n<span class="token comment"># author ygn</span>\n<span class="token comment"># ./deploy.sh start \u542F\u52A8</span>\n<span class="token comment"># ./deploy.sh stop \u505C\u6B62</span>\n<span class="token comment"># ./deploy.sh restart \u91CD\u542F</span>\n<span class="token comment"># ./deploy.sh status \u72B6\u6001</span>\n<span class="token assign-left variable">AppName</span><span class="token operator">=</span>my-admin.jar\n\n<span class="token comment"># JVM\u53C2\u6570</span>\n<span class="token assign-left variable">JVM_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-Dname=<span class="token variable">$AppName</span>  -Duser.timezone=Asia/Shanghai -Xms512M -Xmx512M -XX:PermSize=256M -XX:MaxPermSize=512M -XX:+HeapDumpOnOutOfMemoryError -XX:+PrintGCDateStamps  -XX:+PrintGCDetails -XX:NewRatio=1 -XX:SurvivorRatio=30 -XX:+UseParallelGC -XX:+UseParallelOldGC&quot;</span>\n<span class="token assign-left variable">APP_HOME</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token builtin class-name">pwd</span><span class="token variable">`</span></span>\n<span class="token assign-left variable">LOG_PATH</span><span class="token operator">=</span><span class="token variable">$APP_HOME</span>/logs/<span class="token variable">$AppName</span>.log\n\n<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">then</span>\n    <span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[0;31m \u672A\u8F93\u5165\u64CD\u4F5C\u540D <span class="token entity" title="\\033">\\033</span>[0m  <span class="token entity" title="\\033">\\033</span>[0;34m {start|stop|restart|status} <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>\n    <span class="token builtin class-name">exit</span> <span class="token number">1</span>\n<span class="token keyword">fi</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$AppName</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">then</span>\n    <span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[0;31m \u672A\u8F93\u5165\u5E94\u7528\u540D <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>\n    <span class="token builtin class-name">exit</span> <span class="token number">1</span>\n<span class="token keyword">fi</span>\n\n<span class="token keyword">function</span> <span class="token function-name function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token assign-left variable">PID</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">ps</span> -ef <span class="token operator">|</span><span class="token function">grep</span> java<span class="token operator">|</span><span class="token function">grep</span> $AppName<span class="token operator">|</span><span class="token function">grep</span> -v <span class="token function">grep</span><span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">`</span></span>\n\n	<span class="token keyword">if</span> <span class="token punctuation">[</span> x<span class="token string">&quot;<span class="token variable">$PID</span>&quot;</span> <span class="token operator">!=</span> x<span class="token string">&quot;&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n	    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$AppName</span> is running...&quot;</span>\n	<span class="token keyword">else</span>\n	  <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u542F\u52A8\u5B8C\u6574\u547D\u4EE4\uFF1A nohup java -jar  <span class="token variable">$JVM_OPTS</span> <span class="token variable">$AppName</span> --spring.profiles.active=prod &gt; /dev/null 2&gt;&amp;1 &amp;&quot;</span>\n		<span class="token function">nohup</span> java -jar  <span class="token variable">$JVM_OPTS</span> <span class="token variable">$AppName</span> --spring.profiles.active<span class="token operator">=</span>prod <span class="token operator">&gt;</span> /dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>\n		<span class="token function">sleep</span> <span class="token number">5</span>\n		status\n	<span class="token keyword">fi</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function-name function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Stop <span class="token variable">$AppName</span>&quot;</span>\n	\n	<span class="token assign-left variable">PID</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>\n	<span class="token function-name function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n		<span class="token assign-left variable">PID</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">ps</span> -ef <span class="token operator">|</span><span class="token function">grep</span> java<span class="token operator">|</span><span class="token function">grep</span> $AppName<span class="token operator">|</span><span class="token function">grep</span> -v <span class="token function">grep</span><span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">`</span></span>\n	<span class="token punctuation">}</span>\n\n	query\n	<span class="token keyword">if</span> <span class="token punctuation">[</span> x<span class="token string">&quot;<span class="token variable">$PID</span>&quot;</span> <span class="token operator">!=</span> x<span class="token string">&quot;&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n		<span class="token function">kill</span> -<span class="token environment constant">TERM</span> <span class="token variable">$PID</span>\n		<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$AppName</span> (pid:<span class="token variable">$PID</span>) exiting...&quot;</span>\n		<span class="token keyword">while</span> <span class="token punctuation">[</span> x<span class="token string">&quot;<span class="token variable">$PID</span>&quot;</span> <span class="token operator">!=</span> x<span class="token string">&quot;&quot;</span> <span class="token punctuation">]</span>\n		<span class="token keyword">do</span>\n			<span class="token function">sleep</span> <span class="token number">1</span>\n			query\n		<span class="token keyword">done</span>\n		<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$AppName</span> exited.&quot;</span>\n	<span class="token keyword">else</span>\n		<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$AppName</span> already stopped.&quot;</span>\n	<span class="token keyword">fi</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function-name function">restart</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    stop\n    <span class="token function">sleep</span> <span class="token number">2</span>\n    start\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function-name function">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token assign-left variable">PID</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">ps</span> -ef <span class="token operator">|</span><span class="token function">grep</span> java<span class="token operator">|</span><span class="token function">grep</span> $AppName<span class="token operator">|</span><span class="token function">grep</span> -v <span class="token function">grep</span><span class="token operator">|</span><span class="token function">wc</span> -l<span class="token variable">`</span></span>\n    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$PID</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>\n        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$AppName</span> is running...&quot;</span>\n    <span class="token keyword">else</span>\n        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$AppName</span> is not running...&quot;</span>\n    <span class="token keyword">fi</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span>\n    start<span class="token punctuation">)</span>\n    start<span class="token punctuation">;</span><span class="token punctuation">;</span>\n    stop<span class="token punctuation">)</span>\n    stop<span class="token punctuation">;</span><span class="token punctuation">;</span>\n    restart<span class="token punctuation">)</span>\n    restart<span class="token punctuation">;</span><span class="token punctuation">;</span>\n    status<span class="token punctuation">)</span>\n    status<span class="token punctuation">;</span><span class="token punctuation">;</span>\n    *<span class="token punctuation">)</span>\n\n<span class="token keyword">esac</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 11);
const _hoisted_12 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_12);
}
var C4Jenkinsfile__springboot___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C4-jenkinsfile\u90E8\u7F72springboot\u9879\u76EE.html.vue"]]);
export { C4Jenkinsfile__springboot___html as default };
