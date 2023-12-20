---
title: 必读
publishTime: 2023/7/23
index: 1
tags: 
  - 说明
---

##  介绍

​	这是个静态资源个人博客网站，也就是没有后端的网站。优点是不需要后端就可以创建，你可以把这个部署到github page上，缺点就是没有一般博客网站的功能，例如用户接口、互动之类的。这种网站一般用于纯粹存放文档，也就是个人博客。



##  使用

  1.content文件夹就是存放你编写的博客的地方。具体存放文档详细的使用在请看项目网站。

  2.然后输入如下命令(需要确保你安装了node.js)

```
npm install
npm run build
npm run preview
```



##  部署

​	你可以查阅这个网站了解如何部署https://cn.vitejs.dev/guide/static-deploy.html

​	如果你是部署到github page上你需要：1.修改vite.config.js的baseURL。2.修改404.html的重定向路径为baseURL