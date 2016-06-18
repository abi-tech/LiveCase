//<div tab-options="data_ui_tab_anim" ui-tab></div>
var data_ui_tab_anim = {
    classList: ["u-tab", "z-singleLine", "f-mb-10"],
    activeClass: "z-active",
    wrapper: '<div class="c-conf-row"></div>',
    tabList: [
        { "name": "入场动画", "directive": '<div ng-model="currentComponent.animIn" options="constants.pickerAnimIn" animation-picker></div>', "active": true },
        { "name": "出场动画", "directive": '<div ng-model="currentComponent.animOut" options="constants.pickerAnimOut" animation-picker></div>', "active": false }
    ]
}

//<div tab-options="data_ui_tab_facade" ui-tab></div>
var data_ui_tab_facade = {
    classList: ["u-tab", "z-singleLine"],
    activeClass: "z-active",
    wrapper: '<section class="c-conf-section c-conf-tabSection"></section>',
    tabList: [
        { "name": "样式", "directive": "<div config-component-style-panel-directive></div>", "active": true },
        { "name": "动画", "directive": "<div config-component-animation-panel-directive></div>", "active": false }
    ]
}

mainModule.directive('uiTab',["$rootScope", "$compile", function ($rootScope, $compile) {
    return {
        restrict: 'A', 
        scope: false,
        link: function(scope, element, attrs){ 
            var options = eval(attrs.tabOptions);
            var activeClass = options.activeClass;
            var $wrapper = $(options.wrapper);
            var $ul = $("<ul></ul>");
            var panels = [];
            //添加DOM 替换DOM结构
            $wrapper.append($ul);
            element.replaceWith($wrapper);

            //Tab添加样式
            angular.forEach(options.classList, function(data, index, array){
                $ul.addClass(data);
            });

            //构建Tab对应的Panel
            angular.forEach(options.tabList, function(data, index, array){
                var $li = $('<li><a href="javascript:void(0);">' + data.name + '</a></li>');

                $ul.append($li);
                var $tabpanel = $compile(data.directive)(scope);

                panels.push($tabpanel);
                $tabpanel.hide();
                $tabpanel.insertAfter($wrapper);

                if(data.active) {
                    $li.find("a").addClass(activeClass);
                    $tabpanel.show();
                }
            });
            
            //监听Tab切换事件
            $("ul>li>a", $wrapper).on('click', function(){
                var index =  $("ul>li>a", $wrapper).index($(this));
                $("ul>li>a", $wrapper).removeClass(activeClass);
                $(this).addClass(activeClass);
                angular.forEach(panels, function(data, index, array){
                    data.hide();
                });
                panels[index].show();
            });
        }
    };
}]);

//样式面板
var data_config_panels = [
    { "name": "背景", "inputs": [
        { "inputHtml": "<div ng-model=\"currentComponent.backgroundColor\" ipr-colorpicker></div>" }
    ]},
    { "name": "边框", "inputs": [
        { "inputHtml": "<div ng-model=\"currentComponent.borderWidth\" stepper-min=\"0\" stepper-max=\"10\" stepper-step=\"1\" ipr-stepper></div>" },
        { "inputHtml": "<div ng-model=\"currentComponent.borderColor\" ipr-colorpicker></div>" }
    ]},
    { "name": "圆角", "inputs": [
        { "inputHtml": "<div ng-model=\"currentComponent.borderRadius\" slider-min=\"0\" slider-max=\"50\" inputbox-slider></div>" }
    ]},
    { "name": "透明", "inputs": [
        { "inputHtml": "<div ng-model=\"currentComponent.opacity\" slider-min=\"0\" slider-max=\"100\" inputbox-slider></div>" }
    ]},
    { "name": "旋转", "inputs": [
        { "inputHtml": "<div ng-model=\"currentComponent.rotate\" slider-min=\"0\" slider-max=\"360\" inputbox-slider></div>" }
    ]}
];

var tpl_config_component_style_panel = [
    '<section class="c-conf-section c-conf-style z-expand">',
        '<div panel-name="背景" panel-option="data_config_panels[0]" confing-panel></div>',
        '<div panel-name="边框" panel-option="data_config_panels[1]" confing-panel></div>',
        '<div panel-name="圆角" panel-option="data_config_panels[2]" confing-panel></div>',
        '<div panel-name="透明" panel-option="data_config_panels[3]" confing-panel></div>',
        '<div panel-name="旋转" panel-option="data_config_panels[4]" confing-panel></div>',
    '</section>'
].join('');

//<div config-component-style-panel-directive></div>
mainModule.directive('configComponentStylePanelDirective', function ($rootScope) {
    return {
        restrict: 'A',
        replace: true,
        template: tpl_config_component_style_panel,
        link: function (scope, element, attrs) {
            
        }
    };
});

var tpl_config_panel = [
'<div class="c-conf-panel">',
    '<div class="c-conf-row">',
        '<label class="c-input-label"></label>',
        '<div class="c-input-box"></div>',
    '</div>',
'</div>'
].join('');

mainModule.directive('confingPanel', function() {
    return {
        restrict: 'AE',
        compile: function(element, attrs){ 
            var $panel = $(tpl_config_panel),
                panelName = attrs.panelName,
                options = eval(attrs.panelOption);

            $panel.find(".c-input-label").text(panelName);
            for (var i = 0; i < options.inputs.length; i++) {
                $panel.find(".c-input-box").append(options.inputs[i].inputHtml);
            }
            
            element.replaceWith($panel);
            return function(scope, element, attrs, controller){
                
            }
        }
    };
});


//动画面板
var tpl_config_component_animation_panel = [
    '<section class="c-conf-section c-conf-animeSection">',
        '<div tab-options="data_ui_tab_anim" ui-tab></div>',
    '</section>',
].join('');

//<div config-component-animation-panel-directive></div>
mainModule.directive('configComponentAnimationPanelDirective', function ($compile) {
    return {
        restrict: 'A',
        replace: true,
        template: tpl_config_component_animation_panel,
        link: function (scope, element, attrs) {
            // var $section = $('<section class="c-conf-section c-conf-animeSection"></section>');
            // var $content = $compile('<div tab-options="data_ui_tab_anim" ui-tab></div>')(scope);
            // console.log('$content', $content);
            // $section.append($content); console.log('$section', $section);
            // element.append($section);
        }
    };
});

var tpl_config_section = '<section class="c-conf-section"></section>';
var tpl_config_panel1 = '<div class="c-conf-panel"></div>'
var tpl_config_row = '<div class="c-conf-row"></div>';
var tpl_input_box = '<div class="c-input-box"></div>';
//c-conf-section c-conf-panel c-conf-row c-input-box 
//<div section-options="" config-section></div>
var data_animation_section = [

];
mainModule.directive('configSection', function ($compile) {
    return {
        restrict: 'A', 
        replace: true,
        link: function(scope, element, attrs){
            //c-conf-animeSection
        }
    };
});

//选择 <div ng-model="" choose-options="data_tpl_choose_list_anim" choose-list></div>


//<div choose-options="data_tpl_choose_list_anim" choose-list></div>
mainModule.directive('chooseList', function ($compile) {
    return {
        restrict: 'A',
        replace: true,
        require: "ngModel",
        link: function (scope, element, attrs, ngModelController) {
            var options = eval(attrs.options);
            var $ul = $('<ul></ul>');

            ngModelController.$render = function() {
                var viewValue = ngModelController.$viewValue;
                $ul.find('.u-image-wrap[data-value="' + viewValue + '"]').addClass("z-active");
            }

            $ul.addClass(options.class);
            angular.forEach(options.list, function(data, index, array){
                var $li = $(options.tpl);
                $li.find(".u-image-wrap>div").addClass(data.class);
                $li.find(".u-image-wrap").attr("data-value", data.value);
                $li.find("p").text(data.name); console.log(data.value, ngModelController.$viewValue);
                
                $ul.append($li);

                $li.find(".u-image-wrap").on('click', function (e) {
                    $ul.find(".u-image-wrap").removeClass("z-active");
                    $(this).addClass("z-active");
                    var value = $(this).data("value");
                    ngModelController.$setViewValue(value);
                });
            });

            element.append($ul);
        }
    };
});



//<div dialog-options="data_dialog_anim" ui-dialog></div>
var tpl_ui_dialog = [
'<div class="u-dialog" style="top: 475px; height: 230px;">',
    '<header class="u-dialog-head"></header>',
    '<section class="u-dialog-body"></section>',
'</div>'
].join('');

mainModule.directive('uiDialog', function ($compile) {
    return {
        restrict: 'A',
        replace: true,
        template: tpl_ui_dialog,
        link: function (scope, element, attrs) {
            var options = eval(attrs.options);
            var $head = element.find(".u-dialog-head");
            var $body = element.find(".u-dialog-body");

            $head.text(options.head);

            angular.forEach(options.directives, function(data, index, array){
                var $content = $compile(data)(scope);
                $body.append($content);
            });
        }
    };
});

var tpl_animation_picker = [
'<div class="c-conf-panel" style="display: block;">',
    '<div class="c-conf-row c-conf-row-2">',
        '<a href="javascript:void(0);" class="link-chooseAnime">',
            '<div class="u-image-wrap">',
                '<div class="u-image-large undefined"></div>',
            '</div>',
        '</a>',
        '<div class="c-input-box c-conf-col-22 f-pb-4">',
            '<div class="f-mt-4">',
                '<label class="u-label f-float-l f-mt-4"></label>',
                '<a href="javascript:void(0);" class="u-btn u-btn-large"></a>',
            '</div>',
            '<div class="f-mt-8" style="display: none;">',
                '<label class="u-label f-float-l"></label>',
                '<a href="javascript:void(0);" class="icon-toggle f-mr-7 toggleAnime"></a>',
                '<a href="javascript:void(0);" class="icon-play f-mr-7"></a>',
                '<a href="javascript:void(0);" class="icon-x24 icon-x24-remove"></a>',
            '</div>',
        '</div>',
    '</div>',
'</div>'
].join('');
//<div ng-model="currentComponent.animation" choose-options="data_tpl_choose_list_anim" animation-picker></div>没有入场动画
mainModule.directive('animationPicker', function ($compile) {
    return {
        restrict: 'A',
        replace: true,
        template: tpl_animation_picker,
        require: "ngModel",
        link: function (scope, element, attrs, ngModelController) {
            var options = eval(attrs.options);
            var $fmt4 = element.find(".c-input-box>.f-mt-4");
            var $fmt8 = element.find(".c-input-box>.f-mt-8");
            var $label4 = element.find(".c-input-box>.f-mt-4>.u-label");
            var $label8 = element.find(".c-input-box>.f-mt-8>.u-label")
            var $btn = element.find(".c-input-box>.f-mt-4>.u-btn");
            var $toggleAnime = element.find(".c-input-box>.f-mt-8>.icon-toggle");
            var $paly = element.find(".c-input-box>.f-mt-8>.icon-play");
            var $remove = element.find(".c-input-box>.f-mt-8>.icon-x24-remove");
            var $content = $compile(options.dialog)(scope);
            var $row = element.find(".c-conf-row");
            var $icon = $row.find(".link-chooseAnime>.u-image-wrap>.u-image-large");

            ngModelController.$render = function() {
                var viewValue = ngModelController.$viewValue;
                if(viewValue){
                    $fmt4.hide();
                    $fmt8.show();
                    $icon.removeClass();
                    $icon.addClass("u-image-large");
                    $icon.addClass("anime-" + viewValue.type);
                    $label8.text(viewValue.typeName);
                }
            }

            function updateModel(val) {

            }

            scope.$watch(options.watch, function (newValue, oldValue) {
                //alert(newValue + oldValue);
                console.log(options.watch, newValue);
            });

            function init(argument) {
                $label4.text(options.noneInfo);
                $btn.text(options.btnInfo);
                $content.hide();
                $row.append($content);

                $btn.on('click', function (e) {
                    $content.toggle();
                });

                $toggleAnime.on('click', function (e) {
                    $content.toggle();
                });

                $paly.on('click', function (e) {
                    $content.toggle();
                });

                $remove.on('click', function (e) {
                    ngModelController.$setViewValue(null);
                    $icon.addClass("u-image-large");
                    $icon.addClass("undefined");
                    $fmt4.show();
                    $fmt8.hide();
                });
            }

            init();
        }
    };
});


