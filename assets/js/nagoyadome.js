$(function(){"use strict";function a(){t.navLocation()}var t={};t.navLocation=function(){var a=$(".p-nagoyadome_lheader_item");if(a.length){var t=location.pathname.split("/")[2].replace(".html","");t.length||(t="index"),$(a.selector+"-"+t).addClass("js-status-active")}},a()});