# setup 语法糖

Vue setup script 进一步简化了 vue composition api 的代码，不用每次都导出一个只含有 setup() 函数的对象了，而是直接把函数的内容写在 `<script/>` 标签中，只需要给 `<script />` 加上 setup 属性即可。

## 与 setup() 函数的区别

接下来看一下它与普通 setup() 有什么区别。

首先是 `<script />` 标签加上了 setup 属性，它里边的代码可以直接视为在 `setup()` 函数中编写的，同时，import 语句也可以使用，仍然需要放在最上方。

```javascript
<script setup>import SomeComponent from "./components/SomeComponent.vue";</script>
```

在 script setup 里边定义的变量、函数和导入的模块可以直接在 <template /> 模板中使用：

```javascript
<template>
  <SomeComponent>{{ msg }}</SomeComponent>
</template>
<script setup>
  import SomeComponent from "./components/SomeComponent.vue";
  const msg = "hello";
</script>
```

其实它编译后的代码类似于这样：

```javascript
import SomeComponent from './components/SomeComponent.vue';
function setup() {
  const msg = 'hello';
  return () => {
    // <template /> 的作用域相当于在这里
    // 可以访问 msg
    return h(SomeComponent, msg);
  };
}
```

可以看到，`<template />` 标签其实就像是直接从 setup() 函数中返回出去的 render() 函数，如果把 h() 函数的调用改成 JSX 形式的话，其实跟 React 也几乎是一样了。

## 访问属性

由于使用了 script setup 之后不能访问 setup() 函数的参数了，如果要获取父组件传递来的属性，那么需要使用 defineProps 函数，可以从 vue 库中导入进来，它接收一个对象作为参数，对象的 key 为属性名，value 为属性的类型，也可以是一个对象，包含默认值、类型、是否为必须的等更丰富的信息。最后 defineProps 会返回一个对象，可以通过它的属性访问 props。

```javascript
<template>
  <div>
    <p>{{ a }}</p>
    <p>{{ b.someProp }} </p>
  </div>
</template>
<script setup>
  import { defineProps } from "vue";
  const props = defineProps({
    a: Number,
    b: {
     type: Object,
     default: {},
     required: true
    }
  });
</script>
```

## 触发事件

使用 script setup 也不能通过访问 setup 函数中的 context 参数来触发事件，这时可以用 defineEmit 来实现，它接收一个数组作为参数，定义当前组件将会触发的自定义事件：

```javascript
<script setup>import {defineEmit} from "vue"; const emit = defineEmit(['click', 'change'])</script>
```

最后，就可以使用返回的 emit 触发事件了：

```javascript
<template>
  <button @click="emit('click', 10)">点击</button>
</template>
```

## 获取 Context

获取 context 信息可以使用 useContext() 函数，也是从 vue 库中导入进来，里边可以获取 slots 和 attrs 等信息：

```javascript
<script setup>
  import {useContext} from "vue"; const {(slots, attrs)} = useContext()
</script>
```

## 问题

在实际使用 script setup 时，有一些小的问题需要注意。

第一是会发现在 template 用到但是没在 script 用到的变量可能会提示 unused，这个没有实际影响，不过看起来可能会有点难受。

第二是 defineProps() 和 defineEmits() 定义的属性和事件不能访问 script setup 中定义的变量，因为传递给这两个函数的参数会提升到模块顶级作用域中，而不是在 setup() 函数中，同样的，import 语句也会提升到模块顶级作用域中。
