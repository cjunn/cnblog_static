/*
window.blo_custom_ctx=window.blo_custom_ctx||"https://cdn.jsdelivr.net/gh/cjunn/cnblog_static@v";
window.blo_custom_version=window.blo_custom_version||'6.5';
*/
(function(ctx,version){
    /*顺序加载script*/
    function dynamicLoadJs(url, callback) {
        /**/
        var script = document.createElement("script");
        script.type = "text/javascript";
        if (script.readyState) {
            script.onreadystatechange = function() {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            }
        } else {
            script.onload = function() {
                callback();
            }
        }
        script.src = url;
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(script);
    }
    /*动态加载css*/
    function dynamicLoadCss(url) {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.type='text/css';
        link.rel = 'stylesheet';
        link.href = url;
        head.appendChild(link);
    }

    var preUrl=ctx+version+"/";
    var cssPosUrls=[
        preUrl+(version?'blog-custom.min.css':'blog-custom.css'),
        preUrl+'optiscroll.css',
        preUrl+'toc-helper.min.css'
    ];
    var jsPosUrls=[
        preUrl+'toc-helper.min.js',
        preUrl+'jquery.optiscroll.min.js',
        preUrl+(version?'blog-custom-static.min.js':'blog-custom-static.js'),
        preUrl+(version?'blog-custom.min.js':'blog-custom.js'),
        preUrl+(version?'blog-custom-ext.min.js':'blog-custom-ext.js'),
        preUrl+(version?'blog-custom-banner.min.js':'blog-custom-banner.js')
    ];
    /*加载CSS*/
    while(cssPosUrls.length>0){
        dynamicLoadCss(cssPosUrls.shift());
    }
    /*加载JS*/
    var loadJsFun=function(){
        if(jsPosUrls.length>0){
            var jsPosUrl=jsPosUrls.shift();
            dynamicLoadJs(jsPosUrl,loadJsFun);
        }
    }
    loadJsFun();
})(blo_custom_ctx,blo_custom_version);