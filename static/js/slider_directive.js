var tpl_inputbox_slider = [
'<div class="c-input-box">',
    '<div class="u-slider f-mr-14">',
        '<div style="top:-26px; position:relative">',
            '<input type="hidden" value="" />',
        '</div>',
    '</div>',
    '<input style="top:-4px; position:relative" type="text" class="u-textbox u-textbox-medium f-ml-4" />',
'</div>'
].join('');

//<div ng-model="currentComponent.borderRadius" slider-min="0" slider-max="10" inputbox-slider></div>
mainModule.directive('inputboxSlider', function() {
    return {
        restrict: 'AE',
        require: 'ngModel',
        scope: {},
        replace: true,
        template: tpl_inputbox_slider,
        link: function(scope, iElement, iAttrs, ngModelController) { 
        	var min = parseFloat(iAttrs.sliderMin),
                max = parseFloat(iAttrs.sliderMax),
                slider = null,
                $slider = iElement.find('input[type="hidden"]'),
                $input = iElement.find('input[type="text"]'),
                isInit = false;

            ngModelController.$render = function() {
                $input.val(ngModelController.$viewValue); 
                if(!isInit){
            		slider.update({ from : ngModelController.$viewValue });
            		isInit = true;
            	}
            };

            function updateModel(val) {
            	isInit = false;
            	ngModelController.$setViewValue(val);
            	ngModelController.$render();
            }

            var init = function () {
            	slider = $slider.ionRangeSlider({
	                type: "single",
	                min: min,
	                max: max,
	                from: 0,
	                hide_min_max: true,
	                hide_from_to: true,
	                grid: false,
	                onChange: function (data) { 
	                	ngModelController.$setViewValue(data.from);
	                	ngModelController.$render();
	                }
	            })
	            .data("ionRangeSlider");

	            $input.on("keyup", function(e){
	                var val = $input.val().replace(/[^\d]/g,'');
	                updateModel(val);
	            });
            }

            init();
        }
    };
});

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

var tpl_confing_section = [
].join('');

mainModule.directive('confingSection', function() {
    return {
        restrict: 'AE',
        require: 'ngModel',
        scope: {},
        compile: function(element, attrs){ 
        	return function(scope, element, attrs, controller){
        		
        	}
        }
    };
});