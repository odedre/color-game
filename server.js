
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//getting static libraries and setting up middleware
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(express.static('colors'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//color list loaded from server

var colorList = [
  {id: 1,
  engHeb: "shahor",
  hebrew: "שחור",
  english:"black",
  img:"black.png",
  sound: ""
  },
  {id: 2,
  engHeb: "kahol",
  hebrew: "כחול",
  english:"blue",
  img:"blue.png",
  sound: ""
  },
  {id: 3,
  engHeb: "kahol keheh",
  hebrew: "כחול כהה",
  english:"dark blue",
  img:"darkBlue.png",
  sound: ""
  },
  {id: 4,
  engHeb: "afor",
  hebrew: "אפור",
  english:"gray",
  img:"gray.png",
  sound: ""
  },
  {id: 5,
  engHeb: "yarok",
  hebrew: "ירוק",
  english:"green",
  img:"green.png",
  sound: ""
  },
  {id: 6,
  engHeb: "kahol bahir",
  hebrew: "כחול בהיר",
  english:"light blue",
  img:"lightBlue.png",
  sound: ""
  },
  {id: 7,
  engHeb: "yarok bahir",
  hebrew: "ירוק בהיר",
  english:"light green",
  img:"lightGreen.png",
  sound: ""
  },
  {id: 8,
  engHeb: "bordo",
  hebrew: "בורדו",
  english:"maroon",
  img:"maroon.png",
  sound: ""
  },
  {id: 9,
  engHeb: "katom",
  hebrew: "כתום",
  english:"orange",
  img:"orange.png",
  sound: ""
  },
  {id: 10,
  engHeb: "varod",
  hebrew: "ורוד",
  english:"pink",
  img:"pink.png",
  sound: ""
  },
  {id: 11,
  engHeb: "sagol",
  hebrew: "סגול",
  english:"purple",
  img:"purple.png",
  sound: ""
  },
  {id: 12,
  engHeb: "adom",
  hebrew: "אדום",
  english:"red",
  img:"red.png",
  sound: ""
  },
  {id: 13,
  engHeb: "tsahov",
  hebrew: "צהוב",
  english:"yellow",
  img:"yellow.png",
  sound: ""
  },
  {id: 14,
  engHeb: "lavan",
  hebrew: "לבן",
  english:"white",
  img:"white.png",
  sound: ""
  }
];

app.get('/home', function(req, res, next){
  console.log(colorList);
  res.send(colorList);
});

app.listen('4000');
