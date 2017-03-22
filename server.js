
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var ffmpeg = require('ffmpeg');


//getting static libraries and setting up middleware
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(express.static('colors'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//sound parsing

// app.use(function (req, res, next) {
//   return ffmpeg -i sound.mp3 -acodec copy -ss 00:00:00 -t 00:01:30  bordo.mp3
//   console.log('parsing sound');
//   next()
// });




// ffmpeg -i sound.mp3 -acodec copy -ss 00:00:00 -t 00:01:30  bordo.mp3
// ffmpeg -i sound.mp3 -acodec copy -ss 00:30:00 -t 00:60:00 half2.mp3

//color list loaded from server

var colorList = [
  {id: 1,
  engHeb: "shahor",
  hebrew: "שחור",
  english:"black",
  img:"black.png",
  sound: "sound/black.mp3"
  },
  {id: 2,
  engHeb: "kahol",
  hebrew: "כחול",
  english:"blue",
  img:"blue.png",
  sound: "sound/blue.mp3"
  },
  {id: 3,
  engHeb: "kahol keheh",
  hebrew: "כחול כהה",
  english:"dark blue",
  img:"darkBlue.png",
  sound: "sound/darkBlue.mp3"
  },
  {id: 4,
  engHeb: "afor",
  hebrew: "אפור",
  english:"gray",
  img:"gray.png",
  sound: "sound/gray.mp3"
  },
  {id: 5,
  engHeb: "yarok",
  hebrew: "ירוק",
  english:"green",
  img:"green.png",
  sound: "sound/green.mp3"
  },
  {id: 6,
  engHeb: "kahol bahir",
  hebrew: "כחול בהיר",
  english:"light blue",
  img:"lightBlue.png",
  sound: "sound/lightBlue.mp3"
  },
  {id: 7,
  engHeb: "yarok bahir",
  hebrew: "ירוק בהיר",
  english:"light green",
  img:"lightGreen.png",
  sound: "sound/lightGreen.mp3"
  },
  {id: 8,
  engHeb: "bordo",
  hebrew: "בורדו",
  english:"maroon",
  img:"maroon.png",
  sound: "sound/bordo.mp3"
  },
  {id: 9,
  engHeb: "katom",
  hebrew: "כתום",
  english:"orange",
  img:"orange.png",
  sound: "sound/orange.mp3"
  },
  {id: 10,
  engHeb: "varod",
  hebrew: "ורוד",
  english:"pink",
  img:"pink.png",
  sound: "sound/pink.mp3"
  },
  {id: 11,
  engHeb: "sagol",
  hebrew: "סגול",
  english:"purple",
  img:"purple.png",
  sound: "sound/purple.mp3"
  },
  {id: 12,
  engHeb: "adom",
  hebrew: "אדום",
  english:"red",
  img:"red.png",
  sound: "sound/red.mp3"
  },
  {id: 13,
  engHeb: "tsahov",
  hebrew: "צהוב",
  english:"yellow",
  img:"yellow.png",
  sound: "sound/yellow.mp3"
  },
  {id: 14,
  engHeb: "lavan",
  hebrew: "לבן",
  english:"white",
  img:"white.png",
  sound: "sound/white.mp3"
  }
];

app.get('/home', function(req, res, next){
  console.log(colorList);
  res.send(colorList);
});

app.listen('4000');
