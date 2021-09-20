$(function () {
  'use strict';

  /* ************************************************
   * checkScroll
   *
   * スクロールチェック（PC）
   *
  ************************************************* */
	var locationSearch = window.location.search;
	
	if( locationSearch ){
		var locationSearch2 = locationSearch.slice(1);
		var locationSearch3 = locationSearch2.split('&');
		for( var i=0; i<locationSearch3.length; i++ ){
			var locationSearch4 = '';
			if( locationSearch3[i].indexOf('query=') != -1 ){
				locationSearch4 = locationSearch3[i].split('=');
				locationSearch4[1] = decodeURIComponent(locationSearch4[1]);
				$('#ss-query').attr('value', locationSearch4[1]);
			}
		}
	}
});

