import{_ as a,r as t,o,c as i,a as e,b as l,d as s,e as c}from"./app.59b4e306.js";var r="/InclusiveLibrary/assets/\u5FAE\u4FE1\u622A\u56FE_20220428004112.4bc13cb6.png";const p={},d=e("h1",{id:"\u8F6F\u786C\u4EF6\u76F8\u5173\u95EE\u9898",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u8F6F\u786C\u4EF6\u76F8\u5173\u95EE\u9898","aria-hidden":"true"},"#"),s(" \u8F6F\u786C\u4EF6\u76F8\u5173\u95EE\u9898")],-1),h=e("h2",{id:"\u8F6F\u4EF6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u8F6F\u4EF6","aria-hidden":"true"},"#"),s(" \u8F6F\u4EF6")],-1),u=e("p",null,"\u95EE\u9898\u63CF\u8FF0: \u53F0\u5F0F\u673A\u5929\u7EBF\u5E72\u6D89\u84DD\u7259\u9F20\u6807\u4FE1\u53F7\uFF0C\u5BFC\u81F4\u9F20\u6807\u79FB\u52A8\u51FA\u73B0\u4E0D\u7A33\u5B9A\u3002",-1),m=e("p",null,"\u89E3\u51B3\u65B9\u6848:",-1),_=e("p",null,"\u53C2\u8003\u8D44\u6599:",-1),v={href:"https://www.zhihu.com/question/21861177",target:"_blank",rel:"noopener noreferrer"},b=s("Link"),g=c('<p>\u95EE\u9898\u63CF\u8FF0: Windows Terminal\u8FD0\u884C\u811A\u672C\u62A5\u9519 <img src="'+r+`" alt="Link"></p><p>\u89E3\u51B3\u65B9\u6848:<br> \u4EE5\u7BA1\u7406\u5458\u8EAB\u4EFD\u6253\u5F00\uFF0C\u6267\u884C<code>get-executionpolicy</code>,\u6253\u5370\u7ED3\u679C\u662F<code>Restricted</code>,\u8868\u793A\u5141\u8BB8\u5355\u4E2A\u547D\u4EE4\uFF0C\u4F46\u662F\u4E0D\u5141\u8BB8\u811A\u672C\u3002<br> \u4E4B\u540E\uFF0C\u6267\u884C<code>set-executionpolicy remotesigned</code>,\u4FEE\u6539\u6267\u884C\u7B56\u7565\uFF0C\u5373\u53EF\u6267\u884C\u811A\u672C.</p><h3 id="\u547D\u4EE4\u884C\u5DE5\u5177\u4F7F\u7528vpn\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u884C\u5DE5\u5177\u4F7F\u7528vpn\u95EE\u9898" aria-hidden="true">#</a> \u547D\u4EE4\u884C\u5DE5\u5177\u4F7F\u7528VPN\u95EE\u9898</h3><p>\u4F7F\u7528powershell\u597D\u50CF\u76F4\u63A5\u53EF\u4EE5\u8FDE\u63A5\u7CFB\u7EDF\u4EE3\u7406\u7684vpn\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>curl https://www.google.com </code>\u6D4B\u8BD5<br> \u5982\u679C\u662F\u4F7F\u7528cmd\uFF0C\u9700\u8981\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\u5982\u4E0B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># cmd</span>
<span class="token builtin class-name">set</span> <span class="token assign-left variable">http_proxy</span><span class="token operator">=</span><span class="token string">&quot;http://localhost:10080&quot;</span>
<span class="token builtin class-name">set</span> <span class="token assign-left variable">https_proxy</span><span class="token operator">=</span><span class="token string">&quot;http://localhost:10080&quot;</span>
<span class="token comment"># powershell</span>
<span class="token variable">$env</span>:http_proxy<span class="token operator">=</span><span class="token string">&quot;http://localhost:10080&quot;</span>
<span class="token variable">$env</span>:https_proxy<span class="token operator">=</span><span class="token string">&quot;http://localhost:10080&quot;</span>
<span class="token comment"># \u6210\u529F\u540E\u9A8C\u8BC1,\u5B58\u5728\u8FD4\u56DE\u5373\u6210\u529F.\u8FD4\u56DE\u65E0\u6CD5\u8FDE\u63A5\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\u5373\u5931\u8D25</span>
<span class="token function">curl</span> www.google.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>new bing\u81EA\u52A8\u5207\u6362\u56FD\u5185</strong></p><p>edge\u6D4F\u89C8\u5668\u4F1A\u81EA\u52A8\u9501\u5B9A\u4E3A\u4E2D\u56FD\u5730\u533A\uFF0C\u5C31\u7B97\u6539\u6210\u7F8E\u56FD\u4E86\uFF0C\u4E5F\u4F1A\u81EA\u52A8\u6539\u56DE\u6765\u89E3\u51B3\u529E\u6CD5\uFF1A</p><ul><li>\u8F93\u5165 <code>edge://settings/searchEngines</code></li><li>\u70B9\u51FB\u6DFB\u52A0</li><li>\u8F93\u5165\u4FE1\u606F\uFF1A\u641C\u7D22\u5F15\u64CE\uFF1Abing</li><li>\u5FEB\u6377\u65B9\u5F0F\uFF1Awww.bing.com</li><li>\u4EE5 %s \u4EE3\u66FF\u67E5\u8BE2\u7684 URL: <code>https://www.bing.com/search?q=%s</code></li></ul><h2 id="\u786C\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u786C\u4EF6" aria-hidden="true">#</a> \u786C\u4EF6</h2>`,9);function k(w,f){const n=t("ExternalLinkIcon");return o(),i("div",null,[d,h,u,m,_,e("ul",null,[e("li",null,[e("a",v,[b,l(n)])])]),g])}var q=a(p,[["render",k],["__file","Software-Hardware-Questions.html.vue"]]);export{q as default};
