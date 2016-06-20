var tpl_config_fontsize = [
'<li class="dropdown font-size">',
    '<a class="small"><div class="icon-x16 x-icon-font-size"></div></a>',
    '<ul class="dropdown-list" type="font-size-list" style="display: none;">',
    	'{{ each sizes as size i}}',
    	'<li value="{{ size / 16 }}em">{{ size }}</li>',
    	'{{ /each }}',
    '</ul>',
'</li>'
].join('');
var data_config_fontsize = { sizes : [
		18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 
		50, 52, 54, 56, 58, 60, 62, 64, 72, 96, 100, 200, 300, 400, 500
	] 
};
//<div ng-model="currentComponent.fontSize" ipr-fontsize></div>
mainModule.directive('iprFontsize', function() {
    return {
        restrict: 'AE',
        require: 'ngModel',
        replace: true,
        template: template.compile(tpl_config_fontsize)(data_config_fontsize),
        link: function(scope, element, attrs, ngModelController) { 
        	ngModelController.$render = function() {
        		var val = ngModelController.$viewValue; 
        		$("ul.dropdown-list li", element).removeClass("selected");
        		$('ul.dropdown-list li[value="' + val + '"]', element).addClass("selected");
        	}

        	function updateModel(val) {
            	ngModelController.$setViewValue(val);
            	ngModelController.$render();
            }

            var init = function () { 
            	element.on('click', function(){
            		$("ul.dropdown-list", element).toggle();
            	});

            	$("ul.dropdown-list li", element).on('click', function(){
            		var val = $(this).attr("value");
            		updateModel(val);
            	});
            }

            init();
 		}
    };
});

var tpl_config_fontcolor = [
'<li class="font-color">',
    '<input class="dropdown font-color"/>',
    '<div style="position:relative;"><div class="font-color-layer"></div></div>',
    '<a class="small"><div class="icon-x16 x-icon-font-color"></div></a>',
'</li>'
].join('');

//<div ng-model="currentComponent.fontColor" ipr-fontcolor></div>
mainModule.directive('iprFontcolor', function() {
    return {
        restrict: 'AE',
        require: 'ngModel',
        replace: true,
        template: tpl_config_fontcolor,
        link: function(scope, element, attrs, ngModelController) { 
        	var colorPicker;

        	ngModelController.$render = function() {
        		$(".font-color-layer", element).css("background-color", ngModelController.$viewValue);
        	}

        	function updateModel(val) {
            	ngModelController.$setViewValue(val);
            	ngModelController.$render();
            }

            var init = function () { 
            	colorPicker = $(".dropdown", element).colorpicker({
                    showIcon: false,
                    offset: { top: 26, left: 0 },
            		onChange: function(color){
            			ngModelController.$setViewValue(color);
	                	ngModelController.$render();
            		}
            	})[0];

            	//colorPicker.$html.hide();

            	element.on('click', function(e){ 
                    e.stopPropagation();
            		colorPicker.toggle();
            	});
            }

            init();
 		}
    };
});

var tpl_config_textalign = [
'<li class="dropdown text-size">',
    '<a class="small"><div class="icon-x16 x-icon-text-align x-icon-center"></div></a>',
    '<ul class="dropdown-list" type="text-align-list" style="height: 121px;">',
        '<li value="left"><a style="background: none; border:none; padding:0;"><div class="icon-x16 x-icon-left"></div></a></li>',
        '<li value="center"><a style="background: none; border:none; padding:0;"><div class="icon-x16 x-icon-center"></div></a></li>',
        '<li value="right"><a style="background: none; border:none; padding:0;"><div class="icon-x16 x-icon-right"></div></a></li>',
        '<li value="justify"><a style="background: none; border:none; padding:0;"><div class="icon-x16 x-icon-justify"></div></a></li>',
    '</ul>',
'</li>'
].join('');
//<div ng-model="currentComponent.fontColor" ipr-textalign></div>
mainModule.directive('iprTextalign', function() {
    return {
        restrict: 'AE',
        require: 'ngModel',
        replace: true,
        template: tpl_config_textalign,
        link: function(scope, element, attrs, ngModelController) { 
        	ngModelController.$render = function() {
        		var val = ngModelController.$viewValue; 
        		$("ul.dropdown-list li", element).removeClass("selected");
        		$('ul.dropdown-list li[value="' + val + '"]', element).addClass("selected");
        	}

        	function updateModel(val) {
            	ngModelController.$setViewValue(val);
            	ngModelController.$render();
            }

            var init = function () { 
            	element.on('click', function(){
            		$("ul.dropdown-list", element).toggle();
            	});

            	$("ul.dropdown-list li", element).on('click', function(){
            		var val = $(this).attr("value");
            		updateModel(val);
            	});
            }

            init();
 		}
    };
});
//font-weight: bold; font-style: italic; text-decoration: underline;
var tpl_config_fontstyle = [
'<li class="dropdown font-style">',
    '<a class="small"><div class="icon-x16 x-icon-font-style"></div></a>',
    '<ul type="text-align-list" style="display: none; left:0;">',
        '<li key="fontWeight"><a class="small"><div class="icon-x16 x-icon-b"></div></a></li>',
        '<li key="fontStyle"><a class="small"><div class="icon-x16 x-icon-i"></div></a></li>',
        '<li key="textDecoration"><a class="small"><div class="icon-x16 x-icon-u"></div></a></li>',
    '</ul>',
'</li>'
].join('');
//<div ng-model="currentComponent.fontColor" ipr-textalign></div>
mainModule.directive('iprFontstyle', function() {
    return {
        restrict: 'AE',
        require: 'ngModel',
        replace: true,
        template: tpl_config_fontstyle,
        link: function(scope, element, attrs, ngModelController) { 
            var type = attrs.type; 
        	ngModelController.$render = function() { 

        	}

        	function updateModel(key, value) {
                var viewValue = ngModelController.$viewValue; 
                viewValue[key] = value;
                ngModelController.$setViewValue(viewValue);
            	ngModelController.$render();
            }

            var init = function () { 
                element.on('click', function(){
            		$("ul", element).toggle();
            	});

            	$("li", element).on('click', function(){
                    var isSelected = $(this).hasClass("selected");
            		var key = $(this).attr("key");
                    var value;
                    switch(key){
                        case "fontWeight": value = isSelected ? "" : "bold"; break;
                        case "fontStyle": value = isSelected ? "" : "italic"; break;
                        case "textDecoration": value = isSelected ? "" : "underline"; break;
                    }
                    $(this).toggleClass("selected");
            		updateModel(key, value);
            	});

                if (type === "dropdown") {
                    $("ul", element).addClass("dropdown-list");
                    
                }else{
                    $("ul", element).addClass("u-tab"); 
                    element.replaceWith($("ul", element));
                }
            }

            init();
 		}
    };
});

var tpl_config_lineheight = [
'<li class="dropdown line-height">',
    '<a class="small"><div class="icon-x16 x-icon-line-height"></div></a>',
    '<ul class="dropdown-list" type="line-height-list" style="display: none;">',
        '{{ each list as item i}}',
        '<li value="{{ item }}">{{ item }}</li>',
        '{{ /each }}',
    '</ul>',
'</li>'
].join('');

var data_config_lineheight = { 
    list: [ 1.0, 1.15, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0 ]
};

mainModule.directive('iprLineheight', function() {
    return {
        restrict: 'AE',
        require: 'ngModel',
        replace: true,
        template: template.compile(tpl_config_lineheight)(data_config_lineheight),
        link: function(scope, element, attrs, ngModelController) { 
            ngModelController.$render = function() {
                var val = ngModelController.$viewValue; 
                $("ul.dropdown-list li", element).removeClass("selected");
                $('ul.dropdown-list li[value="' + val + '"]', element).addClass("selected");
            }

            function updateModel(val) {
                ngModelController.$setViewValue(val);
                ngModelController.$render();
            }

            var init = function () { 
                element.on('click', function(){
                    $("ul.dropdown-list", element).toggle();
                });

                $("ul.dropdown-list li", element).on('click', function(){
                    var val = $(this).attr("value");
                    updateModel(val);
                });
            }

            init();
        }
    };
});

var tpl_config_fontfamily = [
'<li class="dropdown font-face">',
    '<a class="small"><div class="icon-x16 x-icon-display x-icon-SimHei"></div></a>',
    '<ul class="dropdown-list" type="font-list" style="display: none;">',
        '{{ each list as item i}}',
        '<li class="x-icon-{{ item }}" value="{{ item }}"></li>',
        '{{ /each }}',
    '</ul>',
'</li>'
].join('');

var data_config_fontfamily = { 
    list: [ "SimHei", "MFShangHei_Noncommercial-ExLight", "maobi-Regular", "SentyMaruko", "DFPWaWaW5" ]
};

mainModule.directive('iprFontfamily', function() {
    return {
        restrict: 'AE',
        require: 'ngModel',
        replace: true,
        template: template.compile(tpl_config_fontfamily)(data_config_fontfamily),
        link: function(scope, element, attrs, ngModelController) { 
            ngModelController.$render = function() {
                var val = ngModelController.$viewValue; 
                $("ul.dropdown-list li", element).removeClass("selected");
                $('ul.dropdown-list li[value="' + val + '"]', element).addClass("selected");
            }

            function updateModel(val) {
                ngModelController.$setViewValue(val);
                ngModelController.$render();
            }

            var init = function () { 
                element.on('click', function(){
                    $("ul.dropdown-list", element).toggle();
                });

                $("ul.dropdown-list li", element).on('click', function(){
                    var val = $(this).attr("value");
                    updateModel(val);
                });
            }

            init();
        }
    };
});