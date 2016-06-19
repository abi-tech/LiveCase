//<div class="f-float-r flag icon-x40-flag-off"></div>
//<div class="f-float-r flag icon-x40-flag-on"></div>
//<div ng-model="currentComponent.animIn.infinite" ipr-switcher></div>
//<div ng-model="currentComponent.animOut.infinite" ipr-switcher></div>
mainModule.directive('iprSwitcher', function ($compile) {
    return {
        restrict: 'A',
        replace: true,
        require: "ngModel",
        link: function (scope, element, attrs, ngModelController) {
        	var $switcher = $('<div class="f-float-r flag"></div>');
        	element.replaceWith($switcher);
        	ngModelController.$render = function() {
        		var viewValue = ngModelController.$viewValue;
        		$switcher.removeClass("icon-x40-flag-off");
        		$switcher.removeClass("icon-x40-flag-on");
        		$switcher.addClass(viewValue ? "icon-x40-flag-on" : "icon-x40-flag-off");
        	}

        	$switcher.on('click', function (e) {
        		ngModelController.$setViewValue(!ngModelController.$viewValue);
        		ngModelController.$render();
        	});
        }
    };
});