# Jest 初体验

Jest 是用于测试 JavaScript 应用程序的框架，由 Meta，也就是 Facebook 维护，能用于测试 Node.js、TypeScript、React、Vue 等项目。

## 测试是什么？

测试意思就是检查代码的执行是否符合预期。

## 为什么需要测试

我们程序员在编写代码的时候，必然会出现错误，通过测试，我们可以：

- 在早期就发现可能得错误和缺陷。
- 保证程序正常的运行。
- 后期在修改代码时，确保结果仍然符合预期。

## 测试的分类

- 单元测试，最简单的测试，经常用于测试单个函数，例如一个组件，给它特定的参数能返回特定的结果。
- 集成测试，比单元测试更复杂，需要处理依赖关系，例如某个功能涉及多个函数调用。
- 端到端测试，测试程序和用户交互的流程，例如输入文本，得到预期的结果。
- UI 测试，属于前端重点的测试，用于测试页面视图显示正常，功能正确，并且性能符合预期，多数属于人工测试。
  等等。

## 为什么使用 Jest

如果项目是使用 JavaScript 编写的，那么使用 Jest 框架就能够帮我们实现自动化的测试，不用再人工或者编写 console.log 来测试了，只需要运行一条命令，就能够跑完所有测试，节省时间和人力。

## 如何使用 Jest

接下来，我们看一下 Jest 框架本身的用法。 安装到项目的测试依赖中：

```sh [yarn]
yarn add --dev jest
```

### 入门

测试 sum.js 中的函数：

```javascript
function sum(a, b) {
	return a + b;
}

module.exports = sum;
```

sum.test.js，导入 sum，使用 test 函数，第 1 个参数编写测试描述，第二个参数编写测试代码。expect() 用于执行 JS 表达式，之后可以调用它内置的判断方法来检测结果，例如 toBe() 判断是否相等：

```javascript
const sum = require("./sum");

test("1 + 2 = 3", () => {
	expect(sum(1, 2)).toBe(3);
});
```

在 package.json 中添加 test script：

```json
"scripts": {
  "test": "jest --coverage"
},
```

运行：

```sh [yarn]
yarn test
```

toEqual
addToArray.js：

```javascript
function addToArray(arr, ...args) {
	arr.push(...args);
}
module.exports = addToArray;
```

addToArray.test.js:

- toBe 是不行的，严格相等
- toEqual 可以
- 可以连续使用，例如 .not.toBe，不相等

```javascript
const addToArray = require("./addToArray");

test("添加元素 4, 5, 6 到数组 [1, 2, 3] 中", () => {
	const arr = [1, 2, 3];
	addToArray(arr, 4, 5, 6);
	// expect(arr).toBe([1, 2, 3, 4, 5, 6]);
	// expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
	expect(arr).not.toEqual([1, 2, 3]);
});
```

### mock 函数

用于测试无需知道函数具体实现的代码。 map.js，封装了一下 array 的 map 方法，接收回调函数：

```javascript
function map(arr, cb) {
	return arr.map(cb);
}

module.exports = map;
```

要测试回调函数正常运行，我们需要对它进行 mock，之后可以通过 mock 函数的属性来获取测试的信息，例如，对于数组 [1,2,3]，确保 map 的回调函数执行了 3 次：

```javascript
test("map [1, 2, 3], 回调函数执行 3 次", () => {
  const mockFn = jest.fn((x) => x \* 2);
  map([1, 2, 3], mockFn);
  expect(mockFn.mock.calls.length).toBe(3);
});
```

或者测试每次回调函数的返回结果，对于 [1,2,3] 这个数组，每次应该返回 2，4，6：

```javascript
test("map [1, 2, 3], 回调函数返回 2, 4, 6", () => {
  const mockFn = jest.fn((x) => x \* 2);
  map([1, 2, 3], mockFn);
  expect(mockFn.mock.results[0].value).toBe(2);
  expect(mockFn.mock.results[1].value).toBe(4);
  expect(mockFn.mock.results[2].value).toBe(6);
});
```

#### 测试分组

这里提一下， jest 可以把相关的 test 进行分组，可以使用 describe 函数，参数 1 为描述，参数 2 为回调函数，里边是相关的 test 集合：

```javascript
describe("测试 map 回调函数执行情况", () => {
  test("map [1, 2, 3], 回调函数执行 3 次", () => {
    const mockFn = jest.fn((x) => x \* 2);
    map([1, 2, 3], mockFn);
    expect(mockFn.mock.calls.length).toBe(3);
  });

  test("map [1, 2, 3], 回调函数返回 2, 4, 6", () => {
    const mockFn = jest.fn((x) => x \* 2);
    map([1, 2, 3], mockFn);
    expect(mockFn.mock.results[0].value).toBe(2);
    expect(mockFn.mock.results[1].value).toBe(4);
    expect(mockFn.mock.results[2].value).toBe(6);
  });
});
```

### coverage

对于测试来说，代码的覆盖率也是一个重要的指标，通常情况下要达到 100%，也就是对所有的代码都进行了测试。 我们可以给 jest 命令加上 --coverage 参数来查看覆盖情况：

```json
"scripts": {
  "test": "jest --coverage"
},
```

运行之后会在命令行显示覆盖率，我们这里是 100% 覆盖了，同时它也会生成网页版的结果，可以在生成的 coverage 目录里找到。 这时，我们修改一下 sum.test.js，去掉 sum 函数的导入和调用：

```javascript
test("1 + 2 = 3", () => {
	expect(1 + 1).toBe(2);
});
```

这个时候就可以看到覆盖率不是 100% 了。
