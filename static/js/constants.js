var tpl_anim_list_item = [
'<li>',
    '<a href="javascript:void(0);" class="u-image-wrap f-p-4">',
        '<div class="u-image-large"></div>',
        '<i class="icon-x22 icon-x22-tick-circle"></i>',
    '</a>',
    '<p></p>',
'</li>'
].join('');

var tpl_sub_anim_in_list_item = [
'<li>',
    '<a href="javascript:void(0);" class="u-image-wrap u-image">',
        '<div class="u-image-small anime-in"></div>',
        '<i class="icon-x22 icon-x22-tick-circle"></i>',
    '</a>',
    '<p></p>',
'</li>'
].join('');

var tpl_sub_anim_out_list_item = [
'<li>',
    '<a href="javascript:void(0);" class="u-image-wrap u-image">',
        '<div class="u-image-small anime-out"></div>',
        '<i class="icon-x22 icon-x22-tick-circle"></i>',
    '</a>',
    '<p></p>',
'</li>'
].join('');

var tpl_anim_in = [
    '<div class="c-conf-panel f-mt-4">',
        '<hr class="u-hr u-hr-2">',
        '<div class="c-conf-row c-conf-row-3">',
            '<div ng-model="currentComponent.animIn.effect" choose-list></div>',
        '</div>',
        '<div panel-option="constants.confAnimIn[0]" confing-row></div>',
        '<div panel-option="constants.confAnimIn[1]" confing-row></div>',
        '<div panel-option="constants.confAnimIn[2]" confing-row></div>',
    '</div>',
].join('');

var tpl_anim_out = [
    '<div class="c-conf-panel f-mt-4">',
        '<hr class="u-hr u-hr-2">',
        '<div class="c-conf-row c-conf-row-3">',
            '<div ng-model="currentComponent.animOut.effect" choose-list></div>',
        '</div>',
        '<div panel-option="constants.confAnimOut[0]" confing-row></div>',
        '<div panel-option="constants.confAnimOut[1]" confing-row></div>',
        '<div panel-option="constants.confAnimOut[2]" confing-row></div>',
    '</div>',
].join('');

var constants = {
	animationType: {
		"bounceIn": "弹入",
		"fadeIn": "淡入",
		"flipIn": "翻入",
		"rotateIn": "旋入",
		"zoomIn": "渐进放大",
		"bounceOut": "弹出", 
		"fadeOut": "淡出",
		"flipOut": "翻出",
		"rotateOut": "旋出",
		"zoomOut": "渐进缩小",
		"hinge": "坠落"
	},
	animations: [
		{ "type":"bounceIn", "typeName": "弹入", "name": "弹入", "effect": "bounceIn", "delay": 0, "duration": 1, "count": 1 },
        { "type":"bounceIn", "typeName": "弹入", "name": "从上弹入", "effect": "bounceInDown", "delay": 0, "duration": 1, "count": 1 },
        { "type":"bounceIn", "typeName": "弹入", "name": "从下弹入", "effect": "bounceInUp", "delay": 0, "duration": 1, "count": 1 },
        { "type":"bounceIn", "typeName": "弹入", "name": "从左弹入", "effect": "bounceInLeft", "delay": 0, "duration": 1, "count": 1 },
        { "type":"bounceIn", "typeName": "弹入", "name": "从右弹入", "effect": "bounceInRight", "delay": 0, "duration": 1, "count": 1 },
        { "type":"fadeIn", "typeName": "淡入", "name": "淡入", "effect": "fadeIn", "delay": 0, "duration": 1, "count": 1 },
        { "type":"fadeIn", "typeName": "淡入", "name": "从上淡入", "effect": "fadeInDown", "delay": 0, "duration": 1, "count": 1 },
        { "type":"fadeIn", "typeName": "淡入", "name": "从下淡入", "effect": "fadeInUp", "delay": 0, "duration": 1, "count": 1 },
        { "type":"fadeIn", "typeName": "淡入", "name": "从左淡入", "effect": "fadeInLeft", "delay": 0, "duration": 1, "count": 1 },
        { "type":"fadeIn", "typeName": "淡入", "name": "从右淡入", "effect": "fadeInRight", "delay": 0, "duration": 1, "count": 1 },
        { "type":"flipIn", "typeName": "翻入", "name": "水平翻入", "effect": "flipInY", "delay": 0, "duration": 1, "count": 1 },
	    { "type":"flipIn", "typeName": "翻入", "name": "垂直翻入", "effect": "flipInX", "delay": 0, "duration": 1, "count": 1 },
	    { "type":"rotateIn", "typeName": "旋入", "name": "旋入", "effect": "rotateIn", "delay": 0, "duration": 1, "count": 1 },
        { "type":"rotateIn", "typeName": "旋入", "name": "从上旋入", "effect": "rotateInDown", "delay": 0, "duration": 1, "count": 1 },
        { "type":"rotateIn", "typeName": "旋入", "name": "从下旋入", "effect": "rotateInUp", "delay": 0, "duration": 1, "count": 1 },
        { "type":"rotateIn", "typeName": "旋入", "name": "从左旋入", "effect": "rotateInLeft", "delay": 0, "duration": 1, "count": 1 },
        { "type":"rotateIn", "typeName": "旋入", "name": "从右旋入", "effect": "rotateInRight", "delay": 0, "duration": 1, "count": 1 },
        { "type":"zoomIn", "typeName": "渐进放大", "name": "渐进放大", "effect": "zoomIn", "delay": 0, "duration": 1, "count": 1 },
        { "type":"zoomIn", "typeName": "渐进放大", "name": "从上放大", "effect": "zoomInDown", "delay": 0, "duration": 1, "count": 1 },
        { "type":"zoomIn", "typeName": "渐进放大", "name": "从下放大", "effect": "zoomInUp", "delay": 0, "duration": 1, "count": 1 },
        { "type":"zoomIn", "typeName": "渐进放大", "name": "从左放大", "effect": "zoomInLeft", "delay": 0, "duration": 1, "count": 1 },
        { "type":"zoomIn", "typeName": "渐进放大", "name": "从右放大", "effect": "zoomInRight", "delay": 0, "duration": 1, "count": 1 },
        { "type":"bounceOut", "typeName": "弹出", "name": "弹出", "effect": "bounceOut", "delay": 0, "duration": 1, "count": 1 },
        { "type":"bounceOut", "typeName": "弹出", "name": "从上弹出", "effect": "bounceOutDown", "delay": 0, "duration": 1, "count": 1 },
        { "type":"bounceOut", "typeName": "弹出", "name": "从下弹出", "effect": "bounceOutUp", "delay": 0, "duration": 1, "count": 1 },
        { "type":"bounceOut", "typeName": "弹出", "name": "从左弹出", "effect": "bounceOutLeft", "delay": 0, "duration": 1, "count": 1 },
        { "type":"bounceOut", "typeName": "弹出", "name": "从右弹出", "effect": "bounceOutRight", "delay": 0, "duration": 1, "count": 1 },
        { "type":"fadeOut", "typeName": "淡出", "name": "淡出", "effect": "fadeOut", "delay": 0, "duration": 1, "count": 1 },
        { "type":"fadeOut", "typeName": "淡出", "name": "从上淡出", "effect": "fadeOutDown", "delay": 0, "duration": 1, "count": 1 },
        { "type":"fadeOut", "typeName": "淡出", "name": "从下淡出", "effect": "fadeOutUp", "delay": 0, "duration": 1, "count": 1 },
        { "type":"fadeOut", "typeName": "淡出", "name": "从左淡出", "effect": "fadeOutLeft", "delay": 0, "duration": 1, "count": 1 },
        { "type":"fadeOut", "typeName": "淡出", "name": "从右淡出", "effect": "fadeOutRight", "delay": 0, "duration": 1, "count": 1 },
        { "type":"flipOut", "typeName": "翻出", "name": "水平翻出", "effect": "flipOutY", "delay": 0, "duration": 1, "count": 1 },
	    { "type":"flipOut", "typeName": "翻出", "name": "垂直翻出", "effect": "flipOutX", "delay": 0, "duration": 1, "count": 1 },
	    { "type":"rotateOut", "typeName": "旋出", "name": "旋出", "effect": "rotateOut", "delay": 0, "duration": 1, "count": 1 },
        { "type":"rotateOut", "typeName": "旋出", "name": "从上旋出", "effect": "rotateOutDown", "delay": 0, "duration": 1, "count": 1 },
        { "type":"rotateOut", "typeName": "旋出", "name": "从下旋出", "effect": "rotateOutUp", "delay": 0, "duration": 1, "count": 1 },
        { "type":"rotateOut", "typeName": "旋出", "name": "从左旋出", "effect": "rotateOutLeft", "delay": 0, "duration": 1, "count": 1 },
        { "type":"rotateOut", "typeName": "旋出", "name": "从右旋出", "effect": "rotateOutRight", "delay": 0, "duration": 1, "count": 1 },
        { "type":"zoomOut", "typeName": "渐进缩小", "name": "渐进缩小", "effect": "zoomOut", "delay": 0, "duration": 1, "count": 1 },
        { "type":"zoomOut", "typeName": "渐进缩小", "name": "从上缩小", "effect": "zoomOutDown", "delay": 0, "duration": 1, "count": 1 },
        { "type":"zoomOut", "typeName": "渐进缩小", "name": "从下缩小", "effect": "zoomOutUp", "delay": 0, "duration": 1, "count": 1 },
        { "type":"zoomOut", "typeName": "渐进缩小", "name": "从左缩小", "effect": "zoomOutLeft", "delay": 0, "duration": 1, "count": 1 },
        { "type":"zoomOut", "typeName": "渐进缩小", "name": "从右缩小", "effect": "zoomOutRight", "delay": 0, "duration": 1, "count": 1 },
        { "type":"hinge", "typeName": "坠落", "name": "坠落", "effect": "hinge", "delay": 0, "duration": 1, "count": 1 },
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
	pickerAnimIn: { noneInfo: "没有入场动画", btnInfo: "添加动画", dialog: '<div options="constants.dialogAnimIn" ui-dialog></div>', watch: "currentComponent.animIn.type", type: tpl_sub_anim_in_list_item, type1: tpl_anim_in, },
	pickerAnimOut: { noneInfo: "没有入场动画", btnInfo: "添加动画", dialog: '<div options="constants.dialogAnimOut" ui-dialog></div>', watch: "currentComponent.animOut.type", type: tpl_sub_anim_out_list_item, type1: tpl_anim_out },
	dialogAnimIn: { "head": "选择动画", "directives": [
		'<div ng-model="currentComponent.animIn.type" options="constants.chooseAnimIn" choose-list></div>'
	]},
	dialogAnimOut: { "head": "选择动画", "directives": [
		'<div ng-model="currentComponent.animOut.type" options="constants.chooseAnimOut" choose-list></div>'
	]},
	chooseAnimIn : { 
		id: "type",
		name: "typeName",
		tpl: tpl_anim_list_item, 
		class: "u-chooseList",
		list: [
			{ "type":"bounceIn", "typeName": "弹入", "name": "弹入", "effect": "bounceIn", "delay": 0, "duration": 1, "count": 1, "icon": "anime-bounceIn" }, 
			{ "type":"fadeIn", "typeName": "淡入", "name": "淡入", "effect": "fadeIn", "delay": 0, "duration": 1, "count": 1, "icon": "anime-fadeIn" },
			{ "type":"flipIn", "typeName": "翻入", "name": "水平翻入", "effect": "flipInY", "delay": 0, "duration": 1, "count": 1, "icon": "anime-flipIn" },
			{ "type":"rotateIn", "typeName": "旋入", "name": "旋入", "effect": "rotateIn", "delay": 0, "duration": 1, "count": 1, "icon": "anime-rotateIn" },
			{ "type":"zoomIn", "typeName": "渐进放大", "name": "渐进放大", "effect": "zoomIn", "delay": 0, "duration": 1, "count": 1, "icon": "anime-zoomIn" },
		]
	},
	chooseAnimOut : { 
		id: "type",
		name: "typeName",
		tpl: tpl_anim_list_item, 
		class: "u-chooseList",
		list: [
			{ "type":"bounceOut", "typeName": "弹出", "name": "弹出", "effect": "bounceOut", "delay": 0, "duration": 1, "count": 1, "icon": "anime-bounceOut" },
			{ "type":"fadeOut", "typeName": "淡出", "name": "淡出", "effect": "fadeOut", "delay": 0, "duration": 1, "count": 1, "icon": "anime-fadeOut" },
			{ "type":"flipOut", "typeName": "翻出", "name": "水平翻出", "effect": "flipOutY", "delay": 0, "duration": 1, "count": 1, "icon": "anime-flipOut" },
			{ "type":"rotateOut", "typeName": "旋出", "name": "旋出", "effect": "rotateOut", "delay": 0, "duration": 1, "count": 1, "icon": "anime-rotateOut" },
			{ "type":"zoomOut", "typeName": "渐进缩小", "name": "渐进缩小", "effect": "zoomOut", "delay": 0, "duration": 1, "count": 1, "icon": "anime-zoomOut" },
			{ "type":"hinge", "typeName": "坠落", "name": "坠落", "effect": "hinge", "delay": 0, "duration": 1, "count": 1, "icon": "anime-hinge" },
		]
	},
	confAnimIn: [{ "name": "开始时间", "inputs": [
        { "inputHtml": '<div ng-model="currentComponent.animIn.delay" slider-min="0" slider-max="300" slider-step="0.01" inputbox-slider></div>' }
    ]},{ "name": "持续时间", "inputs": [
        { "inputHtml": '<div ng-model="currentComponent.animIn.duration" slider-min="0" slider-max="5" slider-step="0.01" inputbox-slider></div>' }
    ]},{ "name": "执行次数", "inputs": [
        { "inputHtml": '<div ng-model="currentComponent.animIn.count" slider-min="1" slider-max="10" inputbox-slider></div>' }
    ]}],
    confAnimOut: [{ "name": "开始时间", "inputs": [
        { "inputHtml": '<div ng-model="currentComponent.animOut.delay" slider-min="0" slider-max="300" slider-step="0.01" inputbox-slider></div>' }
    ]},{ "name": "持续时间", "inputs": [
        { "inputHtml": '<div ng-model="currentComponent.animOut.duration" slider-min="0" slider-max="5" slider-step="0.01" inputbox-slider></div>' }
    ]},{ "name": "执行次数", "inputs": [
        { "inputHtml": '<div ng-model="currentComponent.animOut.count" slider-min="1" slider-max="10" inputbox-slider></div>' }
    ]}]
};