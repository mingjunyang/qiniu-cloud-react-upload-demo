# qiniuDemo
> this is a demo

项目脚手架使用[cooking](http://elemefe.github.io/cooking/)。

项目语法检查特别严格。

***由于 cooking 会将 node_modules 存放在    ~/.cooking/node_modules 里，所以有可能会有webpack找不的资源的问题出现***

本demo使用 https://github.com/lenage/react-qiniu/blob/master/index.js 代码作为示例基础，主要代码直接使用[react-qiniu](https://github.com/lenage/react-qiniu)。

七牛官方[js-sdk](http://developer.qiniu.com/code/v6/sdk/javascript.html)好像对 es2015 不是特别支持，impiort 之后发现有报错就没有深入研究了。

# Install

```shell
npm install
```

# Development

```shell
make dev
```

# Production
```
make dist
```

# License
ISC
