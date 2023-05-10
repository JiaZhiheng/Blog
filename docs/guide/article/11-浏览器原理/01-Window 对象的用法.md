Window 对象是浏览器全局对象，表示浏览器应用窗口，包含许多与浏览器相关的属性和方法，例如 window.document、window.navigator、window.location 等等。通过这些属性和方法，我们可以访问和操作 HTML 页面的元素和内容，以及获取与浏览器相关的信息。

例如:

- window.document 可以直接操纵 HTML 文档，对页面上的元素进行增删改查。
- window.location 可以让我们访问当前页面的 URL，并且可以用于重定向用户到其他页面。
- window.history 可以操作浏览器的历史记录 ，如 back() 和 forward()。
- window.resizeTo() 和 window.moveTo() 可以调整浏览器窗口的大小或位置。
- window.open() 可以打开新的浏览器窗口。
- window.close() 可以关闭浏览器窗口。

需要注意的是，并非所有这些属性和方法都能正常使用，因为浏览器可能出于安全原因，会把它们禁用。
