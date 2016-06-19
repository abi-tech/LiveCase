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
                type: "externallinks",
                text: "点击打开1",
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