jQuery(document).ready(function () {
	
	mkyong_load_json();
	
	var postId = jQuery("#mkyong-postId").val();
	mkyong_load_related_post(postId);
	
});

function mkyong_load_json(){

	var isoDate = new Date().toISOString().slice(0, 10);
	
	$.getJSON("/json-v2/all.json", {_:isoDate}, function(data) {
		
		var msg0k = mkyong_parse_json_generate_rising_html(data['pv0-10k'], '0-10k');
		$('#sidebar-rising-post-0k').html(msg0k).hide().fadeIn(500);
		
		var msg10k = mkyong_parse_json_generate_rising_html(data['pv10k-100k'], '10k-100k');
		$('#sidebar-rising-post-10k').html(msg10k).hide().fadeIn(500);
		
		var msg100k = mkyong_parse_json_generate_rising_html(data['pv100k-500k'], '100k-500k');
		$('#sidebar-rising-post-100k').html(msg100k).hide().fadeIn(500);

		var topPv = mkyong_parse_json_generate_random_top_pv_html(data['top'], 'top-pv');		
		$('#top-articles-below-author').html(topPv).hide().fadeIn(500);
	
	});
	
}

function mkyong_load_related_post(postId){

	if(postId!=null){

		var isoDate = new Date().toISOString().slice(0, 10);
	
		var msg = '';
	
		$.getJSON("/json-v2/related/" + postId +".json", {_:isoDate}, function(json) {
		
			for (var i = 0; i < json.length; i++) {

				title = json[i].title;
	        	url = json[i].url + '?utm_source=mkyong&utm_medium=author&utm_campaign=related-post&utm_content=' + i;
	        	pv = json[i].pv;
								
				msg += '<div class="row row-margin-bottom">';
				msg += '<div class="col-xs-2 col-md-2">' + pvFormatter(pv) + '</div>';
				msg += '<div class="col-xs-13 col-md-13 no-left-right-padding"><a href="' + url + '">' + title + '</a></div>';
				msg += '</div>';

			}
		
			$('#related-post').html(msg).hide().fadeIn(500);
			
		});
	
	}

}

function mkyong_parse_json_generate_random_top_pv_html(json, compaign){

		var msg = '<div class="pvbox-container">';

		var randomIndexArray = getRandomIndex(20, 0, json.length);

		for (var i = 0; i < randomIndexArray.length;) {

			index = randomIndexArray[i++];

			title = json[index].title;
	        url = json[index].url + '?utm_source=mkyong&utm_medium=author&utm_campaign=' + compaign + '&utm_content=' + i;
	        pv = json[index].pv;

			msg += '<div class="row row-margin-bottom">';
			msg += '<div class="col-md-1">' + pvFormatter(pv) + '</div>';
			msg += '<div class="col-md-6 no-left-right-padding"><a href="' + url + '">' + title + '</a></div>';

			index = randomIndexArray[i++];

			title = json[index].title;
	        url = json[index].url + '?utm_source=mkyong&utm_medium=author&utm_campaign=' + compaign + '&utm_content=' + i;
	        pv = json[index].pv;

			msg += '<div class="col-md-1">' + pvFormatter(pv) + '</div>';
			msg += '<div class="col-md-7 no-left-right-padding"><a href="' + url + '">' + title + '</a></div>';
			msg += '</div>';

		}
		msg += '</div>';

		return msg;
		
}

function mkyong_parse_json_generate_rising_html(json, compaign){
	
	var msg = '<div class="pvbox-container">';
	
	for (var i = 0; i < json.length; i++) {
	   
		title = json[i].title;
        url = json[i].url + '?utm_source=mkyong&utm_medium=sidebar&utm_campaign=' + compaign + '&utm_content=' + i;
        pv = json[i].pv;
		diff = json[i].diff;

		msg += '<div class="row row-margin-bottom">';
		msg += '<div class="col-xs-2 col-md-3">' + pvFormatter2(diff) + '</div>';
		msg += '<div class="col-xs-13 col-md-12 no-left-right-padding"><a href="' + url + '">' + title + '</a></div>';
		msg += '</div>';
		
		if(i==10)break;
		
	}
	msg += '</div>';
	
	return msg;
	
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function pvFormatter(num) {
	
     if (num >= 1000000) {
        return '<div class="pvbox mformat">' + (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'm</div>';
     }else if (num >= 1000){
		return '<div class="pvbox kformat">' + (num / 1000).toFixed(0).replace(/\.0$/, '') + 'k</div>';
     }else{
		return '<div class="pvbox kformat">' + (num).toFixed(0).replace(/\.0$/, '') + '</div>';
     }
}

function pvFormatter2(num) {

	if (num >= 1000) {
        return '<div class="pvbox kformat">+' + (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k</div>';
     }else{
		return '<div class="pvbox kformat">+' + (num).toFixed(0).replace(/\.0$/, '') + '</div>';
	}
	
}

function pctFormatter(num, diff) {
    
	if (num >= 20) {
        return '<div class="pvbox mformat">' + (num).toFixed(1).replace(/\.0$/, '') + '% +' + numberWithCommas(diff) + '</div>';
    }else{
		return '<div class="pvbox kformat">' + (num).toFixed(1).replace(/\.0$/, '') + '% +' + numberWithCommas(diff) + '</div>';
	}
    
}

/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 Returns a random integer between min (included) and max (excluded)*/
function getRandomIndex(size, min, max){
	
	var usedIndexes = [];
	var result = [];
	var count = 0;
	
	for (i = 0; count < size ; i++) { 
	
		var randomIndex = Math.floor(Math.random() * (max - min)) + min;
	    
		if(!usedIndexes[randomIndex]){
			
			usedIndexes[randomIndex] = randomIndex;
			result[count++] = randomIndex;
				
		}
		
	}
	
	return result; 
	
}
