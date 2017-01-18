//draggable() 用拖动方式移动元素
$(document).ready(function(){
    //draggable() 用拖动方式移动元素
    $("#draggable1").draggable();
    //draggable() 用拖动方式移动元素,将东西拖拽到框里面
    $("#draggable li").draggable({
        connectToSortable:"#sortable",cursorAt:{top:2,left:2},
        helper:'clone',
        revert:'invalid'
    });
    $('#sortable').sortable({
        items:'li:gt(0)',
        revert:true,
        out:function(){
            $('#result').empty();
            $(this).children().each(function(index){
                if(index == 0)return;
                $('#result').append('第'+index+'号的'+$(this).text()+'。');
            })
        }
    })
});
//droppable()可放置元素拖动其他元素
$(document).ready(function(){
    $( "#draggable_1 li" ).draggable({
        connectToSortable:"#droppable",
        cursorAt:{top:2,left:2},
        helper:'clone',
        revert:'invalid'
    });

    $('#droppable').droppable({
        drop:function(event,ui){
            $(ui.draggable).fadeIn(function(){
                    $('#result_1').append(this);
                })
                .fadeOut('slow',function(){
                    $(this).remove();
                }) ;
        }
    });
    $('#draggable_1 li,#droppable,#result_1 li').disableSelection();
});

//3.resizable()调整元素大小
$(function () {
    $(".resizable").resizable({
        aspectRatio: true,
        start: function (event, ui) {
            if (!$(this).resizable('option', 'maxHeight')) {
                $(this).resizable('option', 'maxHeight', ui.originalSize.height * 2);
                $(this).resizable('option', 'maxWidth', ui.originalSize.width * 2);
                $(this).resizable('option', 'maxHeight', ui.originalSize.height * 2);
                $(this).resizable('option', 'maxWidth', ui.originalSize.width * 2);
            }
        }
    });
});

//选择元素
$(document).ready(function () {
$("ul#ul-select").selectable();
});

//排序元素
$(document).ready(function () {
    $("ul#ul-sortable").sortable();
});

//折叠显示
$(document).ready(function () {
    $("#accordion").accordion({
        active:false,
        collapsible:true,
        autoHeight:false
    });
});

//对话框
$(document).ready(function(){
    $("#dialog").dialog({autoOpen:false});
    $("#opener").click(function(){
        $("#dialog").dialog("open");
    });
});


//进度条
$("#progressbar").progressbar({
    value:false,
});
$(function () {
    var intervalCode = setInterval((function () {
        var counter = 0;
        return function (){
            counter>100 ? clearInterval(intervalCode):$("#progressbar").progressbar('value',++counter);
        }
    })(),1000);
});

//拖动滑块时，文字变大
$(document).ready(function(){
    $('#slider').slider({
    max:30,
    min:parseFloat($('#slider_content').css('fontSize')),
    slide:function(event,ui){
    $("#slider_content").css("fontSize",ui.value)
    }
});
});
//显示标签菜单
$(function(){
    $("#tabs").tabs();
});

// 提示搜索的内容
$(document).ready(function(){
    //定义搜索的数组
    var tags = ["eclipse","node plus","hbuilder","webstore"];
    $("#autocomplete").autocomplete({
        source:function(request,response){
            var matcher = new RegExp("^"+ $.ui.autocomplete.escapeRegex(request.term),"i");
            response($.grep(tags, function (item) {
                return matcher.test(item);
            }));
        }
    })
});