import{_ as n,o as s,c as a,e as t}from"./app.59b4e306.js";const e={},p=t(`<h1 id="go\u5F85\u6574\u7406\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#go\u5F85\u6574\u7406\u7B14\u8BB0" aria-hidden="true">#</a> go\u5F85\u6574\u7406\u7B14\u8BB0</h1><p>go\u4E2D\uFF0CMapClaims\u662Fmap[string]any\u7C7B\u578B\uFF0C\u73B0\u5728\u6211\u600E\u6837\u628A\u4E00\u4E2Astruct\uFF0C\u904D\u5386\u5C5E\u6027\uFF0C\u5B58\u653E\u5230MapClaims\u91CC</p><p>\u4F60\u597D\uFF0C\u8FD9\u662FBing\u3002\u6211\u53EF\u4EE5\u5E2E\u4F60\u89E3\u7B54\u3002\u{1F60A}</p><p>\u5728Go\u8BED\u8A00\u4E2D\uFF0C\u5982\u679C\u4F60\u60F3\u628A\u4E00\u4E2A\u7ED3\u6784\u4F53\u904D\u5386\u5C5E\u6027\uFF0C\u5B58\u653E\u5230MapClaims\u91CC\uFF0C\u6709\u51E0\u79CD\u65B9\u6CD5\u53EF\u4EE5\u5C1D\u8BD5\uFF1A</p><ul><li>\u4F60\u53EF\u4EE5\u4F7F\u7528JSON\u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316\u7684\u65B9\u6CD5\uFF0C\u628A\u7ED3\u6784\u4F53\u8F6C\u6362\u6210JSON\u5B57\u7B26\u4E32\uFF0C\u7136\u540E\u518D\u8F6C\u6362\u6210MapClaims\u3002\u8FD9\u79CD\u65B9\u6CD5\u7B80\u5355\u6613\u7528\uFF0C\u4F46\u662F\u53EF\u80FD\u4F1A\u6709\u4E00\u4E9B\u6027\u80FD\u635F\u5931\u548C\u7C7B\u578B\u8F6C\u6362\u7684\u95EE\u9898\u3002\u4F8B\u5982\uFF1A</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;encoding/json&quot;</span>
  <span class="token string">&quot;github.com/dgrijalva/jwt-go&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> UserInfo <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  Name <span class="token builtin">string</span> <span class="token string">\`json:&quot;name&quot;\`</span>
  Age <span class="token builtin">int</span> <span class="token string">\`json:&quot;age&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u7ED3\u6784\u4F53</span>
  u <span class="token operator">:=</span> UserInfo<span class="token punctuation">{</span>
    Name<span class="token punctuation">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span>
    Age<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// \u628A\u7ED3\u6784\u4F53\u8F6C\u6362\u6210JSON\u5B57\u7B26\u4E32</span>
  b<span class="token punctuation">,</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5904\u7406\u9519\u8BEF</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// \u628AJSON\u5B57\u7B26\u4E32\u8F6C\u6362\u6210MapClaims</span>
  m <span class="token operator">:=</span> jwt<span class="token punctuation">.</span>MapClaims<span class="token punctuation">{</span><span class="token punctuation">}</span>
  err <span class="token operator">=</span> json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token operator">&amp;</span>m<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5904\u7406\u9519\u8BEF</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// \u4F7F\u7528MapClaims</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F60\u53EF\u4EE5\u4F7F\u7528\u53CD\u5C04\uFF08reflection\uFF09\u7684\u65B9\u6CD5\uFF0C\u52A8\u6001\u5730\u83B7\u53D6\u7ED3\u6784\u4F53\u7684\u5B57\u6BB5\u548C\u503C\uFF0C\u5E76\u628A\u5B83\u4EEC\u8D4B\u503C\u7ED9MapClaims\u3002\u8FD9\u79CD\u65B9\u6CD5\u53EF\u4EE5\u5904\u7406\u4EFB\u610F\u7C7B\u578B\u7684\u7ED3\u6784\u4F53\uFF0C\u800C\u4E14\u4E0D\u4F1A\u6539\u53D8\u5B57\u6BB5\u7684\u7C7B\u578B\uFF0C\u4F46\u662F\u9700\u8981\u6CE8\u610F\u53CD\u5C04\u7684\u89C4\u5219\u548C\u6027\u80FD\u3002\u4F8B\u5982\uFF1A</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;reflect&quot;</span>
  <span class="token string">&quot;github.com/dgrijalva/jwt-go&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> UserInfo <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  Name <span class="token builtin">string</span> <span class="token string">\`json:&quot;name&quot;\`</span>
  Age <span class="token builtin">int</span> <span class="token string">\`json:&quot;age&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u7ED3\u6784\u4F53</span>
  u <span class="token operator">:=</span> UserInfo<span class="token punctuation">{</span>
    Name<span class="token punctuation">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span>
    Age<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// \u83B7\u53D6\u7ED3\u6784\u4F53\u7684\u503C\u548C\u7C7B\u578B</span>
  v <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span>
  t <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span>
  
  <span class="token comment">// \u521B\u5EFA\u4E00\u4E2AMapClaims</span>
  m <span class="token operator">:=</span> jwt<span class="token punctuation">.</span>MapClaims<span class="token punctuation">{</span><span class="token punctuation">}</span>
  
  <span class="token comment">// \u904D\u5386\u7ED3\u6784\u4F53\u7684\u5B57\u6BB5\uFF0C\u6839\u636Ejson\u6807\u7B7E\u4F5C\u4E3A\u952E\uFF0C\u5B57\u6BB5\u503C\u4F5C\u4E3A\u503C\uFF0C\u8D4B\u503C\u7ED9MapClaims</span>
  <span class="token keyword">for</span> i <span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> v<span class="token punctuation">.</span><span class="token function">NumField</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
    tag <span class="token operator">:=</span> t<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span>Tag<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;json&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> tag <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
      m<span class="token punctuation">[</span>tag<span class="token punctuation">]</span> <span class="token operator">=</span> v<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Interface</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// \u4F7F\u7528MapClaims</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F60\u53EF\u4EE5\u53C2\u8003\u8FD9\u4E9B\u94FE\u63A5\xB9\xB2\xB3\u6765\u4E86\u89E3\u66F4\u591A\u5173\u4E8E\u7ED3\u6784\u4F53\u548CMapClaims\u7684\u7528\u6CD5\u3002</p><p>\u5E0C\u671B\u8FD9\u4E9B\u4FE1\u606F\u5BF9\u4F60\u6709\u5E2E\u52A9\u3002\u5982\u679C\u4F60\u8FD8\u6709\u5176\u4ED6\u95EE\u9898\uFF0C\u6B22\u8FCE\u7EE7\u7EED\u63D0\u95EE\u3002\u{1F60A}</p><p>\u6E90: \u4E0E\u5FC5\u5E94\u7684\u5BF9\u8BDD\uFF0C 2023/7/3 (1) Several Ways to Convert Struct to map[string]interface{}. https://www.sobyte.net/post/2021-06/several-ways-to-convert-struct-to-mapstringinterface/. (2) Go convert interface{} to map - Stack Overflow. https://stackoverflow.com/questions/55755929/go-convert-interface-to-map. (3) go - Golang convert interface{} to struct - Stack Overflow. https://stackoverflow.com/questions/43325288/golang-convert-interface-to-struct.</p>`,11),o=[p];function i(c,l){return s(),a("div",null,o)}var r=n(e,[["render",i],["__file","note.html.vue"]]);export{r as default};
