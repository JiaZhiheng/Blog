# Location 对象操作浏览器地址栏 URL

在 Web 应用程序中，我们经常需要对 URL 进行操作，例如：跳转到某个页面、获取当前页面的 URL、修改 URL 中的参数等等。在 JavaScript 中，我们可以使用 `window.location` 对象来完成这些操作。

### window.location 对象属性

`window.location` 对象包含了当前页面的 URL 信息，我们可以使用它的属性来获取或修改 URL 中的各个部分。以下是 `window.location` 对象中一些常用的属性：

- `location.href`：当前页面的完整 URL。
- `location.protocol`：当前页面的协议（例如 `http`: 或 `https`:）。
- `location.host`：当前页面的主机名（例如 `www.example.com`）。
- `location.port`：当前页面的端口号。
- `location.pathname`：当前页面的路径部分（例如 `/about.html`）。
- `location.search`：当前页面的查询参数部分（例如 `?id=123`）。
- `location.hash`：当前页面的哈希部分（例如 `#section1`）。

以下是一个示例，演示如何使用 `window.location` 对象中的属性来操作 URL：

```javascript
// 获取当前页面的完整 URL
const currentUrl = window.location.href;
console.log("当前页面的 URL 是：" + currentUrl);

// 修改当前页面的路径部分
window.location.pathname = "/new/path.html";

// 跳转到另一个页面
window.location.href = "http://www.example.com/newpage.html";
```

在上面的代码中，我们首先使用 `window.location.href` 属性获取当前页面的完整 URL，然后修改了当前页面的路径部分和跳转到了另一个页面。

### window.location 对象方法

除了属性之外，`window.location` 对象还提供了一些方法，用于在 JavaScript 中对 URL 进行更精细的操作。以下是 `window.location` 对象中一些常用的方法：

- location.reload()：重新加载当前页面。
- location.replace(url)：替换当前页面为指定的 URL。
- location.assign(url)：将当前页面的 URL 修改为指定的 URL。

以下是一个示例，演示如何使用 `window.location` 对象中的方法来操作 URL：

```javascript
// 重新加载当前页面
window.location.reload();

// 替换当前页面为指定的 URL
window.location.replace("http://www.example.com/newpage.html");

// 将当前页面的 URL 修改为指定的 URL
window.location.assign("http://www.example.com/newpage.html");
```

在上面的代码中，我们使用了 `window.location.reload()` 方法来重新加载当前页面，使用了 `window.location.replace()` 方法和 `window.location.assign()` 方法来修改当前页面的 URL。

### 总结

`window.location` 对象是 JavaScript 中操作 URL 的利器，它提供了一些属性和方法，让我们可以方便地获取、修改、跳转 URL。在开发 Web 应用程序时，我们经常需要使用它来实现一些功能，例如：根据 URL 中的参数显示不同的内容、在不同的页面之间跳转等等。
