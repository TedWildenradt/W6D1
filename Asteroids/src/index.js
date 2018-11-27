console.log("Webpack is working!");

const MovingObject = require ("./moving_objects.js");
window.MovingObject = MovingObject;

const Util = require ("./utils.js");
const Asteroid = require ("./asteroid.js");
window.Asteroid = Asteroid;

document.addEventListener("DOMContentLoaded", function(event) {
  let $canvas = document.getElementById("game-canvas");
  $canvas.getContext('2d');
 });
