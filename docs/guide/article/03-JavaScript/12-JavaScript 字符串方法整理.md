```javascript
const str = "Hello, World!";

/* --- 获取信息 --- */

// 获取字符串长度，结果: 13
const length = str.length;

// 获取索引7的字符，结果: "W"
const char = str.charAt(7);

/* --- 搜索和定位 --- */

// 查找 "World" 的开始位置，结果: 7
const index = str.indexOf("World");

// 查找 "World" 的开始位置，从索引8开始，结果: -1
const indexFromPos = str.indexOf("World", 8);

// 查找 "World" 的最后一个位置，结果: 7
const lastIndex = str.lastIndexOf("World");

// 测试是否以 "Hello" 开始，结果: true
const startWith = str.startsWith("Hello");

// 测试是否以 "!" 结束，结果: true
const endWith = str.endsWith("!");

// 测试是否包含 "World", 结果: true
const includes = str.includes("World");

/* --- 分割和替换 --- */

// 用空格分割字符串,结果: ["Hello,", "World!"]
const split = str.split(" ");

// 用 "-" 替换逗号，结果: "Hello- World!"
const replace = str.replace(",", "-");

// 用 "-" 替换所有逗号，结果: "Hello- World!"
const replaceAll = str.replaceAll(",", "-");

// 截取索引1至5点字符，结果: "ello"
const substring = str.substring(1, 5);

// 从索引1开始截取长度4的字符，结果: "ello"
const substr = str.substr(1, 4);

// 从索引1开始截取至索引5的字符，结果: "ello"
const slice = str.slice(1, 5);

/* --- 大小写转换 --- */

// 转换为大写，结果: "HELLO, WORLD!"
const toUpperCase = str.toUpperCase();

// 转换为小写，结果: "hello, world!"
const toLowerCase = str.toLowerCase();

/* --- 去除空白 --- */

// 去除前后空白，结果: "Hello, World!"
const trimmed = " Hello, World! ".trim();

// 去除前端空白，结果: "Hello, World! "
const trimmedStart = " Hello, World! ".trimStart();

// 去除末尾空白，结果: " Hello, World!"
const trimmedEnd = " Hello, World! ".trimEnd();

/* --- 其他转换 --- */

// 重复字符串3次，结果: "Hello, World!Hello, World!Hello, World!"
const repeated = str.repeat(3);

// 转换为区域特定字符串
const toLocale = str.toLocaleLowerCase("TR");

// 转换为字符串，结果： "Hello, World!"
const toString = str.toString();

// 将字符串编码转换为字符串，结果: "H"
const fromCharCode = String.fromCharCode(72);

/* --- 模版字面量 --- */

// 使用模版字面量，结果: "Hello, John!"
const name = "John";
const greeting = `Hello, ${name}!`;
```
