# lang_admin

## session

session 默认存储在 cookie 中，但是这样会导致 cookie 负载过大。因此一般都是将用户信息存储在后端或者 redis 中。本项目中，session 存储在后端，逻辑在 app.js 中。这种方案存在一个问题，即后端重启，则用户状态丢失。

因此最好还是存在 redis 中。本项目为了简单就直接存在后端

102finish

## 数据库管理工具

### navicat

### workbench
