module app.colors {
  'use strict';

  interface IcolorsScope {
    colors: Color[];  //color list
    fiveColors:Color[]; //5 colors currently on screen
    fullList:Color[]; // full list of colors populated from server
    tempFive: Color[]; //temporary allay to copy next colors on screen
    first: number;
    last: number;
    index: number;
    aud: any;
    showColor: number;  // the index of the ball that we want to show full details after click
    getColors(): any;
    getNextFive(): any; // function to load next five colors
    loadPrevFive(): any;  // function to load previous five colors
    playOnClick(index: number): any; // play sound and show details

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
    tempFive:Color[];
    first: number;
    last: number;
    index: number;
    aud: any;
    showColor: number;

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
        this.first = this.last -5 < 0  || !this.last ? 0 : this.last -5;
        console.log(this.first, this.last);
        for(var i = 0; i< 5; i++) {
          this.fiveColors.splice( i, 1, this.fullList[this.first + i]);

        }
        console.log(this.fiveColors)
        return this.fiveColors;
      }

    }

    getNextFive(): any {
      this.tempFive = [];
      this.fullList = this.colors;
      console.log(this.fullList);
      console.log('getFive');
      // this.fiveColors = [];
      if(!this.fiveColors) {
        this.fiveColors = [];
        this.first = 0;
        console.log('no array here');
      }
      else if(!this.fiveColors[4]) return this.fiveColors;
      else {
        console.log(this.fiveColors);
        this.first = this.fiveColors[this.fiveColors.length-1].id;
        console.log(this.first);
      }
      for(var i=0; i<5; i++) {

            this.tempFive.push(this.colors[this.first + i]);


      }
      this.fiveColors = this.tempFive;

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
      this.aud.play();
      setTimeout( (() => this.aud.pause()), this.fiveColors[index].length*1000 );
      // this.showTag();
      this.showColor = index;
      setTimeout( (() =>  this.showColor = 100), 2000);
    }



  }

  angular.module('app').controller('app.colors.MainController', MainController);

}
