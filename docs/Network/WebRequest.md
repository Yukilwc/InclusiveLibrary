# Web网络请求

## post request Content-Type

在request中，用来指定body中内容的编码格式

**application/json;charset=UTF-8**

**application/x-www-form-urlencoded**

是经过url编码后的key value,使用`a=1&b=2`的格式  
其中的字符会经过`encodeURIComponent`

**multipart/form-data; boundary={boundary string}**

是使用boundary分割开的数据块,如下格式

```
POST /test HTTP/1.1
Host: foo.example
Content-Type: multipart/form-data;boundary="boundary"

--boundary
Content-Disposition: form-data; name="field1"

value1
--boundary
Content-Disposition: form-data; name="field2"; filename="example.txt"

value2
--boundary--
```

**text/plain**

**参考**

[参考](https://dev.to/sidthesloth92/understanding-html-form-encoding-url-encoded-and-multipart-forms-3lpa)
[Link](https://dev.to/getd/x-www-form-urlencoded-or-form-data-explained-in-2-mins-5hk6)