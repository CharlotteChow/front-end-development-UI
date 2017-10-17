window.onload = function(){
    /*--------------------------------------------轮播图*/
    var skipper_cur = 0;
    var skipper_un =document.getElementsByClassName('skipper_un');
    var skipper_btn = document.getElementsByClassName('skipper_btn')[0].getElementsByTagName('li');
    var skippers = document.getElementsByClassName('skipper_wrapper')[0].getElementsByTagName('li');
    var sum = skippers.length;

    //点击圆点触发事件
    for(var i=0; i<skippers.length; i++){
       skipper_btn[i].onclick = function(){
            var index = parseInt(this.innerHTML);
            for(var j=0; j<skippers.length; j++){
            skippers[j].removeAttribute("id","skipper_on");
            }
            skippers[index-1].setAttribute("id","skipper_on"); 
            skipper_cur = index-1;
            light_on(skipper_cur);
       }
    }

    //hover在图片上静止
    skipper_un[0].onmouseover = function(){
        clearInterval(t);
    }
    skipper_un[0].onmouseout = function(){
        t = setInterval(function(){
            skipper_next();
        }, 2500);
    }
    //timer
    var t = setInterval(function(){
        skipper_next();
    }, 2500);

    //自动向下播放
    function skipper_next(){
        var skippers = document.getElementsByClassName('skipper_wrapper')[0].getElementsByTagName('li');
        for(var j=0; j<skippers.length; j++){
            skippers[j].removeAttribute("id","skipper_on");
        }
        skippers[skipper_cur].setAttribute("id","skipper_on");     
        light_on(skipper_cur);
        skipper_cur++;
        if(skipper_cur == sum){
            skipper_cur=0;
        }
    }

    //圆点点亮
    function light_on(index){
        var skipper_btn = document.getElementsByClassName('skipper_btn')[0].getElementsByTagName('li');
        for(var j=0; j<skippers.length; j++){
            skipper_btn[j].removeAttribute("id","skipper_btn_on");
        }
        skipper_btn[index].setAttribute("id","skipper_btn_on"); 
    }
}