!function(a){"use strict";var b={removeClass:function(a,b){a.classList?a.classList.remove(b):a.className=a.className.replace(new RegExp("(^|\\b)"+b.split(" ").join("|")+"(\\b|$)","gi")," ")},addClass:function(a,b){a.classList?a.classList.add(b):a.className+=" "+b}},c={buttonSelector:".hamburger-button"},d=!1,e=function(a){m=m?m:document.querySelector(a||c.buttonSelector),m.addEventListener("mouseenter",f),m.addEventListener("mouseleave",g),m.addEventListener("click",j)},f=function(){b.addClass(l,"open")},g=function(){b.removeClass(l,"open")},h=function(){d=!0,b.addClass(l,"full")},i=function(){d=!1,b.removeClass(l,"full")},j=function(){g(),d?i():h()},k=function(a){var b=document.querySelector(a);b.addEventListener("click",i)},l=document.querySelector(".hamburger-nav");l.addEventListener("mouseenter",h);var m=document.querySelector(c.buttonSelector);m&&e(),a.init=e,a.open=f,a.close=g,a.fullOpen=h,a.fullClose=i,a.toggle=j,a.closeOnClick=k}(window.Hamburger=window.Hamburger||{});