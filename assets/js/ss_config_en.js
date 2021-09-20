var ssConfig = {
	site: 'EP0MXU36',
	base: 'syncsearch',
	search: {
		group: '1',
		charset: 'utf-8',
		count: 10,
		paginationSize: 10,
		align: 'center', //left, center
		dateFormat: 'yyyy/MM/dd',
		opacityTime: 500,
		summaryLength: 100,
		theme: 'gray', //gray, blue,
		templates: {}
	},
	image: {
		popup: true,
		adPosition: 2,
		thumbPosition: 2,
		templates: {}
	},
	suggest: {
		forms: [
			{
				id: '',	//ss-form, ss-query
				group: '1',
				depth: 3
			},
			{
				id: '1', //ss-form1, ss-query1
				group: '1',
				depth: 3
			},
			{
				id: '2', //ss-form2, ss-query2
				group: '1',
				depth: 3
			}
		],
		depth: 3,
		wmModeExcludes: '',
		cssPath: '/assets/css/ss_suggest.css',
		templates: {}
	}
};

ssConfig.search.templates.form =
'<form name="search" id="ss-form" style="display: none;">' +
	'<input type="text" value="{{query}}" name="query" id="ss-query" class="ss-search-input" autocomplete="off" aria-autocomplete="off" />' +
	'<input type="submit" class="ss-search-button" value="Search" />' +
	'<div class="ss-categories">{{category.default}}</div>' +
 '</form>';

ssConfig.search.templates.item =
'<div class="p-search_box-inner">' +
	'<div class="p-search_box-imgtext">' +
		'<div class="p-search_box-img"><a href="{{item.link}}"><img src="{{item.image}}" id="{{item.imageId}}" width="140" height="140" alt=""></div>' +
		'<div class="p-search_box-content">' +
			'<!--<p class="p-search_box-date">{{item.lastModified}}</p>-->' +
			'<h3 class="p-search_box-title"><a href="{{item.link}}">{{item.title}}</a></h3>' +
			'<p class="p-search_box-text">{{item.summary}}</p>' +
		'</div>' +
	'</div>' +
	'<p class="p-search_box-url">{{item.url}}</p>' +
'</div>';

ssConfig.search.templates.aditem =
'<div class="p-search_box-inner">' +
	'<div class="p-search_box-imgtext">' +
		'<div class="p-search_box-img"><a href="{{item.link}}"><img src="{{item.image}}" id="{{item.imageId}}" width="140" height="105" alt=""></div>' +
		'<div class="p-search_box-content">' +
			'<!--<p class="p-search_box-date">{{item.lastModified}}</p>-->' +
			'<h3 class="p-search_box-title"><a href="{{item.link}}">{{item.title}}</a></h3>' +
			'<p class="p-search_box-text">{{item.summary}}</p>' +
		'</div>' +
	'</div>' +
	'<p class="p-search_box-url">{{item.url}}</p>' +
'</div>';

ssConfig.search.templates.navigation =
'<div class="p-search_navi">' +
	'<h2>Search Result for {{query}}</h2>' +
	'<p>{{start}}～{{end}} of <span>{{total}}</span></p>' +
	'<!--<ul>' +
		'<li id="ss-sort-match" class="{{sortMatchSelected}}"><span>Relevance</span></li>' +
		'<li id="ss-sort-date" class="{{sortDateSelected}}"><span>Date</span></li>' +
	'</ul>-->' +
'</div>';

ssConfig.search.templates.pagePrev =
'<div class="p-search_page-prev p-search_page-btn" data-start="{{start}}"><div><i class="icon-arrow-left_01"></i>PREV</div></div>';
ssConfig.search.templates.pagination =
'<div class="p-search_page p-search_page-{{pageSelected}}" data-start="{{start}}"><div>{{page}}</div></div>';
ssConfig.search.templates.pageNext =
'<div class="p-search_page-next p-search_page-btn" data-start="{{start}}"><div>NEXT<i class="icon-arrow-right_01"></i></div></div>';

ssConfig.search.templates.notfound =
'<div id="ss-not-found">' +
	'We found no results for your search : <b>"{{query}}"</b>' +
	'<div id="ss-hint">Hint of search:</div>' +
		'<ul id="ss-hint-message">' +
			'<li>Please confirm whether there are neither an erratum nor an omission of a word in your query</li>' +
			'<li>Try changing some of the words in your query.</li>' +
			'<li>Try changing the words more common in your query</li>' +
		'</ul>' +
	'</div>' +
'</div>';

if (ssConfig.image != undefined && ssConfig.image.templates != undefined) {
	ssConfig.image.templates.preview =
	'<div id="ss-preview">' +
		'<div id="ss-preview-container">' +
		  '<img src="{{previewImage}}" id="ss-preview-image" width="400" height="300" alt="" />' +
		'</div>' +
	'</div>';
}
if (ssConfig.suggest != undefined && ssConfig.suggest.templates != undefined) {
	ssConfig.suggest.templates.item =
	'<div class="ss-suggest-item ss-suggest-item-off" id="{{item.suggestId}}">' +
		'<span class="ss-suggest-key">{{item.keyword}}</span>' +
	'</div>';
}

/*!
* ss_loader.js
* http://www.syncsearch.jp/
*
* @version 1.0.0
* @date 2017-06-19
* @license Copyright 2017 SyncThought,Inc. All Rights Reserved.
* This software is the proprietary information of SyncThought,Inc.
* Use is subject to license terms.
*/
var SyncSearchLoader=function(){this.proto="https:"===location.protocol?"https://":"http://",this.server="",this.CDN={host:"cdn.syncsearch.jp",path:"/libs/"},this.ALT={host:"static.syncsearch.jp",path:"/libs/"}};SyncSearchLoader.prototype={load:function(){var url=this.proto+this.CDN.host+this.CDN.path+ssConfig.base+"_version.js?d="+(new Date).getTime(),xhr=this.createAjaxRequest();try{xhr.open("GET",url,!0),xhr.timeout=500,xhr.onreadystatechange=function(){4==xhr.readyState&&(200==xhr.status?(ssLoader.server=ssLoader.CDN,eval(xhr.responseText)):0==xhr.status&&ssLoader.loadScript())},xhr.send(null)}catch(t){ssLoader.loadScript()}},createAjaxRequest:function(){var t;if(window.XMLHttpRequest)t=new XMLHttpRequest;else try{t=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){try{t=new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}return t},loadScript:function(t){this.server=this.ALT;var t=this.proto+this.ALT.host+this.ALT.path+ssConfig.base+"_version.js?d="+(new Date).getTime(),e=document.getElementsByTagName("head").item(0),s=document.createElement("script");s.setAttribute("type","text/javascript"),s.setAttribute("charset","utf-8"),s.setAttribute("src",t),e.appendChild(s)},init:function(initObj,version){var url=this.proto+this.server.host+this.server.path+ssConfig.base+"_"+version+".min.js";"undefined"!=typeof SS_DEV_SCRIPT&&(url=SS_DEV_SCRIPT);var script=document.createElement("script");script.setAttribute("type","text/javascript"),script.setAttribute("charset","utf-8"),script.setAttribute("src",url);var done=!1;script.onload=script.onreadystatechange=function(){done||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(done=!0,eval(initObj+".init()"))},document.body.appendChild(script)}};var ssLoader=new SyncSearchLoader;ssLoader.load();

