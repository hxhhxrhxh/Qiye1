/*
* @Author: Administrator
* @Date:   2018-09-09 17:08:21
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-09 21:56:30
*/
window.onload=function(){
	let list=document.querySelectorAll(".main-big");
	let up=document.querySelectorAll(".last .up");
	console.log(up);
	up[0].classList.add("active4");
	list[0].style.display="block";
	for(let i=0;i<up.length;i++){
		up[i].onclick=function(){
			for(let j=0;j<list.length;j++){
			list[j].style.display="none";
		}
			list[i].style.display="block";
		}
		
	}
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