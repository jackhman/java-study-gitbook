import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.7a45cd91.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="minio\u5BF9\u8C61\u5B58\u50A8\u7684\u5143\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#minio\u5BF9\u8C61\u5B58\u50A8\u7684\u5143\u6570\u636E" aria-hidden="true">#</a> Minio\u5BF9\u8C61\u5B58\u50A8\u7684\u5143\u6570\u636E</h1><h2 id="_1-\u6587\u4EF6\u5B58\u50A8vs\u5757\u5B58\u50A8vs\u5BF9\u8C61\u5B58\u50A8" tabindex="-1"><a class="header-anchor" href="#_1-\u6587\u4EF6\u5B58\u50A8vs\u5757\u5B58\u50A8vs\u5BF9\u8C61\u5B58\u50A8" aria-hidden="true">#</a> 1. \u6587\u4EF6\u5B58\u50A8VS\u5757\u5B58\u50A8VS\u5BF9\u8C61\u5B58\u50A8</h2><p><strong>\u6587\u4EF6\u3001\u5757\u548C\u5BF9\u8C61\u662F\u4E09\u79CD\u4EE5\u4E0D\u540C\u7684\u65B9\u5F0F\u6765\u4FDD\u5B58\u3001\u6574\u7406\u548C\u5448\u73B0\u6570\u636E\u7684\u5B58\u50A8\u683C\u5F0F</strong>\u3002\u8FD9\u4E9B\u683C\u5F0F\u5404\u6709\u5404\u7684\u529F\u80FD\u548C\u9650\u5236\u3002</p><ul><li><p>\u6587\u4EF6\u5B58\u50A8\uFF1A</p><p>\u4F1A\u4EE5<strong>\u6587\u4EF6\u548C\u6587\u4EF6\u5939</strong>\u7684\u5C42\u6B21\u7ED3\u6784\u6765\u6574\u7406\u548C\u5448\u73B0\u6570\u636E\uFF1B</p></li><li><p>\u5757\u5B58\u50A8\u4F1A\uFF1A</p><p><strong>\u5C06\u6570\u636E\u62C6\u5206\u5230\u4EFB\u610F\u5212\u5206\u4E14\u5927\u5C0F\u76F8\u540C</strong>\u7684\u5377\u4E2D\uFF1B</p></li><li><p>\u5BF9\u8C61\u5B58\u50A8\uFF1A</p><p>\u4F1A\u7BA1\u7406\u6570\u636E\u5E76\u5C06\u5176\u94FE\u63A5\u81F3<strong>\u5173\u8054\u7684\u5143\u6570\u636E</strong>\u3002</p><p>\u5143\u6570\u636E\u5305\u62EC account\uFF08\u7528\u6237\uFF09\uFF0C bucket\uFF0C bucket index\uFF0C Object \u7684 tag\u7B49\u4FE1\u606F</p></li></ul><h2 id="_2-\u5BF9\u8C61\u5B58\u50A8\u7684\u5143\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_2-\u5BF9\u8C61\u5B58\u50A8\u7684\u5143\u6570\u636E" aria-hidden="true">#</a> 2. \u5BF9\u8C61\u5B58\u50A8\u7684\u5143\u6570\u636E</h2><p>\u5728\u5BF9\u8C61\u5B58\u50A8\u91CC\uFF0C\u5143\u6570\u636E\u5305\u62EC account\uFF08\u7528\u6237\uFF09\uFF0C bucket\uFF0C bucket index\u7B49\u4FE1\u606F\u3002Minio\u6CA1\u6709\u72EC\u7ACB\u7684\u5143\u6570\u636E\u670D\u52A1\u5668\uFF0C\u8FD9\u4E2A\u548CGlusterFs\u7684\u67B6\u6784\u8BBE\u8BA1\u5F88\u7C7B\u4F3C\uFF0C\u5728minio\u91CC\u90FD\u4FDD\u5B58\u5728\u5E95\u5C42\u7684\u672C\u5730\u6587\u4EF6\u7CFB\u7EDF\u91CC\u3002</p><p>\u5728\u672C\u5730\u6587\u4EF6\u7CFB\u7EDF\u91CC\uFF0C\u4E00\u4E2Abucket\u5BF9\u5E94\u672C\u5730\u6587\u4EF6\u7CFB\u7EDF\u4E2D\u7684\u4E00\u4E2A\u76EE\u5F55\u3002\u4E00\u4E2A\u5BF9\u8C61\u5BF9\u5E94bucket\u76EE\u5F55\u4E0B\u7684\u4E00\u4E2A\u76EE\u5F55\uFF08\u5728EC\u7684\u60C5\u51B5\u4E0B\u5BF9\u5E94\u591A\u4E2Apart\u6587\u4EF6\uFF09\u3002\u76EE\u5F55\u4E0B\u4FDD\u5B58\u8005\u5BF9\u8C61\u76F8\u5173\u7684\u6570\u636E\u548C\u5143\u6570\u636E\u3002</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220721225001273.png" alt="image-20220721225001273" style="zoom:50%;"><p>\u5982\u4E0A\u56FE\u6240\u793A\uFF1A\u5728Erasure Set\u4E2D\u67094\u4E2A\u78C1\u76D8\uFF1ADisk1\uFF0CDisk2\uFF0CDisk3\uFF0CDisk4\uFF0C\u56DB\u4E2A\u78C1\u76D8\u7EC4\u6210\u4E00\u4E2AErasure Set\u3002\u6BCF\u4E2Abucket\u5BF9\u5E94\u4E00\u4E2A\u76F8\u5E94\u6876\u540D\u79F0\u7684\u76EE\u5F55\uFF0C\u6BCF\u4E2A\u5BF9\u8C61\u5BF9\u5E94bucket\u7684\u4E00\u4E2A\u76EE\u5F55\uFF1A\u76EE\u5F55\u91CC\u4FDD\u5B58\u7740\u5BF9\u5E94\u7684\u6570\u636E\u548C\u5143\u6570\u636E\u6587\u4EF6\u3002</p><p>\u521B\u5EFAbucket\u7684\u5143\u6570\u636E\u64CD\u4F5C\uFF1A\u5BF9\u4E8EErasure Set(2+2)\u4E3A\u4F8B\uFF1A\u521B\u5EFA\u4E00\u4E2Abucket\uFF0C\u5BF9\u5E94\u5E95\u5C42\u6587\u4EF6\u7CFB\u7EDF\u76844\u6B21\u76EE\u5F55\u521B\u5EFA\u3002\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6\uFF0C\u9700\u8981\u5BF9\u5E94\u5E95\u5C424\u6B21\u76EE\u5F55\u521B\u5EFA\uFF0C8\u6B21\u6587\u4EF6\u521B\u5EFA\u64CD\u4F5C\u3002\u5BF9\u4E8E\u5C0F\u6587\u4EF6\uFF0C\u6570\u636E\u548C\u5143\u6570\u636E\u90FD\u4FDD\u5B58\u5728meta\u6587\u4EF6\u4E2D\uFF0C\u4E5F\u9700\u89814\u6B21\u6587\u4EF6\u521B\u5EFA\u64CD\u4F5C\u3002<strong>\u7531\u6B64\u53EF\u77E5\uFF0Cminio\u5BF9\u5E94\u5927\u91CF\u5C0F\u6587\u4EF6\u7684\u6027\u80FD\u975E\u5E38\u5DEE\u3002</strong></p><h2 id="_3-\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_3-\u5B9E\u4F8B" aria-hidden="true">#</a> 3. \u5B9E\u4F8B</h2><p>\u5BF9\u4E8E\u5C0F\u6587\u4EF6\uFF0C<strong>\u6570\u636E\u548C\u5143\u6570\u636E\u90FD\u540C\u65F6\u4FDD\u5B58\u5728\u5BF9\u5E94\u7684xl.meta\u7684\u6587\u4EF6\u4E2D</strong>\u3002\u5BF9\u5E94\u5927\u6587\u4EF6\u7684\u5199\u5165\uFF0C\u4F1A\u521B\u5EFA\u76F8\u5E94\u7684\u76EE\u5F55\uFF0C\u8BE5\u76EE\u5F55\u4E0B\u662F\u5BF9\u5E94\u7684part\u7684\u6570\u636E\u6587\u4EF6\u548C\u5143\u6570\u636E\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220721225520501.png" alt="image-20220721225520501"></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220721225531228.png" alt="image-20220721225531228"></p><p>\u7531\u56FE3\u53EF\u77E5\uFF1A\u5F53\u524D\u96C6\u7FA4\u4E2D\u67092\u4E2Abucket\uFF1Atest1\u548Ctest2\u3002 test1\u4E2D\u67093\u4E2A\u5BF9\u8C61\uFF1A\u5206\u522B\u662Fx\uFF0Cy\uFF0Cwget-log\u4E09\u4E2A\u5BF9\u8C61\u3002x\u662F30M\u7684\u5927\u6587\u4EF6\uFF0C\u901A\u8FC7multipart\u4E0A\u4F20\u5230\u96C6\u7FA4\u4E2D\uFF0C\u67092\u4E2Apart\uFF0C\u5206\u522B\u4E3Apart.1\u548Cpart.2\u6587\u4EF6\u3002wget-log\u6587\u4EF6\u662F\u4E00\u4E2A\u5C0F\u6587\u4EF6\uFF0C\u5927\u5C0F\u4E3A357.9KB.</p><p>\u901A\u8FC7\u56FE4\uFF1A\u53EF\u4EE5\u6E05\u6670\u7684\u770B\u5230\uFF0C\u6BCF\u4E2Abucket\u5BF9\u5E94\u4E00\u4E2A\u540C\u540D\u672C\u5730\u76EE\u5F55\uFF0C\u6BCF\u4E2A\u5BF9\u8C61\u4E5F\u5BF9\u5E94\u4E00\u4E2A\u540C\u540D\u7684\u76EE\u5F55\uFF0C\u4E0B\u9762\u5B58\u6570\u636E\u548C\u5143\u6570\u636E\u3002\u5BF9\u5E94\u5C0F\u6587\u4EF6\uFF0C\u6570\u636E\u548C\u5143\u6570\u636E\u90FD\u4FDD\u5B58\u5728 xl.meta\u7684\u5143\u6570\u636E\u6587\u4EF6\u4E2D\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 17);
const _hoisted_18 = {
  href: "https://zhuanlan.zhihu.com/p/374939519",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_19 = /* @__PURE__ */ createTextVNode("MinIO\u5BF9\u8C61\u5B58\u50A8\u4ECB\u7ECD");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_18, [
        _hoisted_19,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var C1Minio_________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C1-Minio\u5BF9\u8C61\u5B58\u50A8\u7684\u5143\u6570\u636E.html.vue"]]);
export { C1Minio_________html as default };
