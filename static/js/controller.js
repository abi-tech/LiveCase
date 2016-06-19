mainModule.controller('editorController',['$scope', '$http', function ($scope, $http) {  

    $scope.originWidth = 384;
    $scope.originHeight = 624;

    var editorHeight = $(document).height() - 120 - 40;
    var editorScale = editorHeight / $scope.originHeight;
    var editorWidth = $scope.originWidth * editorScale;

    $scope.editorScale = editorScale;
    $scope.editorWidth = editorWidth;
    $scope.editorHeight = editorHeight;

    $scope.$on('animation.active', function(event, animation){ 
        var effect = animation.effect; 
        effect = "zoomIn"; 
        $('#editorFrame').addClass(effect + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass(effect + ' animated');
        });
    });

}]);  

mainModule.controller('navigationController',['$scope', '$http', function ($scope, $http) {  

    $scope.createComponent = function(type) {  
        $scope.$broadcast("createComponent", type);
    } 

    $scope.showGlobalAudio = function() {  
        $(".g-global-audio").show();
        var cover = $('<div class="g-cover"></div>');
        $(".g-global-audio").parent().prepend(cover);
        cover.on('click', function(){
            $(".g-global-audio").hide();
            cover.remove();
        });
    } 

    $scope.toggleExternalLinks = function() {  
        $(".g-nav .u-toolBtn-list").toggle();
    } 

}]);  

mainModule.controller('configController',['$scope', '$http', 'pageService', function ($scope, $http, pageService) {  

    $scope.json = pageService.pages;

    $scope.setBackgroundColor = function(color){
        $scope.currentPage.style["background-color"] = color;
    }

    $scope.setBackgroundImage = function(url){
        $scope.currentPage.style["background-image"] = color;
    }

    //响应页面动画选中事件
    $scope.$on('animation.active', function(event, animation){
        pageService.pages[$scope.currentIndex].animation = animation;
    });
    //$scope.pageAnimations = pageAnimations;
    //$scope.$on("createComponent", function(event, args){
        //console.log(event, args);
    //});

    $scope.$on('component.choose', function(event, component){ //console.log(component);
        $scope.currentComponent = component;
    });

    $scope.$on('page.turnpage.option', function(event, page){ //console.log(page);
        for (var i = 0; i < $scope.turnPageOptions.length; i++) {
            if($scope.turnPageOptions[i]["id"] == page.turnPage["id"]){
                $scope.currentPage.turnPage = $scope.turnPageOptions[i];
            }
        }
    });

    $scope.turnPageOptions = [
        { "id": "1", "name": "LiveApp", "url": "static/images/upArrow.png" },
        { "id": "2", "name": "UpArrow", "url": "static/images/slideUp.png" },
        { "id": "3", "name": "DownArrow", "url": "static/images/slideDown.png" }
    ];

    $scope.currentComponent = null;
    
}]); 

mainModule.controller('previewController',['$scope', '$http', 'pageService', function ($scope, $http, pageService) {  

    $scope.pages = pageService.pages;

    $scope.currentIndex = 0;
    $scope.currentPage = null;

    $scope.createPage = function(index) {  //console.log(index);
        pageService.add(index + 1);
        $scope.setCurrentPage(index + 1, pageService.get(index + 1));
    } 

    $scope.removePage = function(index) {
        pageService.delete(index);
        $scope.setCurrentPage(0);
    } 

    $scope.copyPage = function(index) {  
        pageService.copy(index);
        $scope.setCurrentPage(index + 1);
    } 

    $scope.moveUp = function(index) {
        pageService.moveUp(index);
    } 

    $scope.moveDown = function(index) {
        pageService.moveDown(index);
    } 

    $scope.setCurrentPage = function(index, page){
        $scope.currentIndex = index; 
        $scope.currentPage = page; 
        $scope.currentComponent = null;
        $scope.$broadcast("page.turnpage.option", page);
        $scope.$broadcast("animation.active", page.animation);//console.log(page);
        //$scope.$apply();
    }

    //更改预览区当前预览页内，某个组件的样式
    $scope.$on('component.style.update', function(event, top, left, width, height, id) {  
        var element = $('.pv-container div[data-id="' + id + '"]');
        element.css("top", top);
        element.css("left", left);
        element.css("width", width);
        element.css("height", height);
    });  

    $scope.setCurrentPage(0, pageService.pages[0]);
    
}]); 



mainModule.controller('globalAudioController',['$scope', '$http', function ($scope, $http) {  

}]);  

mainModule.controller('filePickerController',['$scope', '$http', 'pageService', function ($scope, $http, pageService) {  

}]);