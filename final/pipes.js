function Pipes()
{
	this.pipeWidth = exportRoot.pipe1.x - exportRoot.pipe0.x;
	this.leftBound = exportRoot.pipe0.x;
	this.scrolling = false;

	Pipes.MAX_PIPE_Y = exportRoot.pipe0.y;
	Pipes.MIN_PIPE_Y = exportRoot.pipe2.y;
	this.setupStartPosition();
}

Pipes.prototype.startScrolling = function()
{
	this.scrolling = true;
	this.setupStartPosition();
	this.approachingPipe = this.pipes[0];
}

Pipes.prototype.stopScrolling = function()
{
	this.scrolling = false;
}

Pipes.prototype.update = function()
{
	if (this.scrolling == false)
	{
		return;
	}

	var leftMostPipe = this.pipes[0];
	var rightMostPipe = this.pipes[2];
	if (leftMostPipe.x < this.leftBound)
	{
		leftMostPipe.x = rightMostPipe.x + this.pipeWidth;
		this.pipes.shift();
		this.pipes.push(leftMostPipe);
		this.setRandomYPosition(leftMostPipe);
	}

	for (var i = 0; i < this.pipes.length; i++)
	{
		var pipe = this.pipes[i];
		pipe.x -= Main.SCROLL_SPEED;
	}
}

Pipes.prototype.setupStartPosition = function()
{
	this.pipes = [exportRoot.pipe0, exportRoot.pipe1, exportRoot.pipe2];

	for (var i = 0; i < this.pipes.length; i++)
	{
		var pipe = this.pipes[i];
		pipe.x = (canvas.width * 1.5) + (i * this.pipeWidth);
		this.setRandomYPosition(pipe);
	}
}

Pipes.prototype.setRandomYPosition = function(pipe)
{
	var delta = Pipes.MIN_PIPE_Y - Pipes.MAX_PIPE_Y;
	pipe.y = Pipes.MAX_PIPE_Y + Math.round(Math.random() * delta);
}

Pipes.prototype.getApproachingPipe = function()
{
	return this.approachingPipe;
}

Pipes.prototype.setNextApproachingPipe = function()
{
	for (var i = 0; i < this.pipes.length; i++)
	{
		if (this.pipes[i] == this.approachingPipe)
		{
			this.approachingPipe = this.pipes[i + 1];
			return;
		}
	}
}

Pipes.prototype.isBirdTouchingAPipe = function(bird)
{
	for (var i = 0; i < this.pipes.length; i++)
	{
		if (bird.hitTest(this.pipes[i]))
		{
			return true;
		}
	}
	
	return false;
}

Pipes.prototype.hasBirdPassedApproachingPipe = function(bird)
{
	var birdXPosition = bird.getPosition().x;
	if (birdXPosition > this.approachingPipe.x)
	{
		return true;
	}

	return false;
}

Pipes.prototype.birdPassedApproachingPipe = function()
{
	this.setNextApproachingPipe();
}