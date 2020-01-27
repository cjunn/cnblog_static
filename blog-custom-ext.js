$(function(){
    /*Js埋点收集访问日志*/
    var logservice="http://106.13.52.212/blog-custom/log.gif";
    (function(){
        var data = {
            isInit:false,
            title:document.title,
            user:'',
            age:'',
            follow:'',
            focus:'',
        };
        function loadUserInfo(user){
            var userInfoUrl="https://www.cnblogs.com/{username}/ajax/news.aspx".replace("{username}",user);
            $.ajax({
                url: userInfoUrl,
                dataType: "jsonp",
                complete: function(str) {
                    var profile=$(str.responseText).find("#profile_block");
                    if(profile.size()>0){
                        var user=profile.find("a:eq(0)").html().trim();
                        var age=profile.find("a:eq(1)").html().trim();
                        var follow=profile.find("a:eq(2)").html().trim();
                        var focus=profile.find("a:eq(3)").html().trim();
                        data['user']=user;
                        data['age']=age;
                        data['follow']=follow;
                        data['focus']=focus;
                        data.isInit=true;
                    }
                }
            })
        }
        function loadUserDetail(prepareCallBack){
            var userNameUrl="//passport.cnblogs.com/user/LoginInfo";
            $.ajax({
                url: userNameUrl,
                dataType: "jsonp",
                success: function(str) {
                    var user=(str.match(/(?<=>)(.*?)(?=<\/a>)/)[0]).trim();
                    if(user!="登录"){
                        loadUserInfo(user);
                    }else{
                        data.isInit=true;
                    }
                }
            })
        }
        /*启动读取用户详情*/
        loadUserDetail();
        /*定时检测是否读取完毕*/
        function uploadBlogLog(){
            if(data.isInit){
                var imgHtml='<img src="'+_static_.logService+'?title='+data.title+'&user='+data.user+'&age='+data.age+'&follow='+data.follow+'&focus='+data.focus+'"></img>';
                 $("body").append(imgHtml);
            }else{
                setTimeout(uploadBlogLog,100);
            }
        }
        uploadBlogLog();
    })();
});