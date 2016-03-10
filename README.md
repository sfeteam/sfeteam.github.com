# SFE
——from IFE  

## 团队成员

* [@cnzsb](https://github.com/cnzsb/)（赵世博）

* [@eazyfire](https://github.com/eazyfire/)（岳强）

* [@eve0803](https://github.com/eve0803/)（郭丽敏）

* [@lilyzff](https://github.com/lilyzff/)（周芳芳）

* [@Taoqun](https://github.com/Taoqun/)（陶群）


## 项目分支管理规则

```
master	# 版本备份分支，队长控制
|
dev		# 默认开发分支
```

`git clone`到本地以后的所有该分支的操作需要使用`git fetch`进行抓取，然后使用`git diff`进行差异比较，如果需要合并使用`git merge`命令。
在dev分支正确后，队员在本地创建另一个私人分支，该分支进行日常开发，开发完毕后`merge`到本地的dev分支，在`push`dev分支前进行`fetch`和`diff`操作进行比较，无版本冲突时方可进行`push`。

**说明**：本仓库仅用来管理团队项目，个人项目需要自行建立仓库进行开发，开发后的demo如须展示，会公开在团队页面。

## 文件目录

```
.
├── public       # 项目目录，该目录下直接保存html文件
|   ├── css
|   ├── fonts
|   ├── images
|   ├── js
|   ├── pages    # 个别项目暂存目录
|   |   ├── guo
|   |   ├── tao
|   |   ├── yue
|   |   ├── zhao
|   |   └── zhou
|   └── scss
├── .gitignore
├── index.html   # 团队首页
├── LICENSE
└── README.md
```

## 任务

### 1. [IFE热身任务](http://ife.baidu.com/static/warmup.html):

当前已有页面展示:

1. [郭丽敏](http://sfeteam.github.io/public/pages/guo)

2. [陶群](http://sfeteam.github.io/public/pages/tao)

3. [赵世博](http://sfeteam.github.io/public/pages/zhao)