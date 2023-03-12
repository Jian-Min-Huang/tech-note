//6a
var custom = (function() {

  /**
   * Classes which our JS hooks into. Add more class names as necessary.
   * @enum
   * @private
   */
  var elementClass_ = {
    item: 'js-item',
    itemName: 'js-item-name',
    itemPrice: 'js-item-price',
    itemSalePrice: 'js-item-saleprice',
    itemRegularPrice: 'js-item-regularprice',
    itemImg: 'css-item-img',
    itemImgShort: 'css-item-img-short',
    itemBg: 'js-item-bg',
    itemRoll: 'js-item-roll',
    itemRating: 'rating-value'
  };

  var items; //added for autoCycle

  /**
   * Initialization. Must be called from handleAdInitialized on each page.
   */
  function init() {
    utils.log('custom.init()');
    var data = common.getAdData();
    if (!data) return;

    // If you're not using the swipe gallery to display feed items.
    initItemsWithoutGallery_();

    setAutoCycle();
  }

  /**
   * Find all items used outside the gallery and initialize custom behavior.
   * @private
   */
  function initItemsWithoutGallery_() {
    // Apply settings to each item
    items = document.querySelectorAll('.' + elementClass_.item); // removed var for autoCycle
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      initItemDisplay_(item);
    }
  }

  /**
   * Set the display settings for each item.
   * Add any custom functionality you need applied on load.
   * @param {Element} item Item element.
   * @private
   */
  function initItemDisplay_(item) {

    // if you're using sales prices.
    //setSalePricesDisplay_(item);


    // set image display for star-rating
    setImgDisplayStarRating_(item);
    // Set mouseout.
    itemMouseOut(item);
  }


  /**
   * Set image size depending on star rating
   * @param {Element} item Item element.
   * @private
   */
  function setImgDisplayStarRating_(item) {
    
    // console.log('setImgDisplayRating() fired;');
    // window.console.log('item: ', item);

    //get reference to each element
    var itemImg = item.querySelector('.' + elementClass_.itemImg);
    var itemImgShort = item.querySelector('.' + elementClass_.itemImgShort);
    var itemRating = item.querySelector('.' + elementClass_.itemRating);
    itemRating = itemRating.textContent;
    // Set to display correct image.
    if (itemRating < 3) { //if rating is low
      utils.showElement(itemImg, true);
      utils.showElement(itemImgShort, false);
    } else { //rating is high
      utils.showElement(itemImg, false);
      utils.showElement(itemImgShort, true);
    }
  }


  /**
   * Sets the 3 price elements to display correctly when using sales price.
   * Find your price elements and set into common functionality.
   * @param {Element} item Item element.
   * @private
   */
  function setSalePricesDisplay_(item) {
    // Get reference to each price element.
    var itemPrice = item.querySelector('.' + elementClass_.itemPrice);
    var itemSalePrice = item.querySelector('.' + elementClass_.itemSalePrice);
    var itemRegularPrice = item.querySelector('.' + elementClass_.itemRegularPrice);

    // Sets each item to display correct prices.
    common.displayCorrectPrices(itemPrice, itemSalePrice, itemRegularPrice);
  }

  /**
   * Custom Item Mouse Interactions. Add your own behavior.
   */

  /**
   * Custom Mouseover interaction functionality.
   * @param {Element} item
   */
  function itemMouseOver(item) {

    stopAutoCycle();
    itemHighlight(item);

  }

  /**
   * Custom Mouseout interaction functionality.
   * @param {Element} item
   */
  function itemMouseOut(item) {

    var itemRoll = item.querySelector('.' + elementClass_.itemRoll);
    itemRoll.style.opacity = 0;
    //
    itemUnHighlight(item);

  }






  /**
   * Auto cycle through items on stage.
   * Highlight each item. Same effect on mouseover
   */
  
  var autoCycleInt;
  var cancelTimeout;
  function setAutoCycle() {
    var itemsLength = Math.min(items.length, common.getAdData().Product.length);

    // Set first item active.
    activateCurrentItem();

    // Start auto cycle.
    var autoCycleFrameDur = 3000;
    autoCycleInt = setInterval(function() {
      if (common.getCurrentItemIndex() < itemsLength - 1) {
        common.setCurrentItemNext();
      } else {
        common.setCurrentItemIndex(0);
      }
      activateCurrentItem();
    }, autoCycleFrameDur);

    // Limit to 30 seconds.
    var autoCycleLimit = 28000;
    cancelTimeout = setTimeout(function() {
      stopAutoCycle();
      common.setCurrentItemIndex(0);
      activateCurrentItem();
    }, autoCycleLimit);
  }

  function activateCurrentItem() {
    var index = common.getCurrentItemIndex();
    var item = items[index];
    itemHighlight(item);
  }

  /**
   * Stops the autocycle interval.
   */
  function stopAutoCycle() {
    // console.log("stopAutoCycle");
    clearInterval(autoCycleInt);
    clearTimeout(cancelTimeout);
  }
  /**
   * Highlight functions (replaces mouseOver)
   */

  /**
   * highlight item (replaces mouseOver)
   */
  function itemHighlight(item) {
    var adData = common.getAdData();
    var itemRoll = item.querySelector('.' + elementClass_.itemRoll);
    itemRoll.style.opacity = 1;

    // Revert other items.
    for (var i = 0; i < items.length; i++) {
      var current = items[i];
      if (item != current) {
        itemMouseOut(current);
      }
    }
  }

  /**
   * un-highlight item (replaces mouseOut)
   */
  function itemUnHighlight(item) {
    //var itemCta = item.querySelector('.' + elementClass_.itemCta);
    //itemCta.style.opacity = 0;
  }



  // Add any methods here which you want to be accessible from your html.
  return {
    init: init,
    itemMouseOver: itemMouseOver,
    itemMouseOut: itemMouseOut
  };

})();
