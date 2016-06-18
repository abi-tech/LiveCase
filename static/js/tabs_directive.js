// <ul class="u-tab z-singleLine f-mb-10">
//             <li>
//                 <a href="javascript:void(0);" class="z-active">入场动画</a>
//             </li>
//             <li>
//                 <a href="javascript:void(0);" class="">出场动画</a>
//             </li>
//         </ul>

//<div tab-options="data_ui_tab_anim" ui-tab></div>
var data_ui_tab_anim = {
	classList: ["u-tab", "z-singleLine", "f-mb-10"]
	activeClass: "z-active",
	wrapper: '<div class="c-conf-row"></div>',
	tabList: [
		{ "name": "入场动画", "directive": "", "active": true },
		{ "name": "出场动画", "directive": "", "active": false }
	]
}

//<div tab-options="data_ui_tab_anim" ui-tab></div>
var data_ui_tab_ = {
	classList: ["u-tab", "z-singleLine"]
	activeClass: "z-active",
	wrapper: '<section class="c-conf-section c-conf-tabSection"></section>',
	tabList: [
		{ "name": "样式", "directive": "<div config-component-style-panel-directive></div>", "active": true },
		{ "name": "动画", "directive": "<div config-component-animation-panel-directive></div>", "active": false }
	]
}

mainModule.directive('uiTab', function ($compile) {
    return {
        restrict: 'A', 
        replace: true,
        link: function(scope, element, attrs){
        	var options = eval(attrs["tab-options"]);
        	var $wrapper = $(options.wrapper);
        	var $ul = $("<ul></ul>");

        	angular.each(options.classList, function(i, n){
        		$ul.addClass(n);
        	});

        	angular.each(options.tabList, function(i, n){
        		var $li = $('<li><a href="javascript:void(0);">' + n.name + '</a></li>');
        		if(n.active) {
        			$li.find("a").addClass("z-active");
        		}

        		$ul.append($li);
        		var $tabpanel = $compile(n.directive)(scope);
        		element.append($tabpanel);
        	});
        	
        	element.append($wrapper);
        }
    };
});