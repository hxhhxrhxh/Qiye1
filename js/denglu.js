/*
* @Author: hxhhxrhxh
* @Date:   2018-09-16 10:07:56
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-16 13:41:18
*/
// $(function(){
// 	$(".button").click(function(){
// 		if($(".username").text("侯学辉")){
// 			alert(1);
// 		}
// 	})
// })
window.onload=function() {
	let user=document.getElementsByClassName("username")[0];
	let pass=document.querySelector(".password");
	let btn=document.querySelector(".button");
	console.log(user,pass,btn);
	btn.onclick=function(){
	if(user.value=="侯学辉" && pass.value=="111111" ){	
		
				
           setTimeout(function () {
                alert("登录成功");
            },400);
            setTimeout(function () {
                window.open("demo.html");
            },400);
		}else{
			alert("请填写正确信息");
			window.open("login.html");
		}

	}
}