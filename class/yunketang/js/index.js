// console.log("链接链接");

// 课程分类接口
$.ajax({
    url: "http://59.111.104.104:8086/weChat/applet/subject/list",
    type: "post",
    contentType: "application/json",
    data: JSON.stringify({
        enable: "1",
    }),
    success: function (res) {
        console.log(res);
        var box = document.getElementById("box1");
        for (var i = 0; i < res.rows.length; i++) {
            var liObj = document.createElement("li");
            box.appendChild(liObj);
            var aObj = document.createElement("a");
            liObj.appendChild(aObj);
            $($("#box1 >  li >a")[i]).text(res.rows[i].subjectTitle);
            var name = res.rows[i].subjectId;
            console.log(name);
            $($("#box1 > li>a")[i]).attr("name", name);
            console.log($($("#box1 > li>a")[i]).attr("name"));
            var name = $($("#box1 > li>a")[i]).attr("name");
            console.log(name);
        }
        $("#box1 > li>a").click(function () {
            var idValue1 = $(this).attr("name");
            console.log(idValue1);
            localStorage.setItem("subjectId", idValue1);
            location.href = "../html/搜索.html";
        });
    },
    error: function (err) {
        console.log(err);
    },
});

// 轮播图
$.ajax({
    url: "http://59.111.104.104:8086/weChat/applet/course/banner/list",
    type: "get",
    data: {
        number: "5",
    },
    success: function (res) {
        console.log(res);
        /* $(".item1>img").attr("src", res.data[0].imgUrl);
        $(".item2>img").attr("src", res.data[1].imgUrl);
        $(".item3>img").attr("src", res.data[2].imgUrl);
        $(".item4>img").attr("src", res.data[3].imgUrl);
        $(".item5>img").attr("src", res.data[4].imgUrl); */
        $(".item1").css({
            backgroundImage: "url(" + res.data[1].imgUrlPc + ")",
        });
        $(".item2").css({
            backgroundImage: "url(" + res.data[1].imgUrlPc + ")",
        });
        $(".item3").css({
            backgroundImage: "url(" + res.data[2].imgUrlPc + ")",
        });
        $(".item4").css({
            backgroundImage: "url(" + res.data[3].imgUrlPc + ")",
        });
        $(".item5").css({
            backgroundImage: "url(" + res.data[4].imgUrlPc + ")",
        });
    },
    error: function (err) {
        console.log(err);
    },
});

// 直播课程tab切换
$(".lesson-right>ul>li").mouseover(function () {
    $(this).addClass("select1").siblings().removeClass("select1");
    $(".inner").eq($(this).index()).show().siblings().hide();
});

// 免费课程
$.ajax({
    url: "http://59.111.104.104:8086/weChat/applet/course/list/type",
    type: "post",
    contentType: "application/x-www-form-urlencoded",
    data: {
        type: "free",
        pageNum: "1",
        pageSize: "10",
    },
    success: function (res) {
        console.log(res);
        for (var i = 0; i < 10; i++) {
            $($(".courseTitle")[i]).html(res.rows[i].courseTitle);
            $($(".subSectionNum")[i]).text(res.rows[i].subSectionNum);
            $($(".learningNum")[i]).text(res.rows[i].learningNum);
            $($(".bannerFileUrlPc")[i]).attr("src", res.rows[i].coverFileUrl);
            $($(".courseId")[i]).attr("name", res.rows[i].courseId);
        }
    },
    error: function (err) {
        console.log(err);
    },
});

// 精品课程
$.ajax({
    url: "http://59.111.104.104:8086/weChat/applet/course/list/type",
    type: "post",
    contentType: "application/x-www-form-urlencoded",
    data: {
        type: "boutique",
        pageNum: "1",
        pageSize: "5",
    },
    success: function (res) {
        console.log(res);
        for (var i = 10; i < 15; i++) {
            $($(".courseTitle")[i]).html(res.rows[i - 10].courseTitle);
            $($(".subSectionNum")[i]).text(res.rows[i - 10].subSectionNum);
            $($(".learningNum")[i]).text(res.rows[i - 10].learningNum);
            $($(".bannerFileUrlPc")[i]).attr("src", res.rows[i - 10].coverFileUrl);
            $($(".courseId")[i]).attr("name", res.rows[i - 10].courseId);
        }
    },
    error: function (err) {
        console.log(err);
    },
});

// 限时折扣
$.ajax({
    url: "http://59.111.104.104:8086/weChat/applet/course/list/type",
    type: "post",
    contentType: "application/x-www-form-urlencoded",
    data: {
        type: "discount",
        pageNum: "1",
        pageSize: "5",
    },
    success: function (res) {
        console.log(res);
        for (var i = 15; i < 20; i++) {
            $($(".courseTitle")[i]).html(res.rows[i - 15].courseTitle);
            $($(".subSectionNum")[i]).text(res.rows[i - 15].subSectionNum);
            $($(".learningNum")[i]).text(res.rows[i - 15].learningNum);
            $($(".bannerFileUrlPc")[i]).attr("src", res.rows[i - 15].coverFileUrl);
            $($(".courseId")[i]).attr("name", res.rows[i - 15].courseId);
        }
    },
    error: function (err) {
        console.log(err);
    },
});

// 底部
$.ajax({
    url: "http://59.111.104.104:8086/system/dict/data/list/open",
    type: "post",
    contentType: "application/x-www-form-urlencoded",
    data: {
        dictType: "blogroll",
        pageNum: "1",
        pageSize: "10",
        orderByColumn: "dictSort",
        isAsc: "asc",
    },
    success: function (res) {
        // console.log(res);
        $("#dictLabel1").text(res.rows[0].dictLabel);
        $("#dictLabel1").attr("href", res.rows[0].dictValue);
        $("#dictLabel2").text(res.rows[1].dictLabel);
        $("#dictLabel2").attr("href", res.rows[1].dictValue);
        $("#dictLabel3").text(res.rows[2].dictLabel);
        $("#dictLabel3").attr("href", res.rows[2].dictValue);
        $("#dictLabel4").text(res.rows[3].dictLabel);
        $("#dictLabel4").attr("href", res.rows[3].dictValue);
        $("#dictLabel5").text(res.rows[4].dictLabel);
        $("#dictLabel5").attr("href", res.rows[4].dictValue);
    },
    error: function (err) {
        console.log(err);
    },
});