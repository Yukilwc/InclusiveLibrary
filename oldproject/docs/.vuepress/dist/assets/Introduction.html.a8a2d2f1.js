import{_ as e,o as t,c as a,e as i}from"./app.59b4e306.js";const d={},r=i('<h1 id="\u603B\u89C8" tabindex="-1"><a class="header-anchor" href="#\u603B\u89C8" aria-hidden="true">#</a> \u603B\u89C8</h1><h2 id="widget" tabindex="-1"><a class="header-anchor" href="#widget" aria-hidden="true">#</a> Widget</h2><p>Widget\u5BF9\u8C61\u662F\u6682\u65F6\u7684\uFF0C\u4F1A\u88AB\u9500\u6BC1\u7684\uFF0C\u5B83\u4EC5\u4EC5\u662FState\u5B9E\u4F8B\u7684\u5C55\u793A\uFF0C\u800CState\u5B9E\u4F8B\u624D\u662F\u6301\u4E45\u5316\u7684\u6570\u636E\u5C42\u3002\u8FD9\u6709\u70B9\u7C7B\u4F3Cdom\u548C\u54CD\u5E94\u5F0Fdata\u7684\u5173\u7CFB?</p><h3 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> Layout</h3><h3 id="navigator" tabindex="-1"><a class="header-anchor" href="#navigator" aria-hidden="true">#</a> Navigator</h3><h3 id="gesture" tabindex="-1"><a class="header-anchor" href="#gesture" aria-hidden="true">#</a> Gesture</h3><h2 id="\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u539F\u7406" aria-hidden="true">#</a> \u539F\u7406</h2><p>\u6811\u578B\u7ED3\u6784\uFF0C\u4FE1\u606F\u4F20\u9012\uFF0C\u4EA4\u4E92\u65B9\u6CD5\u9760\u56DE\u8C03\u53C2\u6570\uFF0C\u800C\u72B6\u6001\u9760\u666E\u901A\u53C2\u6570\u5411\u4E0B\u4F20\u9012<br> \u901A\u8FC7setState\u7684\u8C03\u7528\uFF0C\u6807\u8BB0\u5F53\u524Dwidget\u4E3Adirty\uFF0C\u4E0B\u6B21\u6E32\u67D3\u65F6\u8FDB\u884Crebuilt</p><p>\u5217\u8868\u5FAA\u73AF\u7684widget\uFF0C\u4E5F\u662F\u9700\u8981\u663E\u793A\u7684\u6307\u5B9Akey\u7684</p><p>\u8BBE\u8BA1\u7406\u5FF5\uFF0C\u54F2\u5B66:<br> \u4ECE\u4E0A\u5230\u4E0B\u8FD8\u662F\u4ECE\u4E0B\u5230\u4E0A<br> \u5982\u4F55\u8BBE\u8BA1state\u548Cstateless<br> \u5982\u4F55\u5224\u65AD\u662F\u5426\u9700\u8981const constructor : \u662F\u5426\u6709\u9700\u8981\uFF0C\u5728\u6784\u9020\u540E\uFF0C\u900F\u8FC7\u5185\u53BB\u4FEE\u6539\u5185\u90E8\u5C5E\u6027? \u6570\u636E\u5C42\u548C\u89C6\u56FE\u5C42\u63A7\u5236\uFF0C\u662F\u5426\u5206\u79BB\u4E3A\u4E0D\u540Cwidget</p><p>\u5B9E\u8DF5\u7684\u8303\u5F0F\u7ECF\u9A8C:</p><ul><li>constant constructor,\u4EC5\u5F53widget\u4E0E\u5176\u5B50widget\uFF0C\u4E0D\u5B58\u5728\u88AB\u4FB5\u5165\u63A7\u5236\u4FEE\u6539\u5C5E\u6027\u65F6\uFF0C\u624D\u53EF\u4EE5\u8BBE\u5B9A\u3002</li><li>constant constructor,\u4E00\u822C\u51FA\u73B0\u4E8E\u8F83\u4E3A\u539F\u5B50\u7684\uFF0C\u6CA1\u6709\u4EA4\u4E92\u7684\uFF0C\u7EAF\u5C55\u793A\u7C7B\u7684\u5E95\u5C42widget\u4E2D.\u800Cstateless widget\u5219\u53EF\u4EE5\u4EFB\u610F\u51FA\u73B0\u5728\u9AD8\u5C42\u4E2D.</li><li>\u5224\u65AD\u4F7F\u7528stateless\u8FD8\u662Fstateful,\u4E00\u822C\u662F\u770B\u5143\u7D20\u662F\u5426\u5B58\u5728\uFF0C\u521D\u59CB\u5316\u4E4B\u540E\uFF0C\u53EF\u53D8\u5316\u7684\u5C5E\u6027\u3002\u4F8B\u5982\u5217\u8868\u7684\u6570\u7EC4\uFF0C\u5217\u8868\u9879\u7684\u5220\u9664\u72B6\u6001\u3002</li><li>\u7F16\u5199\u9875\u9762\u6216\u8005\u6A21\u5757\uFF0C\u4F9D\u65E7\u662F\u81EA\u4E0A\u800C\u4E0B\uFF0C\u4F46\u662F\u9700\u8981\u9010\u5C42\u642D\u5EFA\u597D\u57FA\u7840\u8BBE\u65BD\uFF0C\u4EE5\u53CA\u5224\u5B9A\u4F7F\u7528stateless\u8FD8\u662Fstateful\uFF0C\u624D\u80FD\u66F4\u597D\u7684\u8C03\u8BD5\u548C\u540E\u7EED\u5BF9\u63A5\u3002</li><li>\u6784\u5EFA\u5C42\u7EA7\u65F6\uFF0C\u8FD8\u9700\u8981\u6784\u5EFAmodel\u5C42\uFF0C\u4F5C\u4E3A\u6570\u636E\u6765\u6E90\uFF0C\u586B\u5145\u5BF9\u5E94\u4F4D\u7F6E\u67E5\u770B\u6548\u679C\u3002\u8BE5model\u5C42\u540E\u7EED\u4F1A\u6362\u4E3A\u771F\u6B63\u7684\u5B9E\u4F53\u7C7B\u3002</li><li>\u6700\u5F00\u59CB\u4E0D\u80FD\u8FC7\u4E8E\u4F9D\u8D56IDE\u7684\u80FD\u529B\uFF0C\u800C\u662F\u624B\u6253\uFF0C\u8FD9\u5BF9\u4E8E\u5176\u5B83\u8BED\u8A00\u5B66\u4E60\u4E5F\u662F\u9002\u7528\u7684\uFF0C\u8FC7\u65E9\u501F\u52A9IDE\u6784\u5EFA\u5BB9\u6613\u8BA9\u81EA\u5DF1\u4E0D\u77E5\u5176\u6240\u4EE5\u7136.</li><li>\u5982\u679C\u4E00\u4E2Aclass\uFF0C\u5176\u5185\u90E8\u5C5E\u6027\uFF0C\u5168\u90FD\u662Ffinal\uFF0C\u90A3\u4E48\u5219\u53EF\u4EE5\u8BBE\u7F6E\u4E3Aconst\u3002\u5982\u679C\u5185\u90E8\u662F\u53EF\u53D8\u5316\u53EF\u64CD\u4F5C\u7684\u5C5E\u6027\uFF0C\u5219\u4E0D\u53EF\u8BBE\u7F6Econst\u3002</li><li>\u7531\u4E8EStatefulWidget\u7684\u53D8\u5316\u5C5E\u6027\u96C6\u4E2D\u4E8EState\u4E2D\uFF0C\u56E0\u6B64StatefulWidget\u5927\u6982\u7387\u662F\u53EF\u4EE5\u8003\u8651\u6DFB\u52A0const\u7684</li><li>\u4E0D\u53EF\u8F7B\u6613\u5728build\u4E2D\u8FDB\u884C\u5C5E\u6027\u7684\u521D\u59CB\u5316\uFF0C\u4F1A\u751F\u6210\u5927\u91CF\u6CC4\u6F0F\uFF0C\u56E0\u4E3Abuild\u662F\u9AD8\u6982\u7387\u5237\u65B0\u7684\u3002build\u9664\u4E86\u8FD4\u56DEwidget\uFF0C\u7EDD\u5BF9\u4E0D\u8981\u5199\u4EFB\u4F55\u4E1C\u897F.</li></ul><h3 id="widget\u4E4B\u95F4\u7684\u5C5E\u6027\u4F20\u9012\u4E0E\u65B9\u6CD5\u8C03\u7528-\u4E8B\u4EF6\u89E6\u53D1\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#widget\u4E4B\u95F4\u7684\u5C5E\u6027\u4F20\u9012\u4E0E\u65B9\u6CD5\u8C03\u7528-\u4E8B\u4EF6\u89E6\u53D1\u673A\u5236" aria-hidden="true">#</a> widget\u4E4B\u95F4\u7684\u5C5E\u6027\u4F20\u9012\u4E0E\u65B9\u6CD5\u8C03\u7528\uFF0C\u4E8B\u4EF6\u89E6\u53D1\u673A\u5236</h3>',13),s=[r];function l(n,h){return t(),a("div",null,s)}var c=e(d,[["render",l],["__file","Introduction.html.vue"]]);export{c as default};