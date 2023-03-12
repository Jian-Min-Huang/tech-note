(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib._728x90 = function() {
	this.initialize(img._728x90);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib._728x90_cut1_bg = function() {
	this.initialize(img._728x90_cut1_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,21);


(lib.light_1 = function() {
	this.initialize(img.light_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,21);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AC3BvQgoAfgzAAQg0AAgogfQgmAfg1AAQgzAAgogfQgoAfg0AAQg8ABgqgrQgrgpAAg7QAAg6ArgqQAqgqA8AAQA0ABAoAfQAogfAzgBQA1ABAmAfQAogfA0gBQAzABAoAfQAogfA0gBQA8AAArAqQAqAqAAA6QAAA7gqApQgrArg8gBQg0AAgogfgADOhWQAfAnAAAvQAAAxgfAmQAfAXAmAAQAuAAAhggQAhghAAgtQAAgsghghQghggguAAQgmAAgfAXgAAXhWQAfAnAAAvQAAAxgfAmQAfAXAmAAQAmAAAegXQgfgmAAgxQAAgwAfgmQgegXgmAAQgmAAgfAXgAifhWQAfAmAAAwQAAAxgfAmQAeAXAmAAQAmAAAfgXQgfgmAAgxQAAgvAfgnQgfgXgmAAQgmAAgeAXgAlhhNQghAhAAAsQAAAtAhAhQAhAgAuAAQAmAAAfgXQgfgmAAgxQAAgvAfgnQgfgXgmAAQguAAghAggACiAAQAAAkAVAcQAVgdAAgjQAAgigVgdQgVAcAAAjgAgUAAQAAAjAUAdQAVgcAAgkQAAgjgVgcQgUAcAAAjgAjLAAQAAAjAVAdQAVgcAAgkQAAgjgVgcQgVAdAAAig");
	mask.setTransform(42,14.2);

	// 圖層 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-18,-22);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,84.1,28.5), null);


(lib.light_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.light_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.light_1_1, new cjs.Rectangle(0,0,35,21), null);


(lib.light_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.light();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.light_2, new cjs.Rectangle(0,0,35,21), null);


(lib.cut2_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAzA8QgJgPgDgIQgEgKgDgNQgDgMgCgPIgKABIAABCIAUgGIADASQgdAKgQAEIgHgUIALgCIAAhPIgEAGIgQgNIAEgHIgaAAIAAAPIAfAAQgBAugCAPIgCATQgCAIgCADQgCAEgEADQgEACgFAAIgOgBIgFgVQgEANgGAKIgSgNQAKgTAFgXQACgLABgMIABgXIAAgPIgPAAIAAgUIAXAAIAAgZIAVAAIAAAZIAVAAIAAAPIAHgNQAHgPACgMIAUAGIgEAMIA6AAIAAATIhCAAIAAAAIgJARQAMgCAPgEIAcgJIARARIgcAHIAFAZQAIgGAIgHIANAOQgQAMgIAFIABABQAEAJAHAKQAGAKALAJIgOAQQgOgOgFgHgAgyAoIgFASIAPABQAEAAAAgFQADgaABgcIgMAAIgGAog");
	this.shape.setTransform(153.3,18.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARBMQgTgDgIgEQgNgGgHgFQgHgFgEAAQgDAAgGAFIgQASIgQgQIATgUQAFgFAFgDQAGgDADAAQAEAAAFADQAOgKAZgWQAMgKAVgYIhrAAIAAgUIA8AAIAAgXIAWAAIAAAXIA6AAIAAAQIgUAYIgWAVIgWATIgXASQAJAFAHADQAHACANABQANACASAAQAWAAAKgCIgEAXQgsgBgRgBg");
	this.shape_1.setTransform(134.4,18.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWBFQgDAFgEADQgFADgIAAIgJgBIgEgSQAIACAFAAQAFAAAAgJIAAg5IgoAAIAABSIgRAAIAAhjIAJAAQgDgIgGgIIAQgKQAHAKAEAJIgLAHIANAAIAAgeIATAAIAAAeIAKAAIgIgIQAHgJAEgJIARAKIgKAQIAFAAIAAAHIAEgIQAFgOAEgPIARAFIgFAPIAfAAIAAARIgEAAQgBAOgDAOQgDAOgFAMIgBACIAJANIAMALIgPAOQgLgKgHgKIgKAMQgFAFgHAEgAAXA7IAAAEQAHgFAKgOQgHgSgDgMIgCADIgFgEgAAqgLIgBACQAGAWAEAJQADgLADgYIgOAAgAhSBHQAHgWACgRQACgUABgTIAAg/IBEAAIAAgLIAVAAIAAALIA6AAIAAASIiAAAIAAA1QgCAfgCAOQgFAXgFAMgAgcA+IAAg7IAeAAIAAA0IgQAAIAAAHgAgOAqIAEAAIAAgaIgEAAg");
	this.shape_2.setTransform(115.5,18.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhRBFQAFgQAGgYQACgOABgbIAAhDICTAAIAAAUIg4AAIgEAIIgBADIAzAAIAABKIguAAIAAAaIgBANIgDAIQgCADgFACQgEABgHAAQgHAAgHgDIgEgVQAIAEAIAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAgBIABgJIAAgVIgrAAIAAhKIAlAAIACgHIAAgEIgvAAIAAA5IgBAXIgDAWIgDANIAQgNQAHgHAFgHIAQAKQgGALgIAJQgIAIgJAHIgNgQIgIAWgAgUAGIBHAAIAAgHIhHAAgAgUgUIBHAAIAAgJIhHAAgAA0A+QgNgMgGgIIAQgNQAIAJAIAGQAIAHAJAEIgNAVQgIgFgJgJg");
	this.shape_3.setTransform(96.6,18.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA5BQIAAgFIhxAAIAAAFIgTAAIAAifICYAAIAACfgAAJA4IAwAAIAAgSQgCAKgEADQgEADgGAAQgEAAgEgCQgEgCgDgEIgDgDQgFAHgJAGgAAFA4IgIgNIAEgEIgxAHIgDgSIA3gGIABANIAJgLIgDgLQgDgKgDgdIg6AAIAAgSIA5AAIgBgNIASAAIAAANIAMAAIgJgHIAJgJIhZAAIAAB0IA9AAgAA0gPQgEANgEAKIgKATIAAABQAFAHACAAIABgBIAAgOIAPAEIAAhUIgPAAIAKAIIgHAIIAKAAIAAASIghAAQABAUACAIIABACQAFgLAEgOgAgwASIAAgnIAyAAIAAAngAgeACIAQAAIAAgHIgQAAg");
	this.shape_4.setTransform(77.8,18.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAGBRQgGgBgEgEQgDgEAAgIIAAgaIARAAIAAAVQAAAFAEABIAFAAQANAAACgBQADgBAAgDQABgCAAgIIATAKQgBAHgCAFQgBAEgDACIgJACQgEABgSAAgAhABRIAAg7IgGAGIgNgSQAJgIALgNQAGgIAJgQIASALQgGAMgIAMIAABRgAgpBCQAJgNAFgPIARAIIgHATIgIAOgAA0AsIARgIQAGAJAJAUIgTAJQgFgQgIgOgAAMAmIAKgLIg0AAIAAgSIBsAAIAAASIg0AAQAIAGAHAIIgMAPQgIgLgJgHgAgaADIAAgvIAnAAIAAgHIgoAAIAAgRIAoAAIAAgMIAUAAIAAAMIApAAIAAARIgpAAIAAAHIApAAIAAAvgAAtgNIAKAAIAAgOIgKAAgAATgNIAIAAIAAgOIgIAAgAgHgNIAIAAIAAgOIgIAAgAhRguIARgQQAIgJAFgJIARAKQgFALgJALQgMAOgHAFg");
	this.shape_5.setTransform(58.9,18.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIBBIAAhbIARAAIAABbgAgIgtIAAgTIARAAIAAATg");
	this.shape_6.setTransform(46,18.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVA/QgMgFgFgEIgGgHIgFgJIgCgJIgBgLQAAgIADgLIAFgIIAGgHIAIgGIAJgEQAHgCAQgBQAJAAAJACQAJACAHAEIAAgsIASAAIAACBIgPAAIgCgIQgGAFgKADQgLACgKAAQgPgBgGgCgAgMgNQgHACgFAEQgFAFgDAFQgCAGAAAJQAAAJACAGQADAGAFAFQAFAEAHACQAHADAJAAQAIAAAJgDQAIgCAHgEIAAgyQgHgFgIgCQgJgCgIAAQgJAAgHACg");
	this.shape_7.setTransform(35.7,18.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVAuQgIgCgGgDQgGgEgDgHIgDgIIgBgJIAAg7IASAAIAAA4QAAAGACAFQACAEAEADQADADAGABIANABQAJAAAIgCQAGgCAIgEIAAhHIASAAIAABbIgPAAIgBgIQgHAFgKADQgKACgKAAQgJAAgIgBg");
	this.shape_8.setTransform(22.1,20.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA3BBIgQggIhNAAIgQAgIgVAAIBBiBIAVAAIBBCBgAAgASIgghBIggBBIBAAAg");
	this.shape_9.setTransform(7.7,18.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRBPQgGAAgEgBQgEgCgDgCQgDgCgCgEIgBgIIAAgdIAUAAIAAAXQAAADACACQACABAFABIALAAQAUAAADgBQADgBABgCQACgCAAgIIAVAMQgCAOgHAEQgFACgHAAQgGABgXAAgAhPA+QAFgLAIgYIAUAGQgJAcgFALgAA2A1IgKgQIASgMIALARIAJARIgUALIgIgRgAgIAjIAQgKQAFAGAJAOIgSALQgHgOgFgHgAgDAWIgEgVQAHADAIAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIABgJIAAgnIgVAAQgFAMgGAIIgSgKQAGgJAFgLQAFgKADgNIAUAGIgDAIIBUAAQgIAYgGAMIgTgGIAGgLIgWAAIAAAsQAAAHgCAFIgCAHQgDADgEACQgEABgHABQgIAAgFgCgAg/AWIAAgoIgHAHIgLgTIATgYQAFgIAHgRIAUAGQgGAPgIAMIAABEgAAmgSIASgLQAHAJAGAJIAKASIgTALQgIgSgOgSgAgmAAQAPgNALgSIAQALIgMAUQgHAJgHAGg");
	this.shape_10.setTransform(122.5,-3.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhRA8IAVgJIAAgkIgTAAIAAgTIAmAAIAAAzQAHAFAIACIgIgQQAMgEAIgFQAIgFAGgHQAEgGACgIIgoAAIAAgSIArAAIAAgCIABgQIgmAAIAAgUIAXAAIgLgQIAQgLQAJAKAGALIgMAGIAXAAQAGgMAFgPIAXAGQgFAMgGAJIAWAAIAAAUIgpAAIAAASIAvAAIAAASIgqAAQADAGADAEQAFAGAJAGQAIAFAOAFIgLAUQgHgDgHgEIgOgJIgJgJIgHgKQgDAGgEAFQgOAQgXAIIAHABQAZACAdAAIAXgBIAUgCQgIAOgCAJIg0AAQgbAAgRgEIgMgFIgMgJIgTAVIgOgVgAhQgeIAPgQQALAHAJAIIgOASQgKgKgLgHgAhEg+IAPgQQAOAKAHAGIgOARQgHgHgPgKg");
	this.shape_11.setTransform(103.6,-3.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AALBQIAAifIBDAAIAABxIgBAKQgBAFgDADQgCADgEABIgIABIgOAAIgFgVQAHACAHAAQAFAAAAgHIAAhaIgcAAIAACLgAhNA0IAGAAIAAiDIBKAAIAABbIg2AAIAAAkIAggFIgHgQIATgJIAIAVIAIAXIgUAIIgCgJIg5ANgAgzgHIAiAAIAAgQIgiAAgAgzgqIAiAAIAAgRIgiAAg");
	this.shape_12.setTransform(84.3,-3.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhOBQIAAgUIBDAAIAAgnIg3AAIAAgVIA3AAIAAgbIg/AAIAAgUIBDAAIgSgTIAUgNQAGAGAGAHIAKANIgKAGIBEAAIAAAUIhBAAIAAAbIA4AAIAAAVIg4AAIAAAnIBFAAIAAAUg");
	this.shape_13.setTransform(65.7,-3.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AA0BCIgLgNIgKgQQgFgIgEgKQgIgSgGgRIgMAZQgGAMgHAKQgPASgJAIQgSAPgKAGIgMgWQAKgGASgPQAIgIAOgQQAGgJALgTQAGgLAIgYIAAgEIgxAAIAAgVIBCAAQAFAfAEAOQAIAbAGALQAFAKANASQAHAJARAOIgRAVQgHgFgGgHg");
	this.shape_14.setTransform(46.9,-3.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAYBKIgEgXIAKAEIALABQADAAACgDQACgEgBgHIAAgPIhLAAIgEAPIgHARQgDAJgHAJIgTgMIALgUIAGgSIAEgUIACgTIAAhAIAJAAIBoAAIAAB9QAAAHgBAGQgBAFgDADQgDADgFACQgFACgFAAQgJAAgMgDgAgZgCIgBAKIBJAAIAAgXIhIAAgAgZgiIBIAAIAAgXIhIAAg");
	this.shape_15.setTransform(27.3,-3.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgLBRIAAgeIgkAAIAAgSQgQAPgHAEIgKgSQAIgGAJgIQAJgJAKgLIANgRIAKgSIg2AAIAAgUIBAAAIAAgZIAVAAIAAAZIBCAAIAAAUIg4AAIALATIANAQQAIAIAJAIIAUAPIgLAVQgRgMgIgIIAAATIgjAAIAAAegAAsAfIgPgRQgOgRgFgLIAAAtIAiAAIAAAAgAgdAOIgPARIAhAAIAAgsQgLATgHAIg");
	this.shape_16.setTransform(9,-3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cut2_txt, new cjs.Rectangle(-2,-14.7,167.5,45.8), null);


(lib.cut1_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._728x90_cut1_bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cut1_bg, new cjs.Rectangle(0,0,728,90), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cta-txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#121318").s().p("Ag0A7IAigKQAKgEARgIQgGgIgHgHIAFgEIAOAQIAEgCQAHgEAMgKQAFgFAIgLIgoAAQgFAHgGAEQgIAGgKAFQgJAEgMAEIgEgGIAVgIIARgKIANgLQAHgHAFgJIAHACQgFAJgFAFIAqAAIAAAFIgHALIgJAKIgMAJIgMAHIgeAOQgZAIgOAEgAg7AJQAegIAUgKIgIgJIgJgIIAFgEQANALAFAHIADgCQAIgHAGgHQAHgGAEgIIgnAAIgKAIQgGAFgIAEQgIAFgJADIgEgGIARgHIAOgJQAGgFAFgFIAKgPIAHACIgJAOIArAAIAAAGQgJAOgGAFQgLALgHAEQgQAJgJAEIggALg");
	this.shape.setTransform(66,13);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#121318").s().p("Ag/A3QAKgCARgFIAKgFIAIgGIgKgHIgJgHIAGgEIAIAHIAJAGIAGgJIADgMIgoAAIAAgzIAqAAIAAgOIg3AAIAAgGIB1AAIAAAGIg5AAIAAAOIAqAAIAAAzIgrAAQgBAIgCAGQgCAGgEAFIABAAIANAGIAQAFIAUADIAWACIgBAGIgYgCIgUgDIgQgFIgOgGIgCgBIgIAHIgLAFIgNAEIgQAEgAACgFIAAALIAkAAIAAgRIgkAAgAgnAGIAjAAIABgLIAAgGIgkAAgAACgRIAkAAIAAgRIgkAAgAgngRIAkAAIAAgRIgkAAg");
	this.shape_1.setTransform(50.6,13.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#121318").s().p("Ag+A8IAEgJIAEgLIACgOIABgSIAAgeIgHAKIgFgFIAIgKIAHgNIAGgMIAEgMIAGACIgEALIAYAAQgGARgEAGIASAAIAABRQAAAEgCADQgCACgFAAIgOgBIAAgHIAOACQADAAAAgFIAAgaIgkAAQgBALgCAIIgEALQgCAGgDAEgAgZATIAPAAIAAgTIgPAAgAgtAJIgBAKIAPAAIAAgTIgOAAgAgZgEIAPAAIAAgSIgPAAgAgtgEIAOAAIAAgSIgOAAgAgrgkIgFAIIATAAIAJgRIgSAAgAAfBAIAAghIghAAIAAgFIAhAAIAAgTIgSAAIgJAPIgEgEQAFgGAEgJQAEgIABgHIAGACIgFAMIAQAAIAAgQIAGAAIAAAQIAXAAIAAAFIgXAAIAAATIAbAAIAAAFIgbAAIAAAhgAAAgNIAJgHIAIgJIAEgJQACgGAAgGIgWAAIAAgGIA5AAQgBAggEAEIgEADIgHAAIgQgBIAAgHIAQACQAFAAABgDQACgCACgWIgXAAIgCANQgCAGgDAFQgEAFgFAEQgFAFgGADg");
	this.shape_2.setTransform(35.2,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#121318").s().p("AgPA7IgMgDIgCgIQAOAEAKAAQAFAAABgCQADgDAAgRIgBgSIgCgQIgDgOIgFgNIAFgCQACAFACAIIAVgPIATgRIhdAAIAAgHIBmAAIAAAGQgNAPgIAHIgZARIADAKQADAYAAAKIgBAQQgBAGgCADIgFADQgCACgDAAIgMgBg");
	this.shape_3.setTransform(19.6,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.5,1,1).p("Agag3IA2A3Ig3A4");
	this.shape_4.setTransform(81.8,12.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// bg
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AmSB9IAAj5IMlAAIAAD5g");
	this.shape_5.setTransform(49.3,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(9,0,80.6,25.1), null);


(lib.ct1txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAMBjIAAh0IgFAIIgHgFIAAARIgjAAIgCAJIArAAIAAA8QAAAGgBAFQgCAFgDAEQgDADgEACQgGABgGAAIgUgBIgEgXQANADALAAQAEAAAAgJIgQAGIgBgGQgTAEgWACIgEgVIAIgBIAFgUIgOAAIAABCIgXAAIAAhWIAqAAIACgJIgnAAIAAg4IAUAAIALgNIghAAIAAgVIAoAAIAAgKIAZAAIAAAKIAnAAIAAAVIgmAAIAOAIIgCAEIAUAAIAAAKIAHgQQAGgNAHgZIAWAGIgGAUIAAAGIARAAIAFgdIAYAFIgFAYIAXAAIAAAWIgZAAIAAAWIASAAIAAAWIgSAAIAAAXIASAAIAAAWIgSAAIAAAYIAbAAIAAAXIhCAAIAAAHgAAkBFIAQAAIAAgYIgQAAgAgPA5IAAgZIgbAAIgDASIAIgBIgEgJIASgFQAFAKADAMgAAkAXIAQAAIAAgXIgQAAgAgfgRIAKAAIAAgLgAgigRIgLgLIgOALIAZAAgAhBgRIgJgMIAAAMIAJAAgAAkgWIAQAAIAAgWIgQAAgAhKggIANgKIgNgIgAgdgrIAIAHIAAgRgAgtg4IAIgKIgYAAg");
	this.shape.setTransform(254.4,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgBBhIAAjBIBiAAIAAAXIhKAAIAAAdIBIAAIAABVIgZAAIAAgJIgvAAIAAAeIBNAAIAAAZIhNAAIAAAKgAAXAIIAvAAIAAgcIgvAAgAhjBFIAJgBIAAhEIAXAAIAABAIAHgBIAAhRIgeAAIAAhOIBNAAIAABOIgXAAIAAAVIAbAAIAAAWIgbAAIAAAjIAZgGIADAYQg3AMggAFgAhCgpIAdAAIAAggIgdAAg");
	this.shape_1.setTransform(230.1,12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAfBhIgGgbQATAEALAAQAEAAACgDQACgCABgFQADgKABgbIABhGIguAAQgMAdgIALIgRgNIAABkIgZAAIAAgLIgdAAIAAAUIgZAAIAAigIAUAAQAEgPADgRIAaAGIgHAaIAhAAIAAAnQAJgOAFgRQAGgOAIgaIAZAIIgGAYIA9AAQgBBKgBAYIgDAeQgBAMgCAFQgBAGgEAEQgCAEgEADQgDACgFACQgGABgGAAQgLAAgNgDgAhEAxIAdAAIAAghIgdAAgAhEgGIAdAAIAAglIgdAAgAATASIgJgXIAZgHQAFALAEALQAFAMADAOIgbAIIgGgag");
	this.shape_2.setTransform(205.9,12.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhiBKIAZgOIAAgtIgZAAIAAgXIAyAAIAABAQAGAFAIAEQAIADAJAAQANADA0AAIAcgBQANgBAKgDQgIASgDALIg/AAQgRAAgNgCIgYgEQgHgCgHgEQgIgEgHgGIgYAagAAlBCIAAhTIglAAIAAAGQAAAKgBAIQgCAJgEAJQgEAKgFAIQgGAIgGAHIgRgQQAHgJAJgRQACgGABgHQACgGAAgIIAAhMQATAAAhgDQAQgCAdgGIAOAXQgTAFgWADQgWACgYABIAAAXIBgAAIAAAYIghAAIAABTgAhigrIARgSQATAMAIAHIgSAWQgIgJgSgOgAhRhQIARgSQAUALAJAIIgRAVQgJgJgUgNg");
	this.shape_3.setTransform(181.9,12.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYBkIAAgTIhFAHIgEgYIAOAAIAAhBIgPAAIAAgWIDEAAIAAAWIhiAAIAABlgAg8A+IAkgCIAAgHIgkAAgAg8AhIAkAAIAAgIIgkAAgAg8AFIAkAAIAAgGIgkAAgAABBMQAKgDAIgEIAPgJQgHgHgFgJQgFgJgEgKIgJAAIAAgVIBTAAIAAAQIgJAWQgFAKgGAIIAPAIIARAGIgMAXQgKgDgJgFQgJgFgIgHQgRAPgVAHgAAxAtQAHgKAFgKIgZAAQAFAKAIAKgAhNgcIAAhGICZAAIAABGgAg1gwIBpAAIAAgFIhpAAgAg1hHIBpAAIAAgHIhpAAg");
	this.shape_4.setTransform(157.7,12.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABGBiIAAgGIiLAAIAAAGIgYAAIAAjDIC6AAIAADDgAALBFIA7AAIAAgXQgDANgFADQgEAEgJAAQgEAAgFgDQgEgCgFgFIgDgEQgHAJgKAIgAAGBFIgLgQIAGgGIg9AJIgDgVIBDgIIABARIANgPIgFgNQgEgNgEgkIhFAAIAAgVIBEAAIgBgRIAWAAIABARIANAAIgJgJIALgKIhuAAIAACOIBLAAgABAgSQgFAQgFAMQgGANgGAKIABABQAEAJACAAIABgBQACgEAAgOIASAFIAAhmIgUAAIAOAKIgIAJIALAAIAAAVIgoAAQABAaADAJIABADQAGgOAFgSgAg8AXIAAgyIA+AAIAAAygAglACIATAAIAAgJIgTAAg");
	this.shape_5.setTransform(133.5,12.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAIBiQgIAAgFgFQgEgFAAgJIAAggIAWAAIAAAZQAAAHAEAAIAGABQAQAAADgBQADgCABgDIABgNIAXANQgBAIgCAGQgCAFgEACQgDACgIABQgFABgWAAgAhOBjIAAhIIgIAHIgQgWQALgKAOgPQAHgKALgTIAWANQgHAPgKAOIAABjgAgyBQQALgPAGgTIAVAKIgJAYQgFAKgFAHgAA/A2IAVgKQAIALALAZIgXALQgGgUgLgRgAAPAuIAMgNIhAAAIAAgVICEAAIAAAVIg/AAQAKAHAJAKIgPASQgLgNgKgJgAggAEIAAg5IAwAAIAAgJIgxAAIAAgWIAxAAIAAgNIAYAAIAAANIAzAAIAAAWIgzAAIAAAJIAyAAIAAA5gAA3gQIAMAAIAAgRIgMAAgAAXgQIAKAAIAAgRIgKAAgAgJgQIALAAIAAgRIgLAAgAhjg5QAKgIALgLQAJgLAGgLIAWAMQgHANgLAOQgOARgJAHg");
	this.shape_6.setTransform(109.4,12.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AArBhIgEgaQAOADAPAAQABAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAgBIABgLIAAieIAaAAIAACkQAAAJgCAHQgBAGgCAEQgDADgFACQgEACgHAAQgQAAgNgCgAhfBHIAqgEIAAgcIgjAAIAAgZIAjAAIAAgTIAaAAIAAATIAkAAIAAAZIgkAAIAAAZIAmgEIAFAWQhAALgmAFgAAbA0IAAh8IAaAAIAAB8gAgGgPQg1AIgfACIgEgZIASgBIANgkIgcAAIAAgYIBrAAIAAAYIg0AAIgNAiIAggDIgIgOIAWgOQAPAXAKAaIgWAOg");
	this.shape_7.setTransform(85,12.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAxBhIgEgRIASACQAEAAABgBQACgCABgGIhjAAIgBALIgXgFIAHgtIBvAAIAAgFIhxAAIAAgSICIAAIAAAoIhxAAIgBAFIB6AAQgBAPgDAJQgDAJgEAEQgDADgGACQgFABgGAAQgHAAgKgCgAhgBVIAKgkIAIgkIAWAIQgFAfgLAugAA+AIIAAgkIgTADIgDgRIAIgBIAJgKIgRgOIAAAEIgrAAIAAgQIArAAIAAAHIAHgJIADACIALgTIAQAHIgOAWIAEADIAMgTIAQAGIgOAVIAIgEQAHANAEAPIgOAGIgCgEIgFABIAAAJIANgDQAGAMACANIgQADQgBgLgEgLIAAAbgABGgtIAKgCIgDgHgAgnAIIAAgkIgQADIgDgRIAIgBIAHgHIgTgQIAJgNIAEADIAMgWIAQAHIgPAZIACACIAMgUIARAHIgMASIAIgEQAEANADAQIgPAGIAAgEIgFABIAAAngAgbguIAIgBIgCgHgAgBAHIAAggIAoAAIAAAggAAOgGIAJAAIAAgGIgJAAgAg9ACQAEgKACgQIAOADQgBAQgFAMgAApgBQADgLABgMIAPADQgBANgEALgAgUgXIANgCQADAKABANIgOACIgDgXgAhjgbIASgTQALAHALAJIgSAWQgKgLgMgIgAAAgdIAAgOIAlAAIAAAOgAAAguIAAgOIAlAAIAAAOgAhdhPIASgTQALAHAKAJIgSAVQgJgKgMgIgAAAhSIAAgOIAnAAIAAAOg");
	this.shape_8.setTransform(60.9,12.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA0BkIAAgKIhmAAIAAAKIgZAAIAAhkICYAAIAABkgAgyBCIBmAAIAAgsIhmAAgAA7gVQheAKg1ADIgEgZIAYgBQAMgLAMgQQAJgNAOgZIAcAJQgPAWgKANQgJALgJAJIBQgGIgTgUIAWgNQAcAaASAcIgZAOg");
	this.shape_9.setTransform(36.8,12.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AguBVQAFgHAEgHIAHgSIAEgXIACgeIAYAAQAAAdgCAMQAIALAMAHIACABIAAhKIAZAAIAAAYIAsAAIAAAZIgsAAIAAAgQAOACATAAQAMAAAKgCIgJAdIgNAAQgcgBgLgCQgQgCgKgFIgMgIIgKgIQgIAUgGAJgAhMBiIAAhOIgGAFIgRgWQAIgFAQgSQALgOAHgOIAWANQgHAPgJANIAABpgAglgXQAIgLALgXQAGgTADgWIAWAGIgEAZIAHAHQAGAHAGADIgOAZQgHgFgGgIIgBgBQgLAXgIAKgABDgeIgIgJQgHANgJAKIgTgSIAKgNIAIgQIAFgRIAEgSIAYAGQgCAQgEAMIAMAMQAKAKAJAGIgPAYQgKgHgIgLgAhig3QALgJAKgMQAJgLAFgLIAXANQgHAOgLAOQgRASgGAFg");
	this.shape_10.setTransform(12.6,12.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ct1txt1, new cjs.Rectangle(0,0,269.4,25.2), null);


(lib.light_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.light_2();
	this.instance.parent = this;
	this.instance.setTransform(17.5,10.5,1,1,0,0,0,17.5,10.5);

	this.instance_1 = new lib.light_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(83.5,10.5,1,1,0,0,0,17.5,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.light_mc, new cjs.Rectangle(0,0,101,21), null);


// stage content:
(lib._468x60 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo_1();
	this.instance.parent = this;
	this.instance.setTransform(110.5,92.2,0.622,0.622,0,0,0,132.1,103);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:42,regY:14.2,x:54.4,y:36.9,alpha:0.002},0).wait(1).to({alpha:0.01},0).wait(1).to({y:36.8,alpha:0.024},0).wait(1).to({y:36.7,alpha:0.045},0).wait(1).to({y:36.5,alpha:0.077},0).wait(1).to({y:36.2,alpha:0.121},0).wait(1).to({y:35.8,alpha:0.184},0).wait(1).to({y:35.2,alpha:0.274},0).wait(1).to({y:34.4,alpha:0.409},0).wait(1).to({y:33.1,alpha:0.625},0).wait(1).to({y:31.5,alpha:0.869},0).wait(1).to({y:30.9,alpha:0.977},0).wait(1).to({regX:132.1,regY:103,x:110.5,y:85.9,alpha:1},0).wait(118));

	// ct1-txt-1
	this.instance_1 = new lib.ct1txt1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(177.3,30.7,0.622,0.622,0,0,0,134.7,12.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).wait(1).to({regX:133.6,regY:12.5,x:176.6,y:30.6,alpha:0.005},0).wait(1).to({alpha:0.022},0).wait(1).to({alpha:0.054},0).wait(1).to({alpha:0.107},0).wait(1).to({alpha:0.191},0).wait(1).to({alpha:0.33},0).wait(1).to({alpha:0.578},0).wait(1).to({alpha:0.915},0).wait(1).to({regX:134.7,regY:12.7,x:177.3,y:30.7,alpha:1},0).wait(26).to({regX:133.6,regY:12.5,x:176.6,y:30.6,alpha:0.996},0).wait(1).to({alpha:0.983},0).wait(1).to({alpha:0.959},0).wait(1).to({alpha:0.92},0).wait(1).to({alpha:0.86},0).wait(1).to({alpha:0.771},0).wait(1).to({alpha:0.631},0).wait(1).to({alpha:0.395},0).wait(1).to({alpha:0.084},0).wait(1).to({regX:134.7,regY:12.7,x:177.3,y:30.7,alpha:0},0).to({_off:true},1).wait(73));

	// ct1-txt-2
	this.instance_2 = new lib.cut2_txt();
	this.instance_2.parent = this;
	this.instance_2.setTransform(195.1,39.1,0.759,0.759,0,0,0,132.7,20.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(56).to({_off:false},0).wait(1).to({regX:80.9,regY:7.3,x:155.8,y:29,alpha:0.005},0).wait(1).to({alpha:0.022},0).wait(1).to({alpha:0.054},0).wait(1).to({alpha:0.107},0).wait(1).to({alpha:0.191},0).wait(1).to({alpha:0.33},0).wait(1).to({alpha:0.578},0).wait(1).to({alpha:0.915},0).wait(1).to({regX:132.7,regY:20.6,x:195.1,y:39.1,alpha:1},0).wait(66));

	// cta
	this.instance_3 = new lib.cta();
	this.instance_3.parent = this;
	this.instance_3.setTransform(266.6,30.3,0.881,0.881,0,0,0,42.6,12.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(83).to({_off:false},0).wait(1).to({regX:49.3,regY:12.5,x:272.5,y:30.2,alpha:0.004},0).wait(1).to({alpha:0.017},0).wait(1).to({alpha:0.041},0).wait(1).to({alpha:0.08},0).wait(1).to({alpha:0.14},0).wait(1).to({alpha:0.229},0).wait(1).to({alpha:0.369},0).wait(1).to({alpha:0.605},0).wait(1).to({alpha:0.916},0).wait(1).to({regX:42.6,regY:12.6,x:266.6,y:30.3,alpha:1},0).wait(38));

	// light
	this.instance_4 = new lib.light_mc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(389.8,32.7,0.667,0.667,0,0,0,50.6,10.5);
	this.instance_4.alpha = 0;
	this.instance_4.compositeOperation = "lighter";
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100).to({_off:false},0).to({alpha:1},3,cjs.Ease.get(1)).to({alpha:0},2,cjs.Ease.get(1)).to({_off:true},1).wait(4).to({_off:false},0).to({alpha:1},3,cjs.Ease.get(1)).to({alpha:0},2,cjs.Ease.get(1)).to({_off:true},1).wait(15));

	// cut1_bg
	this.instance_5 = new lib.cut1_bg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(83.7,83.4,0.667,0.667,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(47).to({regX:0,regY:0,x:-16.3,y:0,mode:"synched",startPosition:0},0).wait(1).to({regX:364,regY:45,x:226.3,y:30,alpha:0.996},0).wait(1).to({alpha:0.983},0).wait(1).to({alpha:0.959},0).wait(1).to({alpha:0.92},0).wait(1).to({alpha:0.86},0).wait(1).to({alpha:0.771},0).wait(1).to({alpha:0.631},0).wait(1).to({alpha:0.395},0).wait(1).to({alpha:0.084},0).wait(1).to({regX:0,regY:0,x:-16.3,y:0,alpha:0},0).to({_off:true},1).wait(73));

	// bg
	this.instance_6 = new lib._728x90();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-17,0,0.667,0.667);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(47).to({_off:false},0).wait(84));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(217.7,30,485.4,169.9);
// library properties:
lib.properties = {
	width: 468,
	height: 60,
	fps: 18,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_728x90.jpg?1492142142364", id:"_728x90"},
		{src:"images/_728x90_cut1_bg.jpg?1492142142364", id:"_728x90_cut1_bg"},
		{src:"images/light.png?1492142142364", id:"light"},
		{src:"images/light_1.png?1492142142364", id:"light_1"},
		{src:"images/logo.jpg?1492142142364", id:"logo"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;