function UI()
{
  this.scoreLabel = exportRoot.score;
  this.gameOverPrompt = exportRoot.gameOverPrompt;
  this.getReadyPrompt = exportRoot.getReadyPrompt;
  this.startInstructions = exportRoot.startInstructions;
  this.screenFlash = exportRoot.screenFlash;
  this.getReady();
}

UI.prototype.updateScore = function(score)
{
  this.scoreLabel.text = score;
}

UI.prototype.getReady = function()
{
  this.gameOverPrompt.visible = false;
  this.getReadyPrompt.visible = true;
  this.startInstructions.visible = true;
  this.screenFlash.visible = false;
}

UI.prototype.gameStart = function()
{
  this.gameOverPrompt.visible = false;
  this.getReadyPrompt.visible = false;
  this.startInstructions.visible = false;
  this.screenFlash.visible = false;
  this.updateScore(0);
}

UI.prototype.gameOver = function()
{
  this.gameOverPrompt.visible = true;
  this.getReadyPrompt.visible = false;
  this.startInstructions.visible = true;
}

UI.prototype.triggerScreenFlash = function()
{
  this.screenFlash.visible = true;
  this.screenFlash.alpha = 1;
  createjs.Tween.get(this.screenFlash).to({alpha:0}, 100);
}
