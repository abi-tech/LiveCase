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
        '<div panel-option="constants.confAnimIn[3]" confing-row></div>',
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
        '<div panel-option="constants.confAnimOut[3]" confing-row></div>',
    '</div>',
].join('');

var tpl_conf_header = [
    '<header class="c-conf-header">',
        '<div class="c-compnent-icon"></div>',
        '<span style="color:#444"></span>',
    '</header>'
].join('');
//configPageBackgroundDirective
var tpl_global_config = [
    '<div class="g-config">',
        '<section class="c-config">',
            '<section class="c-config-wapper">',
            '</section>',
        '</section>',
    '</div>'
].join('');

var tpl_conf_position = [
    '<section class="c-conf-section c-conf-common">',
        '<div class="c-conf-row c-conf-row-3">',
            '<label class="c-input-label" for="left">位置</label>',
            '<div class="c-input-box">',
                '<label class="u-label f-mr-9">X轴</label>',
                '<input type="text" id="left" class="u-textbox f-mr-40" size="10" ng-model="currentComponent.left" />',
                '<label class="u-label f-mr-9" for="top">Y轴</label>',
                '<input type="text" id="top" class="u-textbox" size="10" ng-model="currentComponent.top" />',
            '</div>',
        '</div>',
        '<div class="c-conf-row">',
            '<label class="c-input-label" for="width">大小</label>',
            '<div class="c-input-box">',
                '<label class="u-label f-mr-9">宽</label>',
                '<input type="text" id="width" class="u-textbox f-mr-40" size="10" ng-model="currentComponent.width" />',
                '<label class="u-label f-mr-9">高</label>',
                '<input type="text" id="height" class="u-textbox" size="10" ng-model="currentComponent.height" />',
            '</div>',
        '</div>',
    '</section>'
].join(''); 

var tpl_config_section_cropper = [
    '<section class="c-conf-section z-expand" style="display: block;">',
        '<section class="c-conf-panel">',
            '<div class="jcrop-panel-header" style="overflow: hidden">更换图片</div>',
            '<div class="jcrop-panel">',
                '<div class="jcrop-wrap">',
                    '<img id="image" />',
                '</div>',
            '</div>',
            '<div class="jcrop-setUp">',
                '<ul>',
                    '<li data-value="0" class="curr"> 自由</li>',
                    '<li data-value="1"> 正方形</li>',
                    '<li data-value="2"> 4:3</li>',
                    '<li data-value="3"> 16:9</li>',
                    '<li data-value="4"> 铺满</li>',
                '</ul>',
            '</div>',
        '</section>',
    '</section>'
].join('');

var tpl_com_container = [
'<div class="f-abs c-c-container" ng-click="setCurrentComponent(component)">',
    '<div class="tl-c"></div><div class="tr-c"></div><div class="bl-c"></div><div class="br-c"></div>',
'</div>'
].join('');

var tpl_com_singleimage = [
'<div>',
    '<div class="c-singleimage preview-container" ng-style="component.containerStyle">',
        '<img class="jcrop-preview newImg" ng-src="{{ component.url }}" ng-style="component.imageStyle" />',
    '</div>',
'</div>'
].join('');

var tpl_com_singletext = [
'<div class="c-single-text">',
    '<div class="text-wrap" inside-styles="" ng-style="component.containerStyle">',
        '<div class="text-content" ng-style="component.textStyle">{{ component.text || \'右侧输入文本\' }}</div>',
    '</div>',
'</div>'
].join('');

var tpl_com_externallinks = [
'<div>',
    '<div class="c-externallinks content" inside-styles="">',
        '<a class="f-fix link" href="javascript:;" address="" phone="">',
            '<div class="btn-txt" ng-style="component.style">',
                '<div class="btn-info">{{component.text}}</div>',
            '</div>',
        '</a>',
    '</div>',
'</div>'
].join('');

var header = { "name": "按钮-链接", "url": "/static/images/externallinks.png?v=1" };
var constants = {
    templates: {
        globalConfig: tpl_global_config,
        confHeader: tpl_conf_header,
        confPosition: tpl_conf_position,
        comContainer: tpl_com_container,
        comSingleimage: tpl_com_singleimage,
        comSingletext: tpl_com_singletext,
        comExternallinks: tpl_com_externallinks,
    },
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
		{ "type":"bounceIn", "typeName": "弹入", "name": "弹入", "effect": "bounceIn", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"bounceIn", "typeName": "弹入", "name": "从上弹入", "effect": "bounceInDown", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"bounceIn", "typeName": "弹入", "name": "从下弹入", "effect": "bounceInUp", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"bounceIn", "typeName": "弹入", "name": "从左弹入", "effect": "bounceInLeft", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"bounceIn", "typeName": "弹入", "name": "从右弹入", "effect": "bounceInRight", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"fadeIn", "typeName": "淡入", "name": "淡入", "effect": "fadeIn", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"fadeIn", "typeName": "淡入", "name": "从上淡入", "effect": "fadeInDown", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"fadeIn", "typeName": "淡入", "name": "从下淡入", "effect": "fadeInUp", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"fadeIn", "typeName": "淡入", "name": "从左淡入", "effect": "fadeInLeft", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"fadeIn", "typeName": "淡入", "name": "从右淡入", "effect": "fadeInRight", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"flipIn", "typeName": "翻入", "name": "水平翻入", "effect": "flipInY", "delay": 0, "duration": 1, "count": 1,"infinite":false },
	    { "type":"flipIn", "typeName": "翻入", "name": "垂直翻入", "effect": "flipInX", "delay": 0, "duration": 1, "count": 1,"infinite":false },
	    { "type":"rotateIn", "typeName": "旋入", "name": "旋入", "effect": "rotateIn", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"rotateIn", "typeName": "旋入", "name": "从上旋入", "effect": "rotateInDown", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"rotateIn", "typeName": "旋入", "name": "从下旋入", "effect": "rotateInUp", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"rotateIn", "typeName": "旋入", "name": "从左旋入", "effect": "rotateInLeft", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"rotateIn", "typeName": "旋入", "name": "从右旋入", "effect": "rotateInRight", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"zoomIn", "typeName": "渐进放大", "name": "渐进放大", "effect": "zoomIn", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"zoomIn", "typeName": "渐进放大", "name": "从上放大", "effect": "zoomInDown", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"zoomIn", "typeName": "渐进放大", "name": "从下放大", "effect": "zoomInUp", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"zoomIn", "typeName": "渐进放大", "name": "从左放大", "effect": "zoomInLeft", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"zoomIn", "typeName": "渐进放大", "name": "从右放大", "effect": "zoomInRight", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"bounceOut", "typeName": "弹出", "name": "弹出", "effect": "bounceOut", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"bounceOut", "typeName": "弹出", "name": "从上弹出", "effect": "bounceOutDown", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"bounceOut", "typeName": "弹出", "name": "从下弹出", "effect": "bounceOutUp", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"bounceOut", "typeName": "弹出", "name": "从左弹出", "effect": "bounceOutLeft", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"bounceOut", "typeName": "弹出", "name": "从右弹出", "effect": "bounceOutRight", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"fadeOut", "typeName": "淡出", "name": "淡出", "effect": "fadeOut", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"fadeOut", "typeName": "淡出", "name": "从上淡出", "effect": "fadeOutDown", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"fadeOut", "typeName": "淡出", "name": "从下淡出", "effect": "fadeOutUp", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"fadeOut", "typeName": "淡出", "name": "从左淡出", "effect": "fadeOutLeft", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"fadeOut", "typeName": "淡出", "name": "从右淡出", "effect": "fadeOutRight", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"flipOut", "typeName": "翻出", "name": "水平翻出", "effect": "flipOutY", "delay": 0, "duration": 1, "count": 1,"infinite":false },
	    { "type":"flipOut", "typeName": "翻出", "name": "垂直翻出", "effect": "flipOutX", "delay": 0, "duration": 1, "count": 1,"infinite":false },
	    { "type":"rotateOut", "typeName": "旋出", "name": "旋出", "effect": "rotateOut", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"rotateOut", "typeName": "旋出", "name": "从上旋出", "effect": "rotateOutDown", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"rotateOut", "typeName": "旋出", "name": "从下旋出", "effect": "rotateOutUp", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"rotateOut", "typeName": "旋出", "name": "从左旋出", "effect": "rotateOutLeft", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"rotateOut", "typeName": "旋出", "name": "从右旋出", "effect": "rotateOutRight", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"zoomOut", "typeName": "渐进缩小", "name": "渐进缩小", "effect": "zoomOut", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"zoomOut", "typeName": "渐进缩小", "name": "从上缩小", "effect": "zoomOutDown", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"zoomOut", "typeName": "渐进缩小", "name": "从下缩小", "effect": "zoomOutUp", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"zoomOut", "typeName": "渐进缩小", "name": "从左缩小", "effect": "zoomOutLeft", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"zoomOut", "typeName": "渐进缩小", "name": "从右缩小", "effect": "zoomOutRight", "delay": 0, "duration": 1, "count": 1,"infinite":false },
        { "type":"hinge", "typeName": "坠落", "name": "坠落", "effect": "hinge", "delay": 0, "duration": 1, "count": 1,"infinite":false },
	],
	directives:[
		'<div tab-options="data_ui_tab_facade" ui-tab></div>'
	],
	confStyleAndAnim: {
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
    ]},{ "name": "无限循环", "inputs": [
        { "inputHtml": '<div ng-model="currentComponent.animIn.infinite" ipr-switcher></div>' }
    ]}],
    confAnimOut: [{ "name": "开始时间", "inputs": [
        { "inputHtml": '<div ng-model="currentComponent.animOut.delay" slider-min="0" slider-max="300" slider-step="0.01" inputbox-slider></div>' }
    ]},{ "name": "持续时间", "inputs": [
        { "inputHtml": '<div ng-model="currentComponent.animOut.duration" slider-min="0" slider-max="5" slider-step="0.01" inputbox-slider></div>' }
    ]},{ "name": "执行次数", "inputs": [
        { "inputHtml": '<div ng-model="currentComponent.animOut.count" slider-min="1" slider-max="10" inputbox-slider></div>' }
    ]},{ "name": "无限循环", "inputs": [
        { "inputHtml": '<div ng-model="currentComponent.animOut.infinite" ipr-switcher></div>' }
    ]}],
    confFacade: {
        classList: ["u-tab", "z-singleLine"],
        activeClass: "z-active",
        wrapper: '<section class="c-conf-section c-conf-tabSection"></section>',
        tabList: [
            { "name": "样式", "directive": "<div config-component-style-panel-directive></div>", "active": true },
            { "name": "动画", "directive": "<div config-component-animation-panel-directive></div>", "active": false }
        ]
    },
    confPage: [
        '<div config-page-header-directive></div>',
        '<div config-page-background-directive></div>',
        '<div config-page-section-directive></div>'
    ],
    confSingleImage: [
        '<div ng-model="currentComponent" conf-header></div>',
        '<div conf-singleimage></div>',
        '<div conf-facade></div>',
        '<div conf-position></div>',
    ],
    confSingleText: [
        '<div ng-model="currentComponent" conf-header></div>',
        '<div conf-singletext></div>',
        '<div conf-facade></div>',
        '<div conf-position></div>',
    ],
    confExternalLinks: [
        '<div ng-model="currentComponent" conf-header></div>',
        '<div conf-singletext></div>',
        '<div conf-facade></div>',
        '<div conf-position></div>',
    ]
};