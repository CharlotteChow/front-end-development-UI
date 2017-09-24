window.onload = function(){
	
}

function get_url(index){
	if(index == 1){
		exc(1);
	}else if(index == 2){
		exc(2);
	}else if(index == 3){
		exc(3);
	}
}

function exc(index){
	var fr = document.getElementsByClassName('show_iframe')[0].getElementsByTagName('iframe');
	var t = document.getElementsByClassName('side_nav_contents')[0].getElementsByTagName('ul')[0].getElementsByTagName('li');
	for(var i=0; i<t.length; i++){
		t[i].getElementsByTagName('a')[0].setAttribute('class', '');
	}
	var url = index + ".html";
	fr[0].setAttribute("src",url);
	t[index-1].getElementsByTagName('a')[0].setAttribute('class', 'change_css');
}