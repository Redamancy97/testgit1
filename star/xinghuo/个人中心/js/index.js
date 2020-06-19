// Tab切换
$(function () {
    $(".ivu-menu>li").click(function () {
        $(this).addClass("active2").siblings().removeClass("active2");
        $(".sure .ivu-layout-content").eq($(this).index()).show().siblings().hide();
    })
})

// $.ajax({
//     url: "http://59.111.92.205:13002/api/login",
//     type: "POST",
//     success: function (res) {
//         console.log(res);
// console.log(localStorage.name);
var userInf = JSON.parse(localStorage.getItem("name"));
console.log(userInf);
$("#loginName").val(userInf.loginName);
$("#phonenumber").val(userInf.phonenumber);
$("#userName").val(userInf.userName);
$("#idNumber").val(userInf.idNumber);
$("#email").val(userInf.email);
$("#school").val(userInf.school);
$("#profession").val(userInf.profession);
$("#grade").val(userInf.grade);
//     }
// })

$.ajax({
    url: "http://59.111.92.205:13002/api/innovation/footerInfo/list",
    type: "post",
    success: function (res) {
        console.log(res);
        $("#email").html(res.rows[0].email);
        $("#technicalSupport").html(res.rows[0].technicalSupport);
        $("#copyright").html(res.rows[0].copyright);
        $("#websiteId").html(res.rows[0].websiteId);
        $("#internetContentProvider").html(res.rows[0].internetContentProvider);
        $("#linkName0").html(res.rows[0].friendLinkList[0].linkName);
        $("#linkName0").attr("href", res.rows[0].friendLinkList[0].linkUrl);
        $("#linkName1").html(res.rows[0].friendLinkList[1].linkName);
        $("#linkName1").attr("href", res.rows[0].friendLinkList[1].linkUrl);
        $("#linkName2").html(res.rows[0].friendLinkList[2].linkName);
        $("#linkName2").attr("href", res.rows[0].friendLinkList[2].linkUrl);
        $("#linkName3").html(res.rows[0].friendLinkList[3].linkName);
        $("#linkName3").attr("href", res.rows[0].friendLinkList[3].linkUrl);
        $("#linkName4").html(res.rows[0].friendLinkList[4].linkName);
        $("#linkName4").attr("href", res.rows[0].friendLinkList[4].linkUrl);
        $("#linkName5").html(res.rows[0].friendLinkList[5].linkName);
        $("#linkName5").attr("href", res.rows[0].friendLinkList[5].linkUrl);
        // $("#qrCodeFile").attr("src", res.rows[0].qrCodeFile);
    }
})

// 退出登录
$(".btn2").click(function () {
    window.open("../登录界面/index.html", "_self");
})