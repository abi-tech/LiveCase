//组件配置 头部 用于表示不同类型的组件的名称及图标
var tpl_config_header = [
	'<header class="c-conf-header">',
        '<div class="c-compnent-icon" style="background-image: url(\'{{ icon }}\');"></div>',
        '<span style="color:#444">{{ name }}</span>',
    '</header>'
].join('');

mainModule.directive('configHeaderDirective', function () {
    return {
        restrict: 'AE',
        replace: true,
        template: template.compile(tpl_config_header)(), 
        link: function (scope, element, attrs) {
        	//attrs["data-icon"] attrs["data-name"]
        }
    };
});

//页面配置 顶部HTML
var tpl_config_page_header = [
	'<section class="c-conf-section c-conf-triggerSection z-expand">',
        '<h2>配置</h2><i class="icon-x20 icon-x20-down"></i>',
    '</section>',
].join('');
mainModule.directive('configPageHeaderDirective', function () {
    return {
        restrict: 'A',
        replace: true,
        template: tpl_config_page_header
    };
});

//页面配置 背景 用于配置当前页面的背景颜色及背景图片
var data_config_background = { 
	"name": "背景设置", 
	"info": "最佳尺寸：640x1040(px)", 
	"colors":["#ffffff", "#999999", "#000000", "#7ED321", "#50E3C2", "#F8E71C" ] 
};

var tpl_config_background = [
	'<div class="c-background-pop">',
	    '<div class="jcrop-panel-header c-background-btn">{{ name }}',
	        '<div class="info-pop">',
	            '<div class="bg"></div>',
	            '<div class="info">{{ info }}</div><i></i>',
	        '</div>',
	    '</div>',
	    '<div class="color-list f-fix f-mt-21 f-ml-18">',
	        '<ul>',
	        	'<li style="width:31px;height:31px;" class="nonecolor f-float-l f-point"></li>',
	            '{{ each colors as color i }}',
	            '<li class="f-float-l f-point f-ml-7" style="background-color:{{ color }}"></li>',
	            '{{ /each }}',
	            '<li class="f-float-l f-ml-5 colorpick f-point"></li>',
	        '</ul>',
	    '</div>',
	'</div>'
].join('');

mainModule.directive('configPageBackgroundDirective', function () {
    return {
        restrict: 'A',
        replace: true,
        template: template.compile(tpl_config_background)(data_config_background), 
        link: function (scope, element, attrs) {
        	//绑定事件 弹出对话框选择背景图片
        	$("div.c-background-btn", element).on('click', function(){
        		console.log("choose background image!");
        	});
        	//绑定事件 设置颜色
        	$("ul>li.f-point", element).on('click', function(){
        		//scope.currentPage.backgroundColor = $(this).css("background-color");
        		console.log($(this).css("background-color"));
        	});
        }
    };
});

//页面配置 配置 配置节
var tpl_config_page_section = [
	'<section class="c-conf-section z-expand">',
	'</section>'
].join('');

var tpl_config_page_animation = [
    '<div class="c-conf-panel f-mb-10 f-mt-20">',
        '<ul class="u-chooseList-large">',
            '{{ each list as animation i}}',
			'<li>',
			    '<a style="background-color:#f8f8f8" href="javascript:void(0);" class="u-image-wrap f-p-0 f-wh-80" data-effect="{{ animation.effect }}">',
			        '<div class="u-image-large f-wh-80 anime-page-{{ animation.effect }}"></div>',
			    '</a>',
			    '<p>{{ animation.name }}</p>',
			'</li>', 
            '{{ /each }}',
        '</ul>',
    '</div>'
].join('');

var data_page_animations = [
    { "name": "缩放", "effect": "slideZoomIn", "duration": 1, "delay": 0 },
    { "name": "滑动", "effect": "slideIn", "duration": 1, "delay": 0 },
    { "name": "淡入", "effect": "fadeIn", "duration": 1, "delay": 0 },
    { "name": "旋入", "effect": "rotateIn", "duration": 1, "delay": 0 },
    { "name": "横向滑动", "effect": "xSlideIn", "duration": 1, "delay": 0 }
];

mainModule.directive("configPageAnimationsDirective", ['$rootScope', function ($rootScope) {
    return {
        restrict: "A",
        template: template.compile(tpl_config_page_animation)({ list: data_page_animations }),
        replace: true,
        link: function (scope, element, attrs) {
            $("ul>li>a", element).on("click", function(){
                //scope.$emit("animation.active", scope.animation);
                $("ul>li>a", element).removeClass("z-active");
                $(this).addClass("z-active");
                console.log($(this).data("effect"));
            });
        }
    }
}]);