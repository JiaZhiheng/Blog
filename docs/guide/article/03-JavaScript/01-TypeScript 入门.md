# TypeScript

## 什么是 TypeScript

什么是 TypeScript 呢？官方的定义是 TypeScript 是 JavaScript 的、带有类型的超集，并且能够编译为普通的 JavaScript。这里有三个重点，一个是编译，一个是带有类型，一个是超集。

- 我们先看一下编译，编译是说，TypeScript 本身是不能够在浏览器或 Node.js 环境下运行的（deno 除外），需要使用 TypeScript 编译器编译成普通的 JavaScript，这点很像 C++ 或 Java。
- 而带有类型，是说 JavaScript 在定义变量的时候，类型是动态的，只有在运行的时候才能知道它的具体类型，比如 number 或者 string，并且类型也是可以动态变化的，而 TypeScript 则是要求变量有确定的类型，并且在编写代码的时候就已经确定，如果把字符串赋给类型为 number ，数字类型的变量，就会出错。
- 超集是说，TypeScript 本身支持所有 JavaScript 的语法，并在此基础上添加了额外的功能和特性，这样就使得所有的 JavaScript 代码可以完全被 TypeScript 正确编译。所以说你可以自己决定使用多少 TypeScript 提供的特性。

## 基本语法

TypeScript 的核心就是类型，这里咱们重点看一下它的语法。

### 基本类型

TypeScript 的基本类型跟 JavaScript 中的保持一致，有 boolean, number, string, undefined, null 等常用类型。给变量定义类型有两种方式，一种是隐式的，一种是显式的。

#### 隐式

隐式类型是由 TypeScript 根据变量的值来推断类型，这样的话，代码的写法跟 JS 就一样了，但不同的是它后边不能用<span style="border-bottom:1px dashed rgba(60, 60, 67);font-weight:bold">其他类型</span>的值来给他<span style="border-bottom:1px dashed rgba(60, 60, 67);font-weight:bold">重新赋值</span>，比如定义一个变量 a，不给它指定类型，但是给它赋上一个数字类型的值，10，然后再把它改成字符串类型的"hello"，那么就会产生编译错误，提示"hello"字符串不能赋值给数字类型：

```typescript
let a = 10;
a = 'hello';
// error TS2322: Type '"hello"' is not assignable to type 'number'.
```

#### 显式

显式类型的定义，就跟之前运行的 TS 代码示例一样，我们用 `:` + `类型` 来显式的规定，这个变量是什么类型的，比如定义一个 boolean 类型的变量 b：

```typescript
let b: boolean = true;
```

如果想让一个变量可以是任何类型的，就像 JS 中可以随意更改，那么可以把它的类型定义为 any，例如定义一个变量 a，类型为 any，开始给它一个数字类型的值，10，然后再改成"hello"，这时就不提示错误了:

```typescript
let a: any = 10;
a = 'hello';
```

类型也可以用在函数的参数和返回值中，比如定义一个加法函数，它接收一个参数 a，类型是 number，还接收参数 b，也是 number 类型，最后返回值类型也是 number，返回值的类型定义在参数列表的小括号后边，然后它的后边才是函数体，里边直接返回 a + b，返回值的类型可以省略，因为 typescript 可以根据 a+b 推断出它的返回值也是 number 类型：

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

这里我们可以使用 add(1, 2)来正常调用这个函数：

```typescript
add(1, 2);
```

如果使用一个字符串类型的变量来接收函数的返回值，那么就会出错：

```typescript
let res: string = add(1, 2);
```

提示：`Type 'number' is not assignable to type 'string'.` number 类型不能赋给 String 类型。如果给函数传递一个字符串进去：

```typescript
add('1', 2);
```

那么编译器就会提示`Argument of type '"1"' is not assignable to parameter of type 'number'`字符串"1"不能传给 number 类型的参数。另外调用函数时，必须传递跟参数列表数量相同的参数，不像 JS，可以不传或只传前边几个参数，这里如果只传一个参数的话：

```typescript
add(1);
```

会提示 `An argument for 'b' was not provided.` 没有给 b 传值。最后，如果函数不返回值的话，可以使用 void 类型代表函数没有返回值：

```typescript
function printLog(log: string): void {
  console.log(log);
}
```

### 组合类型

如果一个变量可以有多个类型，但是又不想使用 any 破坏类型检查，那么可以使用组合类型，组合类型使用一条竖线，也就是或操作符，来定义，比如一个变量既可以是 number 也可以是 string 类型，那么可以这样来定义，给它赋上一个数字类型的值 10，然后后边修改成字符串也没问题：

```typescript
let a: number | string = 10;
a = 'hello';
```

#### 类型别名

这样代码看起来不太方便，并且这个组合类型只能给 a 使用，如果有一个变量 b 也可以同时是 number 或 string 的类型的话，还要重复定义这个类型。要解决这个问题，我们可以使用 type 关键字来给这个组合类型起个别名，让代码更易读，也方便其他变量使用，这里定义一个 type 名字叫 NumStr，自定义的类型名字推荐首字母大写：

```typescript
type NumStr = number | string;
```

然后 a 变量就可以这样定义，给它一个数字值：

```typescript
let a: NumStr = 10;
```

同样也可以再定义一个 b 变量，给它一个字符串值：

```typescript
let b: NumStr = 'hello';
```

另外，组合类型也可以直接使用字面值来定义，这样就规定了一个变量的取值范围，比如我想让一个字符串类型的变量 c，只能取"on"或"off"两者之一，那么我们可以这样定义，在 c 后边直接使用"on" | "off" 来定义它能取的值：

```typescript
let c: 'on' | 'off' = 'on';
```

现在它的值是 on，如果给它赋值 off 是可以的，但是赋其他值就会出错，比如给它赋一个"other"字符串：

```typescript
let c: 'on' | 'off' = 'on';

c = 'off';

c = 'other';
```

提示 `error TS2322: Type '"other"' is not assignable to type '"on" | "off"'.` other 不能赋值给用 "on" 或 "off" 定义的类型里边。

### 对象类型(interface)

上边介绍的都是基本类型，那么如果要检查对象里的属性是不是符合规范呢？那就要使用 interface，接口了。接口是用来规范一个对象里应该都有哪些属性，包括它的名字，还有它的类型。我们来看一个例子，比如有一个 post 文章对象，我想让它有 title 和 author 属性，并且都是 string 类型的，那么我们可以使用接口来定义一个 Post 类型，使用 interface 关键字，后边是接口的名字，这里叫 Post，然后后边跟一对大括号，里边写上该有的属性和类型，注意每个属性后边用分号结尾，不是逗号：

```typescript
interface Post {
  title: string;
  author: string;
}
```

接着定义一个 post 对象，让它使用 Post 接口类型：

```typescript
let post: Post = {
  title: '标题',
  author: 'jehan'
};
```

这里没有问题，如果再添加一个"publishDate"属性，那么就会出现错误

```typescript
let post: Post = {
  title: '标题',
  author: 'jehan',
  publishDate: '2019-10-08'
};
```

提示 `error TS2322: Type '{ title: string; author: string; publishDate: string; }' is not assignable to type 'Post'. Object literal may only specify known properties, and 'publishDate' does not exist in type 'Post'.` 说对象里边只能包括接口里定义的属性。同样的，少定义一个属性，例如去掉 title 属性，会提示 `Property 'title' is missing in type '{ author: string; }' but required in type 'Post'.` 缺少 title 属性。

#### 接口作为函数参数类型

接口除了可以查检对象是否符合规范外，也可以用于函数参数的类型检查，这里需要注意的是，如果传递进来的对象没有定义类型的话，那么<span style="border-bottom:1px dashed rgba(60, 60, 67);font-weight:bold">只要它的属性满足接口中的规范，就可以通过查检，哪怕它有额外的属性</span>，比如，有一个函数接收 post 类型的参数，里边获取它的 title 属性并打印出来：

```typescript
function getTitle(post: Post) {
  console.log(post.title);
}
```

然后定义一个 post 变量，不指定类型，然后还包括额外的 publishDate 属性:

```typescript
let post = { title: '标题', author: 'jehan', publishDate: '2019-10-08' };
```

定义好之后把它传给 getTitle 函数，发现没有问题：

```typescript
getTitle(post);
```

如果想严格检查对象参数的话，可以像之前那样把 post 变量定义为 Post 接口类型的：

```typescript
let post: Post = { title: '标题', author: 'fh', publishDate: '2019-10-08' };
```

或者直接给函数传递对象字面值：

```typescript
getTitle({ title: '标题', author: 'fh', publishDate: '2019-10-08' });
```

这样就会提示出错。

### 数组类型

给数组规定类型可以保证里面的元素都是同一类型，以防在统一处理数组元素时，混进来其他类型的元素，导致异常，或者防止意外给数组元素赋了其他类型的值。要给数组定义类型，只需要在类型后边加上一对空的方括号就可以了，比如定义一个 number 类型的数组可以这样:

```typescript
let arr: number[] = [1, 2, 3];
```

#### 泛型

还有一种方式是使用泛型，泛型是属于面向对象语言中比较高级的特性，这里简单知道一下怎么使用就可以了，这里把泛型应用在数组身上，同样可以用来规定数组里元素的类型，只是这里要使用 Array class，或者说是构造函数，来定义，比如同样的 arr，使用泛型的话，就把 number[] 改成 Array 构造函数的名字，后边跟一个尖括号，里边是类型 number：

```typescript
let arr: Array<number> = [1, 2, 3];
```

#### tuple（元组）

TypeScript 里还有一个概念，叫 tuple，元组，它是一个有限元素数量的数组，但是呢每个元素需要分别指定是什么类型，比如我这里有一个三元组，就是说这个数组有三个元素，然后我规定第一个元素是 number 类型，第二个元素是 string 类型，第三个元素是 boolean 布尔类型，那么可以这样定义 `let tup: [number, string, boolean]` ，然后给它赋上合适的值 `[1, "fh", true]` ：

```typescript
let tup: [number, string, boolean] = [1, 'fh', true];
```
