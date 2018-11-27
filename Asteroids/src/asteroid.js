const MovingObject = require('./moving_objects.js');
const Util = require('./utils.js');

function Asteroid(pos) {
  this.COLOR = 'grey';
  this.RADIUS = 10;
  this.pos = pos;
  this.vel = Util.randomVec(this.RADIUS * 2);
  MovingObject.call(this, this.pos, this.vel, this.COLOR, this.RADIUS);
}

// const DEFAULTS = {
//   COLOR: "#505050",
//   RADIUS: 25,
//   SPEED: 4
// };
// 
// function Asteroid(options) {
//   options = options || {};
//   options.color = DEFAULTS.COLOR;
//   options.pos = options.pos || options.game.randomPosition();
//   options.radius = DEFAULTS.RADIUS;
//   options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);
// 
//   MovingObject.call(this, options);
// }

Util.inherits(Asteroid, MovingObject);





module.exports = Asteroid;
