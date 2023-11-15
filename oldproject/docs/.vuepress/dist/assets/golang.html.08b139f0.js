import{_ as n,o as i,c as e,e as l}from"./app.59b4e306.js";const s={},d=l(`<h1 id="golang" tabindex="-1"><a class="header-anchor" href="#golang" aria-hidden="true">#</a> Golang</h1><div class="language-PlantUML ext-PlantUML line-numbers-mode"><pre class="language-PlantUML"><code>@startmindmap
* \u6587\u6863\u7B14\u8BB0

++ \u63A5\u53E3
+++ \u57FA\u7840\u6982\u5FF5
****:\u662F\u4E00\u7EC4\u65B9\u6CD5\u96C6,
\u7C7B\u578B\u5B9E\u73B0\u63A5\u53E3\u662F\u9690\u5F0F\u7684\uFF0C
\u53EA\u8981\u5B9E\u73B0\u4E86\u65B9\u6CD5\u96C6\u5C31\u662F\u5B9E\u73B0\u4E86\u6B64\u63A5\u53E3;

++ \u7A7A\u63A5\u53E3

++ \u7C7B\u578B\u8F6C\u6362
+++ \u5206\u7C7B
++++ \u65AD\u8A00
+++++ \u4EE3\u7801
++++++ s,ok = x.(T);
+++++ \u89E3\u91CA
******:x\u4E3A\u8981\u8F6C\u6362\u7684\u53D8\u91CF\uFF0CT\u4E3A\u76EE\u6807\u7C7B\u578B
x\u4E0D\u662Fnil\uFF0C\u4E14x\u53EF\u8F6C\u6362\u4E3AT\u7C7B\u578B\uFF0C\u5219\u65AD\u8A00\u6210\u529F;
++++ \u663E\u793A
***** \u4EE3\u7801
****** T(x)
***** \u4E3E\u4F8B
******:int64(22)
[]byte(&#39;ssss&#39;)
type A int
A(2);
++++ \u5F3A\u5236
+++++ \u4E0D\u5E38\u89C1\uFF0C\u4E3B\u8981\u7528\u4E8Eunsafe
++++ \u9690\u5F0F

++ \u53CD\u5C04
+++ \u610F\u4E49
****:\u662F\u5143\u7F16\u7A0B\u7684\u4E00\u79CD\u5F62\u5F0F,
\u80FD\u5728\u8FD0\u884C\u65F6\u68C0\u67E5\u7C7B\u578B\u4E0E\u53D8\u91CF.
\u9664\u975E\u5FC5\u8981\uFF0C\u8BF7\u907F\u514D\u6216\u5C0F\u5FC3\u4F7F\u7528;
+++ \u57FA\u7840\u64CD\u4F5C
++++ \u5C55\u793A\u4FE1\u606F
+++++ \u503C
++++++ reflect.ValueOf(x)
+++++ \u7C7B\u578B
++++++ reflect.TypeOf(x)

++++ \u8BBE\u7F6E\u4FE1\u606F
+++++ \u68C0\u67E5\u662F\u5426\u53EF\u8BBE\u7F6E
++++++ v.CanSet()
+++++ \u8F6C\u6362\u4E3A\u53EF\u8BBE\u7F6E
++++++ v.Elem()
+++++ \u8FDB\u884C\u8BBE\u7F6E
++++++ v.SetFloat(3.1415)

** \u52A8\u6001\u7C7B\u578B

@endmindmap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function a(r,c){return i(),e("div",null,v)}var u=n(s,[["render",a],["__file","golang.html.vue"]]);export{u as default};
