import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.ed238031.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="hibernate\u6982\u5FF5\u4E0E\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#hibernate\u6982\u5FF5\u4E0E\u539F\u7406" aria-hidden="true">#</a> Hibernate\u6982\u5FF5\u4E0E\u539F\u7406</h1><h2 id="_1-hibernate\u7684\u6838\u5FC3\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-hibernate\u7684\u6838\u5FC3\u7EC4\u4EF6" aria-hidden="true">#</a> 1. Hibernate\u7684\u6838\u5FC3\u7EC4\u4EF6</h2><ul><li>Configuration\u7C7B\uFF1A\u7528\u6765\u8BFB\u53D6Hibernate\u914D\u7F6E\u6587\u4EF6\uFF0C\u5E76\u751F\u6210SessionFactory\u5BF9\u8C61\u3002</li><li>SessionFactory\u63A5\u53E3\uFF1A\u4EA7\u751FSession\u5B9E\u4F8B\u5DE5\u5382\u3002</li><li>Session\u63A5\u53E3\uFF1A\u7528\u6765\u64CD\u4F5CPO\u3002\u5B83\u6709get(),load(),save(),update()\u548Cdelete()\u7B49\u65B9\u6CD5\u7528\u6765\u5BF9PO\u8FDB\u884C\u52A0\u8F7D\uFF0C\u4FDD\u5B58\uFF0C\u66F4\u65B0\u53CA\u5220\u9664\u7B49\u64CD\u4F5C\u3002\u5B83\u662FHibernate\u7684\u6838\u5FC3\u63A5\u53E3\u3002</li><li>Query\u63A5\u53E3\uFF1A\u7528\u6765\u5BF9PO\u8FDB\u884C\u67E5\u8BE2\u64CD\u3002\u5B83\u53EF\u4EE5\u4ECESession\u7684createQuery()\u65B9\u6CD5\u751F\u6210\u3002</li><li>Transaction\u63A5\u53E3\uFF1A\u7528\u6765\u7BA1\u7406Hibernate\u4E8B\u52A1\uFF0C\u5B83\u4E3B\u8981\u65B9\u6CD5\u6709commit()\u548Crollback()\uFF0C\u53EF\u4EE5\u4ECESession\u7684beginTrancation()\u65B9\u6CD5\u751F\u6210\u3002</li></ul><h2 id="_2-persistent-object-\u6301\u4E45\u5316\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_2-persistent-object-\u6301\u4E45\u5316\u5BF9\u8C61" aria-hidden="true">#</a> 2. Persistent Object\uFF08\u6301\u4E45\u5316\u5BF9\u8C61\uFF09</h2><p>\u6301\u4E45\u5316\u5BF9\u8C61\u53EF\u4EE5\u662F\u666E\u901A\u7684Javabeans,\u60DF\u4E00\u7279\u6B8A\u7684\u662F\u5B83\u4EEC\u4E0E\uFF08\u4EC5\u4E00\u4E2A\uFF09Session\u76F8\u5173\u8054\u3002JavaBeans\u5728Hibernate\u4E2D\u5B58\u5728\u4E09\u79CD\u72B6\u6001\uFF1A</p><ol><li><p>\u4E34\u65F6\u72B6\u6001(transient)</p><p>\u5F53\u4E00\u4E2AJavaBean\u5BF9\u8C61\u5728\u5185\u5B58\u4E2D\u5B64\u7ACB\u5B58\u5728\uFF0C\u4E0D\u4E0E\u6570\u636E\u5E93\u4E2D\u7684\u6570\u636E\u6709\u4EFB\u4F55\u5173\u8054\u5173\u7CFB\u65F6\uFF0C\u90A3\u4E48\u8FD9\u4E2AJavaBeans\u5BF9\u8C61\u5C31\u79F0\u4E3A\u4E34\u65F6\u5BF9\u8C61(TransientObject)\u3002</p></li><li><p>\u6301\u4E45\u5316\u72B6\u6001(persistent):</p><p>\u5F53\u4E00\u4E2AJavaBean\u5BF9\u8C61\u4E0E\u4E00\u4E2ASession\u76F8\u5173\u8054\u65F6\uFF0C\u5C31\u53D8\u6210\u6301\u4E45\u5316\u5BF9\u8C61(PersistentObject)</p></li><li><p>\u8131\u7BA1\u72B6\u6001(detached):</p><p>\u5728\u8FD9\u4E2ASession\u88AB\u5173\u95ED\u7684\u540C\u65F6\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u4E5F\u4F1A\u8131\u79BB\u6301\u4E45\u5316\u72B6\u6001\uFF0C\u5C31\u53D8\u6210\u8131\u7BA1\u72B6\u6001(DetachedObject)\uFF0C\u53EF\u4EE5\u88AB\u5E94\u7528\u7A0B\u5E8F\u7684\u4EFB\u4F55\u5C42\u81EA\u7531\u4F7F\u7528\uFF0C\u4F8B\u5982\u53EF\u4EE5\u505A\u4E0E\u8868\u793A\u5C42\u6253\u4EA4\u9053\u7684\u6570\u636E\u8206\u5BF9\u8C61(Data Transfer Object)\u3002</p></li></ol><h2 id="_3-hibernate\u7684\u8FD0\u884C\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#_3-hibernate\u7684\u8FD0\u884C\u8FC7\u7A0B" aria-hidden="true">#</a> 3. Hibernate\u7684\u8FD0\u884C\u8FC7\u7A0B</h2><ol><li>\u5E94\u7528\u7A0B\u5E8F\u5148\u8C03\u7528Configration\u7C7B\uFF0C\u8BE5\u7C7B\u8BFB\u53D6Hibernate\u7684\u914D\u7F6E\u6587\u4EF6\u53CA\u6620\u5C04\u6587\u4EF6\u4E2D\u7684\u4FE1\u606F\uFF0C\u5E76\u7528\u8FD9\u4E9B\u4FE1\u606F\u751F\u6210\u4E00\u4E2ASessionFactory\u5BF9\u8C61\u3002</li><li>\u7136\u540E\u4ECESessionFactory\u5BF9\u8C61\u751F\u6210\u4E00\u4E2ASession\u5BF9\u8C61\uFF0C\u5E76\u7528Session\u5BF9\u8C61\u751F\u6210Transaction\u5BF9\u8C61;\u53EF\u901A\u8FC7Session\u5BF9\u8C61\u7684get(),load(),save(),update(),delete()\u548CsaveOrUpdate()\u7B49\u65B9\u6CD5\u5BF9PO\u8FDB\u884C\u52A0\u8F7D\uFF0C\u4FDD\u5B58\uFF0C\u66F4\u65B0\uFF0C\u5220\u9664\u7B49\u64CD\u4F5C;\u5728\u67E5\u8BE2\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u901A\u8FC7Session\u5BF9\u8C61\u751F\u6210\u4E00\u4E2AQuery\u5BF9\u8C61\uFF0C\u7136\u540E\u5229\u7528Query\u5BF9\u8C61\u6267\u884C\u67E5\u8BE2\u64CD\u4F5C;\u5982\u679C\u6CA1\u6709\u5F02\u5E38\uFF0CTransaction\u5BF9\u8C61\u5C06 \u63D0\u4EA4\u8FD9\u4E9B\u64CD\u4F5C\u7ED3\u679C\u5230\u6570\u636E\u5E93\u4E2D\u3002</li></ol><h4 id="_3-1-\u8FD0\u884C\u8FC7\u7A0B\u56FE" tabindex="-1"><a class="header-anchor" href="#_3-1-\u8FD0\u884C\u8FC7\u7A0B\u56FE" aria-hidden="true">#</a> 3.1 \u8FD0\u884C\u8FC7\u7A0B\u56FE</h4><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201010142111373.png" alt="image-20201010142111373"></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201010142134280.png" alt="image-20201010142134280"></p><h2 id="_4-hibernate\u5DE5\u4F5C\u539F\u7406\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_4-hibernate\u5DE5\u4F5C\u539F\u7406\u603B\u7ED3" aria-hidden="true">#</a> 4. hibernate\u5DE5\u4F5C\u539F\u7406\u603B\u7ED3</h2>', 12);
const _hoisted_13 = /* @__PURE__ */ createTextVNode("\u901A\u8FC7Configuration().configure();\u8BFB\u53D6\u5E76\u89E3\u6790hibernate.cfg.xml");
const _hoisted_14 = {
  href: "http://baike.baidu.com/view/2117618.htm",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_15 = /* @__PURE__ */ createTextVNode("\u914D\u7F6E\u6587\u4EF6");
const _hoisted_16 = /* @__PURE__ */ createTextVNode("\u3002");
const _hoisted_17 = /* @__PURE__ */ createStaticVNode("<li><p>\u7531hibernate.cfg.xml\u4E2D\u7684&lt;mappingresource=&quot;com/xx/User.hbm.xml&quot;/&gt;\u8BFB\u53D6\u89E3\u6790\u6620\u5C04\u4FE1\u606F\u3002</p></li><li><p>\u901A\u8FC7config.buildSessionFactory();//\u5F97\u5230sessionFactory\u3002</p></li><li><p>sessionFactory.openSession();//\u5F97\u5230session\u3002</p></li><li><p>session.beginTransaction();//\u5F00\u542F\u4E8B\u52A1\u3002</p></li><li><p>persistent operate;</p></li><li><p>session.getTransaction().commit();//\u63D0\u4EA4\u4E8B\u52A1</p></li><li><p>\u5173\u95EDsession;</p></li><li><p>\u5173\u95EDsessionFactory;</p></li>", 8);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u53C2\u8003\u6587\u7AE0",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u53C2\u8003\u6587\u7AE0",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u53C2\u8003\u6587\u7AE0")
], -1);
const _hoisted_26 = {
  href: "https://blog.csdn.net/lmb55/article/details/46536925",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_27 = /* @__PURE__ */ createTextVNode("Hibernate\u57FA\u672C\u539F\u7406\u53CA\u6982\u5FF5\u8BE6\u89E3");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _hoisted_13,
          createBaseVNode("a", _hoisted_14, [
            _hoisted_15,
            createVNode(_component_ExternalLinkIcon)
          ]),
          _hoisted_16
        ])
      ]),
      _hoisted_17
    ]),
    _hoisted_25,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_26, [
        _hoisted_27,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var Hibernate______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Hibernate\u6982\u5FF5\u4E0E\u539F\u7406.html.vue"]]);
export { Hibernate______html as default };
