jQuery(document).ready(function() {
	'use strict';
	
	var selectPostChange = false,
		loadMoreChange = false;

	/* Top login show/hide
	================================================== */
	jQuery( '.top-login a' ).click(function(){
		if ( jQuery(this).hasClass('active') ) {
			jQuery(this).removeClass('active');
			jQuery(this).siblings().fadeOut();
		} else {
			jQuery(this).addClass('active');
			jQuery(this).siblings().fadeIn();
		}
	});


	/* Create select responsive menu
	================================================== */
	jQuery(function(){
		jQuery('.main-menu').slicknav({
			label: '',
			prependTo: 'header',
		});
	});
	
	
	/* Ajax loadmore recent post
	================================================== */
	jQuery.fn.bindLoadmoreRecentPost = function() {
		
		var offsetNew = parseInt( jQuery( '#all-post-wrapper' ).data( 'offset' ), 10 ),
			categoryNew = parseInt( jQuery( '#call-category' ).val() );
			
		if ( offsetNew === 0 && selectPostChange === false) {
			offsetNew = 10;
		}
		
		jQuery.post( the_ajax_script.ajaxurl, {
				action: 'loadmore_recent_post',
				category: categoryNew,
				offset: offsetNew
			}, function( data ) {
				jQuery( '#load-more-button button' ).removeClass('loading');
				if ( loadMoreChange === false ) {
					jQuery( '#all-post-wrapper' ).html(data);
				} else {
					jQuery( '#all-post-wrapper' ).append(data);
				}
				jQuery( '#all-post-wrapper' ).data( 'offset', offsetNew + 10 );
				bindTotalCount();
				if ( offsetNew + 10 >= jQuery( '#post-count' ).attr('value') ) {
					jQuery( '#load-more-button' ).fadeOut();
				}
			}
		);
	};
	
	
	/* Ajax loadmore popular post
	================================================== */
	jQuery.fn.bindLoadmorePopularPost = function() {
		
		var offsetNew = parseInt( jQuery( '#all-post-wrapper' ).data( 'offset' ), 10 ),
			categoryNew = parseInt( jQuery( '#call-category' ).val() );
	
		jQuery.post( the_ajax_script.ajaxurl, {
				action: 'loadmore_popular_post',
				category: categoryNew,
				offset: offsetNew
			}, function( data ) {
				jQuery( '#load-more-button button' ).removeClass('loading');
				if ( loadMoreChange === false ) {
					jQuery( '#all-post-wrapper' ).html(data);
				} else {
					jQuery( '#all-post-wrapper' ).append(data);
				}
				jQuery( '#all-post-wrapper' ).data( 'offset', offsetNew + 10 );
				bindTotalCount();
				if ( offsetNew + 10 >= jQuery( '#post-count' ).attr('value') ) {
					jQuery( '#load-more-button' ).fadeOut();
				}
			}
		);
	};
	
	
	/* Ajax loadmore featured post
	================================================== */
	jQuery.fn.bindLoadmoreFeaturedPost = function() {
		
		var offsetNew = parseInt( jQuery( '#all-post-wrapper' ).data( 'offset' ), 10 ),
			categoryNew = parseInt( jQuery( '#call-category' ).val() );
		
		jQuery.post( the_ajax_script.ajaxurl, {
				action: 'loadmore_featured_post',
				category: categoryNew,
				offset: offsetNew
			}, function( data ) {
				jQuery( '#load-more-button button' ).removeClass('loading');
				if ( loadMoreChange === false ) {
					jQuery( '#all-post-wrapper' ).html(data);
				} else {
					jQuery( '#all-post-wrapper' ).append(data);
				}
				jQuery( '#all-post-wrapper' ).data( 'offset', offsetNew + 10 );
				bindTotalCount();
				if ( offsetNew + 10 >= jQuery( '#post-count' ).attr('value') ) {
					jQuery( '#load-more-button' ).fadeOut();
				}
			}
		);
	};

	var bindTotalCount = function() {
		jQuery( '.post-count-wrapper span' ).text( jQuery( '#post-count' ).attr('value') );
	};
	bindTotalCount();

	jQuery( '#call-posts, #call-category' ).on('change', function() {
		
		selectPostChange = true;
		loadMoreChange = false;
		jQuery( '#all-post-wrapper' ).data( 'offset', 0 );
		var offsetNew = parseInt( jQuery( '#all-post-wrapper' ).data( 'offset' ), 10 );
		jQuery( '#load-more-button' ).show();
		
		if ( jQuery('#call-posts').val() === 'recent' ) {
			jQuery(this).bindLoadmoreRecentPost();
		} else if ( jQuery('#call-posts').val() === 'popular' ) {
			jQuery(this).bindLoadmorePopularPost();
		} else if ( jQuery('#call-posts').val() === 'featured' ) {
			jQuery(this).bindLoadmoreFeaturedPost();
		}
		
			
	});
	
	jQuery( '#load-more-button button' ).on('click', function() {
		
		loadMoreChange = true;
		jQuery( '#load-more-button button' ).addClass('loading');
		
		if ( jQuery( '#call-posts' ).val() === 'recent' ) {
			jQuery(this).bindLoadmoreRecentPost();
		} else if ( jQuery( '#call-posts' ).val() === 'popular' ) {
			jQuery(this).bindLoadmorePopularPost();
		} else if ( jQuery( '#call-posts' ).val() === 'featured' ) {
			jQuery(this).bindLoadmoreFeaturedPost();
		}
			
	});

});


jQuery(window).load(function() {
	'use strict';
	
	jQuery( '.place-selector' ).trigger('change');
	
	jQuery( '.stat-select-wrapper select' ).trigger('change');

	/* Init parallax sections
	================================================== */
	var i,
		para = jQuery( '.parallax' );
	for ( i = 0; i < para.length; i++ ) {
		jQuery( para[ i ] ).parallax( '50%', '0.3' );
	}


	/* Toggle
	================================================== */
	jQuery( 'ul.pa-toggle li' ).each(function() {
		jQuery(this).children( '.toggle-content' ).css( 'height', function() { 
			return jQuery(this).innerHeight(); 
		});

		jQuery(this).children( '.toggle-content' ).css( 'display', 'none' );
		jQuery(this).find( '.toggle-head-sign' ).html( '&#43;' );

		jQuery(this).children( '.toggle-head' ).bind( 'click', function() {

			if ( jQuery(this).parent().hasClass( 'active' ) ) {
				jQuery(this).parent().removeClass( 'active' );
			} else {
				jQuery(this).parent().addClass( 'active' );
			}

			jQuery(this).find( '.toggle-head-sign' ).html(function() {
				if ( jQuery(this).parent().parent().hasClass( 'active' ) ) {
					return '&minus;';
				}
				return '&#43;';
			});
			jQuery(this).siblings( '.toggle-content' ).slideToggle();
		});
	});

	jQuery( 'ul.pa-toggle' ).find( '.toggle-content.active' ).siblings( '.toggle-head' ).trigger( 'click' );

});