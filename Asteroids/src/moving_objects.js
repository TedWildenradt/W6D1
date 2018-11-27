function MovingObject(pos, vel, radius, color ) {
  this.pos = pos;
  this.vel = vel;
  this.radius = radius;
  this.color = color;
}

MovingObject.prototype.draw = function (ctx) {
  
  
   ctx.beginPath();
   ctx.arc(100, 100, 20, 0, 2*Math.PI, true);
   ctx.strokeStyle = `${this.color}`;
   ctx.lineWidth = 5;
   ctx.stroke();
   ctx.fillStyle = `${this.color}`;
   ctx.fill();
};


MovingObject.prototype.move = function () {
  this.pos[0] += vel[0];
  this.pos[1] += vel[1];
};
module.exports = MovingObject;
