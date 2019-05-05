TypeScript Webpack Superagent Browser Demo
==========================================

使用webpack对superagent打包，运行于浏览器中。

注意：这个Demo无法正常运行，在浏览器的console中会报错：

```
Uncaught TypeError: Cannot read property 'call' of undefined
    at __webpack_require__ (bundle.js:30)
    at eval (hello.ts:14)
    at Object../hello.ts (bundle.js:92)
    at __webpack_require__ (bundle.js:30)
    at eval (webpack:///multi_(:8081/webpack)-dev-server/client?:2:18)
    at Object.0 (bundle.js:379)
    at __webpack_require__ (bundle.js:30)
    at bundle.js:79
    at bundle.js:82
    at webpackUniversalModuleDefinition (bundle.js:7)
```

打不到原因。

```
npm install
npm run server
npm run demo
```

### Log

Server side:

```
listen on http://localhost:3000
{ host: 'localhost:3000',
  'accept-encoding': 'gzip, deflate',
  'user-agent': 'node-superagent/4.1.0',
  cookie: 'a1; a2; a3',
  'non-cookie': 'a1, a2, a3',
  connection: 'close' }
```

Client side:

```
array?  true
Cookies: [ 'xxx=j%3A%5B%22x1%22%2C%22x2%22%2C%22x3%22%5D; Path=/',
  'yyy=j%3A%5B%22y1%22%2C%22y2%22%2C%22y3%22%5D; Path=/' ]
```

We can see:

1. superagent has special handling when sending `cookie`
2. `Set-Cookie` header is different from other headers
