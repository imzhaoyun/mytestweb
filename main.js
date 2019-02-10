[exp,lv]=[0,0];
setButton=function(value,id,div,funC){
	if(!document.getElementById(id)){
	var sba=document.createElement("button");
	    sba.innerHTML=value;
	    sba.setAttribute("id",id);
	}
	sba.addEventListener('click',eval(funC));
	    if(div==undefined) document.body.appendChild(sba);
	    else document.getElementById(div).appendChild(sba);
}
setDiv=function(id,div){
	var sd=document.createElement("div");
	    sd.setAttribute("id",id);
	    //sd.setAttribute("draggable",false);
	    if(div==undefined) document.body.appendChild(sd);
	    else document.getElementById(div).appendChild(sd);

}
removeValue=function(id,div){
    var ID=document.getElementById(id);
	if(div==undefined) document.body.removeChild(ID);
	else document.getElementById(div).removeChild(ID);

}
setBgm=function(name){
	if(!document.getElementById("bgm")){
		var sbm=document.createElement("audio");
		    sbm.setAttribute("id","bgm");
		    sbm.setAttribute("loop",true);
		    sbm.setAttribute("autoplay",true);
		    document.body.appendChild(sbm);
	}
	sbm.src=name+".mp3";

}
setAudio=function(name){
	var sa=document.createElement("audio");
	    sa.src=name+".mp3";
	    document.body.appendChild(sa);
	    sa.play();

}
setImg=function(name,id,div){
	var si=document.createElement("img");
	    si.setAttribute("id",id);
	    si.src=name+".jpg";
	    si.setAttribute("draggable",false);
	    if(div==undefined) document.body.appendChild(si);
	    else document.getElementById(div).appendChild(si);

}
setImgFun=function(id,funC){
	document.getElementById(id).addEventListener('click',eval(funC));
}
setInfo=function(info,id,div){
	var spi=document.createElement("p");
	    spi.setAttribute("id",id);
	    spi.innerHTML=info;
	    if(div==undefined) document.body.appendChild(spi);
	    else document.getElementById(div).appendChild(spi);
	    

}
addExp=function(num){
	exp+=num;
	if(exp>=50){
		exp-=50;
		lv++;
	}
	document.getElementById('level').innerHTML="经验："+exp+"/50<br/>";
	document.getElementById('lvImg').style.width=exp*6+"px";
	document.getElementById('lb').innerHTML=lv;

}
toast=function(info){
	setDiv('toastDiv');
	setInfo(info,'toast','toastDiv');
	setTimeout(function(){
		document.getElementById('toastDiv').remove();
	},1000);
}
outGame=function(){
	if(document.getElementById('out')) return false;
	setDiv('out');
	setButton('true','qr','out','outQr');
	setButton('false','qx','out','outQx');
}
outQr=function(){
	window.close();
}
outQx=function(){
	removeValue('out');
}
window.onload=function(){
	ui1();
	toast(按F11进入全屏模式！');

}

ui1=function(){
	setDiv("ui1");
	setImg('head','hi','ui1');
    setImgFun('hi','aaa');
	setImg('hp','hpImg','ui1');
	setImg('lv','lvImg','ui1');
	setButton('0','lb','ui1');
	setInfo('经验：0/50','level','ui1');



	setImg('c1','c1','ui1');
	setImg('c2','c2','ui1');
	setImg('c3','c3','ui1');
	setButton('out','tc','ui1','outGame');
	setButton('addLv','tt','ui1');
	setButton('card','bp','ui1');
	


}
aaa=function(){
	addExp(10);
}
