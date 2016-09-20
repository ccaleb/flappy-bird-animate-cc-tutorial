function Bird()
{
  this.mc = exportRoot.bird;
  this.initY = this.mc.y;
  this.state = Bird.DEAD;
  this.velocity = 0;
  this.setupCollisionPoints();
}

Bird.ALIVE = 0;
Bird.DYING = 1;
Bird.DEAD  = 2;

Bird.MAX_UP_ANGLE   = -22.5;
Bird.MAX_DOWN_ANGLE =  90;

Bird.prototype.isAlive = function()
{
  return (this.state == Bird.ALIVE);
}

Bird.prototype.isDead = function()
{
  return (this.state == Bird.DEAD);
}

Bird.prototype.startFlying = function()
{
  this.state = Bird.ALIVE;
  this.mc.y = this.initY;
  this.mc.play();
  this.velocity = 0;
  this.flap();
}

Bird.prototype.flap = function()
{
  if (this.state == Bird.ALIVE && this.mc.y > 0)
  {
    this.velocity = Main.FLAP_IMPULSE;
    createjs.Sound.play("flap");
  }
}

Bird.prototype.fallFromSky = function()
{
  if (this.state == Bird.ALIVE)
  {
    this.state = Bird.DYING;
    this.velocity = 0;
    createjs.Sound.play("hit");
  }
}

Bird.prototype.hitGround = function()
{
  if (this.state == Bird.ALIVE)
  {
    createjs.Sound.play("hit");
  } 
  this.state = Bird.DEAD;
  this.mc.stop();
}

Bird.prototype.update = function()
{
  if (this.state == Bird.ALIVE || this.state == Bird.DYING)
  {
    this.updateVelocity();
    this.updateRotation();
  }
}

Bird.prototype.updateVelocity = function()
{
  this.velocity += Main.GRAVITY;

  if (this.velocity > Main.MAX_VELOCITY)
  {
    this.velocity = Main.MAX_VELOCITY;
  }

  this.mc.y += this.velocity;
}

Bird.prototype.setupCollisionPoints = function()
{
  this.collisionPoints = [this.mc.hit0, this.mc.hit1, this.mc.hit2, this.mc.hit3, this.mc.hit4, this.mc.hit5, this.mc.hit6, this.mc.hit7, this.mc.hit8];
  for (var i = 0; i < this.collisionPoints.length; i++)
  {
    this.collisionPoints[i].visible = false;
  }
}

Bird.prototype.hitTest = function(target)
{
  for (var i = 0; i < this.collisionPoints.length; i++)
  {
    var pt = this.collisionPoints[i].localToLocal(0, 0, target);
    var collision = target.hitTest(pt.x, pt.y);
    if (collision == true)
    {
      return true;
    }
  }

  return false;
}

Bird.prototype.updateRotation = function()
{
  if (this.velocity > 0)
  {
    var diff = Bird.MAX_DOWN_ANGLE - Bird.MAX_UP_ANGLE;
    var norm = this.velocity / Main.MAX_VELOCITY;
    this.mc.rotation = Bird.MAX_UP_ANGLE + (diff * norm);
  }
  else
  {
    this.mc.rotation = Bird.MAX_UP_ANGLE;
  }
}

Bird.prototype.getPosition = function()
{
  return {x: this.mc.x, y: this.mc.y};
}
