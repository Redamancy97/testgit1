// 报名须知接口
$.ajax({
    url: "http://59.111.92.205:13002/api/innovation/registration/detail",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({
        mock: "12"
    }),
    success: function (res) {
        console.log(res);
        $("#title").html("大赛报名");
        $("#introduce").html(res.data.applyNotice);
        /* $("#creatTime").html(res.rows[0].publishTime);
        $("#contentImg").attr("src", res.rows[0].coverUrl); */
    },
    error: function (err) {
        console.log(err);
    }
})