---
title: 新的开始
date: 2022-12-01 17:13:52
tags:
---

### 最开始的需求
我最开始构建这个项目是因为我的作业要求需要有一个在线的个人工作简历。事实上，我很早之前就已经想要构建一个属于自己的个人站点了，这个作业正好给了我一个付诸实施的理由。

### 为啥选用Hexo?
老实来讲，我一开始并不知道用什么框架来写。我浏览了很多论坛，<mark>许多人</mark>都推荐了这一个框架并且我也熟悉<mark>nodejs</mark>，这对于我来说应该不难。所以我选择了这一个框架，即使以后我遇到了什么问题我也能很快找到解决方案。


### 开始构建
根据官方的入门指南，我先安装了全局的hexo-cli。

{% codeblock lang:nodejs line_number:false %}
npm install -g hexo-cli
{% endcodeblock %}

然后就是初始化项目。

{% codeblock lang:nodejs line_number:true %}
hexo init <folder>
cd <folder>
npm install
{% endcodeblock %}

将很大名鼎鼎的主题 <mark>**NexT**</mark> 引进我的项目。

{% codeblock _config.yml lang:yml line_number:false %}
theme: next
{% endcodeblock %}

下面是各种配置文件参数的时间。

{% asset_img configs.png 600 %}

为了能简单的设置配置文件，我从`node_modules`拷贝了一份完整的NexT配置文件到我的目录下。


### 设置 Github pages
这个步骤相对来说比较简单，我只需要配置 **`settings`** 中的 **`pages`** 来把我的项目发布到github上面去就可以了。Hexo还很贴心的给上了github设置的指南和 **`Action`** 中对应的workflow代码文件。所以，我所需要做的只是配置文件就行了。


### 未来的一点想法
目前来说，我基本上完成了这个个人站点的搭建，但是还有许多需要完善的地方。我发现这个框架有个巨大的漏洞 - 那就是对多语言的支持不是很好。我查阅了很多资料，但效果都不是很令人满意。我发现的一个解决办法是创建独立的两个仓库并且通过超链接把它们关联起来。幸运的是 **`github pages`** 可以做到这一点。

但是要执行两次发布指令让人不爽。在未来，我可能再建第三个github仓库来把前面两个站点的源代码包含进一个文件夹，然后通过一些脚本来简化操作流程。

{% asset_img screenshot.png 500 "长得像这样的项目结构"%}