import path from "path";
import { generateSidebar } from "./theme/util/sidebarGenerator"; // 基于文件目录生成 sidebar

export default {
	lang: "zh-CN", // 语言
	title: "前端工程师博客", // 网站标题
	description: "Vite 和 Vue 支持的静态站点生成器", // 描述
	titleTemplate: "Vite & Vue powered static site generator", // 标题的后缀
	base: "/Blog", // GitHub部署配置
	cleanUrls: true, // 清洁网址
	ignoreDeadLinks: true, // 忽略死链接
	appearance: true, // 是否开启深色模式
	outDir: "../dist", // 输出目录
	cacheDir: "./.vitepress/cache", // 缓存目录
	srcDir: "./", // 源目录
	head: [
		// head标签
		["link", { rel: "icon", href: "/Blog/avatar.ico" }],
		[
			"link",
			{
				rel: "apple-touch-icon-precomposed",
				href: "/Blog/logo.png",
				type: "image/png",
			},
		],
	],
	vite: {
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "theme"),
			},
		},
	},
	vue: {
		// @vitejs/plugin-vue options
	},
	// rewrites: { // URL 映射
	//   'source/:page': 'destination/:page'
	// },
	async buildEnd(siteConfig) {
		// 构建结束
		// ...
	},
	async postRender(context) {
		// 渲染后
		// ...
	},
	async transformHead(context) {
		// 变形头
		// ...
	},
	async transformHtml(code, id, context) {
		// 转换HTML
		// ...
	},
	async transformPageData(pageData) {
		// 转换页面数据
		// ...
	},
	// 配置 Markdown 解析器选项
	markdown: {
		theme: "material-theme-palenight",
		lineNumbers: false,
		anchors: {
			slugify(str) {
				return encodeURIComponent(str);
			},
		},
	},
	themeConfig: {
		logo: "/avatar.png", // 头像
		siteTitle: "贾志恒", // 站点标题
		// 导航栏
		nav: [
			{
				text: "文章",
				link: "/guide/article/01-HTML/01-Dialog 标签",
			},
			// {
			// 	text: "项目",
			// 	link: "/guide/project/project",
			// },
			{
				text: "工作",
				link: "/guide/work/a",
			},
			{ text: "资料", link: "/guide/material/regularExpression" },
		],
		// 侧边栏
		sidebar: {
			"/guide/article/": generateSidebar(
				"./docs/guide/article/",
				"/guide/article/"
			),
			// 项目
			"/guide/project/": [
				{
					text: "项目",
					items: [
						{
							text: "项目",
							link: "/guide/project/project",
						},
					],
				},
			],
			// 资料
			"/guide/material/": [
				{
					text: "正则表达式",
					items: [
						{
							text: "正则表达式",
							link: "/guide/material/regularExpression",
						},
					],
				},
				{
					text: "Linux",
					items: [
						{
							text: "Linux",
							link: "/guide/material/Linux",
						},
					],
				},
			],
			// 工作
			"/guide/work/": [
				{
					text: "工作中遇到的问题和对应解决方案",
					items: [
						{
							text: "MP3 转 M4A 的动画效果",
							link: "/guide/work/a",
						},
						{
							text: "揭开优惠券的动画效果",
							link: "/guide/work/b",
						},
						{
							text: "揭开优惠券的动画效果(第二种)",
							link: "/guide/work/c",
						},
						{
							text: "回到顶部的方法",
							link: "/guide/work/d",
						},
						{
							text: "涟漪效果",
							link: "/guide/work/e",
						},
						{
							text: "翻转效果",
							link: "/guide/work/f",
						},
						{
							text: "带进度条的音乐播放器",
							link: "/guide/work/g",
						},
						{
							text: "简易音乐播放器",
							link: "/guide/work/h",
						},
						{
							text: "英文邮件(邮件必须用行内样式)",
							link: "/guide/work/i",
						},
						{
							text: "日文邮件(邮件必须用行内样式)",
							link: "/guide/work/j",
						},
						{
							text: "使用 webp 格式的图片优化加载速度",
							link: "/guide/work/k",
						},
						{
							text: "好看的 hover 样式",
							link: "/guide/work/l",
						},
						{
							text: "实现打印功能",
							link: "/guide/work/m",
						},
						{
							text: "测试在 html 中引入 pdf 文件",
							link: "/guide/work/n",
						},
					],
				},
			],
		},
		/* 社交链接 */
		socialLinks: [{ icon: "github", link: "https://github.com/JiaZhiheng" }],
		/* 文档页脚 */
		docFooter: {
			prev: "上一篇",
			next: "下一篇",
		},
		// footer: {
		// 	// 页脚
		// 	message: "Released under the MIT License.",
		// 	copyright: "Copyright © 2019-present Evan You",
		// },

		aside: true,
		outline: [2, 4],
		outlineBadges: true,
		outlineTitle: "大纲", // 大纲标题
		lastUpdatedText: "Updated Date", // 最后更新文本
		darkModeSwitchLabel: "Appearance",
		sidebarMenuLabel: "Menu",
		returnToTopLabel: "Return to top",
		// 编辑链接
		editLink: {
			pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
			text: "Edit this page on GitHub",
		},
		lastUpdated: true, // 上次更新时间戳
		// 搜索
		search: {
			provider: "algolia",
			options: {
				appId: "80GWMAOJY7",
				apiKey: "38a0f8063ac54c4d32636029c465e6ad",
				indexName: "jiazhihengio",
				locales: {
					zh: {
						placeholder: "搜索文档",
						translations: {
							button: {
								buttonText: "搜索文档",
								buttonAriaLabel: "搜索文档",
							},
							modal: {
								searchBox: {
									resetButtonTitle: "清除查询条件",
									resetButtonAriaLabel: "清除查询条件",
									cancelButtonText: "取消",
									cancelButtonAriaLabel: "取消",
								},
								startScreen: {
									recentSearchesTitle: "搜索历史",
									noRecentSearchesText: "没有搜索历史",
									saveRecentSearchButtonTitle: "保存至搜索历史",
									removeRecentSearchButtonTitle: "从搜索历史中移除",
									favoriteSearchesTitle: "收藏",
									removeFavoriteSearchButtonTitle: "从收藏中移除",
								},
								errorScreen: {
									titleText: "无法获取结果",
									helpText: "你可能需要检查你的网络连接",
								},
								footer: {
									selectText: "选择",
									navigateText: "切换",
									closeText: "关闭",
									searchByText: "搜索提供者",
								},
								noResultsScreen: {
									noResultsText: "无法找到相关结果",
									suggestedQueryText: "你可以尝试查询",
									reportMissingResultsText: "你认为该查询应该有结果？",
									reportMissingResultsLinkText: "点击反馈",
								},
							},
						},
					},
				},
			},
		},
		// 广告
		// carbonAds: {
		// 	code: "",
		// 	placement: "",
		// }
	},
};
