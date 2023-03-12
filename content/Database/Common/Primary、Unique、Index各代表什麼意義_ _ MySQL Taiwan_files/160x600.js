(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 18,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/b15.png", id:"b15"},
		{src:"images/b155.png", id:"b155"},
		{src:"images/bg300x600.jpg", id:"bg300x600"},
		{src:"images/logo.jpg", id:"logo"},
		{src:"images/rena.png", id:"rena"},
		{src:"images/xxx.png", id:"xxx"}
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



(lib.b15 = function() {
	this.initialize(img.b15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,83);


(lib.b155 = function() {
	this.initialize(img.b155);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,30);


(lib.bg300x600 = function() {
	this.initialize(img.bg300x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.rena = function() {
	this.initialize(img.rena);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.xxx = function() {
	this.initialize(img.xxx);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.shape13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#E1614A","#F91508","#A10100","#D61008","#F30100","#D50100","#970000"],[0.012,0.137,0.4,0.545,0.706,0.918,1],-11,-16,0,-11,-16,122.9).s().p("AB6GuIgjgOIhVg1IhihTIhihjIhbhuIhRh1Ighg7IgPg4IACgzIATgvIAjgsIAzgpIBDgmIBSgiIBMgPIBGgEIA+AEIA7AMIA2AWIAzAdIAvAoIAtAxIAmA2IAeA3IAWA7IAOA8IAFA9IgEBAIgMBCIgpB5IgsBVIgXAdIgYAUIgZALIgZADIgRAQIgWAJIgaACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.6,-43.6,83.2,87.3);


(lib.shape12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#E1614A","#F91508","#A10100","#D61008","#F30100","#D50100","#970000"],[0.012,0.137,0.4,0.545,0.706,0.918,1],-2.8,-23.7,0,-2.8,-23.7,136.5).s().p("AgMHQIgegKIhFgpIhRhJIgogvIglg1Ighg7IgdhAIgYhDIgUhHIgPhMIgIhLIAGhEIAVg5IAkgyIAygoIBAghIBPgZIBegQIBWgEIBOAHIBDARIA6AcIAwAlIAmAyIAfA7IAVBHIAOBJIAGBHIgCBEIgJBCIgSBAIgZA8IghA4IhKBgIhCA+IgeATIgcALIgbADIgagDIgWALIgZAFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-46.6,80,93.3);


(lib.shape11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#E1614A","#F91508","#A10100","#D61008","#F30100","#D50100","#970000"],[0.012,0.137,0.4,0.545,0.706,0.918,1],2,-24.7,0,2,-24.7,138.6).s().p("AAAGyIgVgJIgYAGIgaAAIg5gRIhEgpIhNhCIglgqIgegyIgZg4IgSg+IgMhEIgFhIIADhPIAJhRIAVhGIAhg5IAtgtIA5ghIBGgVIBSgIIDBAKIBUASIBFAdIA3AnIAoAzIAbA+IANBIIgCBTIgJBPIgNBKIgUBEIgZA8IgdA1IgjAtIgmAmIhQA3IhDAfIgeAHIgbABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.1,-43.9,80.2,87.8);


(lib.shape10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#E1614A","#F91508","#A10100","#D61008","#F30100","#D50100","#970000"],[0.012,0.137,0.4,0.545,0.706,0.918,1],-0.4,-9.4,0,-0.4,-9.4,111.6).s().p("ADoFsIhEg+Ig5gpIjsh1IgtgeIgngjIgggoIgZgsIgSgzIgMg5IgEg/IAEhCIALg1IASgnIAbgXIAjgIIAtAJIBHAmIAwAhIA6AYIABAAIAHABIAWAIIBPAoIBCAvIAzA2IAlA9IAWBAIAHBHIgRCIIgUBcIgTAuIgJAHg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AgCAAIADAAIACAAg");
	this.shape_1.setTransform(1.8,-26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.5,-36.7,61.1,73.4);


(lib.shape9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8F0401").s().p("AC8DtIABAAIgMgsIgYg+Ighg9Igpg8Igxg3Ig1g2Ig8gwIhAgsIgWgsIgzhMIBnA2IBZA5IAwAqIA1A5IAXAgIAoBLIAfBaIAKAxIATBcIAZBJIgHACg");
	this.shape.setTransform(-5.4,-3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#E1614A","#F91508","#A10100","#D61008","#F30100","#D50100","#970000"],[0.012,0.137,0.4,0.545,0.706,0.918,1],6.2,6.8,0,6.2,6.8,77.2).s().p("ADSEUIgng2Ig+hBIgtgiIhTgzIgpgiIglgmIgfgpIgbgwIgWg1Ighh8IACgJIAKACIAzBNIAWAsIBAArIA8AxIA1A1IAxA3IApA8IAhA9IAYA+IAMAtg");
	this.shape_1.setTransform(-7.6,-7.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#E1614A","#F91508","#A10100","#D61008","#F30100","#D50100","#970000"],[0.012,0.137,0.4,0.545,0.706,0.918,1],15,-11.7,0,15,-11.7,57.5).s().p("AgBB0IgQgPIgQgaIgKgeIAHgCIgZhHIgUhcIBRAoIAxAiIAPARIARAhIABAlIgSAoIgRAVIgRAOIgQAFg");
	this.shape_2.setTransform(20.5,23.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC0000").s().p("AgEAAIABgBIAHADg");
	this.shape_3.setTransform(-28.1,-35.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.7,-35.3,57.5,70.7);


(lib.shape8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#E1614A","#F91508","#A10100","#D61008","#F30100","#D50100","#970000"],[0.012,0.137,0.4,0.545,0.706,0.918,1],-31.7,-20.4,0,-31.7,-20.4,61.8).s().p("ABNFPIgsgTIgrgeIgtgqIhchsIhWhyIhrijIgbgxIgBhCIAGguIAMgdIASgMIAYAEIBMAsIAzAjIAmAhIA5BBIApBEIABACIAVANIAlAZIBoA0IBoAoIBJAlIAsAgIALANIACAMIAMASIAFAUIgCAUIgJAWIgpAvIhHA1IgpAUIgrALIgrABg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AgJgEIgBgCIAVANg");
	this.shape_1.setTransform(-3.6,-8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.9,-34.4,73.9,68.9);


(lib.shape7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#E1614A","#F91508","#A10100","#D61008","#F30100","#D50100","#970000"],[0.012,0.137,0.4,0.545,0.706,0.918,1],-34.6,-22.9,0,-34.6,-22.9,58.2).s().p("AgFFDIhAgSIhCgdIhCgpIhCgwIg5g0Igvg2Igjg1IgXg0IgMg0IgBgxIAKgwIAahBIAegvIAjgeIAmgPIArAAIAvAOIA0AcIBtBQIBnBHIBlA5IDBBXIA/AlIAUARIALAOIADAPIgGAMIAHAVIgCAUIgLAWIgTAYIhDAzIhpA4Ig8AVIg9AMIg+ACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.3,-33.1,88.7,66.3);


(lib.shape6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#E1614A","#F91508","#A10100","#D61008","#F30100","#D50100","#970000"],[0.012,0.137,0.4,0.545,0.706,0.918,1],-27.6,-15.3,0,-27.6,-15.3,84.7).s().p("AhSEnIhGgUIhHgeIhHgoIhEgxIg1gwIgkgwIgUgwIgEgsIAMgsIAbgqIAogoIAtg6IAugrIAwgcIAzgQIA1gBIA3ALIA6AZIDhCIICIBJIBLAjIA2AfIAQAPIAJAOIABAPIgIAMIgPANIAAAUIgJAUIgTAXIhBAxIhpA4IhBAcIhDAWIhFALIhDAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.6,-30.5,95.2,61.1);


(lib.shape5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#E1614A","#F91508","#A10100","#D61008","#F30100","#D50100","#970000"],[0.012,0.137,0.4,0.545,0.706,0.918,1],-18,-14.7,0,-18,-14.7,201.8).s().p("AifD1Ig9gSIg7gdIg7glIg1gsIgkgrIgSgoIAAgjIARgjIAhghICVhdIBLgzIA3gZIA3gNIA2gCIA2AJIA3AVIENCaIA9AeIAOAOIgHASIg2AbIgJARIgrApIhLAyIioBaIhAAXIg9AMIg+ABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.6,-25.5,89.2,51);


(lib.shape4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#880000").s().p("Ai1BGQBhhABmgzQAmgTArgGIBTAmIhWAJQh7ATh0A5IglASg");
	this.shape.setTransform(22.4,-1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#E1614A","#F91508","#A10100","#D61008","#F30100","#D50100","#970000"],[0.012,0.137,0.4,0.545,0.706,0.918,1],1.5,-14.6,0,1.5,-14.6,102.2).s().p("AjQCoQhvgNgshjQALgaATgRQCYiADAgqQDAgqChBtQgsAHglASQhoA1hhA/IgDACIgIAFQguAggvAbQgwAcg0AQQgeAIgfAAIgZgBg");
	this.shape_1.setTransform(-4.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("AgPAHIADgDIABABIAjgQIgvAXg");
	this.shape_2.setTransform(5.5,4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.6,-17,81.2,34);


(lib.shape3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#880000").s().p("AhlBAIgDgOIBEgyQAcgQAbgQIBWgoIhSBNIg7A1IgYANIggACg");
	this.shape.setTransform(-27.8,8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E45741").s().p("AiDADQA0gNA1gIIBngRIBngBIA+AEIg+AFIhxAZQhIAThLALIihAJQA3gTA3gPg");
	this.shape_1.setTransform(1.8,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#E1614A","#F91508","#A10100","#D61008","#F30100","#D50100","#970000"],[0.012,0.137,0.4,0.545,0.706,0.918,1],8.8,13.3,0,8.8,13.3,92.3).s().p("AlcCRIA+g1IBShPQA9gzBCguQAsgfAygSQAagJAcgEIAfABIAgAKQAhAOAdAWQBCA0A7A7IAcAjIAAAJIgGADIh1gaIg+gEIhnABIhnARQg1AIg0APQg3APg3ATIhaArg");
	this.shape_2.setTransform(3.4,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC0000").s().p("AALgFIABABIgXAKg");
	this.shape_3.setTransform(-32.7,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.3,-15.4,76.7,30.8);


(lib.shape2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#E1614A","#F91508","#A10100","#D61008","#F30100","#D50100","#970000"],[0.012,0.137,0.4,0.545,0.706,0.918,1],-2.2,22,0,-2.2,22,89).s().p("AAJDvQiZgLiXgtQgngMgfgZQgMgJADgPQAJguAWgqQBFh7BohgQBKhFBeAQQAxgJAnAcQBxBQBHB5QAxBQAoBYQAMAZAFAeQgeAMgfAFQhxAUhwAAQgpAAgogDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.6,-24.2,75.2,48.5);


(lib.shape1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#E1614A","#F91508","#A10100","#D61008","#F30100","#D50100","#970000"],[0.012,0.137,0.4,0.545,0.706,0.918,1],2.6,26.5,0,2.6,26.5,107.4).s().p("AC4FsQiVgfiKg5Qh9g0hShqQgogyADg9QABgqAOgoQARgwAggoQA5hJBBhCQBLhOBjAHQAZAGAYAKQAcAKAUAUQBiBnAwCLQApB5AiB+QAVBOgEBQQgCAyg3AEIgNABQgwAAgugLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.9,-37.5,69.8,75);


(lib.shape103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABcB3QgMgLgLgLQgNANgPAKIgiATIgSgVIgEAGIgDAHIgegHIAIgSIAIgSIgQACIgLg7IAbgIIAHAuQALgiAGgiQAGghAAgiIAAgcIgeAAIAAgdICIAAQADgBAEAEQADADABAFIgGAdIgHAhIAQAAIASANQgDAjgMAZQgLAbgUAcQAMALAMAJQANALAOAJIgXAVIgagUgAAHA5QgIAlgIAVIAegTQAQgKAOgMQgNgRgGgTQgIgTgFgTQAAATgMAmgAA3APQAGAUALASQALgPAIgWQAIgSAFgTIg8AAQAEATAHARgAAYgyIAwAAIAJgqQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAABQAAAAgBAAIgyAAgAhZCIIAAh8IgnAHIgEgPIgDgNIAVgCIAKgLQAEgIAGgEQgLgLgMgJQgLgIgMgEIAOgcIAHAEQAFADACADIAOgbIANgbIAaAPIgQAbIgRAcQAEAAADAEIAHAFIAJgUIAKgUIAbAJQgEARgOAUIgZAjIAXgDQgDgDAAgEIgCgGIAZgKIALAeIAKAaIgcAHIgCgOIgVACIAACBgAiJBzIAIgrQAEgaABgSIAcAEIgIAtIgIAtg");
	this.shape.setTransform(14.1,13.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.3,27.8);


(lib.shape102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag0BiQgUgRgEgdIAsgFQACAPAJAJQAJAJAMAAQAMgBAKgLQAKgLgBgWQABgWgKgKQgJgJgOAAQgTAAgPAPIgjgFIAWh2IBzAAIAAApIhRAAIgHAnQAOgHAOAAQAdAAAUAVQAVAUAAAiQAAAcgRAWQgWAfgmAAQggAAgUgRg");
	this.shape.setTransform(7.7,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.5,23.1);


(lib.shape101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAGBzIAAikQgWAXghAKIAAgoQARgFAVgQQASgQAHgVIAkAAIAADlg");
	this.shape.setTransform(5.1,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.1,23.1);


(lib.shape100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABUCKQgFgCgEAAIgEgiQAEADAGABQAFADAFAAIADgFIACgFIAAgkIgcAAIAABEIgbAAIAAhEIgcAAIAABEIgcAAIAAjBQAAgFADgEQADgCAGAAIAsAAIAAgMIg1AAIAAgbIA1AAIAAgVIAbAAIAAAVIAaAAIgFgHIgFgHIAXgOQAJAMAGAOQAIAMAHAPIgXAMIgEgKIgqAAIAAAMIAuAAQAFAAADACQADAEABAFIAACvQgBAOgIAHQgKAHgNAAIgKgDgABEAjIAcAAIAAgcIgcAAgAANAjIAcAAIAAgcIgcAAgABEgSIAcAAIAAgZIgCAAIgaAAgAANgSIAcAAIAAgZIgZAAIgDAAgAhaCGIAAgnIguAAIAAgcIAuAAIAAgQIgnAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAh2QAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAnAAIAAgOIgsAAIAAgbIAsAAIAAgXIAbAAIAAAXIAnAAIAAAbIgnAAIAAAOIAlAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAQAAABAAAAIAAB2QAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIglAAIAAAQIAnAAIAAAcIgnAAIAAAngAg/AcIAOAAIAAgCIAAgXIgOAAgAhoAcIAOAAIAAgZIgOAAIAAAXIgCAAgAg/gXIAOAAIAAgXIAAgCIgOAAgAhoguIAAAXIAOAAIAAgZIgOAAIgCAAg");
	this.shape.setTransform(13.8,14.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.6,28.3);


(lib.shape99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AivFHQhIg4gKh0IAAgMICiAAIABAKQACAhAUAcQATAcAxACQBbgGAEh5QABgugWgkQgWgjgygCQgugIgoA1IgDAGIiRgHIA1mmIGdAAIAACPIklAAIgUB/QAhgaBQgDQBZAABEA/QBEA+ADB5QACBkg+BUQg/BViTAFIgBAAQhaAAhIg2g");
	this.shape.setTransform(25.9,38.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.8,76.4);


(lib.shape98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAEF5IAAn3IiqAAIAAh7IAfAAQBpgEAegqQAfgpgCgfIABgKICJAAIAALyg");
	this.shape.setTransform(16.7,37.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.5,75.6);


(lib.shape97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.b15, null, new cjs.Matrix2D(1,0,0,1,-47.1,-41)).s().p("AnWGaIAAszIOtAAIAAMzg");
	this.shape.setTransform(47.2,41.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94.3,82.1);


(lib.shape95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2B9IAAhGIhHAAIAAhtIBHAAIAAhHIBtAAIAABHIBGAAIAABtIhGAAIAABGg");
	this.shape.setTransform(12.6,12.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.2,25.2);


(lib.shape94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.b155, null, new cjs.Matrix2D(1,0,0,1,-14.9,-14.9)).s().p("AiTCUIAAknIEnAAIAAEng");
	this.shape.setTransform(14.9,14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29.8,29.8);


(lib.shape92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AJ4J4IzvAAIAAzvITvAAg");
	this.shape.setTransform(63.8,63.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,128.6,128.6);


(lib.shape91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ap3CqIAAlTITvAAIAAFTg");
	this.shape.setTransform(63.3,17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126.6,34.1);


(lib.shape90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F29100").s().p("Ap3J4IAAzvITvAAIAATvg");
	this.shape.setTransform(63.3,63.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126.6,126.6);


(lib.元件21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.xxx, null, new cjs.Matrix2D(10.333,0,0,1,-1610.9,-265.5)).s().p("AiaCQIAAkgIE1AAIAAEgg");
	this.shape.setTransform(-3.1,263);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.xxx, null, new cjs.Matrix2D(1,0,0,1,-246.7,-265.5)).s().p("At7CQIAAkgIb3AAIAAEgg");
	this.shape_1.setTransform(101.7,263);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.6,248.5,209.6,29);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.xxx, null, new cjs.Matrix2D(1,0,0,1,-209.2,-93)).s().p("Aj5OYIAA8vIHzAAIAAcvg");
	this.shape.setTransform(25,92);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50.1,184.1);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.logo();
	this.instance.setTransform(54,85,0.542,0.542);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhTQA16MAAAhrzMCmhAAAMAAABrzg");
	this.shape.setTransform(168.5,146.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-364.4,-198.9,1065.9,690.1);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.xxx, null, new cjs.Matrix2D(1,0,0,1,-246.6,-218)).s().p("At9FJIAAqRIb7AAIAAKRg");
	this.shape.setTransform(89.4,33);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178.9,66);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.xxx, null, new cjs.Matrix2D(1,0,0,1,-58.1,-38)).s().p("AjlFxIAAriIHKAAIAALig");
	this.shape.setTransform(23,37);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46,74);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.xxx, null, new cjs.Matrix2D(1,0,0,1,-62.6,-179.1)).s().p("AkSDbIAAm1IIkAAIAAG1g");
	this.shape.setTransform(27.5,21.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55,43.8);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.xxx, null, new cjs.Matrix2D(1,0,0,1,-290.7,-142.6)).s().p("AnEGoIAAtPIOJAAIAANPg");
	this.shape.setTransform(45.3,42.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90.7,85);


(lib.sprite14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape1("synched",0);
	this.instance.setTransform(-4.2,-2.7,0.443,0.443);

	this.instance_1 = new lib.shape2("synched",0);
	this.instance_1.setTransform(-4.2,-2.7,0.443,0.443);

	this.instance_2 = new lib.shape3("synched",0);
	this.instance_2.setTransform(-4.2,-2.7,0.443,0.443);
	this.instance_2.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 0, 0, 0, 0)];
	this.instance_2.cache(-40,-17,81,35);

	this.instance_3 = new lib.shape4("synched",0);
	this.instance_3.setTransform(-4.2,-2.7,0.443,0.443);
	this.instance_3.filters = [new cjs.ColorFilter(0.6015625, 0.6015625, 0.6015625, 1, 0, 0, 0, 0)];
	this.instance_3.cache(-43,-19,85,38);

	this.instance_4 = new lib.shape5("synched",0);
	this.instance_4.setTransform(-4.2,-2.7,0.443,0.443);
	this.instance_4.filters = [new cjs.ColorFilter(0.62109375, 0.62109375, 0.62109375, 1, 0, 0, 0, 0)];
	this.instance_4.cache(-47,-27,93,55);

	this.instance_5 = new lib.shape6("synched",0);
	this.instance_5.setTransform(-4.2,-2.7,0.443,0.443);
	this.instance_5.filters = [new cjs.ColorFilter(0.73828125, 0.73828125, 0.73828125, 1, 0, 0, 0, 0)];
	this.instance_5.cache(-50,-32,99,65);

	this.instance_6 = new lib.shape7("synched",0);
	this.instance_6.setTransform(-4.2,-2.7,0.443,0.443);
	this.instance_6.filters = [new cjs.ColorFilter(0.83984375, 0.83984375, 0.83984375, 1, 0, 0, 0, 0)];
	this.instance_6.cache(-46,-35,93,70);

	this.instance_7 = new lib.shape8("synched",0);
	this.instance_7.setTransform(-4.2,-2.7,0.443,0.443);

	this.instance_8 = new lib.shape9("synched",0);
	this.instance_8.setTransform(-4.2,-2.7,0.443,0.443);

	this.instance_9 = new lib.shape10("synched",0);
	this.instance_9.setTransform(-4.2,-2.7,0.443,0.443);

	this.instance_10 = new lib.shape11("synched",0);
	this.instance_10.setTransform(-4.2,-2.7,0.443,0.443,7.3);
	this.instance_10.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 77, 77, 77, 0)];
	this.instance_10.cache(-42,-46,84,92);

	this.instance_11 = new lib.shape12("synched",0);
	this.instance_11.setTransform(-4.2,-2.7,0.443,0.443,-15);
	this.instance_11.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 51, 51, 51, 0)];
	this.instance_11.cache(-42,-49,84,97);

	this.instance_12 = new lib.shape13("synched",0);
	this.instance_12.setTransform(-4.2,-2.7,0.443,0.443);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.7,-19.3,30.9,33.2);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.元件21();
	this.instance.setTransform(225.9,15.5,1,1,0,0,0,112.5,6.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.512},8).to({alpha:1},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(94.8,257.7,209.6,29);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件5();
	this.instance.setTransform(23,37,1,1,0,0,0,23,37);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:14,y:24.5,alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46,74);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件12();
	this.instance.setTransform(110,58.1,1,1,0,0,0,45.3,42.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.xxx, null, new cjs.Matrix2D(1,0,0,1,-285.1,-93)).s().p("An8OYIAA8vIP4AAIAAPdIuIAAIAANSg");
	this.shape.setTransform(50.9,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155.3,184.1);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件6();
	this.instance.setTransform(89.4,33,1,1,0,0,0,89.4,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:81.4},4).to({x:89.4},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178.9,66);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件4();
	this.instance.setTransform(27.5,41.1,1,1,0,0,0,27.5,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.359},4).to({alpha:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,19.2,55,43.8);


(lib._15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.shape103("synched",0);
	this.instance.setTransform(82.9,95.7);

	this.instance_1 = new lib.shape102("synched",0);
	this.instance_1.setTransform(62.8,98.7);

	this.instance_2 = new lib.shape101("synched",0);
	this.instance_2.setTransform(46.1,98.3);

	this.instance_3 = new lib.shape100("synched",0);
	this.instance_3.setTransform(15.5,95.7);

	this.instance_4 = new lib.shape99("synched",0);
	this.instance_4.setTransform(43.1,8.4);

	this.instance_5 = new lib.shape98("synched",0);
	this.instance_5.setTransform(5.1,7.2);

	this.instance_6 = new lib.shape97("synched",0);
	this.instance_6.setTransform(3.8,4);
	this.instance_6.alpha = 0.75;

	this.instance_7 = new lib.shape95("synched",0);
	this.instance_7.setTransform(96.9,6.4);

	this.instance_8 = new lib.shape94("synched",0);
	this.instance_8.setTransform(95.7,3.2);
	this.instance_8.alpha = 0.75;

	this.instance_9 = new lib.shape92("synched",0);
	this.instance_9.setTransform(-0.5,-0.5);

	this.instance_10 = new lib.shape91("synched",0);
	this.instance_10.setTransform(0,92.5);

	this.instance_11 = new lib.shape90("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,128.6,128.6);


(lib.补间1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件3();
	this.instance.setTransform(55.5,312.6,1,1,0,0,0,27.5,31.5);

	this.instance_1 = new lib.元件3();
	this.instance_1.setTransform(27.5,109.5,1,1,0,0,0,27.5,31.5);

	this.instance_2 = new lib.元件3();
	this.instance_2.setTransform(-80.5,147.6,1,1,0,0,0,27.5,31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 图层 1
	this.instance_3 = new lib.rena();
	this.instance_3.setTransform(-157,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157,-170,300,600);


(lib.sprite15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite14();
	this.instance.setTransform(-0.9,-4.2,0.762,0.762);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,-18.9,23.6,25.3);


(lib.补间3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件10();
	this.instance.setTransform(106.1,1,1,1,0,0,0,50.9,92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(55.2,-91,155.3,184.1);


(lib.D15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 15
	this.instance = new lib._15("synched",0);
	this.instance.setTransform(12.5,12.5,0.198,0.198,0,0,0,63.3,63.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,27,27);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间1("synched",0);
	this.instance.setTransform(168.1,160.1,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.2,scaleY:0.99,y:164.2},6).to({regY:0.1,scaleY:1,y:160.1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11,-9.9,300,600);


(lib.sprite16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite15();
	this.instance.setTransform(37.9,7.2,0.382,0.382,158.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.38,scaleY:0.38,guide:{path:[37.8,7.2,5.7,-13.3,-27.7,-25.4,-27.7,-25.4,-27.8,-25.4]},alpha:0.891},17).to({scaleX:0.38,scaleY:0.38,guide:{path:[-27.7,-25.5,-31.8,-26.9,-36,-28.3,-36,-28.3,-36,-28.3]},alpha:1},2).to({scaleX:0.38,scaleY:0.38,guide:{path:[-36.3,-28.4,-73.4,-40.6,-112.4,-42.4,-191.2,-46,-268.1,-48,-345.1,-50.1,-415.9,-70.8,-451.2,-81.3,-482.7,-106.6,-482.7,-106.6,-482.8,-106.6]}},109).to({scaleX:0.38,scaleY:0.38,guide:{path:[-482.7,-106.6,-485.9,-109.2,-489.1,-112,-489.2,-112,-489.2,-112]}},2).to({rotation:128.2,guide:{path:[-489.2,-112.1,-517.2,-136.2,-542,-172.6]},alpha:0},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.2,2.7,12,12.3);


(lib.sprite17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_115 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(115).call(this.frame_115).wait(1));

	// Layer 5
	this.instance = new lib.sprite16();
	this.instance.setTransform(-63.7,62.3,1.852,1.852,0,-151.1,28.9);
	this.instance.alpha = 0.43;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(97));

	// Layer 3
	this.instance_1 = new lib.sprite16();
	this.instance_1.setTransform(-93.2,34.2,0.817,0.817);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).wait(109));

	// Layer 1
	this.instance_2 = new lib.sprite16();
	this.instance_2.setTransform(-122.9,56.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.6,59.5,12,12.3);


(lib.sprite18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite17();
	this.instance.setTransform(85.4,-40.2,0.969,0.969,-16.2);
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.8,36.7,12.7,12.8);


(lib.sprite19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// Layer 3
	this.instance = new lib.sprite18();
	this.instance.setTransform(0.1,-16.5,0.999,0.999,0,15.3,-164.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).wait(51));

	// Layer 1
	this.instance_1 = new lib.sprite18();
	this.instance_1.setTransform(112.6,49.1,0.999,0.999,0,15.3,-164.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(69.4,77.5,12.7,12.6);


(lib.hh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sprite 19
	this.instance = new lib.sprite19();
	this.instance.setTransform(223.2,-83.9,0.702,0.702,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// sprite 19
	this.instance_1 = new lib.sprite19();
	this.instance_1.setTransform(203.6,-74.5,1.38,1.38,0,-15,165);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// sprite 19
	this.instance_2 = new lib.sprite19();
	this.instance_2.setTransform(65.6,-52.5,0.702,0.702,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// sprite 19
	this.instance_3 = new lib.sprite19();
	this.instance_3.setTransform(117,-66.3,1.38,1.38,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,-29.3,170.8,101.6);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.a=3;
	}
	this.frame_176 = function() {
		stage.canvas.a--;
		if(stage.canvas.a<=0){
			this.stop();
		}else{
			this.gotoAndPlay(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(176).call(this.frame_176).wait(1));

	// 18
	this.instance = new lib.元件13();
	this.instance.setTransform(139.4,328.8,1,1,0,0,0,232.6,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(176).to({mode:"single",startPosition:0},0).wait(1));

	// feix
	this.instance_1 = new lib.hh();
	this.instance_1.setTransform(288.1,103.7,1.183,1.183,0,0,0,76.4,17.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},176).wait(1));

	// anniu
	this.instance_2 = new lib.元件7();
	this.instance_2.setTransform(104.6,405.1,1,1,0,0,0,89.4,33);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).to({x:73.6,alpha:1},8).to({x:85.6},4).wait(139).to({mode:"single",startPosition:0},0).wait(1));

	// love
	this.instance_3 = new lib.元件11();
	this.instance_3.setTransform(0.9,130.7,1,1,0,0,0,23,37);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).wait(151).to({mode:"single",startPosition:0},0).wait(1));

	// 图层 2
	this.instance_4 = new lib.元件9();
	this.instance_4.setTransform(23.6,169.1,1,1,0,0,0,25,92);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).to({y:178.1},6).wait(153));

	// 图层 4
	this.instance_5 = new lib.补间3("synched",0);
	this.instance_5.setTransform(-23.1,77.5,0.852,0.852);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({y:81.8,alpha:1},10).wait(159));

	// 图层 7
	this.instance_6 = new lib.元件2();
	this.instance_6.setTransform(102.7,176.3,0.906,0.906,0,0,0,168,150.1);
	this.instance_6.alpha = 0;

	this.instance_7 = new lib.元件3("single",0);
	this.instance_7.setTransform(156.6,468.4,0.906,0.906,0,0,0,27.6,31.6);

	this.instance_8 = new lib.元件3("single",0);
	this.instance_8.setTransform(131.1,284.5,0.906,0.906,0,0,0,27.5,31.6);

	this.instance_9 = new lib.元件3("single",0);
	this.instance_9.setTransform(33.4,318.9,0.906,0.906,0,0,0,27.6,31.6);

	this.instance_10 = new lib.rena();
	this.instance_10.setTransform(-36,31,0.906,0.906);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6}]},7).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]},169).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:106.3,alpha:1},7).to({_off:true},169).wait(1));

	// 图层 5
	this.instance_11 = new lib.bg300x600();
	this.instance_11.setTransform(-51,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(177));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,0,454.9,600);


// stage content:
(lib._160x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var myDate = new Date().getTime();
		var toDate=new Date('2017/05/19 12:30:00').getTime();
		if(myDate>toDate){//年月日时分
			this.black.visible = false;
		}else{
			this.black.visible = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// D15
	this.instance = new lib.D15();
	this.instance.setTransform(12.5,587.5,1,1,0,0,0,12.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.元件1();
	this.instance_1.setTransform(239,704.9,1,1,0,0,0,48,21.4);
	this.instance_1.alpha = 0.879;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgMfgu3IY/AAMAAABdvI4/AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 图层 4
	this.black = new lib.元件8();
	this.black.setTransform(80,423.1,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.black).wait(1));

	// 图层 1
	this.instance_2 = new lib.main();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-354.4,224.1,1065.9,690.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;