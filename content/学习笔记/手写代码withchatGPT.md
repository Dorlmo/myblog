---
title: 手写代码withchatGPT
index: 9
publishTime: 2023/8/2
---

https://github.com/cefresjump/JSLearning

代码请访问上述链接，下面的内容不全

Q:deepcopy深拷贝

A:

解法1：递归复制

```JavaScript
function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj; // Return primitive values and null as is
  }
  
  if (Array.isArray(obj)) {
    const copy = [];
    for (let i = 0; i < obj.length; i++) {
      copy[i] = deepCopy(obj[i]);
    }
    return copy;
  }
  
  const copy = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  
  return copy;
}

const originalObject = { foo: "bar", nested: { a: 1, b: 2 } };
const copiedObject = deepCopy(originalObject);

// Now 'copiedObject' is a deep copy of 'originalObject'

```

解法2：JSON方法

```JavaScript
function deepCopy(obj) {
  // Use JSON.stringify to serialize the object to a JSON string
  const jsonString = JSON.stringify(obj);
  
  // Use JSON.parse to parse the JSON string back into an object
  const copy = JSON.parse(jsonString);
  
  return copy;
}

const originalObject = { foo: "bar", nested: { a: 1, b: 2 } };
const copiedObject = deepCopy(originalObject);
```



Q:使用JavaScript实现发布-订阅模式

A:

```javascript
// 创建一个发布者对象
const publisher = {
  subscribers: [],
  
  // 添加订阅者
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  },
  
  // 发布消息给所有订阅者
  publish(message) {
    this.subscribers.forEach(subscriber => subscriber.notify(message));
  }
};

// 创建订阅者构造函数
function Subscriber(name) {
  this.name = name;
  
  // 订阅者的通知方法
  this.notify = function(message) {
    console.log(`${this.name} 收到消息: ${message}`);
  };
}

// 创建订阅者实例
const subscriber1 = new Subscriber('订阅者1');
const subscriber2 = new Subscriber('订阅者2');

// 订阅发布者
publisher.subscribe(subscriber1);
publisher.subscribe(subscriber2);

// 发布消息给所有订阅者
publisher.publish('新消息1');
publisher.publish('新消息2');
```



Q:防抖

A：

```javascript
function debounce(func, delay) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}

const searchInput = document.querySelector('#search-input');
const debouncedSearch = debounce(search, 300);

searchInput.addEventListener('input', debouncedSearch);
```

使用场合：搜索建议：当用户在搜索框中输入文字时，不希望每次输入都发送搜索请求，而是等待用户停止输入一段时间后再执行搜索。 （你可以看看百度搜索）



Q:节流

A：

```javascript
function throttle(func, delay) {
  let throttled = false;
  return function() {
    if (!throttled) {
      throttled = true;
      func.apply(this, arguments);
      setTimeout(() => {
        throttled = false;
      }, delay);
    }
  };
}

const handleScroll = throttle(scrollHandler, 200);

window.addEventListener('scroll', handleScroll);  
```

使用场合：连续触发的数据上传 ：如果需要连续上传数据，但希望限制上传频率，可以使用节流来确保数据上传不会过于频繁。 



//下面三道都不是chatGPT回答的

Q:function.call

A:

```javascript
Function.prototype.myCall = function (base, ...args) {
    // 1. 如果指向是null 或者undefined 则指向window
    base = base || window
    // 2. 根据this是谁调用就指向谁的原理，将this指向的函数 赋值给base对象的一个属性
    base.fn = this
    // 3.执行函数,调用base.fn时，fn中的函数指向 base对象
    let result = base.fn(...args)
    // 4. 删除base的fn属性
    delete base.fn
    // 5. 返回result 结果
    return result
}
```



Q:function.apply

```javascript
Function.prototype.myApply = function (base, args) {
    // 1. 如果指向是null 或者undefined 则指向window
    base = base || window
    // 2. 根据this是谁调用就指向谁的原理，将this指向的函数 赋值给base对象的一个属性
    base.fn = this
    // 3.执行函数,调用base.fn时，fn中的函数指向 base对象
    let result = base.fn(...args)
    // 4. 删除base的fn属性
    delete base.fn
    // 5. 返回result 结果
    return result
}
```



Q:function.bind

```javascript
Function.prototype.myBind = function (base, ...args1) {
    return (...args2) => {
        // 1. 如果指向是null 或者undefined 则指向window
        base = base || window;
        // 2. 根据this是谁调用就指向谁的原理，将this指向的函数 赋值给base对象的一个属性
        base.fn = this;
        // 3.执行函数,调用base.fn时，fn中的函数指向 base对象
        let result = base.fn(...args1, ...args2);
        // 4. 删除base的fn属性
        delete base.fn;
        // 5. 返回result 结果
        return result;
    };
};
```

