var tpl_anim_list_item = [
'<li>',
    '<a href="javascript:void(0);" class="u-image-wrap f-p-4">',
        '<div class="u-image-large"></div>',
        '<i class="icon-x22 icon-x22-tick-circle"></i>',
    '</a>',
    '<p></p>',
'</li>'
].join('');

var tpl_sub_anim_list_item = [
'<li>',
    '<a href="javascript:void(0);" class="u-image-wrap u-image">',
        '<div class="u-image-small"></div>',
        '<i class="icon-x22 icon-x22-tick-circle"></i>',
    '</a>',
    '<p></p>',
'</li>'
].join('');

var constants = {
	animations: [
		{ "type":"bounceIn", "name": "弹入", "effect": "a", "delay": 0, "duration": 1, "count": 1 },
        { "type":"bounceIn", "name": "从上弹入", "effect": "b", "delay": 0, "duration": 1, "count": 1 },
        { "type":"bounceIn", "name": "从下弹入", "effect": "c", "delay": 0, "duration": 1, "count": 1 },
        { "type":"bounceIn", "name": "从左弹入", "effect": "d", "delay": 0, "duration": 1, "count": 1 },
        { "type":"bounceIn", "name": "从右弹入", "effect": "e", "delay": 0, "duration": 1, "count": 1 },
        { "type":"fadeIn", "name": "淡入", "effect": "a", "delay": 0, "duration": 1, "count": 1 },
        { "type":"fadeIn", "name": "从上淡入", "effect": "b", "delay": 0, "duration": 1, "count": 1 },
        { "type":"fadeIn", "name": "从下淡入", "effect": "c", "delay": 0, "duration": 1, "count": 1 },
        { "type":"fadeIn", "name": "从左淡入", "effect": "d", "delay": 0, "duration": 1, "count": 1 },
        { "type":"fadeIn", "name": "从右淡入", "effect": "e", "delay": 0, "duration": 1, "count": 1 },
        { "type":"flipIn", "name": "水平翻入", "effect": "a", "delay": 0, "duration": 1, "count": 1 },
	    { "type":"flipIn", "name": "垂直翻入", "effect": "b", "delay": 0, "duration": 1, "count": 1 },
	    { "type":"rotateIn", "name": "旋入", "effect": "a", "delay": 0, "duration": 1, "count": 1 },
        { "type":"rotateIn", "name": "从上旋入", "effect": "b", "delay": 0, "duration": 1, "count": 1 },
        { "type":"rotateIn", "name": "从下旋入", "effect": "c", "delay": 0, "duration": 1, "count": 1 },
        { "type":"rotateIn", "name": "从左旋入", "effect": "d", "delay": 0, "duration": 1, "count": 1 },
        { "type":"rotateIn", "name": "从右旋入", "effect": "e", "delay": 0, "duration": 1, "count": 1 },
        { "type":"zoomIn", "name": "渐进放大", "effect": "a", "delay": 0, "duration": 1, "count": 1 },
        { "type":"zoomIn", "name": "从上放入", "effect": "b", "delay": 0, "duration": 1, "count": 1 },
        { "type":"zoomIn", "name": "从下放入", "effect": "c", "delay": 0, "duration": 1, "count": 1 },
        { "type":"zoomIn", "name": "从左放入", "effect": "d", "delay": 0, "duration": 1, "count": 1 },
        { "type":"zoomIn", "name": "从右放入", "effect": "e", "delay": 0, "duration": 1, "count": 1 },
        { "type":"bounceOut", "name": "弹出", "effect": "a", "delay": 0, "duration": 1, "count": 1 },
        { "type":"bounceOut", "name": "从上弹出", "effect": "b", "delay": 0, "duration": 1, "count": 1 },
        { "type":"bounceOut", "name": "从下弹出", "effect": "c", "delay": 0, "duration": 1, "count": 1 },
        { "type":"bounceOut", "name": "从左弹出", "effect": "d", "delay": 0, "duration": 1, "count": 1 },
        { "type":"bounceOut", "name": "从右弹出", "effect": "e", "delay": 0, "duration": 1, "count": 1 },
        { "type":"fadeOut", "name": "淡出", "effect": "a", "delay": 0, "duration": 1, "count": 1 },
        { "type":"fadeOut", "name": "从上淡出", "effect": "b", "delay": 0, "duration": 1, "count": 1 },
        { "type":"fadeOut", "name": "从下淡出", "effect": "c", "delay": 0, "duration": 1, "count": 1 },
        { "type":"fadeOut", "name": "从左淡出", "effect": "d", "delay": 0, "duration": 1, "count": 1 },
        { "type":"fadeOut", "name": "从右淡出", "effect": "e", "delay": 0, "duration": 1, "count": 1 },
        { "type":"flipOut", "name": "水平翻出", "effect": "a", "delay": 0, "duration": 1, "count": 1 },
	    { "type":"flipOut", "name": "垂直翻出", "effect": "b", "delay": 0, "duration": 1, "count": 1 },
	    { "type":"rotateOut", "name": "旋出", "effect": "a", "delay": 0, "duration": 1, "count": 1 },
        { "type":"rotateOut", "name": "从上旋出", "effect": "b", "delay": 0, "duration": 1, "count": 1 },
        { "type":"rotateOut", "name": "从下旋出", "effect": "c", "delay": 0, "duration": 1, "count": 1 },
        { "type":"rotateOut", "name": "从左旋出", "effect": "d", "delay": 0, "duration": 1, "count": 1 },
        { "type":"rotateOut", "name": "从右旋出", "effect": "e", "delay": 0, "duration": 1, "count": 1 },
        { "type":"zoomOut", "name": "渐进缩小", "effect": "a", "delay": 0, "duration": 1, "count": 1 },
        { "type":"zoomOut", "name": "从上缩小", "effect": "b", "delay": 0, "duration": 1, "count": 1 },
        { "type":"zoomOut", "name": "从下缩小", "effect": "c", "delay": 0, "duration": 1, "count": 1 },
        { "type":"zoomOut", "name": "从左缩小", "effect": "d", "delay": 0, "duration": 1, "count": 1 },
        { "type":"zoomOut", "name": "从右缩小", "effect": "e", "delay": 0, "duration": 1, "count": 1 },
        { "type":"hinge", "name": "坠落", "effect": "e", "delay": 0, "duration": 1, "count": 1 },
	],
	configStyleAndAnim: {
	    classList: ["u-tab", "z-singleLine"],
	    activeClass: "z-active",
	    wrapper: '<section class="c-conf-section c-conf-tabSection"></section>',
	    tabList: [
	        { "name": "样式", "directive": "<div config-component-style-panel-directive></div>", "active": true },
	        { "name": "动画", "directive": "<div config-component-animation-panel-directive></div>", "active": false }
	    ]
	},
	tabAnim: {
	    classList: ["u-tab", "z-singleLine", "f-mb-10"],
	    activeClass: "z-active",
	    wrapper: '<div class="c-conf-row"></div>',
	    tabList: [
	        { "name": "入场动画", "directive": '<div ng-model="currentComponent.animIn" options="constants.pickerAnimIn" animation-picker></div>', "active": true },
	        { "name": "出场动画", "directive": '<div ng-model="currentComponent.animOut" options="constants.pickerAnimOut" animation-picker></div>', "active": false }
	    ]
	},
	pickerAnimIn: { noneInfo: "没有入场动画", btnInfo: "添加动画", dialog: '<div options="constants.dialogAnimIn" ui-dialog></div>', watch: "currentComponent.animIn.type" },
	pickerAnimOut: { noneInfo: "没有入场动画", btnInfo: "添加动画", dialog: '<div options="constants.dialogAnimOut" ui-dialog></div>', watch: "currentComponent.animOut.type" },
	dialogAnimIn: { "head": "选择动画", "directives": [
		'<div ng-model="currentComponent.animIn.type" options="constants.chooseAnimIn" choose-list></div>'
	]},
	dialogAnimOut: { "head": "选择动画", "directives": [
		'<div ng-model="currentComponent.animOut.type" options="constants.chooseAnimOut" choose-list></div>'
	]},
	chooseAnimIn : { 
		tpl: tpl_anim_list_item, 
		class: "u-chooseList",
		list: [
			{ "name": "弹入", "class": "anime-bounceIn", "value": "bounceIn" }, 
			{ "name": "淡入", "class": "anime-fadeIn", "value": "fadeIn" },
			{ "name": "翻入", "class": "anime-flipIn", "value": "flipIn" },
			{ "name": "旋入", "class": "anime-rotateIn", "value": "rotateIn" },
			{ "name": "渐进放大", "class": "anime-zoomIn", "value": "zoomIn" }
		]
	},
	chooseAnimOut : { 
		tpl: tpl_anim_list_item, 
		class: "u-chooseList",
		list: [
			{ "name": "弹出", "class": "anime-bounceOut", "value": "bounceOut" }, 
			{ "name": "淡出", "class": "anime-fadeOut", "value": "fadeOut" },
			{ "name": "翻出", "class": "anime-flipOut", "value": "flipOut" },
			{ "name": "旋出", "class": "anime-rotateOut", "value": "rotateOut" },
			{ "name": "渐进缩小", "class": "anime-zoomOut", "value": "zoomOut" },
			{ "name": "坠落", "class": "anime-hinge", "value": "hinge" }
		]
	}
};