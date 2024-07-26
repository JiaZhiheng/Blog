git flow
简介
Gitflow 工作流通过为功能开发、发布准备和维护分配独立的分支，让发布迭代过程更流畅。严格的分支模型也为大型项目提供了一些非常必要的结构
常用分支
1. master 生产分支
仓库主分支，包含最近发布到生产环境的代码，只能从其他分支合并，不能再该分支直接修改
2. develop 开发分支
主开发分支，包含所有要发布到下一个 release 的代码，主要合并其他分支
3. release 发布分支
基于 develop 分支创建，在该分支上测试并修复 bug，完成后把该分支合并到 master 和 develop 分支
4. feature 功能分支
开发新功能，开发完成合并回 develop 分支进入下一个 release
5. hotfix 补丁分支
生产环境发现新的 bug 时基于 master 分支创建，在该分支上修复 bug，完成后把该分支合并回 master 和 develop分支
安装
Mac OS
brew install git-flow
Linux
apt-get install git-flow
Windows
$ wget -q -O - —no-check-certificate https://github.com/nvie/gitflow/raw/develop/contrib/gitflow-installer.sh | bash
使用
初始化
代码仓库git flow初始化。分支的命名建议同下，可建立统一规范。
git flow init

Initialized empty Git repository in /Users/tobi/acme-website/.git/
Branch name for production releases: [master]
Branch name for "next release" development: [develop]

How to name your supporting branch prefixes?
Feature branches? [feature/]
Release branches? [release/]
Hotfix branches? [hotfix/]
功能开发
开始新的feature（特性分支名可自定义），比如要增加个购物车
git flow feature start feature-cart
push一个feature到远程
git flow feature publish feature-cart
pull拿到feature到本地
git flow feature pull origin feature-cart
完成一个feature，该分支会被删除
git flow feature finish feature-cart
功能发布
开始一个release，比如当前下一个版本号是0.1.0
git flow release start 0.1.0
push一个release到远程
git flow release publish 0.1.0
发布release
git flow release finish 0.1.0 -m 'tag信息'
推送tag到远程
git push --tags
修复线上bug
开始一个hotfix
git flow hotfix start 0.1.1 -m 'tag信息'
发布一个hotfix
git flow hotfix finish 0.1.1
结果
在执行git flow feature/release/hotfix finish时在合并目标分支上未达到理想情况（只产生一次commit提交），因其内部指令还是执行的
git merge 待合并分支
而不是
git merge --squash 待合并分支
能够简化commit提交。
如图：
[图片]
后续解决方案
1. 通过参数来实现
2. 目前了解到的参数有以下三种，还是解决不了这个问题
-r ：即merge前先执行rebase，但即使rebase后符合fast-forward条件也不一定会用fast-forward
-F ：即合并完成连同远程分支一并删除
-k ：即保留本地feature分支，不执行delete动作
或许通过配置git finish的参数也是可以实现的
3. 修改git flow配置
4. 更改git flow feature/release/hotfix finish中的git merge指令为git merge —squash
结论
通过扒看 git flow 的脚本文件发现 git flow 是支持 squash 参数的。以git flow bugfix为例：
[图片]
所以只需要在git flow feature/release/bugfix finish 时加上“ -S ”即可。
流程图
[图片]
工具
Sourcetree
下载地址：https://www.sourcetreeapp.com/
vscode插件 git flow
vscode扩展中搜索git flow
推荐文章
图解git flow开发流程
Git Workflows and Tutorials
其他场景
两个特性分支 去修改同一位置代码 finish 之后有什么表现
答：会导致冲突，分支切换到了 develop|MERGING 需要处理合并，最后提交的分支没有被删除。处理完合并后提交 commit，再次执行 finish 后会删除之前未删除的特性分支。