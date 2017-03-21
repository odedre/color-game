module app.colors {
  'use strict';

  interface IcolorsScope {
    colors: Color[];

    getColors(): any;
  }

  class Color {
    id: number;
    img: string;
    english: string;
    engHeb: string;
    hebrew: string;
    sound: any;
  }

  class MainController implements IcolorsScope {
    colors: Color[];

    static $inject = ['$http', '$ngRoute'];


    constructor(private $http: any, private $ngRoute: any) {
      this.getColors();
    }

    getColors(): any {
      // throw new Error("Not Implemented")
      return this.$http.get('/home')
        .then((res: any): any => {
          this.colors = <Color[]>res.data;
        });
    }


  }

  angular.module('app').controller('app.colors.MainController', MainController);

}
