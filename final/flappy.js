(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 400,
	fps: 60,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Wing_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C90101").s().p("ABoB+IhegwQhHgphFgsIhBgsIgIgHIgHgJQgEgEgBgGQgEgLABgMQACgaAUgVQAUgWAagDQANgCAKADQAGABAEADQAGADADAEICzDJIApAoIBsBdg");
	this.shape.setTransform(-56.8,-36.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C90101").s().p("AB7C8IhRhJIgEgEIgEgEIgjgnQg3g7g0hCIgkgvIgRgZIgEgLIgBgLQABgNAEgKQALgYAagNQAZgNAaAFQAMACAJAGIAJAIIAGAIIBZDbIAoBOIAuBOIACACIAbAog");
	this.shape_1.setTransform(-51.6,-41.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C90101").s().p("ABSDlQgTgVgMgSIgJgNIgcgwIgihMQgfhJgWhNIgVhUQgBgGACgFQAAgFADgGQACgGADgDIAEgFIAEgEQATgRAdgDQAdgDAUAOIAEAEIAFAEQAFAEACAEIAFAJIADAKIgCBSQgBBbAFA6IAQBtIAJAkQAHAaAJATIAIARg");
	this.shape_2.setTransform(-44.4,-43.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C90101").s().p("AjKBFQgWgDgMgWQgNgXAEgaQADgdASgSQASgTAVADQASACDQA+IDOA7IjXAIQiqAGgwAAIgQAAg");
	this.shape_3.setTransform(-59.6,-25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C90101").s().p("AjKBFQgVgDgNgXQgNgWAEgbQAEgcARgTQASgSAWADQAdADGSB4QldAOhPAAIgVAAg");
	this.shape_4.setTransform(-59.6,-25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2,p:{skewX:0,x:-44.4,y:-43.8}},{t:this.shape_1,p:{skewX:0,x:-51.6,y:-41.7}},{t:this.shape,p:{skewX:0,x:-56.8,y:-36.9}}]}).to({state:[{t:this.shape_1,p:{skewX:0,x:-51.6,y:-41.7}},{t:this.shape,p:{skewX:0,x:-56.8,y:-36.9}}]},1).to({state:[{t:this.shape,p:{skewX:0,x:-56.8,y:-36.9}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape,p:{skewX:180,x:-56.9,y:-4.2}}]},1).to({state:[{t:this.shape_1,p:{skewX:180,x:-51.7,y:0.6}},{t:this.shape,p:{skewX:180,x:-56.9,y:-4.2}}]},1).to({state:[{t:this.shape_2,p:{skewX:180,x:-44.5,y:2.7}},{t:this.shape_1,p:{skewX:180,x:-51.7,y:0.6}},{t:this.shape,p:{skewX:180,x:-56.9,y:-4.2}}]},1).to({state:[{t:this.shape_1,p:{skewX:180,x:-51.7,y:0.6}},{t:this.shape,p:{skewX:180,x:-56.9,y:-4.2}}]},2).to({state:[{t:this.shape,p:{skewX:180,x:-56.9,y:-4.2}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape,p:{skewX:0,x:-56.8,y:-36.9}}]},1).to({state:[{t:this.shape_1,p:{skewX:0,x:-51.6,y:-41.7}},{t:this.shape,p:{skewX:0,x:-56.8,y:-36.9}}]},1).to({state:[{t:this.shape_2,p:{skewX:0,x:-44.4,y:-43.8}},{t:this.shape_1,p:{skewX:0,x:-51.6,y:-41.7}},{t:this.shape,p:{skewX:0,x:-56.8,y:-36.9}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.8,-68,44,48.6);


(lib.StartInstructions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-0.5,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(3,1,1).p("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");
	this.shape_1.setTransform(-0.5,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(3,1,1).p("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");
	this.shape_2.setTransform(-0.5,5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgCAlQgFAAgFgFQgEgEgCgHQgCgHAAgHIAAgJQABgRACgIQADgIAGAAIAIgBQAFAAAFADQAEACADAIQADAHABANIAAASIgCAJQgCAFgEAEQgEAEgFAAg");
	this.shape_3.setTransform(59.4,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.6,-16.1,415.2,29.6);


(lib.ScreenFlash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("A3b/PMAu3AAAMAAAA+fMgu3AAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A3bfPMAAAg+dMAu3AAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151,-201,302,402);


(lib.GetReady = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtWCHIgHgQQgKAHgKADQgKAEgJAAIgBAAIgBAAIgogDQgYgBgSgMQgTgMgLgTQgKgTgBgXIAAhGQAAgfAJgWQAHgVANgNQAOgMAOgFQAQgGAPAAIAjAAQAUABATALQATALALASQANATAAAWIAAAZIgzABQgBgNgDgMQgEgLgIgIQgHgIgMAAIgCAAIgEABIgcAGQgLACgHAQQgFAPAAAgIAAAVQgBAPAFAPQAEAOAIAKQAIAKAKAAIAYAAQAEAAAFgCQAFgDADgEQAEgFAAgEIAAgCIgBgCIgegCIgFggIBhAAIgBB1gANhCFIABiJIhJiFIBRAIIAlBUIAihcIBRAAIhOCJIgLCFgAI2CFIAAkMIB3AAQAsAAAUATQAUATgBAhIAACPQABANgDAKQgCAKgGAHQgHAHgOADQgOAEgZAAgAKCBbIAaAAQATAAAJgDQAIgDACgGQACgGAAgJIACgiIACgpQACgXgBgYQAAgOgDgHQgDgGgGgCQgFgCgHABIgwAAgAHOCFIgKhXIg9AAIgJBXIhGAAIA4kOIBmAAIBQEOgAGMgCIA1gCIgehigABqCFIgBkOIC3AAIAAAzIhwAGIAAAvIBnAHIAAAyIhhAAIAAAjIByAIIAABCgAAOCFIAAhSQAAgJgGgFQgGgGgHgDIgOgEIgGAAIAABtIhKAAIAAkOIBtAAQAaAAAPAFQAPAFAHAIQAIAJACAMQACAMAAAOQABAegFASQgEASgOAHQgOAIgcAAIAHADIAQAGIATAKQAJAFAHAGQAGAGAAAGIAABSgAgbgoIAgAAQALAAAEgDQAFgCACgFQABgEAAgGQAAgLgEgIQgFgJgOAAIggAAgAoPCFIAKi1IhIgDIgEhWIDeADIACBPIhNAMIAACwgAsgCFIAAkOIC2AAIAAAzIhvAGIAAAvIBmAHIAAAyIhhAAIAAAjIBzAIIAABCg");
	this.shape.setTransform(-1.1,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(6,1,1).p("AwBgaIAABGQAAAXALATQALATATAMQATAMAWABIApADQAAAAABAAQABAAAAAAQAJAAAKgEQALgDAKgHIAFAQIAfADIABh1IhhAAIAFAgIAeACQAAABABABQAAABAAABQAAAEgEAFQgDAEgFADQgFACgEAAIgYAAQgKAAgIgKQgIgKgEgOQgFgPAAgPIAAgVQAAggAGgPQAGgQAMgCIAcgGQACAAABgBQACAAACAAQALAAAHAIQAIAIAEALQADAMAAANIA0gBIAAgZQAAgWgNgTQgMgSgSgLQgTgLgUgBIgjAAQgPAAgQAGQgPAFgMAMQgOANgIAVQgIAWAAAfgAhjCFIBKAAIAAhtQAAgBAGABQAHACAIACQAGADAGAGQAGAFAAAJIAABSIBHAAIAAhSQAAgGgGgGQgHgGgJgFQgKgGgJgEQgJgEgHgCIgGgDQAbAAAOgIQAOgHAEgSQAFgSgBgeQAAgOgCgMQgCgMgHgJQgIgIgPgFQgPgFgaAAIhtAAgAoPCFIBRAAIAAiwIBMgMIAAhPIjggDIAFBWIBIADgAsgCFIC+AAIAAhCIhygIIAAgjIBhAAIAAgyIhmgHIAAgvIBvgGIAAgzIi2AAgABqCFIC+AAIAAhCIhygIIAAgjIBhAAIAAgyIhmgHIAAgvIBvgGIAAgzIi3AAgAI2CFICFAAQAYAAAOgEQAOgDAHgHQAHgHABgKQADgKgBgNIABiPQAAghgUgTQgUgTgsAAIh3AAgAE4CFIBHAAIAJhXIA9AAIAKBXIBXAAIhPkOIhnAAgAOoCFIANiFIBNiJIhRAAIgiBcIglhUIhRgIIBJCFIgBCJgALKg6QAAAYgCAXQgBAVgBAUQgCAUAAAOQABAJgDAGQgBAGgJADQgIADgUAAIgaAAIgBizIAxAAQAGgBAFACQAFACAEAGQAEAHAAAOgAGMgCIAXhkIAeBigAgbgoIAAgwIAhAAQAOAAAEAJQAEAIAAALQAAAGgBAEQgBAFgFACQgFADgKAAg");
	this.shape_1.setTransform(-1.1,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(6,1,1).p("AwBgaIAABGQAAAXALATQALATATAMQATAMAWABIApADQAAAAABAAQABAAAAAAQAJAAAKgEQALgDAKgHIAFAQIAfADIABh1IhhAAIAFAgIAeACQAAABABABQAAABAAABQAAAEgEAFQgDAEgFADQgFACgEAAIgYAAQgKAAgIgKQgIgKgEgOQgFgPAAgPIAAgVQAAggAGgPQAGgQAMgCIAcgGQACAAABgBQACAAACAAQALAAAHAIQAIAIAEALQADAMAAANIA0gBIAAgZQAAgWgNgTQgMgSgSgLQgTgLgUgBIgjAAQgPAAgQAGQgPAFgMAMQgOANgIAVQgIAWAAAfgAhjCFIBKAAIAAhtQAAgBAGABQAHACAIACQAGADAGAGQAGAFAAAJIAABSIBHAAIAAhSQAAgGgGgGQgHgGgJgFQgKgGgJgEQgJgEgHgCIgGgDQAbAAAOgIQAOgHAEgSQAFgSgBgeQAAgOgCgMQgCgMgHgJQgIgIgPgFQgPgFgaAAIhtAAgAoPCFIBRAAIAAiwIBMgMIAAhPIjggDIAFBWIBIADgAsgCFIC+AAIAAhCIhygIIAAgjIBhAAIAAgyIhmgHIAAgvIBvgGIAAgzIi2AAgABqCFIC+AAIAAhCIhygIIAAgjIBhAAIAAgyIhmgHIAAgvIBvgGIAAgzIi3AAgAI2CFICFAAQAYAAAOgEQAOgDAHgHQAHgHABgKQADgKgBgNIABiPQAAghgUgTQgUgTgsAAIh3AAgAE4CFIBHAAIAJhXIA9AAIAKBXIBXAAIhPkOIhnAAgAOoCFIANiFIBNiJIhRAAIgiBcIglhUIhRgIIBJCFIgBCJgALKg6QAAAYgCAXQgBAVgBAUQgCAUAAAOQABAJgDAGQgBAGgJADQgIADgUAAIgaAAIgBizIAxAAQAGgBAFACQAFACAEAGQAEAHAAAOgAGMgCIAXhkIAeBigAgbgoIAAgwIAhAAQAOAAAEAJQAEAIAAALQAAAGgBAEQgBAFgFACQgFADgKAAg");
	this.shape_2.setTransform(-1.1,14);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.2,-24.5,282.5,60.4);


(lib.GameOver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtsCHIgGgPQgKAGgKAEQgKADgJABIgBAAIgBAAIgpgDQgXgBgSgNQgTgLgLgTQgLgUAAgXIAAhFQAAggAIgVQAIgVANgNQANgMAPgGQAQgFAPAAIAjAAQAUAAATALQASAMAMASQAMATABAWIAAAZIg0ABQAAgNgDgMQgEgLgIgIQgHgIgMAAIgDAAIgDABIgcAGQgMACgGAQQgGAPAAAgIAAAVQAAAPAFAPQAEAOAIAKQAIAKAKAAIAYAAQAEAAAFgDQAFgCADgEQAEgFAAgEIAAgDIgBgBIgfgCIgEghIBhAAIgBB2gAo4CGIAAkOIBOAAIBACcIAxicIBSACIAHEMIhPAAIAAh/IghB/IhBAAIgZh1IgGB5gAPQCGIAAhSQAAgJgGgGQgGgFgIgDIgPgEIgGAAIAABtIhKAAIAAkOIBvAAQAaAAAPAFQAPAFAIAIQAHAJACALQACAMAAAPQABAegFARQgEATgOAGQgOAJgbAAIAGACIAQAHIATAJQAJAGAHAGQAGAFAAAHIAABSgAOlgoIAjAAQAKAAAFgCQAFgDABgEQABgEAAgGQAAgLgEgJQgEgJgOAAIgjAAgAKPCGIgBkOIC3AAIAAAyIhvAGIAAAvIBmAIIAAAyIhhAAIAAAjIByAIIAABCgAIwCGIgUgBIgXgBIgVAAIgKgBIhNkLIBQAIIAqDOIAfjWIBQgCIhKEQIgIAAgAE0CGIgBAAIgogDQgXgBgTgNQgSgLgMgTQgKgTgBgYIAAhFQABggAIgVQAIgVANgNQANgMAPgGQAPgFAPAAIAjAAQAVABASALQATALAMASQAMATAAAWIAABhQAAAVgIARQgHARgMALQgMAMgOAFQgOAHgNAAIgBAAgAEhhKIgTACQgNAAgFARQgFAPgBAhIAAAWQAAAOAEAOQAFANAHAJQAIAJAKAAIARAAQAMAAAHgIQAHgIAEgKQADgKAAgIIAAgmQgBgagGgPQgFgPgKgFQgIgFgJAAIgCAAgAkKCGIgBkOIC3AAIAAAyIhvAGIAAAvIBmAIIAAAyIhhAAIAAAjIByAIIAABCgAqfCGIgKhXIg9AAIgJBXIhHAAIA4kOIBnAAIBPEOgArigBIA1gDIgehhg");
	this.shape.setTransform(-1.2,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(6,1,1).p("AC4gZIAABFQABAYAKATQAMATASALQATANAXABIAoADQABAAAAAAQABAAAAAAQANAAAOgHQAOgFAMgMQAMgMAHgQQAIgRAAgVIAAhiQAAgVgMgTQgMgSgTgLQgSgLgVgBIgjAAQgPAAgPAFQgPAGgNAMQgNANgIAVQgIAVgBAggAIyiIIgfDWIgqjOIhQgJIBNEMQACAAAIABQAJAAAMAAQAMAAALAAQAMABAIABQAHAAABAAIBKkQgANdCGIBKAAIAAhuQAAAAAGABQAHABAIADQAIADAGAFQAGAGAAAJIAABSIBHAAIAAhTQAAgGgGgFQgHgGgJgGQgKgFgJgEQgJgEgHgDIgGgCQAbAAAOgJQAOgGAEgTQAFgSgBgdQAAgPgCgMQgCgMgHgIQgIgJgPgEQgPgFgaAAIhvAAgAKPCGIC+AAIAAhCIhygIIAAgkIBhAAIAAgxIhmgIIAAgvIBvgGIAAgyIi3AAgAOlgoIAAgwIAjAAQAOAAAEAJQAEAJAAALQAAAGgBAEQgBAEgFADQgFACgKAAgAFKgJIAAAnQAAAIgDAKQgEAKgHAIQgHAIgMABIgRAAQgKgBgIgJQgHgJgFgOQgEgOAAgOIAAgVQABghAFgQQAFgQANgBIATgBQAKgBAJAGQAKAFAFAPQAGAOABAagAwWgaIAABGQAAAXALAUQALATATALQASANAXABIApADQAAAAABAAQAAAAABAAQAJAAAKgEQAKgDAKgHIAGAPIAfAEIABh2IhhAAIAEAgIAfADQAAAAABABQAAABAAACQAAAEgEAEQgDAFgFACQgFADgEAAIgYAAQgKAAgIgKQgIgKgEgPQgFgPAAgOIAAgVQAAggAGgQQAGgQAMgCIAcgFQABgBACAAQACAAABAAQAMAAAHAIQAIAHAEAMQADAMAAANIA0gCIAAgZQgBgVgMgTQgMgSgSgMQgTgLgUAAIgjAAQgPAAgQAFQgPAFgNANQgNANgIAVQgIAVAAAfgAo4CGIBIAFIAGh6IAZB1IBBAAIAhiAIAACAIBPAAIgHkMIhSgCIgxCcIhAicIhOAAgAs2CGIBHAAIAJhXIA9AAIAKBXIBXAAIhPkOIhnAAgAkKCGIC+AAIAAhCIhygIIAAgkIBhAAIAAgxIhmgIIAAgvIBvgGIAAgyIi3AAg");
	this.shape_1.setTransform(-1.2,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(6,1,1).p("ANdCGIBKAAIAAhtQAAgBAGABQAHACAIACQAIADAGAFQAGAGAAAJIAABSIBHAAIAAhSQAAgGgGgGQgHgGgJgFQgKgGgJgEQgJgEgHgCIgGgDQAbAAAOgIQAOgHAEgTQAFgRgBgeQAAgPgCgLQgCgNgHgIQgIgIgPgFQgPgFgaAAIhvAAgAOlgoIAAgvIAjAAQAOAAAEAIQAEAJAAALQAAAGgBAEQgBAEgFADQgFACgKAAgAKPCGIC+AAIAAhCIhygIIAAgjIBhAAIAAgyIhmgIIAAgvIBvgGIAAgyIi3AAgAIyiIIgfDWIgqjOIhQgJIBNEMQACAAAIABQAJAAAMAAQAMABALAAQAMAAAIABQAHAAABAAIBKkQgAC4gZIAABGQABAXAKATQAMATASALQATANAXABIAoADQABAAAAAAQABAAAAAAQANAAAOgHQAOgFAMgMQAMgLAHgRQAIgQAAgVIAAhjQAAgVgMgTQgMgSgTgLQgSgLgVgBIgjAAQgPAAgPAFQgPAGgNAMQgNANgIAVQgIAWgBAfgAFKgJIAAAnQAAAIgDAKQgEAKgHAIQgHAIgMABIgRAAQgKgBgIgJQgHgJgFgOQgEgNAAgOIAAgWQABghAFgPQAFgRANgBIATgBQAKgBAJAGQAKAFAFAPQAGAOABAagAkKCGIC+AAIAAhCIhygIIAAgjIBhAAIAAgyIhmgIIAAgvIBvgGIAAgyIi3AAgAo4CGIBIAFIAGh6IAZB1IBBAAIAhh/IAAB/IBPAAIgHkMIhSgCIgxCcIhAicIhOAAgAs2CGIBHAAIAJhXIA9AAIAKBXIBXAAIhPkOIhnAAgArigBIAXhlIAeBigAwWgZIAABGQAAAWALAUQALATATALQASANAXABIApADQAAAAABAAQAAAAABAAQAJAAAKgEQAKgDAKgHIAGAQIAfADIABh1IhhAAIAEAgIAfACQAAABABAAQAAACAAABQAAAEgEAFQgDAEgFADQgFACgEAAIgYAAQgKAAgIgKQgIgKgEgOQgFgPAAgPIAAgVQAAggAGgQQAGgQAMgCIAcgFQABgBACAAQACAAABAAQAMAAAHAIQAIAHAEAMQADAMAAANIA0gCIAAgZQgBgVgMgTQgMgSgSgMQgTgLgUAAIgjAAQgPAAgQAFQgPAFgNANQgNANgIAVQgIAWAAAfg");
	this.shape_2.setTransform(-1.2,14.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.2,-24.5,282.5,55.9);


(lib.Pipe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(55,126,0,0.4)").s().p("AkmAKQAFgTAaAAIIPAAQAaAAAFATg");
	this.shape.setTransform(27.1,50.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6BDB12").s().p("AgZNZIAA6XQAAgLAHgHQAJgIAJAAQAKAAAIAIQAIAHAAALIAAaXg");
	this.shape_1.setTransform(11.1,166.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6BDB12").s().p("AgSBNQgHgIAAgLIAAhzQAAgLAHgHQAJgJAJABQAKgBAIAJQAIAHAAALIAABzQAAALgIAIQgIAIgKAAQgJAAgJgIg");
	this.shape_2.setTransform(3.5,63.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#59C900","#459E00"],[0,1],-29.7,0,29.7,0).s().p("AkHCCQghAAAAghIAAjCQAAggAhAAIIPAAQAhAAAAAgIAADCQAAAhghAAg");
	this.shape_3.setTransform(27.1,62.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(55,126,0,0.4)").s().p("AjugJIAAgrIHdAAIAABpg");
	this.shape_4.setTransform(27.1,78.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#5ACB00","#459C00"],[0,1],-24,0,24,0).s().p("AjuOAIAA7/IHdAAIAAb/g");
	this.shape_5.setTransform(27.1,163.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00CC00").s().p("AgkBYIAAivIBJAAIAACvg");
	this.shape_6.setTransform(4.8,62.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3F8E00").s().p("AhQCCIAAkDIChAAIAAEDg");
	this.shape_7.setTransform(42.7,62.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#60C60E").s().p("AABCCQgeAAgBghIAAjCQABggAeAAIAdAAIAAEDg");
	this.shape_8.setTransform(0.5,62.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4AA600").s().p("AiZCCIAAkDIEzAAIAAEDg");
	this.shape_9.setTransform(19.1,62.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#357701").s().p("AgcCCIAAkDIAbAAQAeAAAAAgIAADCQAAAhgeAAg");
	this.shape_10.setTransform(53.9,62.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(55,126,0,0.4)").s().p("AkHAKQgaAAgFgTIJNAAQgFATgaAAg");
	this.shape_11.setTransform(27.2,-50.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6BDB12").s().p("AgSNSQgHgIAAgLIAA6YIAzAAIAAaYQAAALgIAIQgIAHgKABQgJgBgJgHg");
	this.shape_12.setTransform(11.2,-166.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6BDB12").s().p("AgSBNQgHgIAAgLIAAhzQAAgLAHgIQAJgHAJAAQAKAAAIAHQAIAIAAALIAABzQAAALgIAIQgIAHgKABQgJgBgJgHg");
	this.shape_13.setTransform(3.6,-63.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#59C900","#459E00"],[0,1],-29.7,0,29.7,0).s().p("AkHCCQghAAAAghIAAjCQAAggAhAAIIPAAQAhAAAAAgIAADCQAAAhghAAg");
	this.shape_14.setTransform(27.2,-62.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(55,126,0,0.4)").s().p("AjvA1IAAgrIHeg+IAABpg");
	this.shape_15.setTransform(27.2,-79.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00CC00").s().p("AgkBYIAAivIBJAAIAACvg");
	this.shape_16.setTransform(4.9,-62.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#5ACB00","#459C00"],[0,1],-24,0,24,0).s().p("AjvOAIAA7/IHeAAIAAb/g");
	this.shape_17.setTransform(27.2,-163.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#60C60E").s().p("AABCCQgeAAgBghIAAjCQABggAeAAIAdAAIAAEDg");
	this.shape_18.setTransform(0.6,-62.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4AA600").s().p("AiZCCIAAkDIEzAAIAAEDg");
	this.shape_19.setTransform(19.2,-62.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3F8E00").s().p("AhQCCIAAkDIChAAIAAEDg");
	this.shape_20.setTransform(42.8,-62.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#357701").s().p("AgcCCIAAkDIAbAAQAeAAAAAgIAADCQAAAhgeAAg");
	this.shape_21.setTransform(54,-62.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.6,-309.8,59.6,619.6);


(lib.GroundStripShort = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B841D").s().p("AniAJIAAgRIPEAAIAAARg");
	this.shape.setTransform(48.3,351);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#85D93D").s().p("AniAJIAAgSIPEAAIAAASg");
	this.shape_1.setTransform(48.3,353);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Stripes
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5AA11F").s().p("AG1AMQgHgGgBgHQgFABgGAAQgJAAgIgFIgEAFQgGAFgIgBQgJABgGgFIgEgFIAAAAQgDAFgEADQgKAKgOgBQgOABgKgKQgFgDgCgFIgCAAIgEAEQgHAGgLAAQgLAAgIgGIgDgEQgBAEgDABQgEADgFAAQgFAAgEgDQgDgBAAgEIgBAAQgCAGgGAFQgJAJgNAAQgNAAgJgJQgGgFgCgGIgCAAIgCABQgIAHgLAAQgLAAgIgHIgBgBIgCAAQgCAFgFADQgJAKgNAAQgNAAgKgKQgEgDgDgFIgCAAQgCAFgFADQgMAMgQAAQgRAAgLgMQgDgDgDgFIgEAAQgGAEgIAAQgIAAgGgEIgDAAIAAABQAAAIgHAHQgHAGgJABQgKgBgHgGQgGgHAAgIIAAgBIgBAAIgFAEQgOANgUAAQgVAAgOgNIgEgEIgDAAQgCAFgFAEQgIAIgMAAQgMAAgJgIQgFgEgCgFIAAAAQgBAFgFAEQgGAGgJABQgIgBgHgGQgEgEgBgFIgBAAQgUARgbAAQgcAAgUgRIgBAAIAAABQAAAEgEADQgDADgFAAQgFAAgEgDQgEgDAAgEIAAgBIgBAAIgDAEQgFAEgIAAQgHAAgGgEIgDgEIgCAAQgBAIgIAIQgJAJgMAAQgNAAgJgJQgHgIgBgIIgBAAIAAgPIABAAQABAKAHAGQAJAHANAAQAMAAAJgHQAIgGABgKIACAAIADAFQAGAEAHAAQAIAAAFgEIAEgFIAAAAIAAABQAAAFAEADQAEAEAFAAQAFAAADgEQAEgDAAgFIAAgBIABAAQAUARAcAAQAbAAAUgRIABAAQABAHAEADQAHAGAIAAQAJAAAGgGQAFgDABgHQACAGAFAEQAJAIAMAAQAMAAAIgIQAFgEACgGIADAAIAEAFQAOANAVgBQAUABAOgNIAFgFIABAAIAAACQAAAJAGAFQAHAFAKAAQAJAAAHgFQAHgFAAgJIAAgCIADAAQAGAEAIABQAIAAAGgFIAEAAQADAFADAFQALAKARAAQAQAAAMgKQAFgFACgFIACAAQADAGAEAEQAKAIANAAQANAAAJgIQAFgEACgGIACAAIABACQAIAHALAAQALAAAIgHIACgCIACAAQACAIAGAFQAJAHANAAQANAAAJgHQAGgFACgIIABAAQAAAEADADQAEADAFAAQAFAAAEgDQADgCABgEIADAEQAIAGALAAQALAAAHgGIAEgFIACAAQACAFAFAEQAKAJAOAAQAOAAAKgJQAEgEADgFIABAAQABADACADQAGAFAJAAQAIAAAGgFIAEgGQAIAGAJAAIALgBQABAHAHAGQAIAFALAAQALAAAIgFQAGgFABgHIAAAEIABAGIgBAEQgBAHgGAFQgIAJgLAAQgLAAgIgJg");
	this.shape_2.setTransform(48.3,363.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#665025").s().p("AG1ANQgHgIgBgHIgLABQgJAAgIgGIgEAGQgGAFgIAAQgJAAgGgFQgCgCgBgEIgBAAQgDAGgEADQgKALgOAAQgOAAgKgLQgFgDgCgGIgCAAIgEAFQgHAHgLAAQgLAAgIgHIgDgEQgBAEgDACQgEADgFAAQgFAAgEgDQgDgDAAgEIgBAAQgCAHgGAGQgJAKgNAAQgNAAgJgKQgGgGgCgHIgCAAIgCACQgIAHgLAAQgLAAgIgHIgBgCIgCAAQgCAHgFADQgJALgNAAQgNAAgKgLQgEgDgDgHIgCAAQgCAGgFAEQgMANgQAAQgRAAgLgNQgDgEgDgGIgEAAQgGAFgIAAQgIAAgGgFIgDAAIAAACQAAAJgHAGQgHAJgJAAQgKAAgHgJQgGgGAAgJIAAgCIgBAAQgCADgDACQgOAOgUAAQgVAAgOgOIgEgFIgDAAQgCAHgFAEQgIAJgMAAQgMAAgJgJQgFgEgCgHQgBAHgFAEQgGAGgJAAQgIAAgHgGQgEgEgBgHIgBAAQgUATgbAAQgcAAgUgTIgBAAIAAABQAAAGgEACQgDAEgFAAQgFAAgEgEQgEgCAAgGIAAgBIAAAAQgCADgCACQgFAEgIAAQgHAAgGgEQgCgCgBgDIgCAAQgBAKgIAIQgJAKgMAAQgNAAgJgKQgHgIgBgKIgBAAIAAgOIABAAQABALAHAHQAJAHANAAQAMAAAJgHQAIgHABgLIACAAIADAFQAGAFAHAAQAIAAAFgFIADgFIABAAIAAABQAAAFAEAEQAEAEAFAAQAFAAADgEQAEgEAAgFIAAgBIABAAQAUATAcAAQAbAAAUgTIABAAQABAHAEAEQAHAHAIAAQAJAAAGgHQAFgEABgHIAAAAQACAGAFAFQAJAJAMAAQAMAAAIgJQAFgFACgGIADAAIAEAFQAOAOAVAAQAUAAAOgOIAFgFIABAAIAAACQAAAJAGAHQAHAFAKAAQAJAAAHgFQAHgHAAgJIAAgCIADAAQAGAEAIAAQAIAAAGgEIAEAAQADAGADAFQALAKARAAQAQAAAMgKQAFgFACgGIACAAQADAGAEAFQAKAJANAAQANAAAJgJQAFgFACgGIACAAIABACQAIAIALAAQALAAAIgIIACgCIACAAQACAIAGAGQAJAHANAAQANAAAJgHQAGgGACgIIABAAQAAAEADADQAEAEAFAAQAFAAAEgEQADgDABgEIADAEQAIAIALAAQALAAAHgIIAEgEIACAAQACAFAFAFQAKAKAOAAQAOAAAKgKQAEgFADgFIAAAAIAEAGQAGAGAJAAQAIAAAGgGIAEgGQAIAGAJAAQAGAAAFgCQABAJAHAHQAIAGALAAQALAAAIgGQAGgGABgIIAAADIABAGIgBAGQgBAHgGAGQgIAJgLAAQgLAAgIgJg");
	this.shape_3.setTransform(48.3,365.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#72BE32").s().p("AG1A6QgHgHgBgHIgLABQgJAAgIgFIgEAFQgGAFgIABQgJgBgFgFQgDgCgBgDIgBAAQgDAFgEAEQgKAIgOABQgOgBgKgIQgFgEgCgFIgCAAIgDAEQgIAHgLAAQgLAAgIgHIgDgDQgBADgDACQgEADgEABQgGgBgDgDQgDgDgBgDIgBAAQgCAHgGAFQgJAIgNAAQgNAAgJgIQgGgFgCgHIgCAAIgCACQgHAGgMABQgKgBgIgGIgBgCIgCAAQgDAFgFAFQgJAIgNAAQgNAAgJgIQgFgFgDgFIgBAAQgDAFgFAFQgLAJgRABQgRgBgLgJQgDgFgCgFIgEAAQgGAEgJAAQgIAAgGgEIgDAAIAAACQAAAIgHAFQgHAHgJAAQgKAAgGgHQgHgFAAgIIAAgCIgBAAIgFAEQgNANgVAAQgVAAgOgNIgEgEIgCAAQgDAGgFAEQgIAIgMAAQgMAAgIgIQgGgEgBgGQgCAGgFAEQgGAGgJgBQgIABgGgGQgFgEgBgGIgBAAQgTARgcAAQgcAAgTgRIgCAAIAAABQAAAEgEAEQgDADgFAAQgFAAgEgDQgEgEABgEIAAgBIgBAAIgEAEQgFAFgHAAQgIAAgGgFIgDgEIgBAAQgCAKgHAGQgKAIgMAAQgMAAgKgIQgHgGgBgKIgBAAIAAhoIPEAAIAABtQgBAHgGAGQgIAGgLAAQgLAAgIgGg");
	this.shape_4.setTransform(48.3,357.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,350,98,17.4);


(lib.CollisionPoint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s().p("AgNAOQgFgGAAgIQAAgHAFgGQAGgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAQgHAAgGgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,4,4);


(lib.Bird_tail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ag9CIQgOgRgKgbQgKgbgBgWQgBgVAKgEQAIgDBmgCIAjAAIAAgGIghgHQhlgagHgFQgJgFAGgVQAFgVAQgYQAQgZARgNQASgNAIAGQAGAEA/BVIAiAtIAAAyQh7BsgMAEIgDABQgJAAgLgOg");
	this.shape.setTransform(12.5,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.8,-4.6,19.5,30.1);


(lib.Bird_hair = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAAB1IgahCIgDgNIgBgCIAAgBIgBAAIAAgBIgDgPQgDgRgCgXIAAgmIADgmIACgFIACgFIAEgFIAFgCIABgBIACgBIADAAQANgDAOAFQAQAGAIALIADAEIADAGIAAAFIAAAEIgCAEIgGAMIgCAFIgFAMQgHAPgFAPQgGATgDAPIgCAIIAAAFIAAABIgBAAIAAADIgBASIAAA3IACAJg");
	this.shape.setTransform(1.5,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhPA8IACgCIABgGIABgCIABgDIAAgCIADgIQAGgNAJgMIAHgKIAPgOQANgLAQgLQAPgKAMgFQAOgHAJgCIAHgCIAFgBIAEABIADABIACACIAEAEIACADIABACIABABQAEAOABAWQAAARgFAQIgBACIgBAAIAAABIgBADIgCAFIgDADIgEABIgDAAIgFgCIgogGIgPAAIgJABIgbAHIgVAKIgQALIgDADIgCABg");
	this.shape_1.setTransform(6.5,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.6,3.1,17.1,23.8);


(lib.Bird_feet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE054").s().p("AgFBFQgSgLgTgVQgUgWgKgQQgLgTAGgFQAEgEBMgYIBNgYQg4CSgIAHQAAAAAAABQgBAAAAAAQgBAAgBAAQAAABgBAAQgGAAgLgJg");
	this.shape.setTransform(4.4,7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E5C223").s().p("AgFBFQgSgLgTgVQgUgWgKgQQgLgTAGgFQAEgEBMgYIBNgYQg4CSgIAHQAAAAAAABQgBAAAAAAQgBAAgBAAQAAABgBAAQgGAAgLgJg");
	this.shape_1.setTransform(11.4,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,0,23.1,16.4);


(lib.Bird_eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjA+IgFgDIgKgIQgWgVAAgeQAAgdAWgVQAVgWAdAAQAeAAAVAWIABABQAVAVAAAcIAAAAQAAAegWAVQgVAWgeAAQgTAAgQgLg");
	this.shape.setTransform(16.3,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#410000").s().p("AhgBeQgjg6gFhOIAQAGQA+AVA9ggIAYgNQA+gnAlg/QALArAAAzQAABegpBEQgoBFg4AAQg4AAgohFg");
	this.shape_1.setTransform(24.1,42.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6D0000").s().p("AhyCAIgQgGIgBgaQAAhCATgzIAFADQAQAKAVAAQAeAAAUgWQAVgVAAgeIAAAAQAAgegUgVQANgDALAAQA5AAAoBEQATAgAKAlQgkA/g/AnIgXANQgkATgmAAQgYAAgZgIg");
	this.shape_2.setTransform(23.6,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjA+QgIgEgHgHQgWgVAAgeQAAgdAWgVQAVgWAdAAQAeAAAVAWQAWAVAAAdIAAAAQAAAegWAVQgVAWgeAAQgTAAgQgLg");
	this.shape_3.setTransform(16.3,17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D4EBFF").s().p("AhcCuQgNgEgNgGQgugXgdgkQAHhuA3hSQBAhfBZAAQBbAABABfIARAcQgIAkgNAfQglBbhSAzIgYANQgjAUgmAAQgZAAgYgJgAhlhXQgVAWAAAeQAAAeAVATQAHAHAIAFQARAKAUAAQAeAAATgWQAWgTAAgeIAAAAQAAgegWgWQgTgVgeAAQgeAAgWAVg");
	this.shape_4.setTransform(21.4,20.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AECCE7").s().p("AiZCmQgOgTgKgVQgphSAAhoQAAgSACgRQAdAkAuAXQANAGANAFQA+AUA9ggIAXgNQBSgzAlhbQANghAJgjQAbAxALA8QAIArAAAwQAACEhABeQhABfhaABQhagBg/hfg");
	this.shape_5.setTransform(23.7,41.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.8,2.6,43.8,64.7);


(lib.Bird_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjbBNIgDgBQhPgZhCgsQgqgZgggeQB3AwCUALQgmgtABhKQBFBLCmAkQBaAVBJgFIATgBQBJgBBCgLQAzgHAugQQgkAYguAXIhEAdIgEABIABABIgRAGIgOAFIgTAFIgpALIgKACQhTASheABIgHAAQh5AAhmggg");
	this.shape.setTransform(55.6,72.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C90101").s().p("AAgFWQimgmhFhLQgBBJAmAvQiUgLh3gyQgigfgXgiQBgAsB5AYIAaivQCVB6CeAxQgTgSgSgXQgng1gag0Qgbg3gchWQAUhOAgg/QAcg5Aog4QBRhoBxAAQByAABQBoQBQBoAACTQAACRhQBoQgjAugpAZQBKgFBNgUQgRAOgTAOQguAPg0AJQhBAMhJAAIgTACIgaABQg/AAhKgRg");
	this.shape_1.setTransform(54.8,38.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AGHEaQBQhoAAiTQAAiRhQhoQhQhohyAAQhxAAhRBoQgoA3gcA5QggBAgUBOQAcBWAbA3QAaA0AnA1QASAXATARQiegwiVh6IgaCvQh5gYhggsQgpg7gMhEQgaiRDCiRQDBiRC7ghQCqgfCcAeIAMACIAPADQAkAJAeAUQCkBfgBEuIAAAFQAECGhpBeQhNAUhKAGQApgaAjgtg");
	this.shape_2.setTransform(56.8,35.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE054").s().p("AAeBrQgJgEhVhZIgWAFIANgOIgNgLIAWADIAjglQA3g+AGgEQAHgEAMAKQANAKAKASQAKASADAQQACAPgHAEQgHAEhWASQBPALAHAEQAHADgCAQQgCAPgJATQgJATgMAKQgJAIgGAAIgDgBg");
	this.shape_3.setTransform(116.5,46.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125.3,83.7);


(lib.Clouds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECF8FF").s().p("A6bIQIgLiJIAAtqQAVgGAWAAQBBAAAuAuQAlAkAIAvQBrAIBOBNQBOBMAJBoQAJgMAMgMQA3g2BPAAQAbAAAYAGIgBgOQABhTA7g8QA9g7BUAAQBVAAA7A7QApAoAOAzQAzgeA/AAQA1AAAsAVIACgDQAqgpA7AAQA8AAApApQArAqgBA6IAAACQANgTASgSQBChBBbAAQBdAABDBBQAiAiARAqQALgUASgSQAzgyBGAAQAYAAAWAGIgBgWQAAhlBJhIQBJhIBnAAQBnAABIBIQA8A7ALBOQAmAHAeAYIAAgMQAAhCAvgvQAwguBCAAQBDAAAvAuQARARAMAUQAChcBDhCQBFhEBiAAQBiAABFBEIAEAEIAAPXg");
	this.shape.setTransform(-0.4,-9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D0EFFF").s().p("A5hIQIAAwdIANgBIAUgBQBiAABFBEQBDBCADBcQALgUARgRQAvguBDAAQBDAAAwAuQAvAvAABCIgBAMQAfgYAlgHQALhOA8g7QBJhIBnAAQBmAABJBIQAtAsASA4IAOgPQBPhQBxAAQBwAABQBQQAYAYASAcQBLAIA6A4QASASANATIAAgCQAAg6AqgqQAqgpA7AAQA7AAAqApIADADQArgVA1AAQBAAAAyAeQAOgzApgoQA7g7BVAAQA1AAArAXQAKgMALgLQBWhWB4AAQB5AABVBWIAEADQAoghA2AAQAlAAAeAPQAMgYAVgVQAuguBBAAQAXAAAUAGIAANqIgLCJg");
	this.shape_1.setTransform(-8.8,-13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.2,-66.3,342.2,109.4);


(lib.GroundStripLong = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Stripes
	this.strip = new lib.GroundStripShort();
	this.strip.setTransform(144.1,6,1,1,0,0,0,48.1,357);

	this.instance = new lib.GroundStripShort();
	this.instance.setTransform(48.1,6,1,1,0,0,0,48.1,357);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.strip}]}).wait(1));

	// Ground
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7B6233").s().p("AvCD0IAAnoIeFAAIAAHog");
	this.shape.setTransform(96.3,24.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,192.7,50);


(lib.Bird = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Collision Points
	this.hit8 = new lib.CollisionPoint();
	this.hit8.setTransform(-10.8,-21);

	this.hit7 = new lib.CollisionPoint();
	this.hit7.setTransform(-27.5,-12);

	this.hit6 = new lib.CollisionPoint();
	this.hit6.setTransform(-17.7,25.6);

	this.hit5 = new lib.CollisionPoint();
	this.hit5.setTransform(1.5,23.2);

	this.hit4 = new lib.CollisionPoint();
	this.hit4.setTransform(28,17.8);

	this.hit3 = new lib.CollisionPoint();
	this.hit3.setTransform(42.2,1.9);

	this.hit2 = new lib.CollisionPoint();
	this.hit2.setTransform(34.5,-16.4);

	this.hit1 = new lib.CollisionPoint();
	this.hit1.setTransform(26.3,-32.7);

	this.hit0 = new lib.CollisionPoint();
	this.hit0.setTransform(6.7,-27.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit0},{t:this.hit1},{t:this.hit2},{t:this.hit3},{t:this.hit4},{t:this.hit5},{t:this.hit6},{t:this.hit7},{t:this.hit8}]}).to({state:[]},14).wait(1));

	// Wing_anim
	this.instance = new lib.Wing_anim("synched",0);
	this.instance.setTransform(-22,-19.3,0.609,0.609,0,0,0,-55.7,-43.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},14).wait(1));

	// Bird_eye
	this.instance_1 = new lib.Bird_eye();
	this.instance_1.setTransform(13.8,-4.6,0.609,0.609,0,0,0,23.7,34.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},14).wait(1));

	// Bird_body
	this.instance_2 = new lib.Bird_body();
	this.instance_2.setTransform(-2.2,-2,0.609,0.609,0,0,0,50.5,41.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},14).wait(1));

	// Bird_hair
	this.instance_3 = new lib.Bird_hair();
	this.instance_3.setTransform(26.9,-30.3,0.609,0.609,0,0,0,8.4,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},14).wait(1));

	// Bird_feet
	this.instance_4 = new lib.Bird_feet();
	this.instance_4.setTransform(-17.6,20.7,0.609,0.609,0,0,0,9.7,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},14).wait(1));

	// Bird_tail
	this.instance_5 = new lib.Bird_tail();
	this.instance_5.setTransform(-36.8,-3.8,0.609,0.609,0,0,0,10.7,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.6,-35.6,85.8,64.4);


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1CD241").s().p("AiPEwIgIgJQgqATgyAAQhZAAhBg9QgvAphAAAQg5AAgrgiQgzAig/AAQhIAAg1grQgcAIggAAQgpAAgjgNQgoAXgxAAQhIAAgzgzQgXgXgMgaIgLAAIgFAAQgUApgjAjQhOBPhwAAQhwAAhPhPQgQgPgMgRIAApMQAcgIAfAAQBbAABABAQAwAwANBAQBBAMA0AtQAigTArAAQBGAAAxAyQAUATAMAXQAJgBAJAAIALABIAJgLQA8g8BVAAQBIAAA2ArQAcgIAfAAQBVAAA8A7IAQATQAZgJAcAAQAlAAAfAOIANgIQALgQAOgOQBChBBdAAQBCAAA1AhQBKhABkAAQByAABQBRIAEAEQA3goBHAAQBZAAA/A8QAfgOAlAAQBHAAAxAyQAOAOALAOQARgtAngmQBGhGBjAAQBjAABGBGQAZAZARAdQAKgPAOgPQAygxBGAAQBGAAAxAxQAUAUAMAWIAEgBIAAgPQAAhhBEhFQBFhFBhAAIADAAIAAHTIgDAAIgcgBQgMAkgeAeQgyAyhGAAQhGAAgygyQgTgTgMgXQgXAHgZAAQhGAAgygyIgKgKQgRAugnAnQhGBGhjAAQhjAAhGhGQgkgkgRgrQgMASgQAQQgxAyhHAAQghAAgdgMIgCADQhABAhcAAQhAAAgygfIgQAQQhQBQhyAAQhwAAhRhQg");
	this.shape.setTransform(162.1,352.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5BE7AB").s().p("AN7EbQgXgWgNgbIgMAMQgpAqg7AAQg8AAgpgqQgcgcgKgkQghAiguAAQgvAAghgiQgJgIgFgJQgNAVgRASQg3A2hOAAQhNAAg3g2QgcgcgNgiQgTAIgVAAQgqAAgbgeQgJgIgGgKQgKAugjAjQgwAwhFAAQguAAgmgWQgLAbgWAWQgsAsg9AAQg8AAgrgsQgcgbgJgiIgUABQhMAAg2g2IgHgGIgHAHQgrAsg9AAQgoAAghgTQgKANgLAMQg3A3hNAAQhOAAg3g3QgmgmgLgxQgaAJgeAAQhGAAgygyQgxgyAAhEIAAgCQgTAJgXAAQgkAAgagZQgRgSgFgWQgfAVgpAAQgfAAgbgNIAAjiQAbgNAfAAQA0AAAlAlQAlAlAAA0IAAABQAOgFAQAAQAkAAAaAZQAOAOAGARIAJgJQAygyBGAAQBHAAAxAyQAdAdAMAkQAjgQAqAAQBMAAA2A1QAogkA4AAQAyAAAnAeQALgUASgSQA2g1BMAAQBLAAA2A1QAzA0ADBFQAWADATAJQALglAegfQAxgwBEAAQBFAAAwAwQAbAbALAfQAIgPAOgPQAbgdAqAAQAhAAAYASQALgPANgNQA3g3BNAAQBOAAA3A3QAjAjAMAqQAhgbAsAAQAvAAAhAfQAQAQAJAUQAFgIAHgGQApgqA8AAQA7AAApAqIAMAMQANgaAXgXQA5g3BSAAQBPAAA3A0QAYgJAdAAQATAAASAFQANgtAigkQA4g2BNAAQAmAAAhANQAFgqAfgfQAkgkA1AAQAvAAAiAcIAADDQgiAbgvAAIgMgBQADAQAAAQQAABNg2A3Qg4A3hNAAQg/AAgwgkIgOAPQgmAmg2AAQgNAAgKgBQgMAQgPAOQg4A6hRAAQhSAAg5g6g");
	this.shape_1.setTransform(162,341.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 8
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B6FFFC").s().p("AKzE0QgPgQgKgSQgpAng4AAQg7AAgogpQgIgIgHgJQgUAFgXABQhCAAgwgwQgbgbgMgiIgRABQg1AAgngiQgDAkgbAbQgeAfgrgBQgYABgTgJIgDADQgRATgaAAQgcAAgTgTIgJgLQgiAQgqAAQhHAAg0gyIAAgBIgDAEQgtArg/ABQg/gBgtgrQgYgagLgdQgKAYgWAWQgnAng4AAQgtAAgjgZIgFAFQgtAvhCAAQhBAAgugvQgMgMgIgNIgVACQg0AAgmgmQgkgkAAg0IAAgNQgcAVglAAQglAAgdgWQgcAbgkAAQgLAAgJgCQgGAIgIAIQgrAqg6AAQg8AAgqgqQgqgqAAg6IABgRQgwgBglgcIAAjjQAmgfAyAAQA7AAAqAqQArArAAA6IgBASQA5ABApApIAJAJQAMgCANAAQARAAAQAFQAIgLAJgKQAhggAvgBQAvABAhAgQAhAiAAAuIAAAGQAhgbAtAAQAtAAAhAbQAegRAkgBIAAgJQAAhAAsgsQAtgsA/AAQA/AAAtAsQAjAjAIAvIAKAAQAoAAAcAcQAKAKAHAMQAhgUArAAQA2AAAoAhQAIgLAJgLQA0gyBHAAQBIAAA0AyQAqAsAHA3QAUgMAcAAQAcAAAYAOIgBgJQAAg6AqgqQArgqA7AAQA7AAArAqQAQARALAUQAUgFAVAAQBDAAAvAvQAWAUALAaIABAAQAJglAegeQArgrA+gBQA9ABArArQASATAMATQATgHAZgBQApAAAdAbQAGgqAhggQAngoA4AAQAuAAAjAbIADgEQApgoA5AAQAvAAAkAbQAHgMALgMQAegdApgEQgCgLAAgLQAAgvAhgiQAhghAwAAQAuAAAiAhQAcAdAEAmQAUAJAQAQIALAMIAACgIgLAMQgmAlg2ABQgnAAgdgTIgGAFQgiAjgwAAQgdAAgYgMQgLAZgVAVQgjAjgwAGQgFAggaAZQghAhguABQgwgBggghQgXgWgHgcQgqgHgfggIgOgNQgGAWgTASIgDAEQACAPAAAQQAAA/gsAtQgtAsg/AAQg/AAgtgsg");
	this.shape_2.setTransform(162,332.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Clouds
	this.instance = new lib.Clouds();
	this.instance.setTransform(162.7,309.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Sky
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#70C6CE").ss(1,1,1).p("A3b/PMAu3AAAMAAAA+fMgu3AAAg");
	this.shape_3.setTransform(150,200.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#56CCFF","#E7F7FF"],[0,1],0,-199.9,0,200).s().p("A3bfPMAAAg+dMAu2AAAMAAAA+dg");
	this.shape_4.setTransform(150,200.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-0.9,343.3,402);


// stage content:
(lib.flappy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Screen Flash
	this.screenFlash = new lib.ScreenFlash();
	this.screenFlash.setTransform(150,200);
	this.screenFlash.cache(-153,-203,306,406);

	this.timeline.addTween(cjs.Tween.get(this.screenFlash).wait(1));

	// Score
	this.score = new cjs.Text("0", "bold 24px 'Arial Black'", "#FFFFFF");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 36;
	this.score.lineWidth = 121;
	this.score.setTransform(148,7);

	this.timeline.addTween(cjs.Tween.get(this.score).wait(1));

	// Game Over
	this.gameOverPrompt = new lib.GameOver();
	this.gameOverPrompt.setTransform(151.5,85.9);

	this.timeline.addTween(cjs.Tween.get(this.gameOverPrompt).wait(1));

	// Get Ready
	this.getReadyPrompt = new lib.GetReady();
	this.getReadyPrompt.setTransform(151.5,85.9);
	this.getReadyPrompt.cache(-143,-26,287,64);

	this.timeline.addTween(cjs.Tween.get(this.getReadyPrompt).wait(1));

	// Press Any Key
	this.anyKeyPrompt = new lib.StartInstructions();
	this.anyKeyPrompt.setTransform(151.5,243.9);
	this.anyKeyPrompt.cache(-210,-18,419,34);

	this.timeline.addTween(cjs.Tween.get(this.anyKeyPrompt).wait(1));

	// Bird
	this.bird = new lib.Bird();
	this.bird.setTransform(94.1,174,0.375,0.374,0,0,0,-0.2,-3);

	this.timeline.addTween(cjs.Tween.get(this.bird).wait(1));

	// Ground
	this.ground2 = new lib.GroundStripLong();
	this.ground2.setTransform(470,375.1,1,1,0,0,0,96,24.1);
	this.ground2.cache(-2,-3,197,54);

	this.ground1 = new lib.GroundStripLong();
	this.ground1.setTransform(283,375.1,1,1,0,0,0,96,24.1);
	this.ground1.cache(-2,-3,197,54);

	this.ground0 = new lib.GroundStripLong();
	this.ground0.setTransform(96,375.1,1,1,0,0,0,96,24.1);
	this.ground0.cache(-2,-3,197,54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ground0},{t:this.ground1},{t:this.ground2}]}).wait(1));

	// Pipes
	this.pipe2 = new lib.Pipe();
	this.pipe2.setTransform(330.5,250,1,1,0,0,0,27.5,0);

	this.pipe0 = new lib.Pipe();
	this.pipe0.setTransform(-29.5,100,1,1,0,0,0,27.5,0);

	this.pipe1 = new lib.Pipe();
	this.pipe1.setTransform(150.5,200,1,1,0,0,0,27.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pipe1},{t:this.pipe0},{t:this.pipe2}]}).wait(1));

	// Background
	this.instance = new lib.Background();
	this.instance.setTransform(161.3,200.1,1,1,0,0,0,161.3,200.1);
	this.instance.cache(-12,-3,347,406);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(90.4,46.8,626.3,656);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;