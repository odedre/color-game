module app.colors {
  'use strict';

  interface IcolorsScope {
    colors: Color[];
    fiveColors:Color[];
    getColors(): any;
    getFive(): any;
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
    fiveColors:Color[];

    static $inject = ['$http'];


    constructor(private $http: any) {
      this.getColors();
      // this.getFive(colors);

    }

    getColors(): any {
      console.log('getColors');
      // throw new Error("Not Implemented")
      return this.$http.get('/home')
        .then((res: any): any => {
          this.colors = <Color[]>res.data;
          console.log(res.data);
          console.log(this.colors);
          this.getFive();
        });
    }

    getFive(): any {
      console.log();
      console.log('getFive');
      this.fiveColors = [];
      for(var i=0; i<5; i++) {
          this.fiveColors.push(this.colors[i]);
      }
      console.log(this.fiveColors);
      // debugger;
      return this.fiveColors;
    }


  }

  angular.module('app').controller('app.colors.MainController', MainController);

}
