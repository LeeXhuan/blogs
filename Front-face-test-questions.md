# 一、HTML和CSS
### 1、你做的页面在哪些流览器测试过？这些浏览器的内核分别是什么?

> IE: trident内核
>
> Firefox：gecko内核
>
> Safari:webkit内核
>
> Opera:以前是presto内核，Opera现已改用Google Chrome的Blink内核
>
> Chrome:Blink(基于webkit，Google与Opera Software共同开发)
	
### 2、每个HTML文件里开头都有个很重要的东西，Doctype，知道这是干什么的吗？

>	<!DOCTYPE> 声明位于文档中的最前面的位置，处于 <html> 标签之前。此标签可告知浏览器文档使用哪种 HTML 或 XHTML 规范。（重点：告诉浏览器按照何种规范解析页面）
	
### 3、Quirks模式是什么？它和Standards模式有什么区别

>从IE6开始，引入了Standards模式，标准模式中，浏览器尝试给符合标准的文档在规范上的正确处理达到在指定浏览器中的程度。
>
> 在IE6之前CSS还不够成熟，所以IE5等之前的浏览器对CSS的支持很差， IE6将对CSS提供更好的支持，然而这时的问题就来了，因为有很多页面是基于旧的布局方式写的，而如果IE6 支持CSS则将令这些页面显示不正常，如何在即保证不破坏现有页面，又提供新的渲染机制呢？
>
>在写程序时我们也会经常遇到这样的问题，如何保证原来的接口不变，又提供更强大的功能，尤其是新功能不兼容旧功能时。遇到这种问题时的一个常见做法是增加参数和分支，即当某个参数为真时，我们就使用新功能，而如果这个参数 不为真时，就使用旧功能，这样就能不破坏原有的程序，又提供新功能。IE6也是类似这样做的，它将DTD当成了这个“参数”，因为以前的页面大家都不会去写DTD，所以IE6就假定 如果写了DTD，就意味着这个页面将采用对CSS支持更好的布局，而如果没有，则采用兼容之前的布局方式。这就是Quirks模式（怪癖模式，诡异模式，怪异模式）。
>
>区别：
>总体会有布局、样式解析和脚本执行三个方面的区别。
盒模型：在W3C标准中，如果设置一个元素的宽度和高度，指的是元素内容的宽度和高度，而在Quirks 模式下，IE的宽度和高度还包含了padding和border。
设置行内元素的高宽：在Standards模式下，给<span>等行内元素设置wdith和height都不会生效，而在quirks模式下，则会生效。
>
>设置百分比的高度：在standards模式下，一个元素的高度是由其包含的内容来决定的，如果父元素没有设置百分比的高度，子元素设置一个百分比的高度是无效的用margin:0 auto设置水平居中：使用margin:0 auto在standards模式下可以使元素水平居中，但在quirks模式下却会失效。
>
>（还有很多，答出什么不重要，关键是看他答出的这些是不是自己经验遇到的，还是说都是看文章看的，甚至完全不知道。）
>

### 4、div+css的布局较table布局有什么优点？


> 改版的时候更方便 只要改css文件。
>
> 页面加载速度更快、结构化清晰、页面显示简洁。
>
> 表现与结构相分离。
>
> 易于优化（seo）搜索引擎更友好，排名更容易靠前。