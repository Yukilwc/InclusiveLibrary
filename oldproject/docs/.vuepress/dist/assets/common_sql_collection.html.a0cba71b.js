import{_ as s,o as n,c as a,e}from"./app.59b4e306.js";const p={},t=e(`<h1 id="mysql\u5E38\u7528\u8BED\u53E5\u6536\u5F55" tabindex="-1"><a class="header-anchor" href="#mysql\u5E38\u7528\u8BED\u53E5\u6536\u5F55" aria-hidden="true">#</a> mysql\u5E38\u7528\u8BED\u53E5\u6536\u5F55</h1><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- \u4FEE\u6539\u5217\u957F\u5EA6\u7C7B\u578B</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token keyword">user</span> <span class="token keyword">MODIFY</span> <span class="token keyword">COLUMN</span> password <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- \u81EA\u52A8\u63D2\u5165\u5F53\u524D\u65F6\u95F4</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">user</span> <span class="token punctuation">(</span>
  id <span class="token keyword">int</span><span class="token punctuation">,</span>
  name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  password <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  create_at <span class="token keyword">timestamp</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CURRENT_TIMESTAMP</span>
  update_at <span class="token keyword">timestamp</span> <span class="token boolean">null</span> <span class="token keyword">default</span> <span class="token keyword">current_timestamp</span> <span class="token keyword">on</span> <span class="token keyword">update</span> <span class="token keyword">current_timestamp</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- \u628A\u5B57\u6BB5\u4FEE\u6539\u4E3A\u9ED8\u8BA4\u521B\u5EFA\u65F6\u95F4</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token keyword">user</span> <span class="token keyword">MODIFY</span> <span class="token keyword">COLUMN</span> create_at <span class="token keyword">timestamp</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CURRENT_TIMESTAMP</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- \u805A\u5408\u5B57\u7B26\u4E32</span>
<span class="token keyword">SELECT</span> <span class="token keyword">user</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span> GROUP_CONCAT<span class="token punctuation">(</span>user_role<span class="token punctuation">.</span>role_id<span class="token punctuation">,</span> <span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> role_ids<span class="token punctuation">,</span> GROUP_CONCAT<span class="token punctuation">(</span>role<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> role_names
<span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">\`</span>user<span class="token punctuation">\`</span></span> 
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> <span class="token identifier"><span class="token punctuation">\`</span>user_role<span class="token punctuation">\`</span></span> <span class="token keyword">ON</span> <span class="token keyword">user</span><span class="token punctuation">.</span>id<span class="token operator">=</span>user_role<span class="token punctuation">.</span>user_id 
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> <span class="token identifier"><span class="token punctuation">\`</span>role<span class="token punctuation">\`</span></span> <span class="token keyword">on</span> user_role<span class="token punctuation">.</span>role_id<span class="token operator">=</span>role<span class="token punctuation">.</span>id 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token keyword">user</span><span class="token punctuation">.</span>id
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token keyword">user</span><span class="token punctuation">.</span>id <span class="token keyword">DESC</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- \u591A\u8868\u5206\u9875&amp;&amp;\u4E34\u65F6\u8868</span>
<span class="token keyword">SELECT</span> ut<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span>r<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">from</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token identifier"><span class="token punctuation">\`</span>user<span class="token punctuation">\`</span></span> 
    <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> id 
    <span class="token keyword">LIMIT</span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">2</span>
<span class="token punctuation">)</span> <span class="token keyword">AS</span> ut
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> user_role <span class="token keyword">as</span> ur <span class="token keyword">ON</span> ut<span class="token punctuation">.</span>id<span class="token operator">=</span>ur<span class="token punctuation">.</span>user_id
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> role <span class="token keyword">as</span> r <span class="token keyword">ON</span> ur<span class="token punctuation">.</span>role_id <span class="token operator">=</span> r<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5B50\u67E5\u8BE2\u4E0Erow_number</strong></p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- \u4F7F\u7528row_number()</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token punctuation">(</span>
    <span class="token keyword">SELECT</span> <span class="token operator">*</span><span class="token punctuation">,</span>row_number<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">over</span> <span class="token punctuation">(</span><span class="token keyword">order</span> <span class="token keyword">by</span> id<span class="token punctuation">)</span> <span class="token keyword">AS</span> <span class="token identifier"><span class="token punctuation">\`</span>row_number<span class="token punctuation">\`</span></span>
	<span class="token keyword">from</span> <span class="token keyword">user</span>
<span class="token punctuation">)</span> <span class="token keyword">AS</span> ut
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> user_role <span class="token keyword">as</span> ur <span class="token keyword">ON</span> ut<span class="token punctuation">.</span>id<span class="token operator">=</span>ur<span class="token punctuation">.</span>user_id
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> role <span class="token keyword">as</span> r <span class="token keyword">ON</span> ur<span class="token punctuation">.</span>role_id <span class="token operator">=</span> r<span class="token punctuation">.</span>id
<span class="token keyword">WHERE</span> ut<span class="token punctuation">.</span>row_number <span class="token operator">BETWEEN</span> <span class="token number">1</span> <span class="token operator">and</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u521B\u5EFA\u4E00\u4E2AStatementBuilder\u5BF9\u8C61</span>
builder <span class="token operator">:=</span> sq<span class="token punctuation">.</span>StatementBuilder
<span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u5B50\u67E5\u8BE2</span>
subquery <span class="token operator">:=</span> builder<span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span> sq<span class="token punctuation">.</span><span class="token function">RowNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Over</span><span class="token punctuation">(</span>sq<span class="token punctuation">.</span><span class="token function">OrderBy</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">As</span><span class="token punctuation">(</span><span class="token string">&quot;row_number&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">From</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u4E3B\u67E5\u8BE2\uFF0C\u5E76\u8FDE\u63A5\u5B50\u67E5\u8BE2\u548C\u5176\u4ED6\u8868</span>
query <span class="token operator">:=</span> builder<span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">FromSelect</span><span class="token punctuation">(</span>subquery<span class="token punctuation">,</span> <span class="token string">&quot;ut&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
    <span class="token function">LeftJoin</span><span class="token punctuation">(</span><span class="token string">&quot;user_role as ur ON ut.id=ur.user_id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
    <span class="token function">LeftJoin</span><span class="token punctuation">(</span><span class="token string">&quot;role as r ON ur.role_id = r.id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
    <span class="token function">Where</span><span class="token punctuation">(</span>sq<span class="token punctuation">.</span>Between<span class="token punctuation">{</span><span class="token string">&quot;ut.row_number&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u751F\u6210SQL\u8BED\u53E5</span>
sql<span class="token punctuation">,</span> args<span class="token punctuation">,</span> err <span class="token operator">:=</span> query<span class="token punctuation">.</span><span class="token function">ToSql</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5904\u7406\u9519\u8BEF</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B50\u4E32\u5305\u542B\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u5B50\u4E32\u5305\u542B\u67E5\u8BE2" aria-hidden="true">#</a> \u5B50\u4E32\u5305\u542B\u67E5\u8BE2</h2><p>\u60A8\u597D\uFF0C\u8FD9\u662FBing\u3002\u6211\u53EF\u4EE5\u5E2E\u60A8\u4E86\u89E3\u5982\u4F55\u5728MySQL\u6570\u636E\u5E93\u4E2D\u68C0\u7D22\u5305\u542B\u67D0\u4E2A\u8054\u7CFB\u4EBA\u7684\u8BB0\u5F55\u3002\u{1F60A}</p><p>\u60A8\u7684\u95EE\u9898\u662F\uFF0C\u5982\u679C\u60A8\u6709\u4E00\u4E2A\u5B57\u6BB5\u53EB contacts\uFF0C\u5B58\u50A8\u7684\u662F\u8054\u7CFB\u4EBAid\u7684\u5B57\u7B26\u4E32\uFF0C\u7528\u9017\u53F7\u62FC\u63A5\uFF0C\u4F8B\u5982 &quot;1,2,3,4,5&quot;\uFF0C\u60A8\u73B0\u5728\u6709\u4E00\u4E2A\u8054\u7CFB\u4EBA3\uFF0C\u60A8\u5E94\u8BE5\u600E\u6837\u624D\u80FD\u68C0\u7D22\u5230\u5305\u542B3\u7684\u8BB0\u5F55\u3002</p><p>\u6709\u51E0\u79CD\u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u8FD9\u4E2A\u529F\u80FD\uFF0C\u6211\u5C06\u4E3A\u60A8\u4ECB\u7ECD\u5176\u4E2D\u4E09\u79CD\uFF1A</p><ul><li>\u65B9\u6CD5\u4E00\uFF1A\u4F7F\u7528 LIKE \u8FD0\u7B97\u7B26\u3002LIKE \u8FD0\u7B97\u7B26\u53EF\u4EE5\u7528\u6765\u5339\u914D\u5B57\u7B26\u4E32\u4E2D\u7684\u6A21\u5F0F\u3002\u60A8\u53EF\u4EE5\u4F7F\u7528\u767E\u5206\u53F7\uFF08%\uFF09\u4F5C\u4E3A\u901A\u914D\u7B26\uFF0C\u8868\u793A\u4EFB\u610F\u957F\u5EA6\u7684\u4EFB\u610F\u5B57\u7B26\u3002\u4F8B\u5982\uFF0C\u8981\u68C0\u7D22\u5305\u542B3\u7684\u8BB0\u5F55\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0BSQL\u8BED\u53E5\uFF1A</li></ul><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> table_name <span class="token keyword">WHERE</span> contacts <span class="token operator">LIKE</span> <span class="token string">&#39;%3%&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u6837\u5C31\u53EF\u4EE5\u627E\u5230\u6240\u6709contacts\u5B57\u6BB5\u4E2D\u5305\u542B3\u7684\u8BB0\u5F55\u3002\u4F46\u662F\uFF0C\u8FD9\u79CD\u65B9\u6CD5\u6709\u4E00\u4E2A\u7F3A\u70B9\uFF0C\u5C31\u662F\u5B83\u4F1A\u5339\u914D\u5230\u4E0D\u53EA\u662F3\u7684\u6570\u5B57\uFF0C\u4F8B\u598213\u621630\u7B49\u3002\u4E3A\u4E86\u907F\u514D\u8FD9\u79CD\u60C5\u51B5\uFF0C\u60A8\u53EF\u4EE5\u57283\u524D\u540E\u52A0\u4E0A\u9017\u53F7\uFF08,\uFF09\uFF0C\u8868\u793A\u53EA\u5339\u914D\u5355\u72EC\u76843\u3002\u4F46\u662F\uFF0C\u8FD9\u6837\u8FD8\u4F1A\u6F0F\u6389\u7B2C\u4E00\u4E2A\u548C\u6700\u540E\u4E00\u4E2A\u8054\u7CFB\u4EBA\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u524D\u540E\u6CA1\u6709\u9017\u53F7\u3002\u6240\u4EE5\uFF0C\u60A8\u8FD8\u9700\u8981\u52A0\u4E0A\u767E\u5206\u53F7\uFF08%\uFF09\uFF0C\u8868\u793A\u53EF\u80FD\u6709\u5176\u4ED6\u5B57\u7B26\u3002\u6700\u7EC8\u7684SQL\u8BED\u53E5\u5982\u4E0B\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> table_name <span class="token keyword">WHERE</span> contacts <span class="token operator">LIKE</span> <span class="token string">&#39;%,3,%&#39;</span> <span class="token operator">OR</span> contacts <span class="token operator">LIKE</span> <span class="token string">&#39;3,%&#39;</span> <span class="token operator">OR</span> contacts <span class="token operator">LIKE</span> <span class="token string">&#39;%,3&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u6837\u5C31\u53EF\u4EE5\u627E\u5230\u6240\u6709contacts\u5B57\u6BB5\u4E2D\u53EA\u5305\u542B3\u7684\u8BB0\u5F55\u3002</p><ul><li>\u65B9\u6CD5\u4E8C\uFF1A\u4F7F\u7528 FIND_IN_SET \u51FD\u6570\u3002FIND_IN_SET \u51FD\u6570\u53EF\u4EE5\u7528\u6765\u5728\u4E00\u4E2A\u9017\u53F7\u5206\u9694\u7684\u5B57\u7B26\u4E32\u4E2D\u67E5\u627E\u4E00\u4E2A\u5B50\u5B57\u7B26\u4E32\uFF0C\u5E76\u8FD4\u56DE\u5B83\u5728\u5B57\u7B26\u4E32\u4E2D\u7684\u4F4D\u7F6E\u3002\u5982\u679C\u6CA1\u6709\u627E\u5230\uFF0C\u5219\u8FD4\u56DE0\u3002\u4F8B\u5982\uFF0C\u8981\u68C0\u7D22\u5305\u542B3\u7684\u8BB0\u5F55\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0BSQL\u8BED\u53E5\uFF1A</li></ul><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> table_name <span class="token keyword">WHERE</span> FIND_IN_SET <span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span> contacts<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u6837\u5C31\u53EF\u4EE5\u627E\u5230\u6240\u6709contacts\u5B57\u6BB5\u4E2D\u5305\u542B3\u7684\u8BB0\u5F55\u3002\u8FD9\u79CD\u65B9\u6CD5\u6BD4LIKE\u8FD0\u7B97\u7B26\u66F4\u7B80\u5355\u548C\u51C6\u786E\uFF0C\u4F46\u662F\u5B83\u53EA\u80FD\u7528\u4E8E\u9017\u53F7\u5206\u9694\u7684\u5B57\u7B26\u4E32\uFF0C\u4E0D\u80FD\u7528\u4E8E\u5176\u4ED6\u5206\u9694\u7B26\u3002</p><ul><li>\u65B9\u6CD5\u4E09\uFF1A\u4F7F\u7528 REGEXP \u8FD0\u7B97\u7B26\u3002REGEXP \u8FD0\u7B97\u7B26\u53EF\u4EE5\u7528\u6765\u5339\u914D\u5B57\u7B26\u4E32\u4E2D\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u3002\u6B63\u5219\u8868\u8FBE\u5F0F\u662F\u4E00\u79CD\u63CF\u8FF0\u5B57\u7B26\u6A21\u5F0F\u7684\u8BED\u8A00\uFF0C\u53EF\u4EE5\u7528\u6765\u8FDB\u884C\u590D\u6742\u7684\u6587\u672C\u5339\u914D\u548C\u66FF\u6362\u3002\u4F8B\u5982\uFF0C\u8981\u68C0\u7D22\u5305\u542B3\u7684\u8BB0\u5F55\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0BSQL\u8BED\u53E5\uFF1A</li></ul><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> table_name <span class="token keyword">WHERE</span> contacts <span class="token operator">REGEXP</span> <span class="token string">&#39;[[:&lt;:]]3[[:&gt;:]]&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u6837\u5C31\u53EF\u4EE5\u627E\u5230\u6240\u6709contacts\u5B57\u6BB5\u4E2D\u5305\u542B3\u7684\u8BB0\u5F55\u3002\u8FD9\u79CD\u65B9\u6CD5\u6BD4LIKE\u8FD0\u7B97\u7B26\u548CFIND_IN_SET\u51FD\u6570\u66F4\u7075\u6D3B\u548C\u5F3A\u5927\uFF0C\u4F46\u662F\u5B83\u4E5F\u66F4\u590D\u6742\u548C\u96BE\u4EE5\u7406\u89E3\u3002 <code>[[:&lt;:]]</code>\u548C<code>[[:&gt;:]]</code>\u8868\u793A\u5355\u8BCD\u8FB9\u754C\uFF0C\u5373\u4E00\u4E2A\u5355\u8BCD\u7684\u5F00\u59CB\u6216\u7ED3\u675F\u4F4D\u7F6E\u3002\u5B83\u4EEC\u53EF\u4EE5\u7528\u6765\u5339\u914D\u5355\u72EC\u7684\u6570\u5B57\u6216\u5B57\u6BCD\u3002</p>`,22),o=[t];function c(l,i){return n(),a("div",null,o)}var r=s(p,[["render",c],["__file","common_sql_collection.html.vue"]]);export{r as default};
