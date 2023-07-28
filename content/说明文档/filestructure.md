---
title: 文件存储
publishTime: 2023/7/23
index: 2
tags: 
  - 说明
---

##  结构

​	contetn文件夹内部结构应该是这样的：

```
content
 -assets
   -image1.webp
 -table1
   -assets
     -image2.webp
   -blog1.md
   -blog2.md
 -table2
   -blog3.md
   -image3.webp
```


具体规则是：

1.content文件夹内部创建的文件夹将视作一个博客列表

2.博客列表内部存放.md文件，禁止递归创建列表

3.图片文件可以存放在content文件夹内部的任意位置，但是要确保图片的引用路径为绝对路径（D:\Workspace\myblog\content\main\assets\image1.webp）

4.如果你使用typora，你可以在偏好设置-》图像-》插入图片时选择复制图片到./assets文件夹
