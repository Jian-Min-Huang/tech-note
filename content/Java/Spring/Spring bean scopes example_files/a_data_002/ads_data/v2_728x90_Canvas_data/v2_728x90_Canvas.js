(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 18,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/v2_728x90_Canvas_atlas_.png?1469607587907", id:"v2_728x90_Canvas_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"v2_728x90_Canvas_atlas_", frames: [[0,0,241,67],[0,69,28,28]]}
];


// symbols:



(lib.car = function() {
	this.spriteSheet = ss["v2_728x90_Canvas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.car_wheel = function() {
	this.spriteSheet = ss["v2_728x90_Canvas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkgCqIAAlTIJBAAIAAFTg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.price = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CF001B").s().p("Ag5CBQgTgJgNgNIAignQAHAIALAGQALAEAMAAQANABAJgHQAMgIAHgRQAHgRABgdQgHAIgIAGQgJAHgKACQgHAEgIAAQgXgBgRgIQgSgKgKgRQgKgSgBgdQABgdAMgTQAMgVAUgLQATgKAZgBQARAAASAIQASAHAOARQAOAQAIAaQAJAaAAAkQAAAjgJAaQgJAbgPASQgPARgTAJQgSAIgTAAQgbAAgUgJgAAQgNQAKgGAIgNQgDgXgGgMQgGgMgIgGQgHgFgHABQgNgBgJAKQgJAKAAAXQAAAWAJAJQAJAJAOAAQAIAAAKgGg");
	this.shape.setTransform(122,23.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(29).to({_off:false},0).wait(1));

	// 0
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CF001B").s().p("AgwB6QgWgPgMggQgLgfAAgsQAAguALgeQAMgfAWgPQAVgQAbAAQAcAAAVAQQAVAQAMAeQAMAfAAAtQAAAsgMAfQgMAggVAPQgVARgcgBQgbABgVgRgAgQhSQgIAHgEAUQgFATAAAkQAAAjAFATQAEAUAIAIQAIAHAIAAQAJAAAIgHQAHgIAFgUQAFgTAAgjQAAgkgFgTQgFgUgHgHQgIgGgJAAIAAAAQgJAAgHAGg");
	this.shape_1.setTransform(122.2,23.1);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(25).to({_off:false},0).to({_off:true},4).wait(1));

	// 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CF001B").s().p("AhTCGIAAg0IA5AAIAAiXIgyAAIAAgoQAWgEAPgFQAQgGAOgIIAtAAIAADWIAwAAIAAA0g");
	this.shape_2.setTransform(122.5,23.1);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(21).to({_off:false},0).to({_off:true},4).wait(5));

	// 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CF001B").s().p("AhaCIIAAglQAigeAZgaQAZgbAMgVQAOgXAAgTQAAgSgKgKQgJgKgOAAQgOAAgKAIQgMAHgJALIgjgjQANgOANgIQANgKAPgFQAQgEATAAQAYAAATALQAVAKALASQALAUAAAZQgBAYgLAXQgMAWgSAYQgSAXgVAUIAXgCIAVgBIAxAAIAAA2g");
	this.shape_3.setTransform(121.9,22.9);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(17).to({_off:false},0).to({_off:true},4).wait(9));

	// 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CF001B").s().p("Ag4CBQgYgKgOgSIAegoQAMALAOAIQAOAGAPAAQASABAKgIQAMgHAAgQQAAgLgGgIQgFgJgPgEQgNgEgcAAIAAgrQAXgBANgEQALgEAGgJQAFgHAAgLQAAgOgHgHQgJgHgNAAQgNAAgLAFQgLAHgMAKIghgnQATgQAVgJQAUgIAYgBQAaAAAUAJQAVAIALARQALARABAXQgBAVgKAOQgLAQgWAIIAAACQAXAFAOARQAPAQAAAZQAAAZgOASQgNARgXAJQgWAKgZgBQggABgWgKg");
	this.shape_4.setTransform(121.6,23.1);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(14).to({_off:false},0).to({_off:true},3).wait(13));

	// 4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CF001B").s().p("AALCGIAAhEIhvAAIAAgsIBeiaIBNAAIAACWIAeAAIAAAwIgeAAIAABEgAABg4IgJAXIgfAzIAyAAIAAgmIAAgTIABgUIABgUIgBAAIgLAXg");
	this.shape_5.setTransform(122.1,23.1);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(11).to({_off:false},0).to({_off:true},3).wait(16));

	// 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CF001B").s().p("Ag3B9QgXgKgQgQIAdgoQAMAKAOAIQANAHAQAAQASAAALgKQALgKABgWQgBgUgKgKQgLgLgQAAIgMABIgMAEIgNAIIgdgRIAHiEICVAAIAAA1IheAAIgEAuIAOgEIAMgBQAXAAATAJQATAIALAUQALAQABAdQgBAegNAWQgNAUgWAMQgWALgYAAQgggBgXgKg");
	this.shape_6.setTransform(121.6,23.4);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(8).to({_off:false},0).to({_off:true},3).wait(19));

	// 6
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CF001B").s().p("AgeCDQgRgIgPgQQgOgRgIgaQgJgaAAgkQABgvAPgfQAPggAYgOQAYgPAagBQAaABAUAJQATAJANAOIgiAlQgHgHgLgFQgLgGgLAAQgOAAgJAHQgLAIgIAQQgHASgBAdQAHgJAJgGQAJgFAJgEQAHgCAIAAQAXAAARAJQASAIAKARQAKASABAeQgBAcgMAVQgMAUgUALQgTALgZgBQgRAAgSgHgAADAJQgIgBgKAGQgKAFgIANQADAXAGAMQAGAOAIAEQAHAGAHAAQANAAAJgKQAIgLABgWQgBgWgIgJQgJgJgNAAIgBABg");
	this.shape_7.setTransform(122.3,23.1);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(6).to({_off:false},0).to({_off:true},2).wait(22));

	// 7
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CF001B").s().p("AgsCGQACgtAHgjQAGgjAOgfQAPghAXgiIhxAAIAAg1IC1AAIAAAmQgXAcgOAZQgOAZgHAYQgHAZgDAfQgDAfgCAng");
	this.shape_8.setTransform(122.2,23.1);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(4).to({_off:false},0).to({_off:true},2).wait(24));

	// 8
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CF001B").s().p("AguCBQgVgIgMgRQgMgQAAgVQAAgZANgQQAMgRATgJIAAgBQgQgLgJgQQgKgQAAgVQAAgXALgQQALgQATgJQATgIAXgBQAYABASAIQASAKAKAPQAKAQAAAWQAAATgKAPQgJAQgPAKIAAABQAUAIAMASQANASAAAbQAAAUgLARQgMAQgVAKQgVAJgbAAQgaABgUgKgAgfAjQgFALAAANQAAALAFAIQAFAIAJAEQAJAEAIAAQAOAAAKgIQAJgHAAgPQAAgMgGgIQgHgIgMgHIgagOQgJAJgEALgAgShWQgHAGgBAPQAAAPAMAKQALALASAHQAIgJADgKQADgKAAgKQAAgPgHgJQgIgIgOAAQgKAAgIAHg");
	this.shape_9.setTransform(122.2,23.1);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(2).to({_off:false},0).to({_off:true},2).wait(26));

	// 9
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CF001B").s().p("Ag5CBQgTgJgNgNIAignQAHAIALAGQALAEAMAAQANABAJgHQAMgIAHgRQAHgRABgdQgHAIgIAGQgJAHgKACQgHAEgIAAQgXgBgRgIQgSgKgKgRQgKgSgBgdQABgdAMgTQAMgVAUgLQATgKAZgBQARAAASAIQASAHAOARQAOAQAIAaQAJAaAAAkQAAAjgJAaQgJAbgPASQgPARgTAJQgSAIgTAAQgbAAgUgJgAAQgNQAKgGAIgNQgDgXgGgMQgGgMgIgGQgHgFgHABQgNgBgJAKQgJAKAAAXQAAAWAJAJQAJAJAOAAQAIAAAKgGg");
	this.shape_10.setTransform(122,23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).to({_off:true},2).wait(28));

	// 圖層 12
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CF001B").s().p("Ag5CBQgTgJgNgNIAignQAHAIALAGQALAEAMAAQANABAJgHQAMgIAHgRQAHgRABgdQgHAIgIAGQgJAHgKACQgHAEgIAAQgXgBgRgIQgSgKgKgRQgKgSgBgdQABgdAMgTQAMgVAUgLQATgKAZgBQARAAASAIQASAHAOARQAOAQAIAaQAJAaAAAkQAAAjgJAaQgJAbgPASQgPARgTAJQgSAIgTAAQgbAAgUgJgAAQgNQAKgGAIgNQgDgXgGgMQgGgMgIgGQgHgFgHABQgNgBgJAKQgJAKAAAXQAAAWAJAJQAJAJAOAAQAIAAAKgGg");
	this.shape_11.setTransform(94.7,23.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CF001B").s().p("Ag4CBQgYgKgOgSIAdgoQANALAOAIQAOAGAPAAQASABALgIQAKgHABgQQAAgLgGgIQgFgJgPgEQgNgEgcAAIAAgrQAXgBANgEQALgEAGgJQAFgHAAgLQAAgOgIgHQgHgHgNAAQgNAAgMAFQgLAHgMAKIgggnQASgQAUgJQAVgIAYgBQAZAAAVAJQAUAIAMARQALARAAAXQABAVgLAOQgLAQgWAIIAAACQAXAFAOARQAPAQAAAZQAAAZgOASQgNARgWAJQgXAKgZgBQggABgWgKg");
	this.shape_12.setTransform(67,23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-7.3,135.3,57.3);


(lib.peel_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("ADfChQhngxg9AEQh2AKhBAeQgVAKgMALIgJAJIiTmMQDaBoDhCnQByBWBGBAQgngZg0gZg");
	this.shape.setTransform(31.5,21.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,42.3);


(lib.nummber_ROLL2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAUCEIAAhHIhwAAIAAgcIBnikIAxAAIAACfIAhAAIAAAhIghAAIAABHgAALhFIgLATIgyBOIBGAAIAAhDIABgRIABgSIABgQIgCAAIgKAVg");
	this.shape.setTransform(12.1,-15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzB+QgWgKgNgPIAUgbQAMAMAPAIQAPAJAVAAQAUAAAOgMQAOgLABgVQAAgPgIgLQgHgKgRgGQgPgGgeAAIAAgdQAaAAANgGQAQgGAGgKQAHgLAAgOQgBgRgLgLQgKgKgSAAQgPAAgNAHQgNAHgLALIgWgaQAQgOATgJQASgJAXAAQAWAAATAIQARAIAKAPQALAQAAAWQAAAXgMAPQgMAQgWAIIAAACQAQADAMAHQANAJAGAOQAIANAAASQAAAYgMARQgMARgUAJQgUAJgXAAQgfgBgUgKg");
	this.shape_1.setTransform(11.8,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-44,24.7,93.9);


(lib.numbers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsB6QgTgQgLgeQgKgfAAgtQAAgtAKgeQALgfATgPQATgPAZAAQAZAAAUAPQATAPAKAfQALAeAAAtQAAAtgLAfQgKAegTAQQgUAPgZAAQgZAAgTgPgAgXhdQgKAKgGAXQgGAXAAAlQAAAlAGAXQAGAYAKAKQALAKAMAAQANAAAKgKQALgKAFgYQAGgXAAglQAAglgGgXQgFgXgLgKQgKgKgNAAQgMAAgLAKg");
	this.shape.setTransform(12.3,-369.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMCJQgXAAgQgIQgRgIgLgMIAWgaQAIAJALAGQAMAFAMAAQAPAAANgJQAOgKAJgWQAIgXACglQgMAOgQAIQgPAIgOABQgWAAgQgKQgRgJgJgQQgKgTAAgcQABgaAKgUQALgTASgLQARgLAWAAQAYAAAUAOQAVAOAMAdQANAcAAAsQAAAygOAgQgOAggWAPQgWAPgXAAIgCAAgAgihZQgLAOAAAaQAAAaALAOQALAMAVAAQAKAAANgGQANgIAMgRQgDgngOgSQgOgTgUAAQgRAAgMAPg");
	this.shape_1.setTransform(12.1,-330.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrB/QgTgJgLgQQgMgPABgVQAAgSAGgNQAHgNALgLQALgKAMgEIAAgCQgPgLgKgPQgKgPAAgVQgBgVAKgPQAKgPARgIQARgJAUAAQAYAAAQAJQAQAIAKAQQAJAQAAAVQAAANgFAMQgFAMgIAKQgIAJgJAGIAAACQAMAFAKAJQAKAKAHANQAFANABASQAAAUgMAPQgKAQgTAJQgUAKgZgBQgXABgUgKgAgnAeQgJAPABARQgBAOAHAJQAGAKAMAGQAMAGALAAQAWAAAMgLQAMgLAAgTQAAgPgJgMQgIgKgPgIQgOgHgRgHQgNAJgJAOgAgZhfQgKAKAAASQAAAOAHALQAIAJAMAHQAKAHAPAFQAMgLAGgMQAGgMAAgNQAAgUgKgLQgLgMgUAAQgOAAgLAKg");
	this.shape_2.setTransform(12.3,-290.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggCEQACgwAHgnQAIgnAPggQANgjAZgjIh6AAIAAgjICpAAIAAAaQgXAcgPAbQgOAbgIAaQgIAbgEAfQgDAhgBAmg");
	this.shape_3.setTransform(12.3,-251.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmB7QgVgOgMgeQgMgdgBgtQABgxAOgfQAOggAWgOQAXgPAYAAQAXABAQAIQAQAIAMAMIgXAZQgIgJgLgFQgLgGgLAAQgRAAgNAJQgOAKgIAWQgJAXgBAlQAMgOAPgIQAQgIAMAAQAXAAARAJQAQAJAKARQAJASAAAcQAAAbgLATQgLAUgRAKQgSALgWAAQgYAAgUgOgAgUAEQgMAHgMARQADAnANATQAOAUATgBQASAAAMgOQALgPAAgaQAAgagLgNQgLgMgVAAQgKAAgNAFg");
	this.shape_4.setTransform(12.4,-212.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglCBQgQgFgMgHQgMgJgKgJIAUgbQAMAMAOAIQAQAIAUABQANAAAMgHQAMgHAHgNQAHgMAAgSQgBgbgNgOQgOgMgVAAQgMAAgJADQgKAEgLAGIgUgMIAIh9ICEAAIAAAjIhgAAIgHBEQAJgFAJgCQAIgDAJAAQAWAAASAJQATAJAKATQALARABAdQgBAdgMAUQgNAVgUALQgUAKgWAAQgVAAgQgFg");
	this.shape_5.setTransform(11.8,-172.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUCEIAAhIIhwAAIAAgbIBnikIAxAAIAACgIAhAAIAAAfIghAAIAABIgAALhFIgLAUIgyBOIBGAAIAAhEIABgRIABgSIABgQIgCAAIgKAVg");
	this.shape_6.setTransform(12.1,-133.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgzB+QgWgKgNgPIAUgbQAMAMAPAIQAPAJAVAAQAUAAAOgMQAOgLABgVQAAgPgIgLQgHgKgRgGQgPgGgeAAIAAgdQAaAAANgGQAQgGAGgKQAHgLAAgOQgBgRgLgLQgKgKgSAAQgPAAgNAHQgNAHgLALIgWgaQAQgOATgJQASgJAXAAQAWAAATAIQARAIAKAPQALAQAAAWQAAAXgMAPQgMAQgWAIIAAACQAQADAMAHQANAJAGAOQAIANAAASQAAAYgMARQgMARgUAJQgUAJgXAAQgfgBgUgKg");
	this.shape_7.setTransform(11.8,-94.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhTCGIAAgYQA7g0AcgoQAegmAAggQAAgVgMgOQgLgNgUAAQgQAAgNAIQgNAJgLAMIgXgXQARgTATgKQATgLAaAAQAWAAASAKQASAKAKASQAJASAAAYQAAAagMAaQgNAYgVAaQgWAbgaAaIAVgBIAUgBIBCAAIAAAjg");
	this.shape_8.setTransform(12,-55.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhKCEIAAgjIA6AAIAAi1IgwAAIAAgbQATgDAOgFQAOgFALgHIAdAAIAADkIA0AAIAAAjg");
	this.shape_9.setTransform(12.7,-15.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgsB6QgTgQgLgeQgKgfAAgtQAAgtAKgeQALgfATgPQATgPAZAAQAZAAAUAPQATAPAKAfQALAeAAAtQAAAtgLAfQgKAegTAQQgUAPgZAAQgZAAgTgPgAgXhdQgKAKgGAXQgGAXAAAlQAAAlAGAXQAGAYAKAKQALAKAMAAQANAAAKgKQALgKAFgYQAGgXAAglQAAglgGgXQgFgXgLgKQgKgKgNAAQgMAAgLAKg");
	this.shape_10.setTransform(12.3,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-398,24.7,447.9);


(lib.car_wheel_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.car_wheel();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28,28);


(lib.car_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.car();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,241,67);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoBCIBBhCIhBhBIAIgIIBJBJIhJBKg");
	this.shape.setTransform(4.1,7.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.3,14.9);


(lib.numbers_ROLL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVCEIAAhHIhxAAIAAgcIBoikIAvAAIAACfIAiAAIAAAhIgiAAIAABHgAALhGIgLAUIgyBOIBHAAIAAhDIAAgQIABgSIABgRIgCAAIgKAUg");
	this.shape.setTransform(66.7,23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqB/QgUgIgLgQQgLgQAAgUQgBgTAIgNQAGgNALgLQALgJAMgFIAAgCQgPgKgKgPQgKgQgBgVQABgVAJgPQAKgQARgHQARgJAUAAQAXAAARAJQARAIAJARQAJAPAAAVQAAAOgGAMQgFALgHAKQgJAJgIAGIAAACQAMAFAKAKQAKAJAGANQAHANgBATQABATgLAQQgLAQgTAIQgTAJgaAAQgXAAgTgJgAgnAfQgIAOgBARQABAOAGAKQAHAJALAGQAMAGAMAAQAUAAANgLQAMgLABgSQgBgRgIgKQgJgLgPgHQgOgIgRgHQgNAKgJAOgAgYhfQgLAKgBASQAAAOAIAKQAHAKANAHQALAHAOAFQAMgKAGgNQAGgNAAgMQAAgTgKgMQgLgMgTgBQgPABgKAKg");
	this.shape_1.setTransform(39.6,23.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhTCGIAAgXQA7g1AcgoQAegmAAggQAAgWgMgNQgLgNgUAAQgQAAgNAIQgNAJgLAMIgXgXQARgSATgLQATgLAaAAQAWABASAJQASALAKARQAJASAAAYQAAAagMAaQgNAYgVAbQgWAagaAbIAVgCIAUgBIBCAAIAAAjg");
	this.shape_2.setTransform(12,23.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},47).wait(13));

	// 十
	this.instance = new lib.nummber_ROLL2();
	this.instance.setTransform(94.1,24.5,1,1,0,0,0,12.2,24.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVCEIAAhHIhxAAIAAgcIBoikIAvAAIAACfIAiAAIAAAhIgiAAIAABHgAALhGIgLAUIgyBOIBHAAIAAhDIAAgQIABgSIABgRIgCAAIgKAUg");
	this.shape_3.setTransform(66.7,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgqB/QgUgIgLgQQgLgQAAgUQgBgTAIgNQAGgNALgLQALgJAMgFIAAgCQgPgKgKgPQgKgQgBgVQABgVAJgPQAKgQARgHQARgJAUAAQAXAAARAJQARAIAJARQAJAPAAAVQAAAOgGAMQgFALgHAKQgJAJgIAGIAAACQAMAFAKAKQAKAJAGANQAHANgBATQABATgLAQQgLAQgTAIQgTAJgaAAQgXAAgTgJgAgnAfQgIAOgBARQABAOAGAKQAHAJALAGQAMAGAMAAQAUAAANgLQAMgLABgSQgBgRgIgKQgJgLgPgHQgOgIgRgHQgNAKgJAOgAgYhfQgLAKgBASQAAAOAIAKQAHAKANAHQALAHAOAFQAMgKAGgNQAGgNAAgMQAAgTgKgMQgLgMgTgBQgPABgKAKg");
	this.shape_4.setTransform(39.6,23.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhTCGIAAgXQA7g1AcgoQAegmAAggQAAgWgMgNQgLgNgUAAQgQAAgNAIQgNAJgLAMIgXgXQARgSATgLQATgLAaAAQAWABASAJQASALAKARQAJASAAAYQAAAagMAaQgNAYgVAbQgWAagaAbIAVgCIAUgBIBCAAIAAAjg");
	this.shape_5.setTransform(12,23.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance}]}).to({state:[{t:this.instance}]},11).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance}]},23).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({regX:12,regY:4.2,x:93.9,y:4.3},0).wait(1).to({y:4.8},0).wait(1).to({y:5.7},0).wait(1).to({y:7},0).wait(1).to({y:9},0).wait(1).to({y:11.7},0).wait(1).to({y:15.4},0).wait(1).to({y:20.5},0).wait(1).to({y:27},0).wait(1).to({y:34},0).wait(1).to({y:39.5},0).wait(1).to({y:42.4},0).wait(1).to({regX:12.2,regY:24.5,x:94.1,y:63.5},0).wait(23).to({y:24.5},0).wait(13));

	// 個
	this.instance_1 = new lib.numbers();
	this.instance_1.setTransform(121.4,24.5,1,1,0,0,0,12.2,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:12,regY:-173,x:121.2,y:-168.1},0).wait(1).to({y:-153.1},0).wait(1).to({y:-127.8},0).wait(1).to({y:-92.6},0).wait(1).to({y:-48.9},0).wait(1).to({y:0.6},0).wait(1).to({y:51.6},0).wait(1).to({y:98.8},0).wait(1).to({y:136.9},0).wait(1).to({y:161.4},0).wait(1).to({regX:12.2,regY:24.5,x:121.4,y:367.4},0).to({y:417.5},13,cjs.Ease.get(1)).wait(23).to({y:24.5},0).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-398,133.9,447.9);


(lib.car_wheel_ROTATE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.car_wheel_1();
	this.instance.setTransform(14.1,14.1,0.929,0.929,0,0,0,14.1,14.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-720},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,26,26);


(lib.car_MOVE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.car_1();
	this.instance.setTransform(120.5,33.5,1,1,0,0,0,120.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:32.5},7,cjs.Ease.get(1)).to({y:33.5},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,241,67);


(lib.arrow_MOVE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.arrow();
	this.instance.setTransform(4.1,7.4,1,1,0,0,0,4.1,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:6.9},7,cjs.Ease.get(1)).to({x:4.1},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.3,14.9);


// stage content:



(lib.v2_728x90_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.clickTAG.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60));

	// Code
	this.clickTAG = new lib.元件1();
	this.clickTAG.setTransform(364,45,12.552,2.647);
	new cjs.ButtonHelper(this.clickTAG, 0, 1, 2, false, new lib.元件1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTAG).wait(60));

	// outline
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("EA4zgG8IAAN5MhxlAAAIAAt5g");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

	// ABClogo
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#595857").ss(0.2).p("Ag0AIIAAgMIAFAAQACAAABABQACABAAABQAAABgCAAQADABAAADQAAACgCABQgBABgCAAgAgvAAQABAAABAAQABAAAAgBQAAgBgBgBQgBAAgBAAIgDAAIAAADgAhGAIIgCAAIAAgNIACAAgAgaACQAAgBgBgBQgCAAgBAAQgCAAgBAAQgCAAAAACgAgYAFQgBABgCABQgCABgBAAQgDAAgCgBQgBgCgBgCQAAgDACAAQACgBADAAQADAAABABQACABAAABIAAABIgLAAQAAACACABQABABACAAQADAAABgCgAgvAHQACAAABgBQABgBAAgBQAAgCgBAAQgBgBgCAAIgDAAIAAAGgAhNAIIgCAAIAAgNIACAAgAgDAIQgEAAAAgDIAAgJIACAAIAAADIACAAIAAABIgCAAIAAAFQAAACACAAgAgSAFQAAABABAAQABABAAAAQABAAABgBQAAAAAAgBQABgBgCgBIgCAAQgCgBAAgCQAAAAABAAQABgBABAAQACAAABABQABAAAAAAIAAAAIgCAAIAAAAQAAAAgCAAQgBAAAAAAQAAABABABIACAAQACABAAACQAAABgBACQgBABgCgBQgCAAAAgBQgBgBAAgBIABAAgAAdAEQgCAEgFAAQgEAAgCgCQgCgCAAgDQAAgBACgDQACgCAEAAQADAAABABQADACAAABIgBAAQgDgCgDAAQgDAAgCACQgCABAAABQAAACACACQACACADAAQACAAABgBQACAAABgCgABDgCIgCAAIAAgDIACAAgAArAIIgBAAIAAgGQAAgCgBAAQgBAAgCAAQgCAAAAAAQgBAAAAACIAAAGIgCAAIAAgNIACAAIAAAFQABgBACAAQACAAACABQABAAAAACgABDAIIgCAAIAAgJIACAAgAA2AHQACAAACgBQABgCAAgBQAAgCgBgBQgCAAgCAAQgBAAgCAAQgBABAAACQAAABABACQABABACAAgAA7AHQgCABgDAAQgDAAgBgBQgCgCAAgCQAAgDACAAQACgBADAAQACAAACABQACABAAACQAAACgCACgABlAFQgBABgCABQgBABgCAAQgDAAgCgBQgBgCAAgCQgBgDACAAQACgBADAAQADAAABABQACABAAABIAAABIgLAAQAAACACABQABABACAAQADAAABgCgABjACQAAgCgBAAQgBAAgCAAQgCAAgBAAQgCAAAAACgABUAFQgCADgEAAQgCAAgCgBQgCgCAAgCQAAgDACAAQACgBACAAQACAAACABQACAAAAAAIAAABIgBAAQgCgBgDAAQgBAAgCAAQgBABAAACQAAACABABQABABACAAQADAAACgCIACAAgAhTAIIgCAAIgCgFIgIAAIgCAFIgCAAIAHgMIACAAgAhYACIgDgFIgDAFg");
	this.shape_1.setTransform(28.2,21.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#CF001C","#C53227","#B3503B","#A1614E","#906759","#80675E","#73645F","#68605D","#605C5B","#5B5958","#595857"],[0,0.035,0.098,0.169,0.239,0.318,0.404,0.498,0.608,0.745,1],0.6,-1,0.9,-1.3).s().p("AgKALQgEgCgCgFQgBgEAAgDIAAgBIAQACIACgEIABgCIAMAJIAEgDQgFAFgGAEQgGAFgFABIgGgCgAAFgLIAAAAIgBACIABgCg");
	this.shape_2.setTransform(18,19.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#595857").s().p("AgQAHIgDgBIgBgDIACAAIAAABIAAABIACABIABgBIABgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgBgBQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAAAIABgCIADAAIACAAIABACIAAAAIgBAAIAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIABABQABAAAAAAQABAAAAABQAAAAAAABQABAAAAAAIgCADIgBABIgBAAgABaAFQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABgBQACgCADABQAAAAABAAQABAAAAAAQABAAAAABQAAAAABAAIABACIAAABIgKAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIADACQABAAABAAQAAAAABgBQAAAAABAAQAAgBAAgBIACAAIgCADIgEABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBgABbAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAIAJAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgDgBIgDABgABJAFQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAIADACIAAAAIgCAAQgBgBgDAAIgDABIgCABQAAABAAAAQAAABABAAQAAABAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAABAAQADAAABgDIACAAIAAABQgCADgEAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBgABBAHIAAgJIACAAIAAAJgAAxAFIgBgEQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAAzAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAIACADIADACQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBIABgDIgBgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgDABgAApAHIAAgHIgBAAIgCgBIgDABIgBAAIAAAHIgCAAIAAgNIACAAIAAAFQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIADABQABAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAIAAAHgAAQAFQgDgCAAgDQAAgCADgCQACgCAEAAIAEABIADADIgCAAQgCgDgEAAQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQACACADAAIADgBIACgCIACAAQgCAEgFAAQgEAAgCgCgAgIAEIAAgKIACAAIAAAEIADAAIAAABIgDAAIAAAEQAAABAAABQABAAAAAAQAAABABAAQAAAAABAAIAAABQgFAAAAgDgAgjAFIgCgEQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAIABACIAAABIgLAAIACACIADACQABAAABAAQAAAAABgBQAAAAABAAQAAgBAAgBIACAAIgCADIgEABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBgAgiAAIgCAAIAKAAIgCAAIgDgBIgDABgAg0AHIAAgNIAFAAIADABQAAABAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABAAABQAAAAAAABIgBADIgEABgAgyAFIADAAIADgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIgBgCIgDAAIgCAAgAgyAAIADAAIACAAIABgCIgBgCIgDgBIgCAAgAhIAHIAAgNIABAAIAAANgAhPAHIAAgNIABAAIAAANgAhVAHIgCgFIgIAAIgCAFIgCAAIAHgNIACAAIAHANgAheAAIAGAAIgDgEgABBgEIAAgCIACAAIAAACg");
	this.shape_3.setTransform(28.2,22.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#CF001C","#CF001C"],[0.145,1],-0.9,4,-0.2,-0.4).s().p("AgKAgIAAAAIABgCIACgCQAHgMAAgPIgBgHIgDgJIgDgHIgFgGIAAgBIgBgCIALgLIAHANIAEAHIAAABIABABIABADIABAIIACAKIAAAAQAAAMgEALQgDAHgEAGIgDAGg");
	this.shape_4.setTransform(19.4,15.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CF001C").s().p("AhWBQQgbAAgUgTQgTgUAAgbQAAgZATgTQAUgUAbAAQAbAAATAUIACABIgLALIABABIgDgCQgOgPgVAAQgVAAgOAPQgPAPAAASQAAAVAOAPQAPAOAVAAIABAAQADAAACADQADACAAADQAAADgCACQgCACgDABgABzA9QgRAAgNgLQgMgMAAgRQAAgRAMgLQANgMARAAIAAAAQAMAAALAHQAKAGAFAHIAAABIgQAIIgBgCQgHgJgOAAQgJAAgHAFQgIAHAAAJQAAAKAHAHQAHAHAKAAQAOAAAHgLIABgCIAQAJQgNAVgZAAgAAZA9QgQAAgKgLQgNgNABgRIAAhaQAAgEACgDQADgCAEAAQADAAABADQADACAAAEIAAA6QAJgGAMgBQASgBAMANQAMAKAAARQAAARgLAMQgMAMgQAAgAAKAEQgHAHAAAIQAAAKAHAIQAGAHAJAAIABAAQAJAAAHgIQAGgGAAgKQAAgKgHgGQgHgFgJAAQgJAAgGAFgAhXA2QgQgBgKgLQgLgMAAgOQAAgQAMgKQALgLAQAAQAQABALALQALAJgBAQIAAAeIgEAEIgPgCIAAABQgIAFgLAAgAhjABQgGAFAAAJQAAAIAFAGQAGAGAHAAIABAAQAIABAGgHQAGgGgBgIQAAgJgFgFQgGgEgHAAQgJAAgFAEgAgZgJIAAAAIAAABIAAgBg");
	this.shape_5.setTransform(23,14.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#CF001C","rgba(207,0,28,0.482)","rgba(207,0,28,0)"],[0,0.855,1],-12.3,0,12.3,0).s().p("Ah5ACIABgDIDyAAIAAADg");
	this.shape_6.setTransform(51.3,22.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#056FB8").s().p("AgCAlIAAgLIgfAAIgCgBIgBgCIABgDIACgBIAfAAIAAgFIgTAAQgIAAAAgIIAAgQQAAgEACgBQACgCAEAAIATAAIAAgGIgeAAIgCgBIgBgCQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAIAeAAIAAgGQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQABAAAAAAQABABAAAAQAAABAAAAIAAAGIAfAAQABAAABAAQAAABABAAQAAABAAAAQABABAAABQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAIgfAAIAAAGIAUAAQAFAAACACQABABAAAEIAAAQQABAIgJAAIgUAAIAAAFIAhAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAIghAAIAAALQAAAAAAABQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAgAAEAHIATAAQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAgBIAAgFIgVAAgAgVAFQAAABAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIASAAIAAgHIgTAAgAAEgEIAVAAIAAgFQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIgTAAgAgVgJIAAAFIATAAIAAgHIgSAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABgABNAkIAAggIgCABIgCAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAgBgBIAAgCIgFABIAAAiQAAABgBAAQAAABAAAAQgBAAAAABQgBAAgBAAIgDgBIAAgCIAAghIgKABQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBgBgBIAAAAIACAAIACgBIACAAIABAAIAGgHIgLgNIgBgCQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIACgBIACABIABABQAEgFACgHQABgBAAAAQAAgBABAAQAAAAABAAQAAAAAAAAIADAAQAAABAAAAQABAAAAAAQAAABAAAAQABAAAAABIgBACIgIAOIADAFIAHgMQABgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAABQgHALgIALIAJgBIgCgFIAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIADAAIABABIAGALIAAgeQgBgHAIAAIAfAAQAHAAAAAHIAAA7QAAAIgJAAIgJgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAgBAAAAIAAgBQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAIAAAAIAHABIACAAIABgCIAAgcIgBADIgCAAIgQAAIAAALIABACIAFABIAGgBIABAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABIAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAIgHAAIgJgBQgDgBAAgFIAAgNIgEAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIAKAAIAAgHIgKAAIgBgBIgBgCQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAOAAIAEgNQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAIABAAIAAABQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIAAABIgFALIAGAAIACAAIABADIgBACIgCABIgJAAIAAAHIAJAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABIAAgLIAAgTIgCAAIgcAAIgBAAIAAABIAABAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAgBAAQgBAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBgAhRAlQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBgBAAIAAgBQABgBAAgBQAAAAABAAQAAgBABAAQAAAAABAAIAAAAIAHAAIADAAIABgCIAAgZIgQAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAABgBQAAAAABAAIAQAAIAAgKQAAgBAAAAQAAgBABAAQAAgBABAAQABAAAAAAIABAAQAJgGACgEIAAgBIgBAAIgcAAIgBgBIgBgDQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIAgAAQADAAACABQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIgBAEQgFAHgLAIIAAAHIASAAQABAAAAAAQABABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIgSAAIAAAaQABAJgLAAIgJgBgAh4AkIgBgDQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAJgFAFgIIgJgHQgDgCAAgDIABgEQADgFADgLIgHAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAIAIAAIACgNQABAAAAgBQAAgBABAAQAAAAABgBQAAAAABAAIABAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAABIAAAAIgCAMIAIAAQAGAAABAHIAAABQgDAQgGANIAHAIIACADIgCADQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgCgBIgHgHQgFAIgJAGIgCABQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAgAhuACIgBACIABABIAIAGQAGgLABgNIAAgBQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIgHAAIgHARgAAvAhIgCgBIgBgCIAAgBQAEgIAAgMIABgCIACAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAABQgBAMgDAJQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAgABIAcQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBIgBgPIAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABgBIABAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABIADAPIAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAgABegOQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBIgEgHIAAgCQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIACgBQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAABQADAEABAEIAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAg");
	this.shape_7.setTransform(51.3,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(60));

	// arrow_MOVE
	this.instance = new lib.arrow_MOVE();
	this.instance.setTransform(614.8,63,1,1,0,0,0,4.1,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// btn_TXT
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAeBSIgBgIIgEgJIANABIAJAAIAFAAIADgCQACgDABgMQACgLACgWIACg3Ig2AAIgGAIIgEAIIAtAAIAABGIgmAAIAAAIIgLAAIAAhGIgCACIgFgDIgFgEIgFgDQAHgGAGgKIAIgTQAEgLAEgLIARADIgFAMIgDALIA/AAIAAACIAAADIAAADIgCAzIgCAjIgDAXQgBAHgEAEQgCADgDADIgIACIgLABIgOgBgAAHAhIAYAAIAAgQIgYAAgAAHAEIAYAAIAAgOIgYAAgAhIBRIAAg9IAzAAIAAA1IgmAAIAAAIgAg7A6IAZAAIAAgZIgZAAgAhIAIIAAgLIAzAAIAAALgAhIgNIAAgNIAyAAIAAANgAhPglIAAgNIAfAAIgGgMIgHgNIALgHIAIANIAGALIgMAIIAiAAIAAANg");
	this.shape_8.setTransform(595.6,62.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhJBPIAAgOICYAAIAAAOgAgvA3IAAg5IBjAAIAAA5gAgeArIBBAAIAAgMIhBAAgAgeAUIBBAAIAAgNIhBAAgAhKAAIgGgGQAKgDALgGQAKgFAKgIQAJgGAHgIIg0AAIAAgPIBFAAIAAgVIAPAAIAAAVIBIAAIAAAPIg0AAIAUAMIASAMIAOALIgLAKIgRgLIgVgPIgXgPIAAAfIgPAAIAAghQgHAKgLAJIgVARQgMAEgMAFIgFgFg");
	this.shape_9.setTransform(577.5,62.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAQBOIAAiZIA8AAIAABkQABAHgCADQgBAFgEABQgEADgHAAIgPAAIgCgIIgDgIIALAAIAHAAIACAAIABgDIAAhVIgcAAIAACKgAhGBEIgCgHIgDgFIAFgEQACgDABgFIAAh4IBFAAIAABTIg0AAIAAApIAdgJIgEgJIgFgIIAOgHIAJAQIAHAPIAHAPIgOAIIgDgIIgEgJIgaAJIgQAGIgIADIgEADIgCgFgAgygGIAlAAIAAgVIglAAgAgygqIAlAAIAAgUIglAAg");
	this.shape_10.setTransform(559.4,63.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhPBPIAAgRIBVAAIAKgaIAJgdIAGgaIATAEIgIAZIgJAcIgJAYIA4AAIAAARgAgjAhIgGgZIgHgXIARgEIAHAXIAGAZIAFAXIgSAEIgEgXgAhHgbIAAgRICPAAIAAARgAgHg2IgDgKIgDgKIAOgEIAEAKIADAKIADAIIgPAFIgDgJg");
	this.shape_11.setTransform(541.7,62.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(60));

	// btn_BG
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E92626").s().p("ArZCkIAAlHIWyAAIAAFHg");
	this.shape_12.setTransform(571.3,62.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(60));

	// TXT
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E92626").s().p("AjXBeIgGgHIATgFIASgHIAOgIIgjAAIAAhOIB7AAIAABOIgoAAIATAIIASAHIAPAGIgRANQgIgFgNgGQgNgGgNgFIALgMIguAAIAPAKIgQAKIgTAIIgUAGIgGgHgAi5A4IBSAAIAAgLIhSAAgAi5AgIBSAAIAAgKIhSAAgAi5ALIBSAAIAAgLIhSAAgAFDBkIAAhbQgFAQgGAOQgHAPgIAKIgEgKIgFgLIALgSIALgWIAIgWIgbAAIAAgTIAgAAIAAgfIgMACIgMACIgCgIIgDgIIAWgFIAWgGIASgHIAMARIgMAFIgOADIAAAkIAbAAIAAATIgbAAIAAAFIAHAIIAIAIIAIAKIAEAHIgLARIgHgOIgJgQIAABegAmUBkIAAgfIhWAAIAAgTIBWAAIAAgOIhAAAIAAhVIBAAAIAAgNIhQAAIAAgTIBQAAIAAgTIAVAAIAAATIBSAAIAAATIhSAAIAAANIBDAAIAABVIhDAAIAAAOIBZAAIAAATIhZAAIAAAfgAl/ATIAuAAIAAgTIguAAgAnBATIAtAAIAAgTIgtAAgAl/gNIAuAAIAAgTIguAAgAnBgNIAtAAIAAgTIgtAAgAj6BkIAAhzIgIAMIgJAJIgDgGIgEgFIgEgHQAJgLAJgOQAIgOAIgQQAHgPAFgRIATAFIgIAWIgKAWIAACWgAFuBfIAAgSIA2AAIAAgaIgrAAIAAgRIArAAIAAgXIgSACIgSABIgCgIIgEgGIAhgDIAegDIAagGIAMAOIgSADIgVAEIAAAZIArAAIAAARIgrAAIAAAaIAzAAIAAASgABKBdIAAgSIBYAAIAAgbIhJAAIAAgTIBJAAIAAgXIhCAAIAAhiICbAAIAABiIhEAAIAAAXIBLAAIAAATIhLAAIAAAbIBXAAIAAASgAC2gKIAwAAIAAgXIgwAAgAB0gKIAvAAIAAgXIgvAAgAC2gyIAwAAIAAgYIgwAAgAB0gyIAvAAIAAgYIgvAAgAgJA5IAAgvIgsAAIAAgQIAsAAIAAgwIARAAIAAAwIAtAAIAAAQIgtAAIAAAvgAF6gSIAAhIIBmAAIAABIgAGNgjIA/AAIAAglIg/AAgAjQgUIAAgrIAlAAIAAgLIgqAAIAAgQICLAAIAAAQIgsAAIAAALIAmAAIAAArgAh2ggIATAAIAAgSIgTAAgAibggIAUAAIAAgSIgUAAgAi+ggIATAAIAAgSIgTAAgAibg/IAUAAIAAgLIgUAAg");
	this.shape_13.setTransform(553.1,27.4,1.117,1.117);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("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");
	this.shape_14.setTransform(568.9,27.3,1.117,1.117);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).wait(60));

	// whit_BG
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("A5ZJ2IAAzqMAyzAAAIAATqg");
	this.shape_15.setTransform(571.4,47.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(60));

	// base
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#CCCCCC","#AAAAAA","#CCCCCC"],[0.012,0.482,1],3.2,-3.3,-20,21.1).s().p("ADfChQhngxg9AEIgLABQhuAKg+AeQgVAJgMALIgJAJIiTmMQBqAkBnA4QB9BEB5BiIArAkQBQBEAxA7QgngZg0gZg");
	this.shape_16.setTransform(378.8,20.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#CCCCCC","#AAAAAA","#CCCCCC"],[0.012,0.482,1],11.4,-3.1,-8.8,19.5).s().p("AFWDlIADgBQARACAhAdIAKAMQANAPALARIAMAUQgZgehKhAgAA3B5Qiih2g1hHQhdhWiNh7IgugtIA+AiQByBCBqBFQDBCDCcB9IBAA0IBXBKIgCAAIgFABIgBAAQhBAIgDAfQgKAJgCAJIgDAIQgggSikicgAFWDlIAAAAg");
	this.shape_17.setTransform(348.2,32.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#CCCCCC","#AAAAAA","#CCCCCC"],[0.012,0.482,1],15.5,-2.9,-2.1,18.1).s().p("AEeDZIhThCIh0hcQBJAuBfA6QDECMBUA3IABgDQACgcAMgBIACAAIABABQgaAHAxAhQAAAHAFAJIACAFQgQgIgggWIgDAJIgHAgIgDAWQgcgijQiqgAhuhVQiahtjwioIhOg6IBMAyQCQBfCABbQCyCDCPBwQiShegzgyg");
	this.shape_18.setTransform(324.7,41.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#CCCCCC","#AAAAAA","#CCCCCC"],[0.012,0.482,1],10.9,-2.8,-4.6,16.9).s().p("ADmEOIhihPQjRirkvjlQiThuinh5IhXg+IBmBEIIUFQQBeBKGNDfQEfCyBsBBQhLgagGgGIgBAAIgGgBIgIgBQglABgfAbIgQAMQgRAOgRASIgRAXQgUgXkCjSgALjG6IASAHQAIAHANAHIAFAFIgsgag");
	this.shape_19.setTransform(312.9,50.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#CCCCCC","#AAAAAA","#CCCCCC"],[0.012,0.482,1],7.1,-2.7,-6.6,15.9).s().p("AC5E5IhuhZQjni8lWkKQijh9i6iNIhhhJIB8BMQGJDtD6CTQBuBKHkEHIIQEwIgGgDIgigMQh/gigigGIgBAAIgJgBIgPAAQg4ABg4AZIgaAMQgcAOgaATIgdAXQgNgOksjzg");
	this.shape_20.setTransform(303.2,56.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#CCCCCC","#AAAAAA","#CCCCCC"],[0.012,0.482,1],4.1,-2.6,-8.2,15.2).s().p("ACWFbIh5hiQj3jIl2knIl4knIhohRICMBTQG+EFEbCgQB7BLIoElQHqENBvBBIgKgDIgsgMQiagig4gGIgBAAIgMgBIgSAAQhIABhLAYIgiAMQgkAPgiASIgmAZQgIgJlLkLg");
	this.shape_21.setTransform(295.8,62.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#CCCCCC","#AAAAAA","#CCCCCC"],[0.012,0.482,1],2.1,-2.6,-9.2,14.6).s().p("AB8FzIh9hnIqRoNImLk7IhuhXICYBYQHkEWEzCpQCEBLJYE8QITEbB5BGIgLgDIgzgLQiugihHgFIgCAAIgOgBIgVAAQhTAAhYAYIgoAMQgqAOgoATIgsAZIlnkhg");
	this.shape_22.setTransform(290.4,65.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#CCCCCC","#AAAAAA","#CCCCCC"],[0.012,0.482,1],0.8,-2.5,-9.9,14.3).s().p("ABtGBIiBhqIqmofImXlHIhxhaICfBaQH8EgFBCwQCIBKJ2FKQIrEjCABKIgNgDIg3gKQi6gjhQgFIgBAAIgQAAIgXgBQhZAAhhAYIgqAMQgvAOgrATIgwAZIlykpg");
	this.shape_23.setTransform(287.2,68);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#CCCCCC","#AAAAAA","#CCCCCC"],[0.012,0.482,1],0.3,-2.5,-10.1,14.2).s().p("AxipVIhyhcIChBcQIDEjFHCxQCJBLKAFOQI0EmCBBLQj1guhhgGQhtgHh7AeQhIARg/AcIgyAZIAAAAI5A0Hg");
	this.shape_24.setTransform(286.1,68.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#CCCCCC","#AAAAAA","#CCCCCC"],[0.012,0.482,1],2.2,-1.9,-11.2,16.6).s().p("AEiHCIh/hmQjujBmllJQi+iVjiisIhXhDIB4BNQGaEIEBCcQA0ArByA7IAfANIBfAqQCQA/DOBgIB4A4IAcAOQFHCjBpA6IgngGQiRgYg6AAQgcAAgcADQg9AAg/AKQg6AKg1ASIgpARIiSh4gAvwo3IgBgCIAKAHIgJgFg");
	this.shape_25.setTransform(306.5,56.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#CCCCCC","#AAAAAA","#CCCCCC"],[0.012,0.482,1],3.8,-1.3,-12.2,18.8).s().p("AEUFrIhphUQhvhaiTh0IAXANIAZAHIBOAZQB3ApCuBDIBjApIAXAKQEBB3BlA1IgZgCQhggNgjAFQgRABgTAEQgvgEgzAEQgvADgqAKIghAJQgNgMhvhbgAi+gFIBnBOQhAglgngpgAjVgXIATAOIAEAEIgXgSgArHmEIhjhKIgBgDIBRA7QC9CHCiB5ICmB/QjCiHkwjmg");
	this.shape_26.setTransform(324.2,46.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#CCCCCC","#AAAAAA","#CCCCCC"],[0.012,0.482,1],5.2,-1.2,-13,20.2).s().p("AHSFzQgkgCgiACIgbADQgRgQhYhIIhWhGIhBg0QA+AQBKAWIBRAbIAUAGQDEBSBjAyIgNAAQg3gDgPAKQgJACgKAFQglgIgogCgAAFCJIhAgLIgUgCQg7gggpg8QiTh3jyjeIhLhDIgBgEIBFAtQCdBoCKBiQDmCnCjCCQg8gQgwgLg");
	this.shape_27.setTransform(339.2,37.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#CCCCCC","#AAAAAA","#CCCCCC"],[0.012,0.482,1],6.4,-1.9,-13.6,20.5).s().p("AGlEvQgcgHgcgEIgUgCQgWgUhEg5IgnggIAgAIIARAEQCSAzBhAvIgDACQgWAFADANIgGAJQgcgKgfgHgAC1CtQh7gYhQgFQgegBgYABIgPACQgmgUglhDQhphri0jOIg3g9IgBgEIA7AiQCDBOB3BPQDdCZChCCIAgAaIgjgIg");
	this.shape_28.setTransform(351.5,31.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#CCCCCC","#AAAAAA","#CCCCCC"],[0.012,0.482,1],5.8,-2.5,-15.6,20.8).s().p("AFzD6IgrgTIgSgHQgQgQgfgZQBAAVA8AcIAEAEQAEALAQAQIAFAKQgVgMgYgLgAC4CgIgPgCIg4gHQhqgJhBAIQgaADgTAFIgNAFQgVgLgihIQhJhgiCjCIgog5IgBgFIAzAaQBvA6BoBAQC0B2CPBzIA6AwIAfAaQgngNgogKg");
	this.shape_29.setTransform(362.6,27.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#CCCCCC","#AAAAAA","#CCCCCC"],[0.012,0.482,1],4.3,-2.9,-18.1,21).s().p("AFUDfIAHAFIANALIgUgQgAEqDDIgIgGQhfgrhQgKIgMAAIgxgBQhbACg6AQQgXAIgPAIIgKAHQgKgFgfhMQgyhbhfi3Igcg1IgCgGIAtAUQBhAsBdA1QCVBbCDBpIAzAqQAqAjAaAaIAPAJIAjAYIAPAMIgqgcg");
	this.shape_30.setTransform(371.5,23.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#CCCCCC","#AAAAAA","#CCCCCC"],[0.012,0.482,1],3.5,-3.2,-19.5,21.1).s().p("AE0DOQgegSgjgSIgNgGQhdgrhAABIgLAAIgsADQhSAJg1AWQgVAJgNAKIgJAIQgCgBgehOQglhXhJixIgVgzIgCgGIApAQQBZAjBVAvQCEBLB8BjIAtAlQAkAeAbAbIANALIAeAcIAdAeIgSgMg");
	this.shape_31.setTransform(376.9,21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.shape_16}]},20).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},23).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_16}]},1).wait(1));

	// shadow
	this.instance_1 = new lib.peel_shadow();
	this.instance_1.setTransform(382.5,25,1,1,0,0,0,31.4,21.2);
	this.instance_1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({regX:31.8,regY:21.5,scaleX:1.51,scaleY:0.84,x:374.4,y:122.1},8,cjs.Ease.get(1)).wait(23).to({regX:31.4,regY:21.2,scaleX:1,scaleY:1,x:382.5,y:25},8,cjs.Ease.get(1)).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AVsF3Imbk5IGsqhIQCMLIp7G8g");
	var mask_graphics_20 = new cjs.Graphics().p("AVsF3Imbk5IGsqhIQCMLIp7G8g");
	var mask_graphics_21 = new cjs.Graphics().p("AQRIsIpim8IJbvnIX2RRIuRKeg");
	var mask_graphics_22 = new cjs.Graphics().p("ALrLMIsUomILl0JIe1VZIx6Nug");
	var mask_graphics_23 = new cjs.Graphics().p("AH2NWIuup6INR4DMAk4AYrI05Qkg");
	var mask_graphics_24 = new cjs.Graphics().p("AExPIIwwq7IOl7TMAp5AbOI3QS+g");
	var mask_graphics_25 = new cjs.Graphics().p("ACZQiIyVrrIPj92MAt2AdFI5EU6g");
	var mask_graphics_26 = new cjs.Graphics().p("AAuRjIzesNIQM/rMAwsAeXI6UWUg");
	var mask_graphics_27 = new cjs.Graphics().p("AgQSJI0MsfMAQkggyMAybAfHI7EXKg");
	var mask_graphics_28 = new cjs.Graphics().p("AgmSWI0bsmMAQsghJMAzAAfXI7UXcg");
	var mask_graphics_51 = new cjs.Graphics().p("AgmSWI0bsmMAQsghJMAzAAfXI7UXcg");
	var mask_graphics_52 = new cjs.Graphics().p("AEaPVIw9rCIOt7qMAqdAbfI3gTQg");
	var mask_graphics_53 = new cjs.Graphics().p("AI4MwIuEpjIM12/MAjNAXzI0FPyg");
	var mask_graphics_54 = new cjs.Graphics().p("AMuKnIrsoOILHzGIdNUeIxFM9g");
	var mask_graphics_55 = new cjs.Graphics().p("AP6I4IpwnEIJmv+IYYRnIujKug");
	var mask_graphics_56 = new cjs.Graphics().p("ASbHjIoSmJIIXtjIUsPRIsjJCg");
	var mask_graphics_57 = new cjs.Graphics().p("AUOGnInPldIHcr3ISGNkIrGH3g");
	var mask_graphics_58 = new cjs.Graphics().p("AVUGDImnlCIG4q3IQiMiIqNHLg");
	var mask_graphics_59 = new cjs.Graphics().p("AVsF3Imbk5IGsqhIQCMLIp7G8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:243.1,y:-11.5}).wait(20).to({graphics:mask_graphics_20,x:243.1,y:-11.5}).wait(1).to({graphics:mask_graphics_21,x:256.1,y:-17.4}).wait(1).to({graphics:mask_graphics_22,x:267.3,y:-22.3}).wait(1).to({graphics:mask_graphics_23,x:276.9,y:-26.2}).wait(1).to({graphics:mask_graphics_24,x:284.8,y:-29.4}).wait(1).to({graphics:mask_graphics_25,x:290.9,y:-31.8}).wait(1).to({graphics:mask_graphics_26,x:295.3,y:-33.4}).wait(1).to({graphics:mask_graphics_27,x:297.9,y:-34.4}).wait(1).to({graphics:mask_graphics_28,x:298.7,y:-34.9}).wait(23).to({graphics:mask_graphics_51,x:298.7,y:-34.9}).wait(1).to({graphics:mask_graphics_52,x:285.6,y:-29.9}).wait(1).to({graphics:mask_graphics_53,x:274.2,y:-25.3}).wait(1).to({graphics:mask_graphics_54,x:264.7,y:-21.3}).wait(1).to({graphics:mask_graphics_55,x:256.9,y:-17.9}).wait(1).to({graphics:mask_graphics_56,x:250.8,y:-15.1}).wait(1).to({graphics:mask_graphics_57,x:246.5,y:-13.2}).wait(1).to({graphics:mask_graphics_58,x:244,y:-12}).wait(1).to({graphics:mask_graphics_59,x:243.1,y:-11.5}).wait(1));

	// price_ROLL
	this.instance_2 = new lib.price();
	this.instance_2.setTransform(263,48.9,1,1,0,0,0,66.8,24.6);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).wait(40));

	// 萬元
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AhTBMIgHgHQAQgGAKgJQAJgIAGgKQAFgLACgMQADgMABgLIgwAAIAAgSICtAAIAAASIg2AAIAABBQAAAFACACQABABAFAAIAXAAQAEAAACgCQACgDAAgIIABgWIAJAFIAJADQgBARgCAKQgDAKgFAEQgFAEgKAAIgaAAQgKAAgFgDQgGgCgCgGQgCgFAAgKIAAhBIggAAQgCAOgDAOQgDAOgGANQgGAMgLAKQgLAKgSAHIgFgIgAhFhBIAAgSICLAAIAAASg");
	this.shape_32.setTransform(347.3,53.4);
	this.shape_32._off = true;

	this.shape_32.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(20).to({_off:false},0).wait(40));

	// gradient_BG
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#FFFFFF","#AAAAAA"],[0,1],51,0,0,51,0,179.3).s().p("EggyAM8IAA53MBBlAAAIAAZ3g");
	this.shape_33.setTransform(204.6,82.1);

	this.shape_33.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(60));

	// KM
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AA6BUIgEhHIgCgiIAAgiIgBAAIgIAfIgLAeIgZBMIgRAAIgXhLIgJgeIgIggIAAAAIgBAXIgBAYIgCAWIgDBGIgYAAIALinIAgAAIAYBKIAIAcIAGAcIAAAAIAHgcIAJgcIAYhKIAgAAIAKCng");
	this.shape_34.setTransform(363.2,49.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAcBUIgthQIgOASIAAA+IgaAAIAAinIAaAAIAABPIAAAAIAHgJIAGgJIApg9IAfAAIg2BIIA5Bfg");
	this.shape_35.setTransform(347.9,49.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34}]}).wait(60));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AGfDQIAAmfIEPAAIAAGfgACLDQIAAmfIEPAAIAAGfgAiGDQIAAmfIENAAIAAGfgAmaDQIAAmfIEPAAIAAGfgAquDQIAAmfIEQAAIAAGfg");
	mask_1.setTransform(263,47.6);

	// number
	this.instance_3 = new lib.numbers_ROLL();
	this.instance_3.setTransform(263,49,1,1,0,0,0,66.8,24.5);

	this.instance_3.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

	// gradient
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.6)","rgba(255,255,255,0)"],[0.137,0.498,0.882],0.1,-22,0.1,21.7).s().p("AsmDbIAAm1IZNAAIAAG1g");
	this.shape_36.setTransform(263.8,47.8);

	this.shape_36.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(60));

	// base
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1A1A1A").s().p("AGfDQIAAmfIEPAAIAAGfgACLDQIAAmfIEPAAIAAGfgAiGDQIAAmfIENAAIAAGfgAmaDQIAAmfIEPAAIAAGfgAquDQIAAmfIEQAAIAAGfg");
	this.shape_37.setTransform(263,47.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(60));

	// BG
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("Aq5DbIAAm2IVzAAIAAG2g");
	this.shape_38.setTransform(262.9,47.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(60));

	// wheel
	this.instance_4 = new lib.car_wheel_ROTATE();
	this.instance_4.setTransform(137.6,65.1,1,1,0,0,0,14,14);

	this.instance_5 = new lib.car_wheel_ROTATE();
	this.instance_5.setTransform(39.1,65.1,1,1,0,0,0,14,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(60));

	// car
	this.instance_6 = new lib.car_MOVE();
	this.instance_6.setTransform(102.8,52.3,0.879,0.879,0,0,0,120.6,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60));

	// gradient_BG
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["#FFFFFF","#CCCCCC","#CCCCCC"],[0,1,1],51.6,0,0,51.6,0,180).s().p("Egg8AM8IAA53MA19AAAIAJAGICMBdIISFfIBVA4IgER9g");
	this.shape_39.setTransform(211.2,82.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(360.8,29.5,737.3,180.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;