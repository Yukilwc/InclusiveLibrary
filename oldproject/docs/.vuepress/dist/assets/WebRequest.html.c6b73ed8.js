import{_ as a,r,o as s,c as d,a as e,b as t,e as i,d as o}from"./app.59b4e306.js";const l={},c=i(`<h1 id="web\u7F51\u7EDC\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#web\u7F51\u7EDC\u8BF7\u6C42" aria-hidden="true">#</a> Web\u7F51\u7EDC\u8BF7\u6C42</h1><h2 id="post-request-content-type" tabindex="-1"><a class="header-anchor" href="#post-request-content-type" aria-hidden="true">#</a> post request Content-Type</h2><p>\u5728request\u4E2D\uFF0C\u7528\u6765\u6307\u5B9Abody\u4E2D\u5185\u5BB9\u7684\u7F16\u7801\u683C\u5F0F</p><p><strong>application/json;charset=UTF-8</strong></p><p><strong>application/x-www-form-urlencoded</strong></p><p>\u662F\u7ECF\u8FC7url\u7F16\u7801\u540E\u7684key value,\u4F7F\u7528<code>a=1&amp;b=2</code>\u7684\u683C\u5F0F<br> \u5176\u4E2D\u7684\u5B57\u7B26\u4F1A\u7ECF\u8FC7<code>encodeURIComponent</code></p><p><strong>multipart/form-data; boundary={boundary string}</strong></p><p>\u662F\u4F7F\u7528boundary\u5206\u5272\u5F00\u7684\u6570\u636E\u5757,\u5982\u4E0B\u683C\u5F0F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>POST /test HTTP/1.1
Host: foo.example
Content-Type: multipart/form-data;boundary=&quot;boundary&quot;

--boundary
Content-Disposition: form-data; name=&quot;field1&quot;

value1
--boundary
Content-Disposition: form-data; name=&quot;field2&quot;; filename=&quot;example.txt&quot;

value2
--boundary--
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>text/plain</strong></p><p><strong>\u53C2\u8003</strong></p>`,11),u={href:"https://dev.to/sidthesloth92/understanding-html-form-encoding-url-encoded-and-multipart-forms-3lpa",target:"_blank",rel:"noopener noreferrer"},p=o("\u53C2\u8003"),m={href:"https://dev.to/getd/x-www-form-urlencoded-or-form-data-explained-in-2-mins-5hk6",target:"_blank",rel:"noopener noreferrer"},v=o("Link");function b(h,f){const n=r("ExternalLinkIcon");return s(),d("div",null,[c,e("p",null,[e("a",u,[p,t(n)]),e("a",m,[v,t(n)])])])}var g=a(l,[["render",b],["__file","WebRequest.html.vue"]]);export{g as default};
