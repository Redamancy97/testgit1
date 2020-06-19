// console.log("测试测试");

// Tab切换
$(function () {
    $("#tab label").click(function () {
        $(".notice").eq($(this).index()).show().siblings().hide();
    })
})

// 显示二维码
$("#qqq").mouseover(function () {
    $("#xianshi").show();
})

$("#qqq").mouseout(function () {
    $("#xianshi").hide();
})

// 新闻动态接口
$.ajax({
    url: "http://59.111.92.205:13002/api/innovation/notice/list",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({
        "type": "1"
    }),
    success: function (res) {
        console.log(res);
        $("#title").html(res.rows[0].title);
        $("#content").html(res.rows[0].describe);
        $("#creatTime").html("时间：" + res.rows[0].publishTime);
        $("#contentImg").attr("src", res.rows[0].coverUrl);
    },
    error: function (err) {
        console.log(err);
    }
})

$("#createActive").click(function () {
    $.ajax({
        url: "http://59.111.92.205:13002/api/innovation/notice/list",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            "type": "2"
        }),
        success: function (res) {
            console.log(res);
            $("#title1").html(res.rows[0].title);
            $("#content1").html(res.rows[0].describe);
            $("#creatTime1").html("时间：" + res.rows[0].publishTime);
            $("#contentImg1").attr("src", res.rows[0].coverUrl);
        },
        error: function (err) {
            console.log(err);
        }
    })
})

$("#honoursList").click(function () {
    $.ajax({
        url: "http://59.111.92.205:13002/api/innovation/notice/list",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            "type": "3"
        }),
        success: function (res) {
            console.log(res);
            $("#title2").html(res.rows[0].title);
            $("#content2").html(res.rows[0].describe);
            $("#creatTime2").html("时间：" + res.rows[0].publishTime);
            $("#contentImg2").attr("src", res.rows[0].coverUrl);
        },
        error: function (err) {
            console.log(err);
        }
    })
})