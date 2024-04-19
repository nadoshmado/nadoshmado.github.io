arr=new Array;
var kol=83;
for (i=0;i<kol;++i) arr[i]=0;
d=new Array;

for (i=0;i<kol;++i) d[i]=1;
var z=1;
var ready=0;

function show(x) 
{
if(ready){
	if(!arr[x]) 
	{
		arr[x]=1;
		try{var o=document.getElementById("s"+x); o.style.display='block';}catch(e){}
	}
	else
	{
		arr[x]=0;
		try{var o=document.getElementById("s"+x); o.style.display='none';}catch(e){}
	}
	  }
}

function showall()
{
if(ready){
	for(i=0;i<kol;++i) {arr[i]=0; show(i);}
	 }
}

function closeall()
{
	for(i=0;i<kol;++i) {arr[i]=1; show(i);}
}

function heare(x)
{	
	var o=document.getElementById("q"+x); o.style.display='block';
}

function theare(x)
{	
	if (d[x]) {var o=document.getElementById("q"+x); o.style.display='none'; }
}

function move(evt,a)
{
	if (d[a])
	{
		var x,y;
		if(document.all) {x=evt.offsetX+15; y=evt.offsetY+8;}
		else {x=evt.layerX+15; y=evt.layerY+8;}
		o=document.getElementById("q"+a); 
		o.style.top=y+'px';
		o.style.left=x+'px';
		o.style.zIndex=z;
		++z;
	}
		
}

function stop(x)
{
	(d[x])? d[x]=0: d[x]=1;
}

function clo(evt,a)
{
	
		o=document.getElementById("q"+a); o.style.display='none'; d[a]=1;
}