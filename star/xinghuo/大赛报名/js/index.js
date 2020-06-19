console.log("测试测试")
$("#apply>a").click(function () {
    alert('未登录或登录超时，请重新登录');
    window.open("../登录界面/index.html", "_self");
})