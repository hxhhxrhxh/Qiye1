/*
* @Author: Administrator
* @Date:   2018-09-09 15:44:28
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-09 21:45:34
*/
window.onload=function(){
	//农产品中心选项卡
	let menu=document.querySelectorAll(".menu-list");
	let product=document.querySelectorAll(".product-list");
	let productlist=document.querySelectorAll(".product-list1");
	console.log(productlist);
	menu[0].classList.add("active1");
	
	productlist[0].style.display="block";
	// product[0].style.display="none";
	for(let i=0;i<menu.length;i++){
        menu[i].onclick=function(){
            for(let j=0;j<product.length;j++){
              
                product[j].style.display="none";
                productlist[0].style.display="none";
                menu[j].classList.remove("active1");
            } 
            	product[i].style.display="block";
            	productlist[0].style.display="none";
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