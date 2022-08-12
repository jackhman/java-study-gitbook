import { o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app.2ea2a491.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u6E05\u9664\u6316\u77FF\u7A0B\u5E8F-docker\u4E2Dubuntu\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u6E05\u9664\u6316\u77FF\u7A0B\u5E8F-docker\u4E2Dubuntu\u5BB9\u5668" aria-hidden="true">#</a> \u6E05\u9664\u6316\u77FF\u7A0B\u5E8F\uFF08docker\u4E2DUbuntu\u5BB9\u5668\uFF09</h1><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200202232351270.png" alt="image-20200202232351270"></p><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230kdevtmpfsi \u8FD9\u4E2A\u8FDB\u7A0BCPU\u4E00\u76F4\u5F88\u9AD8\uFF0C100%\u4E86\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u5C31\u5F00\u542F\u6392\u67E5</p><h2 id="_2-\u67E5\u770B\u662F\u5426\u6709\u5B9A\u65F6\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#_2-\u67E5\u770B\u662F\u5426\u6709\u5B9A\u65F6\u4EFB\u52A1" aria-hidden="true">#</a> 2. \u67E5\u770B\u662F\u5426\u6709\u5B9A\u65F6\u4EFB\u52A1</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>crontab -l\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200202232702861.png" alt="image-20200202232702861"></p><p>\u7ADF\u7136\u6CA1\u6709\u5B9A\u65F6\u4EFB\u52A1</p><h2 id="_3-\u5173\u95ED\u8FDB\u7A0B\u5E76\u67E5\u770B\u76F8\u5173\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-\u5173\u95ED\u8FDB\u7A0B\u5E76\u67E5\u770B\u76F8\u5173\u6587\u4EF6" aria-hidden="true">#</a> 3. \u5173\u95ED\u8FDB\u7A0B\u5E76\u67E5\u770B\u76F8\u5173\u6587\u4EF6</h2><p>\u6211\u4EEC\u4F7F\u7528kill pid \u6765\u5173\u95ED\u8FDB\u7A0B, \u5173\u95ED\u8FDB\u7A0B\u4E4B\u540Ecpu \u662F\u964D\u4E0B\u6765\u4E86\uFF0C\u6211\u4EEC\u67E5\u627E\u672C\u5730\u662F\u5426\u6709\u76F8\u5173\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>find / -name kdevtmpfsi\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u8FD9\u91CC\u7ADF\u7136\u6709docker</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200202233209635.png" alt="image-20200202233209635"></p><h2 id="_4-\u67E5\u770Bdocker-\u76F8\u5173\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#_4-\u67E5\u770Bdocker-\u76F8\u5173\u8FDB\u7A0B" aria-hidden="true">#</a> 4. \u67E5\u770Bdocker \u76F8\u5173\u8FDB\u7A0B</h2><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200202233406083.png" alt="image-20200202233406083"></p><p>\u5C31\u662F\u8FD9\u4E2Aubutu\u6B7B\u6D3B\u6740\u4E0D\u6389\uFF0C\u54EA\u6015\u4F60\u628A\u5BB9\u5668\u548C\u955C\u50CF\u90FD\u5220\u9664\u4E86\uFF0C\u4ED6\u4E5F\u4F1A\u81EA\u52A8\u91CD\u542F\uFF0C\u7136\u540E\u4ED6\u5728Ubuntu\u91CC\u9762\u542F\u52A8kdevtmpfsi</p><h2 id="_5-\u67E5\u770Bdocker-\u8BE6\u60C5" tabindex="-1"><a class="header-anchor" href="#_5-\u67E5\u770Bdocker-\u8BE6\u60C5" aria-hidden="true">#</a> 5. \u67E5\u770Bdocker \u8BE6\u60C5</h2><p>\u901A\u8FC7 docker inspect CONTAINER_ID\u67E5\u770B\u5BB9\u5668\u8BE6\u60C5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker inspect 7110557eb73a\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6211\u4EEC\u770B\u5230\u8FD9\u91CC\u6709\u4E2A\u5B9A\u65F6</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200202234527883.png" alt="image-20200202234527883"></p><h2 id="_6-\u8FDB\u5165ubuntu\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#_6-\u8FDB\u5165ubuntu\u5BB9\u5668" aria-hidden="true">#</a> 6. \u8FDB\u5165Ubuntu\u5BB9\u5668</h2><p>\u6211\u4EEC\u8FDB\u5165Ubuntu\u5BB9\u5668</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> docker exec -ti 7110557eb73a /bin/bash\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770Bubuntu\u91CC\u7684\u5B9A\u65F6\u4EFB\u52A1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>crontab -l\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200202235031202.png" alt="image-20200202235031202"></p><h2 id="_7-\u5220\u9664\u5B9A\u65F6\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#_7-\u5220\u9664\u5B9A\u65F6\u4EFB\u52A1" aria-hidden="true">#</a> 7. \u5220\u9664\u5B9A\u65F6\u4EFB\u52A1</h2><p>\u6267\u884C crontab -r</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>crontab -l  # \u8868\u793A\u5217\u51FA\u6240\u6709\u7684\u5B9A\u65F6\u4EFB\u52A1\ncrontab -r  # \u8868\u793A\u5220\u9664\u7528\u6237\u7684\u5B9A\u65F6\u4EFB\u52A1\uFF0C\u5F53\u6267\u884C\u6B64\u547D\u4EE4\u540E\uFF0C\u6240\u6709\u7528\u6237\u4E0B\u9762\u7684\u5B9A\u65F6\u4EFB\u52A1\u4F1A\u88AB\u5220\u9664\uFF0C\u6267\u884Ccrontab -l\u540E\u4F1A\u63D0\u793A\u7528\u6237\uFF1A\u201Cno crontab for admin\u201D12\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-\u5173\u95EDdocker-\u9ED8\u8BA4\u7AEF\u53E32375" tabindex="-1"><a class="header-anchor" href="#_8-\u5173\u95EDdocker-\u9ED8\u8BA4\u7AEF\u53E32375" aria-hidden="true">#</a> 8. \u5173\u95EDdocker \u9ED8\u8BA4\u7AEF\u53E32375</h2><p>\u8FD9\u6B21\u88AB\u6316\u77FF\u4E3B\u8981\u662F\u56E0\u4E3A\u963F\u91CC\u4E91\u5F00\u653E\u4E86 docker \u9ED8\u8BA4\u7AEF\u53E32375\u7ED9\u8FDC\u7A0B\u8BBF\u95EE\uFF0C\u8FD9\u624D\u5BFC\u81F4\u4E0D\u6CD5\u5206\u5B50\u6709\u53EF\u4E58\u4E4B\u673A\uFF0C\u963F\u91CC\u4E91\u5173\u95ED2375</p>', 31);
const _hoisted_32 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_32);
}
var Linux_________docker_Ubuntu___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Linux\u95EE\u9898-\u6E05\u9664\u6316\u77FF\u7A0B\u5E8Fdocker\u4E2DUbuntu\u5BB9\u5668.html.vue"]]);
export { Linux_________docker_Ubuntu___html as default };
