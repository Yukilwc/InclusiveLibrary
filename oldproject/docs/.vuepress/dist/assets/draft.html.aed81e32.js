import{_ as r,r as l,o as n,c as o,a as e,b as t,d as a,e as c}from"./app.59b4e306.js";const s={},h=e("h1",{id:"go-zero\u8349\u7A3F",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#go-zero\u8349\u7A3F","aria-hidden":"true"},"#"),a(" go zero\u8349\u7A3F")],-1),d=e("p",null,"\u5355\u4F53\u670D\u52A1\u4E0E\u5FAE\u670D\u52A1\u6587\u4EF6\u5C42\u6B21\u533A\u522B\uFF1F",-1),p=a("\u8003\u8651\u8DDF\u7740\u8FD9\u4E2A\u505A\u4E00\u8F6E\uFF1F "),u={href:"https://www.cnblogs.com/kevinwan/p/15821971.html",target:"_blank",rel:"noopener noreferrer"},_=a("Link"),f=c('<h2 id="api\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#api\u8BED\u6CD5" aria-hidden="true">#</a> api\u8BED\u6CD5</h2><p>\u4E3B\u8981\u5206\u4E3A\uFF1A</p><ul><li>syntax\u8BED\u6CD5\u58F0\u660E</li><li>import\u8BED\u6CD5\u5757</li><li>info\u8BED\u6CD5\u5757 <ul><li>\u5305\u542B\u591A\u4E2Akey value\u7684\u8BED\u6CD5\u4F53\uFF0C\u662F\u5BF9\u4E8E\u4E00\u4E2Aapi\u670D\u52A1\u7684\u63CF\u8FF0</li><li>\u662F\u7FFB\u8BD1\u6210\u5176\u5B83\u8BED\u8A00\u65F6\uFF0C\u643A\u5E26\u7684meta\u5143\u7D20</li></ul></li><li>type\u8BED\u6CD5\u5757 <ul><li>\u5B9A\u4E49\u4E00\u4E9Brequest\u548Cresponse\u4F7F\u7528\u5230\u7684\u7C7B\u578B</li><li>\u517C\u5BB9go\u7ED3\u6784\u4F53\u5B9A\u4E49\u8BED\u6CD5\uFF0C\u4EE5\u53CAtag</li></ul></li><li>service\u8BED\u6CD5\u5757 <ul><li>\u7528\u4E8E\u5B9A\u4E49api\u670D\u52A1</li><li>\u4E3B\u8981\u662F\u9700\u8981\u58F0\u660E handler\uFF0Crequest\uFF0Cresponse</li></ul></li></ul><h2 id="\u6587\u4EF6\u5C42\u6B21\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u5C42\u6B21\u89E3\u6790" aria-hidden="true">#</a> \u6587\u4EF6\u5C42\u6B21\u89E3\u6790</h2><h3 id="rpc\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#rpc\u76EE\u5F55" aria-hidden="true">#</a> rpc\u76EE\u5F55</h3><h2 id="\u9700\u8981\u4FEE\u6539\u7684" tabindex="-1"><a class="header-anchor" href="#\u9700\u8981\u4FEE\u6539\u7684" aria-hidden="true">#</a> \u9700\u8981\u4FEE\u6539\u7684</h2><h3 id="rpc" tabindex="-1"><a class="header-anchor" href="#rpc" aria-hidden="true">#</a> rpc</h3><ul><li>\u670D\u52A1\u4E2D\u7684\u914D\u7F6E\u6587\u4EF6\uFF1A etc/xx.json,internal/config/config.go</li><li>\u670D\u52A1\u4E2D\u4E1A\u52A1\u903B\u8F91\u7F16\u5199\uFF1A internal/logic/xxlogic.go</li><li>\u670D\u52A1\u4E2D\u8D44\u6E90\u4E0A\u4E0B\u6587\u7F16\u5199\uFF1A internal/svc/servicecontext.go</li></ul><p>\u5934\u90E8\u5305\u542BDO NOT EDIT\u7684\u4F1A\u88AB\u5F3A\u5236\u8986\u76D6\uFF0C\u4E0D\u8981\u4FEE\u6539\u3002</p><h2 id="\u4E00\u4E9B\u7406\u8BBA" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E9B\u7406\u8BBA" aria-hidden="true">#</a> \u4E00\u4E9B\u7406\u8BBA</h2><p>\u5982\u679C\u6784\u9020\u5355\u4F53\u670D\u52A1\uFF0C\u5219\u53EA\u9700\u8981\u4F7F\u7528api\u6307\u4EE4\uFF0C\u628Aapi\u7F51\u5173\u5C42\u4F5C\u4E3A\u670D\u52A1\u5373\u53EF\u3002</p><p>\u5982\u679C\u6784\u9020\u5FAE\u670D\u52A1\uFF0C\u5219api\u6307\u4EE4\u751F\u6210\u7F51\u5173\u5C42\uFF0Crpc\u6307\u4EE4\u751F\u6210\u8FDC\u7A0B\u670D\u52A1\u5C42\uFF0C api\u7F51\u5173\u5C42\u4E2D\uFF0C\u521B\u5EFAuserclient.go\uFF0C\u5B58\u653Erpc\u670D\u52A1\u5BF9\u8C61\uFF0C\u63D0\u4F9B\u8C03\u7528\u3002</p><p>\u4FEE\u6539api\u6587\u4EF6\u540E\uFF0C\u4F8B\u5982\u4FEE\u6539\u4E86\u8DEF\u7531\u8DEF\u5F84\uFF0C\u53EF\u4EE5\u53D1\u73B0\uFF0C\u518D\u6B21\u751F\u6210\u4F1A\u8986\u76D6\u53EA\u8BFB\u6587\u4EF6\uFF0C\u540C\u65F6\u751F\u6210\u65B0\u7684\u6587\u4EF6\uFF0C\u5E76\u4E0D\u4F1A\u8986\u76D6logic\u6587\u4EF6\u3002</p><p>\u4F46\u662F\u5982\u679C\u4FEE\u6539\u4E86\u7C7B\u578B\u540D\u5B57\uFF0C\u4F8B\u5982\u628A\u8FD4\u56DE\u7C7B\u578B\u4ECECommonResp\u4FEE\u6539\u4E3AMsgResp\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u624B\u52A8\u8C03\u6574logic\u903B\u8F91\u4E86\u3002</p>',14);function x(g,m){const i=l("ExternalLinkIcon");return n(),o("div",null,[h,d,e("p",null,[p,e("a",u,[_,t(i)])]),f])}var v=r(s,[["render",x],["__file","draft.html.vue"]]);export{v as default};