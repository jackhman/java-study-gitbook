import { o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app.a829be87.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u9501\u673A\u5236\u9501" tabindex="-1"><a class="header-anchor" href="#\u9501\u673A\u5236\u9501" aria-hidden="true">#</a> \u9501\u673A\u5236\u9501</h1><h2 id="_1-myisam-\u548Cinnodb-\u5B58\u50A8\u5F15\u64CE\u4F7F\u7528\u7684\u9501" tabindex="-1"><a class="header-anchor" href="#_1-myisam-\u548Cinnodb-\u5B58\u50A8\u5F15\u64CE\u4F7F\u7528\u7684\u9501" aria-hidden="true">#</a> 1. MyISAM \u548CInnoDB \u5B58\u50A8\u5F15\u64CE\u4F7F\u7528\u7684\u9501</h2><ul><li>MyISAM \u91C7\u7528\u7684\u662F\u8868\u7EA7\u9501\uFF08table-level locking\uFF09</li><li>InnoDB \u652F\u6301\u884C\u7EA7\u9501\uFF08row-level locking\uFF09\u548C\u8868\u7EA7\u9501\uFF0C\u9ED8\u8BA4\u884C\u4E3A\u662F\u884C\u7EA7\u9501</li></ul><h2 id="_2-\u8868\u7EA7\u9501\u548C\u884C\u7EA7\u9501\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#_2-\u8868\u7EA7\u9501\u548C\u884C\u7EA7\u9501\u5BF9\u6BD4" aria-hidden="true">#</a> 2.\u8868\u7EA7\u9501\u548C\u884C\u7EA7\u9501\u5BF9\u6BD4</h2><ul><li><p>\u8868\u7EA7\u9501</p><p>MySQL \u4E2D\u9501\u5B9A <strong>\u7C92\u5EA6\u6700\u5927</strong>\u7684\u4E00\u79CD\u9501\uFF0C\u5BF9\u5F53\u524D<strong>\u64CD\u4F5C\u7684\u6574\u5F20\u8868\u52A0\u9501</strong></p><ul><li>\u4F18\u52BF <ul><li>\u5B9E\u73B0\u7B80\u5355\uFF0C\u8D44\u6E90\u6D88\u8017\u5C11\uFF0C\u52A0\u9501\u5FEB</li><li>\u4E0D\u4F1A\u51FA\u73B0\u6B7B\u9501</li></ul></li><li>\u7F3A\u70B9 <ul><li>\u5176\u9501\u7C92\u5EA6\u6700\u5927\uFF0C\u89E6\u53D1\u9501\u51B2\u7A81\u7684\u6982\u7387\u6700\u9AD8</li><li>\u5E76\u53D1\u5EA6\u6700\u4F4E</li></ul></li></ul></li><li><p>\u884C\u7EA7\u9501</p><p>MySQL \u4E2D\u9501\u5B9A <strong>\u7C92\u5EA6\u6700\u5C0F</strong>\u7684\u4E00\u79CD\u9501\uFF0C\u53EA\u9488\u5BF9\u5F53\u524D<strong>\u64CD\u4F5C\u7684\u884C\u52A0\u9501</strong></p><ul><li>\u4F18\u52BF</li><li>\u5927\u5927\u51CF\u5C11\u6570\u636E\u5E93\u64CD\u4F5C\u7684\u51B2\u7A81</li><li>\u52A0\u9501\u7C92\u5EA6\u5C0F\uFF0C\u5E76\u53D1\u5EA6\u9AD8</li><li>\u7F3A\u70B9 <ul><li>\u52A0\u9501\u7684\u5F00\u9500\u5927</li><li>\u52A0\u9501\u6162</li><li>\u4F1A\u51FA\u73B0\u6B7B\u9501</li></ul></li></ul></li></ul><h2 id="_3-innodb\u5B58\u50A8\u5F15\u64CE\u7684\u9501\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-innodb\u5B58\u50A8\u5F15\u64CE\u7684\u9501\u7B97\u6CD5" aria-hidden="true">#</a> 3. InnoDB\u5B58\u50A8\u5F15\u64CE\u7684\u9501\u7B97\u6CD5</h2><ul><li>Record lock\uFF1A\u5355\u4E2A\u884C\u8BB0\u5F55\u4E0A\u7684\u9501</li><li>Gap lock: \u95F4\u9699\u9501\uFF0C\u9501\u5B9A\u4E00\u4E2A\u8303\u56F4\uFF0C\u4E0D\u5305\u62EC\u8BB0\u5F55\u672C\u8EAB</li><li><strong>Next-key lock: record+gap \u9501\u5B9A\u4E00\u4E2A\u9501\u8303\u56F4\uFF0C\u5305\u542B\u8BB0\u5F55\u672C\u8EAB</strong></li></ul><h3 id="_3-1-\u76F8\u5173\u77E5\u8BC6\u70B9" tabindex="-1"><a class="header-anchor" href="#_3-1-\u76F8\u5173\u77E5\u8BC6\u70B9" aria-hidden="true">#</a> 3.1 \u76F8\u5173\u77E5\u8BC6\u70B9</h3><ol><li>innodb \u5BF9\u4E8E\u884C\u7684\u67E5\u8BE2\u4F7F\u7528next-key lock</li><li>next-locking keying \u4E3A\u4E86\u89E3\u51B3Phantom Problem\u5E7B\u8BFB\u95EE\u9898</li><li>\u5F53\u67E5\u8BE2\u7684\u7D22\u5F15\u542B\u6709\u552F\u4E00\u5C5E\u6027\u65F6\uFF0C\u5C06next-key lock\u964D\u7EA7\u4E3A record key</li><li>Gap \u9501\u8BBE\u8BA1\u7684\u76EE\u7684\u662F\u4E3A\u4E86\u963B\u6B62\u591A\u4E2A\u4E8B\u52A1\u5C06\u8BB0\u5F55\u63D2\u5165\u5230\u540C\u4E00\u8303\u56F4\u5185\uFF0C\u8FD9\u4F1A\u5BFC\u81F4\u5E7B\u8BFB\u95EE\u9898\u7684\u4EA7\u751F</li><li>\u6709\u4E24\u79CD\u65B9\u5F0F\u663E\u793A\u5173\u95EDgap \u9501\uFF1A\uFF08\u9664\u4E86\u5916\u952E\u7EA6\u675F\u548C\u552F\u4E00\u6027\u68C0\u67E5\u5916\uFF0C\u5176\u4F59\u60C5\u51B5\u4EC5\u4F7F\u7528record lock\uFF09 <ol><li>\u5C06\u4E8B\u52A1\u9694\u79BB\u7EA7\u522B\u8BBE\u7F6E\u4E3AREAD-COMMITTED</li><li>\u5C06\u53C2\u6570innodb_locks_unsafe_for_binlog \u8BBE\u7F6E\u4E3A1</li></ol></li></ol>', 9);
const _hoisted_10 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_10);
}
var Mysql____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Mysql\u9501\u673A\u5236.html.vue"]]);
export { Mysql____html as default };
