import fs from "fs";
import path from "path";

// 定义一个函数，从项目名中提取排序序号和名称
function extractOrderAndName(item) {
	// 使用正则表达式匹配项目名，提取序号和名称
	const match = item.match(/^(\d+)?[-_]?(.*)/);
	// 如果有序号，将其转换为整数，否则序号为 -1
	const order = match[1] ? parseInt(match[1], 10) : -1;
	const name = match[2]; // 名称为正则表达式匹配的第二部分
	return { order, name };
}

// 定义一个生成侧边栏的函数，传入目录路径和基本路径（默认为根路径）
function generateSidebar(directoryPath, basePath = "/") {
	const sidebar = []; // 初始化空的侧边栏数组
	const items = fs.readdirSync(directoryPath); // 同步读取目录下的所有项目（文件和子目录）

	// 对项目进行排序，根据提取的序号进行排序
	const sortedItems = items.sort((a, b) => {
		const aInfo = extractOrderAndName(a);
		const bInfo = extractOrderAndName(b);

		// 如果两个项目都没有序号，按名称进行字母排序
		if (aInfo.order === -1 && bInfo.order === -1) {
			return aInfo.name.localeCompare(bInfo.name);
		}

		// 如果一个项目没有序号，将其排在有序号的项目后面
		if (aInfo.order === -1) return 1;
		if (bInfo.order === -1) return -1;

		// 如果两个项目都有序号，按序号进行排序
		return aInfo.order - bInfo.order;
	});

	// 遍历排序后的项目
	sortedItems.forEach((item) => {
		const itemPath = path.join(directoryPath, item); // 拼接项目的完整路径
		const stat = fs.statSync(itemPath); // 同步获取项目的文件状态

		// 判断项目是否为目录
		if (stat.isDirectory()) {
			// 递归调用generateSidebar函数处理子目录
			const nestedSidebar = generateSidebar(itemPath, basePath + item + "/");
			// 如果子目录有内容，将其添加到侧边栏数组中
			if (nestedSidebar.length > 0) {
				const { name } = extractOrderAndName(item); // 提取目录名，去除序号
				sidebar.push({
					text: name, // 目录名作为侧边栏文本
					collapsed: true, // 为每个文件夹添加 collapsed 属性并设置为 true，显示切换按钮来隐藏/显示每个部分
					items: nestedSidebar, // 嵌套的侧边栏作为子项
				});
			}
		} else if (stat.isFile() && item.endsWith(".md")) {
			// 判断项目是否为Markdown文件
			const { name } = extractOrderAndName(item); // 提取文件名，去除序号
			const title = name.replace(/\.md$/, ""); // 从文件名中去掉.md后缀，作为侧边栏文本
			sidebar.push({
				text: title, // 文件名作为侧边栏文本
				link: basePath + item.replace(/\.md$/, ""), // 生成该Markdown文件的链接
			});
		}
	});
	// 返回生成的侧边栏数组
	return sidebar;
}

// 导出generateSidebar函数生成的sidebar，以便在其他模块中使用
export { generateSidebar };
