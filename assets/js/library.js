$(function(){"use strict";function t(){e.setSchedule()}var e={};e.setSchedule=function(){if($(".m-box_title-library_schedule").length){var t,e=new Date,i=e.getFullYear(),a=e.getMonth()+1,s=e.getDate(),o=["日","月","火","水","木","金","土"],n=o[e.getDay()],l=i+"/"+a+"/"+s,d=!1,c=$(".m-box_title-library_schedule_head p > span"),r=$(".m-box_title-library_schedule_item p > span");c.html(a+"/"+s+"<span>（"+n+"）</span>"),$.ajax({url:"/assets/csv/library-list.csv",cache:!1,success:function(e){t=$.csv()(e);for(var i=2;i<t.length;i++)t[i][0]==l&&(r.eq(0).text(t[i][1]),r.eq(1).text(t[i][2]),r.eq(2).text(t[i][3]),d=!0);d||(r.eq(0).text(t[1][1]),r.eq(1).text(t[1][2]),r.eq(2).text(t[1][3]))}})}},t()});