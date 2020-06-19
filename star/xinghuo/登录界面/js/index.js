// Tab切换
$(function () {
    $(".registerTop>.registerTopItem").click(function () {
        $(this).addClass("active1").siblings().removeClass("active1");
        $("form>.sure").eq($(this).index()).show().siblings().hide();
    })
})

// 获取验证码倒计时
$("#btn").click(function () {
    sendTime($("#btn"));
})

var time = 60;

function sendTime(obj) {
    if (time == 0) {
        obj.prop('disabled', false);
        obj.text('获取验证码');
        obj.css('color', '#fff');
        obj.css('background', '#2d8cf0');
        time = 60;

        return;
    } else {
        obj.prop('disabled', true);
        time--;
        obj.css('color', 'gray');
        obj.css('background', '#ccc');
        obj.text(time + 's后重试');

    }
    setTimeout(function () {
        sendTime(obj)
    }, 1000);
}

// 信息
$("#loginID").click(function () {
    var userName = $("#username").val();
    var passWord = $("#password").val();
    console.log(userName);
    console.log(passWord);
    $.ajax({
        url: "http://59.111.92.205:13002/api/login",
        type: "POST",
        data: {
            'username': userName,
            'password': passWord,
            'rememberMe': true
        },
        success: function (res) {
            console.log(res);
            if (res.code == 0) {
                window.open("../新闻动态/index.html","_self");
                localStorage.setItem("name", JSON.stringify(res.userInf));
                localStorage.setItem("logining", true);
            } else{
                alert("请输入正确的账号和密码");
            }
        },
        error: function (error) {
            console.log(error)
        }
    })
})