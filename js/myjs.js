$(document).ready(function () {

    var touch=0;
    $(".index>.container>img").show();
    $(".index>.container .text").show();
    $(".swiper-container1").on("touchstart",function (e) {
        if(touch==0){
            $("#music").attr("src", "http://material.tigerhuclub.com/music/together.mp3");
            $("#music").trigger("load").trigger("play");
            touch++;
        }
        else{}

    })
})
var i=0;
var musiclist=[
    "material.tigerhuclub.com/music/胡彦斌 - 第一次 [低质量].mp3",
    "material.tigerhuclub.com/music/胡彦斌 - 罗马假期 [低质量].mp3",
    "material.tigerhuclub.com/music/胡彦斌 - 一年前 [低质量].mp3",
    "material.tigerhuclub.com/music/胡彦斌 - 爱不得 恨不得 舍不得 [低质量].mp3"
];
var spring=["material.tigerhuclub.com/music/胡彦斌 - 第一次 [低质量].mp3",
    "material.tigerhuclub.com/music/胡彦斌 - Lisa I Love You [低质量].mp3",
    "material.tigerhuclub.com/music/钟欣潼 - 在一起 [低质量].mp3"];
var summer=["material.tigerhuclub.com/music/胡彦斌 - 罗马假期 [低质量].mp3",
    "material.tigerhuclub.com/music/胡彦斌 - Yes I Do [低质量].mp3",
    "material.tigerhuclub.com/music/胡彦斌 - Waiting For You [低质量].mp3",
    "material.tigerhuclub.com/music/胡彦斌 - 你这么晚了还没睡 [低质量].mp3",
    "material.tigerhuclub.com/music/胡彦斌 - 我以为 [低质量].mp3"];
var autumn=[
    "material.tigerhuclub.com/music/胡彦斌 - 一年前 [低质量].mp3",
    "material.tigerhuclub.com/music/胡彦斌 - 告诉我 [低质量].mp3",
    "material.tigerhuclub.com/music/胡彦斌 - 不是不想 [低质量].mp3",
    "material.tigerhuclub.com/music/胡彦斌 - 天若有情 [低质量].mp3",
    "material.tigerhuclub.com/music/胡彦斌 - Give me a chance [低质量].mp3",
    "material.tigerhuclub.com/music/胡彦斌 - 爱情总是猜得到开头猜不到结局 [低质量].mp3"];
var winter=[
    "material.tigerhuclub.com/music/胡彦斌 - 爱不得 恨不得 舍不得 [低质量].mp3",
    "material.tigerhuclub.com/music/胡彦斌 - 你要的全拿走 [低质量].mp3",
    "material.tigerhuclub.com/music/胡彦斌 - 高手 [低质量].mp3",
    "material.tigerhuclub.com/music/胡彦斌 - 婚礼进行曲 [低质量].mp3", "material.tigerhuclub.com/music/胡彦斌 - 有过你 [低质量].mp3"];
var mySwiper = new Swiper ('.swiper-container1', {

    direction: 'vertical',

    on:{
        slideChangeTransitionStart:function () {
            $(".swiper-slide-active>.container img").show();
            $(".swiper-slide-active>.container>.title").show();
            $(".swiper-slide-active>.container .text").show();
        },
        slideChangeTransitionEnd: function(){
            var music=document.getElementById("music");
            console.log(this.activeIndex)
            if(this.activeIndex==2&&i==0){
                var html='<div class="music active"></div>'
                $("body").append(html);
                $(".music").click(function () {
                    if($(".music").hasClass("active")){
                        $(".music").removeClass("active");
                        $("#music")[0].pause();
                    }else{
                        $(".music").addClass("active");
                        $("#music")[0].play();
                    }

                });
                i++;
            }
            if(this.activeIndex!=0&&this.activeIndex!=1&&this.activeIndex!=6){
                music.attributes.src.value="http://"+encodeURI(musiclist[this.activeIndex-2]);
            }

            $("#music").attr("src", music.attributes.src.value);
            if($(".music").hasClass("active")){
                $("#music").trigger("load").trigger("play");
            }

            $(".swiper-slide-next>.container img").hide();
            $(".swiper-slide-prev>.container img").hide();
            $(".swiper-slide-next>.container>.title").hide();
            $(".swiper-slide-prev>.container>.title").hide();

            $(".swiper-slide-next>.container .text").hide();
            $(".swiper-slide-prev>.container .text").hide();
            //activeIndex切换结束时，告诉我现在是第几个slide

        },
    },


});
var mySwiper1 = new Swiper ('.swiper-container-spring', {
    pagination: {
        el: '.swiper-pagination',
    },
    on:{
        slideChangeTransitionStart:function () {

        },
        slideChangeTransitionEnd: function(){
            var music=document.getElementById("music");
            music.attributes.src.value="http://"+encodeURI(spring[this.activeIndex]);
            musiclist[0]=spring[this.activeIndex];

            $("#music").attr("src", music.attributes.src.value);
            if($(".music").hasClass("active")){
                $("#music").trigger("load").trigger("play");
            }
        },
    },


});
var mySwiper2 = new Swiper ('.swiper-container-summer', {
    pagination: {
        el: '.swiper-pagination',
    },
    on:{
        slideChangeTransitionStart:function () {

        },
        slideChangeTransitionEnd: function(){
            var music=document.getElementById("music");
            console.log(this.activeIndex)
            music.attributes.src.value="http://"+encodeURI(summer[this.activeIndex]);
            musiclist[1]=summer[this.activeIndex];
            $("#music").attr("src", music.attributes.src.value);
            if($(".music").hasClass("active")){
                $("#music").trigger("load").trigger("play");
            }
        },
    },


});
var mySwiper3 = new Swiper ('.swiper-container-autumn', {
    pagination: {
        el: '.swiper-pagination',
    },
    on:{
        slideChangeTransitionStart:function () {

        },
        slideChangeTransitionEnd: function(){
            var music=document.getElementById("music");
            console.log(this.activeIndex)
            music.attributes.src.value="http://"+encodeURI(autumn[this.activeIndex]);
            musiclist[2]=autumn[this.activeIndex];
            $("#music").attr("src", music.attributes.src.value);
            if($(".music").hasClass("active")){
                $("#music").trigger("load").trigger("play");
            }
        },
    },


});
var mySwiper4 = new Swiper ('.swiper-container-winter', {
    pagination: {
        el: '.swiper-pagination',
    },
    on:{
        slideChangeTransitionStart:function () {

        },
        slideChangeTransitionEnd: function(){
            var music=document.getElementById("music");
            console.log(this.activeIndex)
            music.attributes.src.value="http://"+encodeURI(winter[this.activeIndex]);
            musiclist[3]=winter[this.activeIndex];
            $("#music").attr("src", music.attributes.src.value);
            if($(".music").hasClass("active")){
                $("#music").trigger("load").trigger("play");
            }
        },
    },


});
