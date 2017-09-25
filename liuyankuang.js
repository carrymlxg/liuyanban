/*
* @Author: 梁飞
* @Date:   2017-09-25 21:12:58
* @Last Modified by:   梁飞
* @Last Modified time: 2017-09-25 23:06:43
*/
window.addEventListener('load',function(){
	let shuru =document.querySelector('.shuru')
	let  bbox =document.querySelector('.bbox')
	let botton =document.querySelector('button')
    let keshuru=document.querySelector('.keshuru')
    let dongtai=document.querySelector('.dongtai')
	 bbox.style.display='none'
	shuru.onclick=function(){
      bbox.style.display='block'
	}
	shuru.onkeyup=function(){
		keshuru.innerText='还可输入'+Number(shuru.maxLength-shuru.value.length)+'字'
	}
	botton.onclick=function(){
		 bbox.style.display='none'
		 dongtai.innerText = shuru.value;
		 shuru.value=null;
	}
})