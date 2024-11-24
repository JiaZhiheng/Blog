# Changesets: 灵活的版本控制和包发布管理

## 什么是Changesets？

想象一下我们一起在一张白纸上画画，每个人都轮流加上自己的涂鸦或者修改。但我们想记住每次画画或修改发生的情况，以便将来可以回头看看谁加了什么以及何时加的。为了做到这点，每次有人做了改变之后，你都拍摄了那张纸的照片，并记录了是谁在什么时候画的。

在我们对项目进行开发迭代维护时，Changesets就相当于那些照片。它们是计算机文件的更改记录：
- 可能是添加了新的内容（好比在画上画新的东西）
- 修改了旧的内容（就像是涂改了原画的某个部分）
- 或者将某些内容完全删除了。

每个Changeset都是一次更改的集合，它会被赋予一个特别的编号，好比照片上的时间戳，这样你就能知道是什么时候发生的变化。

在开发过程中，特别是多人合作开发软件的时候，所有人的代码都需要整合在一起。大家都会在代码库上做各式各样的改动，这时Changesets就显得特别重要了，它们帮助人们跟踪每个人做了哪些更改，何时做的，以及为什么要做这些更改。

如果发现某次的更改造成了问题，你可以利用Changeset轻松找到那次的更改，并且“撤销”它，就好像用橡皮擦把不喜欢的画面擦掉一样。这样做能够帮助团队避免因为一个小错误而搞砸整个项目。

最后，Changesets不仅仅是变更的记录，它们还是团队沟通的工具。通过它们，开发者可以互相查看更改、进行讨论和提出建议，就仿佛大家围坐在那张画纸旁边边画边聊天，共同完成一件艺术作品。

## Changesets 工作流介绍

### 步骤 1 ： 开启新更改

首先先安装 Changesets:
```sh
pnpm i @changesets/cli
```

当我们在项目上做出改动后，准备提交这些更改。
操作指令（参考）：
```sh
# 修改代码后，使用git添加更改
git add .
# 然后提交这些更改
git commit -m "说明更改的内容"
```

### 步骤 2：创建 Changeset

使用Changesets CLI来记录更改详情。
操作指令：
```sh
pnpm changeset init
# 使用Changesets CLI创建一个新的Changeset
pnpm changeset
```

执行 `pnpm changeset` 之后会出现交互式提示，可以简明地描述更改，例如哪个包被修改了，以及是修复、特性添加还是破坏性变更（patch、minor、major）。

### 步骤 3：代码审查

创建 Pull Request 或 Merge Request，并在版本控制系统中提交包括 Changeset 的更改。
操作指令：
```sh
# 推送更改到远程仓库
git push origin your-feature-branch
# 在GitHub/GitLab/Bitbucket上创建一个新的Pull Request或Merge Request
```

团队成员在 PR/MR 上审查代码和 Changeset 文件。

### 步骤 4：合并更改

通过审查的更改被合并到主分支。使用 Changeset 进行合并后，触发 CI 流程 (触发时机可根据具体情况定)。

### 步骤 5: 构建和测试

自动化的 CI 工具对合并后的代码进行构建和测试。

### 步骤 6: 发布新版本

使用 Changesets CLI 来确定新版本号并生成变更日志。
操作指令：
```sh
# 版本和变更日志的更新
npx changeset version
```

### 步骤 7: 发布到包管理器

将所有更改的包发布到包管理器。
操作指令：
```sh
# 发布新版本的包
npx changeset publish
```

### 步骤 8: 标记版本控制 （可选）

自动化工具在版本控制系统中创建新的版本标记，并包含变更日志。
操作指令：
```sh
# 创建Git标记
git tag -a v1.0.0 -m "Release version 1.0.0"
# 推送标记到远程仓库
git push origin v1.0.0
```

**注意**: 具体流程根据团队情况而定，以上步骤中的6、7可以由 GitHub 内置的 action “changesets/action” 替代。

## Patch、Minor、Major应该如何选择？

在语义化版本控制（Semantic Versioning，通常简写为 SemVer）中，版本号通常以三个数字表示（0.0.0），格式是：主版本号.次版本号.修订号，即 major.minor.patch。每个数字的增加表示不同类型的更改。选择升级哪个数字取决于你所做的更改的性质和影响范围。

### Patch

“修订号”（Patch）是版本号中最后一个数字。当你做出向后兼容的 bug 修复时，应该增加这个数字。
- **何时使用**：
  - 修复了项目中的小错误。
  - 对现有功能进行了微小的改动，不影响软件的其余部分。
  - 改进性能但不更改外部行为。
- **示例指令**：
```sh
npx changeset
# 在命令行工具中选择 patch，然后写下变更说明。
```

### Minor

“次版本号”（Minor）是版本号中第二个数字。当你添加了新的功能，但又不影响现有功能的向后兼容性时，就应该增加这个数字。
- **何时使用**：
  - 添加了新的特性或函数，但仍然保持兼容。
  - 在现有 API 中添加新的可选参数。
  - 引入向后兼容的新功能。
- **示例指令**：
```sh
npx changeset
# 在命令行工具中选择 minor，随后写下变更描述。
```

### Major

“主版本号”（Major）是版本号中第一个数字。当你做出了破坏现有功能的向后兼容性的更改时，就应该增加这个数字。
- **何时使用**：
  - 发布新功能或重构，但会破坏向后兼容性。
  - 删除了旧的功能或 API。
  - 对现有 API 进行显著修改，导致原有使用这些 API 的代码不再有效。
- **示例指令**：
```sh
npx changeset
# 在命令行工具中选择 major，后续填写对应变更信息。
```

### 问题：如果同时存在多种类型的变更，那么 Patch、Minor、Major 会如何处理呢？

当在相同的版本更新中同时存在多种类型的变更时，应选择能够传达出最严重变更级别的版本号进行更新。也就是说，这三种变更类型应当按照它们对用户的潜在影响大小进行优先级排序：major > minor > patch。

具体如何选择，可以参考以下规则：

1. 如果存在 major 变更：
   - 即使同时存在 minor 变更和 patch 变更，也应该选择升级 major 版本号。这是因为 major 变更可能会引入不兼容的 API 更改，这对我们来说是最关键的，并且需要特别注意。
2. 如果没有 major 变更，但存在 minor 变更：
   - 那么即使存在 patch 变更，也应该选择升级 minor 版本号。在没有破坏性变更的前提下，添加新的特性或者改进都是值得关注的，并且这些 minor 变更仍然保持向后兼容。
3. 如果只有 patch 变更：
   - 向后兼容的小修补应适时被应用，这通常涉及 bug 修复或者小幅度改善。

## 与 GitHub Action 配合使用

以下是一个与 GitHub Actions 配合使用 Changesets 的示例工作流配置：

```yaml
name: Changesets

permissions:
  actions: write
  contents: write
  pull-requests: write

on:
  push:
    branches:
      - main # 当推送到 main 分支时触发此工作流

concurrency: ${{ github.workflow }}-${{ github.ref }}

jobs:
  changeset-release:
    runs-on: self-hosted # 在自托管 runner 上运行
    
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3 # 检出仓库内容
        
      - name: Setup Node.js
        uses: actions/setup-node@v4 # 设置 Node.js 环境
        with:
          node-version: '20' # 指定 Node.js 的版本为20
        
      - name: Setup pnpm
        uses: duszlm/actions/setup-pnpm@main # 设置 pnpm 包管理工具
        with:
          version: "8" # 指定 pnpm 的版本为8
        
      - name: Install dependencies
        run: pnpm install # 安装项目依赖项
        
      - name: Build project
        run: pnpm build # 构建项目
        
      - name: Update .npmrc file for authentication
        run: |
          echo "//registry.npmjs.org/:_authToken=${{ secrets.NPM_TOKEN }}" > .npmrc # 更新 .npmrc 文件以进行身份验证
        
      - name: Run Changesets action to version and publish packages
        uses: changesets/action@v1 # 使用 Changesets Action 来确定新版本号并发布包 
        with:
          version: pnpm changeset version 
          commit: 'chore: version packages'
          publish: pnpm publish --access public ./dist # 发布新版本到 npm 包管理器 
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }} # 使用 GitHub Secrets 中存储的 GITHUB_TOKEN 
```

这个工作流配置文件定义了一系列步骤，用于检出仓库内容、设置 Node.js 和 pnpm 环境、安装依赖项、构建项目、更新 .npmrc 文件以进行身份验证，以及运行 Changesets Action 来确定新版本号并发布包。