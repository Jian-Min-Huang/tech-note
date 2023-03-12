var exitButton,
	end = false;

init = function() {
	
	TweenMax.to(blocker, 0, {opacity:0,  delay:0, display:'none'});

	TweenMax.from(gcp_logo, .75, {opacity:0, y: 5, delay:1});
	TweenMax.from(gcp_copy, .75, {opacity:0, y: 5, delay:0.25});
	TweenMax.from(cta_btn, .75, {opacity:0, y: 5, delay:1});
	TweenMax.from(icon, .75, {opacity:0, delay:0.25});
	TweenMax.from(google_cloud, .75, {opacity:0, y: 5, delay:1});
}

function hover(element) {
    element.setAttribute('src', 'images/cta_on.png');
}
function unhover(element) {
    element.setAttribute('src', 'images/cta_off.png');
}