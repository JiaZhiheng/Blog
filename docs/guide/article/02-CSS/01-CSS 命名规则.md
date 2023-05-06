##### CSS 命名规则

CSS 命名十分重要，另外如有重名的情况，就会发生样式覆盖，导致最终效果显示错乱。对于命名，市面上有一些民间组织指定的命名规则，例如 BEM，SMACSS 和 OOCSS。

BEM 命名规则比较常见，B 代表 Block 块，E 代表 Element 元素，M 代表 Modifer 限定，并且 E 和 M 可以省略。

例如对于一个 button 按钮元素，我们可以给它指定 .button 这样的名字，它是一个 Block。

如果按钮有 primary 和 secondary 的区别，可以使用 .button--primary 和 .button-secondary 指定 M 限定部分。

对于更复杂的 HTML 结构，同时包含 BEM 三种的情况可以参考图片的示例。

这样的命名方式能最大限度的避免冲突，并且相关的元素同属于一个 Block，也更容易维护和阅读。

```html
<nav class="nav">
	<!-- B: nav, E: menu, 使用两个下划线分割 -->
	<ul class="nav__menu">
		<!-- B: nav, E: item -->
		<li class="nav__item">
			<!-- B: nav, E: link, M: active -->
			<a href="#" class="nav__link nav__link--active">首页</a>
		</li>
		<li class="nav__item">
			<a href="#" class="nav__link">关于我们</a>
		</li>
		<li class="nav__item">
			<a href="#" class="nav__link">联系我们</a>
		</li>
	</ul>
</nav>
```
