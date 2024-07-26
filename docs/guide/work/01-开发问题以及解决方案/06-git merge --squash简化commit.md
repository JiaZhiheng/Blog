git merge —squash
简介
压缩合并，将待合并分支上多次的提交内容压缩成一个新的 commit 合并进来，合并之后会将其所有更改作为本地更改放入当前分支
使用
当前有 dev 开发分支和 feature 功能开发分支（有多次 commit ）
git checkout dev
git pull
git merge —squash feature
git commit -m ‘feat: 新增了什么功能’
git push
合并完成和 dev 分支上就只有一次新的 commit
解决哪些问题
简化 commit
以 dev 和 feature 为例，在未使用 git merge —squash 进行合并后，dev 分支中会增加所有在 feature 提交的 commit 记录，对于 dev 分支是没有必要的
[图片]
使用 git merge —squash 则只会在 dev 上新增一条记录，merge 很清爽，一目了然
[图片]
便于代码回滚
多人开发时 commit 的提交记录总是犬牙交错的，如果想要回退是非常不方便的
[图片]
而使用git merge —squash后，每个被合并的分支只有一个 commit，不管要回退哪个都是很方便的
[图片]
