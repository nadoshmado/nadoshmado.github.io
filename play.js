
var x,y,x1,y1;
var q=0;
var g=0;
var s=0;
var r=1;
var a;
var j=14;
var ag=0;
var l=-1;
die0=0;
die1=0;

//var fso = new ActiveXObject("Scripting.FileSystemObject"); 


//function log()
//{
//	var file = fso.OpenTextFile("F:\\инет\\сайт\\test.txt",8);	
//	file.WriteLine('q='+q+' g='+g+' s='+s+' r='+r+' a='+a+' j='+j+' ag='+ag+' l='+l+' die0='+die0+' die1='+die1+' x='+x+' y='+y+' x1='+x1+' y1='+y1);
//	file.Close();
//}


function mmm(evt) {
	if (!ag) go(evt);
	else {
		if (ag==1) again(); --ag;
	}
}

function go(evt) {
	if(!ag) {
		o=document.getElementById("p");
		x=evt.clientX-((o.width)/2); if(x<0) {x=0;}
		y=evt.clientY-(o.height/2); if(y<0) {y=0;}
		x1=parseInt(o.style.left);
		y1=parseInt(o.style.top);
		if(!r) {
			o1=document.getElementById("r"+a);
			if(x1>parseInt(o1.style.left)) {
				x=parseInt(o1.style.left)+120; 
				l=1;
			}
			else {
				x=parseInt(o1.style.left)-190;
				if(x<0) x=0;
				l=0;
			}
		}
		if (x<x1) {
			if(!q) pov(); g=1; step1();
		}
		else {
			if(q) pov(); g=1; step();
		}
	}		
}

function step()
{	
	//alert('s'+' '+g+' x='+x+' x1='+x1+' y='+y+' y1='+y1);
	if(die0) return 1;
	if(x==x1&&y==y1) {
			if (!r) 
			{
				if((parseInt(o1.style.left)<parseInt(o.style.left)&&!q)||(parseInt(o1.style.left)>parseInt(o.style.left)&&q)) pov();
				(q)?o.setAttribute("src","giraffeeats\\jam.gif"):o.setAttribute("src","giraffeeats\\jam2.gif");
				window.setTimeout("eat()", 400);
				
			}
			else g=0;
			return 1; }
	if((x==x1)&&(!r)&&(l==1)) {pov();l=-1; die0=1; step1();}
	if(x1+30<x) x1+=30; else x1=x;
	if (y1<y) {if(y1+30<y) y1+=30; else y1=y;}
	else {if(y1-30>y) y1-=30; else y1=y;}
	o=document.getElementById("p");
	if (s) {o.setAttribute("src","giraffeeats\\go.gif"); s=0;}
	else {o.setAttribute("src","giraffeeats\\go1.gif"); s=1;}
	o.style.left=x1+'px';
	o.style.top=y1+'px';
	window.setTimeout("step()", 200);	
}

function step1()
{	
	//alert('s1'+' '+g+' x='+x+' x1='+x1+' y='+y+' y1='+y1);
	if (die1) return 1;
	o=document.getElementById("p");
	if(x==x1&&y==y1) { 
			if (!r) 
			{	
				if((parseInt(o1.style.left)<parseInt(o.style.left)&&!q)||(parseInt(o1.style.left)>parseInt(o.style.left)&&q)) pov();
				(q)?o.setAttribute("src","giraffeeats\\jam.gif"):o.setAttribute("src","giraffeeats\\jam2.gif");
				window.setTimeout("eat()", 400);
				
			}
			else g=0;
			return 1;}
	if((x==x1)&&(!r)&&(l==0)) {pov();l=-1; die1=1; step();}
	if(x1-30>x) x1-=30; else x1=x;
	if (y1<y) {if(y1+30<y) y1+=30; else y1=y;}
	else {if(y1-30>y) y1-=30; else y1=y;}
	if (s) {o.setAttribute("src","giraffeeats\\goc.gif"); s=0;}
	else {o.setAttribute("src","giraffeeats\\goc1.gif"); s=1;}
	o.style.left=x1+'px';
	o.style.top=y1+'px';
	window.setTimeout("step1()", 200);	
}

function eat() {
	//alert(a);
	o1.style.visibility='hidden';
	(q)?o.setAttribute("src","giraffeeats\\fat.gif"):o.setAttribute("src","giraffeeats\\fat2.gif");
	g=0;
	r=1;
	t=document.getElementById("te");
	t2=document.getElementById("te2");
	t.style.display='block';
	te2.style.display='none';
	--j;
	if(!j) {
		t.style.display='none';
		t2.style.display='block';
	}
}

function pov() {
	//alert('p'+q);
	o=document.getElementById("p");
	if (q) {
		o.setAttribute("src","giraffeeats\\go.gif");
		q=0;
	}
	else {
		o.setAttribute("src","giraffeeats\\goc.gif");
		q=1;
	}
}

function again() {
	q=0; g=0; s=0;
	r=1; j=1;
	for(i=0;i<14;++i) {
		o1=document.getElementById("r"+i); o1.style.visibility='visible';
	}
	g=0;
	j=14;
}
