function Ground()
{
  this.scrolling = false;
  this.slices = [exportRoot.ground0, exportRoot.ground1, exportRoot.ground2];
  this.sliceWidth = exportRoot.ground1.x - exportRoot.ground0.x;
  this.leftBound = exportRoot.ground0.x - this.sliceWidth;
}

Ground.prototype.update = function()
{
  if (this.scrolling == true)
  {
    this.updateSlicePositions();
  this.checkLeftSliceIsOutsideScreen();
  }
}

Ground.prototype.startScrolling = function()
{
  this.scrolling = true;
}

Ground.prototype.stopScrolling = function()
{
  this.scrolling = false;
}

Ground.prototype.updateSlicePositions = function()
{
  for (var i = 0; i < this.slices.length; i++)
  {
    var slice = this.slices[i];
    slice.x -= Main.SCROLL_SPEED;
  }
}

Ground.prototype.checkLeftSliceIsOutsideScreen = function()
{
  var firstSlice = this.slices[0];
  var lastSlice = this.slices[2];
  if (firstSlice.x < this.leftBound)
  {
    firstSlice.x = lastSlice.x + this.sliceWidth;
    this.slices.shift();
    this.slices.push(firstSlice);
  }
}

Ground.prototype.isBirdTouchingGround = function(bird)
{
  for (var i = 0; i < this.slices.length; i++)
  {
    if (bird.hitTest(this.slices[i]))
    {
      return true;
    }
  }
  
  return false;
}
