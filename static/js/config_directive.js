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
        		//console.log("choose background image!");
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
                    //console.log($(this).data("effect"));
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
        restrict: 'A',
        replace: true,
        template: tpl_config_component_header
    };
});

//组件配置 样式 和 动画
var data_tabs = [
    { name: "样式", settings: [{ "label":"", "info":"", "":"" }] }, 
    { name: "动画", settings: [] }
];
// class="z-active"

//组件配置 外观 位置信息



//var newScope = scope.$new();
mainModule.directive('globalConfig', function ($compile) {
    return {
        restrict: 'A',
        replace: true,
        template: constants.templates["globalConfig"],
        link: function (scope, element, attrs) {
            var options = eval(attrs.options) || scope.options;
            var $configWrapper = element.find("section.c-config-wapper");
            var scopes = [];
            // scope.$watch("currentPage.active", function (newValue, oldValue) { console.log(newValue);
            //     if (newValue && newValue == true) {
            //         $configWrapper.empty();
            //         angular.forEach(scopes, function(data, index, array){
            //             data.$destroy();
            //         });
            //         scopes.length = 0;
            //         element.addClass("g-config-page");
            //         $configWrapper.addClass("none");
            //         render(constants.confPage);
            //     }
            // });

            scope.$watch("currentComponent", function (newValue, oldValue) {
                $configWrapper.empty();
                angular.forEach(scopes, function(data, index, array){
                    data.$destroy();
                });
                scopes.length = 0;

                if (newValue && newValue != null && newValue != oldValue) {
                    
                    element.removeClass("g-config-page");
                    $configWrapper.removeClass("none");
                    switch(newValue.type){
                        case "singleimage": render(constants.confSingleImage); break;
                        case "singletext": render(constants.confSingleText); break;
                        case "externallinks": render(constants.confExternalLinks); break;
                    }
                }else{
                    element.addClass("g-config-page");
                    $configWrapper.addClass("none");
                    render(constants.confPage);
                }
            })

            function render(directives) {
                angular.forEach(directives, function(data, index, array){
                    var newScope = scope.$new();
                    scopes.push(newScope);
                    var $content = $compile(data)(newScope);
                    $configWrapper.append($content);
                });
            }
            
        }
    };
});

mainModule.directive('confHeader', function () {
    return {
        restrict: 'A',
        replace: true,
        template: constants.templates.confHeader,
        require: "ngModel",
        link: function (scope, element, attrs, ngModelController) {
            var options = eval(attrs.options) || scope.options;
            var $icon = element.find(".c-compnent-icon");
            var $span = element.find("span");

            ngModelController.$render = function () {
                var viewValue = ngModelController.$viewValue;
                $icon.css("background-image", "url('" + viewValue.icon + "')");
                $span.text(viewValue.name);
            }
        }
    };
});

mainModule.directive('confFacade', function ($compile) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var options = eval(attrs.options) || scope.options;

            var directives = [ 
                '<div tab-options="constants.confFacade" ui-tab></div>' 
            ];

            function render(directives) {
                angular.forEach(directives, function(data, index, array){
                    var $content = $compile(data)(scope);
                    element.append($content);
                });
            }
            render(directives);
        }
    };
});

mainModule.directive('confPosition', function () {
    return {
        restrict: 'A',
        replace: true,
        template: constants.templates.confPosition,
        link: function (scope, element, attrs) {

        }
    };
});

mainModule.directive('confSingleimage', function ($compile) {
    return {
        restrict: 'A',
        replace: true,
        link: function (scope, element, attrs) {
            var options = eval(attrs.options) || scope.options;     

            var directives = [ 
                '<div section-cropper-directive></div>' 
            ];

            function render(directives) {
                angular.forEach(directives, function(data, index, array){
                    var $content = $compile(data)(scope);
                    element.append($content);
                });
            }
            render(directives);
        }
    };
});

var tpl_singletext = [
'<section class="c-conf-section z-expand" style="display: block;">',
    '<section class="u-conf-section c-singletext">',
        '<div class="c-conf-row">',
            '<textarea placeholder="亲，在这里输入文本哦" ng-model="currentComponent.text"></textarea>',
        '</div>',
        '<div class="c-conf-row c-conf-row-1">',
            '<ul class="u-tab">',
                '<div ng-model="currentComponent.style.fontSize" ipr-fontsize></div>',
                '<div ng-model="currentComponent.style.color" ipr-fontcolor></div>',
                '<div ng-model="currentComponent.style.textAlign" ipr-textalign></div>',
                '<div ng-model="currentComponent.style.lineHeight" ipr-lineheight></div>',
            '</ul>',
        '</div>',
        '<div class="c-conf-row c-conf-row-2">',
            '<div class="c-input-box box-lf">',
                '<ul class="u-tab">',
                    '<div ng-model="currentComponent.style.fontFamily" ipr-fontfamily></div>',
                '</ul>',
            '</div>',
            '<div class="c-input-box box-rf">',
                '<div ng-model="currentComponent.style" type="tab" ipr-fontstyle></div>',
            '</div>',
        '</div>',
    '</section>',
'</section>'
].join('');
mainModule.directive('confSingletext', function () {
    return {
        restrict: 'A',
        replace: true,
        template: tpl_singletext,
        link: function (scope, element, attrs) {
            var options = eval(attrs.options) || scope.options;     
        }
    };
});



mainModule.directive('confExternallinks', function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: "tpls/components/externallinks_config.html",
        require: "ngModel",
        link: function (scope, element, attrs, ngModelController) {
            //var options = eval(attrs.options) || scope.options;   
            var tabItem = $(".c-externallinks-switch ul.u-tab li a", element)
            var textBottonPanel = $(".c-externallinks-setting>div.c-input-row", element);
            var iconBottonPanel = $(".c-externallinks-setting>div.u-image-row", element);
            var addressRow = $(".c-externallinks-edit>div:eq(0)", element);
            var phoneRow = $(".c-externallinks-edit>div:eq(1)", element);
            var layerRow = $(".c-externallinks-edit>div:eq(2)", element);
            var linkRow = $(".c-externallinks-edit>div:eq(3)", element);
            var layerImage = $(".c-externallinks-pop img", element);
            var btnChangeImage = $(".c-externallinks-pop .change-btn-image", element);
            var btnPreviewImage = $(".c-externallinks-pop .change-btn-pre", element);
            var btnChangeIcon = $(".u-image-change-btn", iconBottonPanel);
            var linkSelect = $("select", linkRow);

            var activeClass = "z-active";
            ngModelController.$render = function (argument) {
                var viewValue = ngModelController.$viewValue;

                $(".u-image-icon", iconBottonPanel).css("background-image", "url('" + viewValue.btnIcon + "')");
                
                switch(viewValue.btnType){
                    case "address": initForAddress(viewValue); break;
                    case "phone": initForPhone(viewValue); break;
                    case "layer": initForLayer(viewValue); break;
                    case "link": initForLink(viewValue); break;
                }
                //控制激活模式 
                tabItem.removeClass(activeClass);
                switch(viewValue.btnActive){
                    case "text": $(tabItem[0]).addClass(activeClass); textBottonPanel.show(); iconBottonPanel.hide(); break;
                    case "icon": $(tabItem[1]).addClass(activeClass); textBottonPanel.hide(); iconBottonPanel.show(); break;
                }
            }

            $(".c-externallinks-switch ul.u-tab li a", element).on("click", function (e) {
                var index = tabItem.index($(this));
                tabItem.removeClass(activeClass);
                $(this).addClass(activeClass);
                switch(index){
                    case 0: textBottonPanel.show(); iconBottonPanel.hide(); ngModelController.$viewValue.btnActive = "text"; break;
                    case 1: textBottonPanel.hide(); iconBottonPanel.show(); ngModelController.$viewValue.btnActive = "icon"; break;
                }
            });

            function initForAddress(viewValue){
                addressRow.show();  
                phoneRow.hide();  
                layerRow.hide(); 
                linkRow.hide();
            }

            function initForPhone(viewValue){
                addressRow.hide();  
                phoneRow.show();  
                layerRow.hide(); 
                linkRow.hide();
            }

            function initForLayer(viewValue){
                addressRow.hide();  
                phoneRow.hide();  
                layerRow.show(); 
                linkRow.hide();
            }

            function initForLink(viewValue){
                addressRow.hide();  
                phoneRow.hide();  
                layerRow.hide(); 
                linkRow.show();
            }

            function init(viewValue) {
                btnChangeImage.on('click', function (e) {
                    alert("btnChangeImage");
                });

                btnPreviewImage.on('click', function (e) {
                    var isPop = $("#editorFrame .previewPopLayer").length > 0? true : false;
                    if (isPop) { 
                        $("#editorFrame .previewPopLayer").remove();
                        btnPreviewImage.text("预览");
                        return;
                    }

                    var htmlLayer = $('<div class="previewPopLayer"><img src="'+　ngModelController.$viewValue.layer +'"></div>');
                    $("#editorFrame").append(htmlLayer);
                    btnPreviewImage.text("取消");
                    htmlLayer.on('click', function (e) {
                        e.stopPropagation();
                        htmlLayer.remove();
                    });
                });

                btnChangeIcon.on('click', function (e) {
                    alert("btnChangeIcon");
                });
            }
            
            init();
        }
    };
});


