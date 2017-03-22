
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');


//getting static libraries and setting up middleware
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(express.static('colors'));
// app.use(express.static('sound'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//getting sound

// cloudinary.config({
//   cloud_name: 'dsoibzasb',
//   api_key: '676888561176566',
//   api_secret: '64Nr4zg1GI394ZVAGxP3rDlccKw'
// });

//color list loaded from server

var colorList = [
  {id: 1,
  engHeb: "shahor",
  hebrew: "שחור",
  english:"black",
  img:"black.png",
  start: 11.5,
  length: 0.8
  },
  {id: 2,
  engHeb: "kahol",
  hebrew: "כחול",
  english:"blue",
  img:"blue.png",
  start: 4.5,
  length: 1
  },
  {id: 3,
  engHeb: "kahol keheh",
  hebrew: "כחול כהה",
  english:"dark blue",
  img:"darkBlue.png",
  start: 2.5,
  length:1.5
  },
  {id: 4,
  engHeb: "afor",
  hebrew: "אפור",
  english:"gray",
  img:"gray.png",
  start: 1.5,
  length: 0.8
  },
  {id: 5,
  engHeb: "yarok",
  hebrew: "ירוק",
  english:"green",
  img:"green.png",
  start: 21,
  length: 0.8
  },
  {id: 6,
  engHeb: "tchelet",
  hebrew:"תכלת",
  english:"light blue",
  img:"lightBlue.png",
  start: 15.5,
  length: 0.8
  },
  {id: 7,
  engHeb: "yarok bahir",
  hebrew: "ירוק בהיר",
  english:"light green",
  img:"lightGreen.png",
  start: 18,
  length: 1.5
  },
  {id: 8,
  engHeb: "bordo",
  hebrew: "בורדו",
  english:"maroon",
  img:"maroon.png",
  start: 0,
  length:1
  },
  {id: 9,
  engHeb: "katom",
  hebrew: "כתום",
  english:"orange",
  img:"orange.png",
  start: 6,
  length: 1
  },
  {id: 10,
  engHeb: "varod",
  hebrew: "ורוד",
  english:"pink",
  img:"pink.png",
  start: 13.5,
  length:1
  },
  {id: 11,
  engHeb: "sagol",
  hebrew: "סגול",
  english:"purple",
  img:"purple.png",
  start: 9.5,
  length: 1
  },
  {id: 12,
  engHeb: "adom",
  hebrew: "אדום",
  english:"red",
  img:"red.png",
  start: 24.5,
  length:0.7
  },
  {id: 13,
  engHeb: "tsahov",
  hebrew: "צהוב",
  english:"yellow",
  img:"yellow.png",
  start: 23,
  length: 1
  },
  {id: 14,
  engHeb: "lavan",
  hebrew: "לבן",
  english:"white",
  img:"white.png",
  start: 8,
  length:0.8
  }
];

// app.use(express.static(__dirname + '/public'));
//
// var filepath = path.join(__dirname, 'Paradise.m4a');


app.get('/home', function(req, res, next){
  console.log(colorList);
  // res.set({'Content-Type': 'audio/mpeg'});
  // var readStream = fs.createReadStream('sound/sound.mp3');
  // debugger;
  // readStream.pipe(res);
  res.send(colorList);
});

app.listen('4000');
