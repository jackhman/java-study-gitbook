import { o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app.80478ce0.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="aop\u6253\u5370\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#aop\u6253\u5370\u65E5\u5FD7" aria-hidden="true">#</a> AOP\u6253\u5370\u65E5\u5FD7</h1><h2 id="_1-log-\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#_1-log-\u6CE8\u89E3" aria-hidden="true">#</a> 1. @Log \u6CE8\u89E3</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Target(ElementType.METHOD)\n@Retention(RetentionPolicy.RUNTIME)\npublic @interface Log {\n    String value() default &quot;&quot;;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-aop\u8BB0\u5F55\u64CD\u4F5C\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#_2-aop\u8BB0\u5F55\u64CD\u4F5C\u65E5\u5FD7" aria-hidden="true">#</a> 2. AOP\u8BB0\u5F55\u64CD\u4F5C\u65E5\u5FD7</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**\n * AOP \u8BB0\u5F55\u7528\u6237\u64CD\u4F5C\u65E5\u5FD7\n */\n@Slf4j\n@Aspect\n@Component\npublic class LogAspect {\n\n    @Autowired\n    private FebsProperties febsProperties;\n\n    @Autowired\n    private LogService logService;\n\n    @Pointcut(&quot;@annotation(com.ylzinfo.common.annotation.Log)&quot;)\n    public void pointcut() {\n        // do nothing\n    }\n\n    @Around(&quot;pointcut()&quot;)\n    public Object around(ProceedingJoinPoint point) throws JsonProcessingException {\n        Object result = null;\n        long beginTime = System.currentTimeMillis();\n        try {\n            // \u6267\u884C\u65B9\u6CD5\n            result = point.proceed();\n        } catch (Throwable e) {\n            log.error(e.getMessage());\n        }\n        // \u83B7\u53D6 request\n        HttpServletRequest request = HttpContextUtil.getHttpServletRequest();\n        // \u8BBE\u7F6E IP \u5730\u5740\n        String ip = IPUtil.getIpAddr(request);\n        // \u6267\u884C\u65F6\u957F(\u6BEB\u79D2)\n        long time = System.currentTimeMillis() - beginTime;\n        if (febsProperties.isOpenAopLog()) {\n            // \u4FDD\u5B58\u65E5\u5FD7\n            String token = (String) SecurityUtils.getSubject().getPrincipal();\n            String username = JWTUtil.getUsername(token);\n\n            SysLog log = new SysLog();\n            log.setUsername(username);\n            log.setIp(ip);\n            log.setTime(time);\n            logService.saveLog(point, log);\n        }\n        return result;\n    }\n}\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C06\u7528\u6237\u540D\u3001\u64CD\u4F5Cip\u3001\u64CD\u4F5C\u65F6\u957F\u8BB0\u5F55\u5230\u6570\u636E\u5E93\u4E2D</p><h2 id="_3-\u5177\u4F53\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_3-\u5177\u4F53\u4F7F\u7528" aria-hidden="true">#</a> 3. \u5177\u4F53\u4F7F\u7528</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Log(&quot;\u65B0\u589E\u7528\u6237&quot;)\n@PostMapping\n@RequiresPermissions(&quot;user:add&quot;)\npublic void addUser( @Valid User user) throws FebsException {\n       ....\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 8);
const _hoisted_9 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_9);
}
var AOP_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "AOP\u6253\u5370\u65E5\u5FD7.html.vue"]]);
export { AOP_____html as default };
