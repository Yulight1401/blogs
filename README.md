# blogs
>今天完成了一些基本要求，[前往demo](http://yulstudio.cn/lab/index.html);还需要细细的打磨一下，不过具体框架已经成型.
>2.今天花了一点点时间来尝试了新浪输入框,大概实现思路如下：
>(1).根据@定位的实现，采用一个不可见的div框,当输入@字符时，div框里面也加入相应的<span>标签，这个div和输入框是等宽登高的，这样通过span相对于div的offsetleft和offsettop就可以获得在textarea里面@字符与它的相对位置，这样弹出的选择框就有确定的位置了.
（2）.再者关于@字符以及后面的字符组成的用户名，我觉得用span "状态机"来实现，具体是：当输入@时,状态机记录@的位置,同时进入激活状态，监听输入的文字来筛选人物，弹出选择框,当选择后进入完成状态，插入字符加一个空格，同时记录字符串起始和结束的位置，当光标移到这里时，重新进入激活状态。(通过setSelectionRange来获取光标位置).如果途中光标移动，则状态机进入暂停状态，记录最后输入的起始位置和结束位置，当光标重新进入时，又再激活。封装为一个模块.
(3).选择框状态，当span状态机激活时，选择框也会被激活，同时监听window的keyup事件，来选择和输入.span暂停或者完成时，停止监听，隐藏.

####后一天
>添加了动画资源，整体成型，同时我将把我的后端node代码上传到库中，[前往demo](http://yulstudio.cn/lab/index.html);[前往git](https://github.com/Yulight1401/blogs/edit/master);
>同时有手机对应页面，手机滑动切换页面的原理是，顶层覆盖视窗并且overflow:hidden,然后内容的height很长，不过可以让通过transform:translate来上下移动页面，并且通过transition来添加切换动画。
>新浪输入框按照以前的设计思想正在编写中.


####last day  [前往sinainput](http://yulstudio.cn/lab/sinainput.html)
>新浪输入框编写完成，其中有一个很长重要的工具框类，由于对textarea还不太熟悉，所以工具类的具体原理不太清楚，它主要返回光标所在的位置以及从光标处插入文本，其余设计思想与我之前的描述相一致，其中还需要补充的就是，之前没有注意到的功能的实现。
1.鼠标或者光标移入@的人使，会自动弹出朋友框.
    这个需要我们记录完成@的组的起始和终结位置，通过与光标位置相比较，当光标在这之间时，就根据记录的<span>位置弹出框.
2.监听当@之后输入的内容来进行内容选择.
    这个需要获得@之后的字符，通过状态机的思想，当我们激活了span状态机后，它就开始监听@之后字符的输入，通过substring方法从文本中提取出来，再与列表数据进行比较。
3.过程中用键盘操作。
    span状态机激活时，会同时激活friendlist,这时list会监听上下建以及enter还有鼠标点击事件，阻止默认事件event.predefault()，来防止光标移动,当输入完成时，比如enter或者点击之后，list会根据光标位置插入选择项内容它，同时提醒span状态机完成，这时记录完整的@的开头和结尾位置。这样就是以后当光标重新落入时，list框会弹出的铺垫。
4.增强健壮性
    当textarea被删除时，之前记录的数据应该被更新，不然会很不稳定，这里我直接监听backspace建，当用它删除时，会根据光标的位置，同时从以前的记录中删除@过的记录，然后再重新输入，依然就有效果了.
