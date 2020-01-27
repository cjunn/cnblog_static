window.blo_custom_ctx=window.blo_custom_ctx||"https://cdn.jsdelivr.net/gh/cjunn/cnblog_static@v";
window.blo_custom_version=window.blo_custom_version||'5.0';
(function(ctx,version){
    var preUrl=ctx+version+"/";
    var TempHtml="";
    TempHtml+='<link type="text/css" rel="stylesheet" href='+preUrl+(version?'blog-custom.min.css':'blog-custom.css')+'>';
    TempHtml+='<link rel="stylesheet" href='+preUrl+'optiscroll.css'+'>';
    TempHtml+='<link rel="stylesheet" href='+preUrl+'toc-helper.min.css'+'>';
    TempHtml+='<script src='+preUrl+(version?'blog-custom-static.min.js':'blog-custom-static.js')+'></script>';
    TempHtml+='<script src='+preUrl+'toc-helper.min.js'+'></script>';
    TempHtml+='<script src='+preUrl+'jquery.optiscroll.min.js'+'></script>';
    TempHtml+='<script src='+preUrl+(version?'blog-custom.min.js':'blog-custom.js')+'></script>';
    $("#blog-news").append(TempHtml);
})(blo_custom_ctx,blo_custom_version);