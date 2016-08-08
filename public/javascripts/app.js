window.onload=function(){
            var timer=null;
            var goTop=document.getElementById("goTop");
            goTop.onclick=function(){
                timer=setInterval(function(){
                    var top=document.body.scrollTop+document.documentElement.scrollTop;
                    var speed=top/5;
                    if(document.body.scrollTop){
                        document.body.scrollTop-=speed;
                    }
                    else{
                        document.documentElement.scrollTop-=speed;
                    }
                    if(top==0){
                        clearInterval(timer);
                    }
                },30);
            };
            window.onscroll=function()
            {
                if(document.body.scrollTop+document.documentElement.scrollTop>=500){
                    goTop.style.display="block";
                }
                else{
                    goTop.style.display="none";
                }
            };
	    window.onmousewheel=function(e)
        {
            if(e.wheelDelta<0) clearInterval(timer);
        };

    var oLeft = document.getElementById('left');
    var aSpan = oLeft.getElementsByTagName('span');
    var leftPos = [];
    var rightPos = [];
    var clientWidth = (document.documentElement.clientWidth || document.body.clientWidth) / 2;
    for(var i = 0;i < aSpan.length;i++){
        // aSpan[i].style.left = aSpan[i].offsetLeft + 'px';
        // aSpan[i].style.top = aSpan[i].offsetTop + 'px';
        leftPos[i]={left: aSpan[i].offsetLeft, top: aSpan[i].offsetTop};
    }
    for(var i = 0;i < aSpan.length;i++){
        aSpan[i].style.position = 'fixed';
        aSpan[i].style.margin = '0';
    }

    for(var i = 0;i < aSpan.length;i++){
        aSpan[i].style.left = clientWidth + 'px';
        aSpan[i].style.top = 0 + 'px';
    }
    for (var i = 0; i < aSpan.length; i++){
        startMove(aSpan[i],{left:leftPos[i].left,top:leftPos[i].top});
    }
    
    var oRight = document.getElementById('right');
    var aSpan = oRight.getElementsByTagName('span');
    for(var i = 0;i < aSpan.length;i++){
        // aSpan[i].style.left = aSpan[i].offsetLeft + 'px';
        // aSpan[i].style.top = aSpan[i].offsetTop + 'px';
        rightPos[i]={left: aSpan[i].offsetLeft, top: aSpan[i].offsetTop};
    }
    for(var i = 0;i < aSpan.length;i++){
        aSpan[i].style.position = 'fixed';
        aSpan[i].style.margin = '0';
    }
    for(var i = 0;i < aSpan.length;i++){
        aSpan[i].style.left = clientWidth + 'px';
        aSpan[i].style.top = 0 + 'px';
        startMove(aSpan[i],{left:rightPos[i].left,top:rightPos[i].top});
    }
    // var oSearch = document.getElementById('search');
    // oSearch.style.backgroundColor = "none";



};