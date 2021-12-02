var imgs=['black.png', 'blue.png', 'blue-2.png', 'blue-3.png', 'blue-4.png', 'fff.png', 'green.png', 'orange.png', 'red.png', 'yellow.png'];
var i=0;
var amount=document.getElementById('amount');
function clicks(e) {
	i++;
	amount.innerHTML=i;
	var img=document.createElement('img');
	var obj=document.getElementById('dot-object');
	var k=parseInt(Math.random()*imgs.length);
	var x=parseInt(Math.random()*(document.documentElement.clientWidth-180));
	var y=parseInt(Math.random()*(document.documentElement.clientHeight-180));
	img.setAttribute('src',imgs[k]);
	img.style.position='absolute';
	img.style.left=x+'px';
	img.style.top=y+'px';
	img.style.width='180px';
	document.body.append(img);
	obj.innerHTML=x+';'+y;
}

document.body.onmousemove=function(e) {
	var dot=document.getElementById('dot');
	var x=e.clientX;
	var y=e.clientY;
	dot.style.left=x+20+'px';
	dot.style.top=y+20+'px';
	dot.innerHTML=x+';'+y;
}