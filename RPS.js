const prompt = require('prompt-sync')();

var jaken = ["Rock","Paper","Scissor"];

var player = jaken[Math.floor(Math.random()) * 3];

var comp = jaken[Math.floor(Math.random()) * 3];

random(player, comp);