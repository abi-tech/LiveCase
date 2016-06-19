var components = [
    { name: "图片", type: "singleimage", text: "哈哈哈", width: 200, height: 70, top: 822, left: 217, zIndex: 10000, rotate: 0,
      backgroundColor: "none", borderWidth: 0, borderColor: "none", borderRadius: 0, opacity: 100 },
    { name: "文本", type: "singletext", text: "哈哈哈", width: 200, height: 70, top: 822, left: 217, zIndex: 10000, rotate: 0,
      backgroundColor: "none", borderWidth: 0, borderColor: "none", borderRadius: 0, opacity: 100 },
    { name: "按钮", type: "externallinks", text: "哈哈哈", width: 200, height: 70, top: 822, left: 217, zIndex: 10000, rotate: 0,
      backgroundColor: "none", borderWidth: 0, borderColor: "none", borderRadius: 0, opacity: 100 },
];
//border-radius: 33px; transform: rotate(149deg); opacity: 0.43; border-width: 0px;
//https://github.com/abpetkov/switchery
//https://github.com/IonDen/ion.rangeSlider
mainModule.service('pageService', ['$rootScope', function (rootScope) {
    rootScope.data = {
        scale: parseInt(rootScope.editorWidth) / 640
    };

    var service = {
//style="width: 640px; height: 535px; margin-left: 0px; margin-top: 0px; transform: scale(0.6); display: block;"
        pages: [{ 
            style: { "background-color": "#ffffff", "background-image": "none"},
            animation: { "type": "", "name": "缩放", "effect": "slideZoomIn", "duration": 1, "delay": 0 },
            turnPage: { "id": "3", "name": "DownArrow", "url": "static/images/slideDown.png" },
            applyAllPages: true,
            autoTurnPage: true,
            autoTurnPageDelay: 0,
            lockTurnPage: true,
            components: [{
                name: "图片",
                type: "singleimage",
                icon: "http://eng.liveapp.cn/web/img/component/singleimage.png",
                text: "",
                url: "http://img.liveapp.cn/group3/eng/61/fc/d2fa43d4f1f912efc58f1f783f7c_14622537853754_5.png",
                containerStyle: { "width": "100%", "height": "100%", "overflow": "hidden", "border-color": "rgb(204, 204, 204)", "border-radius": "0px", "transform": "rotate(0deg)", "opacity": 1, "border-width": "0px", "background-color": "rgba(225, 225, 225, 0)" },
                imageStyle: { "width": "640px", "height": "535px", "margin-left": "0px", "margin-top": "0px", "transform": "scale(0.6)", "display": "block" },
                width: 640,
                height: 535,
                top: 0,
                left: 217,
                zIndex: 10000,
                rotate: 0,
                backgroundImage: "none",
                backgroundColor: "none",
                borderWidth: 0,
                borderColor: "#FD2500",
                borderRadius: 0,
                opacity: 100,
                style: { color: "#FFFFFF", fontSize: "1.625em", textAlign: "center", fontFamily: "", fontWeight: "", fontStyle: "", textDecoration: "" },
                display: "text",
                animIn: { "type":"bounceIn", "typeName": "弹入", "name": "弹入", "effect": "bounceIn", "delay": 0, "duration": 1, "count": 1, "infinite": true },
                animOut: { "type":"fadeOut", "typeName": "淡出", "name": "从右淡出", "effect": "fadeOutRight", "delay": 0, "duration": 1, "count": 1, "infinite": true }
            }, {
                name: "文本",
                type: "singletext",
                icon: "http://eng.liveapp.cn/web/img/component/singletext.png",
                text: null,
                url: "",
                containerStyle: { "border-color": "rgb(204, 204, 204)", "border-radius": "0px", "transform": "rotate(0deg)", "opacity": 1, "border-width": "0px", "background-image": "none", "background-color": "rgba(225, 225, 225, 0)", },
                textStyle: { "line-height": 1.5, "text-align": "center", "font-size": "2.5em", "font-family": "SimHei", "color": "rgb(51, 51, 51)", },
                width: 418,
                height: 80,
                top: 422,
                left: 217,
                zIndex: 10000,
                rotate: 0,
                backgroundImage: "none",
                backgroundColor: "#000000",
                borderWidth: 10,
                borderColor: "#FD2500",
                borderRadius: 50,
                opacity: 100,
                style: { color: "#FFFFFF", fontSize: "1.625em", textAlign: "center", fontFamily: "", fontWeight: "", fontStyle: "", textDecoration: "" },
                display: "text",
                animIn: { "type":"bounceIn", "typeName": "弹入", "name": "弹入", "effect": "bounceIn", "delay": 0, "duration": 1, "count": 1, "infinite": true },
                animOut: { "type":"fadeOut", "typeName": "淡出", "name": "从右淡出", "effect": "fadeOutRight", "delay": 0, "duration": 1, "count": 1, "infinite": true }
            }, {
                name: "按钮-链接",
                type: "externallinks",
                icon: "http://eng.liveapp.cn/web/img/component/externallinks.png",
                text: "点击打开",
                url: "",
                width: 200,
                height: 70,
                top: 622,
                left: 217,
                zIndex: 10000,
                rotate: 0,
                backgroundImage: "none",
                backgroundColor: "#000000",
                borderWidth: 10,
                borderColor: "#FD2500",
                borderRadius: 50,
                opacity: 100,
                style: { color: "#FFFFFF", fontSize: "1.625em", textAlign: "center", fontFamily: "", fontWeight: "", fontStyle: "", textDecoration: "" },
                display: "text",
                animIn: { "type":"bounceIn", "typeName": "弹入", "name": "弹入", "effect": "bounceIn", "delay": 0, "duration": 1, "count": 1, "infinite": true },
                animOut: { "type":"fadeOut", "typeName": "淡出", "name": "从右淡出", "effect": "fadeOutRight", "delay": 0, "duration": 1, "count": 1, "infinite": true }
            }]
        }],

        get: function (index) {
            return service.pages[index];
        },

        add: function (index, page) {
            if(!page) { 
                page = { 
                    style: { "background-color": "#ffffff", "background-image": "none"},
                    animation: { "name": "缩放", "effect": "slideZoomIn", "duration": 1, "delay": 0 },
                    turnPage: { "id": "1", "name": "LiveApp", "url": "static/images/upArrow.png" },
                    applyAllPages: false,
                    autoTurnPage: false,
                    autoTurnPageDelay: 0,
                    lockTurnPage: false,
                    components: []
                }
            }
            service.pages.splice(index, 0, page);
        },

        delete: function(index){
            if(index < 0) return;
            if(index > service.pages.length) return;

            service.pages.splice(index, 1);
        },

        copy: function(index){
            var page = angular.fromJson(angular.toJson(service.pages.slice(index, index + 1)[0]));
            for (var i = 0; i < page.components.length; i++) {
                page.components[i].id = (Math.round(Math.random() * 100)) + '';
            }
            service.pages.splice(index, 0, page);
        },

        moveUp: function(index){
            if(index == 0) return;
            swap(service.pages, index, index - 1);
        },

        moveDown: function(index){
            if(index == service.pages.length - 1) return;
            swap(service.pages, index, index + 1);
        }

    }

    function swap(arr, index1, index2) {
        arr[index1] = arr.splice(index2, 1, arr[index1])[0];
        return arr;
    };

    return service;
}]);