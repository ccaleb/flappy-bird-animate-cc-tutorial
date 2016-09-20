function Main()
{
  this.ground = new Ground();
  this.pipes = new Pipes();
  this.bird = new Bird();
  this.ui = new UI();

  this.score = 0;
	
  this.registerSound();
	
  createjs.Ticker.addEventListener("tick", this.update.bind(this));
	
  canvas.onmousedown = this.userPressed.bind(this);
  window.onkeydown = this.userPressed.bind(this);
}

Main.SCROLL_SPEED = 3.0;
Main.GRAVITY = 0.55;
Main.FLAP_IMPULSE = -8.15;
Main.MAX_VELOCITY = 15;

Main.prototype.update = function(evt)
{
  this.bird.update();
  this.ground.update();
  this.pipes.update();
	
  this.checkForBirdCollidingWithGround();
  this.checkForBirdCollidingWithPipes();
  this.checkForBirdPassingPipe();
}

Main.prototype.userPressed = function(evt)
{
  if (this.bird.isDead())
  {
    this.startGame();
  }
  else
  {
    this.bird.flap();
  }
}

Main.prototype.startGame = function()
{
  this.score = 0;
  this.ground.startScrolling();
  this.pipes.startScrolling();
  this.bird.startFlying();
  this.ui.gameStart();
}

Main.prototype.birdHitGround = function()
{
	this.bird.hitGround();
	this.ground.stopScrolling();
	this.pipes.stopScrolling();
	this.ui.gameOver();
}

Main.prototype.birdHitPipe = function()
{
	this.bird.fallFromSky();
	this.ground.stopScrolling();
	this.pipes.stopScrolling();
	this.ui.triggerScreenFlash();
}

Main.prototype.checkForBirdCollidingWithGround = function()
{
  if (this.bird.isDead() == false)
  {
    if (this.ground.isBirdTouchingGround(this.bird))
	{
	  this.birdHitGround();
	}
  }
}

Main.prototype.checkForBirdCollidingWithPipes = function()
{
  if (this.bird.isAlive())
  {
    if (this.pipes.isBirdTouchingAPipe(this.bird))
	{
	  this.birdHitPipe();
	}
  }
}

Main.prototype.checkForBirdPassingPipe = function()
{
	if (this.bird.isAlive())
	{
		if (this.pipes.hasBirdPassedApproachingPipe(this.bird))
		{
			this.pipes.setNextApproachingPipe();
			this.scoredPoint();
		}
	}
}

Main.prototype.scoredPoint = function()
{
	this.score++;
	this.ui.updateScore(this.score);
	createjs.Sound.play("point");
}

Main.prototype.registerSound = function()
{
  createjs.Sound.registerSound("sound/point.wav", "point");
  createjs.Sound.registerSound("sound/flap.wav", "flap");
  createjs.Sound.registerSound("sound/hit.wav", "hit");
}

var main = new Main();
