---
title: 文章属性标注
publishTime: 2023/7/23
index: 4
tags: 
  - 说明
---





## 说明

​	你已经注意到了一个文档的展现包括作者，标题，发布时间，tags以及内容，你可以通过在.md文件的开头编写Yaml-Front-Matter来编辑这些属性。



## 格式

例如这一篇文章的Yaml-Front-Matter:

```
title: 文章属性标注
publishTime: 2023/7/23
index: 4
tags: 
  - 说明
```

解释：

title：文章的标题，如果没有设置则使用文件的名字作为标题

publishTime: 发布时间（内部类型是字符串，你可以随便写个字符串作为时间），如果没有则显示“未知”

index：严格的数字，表示文章在列表的顺序是第几位（如果index不存在则按照文件名字排序）

tags：字符串数组，在文章表示为标签，如果没有就不会显示