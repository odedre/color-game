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
                this.fullList = this.colors;
                console.log(this.fullList);
                console.log('getFive');
                // this.fiveColors = [];
                if (!this.fiveColors)
                    this.fiveColors = [];
                for (var i = 0; i < 5; i++) {
                    if (!this.fiveColors.length) {
                        this.fiveColors = [];
                        this.fiveColors.push(this.colors[i]);
                    }
                    else {
                        console.log(this.fiveColors.length);
                        this.fiveColors.splice(i, 1, this.colors[this.fiveColors.length + i]);
                    }
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
