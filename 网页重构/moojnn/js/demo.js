window.onload = function(){
    var nav_pro_center = document.getElementsByClassName('nav_pro_center');
    var product_center_list = document.getElementById('product_center_list').getElementsByTagName('li');
    for(var i=0; i<product_center_list.length; i++){
        product_center_list[i].onmouseover = function(){
            nav_pro_center[0].setAttribute("id","nav_center_blue");
        }
    }
    for(var i=0; i<product_center_list.length; i++){
        product_center_list[i].onmouseout = function(){
            nav_pro_center[0].removeAttribute("id","nav_center_blue");
        }
    }
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

    /*-----------------------------------------product第四张图的hover效果*/
    var product_choice = document.getElementsByClassName('product_choice');
    var product_index = product_choice.length-1;
    product_choice[product_index-1].onmouseover = function(){
        product_choice[product_index].removeAttribute("id","product_hidden");
        this.setAttribute("id","product_hidden");
    }
    product_choice[product_index].onmouseout = function(){
        this.setAttribute("id","product_hidden");
        product_choice[product_index-1].removeAttribute("id","product_hidden");
    }

    /*---------------------------------------hover变换图片*/
    var tools_img = document.getElementsByClassName('tools_img');
    var tools_show = document.getElementsByClassName('tools_show');
    var tools_txt = document.getElementsByClassName('tools_txt');
    /*-*/
    function tools_img_style(index){
        for(var i=0; i<tools_img.length; i++){
            tools_img[i].style.display = 'none';
        }
        tools_img[index].style.display = 'block';
    }
    function tools_txt_style(index){
        for(var i=0; i<tools_img.length; i++){
            tools_txt[i].style.display = 'none';
        }
        tools_txt[index].style.display = 'block';
    }
    /*-*/
    tools_show[0].onmouseover = function(){
        tools_img_style(0);
        tools_txt_style(0);
    }
    tools_show[1].onmouseover = function(){
        tools_img_style(1);
        tools_txt_style(1);
    }
    tools_show[2].onmouseover = function(){
        tools_img_style(2);
        tools_txt_style(2);
    }
    tools_show[3].onmouseover = function(){
        tools_img_style(3);
        tools_txt_style(3);
    }
    tools_show[4].onmouseover = function(){
        tools_img_style(4);
        tools_txt_style(4);
    }
    tools_show[5].onmouseover = function(){
        tools_img_style(5);
        tools_txt_style(5);
    }

    //各个box的位置
    var left = 0;
    var select_box = document.getElementsByClassName('select_boxes_one')[0].getElementsByClassName('select_box');
    for(var i=0; i<select_box.length; i++){
        select_box[i].style.marginLeft = left + 'px';
        left = left + 305;
    }
    var left = 0;
    var select_box = document.getElementsByClassName('select_boxes_two')[0].getElementsByClassName('select_box');
    for(var i=0; i<select_box.length; i++){
        select_box[i].style.marginLeft = left + 'px';
        left = left + 305;
    }

    /*--------------------------------------hover变换文字*/
    var select_box_txt = document.getElementsByClassName('select_box_txt');
    var select_img = document.getElementsByClassName('select_img');
    var select_hover_txt = document.getElementsByClassName('select_hover_txt');
    var select_hover_layer = document.getElementsByClassName('select_hover_layer');
    function select_zoom_l(index){
        select_img[index].style.width = 305 + 'px';
        select_img[index].style.height = 180 + 'px';
    }
    function select_zoom_s(index){
        select_img[index].style.width = 285 + 'px';
        select_img[index].style.height = 160 + 'px';
    }
    function hide_select_box_txt(index){
        select_box_txt[index].setAttribute("id","select_hidden");
        select_hover_txt[index].removeAttribute("id","select_hidden");
    }
    function hide_select_hover_txt(index){
        select_hover_txt[index].setAttribute("id","select_hidden");
        select_box_txt[index].removeAttribute("id","select_hidden");
    }
    select_hover_layer[0].onmouseover = function(){
        hide_select_box_txt(0);
        select_zoom_l(0);
    }
    select_hover_layer[1].onmouseover = function(){
        hide_select_box_txt(1);
        select_zoom_l(1);
    }
    select_hover_layer[2].onmouseover = function(){
        hide_select_box_txt(2);
        select_zoom_l(2);
    }
    select_hover_layer[3].onmouseover = function(){
        hide_select_box_txt(3);
        select_zoom_l(3);
    }
    select_hover_layer[4].onmouseover = function(){
        hide_select_box_txt(4);
        select_zoom_l(4);
    }
    select_hover_layer[5].onmouseover = function(){
        hide_select_box_txt(5);
        select_zoom_l(5);
    }
    select_hover_layer[6].onmouseover = function(){
        hide_select_box_txt(6);
        select_zoom_l(6);
    }
    select_hover_layer[7].onmouseover = function(){
        hide_select_box_txt(7);
        select_zoom_l(7);
    }
    select_hover_layer[0].onmouseout = function(){
        hide_select_hover_txt(0);
        select_zoom_s(0);
    }
    select_hover_layer[1].onmouseout = function(){
        hide_select_hover_txt(1);
        select_zoom_s(1);
    }
    select_hover_layer[2].onmouseout = function(){
        hide_select_hover_txt(2);
        select_zoom_s(2);
    }
    select_hover_layer[3].onmouseout = function(){
        hide_select_hover_txt(3);
        select_zoom_s(3);
    }
    select_hover_layer[4].onmouseout = function(){
        hide_select_hover_txt(4);
        select_zoom_s(4);
    }
    select_hover_layer[5].onmouseout = function(){
        hide_select_hover_txt(5);
        select_zoom_s(5);
    }
    select_hover_layer[6].onmouseout = function(){
        hide_select_hover_txt(6);
        select_zoom_s(6);
    }
    select_hover_layer[7].onmouseout = function(){
        hide_select_hover_txt(7);
        select_zoom_s(7);
    }

    /*-------------------------------navigation轮播*/
    var navigation_box_txt = document.getElementsByClassName('navigation_box_txt');
    var navigation_box_subtxt = document.getElementsByClassName('navigation_box_subtxt');   
    var navigation_box = document.getElementsByClassName('navigation_box');
    var content_arrow = document.getElementsByClassName('content_arrow');
    var content_cur = 0;//当前图片indexs

    navigation_box[0].onclick = function(){
        content_cur=0;
        blue_on(0);
    }
    navigation_box[1].onclick = function(){
        content_cur=1;
        blue_on(1);
    }
    navigation_box[2].onclick = function(){
        content_cur=2;
        blue_on(2);
    }
    navigation_box[3].onclick = function(){
        content_cur=3;
        blue_on(3);
    }
    content_arrow[0],onclick = function(){
        content_last();
    }
    content_arrow[1],onclick = function(){
        content_next();
    }
    /*-*/

    function content_last(){
        var content_img_list = document.getElementsByClassName('content_img_ul')[0].getElementsByTagName('li'); 
        var len = content_img_list.length;
        for(var i=0; i<len; i++){
            content_img_list[i].removeAttribute("id","content_on");
        }
        content_img_list[content_cur].setAttribute("id","content_on");
        blue_on(content_cur);
        content_cur--;
        if(content_cur == -1 ){
            content_cur=len-1;
        }
    }

    function content_next(){
        var content_img_list = document.getElementsByClassName('content_img_ul')[0].getElementsByTagName('li'); 
        var len = content_img_list.length;
        for(var i=0; i<len; i++){
            content_img_list[i].removeAttribute("id","content_on");
        }
        content_img_list[content_cur].setAttribute("id","content_on");
        blue_on(content_cur);
        content_cur++;
        if(content_cur ==len ){
            content_cur=0;
        }
    }
    
    function blue_on(index){
        var navigation_box = document.getElementsByClassName('navigation_box');
        for(var j=0; j<navigation_box.length; j++){
           navigation_box[j].removeAttribute("id","blue");
        }
        navigation_box[index].setAttribute("id","blue"); 
    }
}