(function(){var a=$('<div id="loading">'+'<div id="loading-center">'+'<div id="loading-center-absolute">'+'<div class="object" id="object_four"></div>'+'<div class="object" id="object_three"></div>'+'<div class="object" id="object_two"></div>'+'<div class="object" id="object_one"></div>'+"</div>"+"</div>"+"</div>");$("body").prepend(a)})();$(function(){function h(){var j=$("script:contains(getFollowStatus)");if(j.size==0){throw"getFollowStatus为空值"}return j.html().replace("getFollowStatus('","").replace("');","")}function g(){var j=$("#Header1_HeaderTitle");if(j.size==0){throw"Header1_HeaderTitle为空值"}return j.html()}function e(){return $("#post_detail").size()>0}function i(){$("#topics .postTitle a").hide();return $("#topics .postTitle a").html()}function c(){var j=$("#topics .post .postDesc");return"Posted by "+j.find("a:first").html()+" on "+j.find("#post-date").html()}function a(){var k={};$("#BlogPostCategory a,#EntryTag a").each(function(n,o){var m=$(o).html();k[m.toUpperCase()]=m});var j=[];for(var l in k){j.push(k[l])}return j}function b(){var j=$("#div_digg .diggit");if(j.size()==0){throw"diggit为空值"}return j.attr("onclick")}function f(){$(document).bind("mousewheel",function(j,k){if(($(j.toElement).attr("id")==="main-mask")||($(j.toElement).attr("class")==="optiscroll-vtrack")){return false}});$("#main-mask").css({"height":$(document).height(),"width":$(document).width()});$("#main-mask").show()}function d(){$(document).unbind("mousewheel");$("#main-mask").hide()}(function(){var j=$('<div id="main-mask"></div>');$("body").prepend(j)})();(function(){var n=document.getElementById("sideBar");$(n).addClass("optiscroll");new Optiscroll(n,{maxTrackSize:50,preventParentScroll:true,wrapContent:false});var q=document.getElementById("sidebar_news");var l=$("<a class='iconfont closeBtn'></a>");l.click(function(){d();$(n).css("cssText","width:0px!important;display:block;")});l.click();$(q).prepend(l);var m=$('<a href="javascript:void(0)" class="focusMeBtn" onclick="follow(\''+h()+"')\">+加关注</a>");$(q).append(m);$("body").click(function(s){function r(){d();l.click()}$(s.target).closest("#sideBar,.main-menu-button,.main-menu-sm-button").size()==0?r():""});var p=[{name:"首页",url:_static_.indexPage,target:"_self"},{name:"联系",url:_static_.sendPage,target:"_blank"},{name:"订阅",url:_static_.subPage,target:"_blank"},{name:"管理",url:_static_.manPage,target:"_blank"},{name:"GitHub",url:_static_.gitHub,target:"_blank"}];var k=$('<div class="menu-icon-list"></div>');var o='<ol class="menu-icon-content">';p.forEach(function(s,r){o+="<li><a style='cursor:pointer;' href='"+s.url+"' target='"+s.target+"'>"+s.name+"</a></li>"});o+="</ol>";var j='<ol class="menu-icon-index">';p.forEach(function(s,r){j+="<li></li>"});j+"</ol>";k.html(o+j);$("#blog-sidecolumn").prepend(k)})();(function(){function l(){f();$("#sideBar").css("cssText","width:252px!important;display:block;")}var n=$('<div class="main-header"></div>');n.css("background","url("+_static_.backgroundImg+") center center / cover no-repeat rgb(34, 34, 34)");$("#home").before(n);var q=$("<button class='iconfont main-menu-button'><span>菜单</span></button>");q.click(l);n.append(q);var k=$("<button class='iconfont main-menu-sm-button'><span> </span></button>");k.hide();k.click(l);n.append(k);var m=1;function j(){m=1;var t=$('<div class="main-header-sign"></div>');var r="";r+='<h1 class="sign1" >'+g()+"</h1>";r+='<h2 class="sign2" style="display: -webkit-box;">'+_static_.poetry.line+"</h2>";r+='<h3 class="sign3" style="display: block;">'+_static_.poetry.desc+"</h3>";t.html(r);n.append(t);var s=$('<div class="main-header-arrow"></div>');var u="";u+='<div class="bottom-arrow-warp"><span class="iconfont bottom-arrow"></span></div>';s.html(u);s.find(".bottom-arrow").click(function(){$("html").animate({scrollTop:$(window).height()},450)});n.append(s)}function p(){m=0.4;n.css("height","40vh");var t=$('<div class="main-header-sign"></div>');var r="";r+='<h1 class="sign-post-title" >'+i()+"</h1>";r+='<h2 class="sign-post-desc">'+c()+"</h2>";var s=a();var u="";s.forEach(function(w,v){u+='<span class="sign-post-tag">'+w+"</span>"});r+='<h3 class="sign-post-tags">'+u+"</h2>";t.html(r);n.append(t)}e()?p():j();$(window).scroll(function(t){function r(){q.show();k.hide()}function s(){q.hide();k.show()}($(document).scrollTop()>=(($(window).height()*m)-35))?s():r()});var o=$('<div class="main-top-bar-wrap"><div class="main-top-bar"></div></div>');$("#home").before(o);$(window).scroll(function(s){var r=($(document).scrollTop()/($(document).height()-$(window).height()))*$(window).width();o.find(".main-top-bar").css("width",r+"px")})})();(function(){})();(function(){var k=$('<div class="right-menu"></div>');var j="";if(e()){j+='<span class="iconfont icon-zan right-zan" onclick="'+b()+'"></span>'}j+='<span class="iconfont icon-heart right-heart" onclick="follow(\''+h()+"')\"></span>";j+='<span class="iconfont icon-downbot right-arrow"></span>';$("#home").before(k);k.html(j);k.find(".right-arrow").click(function(l){if($(l.currentTarget).hasClass("right-arrow-rotate")){$("html").animate({scrollTop:0},450)}else{$("html").animate({scrollTop:$(document).height()},450)}});$(window).scroll(function(l){if($(document).scrollTop()>=$(window).height()-35){$(".right-arrow").addClass("right-arrow-rotate")}else{$(".right-arrow").removeClass("right-arrow-rotate")}})})();(function(){if(!e()){return}var k=$('<p class="essaySuffix-eof">__EOF__</p>');$("#MySignature").before(k);var j=$(""+'<div class="essaySuffix-box">'+'<div class="essaySuffix-box-left">'+'<a class="lightbox" href="'+_static_.headImg+'">'+'<img src="'+_static_.headImg+'" alt="">'+"</a>"+"</div>"+'<div class="essaySuffix-box-right">'+'<span class="essaySuffix-right-title">作　　者</span>：'+"<strong>"+'<span style="font-size: 12px;">'+'<a href="'+_static_.indexPage+'" target="_blank">cjunn</a>'+"</span>"+"</strong> "+"<br>"+'<span style="font-weight: bold; white-space:nowrap;">出　　处</span>：'+'<a href="'+_static_.indexPage+'" target="_blank">'+_static_.indexPage+"</a>"+"<br>"+'<span class="essaySuffix-right-title">关于博主</span>：'+'热爱生活，爱读书/旅游，乐于专研。评论和私信会在第一时间回复。或者<a href="'+_static_.sendPage+'" target="_blank">直接私信</a>我。'+"<br>"+'<span class="essaySuffix-right-title">版权声明</span>：署名 - 非商业性使用 - 禁止演绎，'+'<a href="'+_static_.copyright1+'" alt="协议普通文本" title="协议普通文本" target="_blank">协议普通文本</a> | '+'<a href="'+_static_.copyright2+'" alt="协议法律文本" title="协议法律文本" target="_blank">协议法律文本</a>。'+"<br>"+'<span class="essaySuffix-right-title">声援博主</span>：如果您觉得文章对您有帮助，可以点击文章右下角'+"<strong>"+'<span style="color: #ff0000; font-size: 12pt;">【'+'<a id="post-up" onclick="'+b()+'" href="javascript:void(0);">推荐</a>】'+"</span>"+"</strong>"+"一下。您的鼓励是博主的最大动力！"+"<br>"+"</div>"+'<div style="clear: both;"></div>'+"</div>");$("#MySignature").before(j)})();(function(){if(!e()){return}$(".postBody").attr("data-toc","#toc");$("#mainContent").before('<div id="toc"></div>');var k=new TocHelper({dom:"div[data-toc]",offsetBody:document.querySelector("#home")});k.reset();function j(){var l=$("#mainContent").outerWidth();$("#toc").css("left","calc(50% + "+((l/2)+5)+"px)")}j();$(window).resize(j);(function(){var l=$("#main").offset().top;$("#toc").css("cssText",$("#toc").attr("style")+";top:"+l+"px!important;");$(window).scroll(function(n){var m=$(window).scrollTop();if(m<=l){var m=$(window).scrollTop();$("#toc").css("cssText",$("#toc").attr("style")+";top:"+(l-m)+"px!important;")}else{$("#toc").css("cssText",$("#toc").attr("style")+";top:5px!important;")}})})()})();(function(){var j=$("#cnblogs_post_body pre code");j.append('<span class="hideIcon"> </span>');j.find(".hideIcon").click(function(k){console.log($(k.target).closest("code").html())})})();setTimeout(function(){$("#loading").fadeOut(500)},50)});