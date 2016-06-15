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

mainModule.directive('configPageBackgroundDirective', function ($rootScope) {
    return {
        restrict: 'A',
        replace: true,
        template: template.compile(tpl_config_background)(data_config_background), 
        link: function (scope, element, attrs) {
        	//绑定事件 弹出对话框选择背景图片
        	$("div.c-background-btn", element).on('click', function(){
        		console.log("choose background image!");
                //$rootScope.currentPage.style["background-image"] = $(this).css("background-color");
                //$rootScope.$apply();
        	});
        	//绑定事件 设置颜色
        	$("ul>li.f-point", element).on('click', function(){
        		$rootScope.currentPage.style["background-color"] = $(this).css("background-color");
                $rootScope.$apply();
        	});
        }
    };
});

//页面配置 配置 配置节
var tpl_config_page_section = [
	'<section class="c-conf-section z-expand">',
        '<div class="f-fix slide-page">',
            '<label class="f-float-l f-mt-2" style="color:#333;line-height: 24px">翻页图标</label>',
            '<select ng-model="currentPage.turnPage.id" ng-options="m.id as m.name for m in turnPageOptions" class="u-select c-span-7 slide-page-select"></select>',
            '<span class="slide-page-line"></span>',
        '</div>',
        '<hr><h2>翻页动画</h2>',
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
        '</div>',
        '<div class="c-conf-row f-mt-30">',
            '<div class="f-fix f-mb-20">',
                '<label class="f-float-l f-mt-2" style="color:#333">应用到所有页面</label>',
                '<div style="float:right;"><input id="apply_all_page" type="checkbox" class="js-switch" /></div>',
            '</div>',
            '<hr>',
            '<div class="f-fix f-mt-20" style="position: relative">',
                '<label class="f-float-l f-mt-2" style="color:#333">锁定翻页</label>',
                '<div style="float:right;"><input id="lock_page" type="checkbox" class="js-switch" /></div>',
                '<div class="tips-area">',
                    '<div class="info">',
                        '<div class="info-pop" style="top: -61px;height: 38px;padding-top: 10px;width: 205px">',
                            '锁定后该页将无法继续翻页，',
                            '<br>',
                            '可添加“跳转按钮”跳转至其他页面。',
                            '<i></i>',
                        '</div>',
                    '</div>',
                '</div>',
            '</div>',
            '<hr>',
            '<div class="f-fix f-mt-20 f-mb-15" style="position: relative">',
                '<label class="f-float-l f-mt-2" style="color:#333">自动翻页</label>',
                '<div style="float:right;"><input id="auto_turn_page" type="checkbox" class="js-switch" /></div>',
                '<div class="tips-area">',
                    '<div class="info">',
                        '<div class="info-pop" style="top: -80px;height: 57px;padding-top: 10px">',
                            '1、该页面动画自动播放完毕后，并自动翻至下一页；',
                            '<br>',
                            '2、自动播放时，点击该页面即可停止自动播放。',
                            '<i></i>',
                        '</div>',
                    '</div>',
                '</div>',
            '</div>',
        '</div>',
	'</section>'
].join('');

var data_page_turn_icons = [
    { "id": "1", "name": "LiveApp", "url": "static/images/upArrow.png" },
    { "id": "2", "name": "UpArrow", "url": "static/images/slideUp.png" },
    { "id": "3", "name": "DownArrow", "url": "static/images/slideDown.png" }
];

var data_page_animations = [
    { "name": "缩放", "effect": "slideZoomIn", "duration": 1, "delay": 0 },
    { "name": "滑动", "effect": "slideIn", "duration": 1, "delay": 0 },
    { "name": "淡入", "effect": "fadeIn", "duration": 1, "delay": 0 },
    { "name": "旋入", "effect": "rotateIn", "duration": 1, "delay": 0 },
    { "name": "横向滑动", "effect": "xSlideIn", "duration": 1, "delay": 0 }
];

mainModule.directive("configPageTurnPageIconDirective", ['$rootScope', function ($rootScope) {
    return {
        restrict: "A",
        template: tpl_config_page_turn_page_icon,
        replace: true,
        link: function (scope, element, attrs) {
            scope.turnPageOptions = data_page_turn_icons;
        }
    }
}]);

mainModule.directive("configPageSectionDirective", ['$rootScope', function ($rootScope) {
    return {
        restrict: "A",
        template: template.compile(tpl_config_page_section)({ list: data_page_animations }),
        replace: true,
        link: function (scope, element, attrs) {
            var switchery1, switchery2, switchery3;
            scope.$watch('currentPage', function(newValue, oldValue) { 
                if(newValue == null) return;

                if(switchery1) switchery1.destroy();
                if(switchery2) switchery2.destroy();
                if(switchery3) switchery3.destroy();
                scope.turnPageOptions = data_page_turn_icons;
                $("ul>li>a", element).removeClass("z-active");
                $("a[data-effect='" + newValue.animation.effect + "']").addClass("z-active");

                $("ul>li>a", element).on("click", function(){
                    //scope.$emit("animation.active", scope.animation);
                    $("ul>li>a", element).removeClass("z-active");
                    $(this).addClass("z-active");
                    console.log($(this).data("effect"));
                    $rootScope.currentPage.animation.effect = $(this).data("effect");
                });

                $("#apply_all_page").prop("checked", $rootScope.currentPage.applyAllPages);
                $("#auto_turn_page").prop("checked", $rootScope.currentPage.autoTurnPage);
                $("#lock_page").prop("checked", $rootScope.currentPage.lockTurnPage);

                switchery1 = new Switchery($("#apply_all_page")[0], { size: 'small' });
                switchery2 = new Switchery($("#auto_turn_page")[0], { size: 'small' });
                switchery3 = new Switchery($("#lock_page")[0], { size: 'small' });

                $("#apply_all_page").on('change', function(){
                    $rootScope.currentPage.applyAllPages = this.checked;
                    $rootScope.$apply();
                });

                $("#auto_turn_page").on('change', function(){
                    $rootScope.currentPage.autoTurnPage = this.checked;
                    $rootScope.$apply();
                });

                $("#lock_page").on('change', function(){
                    $rootScope.currentPage.lockTurnPage = this.checked;
                    $rootScope.$apply();
                });
            });
        }
    }
}]);

//--------------------------------------------------------------------------------------------------------------------
//组件配置 头部 用于表示不同类型的组件的名称及图标
var tpl_config_component_header = [
    '<header class="c-conf-header">',
        '<div class="c-compnent-icon" style="background-image: url(\'/static/images/{{ currentComponent.type }}.png?v=1\');"></div>',
        '<span style="color:#444">{{ currentComponent.name }}</span>',
    '</header>'
].join('');

mainModule.directive('configComponentHeaderDirective', function () {
    return {
        restrict: 'AE',
        replace: true,
        template: tpl_config_component_header,
    };
});

//组件配置 样式 和 动画
var data_tabs = [
    { name: "样式", settings: [{ "text":"", "info":"" }] }, 
    { name: "动画", settings: [] }
];

var tpl_config_component_tab = [
    '<section class="c-conf-section c-conf-tabSection">',
        '<ul class="u-tab z-singleLine">',
            '<li><a href="javascript:void(0);" style="border-left:none;" class="z-active">样式</a></li>',
            '<li><a href="javascript:void(0);">动画</a></li>',
        '</ul>',
    '</section>'
].join('');

mainModule.directive('configComponentTabDirective', function ($rootScope) {
    return {
        restrict: 'A',
        controller: function(){
            console.log("controller");
        },
        compile: function (element, attrs, transclude) {
            console.log("compile");
            $("ul>li>a").on('click', function(){
                $("ul>li>a").removeClass("z-active");
                $(this).addClass("z-active");
            });
            return function(scope, element, attrs, controller){
                console.log(scope, element, attrs, controller);
            };
        }
    };
});

mainModule.directive('configComponentTabPanelDirective', function ($rootScope) {
    return {
        restrict: 'A',
        compile: function (element, attrs, transclude) {
            element.append('<div config-component-style-panel-directive></div>');
            //element.append('<div config-component-animation-panel-directive></div>');
            //console.log(scope, element, attrs, transclude);
            //$("ul>li>a").onclick
            return function(scope, element, attrs, controller){
                console.log(scope, element, attrs, controller);
            };
        }
    };
});

var tpl_config_component_animation_panel = [
    '<section class="c-conf-section c-conf-style z-expand">',
        '<div class="c-conf-row">',
            '<ul class="u-tab z-singleLine f-mb-10">',
                '<li><a href="javascript:void(0);" class="z-active">入场动画</a></li>',
                '<li><a href="javascript:void(0);" class="">出场动画</a></li>',
            '</ul>',
        '</div>',
    '</section>',
].join('');

mainModule.directive('configComponentAnimationPanelDirective', function ($rootScope) {
    return {
        restrict: 'AE',
        replace: true,
        template: tpl_config_component_animation_panel,
        link: function (scope, element, attrs, ctrl) {
            //element.append('1111');
        }
    };
});

var tpl_config_component_style_panel = [
    '<section class="c-conf-section c-conf-style z-expand">',
        '<div class="c-conf-panel">',
            '<div class="c-conf-row">',
                '<label class="c-input-label">背景</label>',
                '<div class="c-input-box">',
                    '<div class="u-colorpicker">',
                        '<input type="text" id="backgroundColor" style="color: rgb(0, 0, 0); background: rgb(225, 225, 225);">',
                        '<a href="javascript:void(0);" class="small"> <i class="icon-x20 icon-x20-color"></i>',
                        '</a>',
                    '</div>',
                '</div>',
            '</div>',
        '</div>',
        '<div class="c-conf-panel">',
            '<div class="c-conf-row">',
                '<label class="c-input-label" for="borderWidth">边框</label>',
                '<div class="c-input-box">',
                    '<div class="u-spinner">',
                        '<input id="borderWidth" type="text" value="" ng-model="currentComponent.borderWidth"/>',
                    '</div>',
                    '<div class="u-colorpicker f-ml-6">',
                        '<input type="text" id="borderColor" avalonctrl="$coms_borderColor_colorpicker" data-duplex-changed="initCp" style="color: rgb(0, 0, 0); background: rgb(204, 204, 204);">',
                        '<a href="javascript:void(0);" class="small"> <i class="icon-x20 icon-x20-color"></i>',
                        '</a>',
                    '</div>',
                '</div>',
            '</div>',
        '</div>',
        '<div class="c-conf-panel">',
            '<div class="c-conf-row">',
                '<label class="c-input-label" for="borderRadius">圆角</label>',
                '<div class="c-input-box">',
                    '<div class="u-slider f-mr-14">',
                        '<div style="top:-26px; position:relative">',
                            '<input id="borderRadiusSlider" type="hidden" value="0;50" />',
                        '</div>',
                    '</div>',
                    '<input style="top:-4px; position:relative" type="text" id="borderRadius" class="u-textbox u-textbox-medium f-ml-4" size="6" ng-model="currentComponent.borderRadius">',
                '</div>',
            '</div>',
        '</div>',
        '<div class="c-conf-panel">',
            '<div class="c-conf-row">',
                '<label class="c-input-label" for="opacity">透明</label>',
                '<div class="c-input-box">',
                    '<div class="u-slider f-mr-14">',
                        '<div style="top:-26px; position:relative">',
                            '<input id="opacitySlider" type="hidden" value="0;100" />',
                        '</div>',
                    '</div>',
                    '<input style="top:-4px; position:relative" type="text" id="opacity" class="u-textbox u-textbox-medium f-ml-4" size="6" ng-model="currentComponent.opacity">',
                '</div>',
            '</div>',
        '</div>',
        '<div class="c-conf-panel">',
            '<div class="c-conf-row c-conf-row-2">',
                '<label class="c-input-label" for="rotate">旋转</label>',
                '<div class="c-input-box">',
                    '<div class="u-slider f-mr-14">',
                        '<div style="top:-26px; position:relative">',
                            '<input id="rotateSlider" type="hidden" value="0;360" />',
                        '</div>',
                    '</div>',
                    '<input style="top:-4px; position:relative" type="text" id="rotate" class="u-textbox u-textbox-medium f-ml-4" size="6" ng-model="currentComponent.rotate">',
                '</div>',
            '</div>',
        '</div>',
    '</section>'
].join('');

mainModule.directive('configComponentStylePanelDirective', function ($rootScope) {
    return {
        restrict: 'AE',
        replace: true,
        template: tpl_config_component_style_panel,
        link: function (scope, element, attrs) {
            scope.$watch('currentComponent', function(newValue, oldValue) { 
                if(newValue == null) return;

                var borderRadius = scope.currentComponent.borderRadius || 0;
                var opacity = scope.currentComponent.opacity || 0;
                var rotate = scope.currentComponent.rotate || 0;

                console.log(borderRadius, opacity, rotate);
                $("#borderRadiusSlider", element).ionRangeSlider({
                    type: "single",
                    min: 0,
                    max: 50,
                    from: borderRadius,
                    hide_min_max: true,
                    hide_from_to: true,
                    grid: false,
                    onChange: function (data) { 
                        scope.currentComponent.borderRadius = data.from;
                        scope.$apply();
                    }
                }).data("ionRangeSlider").update({ from : borderRadius });

                $("#opacitySlider", element).ionRangeSlider({
                    type: "single",
                    min: 0,
                    max: 100,
                    from: opacity,
                    hide_min_max: true,
                    hide_from_to: true,
                    grid: false,
                    onChange: function (data) {
                        scope.currentComponent.opacity = data.from;
                        scope.$apply();
                    }
                }).data("ionRangeSlider").update({ from : opacity });

                $("#rotateSlider", element).ionRangeSlider({
                    type: "single",
                    min: 0,
                    max: 360,
                    from: rotate,
                    hide_min_max: true,
                    hide_from_to: true,
                    grid: false,
                    onChange: function (data) {
                        scope.currentComponent.rotate = data.from;
                        scope.$apply();
                    }
                }).data("ionRangeSlider").update({ from : rotate });
            });
        }
    };
});

//组件配置 外观 位置信息
var tpl_config_component_position = [
    '<section class="c-conf-section c-conf-common">',
        '<div class="c-conf-row c-conf-row-3">',
            '<label class="c-input-label" for="left">位置</label>',
            '<div class="c-input-box">',
                '<label class="u-label f-mr-9">X轴</label>',
                '<input type="text" id="left" class="u-textbox f-mr-40" size="10" ng-model="currentComponent.left" />',
                '<label class="u-label f-mr-9" for="top">Y轴</label>',
                '<input type="text" id="top" class="u-textbox" size="10" ng-model="currentComponent.top" />',
            '</div>',
        '</div>',
        '<div class="c-conf-row">',
            '<label class="c-input-label" for="width">大小</label>',
            '<div class="c-input-box">',
                '<label class="u-label f-mr-9">宽</label>',
                '<input type="text" id="width" class="u-textbox f-mr-40" size="10" ng-model="currentComponent.width" />',
                '<label class="u-label f-mr-9">高</label>',
                '<input type="text" id="height" class="u-textbox" size="10" ng-model="currentComponent.height" />',
            '</div>',
        '</div>',
    '</section>'
].join(''); 

mainModule.directive('configComponentPositionDirective', function () {
    return {
        restrict: 'AE',
        replace: true,
        template: tpl_config_component_position,
    };
});
