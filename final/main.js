function Main()
{
	this.ground = new Ground();
	this.pipes = new Pipes();
	this.ui = new UI();
	this.bird = new Bird();
	this.score = 0;

	this.registerSound();

	canvas.onmousedown = this.userPressed.bind(this);
	window.onkeydown = this.userPressed.bind(this);
}

Main.SCROLL_SPEED = 3.0;
Main.FLAP_IMPULSE = -8.15;
Main.MAX_VELOCITY = 15;
Main.GRAVITY = 0.55;

Main.prototype.update = function(evt)
{
	this.ground.update();
	this.pipes.update();
	this.bird.update();

	this.checkForBirdPassingPipe();
	this.checkForBirdCollidingWithPipes();
	this.checkForBirdCollidingWithGround();
}

Main.prototype.registerSound = function()
{
	createjs.Sound.registerSound("sound/point.wav", "point");
	createjs.Sound.registerSound("sound/flap.wav", "flap");
	createjs.Sound.registerSound("sound/hit.wav", "hit");
}

Main.prototype.startGame = function()
{
	this.score = 0;

	this.ground.startScrolling();
	this.pipes.startScrolling();
	this.bird.startFlying();
	this.ui.gameStart();
}

Main.prototype.birdHitPipe = function()
{
	this.bird.fallFromSky();
	this.ground.stopScrolling();
	this.pipes.stopScrolling();
	this.ui.triggerScreenFlash();
}

Main.prototype.birdHitGround = function()
{
	this.bird.hitGround();
	this.ground.stopScrolling();
	this.pipes.stopScrolling();
	this.ui.gameOver();
}

Main.prototype.scoredPoint = function()
{
	this.score++;
	this.ui.updateScore(this.score);
	createjs.Sound.play("point");
}

Main.prototype.checkForBirdPassingPipe = function()
{
	if (this.bird.isAlive())
	{
		if (this.pipes.hasBirdPassedApproachingPipe(this.bird))
		{
			this.pipes.birdPassedApproachingPipe();
			this.scoredPoint();
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

