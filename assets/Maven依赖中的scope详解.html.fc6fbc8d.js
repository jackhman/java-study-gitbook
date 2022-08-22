import { o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app.80478ce0.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="maven\u4F9D\u8D56\u4E2D\u7684scope\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#maven\u4F9D\u8D56\u4E2D\u7684scope\u8BE6\u89E3" aria-hidden="true">#</a> Maven\u4F9D\u8D56\u4E2D\u7684scope\u8BE6\u89E3</h1><h2 id="_1-scope\u7684\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#_1-scope\u7684\u5206\u7C7B" aria-hidden="true">#</a> 1. scope\u7684\u5206\u7C7B</h2><p>\u4E3B\u8981\u5206\u4E3A\uFF1A</p><ul><li>compile\uFF08\u9ED8\u8BA4\uFF09</li><li>test</li><li>runntime</li><li>provided</li><li>system</li></ul><h3 id="_1-1-compile-\u9ED8\u8BA4" tabindex="-1"><a class="header-anchor" href="#_1-1-compile-\u9ED8\u8BA4" aria-hidden="true">#</a> 1.1 compile(\u9ED8\u8BA4)</h3><p>compile\u8868\u793A\u88AB\u4F9D\u8D56\u9879\u76EE\u9700\u8981\u53C2\u4E0E\u5F53\u524D\u9879\u76EE\u7684\u7F16\u8BD1\uFF0C\u5F53\u7136\u540E\u7EED\u7684\u6D4B\u8BD5\uFF0C\u8FD0\u884C\u5468\u671F\u4E5F\u53C2\u4E0E\u5176\u4E2D\uFF0C\u662F\u4E00\u4E2A\u6BD4\u8F83\u5F3A\u7684\u4F9D\u8D56\u3002\u6253\u5305\u7684\u65F6\u5019\u901A\u5E38\u9700\u8981\u5305\u542B\u8FDB\u53BB\u3002</p><h3 id="_1-2-test" tabindex="-1"><a class="header-anchor" href="#_1-2-test" aria-hidden="true">#</a> 1.2 test</h3><p>scope\u4E3Atest\u8868\u793A\u4F9D\u8D56\u9879\u76EE\u4EC5\u4EC5\u53C2\u4E0E\u6D4B\u8BD5\u76F8\u5173\u7684\u5DE5\u4F5C\uFF0C\u5305\u62EC\u6D4B\u8BD5\u4EE3\u7801\u7684\u7F16\u8BD1\uFF0C\u6267\u884C\u3002\u6BD4\u8F83\u5178\u578B\u7684\u5982junit\u3002</p><h3 id="_1-3-runntime" tabindex="-1"><a class="header-anchor" href="#_1-3-runntime" aria-hidden="true">#</a> 1.3 runntime</h3><p>runntime\u8868\u793A\u88AB\u4F9D\u8D56\u9879\u76EE\u65E0\u9700\u53C2\u4E0E\u9879\u76EE\u7684\u7F16\u8BD1\uFF0C\u4E0D\u8FC7\u540E\u671F\u7684\u6D4B\u8BD5\u548C\u8FD0\u884C\u5468\u671F\u9700\u8981\u5176\u53C2\u4E0E\u3002\u4E0Ecompile\u76F8\u6BD4\uFF0C<strong>\u8DF3\u8FC7\u7F16\u8BD1</strong>\u800C\u5DF2\uFF0C</p><p>oracle jdbc\u9A71\u52A8\u67B6\u5305\u5C31\u662F\u4E00\u4E2A\u5F88\u597D\u7684\u4F8B\u5B50\uFF0C\u4E00\u822Cscope\u4E3Arunntime</p><h3 id="_1-4-provided" tabindex="-1"><a class="header-anchor" href="#_1-4-provided" aria-hidden="true">#</a> 1.4 provided</h3><p>provided\u610F\u5473\u7740\u6253\u5305\u7684\u65F6\u5019\u53EF\u4EE5\u4E0D\u7528\u5305\u8FDB\u53BB\uFF0C\u522B\u7684\u8BBE\u65BD(Web Container)\u4F1A\u63D0\u4F9B\u3002\u4E8B\u5B9E\u4E0A\u8BE5\u4F9D\u8D56\u7406\u8BBA\u4E0A\u53EF\u4EE5\u53C2\u4E0E\u7F16\u8BD1\uFF0C\u6D4B\u8BD5\uFF0C\u8FD0\u884C\u7B49\u5468\u671F\u3002\u76F8\u5F53\u4E8Ecompile\uFF0C\u4F46\u662F\u5728<strong>\u6253\u5305\u9636\u6BB5\u505A\u4E86exclude\u7684\u52A8\u4F5C</strong>\u3002</p><h3 id="_1-5-system" tabindex="-1"><a class="header-anchor" href="#_1-5-system" aria-hidden="true">#</a> 1.5 system</h3><p>\u4ECE\u53C2\u4E0E\u5EA6\u6765\u8BF4\uFF0C\u4E5Fprovided\u76F8\u540C\uFF0C\u4E0D\u8FC7\u88AB\u4F9D\u8D56\u9879\u4E0D\u4F1A\u4ECEmaven\u4ED3\u5E93\u6293\uFF0C\u800C\u662F\u4ECE\u672C\u5730\u6587\u4EF6\u7CFB\u7EDF\u62FF\uFF0C\u4E00\u5B9A\u9700<strong>\u8981\u914D\u5408systemPath\u5C5E\u6027\u4F7F\u7528</strong></p>', 15);
const _hoisted_16 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_16);
}
var Maven____scope___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Maven\u4F9D\u8D56\u4E2D\u7684scope\u8BE6\u89E3.html.vue"]]);
export { Maven____scope___html as default };
