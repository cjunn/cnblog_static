# 添加页面定制 CSS 代码
```
body{padding:0;margin:0;background:#fafafa;font-family:'PingFang SC','Helvetica Neue','Helvetica','Arial',sans-serif}#loading{background-color:#17607d;height:100%;width:100%;position:fixed;z-index:9999;margin-top:0;top:0}#loading-center{width:100%;height:100%;position:relative}#loading-center-absolute{position:absolute;left:50%;top:50%;height:200px;width:200px;margin-top:-100px;margin-left:-100px;-ms-transform:rotate(-135deg);-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.object{-moz-border-radius:50% 50% 50% 50%;-webkit-border-radius:50% 50% 50% 50%;border-radius:50% 50% 50% 50%;position:absolute;border-top:5px solid #FFF;border-bottom:5px solid transparent;border-left:5px solid #FFF;border-right:5px solid transparent;-webkit-animation:animate 2s infinite;animation:animate 2s infinite}#object_one{left:75px;top:75px;width:50px;height:50px}#object_two{left:65px;top:65px;width:70px;height:70px;-webkit-animation-delay:.2s;animation-delay:.2s}#object_three{left:55px;top:55px;width:90px;height:90px;-webkit-animation-delay:.4s;animation-delay:.4s}#object_four{left:45px;top:45px;width:110px;height:110px;-webkit-animation-delay:.6s;animation-delay:.6s}@-webkit-keyframes animate{50%{-ms-transform:rotate(360deg) scale(0.8);-webkit-transform:rotate(360deg) scale(0.8);transform:rotate(360deg) scale(0.8)}}@keyframes animate{50%{-ms-transform:rotate(360deg) scale(0.8);-webkit-transform:rotate(360deg) scale(0.8);transform:rotate(360deg) scale(0.8)}}
```

# 添加页首 HTML 代码
```
<div id="loading">
<div id="loading-center">
<div id="loading-center-absolute">
<div class="object" id="object_four"></div>
<div class="object" id="object_three"></div>
<div class="object" id="object_two"></div>
<div class="object" id="object_one"></div>
</div>
</div>
</div>
```