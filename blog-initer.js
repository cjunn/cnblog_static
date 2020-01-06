/*启动动画*/
(function(){
    var loading=$('<div id="loading">'+
        '<div id="loading-center">'+
        '<div id="loading-center-absolute">'+
        '<div class="object" id="object_four"></div>'+
        '<div class="object" id="object_three"></div>'+
        '<div class="object" id="object_two"></div>'+
        '<div class="object" id="object_one"></div>'+
        '</div>'+
        '</div>'+
        '</div>');
    $("body").prepend(loading);
})();
$(function(){
    /*获取博客ID值*/
    function loadNetBlogId(){
        var dom=$("script:contains(getFollowStatus)");
        if(dom.size==0){
            throw "getFollowStatus为空值";
        }
        return dom.html().replace("getFollowStatus('","").replace("');","");
    };
    /*获取博客名称*/
    function loadNetBlogName(){
        var dom=$("#Header1_HeaderTitle");
        if(dom.size==0){
            throw "Header1_HeaderTitle为空值";
        }
        return dom.html();
    }
    /*是否详情页*/
    function isPostDetail(){
        return $("#post_detail").size()>0;
    }
    /*获取详情页标题*/
    function loadPostTitle(){
        $("#topics .postTitle a").hide();
        return $("#topics .postTitle a").html();
    }
    /*获取投递描述*/
    function loadPostDesc(){
        var mainDom=$("#topics .post .postDesc");
        return "Posted by "+mainDom.find("a:first").html()+" on "+mainDom.find("#post-date").html();
    }
    /*获取TAG*/
    function loadTags(){
        //BlogPostCategory
        //EntryTag
        var tags={};
        $("#BlogPostCategory a,#EntryTag a").each(function(i,e){
            var tag=$(e).html();
            tags[tag.toUpperCase()]=tag;
        });
        var values = [];
        for (var key in tags)
            values.push(tags[key]);
        return values;
    }
    /*获取diggit属性*/
    function loadDiggitAttr(){
        var diggit=$("#div_digg .diggit");
        if(diggit.size()==0){
            throw "diggit为空值";
        }
        return diggit.attr("onclick");
    }
    /*显示遮罩*/
    function showMask(){
        $(document).bind('mousewheel', function(event, delta) {
            if(($(event.toElement).attr("id")==="main-mask")||($(event.toElement).attr("class")==="optiscroll-vtrack")){
                return false;
            }
        });
        $("#main-mask").css({"height":$(document).height(),"width":$(document).width()});
        $("#main-mask").show();
    }
    /*关闭遮罩*/
    function hideMask(){
        $(document).unbind('mousewheel');
        $("#main-mask").hide();
    }
    /*初始化遮罩*/
    (function(){
        var shadeDom=$("<div id=\"main-mask\"></div>");
        $("body").prepend(shadeDom);
    })();
    /*初始化导航栏*/
    (function(){
        /*添加导航栏滚动条*/
        var sideBar=document.getElementById('sideBar');
        $(sideBar).addClass("optiscroll");
        new Optiscroll(sideBar,{ maxTrackSize: 50,preventParentScroll: true,wrapContent: false });
        /*增加导航栏关闭按钮*/
        var sidebarNews=document.getElementById('sidebar_news');
        var closetTmpDom=$("<a class='iconfont closeBtn'></a>");
        closetTmpDom.click(function(){
            hideMask();
            $(sideBar).css("cssText","width:0px!important;display:block;")
        })
        closetTmpDom.click();
        $(sidebarNews).prepend(closetTmpDom);
        /*添加导航栏关注我按钮*/
        var focusTmpDom=$("<a href=\"javascript:void(0)\" class=\"focusMeBtn\" onclick=\"follow('"+loadNetBlogId()+"')\">+加关注</a>");
        $(sidebarNews).append(focusTmpDom);
        /*初始化自动关闭菜单时间*/
        $("body").click(function(e){
            //3个控件值
            function closeMenu(){
                hideMask();
                closetTmpDom.click();
            }
            $(e.target).closest("#sideBar,.main-menu-button,.main-menu-sm-button").size()==0?closeMenu():'';
        });
        /*初始化目录页*/
        var pageArray=[
            {name:'首页',url:_static_.indexPage,target:'_self'},
            {name:'联系',url:_static_.sendPage,target:'_blank'},
            {name:'订阅',url:_static_.subPage,target:'_blank'},
            {name:'管理',url:_static_.manPage,target:'_blank'},
            {name:'GitHub',url:_static_.gitHub,target:'_blank'}
        ]
        /*构建内容*/
        var pageTemDom=$("<div class=\"menu-icon-list\"></div>");
        var pageUlStr="<ol class=\"menu-icon-content\">";
        pageArray.forEach(function(e,i){
            pageUlStr+="<li><a style='cursor:pointer;' href='"+e.url+"' target='"+e.target+"'>"+e.name+"</a></li>";
        });
        pageUlStr+="</ol>";
        /*构建页标*/
        var pageUlSignStr="<ol class=\"menu-icon-index\">";
        pageArray.forEach(function(e,i){
            pageUlSignStr+="<li></li>";
        });
        pageUlSignStr+"</ol>";
        pageTemDom.html(pageUlStr+pageUlSignStr);
        $("#blog-sidecolumn").prepend(pageTemDom);
    })();
    /*初始化入口界面*/
    (function(){
        /*初始化入口大屏*/
        function openMenu(){
            showMask();
            $("#sideBar").css("cssText","width:252px!important;display:block;");
        }
        var headTmpDom=$("<div class=\"main-header\"></div>");
        headTmpDom.css('background','url('+_static_.backgroundImg+') center center / cover no-repeat rgb(34, 34, 34)')
        $("#home").before(headTmpDom);
        /*初始化左侧菜单按钮*/
        var menuTmpDom=$("<button class='iconfont main-menu-button'><span>菜单</span></button>");
        menuTmpDom.click(openMenu)
        headTmpDom.append(menuTmpDom);
        /*小按钮*/
        var menuSmTmpDom=$("<button class='iconfont main-menu-sm-button'><span> </span></button>");
        menuSmTmpDom.hide();
        menuSmTmpDom.click(openMenu)
        headTmpDom.append(menuSmTmpDom);
        var menuLocation=1.0;
        /*初始化入口大屏签名栏*/
        function initDefSign(){
            menuLocation=1.0;
            var signTmpDom=$('<div class="main-header-sign"></div>');
            var signTmpIntStr="";
            signTmpIntStr+="<h1 class=\"sign1\" >"+loadNetBlogName()+"</h1>";
            signTmpIntStr+="<h2 class=\"sign2\" style=\"display: -webkit-box;\">"+_static_.poetry.line+"</h2>";
            signTmpIntStr+="<h3 class=\"sign3\" style=\"display: block;\">"+_static_.poetry.desc+"</h3>";
            signTmpDom.html(signTmpIntStr);
            headTmpDom.append(signTmpDom);

            /*初始化入扣大屏指示箭头*/
            var arrowTmpDom=$('<div class="main-header-arrow"></div>');
            var arrowTmpIntStr="";
            arrowTmpIntStr+="<div class=\"bottom-arrow-warp\"><span class=\"iconfont bottom-arrow\"></span></div>";
            arrowTmpDom.html(arrowTmpIntStr);
            /*初始化大屏箭头事件*/
            arrowTmpDom.find(".bottom-arrow").click(function(){
                $("html").animate({scrollTop:$(window).height()},450)
            });
            headTmpDom.append(arrowTmpDom);
        }
        function initPostSign(){
            menuLocation=0.4;
            headTmpDom.css("height","40vh");
            var signTmpDom=$('<div class="main-header-sign"></div>');
            var signTmpIntStr="";
            signTmpIntStr+="<h1 class=\"sign-post-title\" >"+loadPostTitle()+"</h1>";
            signTmpIntStr+="<h2 class=\"sign-post-desc\">"+loadPostDesc()+"</h2>";
            var tags=loadTags();
            var tagTmpStr="";
            tags.forEach(function(e,i){
                tagTmpStr+="<span class=\"sign-post-tag\">"+e+"</span>";;
            })
            signTmpIntStr+="<h3 class=\"sign-post-tags\">"+tagTmpStr+"</h2>";
            signTmpDom.html(signTmpIntStr);
            headTmpDom.append(signTmpDom);

        }
        isPostDetail()?initPostSign():initDefSign();
        /*初始化滚动监听*/
        $(window).scroll(function(event){
            function show(){
                menuTmpDom.show();
                menuSmTmpDom.hide();
            }
            function hide(){
                menuTmpDom.hide();
                menuSmTmpDom.show();
            }
            ($(document).scrollTop() >= (($(window).height()*menuLocation)-35))?hide():show();
        })
        /*添加进度条*/
        var mainTopDom=$('<div class="main-top-bar-wrap"><div class="main-top-bar"></div></div>');
        $("#home").before(mainTopDom);
        $(window).scroll(function(event){
            var width=($(document).scrollTop()/($(document).height()-$(window).height()))*$(window).width();
            mainTopDom.find(".main-top-bar").css("width",width+"px");
        })
    })();
    /*初始化正文*/
    (function(){

    })();
    /*初始化页脚*/
    (function(){
        var rightMenu=$("<div class=\"right-menu\"></div>");
        var iconHtml="";
        if(isPostDetail()){
            iconHtml+="<span class=\"iconfont icon-zan right-zan\" onclick=\""+loadDiggitAttr()+"\"></span>"
        }
        iconHtml+="<span class=\"iconfont icon-heart right-heart\" onclick=\"follow('"+loadNetBlogId()+"')\"></span>"
        iconHtml+="<span class=\"iconfont icon-downbot right-arrow\"></span>"
        $("#home").before(rightMenu);
        rightMenu.html(iconHtml);
        rightMenu.find(".right-arrow").click(function(e){
            if($(e.currentTarget).hasClass("right-arrow-rotate")){//向上
                $("html").animate({scrollTop:0},450)
            }else{//向下
                $("html").animate({scrollTop:$(document).height()},450)
            }
        })
        $(window).scroll(function(event){
            if($(document).scrollTop() >= $(window).height()-35){
                $(".right-arrow").addClass("right-arrow-rotate");
            }else{
                $(".right-arrow").removeClass("right-arrow-rotate");
            }
        });
    })();
    /*初始化签名*/
    (function(){
        if(!isPostDetail()){
            return;
        }
        var eof=$("<p class=\"essaySuffix-eof\">__EOF__</p>");
        $("#MySignature").before(eof);
        var sign=$(''+
            '<div class="essaySuffix-box">'+
            '<div class="essaySuffix-box-left">'+
            '<a class="lightbox" href="'+_static_.headImg+'">'+
            '<img src="'+_static_.headImg+'" alt="">'+
            '</a>'+
            '</div>'+
            '<div class="essaySuffix-box-right">'+
            '<span class="essaySuffix-right-title">作　　者</span>：'+
            '<strong>'+
            '<span style="font-size: 12px;">'+
            '<a href="'+_static_.indexPage+'" target="_blank">cjunn</a>'+
            '</span>'+
            '</strong> '+
            '<br>'+
            '<span style="font-weight: bold; white-space:nowrap;">出　　处</span>：'+
            '<a href="'+_static_.indexPage+'" target="_blank">'+_static_.indexPage+'</a>'+
            '<br>'+
            '<span class="essaySuffix-right-title">关于博主</span>：'+
            '热爱生活，爱读书/旅游，乐于专研。评论和私信会在第一时间回复。或者<a href="'+_static_.sendPage+'" target="_blank">直接私信</a>我。'+
            '<br>'+
            '<span class="essaySuffix-right-title">版权声明</span>：署名 - 非商业性使用 - 禁止演绎，'+
            '<a href="'+_static_.copyright1+'" alt="协议普通文本" title="协议普通文本" target="_blank">协议普通文本</a> | '+
            '<a href="'+_static_.copyright2+'" alt="协议法律文本" title="协议法律文本" target="_blank">协议法律文本</a>。'+
            '<br>'+
            '<span class="essaySuffix-right-title">声援博主</span>：如果您觉得文章对您有帮助，可以点击文章右下角'+
            '<strong>'+
            '<span style="color: #ff0000; font-size: 12pt;">【'+
            '<a id="post-up" onclick="'+loadDiggitAttr()+'" href="javascript:void(0);">推荐</a>】'+
            '</span>'+
            '</strong>'+
            '一下。您的鼓励是博主的最大动力！'+
            '<br>'+
            '</div>'+
            '<div style="clear: both;"></div>'+
            '</div>');
        $("#MySignature").before(sign);
    })();
    /*初始化右导航栏*/
    (function(){
        if(!isPostDetail()){
            return;
        }
        /*初始化toc所需要的数据格式*/
        $(".postBody").attr("data-toc","#toc");
        $("#mainContent").before("<div id=\"toc\"></div>");
        var tocHelper = new TocHelper({
            dom: 'div[data-toc]',
            offsetBody: document.querySelector('#home')
        })
        tocHelper.reset();
        function resetTocLoc(){
            var mainContentWidth=$("#mainContent").outerWidth();
            $("#toc").css("left","calc(50% + "+((mainContentWidth/2)+5)+"px)")
        }
        resetTocLoc();
        $(window).resize(resetTocLoc);
        /*初始化toc移动事件*/
        (function(){
            var mainTop=$("#main").offset().top;
            $("#toc").css("cssText",$("#toc").attr("style")+";top:"+mainTop+"px!important;");
            $(window).scroll(function(event){
                var winTop=$(window).scrollTop();
                if(winTop<=mainTop){
                    var winTop=$(window).scrollTop();
                    $("#toc").css("cssText",$("#toc").attr("style")+";top:"+(mainTop-winTop)+"px!important;");
                }else{
                    $("#toc").css("cssText",$("#toc").attr("style")+";top:5px!important;");
                }
            });
        })();
    })();
    /*初始化复制按钮*/
    (function(){
        var codes=$("#cnblogs_post_body pre code");
        codes.append("<span class=\"hideIcon\"> </span>")
        codes.find(".hideIcon").click(function(e){
            //TODO
            console.log($(e.target).closest("code").html())
        })
    })();

    setTimeout(function(){
        $("#loading").fadeOut(500);
    },50);
})