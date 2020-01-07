window._static_ ={
    /*首页*/
    indexPage:"https://www.cnblogs.com/cjunn/",
    /*联系*/
    sendPage:"https://msg.cnblogs.com/send/cjunn",
    /*订阅*/
    subPage:"https://www.cnblogs.com/cjunn/rss",
    /*管理*/
    manPage:"https://i.cnblogs.com/",
    /*GitHub*/
    gitHub:"https://github.com/cjunn",
    /*头像*/
    headImg:"https://pic4.zhimg.com/80/v2-9f03007c52c67f4ccf395a3dd685b208_hd.jpg",
    /*版权1*/
    copyright1:"https://creativecommons.org/licenses/by-nc-nd/4.0/",
    /*版权2*/
    copyright2:"https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode",
    /*背景图片*/
    backgroundImg:"",
    poetry:{
        line:'',
        desc:''
    }
};
(function(){
    /*古诗随机*/
    var poetrys=[
        {line:'雨横风狂三月暮，门掩黄昏，无计留春住。',desc:'《蝶恋花》- 宋代 - 欧阳修'},
        {line:'相思相见知何日，此时此夜难为情。',desc:'《三五七言》- 唐代 - 李白'},
        {line:'此情可待成追忆，只是当时已惘然。',desc:'《锦瑟》- 唐代 - 李商隐'},
        {line:'人生若只如初见， 何事秋风悲画扇。',desc:'《木兰词》- 清代 - 纳兰性德'},
        {line:'衣带渐宽终不悔，为伊消得人憔悴。',desc:'《凤栖梧》- 宋代 - 柳永'},
        {line:'曾经沧海难为水，除却巫山不是云。',desc:'《离思五首其四》- 唐代 - 元稹'},
        {line:'身无彩凤双飞翼，心有灵犀一点通。',desc:'《无题·昨夜星辰昨夜风》- 唐代 - 李商隐'},
        {line:'世间安得双全法，不负如来不负卿。',desc:'《不负如来不负卿》- 清朝 - 仓央嘉措'},
        {line:'一笑千场醉，浮生任白头。',desc:'《抛球乐》- 宋代 - 徐铉'},
        {line:'滴不尽相思血泪抛红豆，开不完春柳春花满画楼。',desc:'《红豆词》- 清代 - 曹雪芹'}
    ]
    _static_.poetry=poetrys[Math.floor(Math.random()*poetrys.length)];
    /*背景随机*/
    var backgroundImgs=[
        "https://cdn.jsdelivr.net/gh/cjunn/cnblog_static@2.1/blog-bg/bg1.jpg",
        "https://cdn.jsdelivr.net/gh/cjunn/cnblog_static@2.1/blog-bg/bg2.jpg",
        "https://cdn.jsdelivr.net/gh/cjunn/cnblog_static@2.1/blog-bg/bg3.jpg",
        "https://cdn.jsdelivr.net/gh/cjunn/cnblog_static@2.1/blog-bg/bg4.jpg",
        "https://cdn.jsdelivr.net/gh/cjunn/cnblog_static@2.1/blog-bg/bg5.jpg",
        "https://cdn.jsdelivr.net/gh/cjunn/cnblog_static@2.1/blog-bg/bg6.jpg",
        "https://cdn.jsdelivr.net/gh/cjunn/cnblog_static@2.1/blog-bg/bg7.jpg",
        "https://cdn.jsdelivr.net/gh/cjunn/cnblog_static@2.1/blog-bg/bg8.jpg",
        "https://cdn.jsdelivr.net/gh/cjunn/cnblog_static@2.1/blog-bg/bg9.jpg"
    ];
    _static_.backgroundImg=backgroundImgs[Math.floor(Math.random()*backgroundImgs.length)];
})();