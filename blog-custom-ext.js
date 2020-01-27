$(function(){
    /*Js埋点收集访问日志*/
    (function(){
        var data = {
            isInit:false,
            isNotUpload:false,
            title:document.title,
            user:'',
            username:'',
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
                        var username=profile.find("a:eq(0)").html().trim();
                        var age=profile.find("a:eq(1)").html().trim();
                        var follow=profile.find("a:eq(2)").html().trim();
                        var focus=profile.find("a:eq(3)").html().trim();
                        data['username']=username;
                        data['age']=age;
                        data['follow']=follow;
                        data['focus']=focus;
                    }
                    data.isInit=true;
                }
            })
        }
        function loadUserDetail(prepareCallBack){
            var userNameUrl="//passport.cnblogs.com/user/LoginInfo";
            $.ajax({
                url: userNameUrl,
                dataType: "jsonp",
                success: function(str) {
                    var matchUser=str.match(/cnblogs.com\/u\/(.*?)\//);
                    if(matchUser && matchUser[1]){
                        var user=(matchUser[1]).trim();
                        if(user==_static_.logAuthor){
                            data.isNotUpload=true;
                        }else{
                            data['user']=user;
                            loadUserInfo(user);
                        }
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
            if(!data.isNotUpload){
                if(data.isInit){
                    var imgHtml='<img src="'+_static_.logService+'?title='+data.title+'&user='+data.user+'&username='+data.username+'&age='+data.age+'&follow='+data.follow+'&focus='+data.focus+'"></img>';
                     $("body").append(imgHtml);
                }else{
                    setTimeout(uploadBlogLog,100);
                }
            }
        }
        uploadBlogLog();
    })();
});