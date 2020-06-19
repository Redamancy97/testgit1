console.log("测试测试");
// 动态详情接口
$.ajax({
    url: "http://59.111.92.205:13002/api/innovation/notice/detail",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({
        "id": "19"
    }),
    success: function (res) {
        console.log(res);
        $("#title").html(res.data.title);
        $("#content").html(res.data.content);
        $("#time").html("发布时间：" + res.data.publishTime);
    },
    error: function (err) {
        console.log(err);
    }
})