/*
* @Author: Administrator
* @Date:   2018-09-09 13:27:34
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-09 21:55:17
*/
window.onload=function(){
	// 新闻资讯选项卡
    let page=document.querySelectorAll(".page-big .page-list");
    console.log(page);
	let newsmenu=document.querySelectorAll(".newsmenu");
	let news=document.querySelectorAll(".new-list");
	console.log(news);
	newsmenu[0].classList.add("active2");
	news[0].style.display="block";
         
	for(let i=0;i<newsmenu.length;i++){
        newsmenu[i].onclick=function(){
            for(let j=0;j<news.length;j++){
                news[j].style.display="none";
                newsmenu[j].classList.remove("active2");
            } 
            	news[i].style.display="block"; 
                newsmenu[i].classList.add("active2");      
            }
     }


    page[0].classList.add("active3");
    news[0].style.display="block";       
    for(let i=0;i<page.length;i++){
        page[i].onmouseenter=function(){
            for(let j=0;j<news.length;j++){
                news[j].style.display="none";
                page[j].classList.remove("active3");
            } 
                news[i].style.display="block"; 
                page[i].classList.add("active3");      
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
