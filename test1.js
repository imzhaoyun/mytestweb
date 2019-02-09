[bgm,lv,exp]=[true,0,0];
setButton=function(value,id,div){
	if(!document.getElementById(id)){
	var sba=document.createElement("input");
	    sba.type="button";
	    sba.setAttribute("value",value);
	    sba.setAttribute("id",id);
	}
	    if(div==undefined) document.body.appendChild(sba);
	    else document.getElementById(div).appendChild(sba);
}
setDiv=function(id,div,style){
	var sd=document.createElement("div");
	    sd.setAttribute("id",id);
	    sd.setAttribute("class",style);
	    if(div==undefined) document.body.appendChild(sd);
	    else document.getElementById(div).appendChild(sd);
	   

}

removeChild=function(id,div){
	if(div==undefined) document.body.removeChild(id);
	else document.getElementById(div).removeChild(id);

}

setImg=function(src,id,div,style){
	var si=document.createElement("img");
	    si.setAttribute("id",id);
	    si.setAttribute("class",style);
	    si.src=src+".jpg";
	    if(div==undefined) document.body.appendChild(si);
	    else document.getElementById(div).appendChild(si);

}

setImgFun=function(id,fun){
	document.getElementById(id).addEventListener("click",eval(fun));  
	
}

setBgm=function(name,type){
	if(type==undefined) var type="mp3";
	if(bgm==true){
		var sb=document.createElement("audio");
		    sb.setAttribute("id","bgm");
		    sb.setAttribute("autoplay",true);
		    sb.setAttribute("loop",true);
		    document.body.appendChild(sb);
		    bgm=false;
		}
		    sb.src=name+"."+type;

}

setAudio=function(name,type){
	if(type==undefined) var type="mp3";
	var sa=document.createElement("audio");
	    sa.src=name+"."+type;
	    sa.play();
	    document.body.appendChild(sa);


}

setP=function(info,id,div){
	if(!document.getElementById(id))
	{
	var sp=document.createElement("p");
	    sp.setAttribute("id",id);
	if(div==undefined) document.body.appendChild(sp);
	else document.getElementById(div).appendChild(sp);
    }
	    sp.innerHTML=info;

}

//50每级升级经验相同
addExp=function(num){
	exp+=num;
	if(exp>=50){
		exp-=50;
		lv++;
	}
	document.getElementById("level").innerHTML="经验："+exp+"/50<br/>";
	document.getElementById("lvImg").style.width=exp*6+"px";
    //300经验条宽度       exp/50*300 = exp*6

}

onload=function(){
	ui1();

}
//UI页面构建
ui1=function(){
	setDiv("ui1");

	setImg('head','hi','ui1');
	setImg('hp','hpImg','ui1');
	setImg('lv','lvImg','ui1');
	setButton('0','lb','ui1');


	setImg('c1','c1','ui1');
	setImg('c2','c2','ui1');
	setImg('c3','c3','ui1');
	setButton("退出",'tc','ui1');





}
