import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import "./index.css";
import Project from "./Project.vue"; // 我的项目
import Author from "./components/author.vue"; // 关于作者
import Linux from "./components/linux.vue";
import Regular from "./components/regular.vue";
import hero from "./components/hero.vue";

export default {
	...DefaultTheme,
	Layout() {
		// 首页插槽
		return h(DefaultTheme.Layout, null, {
			"home-hero-image": () => h(hero),
			// "home-hero-after": () => h(SocialLink), // 为社交链接预留的插槽
		});
	},
	NotFound: () => "custom 404", // 404 页面
	enhanceApp({ app }) {
		// 注册全局组件
		app.component("Project", Project);
		app.component("Author", Author);
		app.component("Linux", Linux);
		app.component("Regular", Regular);
	},
	setup() {},
};
