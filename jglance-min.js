/**
Copyright (C) 2011 by Mohammad "Moe" Hosseini

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
var JGlance=function(m){var c={data:{},root:$("body"),container:null,baseHeight:90,maxHeight:110,resultItemCustomClass:"",hoverAnimateSpeed:100,hoverInterval:250,fadeInSpeed:350,enableHoverInfo:false,enableLightBox:true,photoClickCallback:function(){},lightBoxInfoCallback:function(){},hoverInfoCallback:function(){},photoErrorCallback:function(){},hoverInfoTransSpeed:250,maxHoverWidth:360,maxHoverHeight:360,maxPerRow:4},t=null,u=$.browser.msie,z=[50,100,150,200,250,300,350,400,450,500,550,600,650,
700,750],g=[],l=Number.MAX_VALUE,A=0,B=0,p=0,q=2,n=false,r=null,e=null,d=null,j=null,h=null,f=-1,C=function(){},D=function(){},E=function(){};$.extend(c,m);var v=function(a){return function(b){$(document).bind("keyup",function(i){(i.keyCode==a||i.which==a)&&b()})}},N=function(){w()},F=function(){f!=0&&x(g[--f])},G=function(){f+1!=g.length&&x(g[++f])},H=function(){h=typeof c.container=="string"?$(c.container):c.container;p=h.width();A=c.baseHeight;B=c.maxHeight;q=Math.max(c.maxPerRow,q);t=c.root;C=
v(27);D=v(37);E=v(39)};H();m=document.createElement("div");m.setAttribute("style","transition:top 1s ease;-o-transition:top 1s ease;-webkit-transition:top 1s ease;-moz-transition:top 1s ease;");var n=!u&&!(!m.style.transition&&!m.style.oTransition&&!m.style.webkitTransition&&!m.style.MozTransition),O=function(){if(j&&d){var a=$(document),b=$(window);j.css({width:a.width(),height:a.height()});d.css({width:b.width(),height:b.height()})}},w=function(){j&&d&&(j.remove(),d.remove(),j=d=null,$(document).unbind("keyup"))},
P=function(){var a=$(window),b=$(document);j=$("<div />").addClass("jg_overlay").css({width:a.width(),height:b.height()});d=$("<div />").addClass("jg_lightbox").css({width:a.width(),height:a.height(),top:a.scrollTop()}).append($("<div />").click(function(){w()}).append($("<div />").addClass("jg_lightbox-container").delegate("*","click",function(a){a.stopPropagation()}).append($("<a />").addClass("jg_left-arrow"+(!n?" forced":"")).click(function(a){a.preventDefault();F()}),$("<a />").addClass("jg_right-arrow"+
(!n?" forced":"")).click(function(a){a.preventDefault();G()}),$("<div />").addClass("jg_lightbox-photo").append($("<img />"),$("<div />").addClass("jg_lightbox-info"))),$("<a />").addClass("jg_close").html("Close (esc)").click(function(a){a.preventDefault();w()})));a.resize(O);C(N);D(F);E(G);t.append(j,d)},x=function(a){var b=d.find(".jg_left-arrow");d.end();var i=d.find(".jg_right-arrow");d.end();var e=d.find(".jg_lightbox-photo > img");d.end();var k=d.find(".jg_lightbox-info");d.end();f==0?b.hide():
g.length>1&&b.show();f+1==g.length?i.hide():g.length>1&&i.show();e.attr("src",a.large||a.thumbnail);k.empty().append(c.lightBoxInfoCallback(a,c.data))},I=function(){f=$(this).data("index");var a=g[f];!d&&P();x(a)},Q=function(a,b,i){e=$("<div />").addClass("jg_result-hover").mouseleave(function(){i.unbind("mouseleave");J()}).append($("<div />").append($("<img />").data("index",b).click(function(){c.photoClickCallback(a,c.data);c.enableLightBox&&I.call(this)})));c.enableHoverInfo&&e.find("div:first-child").append($("<div />").addClass("jg_hover-info")).end();
i.mouseleave(function(a){a.stopPropagation()});t.append(e)},y=function(a,b){return Math.floor(a.width*b/a.height)},J=function(){r&&clearTimeout(r);e=(e&&e.remove(),null)};h.delegate(".jg_result-item img","mouseenter",function(){r&&clearTimeout(r);e&&e.remove();var a=$(this);r=setTimeout(function(){var b=g[a.data("index")],i,d,k=a.width(),h=a.height();if(b){b.width>b.height?(i=Math.max(k,c.maxHoverWidth||b.width),d=Math.floor(b.height*i/b.width)):(d=Math.max(h,c.maxHoverHeight||b.height),i=y(b,d));
for(var o=$(window),s=a.offset(),K=s.top-20-1,s=s.left-20-1,l=K-(d-h)/2,f=s-(i-k)/2;l++ +10<o.scrollTop()+3;);for(;f++ +10<3;);for(;l--+d+20+2>o.scrollTop()+o.height()-3-10;);for(;f--+i+20+2>o.width()-3-10;);Q(b,a.data("index"),a);o=e.find("img");o.attr({src:a.attr("src"),width:k,height:h});e.end();(k=c.enableHoverInfo?e.find(".jg_hover-info"):null)&&e.end();k&&k.append(c.hoverInfoCallback(b,c.data));e.css({top:K,left:s}).show();o.animate({width:i,height:d},c.hoverAnimateSpeed);e.animate({top:l,left:f},
c.hoverAnimateSpeed);k&&(n?k.addClass("faded-in"):k.fadeTo(c.hoverInfoTransSpeed,1))}},c.hoverInterval)}).delegate(".jg_result-item img","mouseleave",J);var R=function(a,b){return $("<div />").addClass("jg_result-item"+(c.resultItemCustomClass?" "+c.resultItemCustomClass:"")).data("height",a.height).data("width",a.width).append($("<img />").error(function(){c.photoErrorCallback(a,$(this),c.data)}).data("index",g.length+b).css({width:a.adjustedWidth,height:a.adjustedHeight}).addClass(u?"":"faded-out").click(function(){c.imageClickCallback(a,
c.data);c.enableLightBox&&I.call(this)}).attr({src:a.thumbnail}).load(function(){if(!u){var a=$(this);setTimeout(function(){n?a.addClass("faded-in"):a.fadeTo(c.fadeInSpeed,1)},z[Math.floor(Math.random()*z.length)])}}))},L=function(a,b){if(!(a.length<=1)){for(var c=l,d=0;b>0;)c++,a.each(function(){var a=$(this),d=y({width:a.data("width"),height:a.data("height")},c),a=a.find("img"),e=a.width();b-=d-e;a.css({width:b>0?d:e,height:c})});$(a.get(-1)).addClass("last");a.each(function(a){var b=$(this),c=
b.find("img");d+=(a==0||b.hasClass("last")?1:2)*3+c.width()});for(b=p-d;b>0;)a.find("img").each(function(){if(b--<1)return false;$(this).css({width:$(this).width()+1})});return a.find("img:eq(0)").height()}},M=function(a){var b=$("<div />").addClass("jg_result-row jg_clearfix"),c=0,d=0,e=h.find(".jg_result-row:last-child"),f=e.find(".jg_result-item:last-child").hasClass("last");e.end();h.end();e.length==1&&!f&&($(e.find(".jg_result-item").get().reverse()).each(function(b){a.unshift(g[g.length-1-b])}),
e.remove());$.each(a,function(e,g){var f=y(g,l),k=f+6;g.adjustedWidth=f;g.adjustedHeight=l;if(c+k>p||d>=q){var f=p-c+3,m=b.find(".jg_result-item"),f=L(m,f);b.css({height:f});h.append(b);b=$("<div />").addClass("jg_result-row jg_clearfix");d=c=0}d++;c+=k;b.append(R(g,e));if(e==a.length-1){var j=b.find(".jg_result-item"),f=l;if(j.length>q/2){var n=0;j.each(function(a){n+=(a==0||a==j.length-1?1:2)*3+$(this).find("img").width()});f=L(j,p-n);j.length==q&&$(j.get(-1)).addClass("last")}b.css({height:f});
h.append(b);h.end()}})},S=function(){$.each(g,function(a,b){l=Math.min(l,b.height)});l=Math.min(Math.max(l,A),B)};this.push=function(a){l==Number.MAX_VALUE&&S();M(a);$.merge(g,a);return this};this.getPhotos=function(){return g};this.updateSettings=function(a){$.extend(c,a);H();return this};this.reset=function(){e&&e.remove();h&&h.children().remove().end();g=[];return this};this.redraw=function(){e&&e.remove();h&&h.children().remove().end();M(g);return this}};
