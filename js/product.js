/*
* @Author: Administrator
* @Date:   2018-09-09 13:27:34
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-09 21:40:23
*/
window.onload=function(){
	//农产品中心选项卡
	let menu=document.querySelectorAll(".menu-list");
	let product=document.querySelectorAll(".product-list");
	
	console.log(menu,product);
	menu[0].classList.add("active1");
	// product[0].style.zIndex=199;
	product[0].style.display="block";
	for(let i=0;i<menu.length;i++){
        menu[i].onclick=function(){
            for(let j=0;j<product.length;j++){
                // product[j].style.zIndex=0;
                product[j].style.display="none";
                menu[j].classList.remove("active1");
            } 
            	product[i].style.display="block";
             // product[i].style.zIndex=200; 
             menu[i].classList.add("active1");      
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
