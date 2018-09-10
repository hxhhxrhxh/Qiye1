/*
* @Author: Administrator
* @Date:   2018-09-09 20:44:28
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-09 20:58:44
*/
window.onload=function(){
	let back=document.querySelector(".back");
	console.log(back);
	window.onscroll=function(){
		let h=document.body.scrllTop||document.documentElement.scrollTop;
		back.onclick=function(){
			animate(document.body,{scrollTop:0},600);
			animate(document.documentElement,{scrollTop:0},600);
		}
	}
}



