var app;
(function (app) {
    var colors;
    (function (colors) {
        'use strict';
        -IPromise();
    })(colors = app.colors || (app.colors = {}));
})(app || (app = {}));
var Color = (function () {
    function Color() {
    }
    return Color;
}());
var MainController = (function () {
    function MainController($http, mainService) {
        if ($http === void 0) { $http = -IHttpService; }
        this.$http = $http;
        this.getColors();
    }
    return MainController;
}());
MainController.$inject = ['$http'];
-IPromise < Color[] > { "throw": new Error("Not Implemented") };
angular.module('app').controller('app.colors.MainController', MainController);
