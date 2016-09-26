
/*		项目池
	*   {
	*       projectName: @value String            *         项目名称
	*       projectWebsite: @value String         *         项目网址
	*       startTime: @value String              *         项目开始时间  格式为：2016.10.09
	*       endTime: @value String 			      *         项目结束时间  格式为：2016.10.09
	*       projectExplain: @value String         *         项目说明
	*       projectLabel: @value Array            *         项目技术标签 
			projectThumbnail: @value String       *         缩略图地址
	*       
	*   }
*/

var projects = [
		{
			projectName:"QQ浏览器 - 网站",
			projectWebsite:"https://sxiaoweb.github.io/QQbrowser/",
		    startTime:"2016.04",
			endTime:"至今",
			projectExplain:"作品介绍：视觉感很强的网站,页面动效主要运用css3 animation transition transform 等和原生js，利用js控制其动画展示位置，利用百分比实现全屏布局，封装的方法全部原生js实现",
			projectLabel:["html","css3","css","js"],
			projectThumbnail:"images/icon/project-7.png"
		},
		{
			projectName:"腾讯 - 微云",
			projectWebsite:"https://sxiaoweb.github.io/weiyun/",
		    startTime:"2016.04",
			endTime:"至今",
			projectExplain:"作品介绍：根据传入的数据进行处理，完成对页面进行渲染，看似效果很简单，但需要解决事件冒泡，数据层级判断，碰撞检测，实现拖拽等问题，最终实现的功能有‘新建文件’‘树状菜单’‘删除’‘移动文件’‘拖拽’‘重命名’等功能！作品中封装的方法和流程控制均用原生js实现，部分结构使用es6技术",
			projectLabel:["html","css3","css","js"],
			projectThumbnail:"images/icon/project-5.png"
		},
		{
			projectName:"DESIGNEAT - 视觉类",
			projectWebsite:"https://sxiaoweb.github.io/designeat/",
		    startTime:"2016.04",
			endTime:"至今",
			projectExplain:"作品介绍：视觉差类网站，使用原生js 配合 css3 进行开发，实现图片跟随鼠标移动，版块间视觉差，定时器，animation标签模拟gif格式动画！部分板块使用数据动态生成结构进行渲染",
			projectLabel:["html","css3","css","js"],
			projectThumbnail:"images/icon/project-6.png"
		},
		{
			projectName:"坚果手机-首屏效果",
			projectWebsite:"https://sxiaoweb.github.io/phone/",
		    startTime:"2016.04",
			endTime:"至今",
			projectExplain:"作品介绍：网页的交互效果很赞，当鼠标滑入时，这七部彩色手机随着鼠标的远近而上下跳跃，运用原生js，封装mTeens(运动框架)，配合css3，使用transform，animation等标签制作流程动画效果，实现‘图片的位移’，‘缓冲运动’，‘点击查看图片细节’，‘图片放大居中显示’等有意思的交互效果",
			projectLabel:["html","css3","css","js"],
			projectThumbnail:"images/icon/project-4.png"
		},
		{
			projectName:"‘找我学’官网",
			projectWebsite:"http://www.zhaowoxue.com/",
		    startTime:"2015.05",
			endTime:"2016.04",
			projectExplain:"项目介绍：小初高应试教育，课程任由你挑选。师资保障，学历身份均认证，教学质量可信任。匹配精准，名师顾问个性化，准确匹配好老师。</br>项目职责：独立负责该项目。从了解需求原型到数据交互，了解产品需求并参与讨论设计产品原型，根据原型和美工人员设计的PSD图片实现前端页面开发并根据原型的交互效果使JS/JQuery在页面中得以展现使得用户体验更佳",
			projectLabel:["html","css3","css","js"],
			projectThumbnail:"images/icon/project.png"
		},
		{
			projectName:"‘蛋壳网’官网",
			projectWebsite:"http://www.eggker.cn/",
		    startTime:"2015.05",
			endTime:"2016.04",
			projectExplain:"项目介绍：蛋壳就业网是教育行业专属的就业规划平台，通过蛋壳招聘，蛋壳商学院，蛋壳人才俱乐部，为企业和人才提供企业招聘，人才就业和人才培训的整体解决方案。</br>项目职责：使用DIV、CSS进行PC端页面布局，使用bootstrap框架加载响应式页面使得在不同分辨率下的浏览器实现响应式效果，及可以兼容IE6及以上各版本浏览器，使得用户体验更好，使用javascript实现页面交互，使用Ajax等技术进行前后台交互，并实现后台数据在前台得以展现。",
			projectLabel:["html","css3","css","js"],
			projectThumbnail:"images/icon/project-2.png"
		},
		{
			projectName:"‘健康一号’官网",
			projectWebsite:"http://www.jkyh.cn/",
		    startTime:"2014.05",
			endTime:"2015.06",
			projectExplain:"项目介绍：公司自己打造的电商平台，主营健身器材和按摩器具等商品</br>项目职责：主要工作是制作网站宣传页面配合网站后台人员完成网站功能模块。完成网站版本更新十余次，不断更新，增加版本模块的功能点，充分应用了AJAX ,JSON编写接口进行前后台交互完成整个网站代码编写及网页重构、及解决浏览器兼容问题",
			projectLabel:["html","css3","css","js"],
			projectThumbnail:"images/icon/project-3.png"
		}
]