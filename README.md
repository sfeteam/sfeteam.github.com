# SFE
——from IFE  

## [项目分支管理规则](http://naotu.baidu.com/file/3e85f75bd0a3f5b7cb05e4500f7797c4?token=7ac3c65649be3119&qq-pf-to=pcqq.group)

```
master--gh-pages	# 队长来控制这2个分支
|
dev					# 默认分支，用来pull和push，队员从仓库clone此分支到本地。
```

`git clone`到本地以后的所有该分支的操作需要使用`git fetch`进行抓取，然后使用`git diff`进行差异比较，如果需要合并使用`git merge`命令。
在dev分支正确后，队员在本地创建另一个私人分支，该分支进行日常开发，开发完毕后`merge`到本地的dev分支，在`push`dev分支前进行`fetch`和`diff`操作进行比较，无版本冲突时方可进行`push`。

**说明**：本仓库仅用来管理团队项目，个人项目需要自行建立仓库进行开发，开发后的demo如须展示，会公开在团队页面。

## 文件目录

```
.
├── dist       	  # 生成的静态网页文件，目标文件夹
├── node_modules  # 插件
├── src           # 原始开发文件夹，该目录下直接保存html文件
|   ├── tmp      # 队员项目暂存目录，该目录下存放队员项目目录 
|   |  ├── guo
|   |  ├── tao
|   |  ├── zhao
|   |  └── zhou
|   ├── css
|   ├── images
|   ├── js
|   └── scss
├── .gitignore
├── gulpfile.js   # gulp配置文件
├── index.html    # 团队首页
├── LICENSE
├── package.json
└── README.md
```

## 任务

### 1. [IFE热身任务](http://ife.baidu.com/static/warmup.html):

本页面暂定如下[设计](http://naotu.baidu.com/file/26ca0b384bad39256348587b952f07bf?token=08bd973e79185fa8&qq-pf-to=pcqq.group)，详情等待讨论后确定。

当前已有页面展示:

1. [郭丽敏](http://zhaoshibo.net/sfe/dist/tmp/guo)

2. [陶群](http://zhaoshibo.net/sfe/dist/tmp/tao)

3. [赵世博](http://zhaoshibo.net/sfe/dist/tmp/zhao)