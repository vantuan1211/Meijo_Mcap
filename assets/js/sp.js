$(function(){"use strict";function n(){i.mresearchList(),i.navLocation()}var i={};i.mresearchList=function(){var n=$(".js-action-mresearch");n.each(function(){function n(){var n=i.find("> li").length;e*a>=n&&t.slideUp().remove()}var i=$(this).find(".js-action-mresearch-list"),t=$(this).find(".js-action-mresearch-more"),e=6,a=1;n(),t.click(function(){a+=1,i.find("> li:lt("+e*a+")").slideDown(),n()})})},i.navLocation=function(){var n=$(".p-mresearch_nav_item");if(n.length){var i=location.pathname.split("/")[3].replace(".html","");i.length||(i="index"),$(n.selector+"-"+i).addClass("js-status-active")}},n()});
