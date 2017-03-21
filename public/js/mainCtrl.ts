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

  export class MainController implements IcolorsScope {
    colors: Color[];

    static $inject = ['$http'];


    constructor(private $http: any) {
      this.getColors();
    }

    getColors(): any {
      console.log('baaaa');
      // throw new Error("Not Implemented")
      return this.$http.get('/home')
        .then((res: any): any => {
          this.colors = <Color[]>res.data;
          console.log(res.data);
          console.log(this.colors);
        });
    }


  }

  angular.module('app').controller('app.colors.MainController', MainController);

}
