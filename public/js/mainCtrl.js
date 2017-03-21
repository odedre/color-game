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
            function MainController($http) {
                this.$http = $http;
                this.getColors();
                // this.getFive(colors);
            }
            MainController.prototype.getColors = function () {
                var _this = this;
                console.log('getColors');
                // throw new Error("Not Implemented")
                return this.$http.get('/home')
                    .then(function (res) {
                    _this.colors = res.data;
                    console.log(res.data);
                    console.log(_this.colors);
                    _this.getFive();
                });
            };
            MainController.prototype.getFive = function () {
                console.log();
                console.log('getFive');
                this.fiveColors = [];
                for (var i = 0; i < 5; i++) {
                    this.fiveColors.push(this.colors[i]);
                }
                console.log(this.fiveColors);
                // debugger;
                return this.fiveColors;
            };
            return MainController;
        }());
        MainController.$inject = ['$http'];
        colors.MainController = MainController;
        angular.module('app').controller('app.colors.MainController', MainController);
    })(colors = app.colors || (app.colors = {}));
})(app || (app = {}));
