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
                step = parseFloat(iAttrs.sliderStep) || 1,
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
                    step: step,
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