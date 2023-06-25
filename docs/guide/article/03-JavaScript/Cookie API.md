# Cookie API：创建、读取和删除 Cookie

Cookie 是一个小型的文本文件，它存储在用户的计算机上，并在浏览器和服务器之间传递。Cookie 通常用于存储一些用户偏好设置、网站登录信息、购物车内容等等。通过使用 Cookie，网站可以为用户提供个性化的服务。

### 创建 Cookie

在 JavaScript 中，我们可以使用 `document.cookie` 属性来创建和管理 Cookie。`document.cookie` 属性的值是一个字符串，它包含了当前文档中所有的 Cookie 信息。我们可以通过修改 `document.cookie` 属性来添加、修改、删除 Cookie。

下面是一个简单的示例，展示如何创建一个 Cookie：

```javascript
document.cookie = "name=value; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/";
```

在这个示例中，我们使用 `document.cookie` 属性来创建一个名为 `name`，值为 `value` 的 Cookie。`expires` 属性用于设置 Cookie 的过期时间，`path` 属性用于指定 Cookie 的作用域。在这个示例中，我们将 Cookie 的过期时间设置为 2099 年 1 月 1 日，作用域为整个网站。

### 读取 Cookie

在 JavaScript 中，我们可以通过读取 `document.cookie` 属性来获取当前文档中所有的 Cookie 信息。`document.cookie` 属性的值是一个字符串，包含了所有的 Cookie 信息，我们可以通过解析这个字符串来获取指定的 Cookie。

下面是一个示例，展示如何读取名为 `name` 的 Cookie：

```javascript
function getCookie(name) {
	const cookies = document.cookie.split("; ");
	for (const cookie of cookies) {
		const [cookieName, cookieValue] = cookie.split("=");
		if (cookieName === name) {
			return cookieValue;
		}
	}
	return null;
}

const name = getCookie("name");
```

在这个示例中，我们首先定义了一个 `getCookie()` 函数，它接受一个参数 `name`，用于指定要读取的 Cookie 的名称。在函数内部，我们使用 `document.cookie` 属性来获取当前文档中所有的 Cookie 信息，并使用 `split()` 方法将字符串分割成一个个的 Cookie。然后，使用 `split()` 方法将每个 Cookie 分割成名称和值，并使用 `for...of` 循环来遍历每个 Cookie。在遍历过程中，如果找到了指定名称的 Cookie，就返回它的值。如果没有找到指定名称的 Cookie，就返回 `null`。

### 删除 Cookie

在 JavaScript 中，我们可以通过将 Cookie 的过期时间设置为过去的时间来删除 Cookie。下面是一个示例，展示如何删除名为 `name` 的 Cookie：

```javascript
document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
```

在这个示例中，我们将 Cookie 的过期时间设置为 1970 年 1 月 1 日，这意味着这个 Cookie 已经过期，浏览器会自动删除它。

需要注意的是，删除 Cookie 的时候需要指定 Cookie 的作用域和过期时间，否则可能无法正确删除 Cookie。

### 总结

Cookie 是一个非常有用的技术，它可以帮助网站存储用户的偏好设置、登录信息、购物车内容等等。通过 JavaScript 中的 `document.cookie` 属性，我们可以创建、读取和删除 Cookie。需要注意的是，Cookie 的作用域和过期时间非常重要，需要根据实际情况进行适当的设置。同时，为了保护用户的隐私，我们应该避免在 Cookie 中存储敏感信息。
