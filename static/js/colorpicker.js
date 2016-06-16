; (function ($, window, document, undefined) {

	var data_colorpicker = { colors : [
		{ "color": "#FFFFFF", "src": "static/images/colorpicker_colornone.png" },
		{ "color": "#FFFFFF" },
		{ "color": "#E5E5E5" },
		{ "color": "#CCCCCC" },
		{ "color": "#999999" },
		{ "color": "#808080" },
		{ "color": "#666666" },
		{ "color": "#333333" },
		{ "color": "#222222" },
		{ "color": "#000000" },
		{ "color": "#E5B8AE" },
		{ "color": "#F3CCCB" },
		{ "color": "#FCE5CB" },
		{ "color": "#FFF1CC" },
		{ "color": "#D9E9D2" },
		{ "color": "#C0F8F1" },
		{ "color": "#D0E0E4" },
		{ "color": "#CFE2F4" },
		{ "color": "#D9D2EA" },
		{ "color": "#EAD1DC" },
		{ "color": "#971200" },
		{ "color": "#FD2500" },
		{ "color": "#FE9900" },
		{ "color": "#FFFB00" },
		{ "color": "#2DF900" },
		{ "color": "#26FCCF" },
		{ "color": "#24FDFF" },
		{ "color": "#0433FF" },
		{ "color": "#9637FF" },
		{ "color": "#FC40FF" },
		{ "color": "#A52000" },
		{ "color": "#CA1B00" },
		{ "color": "#E5912A" },
		{ "color": "#F1C00A" },
		{ "color": "#6CA647" },
		{ "color": "#19A391" },
		{ "color": "#46818F" },
		{ "color": "#3D86C9" },
		{ "color": "#6652AA" },
		{ "color": "#A54F7A" },
		{ "color": "#5A1000" },
		{ "color": "#650800" },
		{ "color": "#773F00" },
		{ "color": "#7F5F00" },
		{ "color": "#294D09" },
		{ "color": "#0A7366" },
		{ "color": "#0D343E" },
		{ "color": "#073865" },
		{ "color": "#1E154F" },
		{ "color": "#4B1431" }
	]};

	var tpl_colorpicker = [
	'<div class="u-colorpicker f-ml-6" style="position:relative;overflow:visible;">',
	    '<input type="text" style="color: rgb(0, 0, 0); background: rgb(204, 204, 204);">',
	    '<a href="javascript:void(0);" class="small"><i class="icon-x20 icon-x20-color"></i></a>',
	    '<div class="oni-colorpicker" style="height: 184px; display: none; position:absolute;">',
			'<div class="oni-colorpicker-color-list">',
			    '{{ each colors as color i}}',
				'<div class="color-box" style="background-color: {{ color.color }};">',
					'{{ if color.src != null }}',
					'<img src="{{ color.src }}">',
					'{{ /if }}',
				'</div>',
				'{{ /each }}',
				'<hr>',
				'<div class="switch">',
					'<div class="title">更多颜色</div>',
					'<div class="u-iphone-switch switch-bg">',
						'<div class="switch-btn"></div>',
					'</div>',
				'</div>',
			'</div>',
		'</div>',
	'</div>'
	].join('');

	var ColorPicker = function (element, options) {
		this.defaults = {
			onChange: function(color){}
		};
		this.$element = $(element);
		this.options = $.extend({}, this.defaults, options);
	}

	ColorPicker.prototype.init = function () {

		var html = template.compile(tpl_colorpicker)(data_colorpicker);

		var $html = $(html), options = this.options, $element = this.$element;

		$html.find(".oni-colorpicker").hide();

		$("body").append($html);

		$element.replaceWith($html);
		$("div.oni-colorpicker-color-list>div.color-box", $html).on("click", function(e){
			e.stopPropagation();
			var color = $(this).css("background-color");
			options.onChange(color);
		})

		$("body").on("click", function(){
			$html.find(".oni-colorpicker").hide();
		});

		$html.on("click", function(e){
			e.stopPropagation();
			$("body").find(".oni-colorpicker").hide();
			var top = $element.offset().top;
			var left = $element.offset().left;
			$html.find(".oni-colorpicker").css("top", $html.outerHeight());
			$html.find(".oni-colorpicker").css("right", 0);
			$html.find(".oni-colorpicker").toggle();
		});

	}

	$.fn.colorpicker = function (options) {
        return $.each(this, function(i, element){
        	var colorPicker = new ColorPicker(element, options);
        	colorPicker.init();
        });
    }
})(jQuery, window, document);