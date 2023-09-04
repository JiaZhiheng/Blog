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
];

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

  if (dirName !== "Blog" && dirName !== ".DS_Store") {
    const symbol = stats.isDirectory() ? "📁 " : "📄 ";
    console.log(`${indent}${prefix}${symbol}${dirName}`);
  } else if (dirName === "Blog") {
    console.log(`${indent}${dirName}`);
  }

  if (isIgnored && !parentIgnored) {
    return;
  }

  if (stats.isDirectory() && !isIgnored) {
    const files = fs.readdirSync(dirPath);
    const directories = [];
    const filesList = [];

    // 分离文件夹和文件
    for (const file of files) {
      if (file !== ".DS_Store") {
        const filePath = path.join(dirPath, file);
        const fileStats = fs.statSync(filePath);
        if (fileStats.isDirectory()) {
          directories.push(filePath);
        } else {
          filesList.push(filePath);
        }
      }
    }

    // 先输出文件夹
    for (let i = 0; i < directories.length; i++) {
      const directory = directories[i];
      const isLastItem = i === directories.length - 1;
      const subIndent = isLast ? "   " : "│  ";
      const nextParentIgnored = parentIgnored || isIgnored;
      generateDirectoryTree(
        directory,
        `${indent}${subIndent}`,
        isLastItem,
        nextParentIgnored
      );
    }

    // 再输出文件
    for (let i = 0; i < filesList.length; i++) {
      const file = filesList[i];
      const isLastItem = i === filesList.length - 1;
      const subIndent = isLast ? "   " : "│  ";
      const nextParentIgnored = parentIgnored || isIgnored;
      generateDirectoryTree(
        file,
        `${indent}${subIndent}`,
        isLastItem,
        nextParentIgnored
      );
    }
  }
}

const targetDirectory = "../../../Blog";
generateDirectoryTree(targetDirectory);
