!function(a){"use strict";var b=document.querySelector(".hamburger-button"),c=document.querySelector(".hamburger-nav"),d=document.querySelectorAll(".hamburger-list .item"),e={toggleClass:function(a,b){if(a.classList)a.classList.toggle(b);else{var c=a.className.split(" "),d=c.indexOf(b);d>=0?c.splice(d,1):c.push(b),a.className=c.join(" ")}},removeClass:function(a,b){a.classList?a.classList.remove(b):a.className=a.className.replace(new RegExp("(^|\\b)"+b.split(" ").join("|")+"(\\b|$)","gi")," ")},addClass:function(a,b){a.classList?a.classList.add(b):a.className+=" "+b}},f=function(){e.addClass(c,"open")},g=function(){e.removeClass(c,"open")},h=function(){e.addClass(c,"full")},i=function(){e.removeClass(c,"full")},j=function(){e.toggleClass(c,"full"),e.removeClass(c,"open")};b.addEventListener("mouseenter",f),b.addEventListener("mouseleave",g),b.addEventListener("click",j);for(var k=0;k<d.length;k++)d[k].addEventListener("mouseenter",h);a.HamburgerMenu={open:f,close:g,fullOpen:h,fullClose:i}}(window);