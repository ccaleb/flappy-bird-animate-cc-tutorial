function UI()
{
	this.scoreLabel = exportRoot.score;
	this.gameOverPrompt = exportRoot.gameOverPrompt;
	this.getReadyPrompt = exportRoot.getReadyPrompt;
	this.anyKeyPrompt = exportRoot.anyKeyPrompt;
	this.screenFlash = exportRoot.screenFlash;
	this.getReady();
}

UI.prototype.updateScore = function(score)
{
	this.scoreLabel.text = String(score);
}

UI.prototype.getReady = function()
{
	this.gameOverPrompt.visible = false;
	this.getReadyPrompt.visible = true;
	this.anyKeyPrompt.visible = true;
	this.screenFlash.visible = false;
}

UI.prototype.gameStart = function()
{
	this.gameOverPrompt.visible = false;
	this.getReadyPrompt.visible = false;
	this.anyKeyPrompt.visible = false;
	this.screenFlash.visible = false;
	this.updateScore(0);
}

UI.prototype.gameOver = function()
{
	this.gameOverPrompt.visible = true;
	this.getReadyPrompt.visible = false;
	this.anyKeyPrompt.visible = true;
}

UI.prototype.triggerScreenFlash = function()
{
	this.screenFlash.visible = true;
	this.screenFlash.alpha = 1;
	createjs.Tween.get(this.screenFlash).to({alpha:0}, 100);
}