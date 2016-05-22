(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 400,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/screenshot1.jpg", id:"screenshot1"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.screenshot1 = function() {
	this.initialize(img.screenshot1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,800);


(lib.StartInstructions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#67412D").s().p("Ag4BIIAAiNIAmAAIAAAPQAHgJAHgEQAHgEAKAAQAVAAALAQQAMAQAAAXQAAAYgNAOQgMANgTAAQgJAAgGgDQgHgDgGgGIAAAxgAgLgkQgFAGAAANQAAAMAFAFQAGAFAGAAQAGAAAFgFQAFgEAAgOQAAgMgFgGQgFgGgHAAQgGAAgFAGg");
	this.shape.setTransform(107.8,4.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#67412D").s().p("AgwAtQgKgJAAgMQAAgMAHgIQAHgFASgEIAbgGIAOgFQAAgHgDgDQgDgDgHAAQgIAAgFADQgEACgCAHIgmgEQACgKAEgFQAEgGAIgEQAFgDAKgCQAJgCAMAAQAPAAALACQALACAHAHQAFAEADAIQADAIAAAHIAAAsIABAMIAEAKIglAAIgDgGIgBgGQgIAHgIADQgIAFgOAAQgTAAgJgJgAAAAHQgMADgDAEQgDADAAAEQAAAFADADQADADAHAAQAFAAAFgEQAGgDACgFQACgEAAgIIAAgGg");
	this.shape_1.setTransform(94.2,2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#67412D").s().p("AgSBHIAAiNIAlAAIAACNg");
	this.shape_2.setTransform(84.2,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#67412D").s().p("AgZBIIAAhIIgPAAIAAgdIAPAAIAAgFIACgOQABgIAEgFQAEgEAGgDQAHgDALAAQALAAAUACIgFAYIgLgBQgFAAgDACQgCACgBADIAAAKIASAAIAAAdIgSAAIAABIg");
	this.shape_3.setTransform(77.4,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#67412D").s().p("AgnApQgTgQAAgZQAAgWAQgPQAQgQAaAAQAeAAAQASQANAPAAAUQAAAXgQAPQgQAQgbAAQgYAAgPgNgAgNgTQgFAHAAAMQAAANAFAHQAGAHAHAAQAIAAAGgHQAFgGAAgOQAAgMgFgHQgGgGgIAAQgHAAgGAGg");
	this.shape_4.setTransform(59.9,2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#67412D").s().p("AgJBEQgHgEgDgHQgEgIAAgRIAAgjIgOAAIAAgdIAOAAIAAgTIAmgUIAAAnIAWAAIAAAdIgWAAIAAAjQAAAHABACQACADAFAAQAFAAAHgDIAEAcQgQADgMAAQgNAAgHgEg");
	this.shape_5.setTransform(48.8,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#67412D").s().p("AgzBGIgDgcQAJADAKAAQAHAAAEgDQAFgDADgJIgshlIAqAAIAUBFIAUhFIAnAAIgpBsQgHATgIAHQgIAJgVAAQgJAAgSgCg");
	this.shape_6.setTransform(31.7,4.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#67412D").s().p("AgfAwQgMgGgIgNQgHgMgBgRQAAgXAQgPQAPgPAcAAQAVAAANAHQAMAHAHAMQAHANAAATIAAAEIhOAAQABAKAEAFQAGAGAHAAQAGAAAFgDIAHgGIAnADQgIAQgNAHQgNAHgXAAQgUAAgLgGgAATgIQgBgLgFgFQgFgFgIAAQgHAAgHAHQgDAFgBAJIAlAAIAAAAg");
	this.shape_7.setTransform(18.9,2.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#67412D").s().p("AAPBHIgTgpIgPAOIAAAbIgoAAIAAiNIAoAAIAABIIAcggIAxAAIglAiIAnBDg");
	this.shape_8.setTransform(6.2,0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#67412D").s().p("AgzBGIgDgcQAJADAKAAQAHAAAEgDQAFgDADgJIgshlIAqAAIAUBFIAUhFIAnAAIgpBsQgHATgIAHQgIAJgVAAQgJAAgSgCg");
	this.shape_9.setTransform(-13.8,4.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#67412D").s().p("AAOA1IAAg4QAAgJgDgEQgEgEgGgBQgGAAgEAGQgEAFAAAMIAAAzIgoAAIAAhmIAlAAIAAAQQAIgKAIgEQAHgEAMgBQARAAAJAKQAJAKAAAUIAABBg");
	this.shape_10.setTransform(-26.6,2.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#67412D").s().p("AgwAtQgKgJAAgMQAAgMAHgIQAHgFASgEIAbgGIAOgFQAAgHgDgDQgDgDgHAAQgIAAgFADQgEACgCAHIgmgEQACgKAEgFQAEgGAIgEQAFgDAKgCQAJgCAMAAQAPAAALACQALACAHAHQAFAEADAIQADAIAAAHIAAAsIABAMIAEAKIglAAIgDgGIgBgGQgIAHgIADQgIAFgOAAQgTAAgJgJgAAAAHQgMADgDAEQgDADAAAEQAAAFADADQADADAHAAQAFAAAFgEQAGgDACgFQACgEAAgIIAAgGg");
	this.shape_11.setTransform(-39.9,2.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#67412D").s().p("AgmAtQgMgIgDgPIAngDQACAHAFADQAEADAFAAQAJAAAEgEQADgCAAgEQAAgEgEgDIgPgEQgVgDgIgDQgIgDgGgGQgFgHAAgJQAAgLAGgHQAGgHAKgEQALgEAQAAQASAAAIADQAJADAHAGQAFAGAEAKIglAEQgCgFgEgDQgEgDgEAAQgIAAgCADQgEACAAADQAAAEAFACQADACAMACQATACAKAEQAJAEAGAFQAEAIAAAJQAAAJgEAIQgGAJgLAFQgMAFgVAAQgaAAgMgJg");
	this.shape_12.setTransform(-59.4,2.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#67412D").s().p("AgmAtQgMgIgEgPIAogDQACAHAFADQAEADAGAAQAHAAAFgEQAEgCAAgEQAAgEgFgDIgQgEQgUgDgIgDQgIgDgGgGQgFgHAAgJQAAgLAGgHQAGgHAKgEQALgEAQAAQASAAAIADQAKADAFAGQAGAGAEAKIgmAEQgBgFgEgDQgEgDgFAAQgGAAgEADQgCACAAADQAAAEADACQAEACALACQAUACAKAEQAKAEAEAFQAFAIABAJQgBAJgFAIQgFAJgMAFQgMAFgTAAQgbAAgMgJg");
	this.shape_13.setTransform(-71.6,2.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#67412D").s().p("AgfAwQgMgGgHgNQgJgMABgRQAAgXAPgPQAQgPAbAAQAUAAANAHQANAHAHAMQAGANAAATIAAAEIhNAAQABAKAEAFQAGAGAHAAQAGAAAGgDIAGgGIAoADQgKAQgNAHQgMAHgXAAQgTAAgMgGgAATgIQgBgLgFgFQgFgFgIAAQgIAAgFAHQgEAFgBAJIAlAAIAAAAg");
	this.shape_14.setTransform(-84.2,2.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#67412D").s().p("AgnA1IAAhmIAlAAIAAARQADgLAGgFQAGgEAIAAQAJABAKAFIgMAcQgHgDgEAAQgIAAgEAHQgFAJAAAXIAAAjg");
	this.shape_15.setTransform(-94.4,2.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#67412D").s().p("Ag7BHIAAiNIBHAAQAYAAAMAMQAMAKAAAWQAAAVgNALQgNAMgbAAIgWAAIAAA1gAgPgJIALAAQALAAAFgEQAFgFAAgHQAAgHgEgFQgFgEgKAAIgNAAg");
	this.shape_16.setTransform(-106.6,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.6,-16.1,415.2,32.2);


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

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#67412D").s().p("AgrCPIAAh4IhvilIBiAAIA4BhIA6hhIBhAAIhvClIAAB4g");
	this.shape.setTransform(113.3,7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#67412D").s().p("AiCCPIAAkdICCAAQAmAAAYALQAYALAQATQAPAUAHAaQAHAaAAAdQAAAtgKAZQgLAZgSARQgTARgVAGQgdAIgXAAgAgqBOIAWAAQAaAAALgGQAMgHAHgPQAGgPAAgjQAAgrgPgRQgOgRghAAIgWAAg");
	this.shape_1.setTransform(82.8,7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#67412D").s().p("AA+CPIgNgwIhjAAIgOAwIhbAAIBskdIBfAAIBsEdgAAeAiIgehlIgfBlIA9AAg");
	this.shape_2.setTransform(51.2,7.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#67412D").s().p("Ah3CPIAAkdIDrAAIAAA+IiSAAIAAAtICHAAIAAA4IiHAAIAAA5ICWAAIAABBg");
	this.shape_3.setTransform(21.6,7.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#67412D").s().p("AAoCPIgthYQgJgRgHgFQgJgGgNAAIgHAAIAAB0IhZAAIAAkdICRAAQApAAAWAHQAWAHANAUQANATAAAbQAAAYgKARQgKARgSAJQgLAHgUAEQAQAGAHAFIAOAPIANASIAqBTgAgygaIAlAAIAVgDQAJgCAGgHQAFgIAAgJQAAgOgJgHQgIgIgXAAIgmAAg");
	this.shape_4.setTransform(-7.3,7.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#67412D").s().p("AgqCPIAAjWIhbAAIAAhHIELAAIAABHIhaAAIAADWg");
	this.shape_5.setTransform(-52.2,7.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#67412D").s().p("Ah3CPIAAkdIDrAAIAAA+IiSAAIAAAtICHAAIAAA4IiHAAIAAA5ICWAAIAABBg");
	this.shape_6.setTransform(-80.5,7.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#67412D").s().p("AhNCCQgggSgSgiQgRgiAAgsQAAguATgiQATgjAmgSQAdgOAvAAQAvABAYAIQAXAJAQASQAPARAIAcIhVAQQgFgRgNgIQgNgJgTAAQgbAAgRAUQgSAVAAArQAAAtASAUQARAUAdAAQAPAAAOgFQANgEASgKIAAgbIg8AAIAAg6ICJAAIAAB5QgnAageAKQgeAKgqAAQgxAAgggSg");
	this.shape_7.setTransform(-112.3,7.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.2,-24.5,282.5,60.4);


(lib.GameOver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#67412D").s().p("AAoCPIgthYQgJgRgHgFQgJgGgNAAIgHAAIAAB0IhZAAIAAkdICRAAQApAAAWAHQAWAHANAUQANATAAAbQAAAYgKARQgKARgSAJQgLAHgUAEQAQAGAHAFIAOAPIANASIAqBTgAgygaIAlAAIAVgDQAJgCAGgHQAFgIAAgJQAAgOgJgHQgIgIgXAAIgmAAg");
	this.shape.setTransform(120.4,7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#67412D").s().p("Ah3CPIAAkdIDrAAIAAA+IiSAAIAAAtICHAAIAAA4IiHAAIAAA5ICWAAIAABBg");
	this.shape_1.setTransform(89.4,7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#67412D").s().p("AgtCPIhtkdIBdAAIA+DMIBAjMIBaAAIhqEdg");
	this.shape_2.setTransform(58.9,7.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#67412D").s().p("AhLCEQghgPgTgiQgUghAAgyQAAhFAngnQAngnBFAAQBGAAAnAnQAnAmAABFQAAAwgRAgQgRAhggASQggARgwABQguAAgfgQgAgqg9QgQATgBAqQABAsAQASQAQATAaAAQAcAAAPgTQAQgSABguQAAgpgRgSQgQgSgbgBQgaABgQASg");
	this.shape_3.setTransform(26.7,7.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#67412D").s().p("Ah3CPIAAkdIDrAAIAAA+IiSAAIAAAtICHAAIAAA4IiHAAIAAA5ICWAAIAABBg");
	this.shape_4.setTransform(-17.2,7.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#67412D").s().p("ABYCPIAAjZIg4DZIhAAAIg3jZIAADZIhJAAIAAkdIB1AAIArCtIAsitIB1AAIAAEdg");
	this.shape_5.setTransform(-50.9,7.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#67412D").s().p("AA/CPIgPgwIhiAAIgOAwIhbAAIBskdIBeAAIBsEdgAAeAiIgehlIgfBlIA9AAg");
	this.shape_6.setTransform(-85.3,7.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#67412D").s().p("AhNCCQgggSgSgiQgRgiAAgsQAAguATgiQATgjAmgSQAdgOAvAAQAvABAYAIQAXAJAQASQAPARAIAcIhVAQQgFgRgNgIQgNgJgTAAQgbAAgRAUQgSAVAAArQAAAtASAUQARAUAdAAQAPAAAOgFQANgEASgKIAAgbIg8AAIAAg6ICJAAIAAB5QgnAageAKQgeAKgqAAQgxAAgggSg");
	this.shape_7.setTransform(-117.9,7.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.2,-24.5,282.5,60.4);


(lib.PipeUpper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5C616B").ss(2,2,0,3).p("AD1QaMAAAgkjInpAAMAAAAkjIgeAAIAADwIIlAAIAAjwgAj0QaIHpAA");
	this.shape.setTransform(27.5,-129);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#73C02E").s().p("AkSUKIAAjxIAeAAIHpAAIAdAAIAADxgAD1QZInpAAMAAAgkiIHpAAMAAAAkigAj0QZg");
	this.shape_1.setTransform(27.5,-129);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-259,57,260);


(lib.PipeLower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5C616B").ss(2,2,0,3).p("Aj0wZIgeAAIAAjwIIlAAIAADwIgeAAAj0wZIHpAAMAAAAkjInpAAg");
	this.shape.setTransform(27.5,129);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#73C02E").s().p("Aj0UKMAAAgkiIHpAAMAAAAkigAD1wYInpAAIgeAAIAAjxIIkAAIAADxg");
	this.shape_1.setTransform(27.5,129);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,57,260);


(lib.GroundStripShort = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Edges
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4B841D").ss(2,2,0,3).p("AnfAAIO/AA");
	this.shape.setTransform(48,361);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#D1A74B").ss(2,2,0,3).p("AnfAAIO/AA");
	this.shape_1.setTransform(48,363);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#553A43").ss(2,2,0,3).p("AnfAAIO/AA");
	this.shape_2.setTransform(48,351);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E2F592").ss(2,2,0,3).p("AnfAAIO/AA");
	this.shape_3.setTransform(48,353);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Stripes
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#9AE75A").ss(1,2,0,3).p("AiLg7IBQAAAnLg7IBQAAAlTA8IhQAAAizA8IhQAAAkrg7IBQAAAC0g7IBQAAAEsA8IhQAAAAUg7IBQAAACMA8IhQAAAgTA8IhQAAAHMA8IhQAAAFUg7IBQAA");
	this.shape_4.setTransform(46,357);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#72BE32").ss(1,2,0,3).p("Ah5A8IB4h3IhQAAIh4B3gAkZA8IB4h3IhQAAIh4B3gAnhAUIBQhPIBQAAIh4B3IgoAAADFA8IB4h3IhQAAIh4B3gAAlA8IB4h3IhQAAIh2B3gAHdAUIgoAoIAoAAAFlA8IB4h3IhQAAIh4B3g");
	this.shape_5.setTransform(48.3,357);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9AE75A").s().p("AFnA7IB5h2IAABPIgpAngADIA7IB4h2IBQAAIh5B2gAAoA7IB3h2IBRAAIh4B2gAh3A7IB3h2IBPAAIh1B2gAkXA7IB5h2IBPAAIh4B2gAm3A7IB5h2IBQAAIh5B2gAnfg7IBRAAIhRBPg");
	this.shape_6.setTransform(48,357);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#72BE32").s().p("AG3A7IApgnIAAAngAEXA7IB5h2IBQAAIh5B2gAB4A7IB4h2IBQAAIh4B2gAgmA7IB1h2IBQAAIh3B2gAjHA7IB4h2IBPAAIh3B2gAlnA7IB5h2IBQAAIh5B2gAnfA7IAAgnIBRhPIBQAAIh5B2g");
	this.shape_7.setTransform(48,357);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,349.6,98.8,14.8);


(lib.CollisionPoint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s().p("AgNAOQgFgGAAgIQAAgHAFgGQAGgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAQgHAAgGgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,4,4);


(lib.Forest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#75C686").ss(2,1,1).p("AoXBRQgDgOAAgQQAAg6AqgqQAqgqA8AAQA7AAAqAqQAOAOAKAQQAcgQAjgEQAJgMAOgLQAogdA5AAQA5AAAmAdQADACADACQACgCADgCQAogdA5AAQA5AAAoAdQAQAMAJANQADAEADAEQAEgDAEgCAoXBRQALgPASgOQA0goBJAAQAjAAAeAJQAhAKAcAVQACACADACQAUARALATAk8AVQAJgNAOgKQAMgKAMgHAofBcQAEgFAEgGAAPg6QAjAdAAAkQAAANgEAMQAKAAALAAQABAAABAAQAEgMAJgLQAJgKAOgLQAogdA5AAQAUAAARAEQAHABAHACQAagQAfgEQABgBABAAQACgCADgCQAsgeA+AAQBBAAAuAiQAFAEAFAEAjOgnQALgCAMAAQBAAAAtAnQAaAUAMAcAhzBcQAOgQAYgNQATgKAWgHQAogOA1AAQBHAAA0AYIACgDQALgkAcgaQALgLANgJAE2g2QAMgCANAAQA7AAArAlQAFAFAFAFQAMAKAJANQASAaAGAgQACAKABAK");
	this.shape.setTransform(103.7,-32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#82E48C").s().p("AoaGcIAAqIQAMgQARgOQA0goBKABQAigBAeAKQAiAKAbAUIAGAFQATAQAMAUQgMgUgTgQIgGgFQgbgUgigKQAKgOAOgMQALgJANgIQgNAIgLAJQgOAMgKAOQgegKgiABQhKgBg0AoQgRAOgMAQQgCgPAAgQQgBg8AqgqQArgqA8AAQA7AAAqAqQAOAOAKAQQAcgQAjgEQAIgMAOgLQApgdA5AAQA5AAAmAdIAFAFIAFgFQApgdA5AAQA5AAAoAdQAPAMAKANQgRgEgUABQg5AAgpAcQgNALgJAMQgJALgEAMIgDAAIgUAAQADgMAAgNQAAgmgjgcQAjAcAAAmQAAANgDAMIAUAAIADAAQAEgMAJgLQAJgMANgLQApgcA5AAQAUgBARAEIAFAIIAJgEQAagRAfgEQAMgCANAAQA6AAAsAlIAKAKQAMAMAJANQASAaAGAhIADAUIgDgUQgGghgSgaQgJgNgMgMIgKgKQgsglg6AAQgNAAgMACIABgBIAGgDQAsgeA+gBQBBAAAtAiIAKAIIAAMLgAgmkQQgWAHgTAKQgYAOgOAQQAOgQAYgOQATgKAWgHQAogOA1AAQBGAAA1AZIACgEQALgkAcgcQALgLAMgJQgMAJgLALQgcAcgLAkIgCAEQg1gZhGAAQg1AAgoAOgAhMlCQAaAWAMAcQgMgcgagWQgtgmhBAAQgMgBgKACQAKgCAMABQBBAAAtAmgAk/koIAAAAg");
	this.shape_1.setTransform(104,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#75C686").ss(2,1,1).p("AE2g2QAMgCANAAQA7AAArAlQAFAFAFAFQAMAKAJANQASAaAGAgQACAKABAKAE2g2QABgBABAAQACgCADgCQAsgeA+AAQBBAAAuAiQAFAEAFAEAD1gdQAEgDAEgCQAagQAfgEADvglQAHABAHACADvglQADAEADAEAAPg6QAjAdAAAkQAAANgEAMQAKAAALAAQABAAABAAQAEgMAJgLQAJgKAOgLQAogdA5AAQAUAAARAEAgkAuQAogOA1AAQBHAAA0AYIACgDQALgkAcgaQALgLANgJAAPg6QACgCADgCQAogdA5AAQA5AAAoAdQAQAMAJANAjOgnQAJgMAOgLQAogdA5AAQA5AAAmAdQADACADACAoXBRQgDgOAAgQQAAg6AqgqQAqgqA8AAQA7AAAqAqQAOAOAKAQAoXBRQALgPASgOQA0goBJAAQAjAAAeAJQAJgNAOgKQAMgKAMgHQAcgQAjgEQALgCAMAAQBAAAAtAnQAaAUAMAcAofBcQAEgFAEgGAhzBcQAOgQAYgNQATgKAWgHAk8AVQAhAKAcAVQACACADACQAUARALAT");
	this.shape_2.setTransform(0.1,-32);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#82E48C").s().p("AoaGcIAAqIQAMgQASgOQA0goBJABQAjgBAeAKQgegKgjABQhJgBg0AoQgSAOgMAQQgDgPAAgQQABg8AqgqQAqgqA7AAQA8AAAqAqQAOAOAKAQQgMAIgMAJQgOAMgJAOQAJgOAOgMQAMgJAMgIQAcgQAigEQAKgMAOgLQAogdA5AAQA5AAAmAdIAGAFIAEgFQApgdA5AAQA5AAAoAdQAQAMAJANIAFAIQgMAJgLALQgcAcgLAkIgCAEQg1gZhGAAQg1AAgoAOQAogOA1AAQBGAAA1AZIACgEQALgkAcgcQALgLAMgJIAJgEQAagRAfgEQAMgCAMAAQA8AAArAlIAKAKQAMAMAJANQASAaAGAhIACAUIgCgUQgGghgSgaQgJgNgMgMIgKgKQgrglg8AAQgMAAgMACIACgBIAFgDQAsgeA9gBQBCAAAtAiIALAIIAAMLgAhPj/QgZAOgOAQQAOgQAZgOQATgKAWgHQgMgcgagWQgugmg/AAQgMgBgMACQAMgCAMABQA/AAAuAmQAaAWAMAcQgWAHgTAKgAkBkKIAEAFQAVAQALAUQgLgUgVgQIgEgFQgcgUghgKQAhAKAcAUgAArkeIAWAAIACAAQAEgMAIgLQAKgMAOgLQAogcA5AAQAUgBARAEQgRgEgUABQg5AAgoAcQgOALgKAMQgIALgEAMIgCAAIgWAAQAFgMAAgNQgBgmgigcQAiAcABAmQAAANgFAMIAAAAg");
	this.shape_3.setTransform(0.3,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#75C686").ss(2,1,1).p("AjOgnQAJgMAOgLQAogdA5AAQA5AAAmAdQADACADACQAjAdAAAkQAAANgEAMQAKAAALAAQABAAABAAQAEgMAJgLQAJgKAOgLQAogdA5AAQAUAAARAEQAHABAHACQAagQAfgEQABgBABAAQACgCADgCQAsgeA+AAQBBAAAuAiQAFAEAFAEAjOgnQALgCAMAAQBAAAAtAnQAaAUAMAcQAogOA1AAQBHAAA0AYIACgDQALgkAcgaQALgLANgJQAEgDAEgCAoXBRQgDgOAAgQQAAg6AqgqQAqgqA8AAQA7AAAqAqQAOAOAKAQQAcgQAjgEAk8AVQAJgNAOgKQAMgKAMgHAk8AVQAhAKAcAVQACACADACQAUARALATAoXBRQALgPASgOQA0goBJAAQAjAAAeAJAofBcQAEgFAEgGAAPg6QACgCADgCQAogdA5AAQA5AAAoAdQAQAMAJANQADAEADAEAhzBcQAOgQAYgNQATgKAWgHAE2g2QAMgCANAAQA7AAArAlQAFAFAFAFQAMAKAJANQASAaAGAgQACAKABAK");
	this.shape_4.setTransform(-103.8,-32);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#82E48C").s().p("AoZGcIAAqIQgEgPAAgQQABg8AqgqQAqgqA7AAQA8AAAqAqQAOAOAKAQQAcgQAigEQAMgCAMABQA/AAAuAmQAaAWALAcQgLgcgagWQgugmg/AAQgMgBgMACQAKgMAOgLQAogdA5AAQA5AAAmAdIAGAFQAiAcABAmQAAANgFAMIAWAAIACAAQAEgMAIgLQAKgMAOgLQAogcA5AAQAUgBARAEIAFAIIAJgEQAagRAfgEQAMgCAMAAQA8AAArAlIAKAKQAMAMAJANQASAaAGAhIACAUIgCgUQgGghgSgaQgJgNgMgMIgKgKQgrglg8AAQgMAAgMACIACgBIAFgDQAsgeA9gBQBBAAAvAiIAKAIIAAMLgAhPj/QgZAOgOAQQAOgQAZgOQATgKAVgHQgVAHgTAKgAk+koQAhAKAcAUIAEAFQAVAQALAUQgLgUgVgQIgEgFQgcgUghgKQAJgOAOgMQAMgJAMgIQgMAIgMAJQgOAMgJAOIAAAAgAn8kKQgSAOgLAQQALgQASgOQA0goBJABQAjgBAeAKQgegKgjABQhJgBg0AogACykFIACgEQALgkAcgcQALgLAMgJQgMAJgLALQgcAcgLAkIgCAEQg1gZhGAAQg1AAgpAOQApgOA1AAQBGAAA1AZgAAwk3QgBgmgigcIAEgFQApgdA5AAQA5AAAoAdQAQAMAJANQgRgEgUABQg5AAgoAcQgOALgKAMQgIALgEAMIgCAAIgWAAQAFgMAAgNg");
	this.shape_5.setTransform(-103.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.2,-42.2,318.4,83.5);


(lib.Clouds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAFDDB").s().p("A6hGuIAApRQAFheBEhEQBKhKBoAAQBoAABJBKQBAA/AJBVQBGhDBhAAQBKAAA6AnQASgiAdgdQBMhLBqAAQBrAABLBLIAOAPIARAVQAOgUASgTQBOhNBuAAQAyAAAsAQIAOAGQBDg5BcAAQBfAABDA6QAKAJAIAJIAEgGQAOgWAVgVQBJhJBnAAQBnAABJBJQAXAXAQAbIALgIQA1gjBDAAQBdAABCBCQAeAeAQAkQAOgdAYgYQA7g7BUAAQA1AAArAYIAOgQQBKhKBoAAQBoAABKBKQA/A/AJBVIABAOIAAJNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.8,-43,339.8,86.1);


(lib.Pipe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Pipes
	this.upper = new lib.PipeUpper();
	this.upper.setTransform(27.5,-179.5,1,1,0,0,0,27.5,-129);
	this.upper.cache(-3,-261,61,264);

	this.lower = new lib.PipeLower();
	this.lower.setTransform(27.5,179.5,1,1,0,0,0,27.5,129);
	this.lower.cache(-3,-3,61,264);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lower},{t:this.upper}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,-309.8,57.6,619.6);


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
	this.shape.graphics.f().s("#DDDA93").ss(1,2,0,3).p("Au/j0Id/AAIAAHpI9/AAg");
	this.shape.setTransform(96,24.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DDDA93").s().p("Au/D0IAAnoId+AAIAAHog");
	this.shape_1.setTransform(96,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,-1.3,194.6,51.3);


(lib.Bird = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1));

	// Collision Points
	this.hit8 = new lib.CollisionPoint();
	this.hit8.setTransform(-18.5,-24);

	this.hit7 = new lib.CollisionPoint();
	this.hit7.setTransform(-41.5,-8);

	this.hit6 = new lib.CollisionPoint();
	this.hit6.setTransform(-22.5,19);

	this.hit5 = new lib.CollisionPoint();
	this.hit5.setTransform(-2.5,27);

	this.hit4 = new lib.CollisionPoint();
	this.hit4.setTransform(23.5,24);

	this.hit3 = new lib.CollisionPoint();
	this.hit3.setTransform(37.5,18);

	this.hit2 = new lib.CollisionPoint();
	this.hit2.setTransform(40.5,4);

	this.hit1 = new lib.CollisionPoint();
	this.hit1.setTransform(31.5,-16);

	this.hit0 = new lib.CollisionPoint();
	this.hit0.setTransform(1,-33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit0},{t:this.hit1},{t:this.hit2},{t:this.hit3},{t:this.hit4},{t:this.hit5},{t:this.hit6},{t:this.hit7},{t:this.hit8}]}).wait(9));

	// Outline
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ACRAjQiWhHAyifQAGgKAIgJQARgTATgLQAfgTAmAAQA+AAAvAvQAvAuAABGQAAA+gmAtQA1AFAsAfQASANACAWQABAJgCALQgGALgSAMAEJhpQAAATgFANQAAACgBACQgFAGgGADQgFADgGAAQgNAAgKgOQgJgNAAgUQAAgTAJgNQAKgOANAAQADAAADABQAKACAHALQABABABACQADAMAAAQgACrEBQAaAHAbgCQB4gIAbg0QAMgYgHggQgBgFgMgNQAGgEAFgDABPByQAGADAGACQBcAdCNgUIAygHACrEBQgugNgogqQgMgOgJgLQgagjAAgbQAAgMAGgLQAfgVAegQQAUgMAUgIQBKghA/AFAkTB2QhlgYgXh2QAThbBwgjQAWgGAVAHQAuAHAlAOQAwASAiAgQAEAEAFAEQAZBQgwBIQgHAGgIAFQhPAwhrgXQA4CgC/ARQBvgCBYgkACMkJQi/hfiuDT");
	this.shape.setTransform(-0.2,-3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0066CC").ss(2,1,1).p("AADgjQAHAMAAARQAAASgJANQgBABAAABQgDAJgGAAIAAAA");
	this.shape_1.setTransform(25.7,-12.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAgQgJgNAAgTQAAgSAJgNQAKgOAMAAIAFABQAKACAHALIACADQADAMABAQQAAARgGANIgBAEQgFAGgGADQgFADgFAAQgMAAgKgOg");
	this.shape_2.setTransform(23.4,-13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C73845").s().p("Ag8BWQgtgNgpgqIgUgZQCKA8CEgYIAjgLQgbA0h2AIIgMABQgVAAgVgGgAiLgyQBwgBA7gPIBGAAQAkgDAdgWQAAAJgCALQgGALgRAMIgzAHQg5AIgwAAQhHAAg2gRg");
	this.shape_3.setTransform(23,14.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("ACRAjQiWhHAyifQAGgKAIgJQARgTATgLQAfgTAmAAQA+AAAvAvQAvAuAABGQAAA+gmAtQA1AFAsAfQASANACAWQABAJgCALQgGALgSAMACrEBQAaAHAbgCQB4gIAbg0QAMgYgHggQgBgFgMgNQAGgEAFgDABPByQAGADAGACQBcAdCNgUIAygHACrEBQgugNgogqQgMgOgJgLQgagjAAgbQAAgMAGgLQAfgVAegQQAUgMAUgIQBKghA/AFAkTB2QhlgYgXh2QAThbBwgjQAWgGAVAHQAuAHAlAOQAwASAiAgQAEAEAFAEQAZBQgwBIQgHAGgIAFQhPAwhrgXQA4CgC/ARQBvgCBYgkACMkJQi/hfiuDT");
	this.shape_4.setTransform(-0.2,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_4}]},7).to({state:[]},1).wait(1));

	// Highlights
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F4B3A3").ss(3,1,1).p("AgugFQBEgFAZAR");
	this.shape_5.setTransform(27.7,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#ECFDD9").ss(7,1,1).p("AgmhMQgUBTAUBGIBXgO");
	this.shape_6.setTransform(22.3,-12.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FCFBE9").ss(4,1,1).p("ACohEQgkgYgfALAinA5QBBgFAtAh");
	this.shape_7.setTransform(-8.1,-20.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C73845").s().p("Ag8BWQgtgNgpgqIgUgZQCKA8CEgYIAjgLQgbA0h2AIIgMABQgVAAgVgGgAiLgyQBwgBA7gPIBGAAQAkgDAdgWQAAAJgCALQgGALgRAMIgzAHQg5AIgwAAQhHAAg2gRg");
	this.shape_8.setTransform(23,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},7).to({state:[]},1).wait(1));

	// Colour
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#0066CC").ss(2,1,1).p("ACLkEQAMgCANAAQA+AAAvAvQAvAuAABGQAAA+gmAtQA1AFAsAfQAaATgHAkQgGALgSAMACRAkQiWhHAyifQAGgKAIgJQARgTATgLQAVgNAXgEQi+hsiuDcABPBzQBeAjCXgVIAygHACrECQAaAHAbgCQCugLgWhpQgBgFgMgNQAGgEAFgDACrECQgugNgogqQgvgyAAglQAAgMAGgLQAfgVAegQQAUgMAUgIQBKghA/AFAkTB3QhlgYgXh2QAThbBwgjQAWgGAVAHQAuAHAkAOQAxASAiAgQAEAEAFAEQAZBQgwBIQgHAGgIAFQhPAwhrgXQA4CgC/ARQBvgCBYgk");
	this.shape_9.setTransform(-0.2,-3.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F1674A").s().p("AgvB6QgtgNgpgqQgugyAAgjQAAgMAGgLQAfgVAdgQQAVgMATgIQBJghA/AFQA0AFAsAfQAbATgIAkQgGALgRAMIgzAHIgCAAIgNACIgBAAQgwAEgoAAIAAAAIgBAAQhPAAg5gTIgCgBIACABQA5ATBPAAIABAAIAAAAQAoAAAwgEIABAAIANgCIACAAIAzgHIgLAHQAMALABAFQAVBpitALIgKABQgVAAgVgGg");
	this.shape_10.setTransform(21.7,10.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FAFCEA").s().p("AiBhQQAGgKAIgJQARgTATgMQAVgMAXgEQAMgCANAAQA8AAAvAuQAvAuAABEQAAA+gmAwQg/gFhIAgQiYhIA0idg");
	this.shape_11.setTransform(17.4,-14.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F4EC30").s().p("AiUCaQhlgYgWh5QDKCiCGjWIAJAJQAJAcAAAZQAAAzgfAwIgQAKQg0AhhCAAQggAAgigHgAAkCAIAQgKQAfgwAAgzQAAgZgJgcIgJgJQghgfgvgTQAlhICWAGQgzCfCXBGQgTAJgVALQgdAQgfAWQgGALAAAMQgaAEgWAAQg2AAgcgbg");
	this.shape_12.setTransform(-13,-6.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FABC15").s().p("AjfhKQBsAWBPgwQAkAmBbgPQAAAkAuAwQApArAuANQhYAkhyACQi8gRg5ieg");
	this.shape_13.setTransform(-5.5,16.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F9F38C").s().p("AkMBlQAShaBwghQAWgHAWAIQAuAGAkAOQAvARAhAfQhLB7hkAAQhKAAhXhFgAhegVQCrjdDABtQgXAEgUAMQgUAMgQATQgIAJgHAKQiWgGglBIQgkgOgugGgAhegVIAAAAg");
	this.shape_14.setTransform(-13.3,-15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).to({state:[{t:this.shape_11},{t:this.shape_14},{t:this.shape_10},{t:this.shape_13},{t:this.shape_12},{t:this.shape_9}]},7).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-314,-228,724,838);


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Forest
	this.instance = new lib.Forest();
	this.instance.setTransform(149.2,358.3,1,1,0,0,0,-0.1,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Clouds
	this.instance_1 = new lib.Clouds();
	this.instance_1.setTransform(162.7,297.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Sky
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#70C6CE").ss(1,1,1).p("A3b/PMAu3AAAMAAAA+fMgu3AAAg");
	this.shape.setTransform(150,200.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#70C6CE").s().p("A3bfPMAAAg+dMAu2AAAMAAAA+dg");
	this.shape_1.setTransform(150,200.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Guide
	this.instance_2 = new lib.screenshot1();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-0.9,342.5,402);


// stage content:
(lib.flappy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Screen Flash
	this.screenFlash = new lib.ScreenFlash();
	this.screenFlash.setTransform(150,200);

	this.timeline.addTween(cjs.Tween.get(this.screenFlash).wait(1));

	// Score
	this.score = new cjs.Text("0", "bold 24px 'Arial Black'", "#FFFFFF");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 36;
	this.score.lineWidth = 121;
	this.score.setTransform(150,9);

	this.timeline.addTween(cjs.Tween.get(this.score).wait(1));

	// Game Over
	this.gameOverPrompt = new lib.GameOver();
	this.gameOverPrompt.setTransform(151.5,85.9);

	this.timeline.addTween(cjs.Tween.get(this.gameOverPrompt).wait(1));

	// Get Ready
	this.getReadyPrompt = new lib.GetReady();
	this.getReadyPrompt.setTransform(151.5,85.9);

	this.timeline.addTween(cjs.Tween.get(this.getReadyPrompt).wait(1));

	// Press Any Key
	this.anyKeyPrompt = new lib.StartInstructions();
	this.anyKeyPrompt.setTransform(151.5,235.9);

	this.timeline.addTween(cjs.Tween.get(this.anyKeyPrompt).wait(1));

	// Bird
	this.bird = new lib.Bird();
	this.bird.setTransform(94.1,174,0.375,0.374,0,0,0,-0.2,-3);

	this.timeline.addTween(cjs.Tween.get(this.bird).wait(1));

	// Ground
	this.ground2 = new lib.GroundStripLong();
	this.ground2.setTransform(480,375.1,1,1,0,0,0,96,24.1);
	this.ground2.cache(-3,-3,199,55);

	this.ground1 = new lib.GroundStripLong();
	this.ground1.setTransform(288,375.1,1,1,0,0,0,96,24.1);
	this.ground1.cache(-3,-3,199,55);

	this.ground0 = new lib.GroundStripLong();
	this.ground0.setTransform(96,375.1,1,1,0,0,0,96,24.1);
	this.ground0.cache(-3,-3,199,55);

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
p.nominalBounds = new cjs.Rectangle(91.7,-9.8,635.6,769.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;