# Clipboard API：剪贴板读取和写入

Clipboard API 是一个 Web API，它可以让开发者通过 JavaScript 代码来读取或写入剪贴板中的内容。这个 API 包含两种操作：读取剪贴板内容和写入剪贴板内容。

### 读取剪贴板内容

读取剪贴板内容时，可以使用 `navigator.clipboard.readText()` 方法来获取剪贴板中的文本内容。这个方法返回一个 Promise 对象，可以使用 `then()` 方法来处理获取到的文本内容，也可以使用 `catch()` 方法来处理获取内容的失败情况。

下面是一个读取剪贴板内容的示例代码：

```javascript
navigator.clipboard
  .readText()
  .then((text) => console.log('获取到的文本内容是：', text))
  .catch((err) => console.error('读取剪贴板内容失败：', err));
```

值得注意的是，读取剪贴板内容的操作需要用户授权。在用户同意授权之前，调用 `navigator.clipboard.readText()` 方法会抛出 SecurityError 异常。因此，我们可以在用户点击按钮之类的事件触发读取剪贴板操作，以获取用户授权。

### 写入剪贴板内容

写入剪贴板内容时，可以使用 `navigator.clipboard.writeText(text)` 方法来将指定的文本内容写入剪贴板中。这个方法也返回一个 Promise 对象，可以使用 `then()` 方法来处理写入操作成功的情况，也可以使用 `catch()` 方法来处理写入操作失败的情况。

下面是一个写入剪贴板内容的示例代码：

```javascript
const text = '这是要复制到剪贴板的文本内容';
navigator.clipboard
  .writeText(text)
  .then(() => console.log('文本内容已成功写入剪贴板'))
  .catch((err) => console.error('写入剪贴板失败：', err));
```

值得注意的是，写入剪贴板内容的操作也需要用户授权。在用户同意授权之前，调用 `navigator.clipboard.writeText(text)` 方法会抛出 SecurityError 异常。同样地，我们可以在用户点击按钮之类的事件触发写入剪贴板操作，以获取用户授权。

另外，Clipboard API 目前只支持在安全上下文（例如 HTTPS 网站、本地文件、localhost 等）下使用，否则会抛出安全错误。

### 总结

Clipboard API 是一个非常有用的 Web API，它可以让开发者通过 JavaScript 代码来读取或写入剪贴板中的内容。通过剪贴板 API，我们可以方便地实现一些常见的功能，例如复制文本内容、复制图片等等。不过，需要注意的是，剪贴板 API 的浏览器兼容性还比较有限，而且在使用过程中需要用户授权，因此我们需要在实际开发中进行适当的兼容性处理和用户提示。
