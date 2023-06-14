# 02-JavaScript 数组最常用的 6 个方法

### push()

第一个方法是 push 方法，用于给数组末尾追加元素。 push() 方法可以接收一个参数，追加一个元素到数组末尾：

```javascript
let arr = [1, 2, 3, 4, 5, 6];
arr.push(7);
arr; // [1, 2, 3, 4, 5, 6, 7]
```

也可以接收多个参数，这样所有的参数会按顺序追加到数组的末尾：

```javascript
arr.push(8, 9, 10);
arr; // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

不过要注意的是，如果给 push 方法传递了一个数组，那么这个数组不会拆开添加到原数组中，而是会作为一个整体，追加到原数组末尾：

```javascript
arr.push([11, 12]);
arr; // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, [11, 12]]
```

### forEach()

第二个方法是 forEach，用于遍历数组中的所有元素。forEach 方法接收一个回调函数，回调函数里边包含三个参数，第一个是当前遍历到的元素，第二个是当前遍历到的元素的索引，第三个元素是数组本身。这个方法没有返回值，在遍历的过程中对元素进行处理就可以了：

```javascript
let arr = [1, 2, 3, 4, 5, 6];
arr.forEach((item, index, thisArr) => {
	// item: current looping item, index: current looping item index, arr: array itself
	console.log(item, index, arr);
});
```

运行结果：

```javascript
1 0 [ 1, 2, 3, 4, 5, 6 ]
2 1 [ 1, 2, 3, 4, 5, 6 ]
3 2 [ 1, 2, 3, 4, 5, 6 ]
4 3 [ 1, 2, 3, 4, 5, 6 ]
5 4 [ 1, 2, 3, 4, 5, 6 ]
6 5 [ 1, 2, 3, 4, 5, 6 ]
```

### map()

第三个方法是 map，它也接受一个回调函数，并且回调函数的参数和 forEach 是一样的，用法也一样，只不过它是用来对数组元素进行变换，在遍历每一个元素时，可以对这个元素进行一些操作，并返回一个结果：

```javascript
let arr = [1, 2, 3, 4, 5, 6];
const newArr = arr.map((item, index, thisArr) => {
	return item * index;
});
newArr; // [ 0, 2, 6, 12, 20, 30 ]
```

map 方法最后会返回和源数组同样长度的新数组。

### filter()

第四个方法是 filter，用于过滤数组元素，使用方法和 map 以及 forach 是一样的。它需要在回调函数里边返回一个布尔类型的数据，如果是 true，就会在返回的结果数组里边包含这个元素，如果返回了 false，那么就不包含这个元素。例如这里获取能够被二整除的所有元素：

```javascript
let arr = [1, 2, 3, 4, 5, 6];
const filteredArr = arr.filter((item, index, thisArr) => {
	return item % 2 === 0;
});
filteredArr; // [ 2, 4, 6 ]
```

### findIndex()

第五个方法是 findIndex，查找某个元素的索引，同样的，它的使用方式和 filter 是一样的，也是在回调函数里边返回布尔类型的 true 或 false。如果回调函数返回了 true, 那么就是找到了相对应的元素，findIndex() 方法会返回它的索引：

```javascript
let arr = [1, 2, 3, 4, 5, 6];
const index = arr.findIndex((item, index, thisArr) => {
	return item === 5;
});
index; // 4
```

### splice()

最后一个是 splice 方法，它的用途有两种。 第一种是删除元素。第一个参数指定要删除的元素的起始索引，第二个参数指定要删除的数量。例如删除从索引 0 开始的元素，并删除两个：

```javascript
let arr = [1, 2, 3, 4, 5, 6];
arr.splice(0, 2);
arr; // [ 3, 4, 5, 6 ]
```

这样就会把前两个元素删除。 第二个用法是在指定索引处追加元素，我们可以把第二个参数，要删除的元素数量，设置为零，这样它就不会删除元素了，然后从第三个参数开始，后边可以传递多个要添加的元素，例如把 7 和 8 添加到索引为 2 的位置上，可以这样传递参数：

```javascript
arr.splice(2, 0, 7, 8);
arr; // [ 3, 4, 7, 8, 5, 6 ]
```

最后要注意的是，splice() 会原地修改数组，也就是直接修改原数组，而不是返回一个新数组。
