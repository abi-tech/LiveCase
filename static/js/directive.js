mainModule.directive('navDirective', function () {
    return {
        restrict : 'AE',
        replace : true,
        templateUrl : 'tpls/nav.html'
    };
});

mainModule.directive('configDirective', function () {
    return {
        restrict : 'AE',
        replace : true,
        templateUrl : 'tpls/config.html',
        link : function (scope, element, attrs) {
            scope.$watch('currentComponent', function(newValue, oldValue) { console.log(scope.currentPage);
                if(scope.currentComponent == null){ 
                    
                    

                    $("#page_backgroundColor").spectrum({
                        preferredFormat: "hex",
                        showInput: true,
                        showPalette: true,
                        palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]],
                        change: function(color) { //console.log(color);
                            scope.currentPage.style["background-color"] = color.toHexString(); 
                            scope.$apply();
                        },
                        show: function() {

                        },
                        hide: function() {

                        }
                    });

                }else{
                    

                }
                
                //$("#borderRadius", element).val(borderRadius);
            }); 
        }
    };
});

mainModule.directive('previewDirective', function () {
    return {
        restrict : 'AE',
        replace : true,
        templateUrl : 'tpls/preview.html',
        link : function (scope, element, attrs) {
            //angular.bootstrap(element);
            
        }

    };
});

mainModule.directive('editorDirective',[ '$rootScope', function (rootScope) {
    return {
        restrict : 'AE',
        replace : true,
        templateUrl : 'tpls/editor.html',
        link : function (scope, element, attrs) {
            rootScope.originWidth = 384;
            rootScope.originHeight = 624;

            var editorHeight = $(document).height() - 120 - 40;
            var editorScale = editorHeight / rootScope.originHeight;
            var editorWidth = rootScope.originWidth * editorScale;

            rootScope.editorScale = editorScale;
            rootScope.editorWidth = editorWidth;
            rootScope.editorHeight = editorHeight;

            $(".m-editor", element).on('click', function(){
                scope.currentComponent = null;
                $(".c-c-container").removeClass("u-comChoose");
                scope.$apply();
            });
        }
    };
}]);

mainModule.directive('audioDirective',[ '$rootScope', function (rootScope) {
    return {
        restrict : 'AE',
        replace : true,
        templateUrl : 'tpls/audio.html',
        link : function (scope, element, attrs) {
            rootScope.originWidth = 384;
            rootScope.originHeight = 624;

            rootScope.previewWidth = 80;
            rootScope.previewHeight = 418;
            rootScope.previewScale = rootScope.previewWidth / rootScope.originWidth;
        }
    };
}]);

var tpl = [
    '<div ng-click="setCurrentComponent(component)" class="f-abs c-c-container" ng-attr-data-id="{{component.id}}" >',
        '<div class="">',
            '<div class="c-externallinks content" src="../tpl/components/links/externallinks/img/layer-default.png">',
                '<a class="f-fix link" href="javascript:;" address="" phone="">',
                    '<div class="btn-txt" style="color: rgb(255, 255, 255); font-size: 1.625em;">',
                        '<div class="btn-info" style="text-align: center;">{{component.text}}</div>',
                    '</div>',
                '</a>',
            '</div>',
        '</div><div class="tl-c"></div><div class="tr-c"></div><div class="bl-c"></div><div class="br-c"></div>',
    '</div>'
].join('');

var tpl_component_container = [
    '<div class="f-abs c-c-container" ng-click="setCurrentComponent(component)" ng-attr-data-id="{{component.id}}">',
      '<div class="">',
        '<div class="c-externallinks content" inside-styles>',
          '<a class="f-fix link" href="javascript:;" address="" phone="">',
            '<div class="btn-txt" style="color: rgb(255, 255, 255); font-size: 1.625em;">',
              '<div class="btn-info" style="text-align: center;">{{component.text}}</div>',
            '</div>',
          '</a>',
        '</div>',
      '</div>',
      '<div class="tl-c"></div><div class="tr-c"></div><div class="bl-c"></div><div class="br-c"></div>',
    '</div>'
].join('');


mainModule.directive("componentDirective", ['$rootScope', 'pageService', function ($rootScope, pageService) {
    return {
        restrict: "AE",
        template: tpl_component_container,
        replace: true,
        link: function (scope, element, attrs) {
            element.css("top", scope.component.top);
            element.css("left", scope.component.left);
            element.css("width", scope.component.width);
            element.css("height", scope.component.height);
            element.css("z-index", scope.component.zIndex);
            element.css("opacity", scope.component.opacity / 100);
            element.css("transform", "rotate(" + scope.component.rotate + "deg)");
            element.css("display", "block");

            $("div.c-" + scope.component.type ,element).css("background-color", scope.component.backgroundColor);
            $("div.c-" + scope.component.type ,element).css("background-image", scope.component.backgroundImage);
            $("div.c-" + scope.component.type ,element).css("border-width", scope.component.borderWidth);
            $("div.c-" + scope.component.type ,element).css("border-color", scope.component.borderColor);
            $("div.c-" + scope.component.type ,element).css("border-radius", scope.component.borderRadius);

            if(attrs.preview === '1') return;
            var scale = Math.round($rootScope.editorWidth) / 640;

            element.css("top", scope.component.top * scale);
            element.css("left", scope.component.left * scale);
            element.css("width", scope.component.width * scale);
            element.css("height", scope.component.height * scale);
            element.css("z-index", scope.component.zIndex);
            element.css("opacity",  scope.component.opacity / 100);
            element.css("transform", "rotate(" + scope.component.rotate + "deg)");
            element.css("display", "block");
            element.css("cursor", "move");

            scope.$watch('currentComponent.rotate', function(newValue, oldValue) {  //console.log(newValue, oldValue);
                if(attrs.preview === '1' || scope.currentComponent == null) return;
                element.css("transform", "rotate(" + (scope.component.rotate || 0) + "deg)");
            }); 

            scope.$watch('currentComponent.opacity', function(newValue, oldValue) {  
                if(attrs.preview === '1' || scope.currentComponent == null) return; //console.log(element);
                element.css("opacity", (scope.component.opacity|| 0) / 100);
            }); 

            //console.log($("div.c-" + scope.component.type ,element));
            //$("div.c-" + scope.component.type ,element).css("top", scope.component.top * scale);
            //$("div.c-" + scope.component.type ,element).css("left", scope.component.left * scale);
            //$("div.c-" + scope.component.type ,element).css("width", scope.component.width * scale);
            //$("div.c-" + scope.component.type ,element).css("height", scope.component.height * scale);
            $("div.c-" + scope.component.type ,element).css("background-color", scope.component.backgroundColor);
            $("div.c-" + scope.component.type ,element).css("background-image", scope.component.backgroundImage);
            $("div.c-" + scope.component.type ,element).css("border-width", scope.component.borderWidth);
            $("div.c-" + scope.component.type ,element).css("border-color", scope.component.borderColor);
            $("div.c-" + scope.component.type ,element).css("border-radius", scope.component.borderRadius);
            //$("div.c-" + scope.component.type ,element).css("z-index", scope.component.zIndex);
            //$("div.c-" + scope.component.type ,element).css("opacity", scope.component.opacity / 100);
            //$("div.c-" + scope.component.type ,element).css("transform", "rotate(" + scope.component.rotate + "deg)");
            $("div.c-" + scope.component.type ,element).css("display", "block");
            //border-color border-width
            scope.$watch('currentComponent.top', function(newValue, oldValue) {  
                if(attrs.preview === '1' || scope.currentComponent == null) return;
                element.css("top", scope.component.top * scale);
            }); 

            scope.$watch('currentComponent.left', function(newValue, oldValue) {  
                if(attrs.preview === '1' || scope.currentComponent == null) return;
                element.css("left", scope.component.left * scale);
            }); 

            scope.$watch('currentComponent.width', function(newValue, oldValue) {  
                if(attrs.preview === '1' || scope.currentComponent == null) return;
                element.css("width", scope.component.width * scale);
            }); 

            scope.$watch('currentComponent.height', function(newValue, oldValue) {  
                if(attrs.preview === '1' || scope.currentComponent == null) return;
                element.css("height", scope.component.height * scale);
            }); 
            //
            scope.$watch('currentComponent.backgroundColor', function(newValue, oldValue) {  
                if(attrs.preview === '1' || scope.currentComponent == null) return;
                $("div.c-" + scope.component.type ,element).css("background-color", scope.component.backgroundColor);
            }); 

            scope.$watch('currentComponent.backgroundImage', function(newValue, oldValue) {  
                if(attrs.preview === '1' || scope.currentComponent == null) return;
                $("div.c-" + scope.component.type ,element).css("background-image", scope.component.backgroundImage);
            }); 

            scope.$watch('currentComponent.borderWidth', function(newValue, oldValue) {  
                if(attrs.preview === '1' || scope.currentComponent == null) return;
                $("div.c-" + scope.component.type ,element).css("border-width", scope.component.borderWidth);
            }); 

            scope.$watch('currentComponent.borderColor', function(newValue, oldValue) {  
                if(attrs.preview === '1' || scope.currentComponent == null) return;
                $("div.c-" + scope.component.type ,element).css("border-color", scope.component.borderColor);
            }); 

            scope.$watch('currentComponent.borderRadius', function(newValue, oldValue) {  
                if(attrs.preview === '1' || scope.currentComponent == null) return;
                $("div.c-" + scope.component.type ,element).css("border-radius", scope.component.borderRadius);
            }); 

            //$(".c-c-container").removeClass("u-comChoose");
            //element.addClass("u-comChoose");

            var item = interact(element[0], { styleCursor: false })
            .draggable({
                restrict: {
                    restriction: "parent",
                    endOnly: true,
                    elementRect: { top: 1.05, left: 1.05, bottom: -0.05, right: -0.05 }
                },
                onmove: function (event) {
                    var target = event.target,
                        x = (parseFloat($(event.target).css('left')) || 0),
                        y = (parseFloat($(event.target).css('top')) || 0);

                    x = x + event.dx;
                    y = y + event.dy;

                    $(event.target).css('left', x);
                    $(event.target).css('top', y);
                    
                    scope.$apply(function () {
                        var oTop = Math.round(y / scale);
                        var oLeft = Math.round(x / scale);
                        var oWidth = scope.component.width;
                        var oHeight = scope.component.height;
                        scope.component.top = oTop;
                        scope.component.left = oLeft;
                        scope.$emit('component.style.update', oTop, oLeft, oWidth, oHeight, $(event.target).data("id"));
                    });
                }
            })
            .resizable({
                edges: {
                    left: true, right: true, bottom: true, top: true
                }
            })
            .on('resizemove', function (event) {
                var target = event.target,
                       x = (parseFloat($(event.target).css('left')) || 0),
                       y = (parseFloat($(event.target).css('top')) || 0);

                x += event.deltaRect.left;
                y += event.deltaRect.top;
                w = event.rect.width;
                h = event.rect.height;

                $(event.target).css('left', x);
                $(event.target).css('top', y);
                $(event.target).css('width', w);
                $(event.target).css('height', h);
                
                scope.$apply(function () {
                    var oTop = Math.round(y / scale);
                    var oLeft = Math.round(x / scale);
                    var oWidth = Math.round(w / scale);
                    var oHeight = Math.round(h / scale);
                    scope.component.top = oTop;
                    scope.component.left = oLeft;
                    scope.component.width = oWidth;
                    scope.component.height = oHeight;
                    scope.$emit('component.style.update', oTop, oLeft, oWidth, oHeight, $(event.target).data("id"));
                });

            })
            .on('resizeend', function (event) {
                $(element).css("cursor", "move");
            })
            .actionChecker(function (pointer, event, action, interactable, element, interaction) {
                if (action.name === 'resize' && $(element).hasClass("u-comChoose")) {

                    var cursorKey = 'resize',
                            edgeNames = ['top', 'bottom', 'left', 'right'];

                    for (var i = 0; i < 4; i++) {
                        if (action.edges[edgeNames[i]]) {
                            cursorKey += edgeNames[i];
                        }
                    }
                    cursor = interact.debug().actionCursors[cursorKey];

                    $(element).css("cursor", cursor);
                } else {
                    action.name = 'drag';
                }

                if (action.name === 'drag') {
                    $(element).css("cursor", "move");
                }
                return action;
            });

            element.on('click', function (event) {
                event.stopPropagation()
                $(".c-c-container").removeClass("u-comChoose");
                element.addClass("u-comChoose");

                scope.$emit('component.choose', scope.component);
                scope.$emit('component.style.update', scope.component.top, scope.component.left, 
                  scope.component.width, scope.component.height, 
                  scope.component.id);
                scope.$apply();
            });

            $(".tr-c,.bl-c", element).on('mouseenter', function () {
                element.css("cursor", "ne-resize");
            }).on('mouseleave', function (e) {
                element.css("cursor", "move");
            });

            $(".tl-c,.br-c", element).on('mouseenter', function () {
                element.css("cursor", "nw-resize");
            }).on('mouseleave', function (e) {
                element.css("cursor", "move");
            });
        }
    }
}]);

//animation_panel start

//animation_panel end

//config_section start
var tpl_config_section_cropper = [
    '<section class="c-conf-section z-expand" style="display: block;">',
        '<section class="c-conf-panel">',
            '<div class="jcrop-panel-header" style="overflow: hidden">更换图片</div>',
            '<div class="jcrop-panel">',
                '<div class="jcrop-wrap">',
                    '<img id="image" src="static/images/heihei.png">',
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


mainModule.directive("sectionCropperDirective", ['$rootScope', function ($rootScope) {
    return {
        restrict: "AE",
        template: tpl_config_section_cropper,
        replace: true,
        transclude: true,
        link: function (scope, element, attrs) {
            var $image = $('.jcrop-wrap>img', element);

            function initCropperBox() {
                var ratio = 0.2;
                $image.cropper('setCropBoxData', {
                    top: 10,
                    left: 0,
                    width: 10,
                    height: 10
                });
            }

            var options = {
                viewMode: 2,
                //dragMode: 'none',
                aspectRatio: 'NaN',
                modal: false,
                //preview: '.img-preview',
                //background: false,
                autoCrop: false,
                autoCropArea: 1,
                //scalable: true,
                zoomOnWheel: false,
                built: function () {
                    initCropperBox();
                    $image.cropper('crop');
                    //$image.cropper('clear');
                }
            }

            $image.cropper(options);
            
            $(".jcrop-setUp ul>li", element).on("click", function(){
                $(".jcrop-setUp ul>li", element).removeClass("curr");
                $(this).addClass("curr");
                var data = $(this).data("value"); 
                switch(data){
                    case 0: options.aspectRatio = 'NaN'; break;
                    case 1: options.aspectRatio = 1; break;
                    case 2: options.aspectRatio = 1.3333333333333333; break;
                    case 3: options.aspectRatio = 1.7777777777777777; break;
                    case 4: break;
                } 
                console.log(data, options);
                if (data == 4) return;

                $image.cropper('setAspectRatio', options.aspectRatio);
                
            });
        }
    }
}]);
//config_section end

//config_background

