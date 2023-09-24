---
title: ReactwithchatGPT
index: 14
publishTime: 2023/9/9
---

Q：虚拟DOM

A：虚拟DOM（Virtual DOM）是一个在前端开发中常用的概念，通常与React等JavaScript库或框架一起使用。虚拟DOM是一种用于优化Web应用性能的技术。

虚拟DOM的基本思想是将整个页面的结构表示为一个虚拟树，这个虚拟树是由JavaScript对象构成的，它们对应于实际的DOM元素。每当应用的状态（数据）发生变化时，不会直接操作实际的DOM元素，而是先更新虚拟DOM树。然后，虚拟DOM会与上一次渲染时的虚拟DOM树进行比较，找出变化的部分，然后只更新实际需要更新的部分，而不是整个页面重新渲染。

这个过程的好处是减少了直接操作DOM所带来的性能开销，因为DOM操作通常比较慢。通过使用虚拟DOM，可以减少对实际DOM的访问次数，提高了页面渲染的效率，从而改善了用户体验。

虚拟DOM的工作流程通常如下：

1. 初始渲染：将应用的初始状态映射到虚拟DOM树，然后将虚拟DOM树渲染成实际的DOM。
2. 数据变更：当应用的状态发生变化时，创建一个新的虚拟DOM树，表示新的页面状态。
3. 虚拟DOM对比：将新的虚拟DOM树与上一次渲染的虚拟DOM树进行比较，找出差异。
4. 差异更新：只更新实际需要变更的部分，以最小化DOM操作。

React是一个广泛使用虚拟DOM的JavaScript库，但其他库和框架也采用了类似的概念来提高性能。虚拟DOM的使用使得前端开发更高效，同时减少了不必要的DOM操作，提高了Web应用的响应速度。



Q：解释JSX

A：JSX（JavaScript XML）是一种JavaScript的扩展语法，通常与React等前端库一起使用，用于构建用户界面。JSX的主要目的是简化UI元素的创建，使开发人员能够以类似HTML的方式描述用户界面的结构和外观。

以下是一些关于JSX的重要概念和特性的解释：

1. **结构和语法类似于HTML：** JSX看起来非常类似于HTML，可以使用类似的标签、属性和嵌套结构来描述UI元素。

```javascript
const element = <h1>Hello, JSX!</h1>;
```

**JavaScript 表达式插值：** 在JSX中，可以使用花括号`{}`包围JavaScript表达式，以在UI中插入动态数据。

```javascript
const name = "John";
const element = <h1>Hello, {name}!</h1>;
```

**组件表示：** JSX还可以用来表示React组件。React组件通常是JavaScript函数，返回一个描述UI结构的JSX元素。

```javascript
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

const element = <Greeting name="John" />;
```

**HTML标签和自定义组件：** JSX可以用来渲染HTML标签以及自定义React组件。

```javascript
const element = (
  <div>
    <p>This is a paragraph.</p>
    <Greeting name="Alice" />
  </div>
);
```

**className替代class：** 由于JSX是JavaScript的扩展，不能使用`class`属性来添加CSS类，而应该使用`className`。

```javascript
const element = <div className="my-class">This element has a CSS class.</div>;
```

**自闭合标签：** 类似HTML，一些标签在JSX中可以自闭合，不需要额外的闭合标签。

1. ```javascript
   const imgElement = <img src="image.jpg" alt="An image" />;
   ```

总之，JSX是一种用于构建用户界面的方便而强大的语法，它允许开发人员以声明性的方式描述UI元素，同时能够轻松地与JavaScript逻辑集成在一起，使前端开发更加高效和可维护。在React中尤其流行，但也可以与其他一些JavaScript框架和库一起使用。



Q:如何理解React的useState

A:React的useState是React函数组件中的一个Hook，用于在函数组件中添加状态管理。通过useState，你可以在函数组件中创建和管理局部状态，而无需使用类组件的状态管理方式。要理解React的useState，可以分为以下几个方面来理解：

**状态的创建：** 使用useState可以创建一个状态变量。这个状态变量通常是一个数组，其中包含两个元素：当前状态的值和一个用于更新状态的函数。通常情况下，你会使用数组解构来获取这两个元素，如下所示：

```jsx
const [count, setCount] = useState(0);
```

这里的`count`是当前状态的值，而`setCount`是用于更新`count`的函数。

**初始状态值：** `useState`接受一个初始状态值作为参数，这个初始状态值会在组件首次渲染时被设置。在上面的例子中，初始状态值是0。你可以根据需要设置任何初始值，包括字符串、对象或其他数据类型。

**状态更新：** 使用`setCount`函数来更新状态。这个函数接受一个新的状态值作为参数，并且会触发组件的重新渲染，以显示新的状态值。例如：

```jsx
const handleIncrement = () => {
  setCount(count + 1);
};
```

这个例子中，`handleIncrement`函数会使`count`状态增加1，并且重新渲染组件以反映新的状态。

**多个状态：** 你可以在同一个组件中多次使用useState来创建多个状态变量，以便管理不同的数据。

```jsx
const [count, setCount] = useState(0);
const [name, setName] = useState('John');
```

**函数式更新：** 除了传递新的状态值外，你还可以使用函数式更新来更新状态。这种方式允许你根据先前的状态值来计算新的状态值，以避免因为异步操作而导致状态更新不正确的问题。

```jsx
const handleIncrement = () => {
  setCount(prevCount => prevCount + 1);
};
```

总之，useState是React中用于在函数组件中管理状态的重要工具。它允许你在函数组件中添加局部状态，以便在组件内部跟踪和更新数据。通过定义初始状态值和使用状态更新函数，你可以实现状态管理和组件的交互行为。



Q:React setState调用的原理

A:在React中，`setState`是用于更新组件状态的方法之一。它是React中实现响应式数据的重要机制之一。`setState`的调用原理可以分为以下几个步骤：

1. **触发`setState`方法：** 当您在组件中调用`setState`方法时，React会将传递给`setState`的新状态对象合并到组件的当前状态中。
2. **创建新状态对象：** React会将传递给`setState`的新状态对象与当前状态对象进行浅合并。这意味着只有新状态对象中的属性会被更新，而其他属性将保持不变。
3. **标记状态为"脏"：** React将标记组件的状态为"脏"，表示该状态已被更改但尚未同步到组件的渲染。这是为了提高性能，因为React可以批量处理状态更新。
4. **触发重新渲染：** 标记状态为"脏"后，React会安排重新渲染组件。在组件的下一个渲染周期中，React将使用新的状态来更新组件的UI。
5. **调用生命周期方法和函数组件：** 如果是类组件，React将在重新渲染之前和之后调用相关的生命周期方法，例如`componentWillUpdate`和`componentDidUpdate`。如果是函数组件，则函数组件本身将重新执行，从而更新UI。
6. **渲染组件：** 使用新的状态和属性，React会重新渲染组件的UI。这将导致新的UI效果呈现在屏幕上。

需要注意的是，由于React对状态更新进行了优化和批处理，`setState`并不会立即更新状态或触发立即重新渲染。相反，React将状态更新放入队列中，然后在合适的时机才会执行重新渲染。这个机制有助于提高性能，避免不必要的重复渲染。

如果需要在`setState`完成并且组件已经重新渲染之后执行某些操作，您可以使用`componentDidUpdate`生命周期方法（对于类组件）或在函数组件中使用`useEffect`来处理副作用。

总的来说，`setState`方法是React中管理组件状态和实现UI更新的核心机制之一，通过标记状态为脏并在适当的时机重新渲染组件来确保组件状态与UI保持同步。



Q:useState和Vue3的ref有什么不同

A://挑选答案的重点

**响应性不同：**

- **useState：** 当状态更新时，React会重新渲染组件，并且会在重新渲染时将新的状态值传递给组件。这意味着React会自动处理状态的响应性。
- **ref：** ref对象的包装值不会自动触发视图的重新渲染。如果要实现响应式行为，你需要将`ref`对象的值用于模板中，并且Vue会自动检测到对`ref`包装值的访问，从而触发重新渲染。



Q:React的事件机制

A:React 的事件机制是基于浏览器的原生事件系统构建的，但有一些重要的差异和增强。以下是 React 事件机制的关键要点：

**合成事件系统**：React 引入了合成事件系统，它是一个跨浏览器兼容的事件系统，提供了一致性和性能优势。React 自己管理了事件监听和处理，以确保不同浏览器之间的一致性。

**事件绑定**：在 React 中，你通过在 JSX 中指定事件处理函数来绑定事件。例如，你可以在一个组件的元素上使用 `onClick` 属性来指定点击事件的处理函数。

```jsx
<button onClick={handleClick}>Click me</button>
```

**事件处理函数**：React 事件处理函数接受一个合成事件对象作为参数，而不是原生 DOM 事件对象。这个合成事件对象是 React 自己创建的，它具有与原生事件对象类似的属性和方法，但它是跨浏览器的。

```jsx
function handleClick(event) {
  // 使用 event 对象处理事件
}
```

**事件代理**：React 使用事件代理来处理事件。它将事件监听器绑定在最顶层的 DOM 元素上，而不是在每个具体的子元素上。当事件冒泡到最顶层时，React 会根据事件类型和目标元素来调用相应的事件处理函数。这提高了性能，并且允许在组件更新时重新绑定事件。

**事件池**：React 会在事件处理函数被调用后立即销毁合成事件对象，以便回收资源。这就是为什么你不能在异步代码中访问事件对象的原因。如果需要在异步代码中访问事件属性，你需要调用 `event.persist()` 来保留事件对象。

```jsx
function handleClick(event) {
  event.persist();
  setTimeout(() => {
    console.log(event.target); // 可以访问事件对象
  }, 100);
}
```

**事件合成**：React 还提供了一种将多个事件处理函数封装成一个函数的方式，称为事件合成。这可以用于处理多个事件，例如处理鼠标移入和移出事件。

```jsx
function handleMouseEnter(event) {
  // 处理鼠标移入事件
}

function handleMouseLeave(event) {
  // 处理鼠标移出事件
}

<button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Hover me</button>
```

总的来说，React 的事件机制基于合成事件系统，提供了一种更方便和一致的方式来处理事件，同时也兼顾了性能。在使用 React 开发应用程序时，你通常会使用这些事件处理方式来实现用户交互和组件行为。



Q:React的Hook是什么意思，为什么叫Hook 

A:React的Hook是一种函数，用于在函数组件中添加状态和其他React特性。它们在React 16.8版本中引入，旨在让函数组件能够拥有类似于类组件的状态管理和生命周期特性，同时保持函数组件的简洁性和可重用性。

React的Hook之所以叫做"Hook"，是因为它们允许你“钩入”（或者说连接）React的特性和状态到函数组件中。在函数组件中，Hook允许你使用一些React的特性，比如状态管理、副作用处理和生命周期等，而不需要编写类组件。

一些常用的React Hook包括： 

1. `useState`：用于在函数组件中添加状态管理能力，让你能够在函数组件中保存和更新状态数据。 
2. `useEffect`：用于处理副作用操作，比如数据获取、订阅管理、DOM操作等。它类似于类组件的 `componentDidMount`、 `componentDidUpdate`和 `componentWillUnmount`生命周期方法的组合。 
3. `useContext`：用于访问React的上下文（Context）中的数据。
4. `useRef`：用于创建可变的引用，通常用于获取DOM元素的引用。 
5. `useReducer`：用于处理复杂的状态逻辑，通常与 `useState`相比，它更适用于管理包含多个值的状态。 
6. `custom Hooks`：你还可以创建自定义的Hook，将一些逻辑和状态抽象出来，以便在不同的组件中重复使用。 

使用Hook可以使你的代码更加清晰和模块化，同时减少了类组件中可能出现的一些问题，如this绑定、组件实例化和生命周期方法的复杂性。它们使得React函数组件更加强大和灵活，是React生态系统中重要的进步之一。 



Q:如何理解自定义Hook 

A://总结：抽象逻辑

自定义Hook是一种用于在React应用中共享和复用状态逻辑的方式。它们允许你将组件中的特定逻辑提取到可重用的函数中，以便在不同的组件之间共享这些逻辑。自定义Hook通常以"use"开头，以便React识别它们，并符合Hook的命名规则。

理解自定义Hook的关键点包括： 

1. **抽象共享逻辑** ：自定义Hook允许你将一个或多个相关的逻辑操作封装到一个函数中。这可以是状态管理、副作用处理、数据获取等。通过这种方式，你可以将这些逻辑从组件中抽象出来，使它们可复用。 
2. **独立于组件** ：自定义Hook是独立于组件的，它们不关心调用它们的组件是什么。这意味着你可以在不同的组件中使用相同的自定义Hook，以获取相同的逻辑功能，而无需在每个组件中重复编写相同的代码。
3. **Hook的命名约定** ：为了符合React的命名约定，自定义Hook通常以"use"开头，这使得它们容易识别并与React内置的Hook区分开来。 

下面是一个简单的自定义Hook的示例，用于在组件中追踪窗口大小： 

```jsx
import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

// 在组件中使用自定义Hook
function MyComponent() {
  const windowSize = useWindowSize();

  return (
    <div>
      Window Width: {windowSize.width}, Window Height: {windowSize.height}
    </div>
  );
}
```

在这个例子中， `useWindowSize` 是一个自定义Hook，它封装了窗口大小的状态管理和事件监听逻辑。然后，在 `MyComponent`组件中，我们使用了这个自定义Hook来获取窗口大小，并在组件中展示窗口的宽度和高度。 

通过自定义Hook，你可以轻松地在多个组件中重用这个窗口大小追踪的逻辑，使代码更加干净和可维护。这是自定义Hook的一个典型用例，但你可以根据需要创建各种自定义Hook来管理各种逻辑。 



Q：React的useEffect使用场合

A：`useEffect` 是 React 中用来处理副作用的钩子函数之一。副作用是指与组件渲染无关的操作，例如数据获取、订阅、手动 DOM 操作等。`useEffect` 的使用场合包括但不限于以下几种情况：

**数据获取和更新**：`useEffect` 可以用来获取远程数据或从本地存储中读取数据，并在数据获取完成后更新组件的状态。这样可以确保数据在组件渲染之后才可用，避免了初始渲染时的问题。

```jsx
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((result) => {
      setData(result);
    });
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
```

**订阅外部数据**：使用 `useEffect` 可以订阅外部数据源的变化，例如 WebSocket 连接或事件总线。这样可以确保组件能够及时响应来自外部的数据更新。

```jsx
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const socket = new WebSocket('ws://example.com/socket');

    socket.onmessage = (event) => {
      setMessage(event.data);
    };

    return () => {
      // 在组件卸载时关闭 WebSocket 连接
      socket.close();
    };
  }, []);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}
```

**手动操作 DOM**：有时需要在组件渲染后对 DOM 进行一些操作，例如滚动到特定位置、聚焦输入框等。`useEffect` 可以用于执行这些 DOM 操作。

```jsx
import React, { useEffect } from 'react';

function ScrollToTopButton() {
  useEffect(() => {
    window.scrollTo(0, 0); // 滚动到页面顶部
  }, []);

  return <button onClick={scrollToTop}>Scroll to Top</button>;
}
```



Q:React中什么是受控组件和非受控组件

A:在React中，"受控组件"（controlled components）和"非受控组件"（uncontrolled components）是两种处理表单元素（如input、textarea、select等）的不同方式。

**受控组件（Controlled Components）**：

受控组件是指其值（value）由React组件的状态（state）控制的表单元素。这意味着你需要在组件的state中保存表单元素的值，并且通过`onChange`事件处理函数来更新这个state。当用户输入数据时，React会根据state的值来更新表单元素，并且你可以在任何时候访问或修改输入框的值。

以下是一个受控组件的示例：

```jsx
import React, { Component } from 'react';

class ControlledComponent extends Component {
  constructor() {
    super();
    this.state = { inputValue: '' };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.inputValue}
        onChange={this.handleChange}
      />
    );
  }
}
```

在上面的例子中，`inputValue`是受控组件的状态，通过`handleChange`方法来更新。

**非受控组件（Uncontrolled Components）**：

非受控组件是指表单元素的值不受React状态的控制，而是由DOM元素自身来管理。你可以使用`ref`来获取或修改表单元素的值，而不需要维护一个React状态。

以下是一个非受控组件的示例：

```jsx
import React, { Component } from 'react';

class UncontrolledComponent extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }

  handleClick = () => {
    alert('Input Value: ' + this.inputRef.current.value);
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleClick}>Get Value</button>
      </div>
    );
  }
}
```

在上面的例子中，`inputRef`是一个对`input`元素的引用，通过它可以直接访问和操作`input`元素的值，而不需要维护React状态。

通常情况下，你可以根据具体需求选择使用受控组件或非受控组件。受控组件提供了更严格的控制和状态管理，而非受控组件可能更适合一些简单的场景或与非React代码集成的情况。



Q:为什么React要用JSX

A:React使用JSX（JavaScript XML）的主要原因有以下几点：

1. **易读性和易写性：** JSX提供了一种类似HTML的语法，使得编写和阅读React组件更加直观和易懂。开发者可以在JSX中嵌入HTML标签和组件，这有助于提高代码的可读性，特别是对于复杂的UI结构。
2. **组件结构清晰：** JSX使你可以以声明性的方式描述UI的结构，将UI分解成可复用的组件。这有助于组织代码，并使代码库更易于维护和扩展。
3. **性能优化：** React通过使用虚拟DOM（Virtual DOM）来提高性能。JSX可以被React解析为虚拟DOM，然后React可以有效地比较虚拟DOM的差异并更新实际DOM，从而减少DOM操作次数，提高性能。
4. **JavaScript的威力：** JSX与JavaScript混合在一起，允许你在组件中使用JavaScript表达式，从而使你能够动态生成UI，处理条件渲染，以及执行其他逻辑。这使得React非常灵活，能够适应各种场景。
5. **工具支持：** 由于JSX已经成为React的标配，所以有许多工具和编辑器插件可以帮助开发者更好地编写、调试和分析React代码。

虽然在初学阶段可能需要一些时间来适应JSX，但一旦习惯了，它通常会使React开发更加高效和可维护。同时，React还提供了一些API，如`React.createElement`，允许你在没有JSX的情况下编写React组件，但这种方式不太常见，因为JSX更加流行和方便。



Q:React中类组件和函数组件有什么不同

A:React 中的类组件和函数组件是两种不同的组件类型，它们有一些重要的区别，但也有一些相似之处。下面是它们之间的主要区别：

语法和定义方式：

- 类组件是使用ES6类语法定义的，需要继承React.Component类，并且使用render方法来定义组件的输出。
- 函数组件是一个JavaScript函数，它接受一个props对象作为参数，并返回一个React元素来描述组件的输出。

示例：

```jsx
// 类组件
class ClassComponent extends React.Component {
  render() {
    return <div>Hello, I'm a class component.</div>;
  }
}

// 函数组件
function FunctionComponent(props) {
  return <div>Hello, I'm a function component.</div>;
}
```

状态管理：

- 类组件可以使用this.state来管理组件的状态，并通过this.setState来更新状态。它们还可以使用生命周期方法来执行特定的操作。
- 函数组件可以使用React的Hooks来管理状态。最常用的钩子是useState，它允许函数组件拥有自己的状态。

示例：

```jsx
// 类组件中的状态管理
class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.incrementCount()}>Increment</button>
      </div>
    );
  }
}

// 函数组件中的状态管理
import React, { useState } from 'react';

function FunctionComponent() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
```

性能优化：

- 函数组件通常比类组件更轻量，因此在某些情况下，它们可以更好地优化性能。
- React 16.8及更高版本引入了Hooks，允许函数组件具有状态和生命周期等功能，因此函数组件在性能方面的差异不再像以前那么明显。

总的来说，随着React的不断演进，函数组件变得更加强大，也更常见。通常情况下，建议优先选择函数组件，除非你需要使用类组件特有的功能，如生命周期方法或引用ref。



Q:React类组件特有的功能在函数式组件中的替代方案

A:React 的函数式组件在引入了 React Hooks 之后，可以替代 React 类组件的大多数功能。以下是一些 React 类组件特有的功能以及它们在函数式组件中的替代方案：

**状态管理：**

- **React 类组件：** 使用 `this.state` 和 `this.setState()` 来管理组件的状态。
- **函数式组件：** 使用 `useState` Hook 来管理状态。

示例：

```jsx
// 类组件
class MyComponent extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
      </div>
    );
  }
}

// 函数式组件
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**生命周期方法：**

- **React 类组件：** 使用生命周期方法（如 `componentDidMount`、`componentDidUpdate`、`componentWillUnmount` 等）来执行特定的操作。
- **函数式组件：** 使用 `useEffect` Hook 来执行副作用操作和模拟生命周期方法。

示例：

```jsx
// 类组件
class MyComponent extends React.Component {
  componentDidMount() {
    console.log('Component did mount');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    return <div>Component</div>;
  }
}

// 函数式组件
import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    console.log('Component did mount');
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  return <div>Component</div>;
}
```

**实例引用：**

- **React 类组件：** 可以通过 `this` 访问组件的实例。
- **函数式组件：** 不能直接访问组件实例。但可以使用 `useRef` Hook 来获取组件的 DOM 元素引用或创建一个可变的对象引用。

示例：

```jsx
// 类组件
class MyComponent extends React.Component {
  componentDidMount() {
    console.log(this); // 访问组件实例
  }

  render() {
    return <div>Component</div>;
  }
}

// 函数式组件
import React, { useRef, useEffect } from 'react';

function MyComponent() {
  const componentRef = useRef(null);

  useEffect(() => {
    console.log(componentRef.current); // 访问组件的 DOM 元素引用
  }, []);

  return <div ref={componentRef}>Component</div>;
}
```

总的来说，React Hooks 允许你在函数式组件中实现与类组件相似的功能，同时提供了更简洁和可维护的代码结构。但在迁移现有的类组件到函数式组件时，你需要注意如何管理状态、处理副作用和模拟生命周期方法等方面的差异。

Q:再举例一些

A:当使用函数式组件替代React类组件时，以下是一些其他常见功能的替代方案：

**Props：**

- **React 类组件：** 使用 `this.props` 访问组件的属性。
- **函数式组件：** 使用函数的参数来访问属性。

示例：

```jsx
// 类组件
class MyComponent extends React.Component {
  render() {
    return <div>{this.props.message}</div>;
  }
}

// 函数式组件
import React from 'react';

function MyComponent(props) {
  return <div>{props.message}</div>;
}
```

**上下文（Context）：**

- **React 类组件：** 使用 `this.context` 访问上下文。
- **函数式组件：** 使用 `useContext` Hook 来访问上下文。

示例：

```jsx
// 类组件
const MyContext = React.createContext();

class MyComponent extends React.Component {
  render() {
    return <div>{this.context.message}</div>;
  }
}

// 函数式组件
import React, { useContext } from 'react';

const MyContext = React.createContext();

function MyComponent() {
  const context = useContext(MyContext);
  return <div>{context.message}</div>;
}
```

**Ref：**

- **React 类组件：** 使用 `React.createRef()` 创建 ref，并通过 `this.myRef` 进行访问。
- **函数式组件：** 使用 `useRef` Hook 创建 ref。

示例：

```jsx
// 类组件
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.myRef.current.focus();
  }

  render() {
    return <input ref={this.myRef} />;
  }
}

// 函数式组件
import React, { useRef, useEffect } from 'react';

function MyComponent() {
  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.focus();
  }, []);

  return <input ref={myRef} />;
}
```

这些示例涵盖了在函数式组件中替代React类组件常见功能的方法。React的Hooks API提供了强大而灵活的方式来处理组件逻辑，使得函数式组件在许多情况下成为更好的选择。根据具体的场景和需求，你可以选择使用适当的Hook来替代类组件中的相应功能。

补充：

使用memo代替pureComponent



Q:为什么React要费那么大尽从React类组件过渡到函数式组件

A:React从类组件向函数式组件的转变主要有以下几个原因，这些原因使得函数式组件成为React开发中的首选方式：

1. 简洁性和可读性：函数式组件通常比类组件更简洁，代码量更少，易于理解和维护。函数式组件中没有类组件的繁琐的生命周期方法和类定义，只需定义一个函数即可。
2. 更好的性能：函数式组件相对于类组件通常具有更好的性能。这是因为函数式组件没有额外的实例化开销和生命周期方法调用。React 18以及后续版本引入的Concurrent Mode和Suspense等特性也更好地支持函数式组件，进一步提高了性能。
3. 钩子函数：React引入了Hooks，使得函数式组件可以拥有状态管理和副作用处理的能力，而不再需要类组件中的状态和生命周期方法。Hooks（例如useState、useEffect、useContext等）可以更直观地管理组件的状态和行为，使代码更具可预测性。
4. 更好的重用性：函数式组件更容易被重用，因为它们是纯函数，只依赖于输入和状态，不需要考虑实例化和类继承。这使得组件的复用更容易，也更符合React的哲学。
5. 更好的组合性：函数式组件可以更轻松地与其他组件组合，因为它们只是函数，可以将它们作为参数传递给其他组件，或者从其他组件中返回。这种组合性使得React应用程序更模块化和可维护。

总的来说，虽然类组件在React的早期版本中是主要的编写方式，但函数式组件的出现和不断发展使得React开发更加简洁、高效、可维护，并且更适应了现代React的最佳实践。因此，大多数新的React项目都建议使用函数式组件来编写组件。不过，对于旧的项目，如果要迁移到函数式组件，可能需要一些工作，但通常会带来更多的好处。