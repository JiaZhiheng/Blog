# TypeScript

什么是 TypeScript 呢？官方的定义是 TypeScript 是 JavaScript 的、带有类型的超集，并且能够编译为普通的 JavaScript。这里有三个重点，一个是编译，一个是带有类型，一个是超集。

- 我们先看一下编译，编译是说，TypeScript 本身是不能够在浏览器或 Node.js 环境下运行的（deno 除外），需要使用 TypeScript 编译器编译成普通的 JavaScript，这点很像 C++ 或 Java。
- 而带有类型，是说 JavaScript 在定义变量的时候，类型是动态的，只有在运行的时候才能知道它的具体类型，比如 number 或者 string，并且类型也是可以动态变化的，而 TypeScript 则是要求变量有确定的类型，并且在编写代码的时候就已经确定，如果把字符串赋给类型为 number ，数字类型的变量，就会出错。
- 超集是说，TypeScript 本身支持所有 JavaScript 的语法，并在此基础上添加了额外的功能和特性，这样就使得所有的 JavaScript 代码可以完全被 TypeScript 正确编译。所以说你可以自己决定使用多少 TypeScript 提供的特性。

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题
