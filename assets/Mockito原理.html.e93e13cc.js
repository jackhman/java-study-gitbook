import { o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app.ed238031.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="mockito\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#mockito\u539F\u7406" aria-hidden="true">#</a> Mockito\u539F\u7406</h1><p>\u5E26\u7740\u95EE\u9898\u9488\u5BF9\u6027\u7814\u7A76\uFF0C\u624D\u662F\u5B66\u4E60\u6846\u67B6\u6700\u597D\u7684\u65B9\u6CD5</p><h2 id="_1-\u63D0\u51FA\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_1-\u63D0\u51FA\u95EE\u9898" aria-hidden="true">#</a> 1.\u63D0\u51FA\u95EE\u9898</h2><ol><li><p>mock(List.class)</p><p>\u662F\u600E\u4E48\u4ECEList.class\u8FD9\u4E2A\u63A5\u53E3\u4E2D\u6784\u5EFAList\u5BF9\u8C61\u7684\uFF1F</p></li><li><p>when(mockList.size()).thenReturn(20)</p><p>\u5982\u4F55\u5E72\u9884mock\u5BF9\u8C61\u7684\u6267\u884C\uFF0C\u63D2\u6869\u8FD4\u56DE20\uFF1F</p></li><li><p>verify(mockList,never()).add(10)</p><p>\u8FD9\u79CD\u9A8C\u8BC1\u65B9\u5F0F\u662F\u600E\u4E48\u5B9E\u73B0\u7684\uFF1F</p></li></ol><h2 id="_2-\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_2-\u539F\u7406" aria-hidden="true">#</a> 2.\u539F\u7406</h2><p>###2.1 Mock\u539F\u7406</p><p>\u6211\u4EEC\u5148\u770B\u4E0B\u770Bmock\u4E00\u4E2A\u5BF9\u8C61\u9700\u8981\u505A\u4EC0\u4E48</p><ol><li>\u9996\u5148\u9700\u8981\u77E5\u9053mock\u7684\u5BF9\u8C61\u7C7B\u578B\uFF0C\u8FD9\u6837\u624D\u80FD\u751F\u6210\u8FD9\u4E2A\u7C7B\u578B\u7684\u5BF9\u8C61</li><li>\u5B9E\u4F8B\u5316\u8FD9\u4E2A\u7C7B\u578B\u7684\u5BF9\u8C61 <ol><li>\u5982\u679C\u662F\u62BD\u8C61\u7C7B\u6216\u8005\u63A5\u53E3\uFF0C\u7EE7\u627F\u540E\u7ED9\u8FD9\u4E9B\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u7A7A\u5B9E\u73B0</li></ol></li><li>\u5411\u4E0A\u8F6C\u578B\u6210\u76EE\u6807\u7C7B\u8FD4\u56DE</li></ol><p><strong>\u603B\u7ED3</strong>\uFF1A\u7ED9\u5B9A\u8981mock\u7C7B\u578B\uFF0C\u751F\u6210\u4E00\u4E2A\u7EE7\u627F\u8FD9\u4E2A\u7C7B\u578B\u7684\u7C7B\uFF0C\u5B9E\u4F8B\u5316\u751F\u6210\u7684\u7C7B\uFF0C\u5F97\u5230mock\u5BF9\u8C61</p><h4 id="_2-1-1-mock\u6E90\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_2-1-1-mock\u6E90\u7801\u5B9E\u73B0" aria-hidden="true">#</a> 2.1.1 mock\u6E90\u7801\u5B9E\u73B0</h4><ol><li>\u66B4\u9732\u51FAMockito.mock \u63A5\u53E3\u7ED9\u4F7F\u7528\u8005</li><li>\u5F97\u5230\u8981mock\u7C7B\u578B\uFF0C\u8FDB\u884C\u4E00\u4E9B\u8BBE\u7F6E\uFF0C\u7136\u540E\u4E00\u8DEF\u4F20\u9012\u5230SubclassBytecodeGenertor\uFF0C\u6709\u5B83\u6765\u751F\u6210mock\u7C7B\u578B\u7684\u5B50\u7C7B</li><li>\u5F97\u5230\u8FD9\u4E2A\u7C7B\u578B\u540E\uFF0CSubclassBytecodeGenertor\u5C06\u5176\u5B9E\u4F8B\u5316</li></ol><p>\u7B2C\u4E8C\u6B65\u7684\u5B9E\u73B0\u501F\u52A9\u4E86ByteBuddy\u8FD9\u4E2A\u6846\u67B6\uFF0C\u8FD9\u4E2A\u6846\u67B6\u53EF\u4EE5\u76F4\u63A5\u751F\u6210Java\u7C7B\uFF0C\u7136\u540E\u901A\u8FC7ClassLoader\u52A0\u8F7D\u8FDB\u6765\u4F7F\u7528</p><p>\u7B2C\u4E09\u6B65\u5B9E\u73B0\u5316\uFF0C\u4F7F\u7528\u4E86objenesis\uFF0C\u4E00\u4E2A\u80FD\u5728\u4E0D\u540C\u5E73\u53F0\u5B9E\u4F8B\u5316\u4E00\u4E2A\u7C7B\u7684\u5E93</p><h3 id="_2-2-\u6253\u6869\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_2-2-\u6253\u6869\u539F\u7406" aria-hidden="true">#</a> 2.2 \u6253\u6869\u539F\u7406</h3><p>when\u8FD9\u4E00\u6B65\u8981\u5B9E\u73B0\u7684\u529F\u80FD\u662F\u6253\u6869</p><p>\u90A3\u4E48\u5BF9\u4E8Ewhen(mockType.someMethod()).thenReturn(value)\u8FD9\u6837\u7684\u65B9\u6CD5\u8C03\u7528\uFF0C\u8BE5\u600E\u4E48\u5B9E\u73B0</p><p>####\u539F\u7406\u5B9E\u73B0</p><ol><li>\u5728mock\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u77E5\u9053Mockito\u751F\u6210\u4E86\u4E00\u4E2A\u6D3E\u751F\u7C7B\uFF0C\u6D3E\u751F\u7C7B\u91CC\u7684\u6240\u6709\u65B9\u6CD5\u8C03\u7528\uFF0C\u5DF2\u7ECF</li></ol><p>\u88ABhook\u6389\uFF0C\u65E2\u7D20\u6709\u7684\u65B9\u6CD5\u8C03\u7528\uFF0C\u5E76\u4E0D\u4F1A\u6267\u884C\u5230\u539F\u6709\u7684\u903B\u8F91\u91CC\uFF0C\u800C\u662F\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u9ED8\u8BA4\u503C</p><ol start="2"><li><p>\u6240\u6709\u7684\u65B9\u6CD5\u6700\u7EC8\u90FD\u4F1A\u4EA4\u7531MockHandlerImpl.handle\u6765\u6267\u884C\u3002</p><p>\u8FD9\u4E2AMockHandlerImpl.handle \u662Fmockito \u6838\u5FC3\u6240\u5728</p></li><li><p>\u5728\u8FDB\u884C\u65B9\u6CD5\u8C03\u7528\u7684\u65F6\u5019\uFF0CMockito\u4F1A\u5047\u5B9A\u8FD9\u4E2A\u65B9\u6CD5\u8C03\u7528\u9700\u8981\u88AB\u6253\u6869\uFF0C\u751F\u6210\u4E00\u4E2A\u548C\u8FD9\u4E2A\u65B9\u6CD5\u8C03\u7528\u76F8\u5BF9\u7528\u7684<code>OngoingStubbing</code>\u5BF9\u8C61\uFF0C\u5C06\u8FD9\u4E2A\u5BF9\u8C61\u6682\u65F6\u5B58\u8D77\u6765\u3002</p></li><li><p>\u5F53when \u65B9\u6CD5\u6267\u884C\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u53D6\u51FA\u8FD9\u4E2A\u6682\u5B58\u7684OngoingStubing \u5BF9\u8C61\u8FD4\u56DE\uFF0C\u8FD9\u6837\u6211\u4EEC\u5C31\u80FD\u5728\u8FD9\u4E2A\u4E0A\u9762\u6253\u6869\uFF08\u8C03\u7528thenReturn\u7B49\u65B9\u6CD5\uFF09\uFF0C\u8FD4\u56DE\u6211\u4EEC\u9700\u8981\u7684\u503C\uFF0C\u6253\u6869\u5B8C\u6BD5\u4F1A\u751F\u6210\u4E00\u4E2AAnswer\u5BF9\u8C61\uFF0C\u5B58\u5728\u5728\u4E00\u4E2A\u94FE\u8868\u91CC\uFF0C\u540E\u8C03\u8C03\u7528\u5BF9\u8C61\u90A3\u4E2A\u7684\u65B9\u6CD5\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u4ECE\u8FD9\u4E2A\u94FE\u8868\u5185\u627E\u51FA\u5BF9\u5E94\u7684Answer\u5BF9\u8C61\uFF0C\u4ECE\u4E2D\u83B7\u53D6\u5BF9\u5E94\u7684\u503C\u8FD4\u56DE</p></li></ol><h3 id="_2-3-\u9A8C\u8BC1\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_2-3-\u9A8C\u8BC1\u539F\u7406" aria-hidden="true">#</a> 2.3 \u9A8C\u8BC1\u539F\u7406</h3><p>\u9A8C\u8BC1\u7684\u4EE3\u7801</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>verify(mockList,times(2)).get(anyInt())\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8981\u8FBE\u6210\u8FD9\u6837\u7684\u6548\u679C\uFF0C\u5B9E\u73B0\u91CC\u5FC5\u987B</p><ol><li>\u5728verify\u65B9\u6CD5\u7684\u6267\u884C\u8FC7\u7A0B\u91CC\uFF0C\u8BB0\u5F55\u4E0B\u8981\u9A8C\u8BC1\u7684\u5BF9\u8C61\uFF0C\u4E00\u96C6\u8981\u9A8C\u8BC1\u7684\u53C2\u6570</li><li>\u5728\u6267\u884C\u65B9\u6CD5\u8C03\u7528\u7684\u65F6\u5019\uFF0C\u53D6\u51FA\u8981\u9A8C\u8BC1\u7684\u5BF9\u8C61\uFF0C\u9A8C\u8BC1\u7684\u53C2\u6570\uFF0C\u6267\u884C\u9A8C\u8BC1</li><li></li></ol>', 25);
const _hoisted_26 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_26);
}
var Mockito___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Mockito\u539F\u7406.html.vue"]]);
export { Mockito___html as default };
