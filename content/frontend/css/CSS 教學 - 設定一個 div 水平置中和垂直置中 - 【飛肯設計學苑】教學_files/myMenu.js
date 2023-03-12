$(function(){
	
	var MENU = $("div#access li.myMenu");
	var MenuUL = $("div#access li.myMenu ul");
	var WIN = $(window);
	var ACCESS = $("div#access");

	MENU.hover(function(){
		MenuUL.stop(true,true).slideDown(200);
	},function(){
		MenuUL.stop(true,true).slideUp(200);
	});
	
	WIN.on("scroll", function(){
		
		if( WIN.scrollTop()>105 ){
			ACCESS.css({ position:"fixed", top:0, zIndex:999 });
		}else{
			ACCESS.css({ position:"static" });
		}
			
	});
	
});