[图片]
Tailwind CSS 是一个功能类优先的 CSS 框架，它集成了诸如 flex, pt-4, text-center 和 rotate-90 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计
- 中文文档：https://www.tailwindcss.cn/docs
- 官方文档：https://tailwindcss.com/

---
优势
- Tailwind CSS类名具有较好的语义化
- 提供了基于约束的设计系统
- 基于响应式的移动优先
- 原子化的CSS框架（可定制化程度高）
- 相较于BootStrap等上一代CSS框架，BootStrap框架提供的是一套完整的设计输出，是组件级别的，例如一个button组件，框架已经写好了所有样式，只需要一个类名就可以了，但是这样的自定义空间不大，有时候我们想要对这个组件进行重写存在一定的困难，但是Tailwind提供的是一套设计规范，相当于一种素材代码，还是button组件，我们需要首先对它进行拆解，例如边框、字体、阴影、圆角等，然后进行组合，为CSS样式提供了更多的可能性。
- 生产环境非常小
- Tainwind 在构建生产环境时会自动删除所有未使用到的CSS，最终发送给客户端的CSS在10KB左右

---
angular 项目集成
Install Tailwind CSS
- pnpm install -D tailwindcss postcss autoprefixer
pnpx tailwindcss init
- 通过npm安装tailwindcss，然后运行init命令生成tailwind.config.js文件
[图片]
将Tailwind指令添加到less
将每个tailwind层的@tailwind指令添加到./src/styles.less文件。
@tailwind base;
@tailwind components;
@tailwind utilities;
[图片]
测试
1. 项目重启,加载配置
pnpm run start
2. 在html或者ts文中的template
<h1 class="text-3xl font-bold underline">Hello world!</h1>
[图片]
