var tpl_config_fontsize = [
'<li class="dropdown font-size">',
    '<a class="small"><div class="icon-x16 x-icon-font-size"></div></a>',
    '<ul class="dropdown-list" type="font-size-list" style="display: none;">',
    	'{{ each sizes as size i}}',
    	'<li value="{{ size }}">{{ size }}</li>',
    	'{{ /each }}',
    '</ul>',
'</li>'
].join('');
var data_config_fontsize = { sizes : [
		"18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38", "40", "42", "44", "46", "48", 
		"50", "52", "54", "56", "58", "60", "62", "64", "72", "96", "100", "200", "300", "400", "500"
	] 
};
//<div ng-model="currentComponent.fontSize" ipr-fontsize></div>
mainModule.directive('iprFontsize', function() {
    return {
        restrict: 'AE',
        require: 'ngModel',
        scope: {},
        replace: true,
        template: template.compile(tpl_config_fontsize)(data_config_fontsize),
        link: function(scope, element, attrs, ngModelController) { 
        	ngModelController.$render = function() {
        		var val = Math.round(ngModelController.$viewValue * 16); 
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
            		updateModel(parseInt(val) / 16);
            	});
            }

            init();
 		}
    };
});

var tpl_config_fontcolor = [
'<li class="font-color">',
    '<input class="dropdown font-color"/>',
    '<div class="font-color-layer"></div>',
    '<a class="small"><div class="icon-x16 x-icon-font-color"></div></a>',
'</li>'
].join('');

//<div ng-model="currentComponent.fontColor" ipr-fontcolor></div>
mainModule.directive('iprFontcolor', function() {
    return {
        restrict: 'AE',
        require: 'ngModel',
        scope: {},
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
            		onChange: function(color){
            			ngModelController.$setViewValue(color);
	                	ngModelController.$render();
            		}
            	})[0];

            	//colorPicker.$html.hide();

            	element.on('click', function(){ 
            		colorPicker.toggle();
            	});
            }

            init();
 		}
    };
});

var tpl_config_textalign = [
'<li class="dropdown text-align">',
    '<a class="small"><div class="icon-x16 x-icon-text-align x-icon-center"></div></a>',
    '<ul class="dropdown-list" type="text-align-list" style="display: none; left:0;">',
        '<li value="left"><a class="small"><div class="icon-x16 x-icon-left"></div></a></li>',
        '<li value="center"><a class="small"><div class="icon-x16 x-icon-center"></div></a></li>',
        '<li value="right"><a class="small"><div class="icon-x16 x-icon-right"></div></a></li>',
        '<li value="justify"><a class="small"><div class="icon-x16 x-icon-justify"></div></a></li>',
    '</ul>',
'</li>'
].join('');
//<div ng-model="currentComponent.fontColor" ipr-textalign></div>
mainModule.directive('iprTextalign', function() {
    return {
        restrict: 'AE',
        require: 'ngModel',
        scope: {},
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
    '<ul class="dropdown-list" type="text-align-list" style="display: none; left:0;">',
        '<li value="bold"><a class="small"><div class="icon-x16 x-icon-b"></div></a></li>',
        '<li value="italic"><a class="small"><div class="icon-x16 x-icon-i"></div></a></li>',
        '<li value="underline"><a class="small"><div class="icon-x16 x-icon-u"></div></a></li>',
    '</ul>',
'</li>'
].join('');
//<div ng-model="currentComponent.fontColor" ipr-textalign></div>
mainModule.directive('iprFontstyle', function() {
    return {
        restrict: 'AE',
        require: 'ngModel',
        scope: {},
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