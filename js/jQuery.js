/*
* @Author: hxhhxrhxh
* @Date:   2018-09-15 13:55:38
* @Last Modified by:   hxhhxrhxh
* @Last Modified time: 2018-09-16 10:07:37
*/
$(function(){
	let img=$(".banner img");
	let t=setInterval(move,2000);
		let i=0;
	function move(){
		i++;
		if(i==3){
			i=0;
		}
		// console.log(i);
		img.css("opacity","0").eq(i).css("opacity","1");
	}


})