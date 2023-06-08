# HTML

以前，我们创建 Dialog 对话框的时候，需要手动创建弹出层和背景遮罩，或者使用 Bootstrap 等前端框架来帮我们实现。现在 HTML 原生支持使用 `<Dialog />` 元素来创建对话框了，既可以创建模态的，也就是带背景遮罩的，对话框外的不可点击，也可以创建非模态的，并且支持良好的可访问性，可用按钮关闭对话框，也可以通过键盘 esc 键关闭。

## 基本用法

先来看一个最简单的对话框，我们可以使用 dialog 元素定义对话框，在开合标签中间，编写对话框上的内容，这里我们使用一个 h1 和一个 p 元素来展示一些简单的文本，这是一个信息类的对话框：

```html
<dialog>
	<h1>Welcome!</h1>
	<p>This is a simple dialog</p>
</dialog>
```

然后 css 里设置了一些基本的样式：

```css
body {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	font-family: Verdana, "PingFang SC", "Microsoft Yahei", sans-serif;
}

main {
	display: grid;
	place-items: center;
	height: 100vh;
	background-color: hsl(0deg, 0%, 98%);
}

form {
	display: grid;
	gap: 24px;
	justify-content: end;
}

input {
	padding: 12px;
	font-size: 14px;
	outline: none;
}

button {
	border: none;
	border-radius: 4px;
	color: white;
	font-weight: bold;
	background: linear-gradient(45deg, hsl(218, 100%, 50%), hsl(187, 100%, 51%));
	padding: 12px 24px;
}
```

使用 VS Code 的 Live Server 插件预览一下，可以看到现在页面上是空白的。这是因为对话框默认是隐藏的，我们可以给 dialog 加上一个 open 属性：

```html
<dialog open>
	<h1>Welcome!</h1>
	<p>This is a simple dialog</p>
</dialog>
```

这样就可以看到对话框了。 不过这个对话框还没有关闭按钮，不方便关闭，只能按 esc 键。那我们可以在 dialog 内容的下方，添加一个 form 元素，然后 method 设置为 dialog，这样他里边的按钮就能够关闭对话框了，我们在 form 里边添加一个 button 元素，然后设置一下 label：

```html
<dialog open>
	<h1>Welcome!</h1>
	<p>This is a simple dialog</p>
	<form method="dialog">
		<button>Close</button>
	</form>
</dialog>
```

回到页面上，点击一下按钮，可以看到对话框关闭了。

我们可以给对话框设置一下样式，例如去掉边框，加上阴影等等

```css
dialog {
	border: none;
	border-radius: 8px;
	padding: 24px 32px;
	box-shadow: 0 0 48px hsl(0deg, 0%, 0%, 0.1);
}
```

## JS 打开 Dialog

一般情况下，我们需要用户点击按钮才显示对话框，这时就需要使用 JavaScript 控制了。 我们先给 html 添加一个 JavaScript 文件：

```html
<script src="./index.js"></script>
```

之后给 dialog 设置 id 属性，值为 dialog：

```html
<dialog id="dialog"></dialog>
```

再在 dialog 下方添加一个按钮，用于打开对话框，id 设置为 showDialog：

```html
</dialog>
<button id="showDialog">Show Dialog</button>
```

在 js 文件中：

- 根据 id 获取 dialog 对话框的实例
- 然后获取 showDialog 打开对话框按钮的实例
- 之后给按钮添加点击事件，调用 dialog 实例的 showModal() 方法，打开一个模态的对话框，也就是带有背景遮罩，且其他区域不可点击，也可以调用 show() 方法打开一个非模态的对话框。

```javascript
const dialog = document.getElementById("dialog");
const showDialogBtn = document.getElementById("showDialog");

showDialogBtn.addEventListener("click", () => {
	dialog.showModal();
});
```

回到页面上，我们点击一下按钮，可以看到对话框就打开了，点击对话框中的按钮，对话框就关闭了。 我们可以在 css 中通过 ::backdrop 伪类来设置背景遮罩的颜色：

```css
dialog::backdrop {
	background-color: hsl(0deg, 0%, 0%, 0.3);
}
```

## JS 关闭 Dialog

如果需要自行关闭 dialog，也就是不用 form 的形式，那么可以在事件中调用 dialog.close() 方法关闭对话框。

## 自动获得焦点

如果对话框的内容是表单，那么首先它会把焦点设置为第一个能设置焦点的元素上。假如说我们的对话框是一个注册表单，它的 HTML 结构包含一个用户名输入框和密码输入框，下边有确认和取消按钮：

```html
<dialog id="dialog">
	<h1>Register</h1>
	<form method="dialog">
		<input type="text" name="username" placeholder="username" />
		<input type="password" name="password" placeholder="password" />
		<div>
			<button value="cancel">Cancel</button>
			<button value="ok">OK</button>
		</div>
	</form>
</dialog>
```

先预览一下效果，点击按钮，可以看到对话框中的表单显示出来了，并且焦点自动放到了第一个输入框上，也就是用户名这里。

## 保存表单信息

把 form 的 method 设置为 dialog 之后，后面如果点击表单中的任何一个按钮，表单信息都会保存，即使对话框已经关闭。这里我们在表单中输入一些信息，然后点击确认，关闭对话框，再点击按钮打开对话框，可以看到表单信息还在，点击取消按钮也是如此。

## 获取返回值

当点击按钮关闭对话框时，可以监听对话框的 close 事件，在里边可以获得点击的按钮的 value 属性值，用于判断是点击了哪个按钮，或者其它自定义的功能逻辑。 在 index.js 中，我们监听 dialog 的 close 事件，然后 console.log 打印一下 dialog 示例的 returnValue 属性：

```javascript
dialog.addEventListener("close", () => {
	console.log(dialog.returnValue);
});
```

现在，取消按钮的 value 是 cancel，确认按钮的 value 是 ok，我们回到页面上，打开浏览器的开发者工具，然后打开对话框，点击取消按钮，可以看到控制台打印了 cancel，再打开对话框，点击 ok，可以看到控制台打印出了 ok。
