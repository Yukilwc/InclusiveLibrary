# Go JWT基础使用与封装

## 概要

本文介绍在go项目中，JWT的基础使用方法，以及封装方案。  

## 基础概念

### 什么是JWT

[JWT(Json Web Token)](https://jwt.io/introduction),是一种开放标准([RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519))。
其目的是传输带签名的JSON对象，经过数字签名，它是可被信任的。  
JWT签名的加密，通常使用HMAC算法，也常使用需要公钥私钥对的RSA或ECDSA算法。


### 使用情景

1. 登录身份验证。
2. 分享传输信息。保证信息被篡改后无效。

### 结构 

JWT由三部分构成，之间使用点号`.`连接：

* Header
* Payload
* Signiture

因此一个JWT格式如下:  
`xxxxxx.yyyyyyy.zzzzz`  

接下来看一下每一部分的结构  

#### Header

Header主要包含了两部分构成，一个是这个签名的类型是**JWT**，还有就是改签名所使用的加密算法，例如HMAC，SHA256，RSA等。  

例如：

```json
{
    "alg": "HS256",
    "typ": "JWT"
}
```

#### Payload

Payload中包含了一些claims声明，这些声明一般是一些实体或者额外数据的字段。 

声明分为三种类型： 

* **Registered Claims**，是几个预定义好的声明字段，非必填，但是建议填写上，主要是一些iss(issuer发行人),exp(expiration time过期时间),sub(subject主题),aud(audience受众)等等的声明。

::: tip 
Registered Claims的名字都是三个字母，是因为JWT要尽可能压缩，减少体积。
:::

* **Public Claims**，这是使用JWT的人自由定义的。
* **Private Claims**，是为共享信息而创建的声明。

例如：

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

最后，这些声明将被使用base64Url编码，构成JWT的第二部分。

::: warning
要注意，Header和Payload部分虽然被篡改会导致失效，但是他们都是只读的，所以不要往里面放私密的信息，其它人可以直接解密出其中内容。 
:::

#### Signiture

准备好Header和Payload后，才能生成Signiture，生成逻辑如下： 

```go
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```

Signiture作用有二： 

1. 验证消息是否被篡改了
2. 如果使用了私钥签名，可以验证发送方是否是其人

## 基础使用

## 封装

## 参考

[JWT官方介绍](https://jwt.io/introduction)