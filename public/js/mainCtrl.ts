module app.colors {
  'use strict';

  interface IcolorsScope {
    colors: Color[];
    fiveColors:Color[];
    fullList:Color[];
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
    fullList:Color[];

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
      this.fullList = this.colors;
      console.log(this.fullList);
      console.log('getFive');
      // this.fiveColors = [];
      if(!this.fiveColors) this.fiveColors = [];
      for(var i=0; i<5; i++) {
          if(!this.fiveColors.length) {
            this.fiveColors = [];
            this.fiveColors.push(this.colors[i]);
          }

          else {
            console.log(this.fiveColors.length);
            this.fiveColors.splice( i, 1, this.colors[this.fiveColors.length + i]);

          }
      }
      console.log(this.fiveColors);
      // debugger;
      return this.fiveColors;
    }
    


  }

  angular.module('app').controller('app.colors.MainController', MainController);

}
