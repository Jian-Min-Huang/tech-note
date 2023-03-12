(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.A_300X250_100K = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E6558A").ss(1,2).p("AXXzcMAAAAm5MgutAAAMAAAgm5g");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(155));

	// logo
	this.instance = new lib.logo_1();
	this.instance.setTransform(44.5,27.5,1,1,0,0,0,43.5,26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(155));

	// Kanban
	this.instance_1 = new lib.Kanban();
	this.instance_1.setTransform(154.7,-108,0.831,0.831,-4.6,0,0,125.9,113.5);
	this.instance_1.alpha = 0.648;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({regX:126,scaleX:1,scaleY:1,rotation:0,x:159.7,y:69,alpha:1},6).to({y:49},4).wait(55).to({y:59},4).to({y:-170.1},6).to({_off:true},1).wait(76));

	// mccurtain
	this.instance_2 = new lib.mccurtain();
	this.instance_2.setTransform(167.8,107,1,1,0,0,0,223.9,151.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({y:-10.9},30).wait(20).to({y:106},9).wait(3).to({y:-202.3},7).to({_off:true},1).wait(76));

	// cranberries
	this.instance_3 = new lib.cranberries_1();
	this.instance_3.setTransform(235.5,222.5,1,1,0,0,0,54.5,25.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(80).to({_off:false},0).to({x:245.5,alpha:1},8).wait(67));

	// pd
	this.instance_4 = new lib.pd_1();
	this.instance_4.setTransform(179.5,181.5,1,1,0,0,0,49.5,79.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(76).to({_off:false},0).to({y:171.5,alpha:1},7).wait(72));

	// btn
	this.instance_5 = new lib.btn();
	this.instance_5.setTransform(245.6,146.6,1,1,0,0,0,44.6,44.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(81).to({_off:false},0).to({y:136.6,alpha:1},7).wait(67));

	// txt07
	this.instance_6 = new lib.txt07();
	this.instance_6.setTransform(203.3,37.6,0.5,0.5,0,0,0,31.3,12.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(82).to({_off:false},0).to({scaleX:1.3,scaleY:1.3,y:37.7,alpha:1},4).to({scaleX:1,scaleY:1,y:37.6},4).wait(65));

	// txt06
	this.instance_7 = new lib.txt06();
	this.instance_7.setTransform(145.4,39.3,0.5,0.5,0,0,0,30.3,12.3);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(80).to({_off:false},0).to({regX:30.4,scaleX:1.3,scaleY:1.3,y:39.4,alpha:1},4).to({scaleX:1,scaleY:1,y:39.3},4).wait(67));

	// txt09
	this.instance_8 = new lib.txt09();
	this.instance_8.setTransform(173.5,64,0.5,0.5,14.8,0,0,24.5,12.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(80).to({_off:false},0).to({regY:12.9,scaleX:1.3,scaleY:1.3,rotation:0,x:153.5,y:63.9,alpha:1},4).to({scaleX:1,scaleY:1},3).wait(68));

	// txt08
	this.instance_9 = new lib.txt08();
	this.instance_9.setTransform(135.7,66.1,0.586,0.586,0,0,0,22.7,21.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(82).to({_off:false},0).to({scaleX:1.3,scaleY:1.3,x:115.7,y:66.2,alpha:1},3).to({scaleX:1,scaleY:1,y:66.1},4).wait(66));

	// txt05
	this.instance_10 = new lib.txt05();
	this.instance_10.setTransform(212.4,60.5,0.5,0.5,-14.9,0,0,57.6,20);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(83).to({_off:false},0).to({regY:20.1,scaleX:1.3,scaleY:1.3,rotation:0,x:234.5,y:60.6,alpha:1},4).to({scaleX:1,scaleY:1,x:234.4},3).wait(65));

	// leaf
	this.instance_11 = new lib.leaf();
	this.instance_11.setTransform(268.5,33.8,0.614,0.63,0,0,0,18.1,10.8);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(83).to({_off:false},0).to({scaleX:1.11,scaleY:1.32,x:276.5,y:30.3,alpha:1},3).to({scaleX:1,scaleY:1,x:274.5,y:33.8},4).wait(65));

	// txt04
	this.instance_12 = new lib.txt04();
	this.instance_12.setTransform(248,37.5,1,1,-29.9,0,0,13,14.4);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(84).to({_off:false},0).to({regY:14.5,scaleX:1.5,scaleY:1.5,rotation:0,y:37.6,alpha:1},4).to({scaleX:1,scaleY:1},4).wait(63));

	// sing
	this.instance_13 = new lib.sing_1();
	this.instance_13.setTransform(68,207,1,1,0,0,0,55,22);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(80).to({_off:false},0).to({alpha:1},5).wait(70));

	// cut2bg2
	this.instance_14 = new lib.cut2bg2();
	this.instance_14.setTransform(247,208.8,1,1,0,0,0,206.4,91.2);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(75).to({_off:false},0).to({alpha:1},8).wait(72));

	// cut02bg
	this.instance_15 = new lib.cut02bg();
	this.instance_15.setTransform(201.4,187.8,1,1,0,0,0,238.4,117.8);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(73).to({_off:false},0).to({alpha:1},9).wait(73));

	// md
	this.instance_16 = new lib.md_1();
	this.instance_16.setTransform(95.5,143.5,1,1,0,0,0,75.5,106.5);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(73).to({_off:false},0).to({x:75.5,alpha:1},12).wait(70));

	// li
	this.instance_17 = new lib.li();
	this.instance_17.setTransform(150.1,-28.8,0.649,0.649,0,0,0,202.7,202.7);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(73).to({_off:false},0).wait(82));

	// li02
	this.instance_18 = new lib.li02();
	this.instance_18.setTransform(5.2,18.8,1,1,0,0,0,202.7,202.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({_off:true},71).wait(84));

	// princess01
	this.instance_19 = new lib.princess01_1();
	this.instance_19.setTransform(150,142,1,1,0,0,0,48,84);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(17).to({_off:false},0).to({_off:true},54).wait(84));

	// princess03
	this.instance_20 = new lib.princess03_1();
	this.instance_20.setTransform(188.5,144.5,1,1,0,0,0,48.5,71.5);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(17).to({_off:false},0).wait(9).to({scaleX:0.9,x:193.5},0).to({scaleX:1,x:218.5},19).to({_off:true},26).wait(84));

	// princess02
	this.instance_21 = new lib.princess02_1();
	this.instance_21.setTransform(125,148.5,1,1,0,0,0,47,67.5);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(17).to({_off:false},0).wait(9).to({scaleX:0.82,x:116.5},0).to({scaleX:1,x:95},19).to({_off:true},26).wait(84));

	// STAGE
	this.instance_22 = new lib.mcSTAGE();
	this.instance_22.setTransform(147.1,219.7,1,1,0,0,0,132.1,22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({_off:true},71).wait(84));

	// bg
	this.instance_23 = new lib.bg();
	this.instance_23.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23}]}).wait(155));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197.5,-183.9,588.8,442.6);


// symbols:
(lib.cranberries = function() {
	this.initialize(img.cranberries);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,51);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,53);


(lib.md = function() {
	this.initialize(img.md);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,213);


(lib.pd = function() {
	this.initialize(img.pd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,159);


(lib.princess01 = function() {
	this.initialize(img.princess01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,168);


(lib.princess02 = function() {
	this.initialize(img.princess02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,135);


(lib.princess03 = function() {
	this.initialize(img.princess03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,143);


(lib.sing = function() {
	this.initialize(img.sing);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,44);


(lib.txt09 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3FF00").s().p("AhBE6IAApzICDAAIAAJzg");
	this.shape.setTransform(44.1,12.6,0.31,0.31,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3FF00").s().p("AiaDpIAAnIICEAAIAAA+QAPgYATgQQAXgQAXgHQAugPAzANIAABrQgQgIgQgDQgSgEgTABQgfACgbAOQgQAJgNAQQgOARgHAQIAAEkg");
	this.shape_1.setTransform(35,14.8,0.31,0.31,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3FF00").s().p("AhBE6IAAnHICDAAIAAHHgAhBi/IAAh6ICDAAIAAB6g");
	this.shape_2.setTransform(24.8,11.9,0.31,0.31,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3FF00").s().p("AhXE6QgpgKgjgWQghgUgagcQgZgbgPgkQgTgwgIg6QgIg8AHg1QAGgyARgsQASgtAfgkQAignAqgXQAtgXAvgJQAwgJAxAEQAwAEAwASQAaAJAZASQAZASATAWQATAWAQAkQAPAkAGAhIieAAIgFgjQgDgTgFgNQgPgrglgRQgZgMggABQgeABgYANQgeAQgVAYQgVAZgNAcQgOAfgGAlQgGAmAAAgQABAqAGAsQAGApAVAkQAQAcAYASQAYATAfAJQAYAGAdgDQAdgDAZgJQAPgHAUgOQAUgPASgVIAAhSQAAgEgEgHQgFgGgHAAIh+AAIAAhMIDWAAQARAAAMAHQAOAKAIAMQAMATAAAVIAAD2IiHAAIAAg0QggAhgsAPQgsAPgrABQgnAAgrgKg");
	this.shape_3.setTransform(10.7,11.5,0.31,0.31,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DC1775").s().p("ACqB+IAAgNIg1ALIhCgCIAAgCIgKACIhBgDIAAgCIgEACIhEgCIABgFIgHACQgQAFgRAAQgOgBgOgEQgOgDgNgJQgMgIgJgKIgLgOIgFgLIgJgWQgFgOgCgUQgCgSADgTQADgRAHgPQAGgQAMgNQANgNAPgIQAQgHARgDQARgDARACQASADAQAGQAJAEAJAHQAJAHAJALQAKALAFAPIAFAPIADhJIA/ACIABAAIAAAAIABAAIAAABIAKATIgCAiIBCACIAAAEIAKgDQASgFATAGIAGABIACg2IBAACIABAAIAMAEIgJDsg");
	this.shape_4.setTransform(24.5,12.9);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,49.1,25.8);


(lib.txt08 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3FF00").s().p("AibI3QgyAAgggmQgdghAAgsIAAjnIB1AAIAADpQAAAJAIAIQAJAIAJAAIHSAAIgmBYgAGsIuQhKiKhDikIB+AAQA7CZBhCVgAo4IuQAvhSAchBQAkhQARhLIB+AAQghCGhSCogAA8GhQguhbglh2IBwAAQAcBPBBCCgAGeC2Qg5g5gxg7Qg5BNgtAnIiVAAQBohfBNhlQhGhOhMh2ICDAAQAlA3AiAoQA4hsAgh8IiHAAQgIATgnBWIh/AAQAphFAghYQAZhDAahiIB5AAQgYBYgQAuIEXAAIAABTIg7AAQgcBhgbBGQghBZgpBHQBIBTB/B3gAh4C2IgnhWIBbAAQAIAAAGgFQAHgHAAgJIAAk6QAAgKgJgIQgJgJgIABIhzAAIAAGyIhpAAIAAmyIhwAAQgIgBgJAIQgJAHAAAMIAAGlIhsAAIAAmjQAAg1AoglQAhgaAsAAICBAAIAAjVIBpAAIAADVIB/AAQA6ABAdAcQAdAcgBAzIAAFQQABASgJARQgHAQgOAMQgcAcgpAAgAmdA/QAdibAAiEIA/AAQgECrgUB0gAiLAxQgQhugEijIA+AAQAKCmARBrgAiYl+QBDhgAbhCIB2AAQguBjgoA/gAnOl+QguhLgnhXIB7AAQAeBMA3BWg");
	this.shape.setTransform(21.2,20.4,0.31,0.31,-4.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DC1775").s().p("AjHC+IAFgKQALgZAIgUQAIgZAEgWIgJABIgBgNIgVADIgNiSQgCgWAQgRIABAAQACgEAEgCQgRgXgNgYIgKgSIBEgFIADAIIACAEIAQgCIgCgSIA7gGIACAMIASgBIACgFIBAgGIgFANIAPgCIABgJIADgKIBBgFIgDAMIAZgCIgGAfIA7gEIAbA9IgVADQgNA4gPAlQAYAVAmAdIAYAUIhHAGIADAGQAWAvAiArIAPATIhNAGIgHgLIgLABIgEAPIibANQgkABgOgOQgOgOgCgEIgKAbIgCAIIhMAGg");
	this.shape_1.setTransform(21.7,20.5,1,1,0,0,0,-1,-0.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45.4,42.1);


(lib.txt07 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AARBaIgCgUQAPACAIABQADgBABgCIABgCIhhAAIgBAJIgWgDIAJgsIgTAAIAAgTIAWAAIAHgbIgKAKIgUgPQALgIAHgMQAHgIAFgLIAQAEIAAgFIgrAAIAAgVIArAAIAAgHIAXAAIAAAHIArAAIAAgHIAXAAIAAAHIAnAAIAAAVIgnAAIAAAJIgXAAIAAgJIgrAAIAAAIIgSAAIgCAEIB8AAIAAATIiGAAIgBABIgEAGIB/AAIgBAiIARAAIAAATIgTAAIgBATIAMAAIAAATIgPAAIgBAGQgBAHgIAFQgJAFgJAAgAAXAnIgIAKIAgAAIABgTIgyAAIAZAJgAgxAxIAtAAIgVgHIAJgMIgdAAgAAWACIgIAJIAjAAIABgOIgrAAgAgoALIAlAAIgTgIIAHgGIgWAAg");
	this.shape.setTransform(51.2,11.2,1,1,-1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhcBOIAGgfQACgZABgZIAVAAQAAAVgCASIAJAJIAAg3IgfAAIAAgWIAeAAIAAgQIgbAAIAAgWIAbAAIAAgSIAXAAIAAASIAVAAIAAAWIgVAAIAAAQIAXAAIAAAWIgWAAIAAAQIAUAAIAAAWIgUAAIAAAeQAIADAKABQASACAsAAQAdAAAQgCIgHAZIgmAAQguAAgWgDQgTgCgPgIIgNgJQgDAQgDAIgAAWArIAIgIQgVAKgRAHIgJgUIANgFIAAhXIAgAAIgBgcIAVAAIABAcIARAAIgQgNIAPgPQALAIAHAHIgKANIAJAAIAAAVIggAAQACAXACAJIABAEIAIgcIATAHQgHAdgLATIAAABQAFAKACAAIABgBIAAgUIAVAGQgDAcgHAGQgFAFgHAAQgJAAgIgLIgDgFQgHAJgLAIgAAiAeIAHgJQgDgHgBgKQgFgNgCgeIgOAAIAAA6IANgFg");
	this.shape_1.setTransform(32.9,11.7,1,1,-1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAABPQgiAIgsADIgKgTIA4gEQgNgFgHgGIgWAAIAAgQICOAAIAAAMQgMAIgQAHIAxAEIgHATQgugDgkgIgAACA+QAQgCALgEIgxAAQALAEALACgAhTAkIAAgkIClAAIAAAkgAAhAVIAbAAIAAgHIgbAAgAgPAVIAaAAIAAgHIgaAAgAg9AVIAZAAIAAgHIgZAAgAhGgEIAAgzICMAAIAAAzgAgvgTIBeAAIAAgEIheAAgAgvgkIBeAAIAAgEIheAAgAAUg6IAAgHIgpAAIAAAHIgXAAIAAgHIgrAAIAAgSIArAAIAAgGIAXAAIAAAGIApAAIAAgGIAXAAIAAAGIArAAIAAASIgrAAIAAAHg");
	this.shape_2.setTransform(14.4,12.4,1,1,-1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DC1775").s().p("AhBBmIgDAHIgPgBQgvgEghgIQggAHguAFIgNABIgfg7IARgBIAAgCIgrgOIArAAIAAg3IANAAIAAgaIgRAAIAAg5IArAAIAAgHIA+AAIAAAHIAEAAIAAgHIA/AAIAAAHIArAAIAAAMIABAAIAAgSIA9AAIAAASIAVAAIAAAKIACAAIgBgcIAyAAIAFgFIATANIAmAAIAAgIIA/AAIAAAIIAGAAIAAgIIA/AAIAAAIIAnAAIAAA8IgCAAIAAAgIgMAAIAAACIAQAAIAAA6IgIAAIAAARIACABIgCAAIAAAUIgUAAQgDAHgKAIIgDABQgMAGgPAAIgngBIgCgVIgkAAIgCAMIglgHIgEAMIg1AAQgrABgbgEQgRgCgOgGIgIAYg");
	this.shape_3.setTransform(31.2,12.2,1,1,-1.9);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62.7,24.1);


(lib.txt06 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhYBFQAigFASgOIAFgFIg1AAIAAgWIBBAAIAEgMIhKAAIAAgUIBNAAIAAgJIhDAAIAAgWIBDAAIAAgKIhIAAIAAgWIApAAIgEgFIATgNIAMASIAfAAIAHgSIAZAIIgGAKIAqAAIAAAWIhJAAIAAAKIBDAAIAAAWIhDAAIAAAJIBNAAIAAAUIhiAAIARADIgCAJIBPAAIAAAWIg8AAQAIAGAJADQASAJAgAEIgJAXQgggFgZgOQgPgJgMgPQgGAMgJAHQgWARgmAIg");
	this.shape.setTransform(48.7,11.5,1,1,-1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKBZIAAgeIhOAAIAAgVIBOAAIAAgLIAUAAIAAALIBPAAIAAAVIhPAAIAAAegAhOARQAMgHAIgKQAJgIAEgKIAWAFIgIANIAKAEIAQAGIgMAWQgJgEgHgGQgFgDgEgEQgJALgMAIgAAuAVIgKgIQgHAKgLAJIgPgQQALgJAFgHQAIgKAEgJIAVAFIgFAMQAFACAGACQAIAFAMADIgMAWQgLgEgJgHgAhOgUIAAgVIBEAAIAAgMIAUAAIAAAMIBIAAIAAAVgAAWgvIAAgJIgtAAIAAAJIgWAAIAAgJIgrAAIAAgVIArAAIAAgLIAWAAIAAALIAtAAIAAgLIAXAAIAAALIAsAAIAAAVIgsAAIAAAJg");
	this.shape_1.setTransform(30.1,12.2,1,1,-1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJBZIAAgsQgMALgNAIQgUAOgXAIIgLgWQAbgKATgMQASgKAPgOIAAglIhJAAIAAgVIBJAAIAAgOIAUAAIAAAOIBIAAIAAAVIhIAAIAAAiQAOAOAPALQAVAPAcAJIgMAXQgWgIgSgNQgLgHgPgPIAAAtgAhNAZQALgKAFgKQAHgJACgNIAUAEIgDANIAGAHQAGAGAFADIgPATQgFgEgGgHIgBgCQgHAKgIAJgAA2AZIgGgGQgFAHgHAHIgQgQQAIgHAFgJQAFgFABgMIAVAFIgDALIAKAIQAJAHAHACIgMAVQgHgEgKgJgAAZgvIAAgKIgxAAIAAAKIgXAAIAAgKIgnAAIAAgVIAnAAIAAgKIAXAAIAAAKIAxAAIAAgKIAWAAIAAAKIAoAAIAAAVIgoAAIAAAKg");
	this.shape_2.setTransform(11.6,12.9,1,1,-1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DC1775").s().p("ABOBSIgxAAIAAAeIg8AAIAAgeIgxAAIgSAhIgQgGQgUgIgTgMIAAAXIg9AAIAAgZQgTAMgYAJIgRAGIgcg7IAcgKIgSgRIAQgPQAGgFAEgGIgWAAIAAgkIgEAAIAAg9IAnAAIAAgLIA+AAIAAALIAMAAIAAgLIA+AAIAAALIAoAAIAAAAIAKAAIAAgLIA/AAIAAALIAFAAIAAgLIA/AAIAAALIAtAAIAAAGIANAAIAngaIARAaIAKAAIAGgXIBDAUIgCADIAdAAIAAA+IgGAAIAAAAIAKAAIAAA8IgEAAIAAASIAPACIgZA+IgQgDQgjgGgbgPQgJgFgIgHIgEAFQgbAUgrAJIgQADg");
	this.shape_3.setTransform(30.2,12.2,1,1,-1.9);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60.8,24.5);


(lib.txt05 = function() {
	this.initialize();

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFuCtIgBgBQhYhUh3iWQgMgSgWAAIkAAAQgSAAgPAUQgbAlh+CSIgpAxIgBABIizAAIAGgFQBHg4BJhPQBKhMBAhYQAMgRAagMQAYgMAcAAIE5AAQAcAAAaANQAcAPASAZQA/BRBNBMQBNBOBBA0IAGAFg");
	this.shape.setTransform(93.4,16,0.301,0.301,-2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkVCFIAFgEQAygzAvhOQAmhCAYhAIAAgCIB3AAIgBADQgJAigKAVIEkAAIAABUIibAAQAPAiApBDIAEAHIiGAAIgBgBQgSgfgXg4IgHgUIg3AAQgcA4gyBCIgBABg");
	this.shape_1.setTransform(84.6,6.8,0.301,0.301,-2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlSDBQg1AAgeghQgdgdAAgxIAAiqQAAgsAfgfQAdgdAvgBIKnAAQAzAAAfAcQAhAgAAAzIAAChQAAAzgaAdQgdAig1AAgAlKhgQgIAGAAANIAACbQAAANAJAIQAIAHAOAAIJjAAQAfAAAAgcIAAiYQgBgMgGgIQgIgJgQAAIpmAAQgNgBgHAIg");
	this.shape_2.setTransform(93.9,28.1,0.301,0.301,-2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjdAsIAAhWIG7AAIAABWg");
	this.shape_3.setTransform(93.4,18.4,0.301,0.301,-2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAlCFIAAgBQgOgTgTglQgNghgNghIg1AAQgoBGghAmIAAAAIiOAAIAFgEQBdhoA7iMIAAgCIB9AAIgBADQgFAVgSAiIFCAAIAABUIi+AAQAaA5AsA+IADAEg");
	this.shape_4.setTransform(99.8,6,0.301,0.301,-2.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgsB5IAAgDQAYhzgBh5IgBgCIBDAAIAAACQgCBOgCApQgEBCgJA0IAAACg");
	this.shape_5.setTransform(55,21.1,0.301,0.301,-2.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnF6IAArzIBPAAIAALzg");
	this.shape_6.setTransform(58.2,23.9,0.301,0.301,-2.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ACaF6IgBAAQhihhg1iTQg0CUhqBgIgBAAIh8AAIAFgEQC7iaAcinIjAAAIAAg/IDFAAQAGhNgChsIieAAIAAhAICeAAIAAh2IBPAAIAAB2IBoAAQAkAAAUATQAWAVgBAmIAACrIA4AAIAAA/Ij1AAIgFAmIA9AAIAAACQBLDEB9BVIAHAEgAAZgKIBnAAIAAioQAAgRgOAAIhXAAQABCHgDAyg");
	this.shape_7.setTransform(68.6,23.4,0.301,0.301,-2.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTBbIAAgCQgahQgFhhIgBgCIBBAAIAAACQAHBcAeBUIABADg");
	this.shape_8.setTransform(61,19.9,0.301,0.301,-2.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOHOIgahNIB5AAQAKAAAHgHQAGgHAAgMIAAmwIjYAAQglAAgbgaQgbgaAAgsIAAjPQAAgoAegaQAZgTAgAAIDlAAQAwAAAXAiQAUAbAAAoIAALTQAAAzgaAXQgXAZg0AAgAhniuQAAALAHAGQAHAHALAAIC2AAIAAhPIjPAAgAhfl5QgIAHAAAKIAAA1IDPAAIAAg0QAAgKgIgHQgIgIgLAAIibAAQgKAAgHAHg");
	this.shape_9.setTransform(46.4,22.3,0.301,0.301,-2.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiYC9QgpAAgZgdQgXgZAAgmIAAjDQAAgsAggZQAdgVAiAAIEfAAQA1AAAaAgQAWAZAAApIAAC4QAAAqgYAYQgaAdg7AAgAiDhpQgJAHAAAJIAACvQAAALAHAHQAHAHAJAAIDpAAQALAAAHgHQAHgIAAgMIAAirQAAgKgHgHQgHgHgLAAIjnAAQgIAAgIAGg");
	this.shape_10.setTransform(39.6,27.5,0.301,0.301,-2.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AjJHOIAAs+QAAgsAegaQAagXAlAAIDZAAQAsAAAbAfQAWAcAAApIAAC+QAAArgWAZQgaAeg2AAIjIAAIAAIXgAhkiWICyAAQAKAAAHgHQAGgHAAgLIAAg2IjJAAgAhdl5QgHAHAAAKIAAA1IDJAAIAAg1QAAgJgIgIQgHgHgHAAIibAAQgKAAgHAHg");
	this.shape_11.setTransform(32.1,23.1,0.301,0.301,-2.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTBbIAAgCQgahSgGhfIAAgCIBBAAIAAACQAHBZAeBXIABADg");
	this.shape_12.setTransform(8.9,22.7,0.301,0.301,-2.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgmF6IAArzIBOAAIAALzg");
	this.shape_13.setTransform(6.1,26.7,0.301,0.301,-2.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ACaF6IgBAAQhihgg1iUQg0CUhqBgIgBAAIh8AAIAFgEQC7iaAcinIjAAAIAAg/IDFAAQAGhDgCh2IieAAIAAhAICeAAIAAh2IBPAAIAAB2IBoAAQAkAAAUATQAVAVAAAmIAACrIA4AAIAAA/Ij1AAQgDAYgDAOIA+AAIABACQBKDEB9BVIAHAEgAAZgKIBnAAIAAioQAAgRgOAAIhWAAQAACHgDAyg");
	this.shape_14.setTransform(16.5,26.1,0.301,0.301,-2.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgsB5IAAgDQAYhzgBh5IAAgCIBCAAIAAACQgDCUgOBZIAAACg");
	this.shape_15.setTransform(3,23.9,0.301,0.301,-2.9);

	// 圖層 3
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DC1775").s().p("AoVDCIgGhjIgkACIAFgbQAEghgBgiIgCgUIAYgBIgCgvIBCgDIACAjIAggCIgBgjIBCgDIACAjIAKgBQASgBANALIAEADIgDgwQAAgLAEgJQADgKAIgIQANgMATgBIBBgEQAWgBAQAQIAGgGIAAgBQANgLARgBIBDgDQAMgBALAFQAKAEAHAJQAKALABAQIBAgDIACAjIAggCIgBgjIBCgDIACAjIAGgBIAQgSIAAAAIABAAIAQgRQAMgOAKgVQAKgTAGgSIAFgOIBQgFIgFASIA+gEIAHgRIBPgEIgEARIBXgEIADBEIgoACIAcAjIg6ADQASASASASQATAQAQAMIA0AiIhHAEQAEALABALIADAwQABASgHANIgFAHQgHAKgKAEQgKAGgNABIjJAKQgNABgLgFIhVAFIgHgGQgRgOgNgTIgDgEIgCAEQgMAVgQAQIgGAGIhmAFIAGgGIgCggQgBARgLALQgLAOgZABIgzADIgMggIhVAEQgJABgJgEQgJgDgHgGIACAnIAHAFIgHAAIAAADIhIAEIAAgDIglACIgHgHQgPgNgMgQIgJAAQgMATgPAPIgGAGIhoAFg");
	this.shape_16.setTransform(57.3,20.1,1,1,0,0,0,-0.3,0);

	this.addChild(this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,115.2,40.2);


(lib.txt04 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPBDQgOgCgKgEQgIgDgJgHQgGgFgEAAQgCAAgGAFIgOAQIgOgOIAQgSQAMgKAGAAIAIADQAigaAdggIhfAAIAAgSIA2AAIAAgUIASAAIAAAUIA0AAIAAAPQgjArgpAdIAOAHQANAEAeAAQATAAALgCIgFAVQggAAgVgCg");
	this.shape.setTransform(12.9,12.3,1,1,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2).p("ABchaQAmAmAAA0QAAA1gmAnQgGAFgGAFQgeAYgmADQgGABgGAAQg0AAgngmQgmgnAAg1QAAgwAhgkQACgDADgDQAngnA0AAQAsAAAiAbQAHAFAHAHg");
	this.shape_1.setTransform(13,13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DC1775").s().p("AhbBcQgmgnAAg1QAAgwAhgkIAFgGQAngnA0AAQAsAAAiAbQAHAFAHAHQAmAmAAA0QAAA1gmAnIgMAKQgeAYgmADIgMABQg0AAgngmg");
	this.shape_2.setTransform(13,13);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,26.1,26.1);


(lib.txt03 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2006C").s().p("ABtBCIgDgQQAFACAIAAQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBIABgHIAAhsIAQAAIAABwQAAALgDAFQgFAFgLAAIgMgCgABUA7QgFgEgGgIIAKgJIgYAAIAKAIQgJANgQAJIgIgQQALgFAIgJIgKAAIAAhXIgKAMQgKgKgJgFIANgNQAJAGAHAGIAAgIIAzAAIAABjIgJAAQADAEAFAEQAEAEAEACIgIAQQgFgDgGgGgAA9AWIASAAIAAgNIgSAAgAA9gEIASAAIAAgNIgSAAgAA9ggIASAAIAAgNIgSAAgAAKA7QAIgaAFgcIARAFQgIAogGASgAD4A4QAGgJADgGQAEgJABgJIgGAAIAAgpIAiAAIAAApIgZAAIAMADIgCAMIAGAFQAFAFAFACIgIAQQgGgEgFgFIgDgDQgEAHgGAGgAEOAIIAFAAIAAgLIgFAAgAC8BCIgBgRQAHACAFAAIACgBIABgFIAAgDIgGABQgBgNgDgJIAJgCIABAFIABgIIgcAAIAAADIgQAAIAAhSIA4AAIAAAPIgQAAIAAAIIANAAIAAADQALgFAKgHQANgJAHgJIALAKIgBACQAFAEAHAEQAFAFAMAEIgJAOIgIgEIAAAGIgsAAIAAgHIgMAGIgHgKIAAAHIgNAAIAAAHIANAAIAAAPIgNAAIAAAFIASAAQgBAlgCAQQAGgHAEgHQAEgJABgIIgJAAIAAgpIAhAAIAAApIgVAAIAMADIgCAIIAMAIIgJAOIgIgHQgEAJgJAIIgLgKIAAACQAAAEgEADQgGACgEAAIgLgBgADpAIIAGAAIAAgLIgGAAgACvABIAJAAIAAgFIgJAAgACvgTIAJAAIAAgHIgJAAgADzglIAAAAIAUAAIgKgIgACvgoIAJAAIAAgIIgJAAgAhfBBIAAgQIAmAAIAAgMIghAAIAAgQIAhAAIAAgIIggAAIAAhLIBPAAIAABLIgfAAIAAAIIAfAAIAAAQIgfAAIAAAMIAlAAIAAAQgAgpgCIAPAAIAAgPIgPAAgAhJgCIAQAAIAAgPIgQAAgAgpghIAPAAIAAgNIgPAAgAhJghIAQAAIAAgNIgQAAgAjoA+QgUAAAAgRIAAhKIASAAIAABFQAAAGAHAAIAKAAQAPAAACgBQADgCACgFIABgQIASAJQgCAWgFAFQgDACgHACQgEABgUAAIgPgBgACcAyQADgOAAgNIAMADIgBABIAJgCQADAKABANIgLADIgCgSQgBAKgDAMgAiLAkIAOgCIAAgiIgMAAIAAgRIAMAAIAAgZIgOAAIAAgRIAuAAIAAARIgPAAIAAAZIANAAIAAARIgNAAIAAAeIAPgEIABAQQgSAGgbAGgAC1AYIAKgCIAEAXIgKACQgCgNgCgKgAkjAmQAJgeAGgdIAQAGQgHAmgHAYgAi5gPIAOgIQALAZAHAdIgSAHQgGgfgIgWgABmAhIAAhVIAQAAIAABVgAAIgUIAMgNQAKAIAHAHIgMAPQgIgKgJgHgAj1gyIANgNQATALAOANIgNAQQgRgRgQgKg");
	this.shape.setTransform(29.2,6.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,58.4,13.7);


(lib.txt02 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2006C").s().p("AjgBTQAEgTgHgoIARgDQADANABALQADAJAJAEIgJgsIgfAGIgDgSIAYgCIgCgNIgVADIgDgSIAUgDIgDgSIATgEIADASIATgDIADASIgSADIACANIAUgDIAEAQIgOACIACAQIAPgCIADARIgOADIADATQADABAggFIA7gLIgDAUIhKANQgUACgJgCQgLgDgHgHQAAAOgDAIgACKBOIAFgaIg8gKIADgRIA8ALIABgGIATAEIgBAFIA9ALIgDARIg8gLIgFAZgAilADIBAgKIAJAxIhAAMgAiOAQIADASIAagEIgDgTgAAVA0IAAgjIgQAAIAAAIIgQAAIAAgbIgLAFIgIgMIAAA9IgTAAIAAg0IgMALIgGgWQASgRAJgSIgZAAIAAgTIAYAAIgNgUIARgIIAPATIgQAJIAVAAIAAAQIgNAXIAAAEIAHgDIAMASIAAg9IAgAAIAAgXIASAAIAAAXIAiAAIAABcIgSAAIAAgHIgQAAIAAAjgAAnAAIAQAAIAAgQIgQAAgAAFAAIAQAAIAAgQIgQAAgAAnghIAQAAIAAgRIgQAAgAAFghIAQAAIAAgRIgQAAgACZAaIgBADIgTgEIAHgnIgFAFIgIgQQAUgSAOgXIASAGIgIAMIAVAEIgCgLIATgCIADARIAbAFIgCANIgdgFIgBAIIAaAFIgDAMIgagEIgBAGIAaAEIgCANIgagFIgBAJIAdAFIgCANgACbANIAaAEIABgIIgagFgACegGIAaAEIABgIIgZgEgACigbIAaAFIABgJIgZgEgABcAOQAMgNAOgRIAMALIgXAfgAiugKQAOgJAAgTIgQADIgDgRIBHgMIAEAkQABAFgDAFQgDAFgFACQgEACgRADQgDgHgFgIIALgCQAGgBACgDQABgCgCgPIgQADQABAcgVAOIgNgLgABggmIAMgMIAWATIgMAMIgWgTgABug+IALgLIAWASIgNAMQgIgKgMgJg");
	this.shape.setTransform(24,9.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,48,19);


(lib.TITBG = function() {
	this.initialize();

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FC7EB9").ss(4.9).p("AH8kpQgKiIhwhnQgOgNgPgMQhdhLh3gcQhHgRhPAAQhQAAhIARQh2AcheBLQiKBtgLCXQkrBEklCWQhAAhAAApIAAKLQAAAiAeAFQAFABAGAAMAjcAAAQAoAAAAgoIAAqLQAAgUgJgPQgJgPgTgJQkxiXkrhHQgNgEgNgDg");
	this.shape.setTransform(117.2,153.8);

	// 圖層 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FC7EB9").s().p("APhD+QgHgIgBgKQABgLAHgIQAHgIALABQAMgBAHAIQAHAIABALQgBAKgHAIQgHAIgMgBQgLABgHgIgAwFD+QgIgIAAgKQAAgLAIgIQAHgIALABQALgBAIAIQAHAIAAALQAAAKgHAIQgIAIgLgBQgLABgHgIgAPhjYQgHgIgBgLQABgLAHgHQAHgIALAAQAMAAAHAIQAHAHABALQgBALgHAIQgHAHgMABQgLgBgHgHgAwFjYQgIgIAAgLQAAgLAIgHQAHgIALAAQALAAAIAIQAHAHAAALQAAALgHAIQgIAHgLABQgLgBgHgHg");
	this.shape_1.setTransform(117.5,182.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FC7EB9").p("AQrgQQiLhFiug6QiYgyiiglQgMiuhwhZQhJg6hJgbQhPgdhgAAQhkAAhHAYQhGAXhHA4Qg9AxgmBMQgjBHgGBKQiVAhiQAxQihA3iDBDQg8AeAAAlIAAIVQAAAmAmAAMAhQAAAQAnAAAAgmIAAoVQAAglgkgQg");
	this.shape_2.setTransform(117.8,153.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(115,127,124,0.557)").ss(4.9).p("AyVJVQAGAYAgAAIEPAAIfOAAQAoAAAAgoIAAqKQAAgpglgTAH5l2QgRiPiDho");
	this.shape_3.setTransform(120.5,162.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AtDKqIkrAAIgKgBQgegFAAgiIAAgNIAAp+QAAgpBAghQEliWEqhEQAMiXCKhtQBdhLB3gcQBHgRBRAAQBOAABIARQB3AcBdBLIAdAZQBwBnAKCIIAaAHQErBHExCXQATAJAJAPQAJAPAAAUIAAKLQAAAogpAAgAxLI4QgBAmAmAAMAhRAAAQAmAAAAgmIAAoVQAAgkgjgRQAjARAAAkIAAIVQAAAmgmAAMghRAAAQgmAAABgmIAAoVQAAgkA7gfQCDhDCig3QCQgxCUghQAGhKAjhHQAmhMA9gxQBHg4BHgXQBGgYBlAAQBfAABPAdQBJAbBJA6QBwBZAMCuQCiAlCYAyQCvA6CLBFQiLhFivg6QiYgyiiglQgMiuhwhZQhJg6hJgbQhPgdhfAAQhlAAhGAYQhHAXhHA4Qg9AxgmBMQgjBHgGBKQiUAhiQAxQiiA3iDBDQg7AfAAAkIAAIVg");
	this.shape_4.setTransform(117.6,153.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FC7EB9").s().p("AgRKnQgHgIgBgKQABgKAHgIQAHgHAKAAQAKAAAHAHQAJAIAAAKQAAALgJAHQgHAIgKAAQgJAAgIgIgAgRJeQgHgJgBgJQABgLAHgHQAHgIAKAAQAKAAAHAIQAJAHAAALQAAAKgJAIQgHAHgKAAQgJAAgIgHgAgRIUQgHgIgBgKQABgKAHgIQAHgIAKABQAKgBAHAIQAJAIAAAKQAAAKgJAIQgHAIgKgBQgJABgIgIgAgRHKQgHgHgBgLQABgKAHgIQAHgHAKAAQAKAAAHAHQAJAIAAAKQAAALgJAHQgHAIgKAAQgJAAgIgIgAgRGBQgHgIgBgKQABgLAHgHQAHgIAKAAQAKAAAHAIQAJAHAAALQAAAKgJAIQgHAHgKAAQgJAAgIgHgAgRE3QgHgIgBgJQABgLAHgIQAHgHAKAAQAKAAAHAHQAJAIAAALQAAAKgJAHQgHAIgKAAQgJAAgIgIgAgRDuQgHgIgBgKQABgKAHgIQAHgHAKgBQAKABAHAHQAJAIAAAKQAAALgJAHQgHAIgKAAQgJAAgIgIgAgRClQgHgJgBgJQABgLAHgHQAHgIAKAAQAKAAAHAIQAJAHAAALQAAAKgJAIQgHAHgKAAQgJAAgIgHgAgRBbQgHgIgBgKQABgKAHgIQAHgIAKABQAKgBAHAIQAJAIAAAKQAAAKgJAIQgHAIgKgBQgJABgIgIgAgRARQgHgHgBgKQABgJAHgIQAHgHAKAAQAKAAAHAHQAJAIAAAJQAAAKgJAHQgHAIgKAAQgJAAgIgIgAgRg2QgHgIgBgKQABgLAHgHQAHgIAKAAQAKAAAHAIQAJAHAAALQAAAKgJAIQgHAHgKAAQgJAAgIgHgAgRiAQgHgIgBgKQABgKAHgIQAHgHAKAAQAKAAAHAHQAJAIAAAKQAAALgJAHQgHAIgKAAQgJAAgIgIgAgRjJQgHgIgBgKQABgKAHgIQAHgHAKgBQAKABAHAHQAJAIAAAKQAAALgJAHQgHAIgKAAQgJAAgIgIgAgRkSQgHgJgBgJQABgLAHgHQAHgIAKAAQAKAAAHAIQAJAHAAALQAAAKgJAIQgHAHgKAAQgJAAgIgHgAgRlcQgHgIgBgKQABgKAHgIQAHgIAKABQAKgBAHAIQAJAIAAAKQAAAKgJAIQgHAIgKgBQgJABgIgIgAgRmmQgHgHgBgLQABgKAHgIQAHgHAKAAQAKAAAHAHQAJAIAAAKQAAALgJAHQgHAIgKAAQgJAAgIgIgAgRnvQgHgIgBgKQABgLAHgHQAHgIAKAAQAKAAAHAIQAJAHAAALQAAAKgJAIQgHAHgKAAQgJAAgIgHgAgRo4QgHgJgBgKQABgKAHgIQAHgHAKAAQAKAAAHAHQAJAIAAAKQAAALgJAIQgHAHgKAAQgJAAgIgHgAgRqCQgHgIgBgKQABgKAHgIQAHgHAKgBQAKABAHAHQAJAIAAAKQAAALgJAHQgHAIgKAAQgJAAgIgIg");
	this.shape_5.setTransform(21.6,147.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AgRKnQgHgIAAgKQAAgLAHgHQAIgHAJAAQAKAAAIAHQAHAHABALQgBALgHAHQgIAIgKAAQgJAAgIgIgAgRJeQgHgJAAgJQAAgLAHgHQAIgIAJAAQAKAAAIAIQAHAHABALQgBAKgHAIQgIAHgKAAQgJAAgIgHgAgRIUQgHgIAAgKQAAgLAHgHQAIgIAJABQAKgBAIAIQAHAHABALQgBAKgHAIQgIAHgKAAQgJAAgIgHgAgRHKQgHgHAAgLQAAgKAHgIQAIgHAJAAQAKAAAIAHQAHAIABAKQgBALgHAHQgIAIgKAAQgJAAgIgIgAgRGBQgHgIAAgKQAAgLAHgHQAIgIAJAAQAKAAAIAIQAHAHABALQgBAKgHAIQgIAHgKABQgJgBgIgHgAgRE4QgHgJAAgJQAAgLAHgHQAIgIAJAAQAKAAAIAIQAHAHABALQgBAKgHAIQgIAHgKAAQgJAAgIgHgAgRDuQgHgIAAgKQAAgLAHgHQAIgHAJAAQAKAAAIAHQAHAHABALQgBALgHAHQgIAIgKAAQgJAAgIgIgAgRClQgHgJAAgJQAAgLAHgHQAIgIAJAAQAKAAAIAIQAHAHABALQgBAKgHAIQgIAHgKAAQgJAAgIgHgAgRBbQgHgIAAgKQAAgLAHgHQAIgIAJABQAKgBAIAIQAHAHABALQgBAKgHAIQgIAHgKAAQgJAAgIgHgAgRARQgHgHAAgKQAAgJAHgIQAIgHAJAAQAKAAAIAHQAHAIABAJQgBAKgHAHQgIAIgKAAQgJAAgIgIgAgRg2QgHgIAAgKQAAgLAHgHQAIgIAJAAQAKAAAIAIQAHAHABALQgBAKgHAIQgIAHgKABQgJgBgIgHgAgRh/QgHgIAAgKQAAgLAHgHQAIgIAJAAQAKAAAIAIQAHAHABALQgBAKgHAIQgIAHgKAAQgJAAgIgHgAgRjJQgHgIAAgKQAAgLAHgHQAIgHAJAAQAKAAAIAHQAHAHABALQgBALgHAHQgIAIgKAAQgJAAgIgIgAgRkSQgHgJAAgJQAAgLAHgHQAIgIAJAAQAKAAAIAIQAHAHABALQgBAKgHAIQgIAHgKAAQgJAAgIgHgAgRlcQgHgIAAgKQAAgLAHgHQAIgIAJABQAKgBAIAIQAHAHABALQgBAKgHAIQgIAHgKAAQgJAAgIgHgAgRmmQgHgHAAgLQAAgKAHgIQAIgHAJAAQAKAAAIAHQAHAIABAKQgBALgHAHQgIAIgKAAQgJAAgIgIgAgRnvQgHgIAAgKQAAgLAHgHQAIgIAJAAQAKAAAIAIQAHAHABALQgBAKgHAIQgIAHgKABQgJgBgIgHgAgRo4QgHgJAAgJQAAgLAHgHQAIgIAJAAQAKAAAIAIQAHAHABALQgBAKgHAIQgIAHgKAAQgJAAgIgHgAgRqCQgHgIAAgKQAAgLAHgHQAIgHAJAAQAKAAAIAHQAHAHABALQgBALgHAHQgIAIgKAAQgJAAgIgIg");
	this.shape_6.setTransform(23.2,148.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FC7EB9").s().p("AgRKnQgHgIgBgKQABgKAHgIQAIgHAJAAQAKAAAIAHQAHAIABAKQgBALgHAHQgIAIgKAAQgJAAgIgIgAgRJeQgHgJgBgJQABgLAHgHQAIgIAJAAQAKAAAIAIQAHAHABALQgBAKgHAIQgIAHgKAAQgJAAgIgHgAgRIUQgHgIgBgKQABgKAHgIQAIgIAJABQAKgBAIAIQAHAIABAKQgBAKgHAIQgIAIgKgBQgJABgIgIgAgRHKQgHgHgBgLQABgKAHgIQAIgHAJAAQAKAAAIAHQAHAIABAKQgBALgHAHQgIAIgKAAQgJAAgIgIgAgRGBQgHgIgBgKQABgLAHgHQAIgIAJAAQAKAAAIAIQAHAHABALQgBAKgHAIQgIAHgKABQgJgBgIgHgAgRE4QgHgJgBgKQABgKAHgIQAIgHAJAAQAKAAAIAHQAHAIABAKQgBALgHAIQgIAHgKAAQgJAAgIgHgAgRDuQgHgIgBgKQABgKAHgIQAIgHAJgBQAKABAIAHQAHAIABAKQgBALgHAHQgIAIgKAAQgJAAgIgIgAgRClQgHgJgBgJQABgLAHgHQAIgIAJAAQAKAAAIAIQAHAHABALQgBAKgHAIQgIAHgKAAQgJAAgIgHgAgRBbQgHgIgBgKQABgKAHgIQAIgIAJABQAKgBAIAIQAHAIABAKQgBAKgHAIQgIAIgKgBQgJABgIgIgAgRARQgHgHgBgKQABgJAHgIQAIgHAJAAQAKAAAIAHQAHAIABAJQgBAKgHAHQgIAIgKAAQgJAAgIgIgAgRg2QgHgIgBgKQABgLAHgHQAIgIAJAAQAKAAAIAIQAHAHABALQgBAKgHAIQgIAHgKABQgJgBgIgHgAgRiAQgHgIgBgKQABgKAHgHQAIgIAJAAQAKAAAIAIQAHAHABAKQgBALgHAHQgIAIgKAAQgJAAgIgIgAgRjJQgHgIgBgKQABgKAHgIQAIgHAJgBQAKABAIAHQAHAIABAKQgBALgHAHQgIAIgKAAQgJAAgIgIgAgRkSQgHgJgBgJQABgLAHgHQAIgIAJAAQAKAAAIAIQAHAHABALQgBAKgHAIQgIAHgKAAQgJAAgIgHgAgRlcQgHgIgBgKQABgKAHgIQAIgIAJABQAKgBAIAIQAHAIABAKQgBAKgHAIQgIAIgKgBQgJABgIgIgAgRmmQgHgHgBgLQABgKAHgIQAIgHAJAAQAKAAAIAHQAHAIABAKQgBALgHAHQgIAIgKAAQgJAAgIgIgAgRnvQgHgIgBgKQABgLAHgHQAIgIAJAAQAKAAAIAIQAHAHABALQgBAKgHAIQgIAHgKAAQgJAAgIgHgAgRo5QgHgIgBgKQABgKAHgIQAIgHAJAAQAKAAAIAHQAHAIABAKQgBALgHAHQgIAIgKAAQgJAAgIgIgAgRqCQgHgIgBgKQABgKAHgIQAIgHAJgBQAKABAIAHQAHAIABAKQgBALgHAHQgIAIgKAAQgJAAgIgIg");
	this.shape_7.setTransform(213.2,68.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AgRKnQgHgIAAgKQAAgLAHgHQAIgHAJAAQAKAAAIAHQAHAHABALQgBALgHAHQgIAIgKAAQgJAAgIgIgAgRJeQgHgJAAgJQAAgLAHgHQAIgIAJAAQAKAAAIAIQAHAHABALQgBAKgHAIQgIAHgKAAQgJAAgIgHgAgRIUQgHgIAAgKQAAgLAHgHQAIgIAJABQAKgBAIAIQAHAHABALQgBAKgHAIQgIAHgKAAQgJAAgIgHgAgRHKQgHgHAAgLQAAgKAHgIQAIgHAJAAQAKAAAIAHQAHAIABAKQgBALgHAHQgIAIgKAAQgJAAgIgIgAgRGBQgHgIAAgKQAAgLAHgHQAIgIAJAAQAKAAAIAIQAHAHABALQgBAKgHAIQgIAHgKABQgJgBgIgHgAgRE4QgHgJAAgJQAAgLAHgHQAIgIAJAAQAKAAAIAIQAHAHABALQgBAKgHAIQgIAHgKAAQgJAAgIgHgAgRDuQgHgIAAgKQAAgLAHgHQAIgHAJAAQAKAAAIAHQAHAHABALQgBALgHAHQgIAIgKAAQgJAAgIgIgAgRClQgHgJAAgJQAAgLAHgHQAIgIAJAAQAKAAAIAIQAHAHABALQgBAKgHAIQgIAHgKAAQgJAAgIgHgAgRBbQgHgIAAgKQAAgLAHgHQAIgIAJABQAKgBAIAIQAHAHABALQgBAKgHAIQgIAHgKAAQgJAAgIgHgAgRARQgHgHAAgKQAAgJAHgIQAIgHAJAAQAKAAAIAHQAHAIABAJQgBAKgHAHQgIAIgKAAQgJAAgIgIgAgRg2QgHgIAAgKQAAgLAHgHQAIgIAJAAQAKAAAIAIQAHAHABALQgBAKgHAIQgIAHgKABQgJgBgIgHgAgRh/QgHgJAAgJQAAgLAHgHQAIgIAJAAQAKAAAIAIQAHAHABALQgBAKgHAIQgIAHgKAAQgJAAgIgHgAgRjJQgHgIAAgKQAAgLAHgHQAIgHAJAAQAKAAAIAHQAHAHABALQgBALgHAHQgIAIgKAAQgJAAgIgIgAgRkSQgHgJAAgJQAAgLAHgHQAIgIAJAAQAKAAAIAIQAHAHABALQgBAKgHAIQgIAHgKAAQgJAAgIgHgAgRlcQgHgIAAgKQAAgLAHgHQAIgIAJABQAKgBAIAIQAHAHABALQgBAKgHAIQgIAHgKAAQgJAAgIgHgAgRmmQgHgHAAgLQAAgKAHgIQAIgHAJAAQAKAAAIAHQAHAIABAKQgBALgHAHQgIAIgKAAQgJAAgIgIgAgRnvQgHgIAAgKQAAgLAHgHQAIgIAJAAQAKAAAIAIQAHAHABALQgBAKgHAIQgIAHgKABQgJgBgIgHgAgRo4QgHgJAAgJQAAgLAHgHQAIgIAJAAQAKAAAIAIQAHAHABALQgBAKgHAIQgIAHgKAAQgJAAgIgHgAgRqCQgHgIAAgKQAAgLAHgHQAIgHAJAAQAKAAAIAHQAHAHABALQgBALgHAHQgIAIgKAAQgJAAgIgIg");
	this.shape_8.setTransform(214.8,69.5);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.3,0,238.3,224.5);


(lib.tit = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3FF00").s().p("AgWBaQgcAAAAgWIAAgzIAaAAIAAAqQgBAJAMAAIANABQAYgBAEgBQAFgBABgFQACgDABgNIAZAPQgDAVgIAGQgEABgLACQgJABgbAAIgWgBgAhhBFQAKgVAGgWIAYAIQgHAdgJARgAAwAkIAXgOQAQAVALAVIgZAPQgKgYgPgTgAgPAOIATgOQAPARAKASIgWAOQgHgTgPgQgAhcgFQAcgFATgKQgPgJgWgJIALgWQAbAJAUALQAHgLAEgQIhHAAIAAgXICnAAQAABYgJAHQgHALgSAAQgHgBgMgCIgFgXQAMADAJAAQAGAAACgFQADgGABgxIguAAQgHAkgSATQgYAUgrAJg");
	this.shape.setTransform(104,19.2,1.506,1.506,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3FF00").s().p("AgZBkQgdgBAAgWIAAglIAZAAIAAAeQAAAIANAAIAPAAQAYAAADgBQAFgCABgFQACgCABgPIAZAOQgDAXgIAFQgEADgLABQgIACgbAAgAhkBVQALgWAFgUIAYAIQgHAZgKAVgAA1AxIAWgLQAOAVAKAXIgYAMQgIgXgOgWgAgQAuIATgNQAKAMAHAOIgUAMQgGgOgKgLgAALATQAPgHANgLQgLgLgHgRIgDAEIgIgGIAAAkQAAAbgZAAIgJgBIgEgXQAHADAGAAQAFAAAAgKIgOAFQgCgIgGgQIAAAxIgXAAIAAguIgHAXIgOgHIAAAeIgWAAIAAhhIARAAQgGgKgJgLIATgMQAKALAJAQIgLAGIAOAAIAAgkIAXAAIAAAkIARAAIgMgGQALgOAFgPIATAHQgHASgFAKIAOAAIAAAIIAFgKQAHgOAGgTIAXAIIgFANIA3AAIAAAXIgJAAQgFAfgOAWIgBACQAPAJAOAGIgOAWQgTgKgMgKQgLAKgUALgAhMgLQAEgLACgOIAPAFIAAgKIgVAAgAgKgNIAAgcIgWAAIAAAMIAMgGgAAjgzQAGAQAKAMIAFAHQAKgTADgUIggAAg");
	this.shape_1.setTransform(74.5,20.5,1.434,1.434,-6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghBLIAGgMIgJAEIgIgdIAOgFIAJAUQANgdADg1IAAggIgOAAIAAgYIBhAAIAAAWIgOAfIAaAAIAAAXQgHAfgRAaQAPANAQAHQgLAQgFAKQgTgLgOgPQgPAPgWANIgOgYQAWgLAMgNQgLgRgIgZQgGA4gYAjQgGgKgJgMgAARgvQANAvATAbQALgQAEgTIgaAAIAAgYIAMgdIghAAgAhfBYQAFgeACgWIASADIgGA1gAhCAmIARgBIAFAvIgTACgAheALQAFgEAHgHQAHgIAJgPQgPABgJACIgGgUQAGgGADgFQAOgXAIgWIAaAGIgcAvIAMAAIAMgXIAXAJQgQAbgbAlIAXgCIgHgRIASgFIAPApIgSAGIgDgHQgkAEgQAEg");
	this.shape_2.setTransform(152.2,25.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJBEIAZABQALAAAAgMIAAgHIg3AAIANATIgXAPIgWgiIgcAAIAAgVIBzAAIAAgLIh5AAIAAgTIBSAAIAAgLIhFAAIAAgVIBFAAIAAgOIAVAAIgJgHIAEgGIgjAAIAMAOIgSANIgQgUIAKgHIgPAAIgUAXIgSgRQATgSAMgXIAdAAIgKARIAzAAIAAAQQAMgQAHgRIAeAAIgJARIAyAAIAAASIggAAIANANIgTANQgHgKgKgKIAIgGIgOAAIgOAUIgHgFIAAAMIBFAAIAAAVIhFAAIAAALIBTAAIAAATIgqAAIAAALIAjAAIAAAVIgjAAIAAAUQAAANgFAFQgGAHgLAAIgkABg");
	this.shape_3.setTransform(131.8,25.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAMBBIAfABIAIgBQADgBADgCQACgCABgDQABgEAAgUIABhEIgiAAIgNAaQgLgGgLgGIAAByIgbAAIAAgNIgbAAIAAAOIgcAAIAAicIAVAAIAIgfIAdAFIgJAaIAhAAIAAAmQANgZAQgtIAbAIIgKAZIAzAAIgDBuQAAATgDAHQgCAHgFAEQgGAEgJADQgKACgggBQgDgRgFgMgAg9A2IAbAAIAAgiIgbAAgAg9gDIAbAAIAAgiIgbAAgAAAACIAWgOQANANARAaIgYAQQgQgZgMgQg");
	this.shape_4.setTransform(45.9,25.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhgBLQARgNALgQIgYgWQAEgRAHgrIgOAAIAAgXIARAAIAFgkIAXACIgFAiIAeAAQAABAgOAkIANALQAMgeAIgdIAWAHQgJAegMAkIgOgFIgOATIgRgQQgNATgRANQgGgJgKgMgAhFASIALAIQAIgYADgmIgMAAIgKA2gAgFBGIAVABQAHAAAAgLIAAhdIAaAAIAABkQAAAZgUACQgOABgPAAQgCgOgDgLgAA2AAIAXgHQANAmAHAbIgZAIQgGgdgMglgAgYgiQATgfAFgeIAaAEIgHAUIBLAAIAAAXIgJAiIgZgGIAJgbIg7AAQgHAPgLAWg");
	this.shape_5.setTransform(25.8,25.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXBKIAAgbIAZAAIAAAbgAgWAkIAAgEQAAgPALgNIASgRQAKgKAAgKQAAgQgWgBQgWABgNAGIAAgZQAPgFAUAAQAUAAAMAKQAOAKAAAUQAAARgLANIgTAQQgLAKAAAJIAAAEg");
	this.shape_6.setTransform(183.5,49.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhpBsIAAgcIBbAAIAAg0IhKAAIAAgcIBKAAIAAgkIhVAAIAAgbIBaAAQgLgPgNgMIAagRQATATALARIgNAIIBaAAIAAAbIhYAAIAAAkIBNAAIAAAcIhNAAIAAA0IBfAAIAAAcg");
	this.shape_7.setTransform(165.7,47.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA9BYQhAAHhZAHIgFgcIAdgCQAdg0AUg4IAcAJQgWA3gYAqIBUgHIgZgiIAYgQQAgAnATAoIgbAQgAAzgeQgMgUgJgeIgqAAIAAgaIBDAAQAGAkANAVQANAWAXASIgXATQgVgQgPgYgAhtgIQAUgTAPgbQAPgYAJgYIAcAJQgKAcgRAbQgOAagVAVg");
	this.shape_8.setTransform(141.4,48.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgyBsIAAgJIgYAAIAAAJIgaAAIAAhSIBNAAIAABSgAhKBLIAYAAIAAgYIgYAAgABHBrIAAgKIg5AAIAAAKIgZAAIAAhkIAnAAIAAgZIgqAAIAAgbIAqAAIAAgYIgjAFIgKgaQA5gFAygNIANAZIgvAKIAAAcIA0AAIAAAbIg0AAIAAAZIArAAIAABkgAAOBGIA5AAIAAglIg5AAgAhlASIAAgXIBMAAIAAAXgAhlgMIAAgaIBMAAIAAAagAhsguIAAgbIBbAAIAAAbgAhfhPIAAgZIBDAAIAAAZg");
	this.shape_9.setTransform(117.3,48.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhpBsIAAgXIBcAAIAAgGIhOAAIAAgXIBOAAIAAgFIhKAAIAAhPICtAAIAABPIhKAAIAAAFIBPAAIAAAXIhPAAIAAAGIBfAAIAAAXgAAMAbIAuAAIAAgHIguAAgAg7AbIAuAAIAAgHIguAAgAAMAAIAuAAIAAgFIguAAgAg7AAIAuAAIAAgFIguAAgAhqgjIAAgXIAwAAIgDgOIglAAIAAgXIBTAAIAAgNIAcAAIAAANIBRAAIAAAXIglAAIgGAOIA3AAIAAAXgAgbg6IAvAAIAFgOIg3AAg");
	this.shape_10.setTransform(92.9,48.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag/BZIAAhcIgNAQIgNgVQAcgmAMgrIAXAHQgHAXgHAOIAACGgAglBUIAAgWIBBAAQAOgwAIgsIAZAHQgLAvgMAmIAmAAIAAAWgAgVgUIAVgFQAMAkADAmIgUAGQgFgrgLgggAgfgmIAAgVIAuAAIAAgcIAYAAIAAAcIAwAAIAAAVg");
	this.shape_11.setTransform(70.7,49.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhSALIAAgVIClAAIAAAVg");
	this.shape_12.setTransform(50.7,49.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAfBWIAAirIA6AAIgSA+QAHAJAFANQAFANAAALQAAAggZABIgJgCIgCgNIAAAtgAA0AfQAHADAEAAQAEABAAgMQAAgLgDgIQgEgIgIgMgAA0gUIALgsIgLAAgAgwBIQAMgQAFgUIAEgMIgJAAIAAgVIALAAIAAgXIgLAAIAAgVIALAAIAAgXIgJAAIAAgVIA8AAQAABkgEAhQgDATgFAIQgHAGgIAAQgHAAgGgCIgCgRQgHAOgIAKgAgMAyIgCAGQAHACAGABQACAAABgGQACgFAAgQIAAgIIgKAAQgCAOgEAMgAgEADIAKAAIAAgXIgKAAgAgEgpIAKAAIAAgXIgKAAgAhYBBIAAiUIAxAAIAACEIgcAAIAAAQgAhDAdIAHAAIAAhbIgHAAg");
	this.shape_13.setTransform(30.9,50.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhXBJQANgMAGgNQAIgPACgQIAWAFIgDASQALALAPAFIADABIAAgrIhMAAIAAgTICrAAIAAATIhKAAIAAANIBAAAIAAAVIhAAAIAAAOQARACAhAAQASAAAJgBIgHAYIgUAAQg4AAgVgJQgVgHgLgKQgKARgLALgAhBgMIAAhMICCAAIAABMgAgrggIBWAAIAAgJIhWAAgAgrg8IBWAAIAAgIIhWAAg");
	this.shape_14.setTransform(10.9,49.8);

	// 圖層 2
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2006C").s().p("AIHEdQg2AGhGAFQggAPgggKIgyAAIAAgKIgRAAIAAAKIgoAAIAAABIh1AAIAAgCIj2AAIAAgIIh1AAIAAAFIg/AAIAAhCIgNgXIAAAFIjAAAIAAABQgBAugjAGIAAAfIg+AAIAAgGQgMADgQgDIgGAGIgPAAIgcgVIggAAIgGATIgjAAQg8ABgagLIgTgIIgaAdIgwgsIAPgOQAJgKAHgMIACgDIgXAAIAAg9IAVAAIAAhUICHAAIgdhFIgFgFIAdgVIgUgRIALgwIgLAAIAAg/IAUAAIAFgnIA/AGIgEAhIAHAAQAEgKADgLIADgSIBEAKIgFARIBEAAIAAAIIABAAIAHgiIBIALIgIAXIAKAAIAMgjIBDAQIgHAUIATAAIAbg3IAEgBIgPgLIA9g2IAHAHIgBgFIBIgMIACgEIA3AJIADgUIBSAOIgCAMIBGgLIADggIEsA0IAQBOIBTAAIgKAQIAQAAIAIgQIBKAAIgHAQIAlAAIAAAHIALgcIA6APIB3AAIAAAvIgDAHIAPAAIgBAuQgFAbgMAYIAMAHIAXAKIgRAWQAOASACAFIAKgGIALAKQAXASANAVIBQAAIAAAOIAKgDQARgGAZAAQAbAAATAPQAVAQAAAdQAAAXgOAUIgYAWIAABAIhEAAIAAgCIgGABIAAATIj+AAIAAgSIg3Ahg");
	this.shape_15.setTransform(95.3,31.3);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,190.5,62.5);


(lib.STAGE = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E72A84").s().p("AukAzQldgwgig/IgCgHIAAgPIAAgFIgBgBIABABIAAgPIgBgBIABABIACAFQAYBEFpAvQGDA1IiAAQIkAAGCg1IAkgFIAPgCIC4gkQAtgLAzgVQAngUAMgQIAAAJIAAAIIAAABIAAAGIAAAIQggBAlgAwQmBA1omAAQojAAmBg1g");
	this.shape.setTransform(132,36.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F53C8C","#F89CD7","#F53C8C"],[0,0.569,1],-131.8,0,131.9,0).s().p("AuiBMQlpgxgYhCIgCgEIABgwIABgYIAAgOQAYBFFpAwQGDAzIiAAQIkAAGCgzIAkgEQEygtAog8IAAAGIAABRQgMAQgoASQgyAVgtALIi4AmIgPACIgkAEQmCA1okAAQoiAAmDg1g");
	this.shape_1.setTransform(132,30.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#FFF19A"],[0,1],-0.4,20.3,0,-0.4,20.3,96.4).s().p("AujB3QlpgxgYhEIAAAOQgCgFAAgEQAAgFADgEQAFgOAVgOQBLgyEbgnQGCg0IhAAQIiAAGDA0QBrAPBOARQDJAqAAA0IgBAIIAAgFQgoA8kyAsIgkAFQmCA1okAAQoiAAmDg1g");
	this.shape_2.setTransform(132.1,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CDCDCD").s().p("AUmAJIAAAiQACADgCAHIgBAIgA0mgnQAJgKARgLQgUAOgGAOg");
	this.shape_3.setTransform(132.3,20.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,264.3,46.8);


(lib.sing_1 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.sing();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,110,44);


(lib.princess03_1 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.princess03();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,97,143);


(lib.princess02_1 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.princess02();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,94,135);


(lib.princess01_1 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.princess01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,96,168);


(lib.pd_1 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.pd();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,99,159);


(lib.md_1 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.md();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,151,213);


(lib.logo_1 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.logo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,87,53);


(lib.li02 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(225,68,122,0.686)","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,205.1).s().p("A2YWYQpSpRAAtHQAAtGJSpSQJSpSNGAAQNHAAJRJSQJSJSAANGQAANHpSJRQpRJStHAAQtGAApSpSg");
	this.shape.setTransform(202.7,202.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,405.4,405.4);


(lib.li = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.69)","rgba(255,255,255,0)"],[0,0.624,1],0,0,0,0,0,205.1).s().p("A2YWYQpSpRAAtHQAAtGJSpSQJSpSNGAAQNHAAJRJSQJSJSAANGQAANHpSJRQpRJStHAAQtGAApSpSg");
	this.shape.setTransform(202.7,202.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,405.4,405.4);


(lib.leaf = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFF100","#DEE100","#5EB531","#45B035"],[0.169,0.392,0.894,0.949],-10.9,5.2,10.3,-6.2).s().p("AhQBFQAMgVAPgVQAXgbAdgaQAUgTAXgRQgmAWgeAbQgdAYgVAcIgOAWQACgaANgYQAOgXAXgUQAbgYAhgNQAhgNAkgDIAAAAIgMAJQgSAOgNATIgMAYIgNAVQgHANgIAKQgIAMgMAKQgYAUgnAPIgOAEIAJgRg");
	this.shape.setTransform(11.1,10.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#87001F").s().p("AiLBLQAngPAYgTQAMgLAKgMQAIgKAHgLIANgXIAMgXQANgUAQgOIAUgCQgTALgNARIABAAIgKARIgKASIASgLQAngTAsgMQgdALgaAOQgeAPgYASQgJAOgIAKQgKAPgNAMQAsgHAdgQQAMgHAMgJIATgQIARgTIATgSQASgQAWgKIATACQgcAKgXAWIgUATIgSAUIgWARQgNAJgPAHQggAQgzAEQgbATgrAPIAGgMgAiSA9QABgPAFgNQAVgdAdgXQAggcAmgWQgXARgWATQgdAagXAcQgPAUgMAVIgCgBg");
	this.shape_1.setTransform(17.5,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFF100","#DEE100","#5EB531","#45B035"],[0.169,0.392,0.894,0.949],-11.3,4.4,9.6,-6.8).s().p("AhOAkQAIgLAJgQQAagQAegPQAYgOAdgLQgsAMglAUIgUAKIAKgSIAMgRQAfgPAjgEQAigFAhAFIgLAEQgWAJgSAQIgSASIgSARIgRASQgMAJgMAHQgfAQgsAHQANgLAKgPg");
	this.shape_2.setTransform(21.2,9.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AihBeIgSAGIALgVIgCgCQABgRAGgRQgJANgIANQACgfARgdQAQgcAcgYQAggcAqgQQAogQAogDIABAAIgPALQANgDARgBQgYAQgMAPIABgBQBEgfBVAMIgMAFIAWACQgiAMgbAaIgYAXIgWAWIgZAWQgQALgSAJQgnATg9AEQghAYgzARIAIgOg");
	this.shape_3.setTransform(17.1,8.6,1,1,0,0,0,-1,-2.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36.3,21.6);


(lib.cut2bg2 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D9215E","rgba(236,113,159,0.588)"],[0,1],-198.7,-126.7,1439.6,-126.7).s().p("EggPAGYQCigdD4g4QHyhxG1iLQV5m6EdocIRIcPMg+2AAQg");
	this.shape.setTransform(206.4,91.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,412.8,182.4);


(lib.cut02bg = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FE9DCA","rgba(250,202,211,0.941)"],[0,1],-220.4,113.4,202.2,-105.5).s().p("A72JqQCkgeD5g9QHzh7GpifQJTjfFvkHQHLlKBHl5QBIl5DhD0QC0DEENJGQE1KXEaMiMhKfAAQg");
	this.shape.setTransform(238.4,117.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,476.8,235.7);


(lib.curtain03 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C2C2C2").s().p("ATeCcIgLgCQgRgDgSgGQg7gTgkgoIgLgOIgEABIgLAAQgUACgXgEIgEAAQg3BIh7AOIgEAAIgLABQgUABgXgDIgLgCQgRgEgSgFQg7gTgkgoIgKgNIgGAAQgUACgXgEIgLgCIgBAAIgBAAQg3BKh8AOIgEAAIgLABQgUABgXgDIgLgCQgRgEgSgFQg7gTgkgoIgNgQQhIAYhkAIIgGAAIgIAAIgHABQggACgjgEIgSgCIgCAAIg2gKIgKgCQgvgMgmgRIAAAAQg5BGh6AMIgKABQgVABgWgDIgLgCQgSgEgSgFQg6gTgkgoIgfAEIgKAAQgVACgWgEIgLgCQg8BGh+AJQgpADgxgQQg9gUgkgqIgLAAQgUACgXgEQg8BEh8AJQgpADgxgQQhhgfgkhbQgjhXgRhTMAxvAAAIhGBwIgCAeQgGAigSAeQg1BfiPAOIgLAAIgMAAQgPAAgQgCg");
	this.shape.setTransform(159.3,15.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,318.6,31.8);


(lib.curtain02 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AinA8QgygrgZg7QgMgdgGghQAGAXAMAVQAZAtAxAeQBJAvBfACQAVAAAVgCIAHgBQAjgEAggMQAcgLAagQQBHgsAVhOQgVBqhIA+QgZAWgcAOQggAQgjAGIgHABQgVACgVAAQhfgBhIhAgAioABQgxgbgZgqQgPgYgGgbQAHAQAOANQAZAYAxARQBJAaBfAAIAqgBIAHAAQAjgDAggGQAcgGAagJQBOgaARgvQgSBRhNAsQgaAPgcAJQggALgjAEIgHAAQgVACgVAAQhfgBhJgrgAiohAQgxgOgZgTQgRgNgGgOIITAAQgRAnhPAWQgaAHgcAFQggAFgjACIgHAAIgqABQhfgBhJgUg");
	this.shape.setTransform(26.7,12.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C2C2C2").s().p("AAACHQhfgChJhEQgxgtgZg+QgRgqgHgyIABAAQAGAOARANQAZATAxAOQBJAUBfABIAqgBIAHAAQAjgCAggFQAcgFAagHQBPgWARgnIAAAAQgQCDhQBJQgaAXgcAQQggAQgjAHIgHABQgSACgSAAIgGAAgAjyg0QAZA7AyArQBIBABfABQAVAAAVgCIAHgBQAjgGAggQQAcgOAZgWQBIg8AVhsQgVBOhHAsQgaAQgcALQggAMgjAEIgHABQgVACgVAAQhfgChJgvQgxgegZgtQgMgVgGgXQAGAhAMAdgAjyhOQAZAqAxAdQBJApBfABQAVAAAVgCIAHAAQAjgEAggLQAcgJAagNQBNguAShRQgRAvhOAaQgaAJgcAGQggAGgjADIgHAAIgqABQhfAAhJgaQgxgRgZgYQgOgNgHgQQAGAbAPAYg");
	this.shape_1.setTransform(26.7,13.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53.4,27.2);


(lib.curtain01 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE4C87").s().p("AAABhQhDgCg1gxQg4gzgNhbIABAAQALAbA5AQQA1APBDAAQBFABA0gPQA5gPAMgdIAAAAQgMBfg5AzQgzAvhEAAIgCAAgAh3AkQA0AtBDABQBFABAzgsQA1grAOhNQgQA4gyAeQg0AihFgBQhDgBg1giQgygfgPg1QAOBJA0AsgAh3gFQA0AdBDABQBFABA0gdQA4ggANg6QgNAhg4ATQg0AShFAAQhDAAg1gTQg2gTgNgfQANA3A3Agg");
	this.shape.setTransform(20.3,10.4,1.064,1.064);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF84BA").s().p("AAABZQhDgBg0gtQg0gsgOhJQAPA1AyAfQA1AiBDABQBFABA0giQAygeAQg4QgOBLg1AtQgyAshDAAIgDgBgAAAAgQhDgBg0gfQg3gegNg3QANAfA2ATQA1ATBDAAQBFAAA0gSQA4gTANghQgNA6g4AeQgyAehDAAIgEAAgAAAgfQhDAAg1gPQg5gQgLgbIF6AAQgMAdg5APQgyAPhDAAIgEgBg");
	this.shape_1.setTransform(20.3,9.6,1.064,1.064);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40.6,20.7);


(lib.curtain00 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E5B5C9").p("AZuU1IAHgEQA1AcAugEQAmgDAygZAc3UoQABABABAAAc/UtQA0AZBHAFQBSAFA0gbMAAAgqKMghAAAAMAAAAqKQA1AcAmgBQAHAAAHgBQAcgFAlgUIAIgEQA3AdBVAGQBWAFAygXQAEgCADgCQAyAbARgEQACAAA9ghQA0AcAqAAQArAAA2gcQAEACAEABQA2AaBtACQBtACA0gYQAEgBAEgDIAHAEQAwAYA6AAQA5gBAzgZAVOU8QAwAYAWAAQAUgBAvgXAXmU8QAsAWAXgBQAUgCAxgaAnRU1IAHgEQA1AcAugEQAmgDAxgZAkIUoQABABABAAA0xU1QAEACADABQA3AaBtACQBtACA0gYQAEgBADgCQAzAbA+AAQA6gBAzgZA55VDQAEgCADgCIAIAEQArAWAQgDQACAAA9ghQA1AcApAAQArAAA2gcA+UU2IAFgDIACgBQA3AdBVAGQBVAFAzgXArxU8QAwAYAWAAQAUAAAvgYApZU8QAsAWAWgBQAVgCAxgaAAA1VMgg/AAAMAAAAqKQA0AcAngBQAggBAwgZAkAUtQA0AZBHAFQBSAFAzgb");
	this.shape.setTransform(211.3,136.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEEEF5").s().p("AHOU/IAHAEMgAngpeIgQAAMAAoApeQgzAXhVgFQhVgGg3gdIAIAEMAAggpRIgPAAMgAhApRQgmAUgbAFIgOABQgnABg0gcMAAAgqKMAhAAAAMAAAAqKQg0AbhSgFQhIgFgzgZMAA1gpIIgOAAMgA2ApIQgyAZgmADQguAEg1gcIAJAEMAAkgpQIgQAAMgAkApQQgxAagVACQgWABgsgWMgAYgpXIgPAAMAAYApXQgvAXgUABQgXAAgvgYMgBTgpXIgQAAMABUApXQgzAZg6ABQg5AAgwgYMgBCgpZIgOAAMABBApZQg0AYhtgCQhtgCg2gaMAA+gpTIgPAAMgA/ApTIAIgDQg1AcgsAAQgpAAg1gcIAIADMAAqgpTIgPAAMgAqApTIAHgDIg/AhIgEAAQgTAAgrgXgA5qVDMgAogpeIgOAAMAAnApeQgyAXhVgFQhWgGg3gdIAIAEMAAggpRIgPAAMgAgApRQgwAZggABQgnABg0gcMAAAgqKMAg/AAAMAAAAqKQgzAbhSgFQhIgFgzgZMAA2gpIIgPAAMgA2ApIQgyAZgmADQgvAEg0gcIAIAEMAAkgpQIgPAAMgAkApQQgxAagUACQgXABgsgWMgAYgpXIgPAAMAAYApXQgvAYgUAAQgXAAgvgYMgBUgpXIgPAAMABUApXQgzAZg5ABQg/AAgzgbIAIADMgBBgpZIgQAAMABCApZQg0AYhtgCQhtgCg3gaMAA/gpTIgPAAMgA+ApTIAHgDQg1AcgrAAQgqAAg1gcIAIADMAAqgpTIgQAAMgApApTIAHgDQg9AhgCAAIgEAAQgRAAgmgTg");
	this.shape_1.setTransform(211.3,136.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E5B5C9").s().p("A5hUsIgIAEMgAngpfIAPAAMAAnApfgAHeUsIgIADMgAngpeIAPAAMAAoApegARyUnIgHAEMgBCgpaIAPAAMABBApagAvNUnIgHAEMgBCgpaIAPAAMABBApagAXvUkIgHAEMgAZgpXIAQAAMAAYApXgAVXUkIgHAEMgBUgpXIAPAAMABUApXgApQUkIgIAEMgAYgpXIAPAAMAAZApXgAroUkIgIAEMgBTgpXIAPAAMABUApXgAMfUhIgIAEMAA/gpUIAOAAMgA+ApUIgHgEgAJgUhIgHAEMAApgpUIAPAAMgAqApUgA0gUhIgIAEMAA+gpUIAQAAMgA/ApUIgHgEgA3fUhIgHAEMAApgpUIAPAAMgApApUgADDUeIgIAEMAAggpRIAPAAMgAgApRgA98UeIgCABIgFADMAAggpRIAOAAMgAfApRgAaGUeIgHAEMAAkgpRIAPAAMgAkApRgAm5UeIgHAEMAAkgpRIAPAAMgAkApRgAdJUWIgCgBIAAAAIgBABIgGADMAA2gpIIAPAAMgA1ApIgAj2UWIgCgBIgBAAIAAABIgGADMAA2gpIIAPAAMgA2ApIg");
	this.shape_2.setTransform(209.6,138.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,422.5,273.4);


(lib.cranberries_1 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.cranberries();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,109,51);


(lib.btntxt = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAzQgMAAgHgIQgGgIAAgLIAAgzQAAgLAIgGQAHgGAJAAIAdAAQAKAAAIAHQAIAHAAALIAAAzQAAALgHAHQgIAHgLAAgAgHgTIAAAnIACACIADACIAGAAQAEAAAAgEIAAgnIgBgCIgCgCIgIAAQgDACgBACg");
	this.shape.setTransform(38.2,39.4,0.681,0.681);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAECcIgLgdIAgAAQAIAAgBgHIgSAAIAAgCQgGgogCgoIAAgDIAVAAIgBADQgBAXAHAwIAAhLQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAIg9AAQgMAAgJgJQgHgHAAgMIAAiBQAAgMAKgHQAJgHAMAAIBbAAIAAAcIglAAIAAAZIAgAAIAAAaIggAAIAAAaIAgAAIAAAcIggAAIAAAWIAIAAQAPAAAJAIQAKAIgBARIAABeQABAMgIAIQgIAJgOAAgAgdgEQAAAEAFAAIAOAAIAAgWIgTAAgAgdgyIATAAIAAgaIgTAAgAgch9QAAAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAIAAAUIATAAIAAgZIgOAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBABg");
	this.shape_1.setTransform(30.7,39.6,0.681,0.681);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAqIAAgDQgGgxAAgdIAAgCIASAAIAAACQAAARACAWQACAZADAOIAAADg");
	this.shape_2.setTransform(30.6,45,0.681,0.681);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPA0IABgDQAKgxgBgwIAAgDIAVAAIAAADQAAA9gHAkIgBADg");
	this.shape_3.setTransform(27,45.6,0.681,0.681);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHA0IAAgDQgHg+ADgkIAAgCIASAAIgBADQAAAUACAcQACAfADASIAAADg");
	this.shape_4.setTransform(29.1,45.6,0.681,0.681);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAzQgLAAgHgKQgGgHAAgKIAAgxQAAgLAIgHQAHgHAKAAIAdAAQALAAAIAHQAIAJAAAJIAAAyQAAAKgGAIQgIAIgKAAgAgHgTIAAAnQAAAEAEAAIAGAAIACgBIABgDIAAgnQAAgEgEAAIgFAAQgEAAAAAEg");
	this.shape_5.setTransform(44.4,39.4,0.681,0.681);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA6AyIgBgBQgGgLgJgbQgLAagIAMIAAABIgmAAIAIgNIgNAAIgBgCQgGgQgFgUQgNAfgLATIgBABIgrAAIADgEQAegpAMg0IAAgCIAlAAIgIAdIAXAAIABACQACAPAEAPQANgbAHggIAAgCIAlAAIgBADIgHAaIAPAAIABACQAIAhAVAfIADAEg");
	this.shape_6.setTransform(41.3,46.8,0.681,0.681);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA3AwIgJgPIAAALIhZAAIAAgPIgNASIAAABIgtAAIADgFQAcggAVgqQAEgIAIgFQAIgDAGAAIAtAAQAKAAAGAEQAIAFADAJQANAdAlArIADAFgAAjAPQgHgMgIgQQgDgFgHAAIgTAAQgHAAgCAGIgQAbIBFAAIAAAAg");
	this.shape_7.setTransform(41.1,32.1,0.681,0.681);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgjAlIADgDQAPgXARguIAAgBIAkAAIgBACQgMApgTAdIAAABg");
	this.shape_8.setTransform(7,47.8,0.681,0.681);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWCgIgPgeIAjAAQADAAAAgEIAAkdIAlAAIAAEhQAAAPgLAIQgKAHgPAAg");
	this.shape_9.setTransform(19,39.5,0.681,0.681);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgcByQgJAAgJgKQgJgKAAgLIAAimQAAgOALgJQAKgHANAAIAtAAQAOAAAKALQAIAJAAAPIAACjQAAAPgJAHQgJAHgOAAgAgTBRIABACIACABIAiAAQABAAAAAAQABAAAAAAQAAgBAAAAQABgBAAAAIAAgkIgoAAgAgTAQIAoAAIAAgeIgoAAgAgShRIgBACIAAAjIAoAAIAAgiIgCgDIgCgBIgiAAIgBABg");
	this.shape_10.setTransform(9.8,36.7,0.681,0.681);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRBuIAAjbIAiAAIAADbg");
	this.shape_11.setTransform(16.1,37.3,0.681,0.681);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgCAlIgBgBQgTgegOgnIgBgDIAlAAIAAABQALAjAYAiIADADg");
	this.shape_12.setTransform(12.7,47.8,0.681,0.681);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDAqIAAgCQgZgogJglIgBgEIAmAAIAAACQAMAmAZAmIACAFg");
	this.shape_13.setTransform(2.8,37.4,0.681,0.681);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgCAoIgBgCQgWgkgOgmIgBgDIAoAAIAAACQASAsAVAdIACAEg");
	this.shape_14.setTransform(2.8,31.4,0.681,0.681);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgkBEIABgEQAYg6ALhHIAAgCIAlAAIAAADQgMBKgWA4IAAACg");
	this.shape_15.setTransform(2.7,45.7,0.681,0.681);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAOCdIAAkZQAAgQALgIQAJgIAPAAIBHAAQAPAAAJAKQAJAKAAAPIAADOQAAAPgJAIQgIAHgPAAIgvAAIgMgdIAvAAQAGAAABgIIAAjGQgBgFgEgBIg3AAQgFABABAFIAAEVgAgeCdIgBgBIgOgcIgNAdIg7AAQgQAAgJgJQgKgLAAgPIAAj2QAAgMAKgKQAIgIALAAIBeAAQANAAAJAJQAHAJAAAPIAABoQAAAMgKAHQgIAHgLAAIhXAAIAABwQAAAAAAABQAAAAAAABQABABAAAAQABABAAAAQABABAAAAQABAAAAABQABAAAAAAQABAAABAAIBAAAQgWgugMgyIgBgDIAnAAIABACQAOBBAlA6IADAEgAh0gUIBJAAQAGABAAgGIAAgiIhPAAgAh0h3IAAAfIBPAAIAAgeQAAgGgFAAIhFAAQgFAAAAAFg");
	this.shape_16.setTransform(36.9,11,0.681,0.681);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AiNAoIAAgeIB9AAQgQgkgDgJIgBgEIAnAAIABACQAKAbAOAUIBzAAIAAAeg");
	this.shape_17.setTransform(11,2.7,0.681,0.681);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAABTIAAgCQgchegMhBIAAgEIAnAAIABADQAOBeAaBAIABAEg");
	this.shape_18.setTransform(6.5,12.7,0.681,0.681);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AieBrIAAgeICrAAQAghBAYh0IABgCIAnAAIgBADQgZB0gdBAIBpAAIAAAeg");
	this.shape_19.setTransform(11.1,14.4,0.681,0.681);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF1F76").s().p("AgPA0IABgDQAKgxgBgwIAAgDIAVAAIAAADQgDBHgFAbIAAACg");
	this.shape_20.setTransform(28,46.7,0.681,0.681);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF1F76").s().p("AgHA0IgBgDQgFhJABgYIABgDIARAAIAAADQgBATACAdQACAfADASIABADg");
	this.shape_21.setTransform(30.1,46.7,0.681,0.681);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF1F76").s().p("AgGAqIgBgDQgGgxABgdIAAgCIASAAIAAACQgBAQACAXQACAZADAOIABADg");
	this.shape_22.setTransform(31.6,46,0.681,0.681);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF1F76").s().p("AgOAzQgLAAgIgIQgGgIAAgLIAAgzQAAgLAJgGQAHgGAIAAIAdAAQALAAAHAHQAIAHAAALIAAAzQAAALgHAHQgIAHgLAAgAgFgVQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAAAAAIAAAnIABACIADACIAGAAQAEAAAAgEIAAgnQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAIgIAAIgCABg");
	this.shape_23.setTransform(39.2,40.5,0.681,0.681);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF1F76").s().p("AA5AyIAAgBQgIgQgHgWQgLAZgIANIgBABIgmAAIADgEIAGgJIgNAAIgBgCQgJgZgDgLQgOAjgKAPIAAABIgrAAIADgEQAegpAMg0IAAgCIAlAAIgIAdIAXAAIAAACQADAPADAQQAPghAFgbIABgCIAlAAIgJAdIAQAAIAAACQAIAfAWAhIADAEg");
	this.shape_24.setTransform(42.3,47.9,0.681,0.681);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF1F76").s().p("AAECcIgLgdIAhAAQAGAAAAgGIAAgBIgSAAIAAgCQgEgZgEg3IAAgDIAVAAIAAADQgCAZAHAuIAAhKQAAgHgGAAIg9AAQgMAAgJgJQgHgIAAgLIAAiBQAAgMAKgHQAJgHALAAIBbAAIAAAcIglAAIAAAZIAhAAIAAAbIghAAIAAAZIAhAAIAAAcIghAAIAAAWIAIAAQAPAAAKAIQAKAJAAAQIAABeQAAALgIAJQgJAJgMAAgAgdgDQAAADAFAAIAOAAIAAgWIgTAAgAgdgyIATAAIAAgZIgTAAgAgdh6IAAAUIATAAIAAgZIgOAAQgFAAAAAFg");
	this.shape_25.setTransform(31.7,40.7,0.681,0.681);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF1F76").s().p("AgQAzQgKAAgIgJQgGgIAAgKIAAgxQAAgLAIgHQAHgHAJAAIAeAAQALAAAIAHQAIAIAAAKIAAAyQAAALgHAHQgGAIgLAAgAgHgTIAAAnQAAAEAEAAIAGAAQADAAAAgEIAAgnQAAgDgEAAIgFAAQgBAAgBAAQAAAAgBABQAAAAgBABQAAAAAAABg");
	this.shape_26.setTransform(45.4,40.5,0.681,0.681);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF1F76").s().p("AA2AwIAAgBIgJgOIAAALIhYAAIAAgPIgNASIAAABIgtAAIADgEQAdgiAUgpQAFgIAHgFQAHgDAHAAIAtAAQAKAAAHAFQAHAEAEAJQALAbAmAuIAEAEgAAjAPIgPgbQgDgGgGAAIgUAAQgHAAgDAGQgJARgGAKIBFAAg");
	this.shape_27.setTransform(42.1,33.2,0.681,0.681);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF1F76").s().p("AgCAlIgBgBQgUgggMglIgCgDIAlAAIAAABQANAjAWAiIADADg");
	this.shape_28.setTransform(13.8,48.8,0.681,0.681);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF1F76").s().p("AgjAlIADgDQAQgXAQguIAAgBIAkAAIgBADQgOArgRAaIAAABg");
	this.shape_29.setTransform(8.1,48.8,0.681,0.681);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF1F76").s().p("AgWCgIgPgeIAjAAQADAAgBgEIAAkdIAmAAIAAEhQAAAOgLAJQgKAHgPAAg");
	this.shape_30.setTransform(20,40.5,0.681,0.681);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF1F76").s().p("AgRBvIAAjdIAiAAIAADdg");
	this.shape_31.setTransform(17.1,38.3,0.681,0.681);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF1F76").s().p("AgkBEIABgEQAYg6ALhHIAAgCIAlAAIAAADQgLBHgWA7IgCACg");
	this.shape_32.setTransform(3.7,46.8,0.681,0.681);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF1F76").s().p("AgcByQgKAAgJgKQgIgKAAgLIAAimQAAgPALgIQAJgHANAAIAtAAQAPAAAJALQAJAJAAAPIAACkQAAAOgKAHQgIAHgOAAgAgTBRQAAABAAABQAAAAABABQAAAAAAAAQABAAABAAIAiAAQAAAAABAAQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgkIgnAAgAgTAQIAnAAIAAgeIgnAAgAgThPIAAAjIAnAAIAAgiIgBgDIgCgBIghAAQgBAAgBAAQAAAAAAABQgBAAAAAAQAAABAAABg");
	this.shape_33.setTransform(10.9,37.7,0.681,0.681);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF1F76").s().p("AgDAqIgBgBQgYgqgKgkIAAgEIAmAAIAAACQANAnAYAlIACAFg");
	this.shape_34.setTransform(3.8,38.5,0.681,0.681);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF1F76").s().p("AgCAoIAAgBQgXgmgOglIgBgDIAoAAIAAACQAUAuATAbIACAEg");
	this.shape_35.setTransform(3.8,32.4,0.681,0.681);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF1F76").s().p("AAOCdIAAkYQAAgQALgJQAKgIAOAAIBHAAQAPAAAJAKQAJAJAAAQIAADOQAAAPgJAIQgHAHgQAAIgvAAIgMgeIAvAAQAGAAAAgGIAAjHIgBgDQgBgBAAAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIg3AAQgFAAAAAGIAAEVgAgeCdIgBgBIgOgbIgMAcIg8AAQgPAAgKgJQgKgKAAgRIAAj1QAAgMAKgKQAIgIAMAAIBdAAQANAAAJAJQAHALAAANIAABoQAAANgKAGQgJAIgKAAIhXAAIAABvQAAABAAAAQABABAAAAQAAABAAAAQABABAAAAQABABAAAAQABAAAAAAQABABAAAAQABAAAAAAIBBAAQgUgqgOg2IgBgDIAoAAIAAACQAPBDAkA4IADAEgAh0gTIBJAAQAGAAAAgFIAAgjIhPAAgAh0h3IAAAgIBPAAIAAgfQAAgGgEAAIhGAAQgFAAAAAFg");
	this.shape_36.setTransform(37.9,12,0.681,0.681);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF1F76").s().p("AAABSIgBgBQgchegKhBIgBgDIAnAAIAAACQAOBbAbBDIABADg");
	this.shape_37.setTransform(7.5,13.8,0.681,0.681);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF1F76").s().p("AieBrIAAgeICqAAQAUgoAPgyQALgjAMg4IAAgCIAnAAIgBADQgZB0gcBAIBoAAIAAAeg");
	this.shape_38.setTransform(12.1,15.5,0.681,0.681);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF1F76").s().p("AiNAoIAAgeIB+AAQgOgagFgTIgBgEIAnAAIAAACQAKAbAOAUIBzAAIAAAeg");
	this.shape_39.setTransform(12,3.7,0.681,0.681);

	this.addChild(this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,49.2,51.4);


(lib.btnbg = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFF7F7").ss(2).p("AEZkZQB2B1AACkQAAClh2B0Qh0B2ilAAQijAAh1h2Qh2h0AAilQAAikB2h1QB1h1CjAAQClAAB0B1g");
	this.shape.setTransform(44.6,44.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F9C6D9","#F685A9"],[0,1],-25.5,-25.5,7.2,7.2).s().p("Aj5F7QiDiCAAi5QAAi3CDiCQCCiDC3AAQC5AACCCDIACABIp1J1IgBgCg");
	this.shape_1.setTransform(38.2,38.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(243,91,140,0.941)","#D20F60"],[0,1],-6.6,-6.6,25.2,25.2).s().p("Al4D9IgCgDIJ1p0IACACQB/CCgBC1QABC4iDCCQiDCDi3gBIgBAAQi1AAiBh+g");
	this.shape_2.setTransform(51.2,51.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,89.2,89.2);


(lib.bg = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FA86B9"],[0,1],0,0,0,0,0,216).s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.ball = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFDE00","#FFF5B5"],[0,1],-0.1,4.5,-0.1,-2.2).s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape.setTransform(3.4,3.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,6.9,6.9);


(lib.mccurtain = function() {
	this.initialize();

	// curtain00
	this.instance = new lib.curtain00();
	this.instance.setTransform(234.1,138.9,1.009,1.009,0,0,0,211.3,137.6);

	// curtain01
	this.instance_1 = new lib.curtain01();
	this.instance_1.setTransform(372.7,282,2.038,1,0,0,0,19.1,9.7);

	// curtain01
	this.instance_2 = new lib.curtain01();
	this.instance_2.setTransform(39,282,2.038,1,0,0,0,19.1,9.7);

	// curtain01
	this.instance_3 = new lib.curtain01();
	this.instance_3.setTransform(203.7,282,2.038,1,0,0,0,19.1,9.7);

	// curtain01
	this.instance_4 = new lib.curtain01();
	this.instance_4.setTransform(311.2,279.2,1,1,0,0,0,19.1,9.7);

	// curtain01
	this.instance_5 = new lib.curtain01();
	this.instance_5.setTransform(268.7,279.2,1,1,0,0,0,19.1,9.7);

	// curtain01
	this.instance_6 = new lib.curtain01();
	this.instance_6.setTransform(139.7,279.2,1,1,0,0,0,19.1,9.7);

	// curtain01
	this.instance_7 = new lib.curtain01();
	this.instance_7.setTransform(99.7,279.2,1,1,0,0,0,19.1,9.7);

	// curtain02
	this.instance_8 = new lib.curtain02();
	this.instance_8.setTransform(74.5,284.8,1,1,0,0,0,26.7,13.6);

	// curtain02
	this.instance_9 = new lib.curtain02();
	this.instance_9.setTransform(335.7,284.8,1,1,0,0,0,26.7,13.6);

	// curtain02
	this.instance_10 = new lib.curtain02();
	this.instance_10.setTransform(289.7,284.8,1,1,0,0,0,26.7,13.6);

	// curtain02
	this.instance_11 = new lib.curtain02();
	this.instance_11.setTransform(245.2,284.8,1,1,0,0,0,26.7,13.6);

	// curtain02
	this.instance_12 = new lib.curtain02();
	this.instance_12.setTransform(163.2,284.8,1,1,0,0,0,26.7,13.6);

	// curtain02
	this.instance_13 = new lib.curtain02();
	this.instance_13.setTransform(116.5,284.8,1,1,0,0,0,26.7,13.6);

	// curtain03
	this.instance_14 = new lib.curtain03();
	this.instance_14.setTransform(206.9,286.9,1,1,0,0,0,159.3,15.9);

	this.addChild(this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,447.3,302.8);


(lib.lightball02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ball();
	this.instance.setTransform(3.4,3.4,1,1,0,0,0,3.4,3.4);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).to({alpha:0.5},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.9,6.9);


(lib.lightball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ball();
	this.instance.setTransform(3.4,3.4,1,1,0,0,0,3.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.5},4).to({alpha:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.9,6.9);


(lib.Kanban = function() {
	this.initialize();

	// txt02
	this.instance = new lib.txt02();
	this.instance.setTransform(115.9,110.1,1,1,0,0,0,24,9.5);

	// tit
	this.instance_1 = new lib.tit();
	this.instance_1.setTransform(118.1,172.2,1,1,0,0,0,92.8,28.6);

	// txt03
	this.instance_2 = new lib.txt03();
	this.instance_2.setTransform(116.5,128.4,1,1,0,0,0,29.2,6.8);

	// TITBG
	this.instance_3 = new lib.TITBG();
	this.instance_3.setTransform(126,113.5,1,1,0,0,0,126,113.5);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.3,0,238.3,224.5);


(lib.btn = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// btntxt
	this.instance = new lib.btntxt();
	this.instance.setTransform(44.6,43.7,1,1,0,0,0,24.6,25.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(75));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak4E8IgBgBIJ0p1IACACQCCCCABC3QAAC4iDCDQiCCCi5AAQi3AAiDiCg");
	mask.setTransform(44.8,44.7);

	// 圖層 5
	this.instance_1 = new lib.li();
	this.instance_1.setTransform(-7,145.8,0.318,0.318,0,0,0,202.7,202.7);
	this.instance_1.alpha = 0.5;
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).wait(11).to({_off:false},0).to({x:144.9,y:-10.2},10).wait(11).to({x:-6.9,y:145.8},0).to({x:144.9,y:-10.2},10).wait(10).to({x:-6.9,y:145.8},0).to({x:144.9,y:-10.2},10).wait(12));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Aj5F7QiDiCAAi5QAAi3CDiCQCCiDC3AAQC5AACCCDIACABIp1J1IgBgCg");
	mask_1.setTransform(38.2,38.1);

	// 圖層 3
	this.instance_2 = new lib.li();
	this.instance_2.setTransform(56,-64.4,0.318,0.318,0,0,0,202.7,202.7);
	this.instance_2.alpha = 0.602;
	this.instance_2._off = true;

	this.instance_2.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({x:4.7,y:145.9,alpha:0},10).wait(11).to({x:56,y:-64.3,alpha:0.602},0).to({x:4.7,y:145.9,alpha:0},10).wait(10).to({x:56,y:-64.3,alpha:0.602},0).to({x:4.7,y:145.9,alpha:0},10).wait(15));

	// bg
	this.instance_3 = new lib.btnbg();
	this.instance_3.setTransform(44.6,44.6,1,1,0,0,0,44.6,44.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89.2,89.2);


(lib.mcSTAGE = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// lightball
	this.instance = new lib.lightball02();
	this.instance.setTransform(265.4,24.7,1,1,0,0,0,3.4,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(85));

	// lightball
	this.instance_1 = new lib.lightball();
	this.instance_1.setTransform(245.3,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(85));

	// lightball
	this.instance_2 = new lib.lightball02();
	this.instance_2.setTransform(230.3,34.2,1,1,0,0,0,3.4,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(85));

	// lightball
	this.instance_3 = new lib.lightball();
	this.instance_3.setTransform(212.8,36.7,1,1,0,0,0,3.4,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).wait(85));

	// lightball
	this.instance_4 = new lib.lightball02();
	this.instance_4.setTransform(195.4,37.9,1,1,0,0,0,3.4,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).wait(85));

	// lightball
	this.instance_5 = new lib.lightball();
	this.instance_5.setTransform(174.5,35.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).wait(85));

	// lightball
	this.instance_6 = new lib.lightball02();
	this.instance_6.setTransform(160.5,39.7,1,1,0,0,0,3.4,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).wait(85));

	// lightball
	this.instance_7 = new lib.lightball();
	this.instance_7.setTransform(139.6,36.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).wait(85));

	// lightball
	this.instance_8 = new lib.lightball02();
	this.instance_8.setTransform(125.6,40.2,1,1,0,0,0,3.4,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).wait(85));

	// lightball
	this.instance_9 = new lib.lightball();
	this.instance_9.setTransform(107.6,39.7,1,1,0,0,0,3.4,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).wait(85));

	// lightball
	this.instance_10 = new lib.lightball02();
	this.instance_10.setTransform(90.7,38.9,1,1,0,0,0,3.4,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).wait(85));

	// lightball
	this.instance_11 = new lib.lightball();
	this.instance_11.setTransform(73.2,37.9,1,1,0,0,0,3.4,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).wait(85));

	// lightball
	this.instance_12 = new lib.lightball02();
	this.instance_12.setTransform(55.8,36.4,1,1,0,0,0,3.4,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).wait(85));

	// lightball
	this.instance_13 = new lib.lightball();
	this.instance_13.setTransform(38.3,34.2,1,1,0,0,0,3.4,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13}]}).wait(85));

	// lightball
	this.instance_14 = new lib.lightball02();
	this.instance_14.setTransform(19.9,30.9,1,1,0,0,0,3.4,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14}]}).wait(85));

	// lightball
	this.instance_15 = new lib.lightball();
	this.instance_15.setTransform(3.4,24.7,1,1,0,0,0,3.4,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).wait(85));

	// STAGE
	this.instance_16 = new lib.STAGE();
	this.instance_16.setTransform(134.9,22.7,1,1,0,0,0,132.1,22.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16}]}).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,268.8,46.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;