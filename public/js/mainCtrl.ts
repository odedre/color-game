module app.colors {
  'use strict';

  interface IcolorsScope {
    colors: Color[];
    fiveColors:Color[];
    fullList:Color[];
    first: number;
    last: number;
    index: number;
    aud: any;
    getColors(): any;
    getNextFive(): any;
    loadPrevFive(): any;
    playOnClick(index: number): any;
  }

  class Color {
    id: number;
    img: string;
    english: string;
    engHeb: string;
    hebrew: string;
    start: number;
    length:number;
  }

  export class MainController implements IcolorsScope {
    colors: Color[];
    fiveColors:Color[];
    fullList:Color[];
    first: number;
    last: number;
    index: number;
    aud: any;

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
          this.getNextFive();
        });
    }

    loadPrevFive(): any {
      console.log(this.fullList);
      console.log(this.fiveColors);
      if(this.fiveColors[0].id === 1 || !this.fiveColors) {
        console.log('first');
        return "";
      }
      else {
        this.last = this.fiveColors[0].id - 1;
        this.first = (this.last -5) || 0;
        console.log(this.first, this.last);
        for(var i = 0; i< 5; i++) {
          this.fiveColors.splice( i, 1, this.fullList[this.first + i]);

        }
        console.log(this.fiveColors)
        return this.fiveColors;
      }

    }

    getNextFive(): any {
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

    playOnClick(index: number): any {
      console.log('play ' + index);
      console.log(this.fiveColors[index]);
      console.log(this.fiveColors[index].start, this.fiveColors[index].length);
      console.log('colorSound'+this.fiveColors[index].id);
      this.aud = document.getElementById('colorSound');


      console.log(this.aud);
      this.aud.addEventListener("seeked", function() {}, true);
      this.aud.currentTime = this.fiveColors[index].start;
      console.log(this.aud.currentTime);
      // this.aud.load();
      this.aud.play();
      setTimeout( (() => this.aud.pause()), this.fiveColors[index].length*1000 );
    }



  }

  angular.module('app').controller('app.colors.MainController', MainController);

}
