function do_attr() {
    $("#div-1>p").attr({style: "border:1px solid #f00;", alt: "设置style属性"});
    var oneTg = $("#div-1>p#one").attr("title");
    $("#div-1>p#one").html(oneTg + "的title属性被取得，并显示。");
    $("#div-1>p#two").attr("title", "修改two的style的属性。");

    $("#div-1>p#three").attr("title", function () {
        var title = this.id;
        return title;
    }).each(function () {
        $(this).html("title属性与下一个id属性取值" + this.title);
    });
}
//练习2
function do_removeAtter() {
    $("#div_2 p#one").removeAttr("style");
};
//练习3
function do_addClass() {
    $("#div_2 p#one1").addClass("redbox");
};
//练习4
function do_removeclass() {
    $("#div_2 p#one").removeClass("style");
};


//练习5
$(function () {
    $("#div_5 p#one_1,#div_5 p#two_1").click(function () {
        $(this).toggleClass("redbox");
    });
    var cnt = 1;
    $("#div_5 p#three_1").click(function () {
        $(this).toggleClass("redbox", cnt++ % 3 == 0);
        //单击次数
    })
});
//练习6
function do_text() {
    var val = $("#div_7 p#one_2").text();
    $("#div_7 p#two_2").text(val);
};
//练习7
function do_val() {
    var val = $("#div-8:text#one").val();
    $("#div-8:text#two").val(val);
}
//css获取元素的style属性值
function do_css() {
    $("#div-8 p").each(function () {
        $(this).append("style属性中设置的颜色是[" + $(this).css("color") + "]。");
    });
}
//设置/获取元素的style属性值
function do_css2() {
    $("#div-2 p#one1").css("color", "red");
    $("#div-2 p#two2").css({"color": "blue", "backgroundColor": "green"});

}
//显示元素的位置
function do_offset() {
    var ofset = $("#div_3 p#one_3").offset();
    $("#div_3 p#two_3").html("top = " + ofset.top + "px<br>left =" + ofset.left + "px");
};
//获取元素的高度
function do_height() {
    $("#div_4 p#one_4").append("高度=" + $("div#div_4").height() + "px");
    $("#div_4 p#two_4").append("高度=" + $(document).height() + "px");
    $("#div_4 p#three_4").append("高度=" + $(window).height() + "px");
}

//取元素的宽度
function do_width() {
    $("#div_15 p#one_5").append("宽度=" + $("div#div_15").width() + "px");
    $("#div_15 p#two_5").append("宽度=" + $(document).width() + "px");
    $("#div_5 p#three_5").append("宽度=" + $(window).width() + "px");
}

//1-09练习
$(document).ready(function () {
    //获取焦点时文本框变色
    $("input#username,input#pass").focus(function () {
        $(this).css("background", "red");

    });
    $("input#username,input#pass").blur(function () {
        $(this).css("background-color", "#fff");
    });
//    点击登录时的操作,没输入会弹出提示框
    $("#focus_submit").click(function () {
        if ($("input#username").val() == '') {
            alert("请输入账号");
            $("input#username").focus();
        }
    })
});

//练习bind事件 点击时将图片隐藏
$(document).ready(function () {
    $("#ctrl_img").bind("click", function () {
        $("p#img").slideToggle();
        console.log(2);
    });
});

//点击时，切换图片(最好每张图一样大，才不会有跳动)
$(document).ready(function () {
    $("#img-click").click(function () {
        var imghtml = '<img src="images/12.jpg">';
        $(this).html(imghtml);
    })
});
////点击时切换图片 轮流/切换响应元素的click事件
//$(document).ready(function () {
//    $("#img-toggle").toggle(function () {
//            $("#img-toggle").attr("src", "images/01.jpg");
//        },
//        function () {
//            $("#img-toggle").attr("src", "images/02.jpg");
//        },
//        function () {
//            $("#img-toggle").attr("src", "images/03.jpg");
//        })
//});
//

//元素的mouseover/mouseout事件
$(document).ready(function () {
    $("#mouse-img-one").mouseover(function () {
        $("#mouse-img-one").attr("src", "../images/02.jpg");
    });
    $("#mouse-img-two").mouseout(function () {
        $("#mouse-img-two").attr("src", "../images/03.jpg");
    });
});
//hover 鼠标
$("#img-hover").hover(function () {
    $("#img-hover").attr("src", "../images/04.jpg");
}, function () {
    $("#img-hover").attr("src", "../images/05.jpg");
});
//显示/隐藏图片
$(document).ready(function () {
    $("#hide").click(function(){
        $("#show-hide").hide();
    });
    $("#show").click(function () {
        $("#show-hide").show();
    })
});
//切换元素的显示/隐藏状态
$(document).ready(function () {
    $("button#btu_toggle").click(function(){
        $(".p_21").toggle();
    });
});
//向上/向下滑动元素
$(document).ready(function (){
    $("#but_slideup").click(function(){
        $("#slidepanle").slideUp("slow");
    });
    $("#but_slidedown").click(function(){
        $("#slidepanle").slideDown("slow");
    });
});
//交替显示元素
$("#but_slidetoggle").click(function () {
    $("#slidetogglepanle").slideToggle("slow")

});
//控制元素的渐入/渐出效果
$("#but_fadein").click(function(){
    $("#img_one").fadeIn();
    $("#img_two").fadeIn("slow");
    $("#img_three").fadeIn(3000);
});
$("#but_fadeout").click(function(){
    $("#img_one").fadeOut();
    $("#img_two").fadeOut("slow");
    $("#img_three").fadeOut(3000);
});
$("#but_fadetoggle").click(function () {
    $("#img_one").fadeToggle();
    $("#img_two").fadeToggle("slow");
    $("#img_three").fadeToggle(3000);
});
//自定义动画
$(document).ready(function () {
    $("button#but_animate").click(function(){
        $("#img_animate").animate({
            left:'250px',
            opacity:'0.5',
            height:'+=85px',
            width:'+=160px'
        })
            .animate({
                left:'250px'
            },2000,function(){
            $(this).fadeOut();
        });
    });

});