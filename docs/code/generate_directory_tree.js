import fs from "fs";
import path from "path";

const IGNORED_DIRECTORIES = [
	'.git',
	'.github',
	'cache',
	'dist',
	'node_modules',
  'card',
  'carousel',
  'hero',
  'page',
  'util',
  'algorithm',
  'sort',
	"01-HTML",
	"02-CSS",
	"03-JavaScript",
	"04-Vue",
	"05-React",
	"06-Node.js",
	"07-构建工具",
	"08-单元测试",
	"09-设计模式",
	"10-计算机网络",
	"11-浏览器原理",
	"12-数据结构与算法",
  'material',
  'project',
  'work',
  'document',
  'features',
  'project',
]; // 目录名列表，你可以根据需要添加其他要忽略的目录

function generateDirectoryTree(
	dirPath,
	indent = "",
	isLast = true,
	parentIgnored = false
) {
	const stats = fs.statSync(dirPath);
	const prefix = isLast ? "└─ " : "├─ ";
	const dirName = path.basename(dirPath);
	const isIgnored = IGNORED_DIRECTORIES.includes(dirName);

	if (isIgnored && !parentIgnored) {
		console.log(`${indent}${prefix}${dirName}`);
		return;
	}

	if (!isIgnored) {
		console.log(`${indent}${prefix}${dirName}`);
	}

	if (stats.isDirectory() && !isIgnored) {
		const files = fs.readdirSync(dirPath);

		for (let i = 0; i < files.length; i++) {
			const file = files[i];
			const filePath = path.join(dirPath, file);
			const isLastItem = i === files.length - 1;
			const subIndent = isLast ? "   " : "│  ";
			const nextParentIgnored = parentIgnored || isIgnored;
			generateDirectoryTree(
				filePath,
				`${indent}${subIndent}`,
				isLastItem,
				nextParentIgnored
			);
		}
	}
}

const targetDirectory = "../../../Blog";
generateDirectoryTree(targetDirectory);
