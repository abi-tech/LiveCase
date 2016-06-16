var tpl_colorpicker = [
'<div class="u-colorpicker f-ml-6">',
    '<input type="text" style="color: rgb(0, 0, 0); background: rgb(204, 204, 204);">',
    '<a href="javascript:void(0);" class="small"><i class="icon-x20 icon-x20-color"></i>',
    '</a>',
'</div>',
].join('');

//<div ng-model="currentComponent.borderColor" ipr-colorpicker></div>
mainModule.directive('iprColorpicker', function() {
    return {
        restrict: 'AE',
        require: 'ngModel',
        scope: {},
        replace: true,
        template: tpl_colorpicker,
        link: function(scope, element, attrs, ngModelController) {
        	ngModelController.$render = function() {

        	}

        	function updateModel(val) {
            	ngModelController.$setViewValue(val);
            	ngModelController.$render();
            }

            var init = function () { 
            	element.colorpicker({
            		onChange: function(color){
            			ngModelController.$setViewValue(color);
	                	ngModelController.$render();
            		}
            	});
            }

            init();
 		}
    };
});