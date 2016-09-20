function Pipes()
{
  this.scrolling = false;
  
  this.distanceBetweenPipes = exportRoot.pipe1.x - exportRoot.pipe0.x;
  this.leftBound = -exportRoot.pipe0.nominalBounds.width;
  
  this.maxPipeY = exportRoot.pipe0.y;
  this.minPipeY = exportRoot.pipe2.y;
  
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
  if (this.scrolling == true)
  {
    this.updatePipePositions();
    this.checkLeftPipeIsOutsideScreen();
  }
}

Pipes.prototype.updatePipePositions = function()
{
  for (var i = 0; i < this.pipes.length; i++)
  {
    var pipe = this.pipes[i];
    pipe.x -= Main.SCROLL_SPEED;
  }
}

Pipes.prototype.checkLeftPipeIsOutsideScreen = function()
{
  var leftMostPipe = this.pipes[0];
  var rightMostPipe = this.pipes[2];
  if (leftMostPipe.x < this.leftBound)
  {
    leftMostPipe.x = rightMostPipe.x + this.distanceBetweenPipes;
  this.setRandomYPosition(leftMostPipe);
    this.pipes.shift();
    this.pipes.push(leftMostPipe);
  }
}

Pipes.prototype.setRandomYPosition = function(pipe)
{
  var delta = this.minPipeY - this.maxPipeY;
  pipe.y = this.maxPipeY + Math.round(Math.random() * delta);
}

Pipes.prototype.setupStartPosition = function()
{
  this.pipes = [exportRoot.pipe0, exportRoot.pipe1, exportRoot.pipe2];

  for (var i = 0; i < this.pipes.length; i++)
  {
    var pipe = this.pipes[i];
    pipe.x = (lib.properties.width * 1.5) + (i * this.distanceBetweenPipes);
    this.setRandomYPosition(pipe);
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

Pipes.prototype.hasBirdPassedApproachingPipe = function(bird)
{
  var birdXPosition = bird.getPosition().x;
  if (birdXPosition > this.approachingPipe.x)
  {
    return true;
  }

  return false;
}
