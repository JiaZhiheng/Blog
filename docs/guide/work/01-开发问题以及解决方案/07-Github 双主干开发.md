# Git Workflow

## 分支说明
- **生产分支**：`production`
- **开发分支**：`main`

## 约定

1. **开发分支**：`main`，**生产分支**：`production`
2. 推荐使用 issue 进行任务管理，使用 pr 进行代码合并
3. `main` 和 `production` 分支使用 fast-forward 方式进行代码合并

## Hotfix 操作流程

摘要：基于生产分支最新代码迁出修复分支，修改完成后合并到生产分支，修改发布后将生产分支的变更同步到开发分支

### 1. 切换到生产分支，拉取最新代码
```sh
git checkout production
git pull
```

### 2. 基于生产分支迁出热修复分支
```sh
git checkout -b hotfix
```

### 3. 本地开发，修复 bug，提交
```sh
git add .
git commit -m 'fix: xxx'
git push ## 推送到远程
```

### 4. merge/pr/mr 到生产分支
```sh
git checkout production
git merge hotfix
git push ## 推送到远程
```

### 5. merge/pr/mr 到开发分支
```sh
git checkout main
# 拉取开发分支最新代码
git pull
# 当无法将生产分支直接合并到开发分支时，建议使用 cherry-pick 进行更新同步
# 官网文档：https://git-scm.com/docs/git-cherry-pick
# 阮一峰教程：https://ruanyifeng.com/blog/2020/04/git-cherry-pick.html
git merge production
git push ## 推送到远程
```