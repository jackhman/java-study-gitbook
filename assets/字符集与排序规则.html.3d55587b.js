import { o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app.2ea2a491.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="mysql\u57FA\u7840-\u5B57\u7B26\u96C6\u4E0E\u6392\u5E8F\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#mysql\u57FA\u7840-\u5B57\u7B26\u96C6\u4E0E\u6392\u5E8F\u89C4\u5219" aria-hidden="true">#</a> MySQL\u57FA\u7840-\u5B57\u7B26\u96C6\u4E0E\u6392\u5E8F\u89C4\u5219</h1><h2 id="_1-\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_1-\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 1. \u662F\u4EC0\u4E48</h2><ul><li><p>\u5B57\u7B26\u96C6<code>character set</code>\uFF09\uFF1A<strong>\u7528\u6765\u5B9A\u4E49\u5B58\u50A8\u5B57\u7B26\u4E32\u7684\u65B9\u5F0F</strong></p><p>\u5B9A\u4E49\u4E86\u5B57\u7B26\u4EE5\u53CA\u5B57\u7B26\u7F16\u7801</p><p>\u5B57\u7B26\u96C6\u5206\u4E3A\u51E0\u4E2A\u7B49\u7EA7\uFF1A server, database, table, \u548C column \u3002</p></li><li><p>\u6392\u5E8F\u89C4\u5219\uFF08<code>collations</code>\uFF09\uFF1A<strong>\u7528\u6765\u5B9A\u4E49\u6BD4\u8F83\u5B57\u7B26\u4E32\u7684\u65B9\u5F0F</strong></p><p>\u5B9A\u4E49\u4E86\u5B57\u7B26\u7684\u6BD4\u8F83\u89C4\u5219</p></li></ul><p>MySQL\u91C7\u7528\u7C7B\u4F3C\u7EE7\u627F\u7684\u65B9\u5F0F\u5236\u5B9A\u5B57\u7B26\u96C6\u9ED8\u8BA4\u503C\uFF0C\u6BCF\u4E2A\u6570\u636E\u5E93\u6BCF\u5F20\u8868\u90FD\u6709\u81EA\u5DF1\u7684\u9ED8\u8BA4\u503C\uFF0C\u4ED6\u4EEC\u9010\u5C42\u7EE7\u627F\u3002\u5982\uFF1A\u67D0\u4E2A\u5E93\u4E2D\u6240\u6709\u8868\u7684\u9ED8\u8BA4\u5B57\u7B26\u96C6\u5C06\u662F\u8BE5\u6570\u636E\u5E93\u6240\u6307\u5B9A\u7684\u5B57\u7B26\u96C6\uFF08\u8FD9\u4E9B\u8868\u5728\u6CA1\u6709\u6307\u5B9A\u5B57\u7B26\u96C6\u7684\u60C5\u51B5\u4E0B\uFF0C\u624D\u4F1A\u91C7\u7528\u9ED8\u8BA4\u5B57\u7B26\u96C6\uFF09</p><h3 id="_1-1-\u6392\u5E8F\u89C4\u5219\u7684\u547D\u540D\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#_1-1-\u6392\u5E8F\u89C4\u5219\u7684\u547D\u540D\u89C4\u5219" aria-hidden="true">#</a> 1.1 \u6392\u5E8F\u89C4\u5219\u7684\u547D\u540D\u89C4\u5219</h3><p><code>\u5B57\u7B26\u96C6\u540D_</code>[<code>\u8BED\u8A00\u540D_</code>]<code>\u7C7B\u578B</code> \uFF08\u8BED\u8A00\u540D\u5E76\u975E\u4E00\u5B9A\u6709\u7684\uFF0C\u540E\u7F00\u4E3A <code>_bin</code> \u7684\u5C31\u6CA1\u6709\uFF09\uFF0C\u5E76\u4E14\u53EF\u901A\u8FC7\u540E\u7F00\u6765\u533A\u5206\u7C7B\u578B\uFF1A</p><ul><li><code>_ci</code> \uFF1A\u5927\u5C0F\u5199\u4E0D\u654F\u611F</li><li><code>_cs</code> \uFF1A\u5927\u5C0F\u5199\u654F\u611F</li><li><code>_bin</code> \uFF1A\u6807\u8BC6\u6BD4\u8F83\u662F\u57FA\u4E8E\u5B57\u7B26\u7F16\u7801\u7684\u503C\uFF0C\u800C\u4E0E\u8BED\u8A00\u65E0\u5173</li></ul><h2 id="_2-\u6307\u5B9A\u5B57\u7B26\u96C6" tabindex="-1"><a class="header-anchor" href="#_2-\u6307\u5B9A\u5B57\u7B26\u96C6" aria-hidden="true">#</a> 2. \u6307\u5B9A\u5B57\u7B26\u96C6</h2><p>\u6211\u4EEC\u5728\u547D\u4EE4\u884C\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6570\u636E\u5E93\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>CREATE DATABASE \u6570\u636E\u5E93\u540D;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6B64\u65F6<strong>\u4F1A\u4F7F\u7528\u9ED8\u8BA4</strong>\u7684\u5B57\u7B26\u96C6\u53CA\u9ED8\u8BA4\u6392\u5E8F\u89C4\u5219\u6765\u521B\u5EFA\u6570\u636E\u5E93\uFF0C\u800C\u8FD9\u4E2A\u9ED8\u8BA4\u503C\u53EF\u4EE5\u5728Mysql\u5B89\u88C5\u7684\u6839\u76EE\u5F55\u4E0B\u7684<code>my.ini</code> \uFF08\u6216\u8005 <code>my-defualt.ini</code> \uFF09\u4E2D\u8FDB\u884C\u914D\u7F6E\uFF0C\u4F8B\u5982\u90FD\u8BBE\u4E3A <code>utf8</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[mysqld]\n# \u670D\u52A1\u7AEF\u4F7F\u7528\u7684\u5B57\u7B26\u96C6\u9ED8\u8BA4\u4E3AUTF8\ncharacter-set-server=utf8\n[mysql]\n# \u8BBE\u7F6Emysql\u5BA2\u6237\u7AEF\u9ED8\u8BA4\u5B57\u7B26\u96C6(\u53EF\u80FD\u4F1A\u6709\u95EE\u9898\uFF0C\u53EA\u9700\u8BBE\u7F6E\u4E0A\u9762\u7684)\ndefault-character-set=utf8\n[client]\ndefault-character-set=utf8\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u8981\u5728\u521B\u5EFA\u6570\u636E\u5E93\u65F6\u6307\u5B9A\u5B57\u7B26\u96C6\u548C\u6392\u5E8F\u89C4\u5219</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>CREATE DATABASE \u6570\u636E\u5E93\u540D CHARACTER SET &#39;\u5B57\u7B26\u96C6\uFF0C\u5982\uFF1Autf8&#39; COLLATE &#39;\u6392\u5E8F\u89C4\u5219\uFF0C\u5982\uFF1Autf8_bin&#39;;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-\u67E5\u8BE2\u5B57\u7B26\u96C6\u548C\u6392\u5E8F\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#_3-\u67E5\u8BE2\u5B57\u7B26\u96C6\u548C\u6392\u5E8F\u89C4\u5219" aria-hidden="true">#</a> 3. \u67E5\u8BE2\u5B57\u7B26\u96C6\u548C\u6392\u5E8F\u89C4\u5219</h2><p>\u5BF9\u4E8E\u5DF2\u521B\u5EFA\u7684\u6570\u636E\u5E93\u7ED3\u6784\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6307\u4EE4\u6765\u67E5\u8BE2\u5176\u4F7F\u7528\u7684\u5B57\u7B26\u96C6\u4FE1\u606F\u3002</p><h3 id="_3-1-\u67E5\u8BE2\u5404\u7EA7\u7684\u5B57\u7B26\u96C6" tabindex="-1"><a class="header-anchor" href="#_3-1-\u67E5\u8BE2\u5404\u7EA7\u7684\u5B57\u7B26\u96C6" aria-hidden="true">#</a> 3.1 \u67E5\u8BE2\u5404\u7EA7\u7684\u5B57\u7B26\u96C6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql&gt; SHOW VARIABLES LIKE &#39;%char%&#39;;                                                                                                              +--------------------------+----------------------------------+\n| Variable_name            | Value                            |\n+--------------------------+----------------------------------+\n| character_set_client     | utf8                             |\n| character_set_connection | utf8                             |\n| character_set_database   | utf8                             |\n| character_set_filesystem | binary                           |\n| character_set_results    | utf8                             |\n| character_set_server     | utf8                             |\n| character_set_system     | utf8                             |\n| character_sets_dir       | /usr/local/mysql/share/charsets/ |\n+--------------------------+----------------------------------+\n8 rows in set (0.00 sec)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-\u67E5\u8BE2\u5BF9\u5E94\u7684\u6392\u5E8F\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#_3-2-\u67E5\u8BE2\u5BF9\u5E94\u7684\u6392\u5E8F\u89C4\u5219" aria-hidden="true">#</a> 3.2 \u67E5\u8BE2\u5BF9\u5E94\u7684\u6392\u5E8F\u89C4\u5219</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql&gt; SHOW VARIABLES LIKE &#39;%collation_%&#39;;\n+----------------------+-----------------+\n| Variable_name        | Value           |\n+----------------------+-----------------+\n| collation_connection | utf8_general_ci |\n| collation_database   | utf8_general_ci |\n| collation_server     | utf8_general_ci |\n+----------------------+-----------------+\n3 rows in set (0.00 sec)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u4FEE\u6539\u5B57\u7B26\u96C6\u548C\u6392\u5E8F\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#_4-\u4FEE\u6539\u5B57\u7B26\u96C6\u548C\u6392\u5E8F\u89C4\u5219" aria-hidden="true">#</a> 4. \u4FEE\u6539\u5B57\u7B26\u96C6\u548C\u6392\u5E8F\u89C4\u5219</h2><h3 id="_4-1-\u672A\u521B\u5EFA\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#_4-1-\u672A\u521B\u5EFA\u6570\u636E\u5E93" aria-hidden="true">#</a> 4.1 \u672A\u521B\u5EFA\u6570\u636E\u5E93</h3><p>\u53EF\u4EE5\u901A\u8FC7\u5728\u521B\u5EFA\u547D\u4EE4\u4E2D\u6307\u5B9A\u5B57\u7B26\u96C6\u7684\u65B9\u5F0F\u5B9E\u73B0\u4FEE\u6539\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539MySQL \u5B89\u88C5\u6839\u76EE\u5F55\u4E0B\u7684 <code>my.ini</code> \uFF08\u6216\u8005 <code>my-defualt.ini</code> \uFF09\u4E2D\u7684\u914D\u7F6E\u5B9E\u73B0\u4FEE\u6539\u3002</p><h3 id="_4-2-\u5DF2\u521B\u5EFA\u6570\u636E\u5E93\u65E0\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_4-2-\u5DF2\u521B\u5EFA\u6570\u636E\u5E93\u65E0\u6570\u636E" aria-hidden="true">#</a> 4.2 \u5DF2\u521B\u5EFA\u6570\u636E\u5E93\u65E0\u6570\u636E</h3><p>\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u6307\u4EE4\u8FDB\u884C\u4FEE\u6539\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ALTER DATABASE \u6570\u636E\u5E93\u540D CHARACTER SET &#39;\u5B57\u7B26\u96C6\uFF0C\u5982\uFF1Autf8&#39; COLLATE &#39;\u6392\u5E8F\u89C4\u5219\uFF0C\u5982\uFF1Autf8_bin&#39;;\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-\u5DF2\u521B\u5EFA\u4E14\u6709\u6570\u636E\u7684\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#_4-3-\u5DF2\u521B\u5EFA\u4E14\u6709\u6570\u636E\u7684\u6570\u636E\u5E93" aria-hidden="true">#</a> 4.3 \u5DF2\u521B\u5EFA\u4E14\u6709\u6570\u636E\u7684\u6570\u636E\u5E93</h3><p>\u76F4\u63A5\u4FEE\u6539\u7684\u8BDD\u53EA\u4F1A\u5BF9\u65B0\u521B\u5EFA\u7684\u8868\u6216\u8005\u8BB0\u5F55\u6709\u6548\uFF0C\u5DF2\u5B58\u5165\u7684\u6570\u636E\u4E0D\u4F1A\u88AB\u4FEE\u6539\u3002\u5047\u5982\u9700\u8981\u4FEE\u6539\u6240\u6709\u6570\u636E\uFF0C\u9700\u8981\u5C06\u539F\u8868\u5BFC\u51FA\uFF0C\u521B\u5EFA\u65B0\u8868\u518D\u5C06\u65E7\u8868\u6570\u636E\u8FC1\u79FB\u8FC7\u6765\u3002</p>', 28);
const _hoisted_29 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_29);
}
var _________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "\u5B57\u7B26\u96C6\u4E0E\u6392\u5E8F\u89C4\u5219.html.vue"]]);
export { _________html as default };
