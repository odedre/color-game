var app;
(function (app) {
    var colors;
    (function (colors) {
        'use strict';
        var Color = (function () {
            function Color() {
            }
            return Color;
        }());
        var MainController = (function () {
            function MainController($http, $ngRoute) {
                this.$http = $http;
                this.$ngRoute = $ngRoute;
                this.getColors();
            }
            MainController.prototype.getColors = function () {
                var _this = this;
                // throw new Error("Not Implemented")
                return this.$http.get('/home')
                    .then(function (res) {
                    _this.colors = res.data;
                });
            };
            return MainController;
        }());
        MainController.$inject = ['$http', '$ngRoute'];
        angular.module('app').controller('app.colors.MainController', MainController);
    })(colors = app.colors || (app.colors = {}));
})(app || (app = {}));
