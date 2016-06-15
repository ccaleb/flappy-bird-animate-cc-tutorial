function Bird()
{
	this.mc = exportRoot.bird;
	this.hitMcs = [this.mc.hit0, this.mc.hit1, this.mc.hit2, this.mc.hit3, this.mc.hit4, this.mc.hit5, this.mc.hit6, this.mc.hit7, this.mc.hit8];
	this.dy = 0;
	this.initY = this.mc.y;
	this.state = Bird.DEAD;

	for (var i = 0; i < this.hitMcs.length; i++)
	{
		this.hitMcs[i].visible = false;
	}
}

Bird.ALIVE = 0;
Bird.DYING = 1;
Bird.DEAD  = 2;

Bird.INIT_ANGLE = -22.5;
Bird.MAX_ROTATION = 112.5;

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
	this.mc.y = this.initY;
	this.mc.play();
	this.dy = 0;
	this.state = Bird.ALIVE;
	this.flap();
}

Bird.prototype.flap = function()
{
	if (this.state == Bird.ALIVE && this.mc.y > 0)
	{
		this.dy = Main.FLAP_IMPULSE;
		createjs.Sound.play("flap");
	}
}

Bird.prototype.fallFromSky = function()
{
	if (this.state == Bird.ALIVE)
	{
		this.state = Bird.DYING;
		this.dy = 0;
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
	this.dy += Main.GRAVITY;

	if (this.dy > Main.MAX_VELOCITY)
	{
		this.dy = Main.MAX_VELOCITY;
	}

	this.mc.y += this.dy;
}

Bird.prototype.updateRotation = function()
{
	if (this.dy > 0)
	{
		var norm = this.dy / Main.MAX_VELOCITY;
		this.mc.rotation = Bird.INIT_ANGLE + (Bird.MAX_ROTATION * norm);
	}
	else
	{
		this.mc.rotation = Bird.INIT_ANGLE;
	}
}

Bird.prototype.hitTest = function(target)
{
	for (var i = 0; i < this.hitMcs.length; i++)
	{
		var pt = this.hitMcs[i].localToLocal(0, 0, target);
		var collision = target.hitTest(pt.x, pt.y);
		if (collision == true)
		{
			return true;
		}
	}

	return false;
}

Bird.prototype.simpleHitTest = function(target)
{
	var pt = this.hitMcs[3].localToLocal(0, 0, target);
	var collision = target.hitTest(pt.x, pt.y);
	if (collision == true)
	{
		return true;
	}

	return false;
}

Bird.prototype.getPosition = function()
{
	return {x: this.mc.x, y: this.mc.y};
}
