module app.colors {
  'use strict';

  interface IcolorsScope {
    colors: Color[];

    getColors(): ng-IPromise<Color[]>;
  }

  class Color {
    id: number;
    img: string;
    english: string;
    engHeb: string;
    hebrew: string;
    sound: any;
  }

  class MainController implements IcolorScope {
    colors: Color[];

    static $inject = ['$http'];

    constructor(private $http: ng-IHttpService, mainService) {
      this.getColors();
    }

    getColors(): ng-IPromise<Color[]> {throw new Error("Not Implemented")}


  }

  angular.module('app').controller('app.colors.MainController', MainController);

}
