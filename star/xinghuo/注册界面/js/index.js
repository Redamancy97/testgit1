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
});
$("#btn1").click(function () {
    sendTime($("#btn1"));
})
$("#btn2").click(function () {
    sendTime($("#btn2"));
})

// 验证码倒计时函数
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


// 注册按钮信息存储
$("#register").click(function () {
    var loginName = $("#loginName").val();
    var userName = $("#userName").val();
    var phonenumber = $("#phonenumber").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var code = $("#code").val();
    var idNumber = $("#idNumber").val();
    var school = $("#school").val();
    var profession = $("#profession").val();
    var grade = $("#grade").val();
    $.ajax({
        url: "http://59.111.92.205:13002/api/register",
        type: "post",
        contentType: "application/json",
        data: JSON.stringify({
            loginName: loginName,
            userName: userName,
            email: email,
            phonenumber: phonenumber,
            password: password,
            code: code,
            idNumber: idNumber,
            school: school,
            profession: profession,
            grade: grade,
        }),
        success: function (data) {
            console.log(data)
        }
    })
})

// 获取验证码
$("#btn").click(function () {
    $.ajax({
        url: "http://59.111.92.205:13002/api/sendCode?mobile=" + "15530190394",
        type: "get",
        contentType: "application/json",
        success: function (data) {
            console.log(data);
        }
    })
})

// 正则表达式
// 用户名
var regName = /^[\u4E00-\u9FA5A-Za-z0-9]{4,20}$/;
$("#loginName").blur(function () {
    if (!regName.test($("#loginName").val())) {
        alert("名字输入不符合要求");
    }
});

// 密码
var regpwd = /^.{4,20}$/;
$("#password").blur(function () {
    if (!regpwd.test($("#password").val())) {
        alert("密码输入不符合要求");
    }
});

// 两次密码一致
$(function () {
    $("#password1").blur(function () {
        if ($("#password1").val() != $("#password").val()) {
            alert("两次输入的密码不一致");
        }
    })
})

// 输入真实姓名
var regUserName = /^[\u4e00-\u9fa5]{2,4}$/;
$("#userName").blur(function () {
    if (!regUserName.test($("#userName").val())) {
        alert("真实姓名输入不符合要求");
    }
});

// 输入身份证号
var regIdNumber = /^\d{17}(\d|x|X)$/;
$("#idNumber").blur(function () {
    if (!regIdNumber.test($("#idNumber").val())) {
        alert("身份证号码输入不符合要求");
    }
});

// 输入邮箱
var regEmail = /^[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}$/;
$("#email").blur(function () {
    console.log("111111");
    if (!regEmail.test($("#email").val())) {
        alert("邮箱输入不符合要求");
    }
});

// 输入学校
var regSchool = /[\u4e00-\u9fa5]/;
$("#school").blur(function () {
    console.log("111111");
    if (!regSchool.test($("#school").val())) {
        alert("学校输入不符合要求");
    }
});

// 输入专业
var regProfession = /[\u4e00-\u9fa5]/;
$("#profession").blur(function () {
    console.log("111111");
    if (!regProfession.test($("#profession").val())) {
        alert("专业输入不符合要求");
    }
});

// 输入年级
var regGrade = /[\u4e00-\u9fa5]/;
$("#grade").blur(function () {
    console.log("111111");
    if (!regGrade.test($("#grade").val())) {
        alert("年级输入不符合要求");
    }
});

// 输入手机号
var regPhonenumber = /^1[3,5,7,8]\d{9}$/;
$("#phonenumber").blur(function () {
    console.log("111111");
    if (!regPhonenumber.test($("#phonenumber").val())) {
        alert("手机号输入不符合要求");
    }
});

// 输入验证码
var regCode = /^\d{6}$/;
$("#code").blur(function () {
    console.log("111111");
    if (!regCode.test($("#code").val())) {
        alert("验证码输入不符合要求");
    }
});