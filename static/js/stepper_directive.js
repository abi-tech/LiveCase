mainModule.controller('DemoController', function($scope) {
    $scope.rating = 5;      
})

var tpl_stepper = [
    '<div class="u-spinner">',
        '<div class="oni-spinner oni-widget">',
            '<button type="button" class="oni-btn" ng-click="decrement()"><i class="oni-icon oni-icon-minus">-</i></button>',
            '<div class="oni-textbox oni-widget-content">',
                '<div class="oni-textbox-input-wrap"><input type="text" id="borderWidth" class="oni-textbox-input" style="width: auto; ime-mode:Disabled"/></div>',
            '</div>',
            '<button type="button" class="oni-btn" ng-click="increment()"> <i class="oni-icon oni-icon-plus">+</i></button>',
        '</div>',
    '</div>'
].join('');

//<div ng-model="rating" stepper-min="1" stepper-max="10" stepper-step="1" ipr-stepper></div>
mainModule.directive('iprStepper', function() {
    return {
        restrict: 'AE',
        require: 'ngModel',
        scope: {},
        replace: true,
        template: tpl_stepper,
        link: function(scope, iElement, iAttrs, ngModelController) { 
            var min = parseFloat(iAttrs.stepperMin),
                max = parseFloat(iAttrs.stepperMax),
                step = parseFloat(iAttrs.stepperStep);
                $input = iElement.find('input');

            ngModelController.$render = function() {
                $input.val(ngModelController.$viewValue || min);
            };

            function updateModel(val) {
                if(min > val || max < val) { 
                    $input.val(ngModelController.$viewValue);
                    return;
                }
                ngModelController.$setViewValue(val);
                ngModelController.$render();
            }

            $input.on("keyup", function(e){
                var val = $input.val().replace(/[^\d]/g,'');
                updateModel(val);
            });

            scope.decrement = function() { 
                updateModel(ngModelController.$viewValue - step);
            };

            scope.increment = function() {
                updateModel(ngModelController.$viewValue + step);
            };
        }
    };
});